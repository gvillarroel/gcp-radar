---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/changelog
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
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
PyPI History
0.4.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.3.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.2.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.1.15 (2025-06-11)
Documentation
Update import statement example in README ( 868b006 )
0.1.14 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( c8bbf32 )
0.1.13 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a0910dd )
Add support for reading selective GAPIC generation methods from service YAML ( a0910dd )
0.1.12 (2024-12-12)
Features
Add support for opt-in debug logging ( feb5c03 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( feb5c03 )
0.1.11 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13243 ) ( d794dec )
0.1.10 (2024-10-24)
Features
Add support for Python 3.13 ( #13207 ) ( ceb9be8 )
0.1.9 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( d95af77 )
0.1.8 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12867 ) ( 3362176 )
0.1.7 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12385 ) ( d50f4d0 )
0.1.6 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12307 ) ( be87bc4 )
fix ValueError in test__validate_universe_domain ( 7c2f2c2 )
0.1.5 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 27dceb9 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 27dceb9 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 27dceb9 )
0.1.4 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12241 ) ( aae72f5 )
0.1.3 (2023-12-07)
Features
Add support for python 3.12 ( 5cd98aa )
Introduce compatibility with native namespace packages ( 5cd98aa )
Bug Fixes
Require proto-plus >= 1.22.3 ( 5cd98aa )
Use retry_async instead of retry in async client ( 5cd98aa )
0.1.2 (2023-09-19)
Features
added ComputeStorageDescriptor for Compute Engine migration insights ( 50f7534 )
added GenericInsight which exposes generic insights on assets ( 50f7534 )
added new target-related options to VirtualMachinePreferences ( 50f7534 )
Bug Fixes
deprecated the bios_name, total_rows_count and overlapping_asset_count fields ( 50f7534 )
Documentation
Minor formatting ( 1ae610b )
updated performance_samples docs ( 50f7534 )
0.1.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
0.1.0 (2023-06-08)
Features
add initial files for google.cloud.migrationcenter.v1 ( #11383 ) ( aab5d66 )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
