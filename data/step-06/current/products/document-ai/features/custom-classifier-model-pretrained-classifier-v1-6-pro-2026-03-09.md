---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.874Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom classifier model pretrained-classifier-v1.6-pro-2026-03-09"
feature_slug: "custom-classifier-model-pretrained-classifier-v1-6-pro-2026-03-09"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/output"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "custom"
  - "classifier"
  - "model"
  - "pretrained"
  - "v1"
  - "pro"
  - "2026"
  - "03"
---

# Custom classifier model pretrained-classifier-v1.6-pro-2026-03-09

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

This custom classifier model version is available in Preview; This custom classifier model version is available in Preview.

## Extended Definition

This custom classifier model version is available in Preview; This custom classifier model version is available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Release Candidate Yes US, EU ( Preview ) March 9, 2026 pretrained-classifier-v1.6-pro-2026-03-09 Release candidate powered by the Gemini 3.1 Pro LLM.
- Model version Description Release channel ML processing in US/EU Fine-tuning in US/EU Release date pretrained-classifier-v1.5-2025-08-05 Production-ready model powered by the Gemini 2.5 Flash LLM.
- Stable Yes US, EU ( Preview ) August 5, 2025 pretrained-classifier-v1.6-2026-03-09 Release candidate powered by the Gemini 3.1 Flash LLM.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- It supports zero-shot classification and provides better support for the catch-all class. pretrained-classifier-v1.6-2026-03-09 Release Candidate Public Preview Release candidate powered by the Gemini 3.1 Flash LLM.
- Note: This version does not support data residency. pretrained-classifier-v1.6-pro-2026-03-09 Release Candidate Public Preview Release candidate powered by the Gemini 3.1 Pro LLM.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

### Sample processor output \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Digitize text Processors Output samples Enterprise Document OCR (Optical Character Recognition) Category Digitize Solution type General Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-ocr-v1.2-2022-11-10 Output Document JSON pretrained-ocr-v2.0-2023-06-02 Output Document JSON Checkbox Extraction - Document JSON Font Detection - Document JSON Math OCR - Document JSON pretrained-ocr-v2.1-2024-08-07 Output Document JSON Premium Output Document JSON pretrained-ocr-v2.1.1-2025-01-31 Output Document JSON Premium Output Document JSON Extract documents Processors Output samples Custom Extractor Category Extract Solution type Custom Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-foundation-model-v1.5-2025-05-05 Output Document JSON pretrained-foundation-model-v1.5-pro-2025-06-20 Output Document JSON pretrained-foundation-model-v1.5.1-2025-08-07 Output Document JSON pretrained-foundation-model-v1.6-pro-2025-12-01 Output Document JSON pretrained-foundation-model-v1.6-2026-01-13 Output Document JSON Form Parser Category Extract Solution type General Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-form-parser-v1.0-2020-09-23 Output Document JSON pretrained-form-parser-v2.0-2022-11-10 Output Document JSON pretrained-form-parser-v2.1-2023-06-26 Output Document JSON Layout Parser Category Extract Solution type General Functions Layout Parsing, Document Chunking Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-layout-parser-v1.0-2024-06-03 Output Document JSON Classify documents Processors Output samples Custom Classifier Category Classify Solution type Custom Functions OCR, Classification Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-classifier-v1.5-2025-08-05 Output Document JSON pretrained-classifier-v1.6-2026-03-09 Output Document JSON pretrained-classifier-v1.6-pro-2026-03-09 Output Document JSON Custom Splitter Category Classify Solution type Custom Functions OCR, Classification, Splitting Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-splitter-v1.5-2025-07-14 Output Document JSON pretrained-splitter-v1.6-2026-03-09 Output Document JSON pretrained-splitter-v1.6-pro-2026-03-09 Output Document JSON Explore pretrained processors Processors Output samples Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-bankstatement-v1.0-2021-08-08 Output Document JSON pretrained-bankstatement-v1.1-2021-08-13 Output Document JSON pretrained-bankstatement-v2.0-2021-12-10 Output Document JSON pretrained-bankstatement-v3.0-2022-05-16 Output Document JSON pretrained-bankstatement-v4.0-2023-07-31 Output Document JSON pretrained-bankstatement-v5.0-2023-12-06 Output Document JSON W2 Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-w2-v1.0-2020-10-01 Output Document JSON pretrained-w2-v1.1-2022-01-27 Output Document JSON pretrained-w2-v1.2-2022-01-28 Output Document JSON pretrained-w2-v2.0-2022-03-30 Output Document JSON pretrained-w2-v2.1-2022-06-08 Output Document JSON US Passport Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-passport-v1.0-2021-06-14 Output Document JSON Utility Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Limited security Full processor details Detailed entry picture as pdfs Sample input file pretrained-utility-v1.1-2021-04-09 Output Document JSON pretrained-utility-v1.2-2022-12-15 Output Document JSON Identity Document Proofing Parser Category Pretrained Solution type Identity Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-id-proofing-v1.0-2022-10-03 Output Document JSON pretrained-id-proofing-v1.1-2023-05-18 Output Document JSON pretrained-id-proofing-v1.2-2023-10-04 Output Document JSON US Driver License Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-driver-license-v1.0-2021-06-14 Output Document JSON Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-expense-v1.1-2021-04-09 Output Document JSON pretrained-expense-v1.3.2-2024-09-11 Output Document JSON pretrained-expense-v1.4-2022-11-18 Output Document JSON pretrained-expense-v1.4.2-2024-09-12 Output Document JSON Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-invoice-v1.1-2021-04-09 Output Document JSON pretrained-invoice-v1.2-2022-02-18 Output Document JSON pretrained-invoice-v1.3-2022-07-15 Output Document JSON pretrained-invoice-v1.4-2022-10-21 Output Document JSON pretrained-invoice-v1.5-2023-09-15 Output Document JSON pretrained-invoice-v2.0-2023-12-06 Output Document JSON Previous arrow back Client libraries Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation AI and ML Document AI Guides Send feedback Sample processor output Stay organized with collections Save and categorize content based on your preferences.
- The fields returned in the response can be limited by using a FieldMask when making a processing request .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- It supports zero-shot classification and provides better support for the catch-all class. pretrained-classifier-v1.6-2026-03-09 Release Candidate Public Preview Release candidate powered by the Gemini 3.1 Flash LLM.
- Note: This version does not support data residency. pretrained-classifier-v1.6-pro-2026-03-09 Release Candidate Public Preview Release candidate powered by the Gemini 3.1 Pro LLM.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

