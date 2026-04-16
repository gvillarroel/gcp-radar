---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.083Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "complexDataTypeReferenceParsing in FHIR store"
feature_slug: "complexdatatypereferenceparsing-in-fhir-store"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/quickstart"
keywords:
  - "complexdatatypereferenceparsing"
  - "fhir"
  - "store"
  - "adds"
  - "field"
  - "parse"
  - "references"
  - "inside"
---

# complexDataTypeReferenceParsing in FHIR store

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

FHIR Store adds the complexDataTypeReferenceParsing field to parse references inside complex FHIR data types, including extensions; FHIR Store adds the complexDataTypeReferenceParsing field to parse references inside complex FHIR data types, including extensions.

## Extended Definition

FHIR Store adds the complexDataTypeReferenceParsing field to parse references inside complex FHIR data types, including extensions; FHIR Store adds the complexDataTypeReferenceParsing field to parse references inside complex FHIR data types, including extensions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir](https://docs.cloud.google.com/healthcare-api/docs/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/quickstart](https://docs.cloud.google.com/healthcare-api/docs/quickstart)

## Supporting Pages

### "FHIR conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir](https://docs.cloud.google.com/healthcare-api/docs/fhir)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Areas where the API deviates from the FHIR spec to allow for backwards compatibility: null is accepted for required fields An empty code is accepted for required fields urn:uuid references are allowed in batch bundles when referential integrity is disabled.
- Areas where the API deviates from the FHIR spec to allow for backwards compatibility: null is accepted for required fields An empty code is accepted for required fields urn:uuid references are allowed in batch bundles when referential integrity is disabled.
- Areas where the API deviates from the FHIR spec to allow for backwards compatibility: null is accepted for required fields An empty code is accepted for required fields urn:uuid references are allowed in batch bundles when referential integrity is disabled.
- The v1 API supports the following versions: R5 version 5.0.0 (Release 5) R4 version 4.0.1 (Release 4) STU3 version 3.0.1 (Release 3 - Standard for Trial Use) DSTU2 version 1.0.2 (Draft Standard for Trial Use) When you create a FHIR store, you specify the FHIR version as a parameter to the fhirStores.create method.

### "Searching for FHIR resources \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the following queries for references to resources inside a FHIR store: [parameter]=[id] [parameter]=[type]/[id] You can use [parameter]=[url] to specify references by URL that might be outside the FHIR store.
- In this example, the request returns a single Patient resource including the data inside that resource: { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ PATIENT ID ", "resource": { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "meta": { "lastUpdated": " LAST UPDATED ", "versionId": " VERSION ID " }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" }, "search": { "mode": "match" } } ], "link": [ { "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?family%3Aexact=Smith" } ], "resourceType": "Bundle", "total": 1, "type": "searchset" } PowerShell To search for resources in a FHIR store, make a POST request and specify the following information: The name of the dataset The name of the FHIR store The type of resource to search for A query string containing the information you're searching for, as described in the Constructing a search query section An access token The following sample shows a POST request using Windows PowerShell to search for all patients with the last name "Smith". $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-RestMethod -Method Post -Headers $headers -ContentType: "application/fhir+json; charset=utf-8" -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ search?family:exact=Smith" ConvertTo-Json If the request is successful, the server returns the response as a FHIR Bundle in JSON format.
- In this example, the request returns a single Patient resource including the data inside that resource: { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ PATIENT ID ", "resource": { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "meta": { "lastUpdated": " LAST UPDATED ", "versionId": " VERSION ID " }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" }, "search": { "mode": "match" } } ], "link": [ { "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?family%3Aexact=Smith" } ], "resourceType": "Bundle", "total": 1, "type": "searchset" } PowerShell To search for resources in a FHIR store, make a GET request and specify the following information: The name of the dataset The name of the FHIR store The type of resource to search for A query string containing the information you're searching for, as described in the Constructing a search query section An access token The following sample shows a GET request using Windows PowerShell to search for all patients with the last name "Smith". $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-RestMethod -Method Get -Headers $headers -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/ RESOURCE TYPE ?family:exact=Smith" ConvertTo-Json If the request is successful, the server returns the response as a FHIR Bundle in JSON format.
- In this example, the request returns a single Patient resource including the data inside that resource: { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ PATIENT ID ", "resource": { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "meta": { "lastUpdated": " LAST UPDATED ", "versionId": " VERSION ID " }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" }, "search": { "mode": "match" } } ], "link": [ { "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?family%3Aexact=Smith" } ], "resourceType": "Bundle", "total": 1, "type": "searchset" } Java import com.google.api.client.http.

