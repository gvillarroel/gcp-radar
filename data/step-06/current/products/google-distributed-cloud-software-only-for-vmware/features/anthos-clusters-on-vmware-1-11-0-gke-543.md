---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.159Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos clusters on VMware 1.11.0-gke.543"
feature_slug: "anthos-clusters-on-vmware-1-11-0-gke-543"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks"
keywords:
  - "anthos"
  - "clusters"
  - "vmware"
  - "11"
  - "gke"
  - "543"
  - "maintenance"
  - "release"
---

# Anthos clusters on VMware 1.11.0-gke.543

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

A maintenance release of Anthos clusters on VMware that runs on Kubernetes 1.22.8-gke.200.

## Extended Definition

Anthos clusters on VMware 1.11.0-gke.543 is a specific release identifier in the Anthos on VMware versioning scheme. In the documented upgrade workflow, admins query available platform versions, make the target Anthos version available on the admin cluster, and use `gcloud container vmware admin-clusters update --required-platform-version` before upgrading user clusters, so this feature is primarily defined by how that release can be targeted and staged. Evidence for this feature being tied to 1.11.0-gke.543 is weak in the provided excerpts; the cited docs mainly confirm version-management behavior and one platform limitation rather than that exact string.

## Evidence Summary

The upgrade guide defines how target Anthos versions are selected and applied via admin-cluster prerequisites, while the CIS benchmark page documents that EventRateLimit admission control is not supported on Anthos clusters on VMware.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)

## Supporting Pages

### "CIS Kubernetes Benchmark \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- 1.2.3 Ensure that the -- DenyServiceExternalIPs is set (Manual) L1 Warn 1.2.9 Ensure that the admission control plugin EventRateLimit is set (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.

### "CIS Kubernetes Benchmark \_|\_ Google Distributed Cloud (software only)\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- 1.2.3 Ensure that the -- DenyServiceExternalIPs is set (Manual) L1 Warn 1.2.9 Ensure that the admission control plugin EventRateLimit is set (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.
- To install the version in the admin cluster, run: $ gcloud container vmware admin-clusters update my-admin-cluster --required-platform-version=VERSION Download the new version of the components and deploy them in the admin cluster: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= PROJECT ID \ --location= REGION \ --required-platform-version= VERSION This command downloads the version of the components that you specify in --required-platform-version to the admin cluster, and then deploys the the components.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz ./ Upgrade the admin cluster The steps for upgrading the admin cluster vary slightly depending on the minor version you're upgrading to (the target version): 1.31 and higher If the target version is 1.31 or higher, before you upgrade your user clusters to the next minor version, you need to upgrade your admin cluster.
- What's next gcloud CLI reference documentation gcloud container vmware clusters gcloud container vmware node-pools gcloud container vmware admin-clusters Terraform reference documentation google gkeonprem vmware cluster google gkeonprem vmware node pool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

