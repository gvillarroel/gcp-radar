---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.572Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Medium Priority rule set"
feature_slug: "medium-priority-rule-set"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
keywords:
  - "medium"
  - "priority"
  - "rule"
  - "set"
  - "applied"
  - "threat"
  - "intelligence"
  - "adds"
---

# Medium Priority rule set

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Applied Threat Intelligence adds the Medium Priority rule set to expand prioritization logic to commodity malware.

## Extended Definition

Applied Threat Intelligence adds the Medium Priority rule set to expand prioritization logic to commodity malware.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)

## Supporting Pages

### "Applied Threat Intelligence priority overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Applied Threat Intelligence priority overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) alerts in Google Security Operations are IoC matches that have been contextualized by YARA-L rules using curated detection.
- Priority models are used in the curated detection rules provided in the Applied Threat Intelligence - Curated prioritization rule pack.
- Medium priority The Medium model prioritizes indicators identified by Google Threat Intelligence with a Malicious GTI Verdict and High GTI Severity, even if they weren't observed in Mandiant investigations.
- ATI priorities are provided in the Applied Threat Intelligence - Curated Prioritization rule pack, which is available in Google SecOps Managed Content with the Google SecOps Enterprise Plus license.

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- These fields, combined with prioritization features from Mandiant Threat Intelligence, help determine priority levels, such as Active breach, High, or Medium: network.direction security result.[]action event count (active breach IP address only) For IP address indicators, the network.direction is required.
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Medium Priority Network Indicators : Identifies network-related IoCs in event data using Mandiant Threat Intelligence and prioritizes them with the 'Medium' label.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- Applied Threat Intelligence overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) helps you identify and respond to threats.
- Important: Applied Threat Intelligence in Google SecOps is available with a Google SecOps Enterprise Plus license.

