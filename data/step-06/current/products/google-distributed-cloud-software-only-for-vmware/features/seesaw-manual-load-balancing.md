---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.300Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Seesaw manual load balancing"
feature_slug: "seesaw-manual-load-balancing"
latest_feature_date: "2019-08-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "seesaw"
  - "manual"
  - "load"
  - "balancing"
---

# Seesaw manual load balancing

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Seesaw is supported for manual load balancing.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Seesaw is a supported cluster load balancer type (`loadBalancer.kind` can be set to `Seesaw`). The documentation also states that when using Seesaw, administrators are advised to use manual load balancing (or disable Dataplane IP Learning), while manual load balancing itself is configured by setting the load balancer kind to `ManualLB` and filling in the `loadBalancer.manualLB` configuration.

## Evidence Summary

These pages document supported load balancer kinds for GDC for VMware (including Seesaw), define manual load balancing guidance, and describe how manual load balancing is enabled via `ManualLB` configuration.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Bundled load balancing with MetalLB \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- We recommend that you use manual load balancing , or disable Dataplane IP Learning when using Seesaw or MetalLB as your load balancer.
- For example: loadBalancer: metalLB: addressPools: - name: "my-address-pool-2" addresses: - "192.0.2.73-192.0.2.80" manualAssign: true Avoiding buggy IP addresses If you set the avoidBuggyIPs field of an address pool to true , the MetalLB controller will not use addresses from the pool that end in .0 or .255.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Bundled load balancing with MetalLB Stay organized with collections Save and categorize content based on your preferences.
- Cisco Application Centric Infrastructure (ACI) with Dataplane IP Learning is incompatible with Seesaw and MetalLB load balancers.

### "Overview of load balancing for Google Distributed Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Seesaw is mentioned only as a special-case admin-cluster exception, with no detail on manual load balancing configuration or support model.

Evidence snippets:
- Node IP addresses If you choose MetalLB as your load balancer, then you can either use static IP addresses for your cluster nodes, or you can have your cluster nodes get their IP addresses from a DHCP server If you choose a manual load-balancing option, then you must use static IP addresses for your cluster nodes.
- These are the available options: MetalLB bundled Manual load balancing for any third-party load balancer, such as F5 BIG-IP Citrix When you create user clusters using the Google Cloud console, the gcloud CLI, or Terraform, the kind of load balancer for the admin cluster and its user clusters must be the same.
- Manually configured load balancer If you have chosen a manual load balancing option, developers can follow these steps to expose a Service to external clients: Create a Service of type NodePort.
- Manual load balancing in general You can use any load balancer of your choice as long as you set it up manually.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "F5BigIP" "Seesaw" "ManualLB" or "MetalLB".
- To enable new and advanced features, we recommend that you configure manual load balancing for your F5 BIG-IP load balancer.
- To enable manual load balancing, set loadbalancer.kind to "ManualLB" and fill in the loadBalancer.manualLB section.
- For more information, see Enabling manual load balancing mode .

