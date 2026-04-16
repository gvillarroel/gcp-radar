---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.671Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Canary pod overprovisioning control"
feature_slug: "canary-pod-overprovisioning-control"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
keywords:
  - "canary"
  - "pod"
  - "overprovisioning"
  - "control"
  - "prevents"
  - "extra"
  - "gke"
  - "anthos"
---

# Canary pod overprovisioning control

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Canary pod overprovisioning control prevents extra GKE and Anthos pods from being created during canary deployments.

## Extended Definition

Canary pod overprovisioning control prevents extra GKE and Anthos pods from being created during canary deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)

## Supporting Pages

### Use a canary deployment strategy \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What to do if a parallel rollout fails in canary When a child rollout fails, the controller rollout can transition to different states, depending on what happens with the child rollouts: If one or more child rollouts fail, but at least one child rollout is still IN PROGRESS , the controller rollout remains IN PROGRESS .
- Both types of rollout—controller and child—have separate phases for all of the configured canary percentages, and a stable phase for the canary 100%.
- Custom-automated For a custom-automated canary (for service networking , gateway api or Cloud Run ), you can provide the following: The phase name The percentage goal The Skaffold profile to use for the phase Whether or not to include a verify job Whether or not to include a predeploy or postdeploy job, or both But you don't need to provide traffic-balancing information; Cloud Deploy creates the necessary resources (for service networking , gateway api or Cloud Run ).
- Proceed to the guide relevant to your specific target environment: Canary Deployments to Cloud Run Canary Deployments to GKE/GKE Enterprise using Service Networking Canary Deployments to GKE/GKE Enterprise using Gateway API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- For Cloud Run targets strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] analysis : For Cloud Run targets, AutomaticTrafficControl must be true unless you're configuring a custom canary .
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-api-reference-required-1`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "automaticTrafficControl" : boolean , "canaryRevisionTags" : [ string ] , "priorRevisionTags" : [ string ] , "stableRevisionTags" : [ string ] } Fields automaticTrafficControl boolean Optional.
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- JSON representation { "runtimeConfig" : { object ( RuntimeConfig ) } , // Union field mode can be only one of the following: "canaryDeployment" : { object ( CanaryDeployment ) } , "customCanaryDeployment" : { object ( CustomCanaryDeployment ) } // End of list of possible types for union field mode . } Fields runtimeConfig object ( RuntimeConfig ) Optional.

