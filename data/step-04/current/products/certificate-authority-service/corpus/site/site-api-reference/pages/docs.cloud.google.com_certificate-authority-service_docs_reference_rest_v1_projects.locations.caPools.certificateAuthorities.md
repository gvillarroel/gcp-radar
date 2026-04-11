---
title: "REST Resource: projects.locations.caPools.certificateAuthorities \_|\_ Certificate\
  \ Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities
  title: "REST Resource: projects.locations.caPools.certificateAuthorities \_|\_ Certificate\
    \ Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Reference
Send feedback
REST Resource: projects.locations.caPools.certificateAuthorities
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CertificateAuthority
JSON representation
Type
KeyVersionSpec
JSON representation
SignHashAlgorithm
SubordinateConfig
JSON representation
SubordinateConfigChain
JSON representation
State
AccessUrls
JSON representation
UserDefinedAccessUrls
JSON representation
Methods
Resource: CertificateAuthority
A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates .
JSON representation
{
"name" : string ,
"type" : enum ( Type ) ,
"config" : {
object ( CertificateConfig )
} ,
"lifetime" : string ,
"keySpec" : {
object ( KeyVersionSpec )
} ,
"subordinateConfig" : {
object ( SubordinateConfig )
} ,
"tier" : enum ( Tier ) ,
"state" : enum ( State ) ,
"pemCaCertificates" : [
string
] ,
"caCertificateDescriptions" : [
{
object ( CertificateDescription )
}
] ,
"gcsBucket" : string ,
"accessUrls" : {
object ( AccessUrls )
} ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"expireTime" : string ,
"labels" : {
string : string ,
...
} ,
"userDefinedAccessUrls" : {
object ( UserDefinedAccessUrls )
} ,
"satisfiesPzs" : boolean ,
"satisfiesPzi" : boolean
}
Fields
name
string
Identifier. The resource name for this CertificateAuthority in the format projects/*/locations/*/caPools/*/certificateAuthorities/* .
type
enum ( Type )
Required. Immutable. The Type of this CertificateAuthority .
config
object ( CertificateConfig )
Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.
lifetime
string ( Duration format)
Required. Immutable. The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and "notAfterTime" fields inside an X.509 certificate.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
keySpec
object ( KeyVersionSpec )
Required. Immutable. Used when issuing certificates for this CertificateAuthority . If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
subordinateConfig
object ( SubordinateConfig )
Optional. If this is a subordinate CertificateAuthority , this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.
tier
enum ( Tier )
Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority .
state
enum ( State )
Output only. The State for this CertificateAuthority .
pemCaCertificates[]
string
Output only. This CertificateAuthority 's certificate chain, including the current CertificateAuthority 's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority 's certificate.
caCertificateDescriptions[]
object ( CertificateDescription )
Output only. A structured description of this CertificateAuthority 's CA certificate and its issuers. Ordered as self-to-root.
gcsBucket
string
Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as gs:// ) or suffixes (such as .googleapis.com ). For example, to use a bucket named my-bucket , you would simply specify my-bucket . If not specified, a managed bucket will be created.
accessUrls
object ( AccessUrls )
Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.
createTime
string ( Timestamp format)
Output only. The time at which this CertificateAuthority was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this CertificateAuthority was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireTime
string ( Timestamp format)
Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
userDefinedAccessUrls
object ( UserDefinedAccessUrls )
Optional. User-defined URLs for CA certificate and CRLs. The service does not publish content to these URLs. It is up to the user to mirror content to these URLs.
satisfiesPzs
boolean
Output only. Reserved for future use.
satisfiesPzi
boolean
Output only. Reserved for future use.
Type
The type of a CertificateAuthority , indicating its issuing chain.
Enums
TYPE_UNSPECIFIED
Not specified.
SELF_SIGNED
Self-signed CA.
SUBORDINATE
Subordinate CA. Could be issued by a Private CA CertificateAuthority or an unmanaged CA.
KeyVersionSpec
A Cloud KMS key configuration that a CertificateAuthority will use.
JSON representation
{
// Union field KeyVersion can be only one of the following:
"cloudKmsKeyVersion" : string ,
"algorithm" : enum ( SignHashAlgorithm )
// End of list of possible types for union field KeyVersion .
}
Fields
Union field KeyVersion .
KeyVersion can be only one of the following:
cloudKmsKeyVersion
string
The resource name for an existing Cloud KMS CryptoKeyVersion in the format projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/* . This option enables full flexibility in the key's capabilities and properties.
algorithm
enum ( SignHashAlgorithm )
The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their [ProtectionLevel][google.cloud.kms.v1.ProtectionLevel] as HSM .
SignHashAlgorithm
The algorithm of a Cloud KMS CryptoKeyVersion of a [CryptoKey][google.cloud.kms.v1.CryptoKey] with the [CryptoKeyPurpose][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose] value ASYMMETRIC_SIGN . These values correspond to the [CryptoKeyVersionAlgorithm][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm] values. For RSA signing algorithms, the PSS algorithms should be preferred, use PKCS1 algorithms if required for compatibility. For further recommendations, see https://cloud.google.com/kms/docs/algorithms#algorithm_recommendations .
Enums
SIGN_HASH_ALGORITHM_UNSPECIFIED
Not specified.
RSA_PSS_2048_SHA256
maps to CryptoKeyVersionAlgorithm.RSA_SIGN_PSS_2048_SHA256
RSA_PSS_3072_SHA256
maps to CryptoKeyVersionAlgorithm. RSA_SIGN_PSS_3072_SHA256
RSA_PSS_4096_SHA256
maps to CryptoKeyVersionAlgorithm.RSA_SIGN_PSS_4096_SHA256
RSA_PKCS1_2048_SHA256
maps to CryptoKeyVersionAlgorithm.RSA_SIGN_PKCS1_2048_SHA256
RSA_PKCS1_3072_SHA256
maps to CryptoKeyVersionAlgorithm.RSA_SIGN_PKCS1_3072_SHA256
RSA_PKCS1_4096_SHA256
maps to CryptoKeyVersionAlgorithm.RSA_SIGN_PKCS1_4096_SHA256
EC_P256_SHA256
maps to CryptoKeyVersionAlgorithm.EC_SIGN_P256_SHA256
EC_P384_SHA384
maps to CryptoKeyVersionAlgorithm.EC_SIGN_P384_SHA384
SubordinateConfig
Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority , or a PEM issuer certificate chain.
JSON representation
{
// Union field subordinate_config can be only one of the following:
"certificateAuthority" : string ,
"pemIssuerChain" : {
object ( SubordinateConfigChain )
}
// End of list of possible types for union field subordinate_config .
}
Fields
Union field subordinate_config .
subordinate_config can be only one of the following:
certificateAuthority
string
Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority . This field is used for information and usability purposes only. The resource name is in the format projects/*/locations/*/caPools/*/certificateAuthorities/* .
pemIssuerChain
object ( SubordinateConfigChain )
Required. Contains the PEM certificate chain for the issuers of this CertificateAuthority , but not pem certificate for this CA itself.
SubordinateConfigChain
This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
JSON representation
{
"pemCertificates" : [
string
]
}
Fields
pemCertificates[]
string
Required. Expected to be in leaf-to-root order according to RFC 5246.
State
The state of a CertificateAuthority , indicating if it can be used.
Enums
STATE_UNSPECIFIED
Not specified.
ENABLED
Certificates can be issued from this CA. CRLs will be generated for this CA. The CA will be part of the CaPool 's trust anchor, and will be used to issue certificates from the CaPool .
DISABLED
Certificates cannot be issued from this CA. CRLs will still be generated. The CA will be part of the CaPool 's trust anchor, but will not be used to issue certificates from the CaPool .
STAGED
Certificates can be issued from this CA. CRLs will be generated for this CA. The CA will be part of the CaPool 's trust anchor, but will not be used to issue certificates from the CaPool .
AWAITING_USER_ACTIVATION
Certificates cannot be issued from this CA. CRLs will not be generated. The CA will not be part of the CaPool 's trust anchor, and will not be used to issue certificates from the CaPool .
DELETED
Certificates cannot be issued from this CA. CRLs will not be generated. The CA may still be recovered by calling CertificateAuthorityService.UndeleteCertificateAuthority before expireTime . The CA will not be part of the CaPool 's trust anchor, and will not be used to issue certificates from the CaPool .
AccessUrls
URLs where a CertificateAuthority will publish content.
JSON representation
{
"caCertificateAccessUrl" : string ,
"crlAccessUrls" : [
string
]
}
Fields
caCertificateAccessUrl
string
The URL where this CertificateAuthority 's CA certificate is published. This will only be set for CAs that have been activated.
crlAccessUrls[]
string
The URLs where this CertificateAuthority 's CRLs are published. This will only be set for CAs that have been activated.
UserDefinedAccessUrls
User-defined URLs for accessing content published by this CertificateAuthority .
JSON representation
{
"aiaIssuingCertificateUrls" : [
string
] ,
"crlAccessUrls" : [
string
]
}
Fields
aiaIssuingCertificateUrls[]
string
Optional. A list of URLs where the issuer CA certificate may be downloaded, which appears in the "Authority Information Access" extension in the certificate. If specified, the default Cloud Storage URLs will be omitted.
crlAccessUrls[]
string
Optional. A list of URLs where to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13 . If specified, the default Cloud Storage URLs will be omitted.
Methods
activate
Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
create
Create a new CertificateAuthority in a given Project and Location.
delete
Delete a CertificateAuthority .
disable
Disable a CertificateAuthority .
enable
Enable a CertificateAuthority .
fetch
Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
get
Returns a CertificateAuthority .
list
Lists CertificateAuthorities .
patch
Update a CertificateAuthority .
undelete
Undelete a CertificateAuthority that has been deleted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
