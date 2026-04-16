---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.426Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect endpoint-level connection controls"
feature_slug: "private-service-connect-endpoint-level-connection-controls"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-service-connection-policies"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
keywords:
  - "private"
  - "connect"
  - "endpoint"
  - "level"
  - "connection"
  - "controls"
  - "producers"
  - "can"
---

# Private Service Connect endpoint-level connection controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Service producers can now accept or reject connections from individual Private Service Connect endpoints.

## Extended Definition

Service producers can now accept or reject connections from individual Private Service Connect endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)

## Supporting Pages

### "About service connection policies \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can optionally configure a connection limit to specify the maximum number of Private Service Connect connections that a given service producer can create in the policy's VPC network and region.
- The subnets that are included in the service connection policy configuration provide IP addresses that are assigned to Private Service Connect endpoints.
- Endpoints that are created through service connection policies can be made available in other VPC networks through connection propagation .
- You cannot directly delete Private Service Connect endpoints that are created through service connectivity automation.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect endpoints let service consumers initiate connections to service producers, while Private Service Connect interfaces let service producers initiate connections to service consumers (click to enlarge).
- Private Service Connect endpoints can only initiate connections to the producer VPC network.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Connecting to workloads in other networks Because Private Service Connect interface connections are transitive, if the consumer VPC network configuration allows it, resources in producer VPC networks can communicate with workloads that are connected to the consumer network.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides an authorization model that gives consumers and producers granular control, ensuring that only the intended service endpoints and no other resources can connect to a service.
- Service producers can initiate connections to service consumers by using Private Service Connect interfaces .
- Private Service Connect endpoints can only initiate connections to the producer VPC network.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Connection propagation With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.
- Static routes that use --next-hop-ilb to specify the name of an internal passthrough Network Load Balancer forwarding rule can be used to send and receive traffic to a Private Service Connect endpoint when the route and the endpoint are in the same VPC network and region.
- Organization policy constraints An Organization Policy Administrator can use the constraints/compute.disablePrivateServiceConnectCreationForConsumers constraint to define the set of endpoint types for which users cannot create forwarding rules.
- This approach provides the following benefits: Unified connectivity : Supported load balancers and regional Cloud Service Mesh can access published services through the same Private Service Connect endpoint.

