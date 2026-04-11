---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.778Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deployment verification"
feature_slug: "deployment-verification"
latest_feature_date: "2022-09-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
keywords:
  - "deployment"
  - "verification"
  - "deploy"
  - "added"
  - "for"
  - "verifying"
  - "deployments"
---

# Deployment verification

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy added support for verifying deployments.

## Extended Definition

Cloud Deploy added support for verifying deployments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)

## Supporting Pages

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete deploy - verification - cluster -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - verification - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- For GKE, create one cluster: deploy-verification-cluster , with default settings.
- You define the configuration for the deploy verification in the stage stanza.
- GKE mkdir deploy-verification-gke-quickstart cd deploy-verification-gke-quickstart Cloud Run mkdir deploy-verification-run-quickstart cd deploy-verification-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-verification-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : verification staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - verification - cluster Cloud Run In the deploy-verification-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
- This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments. canaryRevisionTags[] string Optional.
- JSON representation { "runtimeConfig" : { object ( RuntimeConfig ) } , // Union field mode can be only one of the following: "canaryDeployment" : { object ( CanaryDeployment ) } , "customCanaryDeployment" : { object ( CustomCanaryDeployment ) } // End of list of possible types for union field mode . } Fields runtimeConfig object ( RuntimeConfig ) Optional.
- JSON representation { // Union field deployment strategy can be only one of the following: "standard" : { object ( Standard ) } , "canary" : { object ( Canary ) } // End of list of possible types for union field deployment strategy . } Fields Union field deployment strategy .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- A Rollout contains information around a specific deployment to a Target. create target create target ( request : typing .

