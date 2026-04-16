---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.266Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Upgrade preflight checks"
feature_slug: "upgrade-preflight-checks"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "upgrade"
  - "preflight"
  - "checks"
  - "expanded"
  - "better"
  - "prepare"
  - "clusters"
  - "upgrades"
---

# Upgrade preflight checks

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Upgrade preflight checks are expanded to better prepare clusters for upgrades.

## Extended Definition

Upgrade preflight checks in Google Distributed Cloud (software only) for VMware are automated validations used to verify cluster readiness and configuration before critical lifecycle changes, including upgrades. The documentation states that server-side preflight checks are enabled by default in version 1.29+ when creating, updating, and upgrading clusters, and administrators can run `gkectl check-config` to validate configuration files with preflight checks before cluster creation. Evidence also indicates readiness checks include validating required environment prerequisites such as firewall rules.

## Evidence Summary

The cited pages confirm when preflight checks run (default for create/update/upgrade and via `gkectl check-config`) and show upgrade workflow context and upgrade-related readiness expectations.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: STRONG
- Re-rank rationale: The document states that server-side preflight checks run when clusters are created, updated, and upgraded, directly linking preflight behavior to upgrades.

Evidence snippets:
- Review your firewall rules In version 1.29 and later, server-side preflight checks are enabled by default when you create, update, and upgrade clusters.
- This document provides information about preflight checks that are run when you create or upgrade a cluster in Google Distributed Cloud (software only) for VMware.
- Before you create clusters using gkectl , run gkectl check-config to validate the configuration file with several preflight checks.
- In Firewall rules for admin clusters , search for "Preflight checks" and make sure all required firewall rules are configured.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .
- Review the configuration and make changes if needed: terraform plan Apply the Terraform plan to create the user cluster: terraform apply Remove the full bundle If you downloaded a full bundle, and you have successfully run gkectl prepare and upgraded the admin cluster and all user clusters, you should delete the full bundle to save disk space on the admin workstation.
- Legacy features blocked on upgrades The following legacy features are blocked during cluster upgrade to version 1.32: Dataplane V1 (Calico) Integrated F5 Big IP load balancer configuration Non-HA admin cluster Kubeception user cluster Seesaw load balancer You must migrate your clusters to recommended features before upgrading to version 1.32.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For clusters that have the advanced clusters feature enabled, cluster upgrades are supported.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.

