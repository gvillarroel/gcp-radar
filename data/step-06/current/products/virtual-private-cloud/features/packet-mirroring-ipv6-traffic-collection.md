---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.458Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Packet Mirroring IPv6 traffic collection"
feature_slug: "packet-mirroring-ipv6-traffic-collection"
latest_feature_date: "2023-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
keywords:
  - "packet"
  - "mirroring"
  - "ipv6"
  - "traffic"
  - "collection"
  - "can"
  - "collect"
  - "from"
---

# Packet Mirroring IPv6 traffic collection

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Packet Mirroring can collect IPv6 traffic from mirrored resources.

## Extended Definition

Packet Mirroring can collect IPv6 traffic from mirrored resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- The software running on the VM must send packets whose sources match one of those IPv6 addresses from that range.
- Not all services accept traffic from IPv6 clients.
- IPSet () for e in data [ "prefixes" ]: if "ipv4Prefix" in e : cidrs . add ( e . get ( "ipv4Prefix" )) if "ipv6Prefix" in e : cidrs . add ( e . get ( "ipv6Prefix" )) return cidrs def main (): cidrs = { group : get data ( link ) for group , link in IPRANGE URLS . items ()} if len ( cidrs ) != 2 : raise ValueError ( "ERROR: Could process data from Google" ) print ( "IP ranges for Google APIs and services default domains:" ) for ip in ( cidrs [ "goog" ] - cidrs [ "cloud" ]) . iter cidrs (): print ( ip ) if name == " main " : main () Note: In the past, Google Cloud published a list of IP address ranges in the spf.google.com DNS TXT record (and the records it referenced).

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For DHCP protocol, including UDP IPv4 packets to destination port 68 (DHCPv4 responses) and UDP IPv6 packets to destination port 546 (DHCPv6 responses), DHCP traffic is only allowed from the metadata server (169.254.169.254).
- Home Documentation Networking Network Intelligence Center Connectivity Tests Guides Send feedback Reasons for dropped test packets Stay organized with collections Save and categorize content based on your preferences.
- For example, you execute a test from a Compute Engine instance in the network-1 network to the Compute Engine instance in the network-2 network, but the packet is sent to the network-3 network.
- Probable cause The packet from the source endpoint to the external IP address of the Google APIs and services is routed through the Cloud VPN tunnel, but such a configuration is not supported.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- For this component Data comes from this time period Example Entities and connections An hour that you select from the past 11:00 AM to 12:00 PM from the previous day Overlaid metric values The selected hour 1 If you select the segment that runs from 11:00 AM to 12:00 PM on the previous day and the selected metric is Traffic , the overlaid values are an average from 11:55 AM to 12:00 PM.

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- You can balance your traffic visibility and storage cost needs by adjusting the following aspects of logs collection: Aggregation interval .
- If you need to analyze all packets, you can use Packet Mirroring and collector instances running third-party software.
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.
- Logs collection Packets are sampled within an aggregation interval.

