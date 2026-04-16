---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.678Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Authorization policies for Application Load Balancers"
feature_slug: "authorization-policies-for-application-load-balancers"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "authorization"
  - "policies"
  - "application"
  - "load"
  - "balancers"
  - "enforce"
  - "access"
  - "control"
---

# Authorization policies for Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers support authorization policies to enforce access control checks on incoming traffic; Application Load Balancers support authorization policies to enforce access control checks on incoming traffic.

## Extended Definition

Application Load Balancers support authorization policies to enforce access control checks on incoming traffic; Application Load Balancers support authorization policies to enforce access control checks on incoming traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example command imports the previously created policy file and creates an authorization policy in the LOCATION region: gcloud network-security authz-policies import my-authz-policy-allow \ --source=authz-policy-allow.yaml \ --location= LOCATION Authorization policy based on service accounts or tags You can apply authorization policies based on service accounts or tags only on internal Application Load Balancers.
- Create and attach service accounts or tags to Google Cloud VMs For internal Application Load Balancers, you can apply authorization policies based on service accounts or tags attached to different Google Cloud resources .
- Home Documentation Networking Load Balancing Guides Send feedback Set up authorization policies for Application Load Balancers Stay organized with collections Save and categorize content based on your preferences.
- Applying authorization policies based on service accounts or tags is not supported for external Application Load Balancers.

### "Authorization policy overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview)
- Source ID: `site-docs-reference-required-3`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization policies let you establish access control checks for incoming traffic to Application Load Balancers.
- The following Application Load Balancers support authorization policies: Global external Application Load Balancers Regional external Application Load Balancers Regional internal Application Load Balancers Cross-region internal Application Load Balancers In Application Load Balancers, authorization policies are invoked after evaluating route extensions, network security policies (evaluated by Google Cloud Armor), cross-origin resource sharing (CORS) policies and Identity-Aware Proxy (IAP) policies, but before executing traffic management actions.
- What's next Set up authorization policies for Application Load Balancers Delegate authorization to IAP and IAM Configure an authorization extension Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Authorization policies can be configured on the forwarding rule of all Application Load Balancers with a load balancing scheme of EXTERNAL MANAGED or INTERNAL MANAGED .

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For cross-region internal Application Load Balancers You can set up a cross-region internal Application Load Balancer in multiple regions to get the following benefits: If the cross-region internal Application Load Balancer in a region fails, the DNS routing policies route traffic to a cross-region internal Application Load Balancer in another region.
- Accessing connected networks Your clients can access an internal Application Load Balancer in your VPC network from a connected network by using the following: VPC Network Peering Cloud VPN and Cloud Interconnect For detailed examples, see Internal Application Load Balancers and connected networks .
- H2C support is also available for load balancers created using the GKE Gateway controller and Cloud Service Mesh, but isn't supported for classic Application Load Balancers. gRPC support gRPC is an open-source framework for remote procedure calls.
- GKE support GKE uses internal Application Load Balancers in the following ways: Internal Gateways created using the GKE Gateway controller can use any mode of an Internal Application Load Balancer.

