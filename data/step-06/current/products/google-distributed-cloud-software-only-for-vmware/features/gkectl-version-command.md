---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.317Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl version command"
feature_slug: "gkectl-version-command"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "gkectl"
  - "version"
  - "command"
  - "reports"
  - "which"
  - "installed"
---

# gkectl version command

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl version command reports which version of gkectl is installed.

## Extended Definition

`gkectl version` is a gkectl CLI command for Google Distributed Cloud (software only) for VMware, run with an admin cluster kubeconfig on the admin workstation. In the documented upgrade workflow, it is used to check which cluster versions are available for upgrade. The available excerpts do not explicitly confirm that it reports the installed gkectl binary version.

## Evidence Summary

The upgrade guide explicitly documents the `gkectl version --kubeconfig ...` command as the step to view upgrade-available versions, but does not directly state it identifies the installed gkectl version.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Skip this step if you already have a user cluster. - (Optional) Run either or both the fast and slow preflight checks, which create a test VM for Windows and validate the Windows VM template: gkectl check-config --config USER CLUSTER CONFIG --kubeconfig ADMIN CLUSTER KUBECONFIG This command is intended for you to run before creating a user cluster.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- If you are installing a lower version on an advanced cluster, the command will fail. gkectl check-config --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the kubeconfig file for your admin cluster USER CLUSTER CONFIG : the path of your user cluster configuration file If the command returns any failure messages, fix the issues and validate the file again.
- The output of the gcloud container vmware clusters query-version-config command is similar to the following: versions: - isInstalled: true version: 1.28.800-gke.109 - version: 1.29.0-gke.1456 - version: 1.29.100-gke.248 - version: 1.29.200-gke.245 - version: 1.29.300-gke.184 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.
- The output of the command is similar to the following: versions: - isInstalled: true version: 1.14.3-gke.25 - version: 1.14.4-gke.54 - version: 1.15.0-gke.581 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.
- Allowable versions are annotated with isInstalled: true , which means the admin cluster has the version-specific components it needs to manage user clusters of that version.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Check available versions for cluster upgrades Run the following command to see which versions are available for upgrade: gkectl version --kubeconfig ADMIN CLUSTER KUBECONFIG Replace ADMIN CLUSTER KUBECONFIG with the path to the admin cluster's kubeconfig file.
- For information on deciding which tool to use, see Choose a tool to upgrade user clusters . gkectl Prepare to upgrade a user cluster Do the following steps on your admin workstation: Do this step only if the TARGET VERSION is 1.30 or lower, or if you are upgrading the user cluster to a different version from the admin cluster.
- Run the following command on your admin workstation to import OS images to vSphere: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace ADMIN CLUSTER KUBECONFIG with the path to the admin cluster's kubeconfig file.
- You must use the gkectl command line tool to upgrade non-advanced clusters to version 1.33.

