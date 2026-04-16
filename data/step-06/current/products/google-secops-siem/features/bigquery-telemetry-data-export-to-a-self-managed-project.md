---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.603Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "BigQuery telemetry data export to a self-managed project"
feature_slug: "bigquery-telemetry-data-export-to-a-self-managed-project"
latest_feature_date: "2024-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "bigquery"
  - "telemetry"
  - "export"
  - "self"
  - "managed"
  - "project"
  - "customers"
  - "can"
---

# BigQuery telemetry data export to a self-managed project

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Customers can export telemetry data to their own BigQuery instance in preview.

## Extended Definition

Customers can export telemetry data to their own BigQuery instance in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Configure a data export to BigQuery in a self-managed Google Cloud project .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.
- Other customers can use their own BigQuery instance to export telemetry data, a feature currently in preview.
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- What browser activities are present on Unmanaged or Bring-Your-Own Devices (BYOD) An employee working remotely on their personal laptop, accesses company resources through the Chrome browser to work on a project.
- For existing Google Security customers: If you are already leveraging the power of any of the individual product components within our security portfolio, we can seamlessly upgrade you to the complete Google Unified Security package.
- Examples SCC-E customers have immediate access to several key AI Protection capabilities: Model Armor : Protects against prompt injection, data loss, and offensive content,through prompt and response screening.
- Using browser extension telemetry a security analyst can determine how many users have installed this extension and take remediation actions to remove it from their devices.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- CDIR SCC Enhanced Exfiltration : Contains context-aware rules that correlate Security Command Center Exfiltration findings with other log sources, including Cloud Audit Logs logs, Sensitive Data Protection context, BigQuery context and Security Command Center Misconfiguration logs.

