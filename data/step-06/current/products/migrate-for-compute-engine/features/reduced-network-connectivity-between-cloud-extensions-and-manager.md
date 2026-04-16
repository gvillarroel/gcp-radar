---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.339Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Reduced network connectivity between Cloud Extensions and Manager"
feature_slug: "reduced-network-connectivity-between-cloud-extensions-and-manager"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
keywords:
  - "reduced"
  - "network"
  - "connectivity"
  - "between"
  - "extensions"
  - "and"
  - "manager"
  - "reduces"
---

# Reduced network connectivity between Cloud Extensions and Manager

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Reduces connectivity between Cloud Extensions and the Manager to single-direction traffic for system deployment.

## Extended Definition

Reduces connectivity between Cloud Extensions and the Manager to single-direction traffic for system deployment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)

## Supporting Pages

### "Roles and permissions reference \_|\_ Migrate to Virtual Machines \_|\_\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/roles-reference)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The following permissions are required to create a resource group associated with the source, verify that it exists, list the resources it contains, and delete it when the source is deleted: "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete" The following permission is required in order to obtain the inventory list and to get the details of the VMs that are being migrated: "Microsoft.Compute/virtualMachines/read" The following permission is required to deallocate a VM when it is being cut over into a Google Cloud VM: "Microsoft.Compute/virtualMachines/deallocate/action" The following permissions are required to create, list, and delete snapshots / restore points of the VM being migrated: "Microsoft.Compute/restorePointCollections/read", "Microsoft.Compute/restorePointCollections/write", "Microsoft.Compute/restorePointCollections/delete", "Microsoft.Compute/restorePointCollections/restorePoints/read", "Microsoft.Compute/restorePointCollections/restorePoints/write", "Microsoft.Compute/restorePointCollections/restorePoints/delete", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/read" The following permissions are required for reading snapshot / restore point data: "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/read", "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/beginGetAccess/action", "Microsoft.Compute/restorePointCollections/restorePoints/diskRestorePoints/endGetAccess/action", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/endGetAccess/action" Grant network access In addition to granting permissions, you must verify that access to your disks is not blocked or restricted to any specific network.
- To configure the target details of the Compute Engine instance running on the target project, the user account you use to sign in to the Google Cloud console requires permissions to access data in the target project, such as networks, instance types, and more.
- As a workaround, contact the security administrator for the target project to get your user account configured with the resourcemanager.projectIamAdmin role, and then try to add the target project.
- For details on how to implement migration permissions review the Create an AWS IAM policy section. { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeInstances", "ec2:DescribeVolumes", "ec2:DescribeInstanceTypes", "ec2:DescribeSnapshots", "ec2:CreateTags", "ec2:CreateSnapshots", "ec2:StopInstances" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "ebs:ListSnapshotBlocks", "ebs:ListChangedBlocks", "ebs:GetSnapshotBlock", "ec2:DeleteSnapshot", "ec2:DeleteTags" ], "Resource": " ", "Condition": { "StringEquals": { "aws:ResourceTag/m2vm-resource": "snapshot" } } } ] } To show the inventory of the migration candidate instances grant Migrate to Virtual Machines permissions for ec2:DescribeInstances, ec2:DescribeVolumes and ec2:DescribeInstanceTypes .

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, opening a firewall port might require collaboration between the security team and the networking team.
- Ensure your environment meets the requirements When you provision and configure the infrastructure to support your migration, ensure that your environment meets the Migrate to Virtual Machines requirements: The supported operating systems The required roles and permissions on Google Cloud and in your source environment The required Google Cloud services The maximum number of concurrent migrations Ensure that you involve all the relevant teams in the analysis of these requirements because the requirements span different areas, such as computing, networking, security, and compliance.
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.
- To maximize the network throughput, we also recommend that you configure the maximum transmission unit while considering the recommended values for Virtual Private Cloud networks , Cloud Interconnect , and Cloud VPN .

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Evaluate Migrate to Virtual Machines requirements to ensure that both your source and target environments provide the features and the resources that Migrate to Virtual Machines needs for the migration, such as network connectivity and bandwidth, and secure communication channels.
- In this phase, you create the basic infrastructure for Migrate to Virtual Machines, such as provisioning the resource hierarchy and setting up network access.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Assess the source environment and workloads In the assess phase , you gather information about the following: Your source and target environment The workloads that you want to migrate To help you to plan your migration and to rightsize the resources that you need for the migration and your target environment, it's crucial to assess your source environment and the workloads that you want to migrate.

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following sections discuss the considerations you must keep in mind while importing Oracle Linux images to Google Cloud: gVNIC driver requirements The Google Virtual NIC (gVNIC) driver is needed for virtio -enabled VM families (and certain newer VM families) to have access to Tier1 networking that provides up to 100GB bandwidth.
- For information on different machine types that support NVMe and gVNIC, go to the Machine series comparison section, click Choose VM properties to compare , and select Disk interface type and Network interfaces .
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes Amazon Linux 2 Not applicable (N/A) N/A No No CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 PAYG PAYG with ELS (see Append RHEL ELS licenses ) No No 8.0 - 8.10 PAYG PAYG Yes Yes 8.0 - 8.10 SAP PAYG PAYG No No 9.0 - 9.1 PAYG PAYG Yes Yes 9.2 PAYG PAYG No Yes 9.0 - 9.2 SAP PAYG PAYG No No 9.3 - 9.4 PAYG PAYG No No 10.0 PAYG PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A No Yes SLES 12 SP5 PAYG PAYG Yes No 15 SP3 PAYG PAYG Yes No 15 SP5 PAYG PAYG No Yes Ubuntu 18.04.6 N/A N/A No No 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A Azure source You can migrate a VM from an Azure source, if the VM is running an operating system that is listed in the following table.
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 PAYG PAYG with ELS (see Append RHEL ELS licenses ) Yes No 8.0 - 8.10 PAYG PAYG Yes Yes 8.0 - 8.10 SAP PAYG PAYG No No 9.0 - 9.2 PAYG PAYG Yes Yes 9.0 - 9.2 SAP PAYG PAYG No No 9.3 - 9.4 PAYG PAYG No No 10.0 PAYG PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A Yes Yes SLES 12 SP5 PAYG PAYG Yes No 15 SP3 PAYG PAYG Yes No 15 SP5 PAYG PAYG Yes Yes Ubuntu 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A Image import You can import a virtual disk to Compute Engine using Migrate to Virtual Machines, if the VM is running an operating system that is listed in the following table.

