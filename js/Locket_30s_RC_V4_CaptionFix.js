// QuangMinh Locket 30s V4 CaptionFix - popup with user-supplied image hosted in the independent GitHub repo.
(function () {
  var url = ($request && $request.url) ? String($request.url) : "";
  if (!/^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\//.test(url)) {
    $done({});
    return;
  }
  try {
    var data = JSON.parse($response.body);
    if (!data || !data.entries || typeof data.entries !== "object" || Array.isArray(data.entries)) {
      $done({});
      return;
    }
    var entries = data.entries;
    var repoImage = "https://raw.githubusercontent.com/anhyeuemnhieu2k6/quangminh-locket-30s/main/popup_bike_v3.jpg";

    var boolKeys = [
      "internal_camera_roll_video_upload_enabled",
      "camera_roll_preview_enabled",
      "longer_video_enabled",
      "longer_videos_enabled",
      "video_sound_enabled",
      "camera_microphone_enabled",
      "microphone_enabled",
      "gold_member",
      "gold_membership"
    ];
    var durationKeys = ["gold_max_duration", "goldMaxDuration", "max_video_duration", "video_max_duration"];
    boolKeys.forEach(function (key) { entries[key] = "true"; });
    durationKeys.forEach(function (key) { entries[key] = "30.0"; });

    var desiredGates = {
      "camera_roll": "enabled",
      "longer_video": "enabled",
      "longerVideo": "enabled",
      "video": "enabled"
    };
    try {
      var fg = entries.feature_gates ? JSON.parse(entries.feature_gates) : {};
      if (fg && typeof fg === "object" && !Array.isArray(fg)) {
        Object.keys(desiredGates).forEach(function (key) { fg[key] = desiredGates[key]; });
        entries.feature_gates = JSON.stringify(fg);
      }
    } catch (e) {}

    try {
      var camera = entries.camera ? JSON.parse(entries.camera) : {};
      if (camera && typeof camera === "object" && !Array.isArray(camera)) {
        camera.gold_max_duration = 30;
        camera.goldMaxDuration = 30;
        entries.camera = JSON.stringify(camera);
      }
    } catch (e2) {}

    // V3 popup using the supplied bike image. Several likely image field names are set for compatibility.
    var welcome = {
      "tag": "LOCKET GOLD",
      "tag_gradient": true,
      "title": "Lên đời Gold rồi nha 😎",
      "subtitle": "Thử popup có ảnh riêng",
      "feature_set": [{
        "title": "QUANG MINH DZAIII QUAAAA",
        "body": "Popup đang thử hiển thị ảnh xe bạn gửi. Đồng thời giữ thử nghiệm 30 giây, video album và âm thanh.",
        "imageURL": repoImage,
        "imageUrl": repoImage,
        "image_url": repoImage,
        "heroImageUrl": repoImage,
        "hero_image_url": repoImage,
        "thumbnail_url": repoImage
      }],
      "imageURL": repoImage,
      "imageUrl": repoImage,
      "image_url": repoImage,
      "heroImageUrl": repoImage,
      "hero_image_url": repoImage,
      "campaign": "locket_gold_welcome_v3_bike_popup",
      "start_at": "2025-01-01T00:00:00",
      "end_at": "2030-12-31T23:59:59",
      "use_local_time_zone": true
    };
    entries.feature_discovery_popup_config = JSON.stringify(welcome);


    // === BEGIN CAPTION FIX: 100% data from Locket_Unlocked(1).js ===
    (function applyCaptionFix() {
      var sourceGroups = [{"section":"🎨 General","items":[{"overlay_id":"caption:standard","source":"local","caption":{"type":"standard"}},{"overlay_id":"caption:review","source":"local","caption":{"type":"review"}},{"overlay_id":"caption:music","source":"local","caption":{"type":"music"}},{"overlay_id":"caption:location","source":"local","caption":{"type":"location"}},{"overlay_id":"caption:weather","source":"local","caption":{"type":"weather"}},{"overlay_id":"caption:time","source":"local","caption":{"type":"time"}},{"overlay_id":"caption:streak","source":"local","caption":{"type":"streak"}},{"overlay_id":"caption:star_sign","source":"local","caption":{"type":"star_sign"}},{"overlay_id":"caption:poll","source":"local","caption":{"type":"poll"}},{"overlay_id":"caption:locket_count","source":"local","caption":{"type":"locket_count"}}]},{"section":"🎨 Holiday Caption","items":[{"overlay_id":"caption:halloween_2026","source":"remote","caption":{"background":{"colors":["#150804","#C8540D"]},"icon":{"data":"🎃","type":"emoji"},"max_lines":1,"text":"Halloween","localized_text":{"en":"Halloween","vn":"Halloween"},"text_color":"#FFB182","type":"static_content"}},{"overlay_id":"caption:autumn_2026","source":"remote","caption":{"background":{"colors":["#FFE0A0","#F6A53A"]},"icon":{"data":"🍂","type":"emoji"},"max_lines":1,"text":"Xin chào Mùa Thu","localized_text":{"en":"Xin chào Mùa Thu","vn":"Xin chào Mùa Thu"},"text_color":"#FFFFFF","type":"static_content"}},{"overlay_id":"caption:christmas_eve_2026","source":"remote","caption":{"background":{"colors":["#2FA85F","#176B3A"]},"icon":{"data":"🕯️","type":"emoji"},"max_lines":1,"text":"Giáng sinh an lành","localized_text":{"en":"Giáng sinh an lành","vn":"Giáng sinh an lành"},"text_color":"#FFFFFF","type":"static_content"}},{"overlay_id":"caption:christmas_day_2026","source":"remote","caption":{"background":{"colors":["#E53935","#A81818"]},"icon":{"data":"🎄","type":"emoji"},"max_lines":1,"text":"Giáng sinh an lành","localized_text":{"en":"Giáng sinh an lành","vn":"Giáng sinh an lành"},"text_color":"#FFFFFF","type":"static_content"}},{"overlay_id":"caption:new_years_eve_2026","source":"remote","caption":{"background":{"colors":["#FFC64B","#FFEDBF"]},"icon":{"data":"🥂","type":"emoji"},"max_lines":1,"text":"Xin chào 2027!","localized_text":{"en":"Xin chào 2027!","vn":"Xin chào 2027!"},"text_color":"#643F00","type":"static_content"}},{"overlay_id":"caption:new_years_day_2027","source":"remote","caption":{"background":{"colors":["#3B00EC","#823FFF"]},"icon":{"data":"💫","type":"emoji"},"max_lines":1,"text":"Xin chào 2027!","localized_text":{"en":"Xin chào 2027!","vn":"Xin chào 2027!"},"text_color":"#FFFFFF","type":"static_content"}},{"overlay_id":"caption:new_years_day_2027_alternate","source":"remote","caption":{"background":{"colors":["#FF0062","#FF783F"]},"max_lines":1,"text":"2027","text_color":"#FFFFFF","type":"static_content"}}]},{"section":"🎨 Decorative by Locket","items":[{"overlay_id":"caption:toi_nho_em","source":"remote","caption":{"background":{"colors":["#FFFFFF","#6D9EEB"]},"max_lines":1,"text":"보고 싶어 🥺","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:party_time","source":"remote","caption":{"background":{"colors":["#5EFFF5","#FCFF57"]},"icon":{"data":"🪩","type":"emoji"},"max_lines":1,"text":"Party Time!","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:good_morning","source":"remote","daily_start_hour":5,"daily_end_hour":10,"caption":{"background":{"colors":["#EF7402","#EABF0F"]},"icon":{"data":"☀️","type":"emoji"},"max_lines":1,"text":"Good morning","text_color":"#FFFFFFE5","type":"static_content"}},{"overlay_id":"caption:goodnight","source":"remote","daily_start_hour":19.5,"daily_end_hour":24,"caption":{"background":{"colors":["#370C6F","#575CD4"]},"icon":{"data":"🌙","type":"emoji"},"max_lines":1,"text":"Goodnight","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ootd","source":"remote","caption":{"background":{"colors":["#FFFFFF","#DBDBDB"]},"icon":{"data":"🕶","type":"emoji"},"max_lines":1,"text":"OOTD","text_color":"#101010E6","type":"static_content"}},{"overlay_id":"caption:miss_you","source":"remote","caption":{"background":{"colors":["#EC0C00","#FF493F"]},"icon":{"data":"🥰","type":"emoji"},"max_lines":1,"text":"Miss you","text_color":"#FFFFFFDB","type":"static_content"}}]},{"section":"🎨 Decorative by Quang Minh","items":[{"overlay_id":"caption:LOCKET GOLD FROM QUANG MINH WITH LOVE","source":"remote","caption":{"background":{"colors":["#B8E7FF","#A8F5D0","#DCCBFF"]},"max_lines":1,"text":"💻 QUANG MINH DZAI VCLL","text_color":"#183153","type":"static_content"}},{"overlay_id":"caption:feeling_cute","source":"remote","caption":{"background":{"colors":["#F8BBD0","#E91E63"]},"icon":{"data":"🌷","type":"emoji"},"max_lines":1,"text":"Feeling Cute","localized_text":{"en":"Feeling Cute","vn":"Cảm thấy dthw"},"text_color":"#FFFFFFE5","type":"static_content"}},{"overlay_id":"caption:cu","source":"remote","caption":{"background":{"colors":["#FFD6A5","#FFF1A8","#FFC4D6"]},"max_lines":1,"text":"Cu 🐎","text_color":"#633B24","type":"static_content"}},{"overlay_id":"caption:wedding_time","source":"remote","caption":{"background":{"colors":["#FFE4E1","#E73C7E"]},"icon":{"data":"💍","type":"emoji"},"max_lines":1,"text":"Wedding Time!","localized_text":{"en":"Wedding Time!","vn":"Đám cưới nè!"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:cam_thay_hanh_phuc","source":"remote","caption":{"background":{"colors":["#EC407A","#F8BBD0"]},"icon":{"data":"🇻🇳","type":"emoji"},"max_lines":1,"text":"Cảm thấy hạnh phúc","localized_text":{"en":"Feeling Happy","vn":"Cảm thấy hạnh phúc"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:coffee_time","source":"remote","caption":{"background":{"colors":["#4E342E","#8D6E63"]},"icon":{"data":"☕","type":"emoji"},"max_lines":1,"text":"Coffee Time!","localized_text":{"en":"Coffee Time!","vn":"Giờ uống cà phê!"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:snake_vibes","source":"remote","caption":{"background":{"colors":["#2E7D32","#66BB6A"]},"icon":{"data":"🐍","type":"emoji"},"max_lines":1,"text":"Snake Vibes","localized_text":{"en":"Snake Vibes","vn":"Chất rắn"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:mixue_time","source":"remote","caption":{"background":{"colors":["#FFF9C4","#F8BBD0"]},"icon":{"data":"🍦","type":"emoji"},"max_lines":1,"text":"Mixue Time!","localized_text":{"en":"Mixue Time!","vn":"Giờ Mixue!"},"text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:locket_time","source":"remote","caption":{"background":{"colors":["#ECEFF1","#B3E5FC"]},"icon":{"data":"📷","type":"emoji"},"max_lines":1,"text":"Locket Time!","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:cinema_time","source":"remote","caption":{"background":{"colors":["#1A237E","#455A64"]},"icon":{"data":"🎬","type":"emoji"},"max_lines":1,"text":"Cinema Time!","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:dating_time","source":"remote","caption":{"background":{"colors":["#E91E63","#F44336"]},"icon":{"data":"💕","type":"emoji"},"max_lines":1,"text":"Dating Time!","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:graduation_day","source":"remote","caption":{"background":{"colors":["#1A237E","#283593"]},"icon":{"data":"🎓","type":"emoji"},"max_lines":1,"text":"Happy Graduation Day!","localized_text":{"en":"Happy Graduation Day!","vn":"Chúc mừng tốt nghiệp!"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:shopping_time","source":"remote","caption":{"background":{"colors":["#B3E5FC","#FFFFFF"]},"icon":{"data":"🛍️","type":"emoji"},"max_lines":1,"text":"Shopping Time!","localized_text":{"en":"Shopping Time!","vn":"Giờ mua sắm!"},"text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:dinner_time","source":"remote","caption":{"background":{"colors":["#FFCCBC","#FF8A80"]},"icon":{"data":"🍽️","type":"emoji"},"max_lines":1,"text":"Dinner Time!","localized_text":{"en":"Dinner Time!","vn":"Giờ ăn tối!"},"text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:chilling_time","source":"remote","caption":{"background":{"colors":["#E1BEE7","#F8BBD0"]},"icon":{"data":"🌴","type":"emoji"},"max_lines":1,"text":"Chilling Time!","localized_text":{"en":"Chilling Time!","vn":"Giờ thư giãn!"},"text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Độc lạ","items":[{"overlay_id":"caption:xin_vinh_biet_cu","source":"remote","caption":{"background":{"colors":["#232526","#414345"]},"icon":{"data":"🕯️","type":"emoji"},"max_lines":1,"text":"Xin vĩnh biệt cụ","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:chay_ngay_di","source":"remote","caption":{"background":{"colors":["#D31027","#EA384D"]},"icon":{"data":"🏃💨","type":"emoji"},"max_lines":1,"text":"Chạy ngay đi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:cu_tu_tu_khoai_se_nhu","source":"remote","caption":{"background":{"colors":["#56AB2F","#A8E063"]},"icon":{"data":"🥔","type":"emoji"},"max_lines":1,"text":"Cứ từ từ khoai sẽ nhừ","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:kiem_tra_nhan_pham","source":"remote","caption":{"background":{"colors":["#654EA3","#EAAFC8"]},"icon":{"data":"🎲","type":"emoji"},"max_lines":1,"text":"Kiểm tra nhân phẩm","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:doc_so_tai_khoan","source":"remote","caption":{"background":{"colors":["#1E90FF","#00D4FF"]},"icon":{"data":"💳","type":"emoji"},"max_lines":1,"text":"đọc số tài khoản","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ai_so_thi_di_ve","source":"remote","caption":{"background":{"colors":["#B71C1C","#FF5722"]},"icon":{"data":"🏃","type":"emoji"},"max_lines":1,"text":"ai sợ thì đi về","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:con_cai_nit","source":"remote","caption":{"background":{"colors":["#D7CCC8","#8D6E63"]},"icon":{"data":"🧶","type":"emoji"},"max_lines":1,"text":"còn cái nịt","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:canh_bao_co_hat","source":"remote","caption":{"background":{"colors":["#9C27B0","#E91E63"]},"icon":{"data":"🎤","type":"emoji"},"max_lines":1,"text":"cảnh báo có hát","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:than_chua_ma_don","source":"remote","caption":{"background":{"colors":["#607D8B","#37474F"]},"icon":{"data":"😔","type":"emoji"},"max_lines":1,"text":"Thân chưa mà dỡn","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ai_muon","source":"remote","caption":{"background":{"colors":["#E91E63","#F44336"]},"icon":{"data":"🤔","type":"emoji"},"max_lines":1,"text":"Ai mượn?","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:hay_ra_de_qua_a","source":"remote","caption":{"background":{"colors":["#FFF59D","#80DEEA"]},"icon":{"data":"🥺","type":"emoji"},"max_lines":1,"text":"Hay ra dẻ quá à!","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:giam_suc_manh_con_tuong","source":"remote","caption":{"background":{"colors":["#4CAF50","#00BCD4"]},"icon":{"data":"🎮","type":"emoji"},"max_lines":1,"text":"Giảm sức mạnh con tướng","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:mac_co_qua_hai_oi","source":"remote","caption":{"background":{"colors":["#FFB74D","#F8BBD0"]},"icon":{"data":"😭","type":"emoji"},"max_lines":1,"text":"Mắc cỡ quá hai ơi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:minh_la_lop","source":"remote","caption":{"background":{"colors":["#263238","#455A64"]},"icon":{"data":"🛞","type":"emoji"},"max_lines":1,"text":"Mình là lốp","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:dep_trai_co_gi_sai","source":"remote","caption":{"background":{"colors":["#FF5722","#FFC107"]},"icon":{"data":"😎","type":"emoji"},"max_lines":1,"text":"Đẹp trai có gì sai","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:mong_ton_hoa_sen","source":"remote","caption":{"background":{"colors":["#D8B4E2","#F8BBD0"]},"icon":{"data":"🪷","type":"emoji"},"max_lines":1,"text":"Mong tôn hoa sen thấy cảnh này","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:dam_nhau_khong","source":"remote","caption":{"background":{"colors":["#E53935","#FF7043"]},"icon":{"data":"🥊","type":"emoji"},"max_lines":1,"text":"đấm nhau không","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:sieu_cap_ba_khi","source":"remote","caption":{"background":{"colors":["#EC407A","#F44336"]},"icon":{"data":"🐉","type":"emoji"},"max_lines":1,"text":"siêu cấp bá khí","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:du_an_ma","source":"remote","caption":{"background":{"colors":["#263238","#455A64"]},"icon":{"data":"👻","type":"emoji"},"max_lines":1,"text":"dự án ma","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Trend TikTok","items":[{"overlay_id":"caption:hoi_chieu_troi_mua","source":"remote","caption":{"background":{"colors":["#546E7A","#263238"]},"icon":{"data":"🌧️","type":"emoji"},"max_lines":1,"text":"Hồi chiều trời mưa...","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:tuyet_doi_khong_nghe","source":"remote","caption":{"background":{"colors":["#FF416C","#FF4B2B"]},"icon":{"data":"🙉","type":"emoji"},"max_lines":1,"text":"Tuyệt đối không nghe","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:flex_den_hoi_tho_cuoi","source":"remote","caption":{"background":{"colors":["#F7971E","#FFD200"]},"icon":{"data":"💎","type":"emoji"},"max_lines":1,"text":"Flex đến hơi thở cuối","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:overthinking_vai_chuong","source":"remote","caption":{"background":{"colors":["#2C3E50","#4CA1AF"]},"icon":{"data":"🤯","type":"emoji"},"max_lines":1,"text":"Overthinking vai chưởng","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ke_chuyen_nghe_choi","source":"remote","caption":{"background":{"colors":["#8A2387","#E94057"]},"icon":{"data":"🍿","type":"emoji"},"max_lines":1,"text":"Kể chuyện nghe chơi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:xinh_dep_tuyet_voi","source":"remote","caption":{"background":{"colors":["#FC5C7D","#6A82FB"]},"icon":{"data":"💅","type":"emoji"},"max_lines":1,"text":"Xinh đẹp tuyệt vời","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:tram_cam_nhe","source":"remote","caption":{"background":{"colors":["#1F1C2C","#928DAB"]},"icon":{"data":"🫠","type":"emoji"},"max_lines":1,"text":"Trầm cảm nhẹ","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:chua_du_wow","source":"remote","caption":{"background":{"colors":["#FF5349","#EB0C00"]},"icon":{"data":"⭐","type":"emoji"},"max_lines":1,"text":"Chưa đủ wow","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:boc_trung_sit_rit","source":"remote","caption":{"background":{"colors":["#9C27B0","#7B1FA2"]},"icon":{"data":"🎁","type":"emoji"},"max_lines":1,"text":"Bóc trúng sít rịt","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:hen_lam_moi_xui_duoc_vay_a","source":"remote","caption":{"background":{"colors":["#00BCD4","#0097A7"]},"icon":{"data":"😅","type":"emoji"},"max_lines":1,"text":"Hèn lắm mới xui được vậy á","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ra_duong_ne_moi_anh","source":"remote","caption":{"background":{"colors":["#2196F3","#1976D2"]},"icon":{"data":"👤","type":"emoji"},"max_lines":1,"text":"Ra đường nể mỗi anh","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:cung_cung_di","source":"remote","caption":{"background":{"colors":["#FFC107","#FFA000"]},"icon":{"data":"🚀","type":"emoji"},"max_lines":1,"text":"Cũng cứng đi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:tuyet_doi_dien_anh","source":"remote","caption":{"background":{"colors":["#455A64","#263238"]},"icon":{"data":"📷","type":"emoji"},"max_lines":1,"text":"Tuyệt đối điện ảnh","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:du_ba_khi_chua","source":"remote","caption":{"background":{"colors":["#FF5722","#E64A19"]},"icon":{"data":"⚡","type":"emoji"},"max_lines":1,"text":"Đủ bá khí chưa","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ua_alo","source":"remote","caption":{"background":{"colors":["#9C27B0","#7B1FA2"]},"icon":{"data":"❓","type":"emoji"},"max_lines":1,"text":"Ủa alo?","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:cai_gi_vay_troi","source":"remote","caption":{"background":{"colors":["#F44336","#D32F2F"]},"icon":{"data":"❗","type":"emoji"},"max_lines":1,"text":"Cái gì vậy trời","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:nay_la_het_cuu","source":"remote","caption":{"background":{"colors":["#607D8B","#455A64"]},"icon":{"data":"❌","type":"emoji"},"max_lines":1,"text":"Này là hết cứu","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:qua_la_dien_anh","source":"remote","caption":{"background":{"colors":["#26A69A","#00897B"]},"icon":{"data":"📷","type":"emoji"},"max_lines":1,"text":"Quá là điện ảnh","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Meme vui nhộn","items":[{"overlay_id":"caption:cuoi_xiu","source":"remote","caption":{"background":{"colors":["#FFEB3B","#FF9800"]},"icon":{"data":"😎","type":"emoji"},"max_lines":1,"text":"Cười xỉu","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:toang_that_roi","source":"remote","caption":{"background":{"colors":["#F44336","#B71C1C"]},"icon":{"data":"🐉","type":"emoji"},"max_lines":1,"text":"Toang thật rồi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:toi_roi_toi_roi","source":"remote","caption":{"background":{"colors":["#673AB7","#512DA8"]},"icon":{"data":"❗","type":"emoji"},"max_lines":1,"text":"Tới rồi tới rồi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:khong_the_tin_noi","source":"remote","caption":{"background":{"colors":["#00BCD4","#0097A7"]},"icon":{"data":"❓","type":"emoji"},"max_lines":1,"text":"Không thể tin nổi","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Đời sống","items":[{"overlay_id":"caption:ngay_moi_vui_ve","source":"remote","caption":{"background":{"colors":["#4CAF50","#2E7D32"]},"icon":{"data":"☀️","type":"emoji"},"max_lines":1,"text":"Ngày mới vui vẻ","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ngu_ngon","source":"remote","caption":{"background":{"colors":["#3F51B5","#1A237E"]},"icon":{"data":"🌙","type":"emoji"},"max_lines":1,"text":"Ngủ ngon","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:an_com_chua","source":"remote","caption":{"background":{"colors":["#FF9800","#F57C00"]},"icon":{"data":"🍽️","type":"emoji"},"max_lines":1,"text":"Ăn cơm chưa?","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:di_choi_khong","source":"remote","caption":{"background":{"colors":["#E91E63","#C2185B"]},"icon":{"data":"✈️","type":"emoji"},"max_lines":1,"text":"Đi chơi không?","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Gen Z Slay","items":[{"overlay_id":"caption:tinh_hoa_hoi_tu","source":"remote","caption":{"background":{"colors":["#FFD700","#FF8C00"]},"icon":{"data":"✨","type":"emoji"},"max_lines":1,"text":"Tinh hoa hội tụ","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:phu_tinh_khong_phu_ban","source":"remote","caption":{"background":{"colors":["#8E2DE2","#4A00E0"]},"icon":{"data":"🕶️","type":"emoji"},"max_lines":1,"text":"Phụ tình không phụ bản","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:ngoan_xinh_yeu","source":"remote","caption":{"background":{"colors":["#FFAFBD","#FFC3A0"]},"icon":{"data":"🌸","type":"emoji"},"max_lines":1,"text":"Ngoan xinh yêu của ai?","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:nhin_la_biet_uy_tin","source":"remote","caption":{"background":{"colors":["#2980B9","#2C3E50"]},"icon":{"data":"👌","type":"emoji"},"max_lines":1,"text":"Nhìn là biết uy tín","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Bất ổn & Khó đỡ","items":[{"overlay_id":"caption:luon_vui_tuoi","source":"remote","caption":{"background":{"colors":["#00F2FE","#4FACFE"]},"icon":{"data":"🤡","type":"emoji"},"max_lines":1,"text":"Luôn vui tươi","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:bat_on_that_su","source":"remote","caption":{"background":{"colors":["#636363","#A2AB58"]},"icon":{"data":"🫠","type":"emoji"},"max_lines":1,"text":"Bất ổn thật sự","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:khong_cam_xuc","source":"remote","caption":{"background":{"colors":["#434343","#000000"]},"icon":{"data":"🗿","type":"emoji"},"max_lines":1,"text":"Không cảm xúc","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:phu_huynh_dung_xem","source":"remote","caption":{"background":{"colors":["#FF0844","#FFB199"]},"icon":{"data":"🙈","type":"emoji"},"max_lines":1,"text":"Phụ huynh đừng xem","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Check VAR & Hóng hớt","items":[{"overlay_id":"caption:check_var","source":"remote","caption":{"background":{"colors":["#11998E","#38EF7D"]},"icon":{"data":"📺","type":"emoji"},"max_lines":1,"text":"Check VAR liền","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:qua_nhieu_su_de_thuong","source":"remote","caption":{"background":{"colors":["#F38181","#FCE38A"]},"icon":{"data":"🎀","type":"emoji"},"max_lines":1,"text":"Quá nhiều sự dễ thương","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:mac_bay_tinh_yeu","source":"remote","caption":{"background":{"colors":["#EE9CA7","#FFDDE1"]},"icon":{"data":"💘","type":"emoji"},"max_lines":1,"text":"Mắc bẫy tình yêu","text_color":"#000000E6","type":"static_content"}},{"overlay_id":"caption:song_gio_phu_doi_trai","source":"remote","caption":{"background":{"colors":["#3A1C71","#D76D77"]},"icon":{"data":"🌪️","type":"emoji"},"max_lines":1,"text":"Sóng gió phủ đời trai","text_color":"#FFFFFFE6","type":"static_content"}}]},{"section":"🌸 Góc Deadline & Đi Làm","items":[{"overlay_id":"caption:deadline_ruot","source":"remote","caption":{"background":{"colors":["#ED213A","#93291E"]},"icon":{"data":"🔥","type":"emoji"},"max_lines":1,"text":"Deadline dí tụt quần","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:tien_dau_ma_tieu","source":"remote","caption":{"background":{"colors":["#11998E","#38EF7D"]},"icon":{"data":"💸","type":"emoji"},"max_lines":1,"text":"Tiền đâu mà tiêu","text_color":"#FFFFFFE6","type":"static_content"}},{"overlay_id":"caption:nghien_cuu_khoa_hoc","source":"remote","caption":{"background":{"colors":["#0F2027","#2C5364"]},"icon":{"data":"☕","type":"emoji"},"max_lines":1,"text":"Cần nạp cafein gấp","text_color":"#FFFFFFE6","type":"static_content"}}]}];
      function norm(value) {
        return String(value == null ? "" : value).replace(/\s+/g, " ").trim().toLowerCase();
      }
      function textOf(item) {
        if (!item || typeof item !== "object" || !item.caption) return "";
        return typeof item.caption.text === "string" ? norm(item.caption.text) : "";
      }
      var existing = [];
      if (typeof entries.overlay_items === "string" && entries.overlay_items.trim()) {
        try {
          existing = JSON.parse(entries.overlay_items);
          if (!Array.isArray(existing)) {
            console.log("[V4 CaptionFix] overlay_items is not an array; leaving unchanged");
            return;
          }
        } catch (err) {
          console.log("[V4 CaptionFix] Invalid overlay_items; leaving unchanged: " + err);
          return;
        }
      } else if (Array.isArray(entries.overlay_items)) {
        existing = entries.overlay_items;
      }
      var ids = Object.create(null), texts = Object.create(null), types = Object.create(null);
      var sections = Object.create(null);
      existing.forEach(function (group) {
        if (!group || !Array.isArray(group.items)) return;
        var key = norm(group.section);
        if (key && !sections[key]) sections[key] = group;
        group.items.forEach(function (item) {
          if (!item || typeof item !== "object") return;
          var id = norm(item.overlay_id), tx = textOf(item);
          if (id) ids[id] = item;
          if (tx) texts[tx] = true;
          if (item.caption && item.caption.type && !tx && item.source === "local") {
            types[String(item.caption.type)] = true;
          }
        });
      });
      // Preserve deliberate text variants in the source (for example, two Christmas styles).
      var sourceTextFrequency = Object.create(null);
      sourceGroups.forEach(function (group) {
        group.items.forEach(function (item) {
          var text = textOf(item);
          if (text) sourceTextFrequency[text] = (sourceTextFrequency[text] || 0) + 1;
        });
      });
      var added = 0, skipped = 0, corrected = 0;
      sourceGroups.forEach(function (group) {
        var key = norm(group.section);
        var destination = sections[key] || null;
        group.items.forEach(function (sourceItem) {
          var id = norm(sourceItem.overlay_id);
          var tx = textOf(sourceItem);
          var old = ids[id];
          if (old) {
            // Correction of the one confirmed wrong V4 caption, without touching other existing captions.
            if (id === "caption:locket gold from quang minh with love" &&
                textOf(old) === norm("💻 duyvinh09")) {
              old.caption = JSON.parse(JSON.stringify(sourceItem.caption));
              corrected++;
            } else {
              skipped++;
            }
            return;
          }
          var dynamicType = (!tx && sourceItem.source === "local" && sourceItem.caption) ? String(sourceItem.caption.type || "") : "";
          if ((tx && texts[tx] && sourceTextFrequency[tx] === 1) || (dynamicType && types[dynamicType])) {
            skipped++;
            return;
          }
          if (!destination) {
            destination = {section: group.section, items: []};
            existing.push(destination);
            sections[key] = destination;
          }
          var copy = JSON.parse(JSON.stringify(sourceItem));
          destination.items.push(copy);
          if (id) ids[id] = copy;
          if (tx) texts[tx] = true;
          if (dynamicType) types[dynamicType] = true;
          added++;
        });
      });
      entries.overlay_items = JSON.stringify(existing);
      // Caption-specific feature flags are present in the user's latest source script.
      entries.overlay_navigator_enabled = "true";
      entries.captions_enabled = "true";
      entries.music_caption_enabled = "true";
      entries.music_caption_song_preview_enabled = "true";
      entries.link_caption_link_enabled = "true";
      var dynamic = ["standard", "location", "weather", "time"];
      try {
        var priorDynamic = entries.overlay_dynamic_captions ? JSON.parse(entries.overlay_dynamic_captions) : [];
        if (Array.isArray(priorDynamic)) {
          dynamic.forEach(function (type) { if (priorDynamic.indexOf(type) === -1) priorDynamic.push(type); });
          dynamic = priorDynamic;
        }
      } catch (err2) {}
      entries.overlay_dynamic_captions = JSON.stringify(dynamic);
      try {
        var cfg = entries.overlays_v2_config ? JSON.parse(entries.overlays_v2_config) : {};
        if (cfg && typeof cfg === "object" && !Array.isArray(cfg)) {
          cfg.suggestions_enabled = true;
          entries.overlays_v2_config = JSON.stringify(cfg);
        }
      } catch (err3) {}
      console.log("[V4 CaptionFix] added=" + added + ", skipped=" + skipped + ", corrected=" + corrected);
    })();
    // === END CAPTION FIX ===

    $done({ body: JSON.stringify(data) });
  } catch (err) {
    console.log("[Locket V4] Leaving original response unchanged: " + String(err));
    $done({});
  }
})();
