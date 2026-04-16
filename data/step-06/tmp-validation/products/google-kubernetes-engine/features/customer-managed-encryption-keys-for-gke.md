---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.423Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Customer-managed encryption keys for GKE"
feature_slug: "customer-managed-encryption-keys-for-gke"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "encryption"
  - "customer"
  - "encrypt"
  - "keys"
  - "boot"
  - "managed"
  - "node"
---

# Customer-managed encryption keys for GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys for GKE encrypt node boot disks and attached persistent storage data keys.

## Extended Definition

Customer-managed encryption keys for GKE encrypt node boot disks and attached persistent storage data keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "Encrypt your data in-transit in GKE with user-managed encryption keys \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard This page shows you how to encrypt in-transit data for Pod communications across Google Kubernetes Engine (GKE) nodes by using user-managed encryption keys.
- When you enable inter-node transparent encryption, traffic observability features used for tracking traffic on the Pods might not work as expected because the data in-transit is encrypted with keys that are not accessible to the underlying Google infrastructure.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt your data in-transit in GKE with user-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- Encryption key generation and usage When the feature is enabled, every GKE node in the cluster automatically generates a public/private key pair known as the encryption keys .

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the output, check that the cluster creation parameters included a key path that corresponds to the key that you set up in Cloud KMS, like in the following example: lines omitted for clarity userManagedKeysConfig: { controlPlaneDiskEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KCP DISK KEY NAME " gkeopsEtcdBackupEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ ETCD BACKUP KEY NAME " } Use the gcloud CLI to verify keys To use the gcloud CLI to verify the encryption key, do the following: For the disk encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)" For the etcd internal backup encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)" Rotate etcd and control plane disk encryption keys Preview — customer-managed credential rotation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- About control plane boot disk and etcd encryption By default, GKE encrypts the boot disk of a control plane node, the disk that stores data in etcd, and the Google Cloud internal operational backup of etcd by using encryption keys that Google Cloud manages.
- Grant the Cloud KMS CryptoKey Encrypter/Decrypter Via Delegation ( roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation ) role on the encryption key for boot disks and etcd disks to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation \ --project = KEY PROJECT ID Grant the Cloud KMS Key User role on the encryption keys for boot disks and etcd disks to the GKE service agent in the cluster project for the key rotation: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/container.cloudKmsKeyUser \ --project = KEY PROJECT ID Grant the Cloud KMS CryptoKey Encrypter ( roles/cloudkms.cryptoKeyEncrypter ) role on the etcd internal backup encryption key to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding ETCD BACKUP KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypter \ --project = KEY PROJECT ID Replace ETCD BACKUP KEY NAME with the name of the etcd operational backup encryption key.
- The output is similar to the following: 1234567890 Grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role on the encryption key for boot disks and etcd disks to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project = KEY PROJECT ID Replace the following: KCP DISK KEY NAME : the name of the disk encryption key.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Learn more about Confidential VM Learn more about Google Cloud encryption at rest Learn more about Google Cloud encryption in transit Learn more about customer-managed encryption keys (CMEK) Learn how to remotely attest that workloads are running on Confidential VM Learn how to run GPUs on Confidential GKE Nodes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Confidential mode for Hyperdisk Balanced has the following limitations: All of the limitations of using customer-managed encryption keys (CMEK) to encrypt disks apply to Confidential mode for Hyperdisk Balanced.
- The following examples show how you can create a Confidential mode for Hyperdisk Balanced StorageClass for each Hyperdisk type: Hyperdisk Balanced Save the following manifest in a file named confidential-hdb-example-class.yaml : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" enable-confidential-storage : true disk-encryption-kms-key : "projects/ KMS PROJECT ID /locations/ REGION /keyRings/ KEY RING /cryptoKeys/ HSM KEY NAME " Replace the following: KMS PROJECT ID : the project that owns the Cloud KMS key REGION : the region where the disk is located KEY RING : the name of the key ring that includes the key HSM KEY NAME : the name of the HSM key used to encrypt the disk Create the StorageClass: kubectl create -f hdb-example-class.yaml Create a Hyperdisk Persistent Volume Claim for GKE that uses your Confidential mode for Hyperdisk Balanced volume.
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.

