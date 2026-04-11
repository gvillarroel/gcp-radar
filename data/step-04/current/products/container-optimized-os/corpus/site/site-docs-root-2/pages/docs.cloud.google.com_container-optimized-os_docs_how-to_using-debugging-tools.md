---
title: "Use debugging tools \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools
  title: "Use debugging tools \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Use debugging tools
Stay organized with collections
Save and categorize content based on your preferences.
This page explains tools that you can use to debug
Container-Optimized OS.
Run the perf tool on Container-Optimized OS
By default, perf
is installed on Container-Optimized OS. You can run perf on your cos
instance from your shell command line.
If you have limited privilege, you might need to enable the use of the
performance events system using the following command:
echo -1 | sudo tee /proc/sys/kernel/perf_event_paranoid
For information on how to use perf, refer to the
perf manual
and the kernel
sysctl settings.
Enable kernel crash dump collection
In the rare event of a kernel panic, enabling kernel crash dump collection can
help you and Cloud Customer Care determine the root cause. To enable crash dumps,
see
User Guide: Kernel Crash Dump Collection for COS
in the open source documentation. This user guide explains how to collect kernel
crash dumps on GKE nodes with Container-Optimized OS or
Container-Optimized OS instances created from Compute Engine.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
