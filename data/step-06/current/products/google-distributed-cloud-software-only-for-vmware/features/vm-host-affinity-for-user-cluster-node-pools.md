---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.088Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "VM-Host affinity for user cluster node pools"
feature_slug: "vm-host-affinity-for-user-cluster-node-pools"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "vm"
  - "host"
  - "affinity"
  - "user"
  - "cluster"
  - "node"
  - "pools"
  - "can"
---

# VM-Host affinity for user cluster node pools

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User cluster node pools can use VM-Host affinity; Anthos clusters on VMware adds preview support for VM-Host affinity in user cluster node pools.

## Extended Definition

VM-Host affinity in Google Distributed Cloud (software only) for VMware is a user cluster node-pool configuration feature where a worker node pool can be associated with one or more vSphere host groups using the `vsphere.hostgroups` field. The configuration examples show this as a cluster-level affinity mechanism at the node-pool scope, enabling placement of pool nodes onto specific host groups.

## Evidence Summary

The cited pages provide example user-cluster YAML and setup guidance showing that node pools are defined in the user cluster config and can include `vsphere.hostgroups`, which represents VM-Host Group affinity.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Configure VM-Host Group affinity \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: STRONG
- Re-rank rationale: The page provides a full user-cluster configuration example showing node pools bound to specific host groups, including replica and host-group settings required to enforce VM-Host affinity.

Evidence snippets:
- Example configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true replicas: 3 vsphere: hostgroups: - "hostgroup-1" labels: failuredomain: "failuredomain-1" - name: "worker-pool-2" replicas: 3 vsphere: hostgroups: - "hostgroup-2" labels: failuredomain: "failuredomain-2" ...
- Create a user cluster This section gives an example of how to create a user cluster that uses VM-Host Group affinity.
- As you fill in your user cluster configuration file: Specify two node pools for worker nodes.
- The static IP addresses for the three control-plane nodes are specified in the network.controlPlaneIPBlock section of the user cluster configuration file.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Look for LocalScriptPlugin in the log file, and check the related logs. - Build a new Windows VM template. - Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Considerations for Windows containers Some notable differences between Windows and Linux containers are: Version compatibility of Windows container images and the host/node OS images.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- Set the osImage and osImageType fields to create Windows node pools: osImage : Replace WINDOWS VM TEMPLATE NAME with the name of your prepared Windows VM template in step 1 , which should be in the same vCenter datastore specified in the user cluster configuration file. osImageType : Specify the OS image type to be windows . user-cluster.yaml nodePools: - name: windows-nodepool-1 cpus: 8 memoryMB: 16384 replicas: 3 bootDiskSizeGB: 100 osImage: WINDOWS VM TEMPLATE NAME osImageType: windows Note: Windows Server nodes require more resources than Linux nodes.
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- Clone the anthos-samples repository and change to the directory where the Terraform sample is located: git clone https://github.com/GoogleCloudPlatform/anthos-samples cd anthos-samples/anthos-onprem-terraform/avmw user cluster metallb Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars . project id = " FLEET HOST PROJECT ID " region = " REGION " admin cluster name = " ADMIN CLUSTER NAME " on prem version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "avmw-user-cluster-metallb" control plane node cpus = 4 control plane node memory = 8192 control plane node replicas = 3 control plane vip = " CONTROL PLANE VIP " ingress vip = " INGRESS VIP " lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.
- Create a node pool After the cluster is created, you need to create at least one node pool before deploying workloads. gcloud container vmware node-pools create NODE POOL NAME \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --image-type= IMAGE TYPE \ --boot-disk-size= BOOT DISK SIZE \ --cpus= vCPUS \ --memory= MEMORY \ --replicas= NODES \ --enable-load-balancer Replace the following: NODE POOL NAME : A name of your choice for the node pool.

