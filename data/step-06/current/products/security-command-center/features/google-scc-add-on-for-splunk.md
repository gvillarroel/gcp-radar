---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.919Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Google SCC Add-on for Splunk"
feature_slug: "google-scc-add-on-for-splunk"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
keywords:
  - "scc"
  - "add"
  - "splunk"
  - "sends"
  - "security"
  - "command"
  - "center"
---

# Google SCC Add-on for Splunk

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

An add-on that sends Security Command Center data to Splunk.

## Extended Definition

An add-on that sends Security Command Center data to Splunk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Feature The version 2.0 release of the Google SCC Add-on For Splunk and the Google SCC App For Splunk , which let you send Security Command Center data to Splunk, is generally available.
- In addition, Security Command Center can automatically send findings, assets, audit logs, and security sources to Splunk .
- For more information, see Sending Security Command Center data to Splunk .
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.

### "Add Knowledge Catalog aspects based on insights from data profiles \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- Source ID: `site-docs-reference-3`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send data profiles to other Google Cloud services like Knowledge Catalog, Pub/Sub , Security Command Center , and Google Security Operations to enrich your data governance, alerting, and security workflows.
- Examples: Project-level profile: https://console.cloud.google.com/security/sensitive-data-protection/projects/ PROJECT ID /locations/ LOCATION /tableDataProfiles/ PROFILE ID Organization-level or folder-level profile: https://console.cloud.google.com/security/sensitive-data-protection/organizations/ ORGANIZATION ID /locations/ LOCATION /tableDataProfiles/ PROFILE ID Enable the Dataplex API The Dataplex API must be enabled in each project that contains data that you want to add aspects for.
- Top-level fields The resulting aspect for a profiled table can have the following top-level fields: Display name Example value Description Sensitivity MODERATE The calculated sensitivity level of the table Risk MODERATE The calculated data risk level of the table InfoTypes infoType : CREDIT CARD NUMBER infoType : PHONE NUMBER infoType : US SOCIAL SECURITY NUMBER A list of all infoTypes found in the table, including predicted infoTypes and other infoTypes .
- Home Documentation Security Sensitive Data Protection Guides Send feedback Add Knowledge Catalog aspects based on insights from data profiles Stay organized with collections Save and categorize content based on your preferences.

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- Database Center From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.

