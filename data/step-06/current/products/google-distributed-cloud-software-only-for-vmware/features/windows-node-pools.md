---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.188Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows node pools"
feature_slug: "windows-node-pools"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
keywords:
  - "windows"
  - "node"
  - "pools"
  - "anthos"
  - "clusters"
  - "vmware"
---

# Windows node pools

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Windows node pools are supported on Anthos clusters on VMware; Windows node pools are supported on Anthos clusters on VMware.

## Extended Definition

Windows node pools on Google Distributed Cloud for VMware are Windows Server node pools in Anthos user clusters that are created and updated using a Windows VM template as the OS image source (with names like "gke-on-prem-windows-server-2019-VERSION").

## Evidence Summary

The cited pages document Windows node pool management via VM templates and cluster updates, and state that container runtime for Windows nodes is configured at cluster scope and applies to all Windows node pools.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: The content is centered on creating and configuring Windows node pools and gives practical requirements and restrictions relevant to this feature.

Evidence snippets:
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.
- Upgrade user cluster with Windows node pools The upgrade process for a user cluster with Windows node pools is similar to that for upgrading Linux-only user clusters, except that you must create a Windows VM template from a base VM template before upgrading.
- If an urgent security patch update is needed between Anthos patch releases, you can build a new VM template using the latest version, and then perform a rolling update for the existing Windows node pools to use the new template.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: STRONG
- Re-rank rationale: It describes Windows node pools directly, including how their container runtime is selected.

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.
- For example: user-cluster-1 Regardless of whether a user cluster has any Windows node pools, if the cluster has enableWindowsDataplaneV2 set to false , you will not be able to upgrade it to version 1.13.
- Example output: ubuntu-node-pool-1 ubuntu-node-pool-3 Windows All Windows node pools in a user cluster use the same container runtime.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-3`
- Final score: 167
- Re-rank relevance: STRONG
- Re-rank rationale: It directly states behavior for all Windows node pools in a user cluster, including how their container runtime is determined.

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.
- For example: user-cluster-1 Regardless of whether a user cluster has any Windows node pools, if the cluster has enableWindowsDataplaneV2 set to false , you will not be able to upgrade it to version 1.13.
- Example output: ubuntu-node-pool-1 ubuntu-node-pool-3 Windows All Windows node pools in a user cluster use the same container runtime.

