---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.978Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Schema editor"
feature_slug: "schema-editor"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/create-dataset"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/error-messages"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
keywords:
  - "schema"
  - "editor"
  - "the"
  - "has"
  - "been"
  - "upgraded"
---

# Schema editor

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The schema editor has been upgraded.

## Extended Definition

The schema editor has been upgraded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)

## Supporting Pages

### Create dataset \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- While Document import is in progress, newly added schema labels are added to the Schema Editor.
- Before using any of the request data, make the following replacements: LOCATION : Your processor location PROJECT ID : Your Google Cloud project ID PROCESSOR ID : The ID of your custom processor Get data schema HTTP method GET https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" , "documentSchema" : { "entityTypes" : [ { "name" : $SCHEMA NAME , "baseTypes" : [ "document" ] , "properties" : [ { "name" : $LABEL NAME , "valueType" : $VALUE TYPE , "occurrenceType" : $OCCURRENCE TYPE , "propertyMetadata" : {} } , ] , "entityTypeMetadata" : {} } ] } } Update document schema This sample shows you how to use the dataset.updateDatasetSchema to update the current schema.
- Update schema HTTP method PATCH https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema Request JSON: { "document schema" : { "entityTypes" : [ { "name" : $SCHEMA NAME , "baseTypes" : [ "document" ] , "properties" : [ { "name" : LABEL NAME , "description" : LABEL DESCRIPTION , "valueType" : DATA TYPE , "occurrenceType" : OCCURRENCE TYPE , "propertyMetadata" : {} } , ] , "entityTypeMetadata" : {} } ] } } Save the request body in a file named request.json , and execute the following command: CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" Choose label attributes Data type Plain text : a string value.
- If you want to add a new label, not delete or update existing labels, then you can call getDatasetSchema first and make appropriate changes in its response.

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- SetDefaultProcessorVersionResponse ; public class SyncSetDefaultProcessorVersion { public static void main ( String [] args ) throws Exception { syncSetDefaultProcessorVersion (); } public static void syncSetDefaultProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { SetDefaultProcessorVersionRequest request = SetDefaultProcessorVersionRequest . newBuilder () . setProcessor ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setDefaultProcessorVersion ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); SetDefaultProcessorVersionResponse response = documentProcessorServiceClient . setDefaultProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .
- ProcessorVersion ; public class SyncListProcessorVersions { public static void main ( String [] args ) throws Exception { syncListProcessorVersions (); } public static void syncListProcessorVersions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorVersionsRequest request = ListProcessorVersionsRequest . newBuilder () . setParent ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( ProcessorVersion element : documentProcessorServiceClient . listProcessorVersions ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python For more information, see the Document AI Python API reference documentation .
- UndeployProcessorVersionResponse ; public class SyncUndeployProcessorVersion { public static void main ( String [] args ) throws Exception { syncUndeployProcessorVersion (); } public static void syncUndeployProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { UndeployProcessorVersionRequest request = UndeployProcessorVersionRequest . newBuilder () . setName ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); UndeployProcessorVersionResponse response = documentProcessorServiceClient . undeployProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .
- ProcessorVersionName ; public class SyncDeployProcessorVersion { public static void main ( String [] args ) throws Exception { syncDeployProcessorVersion (); } public static void syncDeployProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { DeployProcessorVersionRequest request = DeployProcessorVersionRequest . newBuilder () . setName ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); DeployProcessorVersionResponse response = documentProcessorServiceClient . deployProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .

### Error messages \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure the max is greater than the min." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SPAN INVALID" domain : "documentai.googleapis.com" metadata { key : "span" value : "Character" } } } Invalid UTF-8 document When a document that includes invalid UTF-8 is provided. message : "Document contains invalid UTF-8 text." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT INVALID UTF 8" domain : "documentai.googleapis.com" metadata { key : "bytes" value : "[2, 3)" } } } Dataset schema is invalid When a processor doesn't have a valid union schema or the given dataset schema is not valid. message : "The processor has an empty or invalid schema: " details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID SCHEMA ERROR" domain : "documentai.googleapis.com" } } OcrConfig Unsupported When a processing request is issued for a processor which does not support OcrConfig. message : "OcrConfig is not supported for processor type: 'foo'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "OCR CONFIG UNSUPPORTED" domain : "documentai.googleapis.com" } } Invalid Import Config When the import config is invalid. message : "The import config is invalid: foo" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID IMPORT CONFIG" domain : "documentai.googleapis.com" } } Source processor version is invalid When attempting to import a processor version , the source processor version is not valid to be imported. message : "The source processor version is invalid in import processor version." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID SOURCE PROCESSOR VERSION ERROR" domain : "documentai.googleapis.com" } } Invalid chunk size When the chunk size config is invalid. message : "Invalid chunk size.
- Try again after the operation finishes." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "HAS BLOCKING OPERATION ERROR" domain : "documentai.googleapis.com" } } Page range unsupported error When the page range field isn't supported in some operation, such as in a batch process. message : "Page range is not supported." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PAGE RANGE UNSUPPORTED" domain : "documentai.googleapis.com" } } Cloud Storage folder contains dataset error When a Cloud Storage folder already contains a dataset. message : "The folder 'folder uri' already has dataset 'dataset-id' under it." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "GCS FOLDER CONTAINS DATASET ERROR" domain : "documentai.googleapis.com" } } Thumbnail Missing Error When a dataset document thumbnail is failed to be fetched. message : "Failed to get dataset document thumbnail, consider running re-sync on the dataset." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "THUMBNAIL MISSING" domain : "documentai.googleapis.com" } } Dataset page limit exceeded When the total page limit of a dataset has been exceeded. message : "Dataset page count exceeds the limit of 5.
- This error message is applicable to legacy processors. message : "Unable to find a document of type: 'foo'" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT OF TYPE NOT FOUND" domain : "documentai.googleapis.com" } } Document size limit exceeded When the upper limit for the file size of a document has been exceeded while importing dataset or while running prediction. message : "Document size (2) exceeds limit: 1 (bytes)." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SIZE LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "limit" value : "1" } metadata { key : "size" value : "2" } } } Document limit exceeded When the upper limit for the count of documents has been exceeded. message : "Document count exceed the limit: 5 got 6" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "document limit" value : "5" } metadata { key : "documents" value : "6" } } } Unsupported MIME type When an unsupported MIME type was provided.
- To diagnose this error, try opening the service account key file from the folder from which you're attempting to call the Document AI API. cat $GOOGLE APPLICATION CREDENTIALS Forbidden: 403 POST API has not been used or is disabled If you receive the message: Forbidden: 403 POST Document AI API has not been used in project # before or it is disabled.

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Download a document that has not been involved in previous training or testing so that you can use it to evaluate the processor version.
- In the left-hand panel, you can find that 1 document has been assigned to the training set.
- On the Train tab, the left-hand panel shows that 1 document has been labeled.
- Select a pre-trained model version Define and create the processor schema (classes). (Optionally) Import documents. (Optionally if you want to evaluate its performance) Assign documents to the test sets (Optionally) Evaluate the processor.

