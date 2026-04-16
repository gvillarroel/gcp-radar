---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.026Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "GetFhirStoreMetrics VersionedStorageSizeBytes field"
feature_slug: "getfhirstoremetrics-versionedstoragesizebytes-field"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export"
keywords:
  - "getfhirstoremetrics"
  - "versionedstoragesizebytes"
  - "field"
  - "now"
  - "includes"
  - "output"
---

# GetFhirStoreMetrics VersionedStorageSizeBytes field

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

GetFhirStoreMetrics now includes VersionedStorageSizeBytes in its output; GetFhirStoreMetrics now includes VersionedStorageSizeBytes in its output.

## Extended Definition

GetFhirStoreMetrics now includes VersionedStorageSizeBytes in its output; GetFhirStoreMetrics now includes VersionedStorageSizeBytes in its output.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)

## Supporting Pages

### "Healthcare Natural Language API \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp](https://docs.cloud.google.com/healthcare-api/docs/concepts/nlp)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Healthcare Natural Language API supports the following relationships between entity mentions: Subject Object ANATOMICAL STRUCTURE MEDICAL DEVICE BODY FUNCTION BF RESULT BODY MEASUREMENT BM RESULT BODY MEASUREMENT BM UNIT BODY MEASUREMENT BM VALUE LABORATORY DATA LAB RESULT LABORATORY DATA LAB UNIT LABORATORY DATA LAB VALUE MEDICINE MED DOSE MEDICINE MED DURATION MEDICINE MED FORM MEDICINE MED FREQUENCY MEDICINE MED ROUTE MEDICINE MED STATUS MEDICINE MED STRENGTH MEDICINE MED TOTALDOSE MEDICINE MED UNIT PROBLEM ANATOMICAL STRUCTURE PROBLEM MEDICINE PROBLEM PROCEDURE PROBLEM SEVERITY PROCEDURE ANATOMICAL STRUCTURE PROCEDURE PROC METHOD PROCEDURE PROCEDURE RESULT SUBSTANCE ABUSE SEVERITY Healthcare Natural Language API output as a FHIR bundle When you request the analyzeEntities method with the alternativeOutputFormat field set to FHIR BUNDLE , the response includes the following JSON objects: The entity mentions, the entities, and the relationships A FHIR R4 bundle represented as a string, that includes all the entities, the entity mentions, and the relationships in JSON format To create the FHIR R4 bundle, the Healthcare Natural Language API maps the entity mentions, entities, and relationships to FHIR resources and their elements.
- The following sections show how to extract different medical insights from a given medical text: Extract entities, relations, and contextual attributes Include licensed vocabularies Extract output as a FHIR R4 bundle The entity analysis request contains the following fields: documentContent : The data for the request, which consists of medical text.
- Healthcare Natural Language API entity mentions Medical Knowledge Category FHIR R4 resources and elements PROBLEM Condition PROBLEM Condition.category PROBLEM Condition.status PROBLEM ANATOMICAL STRUCTURE Condition.bodySite PROBLEM ANATOMICAL STRUCTURE Condition.evidence PROBLEM SEVERITY Condition.severity PROCEDURE Procedure PROCEDURE Procedure.status PROCEDURE Procedure.code PROCEDURE ANATOMICAL STRUCTURE Procedure.bodySite PROCEDURE MEDICAL DEVICE Procedure.usedCode PROCEDURE PROBLEM Procedure.reasonReference MEDICINE MedicationStatement MEDICINE MedicationStatement.status MEDICINE MedicationStatement.medication MEDICINE PROBLEM MedicationStatement.reasonReference MEDICINE MED DOSE MedicationStatement.dosage.doseAndRate.doseQuantity MEDICINE MED FREQUENCY MedicationStatement.dosage.text MEDICINE MED ROUTE MedicationStatement.dosage.route MEDICINE MED STRENGTH MedicationStatement.dosage.doseAndRate.doseQuantity MEDICINE MED UNIT MedicationStatement.dosage.doseAndRate.doseQuantity To extract entities from text as a FHIR R4 bundle, see Extract output as a FHIR R4 bundle .
- Each entity mention has the following fields: mentionId : a unique identifier for an entity mention in the response. type : the medical knowledge category of the entity mention. text : consists of the textContent field, and describes the excerpt of the medical text containing the entity mention, and offset , the location of the entity mention in the source medical text. temporalAssessment : specifies how the linked entity relates to the entity mention, one of CURRENT , CLINICAL HISTORY , FAMILY HISTORY , UPCOMING , or OTHER . certaintyAssessment : the negation or qualification of the medical concept, one of LIKELY , SOMEWHAT LIKELY , UNCERTAIN , SOMEWHAT UNLIKELY , UNLIKELY , or CONDITIONAL . subject : specifies the subject that the medical concept relates to, one of PATIENT , FAMILY MEMBER , or OTHER . linkedEntities : a list of medical concepts that might be related to this entity mention.

