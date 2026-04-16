---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.807Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Extractors"
feature_slug: "extractors"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
keywords:
  - "extractors"
  - "let"
  - "users"
  - "pull"
  - "specific"
  - "fields"
  - "high"
  - "volume"
---

# Extractors

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Extractors let users pull specific fields from high-volume log sources to improve log management.

## Extended Definition

Extractors let users pull specific fields from high-volume log sources to improve log management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)

## Supporting Pages

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Throughput : the volume of data that is ingested for a specific time.
- The table is followed by graphs of all Google Cloud services with their associated data that show their ingestion trend over the following time intervals: Last 24 hours Last 30 days Last six months Context Aware Detections - Risk dashboard The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
- You can view the following visualizations in the Cloud Detection and Response Overview dashboard: CDIR Rulesets Enabled : displays the percentage of Google Security Operations SIEM rule sets enabled for your cloud environment from the total rule sets provided by GCTI for Google Security Operations SIEM users.
- For example, you might find that a particular user has attempted to access your enterprise from a country where you don't have an office or that an specific user appears to repeatedly access an accounting application.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.
- These STS IP address ranges are published in the following JSON file: IP ranges To use these STS feed source types, you may need to adjust IP access restrictions to enable STS to access your Amazon S3 and Azure storage services: Pull the latest IP ranges from the JSON file.
- What to expect during migration For impacted feeds, you will observe the following changes: Feed Status : Feeds created prior to the migration will immediately stop pulling live data and will become read-only.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated an access control subject, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject" To find the users who updated an access control role, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole" To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule" What's next Cloud Audit Logs overview Understand audit logs Available audit logs Google Cloud Observability pricing: Cloud Logging Need more help?
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Caution: Data Access logs generated by Cloud Audit Logs can produce high volumes of low-value data.
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.

