---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.307Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl diagnose snapshot --admin-ssh-key-path parameter"
feature_slug: "gkectl-diagnose-snapshot-admin-ssh-key-path-parameter"
latest_feature_date: "2019-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl"
keywords:
  - "gkectl"
  - "diagnose"
  - "snapshot"
  - "admin"
  - "ssh"
  - "key"
  - "path"
  - "parameter"
---

# gkectl diagnose snapshot --admin-ssh-key-path parameter

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The --admin-ssh-key-path parameter in gkectl diagnose snapshot is optional; The --admin-ssh-key-path parameter in gkectl diagnose snapshot is optional.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, `gkectl diagnose snapshot` is a command used for troubleshooting that generates a tarball containing log files and command outputs from nodes. The documented syntax in the provided page shows it accepting flags such as `--scenario`, `--cluster-name`, and `--kubeconfig`. The excerpts provided do not show the `--admin-ssh-key-path` flag or describe its optionality, so that specific behavior is not evidenced here.

## Evidence Summary

These official pages document various `gkectl` commands, and one explicitly shows the `gkectl diagnose snapshot` command form, but none in the provided excerpts mention `--admin-ssh-key-path`.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)

## Supporting Pages

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- To restore quorum, run the applicable command for your cluster type: Admin cluster gkectl restore admin --kubeconfig ADMIN KUBECONFIG \ --config ADMIN CONFIG \ --control-plane-node WORKING NODE IP \ --ssh-key ADMIN SSH KEY PATH Replace the following: ADMIN KUBECONFIG : the path of the kubeconfig file for the admin cluster.
- To restore a cluster: Run the applicable command to restore the cluster: Admin cluster gkectl restore admin --backup-file BACKUP FILE \ --config ADMIN CONFIG Replace the following: BACKUP FILE : the path and name of the backup file you are using.
- User cluster gkectl restore cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG \ --control-plane-node WORKING NODE IP \ --ssh-key USER SSH KEY PATH Replace the following: CLUSTER NAME : the name of the cluster you are restoring.
- To back up a cluster: Run the following command to check your cluster: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you plan to back up.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- It is recommended that you use a user account with the minimum permissions required for an Active Directory domain join, instead of using an Administrator user. (Optional) To avoid storing the password as cleartext in this script, place the password in a file on the VM template, let the script read from that password file, then delete the file after the domain join. $domain = "[DOMAIN NAME]" $password = "[PASSWORD]" ConvertTo-SecureString -asPlainText -Force $username = "$domain\[USERNAME]" $credential = New-Object System.Management.Automation.PSCredential($username,$password) Add-Computer -DomainName $domain -Credential $credential -restart –force Create a Windows VM template with a customized script: gkectl prepare windows --base-vm-template BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG --customized-script CUSTOMIZED SCRIPT PATH Replace BUNDLE PATH with the path to the bundle.
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.

### "Back up and restore an admin cluster with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-an-admin-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Update the admin cluster: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Replace: ADMIN CLUSTER KUBECONFIG with the path of your admin cluster kubeconfig file.
- Edit the admin cluster configuration file to change the clusterBackup.datastore value. clusterBackup: datastore: new-datastore Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG On-demand backup To trigger an on-demand admin cluster backup, run the following command: gkectl backup admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Limit on number of backups You can have a maximum total of six backups, divided into a maximum of three on-demand backups, and a maximum of three backups from cluster update, upgrade or create operations.
- Disable the admin cluster backup feature Remove the clusterBackup section from the admin cluster configuration file. clusterBackup: datastore: DATASTORE Update the admin cluster with this change, using this command: gkectl update admin --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG Update the backup datastore You can update the datastore where backups are stored by updating clusterBackup.datastore to reflect the new location.
- To recreate the admin cluster from a backup, run the following command: gkectl repair admin-master --kubeconfig ADMIN CLUSTER KUBECONFIG --config ADMIN CLUSTER CONFIG --restore-from-backup This command retrieves all of the backups of this admin cluster from the datastore defined in the clusterBackup section of the admin cluster configuration file, and it prompts you to select the one from which you want to use to restore the admin cluster.

