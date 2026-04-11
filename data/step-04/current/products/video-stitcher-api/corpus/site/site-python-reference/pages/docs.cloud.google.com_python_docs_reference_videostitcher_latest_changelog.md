---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/changelog
  title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Changelog
Stay organized with collections
Save and categorize content based on your preferences.
0.11.0 (latest)
0.10.0
0.9.0
0.8.0
0.7.18
0.6.1
0.5.1
0.4.0
0.3.2
0.2.1
0.1.2
PyPI History
0.11.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.10.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.9.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.8.0 (2025-10-07)
Features
[google-cloud-video-stitcher] Enable rest for google-cloud-video-stitcher (#14595) - [ ] Regenerate this pull request now. ( 24f11c9e2b6cd9487021757a0c7cfd7b46d92340 )
0.7.18 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
0.7.17 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
0.7.16 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
0.7.15 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
0.7.14 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
0.7.13 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
0.7.12 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
0.7.11 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
0.7.10 (2024-05-27)
Features
add apis for Create, Read, Update, Delete for VODConfigs ( d100eea )
added adtracking to Livesession ( d100eea )
added fetchoptions with custom headers for Live and VODConfigs ( d100eea )
added targetting parameter support to Livesession ( d100eea )
added token config for MediaCdnKey ( d100eea )
allowed usage for VODConfigs in VODSession ( d100eea )
0.7.9 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
0.7.8 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
0.7.7 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
0.7.6 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
0.7.5 (2023-12-07)
Features
Add support for python 3.12 ( 31d043d )
Introduce compatibility with native namespace packages ( 31d043d )
Bug Fixes
Require proto-plus >= 1.22.3 ( 31d043d )
Use retry_async instead of retry in async client ( 31d043d )
0.7.4 (2023-09-19)
⚠ BREAKING CHANGES
use correct child_type annotation
Bug Fixes
Use correct child_type annotation ( bd0af89 )
Documentation
Minor formatting ( 88e37ed )
Remove migrated samples ( #180 ) ( 73af7e9 )
0.7.3 (2023-07-04)
Bug Fixes
Add async context manager return types ( #161 ) ( c97054a )
0.7.2 (2023-05-25)
Documentation
samples: Add samples for live config and live session ( b2f73e7 )
samples: Update slates and CDN keys to use LROs ( b2f73e7 )
0.7.1 (2023-05-15)
Bug Fixes
Remove default_ad_break_duration from LiveConfig ( 08c1a06 )
Remove GamVodConfig ( 08c1a06 )
0.7.0 (2023-03-27)
Features
LiveSession changes for live config ( 93971ed )
LRO changes for CdnKey and Slate methods ( 93971ed )
VodSession changes for ad tracking ( 93971ed )
Bug Fixes
Add AdTracking as a required parameter for VodSession ( 93971ed )
0.6.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 6bc0894 )
Documentation
Add documentation for enums ( 6bc0894 )
0.6.0 (2023-01-12)
Features
Add support for python 3.11 ( #117 ) ( 5885372 )
0.5.1 (2023-01-05)
Documentation
samples: Add Media CDN samples ( b905053 )
samples: Move Akamai sample to its own file ( b905053 )
0.5.0 (2022-12-15)
Features
Add support for google.cloud.video.stitcher.__version__ ( b45d82a )
Add typing to proto.Message based class attributes ( b45d82a )
Bug Fixes
Add dict typing for client_options ( b45d82a )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 25011aa )
Drop usage of pkg_resources ( 25011aa )
Fix timeout default values ( 25011aa )
Documentation
samples: Snippetgen handling of repeated enum field ( b45d82a )
samples: Snippetgen should call await on the operation coroutine before calling result ( 25011aa )
0.4.0 (2022-10-27)
Features
Add support for Media CDN ( #98 ) ( df58bb7 )
0.3.2 (2022-10-10)
Bug Fixes
deps: allow protobuf 3.19.5 ( 61653d5 )
deps: require google-api-core>=1.33.2 ( 61653d5 )
0.3.1 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #84 ) ( 825e000 )
Documentation
samples: Fix Video Stitcher region tag prefix ( #86 ) ( 5b70a6b )
Update github repo url ( #88 ) ( 07adb7b )
0.3.0 (2022-09-16)
Features
Add support for REST transport ( #75 ) ( 48e8350 )
Bug Fixes
deps: require google-api-core>=1.33.1,>=2.8.0 ( 48e8350 )
deps: require protobuf >= 3.20.1 ( 48e8350 )
0.2.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #53 ) ( 42d07be )
deps: require proto-plus >= 1.22.0 ( 42d07be )
0.2.0 (2022-07-16)
Features
add asset_id and stream_id fields to VodSession and LiveSession responses ( fefdc9c )
add audience parameter ( fefdc9c )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #45 ) ( a5ec756 )
remove COMPLETE_POD stitching option ( fefdc9c )
require python 3.7+ ( #43 ) ( 5c952d8 )
0.1.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #34 ) ( 109ca6e )
Documentation
fix changelog header to consistent size ( #35 ) ( 286c3a0 )
samples: add code samples ( #17 ) ( ed60215 )
0.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #10 ) ( 5451292 )
0.1.0 (2022-02-23)
Features
add v1 ( f164d04 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
