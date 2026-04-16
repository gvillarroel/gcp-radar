---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.486Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry remote repositories"
feature_slug: "artifact-registry-remote-repositories"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "proxying"
  - "external"
  - "repositories"
  - "package"
  - "remote"
  - "available"
---

# Artifact Registry remote repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry remote repositories are available for proxying external package sources and caching requested package versions; Artifact Registry added remote repositories in preview, which cache artifacts from external sources such as Docker Hub, Maven Central, PyPI, and the npm registry.

## Extended Definition

Artifact Registry remote repositories are available for proxying external package sources and caching requested package versions; Artifact Registry added remote repositories in preview, which cache artifacts from external sources such as Docker Hub, Maven Central, PyPI, and the npm registry.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "Configure remote repository authentication to Docker Hub \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Remote repository authentication mode section, update or add your Docker Hub username and the secret version containing your Docker Hub access token. gcloud CLI To update your remote repository with your Docker Hub credentials, run the following command: gcloud artifacts repositories update REPOSITORY \ --project= PROJECT ID \ --location= LOCATION \ --remote-username= USERNAME \ --remote-password-secret-version=projects/ SECRET PROJECT ID /secrets/ SECRET ID /versions/ SECRET VERSION Replace the following: REPOSITORY with the name of your Artifact Registry remote repository.
- Required roles To get the permissions that you need to configure authentication to Docker Hub for remote repositories, ask your administrator to grant you the following IAM roles on the project: Artifact Registry Admin ( roles/artifactregistry.admin ) Secret Manager Admin ( roles/secretmanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add Docker Hub credentials to your remote repository To update your remote repository with your Docker Hub credentials: Console Open the Repositories page in the Google Cloud console.
- Remote repositories allow you to add your Docker Hub username and a personal access token saved as a secret to authenticate to Docker Hub.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's Next Create standard repositories Learn more about remote repositories Learn more about virtual repositories Create remote repositories Create virtual repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can also mitigate dependency confusion attacks by configuring your upstream policy to prioritize repositories with your private artifacts over remote repositories that cache public artifacts.
- Remote repository Remote repositories are read-only repositories that act as proxies to store artifacts from the following upstream sources: Standard Artifact Registry repositories.
- Remote repositories reduce latency and improve availability for builds and deployments on Google Cloud.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository object ( PublicRepository ) One of the publicly available Apt repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

