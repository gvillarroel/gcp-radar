---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.929Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry repository tagging"
feature_slug: "artifact-registry-repository-tagging"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "attaching"
  - "tagging"
  - "tags"
  - "repository"
  - "supports"
  - "registry"
  - "artifact"
  - "now"
---

# Artifact Registry repository tagging

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry now supports attaching tags to repositories for grouping repositories and other resources across Google Cloud.

## Extended Definition

Artifact Registry now supports attaching tags to repositories for grouping repositories and other resources across Google Cloud.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2022 v1 Feature Artifact Registry support for attaching tags to repositories is now in Preview .
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Operation Container Registry Artifact Registry Create a repository Not applicable. gcloud artifacts repositories create Delete a repository Not applicable. gcloud artifacts repositories delete List images gcloud container images list gcloud artifacts docker images list List tags gcloud container images list-tags gcloud artifacts docker tags list Add a tag gcloud container images add-tag gcloud artifacts docker tags add Delete a tag gcloud container images untag gcloud artifacts docker tags delete Describe images gcloud container images describe gcloud artifacts docker images list --include-tags Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cached Docker Hub images mirror.gcr.io is a pull-through cache that stores the most frequently requested Docker Hub images across all users. mirror.gcr.io is now hosted on Artifact Registry. mirror.gcr.io is now hosted on Artifact Registry.
- Existing Container Registry images maintained by Google Most Google-owned images previously hosted on Container Registry are now hosted on Artifact Registry in gcr.io repositories.
- Summary of new features Artifact Registry extends the capabilities of Container Registry with the following features: Repository-level access control .

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To create and apply cleanup policies to your repository, see Configure cleanup policies . gcr.io domain support Artifact Registry supports hosting of images on the gcr.io domain.
- For example, given a repository containing the following artifacts: IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v1 DIGEST: sha256:1b0a26bd07a3d17473d8d8468bea84015e27f87124b2831234581bce13f61370 TAGS: CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:10 IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 IMAGE: us-west1-docker.pkg.dev/my-project/release-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 If your Keep most recent versions policy is set to keep 3 versions of packages matching the Package prefixes : {release-xyz} , only release-xyz-v1 , and release-xyz-v2 are kept.
- For example, if you developers team in Australia need to download artifacts from Artifact Registry to their local workstations, a repository in an Australian region will reduce latency and incur lower egress charges than a repository located on another continent.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.

