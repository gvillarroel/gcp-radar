---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.730Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitLab Enterprise Edition repository integration"
feature_slug: "cloud-build-gitlab-enterprise-edition-repository-integration"
latest_feature_date: "2022-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-repo-gitlab-enterprise-edition"
keywords:
  - "build"
  - "gitlab"
  - "enterprise"
  - "edition"
  - "repository"
  - "integration"
  - "can"
  - "repositories"
---

# Cloud Build GitLab Enterprise Edition repository integration

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can build repositories from GitLab Enterprise Edition, including private network-hosted instances.

## Extended Definition

Cloud Build can build repositories from GitLab Enterprise Edition, including private network-hosted instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-repo-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-repo-gitlab-enterprise-edition)

## Supporting Pages

### Build repositories from GitLab Enterprise Edition \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can execute builds in response to events such as commit pushes or merge requests associated with your GitLab Enterprise Edition repository.
- Click Create to create your GitLab Enterprise Edition trigger. gcloud CLI To create GitLab Enterprise Edition triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitLab Enterprise Edition trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "developer connect config" { "git repository link" : " PROJECT ID /locations/ REGION /connections/ CONNECTION NAME /gitRepositoryLinks/ REPO NAME " , "git repository link type" : "GITLAB ENTERPRISE" , // Field filter must be only one of the following: "pullRequest" : " PULL REQUEST FILTER " , "push" : " PUSH FILTER " } } Where: PROJECT ID is your Google Cloud project ID.
- GIT REPOSITORY LINK is the link to your Git repository. " REPO NAME " is the name of your repository. " PULL REQUEST FILTER " is an instance of PullRequestFilter , which defines the filter that allows Cloud Build to trigger a build when a matching pull request is made in GitLab Enterprise Edition. " PUSH FILTER " is an instance of PushFilter , which defines the filter that allows Cloud Build to trigger a build when a matching push is made in GitLab Enterprise Edition.

### "Build repositories from GitLab Enterprise Edition in a private network \_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Build enables you to create triggers to build from repositories hosted on GitLab Enterprise Edition , allowing you to execute builds in response to events such as commit pushes or merge requests associated with your GitLab Enterprise Edition repository.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitLab Enterprise Edition in a private network Stay organized with collections Save and categorize content based on your preferences.
- Build repositories from GitLab Enterprise Edition in a private network If your GitLab Enterprise Edition instance is only accessible within a VPC network, you need to set up a Service Directory service and build using private pools.
- Data sharing The data sent to GitLab Enterprise Edition from Cloud Build helps you identify triggers by name and see build results on your GitLab Enterprise Edition repositories.

### "Connect to a GitLab Enterprise Edition repository \_|\_ Cloud Build \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-repo-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-repo-gitlab-enterprise-edition)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- You have now successfully linked your GitLab Enterprise Edition repository to your connection. gcloud To add a GitLab Enterprise Edition repository to your connection, enter the following command: gcloud builds repositories create REPO NAME \ -- remote - uri = REPO URI \ -- connection = CONNECTION NAME -- region = REGION Where: REPO NAME is the name of your repository.
- Terraform To add a GitLab Enterprise Edition repository to your connection, add the following code snippet to your Terraform configuration: resource "google cloudbuildv2 repository" "my-repository" { project = " PROJECT ID " name = " REPO NAME " location = : REGION " parent connection = google cloudbuildv2 connection.my-connection.name remote uri = " REPO URI ' } Where: PROJECT ID is your Google Cloud project ID.
- Home Documentation Application development Cloud Build Guides Send feedback Connect to a GitLab Enterprise Edition repository Stay organized with collections Save and categorize content based on your preferences.
- Connect to a GitLab Enterprise Edition repository Console Open the Repositories page in the Google Cloud console.

