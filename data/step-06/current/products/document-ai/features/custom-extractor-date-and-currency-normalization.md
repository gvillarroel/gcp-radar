---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.931Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Extractor date and currency normalization"
feature_slug: "custom-extractor-date-and-currency-normalization"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/normalization"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "custom"
  - "extractor"
  - "date"
  - "and"
  - "currency"
  - "normalization"
  - "uses"
  - "document"
---

# Custom Extractor date and currency normalization

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Extractor date and currency normalization uses document region to disambiguate ambiguous dates and currencies.

## Extended Definition

Custom Extractor date and currency normalization uses document region to disambiguate ambiguous dates and currencies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/normalization](https://docs.cloud.google.com/document-ai/docs/normalization)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following parsers do follow it: Extract (Custom Extractor) Legacy Bank statement parser Expense parser Invoice Parser PaySlip parser W2 Parser Code samples The following code samples demonstrate how to send a processing request and then read and print the fields from a specialized processor to the terminal: Java For more information, see the Document AI Java API reference documentation .
- The following code sample demonstrates how to configure specific entities for a foundation model Custom Document Extractor on a per-request basis and print the extracted entities: Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document custom extractor sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Entities to extract from Foundation Model CDE properties = [ documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Custom Document Extractor The Custom Document Extractor processor can extract custom entities from documents which don't have a pretrained processor available.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- In the currency code example, you can create a field with the name currency code and provide the following description: "Find the ISO 4217 currency code of the amount values in the document, using contextual signals present in the document, like currency symbols and addresses." Limitations Derived fields are generated on a per-page basis.

### Normalization \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/normalization](https://docs.cloud.google.com/document-ai/docs/normalization)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported processors Here are the processors and fields that support entity enrichment and normalization: Processors Normalized fields Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry ending balance starting balance statement date statement end date statement start date table item/transaction deposit table item/transaction deposit date table item/transaction withdrawal table item/transaction withdrawal date US Passport Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry Date Of Birth Expiration Date Issue Date Utility Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Limited security Full processor details Detailed entry adjusted amount amount due balance transfer amount currency currency exchange rate delivery date due date invoice date late fee amount line item/amount line item/quantity line item/tax amount line item/unit price net amount prior amount due prior paid amount total amount total tax amount Identity Document Proofing Parser Category Pretrained Solution type Identity Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Pay Slip Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry bonus bonus ytd commissions commissions ytd direct deposit end date gross earnings gross earnings ytd holiday holiday ytd net pay net pay ytd overtime overtime ytd pay date regular pay regular pay ytd start date vacation vacation ytd US Driver License Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry Date Of Birth Expiration Date Issue Date Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry currency total amount total tax amount net amount receipt date purchase time start date end date line item/amount line item/payment date line item/payment amount Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry amount paid since last invoice currency currency exchange rate delivery date due date freight amount invoice date net amount total amount total tax amount line item/amount line item/quantity line item/unit price vat/amount vat/tax amount vat/tax rate Extraction processors Custom extractor supports normalization of all entities with the following Google Cloud common data types: dateTime , currency , money , and number .
- Processors Normalized data types Custom Extractor Category Extract Solution type Custom Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry dateTime as STRING currency as STRING money as google.type.Money number as FLOAT or INTEGER Previous arrow back Enrichment Next BigQuery integration arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Normalization Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Expense Parser Description Extract text and values from expense documents such as expense date, supplier name, total amount, and currency.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.

