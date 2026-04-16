---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.245Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Credential update command"
feature_slug: "credential-update-command"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "credential"
  - "update"
  - "command"
  - "gkectl"
  - "credentials"
  - "updates"
  - "vsphere"
  - "f5"
---

# Credential update command

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl update credentials command updates vSphere and F5 credentials.

## Extended Definition

`gkectl update credentials` is a `gkectl` command referenced for Google Distributed Cloud (software only) for VMware that is used to update credential information, with documented support for updating a component access service account key. The feature appears in the platform’s advanced-cluster capability matrix with a partial-support designation, so its credential-update scope in these excerpts is limited to what is explicitly listed.

## Evidence Summary

The create-user-cluster guide shows `gkectl` usage context, while the advanced-clusters docs explicitly mention `gkectl update credentials` support for component access service account key updates and indicate partial support.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- The following example shows how to modify main.tf to run the gkectl prepare command before cluster creation: resource "null resource" "gkectl prepare" { provisioner "local-exec" { command = "gkectl prepare --kubeconfig=${var.kubeconfig} --cluster-name=${var.cluster name} --vcenter-username=${var.vcenter username} --vcenter-password=${var.vcenter password} --vcenter-address=${var.vcenter address} --datacenter=${var.datacenter} --datastore=${var.datastore} --network=${var.network} --os-image=${var.os image} --service-account-key-file=${var.service account key file} --location=${var.location}" working dir = path.module # Important: Set working directory environment = { Optional: set environment variables if needed.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Summary API metrics GA GA GA GA No differences. gkectl update credentials support for updating component access service account key Partial support GA Partial support Partial support Changes apply.
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Updated the gkectl command for improved restoring of admin clusters and to support backing up and restoring user clusters.
- Update private registry credentials GA GA GA GA No differences.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Summary API metrics GA GA GA GA No differences. gkectl update credentials support for updating component access service account key Partial support GA Partial support Partial support Changes apply.
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Updated the gkectl command for improved restoring of admin clusters and to support backing up and restoring user clusters.
- Update private registry credentials GA GA GA GA No differences.

