---
title: "Manage the power state of VMs that use VM Runtime on GDC \_|\_ Google Distributed\
  \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state
  title: "Manage the power state of VMs that use VM Runtime on GDC \_|\_ Google Distributed\
    \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Manage the power state of VMs that use VM Runtime on GDC
Stay organized with collections
Save and categorize content based on your preferences.
This document is intended for application owners that run Google Distributed Cloud.
This document shows you how to manage the power state of virtual machines (VMs)
that use VM Runtime on GDC.
You can stop, start, and restart VMs as needed to support the lifecycle of your
applications. For example, you may want to change the number of assigned vCPUs
or amount of memory. After you edit the configuration of your VM, you must
cycle the power state to apply the changes.
Before you begin
To complete this document, you need access to the following resources:
A VM that runs in one of your clusters. If needed,
create a VM in Google Distributed Cloud .
The virtctl client tool installed as a plugin for kubectl . If needed,
install the virtctl client tool .
Stop a VM
When you stop a VM, compute resources such as CPU and memory are freed from the
underlying host. The VM is shut down.
To stop a VM that's in a running state, use the following steps.
Use kubectl to stop a VM:
kubectl virt stop VM_NAME
Replace VM_NAME with the name of the VM that you want to
stop.
Check the STATUS of your VM:
kubectl get gvm VM_NAME
The following example output shows the VM in a Stopped state:
NAME STATUS AGE IP
vm1 Stopped 1m 192 .168.2.72
Start a VM
To start a VM that's in a stopped state, use the following steps.
Use kubectl to start a VM:
kubectl virt start VM_NAME
Replace VM_NAME with the name of the VM that you want
to start.
Check the STATUS of your VM:
kubectl get gvm VM_NAME
The following example output shows the VM in a Running state:
NAME STATUS AGE IP
vm1 Running 1m 192 .168.2.72
Restart a VM
To restart a VM that's in a running state, use the following steps.
Use kubectl to restart a VM:
kubectl virt restart VM_NAME
Replace VM_NAME with the name of the VM that you want to
restart.
Check the STATUS of your VM:
kubectl get gvm VM_NAME
The following example output shows the VM in a Stopping state:
NAME STATUS AGE IP
vm1 Stopping 7s 192 .168.2.72
Check the STATUS of your VM again after a minute or two:
kubectl get gvm VM_NAME
After the VM has successfully restarted, the following example output shows
the VM in a Running state again:
NAME STATUS AGE IP
vm1 Running 1m 192 .168.2.73
This example VM uses an ephemeral pod IP address, so the address changes
when the VM restarts.
What's next
Edit a VM in Google Distributed Cloud .
When you no longer need VMs,
Delete a VM in Google Distributed Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
