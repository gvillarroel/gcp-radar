---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.876Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore multiple databases per project"
feature_slug: "firestore-multiple-databases-per-project"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/backups"
  - "https://docs.cloud.google.com/firestore/native/docs/backups"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data"
keywords:
  - "firestore"
  - "multiple"
  - "databases"
  - "per"
  - "project"
  - "supports"
---

# Firestore multiple databases per project

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports multiple databases per project.

## Extended Definition

Firestore supports multiple databases per project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)

## Supporting Pages

### "Back up and restore data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- The restore operation will take some time and must complete before the database is accessible. gcloud Use the gcloud firestore databases restore command: gcloud firestore databases restore \ --source-backup=projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID \ --destination-database=' DATABASE ID \ --tags=[ KEY = VALUE ]' Replace the following: PROJECT ID : Your project ID.
- Set to one of the following: SUN for Sunday MON for Monday TUE for Tuesday WED for Wednesday THU for Thursday FRI for Friday SAT for Saturday Terraform To create a weekly backup schedule, create a google firestore backup schedule resource. resource "google firestore backup schedule" "weekly-backup" { project = PROJECT ID database = DATABASE ID retention = RETENTION PERIOD SECONDS weekly recurrence { day = DAY } } Replace the following: PROJECT ID : The ID of the project.
- Terraform To create a daily backup schedule, create a google firestore backup schedule resource. resource "google firestore backup schedule" "daily-backup" { project = PROJECT ID database = DATABASE ID retention = RETENTION PERIOD SECONDS daily recurrence {} } Replace the following: PROJECT ID : The ID of the project.

### "Back up and restore data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- The restore operation will take some time and must complete before the database is accessible. gcloud Use the gcloud firestore databases restore command: gcloud firestore databases restore \ --source-backup=projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID \ --destination-database=' DATABASE ID \ --tags=[ KEY = VALUE ]' Replace the following: PROJECT ID : Your project ID.
- Set to one of the following: SUN for Sunday MON for Monday TUE for Tuesday WED for Wednesday THU for Thursday FRI for Friday SAT for Saturday Terraform To create a weekly backup schedule, create a google firestore backup schedule resource. resource "google firestore backup schedule" "weekly-backup" { project = PROJECT ID database = DATABASE ID retention = RETENTION PERIOD SECONDS weekly recurrence { day = DAY } } Replace the following: PROJECT ID : The ID of the project.
- Terraform To create a daily backup schedule, create a google firestore backup schedule resource. resource "google firestore backup schedule" "daily-backup" { project = PROJECT ID database = DATABASE ID retention = RETENTION PERIOD SECONDS daily recurrence {} } Replace the following: PROJECT ID : The ID of the project.

### "Delete documents and fields \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fprintf ( w , "Deleted collection \"%s\"" , collectionName ) return nil } save data delete collection . go PHP function data delete collection(string $projectId, string $collectionName, int $batchSize) { // Create the Cloud Firestore client $db = new FirestoreClient([ 'projectId' => $projectId, ]); $collectionReference = $db->collection($collectionName); $documents = $collectionReference->limit($batchSize)->documents(); while (!$documents->isEmpty()) { foreach ($documents as $document) { printf('Deleting document %s' .
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For large deletion jobs (millions of documents), use one of the following: Managed bulk delete Firestore supports bulk deleting one or more collection groups.
- Bulk deletion jobs Firestore supports several tools for bulk deletion.

