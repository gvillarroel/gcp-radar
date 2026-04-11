---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/changelog
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
1.11.0 (latest)
1.10.0
1.9.0
1.8.3
1.7.0
1.6.1
1.5.0
1.4.4
1.3.0
1.2.0
1.1.1
1.0.1
0.2.2
0.1.1
PyPI History
1.11.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.10.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.9.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.8.3 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
1.8.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
1.8.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 0c5f868 )
1.8.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
1.7.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.6.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13247 ) ( 5adc8b7 )
1.6.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
1.5.0 (2024-07-30)
Features
[google-cloud-vmwareengine] Adding autoscaling settings ( #12913 ) ( c95d4e7 )
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
1.4.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
1.4.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.4.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( f3974d4 )
1.4.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.4.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
1.3.0 (2024-01-19)
Features
[google-cloud-vmwareengine] Adding ManagementDnsZoneBinding, DnsBindPermission, DnsForwarding, ExternalAccessRule, ExternalAddress, LoggingServer, NetworkPeering, Node and stretched PC features ( #12207 ) ( d18cf96 )
Documentation
clarified wording around private cloud and update cluster ( d18cf96 )
1.2.0 (2023-12-07)
Features
Add support for python 3.12 ( 31d043d )
Introduce compatibility with native namespace packages ( 31d043d )
Bug Fixes
Require proto-plus >= 1.22.3 ( 31d043d )
Use retry_async instead of retry in async client ( 31d043d )
1.1.2 (2023-09-19)
Documentation
Minor formatting ( 025219f )
1.1.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11449 ) ( 3885820 )
1.1.0 (2023-06-12)
Features
Adding private connection CRUD, updating management subnets and time-limited PC features ( #11386 ) ( aa5942d )
1.0.1 (2023-03-25)
Documentation
Fix formatting of request arg in docstring ( #10867 ) ( d34a425 )
1.0.0 (2023-01-31)
⚠ BREAKING CHANGES
resource proto messages moved to new file ( #10829 )
Bug Fixes
resource proto messages moved to new file ( #10829 ) ( bf1ef3d )
0.2.2 (2023-01-20)
Bug Fixes
Add context manager return types ( 900a608 )
Documentation
Add documentation for enums ( 900a608 )
0.2.1 (2023-01-11)
Documentation
update location in docstrings to use us-central1 ( #10815 ) ( 93993d3 )
0.2.0 (2023-01-10)
Features
Add support for python 3.11 ( #10812 ) ( e5f88ee )
0.1.1 (2022-12-06)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( e477ab2 )
Drop usage of pkg_resources ( e477ab2 )
Fix timeout default values ( e477ab2 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( e477ab2 )
0.1.0 (2022-11-16)
Features
add initial files for google.cloud.vmwareengine.v1 ( #10784 ) ( ce0977b )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
