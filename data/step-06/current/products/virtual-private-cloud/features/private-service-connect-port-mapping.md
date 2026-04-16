---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.452Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect port mapping"
feature_slug: "private-service-connect-port-mapping"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
  - "https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
keywords:
  - "private"
  - "connect"
  - "port"
  - "mapping"
  - "enables"
  - "vm"
  - "consumers"
  - "to"
---

# Private Service Connect port mapping

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect port mapping enables VM consumers to access specific service ports on specific producer VMs through a single Private Service Connect endpoint; Private Service Connect port mapping allows a consumer VM to privately reach specific service ports on specific producer VMs through a single Private Service Connect endpoint.

## Extended Definition

Private Service Connect port mapping enables VM consumers to access specific service ports on specific producer VMs through a single Private Service Connect endpoint; Private Service Connect port mapping allows a consumer VM to privately reach specific service ports on specific producer VMs through a single Private Service Connect endpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)

## Supporting Pages

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 367
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Service Connect port mapping lets consumer VMs communicate with specific producer VMs through the following process: The consumer VM sends packets to the endpoint's IP address, using a designated client destination port.
- Service producers use the network endpoints of the port mapping NEG to define unique mappings from client destination ports of the Private Service Connect endpoint to a combination of service port and producer VM.
- Private Service Connect port mapping forwards traffic from client destination ports of an endpoint to service ports of producer VMs based on mapping that is configured for a port mapping NEG (click to enlarge).
- The service producer configures the port mapping NEG's network endpoints to specify mappings from client destination ports of a Private Service Connect endpoint to service ports of specific producer VMs.

### "About service connectivity automation \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider a database administrator who deploys a database instance and wants to let service consumers to reach that database through a Private Service Connect endpoint.
- If a managed service supports service connectivity automation, the service instance configuration and the networking configuration can be delegated to the appropriate administrators: Service instance administrators can control which networks can access their services.
- Services with custom service instance scope support By default, service connectivity automation requires that the service instance and the endpoints that connect to the service instance must be in the same project (or in the case of Shared VPC, in connected projects).
- Service connection maps A service connection map is a producer-managed resource that stores details for authorizing and establishing Private Service Connect connections between consumer VPC networks and producer managed service instances.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.
- Dropped packets from consumers The private service connect/producer/dropped received packets count metric tracks packets from an endpoint or backend to a published service that are dropped because the endpoint or backend exceeded its maximum connections to the service.
- TLS errors with PROXY protocol If you publish a service with PROXY protocol enabled, but your target service type doesn't support PROXY protocol, consumers can connect to your service with endpoints.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- The main differences between virtual and dynamic Private Service Connect interfaces are described in the following table: Type Max Private Service Connect interfaces per VM Interface management Supported guest OS Virtual Private Service Connect interface Up to 9 ( depends on number of vCPUs ) Added at VM creation time; removed with VM deletion Linux, Windows Dynamic Private Service Connect interface Up to 15 ( depends on number of vCPUs ) Added at any time; can be removed independently of VM Linux only Consider using virtual Private Service Connect interfaces when you expect your interface configuration to remain unchanged throughout the VM's lifecycle.
- In a multi-tenant architecture, if one consumer terminates their Private Service Connect interface connection, other consumers that are connected to the same VM also lose connectivity.
- Support for dynamic Private Service Connect interfaces on Container-Optimized OS VMs is limited to milestone 129 or later.
- If a network attachment doesn't have enough IP addresses to allocate for Private Service Connect interfaces, the creation of the interface fails and returns an error: If the failure happens when creating a VM, the VM isn't created.

