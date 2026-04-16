---
title: "Quickstart: Schedule a managed notebooks run \_|\_ Vertex AI Workbench \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/schedule-managed-notebooks-run-quickstart
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/schedule-managed-notebooks-run-quickstart
  title: "Quickstart: Schedule a managed notebooks run \_|\_ Vertex AI Workbench \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Vertex AI Workbench
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Schedule a managed notebooks run
Vertex AI Workbench managed notebooks is
deprecated . On
April 14, 2025, support for
managed notebooks ended and the ability to create managed notebooks instances
was removed. Existing instances will continue to function until
March 30, 2026, but patches, updates, and upgrades
won't be available. To continue using Vertex AI Workbench, we recommend that you
migrate
your managed notebooks instances to Vertex AI Workbench instances .
This page shows you how to use
the Vertex AI Workbench managed notebooks executor
to run a Python notebook file on an hourly schedule.
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
Enable the Notebooks and Vertex AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Notebooks and Vertex AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To ensure that your instance's service account has the necessary
permissions to interact with the Vertex AI Workbench executor,
ask your administrator to grant the
following IAM roles to your instance's service account on the project:
Important: You must grant these roles
to your instance's service account, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
Notebooks Viewer ( roles/notebooks.viewer )
Vertex AI User ( roles/aiplatform.user )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give your instance's service account
the required permissions through custom
roles or other predefined
roles .
Create a managed notebooks instance and example notebook file
Create a managed notebooks
instance .
Open JupyterLab .
Open a new notebook file .
In the first cell of the notebook file, enter the following:
# Import datetime
import datetime
# Get the time and print it
datetime . datetime . now ()
print ( datetime . datetime . now ())
To make sure your notebook file is saved, select
File > Save Notebook .
Schedule a run
In the Google Cloud console, go to the Managed notebooks page.
Go to Managed notebooks
Next to the managed notebooks instance
that you want to use,
click Open JupyterLab .
Your managed notebooks instance opens JupyterLab.
In the folder File Browser ,
double-click the example notebook file to open it.
Click the Execute button.
In the Submit notebooks to Executor dialog, in the Type field,
select Schedule-based recurring executions .
By default, the executor runs your notebook file
every hour at the 00 minute of the hour.
In Advanced options ,
select the Region where you want to run your notebook.
In the Cloud Storage bucket field, enter a name for your bucket,
and then click Create and select .
The executor stores your notebook output
in the Cloud Storage bucket.
Click Submit .
Your notebook file runs automatically
on the schedule that you set.
Note: If your managed notebooks instance is shut down, the
executor still runs your notebook file on schedule.
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
View, share, and import an executed notebook file
By using your managed notebooks instance's JupyterLab interface,
you can view your notebook output, share the results with others,
and import the executed notebook file into JupyterLab.
Note: To use the Google Cloud console to view and share execution results,
on the Executions page,
click Executions .
View the execution results
In JupyterLab's navigation menu, click the
Notebook Executor button.
Click the Executions tab.
Under the execution that you want to view, click View result .
Executor opens your result in a new browser tab.
Share the execution results
In your managed notebooks instance's
JupyterLab user interface,
in the navigation menu, click the
Notebook Executor button.
Click the Executions tab.
Next to the execution that you want to share,
click the more_vert options menu,
and select Share execution result .
Follow the directions in the dialog
to grant users access to the execution result.
Import the executed notebook into JupyterLab
In your managed notebooks instance's
JupyterLab user interface,
in the navigation menu, click the
Notebook Executor button.
Click the Executions tab.
Next to the execution that you want to import,
click the more_vert options menu,
and select Import executed notebook .
If the Select Kernel dialog appears,
select the kernel that you want to open the notebook.
The executor opens the executed notebook file
in JupyterLab, and stores this notebook file in
the JupyterLab File Browser in a folder named imported_notebook_jobs .
View or delete a schedule
You can view and delete schedules by using either the Google Cloud console or
your managed notebooks instance's JupyterLab user interface.
View a schedule
View a schedule to see the frequency settings of the schedule
or to view the five most recent results of the notebook file execution.
Console
In the Google Cloud console, go to the Schedules page.
Go to Schedules
Select the Region where you want to see schedules.
For the Schedule details page that you want to open,
click its schedule name.
On the Schedule details page, you can view the schedule's last
five executions.
Next to an execution name, click View result to open
the executed notebook file.
Executor opens your result in a new browser tab.
JupyterLab
In your managed notebooks instance's
JupyterLab user interface,
in the navigation menu, click the
Notebook Executor button.
Click the Schedules tab.
Under the execution that you want to view, click View latest
execution result .
Executor opens your result in a new browser tab.
Delete a schedule
Deleting a schedule doesn't delete the executions that were
generated from that schedule.
Console
In the Google Cloud console, go to the Schedules page.
Go to Schedules
Select the Region that contains the schedule
that you want to delete.
Select the schedule that you want to delete.
Click delete Delete .
JupyterLab
In your managed notebooks instance's
JupyterLab user interface,
in the navigation menu, click the
Notebook Executor button.
Click the Schedules tab.
At the end of the schedule name, click the
open_in_new Open in
new icon. The Schedule details page for that schedule opens in the
Google Cloud console.
Click delete Delete .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the instance
In the Google Cloud console, go to the Managed notebooks page.
Go to Managed notebooks
Select the Region that contains your instance.
Select the managed notebooks instance that you want
to delete.
Click delete Delete .
Delete the project
If you used resources outside of
your managed notebooks instance,
such as the Cloud Storage bucket required
for creating a schedule,
you might want to delete your project to avoid incurring additional charges.
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
What's next
Vertex AI Workbench managed notebooks instances are deprecated. To
schedule a notebook run in a Vertex AI Workbench instance, see
Schedule a notebook run .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
