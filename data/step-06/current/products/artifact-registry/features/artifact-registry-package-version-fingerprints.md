---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.476Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry package version fingerprints"
feature_slug: "artifact-registry-package-version-fingerprints"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
  - "https://docs.cloud.google.com/artifact-registry/docs/java"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
keywords:
  - "fingerprints"
  - "calculates"
  - "every"
  - "version"
  - "package"
---

# Artifact Registry package version fingerprints

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry now calculates fingerprints for every pushed package version so users can verify package integrity when moving artifacts between Google Cloud systems.

## Extended Definition

Artifact Registry now calculates fingerprints for every pushed package version so users can verify package integrity when moving artifacts between Google Cloud systems.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)

## Supporting Pages

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The following requests will validate provided fingerprints when passed using API libraries, the Google Cloud CLI, and curl : GetVersion UpdateVersion DeleteVersion ListFiles CreateAttachment ExportArtifact The following requests will validate fingerprints when passed using API libraries and curl : ListAttachments Validate that local and repository instances of a package are the same To validate that a package hasn't been modified while moving between Google Cloud systems, manually calculate the fingerprint of an instance of that package outside your repository.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .
- The response looks like this: fingerprints: - type: DIRSUM SHA256 value: 7c07b910c6dd6df6984a5591d00ad0074fe24cd81145d2c681cdfda3b3d65a04 name: projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1 updateTime: '2025-08-15T00:03:41.809228Z' The full address of the fingerprint is the package version followed by the fingerprint type and then the hash value.
- Validate fingerprints as immutable references in the Artifact Registry API Certain Artifact Registry API requests will validate a package from your repository if the fingerprint of that package is formatted as follows: VERSION @DIRSUM SHA256: HASH VALUE For example, you want to create an attachment on a package in your repository.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/packages/{package}/versions/{version}. com. google. devtools. artifactregistry. v1.
- Builder Files store content that is potentially associated with Packages or Versions. com. google. devtools. artifactregistry. v1.
- File Files store content that is potentially associated with Packages or Versions. com. google. devtools. artifactregistry. v1.
- This may correspond to a version in many package management schemes. com. google. devtools. artifactregistry. v1.

### Manage Java packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Snapshots provide a way for you to iteratively publish updated versions of a pre-release package without incrementing the version number in your Maven project every time that you publish to the repository.
- To list all snapshot dependencies, you can filter the dependency tree with the command: mvn dependency:tree -Dincludes = ::: -SNAPSHOT Artifact Registry version policy When you create a Maven repository in Artifact Registry, you can specify a Maven version policy: None - Stores both snapshot and release packages.
- For example, this setting in the pom.xml file is for a 1.0 version of project that is in development: <version>1.0-SNAPSHOT</version> When you publish a package from this project, Maven 3 automatically appends a timestamp to the snapshot version number so that each snapshot version is unique.
- Releases When you are ready to release a package, you remove the -SNAPSHOT suffix from the version number in the POM file and update any projects that depend on the package so that they use the release version instead of the snapshot version.

