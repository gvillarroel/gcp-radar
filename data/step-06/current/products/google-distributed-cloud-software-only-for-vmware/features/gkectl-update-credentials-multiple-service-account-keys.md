---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.059Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl update credentials multiple service account keys"
feature_slug: "gkectl-update-credentials-multiple-service-account-keys"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "gkectl"
  - "update"
  - "credentials"
  - "multiple"
  - "account"
  - "keys"
  - "can"
  - "together"
---

# gkectl update credentials multiple service account keys

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl update credentials can update multiple service account keys together.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the referenced `gkectl` credential update behavior is about applying cluster configuration changes to existing admin clusters using `gkectl update admin --kubeconfig ... --config ...`, which covers update operations that may include credential-related settings. The admin cluster configuration documentation also points users to a separate "Rotating service account keys" guidance when updating service-account-key fields, indicating key rotation is handled through documented update workflows rather than one-time provisioning only. The available excerpts do not explicitly state that a single `gkectl update` invocation can rotate or replace multiple service account keys together.

## Evidence Summary

The cited pages confirm `gkectl` is used to update admin cluster configuration and reference a credential-rotation workflow for service account keys, but they do not provide explicit evidence for batch-updating multiple keys in one command.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to modify main.tf to run the gkectl prepare command before cluster creation: resource "null resource" "gkectl prepare" { provisioner "local-exec" { command = "gkectl prepare --kubeconfig=${var.kubeconfig} --cluster-name=${var.cluster name} --vcenter-username=${var.vcenter username} --vcenter-password=${var.vcenter password} --vcenter-address=${var.vcenter address} --datacenter=${var.datacenter} --datastore=${var.datastore} --network=${var.network} --os-image=${var.os image} --service-account-key-file=${var.service account key file} --location=${var.location}" working dir = path.module # Important: Set working directory environment = { Optional: set environment variables if needed.
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- If you specify vCenter.datacenter in the user cluster configuration file, then you must also specify: vCenter.networkName Either vCenter.datastore or vCenter.storagePolicyName Either vCenter.cluster or vCenter.resourcePool Using separate vCenter accounts A user cluster can use a different vCenter account, with different vCenter.credentials , from the admin cluster.
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The backup tar file contains sensitive credentials, including your service account keys and the SSH key.
- The backup tar file contains sensitive credentials, including your service account keys and the SSH key.
- Update the admin cluster: gkectl update admin --kubeconfig ADMIN KUBECONFIG \ --config ADMIN CONFIG Replace the following: ADMIN KUBECONFIG : the path of the kubeconfig file for the admin cluster.
- If autoRepair.enabled isn't configured, add it to the admin cluster configuration file and run gkectl update admin .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- For information on how to update this field in an existing cluster, see Rotating service account keys .
- For information on how to update this field in an existing cluster, see Rotating service account keys .
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.

