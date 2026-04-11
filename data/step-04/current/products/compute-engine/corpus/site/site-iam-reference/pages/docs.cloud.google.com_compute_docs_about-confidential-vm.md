---
title: "About Confidential VM \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/about-confidential-vm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/about-confidential-vm
  title: "About Confidential VM \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
About Confidential VM
Stay organized with collections
Save and categorize content based on your preferences.
A Confidential VM is a Compute Engine VM that uses a
specific machine type
and keeps your sensitive code and other data encrypted in memory during
processing, that is, it performs encryption-in-use .
Together with encryption-at-rest
and encryption-in-transit ,
Confidential VM can help keep your data and applications encrypted at
all times.
For a more detailed conceptual overview, see
Confidential VM overview .
To get started using Confidential VM, see Create a Confidential VM instance .
You can manage your Confidential VMs in some of the following ways:
You can use organization policy constraints to
ensure that instances created in your organization are Confidential VMs .
You can use Cloud Monitoring and Cloud Logging to
monitor and validate your Confidential VM instances .
You can use shared Virtual Private Cloud (VPC) networks, organization policy
constraints, and firewall rules to set up a security perimeter
that ensures your Confidential VM instances can only interact with
other Confidential VM instances.
With the A3 machine series, you can create a Confidential VM instance
that uses Intel TDX and has an attached
GPU. For more information, see
Confidential VM
supported configurations .
For enhanced block storage security with Confidential VM, you can use
Confidential mode for Hyperdisk Balanced .
Confidential mode for Hyperdisk Balanced adds another layer of security by enabling hardware-based encryption
of disk data. Hyperdisk volumes in Confidential mode use
Cloud HSM and Trusted Execution Environments (TEE) to
provide additional cryptographic isolation. For more information about TEEs, see
Trusted Execution Environment Explainer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
