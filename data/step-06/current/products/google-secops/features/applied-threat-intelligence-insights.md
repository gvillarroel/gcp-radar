---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.870Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Applied Threat Intelligence insights"
feature_slug: "applied-threat-intelligence-insights"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
keywords:
  - "applied"
  - "threat"
  - "intelligence"
  - "insights"
  - "provides"
  - "curated"
  - "into"
  - "associations"
---

# Applied Threat Intelligence insights

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Applied Threat Intelligence provides curated insights into associations between indicators, threat actors, campaigns, and malware.

## Extended Definition

Applied Threat Intelligence provides curated insights into associations between indicators, threat actors, campaigns, and malware.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)

## Supporting Pages

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Centralized Investigation: The IOC Matches page serves as the central hub for viewing matched IOCs, filtering results (by Type, Priority, Status, Source: Mandiant, etc.), and drilling down into event details, UDM context, threat intelligence rationale, and associations.
- Getting Started Enable Curated Detections: Activate the Applied Threat Intelligence curated detections rule packs within Google SecOps to enable alerting and prioritization.
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use Applied Threat Intelligence, do the following: Enable the Applied Threat Intelligence curated detections .
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.

