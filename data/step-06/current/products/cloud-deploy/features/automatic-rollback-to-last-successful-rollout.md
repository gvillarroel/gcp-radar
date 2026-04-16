---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.663Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Automatic rollback to last successful rollout"
feature_slug: "automatic-rollback-to-last-successful-rollout"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/automation"
  - "https://docs.cloud.google.com/deploy/docs/automation-rules"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types"
keywords:
  - "automatic"
  - "rollback"
  - "last"
  - "successful"
  - "rollout"
  - "restores"
  - "deployment"
  - "state"
---

# Automatic rollback to last successful rollout

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Automatic rollback restores deployment state to the most recent successful rollout when a rollout fails.

## Extended Definition

Automatic rollback restores deployment state to the most recent successful rollout when a rollout fails.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types)

## Supporting Pages

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions you can automate In Cloud Deploy, you can automate the following release and rollout activities: Promote a release automatically You can configure Cloud Deploy to promote your release automatically, upon a successful rollout to a target.
- If all retries fail (or none are configured), a new rollout is created to rollback to the most recent successful release on the target.
- For example, if you have three targets, dev , staging , and prod , you can configure an automation such that the release is promoted to prod , without further human interaction, upon a successful deployment into staging .
- If the rollout succeeds, and the automation is advanceRolloutRule and the target uses a canary deployment strategy: Execution waits for the identified source phase , if there is one.

### Using automation rules \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation-rules](https://docs.cloud.google.com/deploy/docs/automation-rules)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available automation rules The following automation rules are available in Cloud Deploy: Rule Description timedPromoteReleaseRule Automatically promote from one target to the next based on a cron schedule. promoteReleaseRule Automatically promotes a release into the indicated target after successful rollout in the previous target in the progression. advanceRolloutRule Automatically advances a rollout from the indicated phase to the next phase. repairRolloutRule Automatically retry the failed job or jobs in the rollout a specified number of times, and roll back if all retries fail.
- Configure an advanceRolloutRule automation rule The advanceRolloutRule advances your rollout, automatically, after successful completion of one phase, into the next phase.
- If all retry attempts fail, a rollback is started by creating a new rollout to deploy the target's most recent successful release to that target.
- That is, when any of the phases listed finish successfully, the rollout is automatically advanced from that phase to the next phase.

### "Package types (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types)
- Source ID: `site-python-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AdvanceRolloutRule The AdvanceRollout automation rule will automatically advance a successful Rollout to the next phase.
- Setting any member of the oneof automatically clears all other members. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields CanaryDeployment CanaryDeployment represents the canary deployment configuration CancelAutomationRunRequest The request object used by CancelAutomationRun .
- Setting any member of the oneof automatically clears all other members. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields RepairRolloutOperation Contains the information for an automated repair rollout operation.
- Setting any member of the oneof automatically clears all other members. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields SkaffoldSupportState The support state of a specific Skaffold version.

