---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.675Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Delivery pipeline suspension"
feature_slug: "delivery-pipeline-suspension"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager"
keywords:
  - "delivery"
  - "pipeline"
  - "suspension"
  - "lets"
  - "you"
  - "pause"
  - "deploy"
---

# Delivery pipeline suspension

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Delivery pipeline suspension lets you pause a delivery pipeline in Cloud Deploy.

## Extended Definition

Delivery pipeline suspension lets you pause a delivery pipeline in Cloud Deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)

## Supporting Pages

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-api-reference-required-1`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.deliveryPipelines Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- Information around the state of the Delivery Pipeline. etag string This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. suspended boolean Optional.

### "Class ListDeliveryPipelinesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListDeliveryPipelinesPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

