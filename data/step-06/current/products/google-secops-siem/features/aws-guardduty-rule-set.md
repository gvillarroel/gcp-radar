---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.588Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "AWS GuardDuty rule set"
feature_slug: "aws-guardduty-rule-set"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
keywords:
  - "aws"
  - "guardduty"
  - "rule"
  - "set"
  - "threat"
  - "detections"
  - "added"
  - "three"
---

# AWS GuardDuty rule set

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Cloud Threat Detections added three new rules to the AWS GuardDuty rule set.

## Extended Definition

Cloud Threat Detections added three new rules to the AWS GuardDuty rule set.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Tuning alerts returned by Applied Threat Intelligence category You can reduce the number of detections a rule or rule set generates using rule exclusions .
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- The Inbound IP Address Authentication rule set uses three UDM fields that could be used for tuning alerts from this rule set: principal.ip principal.asset.ip src.ip Need more help?

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.
- To ensure these rules produce alerts, you must enable Applied Threat Intelligence rule packs, such as "Active Breach", "High", or "Medium".
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.

