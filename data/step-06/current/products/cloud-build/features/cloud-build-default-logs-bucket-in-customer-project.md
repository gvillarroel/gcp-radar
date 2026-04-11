---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.716Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build default logs bucket in customer project"
feature_slug: "cloud-build-default-logs-bucket-in-customer-project"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-go"
keywords:
  - "build"
  - "default"
  - "logs"
  - "bucket"
  - "in"
  - "customer"
  - "project"
  - "supports"
---

# Cloud Build default logs bucket in customer project

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting.

## Extended Definition

Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go)

## Supporting Pages

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Required IAM permissions To store test logs in Logging, grant the Storage Object Creator ( roles/storage.objectCreator ) role for the Cloud Storage bucket to your build service account.
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Optional: If you want Cloud Build to generate Supply chain Levels for Software Artifacts (SLSA) build provenance information, complete the following: Use the images field in your build step instead of using a separate using a Docker push build step.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Your file will look similar to the following: createTime: '2020-02-21T20:02:50.215599013Z' description: Push to any branch filename: cloudbuild.yaml github: name: example-repo-name owner: example-owner push: branch: . id: example-id name: Push-to-any-branch tags: - github-default-push-trigger Add the disabled field to the end of your file and set the value to True . disabled: True Save your file.
- Your file will look similar to the following: createTime: '2022-05-26T21:56:11.830784153Z' filename: cloudbuild.yaml github: name: cloud-build-example owner: main push: branch: master id: 86201062-3b14-4b6a-a2fb-4ee924e8b1dd remove field name and value to not show build logs includeBuildLogs: INCLUDE BUILD LOGS WITH STATUS name: trigger-001 Manually edit your file to update your trigger.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.

### Build, test, and containerize Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-go](https://docs.cloud.google.com/build/docs/building/build-containerize-go)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the preceding steps: steps : Run tests and save to file - name : golang:1.26-trixie entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' ] Deploy to Cloud Run - name : 'gcr.io/cloud-builders/gcloud' args : [ 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '--region' , 'us-central1' , '--platform' , 'managed' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA Start the build using the gcloud CLI or build triggers .
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : 'gcr.io/cloud-builders/gcloud' args : [ 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' , '--region' , 'us-central1' , '--platform' , 'managed' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Required IAM permissions To store test logs in Logging, grant the Storage Object Creator ( roles/storage.objectCreator ) role for the Cloud Storage bucket to your build service account.
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/$PROJECT ID/$ AR REPO NAME/myimage:$SHORT SHA' ] Deploy the container to Cloud Run : To deploy the image on Cloud Run, add a build step with the following fields: name : Set the value of this field to google/cloud-sdk to use the gcloud CLI image to invoke the gcloud command to deploy the image on Cloud Run. args : Add the arguments for the gcloud run deploy command as the values of this field.

