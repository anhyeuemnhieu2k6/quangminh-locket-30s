// QuangMinh Locket 30s - experimental Firebase Remote Config rewrite.
// Uses selected configuration keys observed in user-provided RemoteConfig.sqlite3.
// Network rewrite only; does not edit the iPhone SQLite database or verify 30s capability.
(function () {
  try {
    var url = ($request && $request.url) ? String($request.url) : "";
    // Scope strictly to Locket's Firebase project.
    if (!/^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\//.test(url)) {
      $done({}); return;
    }
    var json = JSON.parse($response.body);
    if (!json || typeof json.entries !== "object" || !json.entries || Array.isArray(json.entries)) {
      $done({}); return;
    }
    var e = json.entries;
    var enabled = ["longer_video_enabled", "longer_videos_enabled", "video_sound_enabled", "camera_microphone_enabled", "microphone_enabled"];
    var durations = ["gold_max_duration", "goldMaxDuration", "max_video_duration", "video_max_duration"];
    durations.forEach(function (name) { e[name] = "30.0"; });
    enabled.forEach(function (name) { e[name] = "true"; });
    // Preserve all unrelated server gates and camera options.
    try {
      var gates = (typeof e.feature_gates === "string") ? JSON.parse(e.feature_gates) : e.feature_gates;
      if (gates && typeof gates === "object" && !Array.isArray(gates)) {
        gates.longer_video = "enabled";
        gates.video = "enabled";
        e.feature_gates = JSON.stringify(gates);
      }
    } catch (gateErr) {
      console.log("[Locket 30s] feature_gates skipped: " + gateErr);
    }
    try {
      var camera = e.camera ? ((typeof e.camera === "string") ? JSON.parse(e.camera) : e.camera) : {};
      if (camera && typeof camera === "object" && !Array.isArray(camera)) {
        camera.gold_max_duration = 30;
        camera.goldMaxDuration = 30;
        e.camera = JSON.stringify(camera);
      }
    } catch (cameraErr) {
      console.log("[Locket 30s] camera skipped: " + cameraErr);
    }
    $done({ body: JSON.stringify(json) });
  } catch (err) {
    console.log("[Locket 30s] original response preserved: " + err);
    $done({});
  }
})();
