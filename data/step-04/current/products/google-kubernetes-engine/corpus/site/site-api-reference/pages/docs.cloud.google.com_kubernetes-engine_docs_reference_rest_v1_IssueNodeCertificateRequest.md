---
title: "IssueNodeCertificateRequest \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/IssueNodeCertificateRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/IssueNodeCertificateRequest
  title: "IssueNodeCertificateRequest \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
IssueNodeCertificateRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TPMAttestation
JSON representation
IssueNodeCertificateRequest is the request for instances.issueNodeCertificate.
JSON representation
{
"instance" : string ,
"subjectPublicKey" : string ,
"ekPublicCertificate" : string ,
"attestation" : {
object ( TPMAttestation )
}
}
Fields
instance
string
Required. The name of the Compute Engine instance to issue a certificate for.
Format: projects/*/locations/*/instances/* .
subjectPublicKey
string ( bytes format)
Required. A PKIX-serialized public key to which the node identity certificate should be issued.
A base64-encoded string.
ekPublicCertificate
string ( bytes format)
Required. The Public part of the EK (Endorsement key) loaded from the TPM. Will be ECDSA key.
GKE will verify this certificate against claimed instance identity.
A base64-encoded string.
attestation
object ( TPMAttestation )
Required. The attestation public key that the client had the TPM generate.
TPMAttestation
TPMAttestation holds TPM attestation key and associated metadata.
JSON representation
{
"publicKey" : string ,
"keyCreateData" : string ,
"keyCreateAttestation" : string ,
"keyCreateSignature" : string
}
Fields
publicKey
string ( bytes format)
Required. The attestation public key that the client had the TPM generate.
Serialized as a TPMT_PUBLIC structure from TPM 2.0 Part 2 (Structures).
A base64-encoded string.
keyCreateData
string ( bytes format)
Required. The creation properties of the attestation key. TPMS_CREATION_DATA structure from TPM 2.0 Part 2 (Structures).
A base64-encoded string.
keyCreateAttestation
string ( bytes format)
Required. TPMS_ATTEST structure from TPM 2.0 Part 2 (Structures).
A base64-encoded string.
keyCreateSignature
string ( bytes format)
Required. TPMT_SIGNATURE structure from TPM 2.0 Part 2 (Structures).
A base64-encoded string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],[]]
