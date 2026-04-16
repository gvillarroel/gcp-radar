---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.987Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Detached EBS volume migration"
feature_slug: "detached-ebs-volume-migration"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source"
keywords:
  - "detached"
  - "ebs"
  - "volume"
  - "migration"
  - "migrate"
  - "to"
  - "virtual"
  - "machines"
---

# Detached EBS volume migration

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrate to Virtual Machines can migrate AWS Elastic Block Store volumes that are not attached to a VM.

## Extended Definition

Migrate to Virtual Machines can migrate AWS Elastic Block Store volumes that are not attached to a VM.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)

## Supporting Pages

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- To switch from disk migration to VM migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- To switch from disk migration to VM migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.

### "Create an AWS source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: User tags for migration resource Migrate to Virtual Machines creates snapshots of your EC2 volumes to migrate them to Google Cloud.
- Create an AWS source After you have created an IAM user and have added that user to your new IAM policy for Migrate to Virtual Machines, you must create an AWS source before you can begin your migration process.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an AWS source Stay organized with collections Save and categorize content based on your preferences.
- Use the provided JSON template to provide migration permissions for your policy: { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } If your EC2 instances use encrypted volumes with non-AWS managed keys, you must add the following statement to the preceding policy to grant the created user permission to access the encryption key. { "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:DescribeKey" ], "Resource": "<<KMS key ARN>>" } For more information about the permissions breakdown for the JSON template fields, see permissions breakdown .

### "Create an AWS source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: User tags for migration resource Migrate to Virtual Machines creates snapshots of your EC2 volumes to migrate them to Google Cloud.
- Create an AWS source After you have created an IAM user and have added that user to your new IAM policy for Migrate to Virtual Machines, you must create an AWS source before you can begin your migration process.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an AWS source Stay organized with collections Save and categorize content based on your preferences.
- Use the provided JSON template to provide migration permissions for your policy: { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } If your EC2 instances use encrypted volumes with non-AWS managed keys, you must add the following statement to the preceding policy to grant the created user permission to access the encryption key. { "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:DescribeKey" ], "Resource": "<<KMS key ARN>>" } For more information about the permissions breakdown for the JSON template fields, see permissions breakdown .

