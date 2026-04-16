---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.483Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry cleanup policies"
feature_slug: "artifact-registry-cleanup-policies"
latest_feature_date: "2024-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
keywords:
  - "policies"
  - "cleanup"
  - "delete"
  - "automatically"
  - "generally"
  - "available"
---

# Artifact Registry cleanup policies

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Cleanup policies are generally available in Artifact Registry to automatically delete unwanted artifacts while retaining those that should be kept; Cleanup policies allow Artifact Registry to automatically delete unneeded artifacts while retaining artifacts you want to keep.

## Extended Definition

Cleanup policies are generally available in Artifact Registry to automatically delete unwanted artifacts while retaining those that should be kept; Cleanup policies allow Artifact Registry to automatically delete unneeded artifacts while retaining artifacts you want to keep.

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
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cleanup policies indicate when certain package versions can be automatically deleted.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Repositories that are generally available or in public preview use this to calculate storage costs. satisfiesPzs boolean Output only.
- The mode of the repository. cleanupPolicies map (key: string, value: object ( CleanupPolicy )) Optional.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Cleanup policies An Artifact Registry cleanup policy defines criteria for automatically deleting artifact versions that you no longer need or keeping artifacts that you want to store indefinitely.
- Use delete policies Delete policies delete artifacts matching the following required criteria: Tag state : indicates if the policy should check for tagged artifacts or untagged artifacts.
- To create and apply cleanup policies to your repository, see Configure cleanup policies . gcr.io domain support Artifact Registry supports hosting of images on the gcr.io domain.
- Cleanup policies are useful if you store many versions of your artifacts, but only need to keep specific versions that you release to production.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cleanup Policy Artifact policy configuration for repository cleanup policies. com. google. devtools. artifactregistry. v1.
- Builder Artifact policy configuration for repository cleanup policies. com. google. devtools. artifactregistry. v1.
- Cleanup Policy Most Recent Versions CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions. com. google. devtools. artifactregistry. v1.
- Builder CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions. com. google. devtools. artifactregistry. v1.

