---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.467Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy custom target types"
feature_slug: "cloud-deploy-custom-target-types"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
keywords:
  - "deploy"
  - "custom"
  - "target"
  - "types"
  - "now"
  - "supports"
  - "defining"
  - "through"
---

# Cloud Deploy custom target types

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports defining custom target types through user-defined actions; Cloud Deploy now supports defining custom target types and deploying to targets of those types.

## Extended Definition

Cloud Deploy now supports defining custom target types through user-defined actions; Cloud Deploy now supports defining custom target types and deploying to targets of those types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)

## Supporting Pages

### "Class ListCustomTargetTypesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListCustomTargetTypesRequest The initial request object. response google.cloud.deploy v1.types.ListCustomTargetTypesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListCustomTargetTypes requests and continue to iterate through the custom target types field on the corresponding responses.
- This class thinly wraps an initial ListCustomTargetTypesResponse object, and provides an aiter method to iterate through its custom target types field.
- ListCustomTargetTypesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListCustomTargetTypesPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager)
- Source ID: `site-python-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListCustomTargetTypesRequest The initial request object. response google.cloud.deploy v1.types.ListCustomTargetTypesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional ListCustomTargetTypes requests and continue to iterate through the custom target types field on the corresponding responses.
- This class thinly wraps an initial ListCustomTargetTypesResponse object, and provides an iter method to iterate through its custom target types field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list custom target types requests.

### "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.customTargetTypes Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "name" : string , "customTargetTypeId" : string , "uid" : string , "description" : string , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "etag" : string , // Union field definition can be only one of the following: "customActions" : { object ( CustomTargetSkaffoldActions ) } // End of list of possible types for union field definition . } Fields name string Identifier.
- Methods create Creates a new CustomTargetType in a given project and location. delete Deletes a single CustomTargetType. get Gets details of a single CustomTargetType. getIamPolicy Gets the access control policy for a resource. list Lists CustomTargetTypes in a given project and location. patch Updates a single CustomTargetType. setIamPolicy Sets the access control policy on the specified resource.
- Resource: CustomTargetType JSON representation CustomTargetSkaffoldActions JSON representation SkaffoldModules JSON representation SkaffoldGitSource JSON representation SkaffoldGCSSource JSON representation SkaffoldGCBRepoSource JSON representation Methods Resource: CustomTargetType A CustomTargetType resource in the Cloud Deploy API.

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example deploy results file The following is a sample results.json file output from a custom deploy: { "resultStatus" : "SUCCEEDED" , "artifactFiles" : [ "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file1.yaml" , "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file2.yaml" ], "failureMessage" : "" , "skipMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Further information about custom targets Here are some things to keep in mind when setting up and using custom target types.
- A custom target is a target that represents an arbitrary output environment other than a runtime that Cloud Deploy supports.
- Example render results file The following is a sample results.json file output from a custom render: { "resultStatus" : "SUCCEEDED" , "manifestFile" : "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/manifest.yaml" , "failureMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Inputs to custom deploys For custom deploys, Cloud Deploy provides the following inputs, as environment variables: CLOUD DEPLOY PROJECT The Google Cloud project number for the project in which the custom target is created.
- Files listed here are populated in job run resources as deploy artifacts. (Optional) a failure message, if the custom deploy is unsuccessful (returning a FAILED state) This message is used to populate the failure message on the job run for this deploy. (Optional) a skip message, to provide additional information if the deploy returns a SKIPPED status. (Optional) a map of any metadata you want to include Your custom target creates this metadata.

