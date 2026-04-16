---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.486Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Firewall Insights shadowed rule insights"
feature_slug: "firewall-insights-shadowed-rule-insights"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging"
keywords:
  - "firewall"
  - "insights"
  - "shadowed"
  - "rule"
  - "shows"
  - "for"
  - "hierarchical"
  - "policies"
---

# Firewall Insights shadowed rule insights

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Firewall Insights shows shadowed rule insights for hierarchical firewall policies and global network firewall policies.

## Extended Definition

Firewall Insights shows shadowed rule insights for hierarchical firewall policies and global network firewall policies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- For firewall policies , you can get insights into firewall rules that are associated with a firewall policy.
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- With these insights, you can perform the following tasks: Identify firewall misconfigurations for firewall rules containing IPv4 or IPv6 address ranges.

### "Best practices for Cloud Network Insights \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Best practices for Cloud Network Insights Stay organized with collections Save and categorize content based on your preferences.
- Enable in a dedicated Google Cloud project While you can enable Cloud Network Insights in any Google Cloud project, we recommend creating a new, dedicated project for enabling Cloud Network Insights.
- For example, create an alarm rule with a Minor severity level in AppNeta and a second alarm rule with a Major severity level.
- Use multiple severities when creating alarm rules When creating alarm rules, define multiple rules for the same metric.

### "Create and configure monitoring policies \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single monitoring policies : An individual set of rules for defining a specific monitoring scenario.
- Web paths measure app responsiveness, including the following: DNS resolution time TCP/TLS handshake time HTTP status codes (for example, 200 OK or 503 Service Unavailable ) You can set web monitoring policies to emulate user behaviors in the browser using Selenium scripts or to emulate API calls through HTTP or HTTPS requests.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Create and configure monitoring policies Stay organized with collections Save and categorize content based on your preferences.
- Types of monitoring Cloud Network Insights supports two types of monitoring policies: network monitoring (network paths) and web monitoring (web paths).

### "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights logs use one of the following for logName : Alarm logs - networkmanagement.googleapis.com/insights alarm Event logs - networkmanagement.googleapis.com/insights event For more information, see Build and save queries by using the Logging query language .
- This page provides information about how Cloud Network Insights integrates with AppNeta for alarm generation and how these alarms are sent to Google Cloud for analysis, viewing, and alert policy creation.
- Event Logs Log Name : networkmanagement.googleapis.com/insights event Trigger : Generated when a structural change occurs (for example, Route Change , MTU Change , or Monitoring Point Offline ).
- View logs in Google Cloud Cloud Network Insights exports detailed logs in Cloud Logging to help you analyze and troubleshoot network performance and significant events.

