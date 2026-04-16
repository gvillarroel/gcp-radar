---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.085Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "project ID and location enforcement"
feature_slug: "project-id-and-location-enforcement"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "project"
  - "id"
  - "location"
  - "enforcement"
  - "cluster"
  - "creation"
  - "enforces"
  - "matching"
---

# project ID and location enforcement

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

New cluster creation enforces matching project ID and location.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the admin cluster configuration includes `gkeConnect` and related log/metrics/audit settings where the `projectID` fields are used to register the cluster and to connect logs/metrics/audit data to Google Cloud projects. The documentation explicitly says the project ID used for logs and metrics and audit logs should be the same as `gkeconnect.projectID`, so cluster creation enforces project-ID consistency across these parts of the config. Evidence for location enforcement is weaker: the docs show `location`/`clusterLocation` fields and defaults (for example, `us-central1` and `global`) but do not clearly state explicit cross-field location-matching logic in the provided excerpts.

## Evidence Summary

The cited pages document admin cluster YAML fields for `gkeConnect` registration, logging/monitoring/audit project and location settings, and include an explicit requirement that those log/metrics/audit `projectID` values match `gkeconnect.projectID`.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store audit logs for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send audit logs from the cluster serviceAccountKeyPath: "" # (Optional/Preview) Configure backups for admin cluster.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store audit logs for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send audit logs from the cluster serviceAccountKeyPath: "" # (Optional/Preview) Configure backups for admin cluster.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store audit logs for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send audit logs from the cluster serviceAccountKeyPath: "" # (Optional/Preview) Configure backups for admin cluster.

