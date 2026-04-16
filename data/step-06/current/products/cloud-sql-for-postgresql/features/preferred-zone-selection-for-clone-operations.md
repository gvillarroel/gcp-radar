---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.766Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Preferred zone selection for clone operations"
feature_slug: "preferred-zone-selection-for-clone-operations"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "preferred"
  - "clone"
  - "zones"
  - "specify"
  - "zone"
  - "selection"
  - "operations"
---

# Preferred zone selection for clone operations

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Clone operations can specify preferred zones for zonal instances and preferred primary and secondary zones for regional instances.

## Extended Definition

Clone operations can specify preferred zones for zonal instances and preferred primary and secondary zones for regional instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Clone instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ DESTINATION INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " DESTINATION INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you're using the preferredZone and preferredSecondaryZone parameters, then the following conditions apply: Both the primary and secondary zones must be valid zones.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ DESTINATION INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " DESTINATION INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you're using the preferredZone and preferredSecondaryZone parameters, then the following conditions apply: Both the primary and secondary zones must be valid zones.
- If you don't specify values for either the --preferred-zone or --preferred-secondary-zone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify values for either the preferredZone or preferredSecondaryZone parameters, then the cloned instance has the same primary and secondary zones as the source instance.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " TARGET INSTANCE NAME ", "pointInTime": " DATE AND TIME STAMP ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " TARGET INSTANCE NAME ", "pointInTime": " DATE AND TIME STAMP ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- While the clone initializes, you're returned to the instance listing page. gcloud You might want to recover an instance that isn't available to a different zone because the zone in which the instance is configured isn't accessible. gcloud sql instances clone SOURCE INSTANCE NAME TARGET INSTANCE NAME \ --point-in-time DATE AND TIME STAMP \ --preferred-zone ZONE NAME \ --preferred-secondary-zone SECONDARY ZONE NAME The user or service account that's running the gcloud sql instances clone command must have the cloudsql.instances.clone permission.
- In all cases, you can restore the instance to a different primary or secondary zone by providing values for the preferred zones. gcloud Unavailable instance To get the earliest and latest time to which you can recover a Cloud SQL instance that's not available, run the following command: gcloud sql instances get-latest-recovery-time INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance you want to find the latest recovery time for.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Secondary zone --secondary-zone If you're creating an instance for high availability , you can specify both the primary and secondary zones using the --zone and --secondary-zone parameters .
- If you are creating an instance for high availability , you can specify both the primary and secondary zones, using the --zone and --secondary-zone parameters.
- The following conditions apply when the secondary zone is used during instance creation: The zones default to Any for the primary zone and Any (different from primary) for the secondary zone.
- The following restrictions apply when the secondary zone is used during instance creation or edit: The zones must be valid zones.

