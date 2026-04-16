---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.037Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "VM tracking with vSphere tags"
feature_slug: "vm-tracking-with-vsphere-tags"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "vm"
  - "tracking"
  - "vsphere"
  - "tags"
  - "automatically"
  - "applies"
  - "identifying"
  - "cluster"
---

# VM tracking with vSphere tags

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

VM tracking with vSphere tags automatically applies identifying tags to cluster VMs.

## Extended Definition

VM tracking with vSphere tags is an advanced-cluster feature in Google Distributed Cloud (software only) for VMware that is listed in the product’s advanced-cluster documentation as a GA feature. Based on the provided excerpts, this feature appears GA in the 1.32 advanced-cluster context and is shown as GA again in the subsequent GA/upgrade context, but detailed behavior is not described in the supplied text.

## Evidence Summary

The Advanced clusters concept page provides the only explicit evidence that VM tracking with vSphere tags is a GA advanced-cluster feature (with no listed differences across versions), while the user-cluster how-to page offers related cluster-creation context but no direct details on this feature’s operation.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- When you migrate from a non-advanced cluster to an advanced cluster, the integrated cert-manager automatically overrides any customer-installed versions of cert-manager .
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.
- About cert-manager installation: cert-manager is automatically installed on advanced clusters.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- When you migrate from a non-advanced cluster to an advanced cluster, the integrated cert-manager automatically overrides any customer-installed versions of cert-manager .
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.
- About cert-manager installation: cert-manager is automatically installed on advanced clusters.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .

