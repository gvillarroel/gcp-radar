---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.260Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Separate admin and user cluster configuration files"
feature_slug: "separate-admin-and-user-cluster-configuration-files"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "separate"
  - "admin"
  - "user"
  - "cluster"
  - "configuration"
  - "files"
  - "file"
  - "version"
---

# Separate admin and user cluster configuration files

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

A new configuration file version separates admin and user cluster configurations and commands.

## Extended Definition

Google Distributed Cloud (software only) for VMware documents an admin cluster configuration file model for versioned configs (for example, 1.28/1.29/1.30+), with templates generated via `gkectl create-config admin`. In 1.30+, the docs state that when `infraConfigFilePath` is set, corresponding changes must be made in both the admin cluster configuration file and the user cluster configuration file. This indicates configuration for admin and user clusters is handled in distinct files during deployment workflows.

## Evidence Summary

These official docs describe admin cluster configuration-file fields and generation commands, and the 1.30+ page explicitly references applying `infraConfigFilePath` changes across both admin and user cluster configuration files.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: WEAK
- Re-rank rationale: The page documents the admin cluster configuration file format and template but does not discuss how it is separated from or interacts with a user cluster configuration file.

Evidence snippets:
- If you add a path to infraConfigFilePath , you need to make the following changes to your admin cluster and user cluster configuration files.
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace the following: OUTPUT FILENAME : a path of your choice for the generated template.
- This document describes the fields in the admin cluster configuration file for versions 1.30 and higher Google Distributed Cloud.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: The page documents only the admin cluster configuration file and does not describe the user cluster configuration file or explicit separation of config file workflows.

Evidence snippets:
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- This document describes the fields in the admin cluster configuration file for version 1.28 of Google Distributed Cloud.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: The page is explicitly about the admin cluster configuration file, but it does not describe the separation of admin and user cluster configuration workflows.

Evidence snippets:
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- This document describes the fields in the admin cluster configuration file for version 1.29 of Google Distributed Cloud.
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.

