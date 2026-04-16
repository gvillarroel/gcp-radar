---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.486Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry virtual repositories"
feature_slug: "artifact-registry-virtual-repositories"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
keywords:
  - "single"
  - "point"
  - "virtual"
  - "provide"
  - "access"
  - "repositories"
---

# Artifact Registry virtual repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry virtual repositories provide a single access point to retrieve artifacts from one or more upstream repositories; Artifact Registry added virtual repositories in preview to provide a unified access point across multiple remote and standard repositories.

## Extended Definition

Artifact Registry virtual repositories provide a single access point to retrieve artifacts from one or more upstream repositories; Artifact Registry added virtual repositories in preview to provide a unified access point across multiple remote and standard repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Virtual repository A read-only repository that acts as a single access point to download, install, or deploy artifacts of the same format from one or more upstream repositories .
- Centralize repositories Create all repositories in a single project and then grant access to principals from other projects at the repository level.
- It can also simplify setup of virtual repositories since you only need to enable and manage a single instance of Artifact Registry.
- What's Next Create standard repositories Learn more about remote repositories Learn more about virtual repositories Create remote repositories Create virtual repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- JSON representation { "id" : string , "repository" : string , "priority" : integer } Fields id string The user-provided ID of the upstream policy. repository string A reference to the repository resource, for example: projects/p1/locations/us-central1/repositories/repo1 . priority integer Entries with a greater priority value take precedence in the pull order.
- Provides additional configuration details for repositories of the docker format type.
- Provides additional configuration details for repositories of the maven format type.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- To access Docker repositories, use one of the following scopes: storage-ro - Grants read-only permission for pulling images. storage-rw - Grants read and write permission for pushing or pulling images. cloud-platform - View and manage data, including metadata, across Google Cloud service.
- Note: When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with appropriate Workforce Identity Federation principal identifiers .
- You're running a supported version of GKE If your GKE environment does not meet these requirements the instructions to grant access depend on whether you're using the Compute Engine default service account or a user-provided service account as the identity for your nodes.

