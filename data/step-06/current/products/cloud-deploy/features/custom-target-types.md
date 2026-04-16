---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.666Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Custom target types"
feature_slug: "custom-target-types"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target"
  - "https://docs.cloud.google.com/deploy/docs/create-custom-target"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager"
keywords:
  - "custom"
  - "target"
  - "types"
  - "let"
  - "you"
  - "define"
  - "your"
  - "own"
---

# Custom target types

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Custom target types let you define your own target types and deploy to them with Cloud Deploy.

## Extended Definition

Custom target types let you define your own target types and deploy to them with Cloud Deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)
- [https://docs.cloud.google.com/deploy/docs/create-custom-target](https://docs.cloud.google.com/deploy/docs/create-custom-target)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)

## Supporting Pages

### "Quickstart: Define and use custom target type \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your delivery pipeline, custom target type, and target You can define your delivery pipeline, custom target type, and target in one file or in separate files.
- In this case, the file is the output of the custom render action you defined in your custom target type configuration, containing the string "Sample manifest rendered content".
- As part of this release and rollout, the render and deploy operations defined in your custom target type configuration are both run.
- This file contains the string you configured as output from the custom-deploy action, in your custom target type definition: Note: you can also see the render results in the Cloud Storage bucket, but it's quicker to use the release inspector, as shown in the first steps of this procedure.

### Create a custom target \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/create-custom-target](https://docs.cloud.google.com/deploy/docs/create-custom-target)
- Source ID: `site-docs-reference-required-3`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a release With your custom target type fully defined, and a target created to use that type, you can now create a release, in the normal way: gcloud deploy releases create [ RELEASE NAME ] \ --project =[ PROJECT NAME ] \ --region =[ REGION ] \ --delivery-pipeline =[ PIPELINE NAME ] Upon release creation your custom render is executed for each target in your delivery pipeline, including processing deploy parameters configured on the release, targets, or the delivery pipeline.
- Register your custom target type After you've configured the CustomTargetType , run the gcloud deploy apply command to register the CustomTargetType resource in a Google Cloud project: gcloud deploy apply --file =[ FILE ] --project =[ PROJECT ] --region =[ REGION ] Where: FILE is the name of the file in which you've defined this custom target type.
- The following is the high-level process for creating a custom target type and using it in your delivery pipeline: Create a containerized application or applications that include the functionality to deploy to your custom target, and that fulfill the Cloud Deploy requirements for custom target types.
- The syntax for a customTarget is as follows: customTarget : customTargetType : [ CUSTOM TARGET TYPE NAME ] Where CUSTOM TARGET TYPE NAME is the value from the name property defined in your custom target type configuration .

### "Class ListCustomTargetTypesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListCustomTargetTypesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListCustomTargetTypesAsyncPager (2.10.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListCustomTargetTypesRequest The initial request object. response google.cloud.deploy v1.types.ListCustomTargetTypesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.10.0 (latest) 2.9.0 2.8.0 2.7.1 2.6.3 2.5.0 2.4.1 2.3.0 2.2.0 2.1.0 2.0.0 1.19.1 1.18.1 1.17.3 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.1 1.10.1 1.9.0 1.8.0 1.7.0 1.6.1 1.5.0 1.4.1 1.3.1 1.2.1 1.1.1 1.0.0 0.3.2 0.2.0 0.1.1 ListCustomTargetTypesAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListCustomTargetTypes requests and continue to iterate through the custom target types field on the corresponding responses.

