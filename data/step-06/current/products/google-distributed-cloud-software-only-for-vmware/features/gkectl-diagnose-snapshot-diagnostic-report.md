---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.147Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot diagnostic report"
feature_slug: "gkectl-diagnose-snapshot-diagnostic-report"
latest_feature_date: "2022-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "diagnostic"
  - "report"
  - "automatically"
  - "runs"
  - "cluster"
---

# gkectl diagnose snapshot diagnostic report

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl diagnose snapshot automatically runs gkectl diagnose cluster and saves the output in a new /diagnose-report folder.

## Extended Definition

`gkectl diagnose snapshot` is a troubleshooting command in Google Distributed Cloud (software only) for VMware that creates a diagnostic snapshot for a cluster by using `gkectl diagnose cluster` automatically. It is documented as a support-oriented snapshot mechanism to help diagnose cluster issues, and example usage shows it can generate artifacts such as node log files and outputs from troubleshooting commands (for example, in a `system-with-logs` scenario).

## Evidence Summary

The diagnose page defines snapshot and cluster troubleshooting commands and links snapshot usage to issue diagnosis, while the Windows node pools guide shows practical `gkectl diagnose snapshot` usage and the types of data included in generated artifacts.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Diagnose cluster issues \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: The page confirms that `gkectl diagnose snapshot` exists and is used to help troubleshoot clusters, but it does not describe report output location or the automatic report-generation behavior.

Evidence snippets:
- Run gkectl diagnose cluster automatically in gkectl diagnose snapshot Public page https://cloud.google.com/anthos/clusters/docs/on-prem/latest/diagnose#overview diagnose snapshot Troubleshoot The following table outlines some possible resolutions for problems with running the gkectl diagnose cluster command: Issue Possible causes Resolution Kubernetes API server is not reachable, either for the admin cluster, or for user clusters.
- For example, you can paste the generated report or specific error messages into Gemini Cloud Assist, and ask it to explain the potential causes of any issues and recommend next steps. gkectl diagnose cluster This command performs health checks on your cluster and reports errors.
- For more information how to use the gkectl diagnose snapshot command to create snapshots that can help Cloud Customer Care diagnose issues, see Create snapshots to diagnose clusters .
- The gkectl tool has two commands for troubleshooting issues with clusters: gkectl diagnose cluster and gkectl diagnose snapshot .

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- If the template name doesn't match the osImage field value, update the osImage value to match the new generated VM template name and run the following command: gkectl update cluster Re-create the Windows node by running the following command: kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Wait for the controller to automatically recreate the node.

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER KUBECONFIG="" # path to user cluster kubeconfig EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP user etcd=$(kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[0].metadata.name}{"\n"}') kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} exec -it -n kube-system ${user etcd} -c etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /tmp/${user etcd} snapshot.db" kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} cp kube-system/${user etcd}:/tmp/${user etcd} snapshot.db $BACKUP DIR/${user etcd} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/${admin etcd} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:/tmp/${admin etcd} snapshot.db $BACKUP DIR/${admin etcd} snapshot.db Verify the restoration To verify that your cluster was successfully restored, run gkectl diagnose cluster .
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER NAMESPACE="" # user cluster namespace EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to vsphere tmp ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network. mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP Snapshot user cluster etcd kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n ${USER CLUSTER NAMESPACE} kube-etcd-0 -c kube-etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etcd.local.config/certificates/etcdCA.crt --cert=/etcd.local.config/certificates/etcd.crt --key=/etcd.local.config/certificates/etcd.key snapshot save ${USER CLUSTER NAMESPACE} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp ${USER CLUSTER NAMESPACE}/kube-etcd-0:${USER CLUSTER NAMESPACE} snapshot.db $BACKUP DIR/user-cluster ${USER CLUSTER NAMESPACE} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save admin snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:admin snapshot.db $BACKUP DIR/admin-cluster snapshot.db Controlplane V2 Set BACKUP DIR to the path where you want to store the admin and user cluster backups.
- KUBE ETCD SECRET NAME : the name of the Secret used by etcd in the user cluster, starting with kube-etcd-certs . apiVersion: v1 kind: Pod metadata: name: etcd-utility-0 namespace: USER CLUSTER NAME spec: containers: - command: ["/bin/sh"] args: ["-ec", "while :; do echo '.'; sleep 5 ; done"] image: gcr.io/gke-on-prem-release/etcd-util: GKE ON PREM VERSION name: etcd-utility volumeMounts: - mountPath: /var/lib/etcd name: data - mountPath: /etcd.local.config/certificates name: etcd-certs nodeSelector: kubernetes.googleapis.com/cluster-name: USER CLUSTER NAME kubernetes.io/hostname: NODE NAME tolerations: - effect: NoExecute key: node.kubernetes.io/not-ready operator: Exists tolerationSeconds: 300 - effect: NoExecute key: node.kubernetes.io/unreachable operator: Exists tolerationSeconds: 300 - effect: NoSchedule key: node.kubernetes.io/unschedulable operator: Exists volumes: - name: data persistentVolumeClaim: claimName: data-kube-etcd-0 - name: etcd-certs secret: defaultMode: 420 secretName: KUBE ETCD SECRET NAME Deploy the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG \ create -f etcd-utility.yaml --namespace USER CLUSTER NAME Copy snapshot.db from the current directory to the root directory of the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG cp snapshot.db \ USER CLUSTER NAME /etcd-utility-0:snapshot.db --container etcd-utility Get a shell into the etcd-utility container: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG exec it \ etcd-utility-0 --container etcd-utility --namespace USER CLUSTER NAME \ -- bin/sh In your shell, in the root directory, run the following command to create a new folder that contains the backup: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ snapshot restore snapshot.db In your shell, delete the old etcd data: rm -r var/lib/etcd/ In your shell, copy the restored etcd data to its permanent location: cp -r default.etcd/ var/lib/etcd/ In your shell, enter exit to exit the shell.
- Create the utility Pod in your admin cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG apply -f etcd-utility- MEMBER NUMBER .yaml Copy your backup file, snapshot.db , to the root directory of your utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG cp snapshot.db \ USER CLUSTER NAME /etcd-utility- MEMBER NUMBER :snapshot.db Get a shell into the etcd-utility container in the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG exec -it --namespace USER CLUSTER NAME \ etcd-utility- MEMBER NUMBER --container etcd-utility -- bin/sh In your shell, in the root directory, use snapshot.db to restore the etcd data: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ --name=kube-etcd- MEMBER NUMBER \ --initial-cluster=kube-etcd-0=https://kube-etcd-0.kube-etcd:2380,kube-etcd-1=https://kube-etcd-1.kube-etcd:2380,kube-etcd-2=https://kube-etcd-2.kube-etcd:2380 \ --initial-cluster-token=etcd-cluster-1 \ --initial-advertise-peer-urls=https://kube-etcd- MEMBER NUMBER .kube-etcd:2380 \ snapshot restore snapshot.db The preceding command stored etcd data in the /kube-etcd- MEMBER NUMBER .etcd directory.

