---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.184Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Ubuntu 20.04 support"
feature_slug: "ubuntu-20-04-support"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "ubuntu"
  - "20"
  - "04"
  - "clusters"
  - "can"
  - "upgraded"
  - "containerd"
---

# Ubuntu 20.04 support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can be upgraded to Ubuntu 20.04 and containerd 1.5.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, clusters can be configured to run Ubuntu-based nodes with the containerd runtime by setting `osImageType: "ubuntu containerd"` in user or admin cluster configuration. The documentation also supports upgrading/updating user cluster node pools to this setting and notes deprecation milestones: starting in version 1.12, new clusters cannot be created with the Ubuntu OS image type, and from version 1.13 that Ubuntu OS image type is no longer supported. The provided excerpts do not explicitly confirm Ubuntu 20.04 specifically, so direct evidence for 20.04-only support is not present.

## Evidence Summary

The cited pages provide official Google Distributed Cloud VMware guidance on `ubuntu containerd` configuration and its lifecycle constraints, but they do not identify a specific Ubuntu release version (such as 20.04).

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.
- Update Linux node pools to use containerd For each node pool in the user cluster configuration file, set osImageType ubuntu containerd or cos .
- Starting in version 1.12.0, you can no longer create new clusters that use the ubuntu OS image type.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.
- Update Linux node pools to use containerd For each node pool in the user cluster configuration file, set osImageType ubuntu containerd or cos .
- Starting in version 1.12.0, you can no longer create new clusters that use the ubuntu OS image type.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Note the following limitation with advanced clusters: Version 1.31: if the enableAdvancedCluster field is true , only ubuntu-cgroupv2 and ubuntu containerd are supported on advanced clusters.
- Possible values are: GeneratedKey mode: GeneratedKey # GeneratedKey Secrets Encryption config generatedKey: # # key version # keyVersion: 1 # # disable secrets encryption # disabled: false (Optional) Specify the type of OS image; available options can be set to "ubuntu containerd" "cos" "ubuntu cgv2" or "cos cgv2".
- Example: secretsEncryption: generatedKey: disabled: false osImageType Optional Mutable String Possible values: "ubuntu containerd", "cos", "ubuntu cgv2", "cos cgv2" Prepopulated: "ubuntu cgv2" Default: "ubuntu containerd" The type of OS image to run on your admin cluster nodes.
- Although we still support Seesaw for non-HA admin clusters that have been upgraded, we recommend that you migrate to MetalLB . antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.

