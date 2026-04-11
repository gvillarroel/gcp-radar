---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.765Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build open-source notifiers"
feature_slug: "cloud-build-open-source-notifiers"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "build"
  - "open"
  - "source"
  - "notifiers"
  - "for"
  - "slack"
  - "and"
  - "smtp"
---

# Cloud Build open-source notifiers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Open-source notifiers for Slack and SMTP are now generally available for build status notifications.

## Extended Definition

Open-source notifiers for Slack and SMTP are now generally available for build status notifications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Each time you push a change to your source, Cloud Build looks through your changed files for included and ignored files to determine whether a build should be invoked: If you push a change to your repository on an existing branch, Cloud Build looks at the files changed between the commit you just pushed and the commit to which the branch previously pointed.
- If you select GitHub (mirrored) or Bitbucket (mirrored) as your source repository, then Cloud Build mirrors your repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- After you run the gcloud command to create a trigger using Cloud Source Repositories or GitHub, you should see an output similar to the following: NAME CREATE TIME STATUS trigger-001 2019-10-30T20:45:03+00:00 Note: The trigger name is automatically generated for you.

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- Get your Google Cloud project ID by running the following command: gcloud config get-value project Run the following command from the directory containing quickstart.sh and Dockerfile : gcloud builds submit -- region = us - west2 -- tag us - west2 - docker . pkg . dev / PROJECT ID / quickstart - docker - repo / quickstart - image: tag1 Note: If your project ID contains a colon, replace the colon with a forward slash.
- Open the Cloud Build page If necessary, select your project and click Open .

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- The following steps show how to create and use a custom builder with an example Dockerfile : Create a custom builder image: Create the Dockerfile for the custom builder.

