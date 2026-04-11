---
title: "Data encryption and encryption keys \_|\_ Assured Workloads \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/encryption-keys
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/encryption-keys
  title: "Data encryption and encryption keys \_|\_ Assured Workloads \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Data encryption and encryption keys
This page provides information about encryption of data on Google Cloud and
about encryption keys.
Encryption in transit and at rest
Google Cloud enables
encryption in transit by default to encrypt
requests before transmission and to protect the raw data using the Transport
Layer Security (TLS) protocol.
Once data is transferred to Google Cloud to be stored, Google Cloud
applies encryption at rest by
default. To gain more control over how data is encrypted at rest,
Google Cloud customers can use Cloud Key Management Service to generate, use,
rotate, and destroy encryption keys according to their own policies. These keys
are called customer-managed encryption keys ( CMEK ).
For certain control packages, Assured Workloads can deploy a CMEK
project alongside your resources project
when you create an Assured Workloads folder.
As an alternative to CMEK, Google-owned and Google-managed encryption keys, provided by default,
are FIPS-140-2
compliant and are able to support most control packages in
Assured Workloads. Customers can delete the CMEK project and rely
solely on Google-owned and Google-managed encryption keys. We recommend, however, that you decide whether to
use CMEK keys before you create your Assured Workloads folder as
deletion of existing in-use CMEK can result in inability to access or recover
data.
Customer-managed encryption keys (CMEK)
If you need more control over the keys used to encrypt data at rest within a
Google Cloud project than what Google Cloud's default encryption
provides, Google Cloud services offer the ability to protect data by using
encryption keys managed by the customer within Cloud KMS. These
encryption keys are called customer-managed encryption keys (CMEK).
To learn which aspects of the lifecycle and management of your keys that CMEK
provides, see Customer-managed encryption keys (CMEK) in
Cloud KMS documentation. For a tutorial that guides you through
managing keys and encrypted data using Cloud KMS, see the
quickstart or
codelab .
What's next
Learn more about creating a symmetrical key with Cloud KMS .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
