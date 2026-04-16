---
title: "Configure custom HTTP headers for audit logs \_|\_ Cloud Healthcare API \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/audit-log-http-headers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/audit-log-http-headers
  title: "Configure custom HTTP headers for audit logs \_|\_ Cloud Healthcare API\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Configure custom HTTP headers for audit logs
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to complete the following tasks:
Configure custom HTTP headers in requests to the Cloud Healthcare API.
Use Cloud Audit Logs to search for requests and their matching custom
HTTP headers to do the following:
See who sent a request and when.
Simplify deployment and debugging by finding out which request caused a
particular error.
Caution: As shown in Logs retention periods ,
information in custom HTTP headers is retained in Cloud Audit Logs
by default for 30 days. You can modify the retention period by
configuring a custom retention period .
The minimum retention period is 7 days. Anyone who has permission to view
Cloud Audit Logs logs can view the information in the custom HTTP headers.
Therefore, we recommend that you don't include protected health information
(PHI) in the custom HTTP headers.
For more information
on using Cloud Audit Logs in the Cloud Healthcare API, see
Viewing Cloud Audit Logs .
Configurable methods
You can configure custom HTTP headers for the Cloud Healthcare API methods in
the following REST resources:
projects.locations
projects.locations.datasets
projects.locations.dicomStores
projects.locations.dicomStores.studies
projects.locations.dicomStores.studies.series
projects.locations.dicomStores.studies.series.instances
projects.locations.dicomStores.studies.series.instances.frames
projects.locations.datasets.fhirStores
projects.locations.datasets.fhirStores.fhir
projects.locations.datasets.hl7V2Stores
projects.locations.datasets.hl7V2Stores.messages
projects.locations.datasets.operations
Configure custom HTTP headers
Caution: Using custom HTTP headers in a web browser triggers a CORS preflight
security check. The Cloud Healthcare API might not approve your custom header
during this check, which will cause the browser to block your request.
There are two types of custom HTTP headers that you can specify on Cloud Healthcare API
requests and view in audit logs. You can use each type exclusively or combine them.
Custom ID logging. You can specify the X-Request-Id custom HTTP header
to give each request its own custom ID, and then search through audit logs
for a request containing the ID. To supply a custom ID, specify the custom
HTTP header in the following format:
X-Request-Id: REQUEST_ID
Specify a unique value for REQUEST_ID in each request.
Most programming
languages have a way to generate random IDs that you can use to
create the request ID. For example, the Python
uuid module has
a uuid.uuid4()
function that you can use to generate IDs automatically for each request.
The Cloud Healthcare API doesn't generate request IDs.
Metadata logging. You can include additional metadata information in custom HTTP
headers using the X-Goog-Healthcare-Audit- IDENTIFIER
header. The header uniquely identifies the type of metadata information.
The metadata is stored in the audit log for each request. To
supply metadata information, specify one or more custom HTTP headers in
the following format:
X-Goog-Healthcare-Audit- IDENTIFIER : VALUE
Replace IDENTIFIER with a human-readable identifier.
Replace VALUE with a value for the metadata.
You can specify multiple values in a comma-separated list using the following syntax:
X-Goog-Healthcare-Audit- IDENTIFIER : VALUE_1 , VALUE_2 , VALUE_n ...
For example:
X-Goog-Healthcare-Audit-MyIdentifier: Value1, Value2, Value3
You can also specify multiple custom HTTP headers with their own unique values:
X-Goog-Healthcare-Audit-MyIdentifier1: Value1, Value2
X-Goog-Healthcare-Audit-MyIdentifier2: Value3
View the audit logs in Cloud Audit Logs
See View logs .
Example
The following example demonstrates a scenario where you specify custom HTTP
headers in a
fhir.create
request.
Suppose that you're running a study and you have a mobile application
for patients named PatientApp . The patients in the study are divided into
two cohorts: Cohort1 and Cohort2 . To identify each request
from Cohort1 with a unique ID and the name of the mobile application,
specify the following custom HTTP headers in each request:
X-Request-Id: REQUEST_ID
X-Goog-Healthcare-Audit-AppName: PatientApp
X-Goog-Healthcare-Audit-CohortName: Cohort1
The custom HTTP headers display in the metadata field of each request's audit log
in Cloud Audit Logs.
The following sample shows how to use curl to create a new Patient resource in a FHIR
store. The request contains the following custom HTTP headers:
X-Request-Id: 123
X-Goog-Healthcare-Audit-AppName: PatientApp
X-Goog-Healthcare-Audit-CohortName: Cohort1
Before sending the request, replace the following:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
curl -X POST \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-H "X-Request-Id: 123" \
-H "X-Goog-Healthcare-Audit-AppName: PatientApp" \
-H "X-Goog-Healthcare-Audit-CohortName: Cohort1" \
--data '{
"name": [
{
"use": "official",
"family": "Smith",
"given": [
"Darcy"
]
}
],
"gender": "female",
"birthDate": "1970-01-01",
"resourceType": "Patient"
}' "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient"
The output is the following:
{
"birthDate": "1970-01-01",
"gender": "female",
"id": " PATIENT_ID ",
"meta": {
"lastUpdated": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ",
"versionId": " VERSION_ID "
},
"name": [
{
"family": "Smith",
"given": [
"Darcy"
],
"use": "official"
}
],
"resourceType": "Patient"
}
If you search for the request in Cloud Audit Logs, the audit log
looks like the following:
{
logName: "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fdata_write"
protoPayload: {
@type: "type.googleapis.com/google.cloud.audit.AuditLog"
metadata: {
X-Request-Id: [123]
X-Goog-Healthcare-Audit-AppName: ["PatientApp"]
X-Goog-Healthcare-Audit-CohortName: ["Cohort1"]
}
...
}
...
}
View Google Cloud console-generated audit log HTTP headers
You can examine specific HTTP headers in audit logs to identify requests made through
Cloud Healthcare API applications in the Google Cloud console.
For example, all requests originating from the following Google Cloud console applications
are automatically tagged with the custom HTTP header
X-Goog-Healthcare-Audit-First-Party-Application-Access . The value of this
header indicates the source application:
fhir-viewer : Requests originating from the FHIR Viewer .
data-browser : Requests originating from the Cloud Healthcare API Data Browser.
dicom-studio : Requests originating from the Cloud Healthcare API DICOM Studio.
You can use this header value to filter or analyze requests specifically made from the
Google Cloud console applications when viewing
audit logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
