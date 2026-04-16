---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.492Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Apt and Yum repository support in Artifact Registry"
feature_slug: "apt-and-yum-repository-support-in-artifact-registry"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient"
keywords:
  - "generally"
  - "repositories"
  - "repository"
---

# Apt and Yum repository support in Artifact Registry

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Apt and Yum repositories are now generally available in Artifact Registry.

## Extended Definition

Apt and Yum repositories are now generally available in Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Methods create Creates a repository. delete Deletes a repository and all of its contents. exportArtifact Exports an artifact to a Cloud Storage bucket. get Gets a repository. getIamPolicy Gets the IAM policy for a given resource. list Lists repositories. patch Updates a repository. setIamPolicy Updates the IAM policy for a given resource. testIamPermissions Tests if the caller has a list of permissions on a resource.
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.
- JSON representation { "id" : string , "repository" : string , "priority" : integer } Fields id string The user-provided ID of the upstream policy. repository string A reference to the repository resource, for example: projects/p1/locations/us-central1/repositories/repo1 . priority integer Entries with a greater priority value take precedence in the pull order.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- You can reduce latency and network egress costs by creating repositories in the same region where you run GKE, Cloud Run, Cloud Build, and other Google Cloud services that interact with the repository.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.
- If you have existing repositories in non-compliant locations, you must move your artifacts to a repository in a compliant location yourself and then delete the non-compliant repository.
- Your repository administrator must explicitly grant these services access to repositories if: Artifact Registry is in a different project than the service that is interacting with it.

### "Class ArtifactRegistryAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. tag path tag path ( project : str , location : str , repository : str , package : str , tag : str ) - > str Returns a fully-qualified tag string. test iam permissions test iam permissions ( request : typing .
- Dict [ str , str ] Parses a yum artifact path into its component segments. project settings path project settings path ( project : str ) - > str Returns a fully-qualified project settings string. python package path python package path ( project : str , location : str , repository : str , python package : str ) - > str Returns a fully-qualified python package string. repository path repository path ( project : str , location : str , repository : str ) - > str Returns a fully-qualified repository string. rule path rule path ( project : str , location : str , repository : str , rule : str ) - > str Returns a fully-qualified rule string. secret version path secret version path ( project : str , secret : str , secret version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. maven artifact path maven artifact path ( project : str , location : str , repository : str , maven artifact : str ) - > str Returns a fully-qualified maven artifact string. npm package path npm package path ( project : str , location : str , repository : str , npm package : str ) - > str Returns a fully-qualified npm package string. package path package path ( project : str , location : str , repository : str , package : str ) - > str Returns a fully-qualified package string. parse apt artifact path parse apt artifact path ( path : str ) - > typing .
- Returns Type Description google.cloud.artifactregistry v1.types.VPCSCConfig The Artifact Registry VPC SC config that apply to a Project. version path version path ( project : str , location : str , repository : str , package : str , version : str ) - > str Returns a fully-qualified version string. vpcsc config path vpcsc config path ( project : str , location : str ) - > str Returns a fully-qualified vpcsc config string. yum artifact path yum artifact path ( project : str , location : str , repository : str , yum artifact : str ) - > str Returns a fully-qualified yum artifact string.

