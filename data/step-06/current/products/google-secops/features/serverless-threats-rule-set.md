---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.874Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Serverless Threats rule set"
feature_slug: "serverless-threats-rule-set"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view"
  - "https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category"
keywords:
  - "serverless"
  - "threats"
  - "rule"
  - "set"
  - "threat"
  - "detections"
  - "added"
  - "detecting"
---

# Serverless Threats rule set

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Cloud Threat Detections added a Serverless Threats rule set for detecting compromise or abuse of serverless resources such as Cloud Run and Cloud Functions.

## Extended Definition

Cloud Threat Detections added a Serverless Threats rule set for detecting compromise or abuse of serverless resources such as Cloud Run and Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- [https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- See Collect Google Workspace logs to ingest the following logs: WORKSPACE ALERTS WORKSPACE MOBILE WORKSPACE USERS Serverless Threats rule set Collect the data listed in the All rule sets section of this document.

### "Emerging Threats Center detail view \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Automatically highlight detection coverage : The system runs the simulated log events against the Google Cloud Threat Intelligence (GCTI) curated detection rules and coverage reports that show where Google SecOps has detections and where gaps exist.
- The Emerging Threats Center detailed view includes the following panels: Associated Rules Disabled Rules Recent Associated Entities IOCs Associated Rules Note: Coverage analysis applies only to Endpoint Detection and Response (EDR) data sources.
- Rule set Identifies the rule source, such as Mandiant Frontline Threats, Mandiant Hunt Rules, or Mandiant Intel Emerging Threats .
- Click the rule name to open a detailed view that describes the rule's logic, configuration, and associated rule set, similar to the view on the Curated Detections page.

### "Overview of Chrome Enterprise Premium Threats Category \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported devices and log types The rule sets in the Chrome Enterprise Premium Threats category require logs from the following Google Security Operations data sources: Chrome Management Logs ( CHROME MANAGEMENT ) To feed these logs to Google SecOps, follow the steps in Collect Google Chrome logs .
- This document provides an overview of the rule sets within the Chrome Enterprise Threats category, the required data sources, and configuration you can use to tune the alerts generated by each rule set.
- This category includes the following rule sets: Chrome Extension Threats : Detects activities related to Chrome extensions that could indicate malicious or suspicious behavior.
- Rule sets in the Chrome Enterprise Premium Threats category help identify threats in the Google Cloud environment using Chrome Enterprise Premium Management logs.

