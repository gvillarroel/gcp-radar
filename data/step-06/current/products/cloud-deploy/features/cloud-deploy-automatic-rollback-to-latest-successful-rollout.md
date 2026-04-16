---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.474Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy automatic rollback to latest successful rollout"
feature_slug: "cloud-deploy-automatic-rollback-to-latest-successful-rollout"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-automation"
  - "https://docs.cloud.google.com/deploy/docs/automation-rules"
keywords:
  - "deploy"
  - "automatic"
  - "rollback"
  - "to"
  - "latest"
  - "successful"
  - "rollout"
  - "now"
---

# Cloud Deploy automatic rollback to latest successful rollout

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now automatically rolls back to the most recent successful rollout.

## Extended Definition

Cloud Deploy now automatically rolls back to the most recent successful rollout.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample advance rollout(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample approve rollout(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample rollback target(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample cancel rollout(): Create a client client = deploy v1 .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample advance rollout(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample approve rollout(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample rollback target(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample cancel rollout(): Create a client client = deploy v1 .

### "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- Source ID: `site-docs-root-2`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run In the deploy-automation-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev profiles : [ dev ] - targetId : automation - quickstart - staging profiles : [ staging ] strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : Promotes a release to the next target suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Automate release promotion and rollout advancement in Cloud Deploy This page shows you how to use Cloud Deploy to automatically promote a release to a target and advance a rollout to its next phase.
- Because this quickstart includes two automations, two things happen automatically: After a successful deployment in the first target, the release is automatically promoted to the second target.
- Create your delivery pipeline, target definitions, and automation action: GKE In the deploy-automation-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev - targetId : automation - quickstart - staging profiles : [] strategy : canary : runtimeConfig : kubernetes : serviceNetworking : service : "my-service" deployment : "my-deployment" canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : promotes a release suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.

### Using automation rules \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available automation rules The following automation rules are available in Cloud Deploy: Rule Description timedPromoteReleaseRule Automatically promote from one target to the next based on a cron schedule. promoteReleaseRule Automatically promotes a release into the indicated target after successful rollout in the previous target in the progression. advanceRolloutRule Automatically advances a rollout from the indicated phase to the next phase. repairRolloutRule Automatically retry the failed job or jobs in the rollout a specified number of times, and roll back if all retries fail.
- If all retry attempts fail, a rollback is started by creating a new rollout to deploy the target's most recent successful release to that target.
- Abort a repairRolloutRule automation run If you run any of the following commands on your rollout, the repairRolloutRule automation is aborted: Retry job Cancel rollout Ignore job Terminate job run Example The following is an example of an automation configuration with a repairRolloutRule : apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : regular-repair/regular description : repair regular rollouts suspended : false serviceAccount : (REDACTED) selector : targets : - id : t1 rules : - repairRolloutRule : id : "repair-rollout" repairPhases : - retry : attempts : 3 wait : 1m backoffMode : LINEAR - rollback : destinationPhase : "stable" In this automation, if a rollout fails on the identified target, that rollout is retried up to 3 times, with a one-minute wait between retry attempt.
- For example, if you have three targets, you can set up this rule so that when the release is successfully deployed into the first target, it's automatically promoted to the second target.

