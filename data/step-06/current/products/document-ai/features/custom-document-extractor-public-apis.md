---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.975Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor public APIs"
feature_slug: "custom-document-extractor-public-apis"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-org-policies"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/create-processor"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "public"
  - "apis"
  - "adds"
  - "for"
  - "creating"
---

# Custom Document Extractor public APIs

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor adds public APIs for creating and managing models and datasets.

## Extended Definition

Custom Document Extractor adds public APIs for creating and managing models and datasets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)

## Supporting Pages

### Create custom constraints for Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Only custom extraction processor is allowed. name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCustomExtractor resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.type == 'CUSTOM EXTRACTION PROCESSOR'" actionType : ALLOW displayName : Enforce custom extraction processor type description : Allow creation of custom extraction processors Ensure that processors are encrypted with a KMS key. name : organizations/ ORGANIZATION ID /customConstraints/custom.encrypted resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.kmsKeyName.size() > 0" actionType : ALLOW displayName : Processor must be encrypted with a KMS key. description : Processor must be encrypted with a KMS key.
- Before you begin, prepare the following: Your organization ID Your project ID Create the constraint Save the following file as CONSTRAINT FILE NAME .yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCustomExtractor resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.type == 'CUSTOM EXTRACTION PROCESSOR'" actionType : ALLOW displayName : Enforce custom extraction processor type description : Allow creation of custom extraction processors Replace ORGANIZATION ID with your organization ID.
- Apply the constraint by using the gcloud org-policies set-custom-constraint command: gcloud org-policies set-custom-constraint CONSTRAINT FILE NAME .yaml Verify that the constraint exists using the gcloud org-policies list-custom-constraints command: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.enforceCustomExtractor ALLOW CREATE documentai.googleapis.com/Processor Enforce custom extraction processor type ...
- Apply the policy using the gcloud org-policies set-policy command: gcloud org-policies set-policy POLICY FILE NAME .yaml Verify that the policy exists using the gcloud org-policies list command: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.enforceCustomExtractor - SET CPiLkMMGEKDFq6IB- After you apply the policy, wait about two minutes for Google Cloud to start enforcing the policy.

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- SetDefaultProcessorVersionResponse ; public class SyncSetDefaultProcessorVersion { public static void main ( String [] args ) throws Exception { syncSetDefaultProcessorVersion (); } public static void syncSetDefaultProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { SetDefaultProcessorVersionRequest request = SetDefaultProcessorVersionRequest . newBuilder () . setProcessor ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setDefaultProcessorVersion ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); SetDefaultProcessorVersionResponse response = documentProcessorServiceClient . setDefaultProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .
- ProcessorVersion ; public class SyncListProcessorVersions { public static void main ( String [] args ) throws Exception { syncListProcessorVersions (); } public static void syncListProcessorVersions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorVersionsRequest request = ListProcessorVersionsRequest . newBuilder () . setParent ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( ProcessorVersion element : documentProcessorServiceClient . listProcessorVersions ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python For more information, see the Document AI Python API reference documentation .
- UndeployProcessorVersionResponse ; public class SyncUndeployProcessorVersion { public static void main ( String [] args ) throws Exception { syncUndeployProcessorVersion (); } public static void syncUndeployProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { UndeployProcessorVersionRequest request = UndeployProcessorVersionRequest . newBuilder () . setName ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); UndeployProcessorVersionResponse response = documentProcessorServiceClient . undeployProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .

### Creating and managing processors \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Processor ; public class SyncListProcessors { public static void main ( String [] args ) throws Exception { syncListProcessors (); } public static void syncListProcessors () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorsRequest request = ListProcessorsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Processor element : documentProcessorServiceClient . listProcessors ( request ). iterateAll ()) { // doThingsWith(element); } } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- Processor ; public class SyncCreateProcessor { public static void main ( String [] args ) throws Exception { syncCreateProcessor (); } public static void syncCreateProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { CreateProcessorRequest request = CreateProcessorRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setProcessor ( Processor . newBuilder (). build ()) . build (); Processor response = documentProcessorServiceClient . createProcessor ( request ); } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- ProcessorName ; public class SyncDisableProcessor { public static void main ( String [] args ) throws Exception { syncDisableProcessor (); } public static void syncDisableProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { DisableProcessorRequest request = DisableProcessorRequest . newBuilder () . setName ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . build (); DisableProcessorResponse response = documentProcessorServiceClient . disableProcessorAsync ( request ). get (); } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- ProcessorName ; public class SyncEnableProcessor { public static void main ( String [] args ) throws Exception { syncEnableProcessor (); } public static void syncEnableProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { EnableProcessorRequest request = EnableProcessorRequest . newBuilder () . setName ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . build (); EnableProcessorResponse response = documentProcessorServiceClient . enableProcessorAsync ( request ). get (); } } } Ruby For more information, see the Document AI Ruby API reference documentation .

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .

