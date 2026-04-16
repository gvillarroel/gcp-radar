---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.498Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Maven repositories in Preview"
feature_slug: "maven-repositories-in-preview"
latest_feature_date: "2021-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection"
keywords:
  - "repositories"
  - "preview"
  - "maven"
  - "adds"
---

# Maven repositories in Preview

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry adds Preview support for Maven repositories.

## Extended Definition

Artifact Registry adds Preview support for Maven repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- What's Next Create standard repositories Learn more about remote repositories Learn more about virtual repositories Create remote repositories Create virtual repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- You can reduce latency and network egress costs by creating repositories in the same region where you run GKE, Cloud Run, Cloud Build, and other Google Cloud services that interact with the repository.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.

### "Class ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection (1.87.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- ListMavenArtifactsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<ArtifactRegistryClient.ListMavenArtifactsPage> pages, int collectionSize) protected ArtifactRegistryClient .
- ListMavenArtifactsPage > pages , int collectionSize ) Parameters Name Description pages List < ListMavenArtifactsPage > collectionSize int Returns Type Description ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class ArtifactRegistryClient.ListMavenArtifactsFixedSizeCollection (1.87.0) Stay organized with collections Save and categorize content based on your preferences.
- ListMavenArtifactsFixedSizeCollection extends AbstractFixedSizeCollection<ListMavenArtifactsRequest , ListMavenArtifactsResponse , MavenArtifact , ArtifactRegistryClient .

