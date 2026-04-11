---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.934Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Apt repositories in Preview"
feature_slug: "apt-repositories-in-preview"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import"
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
keywords:
  - "introduces"
  - "apt"
  - "repositories"
  - "preview"
  - "registry"
  - "artifact"
  - "in"
---

# Apt repositories in Preview

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduces Apt repositories in Preview.

## Extended Definition

Artifact Registry introduces Apt repositories in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import)
- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)

## Supporting Pages

### "Method: projects.locations.repositories.aptArtifacts.upload \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/upload)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu Upload URI, for media upload requests: POST https://artifactregistry.googleapis.com/upload/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:create Metadata URI, for metadata-only requests: POST https://artifactregistry.googleapis.com/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:create The URLs use gRPC Transcoding syntax.
- Home Documentation Application development Artifact Registry Reference Send feedback Method: projects.locations.repositories.aptArtifacts.upload Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource parent : artifactregistry.aptartifacts.create Request body The request body must be empty.
- Path parameters Parameters parent string The name of the parent resource where the artifacts will be uploaded.

### "Method: projects.locations.repositories.aptArtifacts.import \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu POST https://artifactregistry.googleapis.com/v1/{parent=projects/ /locations/ /repositories/ }/aptArtifacts:import The URLs use gRPC Transcoding syntax.
- Authorization requires the following IAM permission on the specified resource parent : artifactregistry.aptartifacts.create Request body The request body contains data with the following structure: JSON representation { // Union field source can be only one of the following: "gcsSource" : { object ( ImportAptArtifactsGcsSource ) } // End of list of possible types for union field source . } Fields Union field source .
- Home Documentation Application development Artifact Registry Reference Send feedback Method: projects.locations.repositories.aptArtifacts.import Stay organized with collections Save and categorize content based on your preferences.
- The source location of the package binaries. source can be only one of the following: gcsSource object ( ImportAptArtifactsGcsSource ) Google Cloud Storage location where input content is located.

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Required roles To get the permissions that you need to view package version fingerprints in Artifact Registry repositories, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the Google Cloud project.
- You can use artifact fingerprints to uniquely identify packages in Artifact Registry repositories.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .

