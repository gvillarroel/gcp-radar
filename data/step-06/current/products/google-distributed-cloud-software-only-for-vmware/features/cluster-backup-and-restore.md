---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.313Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "cluster backup and restore"
feature_slug: "cluster-backup-and-restore"
latest_feature_date: "2019-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster"
keywords:
  - "cluster"
  - "backup"
  - "restore"
  - "clusters"
  - "can"
  - "backed"
  - "up"
  - "restored"
---

# cluster backup and restore

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Clusters can be backed up and restored.

## Extended Definition

Google Distributed Cloud (software only) for VMware supports cluster backup and restore for both admin and user clusters by creating backup files (including etcd snapshots) and restoring clusters from those backups. The documented workflows use gkectl-backed operations for advanced/admin cluster restore and command-driven etcd snapshot save/restore procedures for user and admin clusters, including optional storage of backups in vSphere and on the admin workstation. Backup files can be versioned via custom backup-file paths and names, and the docs note that backup files expire after a year.

## Evidence Summary

The three official Google Cloud how-to pages define backup/restore workflows for advanced, admin, and user clusters, including etcd snapshot creation, restore commands, and backup-file handling in Google Distributed Cloud (software only) for VMware.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)

## Supporting Pages

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a full workflow for backing up and restoring advanced clusters using gkectl, including lifecycle and limitations.

Evidence snippets:
- Backup to vSphere To configure backups so that the backup file for both admin and user clusters are uploaded to vSphere in addition to being saved on your admin workstation, do the following: Add the clusterBackup.datastore field to your admin cluster configuration file: clusterBackup : datastore : DATASTORE Replace DATASTORE with the datastore where you want to store the backup.
- Optionally, you can specify a different name and location for your backup file with the --backup-file flag, for example: gkectl backup cluster testuser \ --kubeconfig admin-cluster/kubeconfig \ --backup-file cluster-backups/testuser-backup-aug-23-2025.tar.gz The backup file expires after a year and the cluster restore process doesn't work with expired backup files.
- To restore a cluster: Run the applicable command to restore the cluster: Admin cluster gkectl restore admin --backup-file BACKUP FILE \ --config ADMIN CONFIG Replace the following: BACKUP FILE : the path and name of the backup file you are using.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Back up and restore advanced clusters with gkectl Stay organized with collections Save and categorize content based on your preferences.

### "Back up and restore an admin cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: STRONG
- Re-rank rationale: It provides a core operational backup-and-restore flow (create backup, restore with gkectl/script) for clusters, directly confirming this capability.

