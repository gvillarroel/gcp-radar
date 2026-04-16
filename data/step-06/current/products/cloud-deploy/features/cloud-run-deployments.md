---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.673Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Run deployments"
feature_slug: "cloud-run-deployments"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager"
keywords:
  - "run"
  - "deployments"
  - "deploy"
  - "supports"
  - "deploying"
  - "applications"
---

# Cloud Run deployments

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy supports deploying applications to Cloud Run.

## Extended Definition

Cloud Deploy supports deploying applications to Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager)

## Supporting Pages

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure each hook to run in a specified Cloud Deploy execution environment , but if you're deploying to Google Kubernetes Engine you can optionally configure it to run on the GKE cluster where you're deploying your application.
- Home Documentation Application development Cloud Deploy Guides Send feedback Run hooks before and after deploying Stay organized with collections Save and categorize content based on your preferences.
- What's next Learn more about tasks Try the quickstart: Run hooks before and after deploying .
- Deployments to Cloud Run can only run hooks in the Cloud Deploy execution environment.

### "Class ListAutomationRunsAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListAutomationRunsRequest The initial request object. response google.cloud.deploy v1.types.ListAutomationRunsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListAutomationRunsResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListAutomationRunsResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListAutomationRunsRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListAutomationRunsPager (2.10.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListAutomationRunsRequest The initial request object. response google.cloud.deploy v1.types.ListAutomationRunsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListAutomationRunsResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListAutomationRunsResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListAutomationRunsRequest , response : google . cloud . deploy v1 . types . cloud deploy .

