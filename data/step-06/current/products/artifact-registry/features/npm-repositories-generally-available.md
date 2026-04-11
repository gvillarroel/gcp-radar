---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.933Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "npm repositories generally available"
feature_slug: "npm-repositories-generally-available"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
keywords:
  - "generally"
  - "repositories"
  - "available"
  - "npm"
  - "registry"
  - "artifact"
  - "for"
  - "in"
---

# npm repositories generally available

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Support for npm repositories in Artifact Registry reaches general availability.

## Extended Definition

Support for npm repositories in Artifact Registry reaches general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)

## Supporting Pages

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Address of the remote repository upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Npm repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- For more information, see vulnerability assessment . v1 Feature Artifact Registry remote repositories and virtual repositories for Go are now Generally Available .
- October 03, 2024 v1 Feature Artifact Registry support for OCI specifications v1.1 is generally available in Docker format repositories.
- March 22, 2024 v1 Change Effective March 22, 2024, Artifact Registry npm repositories enforce not including uppercase letters in package names in order to match npmjs naming rules .

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Validate fingerprints as immutable references in the Artifact Registry API Certain Artifact Registry API requests will validate a package from your repository if the fingerprint of that package is formatted as follows: VERSION @DIRSUM SHA256: HASH VALUE For example, you want to create an attachment on a package in your repository.
- Required roles To get the permissions that you need to view package version fingerprints in Artifact Registry repositories, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the Google Cloud project.
- To manually calculate a fingerprint, do the following: Find the fingerprint for your package in Artifact Registry as described in View the fingerprint of a package in your repository .

