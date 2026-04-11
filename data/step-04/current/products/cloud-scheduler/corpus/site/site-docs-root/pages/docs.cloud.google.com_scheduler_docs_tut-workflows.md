---
title: "Schedule Workflows \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/tut-workflows
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/tut-workflows
  title: "Schedule Workflows \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
Schedule Workflows
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use Cloud Scheduler to automatically execute
Workflows so that a workflow runs on a particular schedule, in
this case every 5 minutes.
Objectives
Create and deploy a workflow that can receive runtime arguments.
Create a Cloud Scheduler job that triggers your workflow and executes it
every 5 minutes, passing in JSON arguments in the correct format.
Costs
In this document, you use the following billable components of Google Cloud:
App Engine
Cloud Scheduler
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Set up your environment for Cloud Scheduler, including
creating an App Engine app.
Enable the Workflows API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set the default location used in this tutorial:
gcloud config set workflows/location REGION
Replace REGION with the supported Workflows
location of your choice.
Create a service account for Workflows to use; for example,
sa-name .
gcloud iam service-accounts create sa-name
Grant your service account the workflows.invoker role so that the
account has permission to trigger your workflow:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount:sa-name@ PROJECT_ID .iam.gserviceaccount.com" \
--role "roles/workflows.invoker"
Replace PROJECT_ID with your Google Cloud project ID.
Grant the logging.logWriter role to the service account.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount:sa-name@ PROJECT_ID .iam.gserviceaccount.com" \
--role "roles/logging.logWriter"
Create a workflow that receives runtime arguments
A workflow definition is made up of a series of steps described using the
Workflows syntax , which can be written in
either YAML or JSON format. After creating a workflow, you deploy it to make it
available for execution.
Console
In the Google Cloud console, go to the Workflows page:
Go to Workflows
Click Create .
Enter myFirstWorkflow as a name for your new workflow.
Select us-central1 for the region.
Select the service account you created previously.
Click Next .
In the workflow editor, enter the following definition for your workflow.
YAML
main :
params : [ args ]
steps :
- step1 :
assign :
- outputVar : ${"Hello, " + args.firstName + " " + args.lastName + "!"}
- step2 :
return : ${outputVar}
JSON
{
"main" : {
"params" : [
"args"
],
"steps" : [
{
"step1" : {
"assign" : [
{
"outputVar" : "${\"Hello \" + args.firstName + \" \" + args.lastName}"
}
]
}
},
{
"step2" : {
"return" : "${outputVar}"
}
}
]
}
}
This workflow returns a "Hello" greeting to a person whose first and last name
you pass as runtime arguments.
Click Deploy .
gcloud
Open a terminal.
Save the following workflow definition as a YAML or JSON
file, such as myFirstWorkflow.yaml or myFirstWorkflow.json .
YAML
main :
params : [ args ]
steps :
- step1 :
assign :
- outputVar : ${"Hello, " + args.firstName + " " + args.lastName + "!"}
- step2 :
return : ${outputVar}
JSON
{
"main" : {
"params" : [
"args"
],
"steps" : [
{
"step1" : {
"assign" : [
{
"outputVar" : "${\"Hello \" + args.firstName + \" \" + args.lastName}"
}
]
}
},
{
"step2" : {
"return" : "${outputVar}"
}
}
]
}
}
This workflow returns a "Hello" greeting to a person whose first and last name
you pass as runtime arguments.
Deploy the workflow by entering the following command:
gcloud workflows deploy myFirstWorkflow \
--source = myFirstWorkflow. yaml_OR_json \
--service-account = sa-name@ PROJECT_ID .iam.gserviceaccount.com
Replace yaml_OR_json with yaml or json depending
on the format of the Workflows definition file that you
created previously.
Schedule the workflow
Create a Cloud Scheduler job that triggers your workflow, using the service
account you previously created.
Console
In the Google Cloud console, go to the Cloud Scheduler page:
Go to Cloud Scheduler
Click Create Job .
Set the Name to my-workflow-job .
For Frequency , enter:
*/5 * * * *
This will execute the job every 5 minutes. The interval is defined using
unix-cron format.
For Timezone , select a country and timezone.
For example, select United States and Los Angeles or
Pacific Daylight Time (PDT) .
Click Continue .
For Target type , select HTTP .
For URL , enter:
https://workflowexecutions.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/workflows/myFirstWorkflow/executions
Leave the HTTP method at the default of POST .
Add the following two HTTP headers :
Name: Content-Type and Value: application/octet-stream
Name: User-Agent and Value: Google-Cloud-Scheduler
For Body , enter:
{"argument": "{\"firstName\":\"Sherlock\", \"lastName\":\"Holmes\"}"}
This passes a JSON encoding of the workflow's arguments; in this case, the
first name, "Sherlock", and the last name, "Holmes". The double quotation
marks inside the string are escaped using backslashes (\).
For Auth header , select Add OAuth token .
Enter the service account you previously created.
sa-name@ PROJECT_ID .iam.gserviceaccount.com
You don't have to specify the Scope as the default of
https://www.googleapis.com/auth/cloud-platform is used.
Accept all the other defaults and click Create .
gcloud
Schedule a job called my-workflow-job by entering the following command:
gcloud scheduler jobs create http my-workflow-job \
--schedule="*/5 * * * *" \
--uri="https://workflowexecutions.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/workflows/myFirstWorkflow/executions" \
--message-body="{\"argument\": \"{\\\"firstName\\\":\\\"Sherlock\\\", \\\"lastName\\\":\\\"Holmes\\\"}\"}" \
--time-zone="America/Los_Angeles" \
--oauth-service-account-email="sa-name@ PROJECT_ID .iam.gserviceaccount.com"
The interval is defined using unix-cron
format.
The message-body flag is used to pass a JSON encoding of the workflow's
arguments; in this case, the first name, "Sherlock", and the last name,
"Holmes". The double quotation marks inside the string are escaped
using backslashes (\).
Your workflow now executes every 5 minutes.
For more information about the gcloud scheduler flags, as well as how to apply
call logging so that each call step during the execution of your workflow is
logged, see Schedule a workflow and the
gcloud reference .
Note: Each execution of a workflow incurs costs, as detailed in
Workflows pricing . To stop incurring costs from a
scheduled workflow, delete the Cloud Scheduler job .
Run the job and verify the results
Console
In the Google Cloud console, go to the Cloud Scheduler page:
Go to Cloud Scheduler
If the job is not displayed, you might have to refresh the page.
For the job named my-workflow-job , click Run now .
You should see the Result value update to Success .
In the Google Cloud console, go to the Workflows page:
Go to Workflows
From the list of workflows, click myFirstWorkflow to open its
details page.
The execution state of your workflow should be Succeeded .
Click the workflow's execution ID to open the details page and
view the results of the workflow in the Output pane.
The output should be "Hello, Sherlock Holmes!".
gcloud
Run the Cloud Scheduler job to execute the workflow:
gcloud scheduler jobs run my-workflow-job
Retrieve the execution ID for your workflow:
gcloud workflows executions list myFirstWorkflow
The output should resemble the following with the execution ID in bold:
projects/316710615161/locations/us-central1/workflows/myFirstWorkflow/executions/ 138b31e1-f3bb-4ba7-a6da-008d0cb4a320
Retrieve the results of the workflow's execution:
gcloud workflows executions describe EXECUTION_ID --workflow myFirstWorkflow
Replace EXECUTION_ID with the execution ID
returned in the previous step.
The output should resemble the following:
argument: '{"firstName":"Sherlock","lastName":"Holmes"}'
endTime: '2021-09-09T15:15:00.869350639Z'
name: projects/316710615161/locations/us-central1/workflows/myFirstWorkflow/executions/138b31e1-f3bb-4ba7-a6da-008d0cb4a320
result: '"Hello, Sherlock Holmes!"'
startTime: '2021-09-09T15:15:00.839175480Z'
state: SUCCEEDED
workflowRevisionId: 000001-4f9
Congratulations! You have successfully created a Cloud Scheduler job
that automatically runs a workflow on a particular schedule.
Clean up
After you finish the tutorial, you can clean up the resources that you created so that they
stop using quota and incurring charges. The following sections describe how to delete or turn off
these resources.
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the Cloud Scheduler job
Go to the Cloud Scheduler page in the Google Cloud console.
Go to Cloud Scheduler
Select the checkbox next to your job.
Click Delete at the top of the page and confirm your deletion.
Delete the Workflows workflow
Go to the Workflows page in the Google Cloud console.
Go to Workflows
Select your workflow.
Click Delete at the top of the page; type your workflow's name, and
confirm your deletion.
Disable the App Engine app
Disabling an App Engine app stops your application from running
instances and serving requests while retaining application data and settings.
Go to the Application settings page in the Google Cloud console.
Go to Application settings
Click Disable application .
Follow the prompts.
What's next
Learn more about Workflows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
