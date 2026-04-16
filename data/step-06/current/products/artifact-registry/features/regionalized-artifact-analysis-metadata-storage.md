---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.482Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Regionalized Artifact Analysis metadata storage"
feature_slug: "regionalized-artifact-analysis-metadata-storage"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance"
keywords:
  - "regionalized"
  - "rolling"
  - "storage"
  - "metadata"
  - "regional"
  - "analysis"
---

# Regionalized Artifact Analysis metadata storage

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Analysis is rolling out regional and multi-region metadata storage endpoints to align Container Analysis metadata with repository location.

## Extended Definition

Artifact Analysis is rolling out regional and multi-region metadata storage endpoints to align Container Analysis metadata with repository location.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Diagram that shows Artifact Analysis creating and interacting with metadata across source, build, storage, deployment and runtime environments.
- Artifact Analysis is a family of services that provide software composition analysis, metadata storage and retrieval.
- To learn about using Artifact Analysis for metadata management, and costs for the optional vulnerability scanning service, see the Artifact Analysis documentation .
- Access metadata Artifact Analysis is a Google Cloud infrastructure component that lets you store and retrieve structured metadata for Google Cloud resources.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To access Docker repositories, use one of the following scopes: storage-ro - Grants read-only permission for pulling images. storage-rw - Grants read and write permission for pushing or pulling images. cloud-platform - View and manage data, including metadata, across Google Cloud service.
- For Docker, the following options are supported: storage-ro - Grants read permission only for pulling images. storage-rw - Grants read and write permission for pushing or pulling images. cloud-platform - View and manage data, including metadata, across Google Cloud service.
- If you use Artifact Analysis to work with container metadata, such as vulnerabilities found in images, see the Artifact Analysis documentation for information about granting access to view or manage metadata.
- Add the newly created imagePullSecret secret to your default service account: imagePullSecrets: - name: artifact - registry Your service account should now look like this: apiVersion : v1 kind : ServiceAccount metadata : name : default namespace : default ... secrets : - name : default - token - zd84v The secret you created : imagePullSecrets : - name : artifact - registry Now, any new pods created in the current default namespace will have the imagePullSecret secret defined.

### "Learn about your container images with Gemini assistance \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

