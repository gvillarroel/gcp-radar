---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.095Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR resource validation against profiles"
feature_slug: "fhir-resource-validation-against-profiles"
latest_feature_date: "2022-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-consent"
keywords:
  - "fhir"
  - "resource"
  - "validation"
  - "against"
  - "profiles"
  - "healthcare"
  - "now"
  - "supports"
---

# FHIR resource validation against profiles

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API now supports validating a FHIR resource against a specific profile or all profiles defined for a FHIR store.

## Extended Definition

Cloud Healthcare API now supports validating a FHIR resource against a specific profile or all profiles defined for a FHIR store.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)

## Supporting Pages

### FHIR \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Healthcare API enforces profiles by validating resources against the constraints in the relevant profile.
- Fast Healthcare Interoperability Resources (FHIR) is a healthcare data standard with an application programming interface (API) for representing and exchanging electronic health records (EHR).
- FHIR specifies a base set of resources that can be combined in various ways to meet the data model demands of healthcare providers.
- FHIR profiles Using extensions, applications can customize the existing resources and describe their specifications with profiles.

### "Creating and managing FHIR stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/fhir before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery Imports Python's built-in "json" module import json api version = "v1" service name = "healthcare" Instantiates an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID fhir store id = 'my-fhir-store' # replace with the FHIR store ID fhir store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) fhir store name = f " { fhir store parent } /fhirStores/ { fhir store id } " fhir stores = client . projects () . locations () . datasets () . fhirStores () response = fhir stores . fhir () . capabilities ( name = fhir store name ) . execute () print ( json . dumps ( response , indent = 2 )) return response Setting the base resource validation level By default, all resources in your FHIR store have base resource validation applied to them.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "validationConfig": { " BASE RESOURCE VALIDATION TYPE ": true } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=validationConfig" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json BASE RESOURCE VALIDATION TYPE ": true } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=validationConfig" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Enable required field validation : Select to enable resource field validation against the structure definitions in your FHIR profile.

