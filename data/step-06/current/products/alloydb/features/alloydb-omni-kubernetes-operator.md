---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.523Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Kubernetes Operator"
feature_slug: "alloydb-omni-kubernetes-operator"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "alloydb"
  - "omni"
  - "kubernetes"
  - "operator"
  - "extends"
  - "deploy"
  - "manage"
  - "clusters"
---

# AlloyDB Omni Kubernetes Operator

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Omni Kubernetes Operator extends the Kubernetes API to deploy and manage AlloyDB Omni clusters.

## Extended Definition

The AlloyDB Omni Kubernetes Operator extends the Kubernetes API to deploy and manage AlloyDB Omni clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Console In your open Cloud Shell, use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD gcloud Use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD Deploy and run the AlloyDB Proxy in a sidecar pattern We recommend that you run the AlloyDB Proxy in a sidecar pattern as an additional container sharing a Pod with your application for the following reasons: Prevents your SQL traffic from being exposed locally.
- To deploy the service gke-alloydb-app application, apply the service.yaml file: kubectl apply -f service.yaml To get the service details including the external IP address of the service, use the following command: kubectl get service Sample output: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE gke-alloydb-app LoadBalancer 34.118.229.246 35.188.16.172 80:32712/TCP 45s kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 85m Use the value of the external IP from the previous step to access the sample application at the following URL: http:// EXTERNAL-IP Sample configuration files proxy sidecar deployment.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- In the Enable APIs step, click Enable to enable the following: AlloyDB API Artifact Registry API Compute Engine API Cloud Resource Manager API Cloud Build API Container Registry API Kubernetes Engine API Service Networking API Note: If you've already enabled any or all of these APIs, you won't see them listed here. gcloud Sign in to your Google Cloud account.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Codelab: Toy Store Search App with Cloud Databases, Serverless Runtimes and Open Source Integrations Deploy AlloyDB Omni and a local AI model on Kubernetes In this codelab you learn how to deploy AlloyDB Omni on GKE and use it with an open embedding model deployed in the same Kubernetes cluster.
- Codelab: Deploy AlloyDB Omni and local AI model on Kubernetes Deploy a RAG application with LangChain on Vertex AI This tutorial shows you how to build and deploy an agent using the Vertex AI SDK for Python and the AlloyDB LangChain integration.
- Codelab: Generate SQL using AlloyDB AI natural language Apply semantic filters and rerank vector search results to improve search quality This codelab shows you how to use AlloyDB AI features like AI Query Operators, model endpoint management , and vector search to help you improve your search quality and use semantic filters.
- Codelab: Installing and Setting-up Toolbox for your Generative AI & Agentic Applications on AlloyDB Build and deploy a personalized fashion styling assistant The following codelabs show you how to build and deploy a personalized style assistant with Gemini, model endpoint management, vector search, Vertex AI, and agents.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- It is designed to run mission-critical stateful applications, like AlloyDB Omni, on any Kubernetes cluster, in any cloud or on-premises environment, with enterprise-grade performance and reliability.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Qinetic Platform – DB Compatibility for AlloyDB SEEBURGER Solution SEEBURGER Business Integration Suite (BIS) Platform Category Application ISV Description One central platform, one experience, all integrations, all deployment models – The SEEBURGER BIS Platform enables seamless connectivity of applications, people and processes, whether in the cloud, a hybrid environment or on-premises.

