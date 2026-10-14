# QuangMinh Locket 30s V2 — độc lập, thử nghiệm

**KHÔNG ghi đè V1 và KHÔNG thay đổi `locket_shadow_by_quangminh`.**

Dự án hiện tại: `anhyeuemnhieu2k6/quangminh-locket-30s` (cũng chính là repository mới bạn vừa tạo).

## Chỉ tải thêm HAI file

- `Locket_30s_V2.conf` → thư mục **gốc** của repository `quangminh-locket-30s`.
- `js/Locket_30s_RC_V2.js` → thư mục **js** trong repository.

Giữ lại các file V1 `Locket_30s.conf`, `js/Locket_30s_RC.js`, `js/Locket_Gold.js`, `js/Locket_Header.js`. V2 tham chiếu tới **Gold và Header của repo mới** mà bạn đã tải lên, KHÔNG tham chiếu repository cũ.

## Link V2

`https://raw.githubusercontent.com/anhyeuemnhieu2k6/quangminh-locket-30s/main/Locket_30s_V2.conf`

Link có hiệu lực sau khi bạn commit HAI file mới lên GitHub nhánh `main`.

## V2 thử nghiệm gì?

- Giữ các cờ `longer_video_enabled`, `longer_videos_enabled` và các khóa giới hạn 30 giây từ SQLite.
- Bật `internal_camera_roll_video_upload_enabled` và `camera_roll_preview_enabled`; giữ các cờ `camera_roll`, `video`, `longer_video` và `longerVideo` trong `feature_gates`.
- Bật `video_sound_enabled`, `camera_microphone_enabled`, `microphone_enabled`.
- Thêm `feature_discovery_popup_config` với nội dung **“Lên đời Gold rồi nha 😎”**, lấy trực tiếp từ file SQLite bạn cung cấp.
- V2 **không chỉnh sửa file SQLite trên iPhone**; các cờ không đảm bảo camera quay đúng 30 giây, gửi video từ thư viện thành công, âm thanh hoạt động hay popup chắc chắn xuất hiện.
- Popup chỉ là thành phần hiển thị, **không phải xác nhận đăng ký Locket Gold chính thức**. Script Gold/Header giữ nguyên như V1; V2 không bổ sung logic tạo quyền mới.

## Cài đặt

1. Trên GitHub repo mới, ở trang gốc chọn **Add file → Upload files**, tải `Locket_30s_V2.conf`, chọn **Commit changes**.
2. Vào thư mục `js`, chọn **Add file → Upload files**, tải `Locket_30s_RC_V2.js`, chọn **Commit changes**.
3. Mở link Raw V2 phía trên trong trình duyệt. Nếu thấy văn bản bắt đầu bằng `#!name=`, link đã sẵn sàng.
4. Shadowrocket → **Config → + → Download from URL** → nhập URL V2 → chọn profile mới.
5. Chỉ bật HTTPS Decryption đối với hai tên miền ghi trong `[MITM]` nếu bạn hiểu việc giải mã kết nối HTTPS. Mở Locket và kiểm tra quay trực tiếp, âm thanh và chọn video từ album. Để xác nhận **đăng video thành công**, kiểm tra trên thiết bị người nhận.
6. Nếu lỗi, chỉ cần chọn lại `Locket_30s.conf` V1 hoặc All In One ở Shadowrocket; không xóa hay thay đổi file cũ.

**Lưu ý:** Một file `.conf` riêng là một **cấu hình chính**, không phải module chồng trên All In One. Có thể chọn một cấu hình đang dùng tại một thời điểm.
