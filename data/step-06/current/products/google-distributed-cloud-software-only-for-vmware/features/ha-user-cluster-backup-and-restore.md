---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.259Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "HA user cluster backup and restore"
feature_slug: "ha-user-cluster-backup-and-restore"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster"
keywords:
  - "ha"
  - "user"
  - "cluster"
  - "backup"
  - "restore"
  - "release"
  - "adds"
  - "clusters"
---

# HA user cluster backup and restore

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The release adds backup and restore support for HA user clusters with etcd.

## Extended Definition

Google Distributed Cloud (software only) for VMware supports backup and restore for advanced user clusters using etcd snapshots, including workflows to create a backup file with gkectl and restore a cluster from that file. For HA user clusters, the documentation specifies additional restoration behavior such as handling user control-plane node secrets and restoring etcd data with member-specific parameters, and it warns that restore relies on non-expired backup files.

## Evidence Summary

These pages provide operational backup/restore procedures for user (and admin) clusters in Google Distributed Cloud for VMware, document that support is for advanced clusters, and include HA-specific etcd restore guidance.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)

## Supporting Pages

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about backing up and restoring advanced admin and user clusters and mentions HA deployments and etcd-based backups.

Evidence snippets:
- Backup to vSphere To configure backups so that the backup file for both admin and user clusters are uploaded to vSphere in addition to being saved on your admin workstation, do the following: Add the clusterBackup.datastore field to your admin cluster configuration file: clusterBackup : datastore : DATASTORE Replace DATASTORE with the datastore where you want to store the backup.
- Optionally, you can specify a different name and location for your backup file with the --backup-file flag, for example: gkectl backup cluster testuser \ --kubeconfig admin-cluster/kubeconfig \ --backup-file cluster-backups/testuser-backup-aug-23-2025.tar.gz The backup file expires after a year and the cluster restore process doesn't work with expired backup files.
- User cluster gkectl restore cluster --cluster-name CLUSTER NAME \ --backup-file BACKUP FILE \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you are restoring.
- This document describes how to back up and restore Google Distributed Cloud version 1.32 and higher admin and user clusters that have advanced cluster enabled.

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: WEAK
- Re-rank rationale: The page provides detailed user-cluster etcd backup and restore steps, which is broadly relevant, but does not describe HA-specific backup/restore support.

Evidence snippets:
- KUBE ETCD SECRET NAME : the name of the Secret used by etcd in the user cluster, starting with kube-etcd-certs . apiVersion: v1 kind: Pod metadata: name: etcd-utility-0 namespace: USER CLUSTER NAME spec: containers: - command: ["/bin/sh"] args: ["-ec", "while :; do echo '.'; sleep 5 ; done"] image: gcr.io/gke-on-prem-release/etcd-util: GKE ON PREM VERSION name: etcd-utility volumeMounts: - mountPath: /var/lib/etcd name: data - mountPath: /etcd.local.config/certificates name: etcd-certs nodeSelector: kubernetes.googleapis.com/cluster-name: USER CLUSTER NAME kubernetes.io/hostname: NODE NAME tolerations: - effect: NoExecute key: node.kubernetes.io/not-ready operator: Exists tolerationSeconds: 300 - effect: NoExecute key: node.kubernetes.io/unreachable operator: Exists tolerationSeconds: 300 - effect: NoSchedule key: node.kubernetes.io/unschedulable operator: Exists volumes: - name: data persistentVolumeClaim: claimName: data-kube-etcd-0 - name: etcd-certs secret: defaultMode: 420 secretName: KUBE ETCD SECRET NAME Deploy the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG \ create -f etcd-utility.yaml --namespace USER CLUSTER NAME Copy snapshot.db from the current directory to the root directory of the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG cp snapshot.db \ USER CLUSTER NAME /etcd-utility-0:snapshot.db --container etcd-utility Get a shell into the etcd-utility container: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG exec it \ etcd-utility-0 --container etcd-utility --namespace USER CLUSTER NAME \ -- bin/sh In your shell, in the root directory, run the following command to create a new folder that contains the backup: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ snapshot restore snapshot.db In your shell, delete the old etcd data: rm -r var/lib/etcd/ In your shell, copy the restored etcd data to its permanent location: cp -r default.etcd/ var/lib/etcd/ In your shell, enter exit to exit the shell.
- Note: For HA clusters, copy the secrets from all the user control plane nodes using the instructions Restoring a user cluster from a backup (non-HA) Before you use a backup file to restore your user cluster's etcd store, diagnose your cluster and resolve existing issues.
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER KUBECONFIG="" # path to user cluster kubeconfig EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP user etcd=$(kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[0].metadata.name}{"\n"}') kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} exec -it -n kube-system ${user etcd} -c etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /tmp/${user etcd} snapshot.db" kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} cp kube-system/${user etcd}:/tmp/${user etcd} snapshot.db $BACKUP DIR/${user etcd} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/${admin etcd} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:/tmp/${admin etcd} snapshot.db $BACKUP DIR/${admin etcd} snapshot.db Verify the restoration To verify that your cluster was successfully restored, run gkectl diagnose cluster .
- Create the utility Pod in your admin cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG apply -f etcd-utility- MEMBER NUMBER .yaml Copy your backup file, snapshot.db , to the root directory of your utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG cp snapshot.db \ USER CLUSTER NAME /etcd-utility- MEMBER NUMBER :snapshot.db Get a shell into the etcd-utility container in the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG exec -it --namespace USER CLUSTER NAME \ etcd-utility- MEMBER NUMBER --container etcd-utility -- bin/sh In your shell, in the root directory, use snapshot.db to restore the etcd data: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ --name=kube-etcd- MEMBER NUMBER \ --initial-cluster=kube-etcd-0=https://kube-etcd-0.kube-etcd:2380,kube-etcd-1=https://kube-etcd-1.kube-etcd:2380,kube-etcd-2=https://kube-etcd-2.kube-etcd:2380 \ --initial-cluster-token=etcd-cluster-1 \ --initial-advertise-peer-urls=https://kube-etcd- MEMBER NUMBER .kube-etcd:2380 \ snapshot restore snapshot.db The preceding command stored etcd data in the /kube-etcd- MEMBER NUMBER .etcd directory.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- For example: loadBalancer : f5BigIP : address : "203.0.113.2" loadBalancer.f5BigIP.credentials.fileRef.path 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The path of a credentials configuration file that holds the username and password of an account that Google Distributed Cloud can use to connect to your F5 BIG-IP load balancer.
- For more information see the following: Non-advanced clusters: Back up and restore an admin cluster with gkectl Advanced clusters: Back up and restore advanced clusters with gkectl autoRepair.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable node auto repair .
- You might want to configure the privateRegistry section so that clusters pull system images from the private registry instead of gcr.io/gke-on-prem-release in the following cases: You need to minimize connections to Google Cloud because of security concerns or regulatory requirements.

