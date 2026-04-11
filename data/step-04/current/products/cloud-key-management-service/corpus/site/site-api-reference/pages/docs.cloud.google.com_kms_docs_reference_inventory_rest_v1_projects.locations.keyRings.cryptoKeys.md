---
title: "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys
  title: "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.keyRings.cryptoKeys
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CryptoKey
JSON representation
Methods
Resource: CryptoKey
A CryptoKey represents a logical key that can be used for cryptographic operations.
A CryptoKey is made up of zero or more versions , which represent the actual key material used in cryptographic operations.
JSON representation
{
"name" : string ,
"primary" : {
object ( CryptoKeyVersion )
} ,
"purpose" : enum ( CryptoKeyPurpose ) ,
"createTime" : string ,
"nextRotationTime" : string ,
"versionTemplate" : {
object ( CryptoKeyVersionTemplate )
} ,
"labels" : {
string : string ,
...
} ,
"importOnly" : boolean ,
"destroyScheduledDuration" : string ,
"cryptoKeyBackend" : string ,
// Union field rotation_schedule can be only one of the following:
"rotationPeriod" : string
// End of list of possible types for union field rotation_schedule .
}
Fields
name
string
Output only. The resource name for this CryptoKey in the format projects/*/locations/*/keyRings/*/cryptoKeys/* .
primary
object ( CryptoKeyVersion )
Output only. A copy of the "primary" CryptoKeyVersion that will be used by [Encrypt][KeyManagementService.Encrypt] when this CryptoKey is given in [EncryptRequest.name][].
The CryptoKey 's primary version can be updated via [UpdateCryptoKeyPrimaryVersion][KeyManagementService.UpdateCryptoKeyPrimaryVersion].
Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
purpose
enum ( CryptoKeyPurpose )
Immutable. The immutable purpose of this CryptoKey .
createTime
string ( Timestamp format)
Output only. The time at which this CryptoKey was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
nextRotationTime
string ( Timestamp format)
At nextRotationTime , the Key Management Service will automatically:
Create a new version of this CryptoKey .
Mark the new version as primary.
Key rotations performed manually via [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] and [UpdateCryptoKeyPrimaryVersion][KeyManagementService.UpdateCryptoKeyPrimaryVersion] do not affect nextRotationTime .
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
versionTemplate
object ( CryptoKeyVersionTemplate )
A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or auto-rotation are controlled by this template.
labels
map (key: string, value: string)
Labels with user-defined metadata. For more information, see Labeling Keys .
importOnly
boolean
Immutable. Whether this key may contain imported versions only.
destroyScheduledDuration
string ( Duration format)
Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED . If not specified at creation time, the default duration is 24 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cryptoKeyBackend
string
Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of [EXTERNAL_VPC][CryptoKeyVersion.ProtectionLevel.EXTERNAL_VPC], with the resource name in the format projects/*/locations/*/ekmConnections/* . Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
Union field rotation_schedule . Controls the rate of automatic rotation. rotation_schedule can be only one of the following:
rotationPeriod
string ( Duration format)
nextRotationTime will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
If rotationPeriod is set, nextRotationTime must also be set.
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Methods
getProtectedResourcesSummary
Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
