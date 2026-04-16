---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.484Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Firewall Insights obsolete allow rules insight"
feature_slug: "firewall-insights-obsolete-allow-rules-insight"
latest_feature_date: "2023-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging"
keywords:
  - "firewall"
  - "insights"
  - "obsolete"
  - "allow"
  - "rules"
  - "insight"
  - "identifies"
  - "that"
---

# Firewall Insights obsolete allow rules insight

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Firewall Insights identifies allow rules that are unlikely to be active based on usage patterns and adaptive analysis.

## Extended Definition

Firewall Insights identifies allow rules that are unlikely to be active based on usage patterns and adaptive analysis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overly permissive rule insights, including each of the following: Allow rules with no hits Allow rules that are obsolete based on adaptive analysis Allow rules with unused attributes Allow rules with overly permissive IP addresses or port ranges Deny rule insights with no hits during the observation period .
- For example, Firewall Insights identifies rules that it classifies as overly permissive.
- Insights help you identify firewall rules that overlap existing rules, rules with no hits, and unused firewall rule attributes such as IP address and port ranges.
- With Firewall Insights metrics, you can perform the following tasks: Verify that firewall rules are used in an intended way.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Cloud Network Insights uses active synthetic probing to monitor these complex paths from the perspective of the user or the application, allowing you to monitor network routes even when no user traffic is present.
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.
- Cloud Network Insights uses active synthetic probing to monitor these complex paths from the perspective of the user or the application, allowing you to monitor network routes even when no user traffic is present.
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.

### "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Network Insights logging tracks when the metrics collected by Monitoring Points violate thresholds you configure with alarm rules in AppNeta.
- Cloud Network Insights logs use one of the following for logName : Alarm logs - networkmanagement.googleapis.com/insights alarm Event logs - networkmanagement.googleapis.com/insights event For more information, see Build and save queries by using the Logging query language .
- This page provides information about how Cloud Network Insights integrates with AppNeta for alarm generation and how these alarms are sent to Google Cloud for analysis, viewing, and alert policy creation.
- Event Logs Log Name : networkmanagement.googleapis.com/insights event Trigger : Generated when a structural change occurs (for example, Route Change , MTU Change , or Monitoring Point Offline ).

