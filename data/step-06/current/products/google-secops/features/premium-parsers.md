---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.802Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Premium parsers"
feature_slug: "premium-parsers"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "premium"
  - "parsers"
  - "certain"
  - "high"
  - "volume"
  - "classified"
  - "receive"
  - "expedited"
---

# Premium parsers

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Certain high-volume parsers are classified as premium and receive expedited support.

## Extended Definition

Certain high-volume parsers are classified as premium and receive expedited support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Azure - Defender for Cloud : Identifies alerts received from context-aware Microsoft Defender for Cloud related to user behavior, credential access, cryptomining, discovery, evasion, execution, exfiltration, impact, initial access, malware, penetration testing, persistence, policy, privilege escalation, or unauthorized access across all Azure cloud services.
- Office 365 - Identity : Detects malicious, suspicious, and high-risk activities in Office 365 related to identity and access management, including potential token theft, risky authentication configurations, MFA attacks, password attacks, and known hacking tools.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Data Ingestion and Health dashboard The Data Ingestion and Health dashboard provides information about the type, volume, and health of data being ingested into your Google Security Operations SIEM tenant.
- Cloud Data Coverage : provides information about all available Google Cloud services, parsers that cover each service, first seen event, last seen event, and the total throughput.
- This dashboard provides visualizations that help you understand the volume of ingested logs, ingestion errors, and other relevant information.
- Cloud Detection and Response Overview dashboard Note: The Cloud Detection and Response dashboard requires Security Command Center Premium.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- See Curated Detections Examples CDIR : An analyst receives a high priority CDIR SCC Enhanced Privilege Escalation alert (one of many driven by Cloud Threat Curated Detections ) that gets automatically mapped to a Google SecOps case.
- Focus response efforts on alerts classified as Active Breach, High, or Medium based on contextualized IOC matches.
- Getting Started with Google Chrome and Google SecOps Configure the Chrome Enterprise Premium Reporting Connector to send data to Google SecOps Connect Chrome Enterprise Premium to Google SecOps Enable Chrome Enterprise Threats Curated Detections Examples Investigating Malicious Browser Extensions A user downloads and installs a malicious browser extension from outside the Chrome Web Store, that once installed, reads their session cookies and posts them to a server on a suspicious domain that was registered within the last week.
- Onboarding and Activating Google Unified Security This portfolio brings together the following Google's leading security solutions: Security Command Center (SCCE) Google SecOps (SecOps Enterprise Plus) Google Threat Intelligence (Enterprise) Chrome Enterprise Browser (Premium) Mandiant Threat Defense Getting Started Embark on your journey to a more secure future with Google Unified Security.

