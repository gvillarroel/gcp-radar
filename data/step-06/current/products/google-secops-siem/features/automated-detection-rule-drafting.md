---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.518Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Automated detection rule drafting"
feature_slug: "automated-detection-rule-drafting"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
keywords:
  - "automated"
  - "detection"
  - "rule"
  - "drafting"
  - "when"
  - "emerging"
  - "threats"
  - "finds"
---

# Automated detection rule drafting

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

When Emerging Threats finds a coverage gap, Gemini can automatically draft new detection rules.

## Extended Definition

When Emerging Threats finds a coverage gap, Gemini can automatically draft new detection rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)

## Supporting Pages

### "Emerging Threats Center detail view \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Emerging Threats Center detailed view includes the following panels: Associated Rules Disabled Rules Recent Associated Entities IOCs Associated Rules Note: Coverage analysis applies only to Endpoint Detection and Response (EDR) data sources.
- Rule set Identifies the rule source, such as Mandiant Frontline Threats, Mandiant Hunt Rules, or Mandiant Intel Emerging Threats .
- Automatically highlight detection coverage : The system runs the simulated log events against the Google Cloud Threat Intelligence (GCTI) curated detection rules and coverage reports that show where Google SecOps has detections and where gaps exist.
- The Associated Rules panel lists detection rules related to the selected campaign and includes a MITRE ATT&CK matrix visualization that shows your rule coverage for specific tactics, techniques, and procedures (TTPs).

### "Emerging Threats Center \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Emerging Threats Center provides a curated view of the most critical global threats from GTI that pose risks to your environment, including IoCs, detection matches, and affected entities.
- Emerging Threats Center Supported in: Google secops SIEM The Emerging Threats Center in Google Security Operations provides AI-powered threat intelligence that helps you understand how current and emerging threat campaigns might affect your organization.
- Note: The Emerging Threats Center feed displays only threat collections that have been updated within the past year, ensuring that you always work with up-to-date intelligence.
- Emerging Threats Center feed The Emerging Threats Center feed in Google SecOps displays real-time AI-informed threat intelligence from Google Threat Intelligence (GTI).

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Retro hunts When you run a rule against historical data using a retro hunt, the system only creates the detection after the retro hunt process finishes.
- Expected delays : These delays result from the ingestion process and the configuration choices you make when setting up the detection rule.
- When scheduled rules run again, the system can create new detections based on updated reference list contents.
- When the rule runs again, it now matches, and the system creates a detection.

