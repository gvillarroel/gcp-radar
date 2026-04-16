---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.902Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "GitHub pull request build triggers"
feature_slug: "github-pull-request-build-triggers"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
keywords:
  - "start"
  - "request"
  - "pull"
  - "creating"
  - "supports"
  - "triggers"
  - "github"
---

# GitHub pull request build triggers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build supports creating triggers that start builds on GitHub pull requests.

## Extended Definition

Cloud Build supports creating triggers that start builds on GitHub pull requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- GitHub triggers allow you to automatically start builds on Git pushes and pull requests and view build results on GitHub and the Google Cloud console.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- Build and view your changes To build using GitHub triggers , you'll need to push and commit changes to your connected source repository or configure your build on pull requests.
- GitHub Enterprise triggers : This type of trigger lets you invoke builds in response to commits or pull requests on a GitHub Enterprise instance.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- To clone and build repositories through GitHub Enterprise, see Creating and managing build triggers to learn how to specify a build configuration inline.
- Note: Running builds initiated by a GitHub App pull request trigger are canceled when you close the pull request associated with your build.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To learn how you can disable this behavior for GitHub pull request triggers, see Creating GitHub triggers .
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.
- Pull request : Set your trigger to start a build on commits to a pull request.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.

