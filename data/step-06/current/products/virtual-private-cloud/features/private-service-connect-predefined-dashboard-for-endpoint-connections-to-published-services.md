---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.453Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect predefined dashboard for endpoint connections to published services"
feature_slug: "private-service-connect-predefined-dashboard-for-endpoint-connections-to-published-services"
latest_feature_date: "2024-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation"
  - "https://docs.cloud.google.com/vpc/docs/about-propagated-connections"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
keywords:
  - "private"
  - "connect"
  - "predefined"
  - "dashboard"
  - "for"
  - "endpoint"
  - "connections"
  - "to"
---

# Private Service Connect predefined dashboard for endpoint connections to published services

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

A new predefined dashboard is now available for monitoring endpoints that connect to Private Service Connect published services.

## Extended Definition

A new predefined dashboard is now available for monitoring endpoints that connect to Private Service Connect published services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)

## Supporting Pages

### "About service connectivity automation \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service connection maps A service connection map is a producer-managed resource that stores details for authorizing and establishing Private Service Connect connections between consumer VPC networks and producer managed service instances.
- This check helps to ensure that a consumer network administrator with IAM permissions on the VPC network explicitly delegates the ability to create Private Service Connect endpoints for the specified service type.
- Automatic retries for endpoint failures Service connectivity automation fully manages the creation and deletion of your Private Service Connect endpoints.
- If service connectivity automation fails to create or delete an authorized endpoint—for example, due to quota limitations or the service connection policy's subnet being out of IP addresses—an automated process periodically retries the operation until the blocking issue is resolved.

### "About propagated connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Triggering connection propagation Propagated connections are automatically established when the following actions occur: When a hub administrator enables connection propagation for a hub , NCC creates propagated connections for existing endpoints in the VPC spokes that are connected to the hub.
- With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.
- When a hub administrator adds a VPC spoke to a hub that has connection propagation enabled, NCC creates propagated connections in the new spoke for existing endpoints in other VPC spokes that are connected to the same NCC hub.
- When a consumer service administrator creates an endpoint in a VPC spoke that is attached to a NCC hub with connection propagation enabled, NCC creates propagated connections for that endpoint in other connected VPC spokes.

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure Private Service Connect health: compute.regionHealthAggregationPolicies.list compute.regionHealthAggregationPolicies.get compute.regionHealthAggregationPolicies.create compute.regionHealthAggregationPolicies.update compute.regionHealthAggregationPolicies.delete compute.regionHealthSources.list compute.regionHealthSources.get compute.regionHealthSources.create compute.regionHealthSources.update compute.regionHealthSources.delete compute.regionCompositeHealthChecks.list compute.regionCompositeHealthChecks.get compute.regionCompositeHealthChecks.create compute.regionCompositeHealthChecks.update compute.regionCompositeHealthChecks.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Configure Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Configure Private Service Connect health to support automatic cross-region failover The following sections describe how to configure Private Service Connect health for automatic cross-region failover.
- For information about how a service consumer can configure their VPC network to use health Private Service Connect health, see Automatic cross-region failover .

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints.
- To accept connections for individual Private Service Connect endpoints, select Accept connections for selected projects .

