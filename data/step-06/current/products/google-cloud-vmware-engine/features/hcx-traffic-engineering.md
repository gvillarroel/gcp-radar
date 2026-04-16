---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.713Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "HCX traffic engineering"
feature_slug: "hcx-traffic-engineering"
latest_feature_date: "2022-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
keywords:
  - "hcx"
  - "traffic"
  - "engineering"
  - "enabled"
  - "default"
  - "through"
  - "enterprise"
  - "license"
---

# HCX traffic engineering

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

HCX traffic engineering is enabled by default through the HCX Enterprise license level.

## Extended Definition

HCX traffic engineering is enabled by default through the HCX Enterprise license level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)

## Supporting Pages

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks If you route inbound traffic to workloads on VMware Engine through the customer VPC, then we recommend placing VMware Engine workloads in hybrid network endpoint groups behind Cloud Service Mesh and leveraging the external HTTP(S) load balancer.
- This principle of protecting traffic between individual VMs that is denied by default is often also referred to as "Micro-segmentation" , which is a more granular approach for firewalling than the conventional implementation of firewalls between Layer 3 domains.
- If custom controls are required for internet traffic, such as URL filtering, IPS/IDS or traffic inspection provided by a central instance or service in your Google Cloud environment, you should route internet-bound traffic through VPC network.

### "VLANs and subnets on VMware Engine \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For additional guidance on calculating encapsulation overhead, see the following resources: Cloud VPN MTU considerations VMware NSX VPNs Traffic Engineering in HCX Enterprise Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This common default setting is valid for VM interfaces that send traffic in the following ways: From a VM in a private cloud to a VM in another private cloud From an on-premises endpoint to a private cloud From a VM in a private cloud to an on-premises endpoint From the internet to a private cloud From a VM in a private cloud to the internet For VMs that communicate to or from the internet with large packet UDP traffic flows that are sensitive to fragmentation, use an MTU setting of 1370 bytes or lower.
- This generally results in an MTU setting of 1350–1390 bytes or lower for VM interfaces that send traffic in the following ways: From an on-premises endpoint to a private cloud with encapsulation From a private cloud VM to an on-premises endpoint with encapsulation From a VM in one private cloud to a VM in another private cloud with encapsulation Note: The default MTU setting is 1440 bytes on the HCX uplink profile.
- You can target service subnets for appliance or service deployment scenarios, such as storage, backup, disaster recover (DR), media streaming, and providing high scale linear throughput and packet processing for even the largest scaled private clouds.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This function is enabled (set to "Yes") by default.
- This function is enabled (set to "Yes") by default.
- Deploy Backup and DR Service first Before you begin, you must read and complete the following procedures: Plan a Backup and DR deployment Prepare to deploy Backup and DR Deploy Backup and DR See how Backup and DR Service works Then see how Backup and DR Service works by going through Get started with Backup and DR: protect and recover a Compute Engine instance .
- SAP HANA log backup recommendation: Make sure to set the SAP HANA log backup path as the basepath logbackup and basepath catalogbackup in global.ini Don't use the SAP HANA log backup mount to store files other than HANA archive log backup By default log purge runs with every database backup.

