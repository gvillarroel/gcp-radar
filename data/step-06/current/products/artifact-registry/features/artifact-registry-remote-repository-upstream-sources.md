---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.481Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry remote repository upstream sources"
feature_slug: "artifact-registry-remote-repository-upstream-sources"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub"
keywords:
  - "upstream"
  - "sources"
  - "repositories"
  - "repository"
  - "remote"
---

# Artifact Registry remote repository upstream sources

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry remote repositories now support using standard Artifact Registry repositories as upstreams for supported formats.

## Extended Definition

Artifact Registry remote repositories now support using standard Artifact Registry repositories as upstreams for supported formats.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remote repository Remote repositories are read-only repositories that act as proxies to store artifacts from the following upstream sources: Standard Artifact Registry repositories.
- You can also mitigate dependency confusion attacks by configuring your upstream policy to prioritize repositories with your private artifacts over remote repositories that cache public artifacts.
- Virtual repository A read-only repository that acts as a single access point to download, install, or deploy artifacts of the same format from one or more upstream repositories .
- The upstream remote repository provides images that GKE requests from Docker Hub.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository object ( PublicRepository ) One of the publicly available Apt repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

### "Configure remote repository authentication to Docker Hub \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Remote repository authentication mode section, update or add your Docker Hub username and the secret version containing your Docker Hub access token. gcloud CLI To update your remote repository with your Docker Hub credentials, run the following command: gcloud artifacts repositories update REPOSITORY \ --project= PROJECT ID \ --location= LOCATION \ --remote-username= USERNAME \ --remote-password-secret-version=projects/ SECRET PROJECT ID /secrets/ SECRET ID /versions/ SECRET VERSION Replace the following: REPOSITORY with the name of your Artifact Registry remote repository.
- Add Docker Hub credentials to your remote repository To update your remote repository with your Docker Hub credentials: Console Open the Repositories page in the Google Cloud console.
- This document describes how to configure authentication to Docker Hub upstream repositories for Artifact Registry remote repositories.
- Your credentials are used the next time the remote repository sends a request for an artifact from the upstream source.

