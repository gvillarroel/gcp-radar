---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.475Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy automatic rollout retry"
feature_slug: "cloud-deploy-automatic-rollout-retry"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/automation"
  - "https://docs.cloud.google.com/deploy/docs/automation-rules"
keywords:
  - "deploy"
  - "automatic"
  - "rollout"
  - "retry"
  - "now"
  - "automatically"
  - "retries"
  - "failed"
---

# Cloud Deploy automatic rollout retry

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now automatically retries failed rollouts.

## Extended Definition

Cloud Deploy now automatically retries failed rollouts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RetryJobRequest ( rollout="rollout value", phase id="phase id value", job id="job id value", ) Make the request response = await client. retry job (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.RetryJobRequest , dict]] The request object.
- Iterating over this object will yield results and resolve additional pages automatically. list deploy policies list deploy policies ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. list rollouts list rollouts ( request : typing .
- RetryJobResponse Retries the specified Job in a Rollout.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RetryJobRequest ( rollout="rollout value", phase id="phase id value", job id="job id value", ) Make the request response = client. retry job (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.RetryJobRequest , dict] The request object.
- Iterating over this object will yield results and resolve additional pages automatically. list deploy policies list deploy policies ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. list rollouts list rollouts ( request : typing .
- RetryJobResponse Retries the specified Job in a Rollout.

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Repair a rollout You can configure Cloud Deploy to automatically retry a failed rollout.
- This includes retrying the rollout a specified number of times, and automatically rolling back if that number of retries fail.
- Actions you can automate In Cloud Deploy, you can automate the following release and rollout activities: Promote a release automatically You can configure Cloud Deploy to promote your release automatically, upon a successful rollout to a target.
- You can configure Cloud Deploy to automatically perform release-related and rollout-related tasks for a given delivery pipeline.

### Using automation rules \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available automation rules The following automation rules are available in Cloud Deploy: Rule Description timedPromoteReleaseRule Automatically promote from one target to the next based on a cron schedule. promoteReleaseRule Automatically promotes a release into the indicated target after successful rollout in the previous target in the progression. advanceRolloutRule Automatically advances a rollout from the indicated phase to the next phase. repairRolloutRule Automatically retry the failed job or jobs in the rollout a specified number of times, and roll back if all retries fail.
- For example, if WAIT TIME is 1m, and backoffMode is set to EXPONENTIAL , then the time between the failure and the first retry is 1 minute, the time between the first and second retries is 2 minutes, and the time between the second and third retries is 4 minutes. rollback Optional, whether or not to roll back the failed rollout after all retry attempts are exhausted. [PHASE NAME] Is the name of a specific phase you want to roll back to.
- Abort a repairRolloutRule automation run If you run any of the following commands on your rollout, the repairRolloutRule automation is aborted: Retry job Cancel rollout Ignore job Terminate job run Example The following is an example of an automation configuration with a repairRolloutRule : apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : regular-repair/regular description : repair regular rollouts suspended : false serviceAccount : (REDACTED) selector : targets : - id : t1 rules : - repairRolloutRule : id : "repair-rollout" repairPhases : - retry : attempts : 3 wait : 1m backoffMode : LINEAR - rollback : destinationPhase : "stable" In this automation, if a rollout fails on the identified target, that rollout is retried up to 3 times, with a one-minute wait between retry attempt.
- For example, if you have a canary deployment strategy configured on a target, with phases of 25% , 50% , and stable , you could configure an automation rule that advances the phase automatically to stable after the 50% phase finishes.

