---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.582Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Download Cloud Function Code"
feature_slug: "download-cloud-function-code"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/downloading-events"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "download"
  - "code"
  - "hacktool"
  - "rule"
  - "detects"
  - "exfiltration"
  - "downloading"
---

# Download Cloud Function Code

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects exfiltration by downloading Cloud Function code.

## Extended Definition

This Cloud Hacktool rule detects exfiltration by downloading Cloud Function code.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- Create or identify the input rules : For each stage of the threat scenario, create or identify an input rule that detects the specific activity.
- Example : Correlating a detection from a Malware Downloaded rule with a subsequent detection from a C2 Beaconing Detected rule.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- CDIR SCC Enhanced Exfiltration : Contains context-aware rules that correlate Security Command Center Exfiltration findings with other log sources, including Cloud Audit Logs logs, Sensitive Data Protection context, BigQuery context and Security Command Center Misconfiguration logs.

### Download events \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display and download events Complete the following steps to display and download the events associated with a detection: In the navigation bar, click Detection > Rules & Detections .
- Note: The Download as CSV option is only available for multi-event rules.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

