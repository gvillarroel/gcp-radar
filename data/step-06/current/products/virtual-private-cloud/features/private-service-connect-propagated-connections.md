---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.446Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect propagated connections"
feature_slug: "private-service-connect-propagated-connections"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-propagated-connections"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-peering-connections"
keywords:
  - "private"
  - "connect"
  - "propagated"
  - "connections"
  - "became"
  - "generally"
  - "available"
  - "enabling"
---

# Private Service Connect propagated connections

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub.

## Extended Definition

Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)

## Supporting Pages

### "About propagated connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quotas and limits The following quotas and limits apply to Private Service Connect connection propagation: Consumer quota : the PSC propagated connections per VPC network quota limits the number of propagated connections that can be made available in a consumer VPC network.
- With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.
- You can configure global access on an endpoint to make propagated connections for that endpoint available to workloads in any region of the propagated connection's VPC spoke.
- Propagated connections provide the following benefits: You can use a common services VPC network to simplify the deployment of Private Service Connect endpoints.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Quota name: PSC PROPAGATED CONNECTIONS PER VPC NETWORK Available metrics: compute.googleapis.com/quota/psc propagated connections per vpc network/limit compute.googleapis.com/quota/psc propagated connections per vpc network/usage compute.googleapis.com/quota/psc propagated connections per vpc network/exceeded PSC ILB consumer forwarding rules per producer VPC network The maximum number of Private Service Connect endpoints and propagated connections that can access a service producer VPC network.
- Quota name: PSC GOOGLE APIS FORWARDING RULES PER NETWORK Available metrics: compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/limit compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/usage compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/exceeded PSC propagated connections per VPC network The maximum number of Private Service Connect propagated connections that can exist in a consumer's VPC network .
- Propagated connections contribute to this quota until the associated endpoint is deleted, even if connection propagation is disabled on the hub or the propagated connection's spoke is deleted.
- This quota applies to the total number of endpoints and propagated connections that access services in all regions of the service producer VPC network.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Propagated connection errors For information about troubleshooting propagated connections, see Troubleshoot Private Service Connect connection propagation errors .
- Click Add service . gcloud Use the gcloud compute service-attachments create command . gcloud compute service-attachments create ATTACHMENT NAME \ --region= ATTACHMENT REGION \ --target-service= TARGET SERVICE \ --connection-preference=ACCEPT MANUAL \ --consumer-accept-list= ACCEPTED PROJECT OR NETWORK 1 = LIMIT 1 , ACCEPTED PROJECT OR NETWORK 2 = LIMIT 2 \ --consumer-reject-list= REJECTED PROJECT OR NETWORK 1 , REJECTED PROJECT OR NETWORK 2 \ --nat-subnets= PSC SUBNET LIST \ [ --propagated-connection-limit= PROPAGATED CONNECTION LIMIT ] \ [ --enable-proxy-protocol ] \ [ --domain-names= DOMAIN NAME ] \ [ --reconcile-connections ] Replace the following: ATTACHMENT NAME : the name to assign to the service attachment.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .

### "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Network Peering supports two connection modes: Independent mode (default) Consensus mode For standard deployments, independent mode is generally preferred.
- After the peering connection is established, the two VPC networks always exchange IPv4 subnet routes that use private IPv4 address ranges.
- What's next To create and manage VPC Network Peering connections, see Set up and manage VPC Network Peering .
- About peering connections This page provides an overview of administering VPC Network Peering connections.

