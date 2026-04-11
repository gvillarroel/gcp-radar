---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/changelog
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
0.3.0
0.2.0
0.1.18
PyPI History
0.6.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.5.0 (2026-02-05)
Documentation
Folder level and organization level support for the quota adjuster feature. ( fe0a0b4638a8f5301c30be43fd2f2898ddc6db37 )
Features
Hierarchical Quota Adjuster ( fe0a0b4638a8f5301c30be43fd2f2898ddc6db37 )
0.4.0 (2026-01-29)
Documentation
Correct typo in comment for field quota_id ( 38754bbd8765298482b679b027e9bc0ac5a66bb3 )
0.3.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.2.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.1.18 (2025-06-11)
Features
Added support for hierarchical enrollment in Quota Adjuster consumer API ( 78428ff )
Documentation
Added 2 new fields in .google.api.cloudquotas.v1beta.QuotaAdjusterSettings ( 78428ff )
Added inherited and inherited_from in .google.api.cloudquotas.v1beta.QuotaAdjusterSettings ( 78428ff )
Added support for folder and organization level enrollment ( 78428ff )
Update import statement example in README ( dfc2cd6 )
0.1.17 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 7295cbb )
Documentation
[google-cloud-quotas] improved comment clarity ( #13647 ) ( 3edc52a )
0.1.16 (2025-02-18)
Features
Add REST Interceptors which support reading metadata ( c8e0760 )
Add support for reading selective GAPIC generation methods from service YAML ( c8e0760 )
0.1.15 (2025-01-13)
Features
Add v1beta client libraries for cloudquotas API ( #13408 ) ( c757c44 )
0.1.14 (2024-12-12)
Features
Add support for opt-in debug logging ( 8e6b0cc )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 8e6b0cc )
0.1.13 (2024-11-14)
Features
A new value NOT_ENOUGH_USAGE_HISTORY is added to enum IneligibilityReason ( 1c9fcd9 )
A new value NOT_SUPPORTED is added to enum IneligibilityReason ( 1c9fcd9 )
0.1.12 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 59c4287 )
0.1.11 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
0.1.10 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
0.1.9 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
0.1.8 (2024-04-18)
Documentation
[google-cloud-cloudquotas] Update contact_email doc to not check permission of the email account ( #12592 ) ( a4c8d03 )
0.1.7 (2024-04-03)
Features
Add rollout_info field to QuotaDetails message ( 0b8728c )
0.1.6 (2024-03-27)
Documentation
update comment of contact_email to make it optional as opposed to required ( 763c119 )
update sample URL in field for service_request_quota_uri ( 763c119 )
0.1.5 (2024-03-22)
Documentation
A comment for field filter in message .google.api.cloudquotas.v1.ListQuotaPreferencesRequest is changed ( 55bf59f )
A comment for field order_by in message .google.api.cloudquotas.v1.ListQuotaPreferencesRequest is changed ( 55bf59f )
0.1.4 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
0.1.3 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12281 ) ( 62cf934 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
0.1.2 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
0.1.1 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12238 ) ( 8701267 )
0.1.0 (2024-01-12)
Features
add initial files for google.api.cloudquotas.v1 ( #12193 ) ( 797c302 )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
