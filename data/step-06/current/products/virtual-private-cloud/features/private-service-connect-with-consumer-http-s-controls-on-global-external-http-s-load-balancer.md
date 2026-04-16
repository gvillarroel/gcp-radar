---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.474Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect with consumer HTTP(S) controls on global external HTTP(S) load balancer"
feature_slug: "private-service-connect-with-consumer-http-s-controls-on-global-external-http-s-load-balancer"
latest_feature_date: "2022-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
keywords:
  - "private"
  - "connect"
  - "with"
  - "consumer"
  - "http"
  - "controls"
  - "on"
  - "global"
---

# Private Service Connect with consumer HTTP(S) controls on global external HTTP(S) load balancer

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect support for accessing managed services with consumer-side HTTP(S) controls is now generally available for the global external HTTP(S) load balancer.

## Extended Definition

Private Service Connect support for accessing managed services with consumer-side HTTP(S) controls is now generally available for the global external HTTP(S) load balancer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Health check failures with global access Private Service Connect NEGs There is a known issue with consumer Private Service Connect NEGs that are configured for global access.
- To publish a service and explicitly approve consumers based on VPC network, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ "projects/ REJECTED PROJECT ID 1 /global/networks/ REJECTED NETWORK 1 ", "projects/ REJECTED PROJECT ID 2 /global/networks/ REJECTED NETWORK 2 " ], "consumerAcceptLists": [ { "networkUrl": "projects/ ACCEPTED PROJECT ID 1 /global/networks/ ACCEPTED NETWORK 1 ", "connectionLimit": " LIMIT 1 " }, { "networkUrl": "projects/ ACCEPTED PROJECT ID 2 /global/networks/ ACCEPTED NETWORK 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": PROPAGATED CONNECTION LIMIT , "domainNames": [ " DOMAIN NAME " ] } Replace the following: REJECTED PROJECT ID 1 and REJECTED PROJECT ID 2 : the IDs of the parent projects of the networks that you want to reject. consumerRejectLists is optional and can contain one or more networks.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- If a consumer connects a Private Service Connect NEG that is configured for global access to a producer load balancer, and the service producer disables global access for that load balancer, health checks don't work correctly.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET https://networkmanagement.googleapis.com/v1/{parent=projects/ PROJECT ID /locations/global}/connectivityTests Replace PROJECT ID with the project ID of the project that contains the tests that you want to list.
- POST https://networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "ipAddress": " SOURCE IP ADDRESS ", "network": " SOURCE NETWORK " }, "destination": { "ipAddress": " DESTINATION IP ADDRESS ", "port": " DESTINATION PORT ", }, "protocol": " PROTOCOL ". }' Replace the following: PROJECT ID : the project ID of the source VM TEST ID : the ID of the Connectivity Tests object (test) that you are running.
- POST https: //networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "appEngineVersion": { "uri": " APP ENGINE VERSION ", }, }, "destination": { " DESTINATION RESOURCE FIELD ": " DESTINATION ENDPOINT ", "ipAddress": " DESTINATION IP ADDRESS ", "port": DESTINATION PORT , }, "protocol": " PROTOCOL ", }' Replace the following: PROJECT ID : the project ID of the source Cloud Run function.
- POST https://networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "ipAddress": " SOURCE IP ADDRESS ", "network": " SOURCE NETWORK ", "networkType": "GCP NETWORK", }, "destination": { "ipAddress": " DESTINATION IP ADDRESS ", "port": " DESTINATION PORT ", }, "protocol": " PROTOCOL ". }' Replace the following: PROJECT ID : the project ID of the source VM.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Private Service Connect can be used to access managed services that are owned by Google, third-party software as a service (SaaS) companies, or other teams within the consumer's own company.
- Placing a load balancer in front of a managed service provides the consumer with more visibility and control than is possible through a Private Service Connect endpoint.
- Private Service Connect provides service-oriented access between consumers and producers with granular control over how services are accessed.

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Understand that to use Private Service Connect health, consumers must access your service with a load balancer that supports cross-region failover .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure Private Service Connect health: compute.regionHealthAggregationPolicies.list compute.regionHealthAggregationPolicies.get compute.regionHealthAggregationPolicies.create compute.regionHealthAggregationPolicies.update compute.regionHealthAggregationPolicies.delete compute.regionHealthSources.list compute.regionHealthSources.get compute.regionHealthSources.create compute.regionHealthSources.update compute.regionHealthSources.delete compute.regionCompositeHealthChecks.list compute.regionCompositeHealthChecks.get compute.regionCompositeHealthChecks.create compute.regionCompositeHealthChecks.update compute.regionCompositeHealthChecks.delete You might also be able to get these permissions with custom roles or other predefined roles .
- HEALTH DESTINATION : the URI of the forwarding rule that receives the composite health state from this composite health check—for example, projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE The forwarding rule must be associated with a producer load balancer that supports Private Service Connect health and fulfills the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .
- While Private Service Connect health doesn't require configuration by the service consumer, the feature only works if the consumer configures supported Private Service Connect backends in a multi-region deployment.

