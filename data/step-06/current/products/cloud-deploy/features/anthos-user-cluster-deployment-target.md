---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.490Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Anthos user cluster deployment target"
feature_slug: "anthos-user-cluster-deployment-target"
latest_feature_date: "2022-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
keywords:
  - "anthos"
  - "user"
  - "cluster"
  - "deployment"
  - "target"
  - "deploy"
  - "added"
  - "for"
---

# Anthos user cluster deployment target

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added support for deploying applications to Anthos user clusters.

## Extended Definition

Cloud Deploy added support for deploying applications to Anthos user clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A Rollout contains information around a specific deployment to a Target. create target create target ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A Rollout contains information around a specific deployment to a Target. create target create target ( request : typing .

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- For GKE, and GKE with Gateway API: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment GKE Create one GKE Autopilot cluster: gcloud container clusters create - auto canary - quickstart - cluster \ -- project = PROJECT ID \ -- region = us - central1 GKE + Gateway API Create one GKE cluster, with recommended settings to support using with Istio: gcloud container clusters create canary-quickstart-cluster \ --machine-type = n1-standard-1 \ --num-nodes 4 \ --region = us-central1 \ --project = PROJECT ID Get the cluster credentials: gcloud container clusters get-credentials canary-quickstart-cluster \ --project = PROJECT ID \ --region = us-central1 Install the Kubernetes Gateway API CRDs if not already present on the cluster. kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.6.2/standard-install.yaml Enable Istio's Gateway controller implementation by installing Istio. curl -L https://istio.io/downloadIstio ISTIO VERSION = 1 .17.2 sh - \ && ./istio-1.17.2/bin/istioctl install --set profile = minimal -y Cloud Run If you're using Cloud Run, you can skip this command, you don't need to do anything here.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- Delete the canary-quickstart-cluster cluster (GKE only): gcloud container clusters delete canary - quickstart - cluster -- region = us - central1 -- project = PROJECT ID Delete the my-canary-run-service service (Cloud Run only): gcloud run services delete my - canary - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, and all release and rollout resources: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- When you configure parallel deployment , you can require approval on the multi-target only—not on child targets. gke For GKE clusters only, the resource path identifying the cluster where your application will be deployed: gke : cluster : projects/[project name]/locations/[location]/clusters/[cluster name] project name The Google Cloud project in which the cluster lives. location The location where the cluster lives.

