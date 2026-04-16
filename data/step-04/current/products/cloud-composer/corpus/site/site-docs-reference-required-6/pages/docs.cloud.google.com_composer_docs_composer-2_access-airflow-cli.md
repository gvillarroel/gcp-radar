---
title: "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/access-airflow-cli
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/access-airflow-cli
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
Composer 2 Guides
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
See the gcloud composer environments run command's
reference for the full list of supported Airflow CLI commands.
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
with Airflow REST API .
Triggering DAGs through Google Cloud CLI might cause your environment to
reach the quota limit, and as a result, Airflow CLI commands will no longer
be executed.
In Cloud Composer versions before 2.4.0, you need
access to the control plane of your environment's cluster
to run Airflow CLI commands.
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
Running commands on a private IP environment
Important: This section is relevant only for Cloud Composer versions
before 2.4.0. In later versions, you can run Airflow CLI commands on a private
IP environment without additional configuration. Your machine doesn't need
access to the environment's cluster control plane endpoint to run these
commands.
In Cloud Composer versions before 2.4.0:
To run Airflow CLI commands on a Private IP environment,
run them on a machine that can access the GKE cluster's
control plane endpoint. Your options may vary depending on your
private cluster configuration .
If public endpoint access is disabled in your environment's cluster,
then it's not possible to use gcloud composer commands to run Airflow CLI.
To be able to run Airflow CLI commands, perform the following steps:
Create a VM in your VPC network
Acquire cluster credentials. Run the following command:
gcloud container clusters get-credentials CLUSTER_NAME \
--region REGION \
--project PROJECT \
--internal-ip
Use kubectl to run your Airflow command. For example:
kubectl exec deployment/airflow-scheduler -n COMPOSER_NAMESPACE \
--container airflow-scheduler -- airflow dags list
Replace COMPOSER_NAMESPACE withe a namespace similar to:
composer-2-0-28-airflow-2-3-394zxc12411 . You can find your Cloud Composer
in the workloads list or by using the kubectl get namespaces command.
If public endpoint access is enabled in your environment's cluster, you can
also run Airflow CLI commands from a machine with an external IP address that is
added to authorized networks. To enable access from your machine, add the
external address of your machine to your environment's
list of authorized networks .
When running gcloud composer environments run or kubectl commands, you
might encounter the following error:
Get "https://<IP Address>/api?timeout=32s": dial tcp <IP Address>:443: i/o timeout"
Symptom : This error message indicates that there is no network
connectivity from a computer where you run these commands.
Solution : Follow the guidelines presented in the
Running commands on a private IP environment
section or use the instructions available in the
kubectl command times out section.
Run Airflow CLI commands through Cloud Composer API
Starting from Cloud Composer version 2.4.0, you can run Airflow CLI
commands through Cloud Composer API.
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
"executionId" : "39b82312-3a19-4d21-abac-7f8f19855ce7" ,
"pod" : "airflow-scheduler-1327d8cd68-hblpd" ,
"podNamespace" : "composer-2-4-0-airflow-2-5-3-184dadaf" ,
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
