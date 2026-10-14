// QuangMinh - Locket response script (V6 - app-scoped)
// Chinh sua tu file do nguoi dung cung cap.
// Chi su dung trong moi truong va voi du lieu ban co quyen thu nghiem.

const mapping = {
  Locket: ["Gold"]
};

const ua = ($request && $request.headers &&
  ($request.headers["User-Agent"] || $request.headers["user-agent"])) || "";
const isLocketRequest = /locket/i.test(String(ua));

if (!isLocketRequest) {
  // Không thay đổi phản hồi của ứng dụng khác hoặc User-Agent không xác định.
  $done({});
} else {
try {
  const obj = JSON.parse($response.body);
  if (!obj || !obj.subscriber || typeof obj.subscriber !== "object") {
    throw new Error("Missing subscriber object");
  }
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};

  obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

  const quangminh2806 = {
    auto_resume_date: null,
    display_name: "locket_1600_1y",
    is_sandbox: true,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    management_url: "https://apps.apple.com/account/subscriptions",
    period_type: "normal",
    price: { amount: 399000.0, currency: "VND" },
    expires_date: "9999-06-28T10:10:14Z",
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2006-06-28T10:10:15Z",
    purchase_date: "2006-06-28T10:10:14Z",
    store: "app_store",
    store_transaction_id: "2000001108724193"
  };

  const locketGold = {
    grace_period_expires_date: null,
    purchase_date: "2006-06-28T10:10:14Z",
    product_identifier: "locket_1600_1y",
    expires_date: "9999-06-28T10:10:14Z"
  };

  const match = Object.keys(mapping).find(name => ua.includes(name));
  if (match) {
    const [entitlement, alternativeProductId] = mapping[match];
    if (alternativeProductId) {
      locketGold.product_identifier = alternativeProductId;
      obj.subscriber.subscriptions[alternativeProductId] = quangminh2806;
    } else {
      obj.subscriber.subscriptions["locket_1600_1y"] = quangminh2806;
    }
    obj.subscriber.entitlements[entitlement] = locketGold;
  } else {
    obj.subscriber.subscriptions["locket_1600_1y"] = quangminh2806;
    obj.subscriber.entitlements.pro = locketGold;
  }

  $done({ body: JSON.stringify(obj) });
} catch (err) {
  // Neu response khong dung dinh dang mong doi thi giu nguyen de tranh lam hong ket noi.
  console.log("[QuangMinh V5] Response not rewritten: " + err.message);
  $done({ body: $response.body });
}

}
