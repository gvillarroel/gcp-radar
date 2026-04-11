---
title: "Queue workflow executions using Cloud Tasks \_|\_ Workflows \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/workflows/docs/create-http-task
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/create-http-task
  title: "Queue workflow executions using Cloud Tasks \_|\_ Workflows \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Queue workflow executions using Cloud Tasks
Stay organized with collections
Save and categorize content based on your preferences.
You can use Cloud Tasks to queue a workflow and execute it
asynchronously.
Cloud Tasks offers the following controls:
Schedule specific delivery times
Manage delivery rates
Configure retry behavior
Access and manage individual tasks in a queue
Enable task deduplication
These controls can be useful, for example, to manage requests that trigger a
workflow and that could unexpectedly exceed Workflows limits. By
configuring a Cloud Tasks queue with rate limits and retries,
you can ensure that all such requests result in workflow executions.
For more information, see
Understand Cloud Tasks .
Note the following:
You should base the rate limit on the Workflows limit
for Execution API write requests . If
necessary, you can request an adjustment to most quotas in the Google Cloud console.
Find out more about
quota adjustments .
Cloud Tasks is designed to provide "at least once" delivery;
however, Workflows doesn't ensure exactly-once processing of
duplicate requests from Cloud Tasks.
You can remove execution delays and maximize throughput by enabling
execution backlogging in Workflows. Backlogged executions
automatically run as soon as execution concurrency quota becomes available. For
more information, see
Manage execution backlogging .
Before you begin
If you don't already have a workflow that you would like to queue,
create one .
Enable the Cloud Tasks API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Queue a task to execute a workflow
Create a service account
so that Cloud Tasks can make requests to the Workflows API:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name that is
between 6 and 30 characters. It can contain lowercase alphanumeric characters
and dashes. After you create a service account, you cannot change its name.
To allow the principal that will run your Cloud Tasks
commands the ability to act as an Identity and Access Management (IAM) service
account,
grant a role that allows the principal to impersonate the service account .
Grant your new service account the
workflows.invoker role so that the
account has permission to trigger your workflow:
gcloud projects add-iam-policy-binding PROJECT_NAME \
--member serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_NAME .iam.gserviceaccount.com \
--role roles/workflows.invoker
Replace the following:
PROJECT_NAME : the name of your Google Cloud project.
SERVICE_ACCOUNT_NAME : the name of the service account that
you previously created.
If you don't already have a Cloud Tasks queue,
create one .
Create a task that targets your workflow's HTTP endpoint, using the
service account you previously created to authenticate:
gcloud tasks create-http-task \
--queue = " QUEUE_ID " \
--url = "https://workflowexecutions.googleapis.com/v1/projects/ PROJECT_NAME /locations/ REGION_NAME /workflows/ WORKFLOW_NAME /executions" \
--body-content = "{\"argument\": \" DOUBLE_ESCAPED_JSON_STRING \"}" \
--oauth-service-account-email = " SERVICE_ACCOUNT_NAME @ PROJECT_NAME .iam.gserviceaccount.com"
Replace the following:
QUEUE_ID : the identifier you assigned to your
Cloud Tasks queue; for example, my-queue .
PROJECT_NAME : the name of your Google Cloud
project.
REGION_NAME : the region your workflow is in,
such as us-central1 .
WORKFLOW_NAME : the name of the workflow you want
to create a task for.
DOUBLE_ESCAPED_JSON_STRING : a JSON encoding of
any arguments you are passing. The double quotation marks inside the
quoted string are escaped using backslashes (\). For example:
--body-content="{\"argument\": \"{\\\"foo\\\": \\\"bar\\\"}\"}"
SERVICE_ACCOUNT_NAME : the name of the service
account that you previously created.
Your task is created and added to your Cloud Tasks queue.
The task persists in the queue until the workflow execution starts and
returns an HTTP 2xx status code, at which point Cloud Tasks
considers the task complete.
Note: Cloud Tasks retries failures according to the
retry settings ,
and does not monitor long-running operations. (See how to
configure the maximum duration .)
Issues starting the workflow execution (for example, an HTTP 429 when there
are too many requests) can be handled by Cloud Tasks but
workflow execution failures are not retried. Each execution of a workflow
incurs costs, as detailed in Workflows pricing .
What's next
Tutorial: Use a Cloud Tasks queue to buffer your workflow executions
Manage queues and tasks
Manage execution backlogging
Pass runtime arguments in an execution request
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
