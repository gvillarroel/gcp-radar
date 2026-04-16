---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.664Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-security"
keywords:
  - "vpc"
  - "controls"
  - "adds"
  - "security"
  - "control"
  - "layer"
  - "helps"
  - "prevent"
---

# VPC Service Controls

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Adds a security control layer that helps prevent data exfiltration and unauthorized access.

## Extended Definition

Adds a security control layer that helps prevent data exfiltration and unauthorized access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)

## Supporting Pages

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Apply Zero Trust Security principles and micro-segmentation in NSX Use the NSX DFW to implement traffic controls for security segments that are as granular as individual virtual machines.
- Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities If you require advanced Layer 7 security, including IDS/IPS capabilities for inbound traffic into the private cloud from the rest of your network or between your NSX network segments, consider deploying a third-party firewall appliance.
- Help protect your data from exfiltration using VPC Service Controls We recommend mitigating data exfiltration risks using VPC Service Controls by placing your sensitive resources such as Cloud Storage buckets and BigQuery datasets into a VPC Service Controls perimeter.

### "VPC Service Controls with VMware Engine \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls lets you define a security perimeter for your VMware Engine resources.
- Add VMware Engine to allowed VPC Service Controls To add the VMware Engine service to the allowed VPC Service Controls, you can follow these steps in the Google Cloud console : Go to the VPC Service Controls page.
- In order to ensure VPC Service Controls works for VMware Engine, you must add the VMware Engine service to the Restricted Services within VPC Service Controls.
- VPC Service Controls with VMware Engine To further protect your Google Cloud VMware Engine resources, you can protect them using VPC Service Controls .

### "VMware Engine security overview \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VMware Engine also follows the defense-in-depth strategy for helping to secure the network edge by implementing security controls like firewall rules and NAT.
- The Google Cloud console lets you define rules for EW and NS network traffic controls for all network traffic, including intra-private cloud traffic, inter-private cloud traffic, general traffic to the internet, and network traffic to the on-premises environment.
- Not sharing hardware between tenants provides an additional layer of isolation and security protection.
- Network security Google Cloud VMware Engine relies on layers of network security.

