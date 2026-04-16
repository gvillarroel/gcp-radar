---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.482Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "OCI v1.1 support for Docker repositories"
feature_slug: "oci-v1-1-support-for-docker-repositories"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
keywords:
  - "specification"
  - "repositories"
  - "docker"
  - "adds"
---

# OCI v1.1 support for Docker repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments.

## Extended Definition

Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)

## Supporting Pages

### "REST Resource: projects.locations.repositories.dockerImages \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): imageSizeBytes mediaType buildTime JSON representation { "name" : string , "uri" : string , "tags" : [ string ] , "imageSizeBytes" : string , "uploadTime" : string , "mediaType" : string , "buildTime" : string , "updateTime" : string , "artifactType" : string , "imageManifests" : [ { object ( ImageManifest ) } ] } Fields name string Required. registry location, projectId, repository name and image id forms a unique image name: projects/<projectId>/locations/<location>/repositories/<repository name>/dockerImages/<docker image> .
- For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" , where "us-west4" is the registry location, "test-project" is the projectId, "test-repo" is the repository name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest. uri string Required.
- Home Documentation Application development Artifact Registry Reference Send feedback REST Resource: projects.locations.repositories.dockerImages Stay organized with collections Save and categorize content based on your preferences.
- Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf tags[] string Tags attached to this image. imageSizeBytes string ( int64 format) Calculated size of the image.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The repository is added to the repository list. gcloud Run the following command to create a new Docker repository named quickstart-docker-repo in the location us-west1 with the description "docker repository". gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west1 --description = "Docker repository" \ --project = PROJECT Where PROJECT is your Google Cloud project ID.
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Click Delete . gcloud To delete the quickstart-docker-repo repository, run the following command: gcloud artifacts repositories delete quickstart-docker-repo --location = us-west1 What's next Learn more about working with container images .
- To set up authentication to Docker repositories in the region us-west1 , run the following command: gcloud auth configure-docker us-west1-docker.pkg.dev The command updates your Docker configuration.

### "Support for the Docker Registry API \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Artifact Registry implements version 1.1 of the Open Container Initiative (OCI) Distribution Specification so that you can push and pull images directly with Docker clients, including the Docker command-line tool .
- Make requests to Artifact Registry using the OCI Distribution Specification If using Docker or the gcrane tool isn't an option, then you can use the OCI Distribution Specification.
- The jq tool is included in Cloud Shell. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https://us-docker.pkg.dev/v2/my-project/my-repo/my-image/tags/list" jq ".tags" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud services that typically integrate with Artifact Registry, such as Cloud Build and Google Kubernetes Engine, are configured by with default permissions to access repositories in the same project and don't require a separate client.

