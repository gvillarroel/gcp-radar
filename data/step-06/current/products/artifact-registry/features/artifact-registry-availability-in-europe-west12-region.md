---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.922Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry availability in europe-west12 region"
feature_slug: "artifact-registry-availability-in-europe-west12-region"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
keywords:
  - "west12"
  - "became"
  - "availability"
  - "europe"
  - "region"
  - "registry"
  - "artifact"
  - "in"
---

# Artifact Registry availability in europe-west12 region

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry became available in the europe-west12 (Turin) region.

## Extended Definition

Artifact Registry became available in the europe-west12 (Turin) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)

## Supporting Pages

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Integrating with Jenkins Stay organized with collections Save and categorize content based on your preferences.
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- In the project that contains the repository, grant the Artifact Registry Writer role to the Jenkins service account that you created.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .
- Validate fingerprints as immutable references in the Artifact Registry API Certain Artifact Registry API requests will validate a package from your repository if the fingerprint of that package is formatted as follows: VERSION @DIRSUM SHA256: HASH VALUE For example, you want to create an attachment on a package in your repository.
- Required roles To get the permissions that you need to view package version fingerprints in Artifact Registry repositories, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the Google Cloud project.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- March 29, 2023 v1 Feature Artifact Registry is now available in the europe-west12 region (Turin, Italy).
- August 22, 2023 v1 Feature Artifact Registry is now available in the europe-west10 region (Berlin, Germany).
- May 10, 2022 v1 Feature Artifact Registry is now available in the europe-southwest1 region (Madrid, Spain).
- May 03, 2022 v1 Feature Artifact Registry is now available in the europe-west9 region (Paris, France).

