---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.712Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "HCX Replication Assisted vMotion"
feature_slug: "hcx-replication-assisted-vmotion"
latest_feature_date: "2022-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings"
keywords:
  - "hcx"
  - "replication"
  - "assisted"
  - "vmotion"
  - "enabled"
  - "default"
  - "through"
  - "enterprise"
---

# HCX Replication Assisted vMotion

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

HCX Replication Assisted vMotion is enabled by default through the HCX Enterprise license level for bulk, no-downtime migrations.

## Extended Definition

HCX Replication Assisted vMotion is enabled by default through the HCX Enterprise license level for bulk, no-downtime migrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)

## Supporting Pages

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This function is enabled (set to "Yes") by default.
- This function is enabled (set to "Yes") by default.
- Deploy Backup and DR Service first Before you begin, you must read and complete the following procedures: Plan a Backup and DR deployment Prepare to deploy Backup and DR Deploy Backup and DR See how Backup and DR Service works Then see how Backup and DR Service works by going through Get started with Backup and DR: protect and recover a Compute Engine instance .
- SAP HANA log backup recommendation: Make sure to set the SAP HANA log backup path as the basepath logbackup and basepath catalogbackup in global.ini Don't use the SAP HANA log backup mount to store files other than HANA archive log backup By default log purge runs with every database backup.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- The following table highlights key differences between the default key provider and third-party Cloud KMS integrations: Key provider Pros Cons Default Google-owned and managed key provider Simplicity: Deployed "out of the box" with no vendor management and no operational burden End-to-end support by Google Simplest method of the ability to rotate DEKs/KEKs is the key requirement No additional cost Built-in zone redundancy for high availability Not possible to bring your own key material (BYOK) The KEKs are stored and managed in the Google infrastructure.
- Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks If you route inbound traffic to workloads on VMware Engine through the customer VPC, then we recommend placing VMware Engine workloads in hybrid network endpoint groups behind Cloud Service Mesh and leveraging the external HTTP(S) load balancer.
- Apply equivalent capabilities of Access Transparency and Access Approval policies While VMware Engine doesn't support access transparency (AxT) and access approval (AxA) in Google Cloud, we have implemented processes with equivalent capabilities that can be enabled by request.

### "Configure advanced policy settings \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compress Streamsnap Replication By default, compression for streamsnap replication is enabled.
- This function is enabled by default.
- For a log replication job to run, there must be streamsnap replication policy included in the template along with a resource profile that specifies a remote appliance, and at least one successful replication of the database must first be completed.
- Log replication uses streamsnap technology to perform the replication between the local and remote appliances; log replication goes directly from the local snapshot pool to the snapshot pool on the remote appliance.

