---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.495Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Maven repositories generally available"
feature_slug: "maven-repositories-generally-available"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
keywords:
  - "reaches"
  - "availability"
  - "generally"
  - "repositories"
  - "available"
  - "maven"
---

# Maven repositories generally available

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Support for Maven repositories in Artifact Registry reaches general availability.

## Extended Definition

Support for Maven repositories in Artifact Registry reaches general availability.

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
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- PublicRepository Predefined list of publicly available Maven repositories like Maven Central.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Remote repositories reduce latency and improve availability for builds and deployments on Google Cloud.
- What's Next Create standard repositories Learn more about remote repositories Learn more about virtual repositories Create remote repositories Create virtual repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- You can reduce latency and network egress costs by creating repositories in the same region where you run GKE, Cloud Run, Cloud Build, and other Google Cloud services that interact with the repository.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Public Repository Predefined list of publicly available Maven repositories like Maven Central. com. google. devtools. artifactregistry. v1.
- Public Repository Publicly available Apt repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Public Repository Publicly available Yum repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/mavenArtifacts/{maven artifact}. com. google. devtools. artifactregistry. v1.

