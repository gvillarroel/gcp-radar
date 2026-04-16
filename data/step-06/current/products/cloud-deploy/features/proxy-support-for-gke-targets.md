---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.665Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Proxy support for GKE targets"
feature_slug: "proxy-support-for-gke-targets"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/gke-targets"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
  - "https://docs.cloud.google.com/deploy/docs/parallel"
keywords:
  - "proxy"
  - "gke"
  - "targets"
  - "deploy"
  - "supports"
  - "deployments"
  - "kubernetes"
  - "engine"
---

# Proxy support for GKE targets

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy supports deployments to Google Kubernetes Engine targets through a proxy.

## Extended Definition

Cloud Deploy supports deployments to Google Kubernetes Engine targets through a proxy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)

## Supporting Pages

### Deploy to a Google Kubernetes Engine cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Putting it all together Now that you have your Kubernetes manifests, your skaffold.yaml configuration, and your Cloud Deploy target definitions, and you've registered your targets as Cloud Deploy resources, you can now invoke your delivery pipeline to create a release and progress it through the progression of targets defined in the pipeline.
- Home Documentation Application development Cloud Deploy Guides Send feedback Deploy to a Google Kubernetes Engine cluster Stay organized with collections Save and categorize content based on your preferences.
- Cloud Deploy lets you deploy your container-based workloads to any Google Kubernetes Engine cluster.
- This document describes how to deploy your applications to Google Kubernetes Engine clusters.

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - qsprod1 -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - qsprod2 -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT ID Delete the delivery pipeline, multi-target, child targets, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - qsprod1 \ -- project = PROJECT ID \ -- region = us - central1 \ && gcloud container clusters create - auto quickstart - cluster - qsprod2 \ -- project = PROJECT ID \ -- region = us - west1 Prepare your Skaffold configuration and application manifest Cloud Deploy uses Skaffold to provide the details for what to deploy and how to deploy it properly for your separate targets .

### Deploy to multiple targets at the same time \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the child targets For each target identified as a child in your multi-target configuration, configure another target, as a child target: In your delivery pipeline YAML or in a separate YAML file, create the basic target definition: GKE apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : CHILD TARGET1 description : TARGET DESCRIPTION gke : cluster : projects/ PROJECT ID /locations/ REGION /clusters/ CLUSTER NAME In this YAML...
- Cloud Deploy resources used for parallel deployment Parallel deployment uses the following Cloud Deploy specialized resources: multi-targets A multi-target is a target that is configured with the property multiTarget , at the top level of the target config YAML, and instead of referencing the runtime cluster or service, it references one or more other targets, using multiTarget.targetIds .
- The lifecycle of the delivery pipeline is the same as with any Cloud Deploy pipeline and targets, except that when it gets to the stage with the multi-target, Cloud Deploy creates a controller rollout for the multi-target and a child rollout to deploy the application to each child target.
- If you need to be able to deploy concurrently to more targets than the limit specified in the Cloud Build documentation , you have two options: Request an increase of the number of concurrent builds you can run.

