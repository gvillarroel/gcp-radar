---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.672Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Canary deployment strategy"
feature_slug: "canary-deployment-strategy"
latest_feature_date: "2023-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
keywords:
  - "canary"
  - "deployment"
  - "strategy"
  - "progressively"
  - "rolls"
  - "out"
  - "changes"
  - "deploy"
---

# Canary deployment strategy

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The canary deployment strategy progressively rolls out changes in Cloud Deploy.

## Extended Definition

The canary deployment strategy progressively rolls out changes in Cloud Deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)

## Supporting Pages

### Use a canary deployment strategy \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
- Source ID: `site-docs-reference-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use deploy analysis with a canary deployment strategy In a canary deployment strategy, you can use deploy analysis with some or all phases (except stable ) to help determine when to advance a rollout to the next phase.
- Home Documentation Application development Cloud Deploy Guides Send feedback Use a canary deployment strategy Stay organized with collections Save and categorize content based on your preferences.
- As with single-target canary deployment, your delivery pipeline configuration must include a strategy.canary stanza inside the stage definition for the applicable stage.
- Use parallel deployment with a canary deployment strategy You can run a canary deployment using parallel deployment .

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you omit strategy , Cloud Deploy uses the standard deployment strategy. canary: In a canary deployment , you deploy a new version of your application progressively, replacing the already running version by percentage-based increments (for example, 25%, then 50%, then 75%, then fully.) The deployment strategy is defined per target.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- Custom Canary configuration strategy : canary : Runtime configs are configured as shown in the Canary Deployment Strategy section of this document. runtimeConfig : Manual configuration for each canary phase customCanaryDeployment : - name : " PHASE1 NAME " percent : PERCENTAGE1 profiles : [ " PROFILE1 NAME " ] verify : tasks : [] - … - name : "stable" percent : 100 profiles : [ " LAST PROFILE NAME " ] analysis : [ ANALYSIS CONFIGS ] verify : tasks : [] verify The verify stanza can be included under strategy.standard , strategy.canary.canaryDeployment , or under each phase in strategy.canary.customCanaryDeployment .

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-reference-required-3`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- GKE Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image --- apiVersion: v1 kind: Service metadata: name: my-service namespace: default spec: selector: app: my-app ports: - protocol: TCP port: 80 This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- Canary-deploy an application to a target This quickstart shows you how to use Cloud Deploy to deliver a sample application image in a canary deployment to either Google Kubernetes Engine or to Cloud Run. (You can also run a canary deployment to GKE attached clusters , but only GKE and Cloud Run are shown in this quickstart.) A canary deployment splits traffic between an already-deployed version of the application and the new version.

