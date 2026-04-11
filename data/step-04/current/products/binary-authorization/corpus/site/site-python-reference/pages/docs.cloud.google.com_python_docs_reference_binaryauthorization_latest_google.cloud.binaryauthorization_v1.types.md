---
title: "Package types (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types
  title: "Package types (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Package types (1.15.0)
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
API documentation for binaryauthorization_v1.types package.
Classes
AdmissionRule
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
AdmissionWhitelistPattern
An [admission allowlist
pattern][google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern]
exempts images from checks by [admission
rules][google.cloud.binaryauthorization.v1.AdmissionRule].
Attestor
An attestor that
attests to container image artifacts. An existing attestor cannot be
modified except where indicated.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AttestorPublicKey
An [attestor public
key][google.cloud.binaryauthorization.v1.AttestorPublicKey] that
will be used to verify attestations signed by this attestor.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CreateAttestorRequest
Request message for [BinauthzManagementService.CreateAttestor][].
DeleteAttestorRequest
Request message for [BinauthzManagementService.DeleteAttestor][].
GetAttestorRequest
Request message for [BinauthzManagementService.GetAttestor][].
GetPolicyRequest
Request message for [BinauthzManagementService.GetPolicy][].
GetSystemPolicyRequest
Request to read the current system policy.
ListAttestorsRequest
Request message for [BinauthzManagementService.ListAttestors][].
ListAttestorsResponse
Response message for [BinauthzManagementService.ListAttestors][].
PkixPublicKey
A public key in the PkixPublicKey format (see
https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for
details). Public keys of this type are typically textually
encoded using the PEM format.
Policy
A policy for container
image binary authorization.
UpdateAttestorRequest
Request message for [BinauthzManagementService.UpdateAttestor][].
UpdatePolicyRequest
Request message for [BinauthzManagementService.UpdatePolicy][].
UserOwnedGrafeasNote
An [user owned Grafeas
note][google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote]
references a Grafeas Attestation.Authority Note created by the user.
ValidateAttestationOccurrenceRequest
Request message for
ValidationHelperV1.ValidateAttestationOccurrence .
ValidateAttestationOccurrenceResponse
Response message for
ValidationHelperV1.ValidateAttestationOccurrence .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
