---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.979Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Training pipeline"
feature_slug: "training-pipeline"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/error-messages"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "training"
  - "pipeline"
  - "the"
  - "has"
  - "been"
  - "upgraded"
---

# Training pipeline

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The training pipeline has been upgraded.

## Extended Definition

The training pipeline has been upgraded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

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
- Try again after the operation finishes." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "HAS BLOCKING OPERATION ERROR" domain : "documentai.googleapis.com" } } Page range unsupported error When the page range field isn't supported in some operation, such as in a batch process. message : "Page range is not supported." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PAGE RANGE UNSUPPORTED" domain : "documentai.googleapis.com" } } Cloud Storage folder contains dataset error When a Cloud Storage folder already contains a dataset. message : "The folder 'folder uri' already has dataset 'dataset-id' under it." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "GCS FOLDER CONTAINS DATASET ERROR" domain : "documentai.googleapis.com" } } Thumbnail Missing Error When a dataset document thumbnail is failed to be fetched. message : "Failed to get dataset document thumbnail, consider running re-sync on the dataset." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "THUMBNAIL MISSING" domain : "documentai.googleapis.com" } } Dataset page limit exceeded When the total page limit of a dataset has been exceeded. message : "Dataset page count exceeds the limit of 5.
- This error message is applicable to legacy processors. message : "Unable to find a document of type: 'foo'" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT OF TYPE NOT FOUND" domain : "documentai.googleapis.com" } } Document size limit exceeded When the upper limit for the file size of a document has been exceeded while importing dataset or while running prediction. message : "Document size (2) exceeds limit: 1 (bytes)." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SIZE LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "limit" value : "1" } metadata { key : "size" value : "2" } } } Document limit exceeded When the upper limit for the count of documents has been exceeded. message : "Document count exceed the limit: 5 got 6" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "document limit" value : "5" } metadata { key : "documents" value : "6" } } } Unsupported MIME type When an unsupported MIME type was provided.
- To diagnose this error, try opening the service account key file from the folder from which you're attempting to call the Document AI API. cat $GOOGLE APPLICATION CREDENTIALS Forbidden: 403 POST API has not been used or is disabled If you receive the message: Forbidden: 403 POST Document AI API has not been used in project # before or it is disabled.
- KMS key invalid When an invalid key (e.g. it is disabled) was provided. message : "KMS key 'projects/1/keys/abc' is invalid (KEY DISABLED)." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "KMS KEY INVALID" domain : "documentai.googleapis.com" metadata { key : "details" value : "KEY DISABLED" } metadata { key : "kms key name" value : "projects/1/keys/abc" } } } Processor state change When an invalid request to change the state of a processor is issued. message : "Processor state cannot be changed to 'DISABLED' since it is 'DISABLED'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR STATE CHANGE INVALID" domain : "documentai.googleapis.com" metadata { key : "current state" value : "DISABLED" } metadata { key : "processor id" value : "xyz" } metadata { key : "target state" value : "DISABLED" } } } Processor version state change When an invalid request to change the state of a processor version is issued. message : "ProcessorVersion state cannot be changed to 'DEPLOYING' since it is 'DEPLOYED'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR VERSION STATE CHANGE INVALID" domain : "documentai.googleapis.com" metadata { key : "current state" value : "DEPLOYED" } metadata { key : "processor id" value : "abc" } metadata { key : "target state" value : "DEPLOYING" } metadata { key : "version id" value : "xyz" } } } Processor not enabled When a request that depends on a specific processor is issued, but the processor is not enabled. message : "Processor 'xyz' is not enabled." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR NOT ENABLED" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "xyz" } metadata { key : "state" value : "DISABLED" } } } Processor version not deployed When a request that depends on a specific processor version being deployed is issued, but the processor is not deployed. message : "ProcessorVersion 'abc' is not deployed." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR VERSION NOT DEPLOYED" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "xyz" } metadata { key : "state" value : "TRAINING" } metadata { key : "version id" value : "abc" } } } Processor default version When a request which depends on a default version being configured is issued but there is not one configured. message : "Processor 'xyz' does not have a default version configured." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR DEFAULT VERSION UNSET" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "xyz" } } } Processor remove default version When a request to undeploy or delete a processor version is issued but it is configured as the default version. message : "ProcessorVersion 'xyz' cannot be undeployed or deleted as it is the default version." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR REMOVE DEFAULT VERSION" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "abc" } metadata { key : "version id" value : "xyz" } } } Dataset not initialized When a request that requires a dataset to be initialized is issued, but the dataset is not initialized. message : "Dataset is not initialized." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DATASET NOT INITIALIZED" domain : "documentai.googleapis.com" } } Dataset initialized or initializing When a request that requires a dataset to be uninitialized is issued, but the dataset is already initialized or is initializing. message : "Dataset is already initialized or is initializing." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DATASET INITIALIZED OR INITIALIZING" domain : "documentai.googleapis.com" } } Dataset Location Not Empty Error When a request requires a dataset storage location to be empty, but the folder contains objects. message : "Given dataset location is not empty.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- Full list of fields credit card last four digits currency end date net amount payment type purchase time receipt date start date supplier address supplier city supplier name tip amount total amount total tax amount line item line item/amount line item/description line item/product code Enriched fields You can find more information in the Enrichment & normalization page.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- Full list of fields credit card last four digits currency end date net amount payment type purchase time receipt date start date supplier address supplier city supplier name tip amount total amount total tax amount line item line item/amount line item/description line item/product code Enriched fields You can find more information in the Enrichment & normalization page.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.

