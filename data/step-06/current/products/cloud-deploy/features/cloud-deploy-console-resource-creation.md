---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.482Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy console resource creation"
feature_slug: "cloud-deploy-console-resource-creation"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-policy"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
keywords:
  - "deploy"
  - "console"
  - "resource"
  - "creation"
  - "now"
  - "supports"
  - "creating"
  - "delivery"
---

# Cloud Deploy console resource creation

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports creating delivery pipelines, targets, and releases directly in the Google Cloud console.

## Extended Definition

Cloud Deploy now supports creating delivery pipelines, targets, and releases directly in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)

## Supporting Pages

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run Run the following command from the deploy-run-parallel-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a \ --deploy-parameters="git-sha=f787cac" Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.
- GKE Run the following command from the deploy-gke-parallel-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa \ --deploy-parameters="git-sha=f787cac" Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.
- View the results in Google Cloud console Now that you've created the release, and the controller rollout and child rollouts are created, those child rollouts are now deployed (or are in the process of being deployed) to their respective GKE clusters or Cloud Run services.
- Define deploy parameters in three different places: In the pipeline progression On the child targets On the command line, when creating the release Instantiate your delivery pipeline by creating a release, which automatically deploys to the two targets in parallel.

### "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register your pipeline and target resources with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline with one target.
- In the same directory in which you created the delivery pipeline and targets, create a new file, deploypolicy.yaml , with the following content: apiVersion : deploy.cloud.google.com/v1 description : Restrict all rollouts in the deploy-policy-pipeline resource for the next ten years kind : DeployPolicy metadata : name : quickstart-deploy-policy selectors : - deliveryPipeline : id : 'deploy-policy-pipeline' rules : - rolloutRestriction : id : no-rollouts timeWindows : timeZone : America/New York oneTimeWindows : - start : 2024-01-01 00:00 end : 2034-01-01 24:00 This policy blocks rollouts for 10 years, beginning January 1, 2024.
- Register your deploy policy resource with the Cloud Deploy service: gcloud deploy apply --file=deploypolicy.yaml --region=us-central1 --project= PROJECT ID Confirm your deploy policy: In the Google Cloud console, navigate to the Cloud Deploy Deploy policies page to view of list of your available policies.
- View the results in Google Cloud console In the Google Cloud console, navigate again to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ( deploy-policy-pipeline ).

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- To create a release resource that represents the container image to deploy, run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi , or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest or service definition with the specific, SHA-qualified image.
- Delete the canary-quickstart-cluster cluster (GKE only): gcloud container clusters delete canary - quickstart - cluster -- region = us - central1 -- project = PROJECT ID Delete the my-canary-run-service service (Cloud Run only): gcloud run services delete my - canary - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, and all release and rollout resources: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- When deployment is complete, the delivery pipeline visualization shows it as deployed: View the results in Google Cloud console In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your my-run-demo-app-1 delivery pipeline.
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.
- Instantiate your delivery pipeline by creating a release, which automatically deploys to the first target.

