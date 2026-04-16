---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.552Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "BindPlane agent logging and health dashboard widget"
feature_slug: "bindplane-agent-logging-and-health-dashboard-widget"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial"
keywords:
  - "bindplane"
  - "agent"
  - "logging"
  - "health"
  - "dashboard"
  - "widget"
  - "visualizes"
  - "activity"
---

# BindPlane agent logging and health dashboard widget

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

A dashboard widget visualizes BindPlane agent logging activity and agent health.

## Extended Definition

A dashboard widget visualizes BindPlane agent logging activity and agent health.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Verify the ingestion of Azure data The Google SecOps Data Ingestion and Health dashboard lets you see information about the type, volume, and health of all data being ingested into Google SecOps using SIEM ingestion features.
- AWS - Logging and Monitoring : Detects AWS activity related to the disabling of logging and monitoring services, including CloudTrail, CloudWatch, and GuardDuty.
- Azure - Logging and Monitoring : Detects activity related to the disabling of logging and monitoring services within Azure.
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- Reduce alert fatigue by only triggering a final alert when a noisy, low-confidence detection occurs multiple times or in combination with other suspicious activity.
- Create or identify the input rules : For each stage of the threat scenario, create or identify an input rule that detects the specific activity.

### "Google Agentic SOC trial details \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Eligibility The Google Agentic SOC trial is available for customers with an active subscription to one of the following Google SecOps packages: Enterprise Enterprise Plus Google Unified Security (GUS) Tokens are granted on a per-subscription basis and may not be pooled, banked, or transferred between your different eligible subscriptions.
- Google Agentic SOC trial details The Triage and Investigation Agent (TIN) is an agentic AI feature for Google Security Operations that helps automate security investigations.
- For more information on TIN, see Use Triage and Investigation Agent to investigate alerts .

