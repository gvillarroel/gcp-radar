---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.619Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "AWS EC2 Instances"
feature_slug: "aws-ec2-instances"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "aws"
  - "ec2"
  - "instances"
  - "chronicle"
  - "feed"
  - "management"
  - "supports"
  - "log"
---

# AWS EC2 Instances

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle feed management API supports the AWS EC2 Instances log type for creating AWS data feeds.

## Extended Definition

Chronicle feed management API supports the AWS EC2 Instances log type for creating AWS data feeds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.
- Feed management overview Supported in: Google secops SIEM This page provides an overview of Google SecOps feed management.
- You can create and manage feeds using the feed management UI or the feed management API.
- What's next Learn how to create and manage feeds using the feed management UI .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Use the Feed Management UI Supported in: Google secops SIEM This document explains how to create, troubleshoot, and manage feeds within the Feed Management UI, including instructions for modifying, enabling, and deleting them.
- Set up an HTTPS webhook feed Before you begin: Ensure that a Google Cloud project for Google SecOps is configured and the Chronicle API is enabled for the project.
- Manage feeds After you configure your data feeds, use the management tools to monitor ingestion health, modify existing parameters, and manage the feed lifecycle.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- AWS CloudTrail ( AWS CLOUDTRAIL ) AWS GuardDuty ( GUARDDUTY ) AWS EC2 HOSTS ( AWS EC2 HOSTS ) AWS EC2 INSTANCES ( AWS EC2 INSTANCES ) AWS EC2 VPCS ( AWS EC2 VPCS ) AWS IAM (IAM) ( AWS IAM ) See Configure the ingestion of AWS data for information about setting up ingestion of AWS data.
- Azure - Identity : Detects activity related to authentication and authorization, indicating unusual behavior, including concurrent access from multiple geographic locations, overly permissive access management policies, or Azure RBAC activity from suspicious tools.

