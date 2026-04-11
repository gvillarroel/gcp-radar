---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.764Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub App trigger name visibility"
feature_slug: "cloud-build-github-app-trigger-name-visibility"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
keywords:
  - "build"
  - "github"
  - "app"
  - "trigger"
  - "name"
  - "visibility"
  - "the"
  - "now"
---

# Cloud Build GitHub App trigger name visibility

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

The Cloud Build GitHub App now shows trigger names on GitHub, including within pull requests.

## Extended Definition

The Cloud Build GitHub App now shows trigger names on GitHub, including within pull requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- Your file will look similar to the following: createTime: '2020-02-21T20:02:50.215599013Z' description: Push to any branch filename: cloudbuild.yaml github: name: example-repo-name owner: example-owner push: branch: . id: example-id name: Push-to-any-branch tags: - github-default-push-trigger Add the disabled field to the end of your file and set the value to True . disabled: True Save your file.
- Your file will look similar to the following: createTime: '2022-05-26T21:56:11.830784153Z' filename: cloudbuild.yaml github: name: cloud-build-example owner: main push: branch: master id: 86201062-3b14-4b6a-a2fb-4ee924e8b1dd remove field name and value to not show build logs includeBuildLogs: INCLUDE BUILD LOGS WITH STATUS name: trigger-001 Manually edit your file to update your trigger.

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitHub trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.

