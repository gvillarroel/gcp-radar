---
title: "Strengthen VM instances with BIOS to UEFI upgrade \_|\_ Migrate to Virtual\
  \ Machines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/bios-to-uefi-upgrade
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/bios-to-uefi-upgrade
  title: "Strengthen VM instances with BIOS to UEFI upgrade \_|\_ Migrate to Virtual\
    \ Machines \_|\_ Google Cloud Documentation"
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
Strengthen VM instances with BIOS to UEFI upgrade
Stay organized with collections
Save and categorize content based on your preferences.
You can strengthen your cloud security by modernizing your virtual machine (VM)
instances from legacy basic input/output system (BIOS) systems into modern
unified extensible firmware interface (UEFI)-enabled Shielded VM
instances. Migrate to VMs modernization process enhances security
and operational efficiency by securing the boot process.
Shielded VMs offer robust protection against threats by securing the
boot process. For more information about threats to the boot process and using
Shielded VMs to secure cloud workloads, see
Use Shielded VMs to strengthen cloud security .
Before you begin
Before you begin this task, complete the following prerequisites:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Ensure you have existing VM instances to migrate to, or create new VM instances .
Ensure that the following Identity and Access Management roles are granted. For more
information, see Grant the required permissions .
VM Migration Administrator
VM Migration Service Agent
Costs
This tutorial uses the following billable component of Google Cloud:
Compute Engine
Review the pricing pages for each service to understand potential costs. You can
also use the Google Cloud Pricing Calculator to generate
a cost estimate based on your projected usage.
Migrate and modernize VM instances
The following sections describe how you can onboard, replicate, and configure
your VM instances for BIOS to UEFI conversion, and Shielded VM
deployment.
For a more comprehensive understanding of migrating a VM instance to
Google Cloud using Migrate to VMs, see
Migrate individual VMs .
Onboard your source VM instance
The first phase of migration is to onboard the source VM instance. Onboarding is
the process of selecting the VM instances that you want to migrate to
Google Cloud. For example, your data center might contain tens, hundreds,
or even thousands of VM instances. Onboard only the VM instances that you want
to migrate.
In the Google Cloud console, go to the Migrate to VMs page.
Go to Migrate to VMs
Select the Sources tab.
Choose your migration source from the list.
Ensure the source status is Active (connected) . If the status of your VM
instances is Offline or Pending , troubleshoot and fix the issue.
Select one or more VM instances to migrate from the list.
Click Add Migrations > VM Migration .
Confirm the action. The replication status shows Pending or Ready .
Start replication
Replication is a continuous process that replicates data from the source VM
instance to Google Cloud. This process continues in the background until
you perform a final cut-over or stop the migration.
To start replicating your source VM, follow these steps:
Go to the Migrations tab.
Go to Migrate to VMs
Find VM instances with replication status Ready .
Select one or more VM instances.
Click Migration > Start Replication .
Monitor the replication progress. The first sync performs a full disk
snapshot and may take time. The Active status indicates ongoing
incremental sync every two hours.
Convert BIOS to UEFI
To convert your VM instance from BIOS to UEFI, follow these steps.
Migrate to VMs performs the BIOS to UEFI conversion during the
instance adaptation process.
Open the Migrate to VMs page in the Google Cloud console.
Go to Migrate to VMs
Go to the Migrations tab.
Select one or more VM instances from the list.
Click Edit target details .
In the side panel, configure the Compute Engine target settings.
To enable BIOS to UEFI conversion, set the Boot mode to UEFI in the
advanced settings to automatically convert BIOS to UEFI during migration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
