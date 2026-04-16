---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.162Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "MetalLB"
feature_slug: "metallb"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "metallb"
  - "generally"
  - "available"
  - "bundled"
  - "software"
  - "load"
  - "balancer"
  - "alongside"
---

# MetalLB

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

MetalLB is generally available as a bundled software load balancer alongside Seesaw.

## Extended Definition

MetalLB is a bundled load balancer option in Google Distributed Cloud (software only) for VMware, available as a configured load-balancing mode for admin and user clusters. It is configured through cluster configuration (including Terraform examples) with address pools and node IP settings, then used to provide external access for Kubernetes `Service` resources of type `LoadBalancer` by assigning an address from that pool. The deployment supports node IP assignment via static IPs or DHCP, depending on configuration.

## Evidence Summary

The cited pages document MetalLB as the bundled Google Distributed Cloud option, cluster-level configuration requirements, supported node IP modes, and automatic external IP assignment for `LoadBalancer` services from configured address pools.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Bundled load balancing with MetalLB \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents how MetalLB is deployed and configured in Google Distributed Cloud for VMware.

Evidence snippets:
- MetalLB will be deployed on the nodes in this node pool. enableControlplaneV2: true ... network: hostConfig: ... ipMode: type: "static" ipBlockFilePath: "config-folder/user-cluster-ipblock.yaml" ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.40.1" ips: - ip: "172.16.40.21" hostname: "user-cp" loadBalancer: kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.40.101-172.16.40.112 avoidBuggyIPs: true ... vips: controlPlaneVIP: "172.16.20.100" ingressVIP: "172.16.40.101" ... nodePools: - name: "node-pool-1" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true The configuration in the preceding example specifies a set of addresses available for Services.
- This document shows how to configure Google Distributed Cloud to use bundled load balancing with the MetalLB load balancer .
- In this example, the admin cluster and user cluster are on two separate VLANs, and each cluster is in a separate subnet: Cluster Subnet Admin cluster 172.16.20.0/24 User cluster 172.16.40.0/24 admin-cluster.yaml The following portion of an admin cluster configuration file shows the configuration seen in the preceding diagram of: High availability control plane MetalLB load balancer VIP on MetalLB for Kubernetes API server of the admin cluster network: ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.20.1" ips: - ip: "172.16.20.50" hostname: "admin-cp-1" - ip: "172.16.20.51" hostname: "admin-cp-2" - ip: "172.16.20.52" hostname: "admin-cp-3" loadBalancer: kind: "MetalLB" ... vips: controlPlaneVIP: "172.16.20.100" ... adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 user-cluster.yaml The following portion of a user cluster configuration file shows the configuration of: Address pool for the MetalLB controller to choose from and assign to Services of type LoadBalancer .
- For example: loadBalancer: metalLB: addressPools: - name: "my-address-pool-1" addresses: - "192.0.2.0/24" avoidBuggyIPs: true Create a Service of type LoadBalancer Here are two manifests: one for a Deployment and one for a Service: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment spec: selector: matchLabels: greeting: hello replicas: 3 template: metadata: labels: greeting: hello spec: containers: - name: hello image: gcr.io/google-samples/hello-app:2.0 --- apiVersion: v1 kind: Service metadata: name: my-service spec: type: LoadBalancer selector: greeting: hello ports: - name: metal-lb-example-port protocol: TCP port: 60000 targetPort: 8080 Notice that the Service manifest does not specify an external IP address.

### "Overview of load balancing for Google Distributed Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: It identifies MetalLB as a supported load balancing option and explains its core behavior, but does not state lifecycle status such as GA.

Evidence snippets:
- These are the available options: MetalLB bundled Manual load balancing for any third-party load balancer, such as F5 BIG-IP Citrix When you create user clusters using the Google Cloud console, the gcloud CLI, or Terraform, the kind of load balancer for the admin cluster and its user clusters must be the same.
- MetalLB The MetalLB load balancer is bundled with Google Distributed Cloud and is especially easy to configure.
- Node IP addresses If you choose MetalLB as your load balancer, then you can either use static IP addresses for your cluster nodes, or you can have your cluster nodes get their IP addresses from a DHCP server If you choose a manual load-balancing option, then you must use static IP addresses for your cluster nodes.
- When a developer creates a Service of type LoadBalancer , the MetalLB controller chooses an address from a pool and assigns the address to the Service.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Set variables in terraform.tfvars The sample provides an example variables file to pass in to main.tf , which shows how to configure the bundled MetalLB load balancer and enable your cluster nodes to get their IP addresses from a DHCP server that you provide.
- Example You can use the following basic configuration sample to create a user cluster with the bundled MetalLB load balancer and one node pool using the Google provider for Terraform.
- MetalLB & DHCP This example shows how to create a user cluster with the bundled MetalLB load balancer and using your DHCP server to get IP addresses for your cluster worker nodes.
- MetalLB & static IPs This example shows how to create a user cluster with the bundled MetalLB load balancer and assigning static IP addresses to your cluster worker nodes.

