'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2402e89dcb611685892efcff193b6668",
".git/config": "983b5e405308de0183616fdc76fd1675",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "651e047e5f274647ec6e754b9bde8c21",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4fc221051673d57020e3927704ab1211",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d22b5f37c0f10769ebf241247de421ed",
".git/logs/refs/heads/main": "72e8a211d1edb7bed1e2c9c8903375da",
".git/logs/refs/heads/master": "354bdd7c5df7f042b545f09453379724",
".git/logs/refs/remotes/origin/HEAD": "90936002646b8c3cac89367555bb2443",
".git/logs/refs/remotes/origin/main": "0fe26bd83e29fec1614bc204c8e4f2c0",
".git/objects/01/212163acb1526c587a75999d2342dc3cb530c4": "b305a64e1ecf9f03943e9f2276542ea3",
".git/objects/02/5f2758011a718720d8bccc399cb8416b70401e": "07400fb673d43ab08de56ea58ea37d98",
".git/objects/03/500e3b277e30f3a90ebe1b28e7c5476570783f": "3b0f42c816fd07a324fcf20f8438a673",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0e/8c5db501c0d525dd4d8cf7e03c7dc2a9bb97ee": "9ebeeed1fbc84ea943d24ef45a114bc8",
".git/objects/16/84444838f228a325d21178d89cec5f7e6acef6": "1db59dfab0ee2f6101ecf3ff4f3283fa",
".git/objects/22/c0ece8c63a8bcb3fe8fbb2a2a6928d0f6c0250": "0d083d1adfdda04f15b03d3d06ee8cfd",
".git/objects/24/439850fb26265aacb0b5657f91780c89e9070f": "36fd4c66193c0569e975a13d54974c14",
".git/objects/28/1c82962782d640245541fb38a856f805e04868": "55af693ac26ef76c7b8cc8a88155c0cc",
".git/objects/29/d86e08423e4f3a80a4c6823bc056eace79014d": "2e0bd40eb70cfe0da8588f6d9fd229f5",
".git/objects/2a/6c69fdfcbd75a9ee458964de48eb0cefe600c1": "4a29e9ad646887861e0f52a05cf817ee",
".git/objects/32/3c4e30a80fbbb59e360f2f1600dde162143ca1": "1675fb6a1fcfeaa0641406d701c0b92f",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/d29a00be52cee0f310ef1a3fd73654ff2a1563": "4619fc6f4e49181d9facd526a1db0226",
".git/objects/3c/e505fc29c84899c5a0e613c40135c2fd8bf8d4": "38180a544648d5322e0c52c591fd544f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/549e663473bbb528586ad5fcb614ebcda284bd": "274d082be191c75dcad685087f4c3fac",
".git/objects/51/03cec15c2f7d2c99b9e35e1aed2e3349c63e4e": "1bd1402cb35c7587589d86a8c02aafc3",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/8ec5bf2a9a5724899daf728577cd0b8beaae90": "91a402a18f3471147ce264a747cc188a",
".git/objects/59/edd5967338615b3ea5bf485b00370eca23a3c1": "75935bdf34a62e6a65085457ed705a22",
".git/objects/5a/40a9d44f4be788ddf55d813c63dc394be3f850": "ec271e54b5d41a91630b50808302604b",
".git/objects/60/4ce460492d9b1e4f8a8582ce7ccbf94e93dc53": "0484680d4489f610643052f628802cf3",
".git/objects/61/b567b4cca2029f7097e4537f03948b21e12d7b": "193c89976cb638707bcec66a2ef3e408",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/ef2963077fda7eb6e0f274e5bd7bb7ec0d7170": "a239d8e1f2ff4479e2c4aa45f10296bd",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/2777cd36ec695eaa4984efb1d8292b7e43c042": "05a138ca58f54c02ec03321b07c98511",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/791962ba3ac0c5618ee9a905c0a997b6a1377a": "a14bc802da18d6be047e6081104bf200",
".git/objects/7e/a37865d7d46dea1531aa0fb54faa46888b3301": "49a6e9d395ec2360ecb94ddfa27f1b8c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/e516239d68d6616478b2bad15895dc14f9b087": "768b07ba2405be6dfc2982453328cc79",
".git/objects/93/6e1137633b03f2b29bf4d3abed5ec3b1f97bd9": "6a36d2c0641bc6335a59b2751cda08e1",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/14737f3760d005f3fad0c0e619acab465a1322": "aaf851e4cebf214ed34e0202a0943851",
".git/objects/9e/e779ada6753eab5e833350d167bff6747c9ae3": "8468d062c11953a3d3f4eff236f6c95d",
".git/objects/9f/319669136051182c22763c4447d04c21c974bb": "ae56228bbc0607b4cce57b112faa530f",
".git/objects/a1/adfe7aade29b2e5b820632fd93b310162bdac3": "13171cc938c59e8e4be01e736bc6b64a",
".git/objects/a2/9752d25b14f8d60695b7893fc59020b253bb43": "6f64c3c541b8cf90240c1cde23fe9894",
".git/objects/a2/ee7970183388dedab7dd5fa1d68baf3512783a": "51b41fb6caff0ec03f5f10fbb23860c2",
".git/objects/a4/c8174865eb75fcc99db14a78630b4a9e374d3c": "c9080ceaf6bab2a80a70131427ff7e39",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/8bb296c59363409d66a7184d5c3da770121357": "d040d653970d319f477d29a094e34914",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/74e5d1763e999819016516e804882c67928465": "f687193b20141c34523b8a32b1ba64a6",
".git/objects/b6/8d5d7a5684ca402a01e3c6c3adc0564b41b3f9": "e240e0fb46aa33e1e04fb9172dae0f35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/62dd2c7cf06f1335561900b9ace527d8bf1e3a": "05357cb8c46a229613283c730dd35e46",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/c6/449cb22358104bfbc8c53679338a7ce099a05c": "404b29966f4b2f1043ee20ff8b35e686",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/ca/735d9558dfb659513440a8d4ea2b6500acd4ba": "05b683b3fd5b864bd0c9af9fc8842412",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/d732a5131bd7efdfbd24d5fd8adfef5e5de1d5": "1d9e1e30c5d158bc88f0f466d13254c6",
".git/objects/e6/02fde3f2552ce6dcf092dc3217f08d4f8e2e44": "c822c73b47a21ddfab8967f5872b2723",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/1ddca3cd909ff6585d9480ce667f2d5249a8ac": "a46a8cf64c73b2eee10452ea76bb1577",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/a49bb6edcd2230f9b5381b1233d1984734f6c8": "749cd30a79e7d335265071ae4c0e2b46",
".git/objects/f9/a88d5b386ceeb79558d53facfe46d4b27feee9": "c741eecf211416f0fc76e85ff00fd65f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/1e1222c7f967b5f4939991b88d53e2db3d77d5": "1ce44e991b0096a78ceb67d6be27b975",
".git/objects/pack/pack-9db8e0d18b8a9d4b7883ca5098b0b5cf2b0b69ca.idx": "9c8a926bfccdedfa1a7fadff11d811f1",
".git/objects/pack/pack-9db8e0d18b8a9d4b7883ca5098b0b5cf2b0b69ca.pack": "ef48ed62024bf931c95bb06a9c4d5db9",
".git/objects/pack/pack-9db8e0d18b8a9d4b7883ca5098b0b5cf2b0b69ca.rev": "9ddd34415aae4fe039aea56a3109f41b",
".git/refs/heads/main": "97203df08986fbdc31dce9410ebb36e1",
".git/refs/heads/master": "7f51065322f2592c78a5c2c8e1e79ec2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "97203df08986fbdc31dce9410ebb36e1",
"assets/AssetManifest.bin": "84a5a2eaea0396ca15f3c96b590ba588",
"assets/AssetManifest.bin.json": "028618cddd1195aa465fcfce9ccb9390",
"assets/assets/images/attendance%2520Icon.jpg": "fb01718855c6d7ebe947642ee665538c",
"assets/assets/images/back2.jpg": "e6a2c12527719631a704787ae205b554",
"assets/assets/images/background.jpg": "858cd9fd187e3085d84e63da530c0338",
"assets/assets/images/chat.mp4": "a673c318f9170809b60ef93fe08e8acf",
"assets/assets/images/cortify.PNG": "612c317c889e534e3f11182653835b5f",
"assets/assets/images/cv.pdf": "8629eadc363f6b25e6071a23df9dac35",
"assets/assets/images/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/assets/images/firebase.png": "63645dd31e3e95c78db295d9295a3280",
"assets/assets/images/firebase.svg": "6e071f37c085cca59f19eb6d737061d4",
"assets/assets/images/flutter.svg": "ea67ff4e8060634c0008c912a810338e",
"assets/assets/images/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/assets/images/gmail.svg": "febead9156934b31f071a1e4664d9122",
"assets/assets/images/googleplay.svg": "627a4026435540168b0a33ebeec91805",
"assets/assets/images/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/assets/images/linkedin.svg": "d9275f99a5109c6baa6a46cef6b99dbb",
"assets/assets/images/mongodb.svg": "6212cfc762500f22443465de26bd690a",
"assets/assets/images/nodedotjs.svg": "f216a4a331e174408defcde7ff8327d1",
"assets/assets/images/output.mp4": "36236a024e72169338998efa02904298",
"assets/assets/images/p.jpeg": "6ef07b2edd74d3f3773b271a26c070e1",
"assets/assets/images/postapp.mp4": "be862e6582e031345ca63a6da04ff79f",
"assets/assets/images/shose.mp4": "f63daca4471b4b93570d1b8d50b535aa",
"assets/assets/images/smartAttendance.PNG": "f773a372547ca8c6d6fa1a6808dcacb6",
"assets/assets/images/student.PNG": "6f18903764f220d47e5ea4d4d3c456ab",
"assets/assets/images/whatsapp.svg": "ade06a8014e765b50ffc146499aae1aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85bfa2dd9d89af406c754e48bcb72ac3",
"assets/images/attendance%2520Icon.jpg": "fb01718855c6d7ebe947642ee665538c",
"assets/images/back2.jpg": "e6a2c12527719631a704787ae205b554",
"assets/images/background.jpg": "858cd9fd187e3085d84e63da530c0338",
"assets/images/chat.mp4": "a673c318f9170809b60ef93fe08e8acf",
"assets/images/cortify.PNG": "612c317c889e534e3f11182653835b5f",
"assets/images/cv.pdf": "8629eadc363f6b25e6071a23df9dac35",
"assets/images/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/images/firebase.png": "63645dd31e3e95c78db295d9295a3280",
"assets/images/firebase.svg": "6e071f37c085cca59f19eb6d737061d4",
"assets/images/flutter.svg": "ea67ff4e8060634c0008c912a810338e",
"assets/images/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/images/gmail.svg": "febead9156934b31f071a1e4664d9122",
"assets/images/googleplay.svg": "627a4026435540168b0a33ebeec91805",
"assets/images/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/images/linkedin.svg": "5aa325ad9a62420f1e194a738197ed54",
"assets/images/mongodb.svg": "6212cfc762500f22443465de26bd690a",
"assets/images/nodedotjs.svg": "f216a4a331e174408defcde7ff8327d1",
"assets/images/output.mp4": "e4267a775386ea11b8cc9965d1768dd7",
"assets/images/p.jpeg": "6ef07b2edd74d3f3773b271a26c070e1",
"assets/images/postapp.mp4": "be862e6582e031345ca63a6da04ff79f",
"assets/images/shose.mp4": "f63daca4471b4b93570d1b8d50b535aa",
"assets/images/smartAttendance.PNG": "f773a372547ca8c6d6fa1a6808dcacb6",
"assets/images/student.PNG": "6f18903764f220d47e5ea4d4d3c456ab",
"assets/images/whatsapp.svg": "ade06a8014e765b50ffc146499aae1aa",
"assets/NOTICES": "1a074d5b1b100472ab842ea6ea6afeb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "7da88e74df8676e13b54bdc864e3e549",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/p.jpeg": "6ef07b2edd74d3f3773b271a26c070e1",
"index.html": "ec4d0a8548656584953483bfe1a0a0a9",
"/": "ec4d0a8548656584953483bfe1a0a0a9",
"main.dart.js": "cb54b3a039bd3632bf45f95599dd3f86",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
