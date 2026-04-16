---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.274Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl proxy configuration from config.yaml"
feature_slug: "gkectl-proxy-configuration-from-config-yaml"
latest_feature_date: "2020-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "gkectl"
  - "proxy"
  - "configuration"
  - "config"
  - "yaml"
  - "automatically"
  - "uses"
  - "url"
---

# gkectl proxy configuration from config.yaml

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl automatically uses the proxy URL from config.yaml to configure the admin workstation proxy.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the admin workstation configuration file (`admin-ws-config.yaml`) includes a `proxyUrl` field in its documented sample content, including within the `adminWorkstation` section, so proxy settings are expressed through this config file. The docs show this file is created as an admin workstation configuration artifact (for example by `gkeadm create config`), and related tooling for this domain includes `gkectl`, but the excerpt does not explicitly state that `gkectl` automatically reads and applies that URL. Therefore, the configuration-by-`proxyUrl` mechanism is evidenced, while fully automatic application behavior is not directly confirmed in the provided text.

## Evidence Summary

The admin workstation configuration guide provides sample YAML showing `proxyUrl` in the config file format, while the second page confirms `gkectl` as part of the same product toolset but does not add proxy-specific behavior details.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### Admin workstation configuration file | Google Distributed Cloud (software only) for VMware | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- Source ID: `feature-recovery-http`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- When you run gkeadm create config , it creates a template for an admin workstation configuration file named admin-ws-config.yaml .
- If you omit this flag, gkeadm names the file admin-ws-config.yaml and puts it in the current directory.
- Admin workstation configuration file | Google Distributed Cloud (software only) for VMware | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Distributed Cloud Documentation GDC for VMware Start free Overview Guides Technology areas More Overview Guides Cross-product tools More Console Discover Product overview Advanced clusters Overview Update or upgrade a cluster to an advanced cluster Upgrade a version 1.32 non-advanced cluster and keep it as non-advanced Get started Set up minimal infrastructure Create basic clusters Install Overview Choose a tool to manage cluster lifecycle Set up on-prem infrastructure vSphere vSphere requirements CPU, RAM, and storage requirements CPU, RAM, and storage requirements (kubeception) vSphere feature incompatibility Optional: Manually import OVAs to vSphere Load balancing Overview Bundled load balancing with MetalLB Manual load balancing Manual load balancing with Citrix Disable bundled ingres Manual load balancing with manual F5 BIG-IP Plan your IP addresses Plan your IP addresses (kubeception) Proxy and firewall rules Scalability limits Connect to Google Set up Google Cloud resources Install the gcloud CLI Create Cloud projects Create service accounts Configure a private container registry Use Artifact Registry as a private registry for workload images Set up topology domains Create clusters Download gkeadm Create an admin workstation Admin cluster Create an admin cluster Create an admin cluster for use in topology domains User cluster Create a user cluster Create a user cluster for use in topology domains Deploy workloads Deploy an application Create a Service and an Ingress CPU and RAM for workloads Update and upgrade Update cluster configuration Upgrade a cluster Upgrade overview Upgrade best practices Run the pre-upgrade tool Upgrade a cluster Upgrade node pools Skip a version when upgrading node pools Migrate clusters to recommended features Version 1.30 and higher Plan cluster migration to recommended features Migrate a user cluster to recommended features Migrate an admin cluster to recommended features Manual load balancing with F5 BIG-IP and legacy Google-provided controllers Versions 1.29 and lower Migrate Seesaw to MetalLB Migrate configuration settings for your F5 BIG-IP load balancer Migrate to an HA admin cluster Migrate to Controlplane V2 Manual load balancing with F5 BIG-IP and legacy Google-provided controllers Manage clusters Connect to a cluster Manage a cluster in the Google Cloud console Configure a user cluster to be managed by the GKE On-Prem API Adjust cluster size Resize a user cluster Enable auto scaling Back up a cluster Back up and restore a user cluster Back up and restore an admin cluster Back up and restore an admin cluster with gkectl Back up and restore advanced clusters with gkectl Replace a failed etcd replica Delete a cluster Delete a user cluster Delete an admin cluster Manage cluster nodes Node images Manage node IP addresses Create and manage node pools Configure VM-Host affinity Create and manage Windows Server OS node pools Set the container runtime Use SSH to connect to a cluster node Configure node auto repair Configure node auto resizing Resize the control-plane node for a user cluster Control scheduling with taints and tolerations Configure node pool update policy Track VMs using vSphere tags Configure PDB violation timeout Manage a cluster network Remove static IP addresses Configure cluster DNS Configure an egress NAT gateway Multiple network interfaces for Pods Manage storage Overview Use the vSphere CSI driver Install a CSI driver Set the default storage class Use the StatefulSet CSI Migration Tool Configure a storage policy Storage migration with SPBM Migrate a datastore to SPBM Restore a volume from a snapshot Manage a private registry Use Config Sync with a private registry Log and Monitor Overview Configure logging and monitoring Create custom dashboards for monitoring Enable application logging and monitoring Enable user-defined custom metrics for Horizontal Pod autoscaling Log network policy events Create alerting policies Audit logging Cloud API audit logging information Configure Kubernetes audit logs Kubernetes Metadata API audit logging information View Anthos metrics Use predefined dashboards Secure and control access Overview RBAC permissions for system components Harden your cluster Manage user identity Set up Binary Authorization policy enforcement Configure prepared credentials for an admin cluster Configure prepared credentials for user clusters Enable Kubelet read-only port Enable encryption of Secrets Enable always-on secrets encryption Rotate keys and credentials Update cluster credentials Rotate service account keys Rotate user cluster CA certificates Rotate admin cluster CA certificates Rotate KSA signing keys Troubleshoot Cluster diagnosis Cluster health checks If vCenter Server is down Recover and repair High availability and disaster recovery concepts Repair the admin cluster's control-plane VM Create diagnostic snapshots when advanced cluster isn't enabled Create diagnostic snapshots when advanced cluster is enabled Failure modes and recovery Troubleshooting guides Authentication Cluster creation or upgrade Clusters enrolled in the GKE On-prem API Cluster updates Controller manager etcd Kubernetes API server Networking NFS + DataPlane v2 Nodes Observability Resizing Resource contention Scheduler Storage Webhooks About errors Known issues Support Reference Configuration files Overview Generate configuration files from a cluster Admin workstation configuration file Admin cluster configuration file 1.30 and higher admin cluster 1.29 admin cluster 1.28 admin cluster User cluster configuration file 1.30 and higher user cluster 1.29 user cluster 1.28 user cluster Earlier versions of cluster configuration files Specify vSphere folders in configuration files IP block file Credentials file Secrets configuration file vSphere infrastructure configuration file vCenter Server Determine your vCenter server address Get your vCenter CA certificate Update vCenter certificate Prepare for a vCenter upgrade GKE On-Prem API Versions and releases Release notes Versioning Security bulletins Vulnerability fixes Downloads Deprecations Tools gkeadm gkectl Preflight checks CIS benchmark compliance CIS Kubernetes Benchmark CIS Ubuntu Benchmark CIS Container-Optimized OS Benchmark Legal: Export compliance Supported regions for the GKE On-Prem API Detect removed Kubernetes APIs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Admin workstation configuration file Stay organized with collections Save and categorize content based on your preferences.
- Example of a completed configuration file Here is an example of a completed admin workstation configuration file: gcp: componentAccessServiceAccountKeyPath: "my-key-folder/component-access-key.json" vCenter: credentials: address: "203.0.113.1" username: "administrator.vsphere.local" password: "#STyZ2T#Ko2o" datacenter: "MY-DATACENTER" datastore: "MY-DATASTORE" cluster: "MY-CLUSTER" network: "MY-VM-NETWORK" resourcePool: "MY-POOL" caCertPath: "/usr/local/google/home/me/certs/the-root.cert" proxyUrl: "" adminWorkstation: name: "my-admin-workstation" cpus: 4 memoryMB: 8192 diskGB: 50 dataDiskName: "gke-on-prem-admin-workstation-data-disk/gke-admin-ws-200617-113711-data-disk.vmdk" dataDiskMB: 512 network: ipAllocationMode: "static" hostConfig: ip: "172.16.5.1" gateway: "172.16.6.254" netmask: "255.255.248.0" dns: - "172.16.255.1" - "172.16.255.2 proxyUrl: "" ntpServer: "216.239.35.0" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The command for getting the password from that secret is: kubectl get secret windows - node - password - n [ USER CLUSTER NAME ] -- kubeconfig admin - kubeconfig . yaml - o jsonpath = {. data . } base64 - d You can also use get the password using the vCenter user interface.
- For example, the IP addresses in the hostconfig.yaml file might already be in use by existing nodes in your user cluster.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- Set the osImage and osImageType fields to create Windows node pools: osImage : Replace WINDOWS VM TEMPLATE NAME with the name of your prepared Windows VM template in step 1 , which should be in the same vCenter datastore specified in the user cluster configuration file. osImageType : Specify the OS image type to be windows . user-cluster.yaml nodePools: - name: windows-nodepool-1 cpus: 8 memoryMB: 16384 replicas: 3 bootDiskSizeGB: 100 osImage: WINDOWS VM TEMPLATE NAME osImageType: windows Note: Windows Server nodes require more resources than Linux nodes.

