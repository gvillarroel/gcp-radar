---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.302Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster deletion with gkectl"
feature_slug: "user-cluster-deletion-with-gkectl"
latest_feature_date: "2019-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains"
keywords:
  - "user"
  - "cluster"
  - "deletion"
  - "gkectl"
  - "clusters"
  - "can"
  - "deleted"
---

# User cluster deletion with gkectl

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

User clusters can be deleted using gkectl.

## Extended Definition

The provided excerpts show that Google Distributed Cloud (software only) for VMware uses `gkectl` to manage user clusters, including creating clusters via `gkectl create cluster ...` and enabling advanced-cluster workflows, and they mention backup/restore support for user clusters via gkectl in the advanced clusters documentation. However, the provided snippets do not explicitly document a `gkectl` command or procedure specifically for deleting user clusters.

## Evidence Summary

These pages confirm gkectl is used for user-cluster lifecycle actions like create and backup/restore, but do not provide explicit evidence of a user cluster deletion workflow.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- Updated the gkectl command for improved restoring of admin clusters and to support backing up and restoring user clusters.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- Updated the gkectl command for improved restoring of admin clusters and to support backing up and restoring user clusters.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- See the following for how to obtain the needed information: vCenter user account privileges Determine your vCenter server address Getting your vCenter CA root certificate Procedure overview The following primary steps are involved in using gkectl to create a user cluster: Fill in your user cluster configuration file Specify the details for your new cluster in the user cluster configuration file.
- Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Locate the user cluster kubeconfig file The gkectl create cluster command creates a kubeconfig file named USER CLUSTER NAME-kubeconfig in the current directory.
- To generate a template for your user cluster configuration file: gkectl create-config cluster --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace the following: OUTPUT FILENAME : a path of your choice for the generated template.
- For example, 1.34.200-gke.68 . enableAdvancedCluster Set enableAdvancedCluster to true . enableControlplaneV2 Controlplane V2 is required for all 1.30 and higher user clusters.

