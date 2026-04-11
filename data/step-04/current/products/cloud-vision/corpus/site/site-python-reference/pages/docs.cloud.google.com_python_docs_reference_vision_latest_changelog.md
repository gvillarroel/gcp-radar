---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vision/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vision/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vision/latest/changelog
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
3.13.0 (latest)
3.12.1
3.11.0
3.10.2
3.9.0
3.8.1
3.7.4
3.6.0
3.5.0
3.4.5
3.3.1
3.2.0
3.1.4
3.0.0
2.8.0
2.7.3
2.6.3
2.5.0
2.4.4
2.3.2
2.2.0
2.1.0
2.0.0
1.0.2
0.42.0
0.41.0
0.40.0
0.39.0
0.38.1
PyPI History
3.13.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
3.12.1 (2026-02-05)
Bug Fixes
fix mypy errors (#15494) ( 1f4c2862d77afa893f7a968af57e7adf54d49d0e )
3.12.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
3.11.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
3.10.2 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
3.10.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
3.10.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
3.9.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
3.8.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
3.8.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
3.7.4 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
3.7.3 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
3.7.2 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
3.7.1 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
3.7.0 (2024-02-06)
Features
[google-cloud-vision] Added option for user to set labels ( #12277 ) ( f7e25db )
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
3.6.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
3.5.0 (2023-12-07)
Features
Add support for python 3.12 ( f920d22 )
Introduce compatibility with native namespace packages ( f920d22 )
Bug Fixes
Require proto-plus >= 1.22.3 ( f920d22 )
Use retry_async instead of retry in async client ( f920d22 )
3.4.5 (2023-10-18)
Documentation
Minor formatting ( #552 ) ( 747296f )
3.4.4 (2023-07-04)
Bug Fixes
Add async context manager return types ( #539 ) ( 69e507f )
3.4.3 (2023-06-19)
Documentation
Update README.rst ( #535 ) ( b562310 )
3.4.2 (2023-05-25)
Bug Fixes
Remove workarounds in image_annotator ( #529 ) ( 6692feb )
3.4.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #527 ) ( d589fe1 )
3.4.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #520 ) ( faf6d6b )
3.3.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 3e9cde4 )
Documentation
Add documentation for enums ( 3e9cde4 )
3.3.0 (2023-01-10)
Features
Add support for python 3.11 ( #511 ) ( 5b3d758 )
3.2.0 (2022-12-15)
Features
Add typing to proto.Message based class attributes ( 0e5a37b )
Bug Fixes
Add dict typing for client_options ( 0e5a37b )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 0e5a37b )
Drop usage of pkg_resources ( 0e5a37b )
Fix timeout default values ( 0e5a37b )
Documentation
samples: Snippetgen handling of repeated enum field ( 0e5a37b )
samples: Snippetgen should call await on the operation coroutine before calling result ( 0e5a37b )
3.1.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #494 ) ( 391673a )
3.1.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #490 ) ( 8569102 )
3.1.2 (2022-09-13)
Documentation
Update comments for image annotator OCR models ( #485 ) ( cd9c2b9 )
3.1.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #468 ) ( 36eaa25 )
deps: require proto-plus >= 1.22.0 ( 36eaa25 )
3.1.0 (2022-08-05)
Features
Add TextDetectionParams.advanced_ocr_options ( #464 ) ( 0886a2d )
3.0.0 (2022-07-18)
⚠ BREAKING CHANGES
v1p3beta1: Product search related messages and enums changed in an incompatible way
v1p3beta1: NormalizedBoundingPoly message removed
v1: removed fields from SafeSearchAnnotation message
Bug Fixes
v1p3beta1: NormalizedBoundingPoly message removed ( 807684d )
v1p3beta1: Product search related messages and enums changed in an incompatible way ( 807684d )
v1: removed fields from SafeSearchAnnotation message ( 807684d )
2.8.0 (2022-07-14)
Features
add audience parameter ( #455 ) ( 1d8fe5f )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( 1d8fe5f )
require python 3.7+ ( #452 ) ( 401bd73 )
2.7.3 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #438 ) ( 927e833 )
Documentation
fix changelog header to consistent size ( #439 ) ( e3bd56d )
2.7.2 (2022-03-25)
Documentation
fixed ‘annotate an image’ ( #330 ) ( 1019f29 )
2.7.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #319 ) ( 249bff7 )
2.7.0 (2022-02-28)
Features
add api key support ( #300 ) ( 25fc254 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( #304 ) ( 6cca548 )
Documentation
add auto-generated samples ( #309 ) ( efc022d )
2.6.3 (2021-12-12)
Documentation
Add example of how to use max_results ( #277 ) ( cf4dafe )
Update doctext sample to include method signature ( #275 ) ( b059f3a )
2.6.2 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( b6bf6ab )
deps: require google-api-core >= 1.28.0 ( b6bf6ab )
Documentation
list oneofs in docstring ( b6bf6ab )
2.6.1 (2021-10-26)
Documentation
update async_detect_document() sample ( #260 ) ( b044537 )
2.6.0 (2021-10-20)
Features
add support for python 3.10 ( #253 ) ( 7d5e27a )
Documentation
readme: add pylint limitations ( #246 ) ( e4fb61f )
2.5.0 (2021-10-08)
Features
add context manager support in client ( #247 ) ( 629365f )
2.4.4 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 29b57f6 )
2.4.3 (2021-09-27)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 87ad0ea )
2.4.2 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #207 ) ( f5b5ca5 )
Documentation
add Samples section to CONTRIBUTING.rst ( #201 ) ( f6eaa1c )
Miscellaneous Chores
release as 2.4.2 ( #209 ) ( 8d48b1b )
2.4.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #200 ) ( 1409d36 )
2.4.0 (2021-07-12)
Features
add always_use_jwt_access ( #166 ) ( bff7763 )
Bug Fixes
disable always_use_jwt_access ( 8cc57cc )
disable always_use_jwt_access ( #171 ) ( 8cc57cc )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #161 ) ( 78740ad ), closes #1126
2.3.2 (2021-06-02)
Bug Fixes
deps: add packaging requirement ( #147 ) ( 41b88bd )
2.3.1 (2021-04-13)
Documentation
insert spaces between classes and methods in docs ( #133 ) ( 1495241 )
2.3.0 (2021-03-31)
Features
add from_service_account_info ( ace6046 )
Bug Fixes
fix retry deadlines ( #119 ) ( ace6046 )
2.2.0 (2021-02-11)
Features
add from_service_account_info factory ( 7c3035a )
v1: add LEFT_CHEEK_CENTER and RIGHT_CHEEK_CENTER to FaceAnnotation ( #103 ) ( 7c3035a )
Bug Fixes
v1: deprecate confidence fields in safe search annotation ( 7c3035a )
Documentation
use absolute references for types in docstrings ( 7c3035a )
2.1.0 (2021-01-26)
Features
v1: add text detection params; fix: remove client side recv limits ( #82 ) ( eaf1621 )
Bug Fixes
Fixes VPCSC Tests that did not conform to V2.0.0 client API ( #61 ) ( efed79a )
Documentation
update example usage ( #68 ) ( ea22e98 )
2.0.0 (2020-09-29)
⚠ BREAKING CHANGES
migrate to use microgen (#52)
Features
migrate to use microgen ( #52 ) ( cf3d353 )
Bug Fixes
update retry configs ( #29 ) ( 39c1652 )
Documentation
added note about not supported device ( #24 ) ( b33fa88 )
1.0.0 (2020-02-28)
Features
bump release status to GA ( #11 ) ( 2129bde )
0.42.0 (2020-02-03)
Features
vision: undeprecate resource name helpers, add 2.7 sunset warning (via synth) ( #10052 ) ( 2c86705 )
0.41.0
12-05-2019 14:49 PST
New Features
Add deprecation warning to resource name helper functions. ( #9866 )
Documentation
Add deprecation information to resource name helper function documentation. ( #9866 )
0.40.0
11-08-2019 09:30 PST
Implementation Changes
Add proto annotations (via synth). ( #9441 )
Add RPC annotations, update docstrings (via synth). ( #9230 )
New Features
Add celebrity recognition support to v1p4beta1 (via synth). ( #9613 )
Add object annotation support to v1p4beta1 (via synth). ( #9613 )
Add purge_products method to v1p4beta1 (via synth). ( #9613 )
Add more product categories (via synth). ( #9224 )
Documentation
Update docstring for product_category , change requests intersphinx url (via synth). ( #9413 )
Fix intersphinx reference to requests. ( #9294 )
Remove compatability badges from READMEs. ( #9035 )
Update docstring to say at most 5 frames can be batch annotated (via synth). ( #9041 )
Internal / Testing Changes
Flatten case of logo text in systest. ( #9159 )
Docs: Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
0.39.0
08-12-2019 13:57 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8976 )
New Features
Add ‘parent’ argument to annotation requests; add ‘ProductSearchClient.purge_products’ method; add ‘object_annotations’ field to product search results (via synth). ( #8988 )
Documentation
Update intersphinx mapping for requests. ( #8805 )
0.38.1
07-24-2019 17:54 PDT
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
0.38.0
07-09-2019 10:05 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8411 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8529 )
Internal / Testing Changes
Pin black version (via synth). ( #8602 )
Add docs job to publish to googleapis.dev. ( #8464 )
All of the negative vision vpc sc tests should use the same file. ( #8439 )
In order to make sure access to the bucket is blocked by vpc sc, try to download any arbitrary file from the bucket. ( #8374 )
Add disclaimer to auto-generated template files (via synth). ( #8335 )
Add Vision API system tests to verify accessing a gcs bucket outside of a secure perimeter is blocked. ( #8276 )
Add Vision API Product Search tests to verify ProductSearch is blocked by VPC SC when trying to access a resource outside of a secure perimeter when run from within a secure perimeter. ( #8269 )
Add AsyncBatchAnnotateFiles system test ( #8260 )
Add ImportProductSets system test ( #8259 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8257 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8371 )
0.37.0
05-30-2019 15:19 PDT
Implementation Changes
Add routing header to method metadata (via synth). ( #7604 )
New Features
Add more categories to product search, update noxfile (via synth). ( #8170 )
Add batch annotation for images and files, reorder methods (via synth). ( #7845 )
Vision: Add proto files for v1p4beta1
Internal / Testing Changes
Change docstrings (via synth). ( #7983 )
Add system tests for Vision Product Search. Test product set resource… ( #7913 )
Update noxfile and docs configuration (via synth). ( #7839 )
Vision: Add nox session docs , reorder methods, modify samples in docstrings (via synth). ( #7787 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
Copy lintified proto files (via synth). ( #7473 )
0.36.0
02-25-2019 15:02 PST
Implementation Changes
Remove unused message exports. ( #7280 )
Protoc-generated serialization update. ( #7100 )
GAPIC generation fixes: ( #7058 )
Pick up order-of-enum fix from GAPIC generator. ( #6881 )
New Features
Add vision v1p4beta1. ( #7438 )
Documentation
Updated client library documentation URLs. ( #7307 )
Update copyright headers.
Internal / Testing Changes
Add clarifying comment to blacken nox target. ( #7408 )
Copy proto files alongside protoc versions
Vision: get system logo tests healthy. ( #7245 )
Add protos as an artifact to library. ( #7205 )
0.35.2
12-17-2018 17:10 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Documentation
Document Python 2 deprecation ( #6910 )
Internal / Testing Changes
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
0.35.1
11-21-2018 11:25 PST
Implementation Changes
Add ProductSearchClient to vision.py ( #6635 )
Internal / Testing Changes
Merge fixes to GAPIC generator. ( #6632 )
0.35.0
11-13-2018 09:55 PST
Implementation Changes
Fix client_info bug, update docstrings via synth. ( #6437 )
New Features
Add ‘product_search_client’ to ‘vision_v1’. ( #6361 )
Dependencies
Bump minimum ‘api_core’ version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Fix GAX fossils. ( #6264 )
Normalize use of support level badges. ( #6159 )
Harmonize / DRY ‘README.rst’ / ‘docs/index.rst’. ( #6003 )
Internal / Testing Changes
Use new Nox. ( #6175 )
0.34.0
Implementation Changes
Clean up feature introspection. ( #5851 )
New Features
Regenerate to pick up new features in the underlying API. ( #5854 )
0.33.0
New Features
Add v1p3beta1 endpoint to vision client library (#5638)
0.32.0
Implementation Changes
Avoid overwriting ‘ module ’ of messages from shared modules. (#5364)
Regenerate underlying client library (#5467)
Internal / Testing Changes
Add Test runs for Python 3.7 and remove 3.4 (#5295)
Modify system tests to use prerelease versions of grpcio (#5304)
0.31.1
Packaging
Update setuptools before packaging (#5265)
0.31.0
Vision v1p2beta1: PDF/TIFF OCR (#5127)
Use install_requires for platform dependencies instead of extras_require (#4991)
Add vision v1p2beta1 (#4998)
Fix bad trove classifier
Add max results to feature (#4817)
0.30.1
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
Fix coveragerc to correctly omit generated files (#4843)
0.29.0
⚠️ Breaking Changes
The HTTP/JSON based client that was deprecated in 0.25.0 is completely
removed.
Release Candidate
This is the (hopefully) final release candidate before declaring a stable
release.
Features
The v1p1beta1 endpoint has been added. (#4493)
This is a superset of v1 and includes features that are still in beta
on the API side. You can opt in to this endpoint by importing it explicitly:
from google.cloud import vision_v1p1beta1
client = vision_v1p1beta1. ImageAnnotatorClient ()
PyPI: https://pypi.org/project/google-cloud-vision/0.29.0/
0.28.0
Notable Implementation Changes
Update and re-organize autogenerated code (#3952)
Documentation
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
Deferring to google-api-core for grpcio and
googleapis-common-protos dependencies (#4096, #4098)
PyPI: https://pypi.org/project/google-cloud-vision/0.28.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
