---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.298Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot output logging"
feature_slug: "gkectl-diagnose-snapshot-output-logging"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "output"
  - "logging"
  - "tarball"
  - "includes"
  - "command"
---

# gkectl diagnose snapshot output logging

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

The diagnose snapshot tarball includes the command output log by default.

## Extended Definition

`gkectl diagnose snapshot` in Google Distributed Cloud (software only) for VMware generates a tarball that captures information about a cluster, including Kubernetes and node state, for troubleshooting and support. The documented snapshot tarball includes node log files and outputs from troubleshooting commands (including command scenarios such as `system-with-logs`), and support guidance directs users to attach this tarball output to support cases.

## Evidence Summary

The cited pages collectively confirm that `gkectl diagnose snapshot` produces a tar archive containing node log files and troubleshooting command outputs, and that this output is intended for diagnostic support workflows.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: It explains that support snapshots collect log and cluster information for cases, but does not state that command output logs are included by default.

Evidence snippets:
- Enter the required information and attach the output of the gkectl diagnose snapshot command to the case.
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.
- When you open a support case, provide a configuration snapshot by using the gkectl diagnose snapshot command.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To get more details about the upgrade progress and cluster events: gkectl describe clusters --kubeconfig ADMIN CLUSTER KUBECONFIG \ --cluster USER CLUSTER NAME -v 5 The output shows the OnPremUserCluster custom resource for the specified user cluster, which includes cluster status, conditions, and events.
- To get more details about the upgrade progress and cluster events: gkectl describe admin --kubeconfig ADMIN CLUSTER KUBECONFIG The output shows the OnPremAdminCluster custom resource for the specified admin cluster, which includes cluster status, conditions, and events.
- Synchronous : With the synchronous variation, the gkectl upgrade cluster command outputs status messages to the admin workstation as the upgrade progresses.
- Synchronous : With the synchronous variation, the gkectl upgrade admin command outputs status messages to the admin workstation as the upgrade progresses.

