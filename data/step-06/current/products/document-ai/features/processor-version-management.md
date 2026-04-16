---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.049Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Processor version management"
feature_slug: "processor-version-management"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/copy-processor-versions"
keywords:
  - "processor"
  - "version"
  - "management"
  - "document"
  - "ai"
  - "lets"
  - "you"
  - "switch"
---

# Processor version management

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI lets you switch between different versions of a processor.

## Extended Definition

Document AI lets you switch between different versions of a processor.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/copy-processor-versions](https://docs.cloud.google.com/document-ai/docs/copy-processor-versions)

## Supporting Pages

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .
- SetDefaultProcessorVersionRequest ( processor="processor value", default processor version="default processor version value", ) Make the request operation = client. set default processor version (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.documentai v1.types.SetDefaultProcessorVersionRequest , dict]] The request object.
- EvaluateProcessorVersionRequest ( processor version="processor version value", ) Make the request operation = client. evaluate processor version (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.documentai v1.types.EvaluateProcessorVersionRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample set default processor version(): Create a client client = documentai v1 .

### "Class DocumentProcessorServiceClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- Source ID: `site-python-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.documentai v1.types.ProcessResponse Response message for the ProcessDocument method. processor path processor path ( project : str , location : str , processor : str ) - > str Returns a fully-qualified processor string. processor type path processor type path ( project : str , location : str , processor type : str ) - > str Returns a fully-qualified processor type string. processor version path processor version path ( project : str , location : str , processor : str , processor version : str ) - > str Returns a fully-qualified processor version string. review document review document ( request : typing .
- SetDefaultProcessorVersionRequest ( processor="processor value", default processor version="default processor version value", ) Make the request operation = client. set default processor version (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.documentai v1.types.SetDefaultProcessorVersionRequest , dict] The request object.
- EvaluateProcessorVersionRequest ( processor version="processor version value", ) Make the request operation = client. evaluate processor version (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.documentai v1.types.EvaluateProcessorVersionRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 def sample set default processor version(): Create a client client = documentai v1 .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// DESTINATION LOCATION -documentai.googleapis.com/v1beta3/projects/ DESTINATION PROJECT ID /locations/ DESTINATION LOCATION /processors/ DESTINATION PROCESSOR ID /processorVersions:importProcessorVersion" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ DESTINATION PROJECT ID /locations/ DESTINATION LOCATION /operations/ OPERATION ID " } If you're importing across a Virtual Private Cloud service controls (VPC-SC) perimeter, review configuring ingress and egress policies and set up a VPC Service Controls perimeter , then set the following rules.
- For more information, see Set up authentication for a local development environment . from google.api core.client options import ClientOptions from google.api core.exceptions import FailedPrecondition from google.api core.exceptions import InvalidArgument from google.cloud import documentai # type: ignore TODO(developer): Uncomment these variables before running the sample. project id = 'YOUR PROJECT ID' location = 'YOUR PROCESSOR LOCATION' # Format is 'us' or 'eu' processor id = 'YOUR PROCESSOR ID' # Create processor before running sample processor version id = 'YOUR PROCESSOR VERSION ID' def undeploy processor version sample ( project id : str , location : str , processor id : str , processor version id : str ) - > None : You must set the api endpoint if you use a location other than 'us'. opts = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) client = documentai .
- For more information, see Set up authentication for a local development environment . from google.api core.client options import ClientOptions from google.api core.exceptions import FailedPrecondition from google.api core.exceptions import InvalidArgument from google.cloud import documentai # type: ignore TODO(developer): Uncomment these variables before running the sample. project id = 'YOUR PROJECT ID' location = 'YOUR PROCESSOR LOCATION' # Format is 'us' or 'eu' processor id = 'YOUR PROCESSOR ID' # Create processor before running sample processor version id = 'YOUR PROCESSOR VERSION ID' def delete processor version sample ( project id : str , location : str , processor id : str , processor version id : str ) - > None : You must set the api endpoint if you use a location other than 'us'. opts = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) client = documentai .

### "Copy processor versions and datasets across projects \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/copy-processor-versions](https://docs.cloud.google.com/document-ai/docs/copy-processor-versions)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default value is False . source exported gcs path : Provide Cloud Storage path to store JSON files. destination project id : Provide destination project ID. destination processor id : Provide Google Cloud Document AI Processor ID, either "" or processor id from destination project. source project id = " source-project-id " source location = " processor-location " source processor id = " source-processor-id " source processor version to import = " source-processor-version-id " migrate dataset = False # Either True or False source exported gcs path = ( "gs://bucket/path/to/export dataset/" ) destination project id = "< destination-project-id >" Give an empty string if you wish to create a new processor destination processor id = "" Step 5: Run the code import time from pathlib import Path from typing import Optional , Tuple from google.cloud.documentai v1beta3.services.document service import pagers from google.api core.client options import ClientOptions from google.api core.operation import Operation from google.cloud import documentai v1beta3 as documentai from google.cloud import storage from tqdm import tqdm source project id = " source-project-id " source location = " processor-location " source processor id = " source-processor-id " source processor version to import = " source-processor-version-id " migrate dataset = False # Either True or False source exported gcs path = ( "gs://bucket/path/to/export dataset/" ) destination project id = "< destination-project-id >" Give empty string if you wish to create a new processor destination processor id = "" exported bucket name = source exported gcs path . split ( "/" )[ 2 ] exported bucket path prefix = "/" . join ( source exported gcs path . split ( "/" )[ 3 :]) destination location = source location def sample get processor ( project id : str , processor id : str , location : str ) - > Tuple [ str , str ]: """ This function returns Processor Display Name and Type of Processor from source project Args: project id (str): Project ID processor id (str): Document AI Processor ID location (str): Processor Location Returns: Tuple[str, str]: Returns Processor Display name and type """ client = documentai .
- Credentials . from service account file ( service account key ) pass this credentials variable to all client initializations storage client = storage.Client(credentials=credentials) docai client = documentai.DocumentProcessorServiceClient(credentials=credentials) Step 3: Import libraries import time from pathlib import Path from typing import Optional , Tuple from google.cloud.documentai v1beta3.services.document service import pagers from google.api core.client options import ClientOptions from google.api core.operation import Operation from google.cloud import documentai v1beta3 as documentai from google.cloud import storage from tqdm import tqdm Step 4: Input details source project id : Provide source project ID. source location : Provide Source Processor Location ( us or eu ). source processor id : Provide Google Cloud Document AI Processor ID. source processor version to import : Provide Google Cloud Document AI Processor Version ID for the trained version. migrate dataset: Provide this value as either True or False , if you want to migrate dataset from source processor to destination processor then provide True , else False .
- Home Documentation AI and ML Document AI Guides Send feedback Copy processor versions and datasets across projects Stay organized with collections Save and categorize content based on your preferences.
- SetDefaultProcessorVersionRequest ( processor = processor name , default processor version = default processor version name , ) operation = client . set default processor version ( request = request ) print ( f "Setting default processor version: { operation . operation . name } " ) operation . result () print ( f "Default processor version set { default processor version name } " ) def main ( destination processor id : str , migrate dataset : bool = False ) - > None : """Entry function to perform Processor Migration from Source Project to Destination project Args: destination processor id (str): Either empty string or processor id in desination project """ Checking processor id of destination project if destination processor id == "" : Fetching Processor Display Name and Type of Processor from source project display name , processor type = sample get processor ( source project id , source processor id , source location ) Creating Processor in Destination project des processor = sample create processor ( destination project id , destination location , display name , processor type ) print ( des processor ) destination processor id = des processor . name . split ( "/" )[ - 1 ] configuring dataset for target processor in destination project r = initialize dataset ( destination project id , destination processor id , destination location ) fetching processor schema from source processor exported schema = get dataset schema ( source project id , source processor id , source location ) exported schema . name = f "projects/ { destination project id } /locations/ { destination location } /processors/ { destination processor id } /dataset/datasetSchema" Copying schema from source processor to desination processor import schema = upload dataset schema ( exported schema ) if migrate dataset == True : # to migrate dataset from source to destination processor print ( "Migrating Dataset from source to destination processor" ) Fetching/listing the samples/JSONs present in source processor dataset results = list documents ( source project id , source location , source processor id ) document list = results . document metadata while len ( document list ) != results . total size : page token = results . next page token results = list documents ( source project id , source location , source processor id , page token = page token , ) document list . extend ( results . document metadata ) print ( "Exporting Dataset..." ) for doc in tqdm ( document list ): doc id = doc . document id split type = doc . dataset type if split type == 3 : split = "unassigned" elif split type == 2 : split = "test" elif split type == 1 : split = "train" else : split = "unknown" file name = doc . display name fetching/downloading data for individual sample/document present in dataset res = get document ( source project id , source location , source processor id , doc id ) output file name = ( f " { exported bucket path prefix . strip ( '/' ) } / { split } / { file name } .json" ) Converting Document AI Proto object to JSON string json data = documentai .

