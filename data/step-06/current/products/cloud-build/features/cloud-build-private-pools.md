---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.751Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pools"
feature_slug: "cloud-build-private-pools"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
  - "https://docs.cloud.google.com/build/docs/release-notes"
keywords:
  - "build"
  - "private"
  - "pools"
  - "provide"
  - "dedicated"
  - "regional"
  - "environments"
  - "with"
---

# Cloud Build private pools

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build private pools provide dedicated regional build environments with greater customization and private network access.

## Extended Definition

Cloud Build private pools provide dedicated regional build environments with greater customization and private network access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)

## Supporting Pages

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- For an overview of private pools, see Private pools overview. crypto key path crypto key path ( project : str , location : str , keyring : str , key : str ) - > str Returns a fully-qualified crypto key string. default service account path default service account path ( project : str , location : str ) - > str Returns a fully-qualified default service account string. delete build trigger delete build trigger ( request : typing .
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Private pools offer regionalization and greater customization over the build environment, including the ability to access resources in a private network with support for VPC Service Controls .
- The free tier now offers 2,500 build-minutes per month to provide you with more flexibility to use free build-minutes however you want throughout the month instead of being limited to a daily allocation.
- July 09, 2024 Feature Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories with the Terraform provider for Google Cloud .
- January 18, 2023 Feature Users can now configure private pools to consume fewer IP addresses within their peered Virtual Private Clouds (VPCs).

