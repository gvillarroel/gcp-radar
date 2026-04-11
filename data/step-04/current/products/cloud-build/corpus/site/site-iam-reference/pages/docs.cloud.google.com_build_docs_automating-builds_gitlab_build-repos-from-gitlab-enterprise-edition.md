---
title: "Build repositories from GitLab Enterprise Edition \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition
  title: "Build repositories from GitLab Enterprise Edition \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Build repositories from GitLab Enterprise Edition
Stay organized with collections
Save and categorize content based on your preferences.
2nd gen
Developer Connect
Cloud Build lets you create triggers to build from
repositories hosted on GitLab Enterprise Edition .
You can execute builds in response to events such as commit pushes or
merge requests associated with your GitLab Enterprise Edition repository.
This page explains how you can enable build triggers for a
GitLab Enterprise Edition instance. For more information, see
Cloud Build triggers and
Cloud Build repositories .
Before you begin
Follow the instructions to connect to a GitLab Enterprise Edition host .
Enable the Cloud Build and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To create a trigger for a GitLab Enterprise Edition repository, you must have a connection
between Google Cloud and your repository. To create a connection through the
GitLab Enterprise Edition app in Google Cloud, see
Connect to a GitLab Enterprise Edition repository .
Create a GitLab Enterprise Edition trigger
This section explains how you can create a trigger and link it to your
GitLab Enterprise installation.
Google Cloud console
To create GitLab Enterprise Edition triggers using the Google Cloud console, do the following:
Open the Triggers page:
Open the Triggers page
Select your Google Cloud project from the top of the page and click Open .
Click Create trigger .
Enter the following trigger settings:
Name : A name for your trigger.
Region : Select the region for your trigger.
If the build config file associated with the trigger specifies a
private pool , then
Cloud Build uses the private pool to run your build. In this
case, the region you specify in your trigger must match the region
where you created your private pool.
If the build config file associated with the trigger doesn't
specify a private pool, then Cloud Build uses the default
pool to run your build in the same region as your trigger.
Description (Optional): A description for your trigger.
Event : Select the repository event to invoke your trigger.
Push to a branch : Set your trigger to start a build on commits to
a particular branch.
Push new tag : Set your trigger to start a build on commits that
contain a particular tag.
Pull request : Set your trigger to start a build
on commits to a merge request.
Source : Configure information about your GitLab Enterprise Edition repository:
Repository service : Select Cloud Build.
Repository generation : Select Developer Connect as your source.
Note: The region of your repository must match
the region of your trigger.
Repository : From the list of available repositories, select the
repository.
Branch or Tag : Specify a regular expression with the branch or
tag value to match. For information on acceptable regular expression syntax,
see RE2 syntax .
Comment control : If you selected Pull request
as your Event , choose one of the following options to
control whether a build is automatically executed by the trigger:
Required except for owners and collaborators : When a pull
request is created or updated by a repository owner or collaborator,
builds are automatically executed by the trigger. If an external
contributor initiates the action, builds are executed only after
an owner or collaborator comments /gcbrun on the pull request.
Required : When a pull request is created or updated by any
contributor, builds are executed only after an owner or
collaborator comments /gcbrun on the pull request. Builds
are executed each time a change to a pull request is made.
Not required : When a pull request is created or updated by any
contributor, builds are automatically be executed by triggers.
Warning: Any user with read access to the repository can submit a
pull request, which may execute a build that includes changes to the
source code in the pull request. To disable this behavior, we
recommend using
manual approvals
to gate builds when making pull requests on public repositories.
You can also learn more about the build-time privileges of triggers .
Configuration : Select the build config file located in
your repository or configure your build inline on
the trigger.
Type : Select the type of configuration to use for your build.
Cloud Build configuration file (yaml or json) :
Use a build config file for your configuration.
Dockerfile : Use a Dockerfile for your configuration.
Location : Specify the location for your configuration.
Repository : If your config file is located in your
repository, provide the location of your
build config file or the Dockerfile
directory and a name for the resulting image. If your configuration
is a Dockerfile , you can optionally provide a timeout for your build.
When you've provided the Dockerfile and image name, you'll see a
preview of the docker build command that your build will execute.
Inline : If you selected
Cloud Build configuration file (yaml or json) as
your configuration option, you can specify your build config
inline. Click Open Editor to write your build config file in the
Google Cloud console using YAML or JSON syntax. Click Done to
save your build config.
Note: Inline build configuration support is not available
for Dockerfile .
Click Create to create your GitLab Enterprise Edition trigger.
gcloud CLI
To create GitLab Enterprise Edition triggers using gcloud commands, run the following
command:
gcloud alpha builds triggers create developer connect
-- name = TRIGGER_NAME \
-- git - repository - link = projects / PROJECT_ID / locations / REGION / connections / CONNECTION_NAME / gitRepositoryLinks / REPO_NAME \
-- branch - pattern = BRANCH_PATTERN # or -- tag - pattern = TAG_PATTERN \
-- build - config = BUILD_CONFIG_FILE \
-- region = REGION \
-- service - account = SERVICE - ACCOUNT
Where:
TRIGGER_NAME is the name of your trigger.
PROJECT_ID is your Google Cloud project ID.
REGION is the region of your trigger.
CONNECTION_NAME is the name of your GitLab Enterprise Edition connection.
GIT_REPOSITORY_LINK is the link to your Git repository.
BRANCH_PATTERN is the branch name in your
repository to invoke the build on.
TAG_PATTERN is the tag name in your
repository to invoke the build on.
BUILD_CONFIG_FILE is the path to your build
configuration file.
SERVICE-ACCOUNT is the service account to use
for trigger and build operations.
API
To create a GitLab Enterprise Edition trigger with the API, use the
following JSON template:
{
"filename" : "cloudbuild.yaml" ,
"name" : "curl-trigger" ,
"description" : "curl trigger" ,
"developer_connect_config" {
"git_repository_link" : " PROJECT_ID /locations/ REGION /connections/ CONNECTION_NAME /gitRepositoryLinks/ REPO_NAME " ,
"git_repository_link_type" : "GITLAB_ENTERPRISE" ,
// Field filter must be only one of the following:
"pullRequest" : " PULL_REQUEST_FILTER " ,
"push" : " PUSH_FILTER "
}
}
Where:
PROJECT_ID is your Google Cloud project ID.
REGION is the region of your trigger.
CONNECTION_NAME is the name of your GitLab Enterprise Edition connection.
GIT_REPOSITORY_LINK is the link to your Git repository.
" REPO_NAME " is the name of your repository.
" PULL_REQUEST_FILTER " is an instance of
PullRequestFilter , which defines the filter
that allows Cloud Build to trigger a build when a matching
pull request is made in GitLab Enterprise Edition.
" PUSH_FILTER " is an instance of
PushFilter , which defines the filter
that allows Cloud Build to trigger a build when a matching
push is made in GitLab Enterprise Edition.
Enter the following curl command in your terminal:
curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT_NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / triggers - d @trigger . json
Where:
PROJECT_NUMBER is your Google Cloud project number.
PROJECT_ID is your Google Cloud project ID.
Terraform
For sample Terraform code about creating a build trigger and connecting it to
your GitLab Enterprise Edition installation using Developer Connect, see the
following topics in the Terraform documentation:
Create a Developer Connect push trigger
Create a Developer Connect pull trigger
Data sharing
The data sent to GitLab Enterprise Edition from Cloud Build helps you identify triggers by name and see build results on your GitLab Enterprise Edition repositories.
The following data is shared between Cloud Build and your GitLab Enterprise Edition host:
Google Cloud project ID
Trigger name
What's next
Learn how to manage build triggers .
Learn how to build repositories from GitLab Enterprise Edition in a private network .
Learn how to perform blue-green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
