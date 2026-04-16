---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.735Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Containerd runtime version for Anthos clusters on AWS"
feature_slug: "containerd-runtime-version-for-anthos-clusters-on-aws"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform"
keywords:
  - "containerd"
  - "runtime"
  - "version"
---

# Containerd runtime version for Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS now use containerd runtime version 1.6.12.

## Extended Definition

Anthos clusters on AWS now use containerd runtime version 1.6.12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)

## Supporting Pages

### "Dataplane version support \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Dataplane version support Stay organized with collections Save and categorize content based on your preferences.
- Cluster environment Dataplane V2 Dataplane V1 GKE on Google Cloud Available in GKE version 1.20.6 and later.
- Enabled by default for Autopilot clusters from version 1.23.

### "Method: projects.locations.awsClusters.well-known.getOpenid-configuration\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Create a VPC and cluster with Terraform \_|\_ GKE on AWS \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Make a local copy of the repository and change to the AWS folder: git clone https://github.com/GoogleCloudPlatform/anthos-samples.git cd anthos-samples/anthos-multi-cloud/AWS Deploy GKE on AWS Edit the following lines in the terraform.tfvars file to replace the default values: gcp project id = GOOGLE PROJECT ID admin users = [" GCP ACCOUNT EMAIL "] cluster version = GKE VERSION Replace the following: GOOGLE PROJECT ID : your Google project id.
- For a list of AWS regions controlled from a particular Google Cloud region and their associated Kubernetes versions, run the following command: gcloud container aws get-server-config --location GOOGLE CLOUD REGION Replace GOOGLE CLOUD REGION with the name of the Google Cloud region you want GKE on AWS to control your cluster from.
- Authorize Cloud Logging and Cloud Monitoring Note: Starting with GKE on AWS version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.
- If you've already installed it, use these instructions to make sure you're running version 412.0.0 or higher.

