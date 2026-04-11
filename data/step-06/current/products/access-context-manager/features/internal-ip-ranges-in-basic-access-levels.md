---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.574Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Internal IP ranges in basic access levels"
feature_slug: "internal-ip-ranges-in-basic-access-levels"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/create-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/define-access-policies"
keywords:
  - "allowed IP address ranges"
  - "internal IP in basic level"
  - "basic access level IP ranges"
  - "internal IP allowlist"
  - "source IP condition"
  - "internal IP ranges"
  - "basic access levels"
  - "ipSubnetworks"
---

# Internal IP ranges in basic access levels

Product: Access Context Manager
Coverage: HIGH

## Step 02 Summary

Basic access levels now support internal IP addresses when specifying allowed IP address ranges.

## Extended Definition

In Access Context Manager, a basic access level can define IP-based conditions as part of its access criteria. It supports `ipSubnetworks` for CIDR-based IP ranges and also supports internal/private IP usage via `vpcNetworkSources` with `vpcIpSubnetworks` scoped to a specified VPC network/subnetwork in the same basic access level definition.

## Evidence Summary

The cited Google Cloud Access Context Manager docs provide examples of basic access level definitions showing both `ipSubnetworks` and `vpcNetworkSources`/`vpcIpSubnetworks` (the latter for private/internal IP addresses).

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/define-access-policies](https://docs.cloud.google.com/access-context-manager/docs/define-access-policies)

## Supporting Pages

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: It directly describes basic access-level conditions including IP-related attributes, which is materially related to defining allowed network/IP conditions.

Evidence snippets:
- In this example, to limit access to only the auditors, you would enter the following into the YAML file: - ipSubnetworks : - 203.0.113.0/25 If you want to use a private IP address, you need to enter the following information in the YAML file: - vpcNetworkSources : - vpcSubnetwork : network : VPC NETWORK NAME vpcIpSubnetworks : - IP RANGE Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- If you want to use a private IP address, you need to enter the following information in the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "vpcNetworkSources" : [ { "vpcSubnetwork" : { "network" : VPC NETWORK NAME , "vpcIpSubnetworks" : [ IP RANGE ] } } ] } ] } } Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- In this example, to limit access to only the auditors, you would enter the following into the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "ipSubnetworks" : [ "203.0.113.0/25" ] } ] } } Where: NAME is the unique name for the access level.
- This page describes generally how to create basic access levels.

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: It explains adding IP-related attributes to basic access-level conditions, which is useful context for IP-based restrictions, though it does not explicitly discuss internal IP range support.

Evidence snippets:
- In this example, to limit access to only the auditors, you would enter the following into the YAML file: - ipSubnetworks : - 203.0.113.0/25 If you want to use a private IP address, you need to enter the following information in the YAML file: - vpcNetworkSources : - vpcSubnetwork : network : VPC NETWORK NAME vpcIpSubnetworks : - IP RANGE Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- If you want to use a private IP address, you need to enter the following information in the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "vpcNetworkSources" : [ { "vpcSubnetwork" : { "network" : VPC NETWORK NAME , "vpcIpSubnetworks" : [ IP RANGE ] } } ] } ] } } Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- In this example, to limit access to only the auditors, you would enter the following into the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "ipSubnetworks" : [ "203.0.113.0/25" ] } ] } } Where: NAME is the unique name for the access level.
- This page describes generally how to create basic access levels.

### "Define access policies using access levels \_|\_ Access Context Manager\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/define-access-policies](https://docs.cloud.google.com/access-context-manager/docs/define-access-policies)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page describes how access levels use IP-related attributes and documents specific IP/private-IP limitations, which provides useful context for IP handling in basic access levels but does not explicitly confirm a new internal-IP support feature.

Evidence snippets:
- In this example, to limit access to only the auditors, you would enter the following into the YAML file: - ipSubnetworks : - 203.0.113.0/25 If you want to use a private IP address, you need to enter the following information in the YAML file: - vpcNetworkSources : - vpcSubnetwork : network : VPC NETWORK NAME vpcIpSubnetworks : - IP RANGE Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- If you want to use a private IP address, you need to enter the following information in the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "vpcNetworkSources" : [ { "vpcSubnetwork" : { "network" : VPC NETWORK NAME , "vpcIpSubnetworks" : [ IP RANGE ] } } ] } ] } } Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- In this example, to limit access to only the auditors, you would enter the following into the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "ipSubnetworks" : [ "203.0.113.0/25" ] } ] } } Replace the following: NAME : The unique name for the access level.

