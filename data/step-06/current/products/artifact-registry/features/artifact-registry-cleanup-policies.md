---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.911Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry cleanup policies"
feature_slug: "artifact-registry-cleanup-policies"
latest_feature_date: "2024-05-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/custom-constraints"
keywords:
  - "policies"
  - "cleanup"
  - "generally"
  - "available"
  - "are"
  - "registry"
  - "artifact"
  - "in"
---

# Artifact Registry cleanup policies

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Cleanup policies are generally available in Artifact Registry to automatically delete unwanted artifacts while retaining those that should be kept; Cleanup policies allow Artifact Registry to automatically delete unneeded artifacts while retaining artifacts you want to keep.

## Extended Definition

Cleanup policies are generally available in Artifact Registry to automatically delete unwanted artifacts while retaining those that should be kept; Cleanup policies allow Artifact Registry to automatically delete unneeded artifacts while retaining artifacts you want to keep.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- May 24, 2024 v1 Feature Cleanup policies for Artifact Registry are Generally Available (GA).
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- For more information, see vulnerability assessment . v1 Feature Artifact Registry remote repositories and virtual repositories for Go are now Generally Available .
- For more information on this change, see Quotas and limits . v1 Feature Cleanup policies for Artifact Registry are now in Preview.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following command creates a remote repository named my-repo in the region us-east1 in the Google Cloud project my-project and can authenticate to the upstream repository using the username my-username and secret version projects/my-project/secrets/my-secret/versions/1 . gcloud artifacts repositories create my-repo \ --project = my-project \ --repository-format = python \ --location = us-east1 \ --description = "Remote Python repository" \ --mode = remote-repository \ --remote-repo-config-desc = "PyPI" \ --remote-username = my-username \ --remote-password-secret-version = projects/my-project/secrets/my-secret/versions/1 \ --remote-python-repo = PYPI The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableDockerRemotes": "All remote repositories must be Docker format."] Artifact Registry supported resources Artifact Registry supports custom constraints, on all fields except labels , for create and update operations on the repository resource.
- Example custom organization policies for common use cases The following table provides the syntax of some custom organization policies that you might find useful: Description Constraint syntax Disable creating remote repositories name : organizations/ ORGANIZATION ID /customConstraints/custom.disableRemotes resourceTypes : - artifactregistry.googleapis.com/Repository methodTypes : - CREATE condition : "resource.mode in ['STANDARD', 'VIRTUAL']" actionType : ALLOW displayName : Disable remote repository creation description : All repositories must be standard or virtual mode.
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test your organization policy: Artifact Registry Admin ( roles/artifactregistry.admin ) on the organization resource For more information about granting roles, see Manage access to projects, folders, and organizations .
- After this operation is complete, your custom constraints are available as organization policies in your list of Google Cloud organization policies.

