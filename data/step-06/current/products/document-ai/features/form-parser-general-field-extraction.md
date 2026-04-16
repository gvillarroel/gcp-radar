---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.955Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Form Parser general field extraction"
feature_slug: "form-parser-general-field-extraction"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
keywords:
  - "form"
  - "parser"
  - "general"
  - "field"
  - "extraction"
  - "v2"
  - "can"
  - "extract"
---

# Form Parser general field extraction

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Form Parser v2.0 can extract 11 different entity types from documents.

## Extended Definition

Form Parser v2.0 can extract 11 different entity types from documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)

## Supporting Pages

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Data-extraction features Form Parser features encompass: KVP: These are sets of two items within a document—a label or key and its corresponding data (a value).
- Form Parser extracts key-value pairs (KVPs), tables, selection marks (like checkboxes), generic fields, and text to augment and automate document processing.
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Limited security Type in API UTILITY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-utility-v1.1-2021-04-09 Stable GA Note: Will be discontinued starting June 30, 2026. pretrained-utility-v1.2-2022-12-15 Release Candidate Public Preview Note: Will be discontinued starting June 30, 2026.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Limited security Type in API UTILITY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-utility-v1.1-2021-04-09 Stable GA Note: Will be discontinued starting June 30, 2026. pretrained-utility-v1.2-2022-12-15 Release Candidate Public Preview Note: Will be discontinued starting June 30, 2026.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Limited security Type in API UTILITY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-utility-v1.1-2021-04-09 Stable GA Note: Will be discontinued starting June 30, 2026. pretrained-utility-v1.2-2022-12-15 Release Candidate Public Preview Note: Will be discontinued starting June 30, 2026.

