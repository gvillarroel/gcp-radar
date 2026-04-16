---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.874Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom splitter model pretrained-splitter-v1.5-2025-07-14"
feature_slug: "custom-splitter-model-pretrained-splitter-v1-5-2025-07-14"
latest_feature_date: "2026-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
keywords:
  - "custom"
  - "splitter"
  - "model"
  - "pretrained"
  - "v1"
  - "2025"
  - "07"
  - "14"
---

# Custom splitter model pretrained-splitter-v1.5-2025-07-14

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

This custom splitter model version is generally available; This custom splitter model version is generally available.

## Extended Definition

This custom splitter model version is generally available; This custom splitter model version is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)

## Supporting Pages

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Decide on a custom splitter version When using custom splitter, train on your own data or use a pre-trained version with generative AI, such as pretrained-splitter-v1.5-2025-07-14 .
- Model version Description Release channel Release date pretrained-splitter-v1.5-2025-07-14 GA model powered by the Gemini 2.5 Flash LLM.
- Stable July 14, 2025 pretrained-splitter-v1.6-2026-03-09 Release candidate powered by the Gemini 3.1 Flash LLM.
- Splitter description and usage You can create custom splitters that are specifically suited to your documents and trained and evaluated with your data, or deploy pretrained models with generative AI.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-splitter-v1.5-2025-07-14 Stable GA GA model powered by the Gemini 2.5 Flash LLM.
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- This model has improved quality compared to v1.5, and may have a higher latency. pretrained-foundation-model-v1.5.1-2025-08-07 Release candidate Public Preview Public preview model powered by the Gemini 2.5 Flash LLM.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-splitter-v1.5-2025-07-14 Stable GA GA model powered by the Gemini 2.5 Flash LLM.
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- This model has improved quality compared to v1.5, and may have a higher latency. pretrained-foundation-model-v1.5.1-2025-08-07 Release candidate Public Preview Public preview model powered by the Gemini 2.5 Flash LLM.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-splitter-v1.5-2025-07-14 Stable GA GA model powered by the Gemini 2.5 Flash LLM.
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- This model has improved quality compared to v1.5, and may have a higher latency. pretrained-foundation-model-v1.5.1-2025-08-07 Release candidate Public Preview Public preview model powered by the Gemini 2.5 Flash LLM.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

