---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.747Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "AWS EFS mounting without driver installation"
feature_slug: "aws-efs-mounting-without-driver-installation"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates"
keywords:
  - "mounting"
  - "driver"
  - "without"
  - "installation"
---

# AWS EFS mounting without driver installation

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS supports mounting AWS Elastic File System file systems without requiring driver installation.

## Extended Definition

Anthos clusters on AWS supports mounting AWS Elastic File System file systems without requiring driver installation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)

## Supporting Pages

### Storage overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- Source ID: `site-iam-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Configuring cluster storage If you want to provision storage volumes with a non-default StorageClass, you can Create a custom StorageClass in a cluster that uses different parameters or a different storage driver.
- Supported in-tree drivers include the following: configMap emptyDir hostPath nfs projected secrets Note: Using a vendor-supported in-tree volume plugin (for example, awsElasticBlockStore ) is not recommended.
- The driver pre-installed with GKE on AWS provides the following StorageClasses by default: standard-rwo (default): Used for provisioning EBS gp2 volumes. premium-rwo : Used for provisioning EBS io1 volumes.
- Additional storage options Other third-party storage systems can be used with GKE on AWS through third-party Container Storage Interface (CSI) drivers (recommended) or in-tree Kubernetes volume plugins.

### About surge updates \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows three example settings, and highlights their impact on the speed of the update and the potential disruption to your workloads: Name Description Configuration Balanced setting (default) Balanced, slower but least disruptive. maxSurge=1, maxUnavailable=0 Rapid updates without extra resources Fast, no surge resources, most disruptive. maxSurge=0, maxUnavailable=20 Rapid updates that are less disruptive Fast, most surge resources and less disruptive. maxSurge=20, maxUnavailable=0 Each of the settings in the table is described in the following sections.
- If GKE on AWS can apply changes to a node pool without having to restart or recreate resources, it will do so to prevent disruptions.
- This additional node incurs charges while it's active, slightly raising the overall expense compared to methods without surge nodes.
- Rapid updates without extra resources For workloads that can tolerate interruptions, a faster update approach might be suitable.

### "Create a VPC and cluster with Terraform \_|\_ GKE on AWS \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- To configure your AWS environment and create clusters without using Terraform, see AWS prerequisites overview and the instructions to create a cluster .
- You can configure your AWS environment and create your clusters in it either with Terraform or with the GKE on AWS installation instructions .
- Prerequisites Install the Google Cloud CLI with the Google Cloud CLI installation instructions .
- Install the AWS CLI with the AWS CLI installation instructions .

