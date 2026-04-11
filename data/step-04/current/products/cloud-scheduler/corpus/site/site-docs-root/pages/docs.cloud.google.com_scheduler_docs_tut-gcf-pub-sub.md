---
title: "Schedule an event-driven Cloud Run function \_|\_ Cloud Scheduler \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/tut-gcf-pub-sub
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/tut-gcf-pub-sub
  title: "Schedule an event-driven Cloud Run function \_|\_ Cloud Scheduler \_|\_\
    \ Google Cloud Documentation"
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
Schedule an event-driven Cloud Run function
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to trigger an event-driven Cloud Run function
using Cloud Scheduler and by targeting a Pub/Sub topic. Use an
event-driven function when your function should be triggered directly in
response to events within your Google Cloud project, such as messages on a
Pub/Sub topic or changes in a Cloud Storage bucket.
Note that you can also schedule an HTTP function
by targeting your function's HTTP endpoint. Use an HTTP function when
you need your function to have a URL endpoint and respond to HTTP requests, such
as for webhooks. For more information, see
Types of Cloud Run functions .
Scheduling the execution of a Cloud Run function is a common
use case for Cloud Scheduler. In this tutorial, you will:
Create a simple Cloud Run function that subscribes to a
Pub/Sub topic.
Create a Cloud Scheduler job that publishes a message to the
Pub/Sub topic.
Run the Cloud Scheduler job.
Verify that the Cloud Run function was triggered by the
Cloud Scheduler job.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Run functions
Cloud Scheduler
Pub/Sub
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build, Cloud Functions, Cloud Run Admin, Cloud Scheduler, Eventarc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Cloud Run > Cloud Run Invoker role to the service account.
To grant the role, find the Select a role list, then select
Cloud Run > Cloud Run Invoker .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build, Cloud Functions, Cloud Run Admin, Cloud Scheduler, Eventarc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Cloud Run > Cloud Run Invoker role to the service account.
To grant the role, find the Select a role list, then select
Cloud Run > Cloud Run Invoker .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Note that you must grant the Cloud Run Invoker role because
in Cloud Run functions (2nd gen) ,
invocation permissions are available by managing the underlying
Cloud Run service.
By default, Cloud Run functions uses the automatically created
default Compute Engine service account
for its runtime service account. You can use this service account to try out
this tutorial. However, depending on your organization policy configuration, the
default service account might not automatically be granted the Editor role on
your project. If that is the case, you must
grant the service account
the following roles:
Artifact Registry Writer ( roles/artifactregistry.writer )
Logs Writer ( roles/logging.logWriter )
Storage Object Viewer ( roles/storage.objectViewer )
Create an event-driven Cloud Run function
Create an event-driven function that is triggered directly in response to events
within your Google Cloud project; in this case, a message published to a
Pub/Sub topic.
In the Google Cloud console, go to the Cloud Run functions
page.
Go to Cloud Run functions
Click add_box
Create function .
In the Basics section, do the following:
In the Environment list, select 2nd gen .
Enter a name for your function.
In the Region list, select a region.
In the Trigger section, do the following:
In the Trigger type list, select Cloud Pub/Sub .
In the Cloud Pub/Sub topic list, select an existing topic or
to create a new topic, click Create a topic . Note the topic's name as
you will need it in a subsequent step.
Click More options .
The Eventarc trigger panel opens.
In the Eventarc trigger panel, do the following:
If you are prompted to allow the Pub/Sub service to create
the identity tokens it needs to invoke the function, click Grant .
In the Service account list, select the service account you
previously created.
Accept the other defaults.
Click Save trigger .
The Eventarc trigger panel closes.
Accept the other defaults and click Next .
Don't modify the default runtime language and sample code. The code does
not use any cloud services and does not need additional permissions enabled.
Click Deploy .
Create a Cloud Scheduler job
Create a Cloud Scheduler job with a Pub/Sub target.
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
Click Click add_box
Create job .
Enter a name for your job.
In the Region list, select a region.
Specify the frequency for your job, using a unix-cron format:
30 16 * * 7
For more information, see
Cron job format and time zone .
In the Timezone list, select a time zone.
Click Continue .
In the Target type list, select Pub/Sub .
Select the Pub/Sub topic you created earlier.
In the Message body field, enter a string to be sent to your
Pub/Sub target topic. For example: "Hello world!"
Click Create .
You have created a cron job that sends a message to your Pub/Sub
topic at 16:30 on Sundays. Your Cloud Run function is subscribed to that
topic.
Run your Cloud Scheduler job
You can now run the job you created.
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
Select the checkbox for the job that you created and click Force run .
When it is initially invoked, the first job created in a project can take a
few minutes to configure and run.
After the job runs, the Status of last execution should indicate
Success .
Verify the results in Cloud Run functions
You can verify that your Cloud Run function is successfully triggered
and executed by your cron job.
In the Google Cloud console, go to the Cloud Run functions page.
Go to Cloud Run functions
Click the function name.
The Function details page opens and the Invocations/Second graph
shows your first invocation of the function.
Click the Logs tab.
You should see a log entry similar to Hello, YOUR_STRING !
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete project
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
Delete tutorial resources
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
Select the checkbox next to your job.
Click delete Delete and confirm your
deletion.
In the Google Cloud console, go to the Pub/Sub page.
Go to Pub/Sub
Select the checkbox next to your topic.
Click delete Delete and confirm your
deletion.
In the Google Cloud console, go to the Cloud Run functions page.
Go to Cloud Run functions
Select the checkbox next to your function.
Click delete Delete and confirm your
deletion.
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select the checkbox next to the service account you created.
Click delete Delete and confirm your
deletion.
What's next
Use Cloud Scheduler to trigger Cloud Run on a schedule
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
