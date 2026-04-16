---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.133Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR store access control changes"
feature_slug: "fhir-store-access-control-changes"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-consent"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control"
keywords:
  - "fhir"
  - "store"
  - "access"
  - "control"
  - "changes"
  - "permission"
  - "rules"
  - "were"
---

# FHIR store access control changes

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

FHIR store permission rules were updated so API-level access no longer implies configuration read access and executeBundle no longer implies create, update, delete, or get permissions.

## Extended Definition

FHIR store permission rules were updated so API-level access no longer implies configuration read access and executeBundle no longer implies create, update, delete, or get permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control)

## Supporting Pages

### "Control access to FHIR resources in the Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- Source ID: `site-docs-root-2`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following request refreshes enforcement for consent changes between UTC 0AM 2022-09-20 and UTC 0AM 2022-09-21. curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json" \ --data "{ 'validateOnly': false, 'timeRange': { 'start': '2022-09-20T00:00:00Z', 'end': '2022-09-21T00:00:00Z', } }" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID :applyConsents" Use FHIR consent view The FHIR Consent Viewer displays access control policies.
- Get FHIR resources with consent scope Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) using application App/123 reads the hemoglobin measurement of the Patient (in this example, Observation/7473784b-46a8-470c-b9a6-fe38a01025aa ). curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833 env/App/123" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/7473784b-46a8-470c-b9a6-fe38a01025aa" Because the requestor was given consent, the response is the content of the Observation resource. { "code": { "coding": [ { "code": "718-7", "display": "Hemoglobin [Mass/volume] in Blood", "system": "http://loinc.org" } ] }, "effectivePeriod": { "start": "2021-12-10T05:30:10+01:00" }, "id": "7473784b-46a8-470c-b9a6-fe38a01025aa", "issued": "2021-12-10T13:30:10+01:00", "meta": { "lastUpdated": "2022-09-01T17:31:40.423469+00:00", "source": "http://example.com/HappyHospital", "versionId": " VERSION ID " }, "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" }, "valueQuantity": { "code": "g/dL", "system": "http://unitsofmeasure.org", "unit": "g/dl", "value": 7.2 } } Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) using unknown application App/unknown reads the hemoglobin measurement of the Patient (in this example, Observation/7473784b-46a8-470c-b9a6-fe38a01025aa ). curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833 env/App/unknown" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/7473784b-46a8-470c-b9a6-fe38a01025aa" Because the boundary access of the requestor (App/unknown) is not permitted by the Patient's consent, the request is denied. { "issue": [ { "code": "security", "details": { "text": "permission denied" }, "diagnostics": "Consent access denied or the resource being accessed does not exist", "severity": "error" } ], "resourceType": "OperationOutcome" } Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) doing biomedical research using application App/golden reads the Darcy's birthDate (in this example, Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2 ). curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833 purp/v3/BIORCH env/App/golden" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" Because the requestor was given consent, the response is the content of the Patient resource. { "active": true, "birthDate": "1990-01-01", "gender": "female", "id": "3c6aa096-c054-4c22-b2b4-1e4a4d203de2", "meta": { "lastUpdated": "2022-09-01T17:31:40.423469+00:00", "versionId": " VERSION ID ", "tag": [{ "system": "http://terminology.hl7.org/CodeSystem/common-tags", "code": "employee" }] }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" } Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) requests emergency unauthorized access to a patient's record, using the "break-the-glass" protocol. (in this example, Observation/7473784b-46a8-470c-b9a6-fe38a01025aa ). curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: btg actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/7473784b-46a8-470c-b9a6-fe38a01025aa" Because the consent's authorization method is btg , the server skips consent checks.
- Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) using application App/123 searches all Observations from Patient Darcy for emergency treatment purposes. curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833 purp/v3/ETREAT env/App/123" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation?subject:Patient.name=Darcy" You should receive a JSON response similar to the following: { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/68583624-9921-4158-8754-2a306c689abd", "resource": { "code": { "coding": [ { "code": "15074-8", "display": "Glucose [Moles/volume] in Blood", "system": "http://loinc.org" } ] }, "effectivePeriod": { "start": "2021-12-01T05:30:10+01:00" }, "id": "68583624-9921-4158-8754-2a306c689abd", "issued": "2021-12-01T13:30:10+01:00", "meta": { "lastUpdated": "2022-09-01T17:31:40.423469+00:00", "versionId": " VERSION ID " }, "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" }, "valueQuantity": { "code": "mmol/L", "system": "http://unitsofmeasure.org", "unit": "mmol/l", "value": 6.3 } }, "search": { "mode": "match" } }, { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/7473784b-46a8-470c-b9a6-fe38a01025aa", "resource": { "code": { "coding": [ { "code": "718-7", "display": "Hemoglobin [Mass/volume] in Blood", "system": "http://loinc.org" } ] }, "effectivePeriod": { "start": "2021-12-10T05:30:10+01:00" }, "id": "7473784b-46a8-470c-b9a6-fe38a01025aa", "issued": "2021-12-10T13:30:10+01:00", "meta": { "lastUpdated": "2022-09-01T17:31:40.423469+00:00", "source": "http://example.com/HappyHospital", "versionId": " VERSION ID " }, "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" }, "valueQuantity": { "code": "g/dL", "system": "http://unitsofmeasure.org", "unit": "g/dl", "value": 7.2 } }, "search": { "mode": "match" } } ], "link": [ { "relation": "search", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/?subject:Patient.name=Darcy" }, { "relation": "first", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/?subject:Patient.name=Darcy" }, { "relation": "self", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/?subject:Patient.name=Darcy" } ], "resourceType": "Bundle", "total": 2, "type": "searchset" } Practitioner Jeffrey Brown (identified by Practitioner/12942879-f89f-41ae-aa80-0b911b649833 ) searches Observations with status=final for two purposes, treatment and research curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "X-Consent-Scope: actor/Practitioner/12942879-f89f-41ae-aa80-0b911b649833 purp/v3/TREAT purp/v3/HRESCH" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation?status=final" You should receive a JSON response similar to the following: { "issue": [ { "code": "security", "details": { "text": "permission denied" }, "diagnostics": "the maximum number of allowed consent purpose scopes is 1, got 2", "severity": "error" } ], "resourceType": "OperationOutcome" } In this case, Practitioner Jeffrey Brown should remove an unnecessary purpose from the X-Consent-Scope in the request.
- To view the FHIR Consent Viewer , complete the following steps: Permissions required for this task To perform this task, you must have been granted the following permissions or the following Identity and Access Management (IAM) roles: Permissions healthcare.fhirStores.get healthcare.fhirResources.get Roles Healthcare FHIR Store Viewer ( roles/healthcare.fhirStoreViewer ) Healthcare FHIR Resource Reader ( roles/healthcare.fhirResourceReader ) You can ask your administrator to grant you these Identity and Access Management roles.

### "FHIR access data model and control system \_|\_ Cloud Healthcare API \_\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The described rules are summarized by the following pseudo-code: Joint access control if resource does not exist if resource is a patient-compartment or encounter-compartment resource: return "deny" else: if there is any admin policy denies access for accessor criteria regardless of resource criteria other than resource type and resource ID: return "deny" else if there is any admin policy permits access for accessor criteria based on the identifiable resource criteria : return "resource not found" else: return "deny" else: let patients = list of patient references named in the patient compartment eligible fields of the requested resource if there is any matching deny from either patients 's consents or admin policy or admin cascading policy: return "deny" if there is matching admin policy permits access: return "permit" if all patients have matching patient consents or admin cascading consent that permit access or are subject of encounters which permit the access through encounter cascading policy: return "permit" else: return "deny" end The FHIR store checks consent permission at the per resource level.
- Resource access enforcement logic When making a consent-aware request to a FHIR store, access control occurs in the following order: The Cloud Healthcare API checks the permissions on the Google Cloud service account (or the principal) configured in the proxy.
- Note: If the FHIR store configuration defines the consent header handling as REQUIRED ON READ , consent access control is enforced (and rejected) even without the consent aware headers.
- You can use FHIR access control to define consent policies, control data access based on user roles and context, and enforce these policies in a FHIR store.

### Access control in FHIR \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparison with other access control systems FHIR access control allows fine grained resource level access control, whereas Identity and Access Management (IAM) focuses on project, dataset and fhir store level permissions.
- Capabilities FHIR access control IAM Smart-on-FHIR Other on-premises solutions Multi-authority enablement Supported Not Supported Not Supported Supported Multi-request attributes Supported Limited due to fixed attributes Not Supported Supported Dynamic fine-grained resource attributes Supported Not Supported Limited by single search query Require continual sync with data Comprehensive overlapping policies Up to 200 administrator policies + 200 consents per patient Up to 100 O(10) Bounded by serving performance Performance & Scalability Supported Not Supported Supported Not Supported In-built EHR security Supported Not Supported Supported Not Supported Concurrent permission change Possible Possible Not Supported Possible Policy administration and audit Supported Not Supported Not Supported Supported Multi-authority enablement : enable both administrators and patients, within their boundary, to grant consents / enforce policies.
- FHIR access control is a comprehensive solution for managing access to healthcare data in FHIR stores.
- The distribution of authority, the rules that govern them, and the evaluation of data elements as part of matching policies with accessors are unique to consent when compared to other forms of access control.

