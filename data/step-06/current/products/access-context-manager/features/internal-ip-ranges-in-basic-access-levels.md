---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.647Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Internal IP ranges in basic access levels"
feature_slug: "internal-ip-ranges-in-basic-access-levels"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
keywords:
  - "addresses"
  - "internal"
  - "ranges"
  - "basic"
  - "levels"
---

# Internal IP ranges in basic access levels

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Basic access levels now support internal IP addresses when specifying allowed IP address ranges.

## Extended Definition

Basic access levels now support internal IP addresses when specifying allowed IP address ranges.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)

## Supporting Pages

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to use a private IP address, you need to enter the following information in the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "vpcNetworkSources" : [ { "vpcSubnetwork" : { "network" : VPC NETWORK NAME , "vpcIpSubnetworks" : [ IP RANGE ] } } ] } ] } } Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- The OR value will give the principals access even if other conditions, such as IP address or those inherited from other required access levels, are not met. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ], "combiningFunction" : "OR" } } Create the access level by calling accessLevels.create .
- In this example, assume the access levels are named Device Trust and IP Trust , and that 247332951433 is the name of your access policy. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ] } } Set combiningFunction to OR .
- In this example, to limit access to only the auditors, you would enter the following into the YAML file: - ipSubnetworks : - 203.0.113.0/25 If you want to use a private IP address, you need to enter the following information in the YAML file: - vpcNetworkSources : - vpcSubnetwork : network : VPC NETWORK NAME vpcIpSubnetworks : - IP RANGE Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to use a private IP address, you need to enter the following information in the request body: { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "vpcNetworkSources" : [ { "vpcSubnetwork" : { "network" : VPC NETWORK NAME , "vpcIpSubnetworks" : [ IP RANGE ] } } ] } ] } } Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.
- The OR value will give the principals access even if other conditions, such as IP address or those inherited from other required access levels, are not met. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ], "combiningFunction" : "OR" } } Create the access level by calling accessLevels.create .
- In this example, assume the access levels are named Device Trust and IP Trust , and that 247332951433 is the name of your access policy. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ] } } Set combiningFunction to OR .
- In this example, to limit access to only the auditors, you would enter the following into the YAML file: - ipSubnetworks : - 203.0.113.0/25 If you want to use a private IP address, you need to enter the following information in the YAML file: - vpcNetworkSources : - vpcSubnetwork : network : VPC NETWORK NAME vpcIpSubnetworks : - IP RANGE Replace VPC NETWORK NAME and IP RANGE with the values described in the Use internal IP address in access levels section.

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following IP ranges are treated as private ranges by Access Context Manager: 10.0.0.0/8 (RFC 1918) 172.16.0.0/12 (RFC 1918) 192.168.0.0/16 (RFC 1918) 100.64.0.0/10 (RFC 6598 Shared Address Space) fc00::/7 (IPv6 Unique Local Addresses RFC 4193) Device type Note: This feature is available only as part of a paid enterprise security subscription.
- In addition to the request context used for basic access levels, you can also use custom access levels to permit requests based on data from third-party services.
- Access Context Manager provides two ways to define access levels: A basic access level consists of a collection of conditions that are used to test requests.
- Because at least one of the checks is successful, the overall condition, which is combined by OR , becomes true, and access is GRANTED . !(origin.region code in ['RU', 'BY', 'UA']) -> FAILED // levels.regions check inIpRange(origin.ip, ['205.220.128.0/23']) -> GRANTED // levels.ip check !(origin.region code in ['RU', 'BY', 'UA']) inIpRange(origin.ip, ['205.220.128.0/23']) -> GRANTED levels.regions check levels.ip check -> GRANTED IP address You can grant an access level based on the IP address of the originating request.

