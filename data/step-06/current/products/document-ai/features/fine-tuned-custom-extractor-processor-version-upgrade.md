---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.873Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Fine-tuned custom extractor processor version upgrade"
feature_slug: "fine-tuned-custom-extractor-processor-version-upgrade"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
keywords:
  - "fine"
  - "tuned"
  - "custom"
  - "extractor"
  - "processor"
  - "version"
  - "upgrade"
  - "this"
---

# Fine-tuned custom extractor processor version upgrade

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

This preview feature lets you upgrade a fine-tuned custom extractor processor to a newer base version while preserving the previous configuration.

## Extended Definition

This preview feature lets you upgrade a fine-tuned custom extractor processor to a newer base version while preserving the previous configuration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)

## Supporting Pages

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- For processor versions based on Gemini 1.5 and later, such as custom extractors pretrained-foundation-model-v1.2-2024-05-10 , you can import fine-tuned processor versions.
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- A processor can have one of the following versions : Stable version Release candidate (RC) Customized version and its associated base version This page describes how processors are versioned, and how to view and select a particular version.
- On the other hand, had you not created and evaluated the customized fine-tune-B version, then Google would have updated the default version of your processor to v1.2 on April 9, 2025.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the Version name field, enter a name for this processor version, such as w2-custom-model .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-paystub-v1.0-2021-03-19 Stable GA None pretrained-paystub-v1.1-2021-08-13 Stable GA Show fields net pay net pay ytd employee account number Quality improvement and new fields support; pretrained-paystub-v1.2-2021-12-10 Stable GA None pretrained-paystub-v2.0-2022-05-17 Release Candidate Public Preview Show fields deduction item deduction item/deduction type deduction item/deduction this period deduction item/deduction ytd direct deposit item direct deposit item/direct deposit direct deposit item/employee account number earning item earning item/earning type earning item/earning rate earning item/earning hours earning item/earning this period earning item/earning ytd page number tax item tax item/tax type tax item/tax this period tax item/tax ytd federal additional tax federal allowance federal marital status state additional tax state allowance state marital status This version assumes that the input file contains a single pay slip.
- Launched in April 2021. pretrained-expense-v1.3.2-2024-09-11 Release Candidate Public Preview Show fields credit card last four digits line item/quantity payment type ja : Japanese A fine-tuned upgrade to v1.3 with an enhanced underlying vision model. pretrained-expense-v1.4-2022-11-18 Stable GA Show fields traveler name reservation id line item/transaction date ja : Japanese it : Italian pt : Portuguese (Portugal & Brazil) Performance improvements and support for uptraining.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Your model is now deployed and documents sent to this processor now use your custom version.
- Documents sent to this processor use your custom version.
- Custom extractor with derived fields Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

