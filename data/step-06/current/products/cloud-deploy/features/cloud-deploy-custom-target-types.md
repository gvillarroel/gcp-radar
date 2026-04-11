---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.731Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy custom target types"
feature_slug: "cloud-deploy-custom-target-types"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes"
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
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports defining custom target types through user-defined actions; Cloud Deploy now supports defining custom target types and deploying to targets of those types.

## Extended Definition

Cloud Deploy now supports defining custom target types through user-defined actions; Cloud Deploy now supports defining custom target types and deploying to targets of those types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)

## Supporting Pages

### "Class ListCustomTargetTypesPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesPager)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListCustomTargetTypesRequest The initial request object. response google.cloud.deploy v1.types.ListCustomTargetTypesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional ListCustomTargetTypes requests and continue to iterate through the custom target types field on the corresponding responses.
- This class thinly wraps an initial ListCustomTargetTypesResponse object, and provides an iter method to iterate through its custom target types field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list custom target types requests.

### "Class ListCustomTargetTypesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListCustomTargetTypesRequest The initial request object. response google.cloud.deploy v1.types.ListCustomTargetTypesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListCustomTargetTypes requests and continue to iterate through the custom target types field on the corresponding responses.
- This class thinly wraps an initial ListCustomTargetTypesResponse object, and provides an aiter method to iterate through its custom target types field.
- ListCustomTargetTypesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .

### "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.customTargetTypes Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "name" : string , "customTargetTypeId" : string , "uid" : string , "description" : string , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "etag" : string , // Union field definition can be only one of the following: "customActions" : { object ( CustomTargetSkaffoldActions ) } // End of list of possible types for union field definition . } Fields name string Identifier.
- Methods create Creates a new CustomTargetType in a given project and location. delete Deletes a single CustomTargetType. get Gets details of a single CustomTargetType. getIamPolicy Gets the access control policy for a resource. list Lists CustomTargetTypes in a given project and location. patch Updates a single CustomTargetType. setIamPolicy Sets the access control policy on the specified resource.
- Resource: CustomTargetType JSON representation CustomTargetSkaffoldActions JSON representation SkaffoldModules JSON representation SkaffoldGitSource JSON representation SkaffoldGCSSource JSON representation SkaffoldGCBRepoSource JSON representation Methods Resource: CustomTargetType A CustomTargetType resource in the Cloud Deploy API.

