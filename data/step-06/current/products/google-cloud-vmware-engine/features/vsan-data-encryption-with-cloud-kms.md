---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.720Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "vSAN data encryption with Cloud KMS"
feature_slug: "vsan-data-encryption-with-cloud-kms"
latest_feature_date: "2021-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
keywords:
  - "vsan"
  - "encryption"
  - "kms"
  - "rest"
  - "uses"
  - "key"
  - "management"
  - "generated"
---

# vSAN data encryption with Cloud KMS

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds; vSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds.

## Extended Definition

VSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds; vSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)

## Supporting Pages

### "VMware Engine security overview \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data protection for data at rest and data in transit within internal networks Data at rest in the private cloud environment can be encrypted using vSAN software based encryption. vSAN encryption relies on external Key Management Solutions to store encryption keys.
- VMware Engine enables vSAN data at rest encryption by default for any new private clouds deployed, with key management infrastructure managed by Google as part of the service.
- Communication that transports sensitive information uses the standard encryption mechanisms.
- For details related to the default encryption model, see About vSAN encryption .

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Use a Google-owned and managed key provider enabled for vSAN encryption at rest Encryption of data at rest is implemented using vSAN software based encryption.
- Third-party Cloud KMS key provider Full control over the encrypted data and encryption key Hardware backed keys can be stored in an HSM appliance Additional complexity and operational overhead Additional cost Possible additional latency, especially in the case of SaaS KMS Possible lower availability Note that we don't recommend that you enable VM-level encryption together with vSAN datastore encryption because deduplication efficiency approaches zero for encrypted VMs.
- Google requires customers to keep vSAN encryption enabled on their ESXi clusters and disabling vSAN encryption is a violation of the service terms for VMware Engine.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Available features The following list describes NSX features supported by VMware Engine, organized by category: Switching, DNS, DHCP, and IPAM (DDI): Optimized ARP learning and broadcast suppression Unicast replication Head-end replication SpoofGuard IP address management IP blocks IP subnets IP pools IPv4 DHCP server IPv4 DHCP relay IPv4 DHCP static bindings/fixed addresses IPv4 DNS relay/DNS proxy Routing: Null routes Static routing Device routing BGP route controls using route maps and Prefix-lists NAT: NAT on North/South and East/West logical routers Source NAT Destination NAT N:N NAT Firewall: Edge Firewall Distributed Firewall Common firewall user interface Firewall sections Firewall logging Stateful Layer 2 and Layer 3 firewall rules Tag-based rules Distributed firewall-based IPFIX Firewall policies, tags, and groups: Object tagging/security tags Network-centric grouping Workload-centric grouping IP-based grouping MAC-based grouping VPN: Layer 2 VPN Layer 3 VPN (IPv4) Integrations: Container networking and security using Tanzu Kubernetes Grid (TKG) only VMware Cloud Director service VMware Aria Automation VMware Aria Operations for Logs Authentication and authorization: Direct Active Directory integration using LDAP Authentication using OpenLDAP Role-based access control (RBAC) Automation: REST API Java SDK Python SDK Terraform provider Ansible modules OpenAPI/Swagger specifications and auto-generated API documentation for REST API Inspection: Port mirroring Traceflow Switch-based IPFIX Feature limitations Some NSX Data Center features have very specific networking and security use cases.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- In addition to vSAN Advanced features, VMware Engine also provides access to vSAN Enterprise data encryption for data at rest and data in transit. vSAN storage policies A vSAN storage policy defines the Failures to tolerate (FTT) and the Failure tolerance method .
- Private cloud VMware components A private cloud is an isolated VMware stack (ESXi hosts, vCenter, vSAN, and NSX) environment managed by a vCenter Server in a management domain.

