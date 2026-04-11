---
title: "Quickstart: Create encryption keys with Cloud KMS \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/create-encryption-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-encryption-keys
  title: "Quickstart: Create encryption keys with Cloud KMS \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create encryption keys with Cloud KMS
This quickstart shows you how to create and use encryption keys with
Cloud Key Management Service in a project you own. These instructions use the
Google Cloud console to create key rings, keys, and key versions in
Cloud KMS. For instructions that use other methods,
see Autokey overview , Create a key
ring , and Create a key .
This quickstart uses the command line to send requests to the
Cloud KMS API. For programming examples that use the client
libraries to send requests to the Cloud KMS API, see Encrypting
and Decrypting .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud KMS API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudkms.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/cloudkms.admin, roles/cloudkms.cryptoKeyEncrypterDecrypter
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud KMS API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudkms.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/cloudkms.admin, roles/cloudkms.cryptoKeyEncrypterDecrypter
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Important: This quickstart creates Cloud KMS resources such as key
rings and keys. Once created, these resources cannot be deleted. For more
information, see Why can't I delete keys or key rings? .
Key rings and keys
To encrypt and decrypt content you will need a Cloud KMS key, which
is part of a key ring.
Create a key ring named test , and a key named quickstart . Refer to the
object hierarchy overview for more
information about these objects and how they are related.
gcloud kms keyrings create "test" \
--location "global"
gcloud kms keys create "quickstart" \
--location "global" \
--keyring "test" \
--purpose "encryption"
You can use the list option to view the name and metadata for the key that you
just created.
gcloud kms keys list \
--location "global" \
--keyring "test"
You should see:
NAME PURPOSE PRIMARY_STATE
projects/ PROJECT_ID /locations/global/keyRings/test/cryptoKeys/quickstart ENCRYPT_DECRYPT ENABLED
Encrypt data
Now that you have a key, you can use that key to encrypt text or binary
content.
Store some text to be encrypted in a file called "mysecret.txt".
echo -n "Some text to be encrypted" > mysecret.txt
To encrypt the data with gcloud kms encrypt , provide your key information,
specify the name of the plaintext file to encrypt, and specify the name of the
file that will contain the encrypted content:
gcloud kms encrypt \
--location "global" \
--keyring "test" \
--key "quickstart" \
--plaintext-file ./mysecret.txt \
--ciphertext-file ./mysecret.txt.encrypted
The encrypt method saves your encrypted content in the file specified by the
--ciphertext-file flag.
Decrypt ciphertext
To decrypt the data with gcloud kms decrypt , provide your key information,
specify the name of the encrypted file (ciphertext file) to decrypt, and specify
the name of the file that will contain the decrypted content:
gcloud kms decrypt \
--location "global" \
--keyring "test" \
--key "quickstart" \
--ciphertext-file ./mysecret.txt.encrypted \
--plaintext-file ./mysecret.txt.decrypted
The decrypt method saves your decrypted content in the file specified by the
--plaintext-file flag.
To decrypt encrypted content, you must use the same key that was
used to encrypt the content.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
List the versions available for your key:
gcloud kms keys versions list \
--location "global" \
--keyring "test" \
--key "quickstart"
To destroy a version, run the following command, where 1 is the number
of the key version that you want to destroy:
Important: When you destroy a key version, you can no longer decrypt
content that was encrypted using that version of the key. Make sure that
you no longer need a key version before you destroy it.
gcloud kms keys versions destroy 1 \
--location "global" \
--keyring "test" \
--key "quickstart"
What's next
Start using the API .
Take a look at the API Reference .
Learn more about how to encrypt data at
rest .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
