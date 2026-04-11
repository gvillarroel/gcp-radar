---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.781Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Inverted-regex build triggers on specified branches"
feature_slug: "inverted-regex-build-triggers-on-specified-branches"
latest_feature_date: "2019-05-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
keywords:
  - "inverted"
  - "regex"
  - "build"
  - "triggers"
  - "on"
  - "specified"
  - "branches"
  - "can"
---

# Inverted-regex build triggers on specified branches

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build build triggers can use inverted regex matching and be restricted to specified branches.

## Extended Definition

Cloud Build build triggers can use inverted regex matching and be restricted to specified branches.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Security implications of build triggers The service account configured for a build trigger can provide elevated build-time permissions to users who employ triggers to invoke a build.
- Note: Only the service account specified in the gcloud builds triggers create command is used for builds invoked with triggers.
- If you specified a service account in your build config, it will be ignored during build execution when using triggers.
- Only the service account specified on your trigger will be used for builds executed by triggers.

### Create a build configuration file \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following snippet includes two more steps to the build config file: a docker build step to invoke the docker push command to push the image build in the previous step to Artifact Registry . a build step for the Google Cloud SDK command with the gcloud entrypoint specified, which creates a Compute Engine instance from the container image in Artifact Registry.
- The following snippet includes two more steps to the build config file: a docker build step to invoke the docker push command to push the image build in the previous step to Artifact Registry . a build step for the Google Cloud SDK command with the gcloud entrypoint specified, which creates a Compute Engine instance from the container image in Artifact Registry.
- You can add any number of build steps to your build config file by including additional name fields and pointing them to cloud builders .
- You can add any number of build steps to your build config file by including additional name fields and pointing them to cloud builders .

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Push the container to Artifact Registry : You can store the built container in Artifact Registry, which is a Google Cloud service that you can use to store, manage, and secure build artifacts.

