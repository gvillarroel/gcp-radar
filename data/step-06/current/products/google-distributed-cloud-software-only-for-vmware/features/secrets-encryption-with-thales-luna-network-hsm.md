---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.235Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Secrets Encryption with Thales Luna Network HSM"
feature_slug: "secrets-encryption-with-thales-luna-network-hsm"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster"
keywords:
  - "secrets"
  - "encryption"
  - "thales"
  - "luna"
  - "network"
  - "hsm"
  - "user"
  - "clusters"
---

# Secrets Encryption with Thales Luna Network HSM

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User clusters can use Thales Luna Network HSM devices for secrets encryption.

## Extended Definition

Google Distributed Cloud (software only) for VMware supports secrets encryption configuration via an admin cluster configuration section named `secretsEncryption`. The supported mode shown is `GeneratedKey`, with a required `generatedKey.keyVersion` setting, and this is described as “always-on Secrets encryption” during admin cluster setup. The provided excerpts do not explicitly mention Thales Luna Network HSM itself, so HSM-specific integration is not directly evidenced here.

## Evidence Summary

The admin-cluster docs show the Secrets Encryption feature knobs (including GeneratedKey mode and key version) and that it is an always-on option, while the backup page only covers snapshot/restore procedures and does not provide HSM-specific evidence.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)

## Supporting Pages

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Note: For HA clusters, copy the secrets from all the user control plane nodes using the instructions Restoring a user cluster from a backup (non-HA) Before you use a backup file to restore your user cluster's etcd store, diagnose your cluster and resolve existing issues.
- If you are using a private network, set JUMP IP to your network's jump server's IP address. #!/usr/bin/env bash Automates manual steps for taking backups of user and admin clusters.
- If you are using a private network, set JUMP IP to your network's jump server's IP address. #!/usr/bin/env bash Automates manual steps for taking backups of user and admin clusters.
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER KUBECONFIG="" # path to user cluster kubeconfig EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP user etcd=$(kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[0].metadata.name}{"\n"}') kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} exec -it -n kube-system ${user etcd} -c etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /tmp/${user etcd} snapshot.db" kubectl --kubeconfig=${USER CLUSTER KUBECONFIG} cp kube-system/${user etcd}:/tmp/${user etcd} snapshot.db $BACKUP DIR/${user etcd} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save /tmp/${admin etcd} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:/tmp/${admin etcd} snapshot.db $BACKUP DIR/${admin etcd} snapshot.db Verify the restoration To verify that your cluster was successfully restored, run gkectl diagnose cluster .

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Backing up the admin cluster to a vSphere datastore isn't supported. autoRepair If you want to enable automatic node repair for your admin cluster, set autoRepair.enabled to true . secretsEncryption If you want to enable always-on Secrets encryption , fill in the secretsEncryption section.
- Always-on Secrets encryption isn't supported. osImageType Decide what type of OS image you want to use for the admin cluster nodes, and fill in the osImageType section accordingly.
- If you plan to create any kubeception user clusters , then you must have enough IP addresses available for the control-plane nodes of those user clusters.
- The service account and RBAC policies are needed so that you can manage the lifecycle of your user clusters in the Google Cloud console.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Immutable secretsEncryption.mode Required for Secrets encryption Immutable String Possible value: "GeneratedKey" Prepopulated: "GeneratedKey" The Secret encryption mode. secretsEncryption: mode: "GeneratedKey" secretsEncryption.generatedKey.keyVersion Required for Secrets encryption Mutable Integer Prepopulated: 1 An integer of your choice to use for the key version number.
- Possible values are: GeneratedKey mode: GeneratedKey # GeneratedKey Secrets Encryption config generatedKey: # # key version # keyVersion: 1 # # disable secrets encryption # disabled: false (Optional) Specify the type of OS image; available options can be set to "ubuntu containerd" "cos" "ubuntu cgv2" or "cos cgv2".
- Example: secretsEncryption: generatedKey: disabled: false osImageType Optional Mutable String Possible values: "ubuntu containerd", "cos", "ubuntu cgv2", "cos cgv2" Prepopulated: "" Default: "ubuntu containerd" The type of OS image to run on your admin cluster nodes.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters with GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .

