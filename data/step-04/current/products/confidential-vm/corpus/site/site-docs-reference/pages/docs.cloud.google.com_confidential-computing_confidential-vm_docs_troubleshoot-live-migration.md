---
title: "Live migration \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration
  title: "Live migration \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
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
Live migration
Stay organized with collections
Save and categorize content based on your preferences.
A Confidential VM instance must have the following configuration to support
live migration :
An N2D or a C3D machine type
AMD SEV Confidential Computing technology
An
operating system image that supports live migration
Be created after January 15, 2024
All other Confidential VM types don't support live migration, and must set their
onHostMaintenance policy
to TERMINATE when being created. This means the VM stops during
host maintenance events .
Host maintenance events for Confidential VM instances that don't support live migration
During host maintenance events, Confidential VM instances that don't support live
migration and have default host maintenance policy settings are stopped. They
are restarted after the maintenance is complete.
The following table shows the default values for host maintenance policy
settings on Confidential VM instances that don't support live migration.
Host maintenance policy
Confidential VM default values
Description
onHostMaintenance
TERMINATE
This property must be set to TERMINATE for
Confidential VM instances that don't support live migration.
This means your Confidential VM instance stops and its status is set to
TERMINATED
during a maintenance event.
automaticRestart
true
When set to true , your Confidential VM instance restarts
after the maintenance is complete.
hostErrorTimeoutSeconds
330
The number of seconds between 90 and 330
before the host attempts to restart an unresponsive VM.
With planning, you can minimize the impact of host maintenance events
on your Confidential VM instances.
Minimize the impact of host maintenance events
To minimize the impact of host maintenance events on Confidential VM instances
that don't support live migration, you can do the following things:
Monitor for host maintenance event notices
Simulate a host maintenance event
Change your workload
Provision your Confidential VM instances on sole-tenancy nodes
Monitor for maintenance event notices
To receive advance notice of host events, monitor the
/computeMetadata/v1/instance/maintenance-event metadata value. To do so,
request an event notice by running the following command on your Confidential VM
instance:
curl http://metadata.google.internal/computeMetadata/v1/instance/maintenance-event -H "Metadata-Flavor: Google"
If the request to the metadata server returns NONE , then the VM isn't
scheduled to stop. If the metadata server returns
TERMINATE_ON_HOST_MAINTENANCE , then your VM is scheduled for stopping.
The following table shows the host maintenance event notification period for
Confidential VM instances that don't support live migration, organized by
Confidential Computing technology type. Use these periods to plan around host
maintenance events accordingly.
Confidential Computing technology
Machine type
Notification period
AMD SEV
C2D
None
AMD SEV-SNP
N2D
1 hour
Intel TDX
c3-standard-*
7 days
Simulate a host maintenance event
To test how your workload behaves when a Confidential VM instance is restarted,
you can
simulate a host maintenance event .
As you work through the simulated event, think about how you can change your
workload to be resilient when a real event happens.
Change your workload
After simulating a host maintenance event, you can use the experience to modify
your workload to respond to one. For example, you might make use of one of the
following techniques:
Adjust your workload to
monitor regularly for upcoming host maintenance events .
Before an event happens, temporarily
move your work in progress to a Cloud Storage bucket .
After the Confidential VM instance restarts, have the workload retrieve the data
and resume work.
Write all data to a
secondary Persistent Disk . After the
Confidential VM instance restarts, reattach the Persistent Disk so your workload can
resume work.
Provision your Confidential VM instances on sole-tenancy nodes
If it fits your needs, you can provision your Confidential VM instances on a
sole-tenant node . This lets you
determine a 4-hour window in which Google can perform maintenance on your VMs.
It also lets you perform a
manual live migration ,
which moves your VM to a different node or node group you control.
See Sole-tenant node pricing .
What's next
Learn about designing resilient systems .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
