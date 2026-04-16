---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.215Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cluster upgrade flow"
feature_slug: "cluster-upgrade-flow"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "cluster"
  - "upgrade"
  - "flow"
  - "user"
  - "clusters"
  - "can"
  - "upgraded"
  - "newer"
---

# Cluster upgrade flow

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User clusters can be upgraded to a newer version before upgrading the admin cluster.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the user-cluster upgrade flow is a stepwise process that starts by preparing tooling and discovering available target versions, then applying a chosen upgrade while reporting progress through upgrade phases (control plane, addons, and node pools) via cluster events. The upgrade can proceed only when the required Anthos version is available on the admin cluster, and Google documentation explicitly requires upgrading the admin cluster before upgrading user clusters to the next minor version when the target is 1.31 or higher. Because the provided snippets show this version-specific prerequisite, it is possible that upgrade ordering differs by version.

## Evidence Summary

The cited pages provide upgrade command/precheck details, event-based phase visibility during upgrades, and an explicit admin-cluster prerequisite for certain user-cluster minor-version upgrades.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Review the configuration and make changes if needed: terraform plan Apply the Terraform plan to create the user cluster: terraform apply Remove the full bundle If you downloaded a full bundle, and you have successfully run gkectl prepare and upgraded the admin cluster and all user clusters, you should delete the full bundle to save disk space on the admin workstation.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz ./ Upgrade the admin cluster The steps for upgrading the admin cluster vary slightly depending on the minor version you're upgrading to (the target version): 1.31 and higher If the target version is 1.31 or higher, before you upgrade your user clusters to the next minor version, you need to upgrade your admin cluster.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Although we still support Seesaw for non-HA admin clusters that have been upgraded, we recommend that you migrate to MetalLB . antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.
- Enrolling your admin cluster in the GKE On-Prem API lets you use standard tools—the Google Cloud console, the Google Cloud CLI, or Terraform —to upgrade user clusters that the admin cluster manages.
- If you have an existing F5-BIG-IP load balancer and the cluster configuration uses this section, after you have upgraded to 1.29 or higher, we recommend that you migrate to manual load balancing . loadBalancer.f5BigIP.address Required if loadBalancer.kind = "f5BigIp" Immutable String The address of your F5 BIG-IP load balancer.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters with GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Make sure you don't have critical custom configurations or features applied to your existing cert-manager before you update or upgrade to advanced clusters.
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- Since there's no longer a onprem-user-cluster-controller controller, the Diagnose cluster issues guide is obsolete for advanced clusters.

