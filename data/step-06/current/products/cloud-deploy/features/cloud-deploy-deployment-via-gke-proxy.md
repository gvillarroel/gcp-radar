---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.478Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy deployment via GKE proxy"
feature_slug: "cloud-deploy-deployment-via-gke-proxy"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
keywords:
  - "deploy"
  - "deployment"
  - "via"
  - "gke"
  - "proxy"
  - "now"
  - "supports"
  - "deploying"
---

# Cloud Deploy deployment via GKE proxy

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports deploying to Google Kubernetes Engine targets through a proxy.

## Extended Definition

Cloud Deploy now supports deploying to Google Kubernetes Engine targets through a proxy.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- In the deploy-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-gke-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : qsdev profiles : [] - targetId : qsprod profiles : [] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsdev description : development cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsdev --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsprod description : production cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- When deployment is complete, the delivery pipeline visualization shows it as deployed: View the results in Google Cloud console In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your my-gke-demo-app-1 delivery pipeline.
- The release is now queued for deployment into qsprod .
- Run the following command from the deploy-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-gke-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- GKE Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image --- apiVersion: v1 kind: Service metadata: name: my-service namespace: default spec: selector: app: my-app ports: - protocol: TCP port: 80 This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment If you're deploying to Cloud Run, you can skip this command .
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and verify that deployment.
- GKE mkdir deploy-verification-gke-quickstart cd deploy-verification-gke-quickstart Cloud Run mkdir deploy-verification-run-quickstart cd deploy-verification-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-verification-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : verification staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - verification - cluster Cloud Run In the deploy-verification-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- GKE Run the following command from the deploy-verification-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=deploy-verification-demo-app-gke-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.

