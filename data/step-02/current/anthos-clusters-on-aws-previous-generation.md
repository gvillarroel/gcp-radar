# Anthos clusters on AWS (previous generation)

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 40
Unique features: 40

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-01-26 | Containerd runtime version for Anthos clusters on AWS |  | Anthos clusters on AWS now use containerd runtime version 1.6.12. |
| 2023-01-26 | Supported Kubernetes versions for cluster creation on Anthos clusters on AWS |  | Support was added to launch clusters with Kubernetes versions 1.23.15-gke.2000, 1.24.9-gke.2100, and 1.25.5-gke.2100; Support was added to launch clusters with Kubernetes versions 1.23.13-gke.2000, 1.24.7-gke.2000, and 1.25.3-gke.1900. |
| 2022-12-13 | Kubernetes API compatibility for Anthos clusters on AWS | 2022-12-13 | Kubernetes version 1.25 in Anthos clusters on AWS is marked as deprecated due to deprecated APIs; deprecated on 2022-12-13. |
| 2022-07-07 | Supported Kubernetes versions for Anthos clusters on AWS | 2022-07-07 | Kubernetes 1.20 support was removed for Anthos clusters on AWS, and creation or maintenance of Kubernetes 1.19 clusters is no longer supported; Creation and maintenance of Kubernetes 1.18 clusters is no longer supported for Anthos clusters on AWS; deprecated on 2022-07-07. |
| 2021-12-14 | and t3a |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | Anthos clusters on AWS instance family support for EC2 c5a |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | c5ad |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | i3en |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | Kubernetes 1.18 support in Anthos clusters on AWS | 2021-12-14 | Support for Kubernetes 1.18 clusters on Anthos clusters on AWS is removed; deprecated on 2021-12-14. |
| 2021-12-14 | Launching Kubernetes 1.17 clusters on Anthos on AWS | 2021-12-14 | Creating new clusters with Kubernetes 1.17 on Anthos clusters on AWS is no longer allowed; deprecated on 2021-12-14. |
| 2021-12-14 | m5a |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | m5ad |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | r5a |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-12-14 | r5ad |  | Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families. |
| 2021-09-30 | Anthos Identity Service on Kubernetes 1.21+ clusters |  | Anthos Identity Service is available for Anthos clusters on AWS running Kubernetes version 1.21 and above. |
| 2021-09-30 | Configurable Cloud Storage bucket for Anthos AWS configuration data |  | Anthos clusters on AWS can now use a specified Cloud Storage bucket to store configuration data. |
| 2021-09-30 | Kubernetes Konnectivity support in Anthos Kubernetes 1.21 clusters |  | Anthos Kubernetes 1.21 clusters now support the Kubernetes Konnectivity tool for control plane and node communication. |
| 2021-09-30 | Launching Kubernetes 1.16 clusters on Anthos on AWS | 2021-09-30 | Creating new Kubernetes 1.16 clusters on Anthos clusters on AWS is no longer supported; deprecated on 2021-09-30. |
| 2021-09-30 | Launching Kubernetes 1.21 clusters on Anthos on AWS |  | Anthos clusters on AWS now support launching clusters with Kubernetes version 1.21. |
| 2021-09-30 | Node pools with AWS R5 instances on Anthos clusters |  | Anthos clusters on AWS now support launching node pools backed by AWS R5 instance types. |
| 2021-09-30 | OIDC configuration updates on running Anthos clusters |  | Users can update the OIDC configuration on an Anthos cluster while it is running. |
| 2021-09-30 | VolumeSnapshot v1beta1 API in Anthos clusters on Kubernetes 1.21 | 2021-09-30 | The VolumeSnapshot resource API version v1beta1 is deprecated in Anthos clusters running Kubernetes 1.21; deprecated on 2021-09-30. |
| 2021-07-01 | Launching Kubernetes 1.20 clusters on Anthos on AWS |  | Anthos clusters on AWS now support launching clusters with Kubernetes version 1.20. |
| 2021-07-01 | Running-cluster proxy settings modification |  | Anthos clusters on AWS now allow modifying proxy settings on a running cluster. |
| 2021-07-01 | Security group updates for user clusters and node pools |  | Anthos clusters on AWS supports updating security groups associated with user clusters and node pools. |
| 2021-07-01 | Workload Identity for user clusters |  | Workload Identity authentication to Google Cloud services is available for Anthos user clusters running Kubernetes 1.20 and above; Workload Identity in Anthos clusters on AWS user clusters is generally available. |
| 2021-03-31 | CMK encryption for component volumes |  | Anthos clusters on AWS supports encrypting component volumes with customer-managed keys (CMK). |
| 2021-03-31 | gp3 Amazon EBS volume type support |  | Anthos clusters on AWS supports gp3 EBS volume types and configuration of gp3 volumes for management service, AWSCluster, and AWSNodePools. |
| 2021-03-31 | Kubernetes 1.19 support |  | Anthos clusters on AWS supports Kubernetes version 1.19. |
| 2021-03-31 | User cluster log and metric export to Google Cloud observability |  | Anthos clusters on AWS user clusters can export logs and metrics to Cloud Logging and Cloud Monitoring. |
| 2021-02-03 | AWS EFS log collection in snapshots |  | Snapshot collection now includes AWS Elastic File System logs from user cluster nodes. |
| 2020-12-17 | AWS EFS mounting without driver installation |  | Anthos clusters on AWS supports mounting AWS Elastic File System file systems without requiring driver installation. |
| 2020-12-17 | Kubernetes 1.18 support |  | Anthos clusters on AWS supports Kubernetes version 1.18, including CoreDNS 1.7.1 and Cluster Autoscaler 1.18. |
| 2020-11-02 | Private Google Access image provisioning |  | Anthos clusters on AWS supports using Private Google Access to provision images for GKE on AWS environments. |
| 2020-10-12 | Volume snapshot support |  | GKE on AWS 1.5.0 added support for volume snapshots. |
| 2020-10-02 | GKE on AWS Installation Preflight API Checks |  | Additional preflight validation checks were introduced to enforce that required Google Cloud APIs are enabled during installation and upgrade. |
| 2020-10-02 | GKE on AWS Service Account-based Installation and Upgrade Access |  | Installation and upgrade of Anthos GKE on AWS can be performed with any authenticated Google Cloud service account without requiring allowlist access. |
| 2020-10-02 | GKE on AWS Workload Identity |  | Workload Identity enables binding Kubernetes service accounts to AWS IAM accounts and assigning per-workload IAM roles for fine-grained, least-privilege access. |
| 2020-10-02 | HTTP/HTTPS Proxy Support for GKE on AWS Management Traffic |  | Traffic between the GKE on AWS management service and Connect can now be routed through an HTTP/HTTPS proxy. |
| 2020-04-02 | Anthos GKE on AWS Initial Beta Release |  | Anthos GKE on AWS was made available as an initial beta release. |

Source file slug: `anthos-clusters-on-aws-previous-generation.md`

