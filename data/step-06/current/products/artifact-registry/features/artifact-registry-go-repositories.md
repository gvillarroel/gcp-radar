---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.489Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Go repositories"
feature_slug: "artifact-registry-go-repositories"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager"
keywords:
  - "status"
  - "moved"
  - "generally"
  - "repositories"
  - "available"
---

# Artifact Registry Go repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Go repositories in Artifact Registry moved to generally available status.

## Extended Definition

Go repositories in Artifact Registry moved to generally available status.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Public Repository Publicly available Apt repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Public Repository Publicly available Yum repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Builder Publicly available Apt repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Builder Publicly available Yum repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.

### "Class ListRepositoriesAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All the usual ListRepositoriesResponse attributes are available on the pager.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRepositoriesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRepositoriesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRepositoriesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRepositoriesAsyncPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.

