---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.733Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy deploy hooks"
feature_slug: "cloud-deploy-deploy-hooks"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
keywords:
  - "deploy"
  - "hooks"
  - "now"
  - "supports"
  - "as"
  - "part"
  - "of"
  - "task"
---

# Cloud Deploy deploy hooks

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports deploy hooks as part of task-based deployment actions; Cloud Deploy now supports preview deploy hooks to run custom actions before and/or after deployment.

## Extended Definition

Cloud Deploy now supports deploy hooks as part of task-based deployment actions; Cloud Deploy now supports preview deploy hooks to run custom actions before and/or after deployment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)

## Supporting Pages

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE mkdir deploy-hooks-gke-quickstart cd deploy-hooks-gke-quickstart Cloud Run mkdir deploy-hooks-run-quickstart cd deploy-hooks-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-hooks-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : hooks staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - hooks - cluster Cloud Run In the deploy-hooks-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run Run the following command from the deploy-hooks-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=deploy-hooks-demo-app-run-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.
- GKE Run the following command from the deploy-hooks-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=deploy-hooks-demo-app-gke-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete deploy - hooks - cluster -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - hooks - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- January 31, 2023 Announcement As of November 30, 2022, Google Cloud Deploy has achieved the following compliance certifications: ISO/IEC 27001 ISO/IEC 27017 ISO/IEC 27018 ISO/IEC 27701 Announcement As of December 15, 2022, Google Cloud Deploy has achieved the following compliance certifications: SOC-1 SOC-2 SOC-3 January 20, 2023 Change Google Cloud Deploy now supports Skaffold version 2.0.
- March 26, 2025 Change Cloud Deploy is now available in the following regions: northamerica-south1 (Mexico) europe-north2 (Stockholm) March 21, 2025 Change Cloud Deploy now uses Skaffold 2.14 as the default Skaffold version , as of March 21, 2025, for all target types.
- March 23, 2026 Feature You can now analyze the performance of your deployed applications using the monitoring platform of your choice and automatically trigger actions such as rollbacks.
- November 13, 2023 Feature Cloud Deploy now supports delivery pipeline automation , including automated release promotion and automated rollout phase advancement, in preview .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This corresponds to the deploy policy id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description CloudDeployAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description CloudDeployAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.

