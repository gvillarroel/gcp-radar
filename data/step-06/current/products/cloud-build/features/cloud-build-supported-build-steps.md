---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.808Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build supported build steps"
feature_slug: "cloud-build-supported-build-steps"
latest_feature_date: "2016-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
keywords:
  - "build"
  - "supported"
  - "steps"
  - "for"
  - "official"
  - "in"
  - "was"
  - "generally"
---

# Cloud Build supported build steps

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Support for official build steps in Cloud Build was generally released.

## Extended Definition

Support for official build steps in Cloud Build was generally released.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)

## Supporting Pages

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- The following steps show how to create and use a custom builder with an example Dockerfile : Create a custom builder image: Create the Dockerfile for the custom builder.
- Clone the cloud-builders-community repository: git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git Navigate to the builder image you want to use, where builder-name is the directory that contains the builder: cd cloud - builders - community / builder - name Submit the builder to your project: gcloud builds submit .

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML steps : - name : 'gcr.io/cloud-builders/docker' id : 'tag-and-push' script : #!/bin/sh set -e docker build -t $ IMAGE . docker push "$ IMAGE" docker inspect $ IMAGE --format "$ IMAGE@{{.Id}}" >image with digest - name : 'gcr.io/cloud-builders/gcloud' id : 'generate-token' script : #!/bin/sh set -e gcloud auth print-identity-token --audiences=sigstore > token - name : 'gcr.io/cloud-builders/docker' id : 'sign-image' script : #!/bin/sh set -e docker run \ --network=cloudbuild \ --mount source=home-volume,target=/builder/home \ --rm \ -e SIGSTORE NO CACHE=true \ -e HOME=/builder/home \ gcr.io/projectsigstore/cosign \ sign --identity-token=$(cat token) $(cat image with digest) -y service account : '$ SERVICE ACCOUNT' artifacts : images : - $ IMAGE substitutions : IMAGE : ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' SERVICE ACCOUNT ID : ' SERVICE ACCOUNT ID ' SERVICE ACCOUNT : projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID} options : env : - ' IMAGE=$ IMAGE' dynamic substitutions : true logging : CLOUD LOGGING ONLY JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "id" : "tag-and-push" , "script" : "#!/bin/sh set -e \ndocker build -t $ IMAGE . \ndocker push \"$ IMAGE\"" }, { "name" : "gcr.io/cloud-builders/gcloud" , "id" : "generate-token-and-get-digest" , "script" : "#!/bin/sh set -e \ngcloud auth print-identity-token --audiences=sigstore > token \ngcloud container images describe \"$ IMAGE\" --format=\"value(image summary.fully qualified digest)\" > image with digest" }, { "name" : "gcr.io/projectsigstore/cosign" , "id" : "sign-image" , "script" : "#!/busybox/sh cosign sign --identity-token=$(cat token) $(cat image with digest) -y" , "env" : [ "SIGSTORE NO CACHE=true" ] } ], "service account" : "$ SERVICE ACCOUNT" , "artifacts" : { "images" : [ "$ IMAGE" ] }, "substitutions" : { " IMAGE" : " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , " SERVICE ACCOUNT ID" : " SERVICE ACCOUNT ID " , " SERVICE ACCOUNT" : "projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID}" }, "options" : { "env" : [ " IMAGE=$ IMAGE" ], "dynamic substitutions" : true , "logging" : "CLOUD LOGGING ONLY" } } Where: LOCATION is the regional or multi-regional location of the repository where the image is stored, for example us-east1 or us .
- In your build config file, after the step that builds the image, add a step to invoke the Docker push command and then add the images field: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '.' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] images : [ ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , "." ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } ], "images" : [ " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } Where: LOCATION : the regional or multi-regional location for your repository.
- In your build config file, add a docker build step to build an image and then add another docker build step and pass arguments to invoke the push command: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '.' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , "." ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } ] } Where: LOCATION : the regional or multi-regional location for your repository.
- The following snippet shows a build config to build an image and store it in Artifact Registry: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '.' ] images : [ ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , "." ] } ], "images" : [ " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " ] } Where: LOCATION : the regional or multi-regional location for your repository.

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- To configure Cloud Build to store the image in an Artifact Registry Docker repository, add a build step with the following fields: name : Set the value of this field to gcr.io/cloud-builders/docker to use the official docker builder image for your task. args : Add the arguments for the docker push command as values of this field.
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.

