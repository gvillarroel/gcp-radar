---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.672Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "In-cluster deployment verification"
feature_slug: "in-cluster-deployment-verification"
latest_feature_date: "2023-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout"
keywords:
  - "cluster"
  - "deployment"
  - "verification"
  - "runs"
  - "same"
  - "gke"
  - "anthos"
  - "where"
---

# In-cluster deployment verification

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

In-cluster deployment verification runs verification in the same GKE or Anthos cluster where the application is deployed.

## Extended Definition

In-cluster deployment verification runs verification in the same GKE or Anthos cluster where the application is deployed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- When you configure parallel deployment , you can require approval on the multi-target only—not on child targets. gke For GKE clusters only, the resource path identifying the cluster where your application will be deployed: gke : cluster : projects/[project name]/locations/[location]/clusters/[cluster name] project name The Google Cloud project in which the cluster lives. location The location where the cluster lives.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also configure Skaffold to run deploy hooks on the same cluster where your application is running.
- The following is an example customActions stanza that includes executionMode to invoke the hook container on the application cluster: customActions : - name : predeploy-action containers : - name : predeploy-echo image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , 'echo "this is a predeploy action"' ] executionMode : kubernetesCluster : {} The executionMode stanza is optional, and if you omit it, Skaffold runs the custom action container in the Cloud Deploy execution environment.
- You can configure each hook to run in a specified Cloud Deploy execution environment , but if you're deploying to Google Kubernetes Engine you can optionally configure it to run on the GKE cluster where you're deploying your application.
- Note: if there is a verify job configured for the stage, verification runs before the postdeploy job.

### Manage rollouts \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- Source ID: `site-docs-reference-required-3`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you terminate a job run, the job is considered failed and you can do any of the following: Leave it that way and disregard the failed rollout Retry the job Ignore the job and continue with the next job or phase in the rollout Note: When you're using a parallel deployment , you can terminate job runs on child rollouts only—not controller rollouts.
- The job run must be IN PROGRESS for you to terminate it. gcloud gcloud deploy job - runs terminate JOB RUN ID \ -- release = RELEASE NAME \ -- delivery - pipeline = PIPELINE NAME \ -- rollout = ROLLOUT NAME \ -- region = REGION Where: JOB RUN ID is the (UUID) of the job run you want to terminate.
- SKIPPED When you're running a deployment strategy, such as a canary , Cloud Deploy skips to the stable phase in cases where there isn't yet a running version of the application with which to split traffic.
- SKIPPED When you're running a deployment strategy, such as a canary , Cloud Deploy skips to the stable phase in cases where there isn't yet a running version of the application with which to split traffic.

