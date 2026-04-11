---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.924Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability in me-west1"
feature_slug: "artifact-registry-regional-availability-in-me-west1"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/names"
  - "https://docs.cloud.google.com/artifact-registry/docs/container-concepts"
keywords:
  - "west1"
  - "me"
  - "availability"
  - "regional"
  - "registry"
  - "artifact"
  - "is"
  - "in"
---

# Artifact Registry regional availability in me-west1

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry is available in the me-west1 region (Tel Aviv, Israel).

## Extended Definition

Artifact Registry is available in the me-west1 region (Tel Aviv, Israel).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/names](https://docs.cloud.google.com/artifact-registry/docs/docker/names)
- [https://docs.cloud.google.com/artifact-registry/docs/container-concepts](https://docs.cloud.google.com/artifact-registry/docs/container-concepts)

## Supporting Pages

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Integrating with Jenkins Stay organized with collections Save and categorize content based on your preferences.
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- In the project that contains the repository, grant the Artifact Registry Writer role to the Jenkins service account that you created.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.

### Repository and image names \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/names](https://docs.cloud.google.com/artifact-registry/docs/docker/names)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, consider an image with the following characteristics: Repository location: us-west1 Repository format: docker Repository name: my-repo Project ID: my-project The repository is specified as: us-west1-docker.pkg.dev/my-project/my-repo Container image names The full name for a container image is one of the following formats: LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE or LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG or LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE @ IMAGE-DIGEST where: LOCATION is the regional or multi-regional location of the repository.
- For example, consider an image with the following characteristics: Repository location: us-west1 Repository name: my-repo Project ID: my-project Image name: test Tag: staging Digest: sha256:4d11e24ba8a615cc85a535daa17b47d3c0219f7eeb2b8208896704ad7f88ae2d To identify the image with the tag, append :staging to the image name: us-west1-docker.pkg.dev/my-project/my-repo/test:staging To identify it with the digest, append @ to the image name, followed by the digest: us-west1 - docker . pkg . dev / my - project / my - repo / test @sha256 : 4 d11e24ba8a615cc85a535daa17b47d3c0219f7eeb2b8208896704ad7f88ae2d If your project ID contains a colon ( : ), see Domain-scoped projects .
- For example, consider an image with the following characteristics: Repository location: us-west1 Repository name: my-repo Project ID: my-project Image name: test Tag: staging This version of the image tagged with staging is specified as: us-west1-docker.pkg.dev/my-project/my-repo/test:staging Container image versions A repository can contain many container images, and these images can have different versions.
- Identify images in these types of projects using the following format: LOCATION -docker.pkg.dev/ DOMAIN / PROJECT-ID / REPOSITORY / IMAGE @ IMAGE-DIGEST For example, the project with ID example.com:my-project could have the following image: us-west1-docker.pkg.dev/example.com/my-project/my-repo/image-name Note: Scoping projects to a domain is a legacy feature.

### Container concepts \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/container-concepts](https://docs.cloud.google.com/artifact-registry/docs/container-concepts)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Artifact Registry, this part of the path is called the repository. quickstart-image is the name for all versions of quickstart-image and is often referred to as the image . tag1 is the tag specifying the version of the image.
- Artifact Registry typically refers to parts of the path to an image to identify the project, regional or multi-regional location , and name of the image along with the tag or manifest digest to identify the correct version.
- Home Documentation Application development Artifact Registry Guides Send feedback Container concepts Stay organized with collections Save and categorize content based on your preferences.
- Artifact Registry repositories and image management In Artifact Registry Docker-format repositories, you can store multiple container images with different names in the same repository.

