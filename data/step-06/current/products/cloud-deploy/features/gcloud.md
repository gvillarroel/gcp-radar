---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.477Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "gcloud"
feature_slug: "gcloud"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
keywords:
  - "gcloud"
  - "deploy"
  - "now"
  - "supports"
  - "setting"
  - "debug"
  - "equivalent"
  - "logging"
---

# gcloud

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports setting debug-equivalent logging verbosity for Skaffold, gcloud, and kubectl in each target execution environment.

## Extended Definition

Cloud Deploy now supports setting debug-equivalent logging verbosity for Skaffold, gcloud, and kubectl in each target execution environment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)

## Supporting Pages

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- For GKE, and GKE with Gateway API: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment GKE Create one GKE Autopilot cluster: gcloud container clusters create - auto canary - quickstart - cluster \ -- project = PROJECT ID \ -- region = us - central1 GKE + Gateway API Create one GKE cluster, with recommended settings to support using with Istio: gcloud container clusters create canary-quickstart-cluster \ --machine-type = n1-standard-1 \ --num-nodes 4 \ --region = us-central1 \ --project = PROJECT ID Get the cluster credentials: gcloud container clusters get-credentials canary-quickstart-cluster \ --project = PROJECT ID \ --region = us-central1 Install the Kubernetes Gateway API CRDs if not already present on the cluster. kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.6.2/standard-install.yaml Enable Istio's Gateway controller implementation by installing Istio. curl -L https://istio.io/downloadIstio ISTIO VERSION = 1 .17.2 sh - \ && ./istio-1.17.2/bin/istioctl install --set profile = minimal -y Cloud Run If you're using Cloud Run, you can skip this command, you don't need to do anything here.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- To create a release resource that represents the container image to deploy, run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi , or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest or service definition with the specific, SHA-qualified image.

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one multi-target comprising two GKE or Cloud Run targets, ready to deploy your application.
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environments If you're deploying to Cloud Run, you can skip this command .
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete deploy - params - cluster - prod1 -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete deploy - params - cluster - prod2 -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT ID Delete the delivery pipeline, multi-target, child targets, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Cloud Run Run the following command from the deploy-run-parallel-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a \ --deploy-parameters="git-sha=f787cac" Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Cloud Deploy also supports deploying across multiple projects.

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- In the deploy-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-gke-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : qsdev profiles : [] - targetId : qsprod profiles : [] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsdev description : development cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsdev --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsprod description : production cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- Run the following command from the deploy-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-gke-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.
- Delete the qsdev cluster: gcloud container clusters delete quickstart - cluster - qsdev -- region = us - central1 -- project = PROJECT ID Delete the qsprod cluster: gcloud container clusters delete quickstart - cluster - qsprod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- GKE clusters are externally accessible by default. gcloud container clusters create-auto quickstart-cluster-qsdev --project = PROJECT ID --region = us-central1 && gcloud container clusters create-auto quickstart-cluster-qsprod --project = PROJECT ID --region = us-central1 Prepare your Skaffold configuration and Kubernetes manifest Cloud Deploy uses Skaffold to provide the details for what to deploy and how to deploy it properly for your separate targets .

