---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.670Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build OCI image publishing to Artifact Registry"
feature_slug: "cloud-build-oci-image-publishing-to-artifact-registry"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
keywords:
  - "build"
  - "oci"
  - "image"
  - "publishing"
  - "to"
  - "artifact"
  - "registry"
  - "now"
---

# Cloud Build OCI image publishing to Artifact Registry

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports uploading OCI images from builds to Artifact Registry and exposing them in build artifact views.

## Extended Definition

Cloud Build now supports uploading OCI images from builds to Artifact Registry and exposing them in build artifact views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create to create your build trigger. gcloud To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the gcloud commands: Open a terminal window.
- Creating a build trigger that responds to Artifact Registry events You can create a Pub/Sub trigger that responds to Artifact Registry events such as when images are pushed, tagged, or deleted.
- Risks associated with an unfiltered trigger If you have not configured filters on your Pub/Sub trigger, your trigger may end up invoking an infinite number of builds if your trigger modifies an artifact or object which unintentionally publishes a new message to the topic it's listening to.
- Console To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the Google Cloud console: Open the Triggers page: Open the Triggers page Select your project from the top of the page and click Open .

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- Build and push a Docker image with Cloud Build Learn how to get started with Cloud Build by building a Docker image and pushing the image to Artifact Registry.
- You should see output similar to the following: You can download your build log and view your image details in Artifact Registry from this page.

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows a build config that builds an OCI image and stores it in Artifact Registry: YAML artifacts : oci : - file : ' OCI IMAGE PATH ' registryPath : 'https:// LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY ' tags : [ "primary image" ] JSON { "artifacts" : { "oci" : [ { "file" : " OCI IMAGE PATH " , "registryPath" : "https:// LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY " , "tags" : [ "primary image" ] } ] } } Where: OCI IMAGE PATH is the address of the local directory that contains the OCI image to upload, for example, /.pack/layout-repo/my-app .
- Store an OCI image in Artifact Registry after your build completes In the same directory that contains your application source code and Dockerfile , create a file named cloudbuild.yaml or cloudbuild.json .
- Use the artifacts.oci field to store an OCI image in Artifact Registry after your build completes.
- The following snippet shows a build config to build an image and store it in Artifact Registry: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '.' ] images : [ ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , "." ] } ], "images" : [ " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } Where: LOCATION : the regional or multi-regional location for your repository.

