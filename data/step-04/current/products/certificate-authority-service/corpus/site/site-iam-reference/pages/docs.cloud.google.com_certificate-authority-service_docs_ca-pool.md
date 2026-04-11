---
title: "Overview of CA pools \_|\_ Certificate Authority Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/ca-pool
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/ca-pool
  title: "Overview of CA pools \_|\_ Certificate Authority Service \_|\_ Google Cloud\
    \ Documentation"
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
Overview of CA pools
A certificate authority (CA) pool is a collection of multiple CAs with a common
certificate issuance policy and Identity and Access Management (IAM) policy. CA
pools provide the ability to rotate trust chains without any outage or
downtime for their payloads.
A CA pool is empty when you create it. For information about adding a CA to a
CA pool, see Create a root CA .
The CA pool maintains a list of trusted CA certificates. You must install these
trusted CA certificates with the certificate requester.
Properties of CAs in a CA pool
The following table lists the features that must be same, can be different, and
must be different for all CAs in a CA pool.
Must be same for all CAs in a CA pool
Can be different for all CAs in a CA pool
Must be different for all CAs in a CA pool
Certificate issuance policies
IAM conditions
Tier
Location
Publishing options. For example, whether to publish a CRL.
Algorithms and sizes of signing keys
CA subjects and SANs
Expiration date and validity period
Labels
Customer-managed Cloud Storage bucket used for CRL and AIA.
Customer-managed CA keys
CA certificate extensions
CA name
Achieve higher QPS
Certificate Authority Service enforces limits on the number of requests you can
send. For example, the usage limit for the
createCertificate request for a DevOps CA is 25
QPS .
To increase your total effective QPS, you must have multiple
CAs in a CA pool. A CA pool increases the total effective QPS by
distributing the incoming certificate requests across all CAs in the ENABLED
state . However, you can still request certificates from a particular
CA in the CA pool .
You can use the following formula to calculate the maximum allowed QPS for a CA
pool:
Total effective QPS = min(100, number of CAs in the CA pool x QPS per CA)
For example, if the effective QPS for a CA is 25 QPS and if you create 4 CAs in
a CA pool, then the total effective QPS of the CA pool is 100 QPS.
For more information about achieving a higher total effective QPS, see
Increase certificate creation throughput using a CA pool .
Manage CA rotation
A CA pool can have CAs that are in different states . A CA pool
load-balances certificate issuance for workloads across the enabled CAs in a CA
pool.
The CA pool abstracts the specific CAs within it that issue certificates. When
a CA expires, the total effective QPS of the CA pool gets reduced. For example,
if a CA pool has 4 enabled CAs, the total effective QPS for that CA pool is
100 QPS. But if one CA in the CA pool expires, the total effective QPS gets
reduced to 75 QPS. To ensure that the total effective QPS of the CA pool remains
unaffected when a CA expires, you must create a new CA before the existing CA
expires.
For more information, see Managing CA rotation .
For information about requesting an increase in quota, see
Requesting a quota adjustment .
What's next
Learn how to work with quotas .
Learn how to create a CA pool .
Learn how to update and delete a CA pool .
Learn how to create a root CA .
Learn how to request a certificate .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
