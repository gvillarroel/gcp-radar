---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.881Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pools"
feature_slug: "cloud-build-private-pools"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
keywords:
  - "environments"
  - "provide"
  - "greater"
  - "dedicated"
  - "regional"
  - "pools"
  - "private"
---

# Cloud Build private pools

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build private pools provide dedicated regional build environments with greater customization and private network access.

## Extended Definition

Cloud Build private pools provide dedicated regional build environments with greater customization and private network access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private pools are private, dedicated pools of workers that offer greater customization over the build environment, including the ability to access resources in a private network.
- Private pools, similar to default pools, are hosted and fully-managed by Cloud Build and scale up and down to zero, with no infrastructure to set up, upgrade, or scale.
- Default pools and private pools By default, when you run a build on Cloud Build, the build runs in a secure, hosted environment with access to the public internet.
- To learn more about private pools and the feature difference between default pool and private pool, see Private pool overview .

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- For an overview of private pools, see Private pools overview. crypto key path crypto key path ( project : str , location : str , keyring : str , key : str ) - > str Returns a fully-qualified crypto key string. default service account path default service account path ( project : str , location : str ) - > str Returns a fully-qualified default service account string. delete build trigger delete build trigger ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample list worker pools(): Create a client client = cloudbuild v1.
- For an overview of private pools, see Private pools overview. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- For an overview of private pools, see Private pools overview. crypto key path crypto key path ( project : str , location : str , keyring : str , key : str ) - > str Returns a fully-qualified crypto key string. default service account path default service account path ( project : str , location : str ) - > str Returns a fully-qualified default service account string. delete build trigger delete build trigger ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample list worker pools(): Create a client client = cloudbuild v1.
- For an overview of private pools, see Private pools overview. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.

