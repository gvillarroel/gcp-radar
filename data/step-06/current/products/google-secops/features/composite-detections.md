---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.933Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Composite detections"
feature_slug: "composite-detections"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "composite"
  - "detections"
  - "link"
  - "multiple"
  - "yara"
  - "rules"
  - "to"
  - "detect"
---

# Composite detections

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Composite detections link multiple YARA-L rules to detect complex, multistage threats; Composite detections let users link multiple YARA-L rules to detect complex multistage threats.

## Extended Definition

Composite detections link multiple YARA-L rules to detect complex, multistage threats; Composite detections let users link multiple YARA-L rules to detect complex multistage threats.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- Based on this evaluation, you can use composite rules to create new detections to be used as an intermediary representation for investigation, and alerting with a subsequent rule.
- Enhance detections with the function library You can use the YARA-L function library at strategic points within a composite rule to increase signal and add more complex logic.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Composite detections lets users link multiple YARA-L rules to detect complex, multistage threats.
- Composite detections lets you link multiple YARA-L rules to detect complex, multistage threats.
- The following rules have been added to the rule pack: Dangerous Download with Matching Hashes by multiple users in Chrome Management GTI High Severity File Download Event in Chrome Management GTI Medium Severity File Download Event in Chrome Management GTI Low Severity File Download Event in Chrome Management Safe-browsing High Severity File Download Event in Chrome Management Multiple Dangerous Download Events by same user in Chrome Management Url Event to Newly Created Domain in Chrome Management Feature Composite detections are now generally available The composite detections feature is now in General Availability.
- Risk Analytics also provides both predefined curated detections and YARA-L metric functions for authoring custom rules.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Composite detections lets users link multiple YARA-L rules to detect complex, multistage threats.
- Composite detections lets you link multiple YARA-L rules to detect complex, multistage threats.
- The following rules have been added to the rule pack: Dangerous Download with Matching Hashes by multiple users in Chrome Management GTI High Severity File Download Event in Chrome Management GTI Medium Severity File Download Event in Chrome Management GTI Low Severity File Download Event in Chrome Management Safe-browsing High Severity File Download Event in Chrome Management Multiple Dangerous Download Events by same user in Chrome Management Url Event to Newly Created Domain in Chrome Management Feature Composite detections are now generally available The composite detections feature is now in General Availability.
- May 23, 2023 Fixed Single event rules meeting all of the following conditions have been reclassified as multiple event rules to increase detections: Includes a match section.

