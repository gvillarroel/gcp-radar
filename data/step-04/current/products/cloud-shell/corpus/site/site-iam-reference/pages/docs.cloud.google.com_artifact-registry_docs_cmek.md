---
title: "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/cmek
  title: "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Enabling customer-managed encryption keys
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to encrypt content stored in repositories with
customer-managed encryption keys (CMEK).
Overview
By default, Artifact Registry encrypts customer content at
rest. Artifact Registry handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Artifact Registry. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Artifact Registry resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
CMEK with Cloud KMS Autokey
You can either create CMEKs manually to protect your Artifact Registry
resources or use Cloud KMS Autokey. With Autokey, key rings and keys are generated on demand to
support resource creation in Artifact Registry.
Service agents that use the keys for encrypt and decrypt operations are created if they don't
already exist and are granted the required Identity and Access Management (IAM) roles. For more
information, see Autokey overview .
To set up CMEK manually, see
Creating a key and granting permissions
To set up CMEK using Autokey, see
Use Autokey to create keys on this page.
You assign a CMEK key when you create a repository. You cannot change the
encryption mechanism of an existing repository. If you have a CMEK-encrypted
repository, then you cannot change the encryption mechanism to use a
Google-owned and Google-managed encryption key or assign a different Cloud KMS key for
encryption.
For more information about CMEK in general, including when and why to enable it,
see the CMEK overview .
Creating a key and granting permissions
The following instructions explain how to create a key for a repository and
grant permissions to encrypt and decrypt repository data with the key. You
can use a key created directly in Cloud KMS or an externally-managed
key that you make available with Cloud External Key Manager .
In the Google Cloud project where you want to manage your keys:
Enable the Cloud KMS API .
Create a key ring and a key using one of the following options:
Create a Cloud KMS key ring and then
create a Cloud KMS key .
Create an external key .
The Cloud KMS key location must match the
repository location of the repository you will encrypt.
If you have not created a repository in the Artifact Registry project,
the Artifact Registry service account doesn't exist. To create the
service account, run the following command:
gcloud beta services identity create --service = artifactregistry.googleapis.com --project = PROJECT
Replace PROJECT with the ID of the project where
Artifact Registry is running.
Grant the CryptoKey Encrypter/Decrypter IAM role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) to the Artifact Registry
service account. Grant this permission on the key you created.
Console
Go to the Cryptographic keys page.
Open the Cloud KMS page
Select the key you created.
Grant access to the Artifact Registry service account:
Select SHOW INFO PANEL .
Click ADD MEMBER .
Add the Artifact Registry service account. The service account is
service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com , where PROJECT-NUMBER is the
project number of the Google Cloud project where
Artifact Registry is running.
In Select a role , select Cloud KMS > Cloud KMS CryptoKey Encrypter/Decrypter .
Click SAVE .
Repeat the previous step to grant access to the account that will
create repositories.
Return to the Key management page
and select the key again.
Select the SHOW INFO PANEL . You should see roles on the
Role/Member column.
gcloud
Run the following command to grant access to the Artifact Registry
service account:
gcloud kms keys add-iam-policy-binding [ --project = PROJECT ] \
KEY --location LOCATION --keyring = KEYRING \
--member serviceAccount:service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \
--role roles/cloudkms.cryptoKeyEncrypterDecrypter
Where
PROJECT is the ID of the project that contains the key.
KEY is the key name.
LOCATION is the key location. The key location must match the repository location of the repository you will encrypt.
KEYRING is the key ring name.
PROJECT-NUMBER is the project number of the Google Cloud project that is running Artifact Registry.
Repeat the previous step to grant access to the account that will
create repositories.
For more information about this command see the
gcloud kms keys add-iam-policy-binding
documentation.
Next, create a repository
and specify the key to use for encryption.
Use Autokey to create keys
Autokey creates a new key in the same location as the repository.
Required roles
To get the permissions that
you need to use Autokey to create protected repositories,
ask your administrator to grant you the
following IAM roles on the folder or project:
Cloud KMS Autokey User ( roles/cloudkms.autokeyUser )
Artifact Registry Admin ( roles/artifactregistry.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create keys
Before you create keys with Autokey, you must
enable Cloud KMS Autokey .
Open the Repositories page in the Google Cloud console.
Open the Repositories page
Click Create Repository .
Fill out the required and optional fields for your
standard , remote , or
virtual repository.
In the Encryption section, choose
Cloud KMS with Autokey automated management .
Click Create .
Removing access
There are several ways to remove access to a CMEK-encrypted repository:
Revoke the
Cloud KMS CryptoKey Encrypter/Decrypter role
from the Artifact Registry service account using one of the following
methods:
Revoke access in the Google Cloud console
Revoke access by using the gcloud CLI
Temporarily disable the Customer-managed encryption key
Permanently destroy
the CMEK key
We recommend that you revoke the permissions from the Artifact Registry
service account before disabling or destroying a key. Changes to permissions are
consistent within seconds, so you can observe the impacts of disabling or
destroying a key.
When you disable or destroy the encryption key for a repository, you lose the
ability to view or retrieve artifact data. All artifact data stored in the
repository becomes inaccessible, including built artifacts, arbitrary binary
data (blobs), and manifests such as a Docker manifest or an npm packument file.
Users with the Artifact Registry Reader role
( roles/artifactregistry.reader ) or Viewer role
( roles/artifactregistry.viewer ) can still view artifact metadata such as the
artifact name, version, or tag.
Users with the Artifact Registry Administrator role
( roles/artifactregistry.admin )
or Owner role ( roles/owner ) can delete the repository.
CMEK organization policies
Artifact Registry supports organization policy constraints that
can require CMEK protection.
Policies can limit which Cloud KMS CryptoKeys can be used for
CMEK protection.
When Artifact Registry API is in the Deny policy list of services of
constraint constraints/gcp.restrictNonCmekServices , Artifact Registry
refuses to create new repositories that aren't CMEK-protected.
When constraints/gcp.restrictCmekCryptoKeyProjects is configured,
Artifact Registry creates CMEK-protected repositories that are
protected by a CryptoKey from an allowed project, folder, or organization.
Pub/Sub supports the same constraints. When you activate the
Artifact Registry API in a Google Cloud project, Artifact Registry
tries to automatically create a Pub/Sub topic with the topic ID
gcr using Google-owned and Google-managed encryption keys. However, if the Pub/Sub API is in
the Deny policy list for the constraint
constraints/gcp.restrictNonCmekServices , then
Pub/Sub won't create the topic. In this scenario, you must
create the gcr topic
with CMEK encryption. For more information, see the Pub/Sub
instructions for encrypting topics .
For more about configuring organization policies, see
CMEK organization policies .
What's next?
Create a repository encrypted with CMEK
Learn more about CMEK
Learn more about Google-owned and Google-managed encryption keys
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
