---
title: "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build
  title: "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Continuously deploy from a repository
Stay organized with collections
Save and categorize content based on your preferences.
If you have source code or functions in a Git repository and want to automate
builds and set up continuous deployments from a repository, you can use either
Cloud Build or
Developer Connect in the
Cloud Run console.
When you set this up, Cloud Run uses a
Cloud Build trigger , to
automatically build and deploy your code whenever new commits are pushed to a
given branch of a Git repository. The
source repository information is displayed
in the Google Cloud console for your service after you deploy to
Cloud Run.
In the Cloud Run console:
If you select Cloud Build, you can set up continuous deployments from
GitHub. For an example, see the quickstart for
creating a template repository and deploying continuously from git .
If you select Developer Connect, you can set up continuous
deployments from GitHub, GitLab, and Bitbucket repositories.
Alternatively, you can use Cloud Deploy to
set up a continuous-delivery pipeline to deploy Cloud Run services to
multiple environments.
Before you begin
You either have a git repository with a Dockerfile or your codebase is
written in one of the languages supported by
Google Cloud's buildpacks .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If you select the Developer Connect option, enable
the Developer Connect API:
Enable the API
Required roles
To get the permissions that
you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect,
ask your administrator to grant you the
following IAM roles on your project:
Artifact Registry Administrator ( roles/artifactregistry.admin )
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Developer ( roles/run.developer )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
The service account running the build must have the following roles:
Cloud Build Service Account ( roles/cloudbuild.builds.builder )
Cloud Run Admin ( roles/run.admin )
Service Account User ( roles/iam.serviceAccountUser )
If you select the Developer Connect option:
Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor )
If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor )
For a list of IAM roles and permissions that are associated with
Cloud Run, see
Cloud Run IAM roles
and Cloud Run IAM permissions .
If your Cloud Run service interfaces with
Google Cloud APIs, such as Cloud Client Libraries, see the
service identity configuration guide .
For more information about granting roles, see
deployment permissions
and manage access .
Set up continuous deployment from the Cloud Run console
The setup procedure varies slightly depending on whether you are setting up
continuous deployment on a new service or on an existing service. Click the
appropriate tab to learn more.
New service
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
If you are creating a new service, click Connect repository to
display the Create service form.
If you are modifying an existing service, locate the service in the
services list, and click it. Click Connect to repo .
Select Cloud Build or Developer Connect .
If you selected Cloud Build , see
Set up with Cloud Build .
If you selected Developer Connect , see
Set up with Developer Connect .
Existing service
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Locate the service in the services list, and click it.
Click Connect to repo and follow the instructions in
Set up with Cloud Build .
Set up with Cloud Build
In the Set up with Cloud Build pane:
Select a repository from the list. Note that it takes a few moments to load
the list of repositories. Follow the prompt and click Next .
GitHub is the default repository provider. If you are not yet authenticated,
click Authenticate and follow the instructions. Connecting a repository
is done using the Cloud Build GitHub app.
If you can't find your repository, click the
Manage connected repositories link. Follow the instructions to grant your
repository access to Cloud Build.
In the Build Configuration step, fill in the options:
Branch
Indicates what source should be used when running the
trigger. You can put the regex
here. Matched branches are automatically verified: you can
see them below the input. Note that if exactly one branch is
matched, the trigger will be automatically executed after the creation.
Build Type
Dockerfile : If your repository should be built using Docker and it
contains a Dockerfile, select this option.
In Source location , specify the location and name of the
Dockerfile. This directory will be used as the Docker build context.
All paths should be relative to the current directory.
Go, Node.js, Python, Java, .NET Core, Ruby or PHP via Google Cloud's buildpacks :
If your repository should be built using buildpacks, select
this option.
In the Build context directory , specify the directory.
In Entrypoint (optional), provide the command to start the
server. For example, gunicorn -p :8080 main:app for Python, and
java -jar target/myjar.jar for Java. Leave this field blank to use
default behavior .
In Function target (for function deployments only), enter the
function to be invoked. Otherwise, leave this field blank.
Click Save .
The page reloads and brings you back to the Create service form.
Verify the selected settings in the Source repository section.
Fill out the rest of form under Configure .
Click Create .
You are redirected to the Service Details page, where you can track the
progress of your Building and deploying from repository setup.
After all steps are completed, you can:
Click Edit repo settings in the Cloud Run console to edit the
Cloud Build trigger in the Cloud Build console.
View the Build History by clicking the logs link in the
Building and deploying from repository step.
View Source details in the
Revision Details section .
Set up continuous deployment manually
Refer to Setting up continuous deployment manually
if you need to use a manual procedure and not the UI.
Attach existing Cloud Build trigger to Cloud Run service
If you already have an existing Cloud Build trigger, you can attach it to
the service by adding a label to your Cloud Run service.
To add a label in the Cloud Run console:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Select your service.
For the service selected, click Labels at the top of the page to open the
Labels pane.
Add a label with gcb-trigger-id as the key and the
the unique identifier of the Cloud Build trigger as the value (not the
trigger name). If the gcb-trigger-id key already exists, modify
the value. See Set or modify labels
for setting up the label.
Set up with Developer Connect
In the Set up with Developer Connect pane:
Select a repository and click Next .
If you don't see the repository you want to select, click
Link new repository to open the
Link new repositories via Developer Connect pane. Click the
appropriate tab to learn more about connecting to one of the source code
management providers.
GitHub
For the GitHub , GitHub Enterprise Cloud , and GitHub Enterprise
options, click Connect .
If you don't see a dialog, turn off any pop-up blocking browser plug-ins
and makes sure that your browser settings allow pop-ups. For example, in
Chrome, follow the instructions to
allow pop-ups .
Grant permissions on your GitHub account and link to repositories using
the following instructions. The prompts you see in your web browser
depend on whether the GitHub account already has the
Cloud Run GitHub app installed.
In the Cloud Run dialog, complete the following steps:
If you see a list of GitHub accounts, install the app and link
repositories by completing these steps:
Choose the GitHub account you want to use.
Select one or more repositories you want to grant access to.
If you see a prompt to re-use an existing app installation, choose where
to configure the app by completing these steps:
Click GitHub Account to see accounts that have the Google
Cloud Run app installed. If you see the account you want
to use, choose it by clicking Confirm .
If you don't see the account that you want to use, do the following:
Choose Install the GitHub App on another GitHub account and
click Confirm .
Follow the GitHub steps to permit app installation.
Select one or more repositories you want to grant access to.
When the dialog closes, the app installation is complete.
GitLab
For the GitLab option:
In the Personal Access Tokens section, enter the
tokens for your
account:
API access token : Enter the personal access token with
api scope.
Read API access token : Enter the personal access token with
read_api scope.
You are responsible for ensuring your GitLab tokens remain valid. GitLab
tokens have a maximum lifetime of 365 days, unless otherwise specified by the
token creator or an administrator. To learn how to manage token expiration
settings and notifications, see the GitLab documentation on
personal access tokens .
For more information, see GitLab's documentation on
personal access token expiration .
Click Show more to see optional configuration settings.
Optional: In the Encryption section, select a
CMEK key to encrypt Secret Manager secrets that Cloud Run creates.
GitLab Enterprise Edition
For the GitLab Enterprise Edition option:
For Host URL , enter the URL of the host you want to connect to.
In the Personal Access Tokens section, enter the
tokens for your
account:
API access token : Enter the personal access token with
api scope.
Read API access token : Enter the personal access token with
read_api scope.
You are responsible for ensuring your GitLab tokens remain valid. GitLab
tokens have a maximum lifetime of 365 days, unless otherwise specified by the
token creator or an administrator. To learn how to manage token expiration
settings and notifications, see the GitLab documentation on
personal access tokens .
For more information, see GitLab's documentation on
personal access token expiration .
Click Show more to see optional configuration settings.
Optional: In the Encryption section, select a
CMEK key to encrypt Secret Manager secrets that Cloud Run creates.
Bitbucket
For the Bitbucket Cloud option:
For Workspace , enter your
Bitbucket Cloud workspace ID .
In the Access Tokens section, enter your Bitbucket access
tokens:
Authorizer access token : Enter your
authorizer access token .
Read access token : Enter your
read access token .
Click Show more to see optional configuration settings.
Optional: In the Encryption section, select a
CMEK key to encrypt Secret Manager secrets that Cloud Run creates.
Bitbucket Data Center
For the Bitbucket Data Center option:
For Host URL , enter the URL for the Bitbucket Data Center host you
want to connect to.
In the Access Tokens section, enter your Bitbucket Cloud access
tokens:
Admin access token : Enter the token with the repository admin
scope access.
Read access token : Enter the token with the repository read
scope access.
Click Show more to see optional configuration settings.
Optional: In the Encryption section, select a
CMEK key to encrypt Secret Manager secrets that Cloud Run creates.
Click Connect . This process can take a few seconds.
In the Build Configuration step, fill in the options:
Branch
Indicates what source should be used when running the
trigger. You can put the regex
here. Matched branches are automatically verified: you can
see them below the input. Note that if exactly one branch is
matched, the trigger will be automatically executed after the creation.
Build Type
Dockerfile : If your repository should be built using Docker and it
contains a Dockerfile, select this option.
In Source location , specify the location and name of the
Dockerfile. This directory will be used as the Docker build context.
All paths should be relative to the current directory.
Go, Node.js, Python, Java, .NET Core, Ruby or PHP via Google Cloud's buildpacks :
If your repository should be built using buildpacks, select
this option.
In the Build context directory , specify the directory.
In Entrypoint (optional), provide the command to start the
server. For example, gunicorn -p :8080 main:app for Python, and
java -jar target/myjar.jar for Java. Leave this field blank to use
default behavior .
In Function target (for function deployments only), enter the
function to be invoked. Otherwise, leave this field blank.
Click Save .
Fill out the rest of form under Configure .
When you are finished configuring your service, click Create to deploy
the image to Cloud Run and wait for the deployment to finish.
Click the displayed URL link to open the unique and stable endpoint of your
deployed service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
