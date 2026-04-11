---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.911Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry download files"
feature_slug: "artifact-registry-download-files"
latest_feature_date: "2024-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "downloading"
  - "files"
  - "download"
  - "individual"
  - "from"
  - "supports"
  - "registry"
  - "artifact"
---

# Artifact Registry download files

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry supports downloading individual files from standard and remote repositories without configuring authentication for format-specific tooling.

## Extended Definition

Artifact Registry supports downloading individual files from standard and remote repositories without configuring authentication for format-specific tooling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information on remote repository authentication, see Configure authentication to remote repositories . v1 Issue Images copied to Artifact Registry from Container Registry with the automatic migration tool are failing to propagate their upload time to Artifact Registry, and instead have their upload time value set to zero, resulting in an upload time of early 1970.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Home Documentation Application development Artifact Registry Guides Send feedback Migrate container images from a third-party registry Stay organized with collections Save and categorize content based on your preferences.
- Update manifests to reference Artifact Registry Update your Dockerfiles and your manifests to refer to Artifact Registry instead of the third-party registry.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run source deployment Unavailable Source deployment lets you use a single gcloud CLI command to build a container image from your source code, store the image in Artifact Registry, and deploy it to Cloud Run.
- Home Documentation Application development Artifact Registry Guides Send feedback Transition from Container Registry Stay organized with collections Save and categorize content based on your preferences.
- Artifact Registry supports the same authentication methods as Container Registry.
- Manage your Artifact Registry repositories and images from this page.

