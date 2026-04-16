---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.772Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Location support: europe-west12"
feature_slug: "location-support-europe-west12"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
keywords:
  - "location"
  - "europe"
  - "west12"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "supports"
---

# Location support: europe-west12

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Firestore in Datastore mode supports the europe-west12 Turin region.

## Extended Definition

Firestore in Datastore mode supports the europe-west12 Turin region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)

## Supporting Pages

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.
- Firestore in Datastore Mode Recommended for app architectures with backend servers.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- Datastore mode supports fast and highly scalable ACID transactions, SQL-like queries, indexes and more.
- For a deeper look into the Datastore mode capabilities, see What is Firestore in Datastore mode? .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Create a Cloud Storage bucket in the same location as your Firestore in Datastore mode database .
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .
- This page describes how to export and import Firestore in Datastore mode entities using the managed export and import service.
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- By merging different sections of the built-in index for the tag property, Firestore in Datastore mode supports queries that combine multiple tag filters in a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- By merging built-in indexes, Firestore in Datastore mode supports queries with equality filters on multiple properties: Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- Firestore in Datastore mode supports an index merging feature that lets your database merge built-in indexes to support additional queries.
- Firestore in Datastore mode databases execute a query using a perfect index using the following steps: Identifies the index corresponding to the query's kind, filter properties, filter operators, and sort orders Scans from the beginning of the index to the first entity that meets all or a subset of the query's filter conditions Continues scanning the index, returning each entity that satisfies all the filter conditions, until it encounters an entity that does not meet the filter conditions, or reaches the end of the index, or has collected the maximum number of results requested by the query For example, consider the following query: SELECT FROM Task WHERE category = 'Personal' AND priority < 3 ORDER BY priority DESC The perfect composite index for this query is an index of keys for entities of kind Task , with columns for the values of the category and priority properties.

