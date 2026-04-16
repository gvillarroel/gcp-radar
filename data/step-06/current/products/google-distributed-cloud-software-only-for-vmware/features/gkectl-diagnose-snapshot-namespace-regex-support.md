---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.309Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot namespace regex support"
feature_slug: "gkectl-diagnose-snapshot-namespace-regex-support"
latest_feature_date: "2019-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "namespace"
  - "regex"
  - "command"
  - "supports"
  - "regular"
---

# gkectl diagnose snapshot namespace regex support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl diagnose snapshot command supports regular expressions for specifying namespaces.

## Extended Definition

`gkectl diagnose snapshot` is a Google Distributed Cloud (software only) for VMware command used to collect diagnostic snapshot data (for example, a tar file) for support and troubleshooting. In the provided excerpts, it is shown with flags like `--seed-config`, `--scenario`, and `--cluster-name`, but there is no explicit evidence that it supports namespace filtering with regular expressions.

## Evidence Summary

These pages document how `gkectl diagnose snapshot` is used for troubleshooting and support workflows, but the excerpts provided do not contain documented syntax showing namespace regular-expression support.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.
- When you open a support case, provide a configuration snapshot by using the gkectl diagnose snapshot command.
- Enter the required information and attach the output of the gkectl diagnose snapshot command to the case.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER KUBECONFIG="" # path to user cluster kubeconfig EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP user etcd=$(kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[0].metadata.name}{"\n"}') kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} exec -it -n kube-system ${user etcd} -c etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /tmp/${user etcd} snapshot.db" kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} cp kube-system/${user etcd}:/tmp/${user etcd} snapshot.db $BACKUP DIR/${user etcd} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/${admin etcd} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:/tmp/${admin etcd} snapshot.db $BACKUP DIR/${admin etcd} snapshot.db Verify the restoration To verify that your cluster was successfully restored, run gkectl diagnose cluster .
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER NAMESPACE="" # user cluster namespace EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to vsphere tmp ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network. mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP Snapshot user cluster etcd kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n ${USER CLUSTER NAMESPACE} kube-etcd-0 -c kube-etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etcd.local.config/certificates/etcdCA.crt --cert=/etcd.local.config/certificates/etcd.crt --key=/etcd.local.config/certificates/etcd.key snapshot save ${USER CLUSTER NAMESPACE} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp ${USER CLUSTER NAMESPACE}/kube-etcd-0:${USER CLUSTER NAMESPACE} snapshot.db $BACKUP DIR/user-cluster ${USER CLUSTER NAMESPACE} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save admin snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:admin snapshot.db $BACKUP DIR/admin-cluster snapshot.db Controlplane V2 Set BACKUP DIR to the path where you want to store the admin and user cluster backups.
- KUBE ETCD SECRET NAME : the name of the Secret used by etcd in the user cluster, starting with kube-etcd-certs . apiVersion: v1 kind: Pod metadata: name: etcd-utility-0 namespace: USER CLUSTER NAME spec: containers: - command: ["/bin/sh"] args: ["-ec", "while :; do echo '.'; sleep 5 ; done"] image: gcr.io/gke-on-prem-release/etcd-util: GKE ON PREM VERSION name: etcd-utility volumeMounts: - mountPath: /var/lib/etcd name: data - mountPath: /etcd.local.config/certificates name: etcd-certs nodeSelector: kubernetes.googleapis.com/cluster-name: USER CLUSTER NAME kubernetes.io/hostname: NODE NAME tolerations: - effect: NoExecute key: node.kubernetes.io/not-ready operator: Exists tolerationSeconds: 300 - effect: NoExecute key: node.kubernetes.io/unreachable operator: Exists tolerationSeconds: 300 - effect: NoSchedule key: node.kubernetes.io/unschedulable operator: Exists volumes: - name: data persistentVolumeClaim: claimName: data-kube-etcd-0 - name: etcd-certs secret: defaultMode: 420 secretName: KUBE ETCD SECRET NAME Deploy the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG \ create -f etcd-utility.yaml --namespace USER CLUSTER NAME Copy snapshot.db from the current directory to the root directory of the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG cp snapshot.db \ USER CLUSTER NAME /etcd-utility-0:snapshot.db --container etcd-utility Get a shell into the etcd-utility container: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG exec it \ etcd-utility-0 --container etcd-utility --namespace USER CLUSTER NAME \ -- bin/sh In your shell, in the root directory, run the following command to create a new folder that contains the backup: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ snapshot restore snapshot.db In your shell, delete the old etcd data: rm -r var/lib/etcd/ In your shell, copy the restored etcd data to its permanent location: cp -r default.etcd/ var/lib/etcd/ In your shell, enter exit to exit the shell.
- Create the utility Pod in your admin cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG apply -f etcd-utility- MEMBER NUMBER .yaml Copy your backup file, snapshot.db , to the root directory of your utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG cp snapshot.db \ USER CLUSTER NAME /etcd-utility- MEMBER NUMBER :snapshot.db Get a shell into the etcd-utility container in the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG exec -it --namespace USER CLUSTER NAME \ etcd-utility- MEMBER NUMBER --container etcd-utility -- bin/sh In your shell, in the root directory, use snapshot.db to restore the etcd data: ETCDCTL API=3 etcdctl \ --endpoints=https://127.0.0.1:2379 \ --cacert=/etcd.local.config/certificates/etcdCA.crt \ --cert=/etcd.local.config/certificates/etcd.crt \ --key=/etcd.local.config/certificates/etcd.key \ --name=kube-etcd- MEMBER NUMBER \ --initial-cluster=kube-etcd-0=https://kube-etcd-0.kube-etcd:2380,kube-etcd-1=https://kube-etcd-1.kube-etcd:2380,kube-etcd-2=https://kube-etcd-2.kube-etcd:2380 \ --initial-cluster-token=etcd-cluster-1 \ --initial-advertise-peer-urls=https://kube-etcd- MEMBER NUMBER .kube-etcd:2380 \ snapshot restore snapshot.db The preceding command stored etcd data in the /kube-etcd- MEMBER NUMBER .etcd directory.

