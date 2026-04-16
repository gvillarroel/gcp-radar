---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.194Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows Flannel CNI support"
feature_slug: "windows-flannel-cni-support"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
keywords:
  - "windows"
  - "flannel"
  - "cni"
  - "enhanced"
  - "node"
  - "pools"
---

# Windows Flannel CNI support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Enhanced Flannel CNI is supported for Windows node pools.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Windows Server OS node pools are created and managed by providing a prepared Windows VM template and configuring the node pool with `osImageType: windows` in `user-cluster.yaml`, along with required Windows-specific image preparation in a private registry for operation. However, the provided excerpts do not explicitly document the underlying CNI plugin type, so explicit confirmation of "Enhanced Flannel CNI" support for Windows node pools is not directly evidenced here.

## Evidence Summary

The cited pages provide operational details for Windows node pools (creation, image/template setup, and upgrade limitations) but do not directly state Flannel CNI support.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Set the osImage and osImageType fields to create Windows node pools: osImage : Replace WINDOWS VM TEMPLATE NAME with the name of your prepared Windows VM template in step 1 , which should be in the same vCenter datastore specified in the user cluster configuration file. osImageType : Specify the OS image type to be windows . user-cluster.yaml nodePools: - name: windows-nodepool-1 cpus: 8 memoryMB: 16384 replicas: 3 bootDiskSizeGB: 100 osImage: WINDOWS VM TEMPLATE NAME osImageType: windows Note: Windows Server nodes require more resources than Linux nodes.
- Look for LocalScriptPlugin in the log file, and check the related logs. - Build a new Windows VM template. - Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Considerations for Windows containers Some notable differences between Windows and Linux containers are: Version compatibility of Windows container images and the host/node OS images.
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Upgrade the control plane and the node pools: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG FILE If you don't have any other user clusters to upgrade, remove the bundles from your admin workstation to save space: rm /var/lib/gke/bundles/gke-onprem-vsphere- .tgz What's next Creating and managing node pools Configure node pool update policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Upgrade the control plane and the node pools: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG FILE If you don't have any other user clusters to upgrade, remove the bundles from your admin workstation to save space: rm /var/lib/gke/bundles/gke-onprem-vsphere- .tgz What's next Creating and managing node pools Configure node pool update policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.

