---
title: "AclConfig \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AclConfig
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AclConfig
  title: "AclConfig \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Reference
Send feedback
AclConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
IdpConfig
JSON representation
IdpType
ExternalIdpConfig
JSON representation
Access Control Configuration.
JSON representation
{
"name" : string ,
"idpConfig" : {
object ( IdpConfig )
}
}
Fields
name
string
Immutable. The full resource name of the acl configuration. Format: projects/{project}/locations/{location}/aclConfig .
This field must be a UTF-8 encoded string with a length limit of 1024 characters.
idpConfig
object ( IdpConfig )
Identity provider config.
IdpConfig
Identity Provider Config.
JSON representation
{
"idpType" : enum ( IdpType ) ,
"externalIdpConfig" : {
object ( ExternalIdpConfig )
}
}
Fields
idpType
enum ( IdpType )
Identity provider type configured.
externalIdpConfig
object ( ExternalIdpConfig )
External Identity provider config.
IdpType
Identity Provider Type.
Enums
IDP_TYPE_UNSPECIFIED
Default value. ACL search not enabled.
GSUITE
Google 1P provider.
THIRD_PARTY
Third party provider.
ExternalIdpConfig
Third party IDP Config.
JSON representation
{
"workforcePoolName" : string
}
Fields
workforcePoolName
string
Workforce pool name. Example: "locations/global/workforcePools/poolId"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
