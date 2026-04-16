---
title: "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/access-airflow-cli
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/access-airflow-cli
  title: "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
Access Airflow command-line interface
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
Apache Airflow has a command-line interface (CLI) that you can use to perform
tasks such as triggering and managing DAGs, getting information about DAG runs
and tasks, adding and deleting connections and users.
Supported Airflow CLI commands
Airflow uses Airflow CLI syntax , which is described in the
Airflow documentation.
Cloud Composer 3 supports the following Airflow CLI commands:
(Airflow 2 and 3)
The gcloud composer environments run command
runs Airflow CLI commands for your environment. Some commands are blocked
and it's not possible to run them. See the
command's reference for the list
of supported Airflow CLI commands.
(Airflow 3) The airflowctl command-line tool supports a
subset of Airflow CLI commands and runs them using Airflow REST API.
All commands available in airflowctl are supported in
Cloud Composer. Make sure that the user's Airflow account has
an Airflow role that can run a specific
command.
Before you begin
For executing Airflow CLI commands through Google Cloud CLI:
Your Google Account must have permissions to use
Google Cloud CLI with Cloud Composer and run Airflow CLI
commands.
Caution: Users with the composer.environments.executeairflowcommand
permission can execute Python code available to Airflow components on
behalf of the environment's service account. For more
information, see Access control .
Airflow CLI commands executed through Google Cloud CLI consume the
environments.executeAirflowCommand quota .
Important: If you want to trigger a large number
of DAGs, we recommend to do it
with Airflow REST API or with the
airflowctl command-line tool in Airflow 3.
Triggering DAGs through Google Cloud CLI might cause your environment to
reach the quota limit, and as a result, Airflow CLI commands will no longer
be executed.
For executing Airflow CLI commands through the
airflowctl command-line tool (in Airflow 3):
Your Google Account must have the composer.environments.get permission. It
is provided by the role that can
view Cloud Composer environments .
The airflowctl command-line tool doesn't require
permissions for running Airflow CLI commands .
Airflow CLI commands executed through airflowctl don't consume the
environments.executeAirflowCommand quota .
Note: It is not possible to run Airflow CLI commands through kubectl in
Cloud Composer 3. This approach was deprecated and is required only for
Cloud Composer versions earlier than 2.4.0.
Run Airflow CLI commands with gcloud CLI
To run Airflow CLI commands in your environments, use gcloud CLI:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
SUBCOMMAND \
-- SUBCOMMAND_ARGUMENTS
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
SUBCOMMAND : one of the
supported Airflow CLI commands .
SUBCOMMAND_ARGUMENTS with arguments for the Airflow CLI command.
Sub-command arguments separator
Separate the arguments for the specified Airflow CLI command with -- :
Specify compound CLI commands as a sub-command.
Specify any arguments for compound commands as sub-command arguments,
after a -- separator.
Example:
gcloud composer environments run example-environment \
dags list -- --output = json
Default location
Most gcloud composer commands require a location. You can specify the
location with the --location flag, or by
setting the default location .
For example, to trigger a DAG named sample_quickstart with the ID 5077 in
your Cloud Composer environment:
gcloud composer environments run example-environment \
--location us-central1 dags trigger -- sample_quickstart \
--run-id = 5077
Run Airflow CLI commands with airflowctl
The airflowctl command-line tool is a command-line
utility provided by Airflow for running Airflow CLI commands. It supports a
subset of Airflow CLI commands and runs them using Airflow
REST API. All commands available in airflowctl are supported in
Cloud Composer.
Authorization and authentication with airflowctl in Cloud Composer
works in the following way:
Because airflowctl uses the Airflow REST API, make sure that the Airflow
user account associated with your Google Account or service account
has an Airflow role with enough permissions
to run a command. For example, some commands can be executed only by Airflow
users that have the Admin role.
The API token used by airflowctl is provided with the
gcloud auth command. By default, the token has an
expiration period of 1 hour. You can change it with the --lifetime
argument provided to this command.
To authenticate with airflowctl , run the following command:
airflowctl auth login \
--api-url WEB_SERVER_URL \
--api-token $( gcloud auth print-access-token )
Replace the following:
WEB_SERVER_URL : the
URL of the Airflow web server . Make
sure that this URL doesn't have a trailing slash ("/").
Example:
airflowctl auth login \
--api-url https://example-dot-us-central1.composer.googleusercontent.com \
--api-token $( gcloud auth print-access-token )
After you authenticate with airflowctl , you can run Airflow CLI commands:
airflowctl dags list
Run Airflow CLI commands through Cloud Composer API
In Cloud Composer 3, you can run Airflow CLI commands through
Cloud Composer API.
Execute a command
Construct an environments.executeAirflowCommand API request:
{
"environment" : "projects/ PROJECT_ID /locations/ LOCATION /environments/ ENVIRONMENT_NAME " ,
"command" : " AIRFLOW_COMMAND " ,
"subcommand" : " AIRFLOW_SUBCOMMAND " ,
"parameters" : [
" SUBCOMMAND_PARAMETER "
]
}
Replace the following:
PROJECT_ID : the Project ID .
LOCATION : the region where the environment is located.
ENVIRONMENT_NAME : the name of your environment.
AIRFLOW_COMMAND : Airflow CLI command that you want to execute, such as
dags .
AIRFLOW_SUBCOMMAND : Sub-command for the Airflow CLI command that
you want to execute, such as list .
(optional) SUBCOMMAND_PARAMETER : Parameters for the sub-command. If you
want to use more than one parameter, add more items to the list.
Example:
// POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:executeAirflowCommand
{
"environment" : "projects/example-project/locations/us-central1/environments/example-environment" ,
"command" : "dags" ,
"subcommand" : "list" ,
"parameters" : [
"-o json" ,
"--verbose"
]
}
Poll command status
After you execute an Airflow CLI command through Cloud Composer API, check if
the command was successfully completed by making a
PollAirflowCommand request and inspecting the
fields in exitInfo for errors and status codes. The output field contains
log lines.
Note: You can also stop executing a command with
StopAirflowCommand .
To get the command execution status and fetch logs, provide executionId ,
pod , and podNamespace values returned by ExecuteAirflowCommandRequest :
Example:
// POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:pollAirflowCommand
{
"executionId" : "a117da94-355d-4ad4-839e-ac39ccb0bf48" ,
"pod" : "airflow-webserver-66d96b858f-tn96b" ,
"podNamespace" : "airflow-2-10-2-build-13-226523e4" ,
"nextLineNumber" : 1
}
What's next
Access Airflow UI
Access control (Airflow CLI)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
