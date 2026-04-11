---
title: "VMware Engine product restrictions \_|\_ Google Cloud VMware Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/product-restrictions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/product-restrictions
  title: "VMware Engine product restrictions \_|\_ Google Cloud VMware Engine \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
VMware Engine product restrictions
This document highlights product restrictions for Google Cloud VMware Engine. The
following restrictions apply when you use VMware Engine:
Aria Capabilities : You may use Aria Suite Enterprise or Aria Operations
for Networks ("Aria Capabilities") contained in VMware Cloud Foundation
(VCF) only to manage VCF Cores.
VMware Tools : "VMware Tools" is a suite of utilities and drivers that
can be installed in a Guest Operating System to enhance the performance and
functionality of a Guest Operating System when running in a virtual machine
in conjunction with a vSphere hypervisor. You may not use VMware Tools with
any other (non-vSphere) hypervisor, and you may distribute the VMware Tools
to third parties when they are installed in a Guest Operating System within
a virtual machine.
APIs and Third Party Applications (vDefend) : The following restrictions
apply when you use vDefend Firewall:
You may use the APIs included with vDefend (as defined at
Service Specific Terms ) only to integrate
vDefend with your Google Cloud management, network management, and
billing systems.
Any use of the APIs or other portions of vDefend for other services
(including for protocols, traffic engineering, or L4-L7, or with any
third-party applications written specifically for vDefend), must be
approved in writing by CA Inc. and will be subject to your payment of
additional fees.
Microsoft products : The following restrictions apply when you use
Microsoft products:
Windows Server images provided by Google may only be used to run
customer workload VMs on VMware Engine only. You can't migrate
or export VMs that use Google-provided Windows Server images to
on-premises or other environments outside of VMware Engine.
You can use a combination of BYOL and on-demand Windows Server licenses
from Google Cloud on a VMware Engine private cloud.
Specifically, Google provides licenses only for vCPUs running Windows
Server 2022 and newer versions, and you are responsible for
licenses (BYOL) for all other versions of Windows Server running in that
private cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
