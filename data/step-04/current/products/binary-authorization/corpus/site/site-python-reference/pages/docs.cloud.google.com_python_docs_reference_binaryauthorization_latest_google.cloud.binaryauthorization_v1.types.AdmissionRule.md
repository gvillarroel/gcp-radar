---
title: "Class AdmissionRule (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types.AdmissionRule
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types.AdmissionRule
  title: "Class AdmissionRule (1.15.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AdmissionRule (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.15.0 (latest)
1.14.0
1.13.2
1.12.0
1.11.1
1.10.5
1.9.0
1.8.0
1.7.0
1.6.2
1.5.1
1.4.0
1.3.3
1.2.3
1.1.0
1.0.1
0.6.0
0.5.0
0.4.1
0.3.1
0.2.2
0.1.1
AdmissionRule ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An [admission
rule][google.cloud.binaryauthorization.v1.AdmissionRule] specifies
either that all container images used in a pod creation request must
be attested to by one or more
attestors , that all
pod creations will be allowed, or that all pod creations will be
denied.
Images matching an [admission allowlist
pattern][google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern]
are exempted from admission rules and will never block a pod
creation.
Attributes
Name
Description
evaluation_mode
google.cloud.binaryauthorization_v1.types.AdmissionRule.EvaluationMode
Required. How this admission rule will be
evaluated.
require_attestations_by
MutableSequence[str]
Optional. The resource names of the attestors that must
attest to a container image, in the format
projects/*/attestors/* . Each attestor must exist before
a policy can reference it. To add an attestor to a policy
the principal issuing the policy change request must be able
to read the attestor resource.
Note: this field must be non-empty when the evaluation_mode
field specifies REQUIRE_ATTESTATION, otherwise it must be
empty.
enforcement_mode
google.cloud.binaryauthorization_v1.types.AdmissionRule.EnforcementMode
Required. The action when a pod creation is
denied by the admission rule.
Classes
EnforcementMode
EnforcementMode ( value )
Defines the possible actions when a pod creation is denied by
an admission rule.
EvaluationMode
EvaluationMode ( value )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
