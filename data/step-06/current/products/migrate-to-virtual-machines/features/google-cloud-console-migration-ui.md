---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.998Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Google Cloud Console migration UI"
feature_slug: "google-cloud-console-migration-ui"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source"
keywords:
  - "console"
  - "migration"
  - "ui"
  - "provides"
  - "an"
  - "end"
  - "to"
  - "experience"
---

# Google Cloud Console migration UI

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Provides an end-to-end migration experience in the Google Cloud Console.

## Extended Definition

Provides an end-to-end migration experience in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)

## Supporting Pages

### "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an Azure source Stay organized with collections Save and categorize content based on your preferences.
- Note: It is recommended that you choose the region from the drop-down list options, or copy the region from your Azure console JSON View and paste it into the source detail field to avoid typos.
- Save following JSON template and replace SUBSCRIPTION ID with the Subscription ID you copied in Step 2: { "properties": { "roleName": "Minimum M2VM permissions role", "description": "This role contains the bare minimum of Azure IAM permissions to support M2VM flow", "assignableScopes": [ "/subscriptions/ SUBSCRIPTION ID " ], "permissions": [ { "actions": [ "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete", "Microsoft.Compute/virtualMachines/read", "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/deallocate/action", "Microsoft.Compute/disks/read", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/read", "Microsoft.Compute/snapshots/endGetAccess/action" ], "notActions": [], "dataActions": [], "notDataActions": [] } ] } } For more information about the permission details, see permission details .
- Migration limitations from Azure Migrate to Virtual Machines does not support migration of VMs with the following attributes: Ephemeral OS disks Non-managed disks Attempting a migration of a VM with such disks will fail with an appropriate error message.

### "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an Azure source Stay organized with collections Save and categorize content based on your preferences.
- Note: It is recommended that you choose the region from the drop-down list options, or copy the region from your Azure console JSON View and paste it into the source detail field to avoid typos.
- Save following JSON template and replace SUBSCRIPTION ID with the Subscription ID you copied in Step 2: { "properties": { "roleName": "Minimum M2VM permissions role", "description": "This role contains the bare minimum of Azure IAM permissions to support M2VM flow", "assignableScopes": [ "/subscriptions/ SUBSCRIPTION ID " ], "permissions": [ { "actions": [ "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete", "Microsoft.Compute/virtualMachines/read", "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/deallocate/action", "Microsoft.Compute/disks/read", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/read", "Microsoft.Compute/snapshots/endGetAccess/action" ], "notActions": [], "dataActions": [], "notDataActions": [] } ] } } For more information about the permission details, see permission details .
- Migration limitations from Azure Migrate to Virtual Machines does not support migration of VMs with the following attributes: Ephemeral OS disks Non-managed disks Attempting a migration of a VM with such disks will fail with an appropriate error message.

### "Create an AWS source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an AWS source Stay organized with collections Save and categorize content based on your preferences.
- Note: We recommend that you copy the region from your AWS console and paste it into the source detail field to avoid typos.
- Use the provided JSON template to provide migration permissions for your policy: { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } If your EC2 instances use encrypted volumes with non-AWS managed keys, you must add the following statement to the preceding policy to grant the created user permission to access the encryption key. { "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:DescribeKey" ], "Resource": "<<KMS key ARN>>" } For more information about the permissions breakdown for the JSON template fields, see permissions breakdown .
- This document provides insight into the overall structure of Migrate to Virtual Machines, including important terms, concepts, and reference information that help you migrate your workload efficiently and effectively.

### "Create an AWS source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an AWS source Stay organized with collections Save and categorize content based on your preferences.
- Note: We recommend that you copy the region from your AWS console and paste it into the source detail field to avoid typos.
- Use the provided JSON template to provide migration permissions for your policy: { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } If your EC2 instances use encrypted volumes with non-AWS managed keys, you must add the following statement to the preceding policy to grant the created user permission to access the encryption key. { "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:DescribeKey" ], "Resource": "<<KMS key ARN>>" } For more information about the permissions breakdown for the JSON template fields, see permissions breakdown .
- This document provides insight into the overall structure of Migrate to Virtual Machines, including important terms, concepts, and reference information that help you migrate your workload efficiently and effectively.

