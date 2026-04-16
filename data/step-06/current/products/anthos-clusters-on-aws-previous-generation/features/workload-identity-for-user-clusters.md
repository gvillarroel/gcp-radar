---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.745Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Workload Identity for user clusters"
feature_slug: "workload-identity-for-user-clusters"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity"
keywords:
  - "authentication"
  - "workload"
  - "available"
  - "identity"
  - "running"
  - "user"
---

# Workload Identity for user clusters

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Workload Identity authentication to Google Cloud services is available for Anthos user clusters running Kubernetes 1.20 and above; Workload Identity in Anthos clusters on AWS user clusters is generally available.

## Extended Definition

Workload Identity authentication to Google Cloud services is available for Anthos user clusters running Kubernetes 1.20 and above; Workload Identity in Anthos clusters on AWS user clusters is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "networking" : { object ( AwsClusterNetworking ) } , "awsRegion" : string , "controlPlane" : { object ( AwsControlPlane ) } , "authorization" : { object ( AwsAuthorization ) } , "state" : enum ( State ) , "endpoint" : string , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "clusterCaCertificate" : string , "fleet" : { object ( Fleet ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AwsClusterError ) } ] , "monitoringConfig" : { object ( MonitoringConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } } Fields name string The name of this resource.
- Resource: AwsCluster JSON representation AwsClusterNetworking JSON representation AwsControlPlane JSON representation AwsDatabaseEncryption JSON representation AwsServicesAuthentication JSON representation AwsAuthorization JSON representation AwsClusterUser JSON representation AwsClusterGroup JSON representation State AwsClusterError JSON representation Methods Resource: AwsCluster GKE-on-AWS is deprecated.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . workloadIdentityConfig object ( WorkloadIdentityConfig ) Output only.
- Workload Identity settings. clusterCaCertificate string Output only.

### Authentication overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the configuration of your cluster's access, run the following command: kubectl describe clusterrolebinding gke-multicloud-cluster-admin In addition to the RBAC policies to access the Kubernetes API server, if an admin user isn't a project owner, you need to grant specific IAM roles that let the admin users authenticate using their Google identity.
- Kubernetes API authentication You can use the kubectl command-line tool to perform cluster operations such as deploying a workload and configuring a load balancer.
- To get credentials, you can use one of the following methods: Google Identity , which lets users log in using their Google Cloud identity.
- This page describes how GKE on AWS handles authentication to Google Cloud and user authentication to your clusters.

### Workload identity overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload identity is the recommended way for applications running within GKE on AWS to access AWS and Google Cloud services.
- What's next Using workload identity with Google Cloud services Using workload identity with AWS Learn more about Workload identity federation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Workload identity overview Stay organized with collections Save and categorize content based on your preferences.
- In this case, all workloads running on the same node share the credentials, which can result in a greater set of permissions than workloads might need.

