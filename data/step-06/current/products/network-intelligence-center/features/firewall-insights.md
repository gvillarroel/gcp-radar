---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.492Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Firewall Insights"
feature_slug: "firewall-insights"
latest_feature_date: "2020-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights"
keywords:
  - "firewall"
  - "insights"
  - "is"
  - "network"
  - "analysis"
  - "in"
  - "intelligence"
  - "center"
---

# Firewall Insights

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Firewall Insights is a network firewall analysis feature in Network Intelligence Center; Firewall Insights analyzes firewall rules and traffic to surface network security insights.

## Extended Definition

Firewall Insights is a network firewall analysis feature in Network Intelligence Center; Firewall Insights analyzes firewall rules and traffic to surface network security insights.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 406
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Firewall Insights Guides Send feedback Firewall Insights overview Stay organized with collections Save and categorize content based on your preferences.
- Where you can view metrics and insights You can view Firewall Insights metrics and insights in the following Google Cloud console locations: On the Firewall Insights page On the details page for a VPC firewall rule On the details page for a VPC network interface In the Active Assist The Firewall Insights landing page in the Google Cloud console provides cards for all the insights.
- Overly permissive rule insights, including each of the following: Allow rules with no hits Allow rules that are obsolete based on adaptive analysis Allow rules with unused attributes Allow rules with overly permissive IP addresses or port ranges Deny rule insights with no hits during the observation period .
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 368
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Add Monitoring Points Stay organized with collections Save and categorize content based on your preferences.
- KVM Web Proxy Configuration VMWare Web Proxy Configuration Verify the install Open the Google Cloud console and navigate to Network Intelligence Center > Cloud Network Insights .
- The following environments are supported: Google Cloud VPC networks in the same or different projects Remote branch offices or retail locations On-premises data centers Other cloud environments, for example, AWS or Azure If you need help to determine where to install Monitoring Points to target strategic web application deployment, use VPC Flow Logs or vm flow metrics in a performance dashboard to understand where traffic is flowing in your network.
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.

### "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- Source ID: `site-iam-reference`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page provides information about how Cloud Network Insights integrates with AppNeta for alarm generation and how these alarms are sent to Google Cloud for analysis, viewing, and alert policy creation.
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Set up logging Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights logs use one of the following for logName : Alarm logs - networkmanagement.googleapis.com/insights alarm Event logs - networkmanagement.googleapis.com/insights event For more information, see Build and save queries by using the Logging query language .
- Event Logs Log Name : networkmanagement.googleapis.com/insights event Trigger : Generated when a structural change occurs (for example, Route Change , MTU Change , or Monitoring Point Offline ).

### "Enable Cloud Network Insights \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights)
- Source ID: `site-iam-reference`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Intelligence Center Cloud Network Insights Guides Enable Cloud Network Insights Stay organized with collections Save and categorize content based on your preferences.
- Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ): To enable Cloud Network Insights and editing permissions for Cloud Network Insights resources.
- Once Cloud Network Insights is enabled, a corresponding AppNeta instance is provisioned to provide telemetry data, more monitoring options, and to allow further configuration.
- Enable Cloud Network Insights Open the Google Cloud console and navigate to Network Intelligence > Cloud Network Insights .

