---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.249Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Service-account-based installation and upgrade"
feature_slug: "service-account-based-installation-and-upgrade"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "account"
  - "based"
  - "installation"
  - "upgrade"
  - "can"
  - "use"
  - "authenticated"
  - "without"
---

# Service-account-based installation and upgrade

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Installation and upgrade can use any Google Cloud authenticated service account without allowlisting.

## Extended Definition

This feature refers to installing and upgrading Google Distributed Cloud (software only) for VMware using Google Cloud service account credentials as part of the control-plane workflow. Official docs show upgrade instructions requiring an IAM role on a specific service account (`kubernetesmetadata.publisher`) and cluster configuration fields for GCP service account keys used for image access and registration (`componentAccessServiceAccountKeyPath`, `registerServiceAccountKeyPath`), indicating service-account-based operational flows for upgrade and setup. The provided excerpts do not explicitly confirm that any authenticated service account can be used or that allowlisting is not required.

## Evidence Summary

The upgrade page provides a concrete IAM/service-account requirement for upgrades, the admin-cluster configuration page documents service-account key references used during setup, and preflight checks includes a GCP Service Account validation step, but none of these snippets explicitly assert unrestricted service-account use or non-allowlisting.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- After the upgrade is complete, if you removed any non-system NetworkPolicy specifications, then reapply them with this command: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f NETWORK POLICY NAME .yaml Google API and IAM requirements To upgrade a cluster to version 1.28 and later, you must enable kubernetesmetadata.googleapis.com and grant the kubernetesmetadata.publisher IAM role to the logging-monitoring service account .
- In the meantime, with the new upgrade flow, you can still benefit from new user cluster features without being blocked by the admin cluster upgrade, which allows you to reduce the upgrade frequency of the admin cluster if you want.
- Starting from 1.12.0, if the admin control plane is unhealthy, the upgrade process will directly upgrade to the target version without trying to restore the admin cluster at the source version before proceeding to upgrade.
- For example: Status: Cluster State: RUNNING Last GKE On Prem Version: 1.34.0-gke.1 Troubleshoot asynchronous upgrade For an asynchronous upgrade, the timeout duration is based on the number of nodes in the cluster.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- Annotations in statically created vSphere in-tree PersistentVolume and PersistentVolumeClaims Before upgrade, checks annotations in vSphere in-tree PersistentVolumes and vSphere PersistentVolumeClaims: The statically created vSphere in-tree PersistentVolumes have the annotation pv.kubernetes.io/provisioned-by: kubernetes.io/vsphere-volume The statically created vSphere PersistentVolumesClaims have the annotation volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume and volume.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume If your cluster has vSphere in-tree PersistentVolumes or vSphere PersistentVolumeClaims without these annotations, you must annotate the PersistentVolumes and PersistentVolumeClaims before continuing, see Considerations for Migration of In-Tree vSphere Volumes .
- In version 1.2.1 and later, the check-config command itself uploads the VM template, so you can run the full set of validations before you run gkectl prepare : Run gkectl check-config , without the --fast flag.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Running preflight checks Stay organized with collections Save and categorize content based on your preferences.

