---
title: "Encrypt data with customer-managed encryption keys (CMEK) \_|\_ Filestore\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/cmek
  title: "Encrypt data with customer-managed encryption keys (CMEK) \_|\_ Filestore\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Encrypt data with customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Filestore encrypts customer content at
rest. Filestore handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Filestore. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Filestore resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
CMEKs are supported for use with
Filestore instances and
backups .
CMEK options
Filestore supports CMEKs stored as software keys, as hardware keys in
an HSM cluster , and as keys stored externally in
Cloud External Key Manager (Cloud EKM) .
For more information, see Cloud Key Management Service .
Disruptions to EKM service
By design, external keys are managed by a third-party; in these circumstances,
Google Cloud is not responsible for key availability.
If the Cloud Key Management Service (Cloud KMS)
is notified by the External Key Manager (EKM)
that an external key is unreachable, users receive an ekm_key_unreachable_detected
notification. For up to one hour, users have limited access to operations on the
instance. After one hour, if the key status is unchanged, the following actions
apply:
The key is disabled.
All encrypt and decrypt operations fail.
The Filestore instance is suspended.
In some cases, such as an unplanned event like a VM restart, access to the
instance may be disrupted prior to one hour.
Unreachable key notifications can be viewed from the Filestore instance
details page:
Go to the Filestore instances page
Users also receive ekm_key_unreachable_detected notifications on any of the
following operations if performed within one hour of the first reported
notification:
Revert a snapshot
Create an instance backup
Delete a backup
Restore an instance from a backup
Update or patch an instance
Supported tiers
The following table shows the Filestore
service tiers that support CMEKs:
Tier
CMEK support
Basic HDD
No
Basic SSD
No
Zonal
Yes
Regional
Yes
Enterprise
Yes
Create a key ring and key to use with your instance
The key ring and key can be in a different project from the
Filestore instance but they must be in the same location. If you
already have a Cloud KMS key ring and key that you want to use with
Filestore, skip to the next section. Otherwise, follow the
instructions on Creating symmetric encryption keys to
create a key ring and key.
Grant key access permission to the Filestore service account
Before you can create a Filestore instance that uses a CMEK, the
Filestore service account must have the Cloud KMS CryptoKey
Encrypter/Decrypter role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ).
A Filestore service account is created the first time you create
a Filestore instance in the project. If you don't already have a
Filestore service account, run the following
services identity create
command:
gcloud beta services identity create --service = file.googleapis.com --project = INSTANCE_PROJECT_NUMBER_OR_ID
Replace INSTANCE_PROJECT_NUMBER_OR_ID with the project number or
ID of the project where you want to create the Filestore
instance.
Assign the Filestore service account the Cloud KMS CryptoKey
Encrypter/Decrypter role by running the projects add-iam-policy-binding command:
gcloud projects add-iam-policy-binding KMS_PROJECT_NUMBER_OR_ID \
--member serviceAccount:service- INSTANCE_PROJECT_NUMBER @cloud-filer.iam.gserviceaccount.com \
--role roles/cloudkms.cryptoKeyEncrypterDecrypter
Replace the following:
KMS_PROJECT_NUMBER_OR_ID with the project number or ID of the
project that contains the Cloud KMS key that you want to use.
INSTANCE_PROJECT_NUMBER with the project number (not the project
ID) of the project where you want to create the Filestore
instance.
Create an instance that uses your Cloud KMS key
Google Cloud console
To create an instance that uses your Cloud KMS key for data
encryption:
In the Google Cloud console, go to the Filestore instances
page.
Go to the Filestore instances page
Click Create Instance
Select an instance tier that supports CMEKs and fill out all
other required and optional fields as you normally would.
Click Show advanced options .
Select the Use a customer-managed encryption key (CMEK) checkbox.
Select the Cloud KMS key that you want to use for the instance.
Click Create .
gcloud CLI
To create a Filestore instance that uses your Cloud KMS
key for data encryption, specify the --kms-key flag in the
filestore instances create
command:
gcloud filestore instances create nfs-server \
--tier = <var>TIER</var> \
--location = us-central1 \
--file-share = name = "vol1" ,capacity = 1TiB \
--network = name = "default" \
--kms-key = KMS_KEY
Replace the following:
TIER with a Filestore tier that supports CMEKs.
KMS_KEY with the fully qualified name of the Cloud KMS
key that you want to use. Alternatively, you can specify each argument
separately in the format:
--kms-key = KMS_KEY : --kms-keyring = KEY_RING --kms-location = KMS_REGION --kms-project = KMS_PROJECT_NUMBER_OR_ID
Replace the following:
KMS_KEY with the name of the Cloud KMS key.
KMS_PROJECT_NUMBER_OR_ID with the project number or ID of the
project where the key is created.
KMS_KEY_RING with the name of the key ring.
KMS_REGION with the region of the key ring. The key ring and
instance must be located in the same region.
Get a list of keys
You can get a list of keys by running the kms keys list
command:
gcloud kms keys list \
--project = KMS_PROJECT_NUMBER_OR_ID \
--keyring = KEY_RING \
--location = KMS_REGION
Replace the following:
KMS_PROJECT_NUMBER_OR_ID with the project number or ID of the
project where the key is created.
KEY_RING with the name of the key ring.
KMS_REGION with the region of the key ring.
The Name column of the output gives the fully qualified name of existing
keys. For example:
projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key
Get instance key information
The following sections cover how to get instance key information.
List instances that use a particular Cloud KMS key
You can list Filestore instances that use a particular key by
running the instances list
command:
gcloud filestore instances list --filter = "kmsKeyName= KMS_KEY "
Replace KMS_KEY with the fully qualified name of the key that you
want to use.
Example:
gcloud filestore instances list \
--filter = "kmsKeyName=projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key"
The output looks like:
INSTANCE_NAME LOCATION TIER CAPACITY_GB FILE_SHARE_NAME IP_ADDRESS STATE CREATE_TIME
nfs-server us-central1 ENTERPRISE 1024 vol1 10 .166.108.2 READY 2021 -08-12T11:38:56
Get Cloud KMS key information for an instance
Use one of the following methods to get Cloud KMS key information for a
Filestore instance:
Google Cloud console
Go to the Filestore instances page.
Go to the Filestore instances page
Click the instance ID to open the instance details page.
Click the Overview tab.
If the instance encrypts data using a Cloud KMS key instead of a
Google-owned and Google-managed encryption key, the key name is displayed in the
Encryption key field.
gcloud CLI
Run the following instances describe
command:
gcloud filestore instances describe INSTANCE_ID \
--location = INSTANCE_LOCATION
Replace the following:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to get information about.
INSTANCE_LOCATION with the region or zone where the instance is
located.
The output looks like:
createTime: '2021-08-12T11:38:56.851157387Z'
fileShares:
- capacityGb: '1024'
name: vol1
kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key
labels:
key: val
name: projects/consumer-project/locations/us-central1/instances/nfs-server
networks:
- ipAddresses:
- 10 .0.100.2
modes:
- MODE_IPV4
network: network
reservedIpRange: 10 .166.108.0/23
state: READY
tier: ENTERPRISE
Disable or destroy a Cloud KMS key that's used by an instance
If a change in Cloud KMS key state is detected, the instance
automatically stops serving data. Some examples include the following:
Disabling a key or key version.
Destroying a key or key version.
Modifying a key's permissions.
This detection typically happens within a few minutes of the change in key state,
but in some cases can take up to one hour.
Once an instance is stopped, all access to file share data and any snapshots is
blocked. Stopped instances continue to be billed until they're deleted .
Starting a stopped instance
Important: If an instance is stopped for more than four weeks, starting
it again is done on a best effort basis and might not be possible.
If a stopped Filestore instance uses a Cloud KMS key for
data encryption, all key versions of the key must be
enabled or
restored before restarting the instance.
Once the Cloud KMS key status is enabled, the instance will
automatically detect key changes and restart without any additional action,
typically within 20 minutes.
CMEK support for backup chains
You can use CMEKs to encrypt not only your Filestore instances but also
your backup chains .
CMEK support is not available for basic -tier backups.
Backup chains reside in a single bucket and region. To store and encrypt backup
data in a region outside of the source instance, users must apply two separate
CMEKs: one for the instance and one for the backup chain. Some requirements apply:
A CMEK must reside in the same region as the backup chain it encrypts.
A single CMEK is applied to the bucket where the backup chain is stored
and cannot be combined or replaced.
Key rotation limitations
During key rotation, new encryption keys are created to replace the existing keys.
The following actions related to key rotation might prevent you from restoring a backup chain:
Deactivating a key or key version.
Destroying a key or key version.
Modifying key permissions.
These actions don't prevent backups from being created in the chain.
If you can't restore your backup chain, perform the following steps:
Delete all backups.
Start a new chain. You can use either of the following options:
Create your backup in a different location with the same CMEK.
Create your backup in the same location with a new CMEK.
For more information, see Backups overview .
What's next
Learn how to apply a CMEK organization policy .
Learn more about CMEK .
Learn about encryption in transit in Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
