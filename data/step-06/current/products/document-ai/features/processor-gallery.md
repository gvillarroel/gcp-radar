---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.978Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Processor gallery"
feature_slug: "processor-gallery"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/create-processor"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
keywords:
  - "processor"
  - "gallery"
  - "the"
  - "has"
  - "been"
  - "upgraded"
---

# Processor gallery

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The processor gallery has been upgraded.

## Extended Definition

The processor gallery has been upgraded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)

## Supporting Pages

### Creating and managing processors \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Processor ; public class SyncListProcessors { public static void main ( String [] args ) throws Exception { syncListProcessors (); } public static void syncListProcessors () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorsRequest request = ListProcessorsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Processor element : documentProcessorServiceClient . listProcessors ( request ). iterateAll ()) { // doThingsWith(element); } } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- Processor ; public class SyncCreateProcessor { public static void main ( String [] args ) throws Exception { syncCreateProcessor (); } public static void syncCreateProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { CreateProcessorRequest request = CreateProcessorRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setProcessor ( Processor . newBuilder (). build ()) . build (); Processor response = documentProcessorServiceClient . createProcessor ( request ); } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- ProcessorName ; public class SyncDisableProcessor { public static void main ( String [] args ) throws Exception { syncDisableProcessor (); } public static void syncDisableProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { DisableProcessorRequest request = DisableProcessorRequest . newBuilder () . setName ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . build (); DisableProcessorResponse response = documentProcessorServiceClient . disableProcessorAsync ( request ). get (); } } } Ruby For more information, see the Document AI Ruby API reference documentation .
- ProcessorName ; public class SyncEnableProcessor { public static void main ( String [] args ) throws Exception { syncEnableProcessor (); } public static void syncEnableProcessor () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { EnableProcessorRequest request = EnableProcessorRequest . newBuilder () . setName ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . build (); EnableProcessorResponse response = documentProcessorServiceClient . enableProcessorAsync ( request ). get (); } } } Ruby For more information, see the Document AI Ruby API reference documentation .

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- AsyncOperation Disables a processor This snippet has been automatically generated and should be regarded as a code template only.
- AsyncOperation Enables a processor This snippet has been automatically generated and should be regarded as a code template only.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create processor create processor ( request : typing .
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .

### "Class DocumentProcessorServiceClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- Source ID: `site-python-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Operation Disables a processor This snippet has been automatically generated and should be regarded as a code template only.
- Operation Enables a processor This snippet has been automatically generated and should be regarded as a code template only.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create processor create processor ( request : typing .
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- SetDefaultProcessorVersionResponse ; public class SyncSetDefaultProcessorVersion { public static void main ( String [] args ) throws Exception { syncSetDefaultProcessorVersion (); } public static void syncSetDefaultProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { SetDefaultProcessorVersionRequest request = SetDefaultProcessorVersionRequest . newBuilder () . setProcessor ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setDefaultProcessorVersion ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); SetDefaultProcessorVersionResponse response = documentProcessorServiceClient . setDefaultProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .
- ProcessorVersion ; public class SyncListProcessorVersions { public static void main ( String [] args ) throws Exception { syncListProcessorVersions (); } public static void syncListProcessorVersions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorVersionsRequest request = ListProcessorVersionsRequest . newBuilder () . setParent ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( ProcessorVersion element : documentProcessorServiceClient . listProcessorVersions ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python For more information, see the Document AI Python API reference documentation .
- UndeployProcessorVersionResponse ; public class SyncUndeployProcessorVersion { public static void main ( String [] args ) throws Exception { syncUndeployProcessorVersion (); } public static void syncUndeployProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { UndeployProcessorVersionRequest request = UndeployProcessorVersionRequest . newBuilder () . setName ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); UndeployProcessorVersionResponse response = documentProcessorServiceClient . undeployProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .
- ProcessorVersionName ; public class SyncDeployProcessorVersion { public static void main ( String [] args ) throws Exception { syncDeployProcessorVersion (); } public static void syncDeployProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { DeployProcessorVersionRequest request = DeployProcessorVersionRequest . newBuilder () . setName ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); DeployProcessorVersionResponse response = documentProcessorServiceClient . deployProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .

