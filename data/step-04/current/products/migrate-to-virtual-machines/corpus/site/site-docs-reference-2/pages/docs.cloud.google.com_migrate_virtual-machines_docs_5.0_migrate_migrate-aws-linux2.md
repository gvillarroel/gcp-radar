---
title: "Migrate an Amazon Linux 2 VM to Google Cloud \_|\_ Migrate to Virtual Machines\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrate-aws-linux2
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrate-aws-linux2
  title: "Migrate an Amazon Linux 2 VM to Google Cloud \_|\_ Migrate to Virtual Machines\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Migrate an Amazon Linux 2 VM to Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
Experimental
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To inquire about this feature, send an email to
the email address: m2vm-amazon-linux-migration@google.com .
Amazon Linux 2 is a Linux distribution developed and
maintained by Amazon. While it can be run on other cloud platforms,
it is not supported by Amazon.
Migrate to Virtual Machines can automatically convert Amazon Linux 2 running on a VM to an operating system supported by Google Cloud. The VM is then migrated to Google Cloud.
If your VM cannot be converted, you can rebuild the VM using a Google Cloud OS image, and then transfer data from the source VM to the rebuilt VM.
To migrate your Amazon Linux 2 workloads to Google Cloud, choose one of
the available migration flows:
Note: Some VMs running Amazon Linux 2 cannot be automatically converted to Rocky Linux 8. For these VMs, we recommend that you use the VM disk migration flow to migrate your VM to Google Cloud.
OS conversion : In this approach, Migrate to Virtual Machines first attempts
to convert the Amazon Linux 2 running on your VM instance to Rocky Linux 8.
If the conversion is successful, Migrate to Virtual Machines completes the
migration. This process includes the following steps:
Run the following command on your source VM.
mkdir -p /etc/google/migrate/elevate_amazonlinux2_to_rocky
Start the replication of the source VM . The replication process converts and upgrades the Amazon Linux 2 OS to Rocky Linux 8 (including all installed packages), and adapts the VM to Compute Engine.
The VM boots with Rocky Linux 8. You can now set the target details, create
a test-clone and test the VM. If the VM works as expected, you can cut-over
to the VM on Google Cloud.
VM Disk migration : If you don't want to perform an automated OS conversion, or if your VM is not suitable for this process,
you can choose to migrate your VM's disks to Persistent Disk volumes on Google Cloud. This feature helps you migrate the
workload state (VM disks) from a source VM and attach it as a Persistent Disk
volume to an existing or new VM on Google Cloud, using an officially
supported or any other base image, with minimal interruptions to the
workload.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
