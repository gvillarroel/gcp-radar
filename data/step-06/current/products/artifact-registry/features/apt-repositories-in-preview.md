---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.496Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Apt repositories in Preview"
feature_slug: "apt-repositories-in-preview"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager"
keywords:
  - "introduces"
  - "repositories"
  - "preview"
---

# Apt repositories in Preview

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry introduces Apt repositories in Preview.

## Extended Definition

Artifact Registry introduces Apt repositories in Preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Methods create Creates a repository. delete Deletes a repository and all of its contents. exportArtifact Exports an artifact to a Cloud Storage bucket. get Gets a repository. getIamPolicy Gets the IAM policy for a given resource. list Lists repositories. patch Updates a repository. setIamPolicy Updates the IAM policy for a given resource. testIamPermissions Tests if the caller has a list of permissions on a resource.
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.

### "REST Resource: projects.locations.repositories.attachments \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments)
- Source ID: `site-api-reference`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Reference Send feedback REST Resource: projects.locations.repositories.attachments Stay organized with collections Save and categorize content based on your preferences.
- E.g. projects/p1/locations/us-central1/repositories/repo1/files/sha:<sha-of-file> . ociVersionName string Output only.
- E.g. projects/p1/locations/us-central1/repositories/repo1/packages/p1/versions/v1 . type string Type of attachment.
- E.g. projects/p1/locations/us/repositories/repo/attachments/sbom . target string Required.

### "Class ListRepositoriesAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRepositoriesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRepositoriesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRepositoriesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRepositoriesAsyncPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListRepositories requests and continue to iterate through the repositories field on the corresponding responses.

