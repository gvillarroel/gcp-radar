---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.910Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Regionalized Artifact Analysis metadata storage"
feature_slug: "regionalized-artifact-analysis-metadata-storage"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
keywords:
  - "regionalized"
  - "rolling"
  - "out"
  - "storage"
  - "metadata"
  - "analysis"
  - "artifact"
  - "is"
---

# Regionalized Artifact Analysis metadata storage

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Analysis is rolling out regional and multi-region metadata storage endpoints to align Container Analysis metadata with repository location.

## Extended Definition

Artifact Analysis is rolling out regional and multi-region metadata storage endpoints to align Container Analysis metadata with repository location.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn about using Artifact Analysis for metadata management, and costs for the optional vulnerability scanning service, see the Artifact Analysis documentation .
- Diagram that shows Artifact Analysis creating and interacting with metadata across source, build, storage, deployment and runtime environments.
- Artifact Analysis is a family of services that provide software composition analysis, metadata storage and retrieval.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- September 30, 2024 v1 Feature Artifact Analysis is gradually rolling out regionalized data storage and endpoints to help support compliance with data residency requirements.
- For more information, see the Types of scanning in the Container Analysis documentation October 11, 2022 v1 Feature When users enable the Container Scanning API and push container images to Artifact Registry, automatic container scanning now generates metadata including a software bill of materials (SBOM) dependency list.
- To learn more about our SBOM capabilities, see SBOM overview . v1 Feature Artifact Analysis now offers support for Vulnerability Exploitability eXchange (VEX).
- The Container Analysis API stores metadata in the same region or multi-region as the Artifact Registry repository where your image is scanned.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If you use Artifact Analysis to work with container metadata, such as vulnerabilities found in images, see the Artifact Analysis documentation for information about granting access to view or manage metadata.
- Granting access to Google Kubernetes Engine clusters GKE clusters and node pools can pull containers without any additional configuration if all the following requirements are met: GKE is in the same project as Artifact Registry Nodes are using the default service account, the Compute Engine default service account Nodes were created with read access to storage by: Using the Compute Engine default access scopes .
- Add the newly created imagePullSecret secret to your default service account: imagePullSecrets: - name: artifact - registry Your service account should now look like this: apiVersion : v1 kind : ServiceAccount metadata : name : default namespace : default ... secrets : - name : default - token - zd84v The secret you created : imagePullSecrets : - name : artifact - registry Now, any new pods created in the current default namespace will have the imagePullSecret secret defined.
- To access Docker repositories, use one of the following scopes: storage-ro - Grants read-only permission for pulling images. storage-rw - Grants read and write permission for pushing or pulling images. cloud-platform - View and manage data, including metadata, across Google Cloud service.

