---
title: "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks
  title: "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Encrypt etcd and control plane boot disks
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Note: This document uses a
general availability feature named
GKE control plane authority that's only available for eligible Google Cloud
customers. To request access to this feature, contact your Google Cloud account team.
This page shows you how to encrypt data that's stored in your
Google Kubernetes Engine (GKE) control plane using keys that you manage in
Cloud Key Management Service (Cloud KMS). You should already be familiar with
concepts like
etcd , the
GKE cluster architecture ,
and Cloud KMS .
This page describes one part of a set of optional control plane features in
GKE that lets you perform tasks like verifying your control plane security posture
or configuring encryption and credential signing in the control plane using keys that you manage.
For details, see
About GKE control plane authority .
By default, Google Cloud applies various security measures to the managed control plane.
This page describes optional capabilities that give you more visibility or control over
the GKE control plane.
About control plane boot disk and etcd encryption
By default, GKE encrypts the boot disk of a control plane node,
the disk that stores data in etcd, and the Google Cloud internal
operational backup of etcd by using encryption keys that Google Cloud
manages. For details about this default encryption, see
Default encryption at rest . You can optionally use your own encryption
keys that you manage using Cloud KMS to encrypt these resources. To
learn more, see
Control plane boot disk and etcd encryption .
You create keys in Cloud KMS that GKE uses to encrypt
your control plane resources. Consider the following when you create these
resources:
You can use one key ring for all of the keys in a cluster, regardless of
the purpose of each key. If you have an existing key ring that you used for
a different purpose, like
setting up your own certificate authorities ,
you can use that key ring for this guide.
You should create the keys in the same Google Cloud location as your
cluster for better latency.
For most use cases, you can use the software Cloud KMS key
protection level. You can also use hardware keys with Cloud HSM.
You must specify the --purpose flag with the encryption value because
these keys are used for symmetric encryption.
You shouldn't modify the
default duration for key destruction .
Usage with other GKE control plane authority features
GKE control plane authority provides the following features related to
self-managed keys that you must enable at the same time when you create a
cluster:
Encrypt control plane components (this page)
Run your own certificate authorities (CAs) and keys
You can only enable these features when you create a new GKE
cluster. You can't update existing clusters to use these features. To use both
of these features in the same cluster, perform all of the key and CA
configuration procedures in both guides , and then run the cluster creation
command that enables both sets of features as described in the
Create a cluster section.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Ensure that your key project has a Cloud KMS key ring for your
cluster. You can use any existing key ring in your cluster location. To
create a new key ring, see Create a key ring .
Enable the Cloud Key Management Service API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Identify projects
We recommend that you use separate Google Cloud projects as follows:
Key project : contains all keys.
Cluster project : contains your GKE clusters.
You can optionally use the same project for your keys and
GKE clusters, but we recommend that you use separate projects so
that the teams that manage your keys and cryptographic operations are separate
from the teams that manage your clusters.
Required roles and permissions
To get the permissions that
you need to run your own encryption keys,
ask your administrator to grant you the
following IAM roles:
Create Cloud KMS keys:
Cloud KMS Admin ( roles/cloudkms.admin )
on your key project
Create GKE clusters:
Kubernetes Engine Cluster Admin ( roles/container.clusterAdmin )
on your cluster project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Requirements
Control plane disk encryption with your own keys has the following requirements:
Your cluster must run GKE version 1.31.1-gke.1846000 or
later.
You must create your cluster in one of the following regions:
asia-east1
asia-northeast1
asia-southeast1
europe-west1
europe-west4
us-central1
us-central2
us-east1
us-east4
us-east5
us-south1
us-west1
us-west3
us-west4
Note: Separately from GKE control plane authority, you can use
Confidential mode for Hyperdisk Balanced for your node disks .
If you plan to use Confidential mode for Hyperdisk Balanced for your nodes in addition to encrypting your
control plane disks with your own keys, you must create the cluster in a
region that supports Confidential mode for Hyperdisk Balanced .
If you create the cluster in a different region, you won't be able to use
Confidential mode for Hyperdisk Balanced for your nodes.
Limitations
You can only configure boot disk and etcd encryption keys during cluster
creation.
For regional Standard mode clusters and for Autopilot
clusters, the region in which you create a cluster must have capacity for
Confidential mode for Hyperdisk Balanced in at least three zones in that region.
For zonal Standard mode clusters, the cluster zone
must have Hyperdisk Balanced capacity. For help with
capacity, contact Cloud Customer Care.
GKE only supports keys from Cloud KMS. You can't use
another Kubernetes KMS provider or another encryption provider.
Cloud External Key Manager (Cloud EKM) keys aren't supported.
You can't access or interact with the Google Cloud internal
operational backups of etcd, which are only for disaster recovery.
Multi-regional keyrings aren't supported. You must use a regional key ring.
Create keys
In this section, you create an encryption key for the boot disks and etcd disks
in your control plane and a separate encryption key for the Google Cloud
internal operational backup of etcd. You can use one key ring to hold all of
these keys and any other keys for the cluster.
Warning: Don't enable automatic key rotation with Cloud KMS. Rotating
your encryption keys requires additional steps to ensure that your control plane
resources are re-encrypted with new key versions before the original key
versions are destroyed.
Create the encryption key for your control plane boot disks and etcd disks:
gcloud kms keys create KCP_DISK_KEY_NAME \
--keyring = KEYRING_NAME \
--location = LOCATION \
--purpose = "encryption" \
--protection-level = PROTECTION_LEVEL \
--project = KEY_PROJECT_ID
Replace the following:
KCP_DISK_KEY_NAME : the name for the encryption
key for your control plane boot disks and etcd disks.
KEYRING_NAME : the name of the key ring to hold
your encryption keys for the cluster.
LOCATION : the Google Cloud location for
the key ring. This must be the same as your cluster location. For a list
of regions, filter for "Region" in the
Cloud KMS locations table .
PROTECTION_LEVEL : the protection level for the
key, like software or hsm .
KEY_PROJECT_ID : the project ID of your
key project .
Create the etcd internal backup encryption key:
gcloud kms keys create ETCD_BACKUP_KEY_NAME \
--keyring = KEYRING_NAME \
--location = LOCATION \
--purpose = "encryption" \
--protection-level = PROTECTION_LEVEL \
--project = KEY_PROJECT_ID
Replace ETCD_BACKUP_KEY_NAME with a name for the
etcd internal backup encryption key.
Grant IAM roles to the GKE service agent
In this section, you grant IAM roles on the keys that
you created to the
GKE service agent
in the cluster project. The GKE service agent requires these
roles to use these keys to encrypt the corresponding control plane resources.
Find your cluster project number:
gcloud projects describe CLUSTER_PROJECT_ID \
--format = 'value(projectNumber)'
Replace CLUSTER_PROJECT_ID with the project ID of
your GKE cluster project.
The output is similar to the following:
1234567890
Grant the
Cloud KMS CryptoKey Encrypter/Decrypter
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role on the encryption key
for boot disks and etcd disks to the GKE service agent in the
cluster project:
gcloud kms keys add-iam-policy-binding KCP_DISK_KEY_NAME \
--location = LOCATION \
--keyring = KEYRING_NAME \
--member = "serviceAccount:service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com" \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter \
--project = KEY_PROJECT_ID
Replace the following:
KCP_DISK_KEY_NAME : the name of the disk
encryption key.
LOCATION : the Google Cloud location for
the key.
KEYRING_NAME : the name of the key ring that
contains the encryption key.
CLUSTER_PROJECT_NUMBER : the numerical project
number of the cluster project, which you found in the previous step.
KEY_PROJECT_ID : the project ID of your
key project .
Grant the
Cloud KMS CryptoKey Encrypter/Decrypter Via Delegation
( roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation ) role on the encryption key
for boot disks and etcd disks to the GKE service agent in the
cluster project:
gcloud kms keys add-iam-policy-binding KCP_DISK_KEY_NAME \
--location = LOCATION \
--keyring = KEYRING_NAME \
--member = "serviceAccount:service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com" \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation \
--project = KEY_PROJECT_ID
Grant the Cloud KMS Key User role on the encryption keys for boot disks and etcd disks to the GKE service agent in the cluster project for the key rotation:
gcloud kms keys add-iam-policy-binding KCP_DISK_KEY_NAME \
--location = LOCATION \
--keyring = KEYRING_NAME \
--member = "serviceAccount:service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com" \
--role = roles/container.cloudKmsKeyUser \
--project = KEY_PROJECT_ID
Grant the
Cloud KMS CryptoKey Encrypter
( roles/cloudkms.cryptoKeyEncrypter ) role on the etcd internal
backup encryption key to the GKE service agent in the cluster
project:
gcloud kms keys add-iam-policy-binding ETCD_BACKUP_KEY_NAME \
--location = LOCATION \
--keyring = KEYRING_NAME \
--member = "serviceAccount:service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com" \
--role = roles/cloudkms.cryptoKeyEncrypter \
--project = KEY_PROJECT_ID
Replace ETCD_BACKUP_KEY_NAME with the name of the
etcd operational backup encryption key.
Granting the roles/cloudkms.cryptoKeyEncrypter role prevents
GKE from performing database restorations on your behalf and
significantly increases the amount of time to restore functionality when a
database problem occurs. To allow GKE to perform restorations
for you, grant the roles/cloudkms.cryptoKeyEncrypterDecrypter role
instead.
Use encryption keys in a cluster
This section shows you how to identify the paths to your encryption keys.
Identify the path to your disk encryption key:
gcloud kms keys describe KCP_DISK_KEY_NAME \
--keyring = KEYRING_NAME \
--location = LOCATION \
--project = KEY_PROJECT_ID \
--format = "value(name)"
Replace the following:
KCP_DISK_KEY_NAME : the name of the encryption
key for control plane boot disks and etcd disks.
KEYRING_NAME : the name of the key
ring that contains the key.
LOCATION : the Google Cloud location of the
key.
KEY_PROJECT_ID : the project ID of your
key project .
The output is similar to the following:
projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/disk-encryption-key
Identify the path to your etcd internal backup encryption key:
gcloud kms keys describe ETCD_BACKUP_KEY_NAME \
--keyring = KEYRING_NAME \
--location = LOCATION \
--project = KEY_PROJECT_ID \
--format = "value(name)"
Replace ETCD_BACKUP_KEY_NAME with the name of the
etcd operational backup encryption key.
The output is similar to the following:
projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/etcd-backup-encryption-key
Create a cluster
Warning: Revoking or deleting the Cloud KMS keys that you used for the
encryption puts your cluster at risk of irrecoverable data loss.
In this section, you create a cluster with different options specified
depending on which GKE control plane authority features you want to
configure. You can only configure these features on a cluster during cluster
creation. The following commands create Standard mode clusters. To
create Autopilot mode clusters instead, use the same flags with the
gcloud container clusters create-auto command.
To create a cluster that configures disk encryption and runs your own CAs and
service account signing keys, do the following:
Perform all of the key and CA configuration steps in
Run your own certificate authorities and keys .
Find the paths to each of the service account keys and CAs by using the
instructions in
Set up CAs and keys on a new cluster .
Create a cluster:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--project = CLUSTER_PROJECT_ID \
--control-plane-disk-encryption-key = PATH_TO_DISK_KEY \
--gkeops-etcd-backup-encryption-key = PATH_TO_ETCD_BACKUP_KEY \
--service-account-signing-keys = PATH_TO_SIGNING_KEY_VERSION \
--service-account-verification-keys = PATH_TO_VERIFICATION_KEY_VERSION \
--cluster-ca = PATH_TO_CLUSTER_CA \
--etcd-peer-ca = PATH_TO_ETCD_PEER_CA \
--etcd-api-ca = PATH_TO_ETCD_API_CA \
--aggregation-ca = PATH_TO_AGGREGATION_CA
Replace the following:
CLUSTER_NAME : the name of your new cluster.
LOCATION : the location of your new cluster.
CLUSTER_PROJECT_ID : the project ID of your
cluster project .
PATH_TO_DISK_KEY : the path to your disk
encryption key from the previous steps on this page.
PATH_TO_ETCD_BACKUP_KEY : the path to your etcd
internal backup encryption key from the previous steps on this page.
PATH_TO_SIGNING_KEY_VERSION : the path to the
Kubernetes ServiceAccount signing key version in Cloud KMS.
PATH_TO_VERIFICATION_KEY_VERSION : the path to the
Kubernetes ServiceAccount verification key version in Cloud KMS.
PATH_TO_CLUSTER_CA : the path to the cluster
CA pool.
PATH_TO_ETCD_PEER_CA : the path to the etcd
peer CA pool.
PATH_TO_ETCD_API_CA : the path to the etcd
API CA pool.
PATH_TO_AGGREGATION_CA : the path to the
aggregation CA pool.
To create a cluster that only configures disk encryption using the keys that
you created in this guide, run the following command:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--project = CLUSTER_PROJECT_ID \
--control-plane-disk-encryption-key = PATH_TO_DISK_KEY \
--gkeops-etcd-backup-encryption-key = PATH_TO_ETCD_BACKUP_KEY
Replace the following:
CLUSTER_NAME : the name of your new cluster.
LOCATION : the location of your new cluster.
CLUSTER_PROJECT_ID : the project ID of your
cluster project .
PATH_TO_DISK_KEY : the path to your disk
encryption key from the previous steps.
PATH_TO_ETCD_BACKUP_KEY : the path to your etcd
internal backup encryption key from the previous
steps.
You can also specify all of these flags when you create a new Standard
mode cluster.
Verify the encryption key status
This section shows you how to verify the encryption key that was used during
cluster creation. You can perform this verification using Cloud Logging or
by using the Google Cloud CLI.
Use Logging to verify keys
To verify the keys using Logging, do the following:
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
Get the cluster creation log by specifying the following query:
resource . type = "gke_cluster"
resource . labels . cluster_name = " CLUSTER_NAME "
resource . labels . location = " CLUSTER_LOCATION "
protoPayload . serviceName = "container.googleapis.com"
protoPayload . methodName =~ "google.container.v(1|1alpha1|1beta1).ClusterManager.CreateCluster"
protoPayload . request . cluster . userManagedKeysConfig : *
Click Run query .
In the output, check that the cluster creation parameters included a key path
that corresponds to the key that you set up in Cloud KMS, like in the
following example:
# lines omitted for clarity
userManagedKeysConfig: {
controlPlaneDiskEncryptionKey: "projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_NAME /cryptoKeys/ KCP_DISK_KEY_NAME "
gkeopsEtcdBackupEncryptionKey: "projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_NAME /cryptoKeys/ ETCD_BACKUP_KEY_NAME "
}
Use the gcloud CLI to verify keys
To use the gcloud CLI to verify the encryption key, do the following:
For the disk encryption key, run the following command:
gcloud container clusters describe CLUSTER_NAME \
--location = LOCATION \
--format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)"
For the etcd internal backup encryption key, run the following command:
gcloud container clusters describe CLUSTER_NAME \
--location = LOCATION \
--format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)"
Rotate etcd and control plane disk encryption keys
Preview
— customer-managed credential rotation
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The encryption keys that you create don't expire. To improve your security
posture, regularly rotate these keys and re-encrypt your resources with new
key versions. For more information, see
Rotate etcd and control plane boot disk encryption keys .
What's next
Learn about what else you can view in the control plane
Run your own certificate authorities and keys in GKE
Verify control plane VM integrity
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
