---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.122Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "In-console de-identification in Healthcare Browser"
feature_slug: "in-console-de-identification-in-healthcare-browser"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-consent"
keywords:
  - "console"
  - "de"
  - "identification"
  - "healthcare"
  - "browser"
  - "now"
  - "allows"
  - "users"
---

# In-console de-identification in Healthcare Browser

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The Healthcare Browser in Google Cloud Console now allows users to de-identify data directly within the Cloud Healthcare interface.

## Extended Definition

The Healthcare Browser in Google Cloud Console now allows users to de-identify data directly within the Cloud Healthcare interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)

## Supporting Pages

### Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Healthcare API detects sensitive data in DICOM instances and FHIR resources , such as protected health information (PHI), and then uses a de-identification transformation to mask, delete, or otherwise obscure the data.
- De-identification location When the Cloud Healthcare API de-identifies data, the data might be processed in a location that is different from where the source and destination FHIR or DICOM store resides.
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Data de-identification Stay organized with collections Save and categorize content based on your preferences.
- De-identification has multiple uses cases, including: When sharing health information with non-privileged parties When creating datasets from multiple sources and analyzing them When anonymizing data so that it can be used in machine learning models De-identification overview De-identification works at the following levels: At the dataset level.

### "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- To grant each role to the service account, run the gcloud projects add-iam-policy-binding command. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/pubsub.publisher gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/healthcare.hl7V2Consumer The output includes the updated policy: bindings: - members: - user: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com role: roles/pubsub.publisher - members: - user: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com roles/healthcare.hl7V2Consumer etag: ETAG version: 1 The following steps show how to create a Linux virtual machine instance in Compute Engine: Console In the Google Cloud console, go to the VM Instances page.
- If you're deploying the adapter to GKE, install the kubectl command-line tool by running the following command: gcloud components install kubectl Creating a dataset If you haven't already created a Cloud Healthcare API dataset, create a dataset by completing the following steps: Console In the Google Cloud console, go to the Datasets page.
- To add the required pubsub.publisher role to your project's service account, complete the following steps: Console On the IAM page in the Google Cloud console, verify that the role Healthcare Service Agent appears in the Role column for the relevant project service account.
- At the same time that you deploy the adapter, you create a Service controller that allows you to connect the adapter to the Cloud Healthcare API using internal load balancing .

### "Control access to FHIR resources in the Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- To track the status of the operation, you can use the Operation get method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " When the operation finishes, the server returns a response with the status of the operation in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID "", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.ApplyAdminConsents", "createTime": " CREATE TIME ", "endTime": " END TIME ", "logsUrl": "https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL ", "counter": { "success": "1", "secondarySuccess": "7" } }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.ApplyAdminConsentsResponse", "consentApplySuccess": "1", "affectedResources": "7" } } This response indicated that the server successfully processed 1 admin policy and updated the consensual access of 7 resources (1 Practitioner, 1 Patient, 2 Observations, 2 patient Consents and 1 admin policy).
- To track the status of the operation, you can use the Operation get method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " When the operation finishes, the server returns a response with the status of the operation in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID "", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.ApplyConsents", "createTime": " CREATE TIME ", "endTime": " END TIME ", "logsUrl": "https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL ", "counter": { "success": "2", "secondarySuccess": "5" } }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.ApplyConsentsResponse", "consentApplySuccess": "2", "affectedResources": "5" } } This response indicated that the server successfully processed 2 consents and updated the consensual access of 5 resources (1 Patient, 2 Consents, 2 Observations).
- SMARTProxy is an open source proxy from Google that provides the following features: Allows the Cloud Healthcare API FHIR server to accept and validate consent-aware access tokens.
- Allows the FHIR implementation in the Cloud Healthcare API to include consent-aware access tokens as part of the Cloud Healthcare API management and permission model.

