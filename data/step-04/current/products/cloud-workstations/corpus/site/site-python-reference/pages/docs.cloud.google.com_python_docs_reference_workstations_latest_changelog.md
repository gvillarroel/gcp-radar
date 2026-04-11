---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/workstations/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/changelog
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
0.8.0 (latest)
0.7.0
0.6.0
0.5.13
0.4.1
0.3.0
0.2.1
0.1.1
PyPI History
0.8.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.7.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.6.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.5.15 (2025-06-11)
Documentation
Update import statement example in README ( 8066d24 )
0.5.14 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 25ced24 )
0.5.13 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 0c5f868 )
0.5.12 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
0.5.11 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
0.5.10 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13247 ) ( 5adc8b7 )
0.5.9 (2024-10-24)
Features
Add support for Python 3.13 ( #13211 ) ( f712162 )
0.5.8 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 4adddf4 )
0.5.7 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12871 ) ( 73b35d5 )
0.5.6 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
0.5.5 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12311 ) ( e4c864b )
fix ValueError in test__validate_universe_domain ( f3974d4 )
0.5.4 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
0.5.3 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
0.5.2 (2023-12-07)
Features
Add support for python 3.12 ( f920d22 )
Introduce compatibility with native namespace packages ( f920d22 )
Bug Fixes
Require proto-plus >= 1.22.3 ( f920d22 )
Use retry_async instead of retry in async client ( f920d22 )
0.5.1 (2023-09-19)
Documentation
Minor formatting ( 77bf61a )
0.5.0 (2023-08-31)
Features
add config service_account_scopes ( 03ea643 )
add enable_nested_virtualization ( 03ea643 )
add ephemeral_directories ( 03ea643 )
add initial files for google.cloud.workstations.v1 ( #11603 ) ( d355347 )
add output field start_time ( 03ea643 )
add replica_zones ( 03ea643 )
Documentation
adjust documentation wording & annotations ( 03ea643 )
0.4.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11449 ) ( 3885820 )
0.4.0 (2023-05-17)
Features
v1beta: add auditd support ( 78957ed )
v1beta: add output field for the control plane IP address ( 78957ed )
v1beta: add output field for the number of pooled instances ( 78957ed )
v1beta: add support for accelerators ( 78957ed )
v1beta: add support for readiness checks ( 78957ed )
v1beta: add support for workstation-level environment variables ( 78957ed )
Documentation
v1beta: adjust documentation wording ( 78957ed )
0.3.0 (2023-05-11)
Features
add output field for the control plane IP address ( 60e16ee )
add output field for the number of pooled instances ( 60e16ee )
Documentation
adjust documentation wording ( 60e16ee )
0.2.1 (2023-04-11)
Documentation
Adjust wording around service accounts and control planes ( #11057 ) ( 9f5b7c5 )
0.2.0 (2023-04-06)
Features
add client libraries for Workstations v1 ( #11051 ) ( 0113725 )
0.1.1 (2023-03-25)
Documentation
Fix formatting of request arg in docstring ( #10867 ) ( d34a425 )
0.1.0 (2023-03-17)
Features
add initial files for google.cloud.workstations.v1beta ( #10858 ) ( c9650f7 )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
