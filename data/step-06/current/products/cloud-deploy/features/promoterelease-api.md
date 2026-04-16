---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.493Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "promoteRelease API"
feature_slug: "promoterelease-api"
latest_feature_date: "2021-09-15"
deprecation_date: "2021-09-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListReleasesAsyncPager"
keywords:
  - "promoterelease"
  - "api"
  - "the"
  - "was"
  - "removed"
  - "and"
  - "release"
  - "promotion"
---

# promoteRelease API

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The promoteRelease API was removed, and release promotion must use releases.rollouts.create instead; deprecated on 2021-09-15.

## Extended Definition

The promoteRelease API was removed, and release promotion must use releases.rollouts.create instead; deprecated on 2021-09-15.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListReleasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListReleasesAsyncPager)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- Enable the Cloud Deploy, Cloud Build, GKE, Artifact Registry, Cloud Run, and Cloud Storage APIs.
- Enable the Cloud Deploy, Cloud Build, GKE, Artifact Registry, Cloud Run, and Cloud Storage APIs.

### "Package types (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- PolicyRule Deploy Policy rule. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields PolicyViolation Returned from an action if one or more policies were violated, and therefore the action was prevented.
- ReleaseNotificationEvent Payload proto for "clouddeploy.googleapis.com/release notification" Platform Log event that describes the failure to send release status change Pub/Sub notification.
- TimedPromoteReleaseRule The TimedPromoteReleaseRule will automatically promote a release from the current target(s) to the specified target(s) on a configured schedule.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the automation uses the promoteReleaseRule , then this service account performs the release promotion, and thus requires the permissions that are needed to promote a release.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.

### "Class ListReleasesAsyncPager (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListReleasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListReleasesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListReleasesRequest The initial request object. response google.cloud.deploy v1.types.ListReleasesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListReleases requests and continue to iterate through the releases field on the corresponding responses.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Home Documentation Developer tools Python Client libraries Send feedback Class ListReleasesAsyncPager (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

