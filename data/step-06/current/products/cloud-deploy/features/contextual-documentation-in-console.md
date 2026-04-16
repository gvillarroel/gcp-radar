---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.679Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Contextual documentation in console"
feature_slug: "contextual-documentation-in-console"
latest_feature_date: "2022-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
keywords:
  - "contextual"
  - "documentation"
  - "console"
  - "learn"
  - "button"
  - "shows"
  - "tutorials"
  - "relevant"
---

# Contextual documentation in console

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The Learn button in the Google Cloud console shows documentation and tutorials relevant to the current Cloud Deploy screen.

## Extended Definition

The Learn button in the Google Cloud console shows documentation and tutorials relevant to the current Cloud Deploy screen.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - for - console - staging \ -- project = PROJECT ID \ -- region = us - central1 && \ gcloud container clusters create - auto quickstart - cluster - for - console - prod \ -- project = PROJECT ID \ -- region = us - central1 Create a delivery pipeline and two targets You can use Cloud Deploy to create a delivery pipeline and targets based on configuration specified in one or more YAML files.
- Delete both targets: gcloud deploy targets delete console - staging -- region = us - central1 && \ gcloud deploy targets delete console - prod -- region = us - central1 Delete the Cloud Storage buckets that Cloud Deploy created.

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- When deployment is complete, the delivery pipeline visualization shows it as deployed: View the results in Google Cloud console In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your my-gke-demo-app-1 delivery pipeline.
- Deploy an app to GKE using Cloud Deploy This page shows you how to use Cloud Deploy to deliver a sample application image named nginx to a sequence of two Google Kubernetes Engine clusters.
- To initialize the gcloud CLI, run the following command: gcloud init Note: You can run the gcloud CLI in the Google Cloud console without installing the Google Cloud CLI.
- To initialize the gcloud CLI, run the following command: gcloud init Note: You can run the gcloud CLI in the Google Cloud console without installing the Google Cloud CLI.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.
- The following YAML shows how to configure a deploy policy: apiVersion : deploy.cloud.google.com/v1 kind : DeployPolicy metadata : name : [ POLICY NAME ] annotations : [ ANNOTATIONS ] labels : [ LABELS ] description : [ DESCRIPTION ] suspended : [ true false ] selectors : - deliveryPipeline : id : [ PIPELINE ID ] labels : [ LABEL KEY ] :[LABEL VALUE] target : id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ] [ CONFIGS ] Where: [DESCRIPTION] Is optional text describing this policy. [POLICY NAME] A name for the policy.

