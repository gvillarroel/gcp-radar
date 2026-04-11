---
title: "REST Resource: projects.locations.certificateIssuanceConfigs \_|\_ Certificate\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs
  title: "REST Resource: projects.locations.certificateIssuanceConfigs \_|\_ Certificate\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Reference
Send feedback
REST Resource: projects.locations.certificateIssuanceConfigs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CertificateIssuanceConfig
JSON representation
CertificateAuthorityConfig
JSON representation
CertificateAuthorityServiceConfig
JSON representation
KeyAlgorithm
Methods
Resource: CertificateIssuanceConfig
CertificateIssuanceConfig specifies how to issue and manage a certificate.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"description" : string ,
"certificateAuthorityConfig" : {
object ( CertificateAuthorityConfig )
} ,
"lifetime" : string ,
"rotationWindowPercentage" : integer ,
"keyAlgorithm" : enum ( KeyAlgorithm )
}
Fields
name
string
Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern projects/*/locations/*/certificateIssuanceConfigs/* .
createTime
string ( Timestamp format)
Output only. The creation timestamp of a CertificateIssuanceConfig.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The last update timestamp of a CertificateIssuanceConfig.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Set of labels associated with a CertificateIssuanceConfig.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
description
string
Optional. One or more paragraphs of text description of a CertificateIssuanceConfig.
certificateAuthorityConfig
object ( CertificateAuthorityConfig )
Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
lifetime
string ( Duration format)
Required. Workload certificate lifetime requested.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
rotationWindowPercentage
integer
Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.
keyAlgorithm
enum ( KeyAlgorithm )
Required. The key algorithm to use when generating the private key.
CertificateAuthorityConfig
The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
JSON representation
{
// Union field kind can be only one of the following:
"certificateAuthorityServiceConfig" : {
object ( CertificateAuthorityServiceConfig )
}
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of CA config. kind can be only one of the following:
certificateAuthorityServiceConfig
object ( CertificateAuthorityServiceConfig )
Defines a CertificateAuthorityServiceConfig.
CertificateAuthorityServiceConfig
Contains information required to contact CA service.
JSON representation
{
"caPool" : string
}
Fields
caPool
string
Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{caPool}".
KeyAlgorithm
The type of keypair to generate.
Enums
KEY_ALGORITHM_UNSPECIFIED
Unspecified key algorithm.
RSA_2048
Specifies RSA with a 2048-bit modulus.
ECDSA_P256
Specifies ECDSA with curve P256.
Methods
create
Creates a new CertificateIssuanceConfig in a given project and location.
delete
Deletes a single CertificateIssuanceConfig.
get
Gets details of a single CertificateIssuanceConfig.
list
Lists CertificateIssuanceConfigs in a given project and location.
patch
Updates a CertificateIssuanceConfig.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
