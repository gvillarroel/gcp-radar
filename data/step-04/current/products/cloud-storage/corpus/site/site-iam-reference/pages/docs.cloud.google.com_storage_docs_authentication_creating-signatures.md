---
title: "Create signatures \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/authentication/creating-signatures
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/authentication/creating-signatures
  title: "Create signatures \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Create signatures
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use the Google Cloud signBlob method
to create a signature from a string-to-sign or policy document. Signatures
are used as credentials in certains requests, such as signed URLs . This
guide uses RSA keys for creating signatures.
Important: The Google-managed service account keys used by the signBlob
method are rotated regularly. If you set an expiration time for a signature that
is greater than 12 hours and generate the signature using the signBlob method,
the signature is usable for at least 12 hours, but might stop working prior to
the expiration time due to key rotation. Signatures generated using the
signBlob method are best used for short-lived access to resources.
Before you begin
Enable the Service Account Credentials API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
You must have the iam.serviceAccounts.signBlob permission for the service
account that you use in this guide. The iam.serviceAccounts.signBlob
permission is included in the roles/iam.serviceAccountTokenCreator role.
The service account that you use in this guide must have permission to
perform the request encoded within the signature. For example, if the
signature will be used to read object data from a bucket, the service
account must have permission to read the object data.
Create a signature
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following information:
{
"payload" : " REQUEST_INFORMATION "
}
Where:
REQUEST_INFORMATION is a string-to-sign or a
policy document . For both, content must be base64-encoded.
Use cURL to call the IAM API with a
signBlob request:
curl -X POST --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ SERVICE_ACCOUNT_EMAIL :signBlob"
Where:
JSON_FILE_NAME is the name of the file you created
in Step 2.
SERVICE_ACCOUNT_EMAIL is the email address of the
service account you want to use to create the signature. For example,
example-service-account@my-pet-project.iam.gserviceaccount.com .
If successful, a message digest is returned in the signedBlob field in
the response, which is base64 encoded.
To complete the signature, ensure the message digest is base64 decoded, and
then hex-encode the message digest.
What's next
See the reference page for signing blobs with the Google Cloud CLI .
Create a signed URL manually , using the signature you created.
Create a signed URL with Google Cloud tools .
Learn more about signatures .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
