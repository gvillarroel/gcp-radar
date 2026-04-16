---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.973Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor language support"
feature_slug: "custom-document-extractor-language-support"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "language"
  - "now"
  - "supports"
  - "an"
  - "additional"
---

# Custom Document Extractor language support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor now supports an additional 42 global languages.

## Extended Definition

Custom Document Extractor now supports an additional 42 global languages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)

## Supporting Pages

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- The Custom Document Extractor analysis page opens.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- When complete, you find the documents on the Manage Dataset tab with the label applied. (Optional) Train the processor If you're using v1.4, you must train the custom processor on training and test sets of data.
- You typically would use a custom classifier on documents that are different types, then use the identification to pass the documents to an extraction processor to extract the entities.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document custom extractor sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Entities to extract from Foundation Model CDE properties = [ documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Custom Document Extractor The Custom Document Extractor processor can extract custom entities from documents which don't have a pretrained processor available.
- The following parsers do follow it: Extract (Custom Extractor) Legacy Bank statement parser Expense parser Invoice Parser PaySlip parser W2 Parser Code samples The following code samples demonstrate how to send a processing request and then read and print the fields from a specialized processor to the terminal: Java For more information, see the Document AI Java API reference documentation .
- The following code sample demonstrates how to configure specific entities for a foundation model Custom Document Extractor on a per-request basis and print the extracted entities: Python For more information, see the Document AI Python API reference documentation .

