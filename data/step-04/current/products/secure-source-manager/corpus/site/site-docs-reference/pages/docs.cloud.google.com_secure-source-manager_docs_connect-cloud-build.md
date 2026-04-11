---
title: "Connect to Cloud Build \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build
  title: "Connect to Cloud Build \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Connect to Cloud Build
Stay organized with collections
Save and categorize content based on your preferences.
This page details how to invoke builds automatically from
Secure Source Manager using Cloud Build configuration files and a
triggers YAML file in your Secure Source Manager repository.
Before you begin
Create a Secure Source Manager instance .
Create a Secure Source Manager repository .
Configure a Cloud Build user-specified service account .
Required roles
To get the permissions that
you need to connect a Secure Source Manager repository to Cloud Build,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Repository Writer ( roles/securesourcemanager.repoWriter )
on your repository
Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor )
on the Secure Source Manager instance
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For information on granting Secure Source Manager roles,
see Access control with IAM and
Grant users instance access .
Required service account roles
To create builds and get build status from Cloud Build, grant the
Secure Source Manager service agent ( service- PROJECT-NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com ) the following
Identity and Access Management (IAM) roles:
Cloud Build Editor role
( roles/cloudbuild.builds.editor ) on the project where you enabled
Cloud Build.
Service Account User role
( roles/iam.serviceAccountUser ) on the Cloud Build service account, or
the project that the Cloud Build service account was created with.
If the project where you enabled Cloud Build is different than the
project where Secure Source Manager is enabled, grant the
Service Usage Consumer role
( roles/serviceusage.serviceUsageConsumer ) on the Cloud Build project.
If the builds are running in worker pools, grant the
Secure Source Manager service account the
Cloud Build WorkerPool User role
( roles/cloudbuild.workerPoolUser ) on the Cloud Build project.
To let Cloud Build read from your Secure Source Manager repository, grant
the Cloud Build service account the following IAM
roles:
Secure Source Manager Instance Accessor role
( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager
instance.
Secure Source Manager Repository Reader role on the
Secure Source Manager repository you want to connect to Cloud Build.
Depending on your use case, the Cloud Build service account
might need additional IAM roles to execute builds, for example:
To store build logs in Cloud Logging, grant the
Logs Writer role to the Cloud Build service account.
To access the secrets in Secret Manager, grant the
Secret Manager Secret Accessor
( roles/secretmanager.secretAccessor ) role to the Cloud Build service
account.
For information about how to grant IAM roles to a service agent,
see Grant or revoke a single role .
For information about build logs, see Setting up build logs .
Create a build configuration file
A build configuration file defines the fields that are needed for
Cloud Build to perform your build tasks. You can write the build
configuration file using the YAML syntax.
You can create build configuration files in the branch or branches that you want
to build from.
To create a build configuration file, do the following:
In the Secure Source Manager web interface, select the repository you want
to connect to Cloud Build.
Select the branch you want to build from using Cloud Build.
Create a build configuration file. For information about how to
create build configuration files, follow the instructions in create a
build configuration file .
Commit your changes to the branch.
Create a triggers file
The triggers configuration file must be created in the default branch of
your repository.
To create a triggers configuration file:
In your local repository or the Secure Source Manager web interface, switch
to the default branch .
Create a file named .cloudbuild/triggers.yaml .
Configure your trigger in the .cloudbuild/triggers.yaml file:
triggers :
- name : TRIGGER_NAME
project : PROJECT_ID
configFilePath : CLOUD_BUILD_CONFIG_PATH
eventType : EVENT_TYPE
ignoredGitRefs : IGNORED_GIT_REFS
includedGitRefs : INCLUDED_GIT_REFS
serviceAccount : SERVICE_ACCOUNT
includedFiles : INCLUDED_FILES
ignoredFiles : IGNORED_FILES
disabled : DISABLED_BOOL
substitutions :
_ VARIABLE_NAME : VARIABLE_VALUE
OVERRIDE_VARIABLE_NAME : OVERRIDE_VARIABLE_VALUE
Replace the following:
TRIGGER_NAME with a name for your trigger. Trigger names
can only contain alphanumeric characters and dashes, and can't start or
end with a dash. Trigger names must be less than 64 characters long.
PROJECT_ID with the Google Cloud project ID where you
enabled Cloud Build. This field is optional. The default is the
Secure Source Manager project.
CLOUD_BUILD_CONFIG_PATH with the path to the
Cloud Build configuration file you want to use for this trigger.
This field is optional. The default value is
.cloudbuild/cloudbuild.yaml
EVENT_TYPE with the event type you want to trigger the
build. Options are as follows:
push to trigger on push to the specified branch(es)
pull_request to trigger on a pull request to the specified
branch(es)
This field is optional. The default value is push .
INCLUDED_GIT_REFS with an optional
RE2 regular expression format matching the
Git references that you want to trigger a
build. The default value is empty. An empty value indicates there
are no restrictions.
IGNORED_GIT_REFS with an optional regular expression using
the RE2 regular expression format matching
the Git references that you don't want to
trigger a build. The default value is empty. An empty value indicates
there are no restrictions. The ignoredGitRefs field is checked before
the includedGitRefs field. For more information on these fields, see
Triggers file schema .
SERVICE_ACCOUNT with the
Cloud Build service account to use for the build in the
format projects/ PROJECT_ID /serviceAccounts/ ACCOUNT .
Replace ACCOUNT with the email address or unique ID of the
service account. As a best practice,
configure a user-specified service account .
The legacy Cloud Build service account can't be used due to its
limitations .
INCLUDED_FILES with an optional RE2 format regular
expression matching files you want to trigger a build.
If any of the changed files don't match the ignoredFiles filter field,
and the changed files match the includedFiles filter field, a build is
triggered. The default value is empty. An empty value indicates there
are no restrictions.
IGNORED_FILES with an optional RE2 format regular
expression matching files you don't want to trigger a build.
If all changed files in a commit match this filter field, a build isn't
triggered. The default
value is empty. An empty value indicates there are no restrictions.
DISABLED_BOOL with true to disable the trigger, or
false to enable the trigger. This field is optional. The default value
is false .
VARIABLE_NAME with the name of a variable you want to
introduce in your triggers file.
VARIABLE_VALUE with the value of the variable.
OVERRIDE_VARIABLE_NAME with the Secure Source Manager
default substitution variable name. For information on the available
default substitution variables, see the substitutions section of
Triggers file schema .
OVERRIDE_VARIABLE_VALUE with the value you want to
override the default value for the default substitution variable with.
Commit the trigger configuration file to your default branch.
After the triggers file is committed, Secure Source Manager triggers builds
based on the configuration in your triggers file.
Secure Source Manager reads the configuration files and
associated commit SHA or Git ref of the following types of events:
For push events, Secure Source Manager will read the commit SHA or Git
ref when the push completes.
For pull_request events, Secure Source Manager will read the commit SHA
or Git ref when the pull request changes are pulled from.
View build status
When a build is triggered by a push or pull request event, the commit and build
status is displayed in the Secure Source Manager web interface.
The possible values for build status are as follows:
SUCCESS: the build was completed successfully.
WARNING: a problem occurred when trying to build.
FAILURE: the build failed during execution.
You can prevent commits with unsuccessful builds from merging into important
branches if you configure a branch protection rule to require a successful
status check from triggers configured in your triggers file. To learn more
about branch protection, read the
Branch protection overview .
To view the build status for a push event:
In the Secure Source Manager web interface, navigate to your repository.
If the most recent push event triggered a build, the status is displayed
next to the commit SHA. To view details on that status, click the status.
To view build status for previous commits, select Commits to view the
commit history, and then click the status you want to view details for.
To view the build status for a pull request event:
In the Secure Source Manager web interface, click Pull requests .
Click the pull request you want to view.
If builds were triggered by the pull request, you will see a section titled
either All checks were successful , or Some checks reported warnings .
Troubleshoot
To find methods for diagnosing and resolving Cloud Build errors when
connecting with Secure Source Manager, see
Triggers file doesn't trigger build .
What's next
Learn how to view build results in Cloud Build .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
