---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.860Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore databases page status column"
feature_slug: "firestore-databases-page-status-column"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/firestore/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
keywords:
  - "firestore"
  - "databases"
  - "page"
  - "status"
  - "column"
  - "console"
  - "now"
  - "shows"
---

# Firestore databases page status column

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The Firestore databases page in the Google Cloud console now shows database status values such as Ready, Cloning, Restoring from backup, Deleted, and Failed.

## Extended Definition

The Firestore databases page in the Google Cloud console now shows database status values such as Ready, Cloning, Restoring from backup, Deleted, and Failed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- View migration status To verify your project's migration status: In the Google Cloud console, go to the Databases page.
- For example, you can decode a metadata file to determine the namespace and kinds the export files contain: protoc --decode raw < export0.export metadata Importing all entities Console In the Google Cloud console, go to the Databases page.
- Console In the Google Cloud console, go to the Databases page.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- Note: You must export specific collection groups if you plan to: Import only specific collection groups Load Firestore data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- View migration status To verify your project's migration status: In the Google Cloud console, go to the Databases page.
- Import all documents from an export Google Cloud Console In the Google Cloud console, go to the Databases page.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- Note: You must export specific collection groups if you plan to: Import only specific collection groups Load Firestore data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- View migration status To verify your project's migration status: In the Google Cloud console, go to the Databases page.
- Import all documents from an export Google Cloud Console In the Google Cloud console, go to the Databases page.

