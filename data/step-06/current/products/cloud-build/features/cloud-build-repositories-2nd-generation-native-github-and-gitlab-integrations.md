---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.831Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) native GitHub and GitLab integrations"
feature_slug: "cloud-build-repositories-2nd-generation-native-github-and-gitlab-integrations"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
keywords:
  - "integrations"
  - "native"
  - "gitlab"
  - "generation"
  - "repositories"
  - "github"
---

# Cloud Build repositories (2nd generation) native GitHub and GitLab integrations

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (2nd generation) added direct integration with GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise Edition.

## Extended Definition

Cloud Build repositories (2nd generation) added direct integration with GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise Edition.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)

## Supporting Pages

### Build repositories from GitLab \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitLab installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitLab from Cloud Build helps you identify triggers by name and see build results on your GitLab repositories.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitLab Stay organized with collections Save and categorize content based on your preferences.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitLab .
- Click Create to create your GitLab Enterprise Edition trigger. gcloud CLI To create GitLab triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.

### Build repositories from GitLab Enterprise Edition \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitLab Enterprise Edition installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitLab Enterprise Edition from Cloud Build helps you identify triggers by name and see build results on your GitLab Enterprise Edition repositories.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitLab Enterprise Edition Stay organized with collections Save and categorize content based on your preferences.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitLab Enterprise Edition .
- Learn how to build repositories from GitLab Enterprise Edition in a private network .

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Stay organized with collections Save and categorize content based on your preferences.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub .
- You can build repositories from GitHub Enterprise using the Google Cloud console or the Cloud Build API.

