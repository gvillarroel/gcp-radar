---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.484Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect consumer HTTP(S) service controls"
feature_slug: "private-service-connect-consumer-http-s-service-controls"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
keywords:
  - "private"
  - "connect"
  - "consumer"
  - "http"
  - "controls"
  - "now"
  - "supports"
  - "using"
---

# Private Service Connect consumer HTTP(S) service controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports using consumer HTTP(S) service controls to access supported regional service endpoints in Preview.

## Extended Definition

Private Service Connect now supports using consumer HTTP(S) service controls to access supported regional service endpoints in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Health check failures with global access Private Service Connect NEGs There is a known issue with consumer Private Service Connect NEGs that are configured for global access.
- To publish a service and explicitly approve consumers based on VPC network, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ "projects/ REJECTED PROJECT ID 1 /global/networks/ REJECTED NETWORK 1 ", "projects/ REJECTED PROJECT ID 2 /global/networks/ REJECTED NETWORK 2 " ], "consumerAcceptLists": [ { "networkUrl": "projects/ ACCEPTED PROJECT ID 1 /global/networks/ ACCEPTED NETWORK 1 ", "connectionLimit": " LIMIT 1 " }, { "networkUrl": "projects/ ACCEPTED PROJECT ID 2 /global/networks/ ACCEPTED NETWORK 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": PROPAGATED CONNECTION LIMIT , "domainNames": [ " DOMAIN NAME " ] } Replace the following: REJECTED PROJECT ID 1 and REJECTED PROJECT ID 2 : the IDs of the parent projects of the networks that you want to reject. consumerRejectLists is optional and can contain one or more networks.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- To publish a service and explicitly approve consumers based on project, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ " REJECTED PROJECT 1 ", " REJECTED PROJECT 2 " ], "consumerAcceptLists": [ { "projectIdOrNum": " ACCEPTED PROJECT 1 ", "connectionLimit": " LIMIT 1 " }, { "projectIdOrNum": " ACCEPTED PROJECT 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": " PROPAGATED CONNECTION LIMIT ", "domainNames": [ " DOMAIN NAME " ] } Replace the following: PROJECT ID : the project for the service attachment.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- Producer port configuration When an internal passthrough Network Load Balancer is published by using Private Service Connect, consumers who use Private Service Connect backends to access the service need to know which port to use to communicate with the service.
- Establishing a Private Service Connect connection between consumer and producer projects that are not in the same VPC Service Controls perimeter does not require explicit authorization with egress policies.
- About published services This document provides an overview of using Private Service Connect to make a service available to service consumers.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- This Private Service Connect interface connection lets producer and consumer organizations configure their VPC networks so that the two networks are connected and can communicate by using internal IP addresses.
- Consider using dynamic Private Service Connect interfaces when the following is true: You need to dynamically manage connections to consumer VPC networks.
- The analytics service can initiate connections to the consumer VPC network by using a Private Service Connect interface.
- The main differences between virtual and dynamic Private Service Connect interfaces are described in the following table: Type Max Private Service Connect interfaces per VM Interface management Supported guest OS Virtual Private Service Connect interface Up to 9 ( depends on number of vCPUs ) Added at VM creation time; removed with VM deletion Linux, Windows Dynamic Private Service Connect interface Up to 15 ( depends on number of vCPUs ) Added at any time; can be removed independently of VM Linux only Consider using virtual Private Service Connect interfaces when you expect your interface configuration to remain unchanged throughout the VM's lifecycle.

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect port mapping lets consumer VMs communicate with specific producer VMs through the following process: The consumer VM sends packets to the endpoint's IP address, using a designated client destination port.
- Specifications Private Service Connect port mapping has the following specifications: A Private Service Connect port mapping connection requires a Private Service Connect endpoint in a consumer VPC network that connects to a service attachment in a producer VPC network.
- Private Service Connect port mapping lets consumer virtual machine (VM) instances privately communicate with specific service ports on specific producer VMs through a single Private Service Connect endpoint.
- A consumer's on-premises workload can reach producer VMs by accessing the Private Service Connect endpoint through VLAN attachments for Cloud Interconnect or Cloud VPN .

