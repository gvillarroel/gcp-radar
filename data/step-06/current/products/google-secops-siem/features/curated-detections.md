---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.685Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Curated detections"
feature_slug: "curated-detections"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "curated"
  - "detections"
  - "provides"
  - "out"
  - "box"
  - "threat"
  - "detection"
  - "content"
---

# Curated detections

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Provides out-of-the-box threat detection content maintained by Google Cloud Threat Intelligence researchers.

## Extended Definition

Provides out-of-the-box threat detection content maintained by Google Cloud Threat Intelligence researchers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- The Curated Detection page provides information about each of the rule sets active for your Google SecOps account including the following: Last updated: Time GCTI last updated the rule set.
- Curated detections features The following are some of the key curated detections features: Curated Detection: curated detection created and managed by GCTI for Google SecOps customers.
- Open the curated detections page and rule sets To open the curated detections page, complete the following steps: Select Rules from the main menu.

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- Tuning alerts returned by Applied Threat Intelligence category You can reduce the number of detections a rule or rule set generates using rule exclusions .
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.

