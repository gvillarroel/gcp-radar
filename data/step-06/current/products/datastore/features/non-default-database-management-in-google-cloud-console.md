---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.852Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Non-default database management in Google Cloud console"
feature_slug: "non-default-database-management-in-google-cloud-console"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
keywords:
  - "non"
  - "default"
  - "database"
  - "management"
  - "in"
  - "console"
  - "the"
  - "can"
---

# Non-default database management in Google Cloud console

Product: Datastore
Coverage: LOW

## Step 02 Summary

The Google Cloud console can create and delete non-default databases.

## Extended Definition

The Google Cloud console can create and delete non-default databases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Database access permissions By default, Datastore Admin can access a Datastore database in the same project and does not require Identity and Access Management permissions for Datastore.
- If you use a non-default queue for backup/restore, you can only specify the target ah-builtin-python-bundle in queue.yaml .
- If you use a non-default queue for backup/restore, you can only specify the target ah-builtin-python-bundle in queue.yaml .
- Notice that the default queue is used for the backup job; you can use this in most cases.

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.
- Viewing Datastore statistics In the Google Cloud console, go to the Databases page.
- Viewing entities In the Google Cloud console, go to the Databases page.
- Viewing indexes In the Google Cloud console, go to the Databases page.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Operation names are prefixed with projects/[PROJECT ID]/databases/(default)/operations/ , for example: projects/ project-id /databases/(default)/operations/ASA1MTAwNDQxNAgadGx1YWZlZAcSeWx0aGdpbi1zYm9qLW5pbWRhEgopEg You can leave out the prefix when specifying an operation name for gcloud commands.
- For example, you can decode a metadata file to determine the namespace and kinds the export files contain: protoc --decode raw < export0.export metadata Importing all entities Console In the Google Cloud console, go to the Databases page.
- If your Cloud Storage bucket is in the same project as your Firestore database, then the Firestore service agent can access the bucket by default .

