# WriteDisposition enum support for Healthcare API export methods

Product: Cloud Healthcare API
Feature slug: `writedisposition-enum-support-for-healthcare-api-export-methods`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The WriteDisposition enum can now be used to control overwrite versus append behavior for DICOM, FHIR, and annotation store export operations.

## Lifecycle

- Latest feature date: 2020-10-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- allow (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- constraint (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- encrypt (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- key (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- kms (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- policy (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
