---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:48.437Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "GKE IP masquerade configuration insights"
feature_slug: "gke-ip-masquerade-configuration-insights"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control"
keywords:
  - "gke"
  - "ip"
  - "masquerade"
  - "configuration"
  - "insights"
  - "network"
  - "analyzer"
  - "includes"
---

# GKE IP masquerade configuration insights

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Network Analyzer includes an insight that flags when a GKE cluster's pod CIDR range is missing from the ip-masq-agent ConfigMap.

## Extended Definition

Network Analyzer includes an insight that flags when a GKE cluster's pod CIDR range is missing from the ip-masq-agent ConfigMap.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)

## Supporting Pages

### Network Analyzer overview | Network Intelligence Center - Network Analyzer | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Analyzer overview Network Intelligence Center - Network Analyzer Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview Network Analyzer automatically monitors your Virtual Private Cloud (VPC) network configurations and detects misconfigurations and suboptimal configurations.
- It provides insights about network topology, firewall rules, routes, configuration ...

### Cloud Network Insights overview | Network Intelligence Center - Cloud Network Insights | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights overview Network Intelligence Center - Cloud Network Insights Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview Cloud Network Insights uses active synthetic probing to monitor these complex paths from the perspective of the user or the application, allowing you to monitor network routes even when no user traffic is present.

### Roles and permissions | Network Intelligence Center - Cloud Network Insights | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Roles and permissions Network Intelligence Center - Cloud Network Insights Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control For a detailed description of IAM, see the Identity and Access Management documentation.
- You might need to run the add-iam-policy command in the Google Cloud CLI to grant Cloud Network Insights roles to users.

