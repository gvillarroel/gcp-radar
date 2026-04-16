---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.454Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Console effective routes view"
feature_slug: "vpc-console-effective-routes-view"
latest_feature_date: "2024-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "vpc"
  - "console"
  - "effective"
  - "routes"
  - "view"
  - "the"
  - "page"
  - "in"
---

# VPC Console effective routes view

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The VPC Routes page in Cloud Console now shows only effective routes by default and lets users view suppressed routes via a toggle and inspect suppression reasons.

## Extended Definition

The VPC Routes page in Cloud Console now shows only effective routes by default and lets users view suppressed routes via a toggle and inspect suppression reasons.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "Test connectivity within VPC networks \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM-to-VM trace through an inaccessible peered VPC network in a different project (click to enlarge) What's next Common test scenarios Learn about Connectivity Tests Troubleshoot Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud console screenshot for a trace that's blocked by a hierarchical firewall policy rule (click to enlarge) Test failures for Shared VPC networks In Shared VPC networks, not having permissions to the host project or the service project can cause the test failures listed in the following table.
- Because the host project owns network configurations, a trace against resources in the service project cannot proceed without access to VPC firewall rules, network routes, or IP addresses in the host project.
- Google Cloud console screenshot for VM-to-VM trace (click to enlarge) You can expand each of the cards in the trace path to view more detail.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Required role Check quotas for a project One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Viewer ( roles/servicemanagement.quotaViewer ) Modify quotas, request additional quota One of the following: Project Owner ( roles/owner ) Project Editor ( roles/editor ) Quota Administrator ( roles/servicemanagement.quotaAdmin ) A custom role with the serviceusage.quotas.update permission Check your quota Console In the Google Cloud console, go to the Quotas page.
- Quota name: STATIC ROUTES PER NETWORK Available metrics: compute.googleapis.com/quota/static routes per vpc network/limit compute.googleapis.com/quota/static routes per vpc network/usage compute.googleapis.com/quota/static routes per vpc network/exceeded Static routes per peering group From the perspective of all regions of a VPC network, the total number of static routes local to the VPC network and in its directly connected peers.
- Quota name: STATIC ROUTES PER PEERING GROUP Available metrics: compute.googleapis.com/quota/static routes per peering group/limit compute.googleapis.com/quota/static routes per peering group/usage Dynamic routes per region per peering group From the perspective of each region in a VPC network, the total number of dynamic routes local to the VPC network and in its directly connected peers.
- Quota name: PEERINGS PER NETWORK Available metrics: compute.googleapis.com/quota/peerings per network/limit compute.googleapis.com/quota/peerings per network/usage compute.googleapis.com/quota/peerings per network/exceeded Static and dynamic routes Static routes per network From the perspective of all regions of a VPC network, the total number of static routes local to the VPC network.

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- You can view Firewall Insights metrics by using Cloud Monitoring and the Google Cloud console.
- Optimize firewall rules and tighten security boundaries by identifying overly permissive allow rules and reviewing predictions about their future usage.
- For a complete list of criteria, see Specifications in the Firewall Rules Logging overview.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- On its VPC network details page, click the name of a subnet in the Subnets tab to view its Subnet details page. gcloud List subnets to determine the names and regions of existing subnets in your project.
- Go to VPC networks To view subnets, do one of the following: Click the name of a network, and then click the Subnets tab on the VPC network details page.
- On its VPC network details page, click the name of a subnet in the Subnets tab to view its Subnet details page.
- On its VPC network details page, click the name of a subnet in the Subnets tab to view its Subnet details page.

