---
title: "ConfigVariable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConfigVariable
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConfigVariable
  title: "ConfigVariable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
ConfigVariable
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
EncryptionKey
JSON representation
Type
ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
JSON representation
{
"key" : string ,
// Union field value can be only one of the following:
"intValue" : string ,
"boolValue" : boolean ,
"stringValue" : string ,
"secretValue" : {
object ( Secret )
} ,
"encryptionKeyValue" : {
object ( EncryptionKey )
}
// End of list of possible types for union field value .
}
Fields
key
string
Key of the config variable.
Union field value . Value type of the config variable. value can be only one of the following:
intValue
string ( int64 format)
Value is an integer
boolValue
boolean
Value is a bool.
stringValue
string
Value is a string.
secretValue
object ( Secret )
Value is a secret.
encryptionKeyValue
object ( EncryptionKey )
Value is a Encryption Key.
EncryptionKey
Encryption Key value.
JSON representation
{
"type" : enum ( Type ) ,
"kmsKeyName" : string
}
Fields
type
enum ( Type )
Type.
kmsKeyName
string
The [KMS key name] with which the content of the Operation is encrypted. The expected format: projects/*/locations/*/keyRings/*/cryptoKeys/* . Will be empty string if google managed.
Type
Type of the Encryption Key.
Enums
TYPE_UNSPECIFIED
Value type is not specified.
GOOGLE_MANAGED
Google Managed.
CUSTOMER_MANAGED
Customer Managed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
