---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.789Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Non-container artifact storage in Cloud Storage"
feature_slug: "non-container-artifact-storage-in-cloud-storage"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-go"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
keywords:
  - "non"
  - "container"
  - "artifact"
  - "storage"
  - "in"
  - "build"
  - "added"
  - "for"
---

# Non-container artifact storage in Cloud Storage

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added support for storing non-container artifacts in Cloud Storage buckets.

## Extended Definition

Cloud Build added support for storing non-container artifacts in Cloud Storage buckets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)

## Supporting Pages

### Build, test, and containerize Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the preceding steps: steps : Run tests and save to file - name : golang:1.26-trixie entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' ] Deploy to Cloud Run - name : 'gcr.io/cloud-builders/gcloud' args : [ 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '--region' , 'us-central1' , '--platform' , 'managed' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA Start the build using the gcloud CLI or build triggers .
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' ] Deploy the container to Cloud Run : To deploy the image on Cloud Run, add a build step with the following fields: name : Set the value of this field to google/cloud-sdk to use the gcloud CLI image to invoke the gcloud command to deploy the image on Cloud Run. args : Add the arguments for the gcloud run deploy command as the values of this field.
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : 'gcr.io/cloud-builders/gcloud' args : [ 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '--region' , 'us-central1' , '--platform' , 'managed' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- A subsequent build step will save the logs in this file to Cloud Storage. steps : Run tests and save to file - name : golang:1.26-trixie entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Containerize the app : After adding the build step to ensure that the tests have passed, you can build the application.

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Optional: If you want Cloud Build to generate Supply chain Levels for Software Artifacts (SLSA) build provenance information, complete the following: Use the images field in your build step instead of using a separate using a Docker push build step.
- Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Push the container to Artifact Registry : You can store the built container in Artifact Registry, which is a Google Cloud service that you can use to store, manage, and secure build artifacts.

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML steps : - name : 'gcr.io/cloud-builders/docker' id : 'tag-and-push' script : #!/bin/sh set -e docker build -t $ IMAGE . docker push "$ IMAGE" docker inspect $ IMAGE --format "$ IMAGE@{{.Id}}" >image with digest - name : 'gcr.io/cloud-builders/gcloud' id : 'generate-token' script : #!/bin/sh set -e gcloud auth print-identity-token --audiences=sigstore > token - name : 'gcr.io/cloud-builders/docker' id : 'sign-image' script : #!/bin/sh set -e docker run \ --network=cloudbuild \ --mount source=home-volume,target=/builder/home \ --rm \ -e SIGSTORE NO CACHE=true \ -e HOME=/builder/home \ gcr.io/projectsigstore/cosign \ sign --identity-token=$(cat token) $(cat image with digest) -y service account : '$ SERVICE ACCOUNT' artifacts : images : - $ IMAGE substitutions : IMAGE : ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' SERVICE ACCOUNT ID : ' SERVICE ACCOUNT ID ' SERVICE ACCOUNT : projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID} options : env : - ' IMAGE=$ IMAGE' dynamic substitutions : true logging : CLOUD LOGGING ONLY JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "id" : "tag-and-push" , "script" : "#!/bin/sh set -e \ndocker build -t $ IMAGE . \ndocker push \"$ IMAGE\"" }, { "name" : "gcr.io/cloud-builders/gcloud" , "id" : "generate-token-and-get-digest" , "script" : "#!/bin/sh set -e \ngcloud auth print-identity-token --audiences=sigstore > token \ngcloud container images describe \"$ IMAGE\" --format=\"value(image summary.fully qualified digest)\" > image with digest" }, { "name" : "gcr.io/projectsigstore/cosign" , "id" : "sign-image" , "script" : "#!/busybox/sh cosign sign --identity-token=$(cat token) $(cat image with digest) -y" , "env" : [ "SIGSTORE NO CACHE=true" ] } ], "service account" : "$ SERVICE ACCOUNT" , "artifacts" : { "images" : [ "$ IMAGE" ] }, "substitutions" : { " IMAGE" : " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , " SERVICE ACCOUNT ID" : " SERVICE ACCOUNT ID " , " SERVICE ACCOUNT" : "projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID}" }, "options" : { "env" : [ " IMAGE=$ IMAGE" ], "dynamic substitutions" : true , "logging" : "CLOUD LOGGING ONLY" } } Where: LOCATION is the regional or multi-regional location of the repository where the image is stored, for example us-east1 or us .
- The following snippet shows a build config to build an image and store it in Artifact Registry: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '.' ] images : [ ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , "." ] } ], "images" : [ " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } Where: LOCATION : the regional or multi-regional location for your repository.
- The following example shows a build config that builds an OCI image and stores it in Artifact Registry: YAML artifacts : oci : - file : ' OCI IMAGE PATH ' registryPath : 'https:// LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY ' tags : [ "primary image" ] JSON { "artifacts" : { "oci" : [ { "file" : " OCI IMAGE PATH " , "registryPath" : "https:// LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY " , "tags" : [ "primary image" ] } ] } } Where: OCI IMAGE PATH is the address of the local directory that contains the OCI image to upload, for example, /.pack/layout-repo/my-app .
- Sign container images with cosign If you're storing images in Artifact Registry, you can add another layer of security by using the cosign tool to create a record of which service account is used to initiate a build.

