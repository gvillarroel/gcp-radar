---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.792Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IAM Conditions forwarding rule attributes"
feature_slug: "iam-conditions-forwarding-rule-attributes"
latest_feature_date: "2020-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "iam"
  - "conditions"
  - "forwarding"
  - "rule"
  - "attributes"
  - "supports"
  - "control"
  - "which"
---

# IAM Conditions forwarding rule attributes

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

IAM Conditions supports forwarding rule attributes to control which types of forwarding rules a member can create; IAM Conditions supports forwarding rule attributes to control which types of forwarding rules a member can create.

## Extended Definition

IAM Conditions supports forwarding rule attributes to control which types of forwarding rules a member can create; IAM Conditions supports forwarding rule attributes to control which types of forwarding rules a member can create.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions](https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Internal forwarding rules are used by the following Google Cloud load balancers: Internal Application Load Balancer Internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal Application Load Balancer The internal Application Load Balancer supports IPv4 traffic using either the HTTP, HTTPS, or HTTP/2 protocols.
- IP address and forwarding rule requirements change depending on the Network Service Tier: In Premium Tier, global external proxy Network Load Balancers and classic proxy Network Load Balancers use a global external IP address, which can be either IPv4 or IPv6, and a global external forwarding rule.
- IP address and forwarding rule requirements change depending on the Network Service Tier: In Premium Tier, global external Application Load Balancers and classic Application Load Balancers use a global external IP address, which can be either IPv4 or IPv6, and a global external forwarding rule.
- Classic VPN EXTERNAL Target VPN gateway Can reference exactly one of the following ports: 500, 4500 IAM conditions With Identity and Access Management (IAM) conditions, you can set conditions to control which roles are granted to principals.

### "IAM Conditions for forwarding rules \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions](https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions)
- Source ID: `site-docs-reference-required-3`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If that IAM principal attempts to create a forwarding rule for an external load balancer, Google Cloud denies the action and returns an error like the following: ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource: - Required 'compute.forwardingRules.create' permission for 'projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE NAME ' Using IAM Conditions on Google Cloud load balancers The load balancing scheme of a forwarding rule determines which type or types of load balancer can use the forwarding rule.
- IAM Conditions supports a condition expression to check the load balancing scheme of a forwarding rule .
- Using this conditional grant, the GKE service account can only create new internal forwarding rules, but can manage all existing forwarding rules. { "bindings" : [ { "role" : "roles/container.serviceAgent" , "members" : [ "serviceAccount:service-<var>PROJECT ID</var>@container-engine-robot.iam.gserviceaccount.com" ], "condition" : { "title" : "only internal lb schemes" , "description" : "Internal LB Creation Only Permitted" , "expression" : "( compute.isForwardingRuleCreationOperation() && compute.matchLoadBalancingSchemes(['INTERNAL', 'INTERNAL MANAGED']) ) !compute.isForwardingRuleCreationOperation() " } } ] } Absent other grants, attempting to create a new GKE Service of type LoadBalancer, without the annotation for an internal passthrough Network Load Balancer , results in an error message like the following: Error creating load balancer (will retry): failed to ensure load balancer for service default/SERVICE-NAME: failed to create forwarding rule for load balancer (a01d427111c7011ea96e142010a80006(default/SERVICE-NAME)): googleapi: Error 403: Required 'compute.forwardingRules.create' permission for 'projects/ PROJECT ID /regions/[region]/forwardingRules/ FORWARDING RULE NAME ', forbidden Also, without other grants, attempting to create a new Ingress object causes a similar error message because the Cloud Load Balancing Ingress controller needs to create an external Application Load Balancer .
- Example policy This example IAM policy for a project grants the IAM principal jane@example.com the Load Balancer Admin predefined role, excluding the ability to create external load balancers (because the load balancing scheme EXTERNAL is omitted). jane@example.com can create internal load balancers, and can manage, modify, and delete any load balancer. { "bindings" : [ { "role" : "roles/compute.loadBalancerAdmin" , "members" : [ "user:jane@example.com" ], "condition" : { "title" : "only internal lb schemes" , "description" : "Internal LB creation only permitted" , "expression" : " !compute.isForwardingRuleCreationOperation() ( compute.isForwardingRuleCreationOperation() && compute.matchLoadBalancingSchemes(['INTERNAL', 'INTERNAL MANAGED']) ) " } } ] } Granting GKE service account permissions for specific types of forwarding rules You can also use IAM Conditions to limit access to the GKE service account to create only specific types of forwarding rules.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- When you create the forwarding rule, you're required to specify the subnet from which the internal IP address is taken.
- The load balancer's IP address is defined by its internal managed forwarding rule, which is described below.
- Load balancer mode Load balancer type Access type Region Cross-region internal Application Load Balancer Application Internal Regional internal Application Load Balancer Application Internal Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Cross-region internal Application Load Balancer Forwarding rule globalForwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend Global access is enabled by default to allow clients from any region in a VPC to access your load balancer.

