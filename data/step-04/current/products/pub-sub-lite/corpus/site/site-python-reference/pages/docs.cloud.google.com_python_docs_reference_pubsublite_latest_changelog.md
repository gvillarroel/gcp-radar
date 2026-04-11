---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/changelog
  title: "Python client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.13.0 (latest)
1.12.0
1.11.1
1.10.0
1.9.0
1.8.3
1.7.0
1.6.0
1.5.0
1.4.3
1.3.0
1.2.0
1.1.4
1.0.2
0.6.1
0.5.0
0.4.1
0.3.0
0.2.0
0.1.0
Changelog
PyPI History
1.13.0 (2025-12-15)
Features
Add support for Python 3.14 (#563) ( 747fd6a380a77619f4b3c1e391bae3645d48d4aa )
Bug Fixes
Deprecate credentials_file argument (#559) ( c4f2cafc3c6309b523629879bdd09d9ac27d9184 )
resolve issues where pre-release versions of dependencies are installed (#548) ( 218278fc2524fe1cd9a9e0b317ca950ad4f150cc )
remove setup.cfg configuration for creating universal wheels (#551) ( a45e534ac0fac29f72adb2006ba640faa6a232f6 )
1.12.0 (2025-02-24)
Features
Add REST Interceptors which support reading metadata ( #542 ) ( 88f5f3e )
Add support for opt-in debug logging ( e8eb848 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( e8eb848 )
1.11.1 (2024-07-31)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( #511 ) ( 8daf5ae )
1.11.0 (2024-07-04)
Features
spanner: Add support for Cloud Spanner Scheduled Backups ( #501 ) ( 87fc137 )
1.10.0 (2024-04-15)
Features
Allow users to explicitly configure universe domain ( #474 ) ( 974cc10 )
1.9.0 (2023-12-10)
Features
Add support for Python 3.12 ( #455 ) ( e865cb3 )
Introduce compatibility with native namespace packages ( #454 ) ( e718522 )
Bug Fixes
Use retry_async instead of retry in async client ( #458 ) ( ac71140 )
Documentation
Minor formatting ( 2681fb8 )
1.8.3 (2023-07-05)
Bug Fixes
Add async context manager return types ( #426 ) ( ee42abd )
1.8.2 (2023-05-10)
Bug Fixes
Disable publish idempotence by default ( #415 ) ( 17af3c4 )
1.8.1 (2023-03-24)
Documentation
Fix formatting of request arg in docstring ( #412 ) ( b1126e3 )
1.8.0 (2023-03-21)
Features
Publish idempotence ( #408 ) ( 3236752 )
Bug Fixes
Add support for python 3.11 ( #403 ) ( f60f8a8 )
Drop python 3.7 ( #402 ) ( 261b48d )
1.7.0 (2023-02-15)
Features
Add current state of export subscriptions to API ( bb111fd )
API for publish idempotence ( bb111fd )
Replace export subscription statuses with current state field in API ( bb111fd )
Bug Fixes
Add context manager return types ( bb111fd )
Documentation
Add documentation for enums ( bb111fd )
1.6.0 (2022-10-06)
Features
Create subscriptions at a seek target ( #383 ) ( 864c0cc )
1.5.0 (2022-09-13)
Features
Add export config protos to API ( #364 ) ( b77cf6d )
1.4.3 (2022-08-15)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #353 ) ( a865f6c )
Don’t leave a bad future in place when client creation fails ( #362 ) ( 86cf1c0 )
require python 3.7+ ( #355 ) ( 7a8e050 )
Documentation
fix changelog header to consistent size ( #346 ) ( d04840a )
1.4.2 (2022-04-26)
Bug Fixes
retry Cancelled stream errors ( #335 ) ( 3543759 )
1.4.1 (2022-03-07)
Bug Fixes
ignore the implementation details of message acknowledgements from the cloud Pub/Sub Message ( #312 ) ( 19da693 ), closes #311
1.4.0 (2022-02-18)
Features
add api key support ( #291 ) ( f0d65ca )
Bug Fixes
ensure bytes cannot go negative on requests sent to the server ( #300 ) ( 6d3690a ), closes #294
ensure that _failure_task exception is always retrieved ( #301 ) ( 579abf3 )
resolve DuplicateCredentialArgs error when using credentials_file ( b7ed9ad )
1.3.0 (2022-01-06)
Features
add context manager support in client ( #255 ) ( 9ad887f )
Add ReassignmentHandler which is notified on client reassignment ( #242 ) ( 80fd5f6 )
remove warnings from reservation methods ( #249 ) ( 2defd91 )
surface ReservationPath and Reservation ( #274 ) ( eb50503 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( e2f7b98 )
add ‘dict’ annotation type to ‘request’ ( c69dc30 )
deps: drop packaging dependency ( ce2e5ef )
improper types in pagers generation ( e2f7b98 )
Documentation
list oneofs in docstring ( ce2e5ef )
1.2.0 (2021-09-15)
Features
Add cloud region path handling for when this is allowed by the backend ( #240 ) ( 4cad460 )
1.1.4 (2021-09-14)
Bug Fixes
Race conditions and performance issues ( #237 ) ( ec76272 )
1.1.3 (2021-09-13)
Bug Fixes
ensure ack() doesn’t wait on stream messages ( #234 ) ( 03db702 )
1.1.2 (2021-09-13)
Bug Fixes
Enable pytype on Pub/Sub Lite repo and fix all errors ( #214 ) ( df58fdf )
performance issues with subscriber client ( #232 ) ( 78a47b2 )
1.1.1 (2021-09-07)
Bug Fixes
Add workaround for https://github.com/grpc/grpc/issues/25364 ( #213 ) ( e417bf3 )
Numerous small performance and correctness issues ( #211 ) ( 358a1d8 )
1.1.0 (2021-08-12)
Features
Support seek subscription in AdminClient ( #176 ) ( fc648ae )
1.0.2 (2021-08-04)
Bug Fixes
Backlog never zero despite messages received ( #204 ) ( b93a0bf )
Increment ack generation id ( #203 ) ( 644163d )
1.0.1 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #199 ) ( b8b9832 )
Documentation
add Samples section to CONTRIBUTING.rst ( #196 ) ( 35b7dca )
Miscellaneous Chores
release as 1.0.1 ( #200 ) ( 51390f3 )
1.0.0 (2021-07-19)
Features
bump release level to production/stable ( #146 ) ( 4c294f2 )
Miscellaneous Chores
release as 1.0.0 ( #193 ) ( 88368c6 )
0.6.1 (2021-07-16)
Bug Fixes
Add ClientCache which forces new client creation after 75 uses ( #188 ) ( 089789c )
0.6.0 (2021-07-13)
Features
add always_use_jwt_access ( 6c84e24 )
Add SeekSubscription and Operations to API ( #169 ) ( 2e29ba1 )
Bug Fixes
deps: add packaging requirement ( #162 ) ( 94281c5 )
disable always_use_jwt_access ( #175 ) ( 6c84e24 )
exclude docs and tests from package ( #161 ) ( b8a70d9 )
is_reset_signal should handle status that is None ( #183 ) ( 4ba484e )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #165 ) ( cea99be )
0.5.0 (2021-06-11)
Features
Add Pub/Sub Lite Reservation APIs ( #156 ) ( edbd104 )
ComputeTimeCursor RPC for Pub/Sub Lite ( #143 ) ( 036ca2f )
Handle out of band seeks ( #158 ) ( 77db700 )
Bug Fixes
Add admin interfaces for reservations ( #159 ) ( ad0f3d2 )
Replace unreleased InitialSubscribeRequest initial_cursor field with initial_location ( #150 ) ( 30fcd3f )
shutdown event loop if publisher fails to start and set exception on result future ( #124 ) ( c2c2b00 )
Version bump overrides library past fix and undo workarounds ( #137 ) ( 94ae2f0 )
0.4.1 (2021-05-05)
Bug Fixes
Change type hint on callback to be Callback. ( #135 ) ( cbf16f8 )
deps: remove duplicate dependencies and add version ranges ( #105 ) ( d7ee309 )
do not crash if pubsublite distribution can not be found when extracting semver ( #120 ) ( 811434e )
Remove Future type hint from return type which fails to type check when overridden ( #133 ) ( abe9b14 )
0.4.0 (2021-03-22)
Features
adding ability to create subscriptions at HEAD ( #106 ) ( 4d03d3a )
0.3.0 (2021-03-09)
Features
Make message_id encode a PublishMetadata which includes the partition ( #90 ) ( 85944e7 )
Bug Fixes
remove absl dependency ( #94 ) ( 0573edb )
Rename PublishMetadata to MessageMetadata ( #92 ) ( a744441 )
Documentation
remove multiprocessing note ( #82 ) ( a8d26a1 )
0.2.0 (2020-12-14)
Features
Add support for increasing partitions in python ( #74 ) ( e117a1a )
Bug Fixes
Fix type hints in paths now that string projects are allowed. ( #75 ) ( b5ffc42 )
0.1.0 (2020-11-19)
Features
generate v1 ( 4624ac7 )
Implement a single partition publisher ( #8 ) ( fd1d76f )
Implement AckSetTracker which tracks message acknowledgements. ( #19 ) ( 7f88458 )
Implement admin client. ( #17 ) ( 3068da5 )
Implement assigner, which handles partition-subscriber assignment. ( #14 ) ( b2d0d36 )
implement assigning subscriber ( #23 ) ( 6afd477 )
Implement committer ( #13 ) ( aa9aca8 )
Implement CPS non-asyncio subscriber ( #25 ) ( a9293c1 )
implement Flow control batcher ( #15 ) ( 0a09bb3 )
Implement make_publisher which creates a routing publisher. ( #11 ) ( baeb0f6 )
Implement Publisher and subscriber factories ( #24 ) ( 4890cae )
Implement Publisher API ( #21 ) ( 58fda6f )
Implement python retrying connection, which generically retries stream errors ( #4 ) ( 11c9a69 )
Implement RoutingPolicy ( #5 ) ( f72a2f0 ), closes #4
Implement RoutingPublisher which routes between publishers. ( #10 ) ( 7aa39a1 )
Implement SerialBatcher which helps with transforming single writes into batch writes. ( #7 ) ( a6dc15f )
Implement SinglePartitionSubscriber. ( #22 ) ( bb76d90 )
Implement Subscriber, which handles flow control and batch message processing. ( #16 ) ( 697df4a )
Implement transforms to/from Cloud Pub/Sub Messages ( #20 ) ( 903070d )
Wire batching settings through publisher client factories ( #42 ) ( a037d0b )
Bug Fixes
Assorted fixes to the publish layer and internals. ( #39 ) ( 4276882 )
Enforce that enter is called on all user interfaces before use ( #70 ) ( eb8d63a )
Ensure tasks are always awaited to remove shutdown errors ( #57 ) ( 7735d2f )
fix circular import due to make_admin_client and AdminClient being in the same file ( #34 ) ( d631626 )
import from types ( #52 ) ( e4199ff )
Make public API more similar to generated clients ( #56 ) ( 7cf02ae )
Move FlowControlSettings to types ( #53 ) ( 457a74d )
Move types to common directory ( #51 ) ( 45a8a71 )
remaining issues with subscriber client ( #43 ) ( ec19dfc )
update cps async clients ( #41 ) ( f41c228 )
update pubsub_context to correctly modify proto map fields ( #38 ) ( 860c443 )
Documentation
add documentation ( #66 ) ( fda26bc )
add documentation that Publisher and Subscriber must be used in a with block ( #55 ) ( 32bc302 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
