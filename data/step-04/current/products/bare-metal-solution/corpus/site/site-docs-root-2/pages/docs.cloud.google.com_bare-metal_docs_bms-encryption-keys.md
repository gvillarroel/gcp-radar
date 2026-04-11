---
title: "Set up encryption keys for a server \_|\_ Bare Metal Solution \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys
  title: "Set up encryption keys for a server \_|\_ Bare Metal Solution \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up encryption keys for a server
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can set up encryption keys to encrypt your server passwords. These keys are
customer-managed encryption keys (CMEK) that you can manage using Cloud Key Management Service (Cloud KMS). You can set them while provisioning a new server or while
reimaging an existing one. You can use an encryption key with multiple servers.
Using an encryption key is optional. However, once you set up an encryption key,
you have to use it. You can't change this setting. However, you can change the
key or its version.
This feature is available only for the
Linux OSes supported by Bare Metal Solution .
Before you begin
Using Cloud KMS, create an encryption key.
Note: You don't have to create the Cloud KMS key in the same
project that contains your Bare Metal Solution server.
To create an encryption key, follow these steps:
In the project in which you want to create the key,
enable the Cloud KMS API .
Do this only once per project.
Assign the following roles
to your Bare Metal Solution service account. Do this only once per project.
roles/cloudkms.viewer : verify that the
CryptoKeyVersion is available to use.
roles/cloudkms.publicKeyViewer : retrieve a public key.
To learn how to grant a role, see
Granting roles on a resource .
To assign these roles, use the gcloud projects add-iam-policy-binding command.
gcloud projects add-iam-policy-binding KMS_PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcp-sa-bms.iam.gserviceaccount.com \
--role roles/cloudkms.publicKeyViewer
gcloud projects add-iam-policy-binding KMS_PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcp-sa-bms.iam.gserviceaccount.com \
--role roles/cloudkms.viewer
Replace the following:
KMS_PROJECT_ID : the project that contains your
Cloud KMS key
PROJECT_NUMBER : the project that contains your
Bare Metal Solution server
Create an asymmetric decryption key .
Important: You must select 3072 bit RSA - OAEP Padding - SHA256 Digest
algorithm. Using any other algorithm can result in undecipherable
passwords.
You can create as many keys and versions as required.
Set up encryption keys while provisioning a server
You can set up an encryption key for a new Bare Metal Solution server while
provisioning it through the Google Cloud console intake form .
To set up an encryption key while provisioning a server, see
Use the Google Cloud console intake form to enter your selections .
Set up encryption keys while reimaging a server
To set up encryption keys while reimaging a server, see
Change the OS for a server .
View encryption keys and passwords of a server
To view encryption keys and passwords of a server, follow these steps:
Console
Go to the Servers page.
Go to Servers
Click the server name.
On the Server details page, view the encryption key in
Password encryption key field.
To view user accounts and their corresponding encrypted passwords, go to
the User Accounts section.
gcloud
Use the gcloud alpha bms instances auth-info command:
gcloud alpha bms instances auth-info SERVER_NAME --project= PROJECT_ID --region= REGION
Replace the following:
SERVER_NAME : the name of the Bare Metal Solution server
PROJECT_ID : the ID of the project
REGION : the region of the Bare Metal Solution server
Decrypt a password
To obtain the raw password, follow these steps:
Obtain the ciphertext. Use the gcloud alpha bms instances auth-info
command.
gcloud alpha bms instances auth-info SERVER_NAME \
--project= PROJECT_ID \
--region= REGION \
--format='value(userAccounts. USERNAME . ENCRYPTED_PASSWORD_FILE )' | tr -d ' \n' | base64 -d > CIPHERTEXT_FILE
Replace the following:
SERVER_NAME : the name of your Bare Metal Solution server
PROJECT_ID : the ID of your Bare Metal Solution project
REGION : the location of your Bare Metal Solution server
USERNAME : the username of the account associated with the
password you want to decrypt. The value is either root or
customeradmin .
ENCRYPTED_PASSWORD_FILE : the file in which you saved the encrypted
password. To avoid problems with the format of the password after copying it,
remove the spaces and newline ( '\n' ) characters.
CIPHERTEXT_FILE : the name of the ciphertext file
Example:
gcloud alpha bms instances auth-info my-instance \
--region=europe-west3 \
--project=project-testing \
--format='value(userAccounts.customeradmin.encryptedPassword)' | tr -d ' \n' | base64 -d > ciphertext
To obtain the ciphertext from the password copied from the Google Cloud console,
use the following command:
cat ENCRYPTED_PASSWORD_FILE | tr -d ' \n' | base64 -d > CIPHERTEXT_FILE
Replace the following:
ENCRYPTED_PASSWORD_FILE : the file in which you saved the
encrypted password. To avoid problems with the format of the password after
copying it, remove the spaces and newline ( '\n' ) characters.
CIPHERTEXT_FILE : the name of the ciphertext file
Example:
cat encrypted_password | tr -d ' \n' | base64 -d > ciphertext
Decrypt the password. Follow the steps in Decrypt data .
What's next
Operate your Bare Metal Solution server .
Check the status of a server .
Manage servers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
