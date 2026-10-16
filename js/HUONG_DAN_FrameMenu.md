# QuangMinh V4 Frame Holiday Menu TEST

Mục tiêu: thử làm xuất hiện lựa chọn **Khung tiện ích ngày lễ** trong hồ sơ Locket, và áp dụng khung tim hồng trên widget.

Chỉ thêm 2 file mới vào GitHub `anhyeuemnhieu2k6/quangminh-locket-30s`:

1. `Locket_30s_V4_FrameMenu_TEST.conf` – thư mục gốc.
2. `js/Locket_30s_RC_V4_FrameMenu_TEST.js` – thư mục `js`.

Bản này dùng ảnh `frame_pink_heart_v1.png` đã có ở thư mục gốc; KHÔNG cần tải ảnh lại.
Giữ nguyên toàn bộ V4/V4 CaptionFix/FramePink FIX và repository All In One cũ.

**Đường dẫn Shadowrocket (chỉ có sau khi commit cả hai file)**:
https://raw.githubusercontent.com/anhyeuemnhieu2k6/quangminh-locket-30s/main/Locket_30s_V4_FrameMenu_TEST.conf

## Lý do thử
File `RemoteConfig(2).sqlite3` do bạn cung cấp có các khóa `widget_frame_event_show_in_profile`, `widget_frame_event_profile_menu`, `widget_frame_events_profile_menu`, `widget_frame_profile_menu`, `holiday_theme_profile_menu`, `event_theme_profile_menu`, và các cờ bật frame. FramePink FIX trước đó chưa bổ sung đầy đủ nhóm menu này. V4 FrameMenu TEST chỉ thêm các giá trị đó, giữ nguyên phần còn lại.

Trong mã nhị phân IPA có chuỗi `Holiday widget frames` và các tên khóa như `custom_widget_frames_unlocked`, `widget_frame_events_disabled` và `widget_frame_event`, nhưng KHÔNG tìm thấy một số tên khóa `*_profile_menu` trong mã. Vì thế đây là thử nghiệm; không có bằng chứng bảo đảm app hiện menu chỉ bằng việc thêm các cờ đó.

## Cách thử
- Cập nhật hai file lên nhánh `main` và Commit.
- Vào Shadowrocket > Cấu hình > + > Nhập URL -> tải bản FrameMenu TEST, chọn sử dụng.
- Bật kết nối, bảo đảm HTTPS Decryption đang hoạt động như ảnh bạn đã kiểm tra.
- Mở Locket > Hồ sơ > phần giao diện/tiện ích để tìm mục **Khung tiện ích ngày lễ**.
- Mở Locket widget ngoài màn hình chính, kiểm tra có khung hồng không.
- Trong Shadowrocket > Dữ liệu, xác minh có yêu cầu Firebase mới ghi MITM trong lần thử. MITM chưa chứng minh script đã chạy hoặc app đã kích hoạt dữ liệu.

Nếu Locket không gọi lại Remote Config, file .conf không thể cưỡng bức widget cập nhật ngay. Nếu vẫn không có menu, khả năng cao UI bị chi phối bởi mã ứng dụng hoặc trạng thái nội bộ/tài khoản, không khắc phục bằng việc thêm các khóa chưa được nhận diện.
