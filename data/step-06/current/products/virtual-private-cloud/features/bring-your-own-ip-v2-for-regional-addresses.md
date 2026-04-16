---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.456Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Bring Your Own IP v2 for regional addresses"
feature_slug: "bring-your-own-ip-v2-for-regional-addresses"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints"
keywords:
  - "bring"
  - "your"
  - "own"
  - "ip"
  - "v2"
  - "for"
  - "regional"
  - "addresses"
---

# Bring Your Own IP v2 for regional addresses

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Bring Your Own IP v2 for regional addresses reached general availability.

## Extended Definition

Bring Your Own IP v2 for regional addresses reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Anyone who has the appropriate IAM permissions in the project can use the IP addresses: compute.addresses. for regional IP addresses compute.globalAddresses. for global IP addresses Bring your own IP configurations The following tables summarize the available bring your own IP configurations.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- Bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IP addresses for Google Cloud resources.
- Overview To bring your own IP addresses to Google, you complete the following steps: Create a public advertised prefix (PAP), a resource that represents the IP prefix that you are bringing to Google Cloud.

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Planning for bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IPv4 addresses for Google Cloud resources.
- Here are some decisions that should be considered when you plan your deployment: Who is responsible for administering BYOIP addresses?
- Prefix type Prefix Scope Public advertised prefix 203.0.113.0/24 Public delegated prefix 203.0.113.0/28 us-central1 Public delegated prefix 203.0.113.16/28 us-east-4 Public advertised prefix for global load balancers 192.0.2.0/24 Public delegated prefix 192.0.2.0/28 global The remaining IP addresses are reserved for future use.
- For example, if you need some IP addresses in us-central1 and some IP addresses for global load balancers, and you want to reserve some IP addresses for the future, you should create the following plan.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.
- Bring your own IP (BYOIP) Static BYOIP IP addresses The number of bring your own IP regional external IP addresses that you can reserve in each region in your project.
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- Internal IP addresses Internal IP addresses The number of static regional internal IPv4 addresses that you can reserve in each region in your project.

### "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- DESCRIPTION : a description for your zone REP DNS NAME : the DNS suffix for your zone; use the target regional endpoint hostname—for example, spanner.me-central2.rep.googleapis.com VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone API Send a POST request using the managedZones.create method: HTTP method and URL: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones Request JSON body: { "name": " ZONE NAME ", "dnsName": " REP DNS NAME .", "description": " DESCRIPTION ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " NETWORK 1 URL " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " NETWORK 2 URL " } ] } } Replace the following: PROJECT ID : the project ID of the DNS zone.
- The following example request tests that an endpoint with IP address 192.168.1.100 can request the Cloud Spanner API discovery document from the regional endpoint in me-central2 . curl --connect-to spanner.me-central2.rep.googleapis.com:443:192.168.1.100:443 \ 'https://spanner.me-central2.rep.googleapis.com/$discovery/rest?version=v1' Create a private DNS entry for the endpoint You must create private DNS entries so that clients can direct requests to your Private Service Connect endpoint.
- To verify an IPv4 endpoint, do the following: curl --connect-to REP DNS NAME :443: ADDRESS :443 \ 'https:// REP DNS NAME / PATH ' To verify an IPv6 endpoint, do the following: curl -6 --connect-to REP DNS NAME :443:[ ADDRESS ]:443 \ 'https:// REP DNS NAME / PATH ' Replace the following: REP DNS NAME : the public DNS name of the target regional endpoint—for example, spanner.me-central2.rep.googleapis.com .
- Roles To get the permissions that you need to create a regional Private Service Connect endpoint, ask your administrator to grant you the following IAM roles on your VPC network: Compute Network Admin role ( roles/compute.networkAdmin ) DNS Administrator role ( roles/dns.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

