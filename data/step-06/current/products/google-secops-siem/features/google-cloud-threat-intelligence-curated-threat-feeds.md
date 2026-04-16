---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.662Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Google Cloud Threat Intelligence curated threat feeds"
feature_slug: "google-cloud-threat-intelligence-curated-threat-feeds"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
keywords:
  - "threat"
  - "intelligence"
  - "curated"
  - "feeds"
  - "chronicle"
  - "now"
  - "uses"
  - "add"
---

# Google Cloud Threat Intelligence curated threat feeds

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle now uses curated Google Cloud Threat Intelligence threat feeds to add investigative context.

## Extended Definition

Chronicle now uses curated Google Cloud Threat Intelligence threat feeds to add investigative context.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)

## Supporting Pages

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.
- These fields, combined with prioritization features from Mandiant Threat Intelligence, help determine priority levels, such as Active breach, High, or Medium: network.direction security result.[]action event count (active breach IP address only) For IP address indicators, the network.direction is required.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.
- It continually analyzes and evaluates your security telemetry against Indicators of Compromise (IoCs) curated by Mandiant threat intelligence.
- To use Applied Threat Intelligence, do the following: Enable the Applied Threat Intelligence curated detections .

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference-required-1`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- Specifically, threat intelligence data is more limited in product editions other than Enterprise Plus because they don't include full access to Mandiant and VirusTotal.
- Investigate further by asking Gemini to create queries to look for specific indicators of compromise (IOCs) referenced in the threat intelligence reports.
- Example: Threat intelligence and security questions Help me hunt for APT 44 Are there any known attacker tools that use RDP to brute force logins?

