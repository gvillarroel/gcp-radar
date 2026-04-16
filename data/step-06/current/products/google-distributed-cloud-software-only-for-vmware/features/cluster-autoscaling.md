---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.203Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cluster autoscaling"
feature_slug: "cluster-autoscaling"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler"
keywords:
  - "cluster"
  - "autoscaling"
  - "automatically"
  - "adds"
  - "removes"
  - "node"
  - "pool"
  - "nodes"
---

# Cluster autoscaling

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Cluster autoscaling automatically adds or removes node pool nodes based on workload demand.

## Extended Definition

Cluster autoscaling in Google Distributed Cloud (software only) for VMware is a node-pool feature that automatically increases or decreases node count based on workload demand. The cluster autoscaler monitors pod scheduling and node status, adding nodes when pods are unschedulable due to insufficient nodes (up to a configured maximum) and removing underutilized nodes when pods can run on fewer nodes (down to a configured minimum), using pod resource requests rather than actual resource utilization.

## Evidence Summary

This official page defines cluster autoscaling behavior, including automatic scale-up/scale-down actions tied to pod demand, unschedulable pods, node utilization, and node pool minimum/maximum boundaries.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)

## Supporting Pages

### "Enable cluster autoscaling \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically a cluster autoscaler guide that explains when nodes are added or removed, min/max node settings, and required workload assumptions.

Evidence snippets:
- It periodically checks the status of Pods and nodes, and takes action: If Pods are unschedulable because there are not enough nodes in the pool, the cluster autoscaler adds nodes, up to the specified maximum.
- The cluster autoscaler increases or decreases the number of nodes in the pool automatically, based on the resource requests (rather than actual resource utilization) of Pods running on the nodes.
- If nodes are under-utilized, and all Pods could be scheduled with fewer nodes in the pool, the cluster autoscaler removes nodes, down to the specified minimum.
- Cluster autoscaling increases or decreases the number of nodes in a node pool based on the demands of your workloads.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- Set the osImage and osImageType fields to create Windows node pools: osImage : Replace WINDOWS VM TEMPLATE NAME with the name of your prepared Windows VM template in step 1 , which should be in the same vCenter datastore specified in the user cluster configuration file. osImageType : Specify the OS image type to be windows . user-cluster.yaml nodePools: - name: windows-nodepool-1 cpus: 8 memoryMB: 16384 replicas: 3 bootDiskSizeGB: 100 osImage: WINDOWS VM TEMPLATE NAME osImageType: windows Note: Windows Server nodes require more resources than Linux nodes.
- Windows nodes having IP address conflicts This is a known issue that happens very rarely, if you encounter this during Windows node pool creation, you can mitigate this following the steps: If you are using IPAM mode, you can manually remove the VMs that having IP conflicts from vCenter, new VMs will be created automatically which should have correct IP allocations.
- Before you create, in your user cluster, a node pool that has Windows Server OS nodes, make sure you meet these requirements: An admin cluster must already be in place before you can create a Windows node pool, because a Windows node pool is only supported in the user cluster.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- For example, you may enter 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- Create a node pool After the cluster is created, you need to create at least one node pool before deploying workloads. gcloud container vmware node-pools create NODE POOL NAME \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --image-type= IMAGE TYPE \ --boot-disk-size= BOOT DISK SIZE \ --cpus= vCPUS \ --memory= MEMORY \ --replicas= NODES \ --enable-load-balancer Replace the following: NODE POOL NAME : A name of your choice for the node pool.
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.

