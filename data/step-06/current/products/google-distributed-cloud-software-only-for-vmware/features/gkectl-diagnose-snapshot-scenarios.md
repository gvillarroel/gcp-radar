---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.310Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot scenarios"
feature_slug: "gkectl-diagnose-snapshot-scenarios"
latest_feature_date: "2019-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "scenarios"
  - "command"
  - "supports"
  - "four"
  - "diagnostic"
---

# gkectl diagnose snapshot scenarios

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl diagnose snapshot command supports four diagnostic scenarios.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, `gkectl diagnose snapshot` is a troubleshooting command used to generate diagnostic snapshots for incident support and cluster diagnosis. The command produces a tar file/ tarball containing logs and outputs from troubleshooting commands, and it is documented as being used with options such as `--seed-config` (to capture Kubernetes and node information) and `--scenario system-with-logs` for scenario-based collection. The available excerpts do not enumerate all supported scenarios, so the exact count of “four scenarios” is not directly evidenced here.

## Evidence Summary

These pages confirm that `gkectl diagnose snapshot` is used for support and troubleshooting artifact collection and show concrete command usage options, but they do not provide a complete, explicit list of all diagnostic scenarios.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.
- When you open a support case, provide a configuration snapshot by using the gkectl diagnose snapshot command.
- Enter the required information and attach the output of the gkectl diagnose snapshot command to the case.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.

### "Diagnose cluster issues \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Run gkectl diagnose cluster automatically in gkectl diagnose snapshot Public page https://cloud.google.com/anthos/clusters/docs/on-prem/latest/diagnose#overview diagnose snapshot Troubleshoot The following table outlines some possible resolutions for problems with running the gkectl diagnose cluster command: Issue Possible causes Resolution Kubernetes API server is not reachable, either for the admin cluster, or for user clusters.
- For more information how to use the gkectl diagnose snapshot command to create snapshots that can help Cloud Customer Care diagnose issues, see Create snapshots to diagnose clusters .
- The gkectl tool has two commands for troubleshooting issues with clusters: gkectl diagnose cluster and gkectl diagnose snapshot .
- For example, you can paste the generated report or specific error messages into Gemini Cloud Assist, and ask it to explain the potential causes of any issues and recommend next steps. gkectl diagnose cluster This command performs health checks on your cluster and reports errors.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.

