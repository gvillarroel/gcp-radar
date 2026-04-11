---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.730Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Cluster lifecycle operations via gcloud"
feature_slug: "cluster-lifecycle-operations-via-gcloud"
latest_feature_date: "2021-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deploy-app"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "CLI-based cluster management"
  - "gcloud container azure clusters create"
  - "gcloud container azure clusters delete"
  - "gcloud container azure clusters update"
  - "gcloud CLI"
  - "Multi-Cloud API"
  - "multi-cloud API"
  - "cluster lifecycle"
---

# Cluster lifecycle operations via gcloud

Product: Anthos clusters on Azure
Coverage: MEDIUM

## Step 02 Summary

Users can create, update, and delete Anthos clusters on Azure using the gcloud tool and the Multi-Cloud API.

## Extended Definition

Anthos on Azure supports managing Azure-hosted GKE cluster lifecycle operations through the gcloud CLI using `gcloud container azure clusters`, including explicit create and delete workflows and documented update operations for clusters and node pools. This CLI-based management is part of the broader GKE Multi-Cloud approach that also allows use of the Multi-Cloud API for cluster and workload management.

## Evidence Summary

The quickstart and release notes show create/delete cluster commands and references to cluster/node-pool update commands, while the Multi-Cloud API reference states that GKE Multi-Cloud management on Azure can be done via gcloud and the Multi-Cloud API.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deploy-app](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deploy-app)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### Quickstart: Deploy an application on GKE on Azure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deploy-app](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deploy-app)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes gcloud setup and cluster/node-pool creation on GKE on Azure, which supports create operations, but it does not cover update or delete lifecycle actions.

Evidence snippets:
- Example range: 192.168.224.0/20 Create a cluster Use the following command to create a cluster under GKE on Azure. gcloud container azure clusters create azure-cluster-0 \ --cluster-version 1 .34.1-gke.4700 \ --azure-region AZURE REGION \ --fleet-project FLEET PROJECT ID \ --client CLIENT NAME \ --resource-group-id $CLUSTER RESOURCE GROUP ID \ --vnet-id $VNET ID \ --subnet-id $SUBNET ID \ --pod-address-cidr-blocks POD CIDR BLOCK \ --service-address-cidr-blocks SERVICE CIDR BLOCK \ --ssh-public-key " SSH PUBLIC KEY " \ --tags "google:gkemulticloud:cluster=azure-cluster-0" Replace: AZURE REGION : a supported Azure region associated to your Google Cloud region FLEET PROJECT ID with the fleet host project ID where the cluster will be registered.
- Clean up Delete the application's Service and Deployment: kubectl delete service hello-server kubectl delete deployment hello-server Delete your node pool by running gcloud container azure node-pools delete : gcloud container azure node-pools delete pool-0 --cluster azure-cluster-0 Delete your cluster by running gcloud container azure clusters delete : gcloud container azure clusters delete azure-cluster-0 What's next Install Anthos Config Management Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Set default settings for the gcloud CLI Use the gcloud CLI to configure default settings for your default project and Google Cloud region.
- For more information and optional parameters, see the gcloud container azure clusters create reference page.

### GKE Multi-Cloud API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud Send feedback GKE Multi-Cloud API Stay organized with collections Save and categorize content based on your preferences.
- GKE Multi-Cloud provides a way to manage Kubernetes clusters that run on AWS and Azure infrastructure using the GKE Multi-Cloud API.
- You can deploy workloads with the GKE Multi-Cloud API or the gcloud and kubectl command-line tools.

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For instructions and more details, see the GCP-2022-004 security bulletin December 02, 2021 Announcement Anthos on Azure is now generally available through the Multi-Cloud API.
- The Multi-Cloud API authenticates with each cloud using a service account or application registration, and allows clusters to be deployed on existing or newly created VNets.
- Read more about our Multi-Cloud API .
- For more information, see gcloud container azure clusters update and gcloud container azure node-pools update Security This release fixes the following vulnerabilities: Fixed CVE-2022-1786 .

