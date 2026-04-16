---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.262Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Skip version upgrades"
feature_slug: "skip-version-upgrades"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
keywords:
  - "skip"
  - "version"
  - "upgrades"
  - "clusters"
  - "can"
  - "upgrade"
  - "patch"
  - "release"
---

# Skip version upgrades

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can upgrade from any patch release of a minor release to any patch release of the next minor release.

## Extended Definition

Skip version upgrades is a Google Distributed Cloud (software only) for VMware node-pool upgrade option that lets administrators bypass an intermediate Kubernetes minor version during upgrades, reducing the number of upgrade steps needed to reach a supported release. The feature is intended for clusters on unsupported versions to move to supported versions with fewer upgrades, and it is documented with explicit version-sequence examples (for example, moving across minor versions). It is supported only for Ubuntu and COS node pools, and is not supported for Windows node pools.

## Evidence Summary

The cited Google documentation pages confirm skip-version upgrade behavior and intent (fewer upgrades by skipping a minor release), provide supported/unsupported node-pool OS constraints, and provide related upgrade sequencing/version context.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)

## Supporting Pages

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 249
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to skip-version upgrades for user cluster node pools and explains how they work, prerequisites, supported versions, and operational steps.

Evidence snippets:
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- Skip-version upgrade sequence The sequence in which you upgrade admin and user clusters depends on the cluster version that you are upgrading to, referred to as the target version : 1.32 and higher Use this sequence if the target version is 1.32 or higher.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 249
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about performing skip-version upgrades for user cluster node pools, including behavior, eligibility, and configuration steps.

Evidence snippets:
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- Skip-version upgrade sequence The sequence in which you upgrade admin and user clusters depends on the cluster version that you are upgrading to, referred to as the target version : 1.32 and higher Use this sequence if the target version is 1.32 or higher.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade all production user clusters to the patch release version when you are confident.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz ./ Upgrade the admin cluster The steps for upgrading the admin cluster vary slightly depending on the minor version you're upgrading to (the target version): 1.31 and higher If the target version is 1.31 or higher, before you upgrade your user clusters to the next minor version, you need to upgrade your admin cluster.

