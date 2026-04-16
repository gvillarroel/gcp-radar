---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.187Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows CSI driver support"
feature_slug: "windows-csi-driver-support"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
keywords:
  - "windows"
  - "csi"
  - "driver"
  - "nodes"
  - "can"
  - "use"
  - "your"
  - "choice"
---

# Windows CSI driver support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Windows nodes can use a CSI driver of your choice, such as the SMB CSI driver.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Windows CSI driver support means that on Windows Server OS node pools, users can install and run a CSI driver of their choice, with the documentation explicitly citing the SMB CSI driver as an example. The feature is part of the Windows node pool functionality and is therefore affected by lifecycle changes for Windows Server OS node pools, which the support matrix notes as deprecated in version 1.32 and unavailable from 1.33 onward.

## Evidence Summary

The Windows Server OS node pool guide confirms user-chosen Windows CSI driver usage, while the support page confirms Windows node pool availability status and the deprecation/removal timeline for Windows Server OS node pools.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- You can install and use a Windows CSI driver of your choice, such as the SMB CSI driver .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Create a node pool After the cluster is created, you need to create at least one node pool before deploying workloads. gcloud container vmware node-pools create NODE POOL NAME \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --image-type= IMAGE TYPE \ --boot-disk-size= BOOT DISK SIZE \ --cpus= vCPUS \ --memory= MEMORY \ --replicas= NODES \ --enable-load-balancer Replace the following: NODE POOL NAME : A name of your choice for the node pool.
- This field specifies whether Google Distributed Cloud creates Distributed Resource Scheduler (DRS) anti-affinity rules for your worker nodes, causing them to be spread across at least three physical hosts in your data center. stackdriver If you want to enable Cloud Logging and Cloud Monitoring for your cluster, fill in the stackdriver section.
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.

