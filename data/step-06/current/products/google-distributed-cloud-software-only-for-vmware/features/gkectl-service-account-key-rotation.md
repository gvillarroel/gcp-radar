---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.233Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl service account key rotation"
feature_slug: "gkectl-service-account-key-rotation"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation"
keywords:
  - "gkectl"
  - "account"
  - "key"
  - "rotation"
  - "rotates"
  - "keys"
  - "usage"
  - "metering"
---

# gkectl service account key rotation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Rotates keys for Usage Metering, Cloud Audit Logs, and Google Cloud's operations suite service accounts.

## Extended Definition

The provided excerpts do not describe a dedicated `gkectl` command or documented workflow for rotating Google service-account keys themselves. They do show that `gkectl`-related workflows create and manage service-account JSON keys for cluster administration, and that backup/restore archives include those keys and reapply them to restored clusters. If a feature named “gkectl service account key rotation” exists, the excerpts only weakly imply key lifecycle handling, not an explicit rotation operation.

## Evidence Summary

These pages provide evidence for handling and restoring service-account keys during admin-workstation setup and backup/restore, plus certificate rotation, but none explicitly documents rotating service-account keys with `gkectl`.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)

## Supporting Pages

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The backup tar file contains sensitive credentials, including your service account keys and the SSH key.
- The backup tar file contains sensitive credentials, including your service account keys and the SSH key.
- The service-account keys that were used at the time of the backup are still active.
- These service-account keys are reinstated for the restored cluster.

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz ./ Service accounts and keys Make sure you have created the following required service accounts and JSON key files: component access connect-register logging-monitoring Also Make sure you have created any optional service service accounts and JSON key files that you need: audit logging Binary Authorization Place all of your JSON key files in the home directory of your admin workstation.
- For example: [core] account = my-name@google.com disable usage reporting = False Your active configuration is: [default] Download gkectl and the bundle Navigate to a directory where you want to install gkectl .
- To grant the required role to your SDK account: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/serviceusage.serviceUsageAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/serviceusage.serviceUsageAdmin" Replace the following: PROJECT ID : the ID of the parent Google Cloud project of your component access service account ACCOUNT : your SDK account To grant additional roles in case you want gkeadm to automatically create service accounts: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountKeyAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountKeyAdmin" Replace the following: PROJECT ID : the ID of the parent project of your component access service account ACCOUNT : your SDK account Creating your admin workstation Enter this command to create your admin workstation.
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.

### "Rotating admin cluster CA certificates \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Start the rotation To start the certificate rotation, run the following command: gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace the following: ADMIN CLUSTER CONFIG : the path of the admin cluster configuration file ADMIN CLUSTER KUBECONFIG : the path of the admin cluster kubeconfig file The behavior of the command differs depending on whether advanced cluster is enabled: Not enabled The gkectl update credentials certificate-authorities rotate command starts and performs the first half of the rotation.
- The old client certificate is removed from the kubeconfig file, and the old CA certificate remains in the kubeconfig file. gkectl update credentials certificate-authorities update-kubeconfig \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Continue the rotation Run the following command to perform the second half of the procedure.
- The command doesn't proceed until gkectl verifies that the updated kubeconfig file is in the current directory. gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --complete \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG When the rotation is complete, it reports the current CA version.
- During a rotation, gkectl replaces the core system CA certificates for the admin cluster with newly generated certificates.

