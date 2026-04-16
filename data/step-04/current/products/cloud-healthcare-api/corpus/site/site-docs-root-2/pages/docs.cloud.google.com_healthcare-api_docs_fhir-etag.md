---
title: "Prevent FHIR resource conflicts using ETags \_|\_ Cloud Healthcare API \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/fhir-etag
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/fhir-etag
  title: "Prevent FHIR resource conflicts using ETags \_|\_ Cloud Healthcare API \_\
    |\_ Google Cloud Documentation"
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
Prevent FHIR resource conflicts using ETags
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use entity tags (ETags)
for concurrency management
with FHIR resources in the Cloud Healthcare API.
ETags help prevent data loss and improve application performance by enabling
optimistic concurrency control
and client-side caching.
Understand ETags
An ETag serves as a unique identifier
for the current state of a FHIR resource on the server, similar to a
version number. Each time a FHIR resource is created or modified,
a new ETag value is generated.
You can use ETags to ensure data integrity and optimize performance in the following
situations:
To ensure optimistic concurrency control: When you include an ETag in a request to modify a FHIR resource,
the Cloud Healthcare API verifies if the ETag matches the latest version of
the FHIR resource on the server. This helps prevent
one client from accidentally overwriting changes made by another client, also
called a write-write conflict
or the " lost update problem ".
Sending conditional requests: ETags allow clients to conditionally send
requests only when specific conditions are met. This optimizes data
retrieval and reduces unnecessary network traffic. For example, you can send
conditional requests using the following HTTP headers:
If-Match : The request only succeeds if the provided ETag matches the
current ETag on the server. This ensures you're updating the expected
version of the FHIR resource.
If-None-Match : The request only succeeds if the provided ETag doesn't
match the current ETag on the server. This lets you know
if your locally cached version of a resource is still current,
reducing the need to fetch the full resource from the server each time.
This is commonly used for efficient caching.
FHIR ETags use weak validation ,
meaning they might not be identical across different server instances, but
they still effectively track resource changes.
Get an ETag
The following samples show how to get the ETag of a FHIR resource.
The ETag is included in the full HTTP response header when you
get the contents
of a FHIR resource. The ETag matches the Meta.versionId
in the FHIR resource.
Before using any of the request data, make the following replacements:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
FHIR_RESOURCE_TYPE : the FHIR resource type
FHIR_RESOURCE_ID : the FHIR resource ID
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
Permissions
healthcare.fhirResources.get
Roles
Healthcare FHIR Resource Reader
( roles/healthcare.fhirResourceReader )
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Cloud Healthcare API resources .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Note : If you created a Google Cloud project for this guide, then, as the project creator, you're automatically granted the Owner ( roles/owner ) IAM role, which has the permissions. You don't need to be granted any additional IAM roles.
curl
Use the fhir.read
method. The -verbose flag returns the
HTTP headers in the response, which contain the ETag.
curl -X GET \
-verbose \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID "
The response contains the following:
ETAG_VALUE "
PowerShell
Use the fhir.read
method. The -Headers flag returns the HTTP headers in the response, which contain the
ETag.
$cred = gcloud auth print-access-token
$headers = @ { "Authorization" = "Bearer $cred " }
Invoke-WebRequest `
-Method GET `
-Headers $headers `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID " | Select-Object -Expand Headers
The response contains the following:
ETag {W/" ETAG_VALUE "}
Manage concurrency when updating a FHIR resource
The following samples show how to include an ETag when updating a FHIR resource.
The samples use If-Match ,
which has the following behavior:
If the ETag matches the current ETag of the FHIR resource on the server,
the update succeeds, and the server generates a new ETag for the updated resource.
This ensures you're updating the expected version of the FHIR resource.
If the ETag doesn't match, the update fails with a 412 Precondition Failed
error, indicating another client has modified the resource since the original
ETag was fetched. This prevents data loss from accidental overwrites.
Before using any of the request data, make the following replacements:
ETAG_VALUE : the ETag value of the FHIR resource
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
FHIR_RESOURCE_TYPE : the FHIR resource type
FHIR_RESOURCE_ID : the FHIR resource ID
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
Permissions
healthcare.fhirResources.update
Roles
Healthcare FHIR Resource Editor
( roles/healthcare.fhirResourceEditor )
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Cloud Healthcare API resources .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Note : If you created a Google Cloud project for this guide, then, as the project creator, you're automatically granted the Owner ( roles/owner ) IAM role, which has the permissions. You don't need to be granted any additional IAM roles.
curl
Use the fhir.update
method.
Important: The sample includes a -d @request.json flag. You must
have a valid request.json file in your current directory before running
the sample. For examples
of what to include in a request.json file, see
Updating a FHIR resource .
curl -X PUT \
-H "If-Match: W/\" ETAG_VALUE \"" \
-H "Content-Type: application/json; charset=utf-8" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-d @request.json \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID "
The response contains the updated FHIR resource.
PowerShell
Use the fhir.update
method.
Important: The sample includes an -Infile request.json flag. You must
have a valid request.json file in your current directory before running
the sample. For examples
of what to include in a request.json file, see
Updating a FHIR resource .
$cred = gcloud auth print-access-token
$etag = W/ \" ETAG_VALUE \" "
$headers = @{
" Authorization " = " Bearer $cred "
" If-Match " = " $etag "}
Invoke-WebRequest `
-Method PUT `
-Headers $headers `
-InFile request.json `
-Uri " https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID " | Select-Object -Expand Content
The response contains the updated FHIR resource.
Implement client-side caching
You can use ETags to implement client-side caching, which accelerates data
retrieval and contributes to a smoother, more responsive user experience.
To retrieve a previously cached FHIR resource, you can include the cached ETag
in the If-None-Match
header, which has the following behavior:
If the ETags match, the server responds with 304 Not Modified , and the
client uses its cached copy. This saves bandwidth and reduces the server load.
If the ETags don't match, the server sends the updated FHIR resource and
its new ETag, allowing the client to refresh its cache.
The following samples show how to get the contents of a FHIR resource
using an ETag that matches the ETag on the server.
Before using any of the request data, make the following replacements:
ETAG_VALUE : the ETag value of the FHIR resource
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
FHIR_RESOURCE_TYPE : the FHIR resource type
FHIR_RESOURCE_ID : the FHIR resource ID
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
Permissions
healthcare.fhirResources.get
Roles
Healthcare FHIR Resource Reader
( roles/healthcare.fhirResourceReader )
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Cloud Healthcare API resources .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Note : If you created a Google Cloud project for this guide, then, as the project creator, you're automatically granted the Owner ( roles/owner ) IAM role, which has the permissions. You don't need to be granted any additional IAM roles.
curl
Use the fhir.read
method. The -verbose flag returns the
HTTP headers in the response, otherwise no response is returned.
curl -X GET \
-H "If-None-Match: W/\" ETAG_VALUE \"" \
-v \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID "
The response contains a 304 Not Modified status code.
PowerShell
Use the fhir.read
method. The -Headers flag returns the HTTP headers in the response, otherwise no response
is returned.
$cred = gcloud auth print-access-token
$etag = W/ \" ETAG_VALUE \" "
$headers = @{
" Authorization " = " Bearer $cred "
" If-None-Match " = " $etag "}
Invoke-WebRequest `
-Method GET `
-Headers $headers `
-Uri " https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/ FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID " | Select-Object -Expand Headers
The response contains a 304 Not Modified status code.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
