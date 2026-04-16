---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.138Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Continuous Exports for Pub/Sub"
feature_slug: "continuous-exports-for-pub-sub"
latest_feature_date: "2021-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/service-tiers"
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
keywords:
  - "continuous"
  - "exports"
  - "pub"
  - "sub"
  - "security"
  - "command"
  - "center"
  - "premium"
---

# Continuous Exports for Pub/Sub

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center Premium can continuously export new findings to Pub/Sub with NotificationConfig setup automated.

## Extended Definition

Security Command Center Premium can continuously export new findings to Pub/Sub with NotificationConfig setup automated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- May 05, 2021 Feature Security Command Center Premium has launched Continuous Exports for Pub/Sub in general availability.
- The following detectors, which are available in Preview with the Enterprise and Premium tiers of Security Command Center, allow users to manage threats to their Google Cloud Backup and Disaster Recovery assets in Security Command Center: BACKUP DELETE VAULT BACKUP DELETE VAULT BACKUP BACKUP DELETE BACKUP PLAN ASSOCIATION In addition, we updated the existing BACKUP REMOVE PLAN detector to support findings on Google Cloud Backup and Disaster Recovery assets that are managed in the Google Cloud console.
- Feature Detector for Container Threat Detection released to General Availability Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched three new detectors to General Availability : Execution: Container Escape : Detects when a process inside a container tries to break out of its isolation and interact with the host system or other containers.
- See the following for detailed information about activating a specific tier: Activate Security Command Center Standard tier for an organization Activate Security Command Center Premium tier for an organization November 17, 2025 Feature Agent Engine Threat Detection , a built-in service of Security Command Center, is available in Preview to the Security Command Center Enterprise and Premium tiers.

### Security Command Center service tiers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Controls that restrict the storage and processing of Security Command Center findings, mute rules, continuous exports, and BigQuery exports to one of the data residency multi-regions that Security Command Center supports.
- Export findings from Security Command Center to BigQuery, either as a one-time bulk export or by enabling continuous exports .
- Standard-legacy, Standard, Premium, and Enterprise service tiers Security Command Center is offered in three service tiers: Standard, Premium, and Enterprise.
- Security Command Center Enterprise users get access to the Premium tier of Audit Manager at no extra cost.

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For continuous exports, this field is empty. finding A record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement.
- Standard-legacy, Standard, Premium, and Enterprise service tiers The document describes how to initiate on-demand bulk exports of Security Command Center findings to BigQuery.
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- What's next Learn how to perform one-time exports in Security Command Center .

