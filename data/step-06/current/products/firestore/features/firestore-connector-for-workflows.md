---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.897Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore connector for Workflows"
feature_slug: "firestore-connector-for-workflows"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
keywords:
  - "firestore"
  - "connector"
  - "workflows"
  - "lets"
  - "call"
  - "operations"
  - "directly"
---

# Firestore connector for Workflows

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

A connector lets Workflows call Firestore operations directly.

## Extended Definition

A connector lets Workflows call Firestore operations directly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- For example, you can decode a metadata file to determine the collection groups the export files contain: protoc --decode raw < export0.export metadata Service agent migration Firestore uses a Firestore service agent to authorize import and export operations instead of using the App Engine service account.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- For example, you can decode a metadata file to determine the collection groups the export files contain: protoc --decode raw < export0.export metadata Service agent migration Firestore uses a Firestore service agent to authorize import and export operations instead of using the App Engine service account.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of a long-running operation. gcloud datastore operations describe operation-name rest Before using any of the request data, make the following replacements: project-id : your project ID operation-name : the operation name HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In the Cloud Billing reports page , you can use this label to view costs related to import and export operations: Note: Export and import operations executed before September 8th, 2020 did not apply the goog-firestoremanaged label.
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .

