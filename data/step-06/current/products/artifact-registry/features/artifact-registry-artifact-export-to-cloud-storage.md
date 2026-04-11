---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.901Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry artifact export to Cloud Storage"
feature_slug: "artifact-registry-artifact-export-to-cloud-storage"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "exportartifact"
  - "storage"
  - "export"
  - "introduced"
  - "artifacts"
  - "registry"
  - "artifact"
  - "to"
---

# Artifact Registry artifact export to Cloud Storage

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduced ExportArtifact() support to export artifacts to a Cloud Storage bucket.

## Extended Definition

Artifact Registry introduced ExportArtifact() support to export artifacts to a Cloud Storage bucket.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "Method: projects.locations.repositories.aptArtifacts.import \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu POST https://artifactregistry.googleapis.com/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:import The URLs use gRPC Transcoding syntax.
- Home Documentation Application development Artifact Registry Reference Send feedback Method: projects.locations.repositories.aptArtifacts.import Stay organized with collections Save and categorize content based on your preferences.
- The source location of the package binaries. source can be only one of the following: gcsSource object ( ImportAptArtifactsGcsSource ) Google Cloud Storage location where input content is located.
- ImportAptArtifactsGcsSource Google Cloud Storage location where the artifacts currently reside.

### "Method: projects.locations.repositories.aptArtifacts.upload \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu Upload URI, for media upload requests: POST https://artifactregistry.googleapis.com/upload/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:create Metadata URI, for metadata-only requests: POST https://artifactregistry.googleapis.com/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:create The URLs use gRPC Transcoding syntax.
- Home Documentation Application development Artifact Registry Reference Send feedback Method: projects.locations.repositories.aptArtifacts.upload Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : artifactregistry.aptartifacts.create Request body The request body must be empty.
- Path parameters Parameters parent string The name of the parent resource where the artifacts will be uploaded.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a repository. delete Deletes a repository and all of its contents. exportArtifact Exports an artifact to a Cloud Storage bucket. get Gets a repository. getIamPolicy Gets the IAM policy for a given resource. list Lists repositories. patch Updates a repository. setIamPolicy Updates the IAM policy for a given resource. testIamPermissions Tests if the caller has a list of permissions on a resource.
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

