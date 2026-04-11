---
title: "Building repositories from GitHub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github
  title: "Building repositories from GitHub \_|\_ Google Cloud Documentation"
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
Building repositories from GitHub
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
Developer Connect
Cloud Build lets you create triggers to build from
repositories hosted on GitHub .
You can execute builds in response to events such as commit pushes or
merge requests associated with your GitHub repository.
This page explains how you can enable build triggers for a
GitHub instance. For more information, see
Cloud Build triggers and
Cloud Build repositories .
Before you begin
Follow the instructions to connect to a GitHub host .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
To create a trigger for a GitHub repository, you must have a connection
between Google Cloud and your repository. To create a connection through the
GitHub app in Google Cloud, see
Connect to a GitHub repository .
Create a GitHub trigger
This section explains how you can create a trigger and link it to your
GitHub installation.
Google Cloud console
To create GitHub triggers using the Google Cloud console, do the following:
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
Note: Running builds initiated by a GitHub App pull request trigger
are canceled when you close the pull request associated with
your build. Running builds and builds that have not been started
yet won't be canceled when merging a pull request.
Source : Configure information about your GitHub repository:
Repository service : Select Cloud Build.
Repository generation : Select 1st generation as your source.
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
your remote repository or create an inline build config file to
use for your build.
Type : Select the type of configuration to use for your build.
Autodetected : Cloud Build autodetects your configuration type if you have a cloudbuild.yaml or Dockerfile in your repository.
Cloud Build configuration file (yaml or json) :
Use a build config file for your configuration.
Dockerfile : Use a Dockerfile for your configuration.
Buildpacks : Use buildpacks for your configuration.
Location : Specify the location for your configuration.
Repository : If your config file is located in your
remote repository, provide the location of your
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
Substitution variables (optional): If you selected the Cloud Build
config file as your build config option, you can choose to define trigger-specific
substitution variables using this field. For example, say you're creating
multiple triggers where each trigger deploys your app to a specific environment.
You can specify that your app is deployed to an environment in your build config
file and then use this field to define substitution variables specifying which
environment this trigger should deploy to. For information on specifying
substitution values in build config files, see
Substituting variable values .
Build logs (optional): Check the box to send build logs to GitHub. To learn how to view build logs, see Viewing build logs .
Service account : Select the service account to use when invoking
your trigger. If your organization policy allows using the legacy
Cloud Build service account, you can leave this blank to use
the legacy service account. Otherwise, you must select the specific
service account to use, even if it's the Compute Engine default
service account.
Note: Only the service account specified on your trigger is used for
builds executed by triggers. If you specified a service account in your
build config, it's ignored during build execution when using triggers.
Click Create to save your build trigger.
To create GitHub triggers using gcloud commands, see the gcloud
commands for Creating a build trigger .
gcloud CLI
To create GitHub triggers using gcloud commands, run the following
command:
gcloud alpha builds triggers create developer - connect
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
CONNECTION_NAME is the name of your GitHub connection.
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
To create a GitHub trigger with the API, use the
following JSON template:
{
"filename" : "cloudbuild.yaml" ,
"name" : " TRIGGER_NAME " ,
"description" : " TRIGGER_DESCRIPTION " ,
"serviceAccount" : " SERVICE_ACCOUNT " ,
"github" : {
"owner" : " OWNER " ,
"name" : " REPO_NAME " ,
"push" : {
"branch" : ".*"
},
},
"include_build_logs" : i n clude - build - logs - value
}
Where:
TRIGGER_NAME is a name for the trigger.
TRIGGER_DESCRIPTION is a description for the trigger.
SERVICE_ACCOUNT is the service account to use
for trigger and build operations.
OWNER is the owner of the GitHub repository.
REPO_NAME is the name of the GitHub repository.
include-build-logs-value is the value of the
optional include_build_logs field. If this field has a value of
INCLUDE_BUILD_LOGS_SPECIFIED , then build logs are shown on
your repository.
Enter the following curl command in your terminal:
curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT_NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / triggers - d @trigger . json
Where:
PROJECT_NUMBER is your Google Cloud project number.
PROJECT_ID is your Google Cloud project ID.
Build and view your changes
To build using GitHub triggers , you'll
need to push and commit changes to your connected source repository
or configure your build on pull requests. Once you have checked
in your changes, Cloud Build will
build your code.
To view your build changes on GitHub , go to the Checks tab in your repository.
You'll see that Cloud Build has built your changes. You'll also see
other build details such as the time it took to build your code and the build ID.
To view your build changes in Cloud Build, click
View more details on Google Cloud Build . The Build details page in Google Cloud console opens where you can see build information such as
status, logs, and build steps.
Different types of GitHub-based triggers
If your source code is in GitHub, Cloud Build provides two ways by
which you can automatically execute builds. This section explains the two
GitHub-based triggers and compares their features.
GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build
mirrors your GitHub repository in Cloud Source Repositories and uses the
mirrored repository for all its operations. You can
create and manage GitHub triggers
using the Google Cloud console.
Note: If you are using GitHub legacy triggers, you will need to grant
access to individual organizations with GitHub
to use GitHub legacy triggers.
GitHub triggers : This type of trigger uses the Cloud Build
GitHub app to configure and authenticate to GitHub. GitHub triggers allow
you to automatically start builds on Git pushes and pull requests and view
build results on GitHub and the Google Cloud console. You can create and manage
GitHub triggers using Google Cloud console or the Cloud Build API,
as described on this page.
GitHub Enterprise triggers : This type of trigger lets you invoke
builds in response to commits or pull requests on a GitHub Enterprise
instance. You can build repositories from GitHub Enterprise using the Google Cloud console or the Cloud Build API.
The following table compares GitHub legacy triggers, GitHub triggers,
and GitHub Enterprise triggers:
Feature
GitHub legacy triggers
GitHub triggers
GitHub Enterprise triggers
Execute builds on pushes to the source code
Yes
Yes
Yes
Execute builds on pull requests
No
Yes
Yes
Create trigger using Google Cloud console
Yes
Yes
Yes
Create trigger using the Cloud Build API
No
Yes
Yes
Create trigger using the Cloud Build GitHub app
No
Yes
Yes
View build status on Google Cloud console
Yes
Yes
Yes
View build status on GitHub
No
Yes
Yes
Data sharing
The data sent to GitHub from Cloud Build helps you identify triggers
by name and see build results on GitHub.
The following data is currently shared between Cloud Build and GitHub:
Cloud project ID
Trigger name
Build logs
Note: Build logs are only shared if you configure your trigger to send build logs.
If you created triggers prior to August 2020, data sharing may not be enabled
for your project. You can enable data sharing for all GitHub triggers in
your project by clicking Enable on the Cloud Build Data sharing tab .
If you have required status checks
enabled for a GitHub repository, enabling data sharing may temporarily break
status checks. You can adjust status check configurations to look for
your trigger name by:
Disabling any Cloud Build-specific required checks on the GitHub repository
Ensuring that data sharing is enabled in Cloud Build
Executing a new build in Cloud Build that posts statuses to your repository
Re-enabling required status checks, selecting trigger name
Note: Enabling data sharing for a project is not reversible.
What's next
Learn how to create and manage build triggers .
Learn how to perform blue-green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
