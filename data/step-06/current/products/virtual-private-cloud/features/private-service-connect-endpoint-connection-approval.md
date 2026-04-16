---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.429Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect endpoint connection approval"
feature_slug: "private-service-connect-endpoint-connection-approval"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/about-service-connection-policies"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
keywords:
  - "private"
  - "connect"
  - "endpoint"
  - "connection"
  - "approval"
  - "producers"
  - "can"
  - "approve"
---

# Private Service Connect endpoint connection approval

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Service producers can approve or reject connections from individual Private Service Connect endpoints.

## Extended Definition

Service producers can approve or reject connections from individual Private Service Connect endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides an authorization model that gives consumers and producers granular control, ensuring that only the intended service endpoints and no other resources can connect to a service.
- Service producers can initiate connections to service consumers by using Private Service Connect interfaces .
- Private Service Connect endpoints can only initiate connections to the producer VPC network.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).

### "About service connection policies \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)
- Source ID: `site-docs-root-2`
- Final score: 231
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
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect endpoints let service consumers initiate connections to service producers, while Private Service Connect interfaces let service producers initiate connections to service consumers (click to enlarge).
- Private Service Connect endpoints can only initiate connections to the producer VPC network.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Connecting to workloads in other networks Because Private Service Connect interface connections are transitive, if the consumer VPC network configuration allows it, resources in producer VPC networks can communicate with workloads that are connected to the consumer network.

