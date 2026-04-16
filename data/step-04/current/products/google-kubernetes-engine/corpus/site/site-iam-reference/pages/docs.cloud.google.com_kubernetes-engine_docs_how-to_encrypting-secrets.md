---
title: "Encrypt secrets at the application layer \_|\_ GKE security \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets
  title: "Encrypt secrets at the application layer \_|\_ GKE security \_|\_ Google\
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
Encrypt secrets at the application layer
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to encrypt Kubernetes Secrets
at the application layer by using a key that you manage in Cloud Key Management Service
(Cloud KMS) . The process of encrypting Secrets provides
an additional layer of security for sensitive workloads.
This page is for Security specialists who want to encrypt Secrets. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with the following concepts:
Key rotation
Envelope encryption
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Overview
By default, Google Kubernetes Engine (GKE)
encrypts customer content stored at rest ,
including Secrets. GKE handles and manages this default
encryption for you without any additional action on your part.
Application-layer secrets encryption provides an additional layer of security for sensitive data
stored in the
cluster state database .
When enabled, you use a key managed with
Cloud KMS to encrypt this data at the application layer.
In GKE version 1.35 or later, the specific Kubernetes resources
that are encrypted depends on the key-value store that hosts the cluster state,
as follows:
Spanner: application-layer secrets encryption encrypts all Kubernetes API objects.
etcd: application-layer secrets encryption primarily encrypts Secrets.
To use application-layer secrets encryption, you must first create a Cloud KMS key and give
the GKE service account access to the key. You can use a key that
has any of the protection levels supported by Cloud KMS.
Ensure that the key is in the same location as the cluster to decrease latency and to
prevent cases where resources depend on services spread across multiple failure
domains. After creating a key, you can enable the feature on a new or existing
cluster by specifying the key you want to use. When you enable the feature,
GKE encrypts objects in the cluster state database with your
encryption key. The specific API kinds that are encrypted depend on which
key-value store your cluster uses, as described in the preceding list.
Note:
When you use CMEK in GKE,
your projects can consume Cloud KMS cryptographic requests
quotas.
For example, GKE can consume these
quotas when using a Key Encryption Key from Cloud KMS to encrypt or decrypt
a Data Encryption Key in GKE.
Encryption and decryption operations using CMEK keys affect Cloud KMS
quotas only if you use hardware (Cloud HSM) or external
(Cloud EKM) keys.
For more information, see
Cloud KMS quotas .
Envelope encryption
Kubernetes offers envelope encryption of
Secrets with a KMS provider , meaning that a local key, commonly
called a data encryption key (DEK) , is used to encrypt the Secrets. The DEK
itself is encrypted with another key called the key encryption key (KEK) .
Kubernetes does not store the KEK.
Envelope encryption has the following benefits:
Improved performance compared to public key encryption :
GKE only uses the Cloud KMS API to encrypt new DEKs with
the KEK or to decrypt a DEK when the local cache is empty.
Better management of keys at scale : a single KEK can encrypt multiple
DEKs. The number of keys that you need to store in the Cloud KMS
service is far fewer than the number of keys that encrypt your data.
Ability to use a central root of trust : Secrets that are stored in
Kubernetes can rely on an external root of trust. This means that you can
use a central root of trust, for example a hardware security
module , for all your
Secrets. An adversary accessing your containers offline can't obtain your
Secrets.
With application-layer secrets encryption in GKE, GKE encrypts your
Secrets using local DEKs and the
AES-CBC provider.
GKE encrypts the DEKs with a KEK that you manage in
Cloud KMS.
To learn more about envelope encryption, see Envelope encryption .
What happens when data is encrypted
When you create a new Kubernetes resource that's eligible for encryption,
here's what happens:
GKE generates a DEK using a random number generator.
GKE encrypts the data locally in the control plane by using this DEK.
GKE sends the DEK to Cloud KMS
for encryption. This operation uses your project's GKE service account to
authenticate to Cloud KMS.
Cloud KMS encrypts the DEK using the KEK, and sends it
back to the GKE control plane.
The GKE control plane stores the encrypted data alongside the
encrypted DEK in the cluster's database. The plaintext DEK is not written to
disk, though it is cached in memory for performance.
When a client requests the data from the Kubernetes API server, here's what
happens:
The GKE control plane retrieves the encrypted data from the
cluster state database.
The GKE control plane checks the memory cache for the
plaintext DEK. If the cache has the plaintext DEK, GKE uses it to decrypt the
data.
If the DEK is not in the cache, GKE sends the encrypted DEK
to Cloud KMS for decryption using your KEK.
GKE receives the decrypted DEK from Cloud KMS and uses the DEK to decrypt the
data.
The Kubernetes API server returns the decrypted data to the client.
What happens when you destroy a key
Caution: When rotating keys, always
re-encrypt previously encrypted Secrets .
When you destroy a key version in Cloud KMS that is still used
to encrypt objects in the GKE cluster state database, the cluster
enters a degraded state and eventually becomes inoperable.
If you plan to destroy an old KEK version after a
key rotation , ensure that data in your cluster is
protected by the new KEK version. The process for this depends on your cluster's
scope of encryption
( verify encryption scope ).
You can optionally retain the
previous KEK version to avoid re-encrypting Secrets, but you continue to be
billed for all active KEKs in Cloud KMS. For pricing details, see
Cloud KMS pricing .
Unless you use a Service Account Token Volume Projection , service
accounts used by your workloads on GKE also use Secrets, and
if a key is destroyed these become unavailable. The inability to access these
means that the workloads will fail.
The following exceptions apply:
Pods with existing access to Secrets as mounted volumes or environment
variables retain access.
The GKE control plane can still use cached DEK mapping entries to decrypt
data after you destroy the KEK. This lets restarted or rescheduled Pods
access the data unless one of the following situations occur:
The cluster control plane is restarted.
The GKE control plane Pod is restarted.
The DEK is not in the GKE control plane cache.
Before you destroy a KEK, check if it is being used by your cluster .
You can also create an alerting policy
for key destruction in Cloud KMS. Only destroy previous KEK versions when you're sure that
no data in your cluster is encrypted using the previous version. Before you
destroy a KEK, check whether the key is in use. For details, see
Destroy and restore key versions .
You can schedule a key version for destruction after a configurable period.
During this time, if you reconsider, you can
restore the key version
to prevent deletion. However, after the scheduled destruction time arrives
and the key version is destroyed, this action is irreversible.
Any data encrypted with this key version will become permanently undecryptable.
Before you begin
To do the exercises in this topic, you need two Google Cloud projects:
Key project: This is where you create a KEK.
Cluster project: This is where you create a cluster that enables
application-layer secrets encryption.
You can use the same project for your key project and cluster project.
But the recommended practice is to use
separate projects .
In your key project, ensure that you have enabled the Cloud KMS API.
Enable Cloud KMS API
In your key project, the user who creates the key ring and key needs the
following IAM permissions:
cloudkms.keyRings.getIamPolicy
cloudkms.keyRings.setIamPolicy
These permissions (and many more) are granted to the pre-defined
roles/cloudkms.admin
Identity and Access Management role . You can learn
more about
granting permissions to manage keys
in the Cloud KMS documentation.
In your cluster project, ensure that you have enabled the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
Ensure that you have installed the Google Cloud CLI .
Update gcloud to the latest version:
gcloud components update
Create a Cloud KMS key
To create a Cloud KMS key, you must first create a key ring . Keys and
key rings are regional resources. When you create a key ring, specify a location
that matches the location of your GKE cluster:
A zonal cluster
should use a key ring from a superset region. For example, a cluster in the
us-central1-a zone can only use a key in the us-central1 region.
A regional cluster should
use a key ring from the same location. For example, a cluster in the
asia-northeast1 region should be protected with a key ring from the
asia-northeast1 region.
The Cloud KMS global region is not supported for use with
GKE.
You can use the gcloud CLI or the Google Cloud console.
Console
In your key project, create a key ring:
Go to the Key Management page in the Google Cloud console.
Go to Key Management
Click Create key ring .
In the Key ring name field, enter the name for your key ring.
From the Location list, select the location of your Kubernetes
cluster.
Click Create .
Next, create a key:
Go to the Key Management page in the Google Cloud console.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
In the Key name field, enter the name for your key.
Accept the default values for Rotation period and Starting on , or
set a key rotation period and starting time if
you want to use different values.
[Optional] In the Labels field, click Add label if you want to
add labels to your key .
Click Create .
gcloud
In your key project, create a key ring:
gcloud kms keyrings create RING_NAME \
--location = LOCATION \
--project = KEY_PROJECT_ID
Replace the following:
RING_NAME : the name of your new key ring.
LOCATION : the location where you want to create the key ring.
KEY_PROJECT_ID : your key project ID.
Create a key:
gcloud kms keys create KEY_NAME \
--location = LOCATION \
--keyring = RING_NAME \
--purpose = encryption \
--project = KEY_PROJECT_ID
Replace the following:
KEY_NAME : the name of your new key.
LOCATION : the Cloud KMS location where
you created your key ring.
RING_NAME : the name of your key ring.
KEY_PROJECT_ID : your key project ID.
Grant permission to use the key
The GKE service account in your cluster project has the following
name:
service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com
Replace CLUSTER_PROJECT_NUMBER with your cluster
project number .
To find your project number using the gcloud CLI, run the following
command:
gcloud projects describe CLUSTER_PROJECT_ID \
--format = "value(projectNumber)"
To grant access to the service account, you can use the Google Cloud console or the
gcloud CLI.
Console
Grant your GKE service account the
Cloud KMS CryptoKey Encrypter/Decrypter role :
In the Google Cloud console, go to the Key management page.
Go to Key management
Click on the name of the key ring that contains the desired key.
Select the checkbox for the desired key.
The Permissions tab in the right window pane becomes available.
In the Add members dialog, specify the email address of the
GKE service account you are granting access.
In the Select a role drop down, select Cloud KMS CryptoKey
Encrypter/Decrypter .
Click Save .
gcloud
Grant your GKE service account the
Cloud KMS CryptoKey Encrypter/Decrypter role :
gcloud kms keys add-iam-policy-binding KEY_NAME \
--location = LOCATION \
--keyring = RING_NAME \
--member = serviceAccount: SERVICE_ACCOUNT_NAME \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter \
--project = KEY_PROJECT_ID
Replace the following:
KEY_NAME : the name of your key.
LOCATION : the Cloud KMS location where
you created your key ring.
RING_NAME : the name of your key ring.
SERVICE_ACCOUNT_NAME : the name of your
GKE service account.
KEY_PROJECT_ID : your key project ID.
Ensure that the key has enough quota if it is a Cloud HSM key
If you use a Cloud HSM key, the Google Cloud project that contains the
key is limited by your key quota . Ensure that
you have enough quota to use your Cloud HSM keys with application-layer secrets encryption. If
your quota is exhausted, your nodes might lose connectivity to your cluster
control plane.
Enable application-layer secrets encryption
You can enable application-layer secrets encryption on new or existing GKE Standard
and GKE Autopilot clusters using the gcloud CLI
or the Google Cloud console.
Best practice :
After you enable application-layer secrets encryption, perform a key rotation . You can
configure automatic key rotation in Cloud KMS .
Enable on a new cluster
You can create a new cluster with application-layer secrets encryption enabled by using the
Google Cloud console or the gcloud CLI.
Console - Autopilot
To create a Autopilot cluster with application-layer secrets encryption enabled, perform
the following steps:
In the Google Cloud console, go to the Create an Autopilot cluster page.
Go to Create an Autopilot cluster
Configure your cluster as desired.
In the navigation pane, click Advanced settings and expand the
Security section.
Select the Encrypt secrets at the application layer checkbox and
choose the key that you created in Create a Cloud KMS key .
Click Create .
Console - Standard
To create a Standard cluster with application-layer secrets encryption enabled, perform the
following steps:
In the Google Cloud console, go to the Create a Kubernetes cluster page.
Go to Create a Kubernetes cluster
Configure your cluster as desired.
From the navigation pane, under Cluster , click Security .
Select the Encrypt secrets at the application layer checkbox and
choose the key that you created in Create a Cloud KMS key .
Click Create .
gcloud
To create a cluster that supports application-layer secrets encryption,
specify a value for the --database-encryption-key parameter in your creation
command.
gcloud container clusters create-auto CLUSTER_NAME \
--cluster-version = latest \
--location = CONTROL_PLANE_LOCATION \
--database-encryption-key = projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME \
--project = CLUSTER_PROJECT_ID
Replace the following:
CLUSTER_NAME : the name you choose for your new cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster.
KEY_PROJECT_ID : your key project ID.
LOCATION : the Cloud KMS location where
you created your key ring.
RING_NAME : the name of your key ring.
KEY_NAME : the name of your key.
CLUSTER_PROJECT_ID : your cluster's project ID .
You can enable application-layer secrets encryption on a new Standard cluster using
the gcloud container clusters create command with the same flags.
Enable on an existing cluster
You can use the gcloud CLI or the Google Cloud console to update an
existing cluster to use application-layer secrets encryption. GKE encrypts all of your
existing and new Secrets using your specified encryption key.
Updating an existing cluster to use application-layer secrets encryption restarts the cluster
control plane. During this process, GKE
re-encrypts all existing Secrets with the new key, so expect a long-running operation time. For zonal
clusters, the control plane becomes
unavailable.
Console
To update a cluster to support application-layer secrets encryption:
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click the name of the cluster you want to modify.
Under Security , in the Application-layer secrets encryption
field, click edit
Edit Application-layer secrets encryption .
Select the Enable Application-layer secrets encryption checkbox and choose the key you
created in Create a Cloud KMS key .
Click Save Changes .
gcloud
To enable application-layer secrets encryptions on an existing cluster, run the
following command:
gcloud container clusters update CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--database-encryption-key = projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME \
--project = CLUSTER_PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
KEY_PROJECT_ID : your key project ID.
LOCATION : the Cloud KMS location where
you created your key ring.
RING_NAME : the name of your key ring.
KEY_NAME : the name of your key.
CLUSTER_PROJECT_ID : your cluster's project ID .
Update a Cloud KMS key
You can use the gcloud CLI or the Google Cloud console to update an
existing cluster to use a new Cloud KMS key.
Updating an existing cluster to use a new Cloud KMS key
restarts the cluster control plane. During this process, GKE
re-encrypts all existing Secrets with the new key, so expect a long-running
operation time. For zonal clusters, the control plane becomes unavailable during
the update.
Console
To update a cluster to use a new Cloud KMS key:
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click the name of the cluster you want to modify.
Under Security , in the Application-layer secrets encryption
field, click edit
Edit Application-layer secrets encryption .
Select the new encryption key you want to use.
Click Save Changes .
gcloud
Update your existing cluster to use a new Cloud KMS key:
gcloud container clusters update CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--database-encryption-key = projects/ KEY_PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME \
--project = CLUSTER_PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
KEY_PROJECT_ID : your key project ID.
LOCATION : the Cloud KMS location where
you created your key ring.
RING_NAME : the name of your key ring.
KEY_NAME : the name of your key.
CLUSTER_PROJECT_ID : your cluster's project ID .
Disable application-layer secrets encryption
To disable application-layer secrets encryption, you can use the gcloud CLI or the
Google Cloud console.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click the name of the cluster you want to modify.
Under Security , in the Application-layer secrets encryption
field, click edit
Edit application-layer secrets encryption .
Clear the Enable Application-layer secrets encryption checkbox.
Click Save Changes .
gcloud
To disable application-layer secrets encryption, run the following command:
gcloud container clusters update CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--disable-database-encryption \
--project = CLUSTER_PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
CLUSTER_PROJECT_ID : your cluster's project ID .
Verify that application-layer secrets encryption is enabled
You can check to see whether a cluster is using application-layer secrets encryption using the
Google Cloud console or the gcloud CLI.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click the name of the cluster you want to inspect.
Under Security , find the Application-layer secrets encryption field. The value in this
field indicates which objects are encrypted, as follows:
Enabled (All Objects) : all of the Kubernetes API objects in the
cluster state database are encrypted.
Enabled : only Secrets are encrypted.
gcloud
Check to see whether a cluster is using application-layer secrets encryption:
gcloud container clusters describe CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--format = 'value(databaseEncryption.state)' \
--project = CLUSTER_PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
CLUSTER_PROJECT_ID : your cluster's project ID .
The output indicates which objects are encrypted, as follows:
ALL_OBJECTS_ENCRYPTION_ENABLED : all of the Kubernetes API objects in the
cluster state database are encrypted.
ENCRYPTED : only Secrets are encrypted.
If the output is DECRYPTED , application-layer secrets encryption is disabled.
Rotate your keys
Best practice :
Rotate your keys on a regular schedule, including after you
enable application-layer secrets encryption. For instructions to configure automatic key rotation or
to manually rotate your keys, see Rotating keys .
Note: If your cluster encrypts all Kubernetes API objects, you don't need to
manually re-encrypt Secrets by following the steps in this section. To check
which objects are encrypted in your cluster, see the
Verify that application-layer secrets encryption is enabled section.
When you perform a key rotation, your existing secrets remain encrypted with the
previous key encryption key (KEK) version. To ensure a newer KEK version wraps a
Secret, re-encrypt the Secret after Key rotation.
For example, you create and store a Secret, Secret1 .
It is encrypted with DEK1 , which itself is wrapped with KEKv1 .
After the KEK rotates, you re-encrypt Secret1 so that it is wrapped by DEK2 ,
which in turn is wrapped with KEKv2 , the rotated KEK.
The key version rotation is an eventually consistent operation and there
could be a delay before the new key version takes effect. See
Consistency of key versions for more
information.
Re-encrypt your Secrets
After performing a key rotation, you should re-encrypt your Secrets to wrap them
with the new version of the KEK. You can re-encrypt your Secrets in one of the
following ways:
Manually, by running a kubectl command in a terminal.
Automatically, by using a recurring workload, such as a
CronJob , to run a kubectl
command at regular intervals.
After a key rotation, wait at least three hours for the new version to become
consistent. Then, trigger re-encryption by running a command like the following:
kubectl get secrets --namespace = NAMESPACE -o json \
| kubectl annotate --overwrite -f - encryption-key-rotation-time = " TIME "
Replace the following:
NAMESPACE : the namespace to update Secrets in. In
Standard clusters, you can optionally use the --all-namespaces
flag instead to update every Secret in the cluster with the same command.
In Autopilot clusters, you can update only the namespaces that you
own.
TIME : a string that indicates when the rotation happens
(for example, 20200909-090909 ).
Warning: if you use Autopilot clusters, don't disable or destroy
the previous key version. Secrets in managed namespaces like kube-system
continue to use the previous key version. Disabling the key might cause
disruptions.
After you rotate your keys, the previous key version continues to exist, and
might incur costs. Key version destruction is permanent, so make sure that
the previous key version is no longer in use before you destroy it. For more
information, see View key usage .
Limitations
GKE supports up to 30,000 secrets per cluster for
application-layer secrets encryption. If you store more than 30,000 secrets, your cluster might
become unstable at upgrade time, causing a potential outage for your
workloads.
Make sure the average size of metadata of a secret in every namespace is
lower than 5KiB. If the average size of metadata is above 5KiB, your cluster
might enter a bad state where some secrets are encrypted while others are
decrypted after enabling the feature or disabling the feature.
You must select a key in the same region as the cluster. For example, a
zonal cluster in us-central1-a can only use a key in the region
us-central1 . For regional clusters, keys must be in the same location to
decrease latency and to prevent cases where resources depend on services
spread across multiple failure domains.
The key does not need to be in the same project as the cluster. For
more information about the supported locations for Cloud KMS, see
Google Cloud locations .
GKE only supports keys from Cloud KMS. You cannot
use another Kubernetes
KMS provider
or another
encryption provider .
Troubleshooting
For information about troubleshooting application-layer secrets encryption, including resolving issues
with failed Secret encryption updates, see
Troubleshoot application-layer secrets encryption .
Cloud KMS key is disabled
GKE's default service account cannot use a disabled
Cloud KMS key for
application-layer secrets encryption .
To re-enable a disabled key, see
Enable a disabled key version .
Cloud KMS key version is destroyed
When the cluster status contains the message:
KEY_VERSION_URI is not enabled, current state is: DESTROYED ,
it means that the key version used for
application-layer secrets encryption was destroyed .
Replace KEY_VERSION_URI with the URI of the key version.
What's next
Learn more about Secrets in Kubernetes .
Learn more about Secret management using Cloud KMS .
Learn how to harden your cluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
