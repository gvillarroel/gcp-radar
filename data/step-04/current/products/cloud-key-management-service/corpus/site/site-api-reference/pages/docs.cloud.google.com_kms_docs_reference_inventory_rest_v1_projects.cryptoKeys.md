---
title: "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys
  title: "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\
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
REST Resource: projects.cryptoKeys
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CryptoKey
JSON representation
CryptoKeyVersion
JSON representation
CryptoKeyVersionState
ProtectionLevel
CryptoKeyVersionAlgorithm
KeyOperationAttestation
JSON representation
AttestationFormat
CertificateChains
JSON representation
ExternalProtectionLevelOptions
JSON representation
CryptoKeyPurpose
CryptoKeyVersionTemplate
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
CryptoKeyVersion
A CryptoKeyVersion represents an individual cryptographic key, and the associated key material.
An ENABLED version can be used for cryptographic operations.
For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
JSON representation
{
"name" : string ,
"state" : enum ( CryptoKeyVersionState ) ,
"protectionLevel" : enum ( ProtectionLevel ) ,
"algorithm" : enum ( CryptoKeyVersionAlgorithm ) ,
"attestation" : {
object ( KeyOperationAttestation )
} ,
"createTime" : string ,
"generateTime" : string ,
"destroyTime" : string ,
"destroyEventTime" : string ,
"importJob" : string ,
"importTime" : string ,
"importFailureReason" : string ,
"generationFailureReason" : string ,
"externalDestructionFailureReason" : string ,
"externalProtectionLevelOptions" : {
object ( ExternalProtectionLevelOptions )
} ,
"reimportEligible" : boolean
}
Fields
name
string
Output only. The resource name for this CryptoKeyVersion in the format projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/* .
state
enum ( CryptoKeyVersionState )
The current state of the CryptoKeyVersion .
protectionLevel
enum ( ProtectionLevel )
Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion .
algorithm
enum ( CryptoKeyVersionAlgorithm )
Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
attestation
object ( KeyOperationAttestation )
Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protectionLevel HSM .
createTime
string ( Timestamp format)
Output only. The time at which this CryptoKeyVersion was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
generateTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion 's key material was generated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
destroyTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion 's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED .
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
destroyEventTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED .
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
importJob
string
Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion . Only present if the underlying key material was imported.
importTime
string ( Timestamp format)
Output only. The time at which this CryptoKeyVersion 's key material was most recently imported.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
importFailureReason
string
Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED .
generationFailureReason
string
Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED .
externalDestructionFailureReason
string
Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED .
externalProtectionLevelOptions
object ( ExternalProtectionLevelOptions )
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
reimportEligible
boolean
Output only. Whether or not this key version is eligible for reimport, by being specified as a target in [ImportCryptoKeyVersionRequest.crypto_key_version][].
CryptoKeyVersionState
The state of a CryptoKeyVersion , indicating if it can be used.
Enums
CRYPTO_KEY_VERSION_STATE_UNSPECIFIED
Not specified.
PENDING_GENERATION
This version is still being generated. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
ENABLED
This version may be used for cryptographic operations.
DISABLED
This version may not be used, but the key material is still available, and the version can be placed back into the ENABLED state.
DESTROYED
This version is destroyed, and the key material is no longer stored. This version may only become ENABLED again if this version is reimportEligible and the original key material is reimported with a call to [KeyManagementService.ImportCryptoKeyVersion][].
DESTROY_SCHEDULED
This version is scheduled for destruction, and will be destroyed soon. Call [RestoreCryptoKeyVersion][KeyManagementService.RestoreCryptoKeyVersion] to put it back into the DISABLED state.
PENDING_IMPORT
This version is still being imported. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
IMPORT_FAILED
This version was not imported successfully. It may not be used, enabled, disabled, or destroyed. The submitted key material has been discarded. Additional details can be found in CryptoKeyVersion.import_failure_reason .
GENERATION_FAILED
This version was not generated successfully. It may not be used, enabled, disabled, or destroyed. Additional details can be found in CryptoKeyVersion.generation_failure_reason .
PENDING_EXTERNAL_DESTRUCTION
This version was destroyed, and it may not be used or enabled again. Cloud KMS is waiting for the corresponding key material residing in an external key manager to be destroyed.
EXTERNAL_DESTRUCTION_FAILED
This version was destroyed, and it may not be used or enabled again. However, Cloud KMS could not confirm that the corresponding key material residing in an external key manager was destroyed. Additional details can be found in CryptoKeyVersion.external_destruction_failure_reason .
ProtectionLevel
ProtectionLevel specifies how cryptographic operations are performed. For more information, see Protection levels .
Enums
PROTECTION_LEVEL_UNSPECIFIED
Not specified.
SOFTWARE
Crypto operations are performed in software.
HSM
Crypto operations are performed in a Hardware Security Module.
EXTERNAL
Crypto operations are performed by an external key manager.
EXTERNAL_VPC
Crypto operations are performed in an EKM-over-VPC backend.
CryptoKeyVersionAlgorithm
The algorithm of the CryptoKeyVersion , indicating what parameters must be used for each cryptographic operation.
The GOOGLE_SYMMETRIC_ENCRYPTION algorithm is usable with CryptoKey.purpose ENCRYPT_DECRYPT .
Algorithms beginning with "RSA_SIGN_" are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after "RSA_SIGN_" correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
For PSS, the salt length used is equal to the length of digest algorithm. For example, RSA_SIGN_PSS_2048_SHA256 will use PSS with a salt length of 256 bits or 32 bytes.
Algorithms beginning with "RSA_DECRYPT_" are usable with CryptoKey.purpose ASYMMETRIC_DECRYPT .
The fields in the name after "RSA_DECRYPT_" correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
Algorithms beginning with "EC_SIGN_" are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after "EC_SIGN_" correspond to the following parameters: elliptic curve, digest algorithm.
Algorithms beginning with "HMAC_" are usable with CryptoKey.purpose MAC .
The suffix following "HMAC_" corresponds to the hash algorithm being used (eg. SHA256).
For more information, see Key purposes and algorithms .
Enums
CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED
Not specified.
GOOGLE_SYMMETRIC_ENCRYPTION
Creates symmetric encryption keys.
RSA_SIGN_PSS_2048_SHA256
RSASSA-PSS 2048 bit key with a SHA256 digest.
RSA_SIGN_PSS_3072_SHA256
RSASSA-PSS 3072 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA256
RSASSA-PSS 4096 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA512
RSASSA-PSS 4096 bit key with a SHA512 digest.
RSA_SIGN_PKCS1_2048_SHA256
RSASSA-PKCS1-v1_5 with a 2048 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_3072_SHA256
RSASSA-PKCS1-v1_5 with a 3072 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA256
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA512
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA512 digest.
RSA_SIGN_RAW_PKCS1_2048
RSASSA-PKCS1-v1_5 signing without encoding, with a 2048 bit key.
RSA_SIGN_RAW_PKCS1_3072
RSASSA-PKCS1-v1_5 signing without encoding, with a 3072 bit key.
RSA_SIGN_RAW_PKCS1_4096
RSASSA-PKCS1-v1_5 signing without encoding, with a 4096 bit key.
RSA_DECRYPT_OAEP_2048_SHA256
RSAES-OAEP 2048 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_3072_SHA256
RSAES-OAEP 3072 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA256
RSAES-OAEP 4096 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA512
RSAES-OAEP 4096 bit key with a SHA512 digest.
RSA_DECRYPT_OAEP_2048_SHA1
RSAES-OAEP 2048 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_3072_SHA1
RSAES-OAEP 3072 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_4096_SHA1
RSAES-OAEP 4096 bit key with a SHA1 digest.
EC_SIGN_P256_SHA256
ECDSA on the NIST P-256 curve with a SHA256 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_P384_SHA384
ECDSA on the NIST P-384 curve with a SHA384 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_SECP256K1_SHA256
ECDSA on the non-NIST secp256k1 curve. This curve is only supported for HSM protection level. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
HMAC_SHA256
HMAC-SHA256 signing with a 256 bit key.
HMAC_SHA1
HMAC-SHA1 signing with a 160 bit key.
HMAC_SHA384
HMAC-SHA384 signing with a 384 bit key.
HMAC_SHA512
HMAC-SHA512 signing with a 512 bit key.
HMAC_SHA224
HMAC-SHA224 signing with a 224 bit key.
EXTERNAL_SYMMETRIC_ENCRYPTION
Algorithm representing symmetric encryption by an external key manager.
KeyOperationAttestation
Contains an HSM-generated attestation about a key operation. For more information, see Verifying attestations .
JSON representation
{
"format" : enum ( AttestationFormat ) ,
"content" : string ,
"certChains" : {
object ( CertificateChains )
}
}
Fields
format
enum ( AttestationFormat )
Output only. The format of the attestation data.
content
string ( bytes format)
Output only. The attestation data provided by the HSM when the key operation was performed.
A base64-encoded string.
certChains
object ( CertificateChains )
Output only. The certificate chains needed to validate the attestation
AttestationFormat
Attestation formats provided by the HSM.
Enums
ATTESTATION_FORMAT_UNSPECIFIED
Not specified.
CAVIUM_V1_COMPRESSED
Cavium HSM attestation compressed with gzip. Note that this format is defined by Cavium and subject to change at any time.
See https://www.marvell.com/products/security-solutions/nitrox-hs-adapters/software-key-attestation.html .
CAVIUM_V2_COMPRESSED
Cavium HSM attestation V2 compressed with gzip. This is a new format introduced in Cavium's version 3.2-08.
CertificateChains
Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2 .
JSON representation
{
"caviumCerts" : [
string
] ,
"googleCardCerts" : [
string
] ,
"googlePartitionCerts" : [
string
]
}
Fields
caviumCerts[]
string
Cavium certificate chain corresponding to the attestation.
googleCardCerts[]
string
Google card certificate chain corresponding to the attestation.
googlePartitionCerts[]
string
Google partition certificate chain corresponding to the attestation.
ExternalProtectionLevelOptions
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
JSON representation
{
"externalKeyUri" : string ,
"ekmConnectionKeyPath" : string
}
Fields
externalKeyUri
string
The URI for an external resource that this CryptoKeyVersion represents.
ekmConnectionKeyPath
string
The path to the external key material on the EKM when using [EkmConnection][] e.g., "v0/my/key". Set this field instead of externalKeyUri when using an [EkmConnection][].
CryptoKeyPurpose
CryptoKeyPurpose describes the cryptographic capabilities of a CryptoKey . A given key can only be used for the operations allowed by its purpose. For more information, see Key purposes .
Enums
CRYPTO_KEY_PURPOSE_UNSPECIFIED
Not specified.
ENCRYPT_DECRYPT
CryptoKeys with this purpose may be used with [Encrypt][KeyManagementService.Encrypt] and [Decrypt][KeyManagementService.Decrypt].
ASYMMETRIC_SIGN
CryptoKeys with this purpose may be used with [AsymmetricSign][KeyManagementService.AsymmetricSign] and [GetPublicKey][KeyManagementService.GetPublicKey].
ASYMMETRIC_DECRYPT
CryptoKeys with this purpose may be used with [AsymmetricDecrypt][KeyManagementService.AsymmetricDecrypt] and [GetPublicKey][KeyManagementService.GetPublicKey].
MAC
CryptoKeys with this purpose may be used with [MacSign][KeyManagementService.MacSign].
CryptoKeyVersionTemplate
A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion , either manually with [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or automatically as a result of auto-rotation.
JSON representation
{
"protectionLevel" : enum ( ProtectionLevel ) ,
"algorithm" : enum ( CryptoKeyVersionAlgorithm )
}
Fields
protectionLevel
enum ( ProtectionLevel )
ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE .
algorithm
enum ( CryptoKeyVersionAlgorithm )
Required. Algorithm to use when creating a CryptoKeyVersion based on this template.
For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT .
Methods
list
Returns cryptographic keys managed by Cloud KMS in a given Cloud project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
