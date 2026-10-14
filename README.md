# QuangMinh Locket 30s — cấu hình độc lập (THỬ NGHIỆM)

Đây là một dự án GitHub mới **hoàn toàn tách biệt** với `locket_shadow_by_quangminh`.

- Repository dự kiến: `https://github.com/anhyeuemnhieu2k6/quangminh-locket-30s`
- Link cấu hình dự kiến: `https://raw.githubusercontent.com/anhyeuemnhieu2k6/quangminh-locket-30s/main/Locket_30s.conf`
- Định dạng: **`.conf`**, nhập tại **Shadowrocket → Config** (không nhập ở mục Modules).
- Những đường dẫn `script-path` trong `.conf` đều tham chiếu đến **chính repository mới**.

> **QUAN TRỌNG:** Link trên chỉ hoạt động sau khi bạn tự tạo repository và tải file lên GitHub. Việc chỉnh Remote Config qua mạng **chưa được chứng minh** giúp camera Locket quay đủ 30 giây và gửi video có âm thanh. File `.conf` **không thay thế** trực tiếp `RemoteConfig.sqlite3` trong iPhone. Các cờ bổ sung có thể bị Locket bỏ qua nếu ứng dụng không đọc chúng từ phản hồi mạng.

## 1. Nội dung bộ ZIP

```text
Locket_30s.conf
README.md
js/
  Locket_30s_RC.js
  Locket_Gold.js
  Locket_Header.js
```

- `Locket_30s.conf`: cấu hình Shadowrocket độc lập (chỉ thử tính năng Locket).
- `js/Locket_30s_RC.js`: thử điều chỉnh cờ thời lượng video và âm thanh của Firebase Remote Config dựa trên SQLite bạn gửi.
- `js/Locket_Gold.js`: bản sao script Locket Gold từ bộ V6 do bạn cung cấp; không lấy từ repository cũ, không thay thế quyền mua Gold chính thức.
- `js/Locket_Header.js`: chỉ xử lý ETag với yêu cầu RevenueCat có User-Agent của Locket.

## 2. Tạo một repository GitHub hoàn toàn mới

1. Trên máy tính, đăng nhập tài khoản GitHub `anhyeuemnhieu2k6`.
2. Mở https://github.com/new.
3. Điền tên **`quangminh-locket-30s`**. Chọn **Public** để link Raw công khai truy cập được.
4. KHÔNG chọn tạo sẵn `README`, `.gitignore` hoặc license (vì ZIP đã có README).
5. Nhấn **Create repository**. Xác nhận bạn đang đứng ở repo `quangminh-locket-30s`, không phải repo cũ.
6. Giải nén ZIP vừa tải, chọn **uploading an existing file** tại trang repo mới (hoặc **Add file → Upload files**).
7. Kéo **`Locket_30s.conf`, `README.md` và cả thư mục `js`** vào khu vực Upload files. Đảm bảo các file JS có đường dẫn `js/...`.
8. Chọn nhánh **main**, nhập commit `Initial standalone Locket 30s test`, chọn **Commit changes**.
9. Mở `https://raw.githubusercontent.com/anhyeuemnhieu2k6/quangminh-locket-30s/main/Locket_30s.conf`; nếu hiện nội dung bắt đầu bằng `#!name=`, link đã được tạo.

Nếu GitHub không nhận kéo cả thư mục, tải hai file ở thư mục gốc trước. Sau đó vào repository mới, chọn **Add file → Create new file**, nhập `js/.gitkeep` để tạo thư mục `js`; rồi mở `js` → **Add file → Upload files** để tải 3 file `.js`. Có thể xóa `.gitkeep` sau.

## 3. Nhập vào Shadowrocket trên iPhone

1. Mở **Shadowrocket → Config / Cấu hình**, nhấn **+** và chọn nhập cấu hình từ URL.
2. Dán link Raw `.conf` ở đầu tài liệu, tải về, chọn profile `QuangMinh Locket 30s - Independent TEST`.
3. Chọn chế độ **Config**.
4. Để script HTTPS chạy, bật **HTTPS Decryption** cho *profile mới* và sử dụng chứng chỉ Shadowrocket được cài đặt và tin cậy trên thiết bị nếu bạn chấp nhận việc giải mã các tên miền chỉ định. Chỉ bật khi đã hiểu rủi ro bảo mật.
5. Đóng hẳn Locket, mở lại, quay thử trực tiếp vượt 10 giây; thử gửi và phát lại video trên thiết bị nhận để kiểm tra âm thanh.

**Để quay về như cũ:** Vào Shadowrocket → Config, chọn lại cấu hình All In One cũ. Không cần xóa hay sửa bất kỳ file nào trong GitHub cũ.

## 4. Lưu ý về kiểm tra

- Đây là **một profile `.conf` riêng**: Shadowrocket dùng một cấu hình chính tại một thời điểm. Khi bật profile thử nghiệm, các quy tắc proxy/dịch vụ khác của All In One **không được mang sang**.
- `[Rule] FINAL,DIRECT` trong bản thử nghiệm cho các kết nối đi trực tiếp. Nếu bạn cần proxy để truy cập mạng, hãy cấu hình riêng sau; bản này cố ý không phụ thuộc server từ dự án cũ.
- Cấu hình thử nghiệm chỉ giải mã `api.revenuecat.com` và `firebaseremoteconfig.googleapis.com`; không mở rộng giải mã tới các dịch vụ khác.
- Nếu file Raw bị `404`, kiểm tra tên repository, tên file, đúng nhánh `main`, và đúng thư mục `js`.
- Nếu vẫn quay được 10 giây, khả năng cao giới hạn nằm trong app hoặc cơ sở dữ liệu cục bộ, không xử lý được bằng `.conf` này.
- Chỉ kết luận thành công khi **quay quá 10 giây, gửi thành công, người nhận phát lại video có tiếng**.