### "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- To grant each role to the service account, run the gcloud projects add-iam-policy-binding command. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/pubsub.subscriber gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/healthcare.hl7V2Ingest gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/monitoring.metricWriter The output includes the updated policy: bindings: - members: - user: SERVICE ACCOUNT NAME role: roles/pubsub.publisher - members: - user: SERVICE ACCOUNT NAME roles/healthcare.hl7V2Ingest - members: - user: SERVICE ACCOUNT NAME roles/monitoring.metricWriter etag: ETAG version: 1 Creating the cluster To create the cluster in GKE, run the gcloud container clusters create command: gcloud container clusters create mllp-adapter \ --zone = COMPUTE ZONE \ --service-account CLIENT EMAIL where: COMPUTE ZONE is the zone in which your cluster is deployed.
- To grant each role to the service account, run the gcloud projects add-iam-policy-binding command. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/pubsub.publisher gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/healthcare.hl7V2Consumer The output includes the updated policy: bindings: - members: - user: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com role: roles/pubsub.publisher - members: - user: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com roles/healthcare.hl7V2Consumer etag: ETAG version: 1 The following steps show how to create a Linux virtual machine instance in Compute Engine: Console In the Google Cloud console, go to the VM Instances page.
- This output indicates that the message was published. connect to [127.0.0.1] from localhost [127.0.0.1] 39522 ^KMSH ^ \& A SEND FACILITY 1 A A 20180101000000 TYPE^A 20180101000000 T 0.0 AA 00 ASCII^MEVN A00 20180101040000^MPID 14^A111^^^^MRN 11111111^^^^MRN 1111111111^^^^ORGNMBR^\ This output corresponds to the value in the data field of the response that you received when you created the message.
- This output indicates that the message was published. connect to [127.0.0.1] from localhost [127.0.0.1] 39522 ^KMSH ^ \& A SEND FACILITY 2 A A 20180101000000 TYPE^A 20180101000000 T 0.0 AA 00 ASCII^MEVN A00 20180101040000^MPID 14^A111^^^^MRN 11111111^^^^MRN 1111111111^^^^ORGNMBR^\ This output corresponds to the value in the data field of the response that you received when you created the message.

### "Import and export FHIR resources using Cloud Storage \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- An optional flag, --resource-type , that only exports specific resource types, defined as a comma-separated list of one or more FHIR resources types An optional flag, --since , that only exports resources updated after a specific time, defined as YYYY-MM-DDThh:mm:ss.sss+zz:zz The following sample shows the gcloud healthcare fhir-stores export gcs command. gcloud healthcare fhir-stores export gcs FHIR STORE ID \ --dataset = DATASET ID \ --location = LOCATION \ --project = PROJECT ID --gcs-uri = gs:// BUCKET / DIRECTORY The command line displays the operation ID: Waiting for operation [ OPERATION ID ] to complete...done. name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID To view the status of the operation, run the gcloud healthcare operations describe command, providing the OPERATION ID from the response: gcloud healthcare operations describe OPERATION ID \ --dataset = DATASET ID After the command completes, the response includes done . metadata: '@type': type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata apiMethodName: google.cloud.healthcare.v1.fhir.FhirService.ExportFhirData createTime: " CREATE TIME " endTime: " END TIME " name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID response: '@type': type.googleapis.com/google.cloud.healthcare.v1.fhir.rest.ExportResourcesResponse fhirStore: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID resourceCount: ' RESOURCE COUNT ' API To export FHIR resources, use the projects.locations.datasets.fhirStores.export method.
- The command line displays the operation ID and, after the operation completes, done : Request issued for: [ FHIR STORE ID ] Waiting for operation [ OPERATION ID ] to complete...done. name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID To view more details of the operation, run the gcloud healthcare operations describe command, providing the OPERATION ID from the response: gcloud healthcare operations describe OPERATION ID \ --dataset = DATASET ID The response includes done: true . done: true metadata: '@type': type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata apiMethodName: google.cloud.healthcare.v1.fhir.FhirService.ImportResources createTime: ' CREATE TIME ' endTime: ' END TIME ' logsUrl: https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL , counter: success: ' SUCCESS COUNT ' name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID response: '@type': type.googleapis.com/google.cloud.healthcare.v1.fhir.rest.ImportResourcesResponse fhirStore: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID API To import FHIR resources into a FHIR store, use the projects.locations.datasets.fhirStores.import method.
- If the command specifies a directory that does not exist, the directory is created. curl To export FHIR resources, make a POST request and specify the following information: The name of the parent dataset The name of the FHIR store The destination Cloud Storage bucket An access token An optional field, type , that only exports specific resource types, defined as a comma-separated list of one or more FHIR resources types An optional field, since , that only exports resources updated after a specific time, defined as YYYY-MM-DDThh:mm:ss.sss+zz:zz The following sample shows a POST request using curl . curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'gcsDestination': { 'uriPrefix': 'gs:// BUCKET / DIRECTORY ' }, }" "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID :export" If the request is successful, the server returns the response in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " } The response contains an operation name.
- An access token An optional field, type , that only exports specific resource types, defined as a comma-separated list of one or more FHIR resources types An optional field, since , that only exports resources updated after a specific time, defined as YYYY-MM-DDThh:mm:ss.sss+zz:zz The following sample shows a POST request using Windows PowerShell. $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-WebRequest -Method Post -Headers $headers -ContentType: "application/json; charset=utf-8" -Body "{ 'gcsDestination': { 'uriPrefix': 'gs:// BUCKET / DIRECTORY ' }, }" -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID :export" Select-Object -Expand Content If the request is successful, the server returns the response in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " } The response contains an operation name.

