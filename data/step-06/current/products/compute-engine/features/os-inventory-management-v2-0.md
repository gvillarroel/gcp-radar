---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.241Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "OS inventory management v2.0"
feature_slug: "os-inventory-management-v2-0"
latest_feature_date: "2021-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview"
  - "https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage"
keywords:
  - "os"
  - "inventory"
  - "management"
  - "v2"
  - "lets"
  - "users"
  - "query"
  - "config"
---

# OS inventory management v2.0

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

OS inventory management v2.0 lets users query the OS Config API for VM inventory and vulnerability report data in a specific zone.

## Extended Definition

OS inventory management v2.0 lets users query the OS Config API for VM inventory and vulnerability report data in a specific zone.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage](https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)
- [https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage](https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage)

## Supporting Pages

### "Method: projects.locations.configurations.queryLicenseUsage \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage](https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine APIs & Reference Send feedback Method: projects.locations.configurations.queryLicenseUsage Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions UserCountUsage JSON representation License Usage information for a Configuration.
- IAM Permissions Requires the following IAM permission on the name resource: licensemanager.configurations.queryLicenseUsage For more information, see the IAM documentation .
- HTTP request GET https://licensemanager.googleapis.com/v1/{name=projects/ /locations/ /configurations/ }:queryLicenseUsage The URL uses gRPC Transcoding syntax.

### "Method: projects.locations.configurations.queryLicenseUsage \_|\_ Compute\

- URL: [https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage](https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage)
- Source ID: `site-docs-root-3`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine APIs & Reference Send feedback Method: projects.locations.configurations.queryLicenseUsage Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions UserCountUsage JSON representation License Usage information for a Configuration.
- IAM Permissions Requires the following IAM permission on the name resource: licensemanager.configurations.queryLicenseUsage For more information, see the IAM documentation .
- HTTP request GET https://licensemanager.googleapis.com/v1/{name=projects/ /locations/ /configurations/ }:queryLicenseUsage The URL uses gRPC Transcoding syntax.

### "NCC Gateway overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This query lets you see which particular gateway instance receives the traffic if you send a packet from that particular region.
- This traffic requires an additional 2 Gbps of gateway bandwidth because it is processed by the gateway in the following two places: 1 Gbps as packets leave the hub and enter the gateway spoke 1 Gbps as packets leave the gateway spoke and are sent to the VLAN attachments that connect to the branch We recommend the following strategy for configuring gateway processing capacity and VLAN attachment bandwidth: The gateway processing capacity is the sum of bandwidth required, in each direction, among all gateway NICs.
- Use cases for Google Cloud users include the following: Branch users to the internet Branch users to private applications Private applications to the internet Some supported partners offer one or more of the following use cases: Mobile users to the internet Mobile users to private applications Branch users to partner applications Private applications to partner applications Traffic flows This section describes the traffic flow paths in NCC Gateway depending on each use case.
- Example: Branch users to private applications Suppose that a branch's on-premises network is connected to Google Cloud as shown in the Branch users to private applications use case, and that the branch and private applications need 1 Gbps full-duplex bandwidth: 1 Gbps for traffic from the branch to the applications and 1 Gbps for traffic from the applications to the branch.

