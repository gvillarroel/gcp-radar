---
title: "Customer-managed encryption keys (CMEK) \_|\_ Dialogflow CX \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek
  title: "Customer-managed encryption keys (CMEK) \_|\_ Dialogflow CX \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Dialogflow CX encrypts customer content at
rest. Dialogflow CX handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
Google default
encryption uses the same hardened key management systems that we use for our
own encrypted data. These systems include strict key access controls and
auditing.
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Dialogflow CX. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Dialogflow CX resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Protected data
All Dialogflow CX agent
data-at-rest
can be protected with CMEKs.
Limitations
Key rotation is supported but data re-encryption is not. That is, re-encrypting previously encrypted data with a new key version is not
supported.
The following
regions
are not supported:
global
One key should be used per project location.
In order to
restore an agent
with CMEK enabled,
you must choose the Cloud Storage option.
Existing resources in non-CMEK integrated projects cannot be CMEK integrated retroactively. Instead, it is recommended that resources be exported and restored in a new project for CMEK.
Vertex AI Agent Builder has some Cloud KMS Limitations
Create keys
To create keys, you use the KMS service.
For instructions, see
Creating symmetric keys .
When creating or choosing a key,
you must configure the following:
Be sure to select the
location
that you use for your agent,
otherwise, requests will fail.
Configure an agent to use your keys
When you create an agent,
you can specify the agent
location and whether the agent will use a
Google-managed or the already configured customer-managed key for that location.
Make your selections at this time.
Warning: You cannot change encryption key settings for a location once it has
been specified. In order to change a location, you must create a new project
with the selected location and import
existing agents to the new project.
Prerequisites
Note: CCAI CMEK Service account is not visible in your project IAM.
Create the CCAI CMEK Service account for your project with Google Cloud CLI. For more information,
see gcloud services identity documentation .
gcloud beta services identity create --service = dialogflow.googleapis.com --project = PROJECT_ID
The service account will be created. It won't be returned in the create response, but will have the following format:
service- PROJECT_NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com
Grant the CCAI CMEK Service account the Cloud KMS CryptoKey Encrypter/Decrypter role to ensure that the service has permissions to encrypt and decrypt with your key.
gcloud kms keys add-iam-policy-binding KMS_KEY_ID \
--project = PROJECT_ID \
--location = LOCATION_ID \
--keyring = KMS_KEY_RING \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
Configure a key for Dialogflow CX location
Use the InitializeEncryptionSpec API to configure the key.
You will need to provide the following variables:
PROJECT_ID : Your Google Cloud project ID.
LOCATION_ID : The location you chose to enable CMEK in Dialogflow CX.
KMS_KEY_RING : The key ring your KMS key was created in. (The location in the key ring, like projects/ PROJECT_ID /locations/ LOCATION_ID /keyRings/ KMS_KEY_RING , must match the location where you're enabling CMEK.)
KMS_KEY_ID : The name of your KMS key that will be used to encrypt and decrypt Dialogflow CX data in the selected location.
For example:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-d "{ encryption_spec: { kms_key: 'projects/ PROJECT_ID /locations/ LOCATION_ID /keyRings/ KMS_KEY_RING /cryptoKeys/ KMS_KEY_ID ' } }" \
"https:// LOCATION_ID -dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /encryptionSpec:initialize"
You should receive a JSON response similar to the following:
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
Use the GetOperation API to check the long-running operation result.
For example:
curl -X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
"https:// LOCATION_ID -dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /operations/ OPERATION_ID "
Check CMEK settings
Use the GetEncryptionSpec API to check the encryption key configured for a location.
For example:
curl -X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
"https:// LOCATION_ID -dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /encryptionSpec"
Revoke keys
To revoke Dialogflow CX access to the key, you could disable the KMS key version or remove the service account's Cloud KMS CryptoKey Encrypter/Decrypter role from the KMS key.
After key revocation the encrypted data will become inaccessible to Dialogflow CX and the service will no longer be in an operational state until the key permissions are reinstated.
Warning: If you have revoked the key for more than 30 days, the Dialogflow CX data encrypted by that key will be lost.
Previous
arrow_back
Agent collaboration
Next
Security settings
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
