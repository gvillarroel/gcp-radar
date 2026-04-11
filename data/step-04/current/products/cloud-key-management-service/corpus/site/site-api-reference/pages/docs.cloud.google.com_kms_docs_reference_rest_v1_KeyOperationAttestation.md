---
title: "KeyOperationAttestation \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation
  title: "KeyOperationAttestation \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
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
KeyOperationAttestation
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AttestationFormat
CertificateChains
JSON representation
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
