---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.086Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "secret encryption updates with gkectl"
feature_slug: "secret-encryption-updates-with-gkectl"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "secret"
  - "encryption"
  - "updates"
  - "gkectl"
  - "can"
  - "used"
  - "update"
---

# secret encryption updates with gkectl

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Gkectl can be used to update secret encryption.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, secret encryption updates are made by editing the cluster’s configuration file `secretsEncryption` section and applying those changes with `gkectl update` (for example, `gkectl update admin --config ... --kubeconfig ...`). The feature supports both admin and user clusters and covers key-management actions such as enabling/disabling always-on secrets encryption, configuring `GeneratedKey` and `generatedKey.keyVersion`, and rotating the encryption key by incrementing `keyVersion` before running the appropriate update command.

## Evidence Summary

The cited pages define `gkectl update` as the documented method for applying secrets-encryption changes, and specify relevant config fields and key-rotation behavior for Google Distributed Cloud (software only) for VMware clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Using always-on secrets encryption \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: STRONG
- Re-rank rationale: It provides explicit procedures and `gkectl update` commands for enabling/updating secrets encryption on both admin and user clusters.

Evidence snippets:
- Run the gkectl update command. gkectl update admin --config ADMIN CLUSTER CONFIG FILE --kubeconfig ADMIN CLUSTER KUBECONFIG For a user cluster: Edit the user cluster configuration file to add the secretsEncryption section.
- The gkectl update commands provided in this section can also be used for any other updates to the corresponding cluster.
- Key rotation To rotate an existing encryption key for a cluster, increment the keyVersion in the corresponding admin cluster configuration file or user cluster configuration file , and run the appropriate gkectl update command.
- Enable always-on secrets encryption Always-on secrets encryption works by automatically generating an encryption key that is used to encrypt secrets before they are stored on the etcd database for that cluster.

### "Back up and restore an admin cluster with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Edit the admin cluster configuration file to change the clusterBackup.datastore value. clusterBackup: datastore: new-datastore Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG On-demand backup To trigger an on-demand admin cluster backup, run the following command: gkectl backup admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Limit on number of backups You can have a maximum total of six backups, divided into a maximum of three on-demand backups, and a maximum of three backups from cluster update, upgrade or create operations.
- Disable the admin cluster backup feature Remove the clusterBackup section from the admin cluster configuration file. clusterBackup: datastore: DATASTORE Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Update the backup datastore You can update the datastore where backups are stored by updating clusterBackup.datastore to reflect the new location.
- An admin cluster backup includes the following: Admin cluster etcd data Secrets Certificates Always-on secrets encryption keys and config files if always-on secrets encryption feature is enabled Admin cluster kubeconfig file (1.29 and higher) Admin cluster SSH key file (1.29 and higher) The size of a backup can range from 3 MB–100 MB depending on the size of the cluster.
- Update the admin cluster: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Replace: ADMIN CLUSTER KUBECONFIG with the path of your admin cluster kubeconfig file.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Immutable secretsEncryption.mode Required for Secrets encryption Immutable String Possible value: "GeneratedKey" Prepopulated: "GeneratedKey" The Secret encryption mode. secretsEncryption: mode: "GeneratedKey" secretsEncryption.generatedKey.keyVersion Required for Secrets encryption Mutable Integer Prepopulated: 1 An integer of your choice to use for the key version number.
- Possible values are: GeneratedKey mode: GeneratedKey # GeneratedKey Secrets Encryption config generatedKey: # # key version # keyVersion: 1 # # disable secrets encryption # disabled: false (Optional) Specify the type of OS image; available options can be set to "ubuntu containerd" "cos" "ubuntu cgv2" or "cos cgv2".
- Example: secretsEncryption: generatedKey: disabled: false osImageType Optional Mutable String Possible values: "ubuntu containerd", "cos", "ubuntu cgv2", "cos cgv2" Prepopulated: "" Default: "ubuntu containerd" The type of OS image to run on your admin cluster nodes.
- Example: secretsEncryption: generatedKey: keyVersion: 1 secretsEncryption.generatedKey.disabled Optional for Secrets encryption Mutable Boolean Prepopulated: false Set this to true to disable Secrets encryption.

