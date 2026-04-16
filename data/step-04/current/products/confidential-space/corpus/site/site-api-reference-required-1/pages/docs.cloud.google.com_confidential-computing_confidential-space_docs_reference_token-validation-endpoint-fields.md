---
title: "Attestation token validation endpoint fields \_|\_ Confidential Space \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields
  title: "Attestation token validation endpoint fields \_|\_ Confidential Space \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Reference
Send feedback
Attestation token validation endpoint fields
Stay organized with collections
Save and categorize content based on your preferences.
Which validation endpoint you use depends on the type of token that you
requested:
OIDC tokens
PKI tokens
OIDC tokens
The following table describes the high-level fields returned at the OIDC token
validation endpoint,
https://confidentialcomputing.googleapis.com/.well-known/openid-configuration .
Key
Description
claims_supported
The keys in the attestation token. For more details, see
Attestation token claims .
id_token_signing_alg_values_supported
The signing algorithms ( alg values) supported by the
token. Confidential Space supports the RS256
algorithm.
issuer
The HTTPS scheme that Confidential Space uses as its
issuer identifier.
The value is
https://confidentialcomputing.googleapis.com .
jwks_uri
The path to the public keys used to verify the token signature. You
can publish these keys in a Cloud Storage bucket.
You can find the jwks_uri keys at
https://www.googleapis.com/service_accounts/v1/metadata/jwk/signer@confidentialspace-sign.iam.gserviceaccount.com .
An example value is
https://example.storage.googleapis.com/jwks.json.
response_types_supported
A list of supported Confidential Space response types. Confidential Space
supports id_token .
scopes_supported
The
OAuth 2.0
scope values that the Confidential VM instance supports.
Confidential Space supports openid only.
subject_types_supported
The subject identifier types that Confidential Space
supports. Confidential Space supports
public .
PKI tokens
The following table describes the high-level fields returned at the PKI token
validation endpoint,
https://confidentialcomputing.googleapis.com/.well-known/attestation-pki-root .
root_ca_uri
The path to the root certificate that is used to verify a PKI token
type signature.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
