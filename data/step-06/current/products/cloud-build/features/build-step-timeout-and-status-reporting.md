---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.790Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Build step timeout and status reporting"
feature_slug: "build-step-timeout-and-status-reporting"
latest_feature_date: "2018-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status"
keywords:
  - "build"
  - "step"
  - "timeout"
  - "and"
  - "status"
  - "reporting"
  - "added"
  - "for"
---

# Build step timeout and status reporting

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added timeout and status reporting for build steps.

## Extended Definition

Cloud Build added timeout and status reporting for build steps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status)

## Supporting Pages

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- The following steps show how to create and use a custom builder with an example Dockerfile : Create a custom builder image: Create the Dockerfile for the custom builder.
- If the task you want to perform requires capabilities that are not provided by an existing image, you can build your own custom image and use it in a build step.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- If your build config type is a Dockerfile or a buildpack, then you will need to provide a name for the resulting image and optionally, a timeout for your build.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Your file will look similar to the following: createTime: '2022-05-26T21:56:11.830784153Z' filename: cloudbuild.yaml github: name: cloud-build-example owner: main push: branch: master id: 86201062-3b14-4b6a-a2fb-4ee924e8b1dd remove field name and value to not show build logs includeBuildLogs: INCLUDE BUILD LOGS WITH STATUS name: trigger-001 Manually edit your file to update your trigger.
- Each time you push a change to your source, Cloud Build looks through your changed files for included and ignored files to determine whether a build should be invoked: If you push a change to your repository on an existing branch, Cloud Build looks at the files changed between the commit you just pushed and the commit to which the branch previously pointed.

### Class Status (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Status ( value ) Possible status of a build or build step.
- TIMEOUT Build or step took longer than was allowed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- Home Documentation Developer tools Python Client libraries Send feedback Class Status (3.35.0) Stay organized with collections Save and categorize content based on your preferences.

