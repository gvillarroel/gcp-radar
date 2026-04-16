---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.749Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "GKE on AWS Workload Identity"
feature_slug: "gke-on-aws-workload-identity"
latest_feature_date: "2020-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
keywords:
  - "accounts"
  - "enables"
  - "binding"
  - "workload"
  - "identity"
  - "kubernetes"
---

# GKE on AWS Workload Identity

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Workload Identity enables binding Kubernetes service accounts to AWS IAM accounts and assigning per-workload IAM roles for fine-grained, least-privilege access.

## Extended Definition

Workload Identity enables binding Kubernetes service accounts to AWS IAM accounts and assigning per-workload IAM roles for fine-grained, least-privilege access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)

## Supporting Pages

### Workload identity overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Kubernetes service accounts Workload identity implements identity federation , or delegating trust or roles to an external provider.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Workload identity overview Stay organized with collections Save and categorize content based on your preferences.
- Workload identity enables you to assign distinct, fine-grained identities and authorization for each application in your cluster.
- What's next Using workload identity with Google Cloud services Using workload identity with AWS Learn more about Workload identity federation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Create a cluster \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- To see all supported Kubernetes versions on a given Google Cloud location, run the following command. gcloud container aws get-server-config --location GCP LOCATION Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.
- This overlap might prevent workloads from communicating with the control plane replica in the VPC network: VPC network: 10.0.0.0/16 Pod network: 10.0.1.0/24 Service network: 10.1.0.0/24 Control Plane Replica subnets: 10.0.1.0/24 , 10.0.2.0/24 , 10.0.3.0/24 Details about the Pod address range Kubernetes allocates addresses to Pod objects from the Pod address range.
- This is because the workload identity pool it refers to ( GOOGLE PROJECT ID .svc.id.goog ) is not provisioned until cluster creation.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "networking" : { object ( AwsClusterNetworking ) } , "awsRegion" : string , "controlPlane" : { object ( AwsControlPlane ) } , "authorization" : { object ( AwsAuthorization ) } , "state" : enum ( State ) , "endpoint" : string , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "clusterCaCertificate" : string , "fleet" : { object ( Fleet ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AwsClusterError ) } ] , "monitoringConfig" : { object ( MonitoringConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } } Fields name string The name of this resource.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . workloadIdentityConfig object ( WorkloadIdentityConfig ) Output only.
- Workload Identity settings. clusterCaCertificate string Output only.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters Stay organized with collections Save and categorize content based on your preferences.

