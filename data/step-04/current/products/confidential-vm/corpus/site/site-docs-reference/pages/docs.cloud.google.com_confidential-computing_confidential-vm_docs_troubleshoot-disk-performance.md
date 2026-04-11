---
title: "Disk performance \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-disk-performance
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-disk-performance
  title: "Disk performance \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Disk performance
Stay organized with collections
Save and categorize content based on your preferences.
If you encounter slow disk performance, particularly with large file operations
(greater than 1 GB), on your Confidential VM instance with a GPU, add idle=poll
in GRUB_CMDLINE_LINUX_DEFAULT to the
/etc/default/grub.d/50-cloudimg-settings.cfg file on your VM. Run the
sudo update-grub command to update the GRUB configuration, and then reboot.
For more information, see
Troubleshooting disk performance in Google Cloud instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
