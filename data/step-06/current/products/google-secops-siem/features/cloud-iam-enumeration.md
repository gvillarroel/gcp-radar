---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.576Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Cloud IAM Enumeration"
feature_slug: "cloud-iam-enumeration"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "iam"
  - "enumeration"
  - "hacktool"
  - "rule"
  - "detects"
  - "activity"
  - "against"
  - "resources"
---

# Cloud IAM Enumeration

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects enumeration activity against Google Cloud IAM resources.

## Extended Definition

This Cloud Hacktool rule detects enumeration activity against Google Cloud IAM resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Cloud Hacktool : Activity detected from known offensive security platforms or from offensive tools or software used in the wild by threat actors that specifically target cloud resources.
- Azure - Data : Detects activity associated with data resources, including Azure blob permissions, modifications, and invitations to external users to use Azure services on the tenant.
- Serverless Threats : Detects activity associated with potential compromise or abuse of Serverless resources in Google Cloud, including Cloud Run and Cloud Run functions.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Strengthening Endpoint Security: Integrated protection with Google Chrome Enterprise Premium & Google SecOps Chrome Enterprise Premium (CEP) integration with Google SecOps provides critical visibility into threats originating from browser activity to strengthen your endpoint security posture.
- Measure effectiveness of Data Loss Prevention (DLP) policies An administrator can measure the effectiveness of DLP rules by reviewing aggregate data to ensure that “block” and “warn” policies applied through Chrome are addressing threats and not preventing legitimate work.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Create or identify the input rules : For each stage of the threat scenario, create or identify an input rule that detects the specific activity.
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- When you use the Test rule feature on a composite rule, it only runs against pre-existing detections that match the rule's input criteria.
- Manage rule quotas and risk scores To manage your organization's resources, understand how different rule types impact your rule quota.

