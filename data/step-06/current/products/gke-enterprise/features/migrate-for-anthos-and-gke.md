---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.951Z"
product_name: "GKE Enterprise"
product_slug: "gke-enterprise"
feature_name: "Migrate for Anthos and GKE"
feature_slug: "migrate-for-anthos-and-gke"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/support/support-cluster-snapshot"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support"
keywords:
  - "migrate"
  - "for"
  - "anthos"
  - "and"
  - "gke"
  - "migration"
  - "moving"
  - "vm"
---

# Migrate for Anthos and GKE

Product: GKE Enterprise
Coverage: MEDIUM

## Step 02 Summary

A migration service for moving VM and application workloads into Anthos and GKE; A migration service for moving VM and application workloads into Anthos and GKE.

## Extended Definition

A migration service for moving VM and application workloads into Anthos and GKE; A migration service for moving VM and application workloads into Anthos and GKE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/support/support-cluster-snapshot](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/support/support-cluster-snapshot)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support)

## Supporting Pages

### "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Application deployment Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Knative serving Google Cloud Marketplace Application migration Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Migrate to Containers VM management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) VM Runtime on Google Distributed Cloud What's next Version and upgrade support Managed Cloud Service Mesh supported features In-cluster Cloud Service Mesh supported features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Network plugin Container storage interface (CSI) & hybrid storage Bundled L4 load balancer Platform-native load balancers N/A N/A N/A Operations and management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE dashboard in the Google Cloud console Connect Gateway Cloud Logging and Cloud Monitoring Prometheus/Grafana Security and Identity Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE Identity Service Fleet workload identity Cloud Audit Logs Binary Authorization Service management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Cloud Service Mesh in-cluster Managed Cloud Service Mesh Service dashboards in the Google Cloud console Cloud Service Mesh certificate authority Cloud Service Mesh integration with Certificate Authority Service For the list of attached clusters that Cloud Service Mesh supports, see Supported platforms .
- Feature Available on GKE standard clusters Available on Autopilot clusters Available without fleet membership Config Sync Policy Controller Config Controller Cloud Service Mesh in-cluster Managed Cloud Service Mesh Knative serving Migrate to Containers GKE Identity Service Binary Authorization Multi Cluster Ingress Cloud Logging and Cloud Monitoring for GKE system components Advanced security posture and compliance monitoring Node to node encryption FQDN network policies Features available on clusters outside of Google Cloud The following tables show which key Google Cloud and GKE features are available on clusters outside of Google Cloud.
- Enable GKE API Enabling this API gives you access to the GKE, which includes the following features: Config Sync Policy Controller Config Controller Migrate to Containers GKE Identity Service Cloud Logging and Cloud Monitoring for GKE system components Security posture dashboard Node to node encryption FQDN network policies Enable related products and features To use the following products and features with GKE, you must enable each of these features individually.

### "Common GKE user roles and tasks \_|\_ Google Kubernetes Engine (GKE) \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard In the GKE documentation, each document is often written for a specific need or to help solve a business problem that you might have.
- Define strategy and system architecture for migration to cloud, including applications and databases.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Common role archetypes The following high-level areas of common user roles are often referenced in our content: Admins and architects Operators Developers Security specialists Networking specialists Data and AI specialists Storage specialists Admins and architects Admins and architects administer and architect cloud platforms and products.

### "Share snapshots with Google Support \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/support/support-cluster-snapshot](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/support/support-cluster-snapshot)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Create cluster snapshot The process for creating a snapshot depends on your cluster type: GKE on AWS (previous generation) : Follow the instructions in Create a snapshot Google Distributed Cloud deployments on VMware : Follow the instructions in Upload snapshots to a Cloud Storage bucket to create a cluster snapshot and upload the cluster snapshot to a Cloud Storage bucket.
- To revoke access to your bucket: gcloud storage buckets remove-iam-policy-binding gs:// BUCKET NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-anthossupport.iam.gserviceaccount.com \ --role = roles/storage.objectViewer Google Distributed Cloud on VMware release 1.15.0 and higher As described in Upload snapshots to a Cloud Storage bucket , when you create a snapshot with the --share-with flag, it is automatically shared with Google Support.
- If you want to revoke Google's permission to access your Cloud Storage bucket, run the following command: gcloud storage buckets remove-iam-policy-binding gs:// BUCKET NAME/CLUSTER NAME/SNAPSHOT FILE NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-anthossupport.iam.gserviceaccount.com \ --role = roles/storage.legacyObjectReader Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Version and upgrade support \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- GKE GKE on Google Cloud Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.33 - 1.33 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.32 - 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.31 - 1.31 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 Google Distributed Cloud On bare metal Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.34 1.34.200-gke.68 1.34 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 1.33 1.33.600-gke.39 1.33 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 1.32 1.32.1000-gke.57 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 On VMware Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.34 1.34.200-gke.68 1.34 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 1.33 1.33.600-gke.40 1.33 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 1.32 1.32.1000-gke.57 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.28 1.27 1.26 GKE Multi-Cloud Important: GKE on AWS and GKE on Azure are now in maintenance mode.
- On AWS Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.32 - 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.31 1.31.6-gke.200 1.31 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.30 1.30.10-gke.200 1.30 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 On Azure Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.32 - 1.32 1.23 1.22 1.21 1.23 1.22 1.21 - 1.31 1.31.6-gke.200 1.31 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.30 1.30.10-gke.200 1.30 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 GKE attached clusters: Amazon Elastic Kubernetes Service (EKS) Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.32 - 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.31 - 1.31 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.30 - 1.30 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 GKE attached clusters: Azure Kubernetes Service (AKS) Cluster Version Recommended Patch Kubernetes Version Config Sync Policy Controller Cloud Service Mesh 1.32 - 1.32 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.31 - 1.31 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1.30 - 1.30 1.23 1.22 1.21 1.23 1.22 1.21 1.27 1.26 1.25 1 Connect, Cloud Logging, and Cloud Monitoring are supported on all cluster types.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Version and upgrade support Stay organized with collections Save and categorize content based on your preferences.

