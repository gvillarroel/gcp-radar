---
title: "Certificate authority states \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states
  title: "Certificate authority states \_|\_ Certificate Authority Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Certificate authority states
This page describes the operational states that apply to certificate authorities (CAs).
Once created, a CA is in one of the following states throughout its lifecycle.
Enabled
Disabled
Staged
Awaiting user activation
Deleted
Subordinate CAs are created in the AWAITING_USER_ACTIVATION state, and they are set to the STAGED state after activation.
Note: If you don't activate subordinate CAs within 30 days of creation, the subordinate CAs are deleted.
Root CAs are created in the STAGED state. A root CA can never be in the AWAITING_USER_ACTIVATION state.
We recommend that you create and test certificates while the CA is still in the STAGED state. Once you have verified that the CA certificate has been published to all clients and tested certificate issuance from the CA, you can enable the CA to start issuing load-balanced certificates for the CA pool. For information on enabling a CA, see Enable a CA .
A CA pool cannot issue certificates until it has at least one CA in the ENABLED state.
Note: Once you enable a CA, it cannot be transitioned back to the STAGED state.
The following table illustrates the properties of a CA in each of the states.
CA state
Can issue certificates?
Included in CA pool certificate issuance rotation?
Included in CA pool Trust Anchor?
Can revoke certificates and publish CRLs?
Is billed?
Are resources accessible?
Can accept update requests?
Enabled
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Disabled
No
No
Yes
Yes
Yes
Yes
No
Staged
Yes 1
No
Yes
Yes
Yes
Yes
Yes
Awaiting user activation
No
No
No
No
No
Yes
No
Deleted
No
No
No
No
No
No
No
1 CAs in the STAGED state cannot issue certificates through CA pool load-balancing. They can only issue certificates when requested directly by the clients.
What's next
Learn how to enable, disable, and restore CAs .
Learn how to request certificates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
