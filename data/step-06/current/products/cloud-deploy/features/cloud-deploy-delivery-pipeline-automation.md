---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.480Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy delivery pipeline automation"
feature_slug: "cloud-deploy-delivery-pipeline-automation"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-automation"
  - "https://docs.cloud.google.com/deploy/docs/create-pipeline-targets"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager"
keywords:
  - "deploy"
  - "delivery"
  - "pipeline"
  - "automation"
  - "now"
  - "supports"
  - "in"
  - "preview"
---

# Cloud Deploy delivery pipeline automation

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports delivery pipeline automation in preview, including automated release promotion and automated rollout phase advancement.

## Extended Definition

Cloud Deploy now supports delivery pipeline automation in preview, including automated release promotion and automated rollout phase advancement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)

## Supporting Pages

### "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- Source ID: `site-docs-root-2`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline, target definitions, and automation action: GKE In the deploy-automation-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev - targetId : automation - quickstart - staging profiles : [] strategy : canary : runtimeConfig : kubernetes : serviceNetworking : service : "my-service" deployment : "my-deployment" canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : promotes a release suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Cloud Run In the deploy-automation-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev profiles : [ dev ] - targetId : automation - quickstart - staging profiles : [ staging ] strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : Promotes a release to the next target suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete automation - quickstart - cluster - dev -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete automation - quickstart - cluster - staging -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - automation - run - service - dev -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - automation - run - service - staging -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, automations, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Cloud Run Run the following command from the deploy-automation-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-automation-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

### "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command registers a delivery pipeline with its targets defined in the same file. gcloud deploy apply -- file = PIPELINE CONFIG \ -- region = LOCATION \ -- project = PROJECT You now have a delivery pipeline that can manage deployment of your releases, and target resources that can be used by any delivery pipeline in the same project and region.
- A single-file example The command in this example registers a delivery pipeline and targets that are all defined in the same file: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 An example using separate files For this example, there are three targets defined in three separate files, so you run four commands: gcloud deploy apply -- file = delivery - pipeline . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target dev . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target staging . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target prod . yaml -- region = us - central1 The --region flag is required unless you've set a default (using gcloud config set deploy/region [REGION] ).
- If you omit this property from the delivery-pipeline config, or provide no value for it, deploying to this target doesn't require approval. (But the caller trying to promote to the target still needs the clouddeploy.rollouts.create IAM permission.) You can even require manual approval on the first target.
- This is useful for trying out Cloud Deploy, but is not suitable for production workloads. (You can also use the Google Cloud console to create a release .) To create the delivery pipeline: From the Delivery pipelines page, click Create .

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- In the deploy-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-run-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : run-qsdev profiles : [ dev ] - targetId : run-qsprod profiles : [ prod ] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsdev description : Cloud Run development service run : location : projects/ PROJECT ID /locations/us-central1 --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsprod description : Cloud Run production service run : location : projects/ PROJECT ID /locations/us-central1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Create a file named run-service-prod.yaml with the following contents: apiVersion: serving.knative.dev/v1 kind: Service metadata: name: deploy-run-service-prod spec: template: spec: containers: - image: my-app-image This file defines another Cloud Run service, and as the name deploy-run-service-prod implies, this is your prod service, and corresponds to the second target in your delivery pipeline progression.

### "Class ListDeliveryPipelinesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

