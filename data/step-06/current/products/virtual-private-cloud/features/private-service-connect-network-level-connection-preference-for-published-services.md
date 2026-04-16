---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.466Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect network-level connection preference for published services"
feature_slug: "private-service-connect-network-level-connection-preference-for-published-services"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-propagated-connections"
  - "https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
keywords:
  - "private"
  - "connect"
  - "network"
  - "level"
  - "connection"
  - "preference"
  - "for"
  - "published"
---

# Private Service Connect network-level connection preference for published services

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for configuring connection preference for a Private Service Connect published service at the VPC network level in addition to project-level configuration.

## Extended Definition

Adds support for configuring connection preference for a Private Service Connect published service at the VPC network level in addition to project-level configuration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.
- Manage requests for access to a published service If you have a published service with explicit approval, you can accept or reject connection requests from consumer projects or networks.
- For more information, see Change the connection preference for a published service Add or remove subnets from a published service You can add or remove subnets from a published service.

### "About propagated connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an overview of propagated connections from the NCC perspective, see Private Service Connect propagated connections through Network Connectivity Center .
- Quotas and limits The following quotas and limits apply to Private Service Connect connection propagation: Consumer quota : the PSC propagated connections per VPC network quota limits the number of propagated connections that can be made available in a consumer VPC network.
- With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.
- Producer quota : the PSC ILB consumer forwarding rules per producer VPC network quota limits the number of endpoints and propagated connections that can connect to a producer VPC network.

### "About controlling access to published services \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prevention of quota exhaustion The total number of Private Service Connect endpoints and propagated connections, from any consumer, that can access your producer VPC network is controlled by the PSC ILB consumer forwarding rules per producer VPC network quota .
- Each accepted Private Service Connect connection subtracts from the configured limit for a consumer project or VPC network.
- The quota and limit usage for this configuration is the following: Quota / Limit Usage Explanation PSC ILB consumer forwarding rules per producer VPC network 6 four from consumer-project-1 and two from consumer-project-2 Service attachment consumer accept list connection limit for consumer-project-1 2 one per endpoint in consumer-project-1 Service attachment consumer accept list connection limit for consumer-project-2 1 one per endpoint in consumer-project-2 Service attachment propagated connection limit for consumer-project-1 2 one per propagated connection in consumer-project-1 Service attachment propagated connection limit for consumer-project-2 1 one per propagated connection in consumer-project-2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The quota and limit usage for this configuration is the following: Quota / Limit Usage Explanation PSC ILB consumer forwarding rules per producer VPC network 2 one per endpoint Service attachment consumer accept list connection limit for consumer-project-1 2 one per endpoint Service attachment propagated connection limit for consumer-project-1 0 no propagated connections Suppose consumer-project-1 connects another spoke named spoke-vpc-2 to the same NCC hub as spoke-vpc-1 .

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect lets you send traffic to endpoints that forward the traffic to published services in another VPC network.
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Private Service Connect supports access to the following types of managed services: Published VPC-hosted services Google APIs Published services Published services are VPC-hosted services that are deployed in the producer's VPC network and are accessed from the consumer's VPC network.

