---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.110Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "CDA XML to JSON conversion (XmlToJson)"
feature_slug: "cda-xml-to-json-conversion-xmltojson"
latest_feature_date: "2020-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial"
keywords:
  - "cda"
  - "xml"
  - "json"
  - "conversion"
  - "xmltojson"
  - "healthcare"
  - "added"
  - "tool"
---

# CDA XML to JSON conversion (XmlToJson)

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The Cloud Healthcare API added the XmlToJson tool to convert CDA XML files to JSON.

## Extended Definition

The Cloud Healthcare API added the XmlToJson tool to convert CDA XML files to JSON.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox](https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial)

## Supporting Pages

### "Use the Cloud Healthcare API with MCP and other agents \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox](https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following configuration, replace the environment variables with your values, and save: { "mcpServers": { "healthcare": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","cloud-healthcare","--stdio"], "env": { "HEALTHCARE PROJECT": " PROJECT ID ", "HEALTHCARE REGION": " REGION ", "HEALTHCARE DATASET": " DATASET ID " } } } } Note: The HEALTHCARE PROJECT environment variable specifies the default Google Cloud Project ID for the MCP Toolbox to use.
- Add the following configuration, replace the environment variables with your values, and save: { "mcpServers": { "healthcare": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","cloud-healthcare","--stdio"], "env": { "HEALTHCARE PROJECT": " PROJECT ID ", "HEALTHCARE REGION": " REGION ", "HEALTHCARE DATASET": " DATASET ID " } } } } A green active status appears after the server connects successfully.
- Add the following configuration, replace the environment variables with your values, and save: { "mcpServers": { "healthcare": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","cloud-healthcare","--stdio"], "env": { "HEALTHCARE PROJECT": " PROJECT ID ", "HEALTHCARE REGION": " REGION ", "HEALTHCARE DATASET": " DATASET ID " } } } } Open Cursor and navigate to Settings > Cursor Settings > MCP .
- Add the configuration, replace the environment variables with your values, and save: { "mcpServers": { "healthcare": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","cloud-healthcare","--stdio"], "env": { "HEALTHCARE PROJECT": " PROJECT ID ", "HEALTHCARE REGION": " REGION ", "HEALTHCARE DATASET": " DATASET ID " } } } } Restart Claude Code to load the new settings.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery Imports Python's built-in "json" module import json api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " dicom stores = client . projects () . locations () . datasets () . dicomStores () dicom store = dicom stores . get ( name = dicom store name ) . execute () print ( json . dumps ( dicom store , indent = 2 )) return dicom store Listing the DICOM stores in a dataset The following samples show how to list the DICOM stores in a dataset: Console To view the data stores in a dataset: In the Google Cloud console, go to the Datasets page.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const listDicomStores = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } ; const request = { parent }; const dicomStores = await healthcare . projects . locations . datasets . dicomStores . list ( request ); console . log ( JSON . stringify ( dicomStores . data )); }; listDicomStores (); Python def list dicom stores ( project id , location , dataset id ): """Lists the DICOM stores in the given dataset.

### "Stream and synchronize FHIR resources with BigQuery \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entry": [ { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/d5d0d3a7-29a1-4bb6-b388-35e8ce218fc5", "resource": { "birthDate": "1980-01-01", "gender": "male", "id": " PATIENT ID ", "meta": { "lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "versionId": " VERSION ID " }, "name": [ { "family": "Zhang", "given": [ "Michael" ], "use": "official" } ], "resourceType": "Patient" }, "search": { "mode": "match" } }, { "fullUrl": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/f2aa0885-390d-437d-ac73-8d41516a2c05", "resource": { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "meta": { "lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "versionId": " VERSION ID " }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" }, "search": { "mode": "match" } } ], "link": [ { "relation": "search", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?" }, { "relation": "first", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?" }, { "relation": "self", "url": "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/?" } ], "resourceType": "Bundle", "total": 2, "type": "searchset" } Configure BigQuery streaming on the FHIR store Update the FHIR store to configure BigQuery streaming.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "name": [ { "use": "official", "family": "Smith", "given": [ "Darcy" ] } ], "gender": "female", "birthDate": "1970-01-01", "resourceType": "Patient" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/fhir+json" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "meta": { "lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "versionId": " VERSION ID " }, "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" } Create the second Patient resource in the FHIR store: REST Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID LOCATION : the location of the parent dataset DATASET ID : the FHIR store's parent dataset FHIR STORE ID : the FHIR store ID Request JSON body: { "name": [ { "use": "official", "family": "Zhang", "given": [ "Michael" ] } ], "gender": "male", "birthDate": "1980-01-01", "resourceType": "Patient" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "name": [ { "use": "official", "family": "Zhang", "given": [ "Michael" ] } ], "gender": "male", "birthDate": "1980-01-01", "resourceType": "Patient" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/fhir+json" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "birthDate": "1980-01-01", "gender": "male", "id": " PATIENT ID ", "meta": { "lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "versionId": " VERSION ID " }, "name": [ { "family": "Zhang", "given": [ "Michael" ], "use": "official" } ], "resourceType": "Patient" } Search for Patient resources in the FHIR store and verify that the store contains the two Patient resources: REST Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID LOCATION : the location of the parent dataset DATASET ID : the FHIR store's parent dataset FHIR STORE ID : the FHIR store ID To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "name": [ { "use": "official", "family": "Lee", "given": [ "Alex" ] } ], "gender": "male", "birthDate": "1990-01-01", "resourceType": "Patient" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/fhir+json" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ SECOND FHIR STORE ID /fhir/Patient" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "birthDate": "1990-01-01", "gender": "male", "id": " PATIENT ID ", "meta": { "lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "versionId": " VERSION ID " }, "name": [ { "family": "Cruz", "given": [ "Taylor" ], "use": "official" } ], "resourceType": "Patient" } Query the BIGQUERY PROJECT ID .

