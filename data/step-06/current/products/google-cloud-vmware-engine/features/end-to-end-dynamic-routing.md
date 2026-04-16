---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.730Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "End-to-end dynamic routing"
feature_slug: "end-to-end-dynamic-routing"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
keywords:
  - "end"
  - "dynamic"
  - "routing"
  - "private"
  - "clouds"
  - "can"
  - "dynamically"
  - "learn"
---

# End-to-end dynamic routing

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Private clouds can dynamically learn custom or reserved-block public IP ranges from VPC and on-premises networks.

## Extended Definition

Private clouds can dynamically learn custom or reserved-block public IP ranges from VPC and on-premises networks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)

## Supporting Pages

### "VMware Engine stretched private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- Source ID: `site-docs-reference-required-4`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A stretched private cloud can have multiple stretched clusters, but each must have exactly two Google Cloud zones for data nodes and one zone for the witness node. vSAN data encryption in stretched private clouds vSAN data encryption at rest is enabled by default in all stretched clusters of a stretched private cloud.
- VMware Engine stretched private clouds A Google Cloud VMware Engine stretched private cloud is a private cloud that is stretched across two data zones and a witness zone, all within the same Google Cloud region.
- Storage policies in stretched private clouds The management VMs of a stretched private cloud run on the first stretched cluster (for example, 'cluster 0').
- Stretched private clouds use vSphere and vSAN stretched clusters to provide compute and storage high availability against zone-level failures.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Available features The following list describes NSX features supported by VMware Engine, organized by category: Switching, DNS, DHCP, and IPAM (DDI): Optimized ARP learning and broadcast suppression Unicast replication Head-end replication SpoofGuard IP address management IP blocks IP subnets IP pools IPv4 DHCP server IPv4 DHCP relay IPv4 DHCP static bindings/fixed addresses IPv4 DNS relay/DNS proxy Routing: Null routes Static routing Device routing BGP route controls using route maps and Prefix-lists NAT: NAT on North/South and East/West logical routers Source NAT Destination NAT N:N NAT Firewall: Edge Firewall Distributed Firewall Common firewall user interface Firewall sections Firewall logging Stateful Layer 2 and Layer 3 firewall rules Tag-based rules Distributed firewall-based IPFIX Firewall policies, tags, and groups: Object tagging/security tags Network-centric grouping Workload-centric grouping IP-based grouping MAC-based grouping VPN: Layer 2 VPN Layer 3 VPN (IPv4) Integrations: Container networking and security using Tanzu Kubernetes Grid (TKG) only VMware Cloud Director service VMware Aria Automation VMware Aria Operations for Logs Authentication and authorization: Direct Active Directory integration using LDAP Authentication using OpenLDAP Role-based access control (RBAC) Automation: REST API Java SDK Python SDK Terraform provider Ansible modules OpenAPI/Swagger specifications and auto-generated API documentation for REST API Inspection: Port mirroring Traceflow Switch-based IPFIX Feature limitations Some NSX Data Center features have very specific networking and security use cases.
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- Single node private clouds For testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster.

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a new private cloud management DNS zone binding by binding a VPC or a VMware Engine network using the Google Cloud CLI or VMware Engine API, do the following: gcloud To bind a VPC using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vpc-network=projects/ VPC PROJECT ID /global/networks/ VPC NETWORK To bind a VMware Engine network, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vmware-engine-network=projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ NETWORK ID Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID.
- API To bind a VPC using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vpc network": "projects/ VPC PROJECT ID /global/networks/ VPC NETWORK " }' To bind a VMware Engine network using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vmware engine network" : " NETWORK ID " }' Replace the following: PROJECT ID : the project for your private cloud.
- Edit management DNS zone binding You can edit a management DNS zone binding description using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to edit the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings update command : gcloud vmware private-clouds management-dns-zone-bindings update DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --description=" DESCRIPTION " Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- Describe management DNS zone binding You can get the description of a management DNS zone binding to verify updates using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to get the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings describe command : gcloud vmware private-clouds management-dns-zone-bindings describe DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.

