---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.997Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Jumbo frames for firewall endpoints"
feature_slug: "jumbo-frames-for-firewall-endpoints"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints"
  - "https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints"
  - "https://docs.cloud.google.com/firewall/docs/configure-url-filtering"
  - "https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse"
keywords:
  - "jumbo"
  - "frames"
  - "for"
  - "firewall"
  - "endpoints"
  - "up"
  - "to"
  - "500"
---

# Jumbo frames for firewall endpoints

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Firewall endpoints support jumbo frames up to 8,500 bytes in size.

## Extended Definition

Firewall endpoints support jumbo frames up to 8,500 bytes in size.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse)

## Supporting Pages

### "Create and manage firewall endpoints \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform Use the google network security firewall endpoint Terraform resource . resource "google network security firewall endpoint" "default" { name = "my-firewall-endpoint" parent = "organizations/123456789" location = "us-central1-a" billing project id = "my-project-name" enable jumbo frames = true } To create a firewall endpoint that supports jumbo frames up to 8,500 bytes in size, set the field enable jumbo frames to True .
- To create a firewall endpoint that supports jumbo frames up to 8,500 bytes in size, use the optional --enable-jumbo-frames flag.
- Click Create . gcloud To create a firewall endpoint, use the gcloud network-security firewall-endpoints create command : gcloud network-security firewall-endpoints create NAME \ --organization ORGANIZATION ID \ --zone ZONE \ --enable-jumbo-frames \ --billing-project BILLING PROJECT ID Replace the following: NAME : the name of the firewall endpoint.
- Note: You cannot reconfigure an existing endpoint to add or remove support for jumbo frames.

### "Firewall endpoint overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create a firewall endpoint that processes jumbo frames up to 8,500 bytes in size.
- To perform Layer 7 inspection successfully, configure the VPC networks associated with the endpoint to follow these MTU limits: For an endpoint with jumbo frame support, make sure the VPC networks use an MTU of 8,500 bytes or less.
- A firewall endpoint with jumbo frame support can accept packets up to 8,500 bytes.
- Firewall endpoints can process up to 2 Gbps of traffic with Transport Layer Security (TLS) inspection, and 10 Gbps of traffic without TLS inspection.

### "Configure the URL filtering service \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table describes which roles are necessary for each step: Ability Necessary role Create a firewall endpoint and a firewall endpoint association for a Virtual Private Cloud (VPC) network Any of the following roles: Compute Network Admin role ( roles/compute.networkAdmin ) Firewall Endpoint Admin role ( roles/networksecurity.firewallEndpointAdmin ) These roles contain the following permission to create a firewall endpoint: networksecurity.firewallEndpoints.create In addition, these roles contain the following permissions to create a firewall endpoint association: networksecurity.firewallEndpointAssociations.create networksecurity.firewallEndpoints.use on the organization where the firewall endpoint is created Create a URL filtering security profile, a threat prevention security profile, and a security profile group Security Profile Admin role ( roles/networksecurity.securityProfileAdmin ) This role contains the following required permissions: networksecurity.securityProfileGroups.create to create a security profile group networksecurity.securityProfiles.create to create a URL filtering security profile or a threat prevention security profile Create a hierarchical firewall policy and its rules Compute Organization Firewall Policy Admin role ( roles/compute.orgFirewallPolicyAdmin ) You need this role to create a hierarchical firewall policy.
- A firewall endpoint with jumbo frame support can accept packets only up to 8,500 bytes.
- A firewall endpoint with jumbo frame support can accept packets only up to 8,500 bytes.
- To enable the URL filtering service in your network, you must set up multiple Cloud Next Generation Firewall components, including firewall endpoints, security profiles, and security profile groups.

### "ListFirewallEndpointsResponse \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Message for response to listing Endpoints JSON representation { "firewallEndpoints" : [ { object ( FirewallEndpoint ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields firewallEndpoints[] object ( FirewallEndpoint ) The list of Endpoint nextPageToken string A token identifying a page of results the server should return. unreachable[] string Locations that could not be reached.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-24 UTC."],[],[]]
- Home Documentation Networking Cloud NGFW Reference Send feedback ListFirewallEndpointsResponse Stay organized with collections Save and categorize content based on your preferences.
- For details, see the Google Developers Site Policies .

