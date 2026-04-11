---
title: "Quickstart: Set up workstations \_|\_ Cloud Workstations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console
  title: "Quickstart: Set up workstations \_|\_ Cloud Workstations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up workstations
Learn how to set up and use workstation clusters, workstation configurations,
and workstations. Check the prerequisites for this quickstart
before you begin ,
and then follow these steps:
Create a workstation cluster
Create a workstation configuration
Create and launch a workstation
If you no longer need the resources created in this quickstart,
make sure that you
clean up
to avoid incurring extra costs.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
This guide covers steps for administrators to set up Cloud Workstations and for developers
to use the workstations.
To set up Cloud Workstations, complete the following steps:
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Workstations API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to manage and use workstations,
ask your administrator to grant you the
following IAM roles:
Create and manage workstation clusters and configurations:
Cloud Workstations Admin ( roles/workstations.admin )
on the project
Create workstations using a configuration:
Cloud Workstations Creator ( roles/workstations.workstationCreator )
on the project or the workstation configuration
Use a workstation:
Cloud Workstations User ( roles/workstations.user )
on the workstation. This is automatically granted on workstations you create.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For a detailed overview of all Cloud Workstations roles, see
Access control with IAM .
Create a workstation cluster
The first step is to create a workstation cluster .
Workstation clusters define a group of workstations in a particular region,
manage workstations during their lifecycle, and provide configurable
network connectivity.
Workstation clusters aren't related to Google Kubernetes Engine (GKE) clusters.
To create a workstation cluster, follow these steps:
In the console,
navigate to the Cloud Workstations >
Cluster management page.
Go to Cluster management
From the workstations Cluster management page, click
add_box Create .
In the Name field, enter test-cluster as the name of your
workstation cluster.
Select the Region that is closest to you.
Skip the Network settings .
Click Create , which begins the cluster creation process.
Workstation cluster creation can take up to 20 minutes, but in most
cases is only needed once.
Create a workstation configuration
This quickstart takes you through the most basic workstation configuration.
To get started quickly, accept the defaults for defining machine settings,
for customizing the environment, and for adding users.
To configure the basics of a workstation configuration, follow these steps:
In the console,
navigate to Cloud Workstations >
Workstation configurations .
Go to Workstation configurations
From the Workstation configurations page, click
add_box Create .
In the Name field, enter test-configuration as the name of your
workstation configuration.
Choose test-cluster from the list of available workstation Clusters
and click Continue .
If no workstation cluster is available, make sure that you completed the steps to=
Create a workstation cluster .
For Quick start workstations , select Disabled for lower cost.
If you were customizing a workstation configuration for your team, you might
define Machine settings , customize Environment settings , and add
users to the IAM policy . For this exercise, you can skip those steps.
To create your workstation configuration, click Create .
For more information about creating a workstation configuration with the options
that were skipped in this quickstart, see the detailed section about
workstation configurations .
Create and launch a workstation
A workstation is a preconfigured development environment that
administrators or platform teams define in a workstation configuration.
To create a workstation, follow these steps:
In the Google Cloud console, navigate to the
Cloud Workstations > Workstations
page.
Go to Workstations
Click add_box Create .
The Create link might be disabled if there aren't any
workstation configurations in the project or if you don't have permissions
to view them.
Ask your organization's Cloud Workstations Admin to create a
workstation configuration for you.
Accept the default workstation Name .
Click the arrow_drop_down expander
arrow in the Configuration field and select the
workstation configuration to define your workstation.
For example, if you named your workstation configuration
test-configuration in the prior step, select that from the list.
Click Create
to create your workstation.
Now that you have created a workstation, launch it to begin development:
Click Workstations .
In the list of workstations, find your workstation name and
click Launch .
The workstation connects to port 80 by default.
If the workstation is stopped, clicking Launch also starts it.
Tip: You can bookmark the launch page to restart and access your
workstation.
The following example shows the welcome page for the Cloud Workstations
base editor .
Your page might look different, depending on how you define your
workstation configuration:
For more information about connecting through SSH, see
SSH support .
For more information about connecting to web apps running on your
workstation, see
Access HTTP servers running on a workstation .
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used on this page, make sure that you delete resources that you no longer need.
To delete a Google Cloud project from the Google Cloud console or from the
gcloud CLI:
Console
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
gcloud
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
For more information about deleting other resources,
such as workstation clusters, workstation configurations, and workstations,
see Delete resources .
What's next
Use the
Cloud Workstations base editor .
Learn more about configuring additional options in your
workstation configuration .
Use Cloud Workstations with JetBrains IDEs
such as IntelliJ IDEA Ultimate and PyCharm Professional.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
