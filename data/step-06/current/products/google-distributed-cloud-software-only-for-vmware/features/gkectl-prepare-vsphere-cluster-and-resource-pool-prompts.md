---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.325Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl prepare vSphere cluster and resource pool prompts"
feature_slug: "gkectl-prepare-vsphere-cluster-and-resource-pool-prompts"
latest_feature_date: "2019-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "gkectl"
  - "prepare"
  - "vsphere"
  - "cluster"
  - "resource"
  - "pool"
  - "prompts"
  - "command"
---

# gkectl prepare vSphere cluster and resource pool prompts

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl prepare command prompts you to enter information about your vSphere cluster and resource pool.

## Extended Definition

`gkectl prepare` is a pre-creation command in Google Distributed Cloud (software only) for VMware that is run before provisioning a user cluster (for example, when the user cluster is in a different vSphere data center than the admin cluster). It is used with vSphere-specific inputs such as vCenter credentials, address, datacenter, datastore, cluster, network, and related fields, as shown in cluster-creation automation examples. For vSphere resource pools, cluster configuration expects a `vCenter.resourcePool` value as a relative path under `/.../ DATA CENTER /host/.../ VSPHERE CLUSTER /Resources`, with values indicating either nested pool paths or direct-child pool names.

## Evidence Summary

The cited Google Cloud pages document `gkectl prepare` usage in user-cluster workflows and the vCenter resource pool path format required in admin cluster configuration.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to modify main.tf to run the gkectl prepare command before cluster creation: resource "null resource" "gkectl prepare" { provisioner "local-exec" { command = "gkectl prepare --kubeconfig=${var.kubeconfig} --cluster-name=${var.cluster name} --vcenter-username=${var.vcenter username} --vcenter-password=${var.vcenter password} --vcenter-address=${var.vcenter address} --datacenter=${var.datacenter} --datastore=${var.datastore} --network=${var.network} --os-image=${var.os image} --service-account-key-file=${var.service account key file} --location=${var.location}" working dir = path.module # Important: Set working directory environment = { Optional: set environment variables if needed.
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .
- Ensure this depends on the null resource depends on = [ null resource.gkectl prepare ] ... rest of your cluster configuration ... location = var.location name = var.cluster name ... other required fields ... } Troubleshooting See Troubleshooting cluster creation and upgrade .

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to prepare a new VM template, using the upgraded VM template from previous steps as the base VM template . gkectl prepare windows The new generated VM template name should match the windows node pool osImage field value in the user cluster config file.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- Set the osImage and osImageType fields to create Windows node pools: osImage : Replace WINDOWS VM TEMPLATE NAME with the name of your prepared Windows VM template in step 1 , which should be in the same vCenter datastore specified in the user cluster configuration file. osImageType : Specify the OS image type to be windows . user-cluster.yaml nodePools: - name: windows-nodepool-1 cpus: 8 memoryMB: 16384 replicas: 3 bootDiskSizeGB: 100 osImage: WINDOWS VM TEMPLATE NAME osImageType: windows Note: Windows Server nodes require more resources than Linux nodes.
- See Security patch process . gkectl prepare windows --base-vm-template $BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG Note: The command prints the new prepared VM template name.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Require advanced cluster is enabled infraConfigFilePath: "" # (Optional/Preview) Specify the prepared secret configuration which can be added # or edited only during cluster creation preparedSecrets: # enable prepared credentials for the admin cluster; it is immutable enabled: false (Required) vCenter configuration vCenter: address: "" datacenter: "" cluster: "" Resource pool to use.
- The value you specify is relative to /.../ DATA CENTER /host/.../ VSPHERE CLUSTER /Resources/ If your resource pool is a direct child of /.../ DATA CENTER /host/.../ VSPHERE CLUSTER /Resources/ the value is the name of the resource pool.
- Example: vCenter: resourcePool: "resource-pool-1/resource-pool-2" vCenter.datastore Required if vCenter.storagePolicyName isn't specified Immutable String The name of a vSphere datastore for your admin cluster.
- Example: vCenter: resourcePool: "my-vsphere-cluster/Resources" If you want to use a resource pool that you have already created, set this to the relative path of your resource pool.

