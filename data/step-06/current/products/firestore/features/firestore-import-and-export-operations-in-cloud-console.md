---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.899Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore import and export operations in Cloud Console"
feature_slug: "firestore-import-and-export-operations-in-cloud-console"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/firestore/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
keywords:
  - "firestore"
  - "import"
  - "export"
  - "operations"
  - "console"
  - "you"
  - "can"
  - "start"
---

# Firestore import and export operations in Cloud Console

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

You can start Firestore import and export operations from Google Cloud Console.

## Extended Definition

You can start Firestore import and export operations from Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- Managing export and import operations After you start an export or import operation, Firestore assigns the operation a unique name.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- Managing export and import operations After you start an export or import operation, Firestore assigns the operation a unique name.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- Set up gcloud for your project If you plan to use gcloud to start your import and export operations, set up gcloud and connect to your project in one of the following ways: Access gcloud from the Google Cloud console using Cloud Shell .
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.

