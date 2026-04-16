---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.898Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "GitHub App trigger pull request build cancellation"
feature_slug: "github-app-trigger-pull-request-build-cancellation"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "cancellation"
  - "closing"
  - "request"
  - "pull"
  - "trigger"
  - "github"
---

# GitHub App trigger pull request build cancellation

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Closing pull requests now cancels running builds associated with GitHub App triggers.

## Extended Definition

Closing pull requests now cancels running builds associated with GitHub App triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- Build and view your changes To build using GitHub triggers , you'll need to push and commit changes to your connected source repository or configure your build on pull requests.
- GitHub triggers allow you to automatically start builds on Git pushes and pull requests and view build results on GitHub and the Google Cloud console.
- GitHub Enterprise triggers : This type of trigger lets you invoke builds in response to commits or pull requests on a GitHub Enterprise instance.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Running builds initiated by a GitHub App pull request trigger are canceled when you close the pull request associated with your build.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- Comment control : If you selected Pull request as your Event , choose one of the following options to control whether a build is automatically executed by the trigger: Required except for owners and collaborators : When a pull request is created or updated by a repository owner or collaborator, builds are automatically executed by the trigger.
- Not required : When a pull request is created or updated by any contributor, builds are automatically be executed by triggers.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.
- To learn how you can disable this behavior for GitHub pull request triggers, see Creating GitHub triggers .
- Pull request : Set your trigger to start a build on commits to a pull request.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.

