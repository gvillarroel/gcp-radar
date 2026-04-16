---
title: "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests
  title: "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Send feedback
REST Resource: folders.approvalRequests
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ApprovalRequest
JSON representation
AugmentedInfo
JSON representation
ResourceProperties
JSON representation
AccessReason
JSON representation
Type
AccessLocations
JSON representation
ApproveDecision
JSON representation
SignatureInfo
JSON representation
CryptoKeyVersionAlgorithm
DismissDecision
JSON representation
Methods
Resource: ApprovalRequest
A request for the customer to approve access to a resource.
JSON representation
{
"name" : string ,
"requestedResourceName" : string ,
"requestedAugmentedInfo" : {
object ( AugmentedInfo )
} ,
"requestedResourceProperties" : {
object ( ResourceProperties )
} ,
"requestedReason" : {
object ( AccessReason )
} ,
"requestedLocations" : {
object ( AccessLocations )
} ,
"requestTime" : string ,
"requestedExpiration" : string ,
"requestedDuration" : string ,
// Union field decision can be only one of the following:
"approve" : {
object ( ApproveDecision )
} ,
"dismiss" : {
object ( DismissDecision )
}
// End of list of possible types for union field decision .
}
Fields
name
string
The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}".
requestedResourceName
string
The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names . The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
requestedAugmentedInfo
object ( AugmentedInfo )
This field contains the augmented information of the request.
requestedResourceProperties
object ( ResourceProperties )
Properties related to the resource represented by requestedResourceName.
requestedReason
object ( AccessReason )
The access reason for which approval is being requested.
requestedLocations
object ( AccessLocations )
The locations for which approval is being requested.
requestTime
string ( Timestamp format)
The time at which approval was requested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestedExpiration
string ( Timestamp format)
The original requested expiration for the approval. Calculated by adding the requestedDuration to the requestTime.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestedDuration
string ( Duration format)
The requested access duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field decision . The current decision on the approval request. decision can be only one of the following:
approve
object ( ApproveDecision )
Access was approved.
dismiss
object ( DismissDecision )
The request was dismissed.
AugmentedInfo
This field contains the augmented information of the request. Requires augmented administrative access to be enabled.
JSON representation
{
"command" : string
}
Fields
command
string
For command-line tools, the full command-line exactly as entered by the actor without adding any additional characters (such as quotation marks).
ResourceProperties
The properties associated with the resource of the request.
JSON representation
{
"excludesDescendants" : boolean
}
Fields
excludesDescendants
boolean
Whether an approval will exclude the descendants of the resource being requested.
AccessReason
JSON representation
{
"type" : enum ( Type ) ,
"detail" : string
}
Fields
type
enum ( Type )
Type of access reason.
detail
string
More detail about certain reason types. See comments for each type above.
Type
Access reason type.
Enums
TYPE_UNSPECIFIED
This value is not used.
CUSTOMER_INITIATED_SUPPORT
Customer made a request or raised an issue that required the principal to access customer data. detail is of the form ("#####" is the issue ID):
"Feedback Report: #####"
"Case Number: #####"
"Case ID: #####"
"E-PIN Reference: #####"
"Google-#####"
"T-#####"
GOOGLE_INITIATED_SERVICE
The principal accessed customer data in order to diagnose or resolve a suspected issue in services. Often this access is used to confirm that customers are not affected by a suspected service issue or to remediate a reversible system issue.
GOOGLE_INITIATED_REVIEW
Google initiated service for security, fraud, abuse, or compliance purposes.
THIRD_PARTY_DATA_REQUEST
The principal was compelled to access customer data in order to respond to a legal third party data request or process, including legal processes from customers themselves.
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
The principal accessed customer data in order to diagnose or resolve a suspected issue in services or a known outage.
CLOUD_INITIATED_ACCESS
Similar to 'GOOGLE_INITIATED_SERVICE' or 'GOOGLE_INITIATED_REVIEW', but with universe agnostic naming. The principal accessed customer data in order to diagnose or resolve a suspected issue in services or a known outage, or for security, fraud, abuse, or compliance review purposes.
AccessLocations
Physical assigned office and physical location of the Google administrator performing the access.
JSON representation
{
"principalOfficeCountry" : string ,
"principalPhysicalLocationCountry" : string
}
Fields
principalOfficeCountry
string
The "home office" location of the Google administrator. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes:
ASI: Asia
EUR: Europe
OCE: Oceania
AFR: Africa
NAM: North America
SAM: South America
ANT: Antarctica
ANY: Any location
principalPhysicalLocationCountry
string
Physical location of the Google administrator at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes:
ASI: Asia
EUR: Europe
OCE: Oceania
AFR: Africa
NAM: North America
SAM: South America
ANT: Antarctica
ANY: Any location
ApproveDecision
A decision that has been made to approve access to a resource.
JSON representation
{
"approveTime" : string ,
"expireTime" : string ,
"invalidateTime" : string ,
"signatureInfo" : {
object ( SignatureInfo )
} ,
"autoApproved" : boolean ,
"policyApproved" : boolean
}
Fields
approveTime
string ( Timestamp format)
The time at which approval was granted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireTime
string ( Timestamp format)
The time at which the approval expires.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
invalidateTime
string ( Timestamp format)
If set, denotes the timestamp at which the approval is invalidated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
signatureInfo
object ( SignatureInfo )
The signature for the ApprovalRequest and details on how it was signed.
autoApproved
boolean
True when the request has been auto-approved.
policyApproved
boolean
True when the request has been approved by the customer's defined policy.
SignatureInfo
Information about the digital signature of the resource.
JSON representation
{
"signature" : string ,
"googleKeyAlgorithm" : enum ( CryptoKeyVersionAlgorithm ) ,
"serializedApprovalRequest" : string ,
// Union field verification_info can be only one of the following:
"googlePublicKeyPem" : string ,
"customerKmsKeyVersion" : string
// End of list of possible types for union field verification_info .
}
Fields
signature
string ( bytes format)
The digital signature.
A base64-encoded string.
googleKeyAlgorithm
enum ( CryptoKeyVersionAlgorithm )
The hashing algorithm used for signature verification. It will only be present in the case of Google managed keys.
serializedApprovalRequest
string ( bytes format)
The ApprovalRequest that is serialized without the SignatureInfo message field. This data is used with the hashing algorithm to generate the digital signature, and it can be used for signature verification.
A base64-encoded string.
Union field verification_info . How this signature may be verified. verification_info can be only one of the following:
googlePublicKeyPem
string
The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.
customerKmsKeyVersion
string
The resource name of the customer CryptoKeyVersion used for signing.
CryptoKeyVersionAlgorithm
The algorithm of the CryptoKeyVersion , indicating what parameters must be used for each cryptographic operation.
The GOOGLE_SYMMETRIC_ENCRYPTION algorithm is usable with CryptoKey.purpose ENCRYPT_DECRYPT .
Algorithms beginning with RSA_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after RSA_SIGN_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
For PSS, the salt length used is equal to the length of digest algorithm. For example, RSA_SIGN_PSS_2048_SHA256 will use PSS with a salt length of 256 bits or 32 bytes.
Algorithms beginning with RSA_DECRYPT_ are usable with CryptoKey.purpose ASYMMETRIC_DECRYPT .
The fields in the name after RSA_DECRYPT_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
Algorithms beginning with EC_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after EC_SIGN_ correspond to the following parameters: elliptic curve, digest algorithm.
Algorithms beginning with HMAC_ are usable with CryptoKey.purpose MAC .
The suffix following HMAC_ corresponds to the hash algorithm being used (eg. SHA256).
Algorithms beginning with PQ_ are post-quantum.
For more information, see Key purposes and algorithms .
Enums
CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED
Not specified.
GOOGLE_SYMMETRIC_ENCRYPTION
Creates symmetric encryption keys.
AES_128_GCM
AES-GCM (Galois Counter Mode) using 128-bit keys.
AES_256_GCM
AES-GCM (Galois Counter Mode) using 256-bit keys.
AES_128_CBC
AES-CBC (Cipher Block Chaining Mode) using 128-bit keys.
AES_256_CBC
AES-CBC (Cipher Block Chaining Mode) using 256-bit keys.
AES_128_CTR
AES-CTR (Counter Mode) using 128-bit keys.
AES_256_CTR
AES-CTR (Counter Mode) using 256-bit keys.
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
EC_SIGN_ED25519
EdDSA on the Curve25519 in pure mode (taking data as input).
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
ML_KEM_768
ML-KEM-768 (FIPS 203)
ML_KEM_1024
ML-KEM-1024 (FIPS 203)
KEM_XWING
X-Wing hybrid KEM combining ML-KEM-768 with X25519 following datatracker.ietf.org/doc/draft-connolly-cfrg-xwing-kem/.
PQ_SIGN_ML_DSA_65
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3. Randomized version.
PQ_SIGN_SLH_DSA_SHA2_128S
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized version.
PQ_SIGN_HASH_SLH_DSA_SHA2_128S_SHA256
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized pre-hash version supporting SHA256 digests.
DismissDecision
A decision that has been made to dismiss an approval request.
JSON representation
{
"dismissTime" : string ,
"implicit" : boolean
}
Fields
dismissTime
string ( Timestamp format)
The time at which the approval request was dismissed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
implicit
boolean
This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).
Methods
approve
Approves a request and returns the updated ApprovalRequest.
dismiss
Dismisses a request.
get
Gets an approval request.
invalidate
Invalidates an existing ApprovalRequest.
list
Lists approval requests associated with a project, folder, or organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
