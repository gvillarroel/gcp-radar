---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.871Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Export and import billing label"
feature_slug: "export-and-import-billing-label"
latest_feature_date: "2020-09-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "export"
  - "and"
  - "import"
  - "billing"
  - "label"
  - "the"
  - "goog"
  - "firestoremanaged"
---

# Export and import billing label

Product: Datastore
Coverage: LOW

## Step 02 Summary

The goog-firestoremanaged billing report label identifies costs for Datastore export and import operations.

## Extended Definition

The goog-firestoremanaged billing report label identifies costs for Datastore export and import operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Cloud Billing reports page , you can use this label to view costs related to import and export operations: Note: Export and import operations executed before September 8th, 2020 did not apply the goog-firestoremanaged label.
- Viewing export and import costs Export and import operations apply the goog-firestoremanaged:exportimport label to billed operations.
- This command won't delete export files from Cloud Storage. gcloud datastore operations delete operation-name Billing and pricing for managed exports and imports You are required to enable billing for your Google Cloud project before you use the managed export and import service.
- Only Google Cloud projects with billing enabled can use the export and import features.

### "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DatastoreAdminClient () Initialize request argument(s) request = datastore admin v1.ExportEntitiesRequest( project id="project id value", output url prefix="output url prefix value", ) Make the request operation = client . export entities (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters request ( Union google.cloud.datastore admin v1.types.ExportEntitiesRequest , [ dict ] ) – The request object.
- DatastoreAdminClient () Initialize request argument(s) request = datastore admin v1.ImportEntitiesRequest( project id="project id value", input url="input url value", ) Make the request operation = client . import entities (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters request ( Union google.cloud.datastore admin v1.types.ImportEntitiesRequest , [ dict ] ) – The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample export entities(): Create a client client = datastore admin v1.
- This corresponds to the labels field on the request instance; if request is provided, this should not be set. entity filter ( google.cloud.datastore admin v1.types.EntityFilter ) – Description of what data from the project is included in the export.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- It may also be important to combine Datastore with BigQuery to fulfill business requirements for complex queries and to reduce the usage of Datastore indexes as far as possible.
- It is important to understand how to handle the balance between eventual and strong consistency to design an optimal data model for your application.
- For these reasons, it is important for developers to understand the non-relational characteristics of Datastore.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.

