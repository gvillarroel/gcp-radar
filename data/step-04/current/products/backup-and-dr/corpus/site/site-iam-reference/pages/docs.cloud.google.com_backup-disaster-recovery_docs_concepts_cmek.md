---
title: "Customer-managed encryption keys (CMEK) \_|\_ Backup and DR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek
  title: "Customer-managed encryption keys (CMEK) \_|\_ Backup and DR \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Google Cloud automatically encrypts data when it is at rest
using encryption keys managed by Google. If you have specific compliance or
regulatory requirements related to the keys that protect your data, you can
use Customer-managed encryption keys (CMEK).
With CMEK, you can protect your Backup and DR data using a cryptographic
key that you control through Cloud Key Management Service (Cloud Key Management Service). When you use CMEK,
you manage the key in Cloud Key Management Service, and you can control who can access it by
managing Identity and Access Management permissions on the key. If you temporarily disable or
permanently destroy the CMEK key, data protected by that key becomes
inaccessible. For more information about CMEK in general, see
Customer-managed encryption keys (CMEK) .
How Backup and DR uses CMEK
Backup and DR can protect backups using CMEK in two ways, depending on
the resource type: by using a CMEK key configured on the backup vault,
or by using the CMEK key of the source resource.
Backup vault container
A backup vault is a container for backups that provides a secure,
isolated storage for immutable backups with enforced retention.
Backup and DR can protect backups using CMEK by using a CMEK key configured on
the backup vault.
Encryption using backup vault CMEK key
For some resource types, a CMEK-enabled backup vault encrypts backup
data using the vault's Cloud Key Management Service key.
For example, this applies to Compute Engine instance backups . If one or
more disks attached to a Compute Engine instance use CMEK,
Backup and DR considers the instance CMEK-protected. You must back up
such instances to a CMEK-enabled backup vault. If all disks attached to
the instance use Google-managed encryption, then in the Google Cloud console, you
must store backups in a non-CMEK backup vault. However, if you use the
gcloud CLI , API, or Terraform, you can configure backups for an instance
with Google-managed encryption to use a CMEK-enabled backup vault. When
you store a backup in a CMEK-enabled backup vault, the vault's
Cloud Key Management Service key encrypts the backup data, regardless of the instance's disk
encryption status.
Backups at rest
A backup is a point-in-time copy of data from a protected resource, stored
within a backup vault.
Depending on the resource type, a backup either inherits the source workload's
key or uses the backup vault's CMEK key to protect backups using CMEK.
Encryption using source resource CMEK key
For workload types which don't allow backups to use a different key from the
source workload, Backup and DR uses the source workload's
encryption key to protect backups, preserving the source resource's encryption.
For example, this applies to Persistent Disk backups . If the source Persistent Disk
uses CMEK, its backups also use the same CMEK key. If the source Persistent Disk
uses Google-managed encryption, its backups also use Google-managed encryption.
You must store these backups in a backup vault that is not configured
with CMEK.
The following table summarizes which encryption key is used for backups of
different workload types:
Workload
Encryption Key Used for Backup
CMEK Support Status
Compute Engine instance
Backup vault CMEK key
Supported
Compute Engine disk
Source disk's encryption key
Supported
Cloud SQL
-
Not supported
AlloyDB cluster
-
Not supported
Filestore instance
-
Not supported
Google Cloud VMware Engine, Oracle database, and SQL Server database
-
Not supported
Limitations
Backup and DR support for CMEK has the following limitations:
CMEK protection is only supported for Compute Engine instance and
Persistent Disk backups stored in backup vaults.
You can configure CMEK on a backup vault only at creation time.
You cannot enable, disable, or change CMEK on an existing backup vault.
The Cloud Key Management Service key must be in the same location as the backup vault.
A backup vault in a region must use a key from the same region.
A multi-regional backup vault must use a key from the same
multi-region.
Cross-region backups must use a key from the same region as the backup vault.
Backup and DR doesn't support customer-supplied encryption keys
(CSEK).
The default backup vault and default backup plan use Google-managed
encryption. To use CMEK, you must create a new backup vault and
explicitly enable CMEK.
Before you begin
Before you begin using CMEK, complete the following steps:
Enable the Cloud Key Management Service API in the project that will store your CMEK keys.
Enable the API
Create a Cloud Key Management Service key ring and key . When
creating your key, ensure that you select a location that matches the
location of your backup vault. A backup vault in a
region must use a key from the same region. A multi-regional
backup vault must use a key from the same multi-region.
If not already created, create the Backup and DR service agent.
The service agent is automatically created after the first Backup and DR resource (backup vault, Google Cloud console, etc.)
is created in a project. If you need to grant permissions to the service
agent before creating a backup vault, you can trigger its creation
with the following command:
gcloud beta services identity create --service=backupdr.googleapis.com --project= PROJECT_ID
Replace PROJECT_ID with the ID of your project.
Grant permissions for CMEK
For Backup and DR to protect backups using CMEK, or to back up
CMEK-protected resources, you need to grant IAM roles to specific service
agents.
Grant permission to use vault CMEK key
When you configure CMEK for a backup vault, Backup and DR needs
permission to use your CMEK key to encrypt and decrypt data. This permission
must be granted to the Backup and DR service agent .
It's important to distinguish between two different service accounts used by
Backup and DR:
Backup and DR service agent : This is a project-level service
account used for managing Backup and DR resources and for accessing
Cloud Key Management Service keys when a backup vault is configured with CMEK. This
is the service agent that requires the
roles/cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key.
Backup vault service account : This is a unique, per-vault service
account that you grant permissions to access and back up source workloads
(such as Compute Engine instances). This service account is not used
for CMEK encryption of data within the backup vault.
To use CMEK with Backup and DR, you must grant the
Cloud KMS CryptoKey Encrypter/Decrypter role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) to the Backup and DR
service agent. This service agent is a service account that Backup and DR
uses to access resources on your behalf, including accessing your
Cloud Key Management Service key during encryption and decryption operations.
The Backup and DR service agent is named in the following format:
service- VAULT_PROJECT_NUMBER @gcp-sa-backupdr.iam.gserviceaccount.com
Replace VAULT_PROJECT_NUMBER with the project number of the
project containing your backup vault.
You can grant this role at the time of backup vault creation using
the Google Cloud console if you have permissions to grant IAM roles, or you can
grant it ahead of time using the gcloud kms keys add-iam-policy-binding
command:
gcloud kms keys add-iam-policy-binding KEY_NAME \
--location= KMS_LOCATION \
--keyring= KEY_RING \
--member=serviceAccount:service- VAULT_PROJECT_NUMBER @gcp-sa-backupdr.iam.gserviceaccount.com \
--role=roles/cloudkms.cryptoKeyEncrypterDecrypter
You can grant this role on a specific key as shown in the example, or you
can grant it at the key ring or project level. Granting permissions at the
key level provides the most granular control and is recommended for the
principle of least privilege. Granting permissions at the project or key
ring level is more convenient if you intend for Backup and DR to use
multiple keys within that scope, but it grants broader permissions.
Grant permission to back up CMEK-protected resources
If you are backing up a resource that is itself encrypted with a different
CMEK key, such as a Compute Engine instance with CMEK-encrypted disks,
additional permissions are required. The service agent of the source
resource's service needs permission to use the key(s) protecting the source
resource. For example, to back up a CMEK-encrypted Compute Engine instance,
the Compute Engine Service Agent of the source instance's project must have
the roles/cloudkms.cryptoKeyEncrypterDecrypter role on the Cloud Key Management Service
key(s) used to encrypt the instance's disks. In most cases, this permission is
already in place for the source workload to be operational.
Use CMEK with Backup and DR
This section describes the workflow for protecting backups using CMEK.
1. Create a CMEK-enabled backup vault
When creating a backup vault ,
select the Customer-managed encryption key (CMEK) option in the
Encryption section and choose the Cloud Key Management Service key you created.
You can only enable CMEK during vault creation; it cannot be enabled,
disabled, or changed on an existing vault.
2. Create a backup plan
When creating a backup plan ,
select the CMEK-enabled backup vault that you created in the
previous step as the target backup vault for the backups.
3. Apply the backup plan to resources
When you apply a backup plan to a resource, you must ensure that the
backup plan targets a backup vault that is compatible with the
resource's encryption configuration:
If you are backing up a Compute Engine instance that has one or more
CMEK-encrypted disks attached, you must use a backup plan that targets a
CMEK-enabled backup vault.
If you are backing up a Compute Engine instance where all attached disks
use Google-managed encryption:
If you are assigning the backup plan using the Google Cloud console, you
must use a backup plan that targets a non-CMEK backup vault.
If you are assigning the backup plan using the gcloud CLI, API, or
Terraform, you can choose a backup plan that targets a CMEK-enabled
backup vault. If you do, the instance's backups will be
encrypted with the backup vault's CMEK key.
If you are backing up a Persistent Disk that uses Google-managed encryption,
you must use a backup plan that targets a non-CMEK backup vault.
Ensure you have granted the required KMS permissions as detailed in
Grant permissions for CMEK for backups to run successfully.
Cloud Key Management Service key rotation and backup restorability
Backup and DR supports Cloud Key Management Service key rotation. When you rotate a key,
Cloud Key Management Service creates a new key version, which becomes the primary version.
Backup and DR uses the primary key version to encrypt all new backups for
backup vaults configured with that key.
Existing backups are not re-encrypted, and remain encrypted with
the key version they were created with. To restore a backup, the key version
used to encrypt it must be available in Cloud Key Management Service. If you disable or
destroy a key version, any backups encrypted with that version become
inaccessible. To ensure restorability of your backups,
don't disable or destroy key versions that are still in use by backups you
might need to restore.
If Backup and DR cannot access your CMEK key for any reason (for example, if
the key version required for encryption or decryption is disabled or destroyed,
or if IAM permissions on the key are revoked from the
Backup and DR service agent), you may experience the following:
New backups to CMEK-enabled backup vaults will fail if the primary
key version is inaccessible.
Restores from backup vaults will fail if the specific key version
that was used to encrypt the backup is inaccessible.
You won't be able to create new backup vaults that use an
inaccessible key.
If you have disabled a key version that was used for backups, re-enabling it
restores access to backups encrypted with that version. If you destroy a key
version, any backups encrypted with that key version are permanently lost and
cannot be restored.
CMEK organization policies
You can use Organization Policy
to enforce CMEK usage on Backup and DR resources at the organization, folder or
project level. For more information, see
CMEK organization policies .
If a backup vault is created or a backup is attempted in violation of
these policies, the operation fails. If you enforce a CMEK organization policy
after creating backup plans, any existing backup schedules from those plans
will fail if they are not in compliance with the policy. You can use these
policies independently or in combination to meet your organization's CMEK
requirements.
The following sections describe how CMEK organization policy constraints apply
to different Backup and DR resources.
Backup Vault Container
When you use CMEK organization policies, the following constraints can be
enforced during backup vault creation:
If constraints/gcp.restrictNonCmekServices is enforced for
backupdr.googleapis.com , you must configure CMEK when creating a new
backup vault. You cannot create a backup vault that uses
Google-managed encryption.
If constraints/gcp.restrictCmekCryptoKeyProjects is enforced, and you
create a CMEK-enabled backup vault, you must select a key from
an allowed project or folder.
Backups at rest
When you use CMEK organization policies, the following constraints can be
enforced when backups are created:
If constraints/gcp.restrictNonCmekServices is enforced for
backupdr.googleapis.com , new backups cannot be created if they use
Google-managed encryption instead of CMEK:
Compute Engine instance backup : Backup fails if the target
backup vault uses Google-managed encryption.
Persistent Disk backup : Backup fails if the source Persistent Disk
uses Google-managed encryption.
If constraints/gcp.restrictCmekCryptoKeyProjects is enforced, resources
protected by CMEK must use a key from an allowed project or folder:
Compute Engine instance backup : If the backup vault is
CMEK-encrypted, its key must be from an allowed project or folder.
Otherwise, backups to this vault fail.
Persistent Disk backup : If the source Persistent Disk is
CMEK-encrypted, its key must be from an allowed project or folder.
Otherwise, backups of this disk fail. Persistent Disk backups
use the source disk's encryption key to protect the backups,
not the backup vault's key.
Pricing
Backup and DR does not charge any additional fees for using CMEK. However,
you are charged for the use of your keys in Cloud Key Management Service. For more
information, see Cloud Key Management Service pricing .
What's next
Learn how to Create and manage backup vaults .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
