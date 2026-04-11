---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.841Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Scheduled backups"
feature_slug: "scheduled-backups"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/backups"
  - "https://docs.cloud.google.com/datastore/docs/tools/indexconfig"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
keywords:
  - "scheduled"
  - "backups"
  - "automatically"
  - "create"
  - "on"
  - "schedule"
---

# Scheduled backups

Product: Datastore
Coverage: LOW

## Step 02 Summary

Scheduled backups automatically create backups on a schedule; Scheduled backups automatically create backups on a schedule.

## Extended Definition

Scheduled backups automatically create backups on a schedule; Scheduled backups automatically create backups on a schedule.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)

## Supporting Pages

### Back up and restore data \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to manage backups and backup schedules, ask your administrator to grant you one or more of the following Identity and Access Management roles: roles/datastore.owner : Full access to the Firestore database roles/datastore.backupsAdmin : Read and write access to backups roles/datastore.backupsViewer : Read access to backups roles/datastore.backupSchedulesAdmin : Read and write access to backup schedules roles/datastore.backupSchedulesViewer : Read access to backup schedules roles/datastore.restoreAdmin : Permissions to initiate restore operations Create and manage backup schedules The following examples demonstrate how to set up a backup schedule.
- Select the Weekly checkbox, select a backup day, set the retention period, and then click Save . gcloud To create a weekly backup schedule, set the --recurrence flag to weekly : gcloud firestore backups schedules create \ --database=' DATABASE ID ' \ --recurrence=weekly \ --retention= RETENTION PERIOD \ --day-of-week= DAY Replace the following: DATABASE ID : The ID of the database to back up.
- To create a daily backup schedule, set the --recurrence flag to daily : gcloud firestore backups schedules create \ --database=' DATABASE ID ' \ --recurrence=daily \ --retention= RETENTION PERIOD Replace the following: DATABASE ID : The ID of the database to back up.
- Select the Daily checkbox, set the retention period, and then click Save . gcloud To create a backup schedule for a database, use the gcloud firestore backups schedules create command.

### Composite Index Configuration \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, a recently completed composite index build shows the following information: { "operations": [ { "name": "projects/ project-id /operations/S01vcFVpSmdBQ0lDDCoDIGRiNTdiZDQNmE4YS0yMTVmNWUzZSQadGx1YWZlZAcSMXRzYWVzdS1yZXhlZG5pLW5pbWRhFQpWEg", "done": true, "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.IndexOperationMetadata", "common": { "endTime": "2020-06-23T16:55:29.923562Z", "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:55:10Z", "state": "SUCCESSFUL" }, "indexId": "CICAJiUpoMK", "progressEntities": { "workCompleted": "2193027", "workEstimated": "2198182" } }, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.Index", "ancestor": "NONE", "indexId": "CICAJiUpoMK", "kind": "Task", "projectId": " project-id ", "properties": [ { "direction": "ASCENDING", "name": "priority" }, { "direction": "ASCENDING", "name": "done" }, { "direction": "DESCENDING", "name": "created" } ], "state": "READY" } }, ] } Describing a single operation Instead of listing all long-running operations, you can list the details of a single operation: gcloud Use the operations describe command to show the status of a composite index build. gcloud datastore operations describe operation-name rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Operations are listed for a few days after completion: gcloud gcloud datastore operations list rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example, here is the progress status of a composite index build: { "operations": [ { "name": "projects/ project-id /operations/AyAyMDBiM2U5NTgwZDAtZGIyYi0zYjc0LTIzYWEtZjg1ZGdWFmZWQHEjF0c2Flc3UtcmV4ZWRuaS1uaW1kYRUKSBI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.IndexOperationMetadata", "common": { "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:52:25.697539Z", "state": "PROCESSING" }, "progressEntities": { "workCompleted": "219327", "workEstimated": "2198182" } }, }, ...
- The following is an example of an index.yaml file: indexes : - kind : Task ancestor : no properties : - name : done - name : priority direction : desc - kind : Task properties : - name : collaborators direction : asc - name : created direction : desc - kind : TaskList ancestor : yes properties : - name : percent complete direction : asc - name : type direction : asc The syntax of index.yaml is the YAML format.

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Restoring data to another application If you back up your data using Google Cloud Storage, you can restore backups to applications other than the application used to create the backup.
- You can optionally specify the bucket name suffixed with a directory structure, such as [BUCKET NAME]/backups/foo ): If those folders don't already exist, they will be created.
- To restore backup data from a source application to a target application: Create an Identity and Access Management (IAM) policy on the source application's storage bucket with the following permission: Principal : [PROJECT ID]@appspot.gserviceaccount.com Roles : Storage Legacy Bucket Reader and Storage Legacy Object Reader where [PROJECT ID] is the project ID of the target application.
- The target application can access only backups made after it was given permissions. (Recommended) Disable Cloud Datastore writes for your target application to avoid conflicts between the restored data and any new data written to Cloud Datastore.

