---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.911Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry generic repositories"
feature_slug: "artifact-registry-generic-repositories"
latest_feature_date: "2024-05-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic"
keywords:
  - "generic"
  - "storing"
  - "repositories"
  - "supports"
  - "registry"
  - "artifact"
  - "now"
  - "for"
---

# Artifact Registry generic repositories

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry now supports generic repositories for storing and managing versioned, immutable artifacts that do not follow a specific package format.

## Extended Definition

Artifact Registry now supports generic repositories for storing and managing versioned, immutable artifacts that do not follow a specific package format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)
- [https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic](https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information, see vulnerability assessment . v1 Feature Artifact Registry remote repositories and virtual repositories for Go are now Generally Available .

### "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json curl (Linux, macOS, or Cloud Shell) To send your request, execute the following command: curl -v \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -F "meta={'filename':' NAME ','package id':' PACKAGE ','version id':' VERSION '};type=application/json" \ -F "blob=@ SOURCE " \ https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json List artifacts console You can view artifacts for generic format repositories in the Google Cloud console.
- This page describes how to store versioned, immutable artifacts that don't adhere to any specific package format in Artifact Registry generic format repositories.
- Required roles To get the permissions that you need to manage generic artifacts, ask your administrator to grant you the following IAM roles on the repository: View artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Download artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Upload artifacts to a repository: Artifact Registry Writer ( roles/artifactregistry.writer ) Delete artifacts: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Generic artifacts are files of any format including, but not limited to, the following: Compressed files, such as tar files and zip files Configuration files, such as YAML and TOML files Text files and PDFs Binaries Archives Media files Unlike other formats, artifacts stored in generic format repositories aren't meant to be used by Docker, package managers, or other third-party clients.

### "Quickstart: Store other formats in Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic](https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a generic repository To create a generic format repository named quickstart-generic-repo in the location us-central1 with the description Generic repository , run the following command: gcloud artifacts repositories create quickstart-generic-repo \ --repository-format = generic \ --location = us-central1 \ --description = "Generic repository" To verify that your repository was created, run the following command: gcloud artifacts repositories list To simplify gcloud commands, run the following commands to set the default repository to quickstart-generic-repo and the default location to us-central1 .
- To delete the quickstart-generic-repo repository, run the following command: gcloud artifacts repositories delete quickstart-generic-repo If you want to remove the default repository and location settings that you configured for the active gcloud configuration, run the following commands: gcloud config unset artifacts/repository gcloud config unset artifacts/location What's next Learn more about generic artifacts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Store other formats in Artifact Registry Learn how to set up an Artifact Registry generic format repository and upload a YAML file.
- In the following example, hello.yaml is the FILE NAME : FILE: my-package:1.0.0:hello.yaml CREATE TIME: 2023-03-09T20:55:07 UPDATE TIME: 2023-03-09T20:55:07 SIZE (MB): 0.000 OWNER: projects/my-project/locations/us-central1/repositories/quickstart-generic-repo/packages/my-package/versions/1.0.0 Download a generic artifact To download a generic artifact from your repository, run the following command: gcloud artifacts generic download \ --name = hello.yaml \ --package = my-package \ --version = 1 .0.0 \ --destination = DESTINATION Where: hello.yaml is the name of the file to download. my-package is the package to download.