### "Control access to FHIR resources in the Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You should receive a JSON response similar to the following: { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Practitioner/12942879-f89f-41ae-aa80-0b911b649833", "resource": { "active": true, "birthDate": "1970-05-23", "gender": "male", "id": "12942879-f89f-41ae-aa80-0b911b649833", "meta": { "lastUpdated": "2022-09-01T17:31:40.423469+00:00", "versionId": " VERSION ID " }, "name": [ { "family": "Brown", "given": [ "Jeffrey" ], "use": "official" } ], "resourceType": "Practitioner" }, "search": { "mode": "match" } } ], "link": [ { "relation": "search", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Practitioner/?" }, { "relation": "first", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Practitioner/?" }, { "relation": "self", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Practitioner/?" } ], "resourceType": "Bundle", "total": 1, "type": "searchset" } Get resource with Consent context The Cloud Healthcare API supports get FHIR resource in a given FHIR store with actor , purpose , and environment as query parameters.
- Supported methods The Cloud Healthcare API supports consent enforcement for the following methods: fhir.read fhir.vread fhir.history fhir.executeBundle with GET operations fhir.search and fhir.search-type fhir.Observation-lastn fhir.Patient-everything fhir.Encounter-everything fhir.Consent-enforement-status fhir.Patient-consent-enforement-status Write methods such as POST , PUT , PATCH , and DELETE are not supported for individual resources or a bundle of resources.
- Search with Consent context The Cloud Healthcare API supports searches for FHIR resources in a given FHIR store with actor , purpose , and environment as query parameters.
- A Consent from Darcy to permit Jeffrey Brown using application App/123 to access her data collected by the Happy Hospital A Consent from Darcy to permit Jeffrey Brown to access any of her data for emergency treatment ( ETREAT ) A Consent from the Happy Hospital to permit Jeffrey Brown to access all data when doing biomedical research ( BIORCH ) with application App/golden cat > bundle.json { "resourceType": "Bundle", "type": "transaction", "entry": [ { "request": {"method": "PUT", "url": "Practitioner/12942879-f89f-41ae-aa80-0b911b649833"}, "resource": { "active": true, "birthDate": "1970-05-23", "gender": "male", "id": "12942879-f89f-41ae-aa80-0b911b649833", "name": [{ "family": "Brown", "given": ["Jeffrey"], "use": "official" }], "resourceType": "Practitioner" } }, { "request": {"method": "PUT", "url": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2"}, "resource": { "active": true, "birthDate": "1990-01-01", "gender": "female", "id": "3c6aa096-c054-4c22-b2b4-1e4a4d203de2", "name": [{ "family": "Smith", "given": ["Darcy"], "use": "official" }], "meta": { "tag": [{ "system": "http://terminology.hl7.org/CodeSystem/common-tags", "code": "employee" }] }, "resourceType": "Patient" } }, { "request": {"method": "PUT", "url": "Observation/7473784b-46a8-470c-b9a6-fe38a01025aa"}, "resource": { "id": "7473784b-46a8-470c-b9a6-fe38a01025aa", "meta": {"source": "http://example.com/HappyHospital"}, "code": { "coding": [{ "code": "718-7", "system": "http://loinc.org", "display": "Hemoglobin [Mass/volume] in Blood" }] }, "effectivePeriod": {"start": "2021-12-10T05:30:10+01:00"}, "issued": "2021-12-10T13:30:10+01:00", "resourceType": "Observation", "status": "final", "subject": {"reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2"}, "valueQuantity": { "code": "g/dL", "system": "http://unitsofmeasure.org", "unit": "g/dl", "value": 7.2 } } }, { "request": {"method": "PUT", "url": "Observation/68583624-9921-4158-8754-2a306c689abd"}, "resource": { "id": "68583624-9921-4158-8754-2a306c689abd", "code": { "coding": [{ "code": "15074-8", "system": "http://loinc.org", "display": "Glucose [Moles/volume] in Blood" }] }, "effectivePeriod": {"start": "2021-12-01T05:30:10+01:00"}, "issued": "2021-12-01T13:30:10+01:00", "resourceType": "Observation", "status": "final", "subject": {"reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2"}, "valueQuantity": { "code": "mmol/L", "system": "http://unitsofmeasure.org", "unit": "mmol/l", "value": 6.3 } } }, { "request": {"method": "PUT", "url": "Consent/10998b60-a252-405f-aa47-0702554ddc8e"}, "resource": { "category": [{ "coding": [{ "code": "59284-0", "system": "http://terminology.hl7.org/CodeSystem/consentcategorycodes" }] }], "id": "10998b60-a252-405f-aa47-0702554ddc8e", "patient": {"reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2"}, "policyRule": { "coding": [{ "code": "OPTIN", "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode" }] }, "provision": { "actor": [ { "reference": {"reference": "Practitioner/12942879-f89f-41ae-aa80-0b911b649833"}, "role": { "coding": [{ "code": "GRANTEE", "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode" }] } } ], "extension": [ { "url": "https://g.co/fhir/medicalrecords/Environment", "valueCodeableConcept": { "coding": [{ "code": "123", "system": "App" }] } }, { "url": "https://g.co/fhir/medicalrecords/DataSource", "valueUri": "http://example.com/HappyHospital" } ], "type": "permit" }, "resourceType": "Consent", "scope": { "coding": [{ "code": "patient-privacy", "system": "http://terminology.hl7.org/CodeSystem/consentscope" }] }, "status": "active" } }, { "request": {"method": "PUT", "url": "Consent/73c54e8d-2789-403b-9dee-13085c5d5e34"}, "resource": { "category": [{ "coding": [{ "code": "59284-0", "system": "http://terminology.hl7.org/CodeSystem/consentcategorycodes" }] }], "id": "73c54e8d-2789-403b-9dee-13085c5d5e34", "patient": {"reference": "Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2"}, "policyRule": { "coding": [{ "code": "OPTIN", "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode" }] }, "provision": { "actor": [ { "reference": {"reference": "Practitioner/12942879-f89f-41ae-aa80-0b911b649833"}, "role": { "coding": [{ "code": "GRANTEE", "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode" }] } } ], "purpose": [{ "code": "ETREAT", "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason" }], "type": "permit" }, "resourceType": "Consent", "scope": { "coding": [{ "code": "patient-privacy", "system": "http://terminology.hl7.org/CodeSystem/consentscope" }] }, "status": "active" } }, { "request": {"method": "PUT", "url": "Consent/5c8e3f8a-9fd5-480d-a08e-f29b89feccde"}, "resource": { "category": [{ "coding": [{ "code": "57017-6", "system": "http://loinc.org" }] }], "id": "5c8e3f8a-9fd5-480d-a08e-f29b89feccde", "patient": {}, "extension": [{ "url": "https://g.co/fhir/medicalrecords/ConsentAdminPolicy" }], "policyRule": { "coding": [{ "code": "OPTIN", "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode" }] }, "provision": { "actor": [ { "reference": {"reference": "Practitioner/12942879-f89f-41ae-aa80-0b911b649833"}, "role": { "coding": [{ "code": "GRANTEE", "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode" }] } } ], "purpose": [{ "code": "BIORCH", "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason" }], "extension": [ { "url": "https://g.co/fhir/medicalrecords/Environment", "valueCodeableConcept": { "coding": [{ "code": "golden", "system": "App" }] } } ], "type": "permit" }, "resourceType": "Consent", "scope": {}, "status": "active" } } ] } EOF curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/fhir+json; charset=utf-8" \ --data @bundle.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir" You should receive a JSON response similar to the following: { "entry": [ { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Practitioner/12942879-f89f-41ae-aa80-0b911b649833/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/7473784b-46a8-470c-b9a6-fe38a01025aa/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Observation/68583624-9921-4158-8754-2a306c689abd/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Consent/10998b60-a252-405f-aa47-0702554ddc8e/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Consent/73c54e8d-2789-403b-9dee-13085c5d5e34/ history/ VERSION ID ", "status": "201 Created" } }, { "response": { "etag": "W/\" VERSION ID \"", "lastModified": "2022-09-01T17:31:40.423469+00:00", "location": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Consent/5c8e3f8a-9fd5-480d-a08e-f29b89feccde/ history/ VERSION ID ", "status": "201 Created" } } ], "resourceType": "Bundle", "type": "transaction-response" } Following are more examples of R4 Consent resource that demonstrates how complex policies can be represented.

