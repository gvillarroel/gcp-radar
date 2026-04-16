---
title: "Scripting gcloud CLI commands \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/scripting-gcloud
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/scripting-gcloud
  title: "Scripting gcloud CLI commands \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
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
Scripting gcloud CLI commands
Stay organized with collections
Save and categorize content based on your preferences.
In addition to running Google Cloud CLI commands from the command line, you can
run them from scripts or other automations — for example, when using
Jenkins to drive automation of Google Cloud tasks.
Google Cloud SDK comes with a variety of tools like filtering,
formatting, and the --quiet flag, enabling you to effectively handle output
and automate tasks.
Note: Parallel execution of multiple gcloud CLI commands is not
supported.
Basics of scripting with Google Cloud SDK
For a step-by-step guide to building basic scripts with the
gcloud CLI, see this blog post:
Scripting with gcloud: a beginner’s guide to automating Google Cloud tasks .
Authorization
When scripting with Google Cloud SDK, you'll need to consider
authorization methods.
Google Cloud SDK provides two options:
User account authorization
Service account authorization
User account authorization is recommended if you are running a script or
other automation on a single machine.
To authorize access and perform other common Google Cloud SDK setup
steps:
gcloud init
Service account authorization is recommended if you are deploying a script
or other automation across machines in a production environment. It is also the
recommended authorization method if you are running gcloud CLI commands on a
Compute Engine virtual machine instance where all users have access to
root .
To use service account authorization, use an existing service account or create
a new one on the Service Accounts page:
Go to the Service Accounts page
To create and download the associated private key as a JSON-formatted key file,
choose Manage Keys from the action menu for the service account.
To run the authorization, run
gcloud auth activate-service-account :
gcloud auth activate - service - account --key-file [KEY_FILE]
You can SSH into your VM instance by using
gcloud compute ssh ,
which takes care of authentication. SSH configuration files can be configured
using gcloud compute config-ssh .
For detailed instructions regarding authorizing Google Cloud SDK tools,
see Authorizing the gcloud CLI .
Disabling prompts
Some gcloud CLI commands are interactive, prompting users for confirmation of an
operation or requesting additional input for an entered command.
In most cases, this is not desirable when running commands in a script or other
automation. You can disable prompts from gcloud CLI commands by
setting the disable_prompts property in your
configuration to True or
by using the global --quiet or -q flag. Most
interactive commands have default values when additional confirmation or input
is required. If prompts are disabled, these default values are used.
For example:
gcloud debug targets list --quiet
Filtering and formatting output
In order to script with the gcloud CLI, it's important to have
predictable output; this is where
--filter and
--format flags help. They
ensure that when you run a command using the gcloud CLI, it
produces output that adheres to your format (like json, yaml, csv, and text) and
filter (VM names prefixed with 'test', creation year after 2015, etc.)
specifications.
If you'd like to work through an interactive tutorial about using the filter
and format flags instead, launch the tutorial using the following button:
The following examples showcase common uses of formatting and filtering with
gcloud CLI commands:
List instances created in zone us-central1-a :
gcloud compute instances list --filter="zone:us-central1-a"
List in JSON format those projects where the labels match specific values
(e.g. label.env is 'test' and label.version is alpha):
gcloud projects list --format="json" \
--filter="labels.env=test AND labels.version=alpha"
List projects with their creation date and time specified in the local timezone:
gcloud projects list \
--format="table(name, project_id, createTime.date(tz=LOCAL))"
List projects that were created after a specific date in table format:
gcloud projects list \
--format="table(projectNumber,projectId,createTime)" \
--filter="createTime.date('%Y-%m-%d', Z)='2016-05-11'"
Note that in the last example, a projection on the key was used. The filter is
applied on the createTime key after the date formatting is set.
List a nested table of the quotas of a region:
gcloud compute regions describe us - central1 \
-- format = "table(quotas:format='table(metric,limit,usage)')"
Print a flattened list of global quotas in CSV format:
gcloud compute project-info describe --flatten='quotas[]' \
--format='csv(quotas.metric,quotas.limit,quotas.usage)'
List compute instance resources with box decorations and titles, sorted by name,
in table format:
gcloud compute instances list \
--format='table[box,title=Instances](name:sort=1,zone:label=zone,status)'
List the project authenticated user email address:
gcloud info --format='value(config.account)'
For more involved examples of the output configuring capabilities built
into gcloud CLI's filters ,
formats , and
projections flags, see this
blog post about
filtering and formatting .
Best practices
If you want a script or other automation to perform actions conditionally based
on the output of a gcloud CLI command, observe the following:
Do depend on command exit status.
If the exit status is not zero, an error occurred and the output may be
incomplete unless the command documentation notes otherwise.
For example, a command that creates multiple resources may only create a
few, list them on the standard output, and then exit with a non-zero status.
Alternatively, you can use the show_structured_logs property to parse
error logs. Run gcloud config for more details.
Don't depend on messages printed to standard error.
The wording of these messages may change in future versions of the
gcloud CLI and break your automation.
Don't depend on the raw output of messages printed to standard output.
The default output for any command may change in a future release. You can
minimize the impact of those changes by using the
--format flag to format the
output with one of the
following: --format=json|yaml|csv|text|list to specify values to be
returned.
Run gcloud topic formats for more options.
You can modify the default output from
--format by using
projections . For increased
granularity, use the --filter flag
to return a subset of the values based on an expression. You can then script
against those returned values.
Examples of formatting and filtering output can be found in the section
below.
Example scripts
Using the functionality of format and filter, you can combine
gcloud CLI commands into a script to easily extract embedded
information.
List keys for all your projects' service accounts
The following sample scripts list the keys associated with all your projects'
service accounts by:
Iterating over your projects
For each project, getting the associated service accounts
For each service account, getting the associated keys
Bash
#!/bin/bash
for project in $( gcloud projects list --format = "value(projectId)" )
do
echo "ProjectId: $project "
for robot in $( gcloud iam service-accounts list --project $project --format = "value(email)" )
do
echo " -> Robot $robot "
for key in $( gcloud iam service-accounts keys list --iam-account $robot --project $project --format = "value(name.basename())" )
do
echo " $key "
done
done
done
Windows PowerShell
Or as Windows PowerShell:
foreach ($project in gcloud projects list --format="value(projectId)")
{
Write-Host "ProjectId: $project"
foreach ($robot in gcloud iam service-accounts list --project $project --format="value(email)")
{
Write-Host " -> Robot $robot"
foreach ($key in gcloud iam service-accounts keys list --iam-account $robot --project $project --format="value(name.basename())")
{
Write-Host " $key"
}
}
}
Parse output for processing
The following sample demonstrates parsing output for processing. In particular,
the sample script writes the service account information into an array and
segregates values in the multi-valued CSV-formatted serviceAccounts.scope()
field:
#!/bin/bash
for scopesInfo in $(
gcloud compute instances list --filter = name:instance-1 \
--format = "csv[no-heading](name,id,serviceAccounts[].email.list(),
serviceAccounts[].scopes[].map().list(separator=;))" )
do
IFS = ',' read -r -a scopesInfoArray<<< " $scopesInfo "
NAME = " ${ scopesInfoArray [0] } "
ID = " ${ scopesInfoArray [1] } "
EMAIL = " ${ scopesInfoArray [2] } "
SCOPES_LIST = " ${ scopesInfoArray [3] } "
echo "NAME: $NAME , ID: $ID , EMAIL: $EMAIL "
echo ""
IFS = ';' read -r -a scopeListArray<<< " $SCOPES_LIST "
for SCOPE in " ${ scopeListArray [@] } "
do
echo " SCOPE: $SCOPE "
done
done
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
