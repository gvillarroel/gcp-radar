---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.475Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy rollout blocking windows"
feature_slug: "cloud-deploy-rollout-blocking-windows"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-policy"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
keywords:
  - "deploy"
  - "rollout"
  - "blocking"
  - "windows"
  - "now"
  - "allows"
  - "rollouts"
  - "during"
---

# Cloud Deploy rollout blocking windows

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now allows blocking rollouts during specified time windows using deploy policies.

## Extended Definition

Cloud Deploy now allows blocking rollouts during specified time windows using deploy policies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)

## Supporting Pages

### "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the same directory in which you created the delivery pipeline and targets, create a new file, deploypolicy.yaml , with the following content: apiVersion : deploy.cloud.google.com/v1 description : Restrict all rollouts in the deploy-policy-pipeline resource for the next ten years kind : DeployPolicy metadata : name : quickstart-deploy-policy selectors : - deliveryPipeline : id : 'deploy-policy-pipeline' rules : - rolloutRestriction : id : no-rollouts timeWindows : timeZone : America/New York oneTimeWindows : - start : 2024-01-01 00:00 end : 2034-01-01 24:00 This policy blocks rollouts for 10 years, beginning January 1, 2024.
- Use a deploy policy to restrict rollouts This quickstart shows you how to prevent Cloud Deploy rollouts to a target during a specified time, and how to override that restriction.
- Target: "prod-target", Delivery pipeline: "deploy-policy-pipeline", policy rule: "no-rollouts" Override the policy restriction To deploy the sample application, which is blocked by the deploy policy, you need to override that policy.
- In this case, because rollouts are restricted according to the deploy policy, no rollout is created.

### "Class ListRolloutsAsyncPager (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListRolloutsRequest The initial request object. response google.cloud.deploy v1.types.ListRolloutsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListRolloutsResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListRolloutsResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListRolloutsRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListRolloutsPager (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListRolloutsPager)
- Source ID: `site-python-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListRolloutsRequest The initial request object. response google.cloud.deploy v1.types.ListRolloutsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListRolloutsResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListRolloutsResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListRolloutsRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample list rollouts(): Create a client client = deploy v1 .
- ListRolloutsRequest ( parent="parent value", ) Make the request page result = client. list rollouts (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.ListRolloutsRequest , dict]] The request object.
- DeployPolicy () deploy policy.rules.rollout restriction.id = "id value" deploy policy.rules.rollout restriction.time windows.time zone = "time zone value" request = deploy v1 .
- DeployPolicy () deploy policy.rules.rollout restriction.id = "id value" deploy policy.rules.rollout restriction.time windows.time zone = "time zone value" request = deploy v1 .

