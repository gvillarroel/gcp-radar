---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.306Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Manual load balancing mode"
feature_slug: "manual-load-balancing-mode"
latest_feature_date: "2019-06-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/citrix-load-balance"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "manual"
  - "load"
  - "balancing"
  - "mode"
  - "lets"
  - "you"
  - "configure"
  - "l4"
---

# Manual load balancing mode

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Manual load balancing mode lets you configure an L4 load balancer instead of using the default F5 BIG-IP load balancer.

## Extended Definition

Manual load balancing mode is a selectable cluster load-balancing mode in Google Distributed Cloud (software only) for VMware (alongside integrated and bundled modes) that is used for manual configuration workflows, such as with Citrix load balancers. In user cluster configuration, manual mode is enabled by setting `loadBalancer.kind` to `"ManualLB"`, and the documentation states that `ManualLB` is the only multi-subnet (layer 3) load-balancing option available for this platform.

## Evidence Summary

These pages confirm the three load-balancing modes, show that manual mode is used for manual/Citrix integration, and document that `ManualLB` is the required and only multi-subnet layer-3 manual load-balancing option.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/citrix-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/citrix-load-balance)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Load balancing with Citrix \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/citrix-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/citrix-load-balance)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically a how-to guide for configuring a Citrix load balancer in Google Distributed Cloud (software only) for VMware and explicitly states manual load balancing mode usage and setup steps.

Evidence snippets:
- Steps common to all manual load balancing Before you configure your Citrix load balancer, perform the following steps, which are common to all manual load balancing configurations: Reserve IP addresses for nodes .
- Clusters can run with one of three load balancing modes: integrated, bundled, or manual.
- To use the Citrix load balancer, you use manual load balancing mode .
- Then you would create the following service group: ({user node 1, user node 2, user node 3}, TCP, 32001) To create a service group in the Citrix web interface, follow these steps: In the left pane, go to Traffic Management > Load Balancing > Service Groups .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Multiple network interfaces for Pods aren't supported when topology domains is enabled. storage.vSphereCSIDisabled : set this field to true to disable the deployment of vSphere CSI components The following fields are required: enableAdvancedCluster : set to true in the user cluster configuration file. network.ipMode.ipBlockFilePath : set to the full or relative path of the user cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.
- The following fields are required: enableAdvancedCluster : set to true . network.ipMode.ipBlockFilePath : set to the full or relative path of the admin cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.
- For more information, see Enabling manual load balancing mode . loadBalancer.f5BigIP.address 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Immutable String The address of your F5 BIG-IP load balancer.
- To enable new and advanced features, we recommend that you configure manual load balancing for your F5 BIG-IP load balancer.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- See Enabling manual load balancing mode for more information.
- See Enabling manual load balancing mode for more information.
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.
- For example: --metal-lb-config-address-pool 'pool=pool1,avoid-buggy-ips=True,manual-assign=True,addresses=10.251.134.80/32;192.168.1.0/26;192.168.1.2-192.168.1.3' CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.

