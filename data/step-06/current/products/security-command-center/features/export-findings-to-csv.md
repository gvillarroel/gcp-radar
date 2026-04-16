---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.968Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Export findings to CSV"
feature_slug: "export-findings-to-csv"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
keywords:
  - "export"
  - "findings"
  - "csv"
  - "security"
  - "command"
  - "center"
  - "console"
  - "capability"
---

# Export findings to CSV

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center console capability that exports findings to a CSV file.

## Extended Definition

Security Command Center console capability that exports findings to a CSV file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)

## Supporting Pages

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Security Command Center API To export findings, you must enable the Security Command Center API by following these steps: Go to the API Library page in the Google Cloud console.
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- Home Documentation Security Security Command Center Guides Send feedback Bulk export findings to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Standard-legacy, Standard, Premium, and Enterprise service tiers The document describes how to initiate on-demand bulk exports of Security Command Center findings to BigQuery.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- November 10, 2022 Feature Security Command Center added the ability to export findings to a CSV file from the Google Cloud console.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- The following detectors, which are available in Preview with the Enterprise and Premium tiers of Security Command Center, allow users to manage threats to their Google Cloud Backup and Disaster Recovery assets in Security Command Center: BACKUP DELETE VAULT BACKUP DELETE VAULT BACKUP BACKUP DELETE BACKUP PLAN ASSOCIATION In addition, we updated the existing BACKUP REMOVE PLAN detector to support findings on Google Cloud Backup and Disaster Recovery assets that are managed in the Google Cloud console.

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- Database Center From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.

