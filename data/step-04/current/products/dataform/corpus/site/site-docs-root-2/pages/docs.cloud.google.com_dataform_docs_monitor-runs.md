---
title: "Monitor runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/monitor-runs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/monitor-runs
  title: "Monitor runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Monitor runs
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to do the following:
Monitor execution logs.
View Logging logs for Dataform.
Configure alerts for failed workflow invocations.
Before you begin
To monitor execution logs, ensure you do the following:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select or create a repository .
Select or create a development workspace .
Trigger a run at least once.
Required roles
To get the permissions that
you need to view execution logs,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on the workflowInvocations repository.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
The Logs Viewer
( roles/logging.viewer ) IAM role gives you read-only access
to all the features of Cloud Logging. For more information on the Identity and Access Management
permissions and roles that apply to Logging data, see
Access control with IAM .
To create and manage log-based alerts, ensure that your IAM role
includes the permissions that are described in
Roles required to create and use log-based alerting policies .
Monitor execution logs
This section shows you how to view execution logs in Dataform.
You can view the logs of all the executions that are triggered in a repository,
and the logs of executions that were triggered in a workspace in the last
24 hours.
Inspect repository execution logs
To view the logs of all the executions triggered in a repository, follow these
steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Go to your repository.
Click Workflow Execution Logs .
To view the details of an execution, click the execution.
To view the details of an action within the execution, click View details .
Inspect workspace execution logs
To view the logs of the 1,000 most-recent executions that were triggered in a
workspace in the last 24 hours, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Go to your repository and select your workspace.
In your workspace, click Executions .
To view details of an execution, click the execution.
To view details of an action within the execution, click View details .
View Logging logs for Dataform
This section shows you how to view Cloud Logging logs for Dataform
workflow invocations.
Each Dataform workflow invocation is logged using
Logging . Logging is
automatically enabled for Dataform workflow
invocations, which can incur Logging billing charges.
For more information, see Dataform pricing .
View logs
To view logs, go to the Logs Explorer page.
Go to Logs Explorer
For information about filtering Logging logs in
Logs Explorer, see
View logs by using the Logs Explorer .
Dataform logs are indexed by Dataform repository.
Log format
Dataform sends workflow invocation log messages in the following format:
{
"insertId" : "14ip1tza5" ,
"jsonPayload" : {
"terminalState" : "SUCCEEDED" ,
"workflowInvocationId" : "1678383230-ac4ed48c-eb70-4555-b2b0-cda54d13edfa" ,
"@type" : "type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry"
},
"resource" : {
"type" : "dataform.googleapis.com/Repository" ,
"labels" : {
"repository_id" : "repository-name-example" ,
"resource_container" : " PROJECT_ID " ,
"location" : "us-central1"
}
},
"timestamp" : "2023-03-09T17:34:06.965981805Z" ,
"severity" : "INFO" ,
"logName" : "projects/project-name-example/logs/dataform.googleapis.com%2Fworkflow_invocation_completion" ,
"receiveTimestamp" : "2023-03-09T17:34:07.362371980Z"
}
What is logged
Dataform log entries contain information that is useful for
monitoring and debugging your workflow invocations.
Log entries contain the following types of information:
receiveTimestamp
release_config_id
repository_id
resource_container
workflow_invocation_id
workflow_config_id
severity : can be INFO , WARNING , or ERROR
terminalState : can be SUCCEEDED , CANCELED , or FAILED
timestamp
@type
Configure metrics and alerts with Cloud Monitoring
You can use Monitoring to observe trends in your logs and to notify
you when conditions that you describe occur.
To provide Monitoring with data from your logs,
Logging offers you the following:
Log-based metrics, which you can use as follows:
To create alerting policies that notify you of changes over time.
To create charts that display changes over time.
Log-based alerts, which notify you anytime a specific event appears in a log.
For more information about log-based metrics and log-based alerts, see
Monitor your logs .
To learn how to configure log-based alerts for Dataform workflow
invocations, see
Configure alerts for failed workflow invocations .
Configure alerts for failed workflow invocations
This section shows you how to configure log-based alerts for
failed Dataform workflow invocations using the Logs Explorer.
You can use Monitoring to observe trends in
Logging logs for Dataform workflow invocations
and to notify you when conditions that you describe occur.
Each Dataform workflow invocation is logged using
Logging .
Logging is automatically enabled for Dataform workflow
invocations, which can incur Logging billing charges.
For more information, see Dataform pricing .
To receive alerts when a Dataform workflow invocation fails,
you can create log-based alerts .
You can create log-based alerts from the
Logs Explorer page in the Google Cloud console or by using the
Monitoring API. This section describes how to create log-based alerts for Dataform workflow invocation failure using
Logs Explorer.
To configure log-based alerts for failed Dataform workflow
invocations, follow these steps:
In the Google Cloud console, select Logging , and then select
Logs Explorer .
Go to Logs Explorer
In the Query pane, select Show query and enter the following query:
resource.type="dataform.googleapis.com/Repository"
jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry"
jsonPayload.terminalState="FAILED"
This query alerts you of all failed Dataform workflow invocations.
Optional: To filter failed workflow invocations by a release configuration,
append the following to the query:
jsonPayload.releaseConfigId=" RELEASE_CONFIGURATION_ID "
Replace RELEASE_CONFIGURATION_ID with the ID of the release configuration.
Optional: To filter failed workflow invocations by a workflow
configuration, append the following to the query:
jsonPayload.workflowConfigId=" WORKFLOW_CONFIGURATION_ID "
Replace WORKFLOW_CONFIGURATION_ID with the ID of the workflow configuration.
The following query alerts you when a Dataform workflow invocation
that's related to both the daily release configuration and the production
workflow configuration fails:
resource.type="dataform.googleapis.com/Repository"
jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry"
jsonPayload.terminalState="FAILED"
jsonPayload.releaseConfigId="daily"
jsonPayload.workflowConfigId="production"
Optional: To validate the query, use Run query in the Query results pane.
In the header of the Query results pane, click Create alert . When your
window is narrow, the Create alert option might appear on the Actions
menu instead.
In the Alert details pane, give the alert a name and description:
Enter a name for your alert in the Alert Name field. For example:
Dataform: workflow failure .
Enter a description of this alert. You can also include information
that might help the recipient of a notification diagnose the problem.
The following string summarizes the reason for the alert:
Log-based alert in project ${project} detected a failed Dataform workflow.
For information about how you can format and tailor the content
of this field, see
Annotate notifications with user-defined documentation .
To advance to the next step, click Next .
In the Choose logs to include in the alert pane, check the query
and results by clicking Preview logs .
We recommend building the query in the Logs Explorer Query pane.
The query that you built in the Query pane is also displayed on this
pane.
You can edit the query in this pane, if necessary. If you edit the
query, then check the results by clicking Preview logs .
Click Next .
Select the minimum time between notifications. This value
lets you control the number of notifications that you get from this alert
if it is triggered multiple times. For this example, select 5 min
from the options.
Optional: Select the incident autoclose duration. By default, the incident
autoclose duration is set to 7 days.
Click Next .
Select one or more notification channels for your alert. For this example,
select an email notification channel.
If you already have an email notification channel configured, then you can
select it from the list. If not, click Manage notification channels and
add an email channel. For information about creating notification
channels, see
Create and manage notification channels .
Click Save .
Your log-based alert is now ready to test. For instructions to test the alert,
see Test the example log-based alerting policy .
What's next
Learn about manually triggering runs .
Learn how to schedule runs with Workflows and Cloud Scheduler .
Learn how to
configure compilation overrides with the Dataform API .
Learn about Cloud Audit Logs and
Monitoring .
Learn about Logging pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
