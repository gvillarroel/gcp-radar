---
title: "Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/schedule-runs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/schedule-runs
  title: "Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Schedule runs
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to do the following in Dataform:
Schedule runs with workflow configurations .
Schedule runs with Workflows and Cloud Scheduler .
Schedule runs with Cloud Composer .
Automate runs with Cloud Build triggers .
The following table compares the methods:
Method
Goal
Trigger Type
Workflow configurations
Standard, time-based production runs within Dataform.
Time-based
Workflows and Cloud Scheduler
Lightweight, serverless orchestration of Dataform alongside other APIs.
Time-based or event-driven
Cloud Composer
Complex pipelines with dependencies outside of BigQuery.
Time-based or event-driven
Cloud Build triggers
Automating releases immediately after a Git push.
Event-driven
Before you begin
To schedule runs with workflow configurations
or schedule runs with workflows and Cloud Scheduler , do the following:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select or create a repository .
Note: The Dataform repositories list includes only
repositories created for Dataform workflow development.
Repositories for BigQuery Studio assets, such as notebooks or saved
queries, are managed separately and don't appear in this list.
Create a release configuration .
To schedule runs with Cloud Composer , do the following:
Select or
create a Dataform repository .
Grant Dataform access to BigQuery .
Select or create a Dataform workspace .
Create at least one table .
Create a Cloud Composer 2 environment .
Required roles
To get the permissions that
you need to complete the tasks in this document,
ask your administrator to grant you the
following IAM roles:
Dataform Admin ( roles/dataform.admin )
on repositories
Composer Worker ( roles/composer.worker )
on the Cloud Composer environment's service account
Automate runs with Cloud Build:
Service Account Admin ( roles/iam.serviceAccountAdmin )
on the custom service account
Cloud Build Editor ( roles/cloudbuild.builds.editor )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Important: To schedule workflow runs, you must use a custom service
account or Google Account user credentials.
To use a custom service account when creating a workflow configuration,
grant access to the custom service account .
To use Google Account user credentials when creating a workflow configuration
( Preview ),
grant access to the Google Account .
To enable scheduled executions for a workflow configuration, you must
grant the iam.serviceAccounts.actAs permission to the
default Dataform service agent
for the custom service account used in the workflow configuration. This
permission is available in the
Service Account User role
( roles/iam.serviceAccountUser ).
For more information, see
Use strict act-as mode .
Important: We recommend enabling
strict act-as mode
on existing repositories, as this helps to ensure a more secure and
predictable permissions model for your Dataform projects.
To enhance security for scheduling, see
Implement enhanced scheduling permissions .
Schedule runs with workflow configurations
This section shows you how to create a workflow configuration in
Dataform to schedule and configure workflow runs. You can
use workflow configurations to execute Dataform workflows
on a schedule.
About workflow configurations
To schedule Dataform runs of all or selected workflow
actions in BigQuery, you can create workflow configurations.
In a workflow configuration, you select a compilation release configuration,
select workflow actions for execution, and set the run schedule.
Then, during a scheduled run of your workflow configuration,
Dataform deploys your selection of actions from the latest
compilation result in your release configuration to BigQuery.
You can also manually trigger the run of a workflow configuration with the
Dataform API workflowConfigs .
Note: If a scheduled workflow configuration run doesn't finish before the start
of the next scheduled run, the next scheduled run is skipped and marked with
an error.
A Dataform workflow configuration contains the following
run settings:
ID of the workflow configuration.
Release configuration.
Service account.
This is the custom service account that's associated with the workflow
configuration. You can select a custom service account that's associated with
your Google Cloud project, or you can manually enter a different service account.
By default, workflow configurations use the same service accounts as their
repositories .
Service account credentials are the default authorization method for
scheduled workflow configuration creation and executions.
Note: You can attach a maximum of 100 unique service accounts to all the
workflow configurations in a repository.
Google Account user credentials ( Preview )
Google Account user credentials are the default authorization method for
manual, non-scheduled workflow configuration creation and executions. For
more information, see
Authorize your Google Account .
Workflow actions to be executed:
All actions.
Selection of actions.
Selection of tags .
Run schedule and time zone.
Create a workflow configuration
To create a Dataform workflow configuration, follow these steps:
In your repository, go to Releases & Scheduling .
In the Workflow configurations section, click Create .
In the Create workflow configuration pane, in the Configuration ID
field, enter a unique ID for the workflow configuration.
IDs can only include numbers, letters, hyphens, and underscores.
In the Release configuration menu, select a
compilation release configuration .
In the Authentication section, authorize the
workflow configuration with your Google Account user credentials or a service
account.
To use your Google Account user credentials
( Preview ), select
Execute with my user credentials .
To use a custom service account, select
Execute with selected service account , and then select the service
account associated with your Google Cloud project that you have access to. If
you don't select a service account, the workflow configuration uses the
service account of the repository.
Note: You can't run workflows with the default Dataform
service agent. You must use either a custom service account or your
Google Account user credentials.
Optional: In the Schedule frequency field, enter the frequency of runs
in the
unix-cron format .
To verify that Dataform executes the latest compilation result
in the corresponding release configuration, keep a minimum one-hour break
between the time of compilation result creation and the time of scheduled
execution.
Optional: In the Timezone menu, select the time zone for runs.
The default time zone is UTC.
Select the workflow actions to be executed:
To execute the entire workflow, click All actions .
To execute selected actions in the workflow, click
Selection of actions , and then select actions.
To execute actions with selected tags, click
Selection of tags , and then select tags.
Optional: To execute selected actions or tags and their dependencies,
select the Include dependencies option.
Optional: To execute selected actions or tags and their dependents,
select the Include dependents option.
Optional: To rebuild all tables from scratch, select the
Run with full refresh option.
Without this option, Dataform updates incremental tables
without rebuilding them from scratch.
Optional: Set the BigQuery query job priority with the
Execute as interactive job with high priority (default) option.
By default, BigQuery runs queries as
interactive query jobs ,
which are intended to start running as quickly as possible.
Clearing this option runs the queries as
batch query jobs ,
which have lower priority.
Click Create . If you selected Execute with my user credentials
for your authentication method, you must
authorize your Google Account
( Preview ).
For example, the following workflow configuration executes actions with the
hourly tag every hour in the CEST timezone:
Configuration ID : production-hourly
Release configuration : -
Frequency : 0 * * * *
Timezone : Central European Summer Time (CEST)
Selection of workflow actions: selection of tags, hourly tag
Authorize your Google Account
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To request support or provide feedback for this feature, contact
dataform-preview-support@google.com .
To authenticate the resource with your
Google Account
user credentials, you must manually grant permission for BigQuery
pipelines to get the access token for your Google Account and access the source
data on your behalf. You can grant manual approval with the OAuth dialog
interface.
You only need to give permission to BigQuery pipelines once.
To revoke the permission that you granted, follow these steps:
Go to your Google Account page .
Click BigQuery Pipelines .
Click Remove access .
Warning: Revoking access permissions prevents any future pipeline runs
that this Google Account owns across all regions.
Changing the workflow configuration owner by updating credentials also
requires manual approval if the new Google Account owner has never created a
workflow configuration before.
Edit a workflow configuration
To edit a workflow configuration, follow these steps:
In your repository, go to Releases & Scheduling .
By the workflow configuration that you want to edit, click the
more_vert More menu, and then click Edit .
In the Edit workflow configuration pane, edit the workflow configuration
settings, and then click Save .
Delete a workflow configuration
To delete a workflow configuration, follow these steps:
In your repository, go to Releases & Scheduling .
By the workflow configuration that you want to delete, click the
more_vert More menu, and then click Delete .
In the Delete release configuration dialog, click Delete .
Schedule runs with Workflows and Cloud Scheduler
This section shows you how to schedule runs of Dataform
workflows using Workflows and Cloud Scheduler.
About scheduled workflow runs
You can set the frequency of your Dataform workflow runs by
creating a Cloud Scheduler job that triggers a
Workflows workflow. Workflows executes services in
an orchestration workflow that you define.
Workflows executes your Dataform workflow in a
two-step process. First, it pulls your Dataform repository code
from your Git provider and compiles it into a compilation result. Then, it uses
the compilation result to create a Dataform workflow and
executes it at the frequency that you set.
Create a scheduled orchestration workflow
To schedule runs of your Dataform workflow, use
Workflows to create an orchestration workflow and add a
Cloud Scheduler job as a trigger.
Workflows uses service accounts to give workflows access to
Google Cloud resources. Create a
service account
and grant it the following permissions:
Dataform Editor role
( roles/dataform.editor ).
Service Account User role
( roles/iam.serviceAccountUser ) on the custom service account used in Dataform.
The minimum permissions required to manage your orchestration workflow.
For more information, see
Grant a workflow permission to access Google Cloud resources .
Create an orchestration workflow
and use the following YAML source code as your workflow definition:
main :
steps :
- init :
assign :
- repository : projects/ PROJECT_ID /locations/ REPOSITORY_LOCATION /repositories/ REPOSITORY_ID
- createCompilationResult :
call : http.post
args :
url : ${"https://dataform.googleapis.com/v1beta1/" + repository + "/compilationResults"}
auth :
type : OAuth2
body :
gitCommitish : GIT_COMMITISH
result : compilationResult
- createWorkflowInvocation :
call : http.post
args :
url : ${"https://dataform.googleapis.com/v1beta1/" + repository + "/workflowInvocations"}
auth :
type : OAuth2
body :
compilationResult : ${compilationResult.body.name}
result : workflowInvocation
- complete :
return : ${workflowInvocation.body.name}
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
REPOSITORY_LOCATION : the location of your Dataform repository.
REPOSITORY_ID : the name of your Dataform repository.
GIT_COMMITISH : the Git branch that you want to execute Dataform code from. For a newly created repository, replace with main .
Schedule the orchestration workflow using Cloud Scheduler .
Customize the Dataform workflow create compilation result request
You can
update the existing orchestration workflow
and define the Dataform workflow create compilation result
request settings in the YAML format. For more information about the settings,
see the
projects.locations.repositories.compilationResults REST resource reference .
For example, to add a _dev schemaSuffix setting to all actions during compilation,
replace the createCompilationResult step body with the following code snippet:
- createCompilationResult:
call: http.post
args:
url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/compilationResults"}
auth:
type: OAuth2
body:
gitCommitish: GIT_COMMITISH
codeCompilationConfig:
schemaSuffix: dev
You can also pass additional settings as runtime arguments in a
Workflows run request and access those arguments using
variables. For more information, see
Pass runtime arguments in an execution request .
Customize the Dataform workflow invocation request
You can
update the existing orchestration workflow
and define the Dataform workflow invocation request settings in
the YAML format. For more information about the invocation request settings,
see the
projects.locations.repositories.workflowInvocations REST resource reference .
For example, to only execute actions with the hourly tag with all the
transitive dependencies included, replace the createWorkflowInvocation body
with the following code snippet:
- createWorkflowInvocation:
call: http.post
args:
url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/workflowInvocations"}
auth:
type: OAuth2
body:
compilationResult: ${compilationResult.body.name}
invocationConfig:
includedTags:
- hourly
transitiveDependenciesIncluded: true
You can also pass additional settings as runtime arguments in a
Workflows run request and access those arguments using
variables. For more information, see
Pass runtime arguments in an execution request .
Schedule runs with Cloud Composer
You can use
Cloud Composer 2
to schedule Dataform runs. Dataform does not support
Cloud Composer 1 .
To manage schedules for Dataform runs with Cloud Composer 2,
you can use
Dataform operators
in Airflow Directed Acyclic Graphs (DAGs). You can create an Airflow DAG that
schedules Dataform workflow invocations.
Dataform provides various Airflow operators. These include
operators for getting a compilation result, getting a workflow invocation, and
canceling a workflow invocation. To view the complete list of available
Dataform Airflow operators, see
Google Dataform Operators .
Install the google-cloud-dataform PyPi package
If you use Cloud Composer 2 versions 2.0.25 and later, this package
is preinstalled in your environment. You don't need to install it.
Important: Cloud Composer images with Airflow 2.3.3 use the public
version 8.1.0 of the apache-airflow-providers-google package. Version
8.1.0 does not include Dataform connectors. Support for
Dataform connectors will be available starting from version
8.3.0 , which will be released together with Cloud Composer images
with Airflow 2.3.4 . For more information, see
Cloud Composer release notes .
If you use earlier versions of Cloud Composer 2,
install the google-cloud-dataform PyPi package .
In the PyPI packages section, specify version ==0.2.0 .
Create an Airflow DAG that schedules Dataform workflow invocations
To manage scheduled runs of Dataform workflows with
Cloud Composer 2,
write the DAG
using
Dataform Airflow operators ,
then
upload it to your environment's bucket .
The following code sample shows an Airflow DAG that creates a Dataform
compilation result and starts a Dataform workflow invocation:
from datetime import datetime
from airflow import models
from airflow.models.baseoperator import chain
from airflow.providers.google.cloud.operators.dataform import (
DataformCreateCompilationResultOperator ,
DataformCreateWorkflowInvocationOperator ,
)
DAG_ID = "dataform"
PROJECT_ID = " PROJECT_ID "
REPOSITORY_ID = " REPOSITORY_ID "
REGION = " REGION "
GIT_COMMITISH = " GIT_COMMITISH "
with models . DAG (
DAG_ID ,
schedule_interval = '@once' , # Override to match your needs
start_date = datetime ( 2022 , 1 , 1 ),
catchup = False , # Override to match your needs
tags = [ 'dataform' ],
) as dag :
create_compilation_result = DataformCreateCompilationResultOperator (
task_id = "create_compilation_result" ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
compilation_result = {
"git_commitish" : GIT_COMMITISH ,
},
)
create_workflow_invocation = DataformCreateWorkflowInvocationOperator (
task_id = 'create_workflow_invocation' ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
workflow_invocation = {
"compilation_result" : "{{ task_instance.xcom_pull('create_compilation_result')['name'] }}"
},
)
create_compilation_result >> create_workflow_invocation
Replace the following:
PROJECT_ID : your Dataform Google Cloud project ID.
REPOSITORY_ID : the name of your Dataform repository.
REGION : the region in which the Dataform
repository is located.
COMPILATION_RESULT : the name of the compilation result
you want to use for this workflow invocation.
GIT_COMMITISH : the Git commitish in the remote Git repository of
the version of your code that you want to use—for example, a branch or a Git
SHA.
The following code sample shows an Airflow DAG that performs the following:
Creates a Dataform compilation result.
Starts an asynchronous Dataform workflow invocation.
Polls the status of your workflow until it enters the expected state
by using DataformWorkflowInvocationStateSensor .
from datetime import datetime
from google.cloud.dataform_v1beta1 import WorkflowInvocation
from airflow import models
from airflow.models.baseoperator import chain
from airflow.providers.google.cloud.operators.dataform import (
DataformCreateCompilationResultOperator ,
DataformCreateWorkflowInvocationOperator ,
)
from airflow.providers.google.cloud.sensors.dataform import DataformWorkflowInvocationStateSensor
DAG_ID = "dataform"
PROJECT_ID = " PROJECT_ID "
REPOSITORY_ID = " REPOSITORY_ID "
REGION = " REGION "
GIT_COMMITISH = " GIT_COMMITISH "
with models . DAG (
DAG_ID ,
schedule_interval = '@once' , # Override to match your needs
start_date = datetime ( 2022 , 1 , 1 ),
catchup = False , # Override to match your needs
tags = [ 'dataform' ],
) as dag :
create_compilation_result = DataformCreateCompilationResultOperator (
task_id = "create_compilation_result" ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
compilation_result = {
"git_commitish" : GIT_COMMITISH ,
},
)
create_workflow_invocation = DataformCreateWorkflowInvocationOperator (
task_id = 'create_workflow_invocation' ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
asynchronous = True ,
workflow_invocation = {
"compilation_result" : COMPILATION_RESULT
}
)
is_workflow_invocation_done = DataformWorkflowInvocationStateSensor (
task_id = "is_workflow_invocation_done" ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
workflow_invocation_id = ( "{{ task_instance.xcom_pull('create_workflow_invocation')['name'].split('/')[-1] }}" ),
expected_statuses = { WorkflowInvocation . State . SUCCEEDED },
)
create_compilation_result >> create_workflow_invocation
Replace the following:
PROJECT_ID : your Dataform Google Cloud project ID.
REPOSITORY_ID : the name of your Dataform repository.
REGION : the region in which the Dataform
repository is located.
COMPILATION_RESULT : the name of the compilation result
you want to use for this workflow invocation.
GIT_COMMITISH : the Git commitish in the remote Git repository of
the version of your code that you want to use—for example, a branch or a Git
SHA.
COMPILATION_RESULT : the name of the compilation result
you want to use for this workflow invocation.
Add compilation configuration parameters
You can add additional compilation configuration parameters to the
create_compilation_result Airflow DAG object. For more information about
available parameters, see the
CodeCompilationConfig Dataform API reference .
To add compilation configuration parameters to the create_compilation_result
Airflow DAG object, add your selected parameters to the code_compilation_config
field in the following format:
create_compilation_result = DataformCreateCompilationResultOperator (
task_id = "create_compilation_result" ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
compilation_result = {
"git_commitish" : GIT_COMMITISH ,
"code_compilation_config" : { " PARAMETER " : " PARAMETER_VALUE " }
},
)
Replace the following:
PROJECT_ID : your Dataform Google Cloud project ID.
REPOSITORY_ID : the name of your Dataform repository.
REGION : the region in which the Dataform repository
is located.
GIT_COMMITISH : the Git commitish in the remote Git repository of
the version of your code that you want to use—for example, a branch or a Git
SHA.
PARAMETER : the selected
CodeCompilationConfig parameter .
You can add multiple parameters.
PARAMETER_VALUE : the value of the selected parameter.
The following code sample shows the defaultDatabase parameter added to the
create_compilation_result Airflow DAG object:
create_compilation_result = DataformCreateCompilationResultOperator (
task_id = "create_compilation_result" ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
compilation_result = {
"git_commitish" : REMOTE_BRANCH ,
"code_compilation_config" : { "default_database" : "my-custom-gcp-project" }
},
)
Add workflow invocation configuration parameters
You can add additional workflow invocation configuration parameters to the
create_workflow_invocation Airflow DAG object. For more information about
available parameters, see the
InvocationConfig Dataform API reference .
To add workflow invocation configuration parameters to the
create_workflow_invocation Airflow DAG object, add your selected parameters
to the invocation_config field in the following format:
create_workflow_invocation = DataformCreateWorkflowInvocationOperator (
task_id = 'create_workflow_invocation' ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
workflow_invocation = {
"compilation_result" : "{{ task_instance.xcom_pull('create_compilation_result')['name'] }}" ,
"invocation_config" : { "PARAMETER" : PARAMETER_VALUE }
},
)
Replace the following:
PROJECT_ID : your Dataform Google Cloud project ID.
REPOSITORY_ID : the name of your Dataform repository.
REGION : the region in which the Dataform repository
is located.
PARAMETER : the selected
InvocationConfig parameter .
You can add multiple parameters.
PARAMETER_VALUE : the value of the selected parameter.
The following code sample shows the includedTags[] and
transitiveDependenciesIncluded parameters added to the
create_workflow_invocation Airflow DAG object:
create_workflow_invocation = DataformCreateWorkflowInvocationOperator (
task_id = 'create_workflow_invocation' ,
project_id = PROJECT_ID ,
region = REGION ,
repository_id = REPOSITORY_ID ,
workflow_invocation = {
"compilation_result" : "{{ task_instance.xcom_pull('create_compilation_result')['name'] }}" ,
"invocation_config" : { "included_tags" : [ "daily" ], "transitive_dependencies_included" : true }
},
)
Automate runs with Cloud Build triggers
If you want to move beyond the time-based schedules in a release configuration,
you can use a Cloud Build trigger to create an event-driven pipeline. This approach automatically compiles your code whenever a new commit is pushed
to a Git branch and immediately triggers a Dataform workflow
invocation to update your data.
Prepare your resources
In your Google Cloud project, enable the Dataform and
Cloud Build APIs:
Enable the Dataform API
Enable the Cloud Build API
Ensure that you have the following:
A custom service account to use for
compilation. Note the email address of the service account, for example,
dataform-compiler@ PROJECT_NUMBER .iam.gserviceaccount.com .
A
Dataform repository connected to a Git provider .
A
release configuration
in your Dataform repository. Note the release
configuration ID.
A
workflow configuration
in your Dataform repository that uses your release
configuration. Note the workflow configuration ID.
Grant the required IAM permissions
Grant the
Dataform Admin role
( roles/dataform.admin )
to the custom service account in your Dataform repository.
This role provides full access to the repository, including the permission
to create compilation results, update release configurations, and start new
workflow invocations. For details on how to grant an IAM role
to an individual repository, see
Control access to an individual repository .
Grant the
Service Account User role
( roles/iam.serviceAccountUser )
on the workflow configuration's custom service account to the
Cloud Build trigger's service account. For more information on this
requirement, see
Use strict act-as mode .
For Cloud Build to use your custom service account, you must grant
the Cloud Build service agent the permission to act as that
account. To grant impersonation permission to the Cloud Build
service agent, do the following:
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select your custom service account.
Go to the Principals with access tab.
Click person_add Grant Access .
In the New principals field, enter the email address of the Cloud Build service agent, which should be in this format:
service- PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the numeral ID of your
Google Cloud project. You can find your Google Cloud project ID in the
Google Cloud console dashboard. For more information, see
Find the project name, number, and ID .
In the Select a role menu, select Service Account User .
Click Save .
Create the cloudbuild.yaml configuration file
In the root of your Git repository, create a cloudbuild.yaml file. Use this
file to define the following multi-step script for creating a compilation
result, updating the release configuration to set this compilation result as
live, and starting a new workflow invocation.
steps :
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk:latest'
entrypoint : 'bash'
args :
- '-c'
- |
set -e -o pipefail # Exit script on any error
# 1. Get the access token
TOKEN=$(gcloud auth print-access-token)
# 2. Define API endpoints and resource names
RELEASE_CONFIG_RESOURCE="projects/${_PROJECT_ID}/locations/${_DATAFORM_LOCATION}/repositories/${_DATAFORM_REPO_ID}/releaseConfigs/${_RELEASE_CONFIG_ID}"
COMPILATION_RESULTS_API="https://dataform.googleapis.com/v1/projects/${_PROJECT_ID}/locations/${_DATAFORM_LOCATION}/repositories/${_DATAFORM_REPO_ID}/compilationResults"
# 3. Create the new compilation result
echo "Creating new compilation result from $$RELEASE_CONFIG_RESOURCE..."
CREATE_PAYLOAD="{\"releaseConfig\": \"$$RELEASE_CONFIG_RESOURCE\"}"
curl --fail-with-body -X POST \
-H "Authorization: Bearer $$TOKEN" \
-H "Content-Type: application/json" \
-d "$$CREATE_PAYLOAD" \
"$$COMPILATION_RESULTS_API" | tee /workspace/compilation_response.json
- name : 'alpine'
entrypoint : 'bash'
args :
- '-c'
- |
set -e # Exit script on any error
# 4. Parse compilation result name
apk add --no-cache jq
COMPILATION_NAME=$(jq -r '.name' < /workspace/compilation_response.json)
echo "Successfully created compilation result: $$COMPILATION_NAME"
echo $$COMPILATION_NAME > /workspace/compilation_result_name.txt
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk:latest'
entrypoint : 'bash'
args :
- '-c'
- |
set -e # Exit script on any error
# 5. Update the releaseConfig to set the new compilation result as 'live'
COMPILATION_NAME=$(cat /workspace/compilation_result_name.txt)
echo "Updating release config to set $$COMPILATION_NAME as live..."
PATCH_PAYLOAD="{\"releaseCompilationResult\": \"$$COMPILATION_NAME\", \"gitCommitish\": \"$BRANCH_NAME\"}"
RELEASE_CONFIG_RESOURCE="projects/${_PROJECT_ID}/locations/${_DATAFORM_LOCATION}/repositories/${_DATAFORM_REPO_ID}/releaseConfigs/${_RELEASE_CONFIG_ID}"
RELEASE_CONFIG_PATCH_API="https://dataform.googleapis.com/v1/$${RELEASE_CONFIG_RESOURCE}"
curl --fail-with-body -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d "$$PATCH_PAYLOAD" \
"$$RELEASE_CONFIG_PATCH_API?updateMask=releaseCompilationResult"
echo "Successfully updated release config."
- name : 'gcr.io/google.com/cloudsdktool/cloud-sdk:latest'
entrypoint : 'bash'
args :
- '-c'
- |
set -e # Exit script on any error
# 6. Launch a workflow config after recompiling the release config
WORKFLOW_CONFIG_RESOURCE="projects/${_PROJECT_ID}/locations/${_DATAFORM_LOCATION}/repositories/${_DATAFORM_REPO_ID}/workflowConfigs/${_WORKFLOW_CONFIG_ID}"
CREATE_WORKFLOW_PAYLOAD="{\"workflowConfig\": \"$$WORKFLOW_CONFIG_RESOURCE\"}"
WORKFLOW_INVOCATIONS_API="https://dataform.googleapis.com/v1/projects/${_PROJECT_ID}/locations/${_DATAFORM_LOCATION}/repositories/${_DATAFORM_REPO_ID}/workflowInvocations"
curl --fail-with-body -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d "$$CREATE_WORKFLOW_PAYLOAD" \
"$$WORKFLOW_INVOCATIONS_API"
echo "Successfully created a new workflow invocation."
# Define substitution variables that can be set in the trigger
substitutions :
_DATAFORM_LOCATION : 'us-central1' # Default, change if needed
_DATAFORM_REPO_ID : '' # Required: Set this in the trigger
_RELEASE_CONFIG_ID : '' # Required: Set this in the trigger
_WORKFLOW_CONFIG_ID : '' # Required: Set this in the trigger
_PROJECT_ID : ${PROJECT_ID} # Automatically uses the build's Project ID
options :
logging : CLOUD_LOGGING_ONLY
Create the Cloud Build trigger
To create a trigger that runs your build configuration when code is pushed to
your repository, do the following:
In the Google Cloud console, open the Cloud Build Triggers page.
Go to Triggers
If you haven't connected your Git repository, click Connect repository
and follow the steps.
Click Create trigger .
Enter a name for the trigger.
Select a region for the trigger.
Select an event for the trigger.
In the Source section, set the repository to your connected Git
repository.
Set the branch to your repository's main branch.
In the Configuration section, select the Cloud Build
configuration file, which can be a YAML or JSON file.
Set the file location to /cloudbuild.yaml or the path to your file.
In the Substitution variables section, add the following variables and
values:
_DATAFORM_REPO_ID : your Dataform repository ID
_RELEASE_CONFIG_ID : your Dataform release
configuration ID
_WORKFLOW_CONFIG_ID : your Dataform workflow
configuration ID
Optional: _DATAFORM_LOCATION : your Dataform repository region, for example, us-central1
In the Service Account section, select your custom service account.
Click Create .
For more information, see
Create a build trigger .
Test the trigger
Commit and push the cloudbuild.yaml file to the branch that your trigger is
monitoring.
To view the Cloud Build build, open the Build History page in
the Google Cloud console.
Go to Build History
If the build is successful, go to the Dataform page.
Go to Dataform
Select your repository.
Click Releases & scheduling and select your release configuration.
In the Manual / API compilation results list, look for a new entry. The
most recent successful compilation should be marked as the
Live compilation result for the release configuration.
Click Workflow execution logs .
You should see a new workflow invocation launched using your selected
workflow configuration.
What's next
To learn how to configure Dataform compilation release
configurations, see
Create a release configuration .
To learn more about code lifecycle Dataform, see
Introduction to code lifecycle in Dataform .
To learn more about the Dataform API, see
Dataform API .
To learn more about Cloud Composer environments, see
Overview of Cloud Composer .
To learn more about Workflows pricing, see
Workflows pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
