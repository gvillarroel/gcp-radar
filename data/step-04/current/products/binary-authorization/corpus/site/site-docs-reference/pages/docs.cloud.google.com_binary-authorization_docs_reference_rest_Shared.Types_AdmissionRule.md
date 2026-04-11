---
title: "AdmissionRule \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/AdmissionRule
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/api
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/AdmissionRule
  title: "AdmissionRule \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Reference
Send feedback
AdmissionRule
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors , that all pod creations will be allowed, or that all pod creations will be denied.
Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.
JSON representation
{
"evaluationMode" : enum ( EvaluationMode ) ,
"requireAttestationsBy" : [
string
] ,
"enforcementMode" : enum ( EnforcementMode )
}
Fields
evaluationMode
enum ( EvaluationMode )
Required. How this admission rule will be evaluated.
requireAttestationsBy[]
string
Optional. The resource names of the attestors that must attest to a container image, in the format projects/*/attestors/* . Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource.
Note: this field must be non-empty when the evaluationMode field specifies REQUIRE_ATTESTATION, otherwise it must be empty.
enforcementMode
enum ( EnforcementMode )
Required. The action when a pod creation is denied by the admission rule.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
