---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/changelog
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
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.0
1.9.1
1.8.0
1.7.3
1.6.2
1.5.1
1.4.0
1.3.4
1.2.0
1.1.0
1.0.0
0.24.2
0.23.0
0.22.1
PyPI History
1.19.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.18.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.17.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.16.2 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
1.16.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.16.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
1.15.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.14.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
1.14.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
1.13.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
1.13.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
1.13.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.13.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
1.13.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.13.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
1.12.0 (2023-12-07)
Features
Add support for python 3.12 ( f920d22 )
Introduce compatibility with native namespace packages ( f920d22 )
Bug Fixes
Require proto-plus >= 1.22.3 ( f920d22 )
Use retry_async instead of retry in async client ( f920d22 )
1.11.3 (2023-10-09)
Documentation
Minor formatting ( 3886cb0 )
1.11.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #318 ) ( ba205b8 )
1.11.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #308 ) ( 838132e )
1.11.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 7d854a6 )
1.10.0 (2023-01-24)
Features
Add Cloud Trace v2 retry defaults for BatchWriteSpans ( #294 ) ( 92cb4fa )
1.9.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 170efe4 )
Documentation
Add documentation for enums ( 170efe4 )
1.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #287 ) ( ef5bcb3 )
1.8.0 (2022-12-14)
Features
Add support for google.cloud.trace.__version__ ( a45bd77 )
Add typing to proto.Message based class attributes ( a45bd77 )
Bug Fixes
Add dict typing for client_options ( a45bd77 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 5cd01da )
Drop usage of pkg_resources ( 5cd01da )
Fix timeout default values ( 5cd01da )
Documentation
samples: Snippetgen handling of repeated enum field ( a45bd77 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 5cd01da )
1.7.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #273 ) ( 9e2fc85 )
1.7.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #270 ) ( 734a8e0 )
1.7.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #251 ) ( 6abbc94 )
deps: require proto-plus >= 1.22.0 ( 6abbc94 )
1.7.0 (2022-07-16)
Features
add audience parameter ( 9fbef80 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #244 ) ( aa3229c )
require python 3.7+ ( #242 ) ( c24ff5e )
1.6.2 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #229 ) ( 6074f64 )
Documentation
fix changelog header to consistent size ( #230 ) ( 4994bb7 )
1.6.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #193 ) ( cef4d52 )
deps: require proto-plus>=1.15.0 ( cef4d52 )
1.6.0 (2022-02-11)
Features
add api key support ( #176 ) ( 5c1ea85 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( e0294af )
1.5.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 755b803 )
deps: require google-api-core >= 1.28.0 ( 755b803 )
Documentation
list oneofs in docstring ( 755b803 )
1.5.0 (2021-10-14)
Features
add support for python 3.10 ( #146 ) ( 11d2d9e )
1.4.0 (2021-10-07)
Features
add context manager support in client ( #141 ) ( 2bf8ab7 )
1.3.4 (2021-09-30)
Bug Fixes
improper types in pagers generation ( cb38c20 )
1.3.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 4a5ed62 )
1.3.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #113 ) ( 99eba56 )
Documentation
add Samples section to CONTRIBUTING.rst ( #109 ) ( 6aa9d7a )
Miscellaneous Chores
release as 1.3.2 ( #114 ) ( 57d63cd )
1.3.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #108 ) ( 63a9999 )
1.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #96 ) ( e88837d )
Bug Fixes
disable always_use_jwt_access ( #100 ) ( 110f692 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #91 ) ( 5dcc16c )
1.2.0 (2021-05-27)
Features
add from_service_account_info ( e097a64 )
add common resource path helpers ( #70 ) ( e097a64 )
support self-signed JWT flow for service accounts ( 1055668 )
Bug Fixes
add async client ( 1055668 )
deps: add packaging requirement ( #84 ) ( 792599f )
use correct retry deadlines ( e097a64 )
1.1.0 (2020-10-13)
Features
bump to GA ( #51 ) ( 1985fef )
Documentation
state >=3.6 requirement in README ( #42 ) ( c162047 )
Dependencies
remove unused google-cloud-core dependency ( #50 ) ( e748cb4 )
1.0.0 (2020-09-14)
⚠ BREAKING CHANGES
migrate to microgenerator. See Migration Guide (#29)
Features
migrate to microgenerator ( #29 ) ( f0d9d91 )
0.24.0 (2020-08-06)
⚠ BREAKING CHANGES
trace: remove span_path resource helper method from v2; modify retry configs; standardize usage of ‘optional’ and ‘required’ for args in docstrings; add 2.7 deprecation warning (via synth) (#10075)
Features
trace: add client_options to constructor ( #9154 ) ( a5b4f7a )
added support for span kind ( #28 ) ( 23ba194 )
Bug Fixes
trace: remove span_path resource helper method from v2; modify retry configs; standardize usage of ‘optional’ and ‘required’ for args in docstrings; add 2.7 deprecation warning (via synth) ( #10075 ) ( 4c02194 )
Documentation
add python 2 sunset banner to documentation ( #9036 ) ( 52f3ab5 )
0.23.0
10-15-2019 06:59 PDT
Dependencies
Pin ‘google-cloud-core >= 1.0.3, < 2.0.0dev’. ( #9445 )
Documentation
Change requests intersphinx url (via synth). ( #9410 )
Fix intersphinx reference to requests ( #9294 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
Remove compatability badges from READMEs. ( #9035 )
0.22.1
08-12-2019 13:51 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8973 )
Documentation
Fix links to googleapis.dev ( #8998 )
Fix pip / usage examples in README.rst. ( #8833 )
Update intersphinx mapping for requests. ( #8805 )
0.22.0
07-24-2019 17:50 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8408 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8526 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Internal / Testing Changes
All: Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8368 )
Add disclaimer to auto-generated template files (via synth). ( #8332 )
Fix coverage in ‘types.py’ (via synth). ( #8167 )
Add empty lines (via synth). ( #8075 )
0.21.0
05-16-2019 12:58 PDT
Implementation Changes
Add routing header to method metadata (via synth). ( #7602 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Add client_info support to clients. ( #7899 )
Dependencies
Pin google-cloud-core >= 1.0.0, < 2.0dev . ( #7993 )
Documentation
Update docstring for page_size (via synth). ( #7688 )
Updated client library documentation URLs. ( #7307 )
Pick up stub docstring fix in GAPIC generator. ( #6985 )
Internal / Testing Changes
Add nox session docs , reorder methods (via synth). ( #7783 ) and ( #7784 )
Copy lintified proto files (via synth). ( #7455 )
Add clarifying comment to blacken nox target. ( #7406 )
Remove unused message exports (via synth). ( #7278 )
Copy proto files alongside protoc versions ( #7254 )
Trivial gapic-generator change. ( #7236 )
Add protos as an artifact to library ( #7205 )
Update copyright headers (via synth). ( #7161 )
Protoc-generated serialization update. ( #7098 )
0.20.2
12-17-2018 17:06 PST
Documentation
Document Python 2 deprecation ( #6910 )
0.20.1
12-07-2018 16:06 PST
Implementation Changes
Fix trace client memory leak ( #6856 )
Dependencies
Update version of google-cloud-core ( #6858 )
Internal / Testing Changes
Add baseline for synth.metadata
0.20.0
12-05-2018 13:16 PST
Implementation Changes
Use moved iam.policy now at google.api_core.iam.policy ( #6741 )
Pick up fixes to GAPIC generator. ( #6577 )
Fix client_info bug, update docstrings and timeouts. ( #6424 )
Pass credentials into TraceServiceClient ( #5596 )
Avoid overwriting ‘ module ’ of messages from shared modules. ( #5364 )
New Features
Add ‘synth.py’. ( #6083 )
Dependencies
Bump minimum ‘api_core’ version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Normalize use of support level badges ( #6159 )
Add static HTML redirect page for ‘trace/starting.html’. ( #6142 )
Prep docs for repo split. ( #6024 )
Replace links to ‘/stable/’ with ‘/latest/’. ( #5901 )
Internal / Testing Changes
Updates to noxfile and other templates. Start Blackening. ( #6792 ),
( #6701 ),
( #6698 ),
( #6666 ),
( #6642 )
Use new Nox ( #6175 )
Add kokoro for trace, remove trace from CircleCI ( #6112 )
Use inplace installs ( #5865 )
Add Test runs for Python 3.7 and remove 3.4 ( #5295 )
Fix bad trove classifier
Move unit test from gax to gapic ( #4988 )
0.19.0
Dependencies
The minimum version for google-api-core has been updated to version 1.0.0. This may cause some incompatibility with older google-cloud libraries, you will need to update those libraries if you have a dependency conflict. (#4944, #4946)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
0.18.0
Breaking changes
The underlying autogenerated client library was re-generated to pick up new
features and resolve bugs, this may change the exceptions raised from various
methods. (#4799)
0.17.0
Notable Implementation Changes
Default to use Stackdriver Trace V2 API if calling from google.cloud import trace .
Using V1 API needs to be explicitly specified in the import.(#4437)
PyPI: https://pypi.org/project/google-cloud-trace/0.17.0/
0.16.0
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
PyPI: https://pypi.org/project/google-cloud-trace/0.16.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
