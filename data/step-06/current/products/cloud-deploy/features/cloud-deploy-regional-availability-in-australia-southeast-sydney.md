---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.489Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy regional availability in Australia Southeast (Sydney)"
feature_slug: "cloud-deploy-regional-availability-in-australia-southeast-sydney"
latest_feature_date: "2022-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
keywords:
  - "deploy"
  - "regional"
  - "availability"
  - "in"
  - "australia"
  - "southeast"
  - "sydney"
  - "added"
---

# Cloud Deploy regional availability in Australia Southeast (Sydney)

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added availability in the australia-southeast1 (Sydney) region.

## Extended Definition

Cloud Deploy added availability in the australia-southeast1 (Sydney) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample create custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample delete custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample update custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample create delivery pipeline(): Create a client client = deploy v1 .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample create custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample delete custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample update custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample create delivery pipeline(): Create a client client = deploy v1 .

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - for - console - staging \ -- project = PROJECT ID \ -- region = us - central1 && \ gcloud container clusters create - auto quickstart - cluster - for - console - prod \ -- project = PROJECT ID \ -- region = us - central1 Create a delivery pipeline and two targets You can use Cloud Deploy to create a delivery pipeline and targets based on configuration specified in one or more YAML files.
- Delete both targets: gcloud deploy targets delete console - staging -- region = us - central1 && \ gcloud deploy targets delete console - prod -- region = us - central1 Delete the Cloud Storage buckets that Cloud Deploy created.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- If you already have the CLI installed, make sure you're running the latest version: gcloud components update Create your runtime environment If you're deploying to Cloud Run, you can skip this command .

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- JSON representation { "runtimeConfig" : { object ( RuntimeConfig ) } , // Union field mode can be only one of the following: "canaryDeployment" : { object ( CanaryDeployment ) } , "customCanaryDeployment" : { object ( CustomCanaryDeployment ) } // End of list of possible types for union field mode . } Fields runtimeConfig object ( RuntimeConfig ) Optional.
- JSON representation { "httpRoute" : string , "service" : string , "deployment" : string , "routeUpdateWaitTime" : string , "stableCutbackDuration" : string , "podSelectorLabel" : string , "routeDestinations" : { object ( RouteDestinations ) } } Fields httpRoute string Required.
- JSON representation { // Union field deployment strategy can be only one of the following: "standard" : { object ( Standard ) } , "canary" : { object ( Canary ) } // End of list of possible types for union field deployment strategy . } Fields Union field deployment strategy .

