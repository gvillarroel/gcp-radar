---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.748Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "GKE on AWS Installation Preflight API Checks"
feature_slug: "gke-on-aws-installation-preflight-api-checks"
latest_feature_date: "2020-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade"
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform"
keywords:
  - "additional"
  - "validation"
  - "preflight"
  - "checks"
  - "were"
  - "installation"
---

# GKE on AWS Installation Preflight API Checks

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Additional preflight validation checks were introduced to enforce that required Google Cloud APIs are enabled during installation and upgrade.

## Extended Definition

Additional preflight validation checks were introduced to enforce that required Google Cloud APIs are enabled during installation and upgrade.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)

## Supporting Pages

### "Upgrade Cloud Service Mesh \_|\_ Cloud Service Mesh v1.21 \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.

### "Upgrade Cloud Service Mesh \_|\_ Cloud Service Mesh v1.22 \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.
- Additionally, relative kubeconfig file locations that use a will not work. --output dir Include this option to specify a directory where asmcli downloads the anthos-service-mesh package and extracts the installation file, which contains istioctl , samples, and manifests.

### "Create a VPC and cluster with Terraform \_|\_ GKE on AWS \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete your cluster and AWS Virtual Private Cloud Before you delete your cluster and AWS Virtual Private Cloud, you must remove all of the following: Any active AWS load balancers in the AWS Virtual Private Cloud Any additional node pools in your cluster not created with Terraform Any additional clusters in the AWS Virtual Private Cloud not created with Terraform To remove the cluster and AWS Virtual Private Cloud you created with Terraform, run the following command: terraform destroy Terraform drains workloads from your nodes, deletes your primary node pool and cluster, and deletes your AWS Virtual Private Cloud.
- You can configure your AWS environment and create your clusters in it either with Terraform or with the GKE on AWS installation instructions .
- To add additional identity providers to your cluster, see Manage identity with GKE Identity Service .
- Prerequisites Install the Google Cloud CLI with the Google Cloud CLI installation instructions .

