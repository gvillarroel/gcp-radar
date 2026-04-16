---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.668Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Cloud Logging alerts for hardware health and management components"
feature_slug: "cloud-logging-alerts-for-hardware-health-and-management-components"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring"
keywords:
  - "logging"
  - "alerts"
  - "hardware"
  - "health"
  - "management"
  - "components"
  - "exposes"
  - "status"
---

# Cloud Logging alerts for hardware health and management components

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Exposes status updates about hardware health and VMware management components in Cloud Logging and the VMware Engine UI.

## Extended Definition

Exposes status updates about hardware health and VMware management components in Cloud Logging and the VMware Engine UI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)

## Supporting Pages

### "Private cloud maintenance and updates \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, temporary network issues or software glitches can trigger similar alerts to hardware failures, and we want to avoid impacting your cluster with node replacement when it might not be the recommended action.
- To maintain SLA and cluster health, the system prioritizes replacing the faulty hardware before proceeding.
- During a VMware maintenance interval, the following services continue to function without any impact: VMware management plane and applications vCenter access All networking and storage Updates and upgrades VMware Engine is responsible for lifecycle management of VMware software (ESXi, vCenter, PSC, and NSX) in private clouds.
- The following VMware elements in private clouds are backed up, maintained, and updated: ESXi vCenter Platform Services Controller vSAN NSX Backup and restore Backups include the following: Nightly incremental backups of vCenter, PSC, and DVS rules. vCenter built-in APIs to back up components at the application layer.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Available features The following list describes NSX features supported by VMware Engine, organized by category: Switching, DNS, DHCP, and IPAM (DDI): Optimized ARP learning and broadcast suppression Unicast replication Head-end replication SpoofGuard IP address management IP blocks IP subnets IP pools IPv4 DHCP server IPv4 DHCP relay IPv4 DHCP static bindings/fixed addresses IPv4 DNS relay/DNS proxy Routing: Null routes Static routing Device routing BGP route controls using route maps and Prefix-lists NAT: NAT on North/South and East/West logical routers Source NAT Destination NAT N:N NAT Firewall: Edge Firewall Distributed Firewall Common firewall user interface Firewall sections Firewall logging Stateful Layer 2 and Layer 3 firewall rules Tag-based rules Distributed firewall-based IPFIX Firewall policies, tags, and groups: Object tagging/security tags Network-centric grouping Workload-centric grouping IP-based grouping MAC-based grouping VPN: Layer 2 VPN Layer 3 VPN (IPv4) Integrations: Container networking and security using Tanzu Kubernetes Grid (TKG) only VMware Cloud Director service VMware Aria Automation VMware Aria Operations for Logs Authentication and authorization: Direct Active Directory integration using LDAP Authentication using OpenLDAP Role-based access control (RBAC) Automation: REST API Java SDK Python SDK Terraform provider Ansible modules OpenAPI/Swagger specifications and auto-generated API documentation for REST API Inspection: Port mirroring Traceflow Switch-based IPFIX Feature limitations Some NSX Data Center features have very specific networking and security use cases.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- Private cloud VMware components A private cloud is an isolated VMware stack (ESXi hosts, vCenter, vSAN, and NSX) environment managed by a vCenter Server in a management domain.
- Updates and upgrades This section describes update and upgrade considerations and lifecycle management responsibilities for software components.

### "Overview of VMware Engine monitoring \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use vCenter monitoring tools to gain insight into the performance, health, and capacity of your private clouds, as well as to set alerts using log files.
- The following table lists the classes of available logs for VMware Engine and the severity of the reported events: The following table lists the available logs for VMware Engine and the severity of the reported events: VMware component Issue notification Resolution notification Action owner VMware Engine node ALERT NOTICE VMware Engine Service Operations VMware vCenter CRITICAL NOTICE VMware Engine Service Operations VMware NSX Manager CRITICAL NOTICE VMware Engine Service Operations VMware HCX CRITICAL NOTICE VMware Engine Service Operations vSAN utilization ALERT Not applicable Customer Cluster auto-scale Issue dependent Issue dependent Issue dependent Private cloud operations (create, delete, add and remove nodes) Issue dependent Issue dependent Issue dependent Stretched private cloud issues ALERT NOTICE VMware Engine Service Operations You can access logs for VMware Engine in the following ways: In Logs Explorer , by using the following log name: projects/ PROJECT ID /logs/vmwareengine.googleapis.com%2Falerts In the Google Cloud console, by going to the Dashboard page .
- Set up email alerts You can set up VMware Engine to notify a user about important events that may impact the resources in your project and private cloud, or changes to your private cloud configuration.
- To choose a method to monitor your private cloud, consider the following questions: Do you want to centralize infrastructure logs from VMware components and use an external log monitoring system?

