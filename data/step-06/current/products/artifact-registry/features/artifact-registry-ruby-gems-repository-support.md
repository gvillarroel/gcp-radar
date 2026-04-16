---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.477Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Ruby gems repository support"
feature_slug: "artifact-registry-ruby-gems-repository-support"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "gems"
  - "managing"
  - "ruby"
  - "added"
  - "repositories"
  - "repository"
---

# Artifact Registry Ruby gems repository support

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry added support for managing Ruby gems repositories.

## Extended Definition

Artifact Registry added support for managing Ruby gems repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Methods create Creates a repository. delete Deletes a repository and all of its contents. exportArtifact Exports an artifact to a Cloud Storage bucket. get Gets a repository. getIamPolicy Gets the IAM policy for a given resource. list Lists repositories. patch Updates a repository. setIamPolicy Updates the IAM policy for a given resource. testIamPermissions Tests if the caller has a list of permissions on a resource.
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.
- JSON representation { "id" : string , "repository" : string , "priority" : integer } Fields id string The user-provided ID of the upstream policy. repository string A reference to the repository resource, for example: projects/p1/locations/us-central1/repositories/repo1 . priority integer Entries with a greater priority value take precedence in the pull order.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: docker-credential-gcr configure-docker --registries=us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- To view a list of supported repository locations, run the command: gcloud artifacts locations list The command displays the credHelpers section of your current Docker configuration and the updated configuration after adding the specified hostnames.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: gcloud auth configure-docker us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- You can reduce latency and network egress costs by creating repositories in the same region where you run GKE, Cloud Run, Cloud Build, and other Google Cloud services that interact with the repository.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.
- If you have existing repositories in non-compliant locations, you must move your artifacts to a repository in a compliant location yourself and then delete the non-compliant repository.
- Your repository administrator must explicitly grant these services access to repositories if: Artifact Registry is in a different project than the service that is interacting with it.

