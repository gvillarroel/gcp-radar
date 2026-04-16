---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.677Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Console rollback from pipeline visualization"
feature_slug: "console-rollback-from-pipeline-visualization"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
  - "https://docs.cloud.google.com/deploy/docs/create-pipeline-targets"
keywords:
  - "console"
  - "rollback"
  - "pipeline"
  - "visualization"
  - "delivery"
  - "supports"
  - "rolling"
  - "back"
---

# Console rollback from pipeline visualization

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The delivery pipeline visualization in Google Cloud console supports rolling back targets.

## Extended Definition

The delivery pipeline visualization in Google Cloud console supports rolling back targets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - for - console - staging \ -- project = PROJECT ID \ -- region = us - central1 && \ gcloud container clusters create - auto quickstart - cluster - for - console - prod \ -- project = PROJECT ID \ -- region = us - central1 Create a delivery pipeline and two targets You can use Cloud Deploy to create a delivery pipeline and targets based on configuration specified in one or more YAML files.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- If you're not already on the delivery pipeline page, showing the new delivery pipeline in-console-quickstart-pipeline , navigate there now.

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-api-reference-required-1`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.deliveryPipelines Stay organized with collections Save and categorize content based on your preferences.
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Information around the state of the Delivery Pipeline. etag string This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. suspended boolean Optional.

### "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- Source ID: `site-docs-reference-required-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is useful for trying out Cloud Deploy, but is not suitable for production workloads. (You can also use the Google Cloud console to create a release .) To create the delivery pipeline: From the Delivery pipelines page, click Create .
- Home Documentation Application development Cloud Deploy Guides Send feedback Create your delivery pipeline and targets Stay organized with collections Save and categorize content based on your preferences.
- Create a delivery pipeline and targets using the Google Cloud console You can use the Google Cloud console to create a new delivery pipeline and target or targets.
- Register the delivery pipeline and targets If you created your pipeline and targets using the Google Cloud console, you don't need to do this.

