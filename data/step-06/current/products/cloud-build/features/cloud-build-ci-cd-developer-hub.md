---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.906Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build CI/CD developer hub"
feature_slug: "cloud-build-ci-cd-developer-hub"
latest_feature_date: "2019-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers"
keywords:
  - "made"
  - "developer"
  - "available"
---

# Cloud Build CI/CD developer hub

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build made the CI/CD developer hub available.

## Extended Definition

Cloud Build made the CI/CD developer hub available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers)

## Supporting Pages

### Build repositories from GitLab \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your GitLab Enterprise Edition trigger. gcloud CLI To create GitLab triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitLab trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "developer connect config" { "git repository link" : " PROJECT ID /locations/ REGION /connections/ CONNECTION NAME /gitRepositoryLinks/ REPO NAME " , "git repository link type" : "GITLAB" , // Field filter must be only one of the following: "pullRequest" : " PULL REQUEST FILTER " , "push" : " PUSH FILTER " } } Where: PROJECT ID is your Google Cloud project ID.
- GIT REPOSITORY LINK is the link to your Git repository. " REPO NAME " is the name of your repository. " PULL REQUEST FILTER " is an instance of PullRequestFilter , which defines the filter that allows Cloud Build to trigger a build when a matching pull request is made in GitLab. " PUSH FILTER " is an instance of PushFilter , which defines the filter that allows Cloud Build to trigger a build when a matching push is made in GitLab.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitLab installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitLab from Cloud Build helps you identify triggers by name and see build results on your GitLab repositories.

### Build repositories from GitLab Enterprise Edition \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your GitLab Enterprise Edition trigger. gcloud CLI To create GitLab Enterprise Edition triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitLab Enterprise Edition trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "developer connect config" { "git repository link" : " PROJECT ID /locations/ REGION /connections/ CONNECTION NAME /gitRepositoryLinks/ REPO NAME " , "git repository link type" : "GITLAB ENTERPRISE" , // Field filter must be only one of the following: "pullRequest" : " PULL REQUEST FILTER " , "push" : " PUSH FILTER " } } Where: PROJECT ID is your Google Cloud project ID.
- GIT REPOSITORY LINK is the link to your Git repository. " REPO NAME " is the name of your repository. " PULL REQUEST FILTER " is an instance of PullRequestFilter , which defines the filter that allows Cloud Build to trigger a build when a matching pull request is made in GitLab Enterprise Edition. " PUSH FILTER " is an instance of PushFilter , which defines the filter that allows Cloud Build to trigger a build when a matching push is made in GitLab Enterprise Edition.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitLab Enterprise Edition installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitLab Enterprise Edition from Cloud Build helps you identify triggers by name and see build results on your GitLab Enterprise Edition repositories.

### "Module pagers (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers)
- Source ID: `site-python-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Module pagers (3.35.0) Stay organized with collections Save and categorize content based on your preferences.
- If multiple requests are made, only the most recent response is retained, and thus used for attribute lookup.
- If multiple requests are made, only the most recent response is retained, and thus used for attribute lookup.
- If multiple requests are made, only the most recent response is retained, and thus used for attribute lookup.

