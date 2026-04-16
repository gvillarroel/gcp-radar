---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.711Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "HCX mobility-optimized networking"
feature_slug: "hcx-mobility-optimized-networking"
latest_feature_date: "2022-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking"
keywords:
  - "hcx"
  - "mobility"
  - "optimized"
  - "networking"
  - "enabled"
  - "default"
  - "through"
  - "enterprise"
---

# HCX mobility-optimized networking

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

HCX mobility-optimized networking is enabled by default through the HCX Enterprise license level.

## Extended Definition

HCX mobility-optimized networking is enabled by default through the HCX Enterprise license level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking)

## Supporting Pages

### "Networking requirements \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name/purpose Description CIDR prefix Edge Services CIDR Required if optional edge services, such as internet access and public IP, are enabled, on a per region basis. /26 Accessing Private and Restricted Google APIs By default both Private 199.36.153.8/30 and Restricted 199.36.153.4/30 CIDRs are advertised into the VMware Engine network to support direct access to Google services.
- Networking requirements Google Cloud VMware Engine offers a private cloud environment that's accessible to users and applications from on-premises environments, enterprise-managed devices, and Google Cloud services like Virtual Private Cloud (VPC) .
- Edge networking services provided by VMware Engine The following table describes the address range requirement for edge networking services provides by VMware Engine.
- To establish connectivity between VMware Engine private clouds and other networks, you use networking services such as Cloud VPN and Cloud Interconnect .

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- The following table highlights key differences between the default key provider and third-party Cloud KMS integrations: Key provider Pros Cons Default Google-owned and managed key provider Simplicity: Deployed "out of the box" with no vendor management and no operational burden End-to-end support by Google Simplest method of the ability to rotate DEKs/KEKs is the key requirement No additional cost Built-in zone redundancy for high availability Not possible to bring your own key material (BYOK) The KEKs are stored and managed in the Google infrastructure.
- Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks If you route inbound traffic to workloads on VMware Engine through the customer VPC, then we recommend placing VMware Engine workloads in hybrid network endpoint groups behind Cloud Service Mesh and leveraging the external HTTP(S) load balancer.
- Apply equivalent capabilities of Access Transparency and Access Approval policies While VMware Engine doesn't support access transparency (AxT) and access approval (AxA) in Google Cloud, we have implemented processes with equivalent capabilities that can be enabled by request.

### "Networking best practices \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking)
- Source ID: `site-docs-reference-required-4`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows how a tier-0 gateway works in VMware Engine: To implement this topology, do the following: Configure a default static route on each tier-1 gateway pointing to the NGFW.
- Behind a tier-0 gateway In this deployment topology, a tier-0 gateway serves as the default gateway for the third-party appliance with one or more tier-1 gateways behind the appliance.
- Behind a tier-1 gateway In this deployment topology, the third-party appliance serves as the default gateway for several networks in the environment.
- Networking best practices This page presents networking best practices for Google Cloud VMware Engine.

