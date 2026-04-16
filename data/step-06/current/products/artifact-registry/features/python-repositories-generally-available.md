---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.496Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Python repositories generally available"
feature_slug: "python-repositories-generally-available"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "reaches"
  - "availability"
  - "generally"
  - "repositories"
  - "python"
  - "available"
---

# Python repositories generally available

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Support for Python repositories in Artifact Registry reaches general availability.

## Extended Definition

Support for Python repositories in Artifact Registry reaches general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- PublicRepository Predefined list of publicly available Python repositories like PyPI.org.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### "Class ArtifactRegistryAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)
- Source ID: `site-python-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 async def sample list repositories(): Create a client client = artifactregistry v1 .
- Dict [ str , str ] Parses a yum artifact path into its component segments. project settings path project settings path ( project : str ) - > str Returns a fully-qualified project settings string. python package path python package path ( project : str , location : str , repository : str , python package : str ) - > str Returns a fully-qualified python package string. repository path repository path ( project : str , location : str , repository : str ) - > str Returns a fully-qualified repository string. rule path rule path ( project : str , location : str , repository : str , rule : str ) - > str Returns a fully-qualified rule string. secret version path secret version path ( project : str , secret : str , secret version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = artifactregistry v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = artifactregistry v1 .

### "Class ArtifactRegistryClient (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)
- Source ID: `site-python-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 def sample list repositories(): Create a client client = artifactregistry v1 .
- Dict [ str , str ] Parses a yum artifact path into its component segments. project settings path project settings path ( project : str ) - > str Returns a fully-qualified project settings string. python package path python package path ( project : str , location : str , repository : str , python package : str ) - > str Returns a fully-qualified python package string. repository path repository path ( project : str , location : str , repository : str ) - > str Returns a fully-qualified repository string. rule path rule path ( project : str , location : str , repository : str , rule : str ) - > str Returns a fully-qualified rule string. secret version path secret version path ( project : str , secret : str , secret version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = artifactregistry v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import artifactregistry v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = artifactregistry v1 .

