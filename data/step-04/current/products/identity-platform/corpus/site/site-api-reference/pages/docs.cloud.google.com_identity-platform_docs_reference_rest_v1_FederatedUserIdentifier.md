---
title: "FederatedUserIdentifier \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/FederatedUserIdentifier
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/FederatedUserIdentifier
  title: "FederatedUserIdentifier \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
FederatedUserIdentifier
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Federated user identifier at an Identity Provider.
JSON representation
{
"providerId" : string ,
"rawId" : string
}
Fields
providerId
string
The ID of supported identity providers. This should be a provider ID enabled for sign-in, which is either from the list of default supported IdPs , or of the format oidc.* or saml.* . Some examples are google.com , facebook.com , oidc.testapp , and saml.testapp .
rawId
string
The user ID of the account at the third-party Identity Provider specified by providerId .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
