---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.913Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Software Bill of Materials (SBOM)"
feature_slug: "artifact-registry-software-bill-of-materials-sbom"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/overview"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
keywords:
  - "provides"
  - "materials"
  - "software"
  - "bill"
  - "sbom"
  - "registry"
  - "artifact"
  - "of"
---

# Artifact Registry Software Bill of Materials (SBOM)

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry provides software bill of materials (SBOM) generation and access for container images.

## Extended Definition

Artifact Registry provides software bill of materials (SBOM) generation and access for container images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/overview](https://docs.cloud.google.com/artifact-registry/docs/overview)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Types of scanning in the Container Analysis documentation October 11, 2022 v1 Feature When users enable the Container Scanning API and push container images to Artifact Registry, automatic container scanning now generates metadata including a software bill of materials (SBOM) dependency list.
- For more information, see Python overview and Node.js overview . v1 Feature Artifact Analysis now offers the ability to export a consolidated software bill of materials (SBOM) for scanned containers in Artifact Registry.
- To learn more, see Upload VEX statements . v1 Feature The software bill of materials (SBOM) feature is now Generally Available (GA) .
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .

### Artifact Registry overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/overview](https://docs.cloud.google.com/artifact-registry/docs/overview)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about best practices for dependencies, see Dependency management Software supply chain security Google Cloud provides a comprehensive and modular set of capabilities and tools that your developers, DevOps, and security teams can use to improve the security posture of your software supply chain.
- Artifact Registry provides: Remote repositories to cache dependencies from upstream public sources so that you have greater control over them and can scan them for vulnerabilities, build provenance, and other dependency information.
- Artifact Registry and Container Registry Artifact Registry expands on the capabilities of Container Registry and is the recommended container registry for Google Cloud.
- Artifact Registry lets you centrally store artifacts and build dependencies as part of an integrated Google Cloud experience.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- Update manifests to reference Artifact Registry Update your Dockerfiles and your manifests to refer to Artifact Registry instead of the third-party registry.
- If you want to incorporate a newer version of an image into your pipeline, then you must push it to Artifact Registry.

