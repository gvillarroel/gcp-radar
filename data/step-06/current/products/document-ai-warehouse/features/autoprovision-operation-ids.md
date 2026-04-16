---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.513Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "AutoProvision operation IDs"
feature_slug: "autoprovision-operation-ids"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/error-messages"
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
keywords:
  - "autoprovision"
  - "operation"
  - "ids"
  - "returns"
  - "id"
  - "operations"
  - "complete"
  - "immediately"
---

# AutoProvision operation IDs

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Returns an operation ID for AutoProvision operations that complete immediately.

## Extended Definition

Returns an operation ID for AutoProvision operations that complete immediately.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- [https://docs.cloud.google.com/document-ai/docs/reference/rest](https://docs.cloud.google.com/document-ai/docs/reference/rest)
- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)

## Supporting Pages

### Cloud Document AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest](https://docs.cloud.google.com/document-ai/docs/reference/rest)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta3.projects.locations.operations Methods cancel POST /v1beta3/{name}:cancel Starts asynchronous cancellation on a long-running operation. get GET /v1beta3/{name} Gets the latest state of a long-running operation. list GET /v1beta3/{name} Lists service operations that match the specified filter in the request.
- REST Resource: v1.projects.locations.operations Methods cancel POST /v1/{name}:cancel Starts asynchronous cancellation on a long-running operation. get GET /v1/{name} Gets the latest state of a long-running operation. list GET /v1/{name} Lists service operations that match the specified filter in the request.
- REST Resource: v1.projects.operations Methods get GET /v1/{name} Gets the latest state of a long-running operation.
- REST Resource: v1beta3.projects.locations.processors.dataset Methods batchDeleteDocuments POST /v1beta3/{dataset}:batchDeleteDocuments Deletes a set of documents. getDatasetSchema GET /v1beta3/{name} Gets the DatasetSchema of a Dataset . getDocument GET /v1beta3/{dataset}:getDocument Returns relevant fields present in the requested document. importDocuments POST /v1beta3/{dataset}:importDocuments Import documents into a dataset. listDocuments POST /v1beta3/{dataset}:listDocuments Returns a list of documents present in the dataset. updateDatasetSchema PATCH /v1beta3/{datasetSchema.name} Updates a DatasetSchema .

### Error messages \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To diagnose this error, try opening the service account key file from the folder from which you're attempting to call the Document AI API. cat $GOOGLE APPLICATION CREDENTIALS Error writing final output If you receive a message like the following when receiving the results of a batch process request: { "name": "projects/ project-name /operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.document.v1beta1.OperationMetadata", "state": "SUCCEEDED", "createTime": "2019-09-19T02:02:15.885267760Z", "updateTime": "2019-09-19T02:02:31.896425001Z" }, "done": true, "error": { "code": 5, "message": "Error writing final output to: gs:// bucket-name /filename.json" } } Your service account may not have the correct permissions to create objects in your Cloud Storage bucket.
- Please select an empty folder." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DATASET LOCATION NOT EMPTY" domain : "documentai.googleapis.com" } } Has Blocking Operation Error When there are other operations running that are blocking the required operation. message : "The operation cannot be performed due to an ongoing 'EXAMPLE OPERATION TYPE' blocking operation.
- OperationNotComplete ... google.api core.exceptions.RetryError : Deadline of 0.0 s exceeded while calling target function , last exception : ... concurrent.futures. base.TimeoutError : Operation did not complete within the designated timeout.
- For more information, see the Long-Running Operations documentation.

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
- Used for referencing/aligning, removal and replacement operations.
- Creating an address only containing a regionCode and addressLines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). recipients[] string Optional.
- That is, the final pixel color is defined by the equation: pixel color = alpha (this color) + (1.0 - alpha) (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.

