---
title: "Delete Exascale VM Clusters \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/delete-exascale-clusters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/delete-exascale-clusters
  title: "Delete Exascale VM Clusters \_|\_ Oracle Database at Google Cloud \_|\_\
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
Delete Exascale VM Clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete an Exascale VM Cluster in Google Cloud.
Deleting an Exascale VM Cluster doesn't delete its associated Exascale Storage Vault.
To delete an Exascale Storage Vault, see
Delete Exascale Storage Vaults .
This action is irreversible.
Before you begin
Make sure that you have the required Identity and Access Management (IAM) roles and
permissions to delete an Exascale VM Cluster:
roles/oracledatabase.exadbVmClusterAdmin
For information about how to assign roles, see
Apply IAM roles .
Delete an Exascale VM Cluster
To delete an Exascale VM Cluster, do the following:
Console
Go to the Exadata Database Service > Exascale Infrastructure page.
Go to Exascale Infrastructure
Select the VM Clusters tab.
For the Exascale VM Cluster that you want to delete,
click more_vert View actions ,
and then click Delete .
In the Delete Exascale VM Cluster? dialog, type the cluster name to
confirm deletion.
Click Confirm .
API
To delete an Exascale VM Cluster, run the following curl command:
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /exadbVmClusters/ CLUSTER_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
which contains the Exascale VM Cluster. If you're using a
Shared VPC, then this is the ID of your host project.
REGION : the region of your Exascale VM Cluster.
CLUSTER_ID : the ID of your Exascale VM Cluster.
What's next
Learn more about Exadata Database Service on Exascale Infrastructure
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
