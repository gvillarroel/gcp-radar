---
title: "Prepare for a vCenter upgrade \_|\_ Google Distributed Cloud (software only)\
  \ for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vcenter-upgrade-guide
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vcenter-upgrade-guide
  title: "Prepare for a vCenter upgrade \_|\_ Google Distributed Cloud (software only)\
    \ for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Prepare for a vCenter upgrade
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to prepare for a vCenter version upgrade and
the downtime during upgrade.
Disable auto-repair
Before the vCenter upgrade,
disable autoRepair
on all user and admin clusters. This prevents machines from being recreated
while vCenter is unavailable.
Downtime during vCenter upgrade
There shouldn't be any downtime for the admin cluster and user clusters running
in the vCenter during upgrade. The clusters remain up the entire time.
However, there will be downtime for vCenter services like vMotion/DRS and
VM creation.
If your workload directly interacts with vCenter, it might have downtime during
the vCenter upgrade due to the vCenter service unavailabilities.
Major version upgrade
To upgrade vCenter to the next major version, a new Virtual Center Appliance
will be deployed. And then all vCenter services are shutdown while it copies all
data to the new appliance. Once the data is copied, the new appliance reboots
and takes over the identity (hostname/IP/etc) of the old vCenter.
Major version have been seen to have about 30 mins of downtime for the vCenter
API.
Minor version upgrade
The minor version upgrade will just update packages inside the OS and
then reboot the appliance, which takes shorter time than major upgrade.
For minor updates, we have seen a downtime around 5 mins for the vCenter API.
Known Issue
Machines might go to Unavailable state after a vCenter reboot for versions
< 7.0U2. For more details, see the known issue .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
