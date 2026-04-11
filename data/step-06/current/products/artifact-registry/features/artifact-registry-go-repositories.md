---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.920Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Go repositories"
feature_slug: "artifact-registry-go-repositories"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
  - "https://docs.cloud.google.com/artifact-registry/docs/quickstarts"
keywords:
  - "moved"
  - "generally"
  - "repositories"
  - "go"
  - "registry"
  - "artifact"
  - "to"
  - "in"
---

# Artifact Registry Go repositories

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Go repositories in Artifact Registry moved to generally available status.

## Extended Definition

Go repositories in Artifact Registry moved to generally available status.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- [https://docs.cloud.google.com/artifact-registry/docs/quickstarts](https://docs.cloud.google.com/artifact-registry/docs/quickstarts)

## Supporting Pages

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- The repository is added to the repository list. gcloud Run the following command to create a new Docker repository named quickstart-docker-repo in the location us-west1 with the description "docker repository". gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west1 --description = "Docker repository" \ --project = PROJECT Where PROJECT is your Google Cloud project ID.
- This quickstart shows you how to: Create a private Docker repository in Artifact Registry Set up authentication Push an image to the repository Pull the image from the repository To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Pull the image from Artifact Registry To pull the image from Artifact Registry onto your local machine, run the following command: docker pull us-west1-docker.pkg.dev/ PROJECT /quickstart-docker-repo/quickstart-image:tag1 Replace PROJECT with your Google Cloud project ID .

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to view package version fingerprints in Artifact Registry repositories, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the Google Cloud project.
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .
- Home Documentation Application development Artifact Registry Guides Send feedback Use fingerprints to verify package version identities Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/quickstarts](https://docs.cloud.google.com/artifact-registry/docs/quickstarts)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- The repository is added to the repository list. gcloud Run the following command to create a new Docker repository named quickstart-docker-repo in the location us-west1 with the description "docker repository". gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west1 --description = "Docker repository" \ --project = PROJECT Where PROJECT is your Google Cloud project ID.
- This quickstart shows you how to: Create a private Docker repository in Artifact Registry Set up authentication Push an image to the repository Pull the image from the repository To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Pull the image from Artifact Registry To pull the image from Artifact Registry onto your local machine, run the following command: docker pull us-west1-docker.pkg.dev/ PROJECT /quickstart-docker-repo/quickstart-image:tag1 Replace PROJECT with your Google Cloud project ID .

