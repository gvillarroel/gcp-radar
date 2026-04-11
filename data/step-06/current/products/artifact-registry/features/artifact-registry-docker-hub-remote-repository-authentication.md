---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.916Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Docker Hub remote repository authentication"
feature_slug: "artifact-registry-docker-hub-remote-repository-authentication"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "authentication"
  - "hub"
  - "repositories"
  - "repository"
  - "remote"
  - "docker"
  - "registry"
  - "artifact"
---

# Artifact Registry Docker Hub remote repository authentication

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry remote repositories support authentication when using Docker Hub as an upstream source.

## Extended Definition

Artifact Registry remote repositories support authentication when using Docker Hub as an upstream source.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "Configure remote repository authentication to Docker Hub \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- Source ID: `site-docs-root-2`
- Final score: 310
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Remote repository authentication mode section, update or add your Docker Hub username and the secret version containing your Docker Hub access token. gcloud CLI To update your remote repository with your Docker Hub credentials, run the following command: gcloud artifacts repositories update REPOSITORY \ --project= PROJECT ID \ --location= LOCATION \ --remote-username= USERNAME \ --remote-password-secret-version=projects/ SECRET PROJECT ID /secrets/ SECRET ID /versions/ SECRET VERSION Replace the following: REPOSITORY with the name of your Artifact Registry remote repository.
- Required roles To get the permissions that you need to configure authentication to Docker Hub for remote repositories, ask your administrator to grant you the following IAM roles on the project: Artifact Registry Admin ( roles/artifactregistry.admin ) Secret Manager Admin ( roles/secretmanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Application development Artifact Registry Guides Send feedback Configure remote repository authentication to Docker Hub Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to configure authentication to Docker Hub upstream repositories for Artifact Registry remote repositories.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.
- Linux: /.docker/config.json Windows: %USERPROFILE%\.docker\config.json There are separate sections in the file for different authentication methods: credHelpers If you use the Docker credential helper for authentication Artifact Registry stores the credential helper settings in the credHelpers section of the file. auths If you use Docker to sign in with a token or service account key as your password, Docker stores a base64-encoded version of your credentials in the auths section of the file. credStore If you configured a credential store to manage your credentials, the settings for the credential store are in the credStore section of the file.
- Home Documentation Application development Artifact Registry Guides Send feedback Configure authentication to Artifact Registry for Docker Stay organized with collections Save and categorize content based on your preferences.
- Choosing an authentication method The following authentication methods are available: gcloud CLI credential helper Configure your Artifact Registry credentials for use with Docker directly in gcloud CLI.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Docker repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Python repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.

