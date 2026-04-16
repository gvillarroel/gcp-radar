---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.218Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl update admin command"
feature_slug: "gkectl-update-admin-command"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "gkectl"
  - "update"
  - "admin"
  - "command"
  - "can"
  - "certain"
  - "cluster"
  - "settings"
---

# gkectl update admin command

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl update admin can update certain admin cluster settings, including static IP addresses.

## Extended Definition

The `gkectl update admin` command updates an existing admin cluster using a modified admin cluster configuration file, reapplying settings that are changed there (for example `clusterBackup` and `clusterBackup.datastore`). It is invoked with `--kubeconfig` and `--config` arguments and is documented as part of admin-cluster lifecycle operations that can modify cluster state (including checkpoint updates). The provided excerpts explicitly show backup-related updates, so coverage of other settings (such as static IP addresses) is not established from these pages alone.

## Evidence Summary

The cited pages confirm command syntax and use cases for `gkectl update admin`, specifically that it applies config-file changes to admin clusters (with clear examples around `clusterBackup`), and that such updates are part of admin-cluster lifecycle management.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Back up and restore an admin cluster with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: It describes enabling backup by editing the config and running `gkectl update admin`, but does not document static IP-specific update behavior.

Evidence snippets:
- Edit the admin cluster configuration file to change the clusterBackup.datastore value. clusterBackup: datastore: new-datastore Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG On-demand backup To trigger an on-demand admin cluster backup, run the following command: gkectl backup admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Limit on number of backups You can have a maximum total of six backups, divided into a maximum of three on-demand backups, and a maximum of three backups from cluster update, upgrade or create operations.
- Disable the admin cluster backup feature Remove the clusterBackup section from the admin cluster configuration file. clusterBackup: datastore: DATASTORE Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Update the backup datastore You can update the datastore where backups are stored by updating clusterBackup.datastore to reflect the new location.
- To recreate the admin cluster from a backup, run the following command: gkectl repair admin-master --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG --restore-from-backup This command retrieves all of the backups of this admin cluster from the datastore defined in the clusterBackup section of the admin cluster configuration file, and it prompts you to select the one from which you want to use to restore the admin cluster.
- Update the admin cluster: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Replace: ADMIN CLUSTER KUBECONFIG with the path of your admin cluster kubeconfig file.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The checkpoint.yaml file is automatically updated when you run the gkectl upgrade admin command, or when you run a gkectl update command that affects the admin cluster.
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- Note, however, the command takes additional values that you must specify in the provided placeholder variables. gkectl register bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --vcenter-address= VCENTER ADDRESS \ --vcenter-datacenter= DATA CENTER \ --vcenter-cluster= VCENTER CLUSTER \ --vcenter-resource-pool= RESOURCE POOL \ --vcenter-datastore= DATASTORE \ --vcenter-network= NETWORK \ --vcenter-ca-cert-path= CA CERT PATH \ --bundle-path= BUNDLE PATH \ --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: CA CERT PATH : the path to the root CA certificate for your vCenter Server.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- If you want your admin and user clusters to use different kinds of load balancers, you must create user clusters using the gkectl command-line tool. loadBalancer.manualLB If you set loadbalancer.kind to "ManualLB" , fill in this section.
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.
- For more information see the following: Non-advanced clusters: Back up and restore an admin cluster with gkectl Advanced clusters: Back up and restore advanced clusters with gkectl autoRepair.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable node auto repair .
- Example: cloudAuditLogging: serviceAccountKeyPath: "my-key-folder/audit-log-key.json" clusterBackup.datastore Optional Mutable String By default, cluster backup tar files are saved to the directory gkectl-workspace/backups on your admin workstation.

