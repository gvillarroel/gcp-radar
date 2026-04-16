---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.495Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Maven repository release/snapshot version policy"
feature_slug: "maven-repository-release-snapshot-version-policy"
latest_feature_date: "2021-10-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient"
keywords:
  - "snapshot"
  - "release"
  - "version"
  - "policy"
  - "repository"
  - "maven"
---

# Maven repository release/snapshot version policy

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry supports choosing a release or snapshot version policy when creating Maven repositories.

## Extended Definition

Artifact Registry supports choosing a release or snapshot version policy when creating Maven repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- For example, given a repository containing the following artifacts: IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v1 DIGEST: sha256:1b0a26bd07a3d17473d8d8468bea84015e27f87124b2831234581bce13f61370 TAGS: CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:10 IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 IMAGE: us-west1-docker.pkg.dev/my-project/release-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 If your Keep most recent versions policy is set to keep 3 versions of packages matching the Package prefixes : {release-xyz} , only release-xyz-v1 , and release-xyz-v2 are kept.
- Restricting repository locations If you need to comply with regulations or policies that require you to store data in specific regions, you can include a resource locations constraint in your Google Cloud organization policy that only allows repository creation in compliant regions.
- Cleanup policies An Artifact Registry cleanup policy defines criteria for automatically deleting artifact versions that you no longer need or keeping artifacts that you want to store indefinitely.
- Caution: if you define Package prefixes in a Keep most recent versions keep policy, only packages matching the package prefixes you define are kept.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- JSON representation { "allowSnapshotOverwrites" : boolean , "versionPolicy" : enum ( VersionPolicy ) } Fields allowSnapshotOverwrites boolean The repository with this flag will allow publishing the same snapshot versions. versionPolicy enum ( VersionPolicy ) Version policy defines the versions that the registry will accept.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- VersionPolicy VersionPolicy is the version policy for the repository.

### "Class ArtifactRegistryClient (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)
- Source ID: `site-python-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Dict [ str , str ] Parses a yum artifact path into its component segments. project settings path project settings path ( project : str ) - > str Returns a fully-qualified project settings string. python package path python package path ( project : str , location : str , repository : str , python package : str ) - > str Returns a fully-qualified python package string. repository path repository path ( project : str , location : str , repository : str ) - > str Returns a fully-qualified repository string. rule path rule path ( project : str , location : str , repository : str , rule : str ) - > str Returns a fully-qualified rule string. secret version path secret version path ( project : str , secret : str , secret version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. tag path tag path ( project : str , location : str , repository : str , package : str , tag : str ) - > str Returns a fully-qualified tag string. test iam permissions test iam permissions ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. maven artifact path maven artifact path ( project : str , location : str , repository : str , maven artifact : str ) - > str Returns a fully-qualified maven artifact string. npm package path npm package path ( project : str , location : str , repository : str , npm package : str ) - > str Returns a fully-qualified npm package string. package path package path ( project : str , location : str , repository : str , package : str ) - > str Returns a fully-qualified package string. parse apt artifact path parse apt artifact path ( path : str ) - > typing .
- Returns Type Description google.cloud.artifactregistry v1.types.VPCSCConfig The Artifact Registry VPC SC config that apply to a Project. version path version path ( project : str , location : str , repository : str , package : str , version : str ) - > str Returns a fully-qualified version string. vpcsc config path vpcsc config path ( project : str , location : str ) - > str Returns a fully-qualified vpcsc config string. yum artifact path yum artifact path ( project : str , location : str , repository : str , yum artifact : str ) - > str Returns a fully-qualified yum artifact string.

