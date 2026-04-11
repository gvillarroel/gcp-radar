---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.942Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Private Python repositories support"
feature_slug: "private-python-repositories-support"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/gke-private-clusters"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "private"
  - "alpha"
  - "introduces"
  - "repositories"
  - "python"
  - "registry"
  - "artifact"
  - "for"
---

# Private Python repositories support

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduces alpha support for private Python package repositories.

## Extended Definition

Artifact Registry introduces alpha support for private Python package repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/gke-private-clusters](https://docs.cloud.google.com/artifact-registry/docs/gke-private-clusters)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "Configure restricted access for GKE private clusters \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/gke-private-clusters](https://docs.cloud.google.com/artifact-registry/docs/gke-private-clusters)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- REGISTRY DOMAIN is the domain for your registry: pkg.dev for Artifact Registry gcr.io for Container Registry or gcr.io repositories hosted in Artifact Registry Add an A record for the restricted VIP. gcloud dns record-sets transaction add \ --name = REGISTRY DOMAIN . \ --type = A 199 .36.153.4 199 .36.153.5 199 .36.153.6 199 .36.153.7 \ --zone = ZONE NAME \ --ttl = 300 \ --project = PROJECT ID Where: ZONE NAME is the name of the zone you created in the first step.
- REGISTRY DOMAIN is the domain for your registry: pkg.dev for Artifact Registry gcr.io for Container Registry or gcr.io repositories hosted in Artifact Registry Execute the transaction. gcloud dns record-sets transaction execute \ --zone = ZONE NAME \ --project = PROJECT ID Where: ZONE NAME is the name of the zone you created in the first step.
- REGISTRY DOMAIN is the domain for your registry: pkg.dev for Artifact Registry gcr.io for Container Registry or gcr.io repositories hosted in Artifact Registry Start a transaction. gcloud dns record-sets transaction start \ --zone = ZONE NAME \ --project = PROJECT ID Where: ZONE NAME is the name of the zone you created in the first step.
- Home Documentation Application development Artifact Registry Guides Send feedback Configure restricted access for GKE private clusters Stay organized with collections Save and categorize content based on your preferences.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- March 15, 2024 v1 Feature Artifact Registry remote repositories support basic authentication to user-defined and preset upstream sources for Docker, Maven, npm, and Python formats.
- February 26, 2021 v1beta2 Feature Support for Python packages in private Python repositories is now in alpha.
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Methods create Creates a repository. delete Deletes a repository and all of its contents. exportArtifact Exports an artifact to a Cloud Storage bucket. get Gets a repository. getIamPolicy Gets the IAM policy for a given resource. list Lists repositories. patch Updates a repository. setIamPolicy Updates the IAM policy for a given resource. testIamPermissions Tests if the caller has a list of permissions on a resource.

