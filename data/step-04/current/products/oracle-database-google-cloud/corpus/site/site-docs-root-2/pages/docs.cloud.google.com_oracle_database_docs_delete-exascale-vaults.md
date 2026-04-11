---
title: "Delete Exascale Storage Vaults \_|\_ Oracle Database at Google Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/delete-exascale-vaults
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/delete-exascale-vaults
  title: "Delete Exascale Storage Vaults \_|\_ Oracle Database at Google Cloud \_\
    |\_ Google Cloud Documentation"
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
Delete Exascale Storage Vaults
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete an Exascale Storage Vault in Google Cloud.
Before you begin
Make sure that you have the required Identity and Access Management (IAM) roles and
permissions to delete an Exascale Storage Vault:
roles/oracledatabase.exascaleDbStorageVaultAdmin
For information on how to assign roles, see
Apply IAM roles .
Delete an Exascale Storage Vault
To delete an Exascale Storage Vault, do the following:
Console
Go to the Exadata Database Service > Exascale Infrastructure page.
Go to Exascale Infrastructure
Select the Exascale Storage Vaults tab.
For the Exascale Storage Vault that you want to delete,
click more_vert View actions ,
and then click Delete .
In the Delete Exascale Storage Vault? dialog, type the vault name to
confirm deletion of your vault.
Click Confirm .
API
To delete an Exascale Storage Vault, run the following curl command:
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /exascaleDbStorageVaults/ VAULT_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
which contains the Exascale Storage Vault. If you're using a
Shared VPC, then this is the ID of your host project.
REGION : the region of your Exascale Storage Vault.
VAULT_ID : the ID of your Exascale Storage Vault.
What's next
Learn more about Exadata Database Service on Exascale Infrastructure
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
