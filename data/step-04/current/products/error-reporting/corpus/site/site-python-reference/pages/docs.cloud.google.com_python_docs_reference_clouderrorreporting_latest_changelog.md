---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/changelog
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
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.1
1.10.0
1.9.2
1.8.2
1.7.0
1.6.3
1.5.3
1.4.1
1.3.0
1.2.3
1.1.2
1.0.0
0.34.0
0.33.0
0.32.1
PyPI History
1.15.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:a38add811f7f139d6a385b22d283ad09ef305b8cf50382ef62f0ce690787f021 ( 51f9aa03553afae0e4ae2232063eee0f8392c100 )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.14.0 (2025-12-16)
Features
support mTLS certificates when available (#717) ( 7e99258b41ddef55b63c70c7e31afced4ab30103 )
1.13.0 (2025-11-12)
Features
Add support for Python 3.14 ( #712 ) ( e8b4762 )
Bug Fixes
Deprecate credentials_file argument ( f86c964 )
1.12.0 (2025-05-21)
Features
Add REST Interceptors which support reading metadata ( 1d120c7 )
Add support for opt-in debug logging ( 1d120c7 )
Bug Fixes
Allow Protobuf 6.x ( #557 ) ( 9f8faeb )
Fix typing issue with gRPC metadata when key ends in -bin ( 1d120c7 )
Remove setup.cfg configuration for creating universal wheels ( #562 ) ( 0738c03 )
Require proto-plus >= 1.25.0 for Python 3.13 ( #567 ) ( d5cd225 )
1.11.1 (2024-09-17)
Bug Fixes
Allow Protobuf 5.x ( #507 ) ( 8d33168 )
Retry and timeout values do not propagate in requests during pagination ( #518 ) ( cbe41fd )
Documentation
Add summary_overview template ( #496 ) ( 988def5 )
Removes references as a “global-only” service ( 1fef616 )
Updates documentation with regional resource names for multiple requests ( 1fef616 )
1.11.0 (2024-03-26)
Features
Allow users to explicitly configure universe domain ( #475 ) ( e4c3454 )
1.10.0 (2023-12-10)
Features
Add support for Python 3.12 ( #459 ) ( 36c1b59 )
Use native namespaces instead of pkg_resources ( #463 ) ( a63e3f2 )
Bug Fixes
Use retry_async instead of retry in async client ( #462 ) ( 44c2b14 )
Documentation
Minor formatting ( #448 ) ( 48823d4 )
1.9.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #434 ) ( 319fa54 )
1.9.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #422 ) ( 561dc39 )
1.9.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #418 ) ( b2b9eab )
1.8.2 (2023-02-04)
Documentation
Removed link to the regionalization page ( #411 ) ( 3a0d82d )
1.8.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 26a0749 )
Documentation
Add documentation for enums ( 26a0749 )
1.8.0 (2023-01-10)
Features
Add support for python 3.11 ( #405 ) ( d5e0c4c )
1.7.0 (2022-12-15)
Features
Add typing to proto.Message based class attributes ( ccaa40f )
Bug Fixes
Add dict typing for client_options ( ccaa40f )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( ccaa40f )
Drop usage of pkg_resources ( ccaa40f )
Fix timeout default values ( ccaa40f )
Documentation
samples: Snippetgen handling of repeated enum field ( ccaa40f )
samples: Snippetgen should call await on the operation coroutine before calling result ( ccaa40f )
1.6.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #391 ) ( 6a42c05 )
1.6.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #388 ) ( adde212 )
1.6.1 (2022-08-12)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #366 ) ( 9535a28 )
deps: require proto-plus >= 1.22.0 ( 9535a28 )
1.6.0 (2022-07-14)
Features
add audience parameter ( f53a2fa )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #354 ) ( f53a2fa )
require python 3.7+ ( #358 ) ( ab0a9ba )
1.5.3 (2022-06-07)
Bug Fixes
deps: require protobuf <4.0.0dev ( #347 ) ( ad4c778 )
Documentation
fix changelog header to consistent size ( #346 ) ( 6dc90f7 )
1.5.2 (2022-04-16)
Bug Fixes
Reenable staleness bot ( #264 ) ( 393141a )
1.5.1 (2022-03-07)
Bug Fixes
deps: allow google-cloud-logging <4.0.0dev ( #244 ) ( b2f83cf )
deps: require google-api-core>=1.31.5, >=2.3.2 ( #241 ) ( af66168 )
deps: require proto-plus>=1.15.0 ( af66168 )
1.5.0 (2022-02-16)
Features
add api key support ( #221 ) ( b207f2c )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( f0afcae )
1.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 31e3d6b )
deps: require google-api-core >= 1.28.0 ( 31e3d6b )
Documentation
list oneofs in docstring ( 31e3d6b )
1.4.0 (2021-10-14)
Features
add support for python 3.10 ( #192 ) ( 76cc041 )
1.3.0 (2021-10-11)
Features
add context manager support in client ( #187 ) ( a4e2cd4 )
Bug Fixes
exception thrown when grpc is disabled ( #190 ) ( 929e293 )
improper types in pagers generation ( 18c93a9 )
1.2.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 253a66f )
1.2.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #156 ) ( f9656c8 )
Documentation
add Samples section to CONTRIBUTING.rst ( #151 ) ( 8f11190 )
Miscellaneous Chores
release as 1.2.2 ( #157 ) ( ea26377 )
1.2.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #150 ) ( 1c87673 )
1.2.0 (2021-07-01)
Features
add always_use_jwt_access ( #140 ) ( 2f8f790 )
Bug Fixes
deps: add packaging requirement ( #124 ) ( ed36389 )
deps: widen version range on google-cloud-logging ( #133 ) ( c5e87bb )
disable always_use_jwt_access ( 8aff323 )
disable always_use_jwt_access ( #144 ) ( 8aff323 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #137 ) ( 0ca7d43 )
1.1.2 (2021-04-05)
Dependencies
upgrade sphinx ( #99 ) ( a118123 )
1.1.1 (2021-02-25)
Bug Fixes
remove gRPC send/recv limit; add enums to types/__init__.py ( #57 ) ( e23e5ba )
1.1.0 (2020-12-01)
Features
add common resource path helpers; expose client transport as property ( #37 ) ( bc92bc2 )
Bug Fixes
changed import path for logging client ( #43 ) ( a09449d )
Documentation
removed stackdriver branding ( #44 ) ( 5eea8c4 )
1.0.0 (2020-08-28)
⚠ BREAKING CHANGES
migrate to use microgen (#23)
Features
migrate to use microgen ( #23 ) ( cb41e3a )
Documentation
add multiprocessing note ( #13 ) ( 840d67c )
0.34.0 (2020-05-03)
Features
set release_status to beta ( #5 ) ( e9361c5 )
0.33.0
10-22-2019 12:10 PDT
New Features
Add client_options to constructor ( #9152 )
Dependencies
Pin google-cloud-logging >= 1.14.0, < 2.0.0dev . ( #9476 )
Documentation
Remove references to the old authentication credentials. ( #9456 )
Fix intersphinx reference to requests. ( #9294 )
Remove CI for gh-pages , use googleapis.dev for api_core refs. ( #9085 )
Internal / Testing Changes
Harden test_report_exception systest by increasing max_tries . ( #9396 )
0.32.1
08-23-2019 10:12 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8954 )
Documentation
Fix documentation links for iam and error-reporting. ( #9073 )
Remove compatability badges from READMEs. ( #9035 )
Update intersphinx mapping for requests. ( #8805 )
0.32.0
07-24-2019 16:17 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8389 )
Fix typo in non-gRPC import. ( #8028 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8508 )
Documentation
Fix docs navigation issues. ( #8723 )
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Fix mistake in documentation ( #8271 )
Internal / Testing Changes
Pin black version (via synth). ( #8582 )
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8351 )
Add disclaimer to auto-generated template files (via synth). ( #8313 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8240 )
Blacken noxfile.py, setup.py (via synth). ( #8122 )
Add empty lines (via synth). ( #8057 )
0.31.0
05-17-2019 08:23 PDT
Implementation Changes
Add routing header to method metadata (via synth). ( #7594 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Add client_info support to Client. ( #7903 )
Dependencies
Pin google-cloud-logging >= 1.11.0 . ( #8015 )
Documentation
Update client library documentation URLs. ( #7307 )
Internal / Testing Changes
Add nox session docs (via synth). ( #7770 )
Fix docstring replace in synth ( #7458 )
Copy lintified proto files (via synth). ( #7447 )
Add clarifying comment to blacken nox target (via synth). ( #7391 )
Add protos as an artifact to library ( #7205 )
Update copyright headers. ( #7144 )
Protoc-generated serialization update. ( #7082 )
Pick up stub docstring fix in GAPIC generator. ( #6970 )
Fix formatting ( #7002 )
0.30.1
12-17-2018 18:17 PST
Implementation Changes
Pick up fixes to GAPIC generator. ( #6522 )
Fix client_info bug, update docstrings via synth. ( #6442 )
Documentation
Document Python 2 deprecation ( #6910 )
Fix #6321 Update README service links in quickstart guides. ( #6322 )
Prep docs for repo split. ( #6155 )
Replace links to /stable/ with /latest/ . ( #5901 )
Internal / Testing Changes
Update noxfile.
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Add synth metadata. ( #6566 )
Use new Nox ( #6175 )
Add ‘synth.py’. ( #6082 )
Use Nox inplace installs ( #5865 )
0.30.0
Implementation Changes
Make dependency on logging less restrictive in error_reporting (#5345)
Internal / Testing Changes
Modify system tests to use prerelease versions of grpcio (#5304)
Add Test runs for Python 3.7 and remove 3.4 (#5295)
Fix bad trove classifier
0.29.1
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Fix missing extra in api-core dependency (#4764)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
0.29.0
Breaking changes
The underlying autogenerated client library was re-generated to pick up new
features and resolve bugs, this may change the exceptions raised from various
methods. (#4695)
0.28.0
Documentation
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
Upgrading to google-cloud-logging >= 1.4.0 (#4296)
PyPI: https://pypi.org/project/google-cloud-error-reporting/0.28.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
