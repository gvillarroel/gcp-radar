---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.951Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance logging"
feature_slug: "unified-maintenance-logging"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/audit-logging"
  - "https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage"
keywords:
  - "unified"
  - "maintenance"
  - "logging"
  - "allows"
  - "events"
  - "related"
  - "to"
  - "operations"
---

# Unified Maintenance logging

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance logging allows logging events related to maintenance operations in Google Cloud.

## Extended Definition

Unified Maintenance logging allows logging events related to maintenance operations in Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/audit-logging](https://docs.cloud.google.com/unified-maintenance/docs/audit-logging)
- [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage](https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage)

## Supporting Pages

### Unified Maintenance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/audit-logging](https://docs.cloud.google.com/unified-maintenance/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name To view the Unified Maintenance audit logs, do the following: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer Copy and paste the following query into the Query field of the Logs Explorer, and then click Run query . protoPayload . serviceName = "maintenance.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- Permission type Methods ADMIN READ google.cloud.maintenance.api.v1.Maintenance.GetResourceMaintenance google.cloud.maintenance.api.v1.Maintenance.ListResourceMaintenances google.cloud.maintenance.api.v1.Maintenance.SummarizeMaintenances google.cloud.maintenance.api.v1beta.Maintenance.GetResourceMaintenance google.cloud.maintenance.api.v1beta.Maintenance.ListResourceMaintenances google.cloud.maintenance.api.v1beta.Maintenance.SummarizeMaintenances API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Unified Maintenance. google.cloud.maintenance.api.v1.Maintenance The following audit logs are associated with methods belonging to google.cloud.maintenance.api.v1.Maintenance .
- Home Documentation Security Unified Maintenance Guides Send feedback Unified Maintenance audit logging Stay organized with collections Save and categorize content based on your preferences.
- When you call a method, Unified Maintenance generates an audit log whose category is dependent on the type property of the permission required to perform the method.

### Set up Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Receive maintenance activity logs in Cloud Logging The Unified Maintenance service sends maintenance logs automatically (independent of whether the Unified Maintenance API is enabled or not).
- If you have been granted one of the basic roles (Viewer, Editor, or Owner) in Cloud Logging for your project, you have the necessary permissions to access Unified Maintenance logs.
- It explains how to enable the Unified Maintenance API, query it directly, and how to manage maintenance event logs that are automatically sent to Cloud Logging.
- Note: Unified Maintenance doesn't display historical events scheduled prior to enabling the API.

### "View maintenance activity logs \_|\_ Unified Maintenance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- To view maintenance activities using the Unified Maintenance API, see View resource maintenances by using the API .
- Note: Maintenance activity logs generated by Unified Maintenance will contribute to your logs quota.
- What's next Use Unified Maintenance to reschedule or apply an update on demand .
- Home Documentation Security Unified Maintenance Guides Send feedback View maintenance activity logs Stay organized with collections Save and categorize content based on your preferences.

### Turn off logs storage \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage](https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Unified Maintenance Guides Send feedback Turn off logs storage Stay organized with collections Save and categorize content based on your preferences.
- Enforce exclusion filter To enforce an exclusion filter for Unified Maintenance logs: In the Google Cloud console, go to the Log Router page.
- Remove exclusion filter To remove an exclusion filter for Unified Maintenance logs: In the Google Cloud console, go to the Log Router page.
- You can either disable the Default sink in the Log Router, or you can configure an exclusion filter specific to Unified Maintenance logs.

