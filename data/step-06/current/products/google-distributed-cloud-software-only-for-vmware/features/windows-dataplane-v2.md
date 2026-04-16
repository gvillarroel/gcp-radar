---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.188Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows Dataplane V2"
feature_slug: "windows-dataplane-v2"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
keywords:
  - "windows"
  - "dataplane"
  - "v2"
  - "node"
  - "pools"
  - "can"
  - "use"
  - "network"
---

# Windows Dataplane V2

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Windows node pools can use Dataplane V2 for Windows network policy support; Windows node pools can use Dataplane V2 for Windows network policy support.

## Extended Definition

Windows Dataplane V2 in Google Distributed Cloud (software only) for VMware is a user-cluster feature used with Windows node pools, controlling Windows networking/runtime behavior for those nodes. It must be enabled in the user cluster configuration (for example, `enableDataplaneV2: true`, and `enableWindowsDataplaneV2: true` to set Windows nodes/containerd behavior), and Google support docs indicate it is enabled by default for new user clusters with Windows pools. The same documentation marks Windows Dataplane V2 as GA while also showing that Windows Server OS node pools are deprecated in v1.32 and not available in v1.33+, with broader Windows Server OS node pool support ending May 25, 2026.

## Evidence Summary

These official docs provide configuration requirements (`enableDataplaneV2` / `enableWindowsDataplaneV2`), default and behavioral notes for Windows node pools, and support/availability details for Windows Dataplane V2 across releases.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: The page states that Windows node pools require Dataplane V2 to be enabled and that it is enabled by default for new clusters, which is partial support for this feature.

Evidence snippets:
- Add the following line to your user cluster configuration file to enable Dataplane V2: enableDataplaneV2: true Add a Windows node pool to your nodePools section in the user cluster configuration file.
- Step 4: Add a Windows node pool to the user cluster configuration file Dataplane V2 must be enabled in your user cluster to use Windows node pools.
- A user cluster with Windows node pools must have the enabledataplanev2 field set to true in the user cluster configuration file.
- By default, Windows Dataplane V2 is enabled for the Windows node pools for new user clusters.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- Support for Windows Server OS node pools ends May 25, 2026.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- The gkectl diagnose snapshot --seed-config command captures information about Kubernetes and your nodes.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: STRONG
- Re-rank rationale: It directly references the `enableWindowsDataplaneV2` field and ties Windows runtime behavior to that setting.

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- For example: user-cluster-1 Regardless of whether a user cluster has any Windows node pools, if the cluster has enableWindowsDataplaneV2 set to false , you will not be able to upgrade it to version 1.13.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.
- The runtime for Windows nodes is determined by the value of enableWindowsDataplaneV2 , which is a field in the user cluster configuration'file.

