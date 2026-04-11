---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/changelog
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
0.6.0 (latest)
0.5.0
0.4.0
0.3.17
0.2.1
0.1.0
PyPI History
0.6.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.5.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.4.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.3.17 (2025-06-11)
Documentation
Update import statement example in README ( 821bdb1 )
0.3.16 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( e06ee32 )
0.3.15 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
0.3.14 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
0.3.13 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
0.3.12 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
0.3.11 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 189922a )
0.3.10 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
0.3.9 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
0.3.8 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
0.3.7 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
0.3.6 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12240 ) ( d51f832 )
0.3.5 (2023-12-07)
Features
Add support for python 3.12 ( fb6f9db )
Introduce compatibility with native namespace packages ( fb6f9db )
Bug Fixes
Require proto-plus >= 1.22.3 ( fb6f9db )
Use retry_async instead of retry in async client ( fb6f9db )
0.3.4 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
0.3.3 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
0.3.2 (2023-03-25)
Documentation
Fix formatting of request arg in docstring ( #10867 ) ( d34a425 )
0.3.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 900a608 )
Documentation
Add documentation for enums ( 900a608 )
0.3.0 (2023-01-10)
Features
Add support for python 3.11 ( #10812 ) ( e5f88ee )
0.2.1 (2022-12-06)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( e477ab2 )
Drop usage of pkg_resources ( e477ab2 )
Fix timeout default values ( e477ab2 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( e477ab2 )
0.2.0 (2022-11-10)
Features
Add typing to proto.Message based class attributes ( a6cbc16 )
publish Google Cloud’s Cloud Knowledge Graph (CKG) API ( #10767 ) ( ccba351 )
Documentation
samples: Snippetgen handling of repeated enum field ( a6cbc16 )
0.1.0 (2022-11-02)
Features
add initial files for google.cloud.enterpriseknowledgegraph.v1 ( #10712 ) ( fd146ba )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
