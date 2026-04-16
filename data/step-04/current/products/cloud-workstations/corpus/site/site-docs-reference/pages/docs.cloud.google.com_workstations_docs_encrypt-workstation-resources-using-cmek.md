---
title: "Encrypt workstation resources using CMEK \_|\_ Cloud Workstations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek
  title: "Encrypt workstation resources using CMEK \_|\_ Cloud Workstations \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Encrypt workstation resources using CMEK
Stay organized with collections
Save and categorize content based on your preferences.
By default, Cloud Workstations encrypts customer content at
rest. Cloud Workstations handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Cloud Workstations. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you track key usage , view audit logs, and
control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Cloud Workstations resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
By default, Cloud Workstations uses a
Google-owned and Google-managed encryption key
to encrypt workstation resources such as VMs and persistent disks when data
is at
rest . If you have specific compliance or regulatory requirements related to the keys
that protect your data, you can use customer-managed encryption
keys
(CMEK) using Cloud Key Management Service
(Cloud KMS) .
For more information about CMEK in general, including when and why to enable it,
see the Cloud KMS
documentation .
Before you begin
Create your projects
In the Google Cloud console, on the project selector page, select or create the
following Google Cloud
projects :
A key project contains your Cloud KMS resources, including a
key ring and a symmetric encryption key.
A workstations project contains workstations that are encrypted with a
CMEK key.
You can use the same project for your key project and workstations project,
but as a best practice, we recommend that you use two projects for
separation of duties .
Note: If you don't plan to keep the resources that you create in this
procedure, create new projects instead of selecting existing projects.
After you finish these steps, you can delete the projects, removing all
resources associated with both projects.
Make sure that billing is enabled for your Cloud project. For more
information, see Verify the billing status of your
projects .
Enable the required APIs in each project.
In your key project , make sure that you have enabled the
Cloud KMS API.
Enable Cloud KMS API
In your workstations project , make sure that you have enabled
Cloud KMS and Cloud Workstations APIs.
Enable Cloud KMS and Cloud Workstations APIs
Install and initialize the gcloud CLI:
To install the gcloud CLI, see Install the
gcloud CLI CLI
and follow the instructions for your operating system.
To initialize the gcloud CLI, see Initializing the
gcloud CLI CLI
or run the following command:
gcloud init
Required roles
Although you can grant Cloud KMS Admin
and Cloud Workstations Admin roles to the same person, we recommend that
you follow the principle of least privilege when assigning roles. As a best
practice, grant these roles to two separate people and have them coordinate,
rather than ask your Cloud KMS Admin to also be your
Cloud Workstations Admin. For more information, see security best
practices
and using IAM
securely
.
To get the permissions that
you need to set up CMEK,
ask your administrator to grant you the
following IAM roles:
If you are the Cloud KMS Admin , ask your administrator to grant you the following role so that you can create and manage Cloud KMS resources:
Cloud KMS Admin ( roles/cloudkms.admin )
on your key project .
If you are the Cloud Workstations Admin , ask your administrator to grant you the following role so that you can create and update workstations:
Cloud Workstations Admin ( roles/workstations.admin )
on your workstations project .
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create key ring and encryption key
In your key project , create a key and save the resource ID of the key:
Create or select a key ring .
The key ring must be located in the same region as your workstation cluster.
Cloud Workstations does not support multi-regional or global
Cloud KMS locations .
You can share key rings between services, but as a best practice, we
recommend that you use a different key for each protected resource. See
separation of duties
Create a symmetric encryption key .
Get the resource ID
of the key and save this for a later step.
Grant access to your encryption key
Cloud Workstations uses the following service accounts to manage encrypting your resources:
The Cloud Workstations Service Agent :
Cloud Workstations uses this account to detect when your key is rotated.
The Cloud KMS Key Service Account :
You will provide a service account that Cloud Workstations can use to access
your key for encrypting and decrypting resources.
Grant Cloud KMS Viewer role to the Cloud Workstations Service Agent
The Cloud Workstations Service
Agent allows
Cloud Workstations to perform service duties on your project. When you activated
the Cloud Workstations Service in your workstations project this service agent
was automatically created. For CMEK to work properly, you will need to grant
the Cloud Workstations Service Agent for your workstations project the
Cloud KMS Viewer
role
( roles/cloudkms.viewer ) on the Cloud KMS key, so that
Cloud Workstations can detect key rotation.
To retrieve the Cloud Workstations Service Agent for your workstation
project, use the following command:
gcloud beta services identity create \
--service = workstations.googleapis.com \
--project = WORKSTATIONS_PROJECT_ID
Replace WORKSTATIONS_PROJECT_ID with the ID of your
workstation project.
The Cloud Workstations Service Agent uses the following format:
service- $WORKSTATIONS_PROJECT_NUMBER @gcp-sa-workstations.iam.gserviceaccount.com .
Grant the Cloud Workstations Service Agent the Cloud KMS Viewer role
( roles/cloudkms.viewer )
on the CMEK key. This allows Cloud Workstations to detect key rotation
and re-encrypt resources as needed in your project.
gcloud kms keys add-iam-policy-binding \
KEY_NAME \
--keyring = KEY_RING \
--location = LOCATION \
--project = KMS_PROJECT_ID \
--role = roles/cloudkms.viewer \
--member = CLOUD_WORKSTATIONS_SERVICE_AGENT
Replace the following:
KEY_NAME : the name of your key.
KEY_RING : the name of your key ring.
LOCATION : the location containing your key ring.
KMS_PROJECT_ID : the ID of the project containing your key.
CLOUD_WORKSTATIONS_SERVICE_AGENT : the
Cloud Workstations Service Agent obtained from the preceding step.
For information on all flags and possible values, run the command with the
--help flag.
Set up a Cloud KMS Key Service Account
Cloud Workstations uses a service account of your choosing to perform
encryption and decryption with your customer-managed key. We refer to this account as the Cloud KMS Key Service Account. You may opt to
create a new service account or use an existing one. The requirements for this
account are:
The Cloud Workstations Admin must have
iam.serviceAccounts.actAs permission on this service account.
The service account you choose must have Cloud KMS CryptoKey Encrypter/Decrypter
role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on your Cloud KMS
Key.
If you would like to create a new service account, use the following command:
gcloud iam service-accounts create \
KMS_KEY_SERVICE_ACCOUNT_NAME \
--display-name = "Service account for Cloud Workstations CMEK" \
--project = WORKSTATIONS_PROJECT_ID
Replace the following:
KMS_KEY_SERVICE_ACCOUNT_NAME : the name of the service account.
WORKSTATIONS_PROJECT_ID : the ID of your workstation project.
The service account you created has an email in the following format:
KMS_KEY_SERVICE_ACCOUNT_NAME @PROJECT_ID.iam.gserviceaccount.com .
Save the email of the service account for a later step.
To grant the Cloud Workstations Admin IAM Service Account User
role
( roles/iam.serviceAccountUser ) on the Cloud KMS Key Service Account, run the following command:
gcloud iam service-accounts add-iam-policy-binding \
KMS_KEY_SERVICE_ACCOUNT_EMAIL \
--member = "user: CLOUD_WORKSTATIONS_ADMIN_EMAIL " \
--project = WORKSTATIONS_PROJECT_ID \
--role = roles/iam.serviceAccountUser
Replace the following:
KMS_KEY_SERVICE_ACCOUNT_EMAIL : the email of the Cloud KMS Key Service Account.
CLOUD_WORKSTATIONS_ADMIN_EMAIL : the email of the Cloud Workstations Admin .
WORKSTATIONS_PROJECT_ID : the ID of your workstation project.
To grant the Cloud KMS Key Service Account Cloud KMS CryptoKey Encrypter/Decrypter
role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on your Cloud KMS
Key, run the following command:
gcloud kms keys add-iam-policy-binding \
KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--project KMS_PROJECT_ID \
--role roles/cloudkms.cryptoKeyEncrypterDecrypter \
--member serviceAccount: KMS_KEY_SERVICE_ACCOUNT_EMAIL \
Replace the following:
KEY_NAME : the name of your key.
KEY_RING : the name of your key ring.
LOCATION : the location containing your key ring.
KMS_PROJECT_ID : the ID of the project containing your key.
KMS_KEY_SERVICE_ACCOUNT_EMAIL : the email of the Cloud KMS Key Service Account.
For information on all flags and possible values, run the command with the
--help flag.
Check for workstation clusters
If you don't have workstation clusters available in the
Google Cloud console ,
ask your Cloud Workstations Admin to create a workstation cluster for you
in the same region as the Cloud KMS key ring, or make sure that you
have a Cloud Workstations Admin IAM role on the project so
that you can create these resources yourself.
Use customer-managed encryption keys
Caution: CMEK fields in workstation configuration are immutable. After a
workstation configuration is created, you cannot change its encryption key. If
you want to use a different encryption key, you need to create a new workstation
configuration and then migrate workstation users to the new workstation
configuration.
If you have not yet created a workstation cluster, create one using the
clusters create
gcloud CLI command.
gcloud workstations clusters create \
WORKSTATIONS_CLUSTER_NAME --region = LOCATION \
--project = WORKSTATIONS_PROJECT_ID
Replace the following:
WORKSTATIONS_CLUSTER_NAME : the name of the workstation cluster.
LOCATION : the region name for your workstation cluster.
WORKSTATIONS_PROJECT_ID : the ID of your workstation project.
Create a workstation configuration
with encryption_key settings.
To create a workstation configuration with machine type e2-standard-2 ,
idle timeout of 3600s , and CMEK encrypted workstation resources, run
the following gcloud CLI command:
gcloud workstations configs create WORKSTATIONS_CONFIG_NAME \
--cluster = WORKSTATIONS_CLUSTER_NAME \
--region = LOCATION \
--machine-type = "e2-standard-2" \
--idle-timeout = 3600 \
--kms-key = "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME " \
--kms-key-service-account = " KMS_KEY_SERVICE_ACCOUNT_EMAIL " \
--project = WORKSTATIONS_PROJECT_ID
Replace the following:
WORKSTATIONS_CONFIG_NAME : the name of the
workstation configuration.
WORKSTATIONS_CLUSTER_NAME : the name of your workstation cluster.
LOCATION : the region name for your cluster.
KMS_PROJECT_ID : project ID, a unique string used to
differentiate your project from all others in Google Cloud.
KEY_RING : the name of your key ring.
KEY_NAME : the name of your key.
KMS_KEY_SERVICE_ACCOUNT_EMAIL : the email of the Cloud KMS Key Service Account.
WORKSTATIONS_PROJECT_ID : the ID of your workstation project.
After you create a workstation configuration, Cloud KMS encrypts
the persistent disks in your project with the specified
Cloud KMS key.
Rotate customer-managed encryption keys
When you granted the Cloud Workstations Service Agent Cloud KMS Viewer role
( roles/cloudkms.viewer )
on the CMEK key, the workstation service is able to detect key
rotation and re-encrypt your home
disk using
the new primary key version.
Re-encryption occurs after you stop your workstation. Each time you stop an
encrypted workstation, the workstation service checks whether the key has been
rotated. If the key has been rotated, the workstation service creates a snapshot
of your workstation's home disk and deletes the disk. The next time you start
the workstation, the workstation service creates a new disk from the snapshot,
using the new primary key version.
Cloud KMS quotas and Cloud Workstations
When you use CMEK in Cloud Workstations,
your projects can consume Cloud KMS cryptographic requests
quotas.
For example, CMEK-encrypted repositories can consume these quotas for each upload or download.
Encryption and decryption operations using CMEK keys affect Cloud KMS
quotas only if you use hardware (Cloud HSM) or external
(Cloud EKM) keys.
For more information, see
Cloud KMS quotas .
External keys
You can use Cloud External Key Manager (Cloud EKM) to encrypt data within
Google Cloud using external keys that you manage.
When you use a Cloud EKM key, Google has no control over the
availability of your externally-managed key. If the key becomes unavailable,
your workstation cannot be started.
For more considerations when using external keys, see Cloud External Key
Manager .
What's next
Read about Customer-managed encryption
keys .
Learn What is encryption?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
