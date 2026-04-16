---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.009Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Cortex XSOAR integration"
feature_slug: "cortex-xsoar-integration"
latest_feature_date: "2022-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
keywords:
  - "cortex"
  - "xsoar"
  - "integration"
  - "sends"
  - "security"
  - "command"
  - "center"
  - "can"
---

# Cortex XSOAR integration

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The integration sends Security Command Center data to Cortex XSOAR; Security Command Center can send findings, assets, and security sources to Cortex XSOAR.

## Extended Definition

The integration sends Security Command Center data to Cortex XSOAR; Security Command Center can send findings, assets, and security sources to Cortex XSOAR.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2022 Feature Security Command Center can automatically send findings, assets, and security sources to the following SIEM and SOAR platforms: Cortex XSOAR —see Sending Security Command Center data to Cortex XSOAR .
- May 16, 2022 Feature Updates were made to the applications that let you send Security Command Center data to to the following SIEM and SOAR platforms: Cortex XSOAR —see Sending Security Command Center data to Cortex XSOAR .
- Feature The March 20, 2023 release of the Google Cloud SCC content pack for sending Security Command Center data to Cortex XSOAR is generally available.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- Database Center From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.

### "Data and infrastructure security overview \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data processing When you enroll in Security Command Center, Google Cloud processes information related to the Google Cloud services you use, including the following: The configuration and metadata associated with your Google Cloud resources The configuration and metadata for your Identity and Access Management (IAM) policies and users Google Cloud-level API access patterns and usage Cloud Logging contents for your Google Cloud organization Security Command Center metadata, including service settings and security findings Security Command Center processes data related to your cloud logs and assets that you configure to be scanned or monitored, including telemetry and other data therein, to provide findings and improve the service.
- Finding Retention period Inactive vulnerability 7 days Inactive misconfiguration 30 days Everything active (except threats) Deleted after the following amount of time has passed: 13 months (Enterprise and Premium) 35 days (Standard) If the underlying issue for a misconfiguration or vulnerability finding remains unresolved or reoccurs, Security Command Center recreates the finding on a subsequent detection scan.
- Data retention for findings Data that Security Command Center processes is captured and stored in findings that identify threats, vulnerabilities, and misconfigurations in the resources and assets within your organization, folders, and projects.
- Behavior when an asset is deleted If an asset associated with a finding is deleted, Security Command Center might reassign the finding to the organization; that is, the parent of the finding becomes the organization.

