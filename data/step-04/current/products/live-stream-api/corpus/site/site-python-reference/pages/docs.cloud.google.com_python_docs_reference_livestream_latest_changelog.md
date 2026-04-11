---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/livestream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/changelog
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
1.16.0 (latest)
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.1
1.8.1
1.7.4
1.6.0
1.5.2
1.4.1
1.3.0
1.2.1
1.1.0
1.0.4
0.2.0
0.1.5
PyPI History
1.16.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.15.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.14.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.13.0 (2025-09-24)
Documentation
[google-cloud-video-live-stream] Update requirements of resource ID fields to be more clear ( 26730096e491346f02af2a82138224a110485e74 )
Features
[google-cloud-video-live-stream] Added H.265 (HEVC) codec support ( 26730096e491346f02af2a82138224a110485e74 )
[google-cloud-video-live-stream] Added UHD (4k) resolution support ( 26730096e491346f02af2a82138224a110485e74 )
[google-cloud-video-live-stream] Added Auto Transcription support ( 26730096e491346f02af2a82138224a110485e74 )
[google-cloud-video-live-stream] Added StartDistribution/StopDistribution methods and
Distribution/DistributionStream messages used for distributing live
streams to external RTMP/SRT endpoints ( 26730096e491346f02af2a82138224a110485e74 )
[google-cloud-video-live-stream] Added PreviewInput method used for the low latency input monitoring ( 26730096e491346f02af2a82138224a110485e74 )
[google-cloud-video-live-stream] Added UpdateEncryptions event to perform key rotation without restarting a channel ( 26730096e491346f02af2a82138224a110485e74 )
1.12.0 (2025-05-15)
Features
added DVRSession methods to support DVR feature ( f20efc4 )
added OutputType field to the Clip resource to support MP4 clipping ( f20efc4 )
Documentation
A comment for field requested_cancellation in message .google.cloud.video.livestream.v1.OperationMetadata is changed to clarify error type ( f20efc4 )
Clarified GCS in the comment for method DeleteClip in service LivestreamService ( f20efc4 )
Updated comment for field update_mask in message .google.cloud.video.livestream.v1.UpdateInputRequest to indicate updates in tier field are allowed ( f20efc4 )
1.11.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.11.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
1.10.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.9.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
1.9.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
1.8.1 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
1.8.0 (2024-07-11)
Features
added Clip resource for performing clip cutting jobs ( 3ca8bfb )
added RetentionConfig for enabling retention of output media segments ( 3ca8bfb )
added StaticOverlay for embedding images the whole duration of the live stream ( 3ca8bfb )
Documentation
clarify the format of key/id fields ( 3ca8bfb )
1.7.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
1.7.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.7.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
1.7.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.7.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
1.6.0 (2023-12-07)
Features
Add support for python 3.12 ( 31d043d )
Introduce compatibility with native namespace packages ( 31d043d )
Bug Fixes
Require proto-plus >= 1.22.3 ( 31d043d )
Use retry_async instead of retry in async client ( 31d043d )
1.5.2 (2023-09-19)
Documentation
Minor formatting ( 39eb5b3 )
Remove migrated samples ( #187 ) ( 0988a81 )
1.5.1 (2023-08-11)
Documentation
samples: Add samples and tests for pools and assets ( #180 ) ( 95977cc )
1.5.0 (2023-08-09)
Features
Added a new asset resource which can be used as the content of slate events ( 825eedf )
Added a new pool resource for protecting input endpoints within a VPC Service Controls perimeter ( 825eedf )
Added support for slate events which allow users to create and insert a slate into a live stream to replace the main live stream content ( 825eedf )
1.4.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #167 ) ( f010478 )
1.4.0 (2023-03-23)
Features
Added Encryption for enabling output encryption with DRM systems ( 638bd0a )
Added InputConfig to allow enabling/disabling automatic failover ( 638bd0a )
Added new tasks to Event: inputSwitch, returnToProgram, mute, unmute ( 638bd0a )
Added support for audio normalization and audio gain ( 638bd0a )
Added TimecodeConfig for specifying the source of timecode used in media workflow synchronization ( 638bd0a )
Documentation
Clarify behavior when update_mask is omitted in PATCH requests ( 638bd0a )
Fix formatting of request arg in docstring ( #154 ) ( c41b461 )
1.3.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #145 ) ( f0cb14c )
1.2.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 379c135 )
Documentation
Add documentation for enums ( 379c135 )
1.2.0 (2023-01-10)
Features
Add support for python 3.11 ( #133 ) ( e6ca5aa )
1.1.0 (2022-12-15)
Features
Add support for google.cloud.video.live_stream.__version__ ( 714cbd4 )
Add typing to proto.Message based class attributes ( 714cbd4 )
Bug Fixes
Add dict typing for client_options ( 714cbd4 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( b836b51 )
Drop usage of pkg_resources ( b836b51 )
Fix timeout default values ( b836b51 )
Documentation
samples: Snippetgen handling of repeated enum field ( 714cbd4 )
samples: Snippetgen should call await on the operation coroutine before calling result ( b836b51 )
1.0.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #116 ) ( db8e690 )
1.0.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #113 ) ( 1c7d6ff )
1.0.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #91 ) ( 7493188 )
deps: require proto-plus >= 1.22.0 ( 7493188 )
1.0.1 (2022-08-02)
Documentation
samples: fix timeout for create input and start channel LROs; first call can take up to 15 minutes ( #86 ) ( 6062208 )
1.0.0 (2022-07-18)
Features
bump release level to production/stable ( #31 ) ( b52dbc7 )
0.2.0 (2022-07-16)
Features
add audience parameter ( f8824ce )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #78 ) ( e2f1b17 )
require python 3.7+ ( #77 ) ( a4e7d42 )
Documentation
align channel config with best practices ( #71 ) ( 2a1a5b2 )
0.1.5 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #65 ) ( a072bbf )
Documentation
fix changelog header to consistent size ( #66 ) ( fbc3528 )
0.1.4 (2022-05-22)
Documentation
updated comments to match API behaviors ( #45 ) ( bdc9463 )
0.1.3 (2022-05-03)
Documentation
samples: add sample for creating a channel with a failover backup input ( #37 ) ( 9587382 )
0.1.2 (2022-04-28)
Documentation
samples: add code samples ( #21 ) ( 484271d )
0.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #13 ) ( 471eb70 )
0.1.0 (2022-02-15)
Features
generate v1 ( 9ea3475 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
