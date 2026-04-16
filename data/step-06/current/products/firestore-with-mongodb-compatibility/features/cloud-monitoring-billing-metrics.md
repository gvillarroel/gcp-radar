---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.707Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Cloud Monitoring billing metrics"
feature_slug: "cloud-monitoring-billing-metrics"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database"
keywords:
  - "monitoring"
  - "billing"
  - "metrics"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "databases"
---

# Cloud Monitoring billing metrics

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility databases expose billing metrics in Cloud Monitoring in Preview.

## Extended Definition

Firestore with MongoDB compatibility databases expose billing metrics in Cloud Monitoring in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database)

## Supporting Pages

### "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn about Cloud Monitoring metrics for Firestore with MongoDB compatibility .
- Required permissions To manage databases, you need the following permissions: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a Firestore with MongoDB compatibility database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create and manage databases This page describes how to create, update, and delete Firestore with MongoDB compatibility databases.

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You must export specific collections if you plan to: Import only specific collections Load Firestore with MongoDB compatibility data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Otherwise, the following roles grant the necessary permissions for export and import operations and for access to Cloud Storage: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Import Export Admin Note: These Datastore roles also grant permissions in Firestore with MongoDB compatibility.
- An import to a Firestore with MongoDB compatibility database from data files that contain non-default namespaces is permitted only if the export operation included a --namespace-ids filter with the default namespace.

### "Bulk delete data \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To bulk delete the restaurants and reviews collections, your command looks as follows: gcloud firestore bulk-delete \ --collection-ids=restaurants,reviews \ --database='cymbal' Manage bulk delete operations After you start a bulk delete operation, Firestore with MongoDB compatibility assigns the operation a unique name.
- Otherwise, the following roles grant the necessary permissions for bulk delete operations: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Bulk Admin Note: These Datastore roles also grant permissions in Firestore.
- Firestore with MongoDB compatibility won't charge reads or deletes for the documents that are not eventually deleted, such as documents that are modified after the delete operation started.

### "Quickstart: Connect with mongosh \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Firestore with MongoDB compatibility requires Firestore Enterprise edition: In the Google Cloud console, go to the Databases page.
- DATABASE ID : a database ID Once connected, you can create and read data, for example: db.pages.insertOne({ message: "Hello World!"}) db.pages.find({}) exit What's next See a list of supported features Learn about behavior differences in Firestore with MongoDB compatibility Learn about additional authentication methods Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Install the mongosh tool Create a Firestore with MongoDB compatibility database and retrieve the connection string In the Google Cloud console, create a new Firestore Enterprise edition database.

