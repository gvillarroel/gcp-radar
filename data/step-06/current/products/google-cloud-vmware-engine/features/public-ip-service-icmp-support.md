---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.716Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Public IP service ICMP support"
feature_slug: "public-ip-service-icmp-support"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-security"
keywords:
  - "public"
  - "ip"
  - "icmp"
  - "now"
  - "supports"
  - "protocol"
---

# Public IP service ICMP support

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

The public IP service now supports the ICMP protocol.

## Extended Definition

The public IP service now supports the ICMP protocol.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)

## Supporting Pages

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Prerequisites for these kinds of tools include the following: They provide application-level backups They are certified by the application vendors They are certified by VMware Engine for vSAN They support the VMware Engine vStorage API for Data Protection (VADP) protocol standard or take application-level backups Regardless of the backup solution of your choice, we recommend Cloud Storage as a cost-effective storage option for long-term retention of backups.
- Configure an LDAP or Active Directory identity source An identity provider which supports LDAP authentication, such as Active Directory, should be configured to enable user authentication for vCenter and NSX Manager.
- Either setup lets you include Google Cloud Armor for public-facing applications, mitigating DDoS attacks and common vulnerabilities like SQL injections or cross-site scripting.

### "Networking best practices \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking)
- Source ID: `site-docs-reference-required-4`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the advantages and disadvantages of each, as listed in the following table, to choose the most appropriate option: Internet access option Advantages Disadvantages VMware Engine internet and public IP service Doesn't incur any additional charges.
- Implement service chaining using third-party virtual network appliances VMware Engine supports chaining of network services by using Layer 3 routed topologies.
- It's also possible to deploy these appliances in active-active topologies by using dataplane-based heartbeats and redundancy, if the vendor supports them.
- Choose a suitable internet access option VMware Engine offers the following options to configure internet access and public IP addresses.

### "VMware Engine security overview \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data protection for data that is required to move through public networks To protect data that moves through public networks, you can create IPsec and SSL VPN tunnels for your private clouds.
- For data in transit, we expect applications to encrypt their network communication within internal network segments. vSphere supports encryption of data over the wire for vMotion traffic.

