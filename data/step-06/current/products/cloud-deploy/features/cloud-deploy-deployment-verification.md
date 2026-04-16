---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.470Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy deployment verification"
feature_slug: "cloud-deploy-deployment-verification"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
keywords:
  - "deploy"
  - "deployment"
  - "verification"
  - "now"
  - "supports"
  - "actions"
  - "through"
  - "user"
---

# Cloud Deploy deployment verification

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports deployment verification actions through user-defined tasks.

## Extended Definition

Cloud Deploy now supports deployment verification actions through user-defined tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- If no deployment strategy is specified, the standard deployment strategy is used, with verification set to false . profiles Takes a list of zero or more Skaffold profile names, from skaffold.yaml .
- The value is the metadata.name property from the target definition . strategy.standard.verify set to true enables deployment verification on the target.
- Canary deployment strategy The following sections describe configuration for a canary deployment strategy, for each runtime that Cloud Deploy supports.
- It's used to enable deployment verification for a target.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A DeliveryPipeline defines a pipeline through which a Skaffold configuration can progress. create deploy policy create deploy policy ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A DeliveryPipeline defines a pipeline through which a Skaffold configuration can progress. create deploy policy create deploy policy ( request : typing .

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and verify that deployment.
- GKE mkdir deploy-verification-gke-quickstart cd deploy-verification-gke-quickstart Cloud Run mkdir deploy-verification-run-quickstart cd deploy-verification-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-verification-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : verification staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - verification - cluster Cloud Run In the deploy-verification-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment If you're deploying to Cloud Run, you can skip this command .
- Cloud Run Run the following command from the deploy-verification-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=deploy-verification-demo-app-run-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

