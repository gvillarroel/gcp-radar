---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.297Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot --seed-config"
feature_slug: "gkectl-diagnose-snapshot-seed-config"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "seed"
  - "config"
  - "command"
  - "can"
  - "include"
---

# gkectl diagnose snapshot --seed-config

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The snapshot command can include the cluster configuration file in the generated tarball when --seed-config is used.

## Extended Definition

`gkectl diagnose snapshot --seed-config` is a troubleshooting command in Google Distributed Cloud (software only) for VMware that is used when creating a support case, producing a snapshot tar file that should be attached to the ticket. The `diagnose snapshot` output is described as capturing Kubernetes and node-related information for diagnostic purposes, so the `--seed-config` form is a documented support-oriented variant of that snapshot collection command.

## Evidence Summary

These pages confirm that the `gkectl diagnose snapshot` flow (including `--seed-config`) is used for support diagnostics and produces a tar-based snapshot capturing Kubernetes/node data, but they do not explicitly state all exact contents of the tarball in the supplied excerpts.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)

## Supporting Pages

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly instructs users to run `gkectl diagnose snapshot --seed-config` and attach the resulting tar file when opening a support case.

Evidence snippets:
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.
- When you open a support case, provide a configuration snapshot by using the gkectl diagnose snapshot command.
- Enter the required information and attach the output of the gkectl diagnose snapshot command to the case.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- When the restore finishes, run the following command to verify that it was successful: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig GENERATED KUBECONFIG Replace GENERATED KUBECONFIG with the generated kubeconfig file.
- To back up a cluster: Run the following command to check your cluster: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you plan to back up.
- To restore quorum, run the applicable command for your cluster type: Admin cluster gkectl restore admin --kubeconfig ADMIN KUBECONFIG \ --config ADMIN CONFIG \ --control-plane-node WORKING NODE IP \ --ssh-key ADMIN SSH KEY PATH Replace the following: ADMIN KUBECONFIG : the path of the kubeconfig file for the admin cluster.
- Run the applicable command to back up the cluster: Admin cluster gkectl backup admin --kubeconfig ADMIN KUBECONFIG User cluster gkectl backup cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG By default, the backup tar file is saved to the directory gkectl-workspace/backups on your admin workstation.

