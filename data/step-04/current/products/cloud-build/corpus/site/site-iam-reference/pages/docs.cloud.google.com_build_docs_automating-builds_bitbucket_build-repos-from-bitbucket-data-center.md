---
title: "Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center
  title: "Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation"
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
Build repositories from Bitbucket Data Center
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
Developer Connect
Cloud Build lets you create triggers to build from
repositories hosted on Bitbucket Data Center .
You can execute builds in response to events such as commit pushes or
merge requests associated with your Bitbucket Data Center repository.
This page explains how you can enable build triggers for a
Bitbucket Data Center instance. For more information, see
Cloud Build triggers and
Cloud Build repositories .
Before you begin
Enable the Cloud Build and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To create a trigger for a Bitbucket Data Center repository, you must have a connection
between Google Cloud and your repository. To create a connection through the
Bitbucket Data Center app in Google Cloud, see
Connect to a Bitbucket Data Center repository .
Create a Bitbucket Data Center trigger
This section explains how you can connect your Bitbucket Data Center repositories
to Cloud Build and create a trigger to automatically invoke
builds on your connected repositories. If you want to use Bitbucket Data Center triggers in a private network, see Building repositories from Bitbucket Data Center in a private network for further instructions.
Google Cloud console
To create Bitbucket Data Center triggers using the Google Cloud console, do the following:
Open the Triggers page in the Google Cloud console.
Open the Triggers page
Select your Google Cloud project and click Open .
Click Create trigger .
Enter the following trigger settings:
Name : Enter a name for your trigger.
Region : Select the region for your trigger.
If the build config file associated with the trigger specifies a
private pool , then
Cloud Build uses the private pool to run your build. In this
case, the region you specify in your trigger must match the region
where you created your private pool.
If the build config file associated with the trigger doesn't
specify a private pool, then Cloud Build uses the default
pool to run your build in the same region as your trigger.
Description (optional): Enter a description for your trigger.
Event : Select the repository event to invoke your trigger.
Push to a branch : Set your trigger to start a build on commits to
a particular branch.
Push new tag : Set your trigger to start a build on commits that
contain a particular tag.
Pull request : Set your trigger to start a build
on commits to a pull request.
Source : Configure information about your Bitbucket Data Center repository:
Repository service : Select Cloud Build repositories.
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
preview of the docker build command for your build.
Inline : If you selected
Cloud Build configuration file (yaml or json) as
your configuration option, you can specify your build config
inline. Click Open Editor to write your build config file in the
Google Cloud console using YAML or JSON syntax. Click Done to
save your build config.
Note: Inline build configuration support is not available
for Dockerfile .
Click Create to create your Bitbucket Cloud trigger.
gcloud CLI
To create Bitbucket Data Center triggers using gcloud commands, run the following
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
CONNECTION_NAME is the name of your Bitbucket Data Center connection.
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
To create a Bitbucket Data Center trigger with the API, use the
following JSON template:
{
"filename" : "cloudbuild.yaml" ,
"name" : "curl-trigger" ,
"description" : "curl trigger" ,
"bitbucket_server_trigger_config" : {
"repo_slug" : " REPO_SLUG " ,
"project_key" : " PROJECT_KEY " ,
"push" : {
"branch" : " BRANCH_NAME " # "tag" : " TAG_NAME "
},
"bitbucket_server_config_resource" : "projects/ PROJECT_NUMBER /locations/ REGION /bitbucketServerConfigs/ ID "
"comment_control" : " COMMENT_SETTING "
}
}
Where:
REPO_SLUG is the slug of your Bitbucket Server repository. For more information, see
Bitbucket's guide on repository slugs .
PROJECT_KEY is the key of your Bitbucket Server project. PROJECT_KEY is case sensitive.
BRANCH_NAME is the regular expression of your branch if you want
to set your trigger to build certain branches.
TAG_NAME is the regular expression of your tag if you want to set
your trigger to build certain tags.
PROJECT_NUMBER is the project number of your
Cloud project.
REGION is the region associated with your Bitbucket Server configuration.
ID is the ID of your BitbucketServerConfig.
COMMENT_SETTING is the setting to control whether build triggers require /gcbrun in a comment for the build to run. For more
information, see commentControl .
Note: The bitbucket_server_config_resource refers to the BitbucketServerConfig
that was previously created.
Enter the following curl command in your terminal:
curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT_NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / triggers - d @trigger . json
Where:
PROJECT_NUMBER is your Google Cloud project number.
PROJECT_ID is your Google Cloud project ID.
Terraform
For sample Terraform code about creating a build trigger and connecting it to
your Bitbucket Data Center installation using Developer Connect, see the
following topics in the Terraform documentation:
Create a Developer Connect push trigger
Create a Developer Connect pull trigger
Data sharing
The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers
by name and see build results on your Bitbucket Data Center repositories.
The following data is shared between Cloud Build and your Bitbucket Data Center
host:
Google Cloud project ID
Trigger name
Data sharing is automatically enabled for Bitbucket Data Center.
What's next
Learn how to create and manage build triggers .
Learn how to build repositories from Bitbucket Data Center in a private network .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
