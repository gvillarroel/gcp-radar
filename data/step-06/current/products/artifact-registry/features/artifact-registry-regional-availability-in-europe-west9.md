---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.929Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability in europe-west9"
feature_slug: "artifact-registry-regional-availability-in-europe-west9"
latest_feature_date: "2022-05-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
keywords:
  - "west9"
  - "availability"
  - "regional"
  - "europe"
  - "registry"
  - "artifact"
  - "is"
  - "in"
---

# Artifact Registry regional availability in europe-west9

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry is available in the europe-west9 region (Paris, France).

## Extended Definition

Artifact Registry is available in the europe-west9 region (Paris, France).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)

## Supporting Pages

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Integrating with Jenkins Stay organized with collections Save and categorize content based on your preferences.
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- In the project that contains the repository, grant the Artifact Registry Writer role to the Jenkins service account that you created.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- GO111MODULE = on go get github.com/google/go-containerregistry/cmd/gcrane Create a script named copy images.sh to copy your list of files. #!/bin/bash images = $( cat images.txt ) if [ -z " ${ AR PROJECT } " ] then echo ERROR: AR PROJECT must be set before running this exit 1 fi for img in ${ images } do gcrane cp ${ img } LOCATION -docker.pkg.dev/ ${ AR PROJECT } / ${ img } done Replace LOCATION with the regional or multi-regional location of the repository.
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .
- Validate fingerprints as immutable references in the Artifact Registry API Certain Artifact Registry API requests will validate a package from your repository if the fingerprint of that package is formatted as follows: VERSION @DIRSUM SHA256: HASH VALUE For example, you want to create an attachment on a package in your repository.
- Required roles To get the permissions that you need to view package version fingerprints in Artifact Registry repositories, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the Google Cloud project.

