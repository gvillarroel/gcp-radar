---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.455Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 Bring Your Own IP (BYOIP)"
feature_slug: "ipv6-bring-your-own-ip-byoip"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "ipv6"
  - "bring"
  - "your"
  - "own"
  - "ip"
  - "byoip"
  - "adds"
  - "for"
---

# IPv6 Bring Your Own IP (BYOIP)

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for using customer-owned public IPv6 addresses in Google Cloud, including use with external passthrough Network Load Balancers.

## Extended Definition

Adds support for using customer-owned public IPv6 addresses in Google Cloud, including use with external passthrough Network Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IP addresses for Google Cloud resources.
- Anyone who has the appropriate IAM permissions in the project can use the IP addresses: compute.addresses. for regional IP addresses compute.globalAddresses. for global IP addresses Bring your own IP configurations The following tables summarize the available bring your own IP configurations.
- For more information about provisioning time, see Bring your own IP configurations .
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Planning for bring your own IP addresses Bring your own IP addresses (BYOIP) lets you provision and use your own public IPv4 addresses for Google Cloud resources.
- Here are some decisions that should be considered when you plan your deployment: Who is responsible for administering BYOIP addresses?
- BYOIP address administration without an organization If you use a project that does not belong to an organization, you can't create a separate project for BYOIP address administration.
- It is likely that you want to use your BYOIP addresses in different projects.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Add a subnet that uses an IPv6 BYOIP address range Bring your own IP addresses (BYOIP) lets you import global unicast address (GUA) ranges that you can assign to a subnet's internal or external IPv6 address range.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.
- If you want to use BYOIP to bring your own IPv6 addresses, see Assign subnet ranges instead.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.
- Bring your own IP (BYOIP) Static BYOIP IP addresses The number of bring your own IP regional external IP addresses that you can reserve in each region in your project.
- Task Required role Check quotas for a project One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Viewer ( roles/servicemanagement.quotaViewer ) Modify quotas, request additional quota One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Administrator ( roles/servicemanagement.quotaAdmin ) A custom role with the serviceusage.quotas.update permission Check your quota Console In the Google Cloud console, go to the Quotas page.
- Limit name: VARIABLE-IPV6-PUBLIC-DELEGATED-PREFIXES-per-project-region Metric: compute.googleapis.com/regional variable prefix length public delegated prefixes Private Service Connect PSC internal LB forwarding rules The maximum number of Private Service Connect endpoints (forwarding rules) that a service consumer can create to connect to producer services.

