---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.911Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Array transforms"
feature_slug: "array-transforms"
latest_feature_date: "2018-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField"
  - "https://docs.cloud.google.com/firestore/docs/backups"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance"
keywords:
  - "array"
  - "transforms"
  - "firestore"
  - "supports"
  - "arrayunion"
  - "arrayremove"
  - "directly"
  - "modifying"
---

# Array transforms

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports arrayUnion() and arrayRemove() for directly modifying array field values.

## Extended Definition

Cloud Firestore supports arrayUnion() and arrayRemove() for directly modifying array field values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField)
- [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)

## Supporting Pages

### "Class AggregateField (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.38.0 (latest) 3.37.0 3.36.0 3.35.1 3.33.4 3.32.2 3.31.9 3.30.11 3.28.0 3.27.2 3.26.5 3.25.1 3.24.3 3.22.0 3.21.4 3.20.0 3.17.0 3.16.3 3.15.7 3.14.4 3.13.2 3.12.1 3.11.0 3.10.0 3.9.6 3.8.2 3.7.10 3.6.0 3.5.0 3.4.2 3.3.0 3.2.0 3.1.0 3.0.21 public abstract class AggregateField Represents an aggregation that can be performed by Firestore.

### "Optimize query performance \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- Source ID: `site-docs-reference-required-4`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use forceIndex with Query Explain You can use Query Explain , especially with the analyze option, to observe the effects of forceIndex : Verify that Firestore in Native Mode used the specified index in forceIndex by checking the leaf nodes of the execution tree for the index ID.
- Optimize query performance Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can use the forceIndex option on any input stage in Pipeline operations to override Firestore in Native Mode's default query plan and specify an index to use, or to force a table scan.
- Best practices for forceIndex While forceIndex provides more control over query execution, Firestore in Native Mode's query optimizer is generally efficient for most use cases.

### "Back up and restore data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to manage backups and backup schedules, ask your administrator to grant you one or more of the following Identity and Access Management roles: roles/datastore.owner : Full access to the Firestore database roles/datastore.backupsAdmin : Read and write access to backups roles/datastore.backupsViewer : Read access to backups roles/datastore.backupSchedulesAdmin : Read and write access to backup schedules roles/datastore.backupSchedulesViewer : Read access to backup schedules roles/datastore.restoreAdmin : Permissions to initiate restore operations Create and manage backup schedules The following examples demonstrate how to set up a backup schedule.
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- Set to one of the following: SUN for Sunday MON for Monday TUE for Tuesday WED for Wednesday THU for Thursday FRI for Friday SAT for Saturday Terraform To create a weekly backup schedule, create a google firestore backup schedule resource. resource "google firestore backup schedule" "weekly-backup" { project = PROJECT ID database = DATABASE ID retention = RETENTION PERIOD SECONDS weekly recurrence { day = DAY } } Replace the following: PROJECT ID : The ID of the project.
- To retrieve this information again, use gcloud firestore operations list : gcloud firestore operations list --database= DATABASE ID or, using the name field from the output described above, with gcloud firestore operations describe : gcloud firestore operations describe OPERATION NAME Limitations A restore operation does not restore App Engine search data or blob entities from a (default) database.

