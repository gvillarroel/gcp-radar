---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.197Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster backup"
feature_slug: "admin-cluster-backup"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "admin"
  - "cluster"
  - "backup"
  - "backups"
  - "created"
  - "automatically"
  - "around"
  - "lifecycle"
---

# Admin cluster backup

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Admin cluster backups are created automatically around cluster lifecycle operations and can also be taken manually with gkectl.

## Extended Definition

Admin cluster backup is a configurable feature in Google Distributed Cloud (software only) for VMware that stores admin cluster backup data in a specified vSphere datastore via the `clusterBackup.datastore` setting. It supports automatic backups run before and after admin cluster create, update, and upgrade operations, as well as manual on-demand backups triggered with `gkectl backup admin`, with a documented retention limit of six total backups (three on-demand and three lifecycle-backed). Administrators can disable this feature by removing the `clusterBackup` configuration section and can restore a failed admin cluster from a selected backup using `gkectl repair admin-master --restore-from-backup`.

## Evidence Summary

The cited docs together define how to enable and configure admin cluster backups, how automatic and on-demand backups are executed and limited, and how to restore or disable backups through `gkectl` and cluster configuration changes.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Back up and restore an admin cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about backing up and restoring an admin cluster, including creating an etcd backup file and restoring recovery data with documented limitations and tooling.

Evidence snippets:
- BACKUP DIR = "" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG = "" # path to admin cluster kubeconfig USER CLUSTER NAMESPACE = "" # user cluster namespace EXTERNAL IP = "" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY = "" # path to vsphere tmp ssh private key - follow steps in documentation JUMP IP = "" # network jump server IP - leave empty string if not using private network. mkdir -p $BACKUP DIR mkdir $BACKUP DIR /pki USER CLUSTER BACKUP Snapshot user cluster etcd kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } exec -it -n ${ USER CLUSTER NAMESPACE } kube-etcd-0 -c kube-etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etcd.local.config/certificates/etcdCA.crt --cert=/etcd.local.config/certificates/etcd.crt --key=/etcd.local.config/certificates/etcd.key snapshot save /tmp/ ${ USER CLUSTER NAMESPACE } snapshot.db" kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } cp ${ USER CLUSTER NAMESPACE } /kube-etcd-0:tmp/ ${ USER CLUSTER NAMESPACE } snapshot.db $BACKUP DIR /user-cluster ${ USER CLUSTER NAMESPACE } snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS =( -oStrictHostKeyChecking = no -i ${ SSH PRIVATE KEY } ) if [ " ${ JUMP IP } " ! = "" ] ; then SSH OPTS +=( -oProxyCommand = "ssh -oStrictHostKeyChecking=no -i ${ SSH PRIVATE KEY } -W %h:%p ubuntu@ ${ JUMP IP } " ) fi Copy admin certs ssh " ${ SSH OPTS [@] } " ubuntu@ ${ EXTERNAL IP } 'sudo chmod -R a+rX /etc/kubernetes/pki/ ' scp -r " ${ SSH OPTS [@] } " ubuntu@ ${ EXTERNAL IP } :/etc/kubernetes/pki/ ${ BACKUP DIR } /pki/ Snapshot admin cluster etcd admin etcd = $( kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } get pods -n kube-system -l component = etcd,tier = control-plane -ojsonpath = '{$.items[ ].metadata.name}{"\n"}' ) kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } exec -it -n kube-system ${ admin etcd } -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/admin snapshot.db" kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } cp -n kube-system ${ admin etcd } :tmp/admin snapshot.db $BACKUP DIR /admin-cluster snapshot.db What's next Back up and restore a user cluster Diagnose cluster issues Learn about augur , an open-source tool for restoring individual objects from etcd backups.
- Before you run the script, fill in values for the five variables at the beginning of the script: Set BACKUP DIR to the path where you want to store the admin and user cluster backups.
- If you are using a private network, set JUMP IP to your network's jump server's IP address. #!/usr/bin/env bash Automates manual steps for taking backups of user and admin clusters.
- This document shows how to backup and restore the etcd store for an admin cluster created with Google Distributed Cloud (software only) for VMware.

### "Back up and restore an admin cluster with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines admin cluster backup behavior, what is included, and how backups can be automated or run on demand via gkectl.

Evidence snippets:
- Back up an admin cluster You can set up admin cluster backups so they are automatically performed before and after cluster creation, update, and upgrade.
- Edit the admin cluster configuration file to change the clusterBackup.datastore value. clusterBackup: datastore: new-datastore Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG On-demand backup To trigger an on-demand admin cluster backup, run the following command: gkectl backup admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Limit on number of backups You can have a maximum total of six backups, divided into a maximum of three on-demand backups, and a maximum of three backups from cluster update, upgrade or create operations.
- Disable the admin cluster backup feature Remove the clusterBackup section from the admin cluster configuration file. clusterBackup: datastore: DATASTORE Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Update the backup datastore You can update the datastore where backups are stored by updating clusterBackup.datastore to reflect the new location.
- To recreate the admin cluster from a backup, run the following command: gkectl repair admin-master --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG --restore-from-backup This command retrieves all of the backups of this admin cluster from the datastore defined in the clusterBackup section of the admin cluster configuration file, and it prompts you to select the one from which you want to use to restore the admin cluster.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- If the project IDs and regions aren't the same, cluster creation fails. clusterBackup If you want to enable backing up of the admin cluster , set clusterBackup.datastore to the vSphere datastore where you want to save cluster backups.
- The bootstrap cluster is automatically deleted after the admin cluster is successfully created.
- The bootstrap cluster is automatically deleted after the admin cluster is successfully created.

