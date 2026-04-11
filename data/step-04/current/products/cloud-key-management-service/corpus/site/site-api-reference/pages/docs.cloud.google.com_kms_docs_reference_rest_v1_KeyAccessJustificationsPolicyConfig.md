---
title: "KeyAccessJustificationsPolicyConfig \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig
  title: "KeyAccessJustificationsPolicyConfig \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
KeyAccessJustificationsPolicyConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A singleton configuration for Key Access Justifications policies.
JSON representation
{
"name" : string ,
"defaultKeyAccessJustificationPolicy" : {
object ( KeyAccessJustificationsPolicy )
}
}
Fields
name
string
Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*/kajPolicyConfig".
defaultKeyAccessJustificationPolicy
object ( KeyAccessJustificationsPolicy )
Optional. The default key access justification policy used when a CryptoKey is created in this folder. This is only used when a Key Access Justifications policy is not provided in the CreateCryptoKeyRequest . This overrides any default policies in its ancestry.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-02 UTC."],[],[]]
