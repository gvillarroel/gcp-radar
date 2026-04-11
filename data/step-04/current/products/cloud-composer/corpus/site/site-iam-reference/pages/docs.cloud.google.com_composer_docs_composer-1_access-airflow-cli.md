---
title: "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli
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
Composer 1 Guides
Send feedback
Access Airflow command-line interface
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
Apache Airflow has a command-line interface (CLI) that you can use to perform
tasks such as triggering and managing DAGs, getting information about DAG runs
and tasks, adding and deleting connections and users.
Supported Airflow CLI commands
Airflow in Cloud Composer 1 provides two different syntaxes for CLI commands:
Airflow 1.10 CLI syntax ,
available in Cloud Composer environments with Airflow 1.10.
Airflow 2 CLI syntax ,
available Cloud Composer environments with Airflow 2.
For a full list of supported Airflow CLI commands, see the reference for the
gcloud composer environments run command.
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
Airflow 2
Specify compound CLI commands as a sub-command.
Specify any arguments for compound commands as sub-command arguments,
after a -- separator.
Example:
gcloud composer environments run example-environment \
dags list -- --output = json
Airflow 1
Specify CLI commands as a sub-command.
Specify any arguments after a -- separator.
Example:
gcloud composer environments run example-environment \
list_dags -- --report
Default location
Most gcloud composer commands require a location. You can specify the
location with the --location flag, or by
setting the default location .
For example, to trigger a DAG named sample_quickstart with the ID 5077 in
your Cloud Composer environment:
Airflow 2
gcloud composer environments run example-environment \
--location us-central1 dags trigger -- sample_quickstart \
--run-id = 5077
Airflow 1
gcloud composer environments run example-environment \
--location us-central1 trigger_dag -- sample_quickstart \
--run_id = 5077
What's next
Access Airflow UI
Access control (Airflow CLI)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
