---
title: "Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/idle-shutdown
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/idle-shutdown
  title: "Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Idle shutdown
Colab Enterprise runtimes shut down after 180 minutes of
inactivity by default. This page describes the idle shutdown feature and how to
change the default idle shutdown settings or turn the feature off
when you create a runtime template.
Overview
To help manage costs, Colab Enterprise runtimes
shut down after being idle for a specific time period by default.
You can change the amount of time or turn this feature off when you create a
runtime template.
After you create a runtime template, its configuration can't be changed.
Therefore, you can't change a runtime or runtime template's
idle shutdown settings. To use a runtime with different idle shutdown settings,
you must create a runtime template with the settings that you want, and then
use a runtime generated from that runtime template.
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
you need to create a runtime in Colab Enterprise,
ask your administrator to grant you the
Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin )
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
Create a runtime template with specific idle shutdown settings
To create a runtime template with specific idle shutdown settings, you can
use the Google Cloud console or the Google Cloud CLI.
Console
To create a runtime template with specific idle shutdown settings:
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
Click add_box New
template .
The Create new runtime template dialog appears.
In the Runtime basics section, enter
a Display name .
In the Region menu, select the region where you want
your runtime template.
To change the idle shutdown settings, click the
Configure compute section, and complete the
following step.
In the Idle shutdown section:
To turn off idle shutdown, clear
Enable idle shutdown .
To change the inactivity time period, in
Time of inactivity before shutdown (Minutes) ,
change the number to the number of minutes of inactivity that
you want. In the Google Cloud console, this setting can be set
to any integer value from 10 to 1440.
In the Environment section, select an Environment .
The default is Latest (currently Python 3.12).
Optional: In the Post-startup script field, enter the URI for a
post-startup script. For more information about using a post-startup script, see
Use a post-startup script .
Optional: Under the post-startup script URL, select your post-startup script's behavior. The
default behavior is Run once . For more information, see
Post-startup script behavior .
Optional: To add an environment variable, click
add Add env variable ,
and then enter a Key and Value pair.
To add more environment variables, repeat this step.
Click Continue .
Complete the rest of the creation dialog.
Click Create to finish creating the runtime template.
Your runtime template appears in the list on
the Runtime templates tab.
gcloud
Before using any of the command data below,
make the following replacements:
DISPLAY_NAME : the display name of your runtime template.
INACTIVITY_DURATION : the duration of inactivity before the
runtime shuts down. An input of 0s turns off the idle shutdown feature. The
valid range of values is from 10 minutes ( 10m ) to 24 hours ( 24h ).
PROJECT_ID : your project ID.
REGION : the region where you want your runtime template.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates create --display-name = DISPLAY_NAME \
--idle-shutdown-timeout = INACTIVITY_DURATION \
--project = PROJECT_ID \
--region = REGION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates create --display-name = DISPLAY_NAME `
--idle-shutdown-timeout = INACTIVITY_DURATION `
--project = PROJECT_ID `
--region = REGION
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates create --display-name = DISPLAY_NAME ^
--idle-shutdown-timeout = INACTIVITY_DURATION ^
--project = PROJECT_ID ^
--region = REGION
For more information about the command for creating a
runtime template from the command line, see the gcloud CLI
documentation .
How idle shutdown works
Your runtime shuts down when the following conditions are met:
There's no kernel activity for the specified time period.
The runtime isn't connected to a notebook.
To disconnect a runtime from a notebook, close the notebook. Leaving a
notebook open while connected to a runtime prevents the runtime
from shutting down.
For information on charges generated by runtimes, see
Runtime charges .
What's next
Learn more about runtimes and runtime templates .
Learn how to create a runtime based on
a runtime template.
To find a notebook that can help you get your project started quickly,
see the notebook gallery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
