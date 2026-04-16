---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.672Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Parallel multi-target deployment"
feature_slug: "parallel-multi-target-deployment"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/parallel"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
  - "https://docs.cloud.google.com/deploy/docs/parameters"
keywords:
  - "parallel"
  - "multi"
  - "target"
  - "deployment"
  - "lets"
  - "deploy"
  - "multiple"
  - "targets"
---

# Parallel multi-target deployment

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Parallel multi-target deployment lets Cloud Deploy deploy to multiple targets at the same time.

## Extended Definition

Parallel multi-target deployment lets Cloud Deploy deploy to multiple targets at the same time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)

## Supporting Pages

### Deploy to multiple targets at the same time \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)
- Source ID: `site-docs-reference-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roll back a parallel deployment If you need to roll back a deployment from multiple, parallel targets, Roll back the multi-target, as described in Roll back a target .
- Why parallel deployment You can use parallel deployment, for example, to deploy your application to multiple production targets.
- Cloud Deploy resources used for parallel deployment Parallel deployment uses the following Cloud Deploy specialized resources: multi-targets A multi-target is a target that is configured with the property multiTarget , at the top level of the target config YAML, and instead of referencing the runtime cluster or service, it references one or more other targets, using multiTarget.targetIds .
- View parallel deployment in Google Cloud console You can view details for your multi-target, child targets, the controller rollout, and child rollouts in Google Cloud console.

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-reference-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy an app to multiple targets at the same time This page shows you how to use Cloud Deploy to deliver a sample application to two targets at the same time—a parallel deployment.
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - qsprod1 -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - qsprod2 -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT ID Delete the delivery pipeline, multi-target, child targets, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### "Pass parameters to your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using deploy parameters to distinguish among multiple child targets, configure them on those child targets, not on the multi-target.
- A typical use for this would be to apply different values to manifests for different targets in a parallel deployment .
- This is useful for parallel deployments , to distinguish among child targets.
- The following YAML is the configuration for a pipeline stage whose target is a multi-target, which in this case has two child targets: serialPipeline : stages : - targetId : dev profiles : [] - targetId : prod # multi-target profiles : [] deployParameters : - values : deploy replicas : 1 log level : "NOTICE" matchTargetLabels : # optional, applies to all resources if unspecified; AND'd my-app : "post-render-config-1" - values : deploy replicas : 2 log level : "WARNING" matchTargetLabels : # optional, applies to all resources if unspecified; AND'd my-app : "post-render-config-2" In this delivery pipeline configuration, the deployParameters stanza includes two values , each of which has the following: The variable name, which is the same name as the variable you set in the manifest A value for that variable One or more labels (optional) to match against target-specific labels If you don't specify a label, in a matchTargetLabels stanza, that value is used for all targets in the stage.

