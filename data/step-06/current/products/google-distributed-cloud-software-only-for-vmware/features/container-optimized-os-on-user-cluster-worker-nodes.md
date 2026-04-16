---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.216Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Container-Optimized OS on user cluster worker nodes"
feature_slug: "container-optimized-os-on-user-cluster-worker-nodes"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
keywords:
  - "container"
  - "optimized"
  - "os"
  - "user"
  - "cluster"
  - "worker"
  - "nodes"
  - "supports"
---

# Container-Optimized OS on user cluster worker nodes

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Supports running Container-Optimized OS on user cluster worker nodes.

## Extended Definition

This feature means a user cluster can use Container-Optimized OS as one of the OS image/runtime combinations for user-cluster nodes, documented as `cos containerd` in the supported `osImageType` values. In user clusters, node images are configured on node pools (for example via node pool settings and image type), so COS support applies to worker node instances in those pools. The documentation also notes that Ubuntu user-cluster node image type is no longer supported starting in version 1.13.0, indicating COS is one of the current supported OS image options.

## Evidence Summary

These pages provide supported user-cluster node image/runtime combinations (including `cos containerd`), describe node-pool image configuration for user clusters, and state Ubuntu user-cluster OS image support ended in version 1.13.0.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Create a node pool After the cluster is created, you need to create at least one node pool before deploying workloads. gcloud container vmware node-pools create NODE POOL NAME \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --image-type= IMAGE TYPE \ --boot-disk-size= BOOT DISK SIZE \ --cpus= vCPUS \ --memory= MEMORY \ --replicas= NODES \ --enable-load-balancer Replace the following: NODE POOL NAME : A name of your choice for the node pool.
- Example: --ingress-vip=10.251.134.80 The IP address for the ingress VIP must be in one of the MetalLB address pools. --static-ip-config-ip-blocks : Specify the default gateway, subnet mask, and a list of the static IP addresses for the worker nodes in the user cluster.
- INGRESS HTTPS NODE PORT : A nodePort value for HTTPS traffic to the ingress proxy (such as 30879 ). --static-ip-config-ip-blocks : Specify the default gateway, subnet mask, and a list of the static IP addresses for the worker nodes in the user cluster.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists Container-Optimized OS (cos) as a supported user-cluster node image type for containerd runtime.

Evidence snippets:
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- If enableWindowsDataplaneV2 is true , all Windows nodes in the user cluster use containerd.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-3`
- Final score: 188
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists Container-Optimized OS (COS) as a supported containerd OS image type for user cluster nodes.

Evidence snippets:
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- If enableWindowsDataplaneV2 is true , all Windows nodes in the user cluster use containerd.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.

