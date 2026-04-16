---
title: "OidcToken \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/OidcToken
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/OidcToken
  title: "OidcToken \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
OidcToken
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Contains information needed for generating an OpenID Connect token . This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
JSON representation
{
"serviceAccountEmail" : string ,
"audience" : string
}
Fields
serviceAccountEmail
string
Service account email to be used for generating OIDC token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account.
audience
string
Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
