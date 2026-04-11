---
title: "Manage Exascale VM Clusters \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/manage-exascale-clusters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/manage-exascale-clusters
  title: "Manage Exascale VM Clusters \_|\_ Oracle Database at Google Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Manage Exascale VM Clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage an Exascale VM Cluster.
After you've provisioned an Exascale VM Cluster, Oracle Database@Google Cloud lets you add
or delete VMs.
Before you begin
Make sure that you have the required Identity and Access Management (IAM) roles and
permissions to modify an Exascale VM Cluster:
roles/oracledatabase.exadbVmClusterAdmin
For information on how to assign roles, see
Apply IAM roles .
Make sure that you have the required OCI permissions necessary
to manage an Exascale VM Cluster. Refer to the Oracle documentation.
Add a VM to an Exascale VM Cluster
To add a VM to an Exascale VM Cluster, do the following:
Go to the Exadata Database Service > Exascale Infrastructure page.
Go to Exascale Infrastructure
Select the VM Clusters tab.
Click the name of the Exascale VM Cluster to which you want to add a VM.
On the Exascale VM Cluster details page, go to the Virtual machines
section.
Click Add .
In the Add virtual machines dialog, enter the number of VMs you want to
add to the cluster.
A cluster can have a maximum of 10 VMs.
Click Add .
You can view the newly added VM in the list of the VMs.
Delete a VM from an Exascale VM Cluster
Before deleting a VM, make sure that there is no single instance database
running on that VM.
To delete a VM from an Exascale VM Cluster, do the following:
Go to the Exadata Database Service > Exascale Infrastructure page.
Go to Exascale Infrastructure
Select the VM Clusters tab.
Click the name of the Exascale VM Cluster from which you want to delete a VM.
On the Exascale VM Cluster details page, go to the Virtual machines
section.
For the VM which you want to delete, click
more_vert View actions , and then
click Delete .
In the Delete virtual machine? dialog, type the VM name to confirm the
deletion of the VM.
Click Confirm .
To further manage an Exascale VM Cluster, you can use the OCI
console. On the Exascale VM Cluster details page, click Manage in OCI .
You're redirected to the OCI page to modify your Exascale VM Cluster
settings.
What's next
Learn more about Exadata Database Service on Exascale Infrastructure
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
