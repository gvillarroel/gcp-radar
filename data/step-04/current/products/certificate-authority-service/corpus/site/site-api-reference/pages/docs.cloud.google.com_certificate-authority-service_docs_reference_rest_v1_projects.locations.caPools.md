---
title: "REST Resource: projects.locations.caPools \_|\_ Certificate Authority Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools
  title: "REST Resource: projects.locations.caPools \_|\_ Certificate Authority Service\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.caPools
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CaPool
JSON representation
IssuancePolicy
JSON representation
AllowedKeyType
JSON representation
RsaKeyType
JSON representation
EcKeyType
JSON representation
EcSignatureAlgorithm
IssuanceModes
JSON representation
PublishingOptions
JSON representation
EncodingFormat
Methods
Resource: CaPool
A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
JSON representation
{
"name" : string ,
"tier" : enum ( Tier ) ,
"issuancePolicy" : {
object ( IssuancePolicy )
} ,
"publishingOptions" : {
object ( PublishingOptions )
} ,
"labels" : {
string : string ,
...
}
}
Fields
name
string
Identifier. The resource name for this CaPool in the format projects/*/locations/*/caPools/* .
tier
enum ( Tier )
Required. Immutable. The Tier of this CaPool .
issuancePolicy
object ( IssuancePolicy )
Optional. The IssuancePolicy to control how Certificates will be issued from this CaPool .
publishingOptions
object ( PublishingOptions )
Optional. The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool .
labels
map (key: string, value: string)
Optional. Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
IssuancePolicy
Defines controls over all certificate issuance within a CaPool .
JSON representation
{
"allowedKeyTypes" : [
{
object ( AllowedKeyType )
}
] ,
"backdateDuration" : string ,
"maximumLifetime" : string ,
"allowedIssuanceModes" : {
object ( IssuanceModes )
} ,
"baselineValues" : {
object ( X509Parameters )
} ,
"identityConstraints" : {
object ( CertificateIdentityConstraints )
} ,
"passthroughExtensions" : {
object ( CertificateExtensionConstraints )
}
}
Fields
allowedKeyTypes[]
object ( AllowedKeyType )
Optional. If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here. Otherwise, any key may be used.
backdateDuration
string ( Duration format)
Optional. The duration to backdate all certificates issued from this CaPool . If not set, the certificates will be issued with a notBeforeTime of the issuance time (i.e. the current time). If set, the certificates will be issued with a notBeforeTime of the issuance time minus the backdateDuration. The notAfterTime will be adjusted to preserve the requested lifetime. The backdateDuration must be less than or equal to 48 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maximumLifetime
string ( Duration format)
Optional. The maximum lifetime allowed for issued Certificates . Note that if the issuing CertificateAuthority expires before a Certificate resource's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
allowedIssuanceModes
object ( IssuanceModes )
Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates .
baselineValues
object ( X509Parameters )
Optional. A set of X.509 values that will be applied to all certificates issued through this CaPool . If a certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate request uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate issuance request will fail.
identityConstraints
object ( CertificateIdentityConstraints )
Optional. Describes constraints on identities that may appear in Certificates issued through this CaPool . If this is omitted, then this CaPool will not add restrictions on a certificate's identity.
passthroughExtensions
object ( CertificateExtensionConstraints )
Optional. Describes the set of X.509 extensions that may appear in a Certificate issued through this CaPool . If a certificate request sets extensions that don't appear in the passthroughExtensions , those extensions will be dropped. If a certificate request uses a CertificateTemplate with predefinedValues that don't appear here, the certificate issuance request will fail. If this is omitted, then this CaPool will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CaPool 's baselineValues .
AllowedKeyType
Describes a "type" of key that may be used in a Certificate issued from a CaPool . Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key.
JSON representation
{
// Union field key_type can be only one of the following:
"rsa" : {
object ( RsaKeyType )
} ,
"ellipticCurve" : {
object ( EcKeyType )
}
// End of list of possible types for union field key_type .
}
Fields
Union field key_type .
key_type can be only one of the following:
rsa
object ( RsaKeyType )
Represents an allowed RSA key type.
ellipticCurve
object ( EcKeyType )
Represents an allowed Elliptic Curve key type.
RsaKeyType
Describes an RSA key that may be used in a Certificate issued from a CaPool .
JSON representation
{
"minModulusSize" : string ,
"maxModulusSize" : string
}
Fields
minModulusSize
string ( int64 format)
Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply.
maxModulusSize
string ( int64 format)
Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes.
EcKeyType
Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool .
JSON representation
{
"signatureAlgorithm" : enum ( EcSignatureAlgorithm )
}
Fields
signatureAlgorithm
enum ( EcSignatureAlgorithm )
Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed.
EcSignatureAlgorithm
Describes an elliptic curve-based signature algorithm that may be used in a Certificate issued from a CaPool .
Enums
EC_SIGNATURE_ALGORITHM_UNSPECIFIED
Not specified. Signifies that any signature algorithm may be used.
ECDSA_P256
Refers to the Elliptic Curve Digital Signature Algorithm over the NIST P-256 curve.
ECDSA_P384
Refers to the Elliptic Curve Digital Signature Algorithm over the NIST P-384 curve.
EDDSA_25519
Refers to the Edwards-curve Digital Signature Algorithm over curve 25519, as described in RFC 8410.
IssuanceModes
IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool .
JSON representation
{
"allowCsrBasedIssuance" : boolean ,
"allowConfigBasedIssuance" : boolean
}
Fields
allowCsrBasedIssuance
boolean
Optional. When true, allows callers to create Certificates by specifying a CSR.
allowConfigBasedIssuance
boolean
Optional. When true, allows callers to create Certificates by specifying a CertificateConfig .
PublishingOptions
Options relating to the publication of each CertificateAuthority 's CA certificate and CRLs and their inclusion as extensions in issued Certificates . The options set here apply to certificates issued by any CertificateAuthority in the CaPool .
JSON representation
{
"publishCaCert" : boolean ,
"publishCrl" : boolean ,
"encodingFormat" : enum ( EncodingFormat )
}
Fields
publishCaCert
boolean
Optional. When true, publishes each CertificateAuthority 's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates . If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.
publishCrl
boolean
Optional. When true, publishes each CertificateAuthority 's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates . If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.
encodingFormat
enum ( EncodingFormat )
Optional. Specifies the encoding format of each CertificateAuthority resource's CA certificate and CRLs. If this is omitted, CA certificates and CRLs will be published in PEM.
EncodingFormat
Supported encoding formats for publishing.
Enums
ENCODING_FORMAT_UNSPECIFIED
Not specified. By default, PEM format will be used.
PEM
The CertificateAuthority 's CA certificate and CRLs will be published in PEM format.
DER
The CertificateAuthority 's CA certificate and CRLs will be published in DER format.
Methods
create
Create a CaPool .
delete
Delete a CaPool .
fetchCaCerts
FetchCaCerts returns the current trust anchor for the CaPool .
get
Returns a CaPool .
getIamPolicy
Gets the access control policy for a resource.
list
Lists CaPools .
patch
Update a CaPool .
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
