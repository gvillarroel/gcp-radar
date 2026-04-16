---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.662Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Scheduled release promotion"
feature_slug: "scheduled-release-promotion"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-automation"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
keywords:
  - "scheduled"
  - "release"
  - "promotion"
  - "automatically"
  - "promotes"
  - "releases"
  - "across"
  - "targets"
---

# Scheduled release promotion

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Scheduled release promotion automatically promotes releases across targets at specified times.

## Extended Definition

Scheduled release promotion automatically promotes releases across targets at specified times.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)

## Supporting Pages

### "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- Source ID: `site-docs-reference-required-3`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline, target definitions, and automation action: GKE In the deploy-automation-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev - targetId : automation - quickstart - staging profiles : [] strategy : canary : runtimeConfig : kubernetes : serviceNetworking : service : "my-service" deployment : "my-deployment" canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : promotes a release suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Cloud Run In the deploy-automation-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev profiles : [ dev ] - targetId : automation - quickstart - staging profiles : [ staging ] strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : Promotes a release to the next target suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Automate release promotion and rollout advancement in Cloud Deploy This page shows you how to use Cloud Deploy to automatically promote a release to a target and advance a rollout to its next phase.
- Because of the automated promotion, this release is promoted into the staging automatically.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample list releases(): Create a client client = deploy v1 .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample list releases(): Create a client client = deploy v1 .

