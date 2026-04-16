---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.316Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "CMEK for boot disks"
feature_slug: "cmek-for-boot-disks"
latest_feature_date: "2021-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys"
keywords:
  - "encryption"
  - "customer"
  - "cmek"
  - "keys"
  - "disks"
  - "boot"
  - "managed"
---

# CMEK for boot disks

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys can encrypt GKE Autopilot node boot disks.

## Extended Definition

Customer-managed encryption keys can encrypt GKE Autopilot node boot disks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys)

## Supporting Pages

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the Cloud KMS CryptoKey Encrypter/Decrypter Via Delegation ( roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation ) role on the encryption key for boot disks and etcd disks to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation \ --project = KEY PROJECT ID Grant the Cloud KMS Key User role on the encryption keys for boot disks and etcd disks to the GKE service agent in the cluster project for the key rotation: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/container.cloudKmsKeyUser \ --project = KEY PROJECT ID Grant the Cloud KMS CryptoKey Encrypter ( roles/cloudkms.cryptoKeyEncrypter ) role on the etcd internal backup encryption key to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding ETCD BACKUP KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypter \ --project = KEY PROJECT ID Replace ETCD BACKUP KEY NAME with the name of the etcd operational backup encryption key.
- In the output, check that the cluster creation parameters included a key path that corresponds to the key that you set up in Cloud KMS, like in the following example: lines omitted for clarity userManagedKeysConfig: { controlPlaneDiskEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KCP DISK KEY NAME " gkeopsEtcdBackupEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ ETCD BACKUP KEY NAME " } Use the gcloud CLI to verify keys To use the gcloud CLI to verify the encryption key, do the following: For the disk encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)" For the etcd internal backup encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)" Rotate etcd and control plane disk encryption keys Preview — customer-managed credential rotation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The output is similar to the following: 1234567890 Grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role on the encryption key for boot disks and etcd disks to the GKE service agent in the cluster project: gcloud kms keys add-iam-policy-binding KCP DISK KEY NAME \ --location = LOCATION \ --keyring = KEYRING NAME \ --member = "serviceAccount:service- CLUSTER PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com" \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project = KEY PROJECT ID Replace the following: KCP DISK KEY NAME : the name of the disk encryption key.
- Create the encryption key for your control plane boot disks and etcd disks: gcloud kms keys create KCP DISK KEY NAME \ --keyring = KEYRING NAME \ --location = LOCATION \ --purpose = "encryption" \ --protection-level = PROTECTION LEVEL \ --project = KEY PROJECT ID Replace the following: KCP DISK KEY NAME : the name for the encryption key for your control plane boot disks and etcd disks.

### "About GKE control plane authority \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For details, see Use customer-managed encryption keys (CMEK) .
- You can optionally use your own encryption keys that you manage using Cloud KMS to encrypt the following resources: Control plane boot disk : the Compute Engine disk that each control plane VM uses to boot. etcd disk : the Compute Engine disk that's attached to each control plane VM and stores data for etcd instances in the cluster. etcd internal operational backup : the internal Google Cloud backup of etcd that's used for operational purposes like disaster recovery.
- However, to encrypt your control plane boot disks and etcd disks with your own keys, you must create the cluster in one of the following regions: asia-east1 asia-northeast1 asia-southeast1 europe-west1 europe-west4 us-central1 us-central2 us-east1 us-east4 us-east5 us-south1 us-west1 us-west3 us-west4 Note: Separately from GKE control plane authority, you can use Confidential mode for Hyperdisk Balanced for your node disks .
- With GKE control plane authority, you can configure clusters to use customer-managed CAs and keys instead of the Google-managed resources that GKE uses by default.

### "Run your own certificate authorities and keys in GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/run-your-own-cas-keys)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the CAs and keys as well as control plane boot disk encryption and etcd encryption, do the following: Perform all of the key configuration steps in Encrypt etcd and control plane boot disks .
- To set up control plane disk encryption with your own keys in addition to configuring your own CAs, create your cluster in one of the following regions: asia-east1 asia-northeast1 asia-southeast1 europe-west1 europe-west4 us-central1 us-central2 us-east1 us-east4 us-east5 us-south1 us-west1 us-west3 us-west4 Note: Separately from GKE control plane authority, you can use Confidential mode for Hyperdisk Balanced for your node disks .
- Note: Before you perform these steps, decide on whether you also want to encrypt your control plane boot disks and etcd disks with keys that you manage.
- Verify that the paths to keys and CAs are the same as those that you created for that cluster, like in the following example: lines omitted for clarity userManagedKeysConfig: { aggregationCa: "projects/ KEY PROJECT ID /locations/ LOCATION /caPools/aggregation-ca-pool" clusterCa: "projects/ KEY PROJECT ID /locations/ LOCATION /caPools/cluster-ca-pool" etcdApiCa: "projects/ KEY PROJECT ID /locations/ LOCATION /caPools/etcd-api-ca-pool" etcdPeerCa: "projects/ KEY PROJECT ID /locations/ LOCATION /caPools/etcd-peer-ca-pool" serviceAccountSigningKeys: [ 0: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/sa-signing-key/cryptoKeyVersions/1" ] serviceAccountVerificationKeys: [ 0: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/sa-signing-key/cryptoKeyVersions/1" ] } Use the gcloud CLI to verify keys and CAs To verify that the cluster uses the CAs and keys that you created, run the following command: gcloud container clusters describe example-cluster \ --location = LOCATION \ --project = CLUSTER PROJECT ID The output should include the userManagedKeysConfig field like in the following example: lines omitted for clarity userManagedKeysConfig: sa-signing-key: projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/sa-signing-key/cryptoKeyVersions/1 sa-verification-key: projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/sa-signing-key/cryptoKeyVersions/1 cluster-ca: projects/ KEY PROJECT ID /locations/ LOCATION /caPools/cluster-ca-pool etcd-peer-ca: projects/ KEY PROJECT ID /locations/ LOCATION /caPools/etcd-peer-ca-pool etcd-api-ca: projects/ KEY PROJECT ID /locations/ LOCATION /caPools/etcd-api-ca-pool aggregation-ca: projects/ KEY PROJECT ID /locations/ LOCATION /caPools/aggregation-ca-pool Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

