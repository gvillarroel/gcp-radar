---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.321Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster upgrades to future beta versions"
feature_slug: "user-cluster-upgrades-to-future-beta-versions"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "user"
  - "cluster"
  - "upgrades"
  - "future"
  - "beta"
  - "versions"
  - "clusters"
  - "can"
---

# User cluster upgrades to future beta versions

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User clusters can be upgraded to future beta versions.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, user cluster versions are managed through version metadata returned by `gcloud container vmware clusters query-version-config`, and those returned versions are used for user cluster creation or upgrade. Before creating or managing a user cluster at a different version than the admin cluster, the admin cluster must be updated with `gcloud container vmware admin-clusters update ... --required-platform-version`, using one of the listed supported versions.

## Evidence Summary

These pages state that supported user-cluster versions come from `query-version-config` output and that upgrade/management commands are version-gated (including advanced-user-cluster command support in specific release lines), but they do not explicitly phrase support as "future beta" in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- If you want to create a user cluster that is a different version than the admin cluster, you need to download and deploy the components that the admin cluster needs to manage user clusters of that version, as follows: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --required-platform-version= VERSION Replace VERSION with one of the versions listed in the output of the query-version-config command.
- The output of the gcloud container vmware clusters query-version-config command is similar to the following: versions: - isInstalled: true version: 1.28.800-gke.109 - version: 1.29.0-gke.1456 - version: 1.29.100-gke.248 - version: 1.29.200-gke.245 - version: 1.29.300-gke.184 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Support for the command on advanced user clusters was added in the following versions: 1.32.700+, 1.33.300+, and 1.34.0 and higher.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- Since there's no longer a onprem-user-cluster-controller controller, the Diagnose cluster issues guide is obsolete for advanced clusters.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: It covers user cluster version upgrades to 1.33/1.34 in the context of advanced clusters but not future beta-version upgrade capability.

Evidence snippets:
- Support for the command on advanced user clusters was added in the following versions: 1.32.700+, 1.33.300+, and 1.34.0 and higher.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- Since there's no longer a onprem-user-cluster-controller controller, the Diagnose cluster issues guide is obsolete for advanced clusters.

