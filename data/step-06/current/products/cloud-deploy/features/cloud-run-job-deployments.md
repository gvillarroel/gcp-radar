---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.669Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Run job deployments"
feature_slug: "cloud-run-job-deployments"
latest_feature_date: "2023-10-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/deploy/docs/analysis"
  - "https://docs.cloud.google.com/deploy/docs/automation-rules"
keywords:
  - "run"
  - "job"
  - "deployments"
  - "deploy"
  - "supports"
  - "deploying"
  - "jobs"
  - "addition"
---

# Cloud Run job deployments

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy supports deploying Cloud Run jobs in addition to Cloud Run services.

## Extended Definition

Cloud Deploy supports deploying Cloud Run jobs in addition to Cloud Run services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)

## Supporting Pages

### Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- Source ID: `site-docs-reference-2`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported metrics providers Cloud Deploy supports analysis using metrics provided in either of the following ways: Direct integration with Google Cloud Observability alerting policies , based on telemetry and logs in Google Cloud Observability Integration with non-Google metrics system (for example, Prometheus or Datadog) This type of custom analysis requires that your organization provide a container with functionality to support the specific metrics system.
- Home Documentation Application development Cloud Deploy Guides Send feedback Run analysis jobs in Cloud Deploy Stay organized with collections Save and categorize content based on your preferences.
- Deploy your application The analysis job runs after the deploy job, and after the verify job, if your release includes one, but before any post-deploy jobs , if your release includes any.
- If you use a custom or custom-automated canary deployment, you configure analysis jobs inside the configuration for each phase you want to analyse.

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure each hook to run in a specified Cloud Deploy execution environment , but if you're deploying to Google Kubernetes Engine you can optionally configure it to run on the GKE cluster where you're deploying your application.
- Home Documentation Application development Cloud Deploy Guides Send feedback Run hooks before and after deploying Stay organized with collections Save and categorize content based on your preferences.
- Deploy parameters as environment variables In addition to the environment variables listed in this section, Cloud Deploy can pass to your custom containers any deploy parameters you've set.
- These programs, run in this way, are called "hooks." Predeploy and postdeploy hooks run as predeploy and postdeploy jobs on the rollout.

### Using automation rules \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- Source ID: `site-docs-reference-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available automation rules The following automation rules are available in Cloud Deploy: Rule Description timedPromoteReleaseRule Automatically promote from one target to the next based on a cron schedule. promoteReleaseRule Automatically promotes a release into the indicated target after successful rollout in the previous target in the progression. advanceRolloutRule Automatically advances a rollout from the indicated phase to the next phase. repairRolloutRule Automatically retry the failed job or jobs in the rollout a specified number of times, and roll back if all retries fail.
- This automation rule is useful for canary deployments.
- Abort a repairRolloutRule automation run If you run any of the following commands on your rollout, the repairRolloutRule automation is aborted: Retry job Cancel rollout Ignore job Terminate job run Example The following is an example of an automation configuration with a repairRolloutRule : apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : regular-repair/regular description : repair regular rollouts suspended : false serviceAccount : (REDACTED) selector : targets : - id : t1 rules : - repairRolloutRule : id : "repair-rollout" repairPhases : - retry : attempts : 3 wait : 1m backoffMode : LINEAR - rollback : destinationPhase : "stable" In this automation, if a rollout fails on the identified target, that rollout is retried up to 3 times, with a one-minute wait between retry attempt.
- The rules stanza shown here goes inside your automation definition . rules : - repairRolloutRule : id : "[RULE ID]" phases : [ PHASES TO REPAIR ] jobs : [ JOBS TO REPAIR ] repairPhases : - retry : attempts : [ NUMBER OF ATTEMPTS ] wait : [ WAIT TIME ] backoffMode : [ LINEAR EXPONENTIAL ] - rollback : destinationPhase : [ PHASE NAME ] disableRollbackIfRolloutPending : [ true false ] Where: [RULE ID] Is any name you want to give to this rule.

