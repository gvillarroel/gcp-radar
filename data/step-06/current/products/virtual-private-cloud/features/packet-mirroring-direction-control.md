---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.490Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Packet Mirroring Direction Control"
feature_slug: "packet-mirroring-direction-control"
latest_feature_date: "2020-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/reachability"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
keywords:
  - "packet"
  - "mirroring"
  - "direction"
  - "control"
  - "supports"
  - "configuration"
  - "of"
  - "traffic"
---

# Packet Mirroring Direction Control

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Packet Mirroring supports configuration of traffic direction for mirrored packets in Google Cloud Virtual Private Cloud.

## Extended Definition

Packet Mirroring supports configuration of traffic direction for mirrored packets in Google Cloud Virtual Private Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/reachability](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/reachability)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)

## Supporting Pages

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- Packet Mirroring can't mirror packets for Private Service Connect published services traffic.
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.

### "Measuring reachability \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/reachability](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/reachability)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The packet header contains the following components: A network protocol A source endpoint, consisting of one of the following: A VM instance name A source IP address A source App Engine service A Cloud Run function (1st gen) environment A Cloud Run service A Cloud SQL instance name A cluster name for a GKE control plane A destination endpoint, consisting of one of the following and a port number: A VM instance name A destination IP address A Cloud SQL instance name A cluster name for a GKE control plane A Private Service Connect endpoint Note: You cannot select an external server as a Cloud SQL instance endpoint.
- It does not check to see whether a valid server is running on the destination, whether operating system firewall rules might block the traffic, or if security software blocks a packet carrying a virus payload.
- It is augmented by the live data plane analysis feature, which sends packets to verify the state of the data plane and provide baseline information for supported configurations.
- State machine for a VM-to-VM trace Source and destination endpoints The Connectivity Tests configuration analysis supports a 5-tuple packet header without the source port.

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Probable cause The packet from the source endpoint to the external IP address of the Google APIs and services is routed through the Cloud VPN tunnel, but such a configuration is not supported.
- Route next hop forwarding rule type is invalid The packet is sent to a destination using an invalid route with the next hop forwarding rule ( next-hop-ilb ) not being a forwarding rule of the internal passthrough Network Load Balancer.
- Route next hop instance has a NIC in the wrong network The packet is sent to a destination using an invalid route with the next hop Compute Engine instance not having a network interface controller (NIC) in the route's network.
- Route next hop address is not a VM primary IP address The packet is sent to a destination using an invalid route with the next hop IP address ( next-hop-address ) not being a primary IP address of the Compute Engine instance.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Basic configuration : Confirm that you have default routes with next hop default-internet-gateway and a destination range of 0.0.0.0/0 (for IPv4 traffic) and ::/0 (for IPv6 traffic, if needed).
- To check the configuration of custom routes for Google APIs and services in a given network, follow these directions.
- To check the configuration of a default route in a given network, follow these directions.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.

