---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.744Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Backup plan insights and recommendations"
feature_slug: "backup-plan-insights-and-recommendations"
latest_feature_date: "2024-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke"
keywords:
  - "backup"
  - "plan"
  - "insights"
  - "recommendations"
  - "gke"
  - "surfaces"
  - "unprotected"
  - "clusters"
---

# Backup plan insights and recommendations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE surfaces backup-plan insights and recommendations for unprotected clusters older than seven days.

## Extended Definition

GKE surfaces backup-plan insights and recommendations for unprotected clusters older than seven days.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)

## Supporting Pages

### "About GKE control plane authority \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- What's next Run your own certificate authorities and signing keys in GKE Encrypt GKE control plane data at rest with your keys Verify GKE control plane VM integrity Verify credential issuance and usage in GKE clusters Verify connections by Google personnel in the cluster control plane Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can optionally use your own encryption keys that you manage using Cloud KMS to encrypt the following resources: Control plane boot disk : the Compute Engine disk that each control plane VM uses to boot. etcd disk : the Compute Engine disk that's attached to each control plane VM and stores data for etcd instances in the cluster. etcd internal operational backup : the internal Google Cloud backup of etcd that's used for operational purposes like disaster recovery.
- The following documents show you how to view and process the various types of control plane logs: Verify credential issuance and verification operations in GKE clusters Verify connections by Google personnel in the cluster control plane Additional resources about control plane security This section describes other methods that you can use to improve your confidence in your control plane security.
- About GKE control plane authority features In GKE, Google Cloud fully manages the security configuration of the control plane, including encryption of storage at rest , and configuring the keys and certificate authorities (CAs) that sign and verify credentials in your clusters.

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- In the output, check that the cluster creation parameters included a key path that corresponds to the key that you set up in Cloud KMS, like in the following example: lines omitted for clarity userManagedKeysConfig: { controlPlaneDiskEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KCP DISK KEY NAME " gkeopsEtcdBackupEncryptionKey: "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ ETCD BACKUP KEY NAME " } Use the gcloud CLI to verify keys To use the gcloud CLI to verify the encryption key, do the following: For the disk encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.controlPlaneDiskEncryptionKey)" For the etcd internal backup encryption key, run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --format = "value(userManagedKeysConfig.gkeopsEtcdBackupEncryptionKey)" Rotate etcd and control plane disk encryption keys Preview — customer-managed credential rotation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Create a cluster: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY \ --service-account-signing-keys = PATH TO SIGNING KEY VERSION \ --service-account-verification-keys = PATH TO VERIFICATION KEY VERSION \ --cluster-ca = PATH TO CLUSTER CA \ --etcd-peer-ca = PATH TO ETCD PEER CA \ --etcd-api-ca = PATH TO ETCD API CA \ --aggregation-ca = PATH TO AGGREGATION CA Replace the following: CLUSTER NAME : the name of your new cluster.
- To create a cluster that only configures disk encryption using the keys that you created in this guide, run the following command: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID \ --control-plane-disk-encryption-key = PATH TO DISK KEY \ --gkeops-etcd-backup-encryption-key = PATH TO ETCD BACKUP KEY Replace the following: CLUSTER NAME : the name of your new cluster.
- About control plane boot disk and etcd encryption By default, GKE encrypts the boot disk of a control plane node, the disk that stores data in etcd, and the Google Cloud internal operational backup of etcd by using encryption keys that Google Cloud manages.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Create a restore plan by using these transformation rules: gcloud beta container backup-restore restore-plans create main-restore \ --project = ${ PROJECT ID } \ --location = us-central1 \ --backup-plan = projects/ ${ PROJECT ID } /locations/us-central1/backupPlans/main-plan \ --cluster = projects/ ${ PROJECT ID } /locations/ ${ ZONE } /clusters/ ${ TARGET CLUSTER PREFIX } -cluster \ --namespaced-resource-restore-mode = merge-replace-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup \ --transformation-rules-file = manifests/03-transformation-rule/volume.yaml Perform the restore: gcloud beta container backup-restore restores create first-restore \ --project = ${ PROJECT ID } \ --location = us-central1 \ --restore-plan = main-restore \ --backup = projects/ ${ PROJECT ID } /locations/us-central1/backupPlans/main-plan/backups/first-backup Verify the migration Verify that the applications are running on the new cluster and the data is intact.
- Delete the GKE clusters: gcloud container clusters delete ${ KUBERNETES CLUSTER PREFIX } -cluster --location ${ ZONE } --quiet gcloud container clusters delete ${ TARGET CLUSTER PREFIX } -cluster --location ${ ZONE } --quiet Delete the backup and restore plans: Delete the restore plan gcloud beta container backup-restore restore-plans delete main-restore \ --project = ${ PROJECT ID } \ --location = us-central1 \ --quiet Delete the Backup gcloud beta container backup-restore backups delete first-backup \ --project = ${ PROJECT ID } \ --location = us-central1 \ --backup-plan = main-plan \ --quiet Delete the backup plan gcloud beta container backup-restore backup-plans delete main-plan \ --project = ${ PROJECT ID } \ --location = us-central1 \ --quiet What's next Learn more about Backup for GKE .
- Create a backup plan: gcloud beta container backup-restore backup-plans create main-plan \ --project = ${ PROJECT ID } \ --location = us-central1 \ --cluster = projects/ ${ PROJECT ID } /locations/ ${ ZONE } /clusters/ ${ KUBERNETES CLUSTER PREFIX } -cluster \ --selected-namespaces = namespace-a,namespace-b,default \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 1440 \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked --selected-namespaces : backs up specific namespaces to avoid conflicts with system resources. --include-volume-data : helps to ensure the Persistent Disk data is backed up. --target-rpo-minutes : configures the Recovery Point Objective (RPO) based backup schedule.
- Create the cluster: gcloud container clusters create ${ KUBERNETES CLUSTER PREFIX } -cluster \ --location ${ ZONE } \ --node-locations ${ ZONE } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Create a node pool with n2-standard-4 machine types for the source workload: gcloud container node-pools create regular-pool \ --cluster ${ KUBERNETES CLUSTER PREFIX } -cluster \ --machine-type n2-standard-4 \ --zone ${ ZONE } \ --num-nodes 1 Enable the Backup for GKE add-on on the source cluster: gcloud container clusters update ${ KUBERNETES CLUSTER PREFIX } -cluster \ --project = ${ PROJECT ID } \ --location = ${ ZONE } \ --update-addons = BackupRestore = ENABLED Get credentials for the cluster: gcloud container clusters get-credentials ${ KUBERNETES CLUSTER PREFIX } -cluster --zone ${ ZONE } Verify that the Backup for GKE agent is enabled: gcloud container clusters describe ${ KUBERNETES CLUSTER PREFIX } -cluster \ --project = ${ PROJECT ID } \ --location = ${ ZONE } The output looks similar to the following, and confirms that the backup agent is enabled: addonsConfig : gkeBackupAgentConfig : enabled : true Deploy MySQL with sample data Deploy two MySQL databases in separate namespaces to simulate a production environment.

