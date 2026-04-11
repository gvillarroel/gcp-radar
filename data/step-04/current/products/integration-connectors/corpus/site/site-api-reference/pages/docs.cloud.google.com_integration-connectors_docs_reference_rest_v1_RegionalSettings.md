---
title: "RegionalSettings \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RegionalSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RegionalSettings
  title: "RegionalSettings \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
RegionalSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
NetworkConfig
JSON representation
NetworkEgressMode
EncryptionConfig
JSON representation
EncryptionType
Regional Settings details.
JSON representation
{
"name" : string ,
"networkConfig" : {
object ( NetworkConfig )
} ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"provisioned" : boolean
}
Fields
name
string
Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings
networkConfig
object ( NetworkConfig )
Optional. Regional network config.
encryptionConfig
object ( EncryptionConfig )
Optional. Regional encryption config to hold CMEK details.
provisioned
boolean
Output only. Specifies whether the region is provisioned.
NetworkConfig
Regional Network Config.
JSON representation
{
"egressMode" : enum ( NetworkEgressMode ) ,
"egressIps" : [
string
]
}
Fields
egressMode
enum ( NetworkEgressMode )
Optional. Egress mode for the network.
egressIps[]
string
Output only. Egress IPs
NetworkEgressMode
Modes of network egress.
Enums
NETWORK_EGRESS_MODE_UNSPECIFIED
Egress mode unspecified.
AUTO_IP
Network egress through auto assigned IPs.
STATIC_IP
Network egress through static IPs.
EncryptionConfig
Regional encryption config for CMEK details.
JSON representation
{
"kmsKeyName" : string ,
"encryptionType" : enum ( EncryptionType )
}
Fields
kmsKeyName
string
Optional. KMS crypto key. This field accepts identifiers of the form projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/
{crypto_key}
encryptionType
enum ( EncryptionType )
Optional. Encryption type for the region.
EncryptionType
Types of data encryption.
Enums
ENCRYPTION_TYPE_UNSPECIFIED
Encryption type unspecified.
GMEK
Google managed encryption keys
CMEK
Customer managed encryption keys.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
