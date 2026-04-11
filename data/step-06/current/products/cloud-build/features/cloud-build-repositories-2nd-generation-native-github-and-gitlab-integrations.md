---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.700Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) native GitHub and GitLab integrations"
feature_slug: "cloud-build-repositories-2nd-generation-native-github-and-gitlab-integrations"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab"
keywords:
  - "build"
  - "repositories"
  - "2nd"
  - "generation"
  - "native"
  - "github"
  - "and"
  - "gitlab"
---

# Cloud Build repositories (2nd generation) native GitHub and GitLab integrations

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd generation) added direct integration with GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise Edition.

## Extended Definition

Cloud Build repositories (2nd generation) added direct integration with GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise Edition.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Stay organized with collections Save and categorize content based on your preferences.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub .
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.
- To clone and build repositories through GitHub Enterprise, see Creating and managing build triggers to learn how to specify a build configuration inline.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub Enterprise .
- Note: Manual triggers and Pub/Sub triggers cannot build GitHub Enterprise repositories through Cloud Build's integration.

### Build repositories from GitLab \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitLab installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitLab from Cloud Build helps you identify triggers by name and see build results on your GitLab repositories.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitLab Stay organized with collections Save and categorize content based on your preferences.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitLab .
- Click Create to create your GitLab Enterprise Edition trigger. gcloud CLI To create GitLab triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.

