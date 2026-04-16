---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.137Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Store-level DICOM/FHIR de-identification"
feature_slug: "store-level-dicom-fhir-de-identification"
latest_feature_date: "2019-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification"
  - "https://docs.cloud.google.com/healthcare-api/docs/introduction"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "store"
  - "level"
  - "dicom"
  - "fhir"
  - "de"
  - "identification"
  - "healthcare"
  - "added"
---

# Store-level DICOM/FHIR de-identification

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API added support for configuring de-identification at the individual DICOM and FHIR store level.

## Extended Definition

Cloud Healthcare API added support for configuring de-identification at the individual DICOM and FHIR store level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- [https://docs.cloud.google.com/healthcare-api/docs/introduction](https://docs.cloud.google.com/healthcare-api/docs/introduction)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- De-identification location When the Cloud Healthcare API de-identifies data, the data might be processed in a location that is different from where the source and destination FHIR or DICOM store resides.
- The Cloud Healthcare API detects sensitive data in DICOM instances and FHIR resources , such as protected health information (PHI), and then uses a de-identification transformation to mask, delete, or otherwise obscure the data.
- If you are de-identifying data at the DICOM or FHIR store level, de-identified copies of the original data are written to an existing DICOM or FHIR store in an existing dataset.
- After de-identification finishes, the data is stored in the same Google Cloud location as the source FHIR store or DICOM store.

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID :getSeriesMetrics" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID :getSeriesMetrics" Select-Object -Expand Content APIs Explorer Open the method reference page .
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID :getStudyMetrics" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID :getStudyMetrics" Select-Object -Expand Content APIs Explorer Open the method reference page .

### Overview of the Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/introduction](https://docs.cloud.google.com/healthcare-api/docs/introduction)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data de-identification The Cloud Healthcare API supports de-identifying data at the dataset, FHIR store, and DICOM store level.
- Data model The API consists of three modalities that implement individual industry-wide standards: Medical imaging data in the Digital Imaging and Communications in Medicine (DICOM) format Clinical event messages in the Health Level Seven Version 2.x (HL7v2) format Clinical resources in the Fast Healthcare Interoperability Resources (FHIR) format Each modality has different structural and processing characteristics, but they are all backed by a standards-compliant data store that provides read, write, search, and other operations on the data.
- The API supports the following applications: Healthcare machine learning applications Data-level integration of healthcare systems Secure storage and retrieval of healthcare and life science data, including electronic protected health information (ePHI) and other forms of PII For many applications, the Cloud Healthcare API can provide a cloud-based alternative to on-premises stacks implementing the following standards: Digital Imaging and Communications in Medicine (DICOM) Fast Healthcare Interoperability Resources (FHIR) DSTU2, STU3, and R4 standards Health Level Seven Version 2.x (HL7v2) The Cloud Healthcare API simplifies data integration with existing systems and allows developers to focus on differentiating features, such as UX and intelligence.
- Bulk import and export The Cloud Healthcare API's DICOM and FHIR modalities support bulk import and export of data, making it easier to transfer data to and from Cloud Storage .

