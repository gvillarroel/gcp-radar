---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.940Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Access Transparency"
feature_slug: "artifact-registry-access-transparency"
latest_feature_date: "2021-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "transparency"
  - "provide"
  - "access"
  - "logs"
  - "registry"
  - "artifact"
  - "adds"
  - "to"
---

# Artifact Registry Access Transparency

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry adds Access Transparency support to provide logs of Google staff actions on customer data.

## Extended Definition

Artifact Registry adds Access Transparency support to provide logs of Google staff actions on customer data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- For more information about metrics and logs, read Observability in Google Cloud . v1 Change Updates to the Artifact Registry API are as follows: Add or update file annotations with UpdateFile() .
- November 19, 2024 v1 Feature Artifact Registry now provides the option to enable or disable vulnerability scanning on individual repositories.
- To explore the available Artifact Registry metrics and logs, view your project in the Metrics Explorer or the Logs Explorer .

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository object ( PublicRepository ) One of the publicly available Apt repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Your repository administrator must explicitly grant these services access to repositories if: Artifact Registry is in a different project than the service that is interacting with it.
- You must explicitly grant the Artifact Registry service account access to upstream repositories.
- For example, if you developers team in Australia need to download artifacts from Artifact Registry to their local workstations, a repository in an Australian region will reduce latency and incur lower egress charges than a repository located on another continent.
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.

