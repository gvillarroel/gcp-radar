---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.869Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Applied Threat Intelligence indicator matching"
feature_slug: "applied-threat-intelligence-indicator-matching"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view"
keywords:
  - "applied"
  - "threat"
  - "intelligence"
  - "indicator"
  - "matching"
  - "curated"
  - "detections"
  - "use"
---

# Applied Threat Intelligence indicator matching

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Curated detections use augmented prioritization, customer-context noise reduction, and correlation techniques for sophisticated indicator matching.

## Extended Definition

Curated detections use augmented prioritization, customer-context noise reduction, and correlation techniques for sophisticated indicator matching.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)

## Supporting Pages

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Tuning alerts returned by Applied Threat Intelligence category You can reduce the number of detections a rule or rule set generates using rule exclusions .
- These fields, combined with prioritization features from Mandiant Threat Intelligence, help determine priority levels, such as Active breach, High, or Medium: network.direction security result.[]action event count (active breach IP address only) For IP address indicators, the network.direction is required.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use Applied Threat Intelligence, do the following: Enable the Applied Threat Intelligence curated detections .
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.
- It continually analyzes and evaluates your security telemetry against Indicators of Compromise (IoCs) curated by Mandiant threat intelligence.

### "Emerging Threats Center detail view \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatically highlight detection coverage : The system runs the simulated log events against the Google Cloud Threat Intelligence (GCTI) curated detection rules and coverage reports that show where Google SecOps has detections and where gaps exist.
- It automates campaign discovery, enrichment, and correlation through the following processes: Ingest campaign intelligence : The system automatically collects campaign intelligence from Google Threat Intelligence, which includes data from global research, Mandiant incident response engagements, and Mandiant Managed Defense telemetry.
- When you select a threat in the feed, the system opens a page that combines information from Google Threat Intelligence with data from your environment to help you analyze threat impact and coverage.
- Click the rule name to open a detailed view that describes the rule's logic, configuration, and associated rule set, similar to the view on the Curated Detections page.

