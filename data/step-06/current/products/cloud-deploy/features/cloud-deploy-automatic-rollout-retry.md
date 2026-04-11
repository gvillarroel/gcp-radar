---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.749Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy automatic rollout retry"
feature_slug: "cloud-deploy-automatic-rollout-retry"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/automation"
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
Coverage: LOW

## Step 02 Summary

Cloud Deploy now automatically retries failed rollouts.

## Extended Definition

Cloud Deploy now automatically retries failed rollouts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RetryJobRequest ( rollout="rollout value", phase id="phase id value", job id="job id value", ) Make the request response = await client. retry job (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.RetryJobRequest , dict]] The request object.
- Iterating over this object will yield results and resolve additional pages automatically. list deploy policies list deploy policies ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. list rollouts list rollouts ( request : typing .
- RetryJobResponse Retries the specified Job in a Rollout.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RetryJobRequest ( rollout="rollout value", phase id="phase id value", job id="job id value", ) Make the request response = client. retry job (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.RetryJobRequest , dict] The request object.
- Iterating over this object will yield results and resolve additional pages automatically. list deploy policies list deploy policies ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. list rollouts list rollouts ( request : typing .
- RetryJobResponse Retries the specified Job in a Rollout.

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Repair a rollout You can configure Cloud Deploy to automatically retry a failed rollout.
- This includes retrying the rollout a specified number of times, and automatically rolling back if that number of retries fail.
- Actions you can automate In Cloud Deploy, you can automate the following release and rollout activities: Promote a release automatically You can configure Cloud Deploy to promote your release automatically, upon a successful rollout to a target.
- You can configure Cloud Deploy to automatically perform release-related and rollout-related tasks for a given delivery pipeline.

