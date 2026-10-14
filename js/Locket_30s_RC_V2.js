// QuangMinh Locket 30s V2 - experimental Remote Config overlay, 2026-10-14.
// Data extracted from user-supplied RemoteConfig(1).sqlite3.
// Only intercepts Locket Firebase project responses; it cannot edit app SQLite or grant paid entitlements.
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

    // Firebase Remote Config response "entries" stores values as STRINGs.
    var boolKeys = ["internal_camera_roll_video_upload_enabled", "camera_roll_preview_enabled", "longer_video_enabled", "longer_videos_enabled", "video_sound_enabled", "camera_microphone_enabled", "microphone_enabled", "gold_member", "gold_membership"];
    var durationKeys = ["gold_max_duration", "goldMaxDuration", "max_video_duration", "video_max_duration"];
    boolKeys.forEach(function (key) { entries[key] = "true"; });
    durationKeys.forEach(function (key) { entries[key] = "30.0"; });

    // Video-from-album and 30s capabilities. Preserve other live feature gates.
    var desiredGates = {"camera_roll": "enabled", "longer_video": "enabled", "longerVideo": "enabled", "video": "enabled"};
    try {
      var fg = entries.feature_gates ? JSON.parse(entries.feature_gates) : {};
      if (fg && typeof fg === "object" && !Array.isArray(fg)) {
        Object.keys(desiredGates).forEach(function (key) { fg[key] = desiredGates[key]; });
        entries.feature_gates = JSON.stringify(fg);
      }
    } catch (fgErr) {
      console.log("[Locket V2] Skipping invalid feature_gates: " + String(fgErr));
    }

    // Only update duration fields in the existing camera object.
    try {
      var camera = entries.camera ? JSON.parse(entries.camera) : {};
      if (camera && typeof camera === "object" && !Array.isArray(camera)) {
        camera.gold_max_duration = 30;
        camera.goldMaxDuration = 30;
        entries.camera = JSON.stringify(camera);
      }
    } catch (cameraErr) {
      console.log("[Locket V2] Skipping invalid camera settings: " + String(cameraErr));
    }

    // Gold welcome POPUP content copied verbatim from the provided SQLite.
    // Appearance depends on Locket's app logic and whether this campaign was seen before.
    var welcome = {"tag":"LOCKET GOLD","tag_gradient":true,"title":"Lên đời Gold rồi nha 😎","feature_set":[{"title":"Giàu rồi đó! 🤑","body":"Tài khoản đã full Locket Gold Premium. Flex với hội bạn thôi nào 🔥","imageURL":"https://firebaseremoteconfig.googleapis.com/locket_welcome.jpg"}],"campaign":"locket_gold_welcome_v1","start_at":"2025-01-01T00:00:00","end_at":"2030-12-31T23:59:59","use_local_time_zone":true};
    entries.feature_discovery_popup_config = JSON.stringify(welcome);
    $done({ body: JSON.stringify(data) });
  } catch (err) {
    console.log("[Locket V2] Leaving original response unchanged: " + String(err));
    $done({});
  }
})();
