---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.489Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Firewall Insights custom refresh cycle for shadowed rule insights"
feature_slug: "firewall-insights-custom-refresh-cycle-for-shadowed-rule-insights"
latest_feature_date: "2022-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
keywords:
  - "firewall"
  - "insights"
  - "custom"
  - "refresh"
  - "cycle"
  - "for"
  - "shadowed"
  - "rule"
---

# Firewall Insights custom refresh cycle for shadowed rule insights

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Firewall Insights can schedule a custom cycle to refresh shadowed rule insights.

## Extended Definition

Firewall Insights can schedule a custom cycle to refresh shadowed rule insights.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- With these insights, you can perform the following tasks: Identify firewall misconfigurations for firewall rules containing IPv4 or IPv6 address ranges.
- You can get the following insights: Shadowed firewall rule insights, which are derived from data about how you have configured your firewall rules.

### "Best practices for Cloud Network Insights \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Best practices for Cloud Network Insights Stay organized with collections Save and categorize content based on your preferences.
- Enable in a dedicated Google Cloud project While you can enable Cloud Network Insights in any Google Cloud project, we recommend creating a new, dedicated project for enabling Cloud Network Insights.
- For example, create an alarm rule with a Minor severity level in AppNeta and a second alarm rule with a Major severity level.
- Use multiple severities when creating alarm rules When creating alarm rules, define multiple rules for the same metric.

### "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights logs use one of the following for logName : Alarm logs - networkmanagement.googleapis.com/insights alarm Event logs - networkmanagement.googleapis.com/insights event For more information, see Build and save queries by using the Logging query language .
- This page provides information about how Cloud Network Insights integrates with AppNeta for alarm generation and how these alarms are sent to Google Cloud for analysis, viewing, and alert policy creation.
- Event Logs Log Name : networkmanagement.googleapis.com/insights event Trigger : Generated when a structural change occurs (for example, Route Change , MTU Change , or Monitoring Point Offline ).
- View logs in Google Cloud Cloud Network Insights exports detailed logs in Cloud Logging to help you analyze and troubleshoot network performance and significant events.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Features and benefits Cloud Network Insights provides the following benefits: Proactive detection : Identify network and application performance issues with synthetic testing, often before they impact users.
- Cloud Network Insights provides hop-by-hop visualizations of network paths and exports telemetry data to Google Cloud Observability for alerting and dashboards.

