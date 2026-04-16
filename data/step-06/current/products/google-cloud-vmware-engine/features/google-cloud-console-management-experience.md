---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.693Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Google Cloud console management experience"
feature_slug: "google-cloud-console-management-experience"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
keywords:
  - "console"
  - "management"
  - "experience"
  - "vmware"
  - "engine"
  - "environments"
  - "can"
  - "managed"
---

# Google Cloud console management experience

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Engine environments can be managed in the Google Cloud console without opening another tab.

## Extended Definition

VMware Engine environments can be managed in the Google Cloud console without opening another tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)

## Supporting Pages

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Mount backup images of Compute Engine instances in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- Use these instructions to mount a Compute Engine instance backup image to an existing instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Use these instructions to mount a Compute Engine instance backup to a new instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Impact of mounting instances where disks are encrypted with CMEK If you are mounting a Compute Engine instance that has attached disks that are encrypted with Customer Managed Encryption Keys (CMEK), then be aware of the following: The mounted disks are encrypted with the same key version that the selected snapshot of the disks is encrypted with.

### "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- Source ID: `site-docs-reference-required-3`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reset access credentials If you misplace the credentials to vCenter Server or NSX Manager, you can reset the password to your management appliances for your private cloud using the Google Cloud CLI or Google Cloud VMware Engine by doing the following: Important: If you change the password that VMware Engine generates for either vCenter Server or NSX Manager, those changes won't be reflected in the Google Cloud console.
- API To show management appliance connection details using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateCloud/ PRIVATE CLOUD ID " Replace the following: PROJECT ID : the project name for this request.
- Before you can connect to management appliances, you need network connectivity from your client machine to the VMware Engine network.
- In the prompt that appears and contains your access credentials, click Reset Password . gcloud To reset the password to a management appliance using the Google Cloud CLI, do the following: Reset vCenter user credentials by running the gcloud vmware private-clouds vcenter credentials reset command : gcloud vmware private-clouds vcenter credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Reset NSX user credentials by running the gcloud vmware private-clouds nsx credentials reset command : gcloud vmware private-clouds nsx credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.
- Resources managed through the appliance management console (for example, Google Cloud VMware Engine VMs) are also supported, but backup and restore operations for those resources are not restricted to your current organization.
- This selection makes the backup vault compatible with resources managed through Google Cloud console (for example, Compute Engine VMs), but not with resources managed through the appliance management console.
- This selection makes the backup vault compatible with resources managed through Google Cloud console, such as Compute Engine VMs, but not with resources managed through the appliance management console.

