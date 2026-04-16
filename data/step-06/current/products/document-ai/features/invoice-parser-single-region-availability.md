---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.990Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Invoice Parser single-region availability"
feature_slug: "invoice-parser-single-region-availability"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/create-processor"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "invoice"
  - "parser"
  - "single"
  - "region"
  - "availability"
  - "is"
  - "available"
  - "in"
---

# Invoice Parser single-region availability

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Invoice Parser is available in the australia-southeast1 and northamerica-northeast1 single-region locations.

## Extended Definition

Invoice Parser is available in the australia-southeast1 and northamerica-northeast1 single-region locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Creating and managing processors \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :fetchProcessorTypes" Select-Object -Expand Content The response is a list of ProcessorType which shows the available processor types, along with the category and available locations. { "processorTypes": [ [ ... { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/FORM PARSER PROCESSOR", "type": "FORM PARSER PROCESSOR", "category": "GENERAL", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/OCR PROCESSOR", "type": "OCR PROCESSOR", "category": "GENERAL", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/INVOICE PROCESSOR", "type": "INVOICE PROCESSOR", "category": "SPECIALIZED", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/US DRIVER LICENSE PROCESSOR", "type": "US DRIVER LICENSE PROCESSOR", "category": "SPECIALIZED", "availableLocations": [ { "locationId": "us" }, { "locationId": "eu" } ], "allowCreation": true, "launchStage": "GA" }, ... ] } Python For more information, see the Document AI Python API reference documentation .
- The publicly available processor types are: Digitize processors OCR PROCESSOR FORM PARSER PROCESSOR LAYOUT PARSER PROCESSOR Pretrained processors BANK STATEMENT PROCESSOR EXPENSE PROCESSOR FORM W2 PROCESSOR ID PROOFING PROCESSOR INVOICE PROCESSOR PAYSTUB PROCESSOR US DRIVER LICENSE PROCESSOR US PASSPORT PROCESSOR UTILITY PROCESSOR Extract / classify / split processors CUSTOM EXTRACTION PROCESSOR CUSTOM CLASSIFICATION PROCESSOR CUSTOM SPLITTING PROCESSOR SUMMARIZER PROCESSOR List processor types Web UI In the Google Cloud console, in the Document AI section, go to the Processor Gallery page.
- PROCESSOR TYPE : Type of the Processor, for example: OCR PROCESSOR FORM PARSER PROCESSOR INVOICE PROCESSOR US DRIVER LICENSE PROCESSOR DISPLAY NAME : Display name for the processor.
- Processor ; public class SyncListProcessors { public static void main ( String [] args ) throws Exception { syncListProcessors (); } public static void syncListProcessors () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorsRequest request = ListProcessorsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Processor element : documentProcessorServiceClient . listProcessors ( request ). iterateAll ()) { // doThingsWith(element); } } } } Ruby For more information, see the Document AI Ruby API reference documentation .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API INVOICE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn Estonian et Latn French fr Latn Italian it Latn Latvian lv Latn Lithuanian lt Latn Dutch nl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Swedish sv Latn Processor versions Version ID Release Channel Release Maturity Additional languages supported Description pretrained-invoice-v1.1-2021-04-09 Stable GA None pretrained-invoice-v1.2-2022-02-18 Stable GA None Deprecation is planned soon. pretrained-invoice-v1.3-2022-07-15 Stable GA it : Italian pt : Portuguese (Portugal & Brazil) ro : Romanian sv : Swedish et : Estonian lv : Latvian lt : Lithuanian Uptrainable processor version.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- Example: projects/my-proj/locations/us/processors/my-processor/processorVersions/pretrained-invoice-v1.2-2022-02-18:process If you specify a channel then the latest version in that channel is used. (Options: stable , rc ) Example: projects/my-proj/locations/us/processors/my-processor/processorVersions/stable:process View available version Note: Some processors have only one version.
- Note: Processor version import is not supported for destination projects operating in single-region locations , except for asia-south1 , and northamerica-northeast1 .
- SetDefaultProcessorVersionResponse ; public class SyncSetDefaultProcessorVersion { public static void main ( String [] args ) throws Exception { syncSetDefaultProcessorVersion (); } public static void syncSetDefaultProcessorVersion () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { SetDefaultProcessorVersionRequest request = SetDefaultProcessorVersionRequest . newBuilder () . setProcessor ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setDefaultProcessorVersion ( ProcessorVersionName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" , "[PROCESSOR VERSION]" ) . toString ()) . build (); SetDefaultProcessorVersionResponse response = documentProcessorServiceClient . setDefaultProcessorVersionAsync ( request ). get (); } } } Python For more information, see the Document AI Python API reference documentation .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API INVOICE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn Estonian et Latn French fr Latn Italian it Latn Latvian lv Latn Lithuanian lt Latn Dutch nl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Swedish sv Latn Processor versions Version ID Release Channel Release Maturity Additional languages supported Description pretrained-invoice-v1.1-2021-04-09 Stable GA None pretrained-invoice-v1.2-2022-02-18 Stable GA None Deprecation is planned soon. pretrained-invoice-v1.3-2022-07-15 Stable GA it : Italian pt : Portuguese (Portugal & Brazil) ro : Romanian sv : Swedish et : Estonian lv : Latvian lt : Lithuanian Uptrainable processor version.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .

