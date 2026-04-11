---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.919Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry remote repositories for OS packages"
feature_slug: "artifact-registry-remote-repositories-for-os-packages"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
keywords:
  - "os"
  - "packages"
  - "introduced"
  - "repositories"
  - "remote"
  - "registry"
  - "artifact"
  - "for"
---

# Artifact Registry remote repositories for OS packages

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduced remote repositories for operating-system packages as a preview feature, proxying external sources such as Docker Hub, Maven Central, and PyPI.

## Extended Definition

Artifact Registry introduced remote repositories for operating-system packages as a preview feature, proxying external sources such as Docker Hub, Maven Central, and PyPI.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- Remote repository Remote repositories are read-only repositories that act as proxies to store artifacts from the following upstream sources: Standard Artifact Registry repositories.
- Standard repository Standard repositories are regular Artifact Registry repositories for your private artifacts.
- For example, given a repository containing the following artifacts: IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v1 DIGEST: sha256:1b0a26bd07a3d17473d8d8468bea84015e27f87124b2831234581bce13f61370 TAGS: CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:10 IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 IMAGE: us-west1-docker.pkg.dev/my-project/release-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 If your Keep most recent versions policy is set to keep 3 versions of packages matching the Package prefixes : {release-xyz} , only release-xyz-v1 , and release-xyz-v2 are kept.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For more information on which public OS package repositories are supported by Artifact Registry remote repositories, see OS packages supported upstreams .
- August 16, 2023 v1 Feature Artifact Registry remote repositories for OS packages are now in Preview .
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- For more information on remote repository authentication, see Configure authentication to remote repositories . v1 Issue Images copied to Artifact Registry from Container Registry with the automatic migration tool are failing to propagate their upload time to Artifact Registry, and instead have their upload time value set to zero, resulting in an upload time of early 1970.

