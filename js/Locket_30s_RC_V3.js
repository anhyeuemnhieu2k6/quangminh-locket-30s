// QuangMinh Locket 30s V3 - popup with user-supplied image hosted in the independent GitHub repo.
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
        "title": "Đã kích hoạt Gold!",
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

    $done({ body: JSON.stringify(data) });
  } catch (err) {
    console.log("[Locket V3] Leaving original response unchanged: " + String(err));
    $done({});
  }
})();
