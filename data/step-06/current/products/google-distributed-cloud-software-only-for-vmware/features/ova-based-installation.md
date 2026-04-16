---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.315Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "OVA-based installation"
feature_slug: "ova-based-installation"
latest_feature_date: "2019-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "ova"
  - "based"
  - "installation"
  - "gke"
  - "prem"
  - "can"
  - "installed"
  - "pre"
---

# OVA-based installation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

GKE On-Prem can be installed using a pre-configured Open Virtual Appliance image.

## Extended Definition

In the provided Google Cloud documentation excerpts, Google Distributed Cloud (software-only) for VMware is described in terms of software installation managed from an admin workstation with `gkectl` and installation/update artifacts (for example, a `gke-onprem-vsphere-<version>-full.tgz` bundle). The excerpts do not explicitly mention an Open Virtual Appliance (OVA) image being used for installation, so the “OVA-based installation” characteristic is not clearly evidenced in these sources.

## Evidence Summary

These pages provide implementation context and installation/upgrade commands for software-only VMware deployments, but do not contain explicit OVA-based installation documentation text.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For example: Status: Cluster State: RUNNING Last GKE On Prem Version: 1.34.0-gke.1 Troubleshoot asynchronous upgrade For an asynchronous upgrade, the timeout duration is based on the number of nodes in the cluster.
- For example: Status: Cluster State: RUNNING Last GKE On Prem Version: 1.34.0-gke.1 Troubleshoot asynchronous upgrade For an asynchronous upgrade, the timeout duration is based on the number of nodes in the cluster.
- To use the full bundle instead, the bundle path in the installation command is gke-onprem-vsphere- TARGET VERSION -full.tgz .
- About cert-manager installation: cert-manager is automatically installed on advanced clusters.

### "Google Distributed Cloud (software only) for VMware overview \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Google Distributed Cloud is based on Google Kubernetes Engine (GKE) , with its own Kubernetes package that extends GKE for use in an on-premises environment.
- You can find the complete documentation for an earlier version by adding the minor version number in the following URL: https://cloud.google.com/anthos/clusters/docs/on-prem/ VERSION / Replace VERSION with a minor version from 1.0 to 1.16 and copy the URL to the address bar in your browser.
- Google Distributed Cloud architecture with one user cluster Key components The following components make up a software-only installation on VMware of Google Distributed Cloud: A user cluster is where the workloads that implement your applications run, like in GKE on Google Cloud.
- The admin workstation is a separate machine that includes the tools that cluster creators and developers need to manage their installation: Running gkectl from the admin workstation lets you create and update clusters and perform some other administrative tasks.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- For example, to add two administrators: --admin-users=sara@example.com \ --admin-users=amal@example.com When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.
- For example, to add two administrators: --admin-users=sara@example.com \ --admin-users=amal@example.com When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.
- For example, to add two administrators: --admin-users=sara@example.com \ --admin-users=amal@example.com When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.
- When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.

