---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.006Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient"
keywords:
  - "vpc"
  - "controls"
  - "document"
  - "ai"
  - "supports"
  - "for"
  - "additional"
  - "resource"
---

# VPC Service Controls support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI supports VPC Service Controls for additional resource and service security.

## Extended Definition

Document AI supports VPC Service Controls for additional resource and service security.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- DocumentProcessorServiceClient ( client options = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) ) The full resource name of the processor version, e.g.: projects/{project id}/locations/{location}/processors/{processor id}/processorVersions/{processor version id} You must create a processor before running this sample. name = client . processor version path ( project id , location , processor id , processor version ) Read the file into memory with open ( file path , "rb" ) as image : image content = image . read () Configure the process request request = documentai .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- DocumentProcessorServiceClient ( client options = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) ) The full resource name of the processor version, e.g.: projects/{project id}/locations/{location}/processors/{processor id}/processorVersions/{processor version id} You must create a processor before running this sample. name = client . processor version path ( project id , location , processor id , processor version ) Read the file into memory with open ( file path , "rb" ) as image : image content = image . read () Configure the process request request = documentai .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .
- The resource name of the Evaluation to get. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the ProcessorVersion to list evaluations for. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the ProcessorVersion to evaluate. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the processor version field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DocumentProcessorServiceClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .
- The resource name of the Evaluation to get. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the ProcessorVersion to list evaluations for. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the ProcessorVersion to evaluate. projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the processor version field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

