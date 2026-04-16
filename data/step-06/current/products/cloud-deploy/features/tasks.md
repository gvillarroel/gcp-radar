---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.659Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Tasks"
feature_slug: "tasks"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/delete"
keywords:
  - "tasks"
  - "let"
  - "you"
  - "provide"
  - "user"
  - "defined"
  - "actions"
  - "deploy"
---

# Tasks

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Tasks let you provide user-defined actions in Cloud Deploy, including deploy hooks, deployment verification, analysis, and custom target type workflows.

## Extended Definition

Tasks let you provide user-defined actions in Cloud Deploy, including deploy hooks, deployment verification, analysis, and custom target type workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/delete](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/delete)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You can define predeploy and postdeploy hooks in either of two ways: Configure tasks Reference reference custom actions .
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To run hooks on the application cluster, you must configure them as customActions in your skaffold.yaml , and reference them using actions in the predeploy or postdeploy stanza in your delivery pipeline stage configuration: serialPipeline : stages : - targetId : hooks-staging profiles : [] strategy : standard : predeploy : actions : [ "my-predeploy-action" ] postdeploy : actions : [ "my-postdeploy-action" ] Note: If you configure hooks using tasks , those hooks run only in the Cloud Deploy execution environment.
- The following is an example customActions stanza that includes executionMode to invoke the hook container on the application cluster: customActions : - name : predeploy-action containers : - name : predeploy-echo image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , 'echo "this is a predeploy action"' ] executionMode : kubernetesCluster : {} The executionMode stanza is optional, and if you omit it, Skaffold runs the custom action container in the Cloud Deploy execution environment.
- The following is how you would configure pre-and post-deploy hooks in a pipeline stage when using a standard deployment strategy: serialPipeline : stages : - targetId : hooks-staging profiles : [] strategy : standard : predeploy : tasks : [ TASKS ] postdeploy : tasks : [ TASKS ] In this yaml: TASKS Is a list of one or more Tasks that you want to run as part of your predeploy or postdeploy hooks.
- Available environment variables Cloud Deploy also provides and populates the following environment variables in the execution environment .

### "Method: projects.locations.customTargetTypes.delete \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/delete](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/delete)
- Source ID: `site-api-reference-required-1`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Deploy Reference Send feedback Method: projects.locations.customTargetTypes.delete Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: clouddeploy.customTargetTypes.delete For more information, see the IAM documentation .
- HTTP request DELETE https://clouddeploy.googleapis.com/v1/{name=projects/ /locations/ /customTargetTypes/ } The URL uses gRPC Transcoding syntax.

