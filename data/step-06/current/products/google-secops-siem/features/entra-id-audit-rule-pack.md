---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.597Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Entra ID Audit rule pack"
feature_slug: "entra-id-audit-rule-pack"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
keywords:
  - "entra"
  - "id"
  - "audit"
  - "rule"
  - "pack"
  - "curated"
  - "detections"
  - "added"
---

# Entra ID Audit rule pack

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Curated Detections added a Cloud Threats rule pack for Entra ID Audit.

## Extended Definition

Curated Detections added a Cloud Threats rule pack for Entra ID Audit.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Getting Started Enable Curated Detections: Activate the Applied Threat Intelligence curated detections rule packs within Google SecOps to enable alerting and prioritization.
- Getting Started with Google Chrome and Google SecOps Configure the Chrome Enterprise Premium Reporting Connector to send data to Google SecOps Connect Chrome Enterprise Premium to Google SecOps Enable Chrome Enterprise Threats Curated Detections Examples Investigating Malicious Browser Extensions A user downloads and installs a malicious browser extension from outside the Chrome Web Store, that once installed, reads their session cookies and posts them to a server on a suspicious domain that was registered within the last week.
- See Curated Detections Examples CDIR : An analyst receives a high priority CDIR SCC Enhanced Privilege Escalation alert (one of many driven by Cloud Threat Curated Detections ) that gets automatically mapped to a Google SecOps case.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Azure Cloud Services ( AZURE ACTIVITY ) Microsoft Entra ID , previously Azure Active Directory ( AZURE AD ) Microsoft Entra ID audit logs , previously Azure AD audit logs ( AZURE AD AUDIT ) Microsoft Defender for Cloud ( MICROSOFT GRAPH ALERT ) Microsoft Graph API Activity ( MICROSOFT GRAPH ACTIVITY LOGS ) Ingest Azure and Microsoft Entra ID data You must ingest data from every data source to have maximum rule coverage.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Open the curated detections page and rule sets To open the curated detections page, complete the following steps: Select Rules from the main menu.
- Figure 2: Curated Detections dashboard The Curated Detections dashboard displays each of the rule sets available to your Google SecOps account.
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- Configure rule exclusions To manage the volume of alerts from GCTI curated detections, you can configure rule exclusions.

