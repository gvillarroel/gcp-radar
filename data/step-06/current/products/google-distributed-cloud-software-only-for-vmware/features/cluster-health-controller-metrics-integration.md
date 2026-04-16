---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.134Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "cluster-health-controller metrics integration"
feature_slug: "cluster-health-controller-metrics-integration"
latest_feature_date: "2022-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "cluster"
  - "health"
  - "controller"
  - "metrics"
  - "integration"
  - "integrated"
  - "check"
  - "exporter"
---

# cluster-health-controller metrics integration

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Cluster-health-controller is integrated with health-check-exporter to emit metrics from periodic health checks.

## Extended Definition

In this Google Distributed Cloud (software only) for VMware context, cluster health checks are invoked in specific operational workflows (for example, via `gkectl diagnose cluster` and pre-upgrade preflight checks) and produce health-related operational activity captured as cluster/controller events. The docs also state that advanced clusters disable periodic health checks during automatic node repair, indicating health-check execution is controlled by cluster mode and operation type; the provided excerpts do not directly document a `cluster-health-controller` or `health-check-exporter` integration for metric export.

## Evidence Summary

The cited pages show when health checks run for clusters (diagnose/preflight workflows) and when they are explicitly not run (auto repair for advanced clusters), plus upgrade-phase event recording by controllers, but not the metric-exporter integration details.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Node auto repair GA GA GA GA Changes apply: If advanced cluster is enabled, the periodic health checks aren't run as part of auto repair.
- When you migrate from a non-advanced cluster to an advanced cluster, the integrated cert-manager automatically overrides any customer-installed versions of cert-manager .
- Since there's no longer a onprem-user-cluster-controller controller, the Diagnose cluster issues guide is obsolete for advanced clusters.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Node auto repair GA GA GA GA Changes apply: If advanced cluster is enabled, the periodic health checks aren't run as part of auto repair.
- When you migrate from a non-advanced cluster to an advanced cluster, the integrated cert-manager automatically overrides any customer-installed versions of cert-manager .
- Since there's no longer a onprem-user-cluster-controller controller, the Diagnose cluster issues guide is obsolete for advanced clusters.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Before the cluster is upgraded, preflight checks run to validate cluster status and node health.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .
- If your cluster is using a NetworkPolicy , temporarily remove its specification from the cluster, as follows: Check whether there's any non-system NetworkPolicy applied to your cluster: kubectl --kubeconfig USER CLUSTER KUBECONFIG get networkpolicy -A -o wide grep -v kube-system If the output of the prior step was not empty, save each NetworkPolicy specification to a file so that you can reapply the specification after upgrading the cluster. kubectl --kubeconfig USER CLUSTER KUBECONFIG get networkpolicy NETWORK POLICY NAME -n NETWORK POLICY NAMESPACE -o yaml > NETWORK POLICY NAME .yaml Replace the following: NETWORK POLICY NAME : the name of the NetworkPolicy that you are saving.

