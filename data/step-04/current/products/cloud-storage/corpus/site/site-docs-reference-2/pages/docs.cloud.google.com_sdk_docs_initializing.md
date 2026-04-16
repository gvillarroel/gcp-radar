---
title: "Initializing the gcloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/initializing
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/initializing
  title: "Initializing the gcloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Initializing the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to initialize the gcloud CLI.
After you install the gcloud CLI, perform initial setup tasks by running
gcloud init . You can also run gcloud init
to change your settings or create a new configuration.
gcloud init performs the following setup steps:
Authorizes the gcloud CLI to use your
user account credentials to access Google Cloud, or lets you select an
account if you have previously authorized access
Sets up a gcloud CLI configuration
and sets a base set of properties , including
the active account from the step above, the current project, and if
applicable, the default Compute Engine region and zone
You can run the following as alternatives to gcloud init :
Command
Description
gcloud auth login
Authorize with a user account without setting up a configuration.
gcloud auth activate-service-account
Authorize with a service account instead of a user account.
Useful for authorizing non-interactively and without a web browser.
gcloud config [COMMAND]
gcloud config configurations [COMMAND]
Create and manage gcloud CLI configurations and properties.
Initialize the gcloud CLI
To initialize the gcloud CLI:
Run gcloud init :
gcloud init
If you are in a remote terminal session, you can use the --no-launch-browser
flag to prevent the command from launching a browser-based authorization
flow, if required:
gcloud init --no-launch-browser
Create or select a configuration if prompted.
If you are initializing a new gcloud CLI installation,
gcloud init creates a configuration named default for you and sets
it as the active configuration. If you have existing configurations,
gcloud init prompts you to choose between three options —
re-initialize the active one, switch to another one and re-initialize it, or
create a new one.
Complete the authorization step when prompted.
Depending on whether you have previously authorized access to
Google Cloud, you might be prompted to log in and grant access in a
web browser or to select an existing account.
If you used the --no-launch-browser flag and login is required,
you must then copy and paste the provided authorization URL into another
browser window and follow the prompts provided.
When this step is completed, gcloud init sets the account property in
the configuration to the specified account.
Choose a current Google Cloud project if prompted.
If you only have access to one project, including the default project for
your user account, gcloud init selects it for you.
Otherwise, you can
select a project from a list of projects for which you have Owner ,
Editor or Viewer permissions. gcloud init sets the project
property in the configuration to the property you choose. If you have
access to more than 200 projects, you will be prompted to enter
a project id, create a new project, or list projects.
This account has a lot of projects! Listing them all can take a while.
[1] Enter a project ID
[2] Create a new project
[3] List projects
Please enter your numeric choice:
Note: If you choose to create a project, you'll also need to
enable billing on your project
to use Google Cloud services.
Choose a default Compute Engine zone if prompted.
If you don't have the Compute Engine API enabled or you already
have a default zone in your
project-level metadata , you will not see this
step. gcloud init sets the region and zone properties in the
configuration using the zone you choose.
To view the properties set through the gcloud init command, use the
gcloud config list command.
[compute]
region = us-east1
zone = us-east1-b
[core]
account = dana@example.com
disable_usage_reporting = False
project = example-project
What's next
To learn more about tool authorization,
see Authorizing the gcloud CLI .
To learn more about authorizing Application Default Credentials (ADC) for
Cloud Client Libraries (and Google API Client Libraries),
see Set up Application Default Credentials .
To learn more about managing configurations,
see gcloud CLI configurations .
To learn more about managing properties,
see gcloud CLI properties .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
