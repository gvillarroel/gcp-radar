---
title: "Create a wrapped key \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/create-wrapped-key
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/create-wrapped-key
  title: "Create a wrapped key \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Create a wrapped key
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Cloud Key Management Service (Cloud KMS) to create a
wrapped key that you can then use to send
deidentify and
reidentify requests
to the Cloud Data Loss Prevention API of Sensitive Data Protection.
The process of using a cryptographic key to de-identify and re-identify content
is called pseudonymization (or tokenization ). For conceptual information
about this process, see
Pseudonymization .
For an example that shows how to create a wrapped key,
tokenize content, and re-identify tokenized content, see De-identifying and
re-identifying sensitive
text
instead.
You can complete the steps in this document in 5 to 10 minutes, excluding the
Before you
begin
steps.
Note: When you use
Cloud KMS for cryptographic operations,
charges apply . In addition, when you use a Cloud HSM key or a Cloud EKM key, you consume Cloud KMS quota on the
project that contains the key. In contrast, if you're using a software Cloud KMS key with
Sensitive Data Protection, no quota values apply. For more information, see Quotas in the
Cloud KMS documentation.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Sensitive Data Protection and Cloud KMS APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dlp.googleapis.com cloudkms.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Sensitive Data Protection and Cloud KMS APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dlp.googleapis.com cloudkms.googleapis.com
Required roles
To get the permissions that
you need to create a wrapped AES key,
ask your administrator to grant you the
following IAM roles on the project:
Cloud KMS Admin ( roles/cloudkms.admin )
Cloud KMS CryptoKey Encrypter ( roles/cloudkms.cryptoKeyEncrypter )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a key ring and a key
Before you start this procedure, decide where you want Sensitive Data Protection
to process your de-identification and re-identification requests. When you
create a Cloud KMS key, you must store it in either global or in the
same region that you will use for your Sensitive Data Protection requests.
Otherwise, the Sensitive Data Protection requests will fail.
You can find a list of supported locations in Sensitive Data Protection
locations . Note the name of your
chosen region (for example, us-west1 ).
This procedure uses global as the location for all API requests. If you want
to use a different region, replace global with the region name.
Create a key ring:
gcloud kms keyrings create "dlp-keyring" \
--location "global"
Create a key:
gcloud kms keys create "dlp-key" \
--location "global" \
--keyring "dlp-keyring" \
--purpose "encryption"
List your key ring and key:
gcloud kms keys list \
--location "global" \
--keyring "dlp-keyring"
You get the following output:
NAME: projects/<var>PROJECT_ID</var>/locations/global/keyRings/dlp-keyring/cryptoKeys/dlp-key
PURPOSE: ENCRYPT_DECRYPT
ALGORITHM: GOOGLE_SYMMETRIC_ENCRYPTION
PROTECTION_LEVEL: SOFTWARE
LABELS:
PRIMARY_ID: 1
PRIMARY_STATE: ENABLED
In this output, PROJECT_ID is the ID of your project.
The value of NAME is the full resource name of your Cloud KMS
key. Note this value because the de-identify and re-identify requests
require it.
Create a base64-encoded AES key
This section describes how to create an Advanced Encryption Standard (AES) key
and encode it in base64 format.
Note: These steps use the openssl and base64 commands, but there are
many other ways
to perform this task.
Create a 128-, 192-, or 256-bit AES key. The following command uses openssl
to create a 256-bit key in the current directory:
openssl rand -out "./aes_key.bin" 32
The file aes_key.bin is added to your current directory.
Encode the AES key as a base64 string:
base64 -i ./aes_key.bin
You get an output similar to the following:
uEDo6/yKx+zCg2cZ1DBwpwvzMVNk/c+jWs7OwpkMc/s =
Warning: Don't use this example key to protect actual sensitive workloads.
This key is provided only to serve as an example. Because it's shared here,
this key is not safe to use.
Wrap the AES key using the Cloud KMS key
This section describes how to use the Cloud KMS key that you created in
Create a key ring and a key to wrap the base64-encoded AES
key that you created in Create a base64-encoded AES key .
To wrap the AES key, use curl to send the following request to the
Cloud KMS API
projects.locations.keyRings.cryptoKeys.encrypt
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/global/keyRings/dlp-keyring/cryptoKeys/dlp-key:encrypt" \
--request "POST" \
--header "Authorization:Bearer $( gcloud auth application-default print-access-token ) " \
--header "content-type: application/json" \
--data "{\"plaintext\": \" BASE64_ENCODED_AES_KEY \"}"
Replace the following:
PROJECT_ID : the ID of your project .
BASE64_ENCODED_AES_KEY : the base64-encoded string
returned in Create a base64-encoded AES key .
The response that you get from Cloud KMS is similar to the following
JSON:
{
"name" : "projects/<var>PROJECT_ID</var>/locations/global/keyRings/dlp-keyring/cryptoKeys/dlp-key/cryptoKeyVersions/1" ,
"ciphertext" : "CiQAYuuIGo5DVaqdE0YLioWxEhC8LbTmq7Uy2G3qOJlZB7WXBw0SSQAjdwP8ZusZJ3Kr8GD9W0vaFPMDksmHEo6nTDaW/j5sSYpHa1ym2JHk+lUgkC3Zw5bXhfCNOkpXUdHGZKou1893O8BDby/82HY=" ,
"ciphertextCrc32c" : "901327763" ,
"protectionLevel" : "SOFTWARE"
}
In this output, PROJECT_ID is the ID of your project.
Note the value of ciphertext in the response.
That is your wrapped key.
What's next
Learn more about tokenizing data through a cryptographic
key .
Work through an example that shows how to create a wrapped
key, tokenize content, and re-identify tokenized
content .
Learn more about de-identification methods that use this wrapped key,
and look through code
samples .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
