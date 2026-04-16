---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.484Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy in-cluster deployment verification"
feature_slug: "cloud-deploy-in-cluster-deployment-verification"
latest_feature_date: "2023-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
keywords:
  - "deploy"
  - "in"
  - "cluster"
  - "deployment"
  - "verification"
  - "now"
  - "supports"
  - "the"
---

# Cloud Deploy in-cluster deployment verification

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports deployment verification in the same cluster where the application is running for GKE and Anthos.

## Extended Definition

Cloud Deploy now supports deployment verification in the same cluster where the application is running for GKE and Anthos.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)

## Supporting Pages

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GKE mkdir deploy-verification-gke-quickstart cd deploy-verification-gke-quickstart Cloud Run mkdir deploy-verification-run-quickstart cd deploy-verification-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-verification-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : verification staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - verification - cluster Cloud Run In the deploy-verification-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete deploy - verification - cluster -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - verification - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- GKE Create a file named k8s-pod.yaml , with the following contents: apiVersion: v1 kind: Pod metadata: name: my-verification-pod spec: containers: - name: nginx image: my-app-image This file is a basic Kubernetes manifest , which is applied to the cluster to deploy the application.
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and verify that deployment.

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the deploy-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-gke-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : qsdev profiles : [] - targetId : qsprod profiles : [] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsdev description : development cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsdev --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsprod description : production cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- Define your Cloud Deploy delivery pipeline and deployment targets , which point to the two clusters.
- The release is now queued for deployment into qsprod .
- Delete the qsdev cluster: gcloud container clusters delete quickstart - cluster - qsdev -- region = us - central1 -- project = PROJECT ID Delete the qsprod cluster: gcloud container clusters delete quickstart - cluster - qsprod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- When you configure parallel deployment , you can require approval on the multi-target only—not on child targets. gke For GKE clusters only, the resource path identifying the cluster where your application will be deployed: gke : cluster : projects/[project name]/locations/[location]/clusters/[cluster name] project name The Google Cloud project in which the cluster lives. location The location where the cluster lives.
- The value is the metadata.name property from the target definition . strategy.standard.verify set to true enables deployment verification on the target.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- GKE Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image --- apiVersion: v1 kind: Service metadata: name: my-service namespace: default spec: selector: app: my-app ports: - protocol: TCP port: 80 This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- Canary-deploy an application to a target This quickstart shows you how to use Cloud Deploy to deliver a sample application image in a canary deployment to either Google Kubernetes Engine or to Cloud Run. (You can also run a canary deployment to GKE attached clusters , but only GKE and Cloud Run are shown in this quickstart.) A canary deployment splits traffic between an already-deployed version of the application and the new version.

