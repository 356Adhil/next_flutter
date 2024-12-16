'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "680199fd3af734e762f204704a7381c1",
"version.json": "faf6e04c5934a0e6988d425e84904abf",
"index.html": "940eedde9aad403da07582b3313f5a18",
"/": "940eedde9aad403da07582b3313f5a18",
"main.dart.js": "baf6e87e5b6da496e36733df4006cf7d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "9759e07941e2fbcddf55b3d29231554f",
"icons/Icon-192.png": "d9a354d3492cc8077f0c1f7b313c7911",
"icons/Icon-maskable-192.png": "d9a354d3492cc8077f0c1f7b313c7911",
"icons/Icon-maskable-512.png": "884cb97045dcd0fc7ac6110940645f31",
"icons/Icon-512.png": "884cb97045dcd0fc7ac6110940645f31",
"manifest.json": "48f46adedb83b45a21dc4de8435f7599",
"assets/shorebird.yaml": "f5485fff90b5e0d8124685b52bbb5268",
"assets/AssetManifest.json": "7eccb0f792318749ce87649f5855bd43",
"assets/NOTICES": "051d990e55dfd5935f4ee281f628b9cc",
"assets/FontManifest.json": "e22370702453366b8fc4714d410de23f",
"assets/AssetManifest.bin.json": "a14167fd566ee170d000be6129a1f982",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7f0df7f95720bedf8e07e6c2f89940a6",
"assets/fonts/MaterialIcons-Regular.otf": "850af1293ff523bf5515b9e0e2731a19",
"assets/assets/images/aiChatIcon.png": "48e935ccc4731cdb568bd8efedf40908",
"assets/assets/images/dpUser.png": "939ca7fd59c2b36e2994790e3cb54c02",
"assets/assets/images/ai_connect_image.svg": "e23fc2314f82674eb3f99ec07c2d15ff",
"assets/assets/images/ticket.svg": "5fb2a1fd948eb2559d946de04adc049a",
"assets/assets/images/banner.png": "0abf565e5aba20bc3f2a6e661dc5469d",
"assets/assets/images/waterMark.svg": "b890e5c6dc69c0cf245324a8eb1f0f21",
"assets/assets/images/avatar.png": "b583dcfa2917182bf3ed6172016b5478",
"assets/assets/images/ai-connect-2.png": "6af45a3e35ade4053f30aa27c5d85648",
"assets/assets/images/splash_image.png": "ff77c7fc1315274d8bcfc8ff96aa1dd1",
"assets/assets/images/ai-connect.svg": "2c4dabe5feddd1a0bbdfecc17498f40f",
"assets/assets/images/ai-send.png": "6f1cfa08cd3630b85d4f7b97d355b677",
"assets/assets/images/insta_snap/selfie_model.svg": "6e644033558ec92b47ae6f22b4c87e85",
"assets/assets/images/insta_snap/face_id.png": "a12c5b47de27de123f38553e040cf91a",
"assets/assets/images/insta_snap/no_image.svg": "bd86cc3f8464be52a72c59f3261dc540",
"assets/assets/images/insta_snap/postedImage.png": "5334fd656acaf8c61da0ee49f6a544ef",
"assets/assets/animation.json": "91aaed40b861f34fa957fde99b05c8c7",
"assets/assets/icons/search.svg": "e79e0a6885ad7510d1029adf54fd0acf",
"assets/assets/icons/map-pin-2-line.svg": "84e6c22a63d22a4fc32d6ce455b65245",
"assets/assets/icons/about_us.svg": "0ad865fd6b6c9944a94263d56c16238e",
"assets/assets/icons/bellIcon.png": "e323b96b48b1e619e4e5880760882adf",
"assets/assets/icons/Exhibitors.svg": "05d6ff5cf9aacdbbb29a077e0028f108",
"assets/assets/icons/Speakers.svg": "b81dc363608575f10bb37c222a2970f4",
"assets/assets/icons/linkedin-fill.svg": "ada357ec8509bfda7eb15a69ff76e7af",
"assets/assets/icons/home.svg": "7e92d99e9dc9ab7c1a7a5891d527a596",
"assets/assets/icons/Connections.svg": "34e859b4ab0e6d082faf595995f20433",
"assets/assets/icons/blue_bliss_icon.svg": "d5504edd028b5f457ba44ca4e19a0b7c",
"assets/assets/icons/facebook%2520form.svg": "ed37fcb8a4bf02dd15a5c6e390a6839b",
"assets/assets/icons/Programs.svg": "076c4c739da11a1ad31c46b9da50e0d0",
"assets/assets/icons/no_data_image.svg": "5b5b543ff858cff4368b420e89420203",
"assets/assets/icons/insta%2520form.svg": "f2752f767434a3e9da6eb8a7792859be",
"assets/assets/icons/no_connection.svg": "df002a9ada42df2d5ffbf32adac8e20d",
"assets/assets/icons/linkidin%2520form.svg": "1ce2704e5dc4146c4a28f05fe2a67190",
"assets/assets/icons/calender.png": "cfbe219f0cf114480dae3dd19e924681",
"assets/assets/icons/bookmark_icon.svg": "76aa21d4744edb441543d0f12a1f347f",
"assets/assets/icons/timer_icon.svg": "f769eb9bf38d06d95e828939321bcd47",
"assets/assets/icons/updates2.svg": "7da20d7299aa64472fb19e63065c783c",
"assets/assets/icons/poweredByPrimary.svg": "e4045177286a3ccf69cd428b746a08a8",
"assets/assets/icons/networking.svg": "591d111279974bdb1edb48eb5fe8a2f4",
"assets/assets/icons/sessions.svg": "85e5190547bf16443778e78b376304a9",
"assets/assets/icons/global-line.svg": "d2e89104951c124d78d6978a239bceed",
"assets/assets/icons/user-3-fill.svg": "b1bece4def431499e353604b9d100219",
"assets/assets/icons/company_logo.svg": "a8e23c0c84f1552ef1b154b479b2f7be",
"assets/assets/icons/bottom_nav_icons/selectedHome.svg": "596d98d7c326792c95e07311bab87f63",
"assets/assets/icons/bottom_nav_icons/home.svg": "7a69695bdedf68d207f38417214d618c",
"assets/assets/icons/bottom_nav_icons/post.svg": "9c05c1e5455a963f50a834119754af25",
"assets/assets/icons/bottom_nav_icons/selectedPost.svg": "91874d511d0ec81e6ff0012f8f6f2275",
"assets/assets/icons/bottom_nav_icons/navNotification.svg": "af39a7c79950b57e499c447264b0656f",
"assets/assets/icons/bottom_nav_icons/highlights.svg": "e9dd8e3696c80864fd7a53011e033e3f",
"assets/assets/icons/bottom_nav_icons/selectedHighlights.svg": "cfabe751202f7c475e4877c377371767",
"assets/assets/icons/bottom_nav_icons/selectedNotification.svg": "e542278187bad570cc5d6a7589c4d8ee",
"assets/assets/icons/insta-snap-logo.svg": "8981b039c534557d971c65105ef134b7",
"assets/assets/icons/instagram-line.svg": "03b5fbd015ee8b206e7318ea30f38242",
"assets/assets/icons/x%2520form.svg": "31ff502af01ca07a436f423a62b8c28a",
"assets/assets/icons/micIcon.svg": "ed1cfbdb6256375c7ece52f5d1885742",
"assets/assets/icons/user-heart-fill.svg": "6e605d5ff12b4984b1620974c1f489b1",
"assets/assets/icons/poweredByWhite.svg": "f5915f4318f909ce610d79b8de647f97",
"assets/assets/icons/loader.svg": "397cb07ba5a976028013c9bd153f6ba4",
"assets/assets/icons/Twitter-X.svg": "8f9604b9acb8f67abfbf7eb8429d412f",
"assets/assets/icons/add-circle-line.svg": "99ea61cff9fa6161d3295f5090074d11",
"assets/assets/icons/solidarity_logo.svg": "8de379857ee30aa3eca9dcfe620de396",
"assets/assets/icons/solid_logo.svg": "d88aaf18944a348c65c86441b48498d2",
"assets/assets/icons/ticket-2-line.svg": "b24809146b0c77dc6666dffb30fa7fbe",
"assets/assets/icons/photos.svg": "28d54c0d84f7c78aab65d839c3472e99",
"assets/assets/icons/blue_calender_icon.svg": "8ee31ca6172cdd36585b6df69da52451",
"assets/assets/icons/ai.svg": "6ef92bf125f104ece5f6409abd9bc646",
"assets/assets/icons/photos_outlined.svg": "fa8af02f281f2fd53d6cd2ba293c768e",
"assets/assets/icons/message-line.svg": "3cb10aa41f208313f70f722d05c8974e",
"assets/assets/icons/Meetings.svg": "4be7f85241633ba327b08091eab07d5e",
"assets/assets/icons/no_sessions.svg": "8e30fcdbe1f142dd59ad88815d4cc396",
"assets/assets/icons/main_stage_icon.svg": "4c4d7fb75b1c82249663fcc7af749226",
"assets/assets/icons/Updates.svg": "c46c4163d4e00added81b80b2e0aea45",
"assets/assets/icons/requested_time_icon.svg": "d1a38dc3a58c111506ec02f75621888d",
"assets/assets/icons/locate.svg": "34f65c89493e265d2a868aae17d24f16",
"assets/assets/icons/PoweredByEventhex.svg": "e77ce3ac1a59ea360f6e1ac21cd916b3",
"assets/assets/icons/conclaveLogo.svg": "00052598def2225c3453a296e2c5903d",
"assets/assets/icons/clock.png": "e5ff08c7604480311cb50cda59daae69",
"assets/assets/icons/building-2-fill.svg": "f61c797710e455330a357b7c9ab590c6",
"assets/assets/icons/time-line.svg": "46f55dce5fb3b392c728aa53759e31c6",
"assets/assets/icons/starred_bookmark.svg": "c85088351dfb71e87134a69a9561e922",
"assets/assets/icons/information-fill.svg": "b1f094560cd51a444d25e950c7d656fc",
"assets/assets/icons/arrow-left-s-line.svg": "4d109f61f4ffb20eec7ec81771e46b59",
"assets/assets/icons/facebook-fill.svg": "e0593dda558d25c454b04b968ff1d896",
"assets/assets/icons/Location.svg": "df819573ceac8e89326f09de9cbcd096",
"assets/assets/icons/blue_bookmark_icon.svg": "e1d2187f100b687adb3f31181c50beb3",
"assets/assets/icons/video.svg": "222459b2f3f55e87aab26ee764fc0246",
"assets/assets/icons/no_invitation.svg": "dcd1eaa78f2cfa975ce937ec1616ace6",
"assets/assets/icons/insta_snap/spark_icon.svg": "1d0e88f54b68a37ebe6ec5a070edaf71",
"assets/assets/icons/insta_snap/download-cloud-2-line.svg": "447c9277744f64361a732a20e090a0ee",
"assets/assets/icons/insta_snap/downloadButton.svg": "d63d1959b599add9c29f20faad75d348",
"assets/assets/icons/insta_snap/logo_1.svg": "a097828249f08267250a7182bef41452",
"assets/assets/icons/map-pin-fill.svg": "5e83166a22fd5ca06a7951eda0841822",
"assets/assets/icons/message-fill.svg": "48ad1da688f74cce3480c8ef0cde7480",
"assets/assets/icons/heart-3-fill.svg": "14424203b95fd54feff7062faf6096f3",
"assets/assets/icons/no_notification.svg": "ce43e7d6b8358b5fb1505701d20353e2",
"assets/assets/icons/briefcase-fill.svg": "b7d0e21dea2eef506b74091bc5d77de4",
"assets/assets/fonts/quatro-book.otf": "2972205f1fe196b413f092125ee35186",
"assets/assets/fonts/MetaSerifPro-Book.otf": "aede8abb44ea2c6dd8ce5b132dbcf031",
"assets/assets/fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/BlaakLight_PERSONAL.ttf": "4962b48a42639a455058275e758b1524",
"assets/assets/fonts/SourceSerifPro-Regular.otf": "71090cf3363e10c785d199d11bd14f1c",
"assets/assets/fonts/NotoSerifMalayalam-Regular.ttf": "92e163c880a6cfe29b1bdd79552ea2fe",
"assets/assets/fonts/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
