---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.777Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Non-default database management in Google Cloud console"
feature_slug: "non-default-database-management-in-google-cloud-console"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
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
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can create and delete non-default databases.

## Extended Definition

The Google Cloud console can create and delete non-default databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Database access permissions By default, Datastore Admin can access a Datastore database in the same project and does not require Identity and Access Management permissions for Datastore.
- If you use a non-default queue for backup/restore, you can only specify the target ah-builtin-python-bundle in queue.yaml .
- If you use a non-default queue for backup/restore, you can only specify the target ah-builtin-python-bundle in queue.yaml .
- Notice that the default queue is used for the backup job; you can use this in most cases.

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.
- Viewing Datastore statistics In the Google Cloud console, go to the Databases page.
- Viewing entities In the Google Cloud console, go to the Databases page.
- Viewing indexes In the Google Cloud console, go to the Databases page.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- Multiple databases You can use gcloud firestore to manage a single index for Datastore mode or use gcloud datastore with an index.yaml file to manage all the indexes under a database. gcloud firestore gcloud firestore indexes composite create --api-scope=datastore-mode-api --query-scope= QUERY SCOPE --database= DATABASE ID gcloud datastore gcloud alpha datastore indexes create index.yaml --database= DATABASE ID Replace the following: DATABASE ID : a database ID.
- There are two types of indexes: Built-in indexes By default, a Datastore mode database automatically predefines an index for each property of each entity kind.
- Note: Datastore mode databases distinguish between an entity that does not possess a property and one that possesses the property with a null value ( None ).

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Operation names are prefixed with projects/[PROJECT ID]/databases/(default)/operations/ , for example: projects/ project-id /databases/(default)/operations/ASA1MTAwNDQxNAgadGx1YWZlZAcSeWx0aGdpbi1zYm9qLW5pbWRhEgopEg You can leave out the prefix when specifying an operation name for gcloud commands.
- For example, you can decode a metadata file to determine the namespace and kinds the export files contain: protoc --decode raw < export0.export metadata Importing all entities Console In the Google Cloud console, go to the Databases page.
- If your Cloud Storage bucket is in the same project as your Firestore database, then the Firestore service agent can access the bucket by default .

