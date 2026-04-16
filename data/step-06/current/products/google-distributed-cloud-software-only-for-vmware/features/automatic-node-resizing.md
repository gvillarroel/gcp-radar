---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.035Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "automatic node resizing"
feature_slug: "automatic-node-resizing"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "automatic"
  - "node"
  - "resizing"
  - "adjusts"
  - "cpu"
  - "memory"
  - "allocated"
  - "control"
---

# automatic node resizing

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Automatic node resizing adjusts the CPU and memory allocated to control plane nodes based on workload demand.

## Extended Definition

Automatic node resizing in Google Distributed Cloud (software only) for VMware is an optional feature that automatically adjusts the vCPU and memory assigned to nodes. In user clusters, it is enabled with the `--enable-auto-resize` flag for control-plane nodes during cluster creation, while admin-cluster configuration documentation also includes a toggle to enable automatic resizing for add-on nodes. The cited docs define this as automatic resource adjustment rather than manual node re-provisioning.

## Evidence Summary

These pages confirm that auto-resize can be enabled for user-cluster control-plane nodes via a CLI flag and that automatic resizing means vCPU/memory changes, with additional admin-cluster configuration indicating a separate auto-resize setting for add-on nodes.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- For example, you may select 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. --enable-auto-resize : If you want to enable automatic resizing of the control-plane nodes for the user cluster, include --enable-auto-resize .
- You can also specify a datastore for the control-plane nodes and whether you want to enable automatic resizing for the control-plane nodes.
- Resizing means that the vCPU and memory resources assigned to a node are adjusted automatically.
- Resizing means that the vCPU and memory resources assigned to a node are adjusted automatically.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- If the template name doesn't match the osImage field value, update the osImage value to match the new generated VM template name and run the following command: gkectl update cluster Re-create the Windows node by running the following command: kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Wait for the controller to automatically recreate the node.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- Step 3: Verify the Active Domain joining for the Windows nodes On the AD domain controller VM, run the following command: PS C:\> Get-ADComputer -Filter 'Name -like "user-host-prefix "' DistinguishedName : CN=AD-VM-1,CN=Computers,DC=example,DC=org DNSHostName : ad-vm-1.example.org Enabled : True Name : AD-VM-1 ObjectClass : computer ObjectGUID : b3609717-d24b-4df6-bccb-26ca8e8b9eb0 SamAccountName : AD-VM-1$ SID : S-1-5-21-3236879623-1561052741-2808297733-1103 Step 4: Configure Group Managed Service Accounts (optional) Follow these instructions: Configure GMSA for Windows Pods and containers .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Example: adminMaster: cpus: 4 adminMaster.memoryMB Preview Optional Immutable Integer Prepopulated: 16384 Default: 16384 The number of mebibytes of memory for each control-plane node in the admin cluster.
- Example: adminMaster: memoryMB: 16384 adminMaster.replicas 1.28 and higher Required for new clusters Immutable Integer Possible values: 3 The number of control-plane nodes in the admin cluster.
- 1.16 and lower Optional Mutable Boolean Prepopulated: false Default: false Set this to true to enable automatic resizing of the add-on nodes in the admin cluster.

