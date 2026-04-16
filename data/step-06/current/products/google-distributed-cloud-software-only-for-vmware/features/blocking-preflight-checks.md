---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.242Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Blocking preflight checks"
feature_slug: "blocking-preflight-checks"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "blocking"
  - "preflight"
  - "checks"
  - "v1"
  - "installation"
  - "upgrade"
  - "configurations"
  - "option"
---

# Blocking preflight checks

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Preflight checks are blocking for v1 installation and upgrade configurations, with an option to skip the blocking behavior.

## Extended Definition

Blocking preflight checks are validation operations executed during Google Distributed Cloud (software only) for VMware cluster operations (create, update, and upgrade), and they can prevent the operation from continuing until identified issues are corrected. In v1.29 and later, these checks run server-side on the admin cluster by default, and operators can run them explicitly with `gkectl check-config --config [CONFIG]` or `gkectl upgrade cluster ... --dry-run` to detect/fix issues first. A documented “fast mode” option skips validations that create temporary test VMs (such as load-balancing VIP and node IP checks), which is a narrower way to reduce check scope rather than fully disable validation.

## Evidence Summary

The cited pages confirm that preflight checks are run by default for cluster create/update/upgrade (server-side from v1.29+), can be executed preemptively with dry-run/`check-config`, and support a fast mode that skips certain validations.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Run preflight checks When upgrading to version 1.29 and higher, you can run the preflight checks before upgrading a user cluster: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --dry-run Replace USER CLUSTER CONFIG with the path to the user cluster configuration file.
- With server-side preflight checks, when you upgrade a user cluster using gkectl , the preflight checks are run on the admin cluster instead of locally on the admin workstation.
- Server-side preflight checks are also run on the admin cluster when you use the Google Cloud console, the Google Cloud CLI, or Terraform to upgrade a cluster.
- By adding the --dry-run flag, you can find and fix any issues that the preflight checks find with your user cluster before the upgrade.

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- This document provides information about preflight checks that are run when you create or upgrade a cluster in Google Distributed Cloud (software only) for VMware.
- Review your firewall rules In version 1.29 and later, server-side preflight checks are enabled by default when you create, update, and upgrade clusters.
- Annotations in statically created vSphere in-tree PersistentVolume and PersistentVolumeClaims Before upgrade, checks annotations in vSphere in-tree PersistentVolumes and vSphere PersistentVolumeClaims: The statically created vSphere in-tree PersistentVolumes have the annotation pv.kubernetes.io/provisioned-by: kubernetes.io/vsphere-volume The statically created vSphere PersistentVolumesClaims have the annotation volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume and volume.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume If your cluster has vSphere in-tree PersistentVolumes or vSphere PersistentVolumeClaims without these annotations, you must annotate the PersistentVolumes and PersistentVolumeClaims before continuing, see Considerations for Migration of In-Tree vSphere Volumes .
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- Optional: Configure a private registry By default during cluster creation or upgrade, Google Distributed Cloud pulls system images from gcr.io/gke-on-prem-release using the component access service account .
- When you create the admin cluster, the controllers on the bootstrap cluster will provision nodes, run preflight checks, and register the admin cluster to the fleet.
- When you create the admin cluster, the controllers on the bootstrap cluster will provision nodes, run preflight checks, and register the admin cluster to the fleet.

