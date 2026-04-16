---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.470Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy performance monitoring and rollback automation"
feature_slug: "cloud-deploy-performance-monitoring-and-rollback-automation"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/analysis"
  - "https://docs.cloud.google.com/deploy/docs/automation-rules"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
keywords:
  - "deploy"
  - "performance"
  - "monitoring"
  - "and"
  - "rollback"
  - "automation"
  - "now"
  - "supports"
---

# Cloud Deploy performance monitoring and rollback automation

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports monitoring deployed application performance with external platforms and automatically triggering rollback actions.

## Extended Definition

Cloud Deploy now supports monitoring deployed application performance with external platforms and automatically triggering rollback actions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)

## Supporting Pages

### Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Deploy supports Google Cloud Observability and can be extended to support other monitoring platforms, such as Datadog or Prometheus .
- Cloud Deploy lets you analyze the performance of your deployed applications using the monitoring platform and metrics of your choice.
- Supported metrics providers Cloud Deploy supports analysis using metrics provided in either of the following ways: Direct integration with Google Cloud Observability alerting policies , based on telemetry and logs in Google Cloud Observability Integration with non-Google metrics system (for example, Prometheus or Datadog) This type of custom analysis requires that your organization provide a container with functionality to support the specific metrics system.
- Although Cloud Deploy offers deployment verification , which you can use to run arbitrary containers to validate a deployment, analysis lets you use telemetry data from Google Cloud Observability or the monitoring service of your choice to evaluate the performance of your applications over time.

### Using automation rules \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Abort a repairRolloutRule automation run If you run any of the following commands on your rollout, the repairRolloutRule automation is aborted: Retry job Cancel rollout Ignore job Terminate job run Example The following is an example of an automation configuration with a repairRolloutRule : apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : regular-repair/regular description : repair regular rollouts suspended : false serviceAccount : (REDACTED) selector : targets : - id : t1 rules : - repairRolloutRule : id : "repair-rollout" repairPhases : - retry : attempts : 3 wait : 1m backoffMode : LINEAR - rollback : destinationPhase : "stable" In this automation, if a rollout fails on the identified target, that rollout is retried up to 3 times, with a one-minute wait between retry attempt.
- Available automation rules The following automation rules are available in Cloud Deploy: Rule Description timedPromoteReleaseRule Automatically promote from one target to the next based on a cron schedule. promoteReleaseRule Automatically promotes a release into the indicated target after successful rollout in the previous target in the progression. advanceRolloutRule Automatically advances a rollout from the indicated phase to the next phase. repairRolloutRule Automatically retry the failed job or jobs in the rollout a specified number of times, and roll back if all retries fail.
- For example, if you have a canary deployment strategy configured on a target, with phases of 25% , 50% , and stable , you could configure an automation rule that advances the phase automatically to stable after the 50% phase finishes.
- Home Documentation Application development Cloud Deploy Guides Send feedback Using automation rules Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- CreateAutomationRequest ( parent="parent value", automation id="automation id value", automation=automation, ) Make the request operation = client. create automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.CreateAutomationRequest , dict]] The request object.
- UpdateAutomationRequest ( automation=automation, ) Make the request operation = client. update automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.UpdateAutomationRequest , dict]] The request object.
- DeleteAutomationRequest ( name="name value", ) Make the request operation = client. delete automation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.DeleteAutomationRequest , dict]] The request object.
- RollbackTargetRequest ( name="name value", target id="target id value", rollout id="rollout id value", ) Make the request response = await client. rollback target (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.RollbackTargetRequest , dict]] The request object.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- CreateAutomationRequest ( parent="parent value", automation id="automation id value", automation=automation, ) Make the request operation = client. create automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.CreateAutomationRequest , dict] The request object.
- UpdateAutomationRequest ( automation=automation, ) Make the request operation = client. update automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.UpdateAutomationRequest , dict] The request object.
- DeleteAutomationRequest ( name="name value", ) Make the request operation = client. delete automation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.DeleteAutomationRequest , dict] The request object.
- RollbackTargetRequest ( name="name value", target id="target id value", rollout id="rollout id value", ) Make the request response = client. rollback target (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.RollbackTargetRequest , dict] The request object.

