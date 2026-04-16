---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.127Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster upgrade workflow for versions 1.13.1 and later"
feature_slug: "user-cluster-upgrade-workflow-for-versions-1-13-1-and-later"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "user"
  - "cluster"
  - "upgrade"
  - "workflow"
  - "versions"
  - "13"
  - "later"
  - "clusters"
---

# User cluster upgrade workflow for versions 1.13.1 and later

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User clusters managed by the Anthos On-Prem API can be upgraded from the Google Cloud console or the gcloud CLI.

## Extended Definition

The user cluster upgrade workflow for Google Distributed Cloud (software only) for VMware is performed by preparing the Google Cloud CLI, then using `gcloud container vmware clusters query-version-config` with user-cluster context to retrieve versions available for upgrade, and executing the upgrade through supported tooling such as the gcloud CLI or Terraform. Upgrade requires that an Anthos version be made available on the admin cluster beforehand, and successful completion is reflected in cluster status (`RUNNING`) and version fields observable via `gkectl list/describe` output. Evidence in the excerpts does not directly confirm the feature label’s version threshold of 1.13.1+ or Cloud Console support, though it shows upgrades using versions in the 1.14+ to 1.34+ range and CLI-driven workflows.

## Evidence Summary

These pages collectively document the CLI-based user-cluster upgrade flow, version selection/checking, prerequisites on the admin cluster, and post-upgrade verification, with one page additionally noting a gkectl requirement for certain non-advanced cluster upgrade paths.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The output of the gcloud container vmware clusters query-version-config command is similar to the following: versions: - isInstalled: true version: 1.28.800-gke.109 - version: 1.29.0-gke.1456 - version: 1.29.100-gke.248 - version: 1.29.200-gke.245 - version: 1.29.300-gke.184 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- The output of the command is similar to the following: versions: - isInstalled: true version: 1.14.3-gke.25 - version: 1.14.4-gke.54 - version: 1.15.0-gke.581 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.
- Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION Replace the following: USER CLUSTER NAME : The name of the user cluster.
- The steps for upgrading a user cluster using the gcloud CLI or Terraform include a step to run gcloud container vmware clusters query-version-config to get available versions for the upgrade.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: It provides version-specific upgrade behavior for advanced and non-advanced clusters, but does not describe the Anthos On-Prem API, Cloud console, or gcloud-based workflow in this feature context.

Evidence snippets:
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Support for the command on advanced user clusters was added in the following versions: 1.32.700+, 1.33.300+, and 1.34.0 and higher.
- You must use the gkectl command line tool to upgrade non-advanced clusters to version 1.33 or later.
- Make sure you don't have critical custom configurations or features applied to your existing cert-manager before you update or upgrade to advanced clusters.

