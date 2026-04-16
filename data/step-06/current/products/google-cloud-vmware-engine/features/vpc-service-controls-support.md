---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.703Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
keywords:
  - "vpc"
  - "controls"
  - "lets"
  - "you"
  - "attach"
  - "vmware"
  - "engine"
  - "existing"
---

# VPC Service Controls support

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls support lets you attach VMware Engine services to a new or existing VPC Service Controls perimeter.

## Extended Definition

VPC Service Controls support lets you attach VMware Engine services to a new or existing VPC Service Controls perimeter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)

## Supporting Pages

### "VPC Service Controls with VMware Engine \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls lets you define a security perimeter for your VMware Engine resources.
- Limitations When adding existing VMware Engine, Private Clouds, Network Policies, and VPC Peering to a VPC Service Perimeter, Google does not check previously created resources to see if they still comply with the perimeter's policies.
- Add VMware Engine to allowed VPC Service Controls To add the VMware Engine service to the allowed VPC Service Controls, you can follow these steps in the Google Cloud console : Go to the VPC Service Controls page.
- In order to ensure VPC Service Controls works for VMware Engine, you must add the VMware Engine service to the Restricted Services within VPC Service Controls.

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mount lets you to access your Compute Engine instance backup images in two ways: Mount Compute Engine backup image to an existing instance : This lets you access a Compute Engine instance backup image on any existing Compute Engine instance.
- Impact of mounting instances where disks are encrypted with CMEK If you are mounting a Compute Engine instance that has attached disks that are encrypted with Customer Managed Encryption Keys (CMEK), then be aware of the following: The mounted disks are encrypted with the same key version that the selected snapshot of the disks is encrypted with.
- To mount a Compute Engine backup image as an existing or new Compute Engine instance, where the source disk is using customer-managed encryption keys (CMEK), follow these steps: Copy the service account name of the Compute Engine service agent from the target project.
- After you discover and protect the Compute Engine instances or import Persistent Disk snapshot images , you can mount the backup image to an existing instance, or as a new instance in the same project or as a different project.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- You need to configure inbound and outbound data transfer policies in your VPC Service Controls configuration to allow the VMware Engine producer service APIs into the perimeter.
- If this is not applicable to you or you have the controls implemented within your private cloud, we recommend that you include the external IP address service in VMware Engine.
- For detailed guidance on the setup, follow our documentation pages on VPC Service Controls with VMware Engine.

