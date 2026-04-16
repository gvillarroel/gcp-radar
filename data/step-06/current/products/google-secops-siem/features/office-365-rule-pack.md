---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.564Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Office 365 rule pack"
feature_slug: "office-365-rule-pack"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
keywords:
  - "office"
  - "365"
  - "rule"
  - "pack"
  - "curated"
  - "detections"
  - "now"
  - "includes"
---

# Office 365 rule pack

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Curated Detections now includes a rule pack covering Office 365 threats.

## Extended Definition

Curated Detections now includes a rule pack covering Office 365 threats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)

## Supporting Pages

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.
- Google SecOps provides default parsers that parse and normalize raw logs to create UDM records with data required by composite and curated detection rule sets.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Open the curated detections page and rule sets To open the curated detections page, complete the following steps: Select Rules from the main menu.
- Figure 2: Curated Detections dashboard The Curated Detections dashboard displays each of the rule sets available to your Google SecOps account.
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- Configure rule exclusions To manage the volume of alerts from GCTI curated detections, you can configure rule exclusions.

