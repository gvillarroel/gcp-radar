---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.141Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Asynchronous user cluster upgrade"
feature_slug: "asynchronous-user-cluster-upgrade"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "asynchronous"
  - "user"
  - "cluster"
  - "upgrade"
  - "allows"
  - "gkectl"
  - "start"
  - "asynchronously"
---

# Asynchronous user cluster upgrade

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Allows gkectl to start a user cluster upgrade asynchronously and exit before the upgrade completes.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, an asynchronous user cluster upgrade is performed with `gkectl upgrade cluster ... --async`, which starts the upgrade and returns control to the admin workstation before the upgrade completes. The asynchronous variation is explicitly presented as a recommended form of the upgrade command, and the upgrade’s progress and completion are tracked separately (for example, by upgrade phase events and the cluster showing `RUNNING` status when finished).

## Evidence Summary

The official upgrade guide provides command syntax, asynchronous behavior, and completion/monitoring signals for `gkectl upgrade cluster`.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly documents asynchronous behavior for `gkectl upgrade cluster` with `--async`, including command flow and monitoring.

Evidence snippets:
- On your admin workstation, start an asynchronous upgrade: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --async The preceding command completes, and you can continue to use your admin workstation while the upgrade is in progress.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Asynchronous upgrade On your admin workstation, start an asynchronous upgrade: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE \ --reuse-bootstrap-cluster \ --async Replace the following: ADMIN CLUSTER KUBECONFIG : the path to the admin cluster's kubeconfig file.
- Run gkectl upgrade cluster There are two variations of the gkectl upgrade cluster command: Asynchronous : (recommended) With the asynchronous variation, the command starts the upgrade and then completes.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to modify main.tf to run the gkectl prepare command before cluster creation: resource "null resource" "gkectl prepare" { provisioner "local-exec" { command = "gkectl prepare --kubeconfig=${var.kubeconfig} --cluster-name=${var.cluster name} --vcenter-username=${var.vcenter username} --vcenter-password=${var.vcenter password} --vcenter-address=${var.vcenter address} --datacenter=${var.datacenter} --datastore=${var.datastore} --network=${var.network} --os-image=${var.os image} --service-account-key-file=${var.service account key file} --location=${var.location}" working dir = path.module # Important: Set working directory environment = { Optional: set environment variables if needed.
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .
- If you are installing a lower version on an advanced cluster, the command will fail. gkectl check-config --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the kubeconfig file for your admin cluster USER CLUSTER CONFIG : the path of your user cluster configuration file If the command returns any failure messages, fix the issues and validate the file again.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- It is recommended that you use a user account with the minimum permissions required for an Active Directory domain join, instead of using an Administrator user. (Optional) To avoid storing the password as cleartext in this script, place the password in a file on the VM template, let the script read from that password file, then delete the file after the domain join. $domain = "[DOMAIN NAME]" $password = "[PASSWORD]" ConvertTo-SecureString -asPlainText -Force $username = "$domain\[USERNAME]" $credential = New-Object System.Management.Automation.PSCredential($username,$password) Add-Computer -DomainName $domain -Credential $credential -restart –force Create a Windows VM template with a customized script: gkectl prepare windows --base-vm-template BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG --customized-script CUSTOMIZED SCRIPT PATH Replace BUNDLE PATH with the path to the bundle.
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Run the command below for upgrading the user cluster: gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG with the path of your admin kubeconfig file ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file Accessing Windows nodes The standard way to access Windows nodes is with a username and password, which differs from Linux nodes, which are typically accessed via ssh key pairs for authentication.
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .

