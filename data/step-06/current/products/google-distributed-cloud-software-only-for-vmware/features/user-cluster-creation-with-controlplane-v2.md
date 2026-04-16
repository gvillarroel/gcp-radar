---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.137Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster creation with Controlplane V2"
feature_slug: "user-cluster-creation-with-controlplane-v2"
latest_feature_date: "2022-12-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains"
keywords:
  - "user"
  - "cluster"
  - "creation"
  - "controlplane"
  - "v2"
  - "clusters"
  - "can"
  - "created"
---

# User cluster creation with Controlplane V2

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User clusters can be created with Controlplane V2 enabled.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, creating a user cluster is done through a user-cluster configuration used by the supported creation workflow, and Controlplane V2 is enabled by setting `enableControlplaneV2: true`. Documentation also states that for user clusters at version 1.30 and higher, Controlplane V2 is required.

## Evidence Summary

The cited Google Cloud docs explicitly link user-cluster creation to the `enableControlplaneV2` setting and require it for version 1.30+ user clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- For more information about possible errors and how to fix them, see Troubleshoot user cluster creation in the Google Cloud console . gcloud CLI You use the following command to create a user cluster: gcloud container vmware clusters create After creating the cluster, you need to create at least one node pool using the following command: gcloud container vmware node-pools create Most of the flags for creating the cluster and the node pool correspond to the fields in the user cluster configuration file .
- The output of the gcloud container vmware clusters query-version-config command is similar to the following: versions: - isInstalled: true version: 1.28.800-gke.109 - version: 1.29.0-gke.1456 - version: 1.29.100-gke.248 - version: 1.29.200-gke.245 - version: 1.29.300-gke.184 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.
- If you set enableAdvancedCluster to false , cluster creation fails. enableControlplaneV2 To create a user cluster that has Controlplane V2 enabled, set enableControlplaneV2 to true .
- Optional: Enable advanced cluster By default in version 1.32 and higher, user clusters created using Terraform don't have advanced cluster enabled.

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- For example, 1.34.200-gke.68 . enableAdvancedCluster Set enableAdvancedCluster to true . enableControlplaneV2 Controlplane V2 is required for all 1.30 and higher user clusters.
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 - netmask: 255.255.255.0 gateway: 100.115.223.254 ips: - ip: 100.115.222.205 hostname: cp-1 isControlPlane: true - ip: 100.115.222.206 hostname: cp-2 isControlPlane: true - ip: 100.115.222.207 hostname: cp-3 isControlPlane: true user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableAdvancedCluster: true enableControlplaneV2: true enableDataplaneV2: true network: ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 loadBalancer: vips: controlPlaneVIP: "100.115.222.200" ingressVIP: "172.16.21.30" kind: "ManualLB" manualLB: ingressHTTPNodePort: 32527 ingressHTTPSNodePort: 30139 controlPlaneNodePort: 30968 masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool1" cpus: 4 memoryMB: 8192 replicas: 3 topologyDomains: - "domain1" antiAffinityGroups: enabled: false gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Although the Google Cloud console, the Google Cloud CLI, and Terraform aren't supported for clusters using topology domains, you can optionally enroll the cluster in the GKE On-Prem API when it is created.
- When Controlplane V2 is enabled, the control plane for the user cluster runs on nodes in the user cluster itself. enableDataplaneV2 Set enableDataplaneV2 to true . vCenter Remove this entire section.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters with GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .
- This section is required in the admin cluster if you want to manage the lifecycle of user clusters using GKE On-Prem API clients . stackdriver.projectID Required for Logging and Monitoring Immutable String The ID of your fleet host project .