### "Quickstart: Store healthcare data with curl and PowerShell \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/quickstart](https://docs.cloud.google.com/healthcare-api/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/us-central1/datasets/my-dataset/hl7V2Stores/my-hl7v2-store/messages/ MESSAGE ID ", "data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZfEF8QXwyMDE4MDEwMTAwMDAwMHx8VFlQRV5BfDIwMTgwMTAxMDAwMDAwfFR8MC4wfHx8QUF8fDAwfEFTQ0lJDUVWTnxBMDB8MjAxODAxMDEwNDAwMDANUElEfHwxNAExMTFeXl5eTVJOfDExMTExMTExXl5eXk1STn4xMTExMTExMTExXl5eXk9SR05NQlI=", "sendFacility": "SEND FACILITY", "sendTime": "2018-01-01T00:00:00Z", "messageType": "TYPE", "createTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "patientIds": [ { "value": "14\u0001111", "type": "MRN" }, { "value": "11111111", "type": "MRN" }, { "value": "1111111111", "type": "ORGNMBR" } ], "parsedData": { "segments": [ { "segmentId": "MSH", "fields": { "8.2": "A", "11": "0.0", "8.1": "TYPE", "4": "A", "9": "20180101000000", "10": "T", "17": "ASCII", "14": "AA", "1": "^ \\&", "2": "A", "3": "SEND FACILITY", "5": "A", "16": "00", "0": "MSH", "6": "20180101000000" } }, { "segmentId": "EVN", "fields": { "0": "EVN", "1": "A00", "2": "20180101040000" } }, { "segmentId": "PID", "fields": { "2.5": "MRN", "3[0].1": "11111111", "3[0].5": "MRN", "3[1].1": "1111111111", "3[1].5": "ORGNMBR", "0": "PID", "2.1": "14\u0001111" } } ] } } After storing and viewing the HL7v2 message in the Cloud Healthcare API, continue to Clean up to avoid incurring charges to your Google Cloud account for the resources used in this page.
- Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.dataset.DatasetService.CreateDataset", "createTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "endTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "logsUrl": "https://console.cloud.google.com/ CLOUD LOGGING URL " "counter": { "success": " SUCCESS COUNT ", // If there were any failures, they display in the failure field. "failure": " FAILURE COUNT " } }, "done": true, // The response field only displays if there were no errors. "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.dataset.Dataset", "name": "projects/ PROJECT ID /locations/us-central1/datasets/my-dataset", }, // If there were any errors, an error field displays instead of a response field. // See Troubleshooting long-running operations for a list of response codes. "error": { "code": ERROR CODE , "message": " DESCRIPTION ", "details": [ { "@type": "...", FIELD1 : ..., ... } ] } } To complete this quickstart, choose from one of the following sections: Store and view a DICOM instance Store and view FHIR resources Store and view an HL7v2 message Store and view a DICOM instance This section shows how to complete the following tasks: Create a DICOM store.
- Create one of the following data stores inside the dataset: Digital Imaging and Communications in Medicine (DICOM) store Fast Healthcare Interoperability Resources (FHIR) store Health Level Seven International Version 2 (HL7v2) store Store and inspect a particular type of medical data in the DICOM, FHIR, or HL7v2 store.
- Create a FHIR store FHIR stores exist inside datasets and contain FHIR resources.

