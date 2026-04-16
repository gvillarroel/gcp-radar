---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.498Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Python repositories in Preview"
feature_slug: "python-repositories-in-preview"
latest_feature_date: "2021-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesPager"
keywords:
  - "repositories"
  - "python"
  - "preview"
  - "adds"
---

# Python repositories in Preview

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry adds Preview support for Python repositories.

## Extended Definition

Artifact Registry adds Preview support for Python repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesPager)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- PublicRepository Predefined list of publicly available Python repositories like PyPI.org.
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.

### "Class ListRepositoriesAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRepositoriesAsyncPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRepositoriesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRepositoriesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRepositoriesAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListRepositories requests and continue to iterate through the repositories field on the corresponding responses.

### "Class ListRepositoriesPager (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesPager)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRepositoriesPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRepositoriesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRepositoriesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRepositoriesPager ( method : typing .
- If there are more pages, the iter method will make additional ListRepositories requests and continue to iterate through the repositories field on the corresponding responses.

