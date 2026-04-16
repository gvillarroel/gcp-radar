---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.186Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster node pool autoscaling"
feature_slug: "user-cluster-node-pool-autoscaling"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler"
keywords:
  - "user"
  - "cluster"
  - "node"
  - "pool"
  - "autoscaling"
  - "pools"
  - "can"
  - "autoscale"
---

# User cluster node pool autoscaling

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User cluster node pools can autoscale.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, user cluster node pool autoscaling is configured per node pool in the user cluster configuration by including an autoscaling section with minReplicas and maxReplicas. This applies when creating a cluster, adding a new node pool, or updating an existing node pool, and autoscaling is enabled by updating the nodePool definition and applying the change with `gkectl update cluster`. When enabling autoscaling on an existing node pool, you cannot change the replicas value in that same operation.

## Evidence Summary

The cluster autoscaler documentation provides direct configuration examples and operational steps showing autoscaling on user cluster node pools and the specific enablement/update constraint on replicas.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)

## Supporting Pages

### "Enable cluster autoscaling \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)
- Source ID: `site-docs-reference`
- Final score: 259
- Re-rank relevance: STRONG
- Re-rank rationale: It defines autoscaling behavior for user-cluster node pools, including node-pool configuration, scaling bounds, and scheduler constraints.

Evidence snippets:
- For example: nodePools: - name: my-new-node-pool … replicas: 3 ... autoscaling: minReplicas: 2 maxReplicas: 6 Update the cluster: gkectl update cluster --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Enable autoscaling for an existing node pool To enable autoscaling for a node pool in an existing cluster: Edit a specific nodePool in the user cluster configuration file, and include the autoscaling section.
- Set the values of minReplicas and maxReplicas as desired. nodePools: - name: my-existing-node-pool … replicas: 3 ... autoscaling: minReplicas: 1 maxReplicas: 5 Update the cluster: gkectl update cluster --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Note: You cannot modify the value of replicas for an existing node pool while enabling autoscaling.
- Add a node pool with autoscaling To add a node pool with autoscaling to an existing cluster: Edit the user cluster configuration file to add a new node pool, and include an autoscaling section for the pool.
- Create a user cluster with autoscaling To create a user cluster with autoscaling enabled for a node pool, fill in the autoscaling section for the node pool in the user cluster configuration file.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Clone the anthos-samples repository and change to the directory where the Terraform sample is located: git clone https://github.com/GoogleCloudPlatform/anthos-samples cd anthos-samples/anthos-onprem-terraform/avmw user cluster metallb Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars . project id = " FLEET HOST PROJECT ID " region = " REGION " admin cluster name = " ADMIN CLUSTER NAME " on prem version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "avmw-user-cluster-metallb" control plane node cpus = 4 control plane node memory = 8192 control plane node replicas = 3 control plane vip = " CONTROL PLANE VIP " ingress vip = " INGRESS VIP " lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 - netmask: 255.255.255.0 gateway: 100.115.223.254 ips: - ip: 100.115.222.205 hostname: cp-1 isControlPlane: true - ip: 100.115.222.206 hostname: cp-2 isControlPlane: true - ip: 100.115.222.207 hostname: cp-3 isControlPlane: true user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableAdvancedCluster: true enableControlplaneV2: true enableDataplaneV2: true network: ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 loadBalancer: vips: controlPlaneVIP: "100.115.222.200" ingressVIP: "172.16.21.30" kind: "ManualLB" manualLB: ingressHTTPNodePort: 32527 ingressHTTPSNodePort: 30139 controlPlaneNodePort: 30968 masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool1" cpus: 4 memoryMB: 8192 replicas: 3 topologyDomains: - "domain1" antiAffinityGroups: enabled: false gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Fill in the masterNode.topologyDomains field with the name of the topology domain that you want the control plane nodes to be in. nodePools A node pool is a group of worker nodes in a cluster that all have the same configuration.
- Multiple network interfaces for Pods aren't supported with topology domains. storage Set storage.vSphereCSIDisabled to true to disable the deployment of vSphere CSI components. masterNode If you want to specify CPU and memory for the control-plane nodes of the user cluster, fill in the cpus and memoryMB fields in the masterNode section.
- The control-plane VIP is in the same VLAN as the control-plane nodes, and the ingress VIP is in the same VLAN as the worker nodes Fill in your IP block file Copy the template for the IP block file to the file in the directory that you specified in the network.ipMode.ipBlockFilePath field in the user cluster configuration file.

