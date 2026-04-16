---
title: "IssueNodeCertificateResponse \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/IssueNodeCertificateResponse
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/IssueNodeCertificateResponse
  title: "IssueNodeCertificateResponse \_|\_ Google Kubernetes Engine (GKE) \_|\_\
    \ Google Cloud Documentation"
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
IssueNodeCertificateResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
IssueNodeCertificateResponse is the response for instances.issueNodeCertificate. It returns client and server certificates sealed with a challenge that only owner of the EK/TPM can solve.
JSON representation
{
"credential" : string ,
"aeadKey" : string ,
"sealedNodeCertificates" : string
}
Fields
credential
string ( bytes format)
A TPM credential that allows the TPM EK to decrypt aeadKey.
It is a part of 'Activate Credential' challenge that only owner of the EK can solve to retrieve aeadKey.
A base64-encoded string.
aeadKey
string ( bytes format)
A ciphertext to be used to unseal the sealed_certificates field.
Part of 'Activate Credential' challenge that only owner of the EK can solve to retrieve this key.
A base64-encoded string.
sealedNodeCertificates
string ( bytes format)
A NodeCertificates message, serialized and sealed using unencrypted aeadKey
is of the form 'IV || CT || TAG'
A base64-encoded string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],[]]
