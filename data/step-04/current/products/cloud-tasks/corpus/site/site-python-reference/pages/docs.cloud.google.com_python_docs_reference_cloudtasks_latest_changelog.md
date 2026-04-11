---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/changelog
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
2.22.0 (latest)
2.21.0
2.20.0
2.19.3
2.18.0
2.17.1
2.16.5
2.15.1
2.14.2
2.13.2
2.12.1
2.11.0
2.10.4
2.9.1
2.8.1
2.7.2
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.5.2
1.4.0
1.3.0
1.2.1
PyPI History
2.22.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.21.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.20.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.19.3 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
2.19.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.19.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 770cf0f )
2.19.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
2.18.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 9b674de )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 9b674de )
2.17.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
2.17.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
2.16.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
2.16.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
2.16.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
2.16.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
2.16.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
2.16.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
2.15.1 (2024-01-19)
Bug Fixes
[google-cloud-tasks] remove BufferTask method from beta libraries, which cannot call it ( 23e91f5 )
2.15.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.14.2 (2023-09-13)
Documentation
Minor formatting ( 4635f43 )
2.14.1 (2023-08-02)
Documentation
Minor formatting ( #366 ) ( aebc917 )
2.14.0 (2023-07-25)
Features
v2: Add YAML config for GetLocation and ListLocation ( 92c3ef2 )
v2beta2: Add UploadQueueYaml, BufferTask RPC method for CloudTasks service ( 92c3ef2 )
v2beta2: Set deadline for GetLocation, ListLocations and UploadQueueYaml RPCs ( 92c3ef2 )
v2beta3: Add BufferTask RPC method for CloudTasks service ( 92c3ef2 )
v2beta3: Add YAML config for GetLocation and ListLocations ( 92c3ef2 )
v2: Increase timeout of RPC methods to 20s ( 92c3ef2 )
2.13.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #351 ) ( ba48edc )
2.13.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #342 ) ( 85141f8 )
2.13.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 0fb917e )
2.12.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 248ab5b )
Documentation
Add documentation for enums ( 248ab5b )
2.12.0 (2023-01-10)
Features
Add support for python 3.11 ( #326 ) ( f931289 )
2.11.0 (2022-12-15)
Features
Add support for google.cloud.tasks.__version__ ( d51539f )
Add typing to proto.Message based class attributes ( d51539f )
Bug Fixes
Add dict typing for client_options ( d51539f )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 5752acb )
Drop usage of pkg_resources ( 5752acb )
Fix timeout default values ( 5752acb )
Documentation
samples: Snippetgen handling of repeated enum field ( d51539f )
samples: Snippetgen should call await on the operation coroutine before calling result ( 5752acb )
2.10.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #309 ) ( c96e91c )
2.10.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #306 ) ( 146ce62 )
2.10.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #288 ) ( 98f46e9 )
deps: require proto-plus >= 1.22.0 ( 98f46e9 )
2.10.1 (2022-08-09)
Documentation
sample: update protobuf in create_http_task.py ( #283 ) ( b685da5 )
2.10.0 (2022-07-16)
Features
add audience parameter ( ad01839 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #277 ) ( 239789d )
require python 3.7+ ( #275 ) ( 85fd179 )
2.9.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #262 ) ( db23558 )
Documentation
fix changelog header to consistent size ( #263 ) ( 048d907 )
2.9.0 (2022-05-05)
Features
AuditConfig for IAM v1 ( 7b7a294 )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( 7b7a294 )
Documentation
fix type in docstring for map fields ( 7b7a294 )
2.8.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #232 ) ( 2b35888 )
deps: require proto-plus>=1.15.0 ( 2b35888 )
2.8.0 (2022-02-14)
Features
add api key support ( #214 ) ( ce21598 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 8dd8aec )
2.7.2 (2022-01-08)
Documentation
fix docstring formatting ( #196 ) ( e7a3461 )
2.7.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 72f150f )
deps: require google-api-core >= 1.28.0 ( 72f150f )
Documentation
list oneofs in docstring ( 72f150f )
2.7.0 (2021-10-15)
Features
add support for python 3.10 ( #181 ) ( 0a40ab0 )
2.6.0 (2021-10-08)
Features
add context manager support in client ( #173 ) ( ceec8f1 )
2.6.0 (2021-10-07)
Features
add context manager support in client ( #173 ) ( ceec8f1 )
2.5.3 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 0feec1e )
2.5.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 42d768b )
2.5.1 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc chore: use gapic-generator-python 0.50.5 ( #143 ) ( b8ec21e )
Documentation
add Samples section to CONTRIBUTING.rst ( #135 ) ( ccfc32d )
Miscellaneous Chores
release as 2.5.1 ( #144 ) ( 28ffe6b )
2.5.0 (2021-07-21)
Features
Set audience field in authenticated HTTP task example ( #138 ) ( 7a5a0c6 )
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #134 ) ( fd3cb31 )
2.4.0 (2021-07-01)
Features
add always_use_jwt_access ( #122 ) ( 87c9ccc )
Bug Fixes
disable always_use_jwt_access ( #126 ) ( 54d2286 )
update sample for task name ( #120 ) ( b1be2de )
Documentation
omit mention of Python 2.7 in CONTRIBUTING.rst ( #116 ) ( 0732ab7 ), closes #1126
2.3.0 (2021-05-28)
Features
add from_service_account_info ( #80 ) ( 2498225 )
support self-signed JWT flow for service accounts ( 1acf20c )
Bug Fixes
add async client to %name_%version/init.py ( 1acf20c )
use correct retry deadlines ( 2498225 )
Documentation
fix grammar in documentation ( #112 ) ( 6f93a19 )
2.2.0 (2021-02-24)
Features
add from_service_account_info method to clients ( e1fdc76 )
v2beta3, v2beta2: introducing fields: ListQueuesRequest.read_mask, GetQueueRequest.read_mask, Queue.task_ttl, Queue.tombstone_ttl, Queue.stats and introducing messages: QueueStats ( e1fdc76 )
Bug Fixes
remove client recv msg limit fix: add enums to types/__init__.py ( #56 ) ( 6a5bfaf )
Update sample comments ( #58 ) ( 3eb30b3 )
Documentation
fix type references in docstrings ( e1fdc76 )
v2beta2: updates to AppEngineHttpRequest description ( e1fdc76 )
v2beta3: updates to max burst size description ( e1fdc76 )
2.1.0 (2020-12-07)
Features
add common resource helpers; expose client transport; add shebang to fixup scripts ( #34 ) ( 511e9f3 )
2.0.0 (2020-09-02)
⚠ BREAKING CHANGES
migrate to use microgen (#38)
Features
introduce field Queue.type; update default retry configs ( #29 ) ( 6b8ba85 )
migrate to use microgen ( #38 ) ( 18e146c )
Documentation
add samples from python-docs-samples/tasks ( #36 ) ( 9d022f7 ), closes #1068 #1116 #1133 #1186 #1217 #1254 #1271 #1288 #1309 #1311 #1329 #1320 #1355 #1359 #1529 #1532 #1541 #1563 #1552 #1566 #1698 #2114 #2113 #2156 #2208 #2250 #2316 #2187 #2439 #2516 #2543 #2700 #3168 #3171
1.5.0 (2020-02-24)
Features
tasks: add support for stackdriver logging config; update retry config (via synth) ( #8 ) ( 70b597a )
1.4.0 (2020-02-06)
Features
tasks: undeprecate resource helper methods; add py2 deprecation warning; change default timeouts; add 3.8 tests; edit docstrings (via synth)( #10074 ) ( 5577817 )
Bug Fixes
tasks: change default timeout values; bump copyright year to 2020; change line breaks in docstrings (via synth) ( #10271 ) ( f68536d )
tasks: deprecate resource name helper methods (via synth) ( #9864 ) ( ccf2cab )
1.3.0
11-04-2019 10:06 PST
Implementation Changes
Add proto annotations (via synth) ( #9352 )
New Features
Add HTTP tasks, OAuth tokens, and OIDC tokens (via synth) ( #9588 )
Documentation
Tweak docstrings (via synth) ( #9433 )
Disambiguate client requests from cloud task requests ( #9398 )
Change requests intersphinx url (via synth) ( #9409 )
Update documentation (via synth) ( #9069 )
Remove compatibility badges from READMEs ( #9035 )
Fix intersphinx reference to requests ( #9294 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
1.2.1
08-12-2019 13:50 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8971 )
Documentation
Fix links to googleapis.dev ( #8998 )
Update intersphinx mapping for requests. ( #8805 )
1.2.0
07-24-2019 17:41 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8406 )
New Features
Add ‘options_’ argument to clients’ ‘get_iam_policy’; pin black version (via synth). ( #8660 )
Add ‘client_options’ support, update list method docstrings (via synth). ( #8524 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Update pin for ‘grpc-google-iam-v1’ to 0.12.3+. ( #8647 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Fix typo in README. ( #8606 )
Internal / Testing Changes
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8366 )
Add disclaimer to auto-generated template files (via synth). ( #8330 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8254 )
Fix coverage in ‘types.py’ (via synth). ( #8166 )
Blacken noxfile.py, setup.py (via synth). ( #8134 )
Add empty lines (via synth). ( #8074 )
1.1.0
05-14-2019 15:30 PDT
Implementation Changes
Remove log_sampling_ratio, add stackdriver_logging_config (via synth). ( #7950 )
Documentation
Update docstrings (via synth). ( #7963 )
Update docstrings (via synth). ( #7940 )
Internal / Testing Changes
Add nox session docs , reorder methods (via synth). ( #7783 )
1.0.0
04-29-2019 16:35 PDT
Documentation
Correct docs/index.rst. ( #7808 )
Internal / Testing Changes
Add smoke test. ( #7808 )
0.7.0
04-15-2019 10:21 PDT
New Features
Add auth and stackdriver logging configuration (via synth). ( #7666 )
Documentation
Tasks: Format docstrings for enums (via synth). ( #7601 )
0.6.0
03-26-2019 13:35 PDT
Implementation Changes
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Generate v2. ( #7547 )
0.5.0
03-06-2019 15:03 PST
Implementation Changes
Remove unused message exports (via synth). ( #7276 )
Protoc-generated serialization update. ( #7096 )
New Features
Add ‘Task.http_request’ and associated message type (via synth). ( #7432 )
Add ‘Task.dispatch_deadline’ via synth. ( #7211 )
Documentation
Updated client library documentation URLs. ( #7307 )
Update copyright headers
Restore expanded example from PR #7025 after synth. ( #7062 )
Add working example for ‘create_queue’. ( #7025 )
Pick up stub docstring fix in GAPIC generator. ( #6983 )
Internal / Testing Changes
Copy lintified proto files (via synth). ( #7471 )
Add clarifying comment to blacken nox target. ( #7405 )
Copy proto files alongside protoc versions
Add protos as an artifact to library ( #7205 )
0.4.0
12-18-2018 09:50 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Pick up enum fixes in the GAPIC generator. ( #6616 )
Fix client_info bug, update docstrings and timeouts. ( #6422 )
Re-generate library using tasks/synth.py ( #5980 )
New Features
Pick up changes to GAPIC generator, drop ‘Code’ enum. ( #6509 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Avoid broken ‘google-common-apis 1.5.4’ release. ( #6355 )
Documentation
Document Python 2 deprecation ( #6910 )
Separate / distinguish API docs for different API versions. ( #6306 )
Docstring tweaks from protos. ( #6261 )
Normalize use of support level badges ( #6159 )
Remove autosynth / tweaks for ‘README.rst’ / ‘setup.py’. ( #5957 )
Replace links to /stable/ with /latest/ . ( #5901 )
Internal / Testing Changes
Add baseline for synth.metadata
Update noxfile.
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Add ‘mock’ to unit test dependencies for autogen libs. ( #6402 )
Add / fix badges for PyPI / versions. ( #6158 )
Don’t update nox in ‘tasks/synth.py’. ( #6232 )
Use new Nox ( #6175 )
0.3.0
Implementation Changes
Regenerate tasks to fix API enablement URL (#5579)
New Features
Tasks: Add v2beta3 endpoint (#5880)
Documentation
update Task library doc link (#5708)
tasks missing from docs (#5656)
0.2.0
Implementation Changes
regenerate tasks v2beta2 (#5469)
Avoid overwriting ‘ module ’ of messages from shared modules. (#5364)
0.1.0
New Features
Add v2beta2 endpoint for Tasks
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
