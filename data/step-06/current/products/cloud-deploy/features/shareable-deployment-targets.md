---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.681Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Shareable deployment targets"
feature_slug: "shareable-deployment-targets"
latest_feature_date: "2021-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
  - "https://docs.cloud.google.com/deploy/docs/create-pipeline-targets"
keywords:
  - "shareable"
  - "deployment"
  - "targets"
  - "let"
  - "multiple"
  - "delivery"
  - "pipelines"
  - "use"
---

# Shareable deployment targets

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Shareable deployment targets let multiple delivery pipelines use the same target definitions.

## Extended Definition

Shareable deployment targets let multiple delivery pipelines use the same target definitions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)

## Supporting Pages

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Deploy an app to multiple targets at the same time This page shows you how to use Cloud Deploy to deliver a sample application to two targets at the same time—a parallel deployment.
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-api-reference-required-1`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.deliveryPipelines Stay organized with collections Save and categorize content based on your preferences.
- TargetsTypeCondition TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.

### "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- Source ID: `site-docs-reference-required-3`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command registers a delivery pipeline with its targets defined in the same file. gcloud deploy apply -- file = PIPELINE CONFIG \ -- region = LOCATION \ -- project = PROJECT You now have a delivery pipeline that can manage deployment of your releases, and target resources that can be used by any delivery pipeline in the same project and region.
- Edit existing pipelines and targets You can later edit any delivery pipeline or target config and run gcloud deploy apply to update the pipeline or target resource.
- See Configuration file schema for a description of the YAML file structure for delivery pipelines and targets.
- About the delivery pipeline and targets Your delivery pipeline describes a progression of deployment targets .

