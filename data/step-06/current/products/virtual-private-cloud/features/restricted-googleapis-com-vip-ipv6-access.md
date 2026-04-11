---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.137Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "restricted.googleapis.com VIP IPv6 access"
feature_slug: "restricted-googleapis-com-vip-ipv6-access"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest"
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors/list"
keywords:
  - "restricted"
  - "googleapis"
  - "com"
  - "vip"
  - "ipv6"
  - "access"
  - "provides"
  - "to"
---

# restricted.googleapis.com VIP IPv6 access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Provides access to Google APIs and services through the restricted.googleapis.com virtual IP (VIP) endpoint using IPv6.

## Extended Definition

Provides access to Google APIs and services through the restricted.googleapis.com virtual IP (VIP) endpoint using IPv6.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors/list](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors/list)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2022 Feature Preview : Connectivity to Private Service Connect endpoints used to access a managed service is supported over VLAN attachments for Cloud Interconnect November 16, 2022 Feature Preview: Private Service Connect endpoints with consumer HTTP(S) controls now support accessing regional Google APIs and managed services using the following load balancers: Regional internal HTTP(S) load balancer Regional external HTTP(S) load balancer November 08, 2022 Feature Preview : You use the private.googleapis.com and restricted.googleapis.com VIPs to access Google APIs and services using IPv6 addresses.
- June 04, 2023 Feature Support for IPv6 static routes with the following next hops is available in Preview : next-hop-gateway next-hop-instance May 26, 2023 Feature General Availability : You can use the private.googleapis.com and restricted.googleapis.com virtual IP addresses (VIPs) to access Google APIs and services with IPv6 addresses.
- For more information, see the following pages: Use the VIPs from VMs with internal IPv6 addresses Use the VIPs from VMs with external IPv6 addresses Use the VIPs from on-premises hosts with IPv6 addresses Use restricted.googleapis.com with VPC Service Controls November 01, 2022 Feature Private Service Connect supports internal regional TCP proxy load balancers as a service attachment target in General Availability .
- For more information, see the following pages: Use the VIPs from VMs with internal IPv6 addresses Use the VIPs from VMs with external IPv6 addresses Use the VIPs from on-premises hosts with IPv6 addresses Use the VIPs with VPC Service Controls Feature Private Service Connect backends support using an external regional TCP proxy load balancer to access published services .

### "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console On this page Service: vpcaccess.googleapis.com Discovery document Service endpoint REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.connectors REST Resource: v1beta1.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connectors REST Resource: v1.projects.locations.operations Home Documentation Networking Virtual Private Cloud Was this helpful?
- On this page Service: vpcaccess.googleapis.com Discovery document Service endpoint REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.connectors REST Resource: v1beta1.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connectors REST Resource: v1.projects.locations.operations API for managing VPC access connectors.
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.connectors REST Resource: v1beta1.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connectors REST Resource: v1.projects.locations.operations Service: vpcaccess. googleapis. com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://vpcaccess.googleapis.com REST Resource: v1beta1. projects. locations Methods list GET / v1beta1/ {name=projects/ }/ locations Lists information about the supported locations for this service.

### "Method: projects.locations.connectors.list \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors/list](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors/list)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request GET https://vpcaccess.googleapis.com/v1/{parent=projects/ /locations/ }/connectors The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial
- If successful, the response body contains data with the following structure: JSON representation { "connectors" : [ { object ( Connector ) } ] , "nextPageToken" : string } Fields connectors[] object ( Connector ) List of Serverless VPC Access connectors. nextPageToken string Continuation token.
- Authorization requires the following IAM permission on the specified resource parent : vpcaccess.connectors.list Query parameters Parameters page Size integer Maximum number of functions to return per call. page Token string Continuation token.

