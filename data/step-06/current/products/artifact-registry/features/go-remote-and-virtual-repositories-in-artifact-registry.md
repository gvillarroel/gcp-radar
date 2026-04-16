---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.478Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Go remote and virtual repositories in Artifact Registry"
feature_slug: "go-remote-and-virtual-repositories-in-artifact-registry"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
keywords:
  - "reached"
  - "virtual"
  - "availability"
  - "repositories"
  - "remote"
---

# Go remote and virtual repositories in Artifact Registry

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Go remote repositories and virtual repositories in Artifact Registry reached general availability.

## Extended Definition

Go remote repositories and virtual repositories in Artifact Registry reached general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- Repository configuration specific to the Mode value being selected (Remote or Virtual) mode config can be only one of the following: virtualRepositoryConfig object ( VirtualRepositoryConfig ) Configuration specific for a Virtual Repository. remoteRepositoryConfig object ( RemoteRepositoryConfig ) Configuration specific for a Remote Repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- What's Next Create standard repositories Learn more about remote repositories Learn more about virtual repositories Create remote repositories Create virtual repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Remote repositories reduce latency and improve availability for builds and deployments on Google Cloud.
- You can also mitigate dependency confusion attacks by configuring your upstream policy to prioritize repositories with your private artifacts over remote repositories that cache public artifacts.
- Remote repository Remote repositories are read-only repositories that act as proxies to store artifacts from the following upstream sources: Standard Artifact Registry repositories.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Public Repository Publicly available Apt repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Public Repository Publicly available Yum repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/packages/{package}/versions/{version}. com. google. devtools. artifactregistry. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/mavenArtifacts/{maven artifact}. com. google. devtools. artifactregistry. v1.

