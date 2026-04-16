---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.813Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build OCI image publishing to Artifact Registry"
feature_slug: "cloud-build-oci-image-publishing-to-artifact-registry"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
  - "https://docs.cloud.google.com/build/docs/quickstart-docker"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
keywords:
  - "publishing"
  - "image"
  - "registry"
  - "artifact"
  - "supports"
---

# Cloud Build OCI image publishing to Artifact Registry

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports uploading OCI images from builds to Artifact Registry and exposing them in build artifact views.

## Extended Definition

Cloud Build now supports uploading OCI images from builds to Artifact Registry and exposing them in build artifact views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- [https://docs.cloud.google.com/build/docs/quickstart-docker](https://docs.cloud.google.com/build/docs/quickstart-docker)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)

## Supporting Pages

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- For example, when you interact with Docker images stored in Artifact Registry in the us-west2 region, you use us-west2-docker.pkg.dev as the registry hostname in your commands.
- Build and push a Docker image with Cloud Build Learn how to get started with Cloud Build by building a Docker image and pushing the image to Artifact Registry.

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/quickstart-docker](https://docs.cloud.google.com/build/docs/quickstart-docker)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- For example, when you interact with Docker images stored in Artifact Registry in the us-west2 region, you use us-west2-docker.pkg.dev as the registry hostname in your commands.
- Build and push a Docker image with Cloud Build Learn how to get started with Cloud Build by building a Docker image and pushing the image to Artifact Registry.

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If any objects fail to be pushed, the build is marked FAILURE. maven artifacts MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.MavenArtifact ] A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. npm packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.NpmPackage ] A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any of the images fail to be pushed, the build is marked FAILURE. objects google.cloud.devtools.cloudbuild v1.types.Artifacts.ArtifactObjects A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.

