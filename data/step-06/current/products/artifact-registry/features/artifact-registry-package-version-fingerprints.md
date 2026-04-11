---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.900Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry package version fingerprints"
feature_slug: "artifact-registry-package-version-fingerprints"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/fingerprint"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic"
keywords:
  - "fingerprints"
  - "calculates"
  - "version"
  - "package"
  - "registry"
  - "artifact"
  - "now"
  - "for"
---

# Artifact Registry package version fingerprints

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry now calculates fingerprints for every pushed package version so users can verify package integrity when moving artifacts between Google Cloud systems.

## Extended Definition

Artifact Registry now calculates fingerprints for every pushed package version so users can verify package integrity when moving artifacts between Google Cloud systems.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)

## Supporting Pages

### "Use fingerprints to verify package version identities \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/fingerprint](https://docs.cloud.google.com/artifact-registry/docs/fingerprint)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Validate fingerprints as immutable references in the Artifact Registry API Certain Artifact Registry API requests will validate a package from your repository if the fingerprint of that package is formatted as follows: VERSION @DIRSUM SHA256: HASH VALUE For example, you want to create an attachment on a package in your repository.
- When you push a package to a repository, Artifact Registry calculates a fingerprint for that package version.
- In the following command, the package defined for target is formatted so that Artifact Registry also validates the package's fingerprint: gcloud artifacts attachments create my-attachment --target = 'projects/test-project/locations/us-west1/repositories/test-repo/packages/test-pkg/versions/v1@dirsum sha256:30330c6b65a26ebf1a13e1b9ded4068b4c36d72ed3b62226e3243b5bee18fd31' --attachment-type = "application/vnd.in-toto+json" --attachment-namespace = "mynamespace.com" --files = att.txt If the provided fingerprint doesn't match the fingerprint of the current version, then Artifact Registry rejects the API request and shows a failed precondition error.
- Retrieve the fingerprint of a package version in your repository Fingerprints have the following structure: VERSION @DIRSUM SHA256: HASH VALUE To retrieve the fingerprint of a package version in an Artifact Registry repository, enter the following in the Google Cloud CLI: gcloud artifacts versions describe VERSION --repository = REPOSITORY --location = LOCATION --package = PACKAGE NAME Where: VERSION is the version of your package, such as 1.0543 .

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Feature Artifact Registry now calculates fingerprints for each version of a package pushed to the Artifact Registry repository.
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- Feature When you push a Java, Python, or Node.js package to Artifact Registry, Artifact Analysis can now scan the package for vulnerabilities.

### "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json curl (Linux, macOS, or Cloud Shell) To send your request, execute the following command: curl -v \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -F "meta={'filename':' NAME ','package id':' PACKAGE ','version id':' VERSION '};type=application/json" \ -F "blob=@ SOURCE " \ https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json List artifacts console You can view artifacts for generic format repositories in the Google Cloud console.
- This page describes how to store versioned, immutable artifacts that don't adhere to any specific package format in Artifact Registry generic format repositories.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download \ --destination = DESTINATION \ --location = LOCATION \ --repository = REPOSITORY \ --package = PACKAGE \ --version = VERSION \ --name = NAME Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download --destination = DESTINATION --location = LOCATION --repository = REPOSITORY --package = PACKAGE --version = VERSION --name = NAME Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download ^ --destination = DESTINATION ^ --location = LOCATION ^ --repository = REPOSITORY ^ --package = PACKAGE ^ --version = VERSION ^ --name = NAME API Before using any of the request data, make the following replacements: PROJECT : your Google Cloud project ID .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list \ --project = PROJECT \ --location = LOCATION \ --repository = REPOSITORY Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list --project = PROJECT --location = LOCATION --repository = REPOSITORY Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list ^ --project = PROJECT ^ --location = LOCATION ^ --repository = REPOSITORY The response includes the file details in the format PACKAGE : VERSION : NAME .

