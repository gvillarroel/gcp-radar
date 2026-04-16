---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.455Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect cross-region internal backend for global Google APIs"
feature_slug: "private-service-connect-cross-region-internal-backend-for-global-google-apis"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends"
keywords:
  - "private"
  - "connect"
  - "cross"
  - "region"
  - "internal"
  - "backend"
  - "for"
  - "global"
---

# Private Service Connect cross-region internal backend for global Google APIs

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect backends now support using a cross-regional internal Application Load Balancer to access global Google API targets in Preview.

## Extended Definition

Private Service Connect backends now support using a cross-regional internal Application Load Balancer to access global Google API targets in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)

## Supporting Pages

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.
- About Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HEALTH DESTINATION : the URI of the forwarding rule that receives the composite health state from this composite health check—for example, projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE The forwarding rule must be associated with a producer load balancer that supports Private Service Connect health and fulfills the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .
- Configure Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Configure Private Service Connect health to support automatic cross-region failover The following sections describe how to configure Private Service Connect health for automatic cross-region failover.
- For information about how a service consumer can configure their VPC network to use health Private Service Connect health, see Automatic cross-region failover .

### "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- Source ID: `site-docs-root-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access global Google APIs through backends This page describes how to access global Google APIs by using Private Service Connect backends that are based on cross-region internal Application Load Balancers .
- A cross-region internal Application Load Balancer that uses that Private Service Connect NEG as a backend.
- To add a NEG to the corresponding backend service, use the gcloud compute backend-services add-backend command . gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-region= REGION \ --global Replace the following: NEG NAME : the name of the Private Service Connect NEG.
- Create a certificate resource for a cross-region internal Application Load Balancer by using the private key and signed certificate that you created.

