---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.154Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Expanded DICOM/FHIR de-identification configuration"
feature_slug: "expanded-dicom-fhir-de-identification-configuration"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification"
  - "https://docs.cloud.google.com/healthcare-api/docs/introduction"
  - "https://docs.cloud.google.com/healthcare-api/docs/deid-showcase"
keywords:
  - "expanded"
  - "dicom"
  - "fhir"
  - "de"
  - "identification"
  - "configuration"
  - "healthcare"
  - "introduced"
---

# Expanded DICOM/FHIR de-identification configuration

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API introduced additional de-identification configuration options for DICOM and FHIR data, including more control over resource handling.

## Extended Definition

Cloud Healthcare API introduced additional de-identification configuration options for DICOM and FHIR data, including more control over resource handling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- [https://docs.cloud.google.com/healthcare-api/docs/introduction](https://docs.cloud.google.com/healthcare-api/docs/introduction)
- [https://docs.cloud.google.com/healthcare-api/docs/deid-showcase](https://docs.cloud.google.com/healthcare-api/docs/deid-showcase)

## Supporting Pages

### Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Healthcare API detects sensitive data in DICOM instances and FHIR resources , such as protected health information (PHI), and then uses a de-identification transformation to mask, delete, or otherwise obscure the data.
- De-identification location When the Cloud Healthcare API de-identifies data, the data might be processed in a location that is different from where the source and destination FHIR or DICOM store resides.
- After de-identification finishes, the data is stored in the same Google Cloud location as the source FHIR store or DICOM store.
- De-identification doesn't impact the original dataset, FHIR store, DICOM store, or the original data.

### Overview of the Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/introduction](https://docs.cloud.google.com/healthcare-api/docs/introduction)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data de-identification The Cloud Healthcare API supports de-identifying data at the dataset, FHIR store, and DICOM store level.
- The API supports the following applications: Healthcare machine learning applications Data-level integration of healthcare systems Secure storage and retrieval of healthcare and life science data, including electronic protected health information (ePHI) and other forms of PII For many applications, the Cloud Healthcare API can provide a cloud-based alternative to on-premises stacks implementing the following standards: Digital Imaging and Communications in Medicine (DICOM) Fast Healthcare Interoperability Resources (FHIR) DSTU2, STU3, and R4 standards Health Level Seven Version 2.x (HL7v2) The Cloud Healthcare API simplifies data integration with existing systems and allows developers to focus on differentiating features, such as UX and intelligence.
- Data model The API consists of three modalities that implement individual industry-wide standards: Medical imaging data in the Digital Imaging and Communications in Medicine (DICOM) format Clinical event messages in the Health Level Seven Version 2.x (HL7v2) format Clinical resources in the Fast Healthcare Interoperability Resources (FHIR) format Each modality has different structural and processing characteristics, but they are all backed by a standards-compliant data store that provides read, write, search, and other operations on the data.
- Bulk import and export The Cloud Healthcare API's DICOM and FHIR modalities support bulk import and export of data, making it easier to transfer data to and from Cloud Storage .

### "Try FHIR and DICOM de-identification \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/deid-showcase](https://docs.cloud.google.com/healthcare-api/docs/deid-showcase)
- Source ID: `site-docs-root-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Try FHIR and DICOM de-identification Stay organized with collections Save and categorize content based on your preferences.
- Use the following application to de-identify FHIR data or DICOM images and metadata.
- The application is only for demonstration purposes and does not call the de-identification API.

