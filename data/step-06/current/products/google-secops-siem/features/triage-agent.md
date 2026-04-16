---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.520Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Triage Agent"
feature_slug: "triage-agent"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial"
keywords:
  - "triage"
  - "agent"
  - "investigates"
  - "alerts"
  - "returns"
  - "disposition"
  - "summary"
  - "investigation"
---

# Triage Agent

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Triage Agent investigates alerts and returns a disposition, summary, and investigation timeline.

## Extended Definition

Triage Agent investigates alerts and returns a disposition, summary, and investigation timeline.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.

### "Google Agentic SOC trial details \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on TIN, see Use Triage and Investigation Agent to investigate alerts .
- Google Agentic SOC trial details The Triage and Investigation Agent (TIN) is an agentic AI feature for Google Security Operations that helps automate security investigations.
- Eligibility The Google Agentic SOC trial is available for customers with an active subscription to one of the following Google SecOps packages: Enterprise Enterprise Plus Google Unified Security (GUS) Tokens are granted on a per-subscription basis and may not be pooled, banked, or transferred between your different eligible subscriptions.
- You retain access to historical detections from investigations run during the trial, but you can't run new investigations.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- When data RBAC is enabled, only users with global data access can trigger and view Triage Agent investigations.
- It investigates security alerts to determine whether they are true or false positives and provides a summarized explanation for its assessment.
- Triage Agent The Triage Agent is an AI-powered assistant embedded in Google Security Operations.
- Can create and update global rules Yes No Detections Detections are alerts that signify potential security threats.

