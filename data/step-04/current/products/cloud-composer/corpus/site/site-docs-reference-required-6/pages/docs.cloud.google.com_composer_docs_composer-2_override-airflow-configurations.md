---
title: "Override Airflow configuration options \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
  title: "Override Airflow configuration options \_|\_ Cloud Composer \_|\_ Google\
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
Override Airflow configuration options
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to override Airflow configuration options for new and
existing Cloud Composer environments.
When you create or update an environment, you can
override Apache Airflow configuration options with
different values. By doing so you can adjust the Airflow instance to your
needs and requirements.
Note: some Airflow configuration options are blocked and
you cannot override them.
Override Airflow configuration options for new environments
You can override Airflow configuration options when you create your
environment. For more information, see
Create environments .
Override Airflow configuration options for existing environments
Console
To override Airflow configuration options for an
existing environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens .
Go to the Airflow configuration overrides tab.
Click Edit .
Enter the Section , Key , and Value for the Airflow
configuration option that you want to change.
For example:
Section
Key
Value
webserver
dag_orientation
RL
gcloud
Following arguments override
Airflow configuration options for an existing
environment:
--update-airflow-configs adds or changes specified Airflow configuration
overrides.
--remove-airflow-configs removes specified Airflow configuration
overrides.
--clear-airflow-configs removes all Airflow configuration overrides.
gcloud composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--update-airflow-configs = KEY = VALUE,KEY = VALUE,...
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
KEY with the configuration section and the option name
separated by a hyphen, for example, webserver-dag_orientation .
VALUE with the corresponding value for an option.
For example:
gcloud composer environments update example-environment \
--location us-central1 \
--update-airflow-configs = webserver-dag_default_view = graph,webserver-dag_orientation = RL
API
To override Airflow configuration options for an
existing environment:
Construct an environments.patch API request.
In this request:
To replace all existing Airflow configuration overrides with
the specified options, in the updateMask parameter, specify
the config.softwareConfig.airflowConfigOverrides mask.
To override a specific Airflow configuration option, in
the updateMask parameter, specify
the config.softwareConfig.airflowConfigOverrides. KEY
mask. Replace KEY with the configuration section and the option
name separated by a hyphen, for example, webserver-dag_orientation .
If you want to override several Airflow configuration options, in
the updateMask parameter, specify several masks separated by commas.
The request body must contain the list of Airflow configuration options.
If you are replacing all existing overrides, make sure to include all
overrides that you want to keep.
{
"config" : {
"softwareConfig" : {
"airflowConfigOverrides" : {
" KEY " : " VALUE "
}
}
}
}
Replace:
KEY with the configuration section and the option name
separated by a hyphen, for example, webserver-dag_orientation .
VALUE with the corresponding value for an option.
The following example overrides two specific Airflow configuration options:
// PATCH https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.softwareConfig.airflowConfigOverrides.webserver-dag_default_view,
// config.softwareConfig.airflowConfigOverrides.webserver-dag_orientation
{
"config" : {
"softwareConfig" : {
"airflowConfigOverrides" : {
"webserver-dag_default_view" : "graph" ,
"webserver-dag_orientation" : "RL"
}
}
}
}
Terraform
The airflow_config_overrides block in the software_config block
controls overrides of Airflow configuration options
for your environment:
resource "google_composer_environment" "example" {
config {
# ... Other environment configuration parameters
software_config {
airflow_config_overrides = {
KEY = " VALUE "
}
}
}
}
Replace:
KEY with the configuration section and the option name
separated by a hyphen, for example, webserver-dag_orientation .
VALUE with the corresponding value for an option.
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
# ... Other environment configuration parameters
config {
software_config {
airflow_config_overrides = {
webserver-dag_default_view = "graph"
webserver-dag_orientation = "RL"
}
}
}
}
What's next
Blocked Airflow configurations
Update environments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