Evidence snippets:
- BACKUP DIR = "" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG = "" # path to admin cluster kubeconfig USER CLUSTER NAMESPACE = "" # user cluster namespace EXTERNAL IP = "" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY = "" # path to vsphere tmp ssh private key - follow steps in documentation JUMP IP = "" # network jump server IP - leave empty string if not using private network. mkdir -p $BACKUP DIR mkdir $BACKUP DIR /pki USER CLUSTER BACKUP Snapshot user cluster etcd kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } exec -it -n ${ USER CLUSTER NAMESPACE } kube-etcd-0 -c kube-etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etcd.local.config/certificates/etcdCA.crt --cert=/etcd.local.config/certificates/etcd.crt --key=/etcd.local.config/certificates/etcd.key snapshot save /tmp/ ${ USER CLUSTER NAMESPACE } snapshot.db" kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } cp ${ USER CLUSTER NAMESPACE } /kube-etcd-0:tmp/ ${ USER CLUSTER NAMESPACE } snapshot.db $BACKUP DIR /user-cluster ${ USER CLUSTER NAMESPACE } snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS =( -oStrictHostKeyChecking = no -i ${ SSH PRIVATE KEY } ) if [ " ${ JUMP IP } " ! = "" ] ; then SSH OPTS +=( -oProxyCommand = "ssh -oStrictHostKeyChecking=no -i ${ SSH PRIVATE KEY } -W %h:%p ubuntu@ ${ JUMP IP } " ) fi Copy admin certs ssh " ${ SSH OPTS [@] } " ubuntu@ ${ EXTERNAL IP } 'sudo chmod -R a+rX /etc/kubernetes/pki/ ' scp -r " ${ SSH OPTS [@] } " ubuntu@ ${ EXTERNAL IP } :/etc/kubernetes/pki/ ${ BACKUP DIR } /pki/ Snapshot admin cluster etcd admin etcd = $( kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } get pods -n kube-system -l component = etcd,tier = control-plane -ojsonpath = '{$.items[ ].metadata.name}{"\n"}' ) kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } exec -it -n kube-system ${ admin etcd } -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/admin snapshot.db" kubectl --kubeconfig = ${ ADMIN CLUSTER KUBECONFIG } cp -n kube-system ${ admin etcd } :tmp/admin snapshot.db $BACKUP DIR /admin-cluster snapshot.db What's next Back up and restore a user cluster Diagnose cluster issues Learn about augur , an open-source tool for restoring individual objects from etcd backups.
- Look for the following permission denied log messages like etcdserver: create snapshot directory error:mkdir /var/lib/etcd/member/snap: permission denied If permission denied messages are found update the ownership of /opt/data/var/lib/etcd/ sudo chown -R 2001:2001 /opt/data/var/lib/etcd/ Verify kube-etcd and kube-apiserver have started. sudo crictl ps Automatic cluster backup You can use the script given here as an example on how to automatically back up your clusters.
- If you are using a private network, set JUMP IP to your network's jump server's IP address. #!/usr/bin/env bash Automates manual steps for taking backups of user and admin clusters.
- This document shows how to backup and restore the etcd store for an admin cluster created with Google Distributed Cloud (software only) for VMware.

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER KUBECONFIG="" # path to user cluster kubeconfig EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP user etcd=$(kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[0].metadata.name}{"\n"}') kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} exec -it -n kube-system ${user etcd} -c etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /tmp/${user etcd} snapshot.db" kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} cp kube-system/${user etcd}:/tmp/${user etcd} snapshot.db $BACKUP DIR/${user etcd} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/${admin etcd} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:/tmp/${admin etcd} snapshot.db $BACKUP DIR/${admin etcd} snapshot.db Verify the restoration To verify that your cluster was successfully restored, run gkectl diagnose cluster .
- KUBE ETCD SECRET NAME : the name of the Secret used by etcd in the user cluster, starting with kube-etcd-certs . apiVersion: v1 kind: Pod metadata: name: etcd-utility-0 namespace: USER CLUSTER NAME spec: containers: - command: ["/bin/sh"] args: ["-ec", "while :; do echo '.'; sleep 5 ; done"] image: gcr.io/gke-on-prem-release/etcd-util: GKE ON PREM VERSION name: etcd-utility volumeMounts: - mountPath: /var/lib/etcd name: data - mountPath: /etcd.local.config/certificates name: etcd-certs nodeSelector: kubernetes.googleapis.com/cluster-name: USER CLUSTER NAME kubernetes.io/hostname: NODE NAME tolerations: - effect: NoExecute key: node.kubernetes.io/not-ready operator: Exists tolerationSeconds: 300 - effect: NoExecute key: node.kubernetes.io/unreachable operator: Exists tolerationSeconds: 300 - effect: NoSchedule key: node.kubernetes.io/unschedulable operator: Exists volumes: - name: data persistentVolumeClaim: claimName: data-kube-etcd-0 - name: etcd-certs secret: defaultMode: 420 secretName: KUBE ETCD SECRET NAME Deploy the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG \ create -f etcd-utility.yaml --namespace USER CLUSTER NAME Copy snapshot.db from the current directory to the root directory of the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG cp snapshot.db \ USER CLUSTER NAME /etcd-utility-0:snapshot.db --container etcd-utility Get a shell into the etcd-utility container: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG exec it \ etcd-utility-0 --container etcd-utility --namespace USER CLUSTER NAME \ -- bin/sh In your shell, in the root directory, run the following command to create a new folder that contains the backup: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ snapshot restore snapshot.db In your shell, delete the old etcd data: rm -r var/lib/etcd/ In your shell, copy the restored etcd data to its permanent location: cp -r default.etcd/ var/lib/etcd/ In your shell, enter exit to exit the shell.
- Note: For HA clusters, copy the secrets from all the user control plane nodes using the instructions Restoring a user cluster from a backup (non-HA) Before you use a backup file to restore your user cluster's etcd store, diagnose your cluster and resolve existing issues.
- Create the utility Pod in your admin cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG apply -f etcd-utility- MEMBER NUMBER .yaml Copy your backup file, snapshot.db , to the root directory of your utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG cp snapshot.db \ USER CLUSTER NAME /etcd-utility- MEMBER NUMBER :snapshot.db Get a shell into the etcd-utility container in the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG exec -it --namespace USER CLUSTER NAME \ etcd-utility- MEMBER NUMBER --container etcd-utility -- bin/sh In your shell, in the root directory, use snapshot.db to restore the etcd data: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ --name=kube-etcd- MEMBER NUMBER \ --initial-cluster=kube-etcd-0=https://kube-etcd-0.kube-etcd:2380,kube-etcd-1=https://kube-etcd-1.kube-etcd:2380,kube-etcd-2=https://kube-etcd-2.kube-etcd:2380 \ --initial-cluster-token=etcd-cluster-1 \ --initial-advertise-peer-urls=https://kube-etcd- MEMBER NUMBER .kube-etcd:2380 \ snapshot restore snapshot.db The preceding command stored etcd data in the /kube-etcd- MEMBER NUMBER .etcd directory.

