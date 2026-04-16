---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.528Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Prebuilt parser version management"
feature_slug: "prebuilt-parser-version-management"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "prebuilt"
  - "parser"
  - "version"
  - "management"
  - "lets"
  - "administrators"
  - "control"
  - "deployment"
---

# Prebuilt parser version management

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Lets administrators control deployment, comparison, update, and rollback of prebuilt parser versions.

## Extended Definition

Lets administrators control deployment, comparison, update, and rollback of prebuilt parser versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- Azure - Identity : Detects activity related to authentication and authorization, indicating unusual behavior, including concurrent access from multiple geographic locations, overly permissive access management policies, or Azure RBAC activity from suspicious tools.
- Office 365 - Identity : Detects malicious, suspicious, and high-risk activities in Office 365 related to identity and access management, including potential token theft, risky authentication configurations, MFA attacks, password attacks, and known hacking tools.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management provides access control for Google SecOps.
- Data collection Google SecOps can ingest numerous security telemetry types through a variety of methods, including the following: Forwarder : A lightweight software component, deployed in the customer's network, that supports syslog, packet capture, and existing log management or security information and event management (SIEM) data repositories.
- The Google SecOps platform enables security analysts to analyze and mitigate a security threat throughout its lifecycle by employing the following capabilities: Collection : Data is ingested into the platform using forwarders, parsers, OpenTelemetry collectors, connectors, and webhooks.
- Google SecOps can be used to detect threats, investigate the scope and cause of those threats, and provide remediation using prebuilt integrations with enterprise workflow, response, and orchestration platforms.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Data RBAC administrators can create scopes and assign them to users to control their data access within Google SecOps.
- Access control with scopes and labels Google SecOps lets you control data access to users by using scopes.
- The following permissions apply to Dashboards: chronicle.dashboards.list : Lets users see the list of available dashboards. chronicle.dashboards.get : Lets users open and view a dashboard content. chronicle.dashboards.create : Lets users create new dashboards. chronicle.dashboards.update : Lets users edit and save changes to existing dashboards. chronicle.dashboards.delete : Lets users delete custom dashboards.
- For example, in a customer relationship management (CRM) system, a sales representative might have access to customer contact data but not finance data, while a finance manager might have access to the finance data but not the customer contact data.

