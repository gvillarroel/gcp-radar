---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.659Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Mixed Windows Server licensing for upgrades"
feature_slug: "mixed-windows-server-licensing-for-upgrades"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/product-restrictions"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
keywords:
  - "mixed"
  - "windows"
  - "server"
  - "licensing"
  - "upgrades"
  - "allows"
  - "combination"
  - "byol"
---

# Mixed Windows Server licensing for upgrades

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Allows a combination of Windows Server BYOL and Google-provided on-demand licensing when upgrading to Windows Server 2022 or later images.

## Extended Definition

Allows a combination of Windows Server BYOL and Google-provided on-demand licensing when upgrading to Windows Server 2022 or later images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/product-restrictions](https://docs.cloud.google.com/vmware-engine/docs/product-restrictions)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)

## Supporting Pages

### "VMware Engine product restrictions \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/product-restrictions](https://docs.cloud.google.com/vmware-engine/docs/product-restrictions)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- You can use a combination of BYOL and on-demand Windows Server licenses from Google Cloud on a VMware Engine private cloud.
- Specifically, Google provides licenses only for vCPUs running Windows Server 2022 and newer versions, and you are responsible for licenses (BYOL) for all other versions of Windows Server running in that private cloud.
- Microsoft products : The following restrictions apply when you use Microsoft products: Windows Server images provided by Google may only be used to run customer workload VMs on VMware Engine only.
- You can't migrate or export VMs that use Google-provided Windows Server images to on-premises or other environments outside of VMware Engine.

### "Configure advanced policy settings \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the event of an ESX host failure, this option manages failover copies of VMware VMs. (Oracle, local file systems, SMB, NFS, SQL Server): Map staging disk to ESX host for VM only Map staging disk to all ESX hosts in the cluster Map staging disk to two ESX hosts in the cluster Backup SQL Server User Logins Captures the SQL Server database login credentials.
- Estimated Change Rate When Enable Database Log Backup is set to Yes , this setting defines the daily change (in percent), which allows the appliance to better calculate the size of the staging disk needed to hold logs.
- Map Staging Disk to All ESX Hosts in a Cluster (For VMware VMs only) If your ESX servers are in an appliance, you can use this setting to ensure that the VMs are managed in case of failover during backup.
- Replicate Logs (Uses Streamsnap Technology) When Enable Database Log Backup is set to Enable , the Replicate Logs advanced setting allows database logs to be replicated to a remote appliance.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- About VMware Engine private clouds A Google Cloud VMware Engine private cloud is an isolated VMware stack that consists of the following VMware components: ESXi hosts vCenter Server vSAN NSX HCX Private clouds help you address a variety of common needs for network infrastructure: Growth.
- Confirm how the cores are counted (physically present or made available by BIOS) as stated in your contract to manage licensing costs using this feature.

