---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.192Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cross-datacenter user clusters"
feature_slug: "cross-datacenter-user-clusters"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "cross"
  - "datacenter"
  - "user"
  - "clusters"
  - "can"
  - "run"
  - "different"
  - "vsphere"
---

# Cross-datacenter user clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User clusters can run in a different vSphere datacenter from the admin cluster.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, a user cluster can be deployed in a different vSphere datacenter than its admin cluster when the two clusters are created as separate vSphere clusters. Google’s create-user-cluster guidance explicitly states that these separate vSphere clusters may be in either the same data center or different data centers.

## Evidence Summary

The create-user-cluster documentation is the authoritative source for this feature and directly confirms cross-datacenter placement between admin and user clusters under a separate-vSphere-cluster setup.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- If your admin cluster and user cluster are in separate vSphere clusters, they can be in the same data center or different data centers.
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- If you want your admin and user clusters to use different kinds of load balancers, you must create user clusters using the gkectl command-line tool. loadBalancer.manualLB If you set loadbalancer.kind to "ManualLB" , fill in this section.
- Multiple network interfaces for Pods aren't supported when topology domains is enabled. storage.vSphereCSIDisabled : set this field to true to disable the deployment of vSphere CSI components The following fields are required: enableAdvancedCluster : set to true in the user cluster configuration file. network.ipMode.ipBlockFilePath : set to the full or relative path of the user cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- Example: antiAffinityGroups: enabled: true If this field is true , Google Distributed Cloud creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical ESXi hosts in your datacenter.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters with GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .
- This section is required in the admin cluster if you want to manage the lifecycle of user clusters using GKE On-Prem API clients . stackdriver.projectID Required for Logging and Monitoring Immutable String The ID of your fleet host project .

