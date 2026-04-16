---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.006Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "France Passport Parser"
feature_slug: "france-passport-parser"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/create-processor"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "france"
  - "passport"
  - "parser"
  - "the"
  - "is"
  - "available"
  - "in"
  - "limited"
---

# France Passport Parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The France Passport Parser is available in limited preview.

## Extended Definition

The France Passport Parser is available in limited preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.
- This is the default pre-trained processor version. pretrained-layout-parser-v1.5-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Flash LLM for better layout analysis on PDF files.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

### Creating and managing processors \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The publicly available processor types are: Digitize processors OCR PROCESSOR FORM PARSER PROCESSOR LAYOUT PARSER PROCESSOR Pretrained processors BANK STATEMENT PROCESSOR EXPENSE PROCESSOR FORM W2 PROCESSOR ID PROOFING PROCESSOR INVOICE PROCESSOR PAYSTUB PROCESSOR US DRIVER LICENSE PROCESSOR US PASSPORT PROCESSOR UTILITY PROCESSOR Extract / classify / split processors CUSTOM EXTRACTION PROCESSOR CUSTOM CLASSIFICATION PROCESSOR CUSTOM SPLITTING PROCESSOR SUMMARIZER PROCESSOR List processor types Web UI In the Google Cloud console, in the Document AI section, go to the Processor Gallery page.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :fetchProcessorTypes" Select-Object -Expand Content The response is a list of ProcessorType which shows the available processor types, along with the category and available locations. { "processorTypes": [ [ ... { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/FORM PARSER PROCESSOR", "type": "FORM PARSER PROCESSOR", "category": "GENERAL", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/OCR PROCESSOR", "type": "OCR PROCESSOR", "category": "GENERAL", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/INVOICE PROCESSOR", "type": "INVOICE PROCESSOR", "category": "SPECIALIZED", "availableLocations": [ { "locationId": "eu" }, { "locationId": "us" } ], "allowCreation": true, "launchStage": "GA" }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processorTypes/US DRIVER LICENSE PROCESSOR", "type": "US DRIVER LICENSE PROCESSOR", "category": "SPECIALIZED", "availableLocations": [ { "locationId": "us" }, { "locationId": "eu" } ], "allowCreation": true, "launchStage": "GA" }, ... ] } Python For more information, see the Document AI Python API reference documentation .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors" Select-Object -Expand Content The response is a list of Processors , which contains information about each processor such as its name , type , state , and other details. { "processors": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "type": "FORM PARSER PROCESSOR", "displayName": " DISPLAY NAME ", "state": "ENABLED", "processEndpoint": "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID :process", "createTime": "2022-03-02T22:33:54.938593Z", "defaultProcessorVersion": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained" } ] } Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . from google.api core.client options import ClientOptions from google.cloud import documentai # type: ignore TODO(developer): Uncomment these variables before running the sample. project id = 'YOUR PROJECT ID' location = 'YOUR PROCESSOR LOCATION' # Format is 'us' or 'eu' processor display name = 'YOUR PROCESSOR DISPLAY NAME' # Must be unique per project, e.g.: 'My Processor' processor type = 'YOUR PROCESSOR TYPE' # Use fetch processor types to get available processor types def create processor sample ( project id : str , location : str , processor display name : str , processor type : str ) - > None : You must set the api endpoint if you use a location other than 'us'. opts = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) client = documentai .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.
- This is the default pre-trained processor version. pretrained-layout-parser-v1.5-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Flash LLM for better layout analysis on PDF files.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.
- This is the default pre-trained processor version. pretrained-layout-parser-v1.5-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Flash LLM for better layout analysis on PDF files.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Supported form/versions 2020 (standard and customized versions) 2019 (standard and customized versions) 2018 (standard and customized versions) Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-w2-v1.0-2020-10-01 Stable GA None pretrained-w2-v1.1-2022-01-27 Stable GA None pretrained-w2-v1.2-2022-01-28 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress EmployeeName EmployerNameAndAddress EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalityName Line1 LocalWagesTipsEtc Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages SSN State Line1 StateIncomeTax Line1 StateWagesTipsEtc Line1 WagesTipsOtherCompensation Quality improvements and supporting new fields; does not include splitter. pretrained-w2-v2.0-2022-03-30 Release Candidate Public Preview Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Quality improvements and support for box 12 fields and fine-grained predictions of EmployeeName , EmployeeAddress , and EmployerNameAndAddress , all of which are no longer part of the output and are replaced with additional fields. pretrained-w2-v2.1-2022-06-08 Stable GA Show fields AllocatedTips ControlNumber DependentCareBenefits EIN EmployeeAddress AdditionalStreetAddressOrPostalBox EmployeeAddress City EmployeeAddress State EmployeeAddress StreetAddressOrPostalBox EmployeeAddress Zip EmployeeName FirstName EmployeeName LastName EmployeeName MiddleNameOrInitial EmployeeName Suffix EmployerAddress AdditionalStreetAddressOrPostalBox EmployerAddress City EmployerAddress State EmployerAddress StreetAddressOrPostalBox EmployerAddress Zip EmployerName EmployerStateIdNumber Line1 FederalIncomeTaxWithheld FormYear LocalIncomeTax Line1 LocalWagesTipsEtc Line1 LocalityName Line1 MedicareTaxWithheld MedicareWagesAndTips NonqualifiedPlans SSN SocialSecurityTaxWithheld SocialSecurityTips SocialSecurityWages StateIncomeTax Line1 StateWagesTipsEtc Line1 State Line1 WagesTipsOtherCompensation a Code a Value b Code b Value c Code c Value d Code d Value Similar to version pretrained-w2-v2.0-2022-03-30 with further quality enhancements and introducing one more entity EmployeeName Suffix .

