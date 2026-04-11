---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/changelog
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
2.24.0 (latest)
2.23.0
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.2
2.14.0
2.13.2
2.12.0
2.11.1
2.10.0
2.9.0
2.8.3
2.7.2
2.6.2
2.5.1
2.4.0
2.3.0
2.2.0
2.1.6
2.0.1
1.15.5
1.14.0
1.13.2
1.12.0
1.11.0
1.10.0
1.9.0
PyPI History
2.24.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:a38add811f7f139d6a385b22d283ad09ef305b8cf50382ef62f0ce690787f021 ( e1673980daa0f80cfa16e35b52a2670fe2783ace )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:51d42b9060365aa10d21e64a370b82bf1e07ed7f1e46062dcb3ad10632b0acc8 ( b4b3508724eab46796ce9309d2540a3c07e465fc )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.23.0 (2025-12-16)
Features
support mTLS certificates when available (#658) ( 85c023287daebb0d5c1a009e2beaccf0c6ea75eb )
2.22.0 (2025-12-12)
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#601) ( df729015149bd69e9d6dbced260d97c8eed77d4f )
2.21.0 (2025-04-10)
Features
Add REST Interceptors which support reading metadata ( 7be9c4c )
Add support for opt-in debug logging ( 7be9c4c )
Bug Fixes
Allow protobuf 6.x ( #598 ) ( 7c1171b )
Backwards-compatibility for previous meaning format ( #603 ) ( ed92e8e )
Fix typing issue with gRPC metadata when key ends in -bin ( 7be9c4c )
2.20.2 (2024-12-12)
Bug Fixes
Preserve list meanings ( #575 ) ( 266243b )
2.20.1 (2024-08-14)
Bug Fixes
Allow protobuf 5.x; require protobuf >=3.20.2 ( #560 ) ( ad50e36 )
2.20.0 (2024-08-07)
Features
Add new types ExplainOptions, ExplainMetrics, PlanSummary, ExecutionStats ( #521 ) ( dfbee2d )
Add new_transaction support ( #499 ) ( 43855dd )
Implement query profiling ( #542 ) ( 1500f70 )
New PropertyMask field which allows partial commits, lookups, and query results ( 7fd218b )
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( #555 ) ( 5e773cb )
Using end_cursor instead of skipped_cursor in Iterator to fix rare bug. ( #552 ) ( 4982f9a )
2.19.0 (2023-12-10)
Features
Add support for Python 3.12 ( #498 ) ( d1d60fa )
Introduce compatibility with native namespace packages ( #497 ) ( 87b3392 )
Bug Fixes
Use retry_async instead of retry in async client ( 4e15ce6 )
Documentation
Minor formatting ( #476 ) ( b13b15c )
2.18.0 (2023-09-05)
Features
Add support for Sum and Avg aggregation query ( #437 ) ( e99120d )
Documentation
Update property requirement specifications ( #470 ) ( 795ce81 )
2.17.0 (2023-08-09)
Features
Publish proto definitions for SUM/AVG in Datastore ( cfcd0c2 )
Documentation
Minor formatting in Datastore Admin API ( cfcd0c2 )
Specify limit for properties in Index message in Datastore Admin API ( cfcd0c2 )
2.16.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #452 ) ( 05f20dc )
2.16.0 (2023-06-21)
Features
Named database support ( #439 ) ( abf0060 )
2.15.2 (2023-05-04)
Documentation
Minor comment update for Entity message ( #434 ) ( b31a944 )
2.15.1 (2023-03-24)
Documentation
Fix formatting of request arg in docstring ( #428 ) ( da86a02 )
Improve query API documentation ( #430 ) ( 915daf5 )
2.15.0 (2023-03-09)
Features
OR Query implementation ( #418 ) ( 3256951 )
2.14.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 6785908 )
Documentation
Minor documentation formatting and cleanup ( 6785908 )
2.13.2 (2023-01-23)
Bug Fixes
Fix system test using utc timezone ( #406 ) ( 93537ef )
2.13.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 9cec031 )
Documentation
Add documentation for enums ( 9cec031 )
2.13.0 (2023-01-14)
Features
Add dynamic routing header annotation to DatastoreV1 ( #400 ) ( 1043ba3 )
New transaction options for datastoreV1 ( #402 ) ( 906d026 )
2.12.0 (2023-01-10)
Features
Add support for python 3.11 ( #396 ) ( 19aca56 )
2.11.1 (2022-12-09)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 6f6bb63 )
Drop usage of pkg_resources ( 6f6bb63 )
Fix timeout default values ( 6f6bb63 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 6f6bb63 )
2.11.0 (2022-11-30)
Features
Support “limit” in count query. ( #384 ) ( a4b666a )
2.10.0 (2022-11-01)
Features
Support the Count aggregation query ( #368 ) ( b400a9a )
2.9.0 (2022-10-18)
Features
Add datastore aggregation query APIs ( #306 ) ( 96d98e5 )
Bug Fixes
deps: Allow protobuf 3.19.5 ( #372 ) ( 9305154 )
2.8.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #365 ) ( 4e3e81f )
2.8.1 (2022-08-12)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #347 ) ( de13860 )
deps: require proto-plus >= 1.22.0 ( de13860 )
Documentation
Move the schedule_export samples from python-docs-samples ( #344 ) ( 2174800 )
samples: Add an example of using read_time in queries and get() ( #342 ) ( ffc5f17 )
2.8.0 (2022-07-15)
Features
Add read_time support for get and query ( #334 ) ( 58b4b74 )
2.7.2 (2022-07-10)
Bug Fixes
require python 3.7+ ( #332 ) ( a9c513f )
2.7.1 (2022-06-16)
Documentation
samples: add samples for IN, NOT_IN, and != operators. ( #312 ) ( 4170325 )
2.7.0 (2022-06-09)
Features
support IN/NOT_IN/NOT_EQUAL operators ( #287 ) ( 465bd87 )
2.6.2 (2022-06-07)
Bug Fixes
deps: require protobuf <4.0.0dev ( #318 ) ( 1dccd37 )
Documentation
fix changelog header to consistent size ( #319 ) ( d3e9304 )
2.6.1 (2022-05-27)
Bug Fixes
regenerate pb2 file with grpcio-tools ( #314 ) ( 0412cd5 )
2.6.0 (2022-05-05)
Features
expose new read_time API fields, currently only available in private preview ( 8d2bd17 )
Documentation
fix type in docstring for map fields ( 8d2bd17 )
2.5.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #278 ) ( ac08eb1 )
deps: require proto-plus>=1.15.0 ( ac08eb1 )
2.5.0 (2022-02-26)
Features
add api key support ( e166d7b )
define Datastore -> Firestore in Datastore mode migration long running operation metadata ( #270 ) ( e166d7b )
Bug Fixes
deps: move libcst to extras ( #271 ) ( d53fcce )
resolve DuplicateCredentialArgs error when using credentials_file ( e166d7b )
Documentation
add generated snippets ( e166d7b )
2.4.0 (2021-11-08)
Features
add context manager support in client ( d6c8868 )
add methods for creating and deleting composite indexes ( #248 ) ( d6c8868 )
add support for self-signed JWT flow for service accounts ( d6c8868 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( d6c8868 )
export async client from ‘google/cloud/datastore_v1’ ( d6c8868 )
deps: require google-api-core >= 1.28.0 ( d6c8868 )
Documentation
list ‘oneofs’ in docstrings for message classes ( d6c8868 )
2.3.0 (2021-10-18)
Features
add ‘Client.entity’ helper ( #239 ) ( 49d48f1 )
Bug Fixes
improve type hints, mypy check ( #242 ) ( 6398bbc )
2.2.0 (2021-10-08)
Features
add support for Python 3.10 ( #233 ) ( f524c40 )
2.1.6 (2021-07-26)
Documentation
add Samples section to CONTRIBUTING.rst ( #195 ) ( f607fb5 )
2.1.5 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #194 ) ( e94f97c )
2.1.4 (2021-07-09)
Performance Improvements
further avoid using proto-plus wrapper when unmarshalling entities ( #190 ) ( d0481bf )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #181 ) ( 6efde70 )
2.1.3 (2021-05-25)
Bug Fixes
perf: improve performance unmarshalling entities from protobuf2 ( #175 ) ( 0e5b718 )
2.1.2 (2021-05-03)
Bug Fixes
pass transaction’s options to API in ‘begin’ ( #143 ) ( 924b10b )
Documentation
update intersphinx URLs for grpc and auth ( #93 ) ( 4f90d04 )
2.1.1 (2021-04-20)
Bug Fixes
make HTTPDatastoreAPI compatible w/ microgen Gapic API ( #136 ) ( d522799 )
optimize protobuf access for performance ( #155 ) ( 5b67daa ), closes #145 #150
2.1.0 (2020-12-04)
Features
support autoconversion of Entity to Key for purposes of delete & delete_multi ( #123 ) ( bf1dde6 )
Fix
remove six dependency ( #120 ) ( b1715e5 )
2.0.1 (2020-11-13)
Bug Fixes
fix id_or_name property of key class ( #115 ) ( 6f28b84 )
normalize / test deprecation of ‘Client.reserve_ids’ ( #103 ) ( 5851522 ), closes #101 #100
2.0.0 (2020-11-06)
⚠ BREAKING CHANGES
remove support for Python 2.7
Leverage new generator, proto-plus, for google-cloud-datastore (#104)
Features
Leverage new generator, proto-plus, for google-cloud-datastore ( #104 ) ( 1723a26 )
Documentation
adds UPGRADING.md, note to readme, to help inform users about migration to v2 ( #113 ) ( 0d496c6 )
2.0.0-dev1 (2020-10-30)
⚠ BREAKING CHANGES
Leverage new generator, proto-plus, for google-cloud-datastore (#104)
Features
Leverage new generator, proto-plus, for google-cloud-datastore ( #104 ) ( 1723a26 )
1.15.3 (2020-10-06)
Bug Fixes
use full path and os.path to version.py in setup.py ( #97 ) ( 0f5506f )
1.15.2 (2020-10-06)
Bug Fixes
use version.py instead of pkg_resources.get_distribution ( #94 ) ( ea77534 )
1.15.2 (2020-10-06)
Bug Fixes
use version.py instead of pkg_resources.get_distribution ( #94 ) ( ea77534 )
1.15.1 (2020-09-23)
Bug Fixes
repair implementation of Client.reserve_ids ( #76 ) ( 7df727d ), closes #37
Documentation
document thread-safety of client ( #75 ) ( ae0339c )
1.15.0 (2020-08-14)
Features
add retry and timeout args to API methods ( #67 ) ( f3283e1 ), closes #3
supply anonymous credentials under emulator ( #71 ) ( 4db3c40 ), closes #70
Bug Fixes
smooth over system test bumps ( #66 ) ( 8bb17ea )
Documentation
add docs for admin client ( #63 ) ( 43ff64a ), closes #49
1.14.0 (2020-08-05)
Features
pass ‘client_options’ to base class ctor ( #60 ) ( 2575697 ), closes #50
Documentation
correct semantics of ‘complete_key’ arg to ‘Client.reserve_ids’ ( #36 ) ( 50ed945 )
update docs build (via synth) ( #58 ) ( 5bdacd4 ), closes #700
1.13.2 (2020-07-17)
Bug Fixes
modify admin pkg name in gapic ( #47 ) ( 5b5011d )
1.13.1 (2020-07-13)
Bug Fixes
add missing datastore admin client files ( #43 ) ( 0d40f87 )
1.13.0 (2020-07-01)
Features
add datastore admin client ( #39 ) ( 1963fd8 )
add synth config to generate datastore_admin_v1 ( #27 ) ( 83c636e )
Create CODEOWNERS ( #28 ) ( 0198419 )
1.12.0 (2020-04-07)
Features
datastore: add missing method for system test with emulator ( #19 ) ( bf8b897 )
Bug Fixes
Address queries not fully satisfying requested offset ( #18 ) ( e7b5fc9 )
1.11.0 (2020-02-27)
Features
datastore: add return query object in add filter method ( #12 ) ( 6a9efab )
1.10.0
10-10-2019 12:20 PDT
Implementation Changes
Remove send / receive message size limit (via synth). ( #8952 )
New Features
Add client_options to constructors for manual clients. ( #9055 )
Dependencies
Pin google-cloud-core >= 1.0.3, < 2.0.0dev . ( #9055 )
Documentation
Fix intersphinx reference to requests. ( #9294 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
Remove compatability badges from READMEs. ( #9035 )
Update docs for building datastore indexes. ( #8707 )
Update intersphinx mapping for requests. ( #8805 )
1.9.0
07-24-2019 16:04 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8388 )
New Features
Add ‘client_options’ support (via synth). ( #8506 )
Add ‘Client.reserve_ids’ API wrapper. ( #8178 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Internal / Testing Changes
Pin black version (via synth). ( #8580 )
Remove typing information for kwargs to not conflict with type checkers ( #8546 )
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8350 )
Add disclaimer to auto-generated template files (via synth). ( #8312 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8238 )
Blacken noxfile.py, setup.py (via synth). ( #8120 )
Add empty lines (via synth). ( #8055 )
1.8.0
05-17-2019 08:28 PDT
Implementation Changes
Add routing header to method metadata (via synth). ( #7593 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Add client_info support to client. ( #8013 )
Dependencies
Pin google-cloud-core >= 1.0.0, < 2.0dev . ( #7993 )
Documentation
Update client library documentation URLs. ( #7307 )
Pick up stub docstring fix in GAPIC generator. ( #6968 )
Internal / Testing Changes
Add nox session docs (via synth). ( #7768 )
Copy lintified proto files (via synth). ( #7446 )
Add clarifying comment to blacken nox target. ( #7389 )
Add protos as an artifact to library ( #7205 )
Update copyright headers ( #7142 )
Protoc-generated serialization update. ( #7080 )
1.7.3
12-17-2018 16:45 PST
Documentation
Show use of ‘batch.begin()’ in docstring example. ( #6932 )
Document Python 2 deprecation ( #6910 )
1.7.2
12-10-2018 12:37 PST
Implementation Changes
Fix client_info bug, update docstrings. ( #6409 )
Pick up fixes in GAPIC generator. ( #6494 )
Import iam.policy from google.api_core . ( #6741 )
Pick up enum fixes in the GAPIC generator. ( #6610 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Update version of google-cloud-core ( #6858 )
Internal / Testing Changes
Update noxfile.
Add synth metadata. ( #6564 )
blacken all gen’d libs ( #6792 )
omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
1.7.1
10-29-2018 10:38 PDT
Implementation Changes
Propagate empty arrays in entity values. ( #6285 )
Expose ‘Client.base_url’ property to allow alternate endpoints. ( #5821 )
Documentation
Normalize use of support level badges ( #6159 )
Redirect renamed ‘usage.html’/’client.html’ -> ‘index.html’. ( #5996 )
Replace links to ‘/stable/’ with ‘/latest/’. ( #5901 )
Internal / Testing Changes
Use new Nox ( #6175 )
Add ‘synth.py’. ( #6078 )
Prep datastore docs for repo split. ( #5919 )
Use inplace installs under nox ( #5865 )
1.7.0
Implementation Changes
Do not pass ‘offset’ once the query iterator has a cursor (#5503)
Add test runs for Python 3.7 and remove run for 3.4 (#5295)
Documentation
minor fix to datastore example (#5452)
Add example showing explicit unicode for text values in entities. (#5263)
Internal / Testing Changes
Modify system tests to use prerelease versions of grpcio (#5304)
Avoid overwriting ‘ module ’ of messages from shared modules. (#5364)
Attempt again to reproduce #4264. (#5403)
Fix bad trove classifier
1.6.0
Implementation changes
Don’t check exclude_from_indexes for empty lists. (#4915)
Dependencies
The minimum version for google-api-core has been updated to version 1.0.0. This may cause some incompatibility with older google-cloud libraries, you will need to update those libraries if you have a dependency conflict. (#4944, #4946)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
Exercise datastore query result paging (#4905)
Pass \*session.posargs through on command line for system tests. (#4904)
1.5.0
Interface additions
Added Entity.id property (#4640)
Added optional location_prefix kwarg in to_legacy_urlsafe (#4635)
Added support for transaction options (#4357)
Added the ability to specify read consistency (#4343, #4376)
Implementation changes
The underlying autogenerated code was rengereated to pick up new features and bugfixes. (#4348, #4877)
Updated the HTTP implementation to match the gRPC implementation. (#4388)
Set next_page_token to None if there are no more results (#4349)
Documentation
Entity doc consistency (#4641)
Fixing “Fore” -> “For” typo in README docs. (#4317)
Testing
Update datastore doctests to reflect change in cursor behavior. (#4382)
Making a nox -s default session for all packages. (#4324)
Shorten test names (#4321)
1.4.0
Interface changes / additions
Allowing dict (as an Entity ) for property values. (#3927)
Documentation
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
PyPI: https://pypi.org/project/google-cloud-datastore/1.4.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
