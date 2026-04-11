---
title: "Method: projects.locations.functions.generateUploadUrl \_|\_ Cloud Run functions\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl
  title: "Method: projects.locations.functions.generateUploadUrl \_|\_ Cloud Run functions\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Method: projects.locations.functions.generateUploadUrl
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Try it!
Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls . Once the function source code upload is complete, the used signed URL should be provided in functions.create or functions.patch request as a reference to the function source code.
When uploading source code to the generated signed URL, please follow these restrictions:
Source file type should be a zip file.
Source file size should not exceed 100MB limit.
No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL.
When making a HTTP PUT request, these two headers need to be specified:
content-type: application/zip
x-goog-content-length-range: 0,104857600
And this header SHOULD NOT be specified:
Authorization: Bearer YOUR_TOKEN
HTTP request
POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl
Path parameters
Parameters
parent
string
The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/*/locations/* . It takes the form projects/{project}/locations/{location} .
Authorization requires the following IAM permission on the specified resource parent :
cloudfunctions.functions.sourceCodeSet
Request body
The request body contains data with the following structure:
JSON representation
{
"kmsKeyName" : string
}
Fields
kmsKeyName
string
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} .
The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred). GCF will delegate access to the Google Storage service account in the internal project.
Response body
Response of GenerateSourceUploadUrl method.
If successful, the response body contains data with the following structure:
JSON representation
{
"uploadUrl" : string
}
Fields
uploadUrl
string
The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
