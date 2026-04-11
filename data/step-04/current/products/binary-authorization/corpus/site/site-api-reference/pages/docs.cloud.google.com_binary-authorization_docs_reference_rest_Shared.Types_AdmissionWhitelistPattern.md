---
title: "AdmissionWhitelistPattern \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/AdmissionWhitelistPattern
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/AdmissionWhitelistPattern
  title: "AdmissionWhitelistPattern \_|\_ Binary Authorization \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Reference
Send feedback
AdmissionWhitelistPattern
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An admission allowlist pattern exempts images from checks by admission rules .
JSON representation
{
"namePattern" : string
}
Fields
namePattern
string
An image name pattern to allowlist, in the form registry/path/to/image . This supports a trailing * as a wildcard, but this is allowed only in text after the registry/ part. * wildcard does not match / , i.e., gcr.io/nginx* matches gcr.io/nginx@latest , but it does not match gcr.io/nginx/image . This also supports a trailing ** wildcard which matches subdirectories, i.e., gcr.io/nginx** matches gcr.io/nginx/image .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
