---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.336Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Balanced disk type support in GcpDiskType"
feature_slug: "balanced-disk-type-support-in-gcpdisktype"
latest_feature_date: "2021-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
keywords:
  - "balanced"
  - "disk"
  - "type"
  - "in"
  - "gcpdisktype"
  - "supports"
  - "the"
  - "runbook"
---

# Balanced disk type support in GcpDiskType

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Supports the balanced disk type in the GcpDiskType runbook field for batch migrations using waves.

## Extended Definition

Supports the balanced disk type in the GcpDiskType runbook field for batch migrations using waves.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)

## Supporting Pages

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OS Version Default license License option BIOS to UEFI conversion supported Comments Oracle Linux 6.0 - 6.7 BYOL N/A No Requires kernel-uek version of at least 4.1.12-37.4.1 6.8 - 6.10 BYOL N/A No 7.0 - 7.9 BYOL N/A No 8.0 - 8.10 BYOL N/A No 9.0 - 9.3 BYOL N/A No 10.0 BYOL N/A No Oracle Linux on Google Cloud Google Cloud supports importing Oracle Linux images using the import virtual disk images capability of Migrate to Virtual Machines.
- For information on different machine types that support NVMe and gVNIC, go to the Machine series comparison section, click Choose VM properties to compare , and select Disk interface type and Network interfaces .
- If the operating system supports multiple license types, you can change the license type when you configure the target Compute Engine instance.
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 PAYG PAYG with ELS (see Append RHEL ELS licenses ) Yes No 8.0 - 8.10 PAYG PAYG Yes Yes 8.0 - 8.10 SAP PAYG PAYG No No 9.0 - 9.2 PAYG PAYG Yes Yes 9.0 - 9.2 SAP PAYG PAYG No No 9.3 - 9.4 PAYG PAYG No No 10.0 PAYG PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A Yes Yes SLES 12 SP5 PAYG PAYG Yes No 15 SP3 PAYG PAYG Yes No 15 SP5 PAYG PAYG Yes Yes Ubuntu 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A Image import You can import a virtual disk to Compute Engine using Migrate to Virtual Machines, if the VM is running an operating system that is listed in the following table.

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there's no VMware host in the network, we recommend one of the following options to migrate your VMs to a source environment that Migrate to Virtual Machines supports: Migrate VMware VMs with VMware HCX to Google Cloud VMware Engine .
- Analyze your current environment to rightsize the target environment To draft a complete migration plan, define the machine type of each VM in the target environment for each VM that you want to migrate from the source environment.
- In such cases, we recommend that you assess other data migration approaches that are specific to these types of workloads.
- Ensure your environment meets the requirements When you provision and configure the infrastructure to support your migration, ensure that your environment meets the Migrate to Virtual Machines requirements: The supported operating systems The required roles and permissions on Google Cloud and in your source environment The required Google Cloud services The maximum number of concurrent migrations Ensure that you involve all the relevant teams in the analysis of these requirements because the requirements span different areas, such as computing, networking, security, and compliance.

### "Roles and permissions reference \_|\_ Migrate to Virtual Machines \_|\_\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference)
- Source ID: `site-iam-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following permissions are required to create a resource group associated with the source, verify that it exists, list the resources it contains, and delete it when the source is deleted: "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete" The following permission is required in order to obtain the inventory list and to get the details of the VMs that are being migrated: "Microsoft.Compute/virtualMachines/read" The following permission is required to deallocate a VM when it is being cut over into a Google Cloud VM: "Microsoft.Compute/virtualMachines/deallocate/action" The following permissions are required to create, list, and delete snapshots / restore points of the VM being migrated: "Microsoft.Compute/restorePointCollections/read", "Microsoft.Compute/restorePointCollections/write", "Microsoft.Compute/restorePointCollections/delete", "Microsoft.Compute/restorePointCollections/restorePoints/read", "Microsoft.Compute/restorePointCollections/restorePoints/write", "Microsoft.Compute/restorePointCollections/restorePoints/delete", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/read" The following permissions are required for reading snapshot / restore point data: "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/read", "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/beginGetAccess/action", "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/endGetAccess/action", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/endGetAccess/action" Grant network access In addition to granting permissions, you must verify that access to your disks is not blocked or restricted to any specific network.
- For details on how to implement migration permissions review the Create an AWS IAM policy section. { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } To show the inventory of the migration candidate instances grant Migrate to Virtual Machines permissions for ec2:DescribeInstances, ec2:DescribeVolumes and ec2:DescribeInstanceTypes .
- To configure the target details of the Compute Engine instance running on the target project, the user account you use to sign in to the Google Cloud console requires permissions to access data in the target project, such as networks, instance types, and more.
- To ensure that your disks are accessible to public networks, use the following steps: In your Azure account, go to your disk settings.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test-clone phase At any time after the initial replication step of the disk data from the source VM completes, you can clone the source VM to a Compute Engine instance for testing: You often create test-clones throughout your migration process as you make modifications to the source VM or the target details.
- Data replication is comprised of two steps: First replication step : Migrate to Virtual Machines creates the initial snapshot of the source VM data disks and replicates the snapshot data to Google Cloud.
- Migrate to Virtual Machines uses data replication technology which continuously replicates disk data from the source VMs to Google Cloud without causing any downtime on the source.
- Set VM target details : Configure Compute Engine settings for the migrated VM, such as the project, instance type, memory, network, and more.

