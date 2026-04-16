---
title: "Encrypt data with customer-managed encryption keys \_|\_ Gemini Code Assist\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/encrypt-data-cmek
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/encrypt-data-cmek
  title: "Encrypt data with customer-managed encryption keys \_|\_ Gemini Code Assist\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Encrypt data with customer-managed encryption keys
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines how to use customer-managed encryption keys (CMEK) with Cloud Key Management Service to encrypt and control data-at-rest for Gemini Code Assist.
Gemini Code Assist supports CMEK for code customization, but does not support Cloud EKM keys.
The process involves creating a CMEK, granting the necessary permissions to the Gemini Code Assist service account, and creating a code repository index encrypted with the CMEK.
Access to a CMEK-encrypted repository can be removed by revoking permissions, temporarily disabling, or permanently destroying the CMEK.
By default, Gemini for Google Cloud encrypts customer content at rest using Google default encryption, which requires no additional action.
Note: Gemini Code Assist code customization is available only in
Gemini Code Assist Enterprise. For more information, see
Gemini Code Assist supported features .
This document shows how to use customer-managed encryption keys (CMEK) to
encrypt and control data-at-rest in a cloud service through
Cloud Key Management Service . CMEK is integrated with
code customization for
Gemini Code Assist.
Gemini Code Assist doesn't support the use of
Cloud EKM keys.
In this document, you do the following:
Learn how to create a CMEK.
Grant permissions to the Gemini Code Assist service account.
Create a code repository index with a CMEK.
Remove access to a CMEK repository.
By default, Gemini for Google Cloud encrypts customer content at
rest .
Gemini handles encryption for you without any additional actions
on your part. This option is called Google default encryption .
After you set up your resources with CMEKs, the experience of accessing your
Gemini resources is similar to using Google default encryption.
For more information about your encryption options, see
Customer-managed encryption keys (CMEK) .
Before you begin
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, launch the Cloud Shell editor .
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
In the development environment where you set up the gcloud CLI, run the
gcloud components update command
to make sure that you have updated all installed components of the
gcloud to the latest version.
gcloud components update
Create a CMEK and grant permissions
To create a CMEK and grant the Gemini Code Assist service account
permissions on the key, perform the following tasks:
In the Google Cloud project where you want to manage your keys, do the
following:
Enable the Cloud Key Management Service API .
Create the key ring and
key directly in
Cloud KMS.
Grant the CryptoKey Encrypter/Decrypter IAM role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) to the
Gemini Code Assist service account. Grant this permission on
the key that you created.
Console
Go to Key management .
Go to Key management
Select the key that you created.
Grant access to the Gemini Code Assist service account:
Click Add principal .
Add the Gemini Code Assist service account. The
service account is service- PROJECT_NUMBER @gcp-sa-cloudaicompanions. ,
where PROJECT_NUMBER is the
project number
of the Google Cloud project where
Gemini Code Assist is enabled.
In Select a role , select Cloud KMS >
Cloud KMS CryptoKey Encrypter/Decrypter .
Click Save .
Repeat the previous step to grant access to the account that will
create the code repository index with a CMEK.
Return to the Key management
page and select the key again.
Select Show info panel . You should see roles in the
Role/Member column.
gcloud
To grant access to the Gemini Code Assist service
account, in a shell environment, use the
kms keys add-iam-policy-binding command :
gcloud kms keys add-iam-policy-binding KEY_NAME \
--project= PROJECT_ID \
--location= LOCATION \
--keyring= KEYRING_NAME \
--member="serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloudaicompanion." \
--role="roles/cloudkms.cryptoKeyEncrypterDecrypter"
Replace the following:
KEY_NAME : the key name.
PROJECT_ID : the ID of the project that contains the key.
LOCATION : the key location.
KEYRING_NAME : the key ring name.
PROJECT_NUMBER : the project number
of the Google Cloud project with
Gemini Code Assist enabled.
Repeat the previous step to grant access to the account that will
create the code repository index with a CMEK.
For more information about this command, see the
gcloud kms keys add-iam-policy-binding documentation .
You can now
create a code repository index with a CMEK
using the API, and specify the key to use for encryption.
Create a code repository index with a CMEK
To create a new repository that has CMEK protection, do one of the following:
gcloud
Use the gemini code-repository-indexes create command :
gcloud gemini code-repository-indexes create CODE_REPOSITORY_INDEX_NAME \
--location= LOCATION \
--kms-key="projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/ KEY_NAME "
Replace the following:
CODE_REPOSITORY_INDEX_NAME : the name of the new code repository
index that you'll create.
LOCATION : the key location.
KEY_PROJECT_ID : the key project ID.
KEYRING_NAME : the key ring name.
KEY_NAME : the key name.
API
Create a JSON file that contains the following information:
{
"kmsKey": "projects/ KEY_PROJECT_ID /locations/ KEY_LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/ KEY_NAME "
}
Replace the following:
KEY_PROJECT_ID : the key project ID
KEY_LOCATION : the key location
KEYRING_NAME : the key ring name
KEY_NAME : the key name
Use a cURL command to call the
projects.locations.codeRepositoryIndexes.create method :
curl -X POST --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://cloudaicompanion.googleapis.com/v1/projects/ PROJECT_ID /locations/ KEY_LOCATION /codeRepositoryIndexes?codeRepositoryIndexId= CODE_REPOSITORY_INDEX_NAME "
Replace the following:
JSON_FILE_NAME : the path for the
JSON file that you created in the preceding step.
PROJECT_ID : the ID of the project to create
the repository in.
KEY_LOCATION : the location to create the
repository in, which must match the location where the CMEK exists.
CODE_REPOSITORY_INDEX_NAME : the name of the
new code repository index that you'll create. For example,
zg-btf-0001 .
The response returns a set of log entries.
Remove access to a CMEK repository
Warning: If you disable the CMEK, Google Cloud removes the instance and
the service will no longer be available, even if you re-enable the key.
There are several ways to remove access to a CMEK-encrypted repository:
Revoke the Cloud KMS CryptoKey Encrypter/Decrypter
role from the
Gemini Code Assist service account using the
Google Cloud console
or the gcloud .
Temporarily disable
the CMEK.
Permanently destroy
the CMEK.
We recommend that you revoke the permissions from the
Gemini Code Assist service account before disabling or destroying
a key. Changes to permissions are consistent within seconds, so you can observe
the impacts of disabling or destroying a key.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
