---
title: "Quickstart: Create a Colab Enterprise notebook by using the Google Cloud console\
  \ \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/colab/create-console-quickstart
  title: "Quickstart: Create a Colab Enterprise notebook by using the Google Cloud\
    \ console \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Colab Enterprise notebook by using the Google Cloud console
Learn how to create a Colab Enterprise notebook and run its code
on a default runtime by using the Google Cloud console.
This page also describes how to rename, import, and delete a notebook.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to create a Colab Enterprise notebook and run the notebook's code on a runtime,
ask your administrator to grant you the
Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Create a notebook
To create a Colab Enterprise notebook
by using the Google Cloud console:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region where you want to
create your notebook.
Click add_box New
notebook .
Vertex AI creates and opens your notebook.
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Run code in a default runtime
To run a Colab Enterprise notebook's code
on the default runtime, do the following:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open.
Hold the pointer over the code cell that you want to run,
and then click the
Run cell button.
If this is your first time connecting to a runtime with
end-user credentials enabled, a Sign in dialog appears.
The default runtime has end-user credentials enabled to make it easier
to run code that interacts
with Google Cloud .
To grant Colab Enterprise access to your user credentials,
complete the following steps:
In the Sign in dialog, click your user account.
Select See, edit, configure, and delete your
Google Cloud data... to grant Colab Enterprise
access to your user credentials.
Click Continue .
After your runtime starts, Colab Enterprise connects
to the runtime and runs the code in the cell.
Rename your notebook
To rename a Colab Enterprise notebook:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Next to the notebook that you want to rename, click the
more_vert Actions menu,
and then select Rename .
In the Rename notebook dialog,
change the name of the notebook, and then click Rename .
Import a notebook
To import a notebook into Colab Enterprise:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region where you want to
import your notebook.
Click
upload Import .
In the Import notebooks dialog, select an
Import source .
If you selected:
Your computer , navigate to and select a notebook
file to import.
Cloud Storage , navigate to and select a notebook
in Cloud Storage.
URL , enter the URL of the notebook file to import.
The notebook must be fewer than 20 MB.
To add another notebook, click
add_box Add
notebook .
After you've added the notebooks that you want to import,
click Import .
Colab Enterprise imports your notebook files.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources,
or keep the project and delete the individual resources.
Delete the project
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
Delete your notebook
To delete a Colab Enterprise notebook:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains
the notebook that you want to delete.
Next to the notebook that you want to delete, click the
more_vert Actions menu,
and then select
delete Delete
notebook .
In the Delete notebook dialog,
click Confirm .
What's next
Read the Introduction to
Colab Enterprise .
To find a notebook that can help you get your project started quickly,
see the notebook gallery .
Connect to a runtime .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
