---
title: "About Shielded VMs \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/about-shielded-vm
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/about-shielded-vm
  title: "About Shielded VMs \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
About Shielded VMs
Stay organized with collections
Save and categorize content based on your preferences.
You can enable the Shielded VM service on your Compute Engine VM
instances to help defend against rootkits and bootkits. Shielded VM
leverages advanced platform security capabilities such as
Secure Boot ,
Virtual trusted platform module (vTPM) -enabled
Measured Boot , and
Integrity monitoring .
Note: To help prevent security issues, you must ensure your instances have the
latest available Microsoft Secure Boot certificates. For detailed instructions
on identifying and updating affected VMs, see the
Microsoft Secure Boot certificates expiration guide .
For a more detailed overview, see
Key concepts for Shielded VM .
To get started using Shielded VM, try the
quickstart
or see
Modifying Shielded VM options .
You can monitor the integrity of your Shielded VMs in some of the
following ways:
You can use Cloud Monitoring to
monitor the boot integrity of
Shielded VM instances. Next, you can identify the cause of an integrity
validation failure, and update the integrity policy baseline accordingly.
You can also
use a Cloud Run functions trigger to automatically act
on integrity monitoring events.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
