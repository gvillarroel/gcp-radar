---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.279Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere credential rotation"
feature_slug: "vsphere-credential-rotation"
latest_feature_date: "2020-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "vsphere"
  - "credential"
  - "rotation"
  - "enables"
  - "users"
  - "authenticate"
  - "solution"
  - "user"
---

# vSphere credential rotation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

VSphere credential rotation enables users to authenticate with Solution User Certificates.

## Extended Definition

The provided excerpts show that Google Distributed Cloud (software only) for VMware cluster configuration and troubleshooting documentation references credential-related fields (such as credential files for private registry access and credentials used in scripts), but they do not explicitly document a dedicated 'vSphere credential rotation' workflow. Based on this evidence, there is no clear, direct description of rotating vSphere credentials or using solution user certificates.

## Evidence Summary

These Google Cloud pages provide cluster configuration examples and credential field usage in VMware docs, but they do not supply direct evidence for a specific vSphere credential rotation feature.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- Flag Description --admin-users Grants you and another user full administrative rights on the cluster. --enable-control-plane-v2 Enables Controlplane V2, which is recommended and required in version 1.30 and higher. --control-plane-ip-block One IP address for the control plane node.
- Flag Description --admin-users Grants you and another user full administrative rights on the cluster. --enable-control-plane-v2 Enables Controlplane V2, which is recommended and required in version 1.30 and higher. --control-plane-ip-block One IP address for the control plane node.
- Flag Description --admin-users Grants you and another user full administrative rights on the cluster. --enable-control-plane-v2 Enables Controlplane V2, which is recommended and required in version 1.30 and higher. --control-plane-ip-block One IP address for the control plane node.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- It is recommended that you use a user account with the minimum permissions required for an Active Directory domain join, instead of using an Administrator user. (Optional) To avoid storing the password as cleartext in this script, place the password in a file on the VM template, let the script read from that password file, then delete the file after the domain join. $domain = "[DOMAIN NAME]" $password = "[PASSWORD]" ConvertTo-SecureString -asPlainText -Force $username = "$domain\[USERNAME]" $credential = New-Object System.Management.Automation.PSCredential($username,$password) Add-Computer -DomainName $domain -Credential $credential -restart –force Create a Windows VM template with a customized script: gkectl prepare windows --base-vm-template BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG --customized-script CUSTOMIZED SCRIPT PATH Replace BUNDLE PATH with the path to the bundle.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- To check this, get an SSH connection to the Windows VM and run the following command: ls "HKLM:\\Software\Cloudbase Solutions\Cloudbase-Init\id-ovf\" If you find UserDataPlugin: 1 in the output, that means the cloudbase-init has already executed that plugin, which will cause the startup script execution to be skipped, and windows node won't be bootstrapped at all.
- If qualified, users will: Download the latest patch version from Microsoft Build a new Windows VM template using this patch version following the steps here .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Example: proxy: noProxy: "10.151.222.0/24,my-host.example.local,10.151.2.1" privateRegistry A private container registry is a registry where access to container images is restricted to authenticated users.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.
- Multiple network interfaces for Pods aren't supported when topology domains is enabled. storage.vSphereCSIDisabled : set this field to true to disable the deployment of vSphere CSI components The following fields are required: enableAdvancedCluster : set to true in the user cluster configuration file. network.ipMode.ipBlockFilePath : set to the full or relative path of the user cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.

