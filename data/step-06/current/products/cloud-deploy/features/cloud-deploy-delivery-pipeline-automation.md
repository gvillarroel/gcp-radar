---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.761Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy delivery pipeline automation"
feature_slug: "cloud-deploy-delivery-pipeline-automation"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-automation"
keywords:
  - "deploy"
  - "delivery"
  - "pipeline"
  - "automation"
  - "now"
  - "supports"
  - "in"
  - "preview"
---

# Cloud Deploy delivery pipeline automation

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports delivery pipeline automation in preview, including automated release promotion and automated rollout phase advancement.

## Extended Definition

Cloud Deploy now supports delivery pipeline automation in preview, including automated release promotion and automated rollout phase advancement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)

## Supporting Pages

### "Class ListDeliveryPipelinesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListDeliveryPipelinesPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create your delivery pipeline, target definitions, and automation action: GKE In the deploy-automation-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev - targetId : automation - quickstart - staging profiles : [] strategy : canary : runtimeConfig : kubernetes : serviceNetworking : service : "my-service" deployment : "my-deployment" canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : promotes a release suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Cloud Run In the deploy-automation-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev profiles : [ dev ] - targetId : automation - quickstart - staging profiles : [ staging ] strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : Promotes a release to the next target suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete automation - quickstart - cluster - dev -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete automation - quickstart - cluster - staging -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - automation - run - service - dev -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - automation - run - service - staging -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, automations, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Cloud Run Run the following command from the deploy-automation-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-automation-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

