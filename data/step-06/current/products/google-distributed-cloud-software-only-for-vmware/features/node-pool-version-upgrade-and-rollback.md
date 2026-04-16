---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.114Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Node pool version upgrade and rollback"
feature_slug: "node-pool-version-upgrade-and-rollback"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "node"
  - "pool"
  - "version"
  - "upgrade"
  - "rollback"
  - "anthos"
  - "clusters"
  - "vmware"
---

# Node pool version upgrade and rollback

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on VMware adds GA support for upgrading and rolling back node pool versions.

## Extended Definition

Node pool version upgrade in Google Distributed Cloud for VMware is the process of upgrading Anthos node pools (and the related control plane when applicable) by updating cluster configuration fields such as `bundlePath` and `gkeOnPremVersion` and running `gkectl` upgrade commands for the admin cluster and user cluster. The feature also supports skipping a minor node-pool version during upgrade to reach a supported version in fewer steps, while warning that control plane and node-pool version skew is not supported in certain upgrade paths. The provided excerpts do not provide explicit documented steps for node-pool rollback.

## Evidence Summary

These official docs describe how to perform and control node-pool version upgrades (including optional minor-version skipping) in VMware clusters, but they do not explicitly document rollback procedures.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides detailed information about node pool version upgrading behavior and limits but does not cover rollback functionality.

Evidence snippets:
- Controlling the control plane and node pool versions during an upgrade Caution: Version skew between the control plane and the node pool is NOT supported when upgrading non-advanced clusters to advanced clusters .
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Upgrade the control plane and the node pools: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG FILE If you don't have any other user clusters to upgrade, remove the bundles from your admin workstation to save space: rm /var/lib/gke/bundles/gke-onprem-vsphere- .tgz What's next Creating and managing node pools Configure node pool update policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides context and steps for node pool version upgrades but does not discuss rollback behavior.

Evidence snippets:
- Controlling the control plane and node pool versions during an upgrade Caution: Version skew between the control plane and the node pool is NOT supported when upgrading non-advanced clusters to advanced clusters .
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Upgrade the control plane and the node pools: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG FILE If you don't have any other user clusters to upgrade, remove the bundles from your admin workstation to save space: rm /var/lib/gke/bundles/gke-onprem-vsphere- .tgz What's next Creating and managing node pools Configure node pool update policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.
- Upgrade user cluster with Windows node pools The upgrade process for a user cluster with Windows node pools is similar to that for upgrading Linux-only user clusters, except that you must create a Windows VM template from a base VM template before upgrading.
- If an urgent security patch update is needed between Anthos patch releases, you can build a new VM template using the latest version, and then perform a rolling update for the existing Windows node pools to use the new template.

