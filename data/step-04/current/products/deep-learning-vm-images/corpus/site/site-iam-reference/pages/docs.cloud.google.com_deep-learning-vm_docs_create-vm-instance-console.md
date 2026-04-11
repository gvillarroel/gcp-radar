---
title: "Quickstart: Create a Deep Learning VM instance by using the Google Cloud console\
  \ \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console
  title: "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\
    \ console \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Deep Learning VM Images
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Deep Learning VM instance by using the Google Cloud console
This page shows you how to create a Deep Learning VM Images instance
by using Google Cloud Marketplace in the Google Cloud console.
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
Note: This quickstart assumes that all settings will remain at their defaults.
For more information about the VM options available to you, see Choose an
Image .
Create a new instance
Go to the Deep Learning VM Cloud Marketplace page in
the Google Cloud console.
Go to the Deep Learning VM Cloud Marketplace page
Click Get started . If you see a project selection window,
choose the project in which to create the instance. If this is the first
time you've launched a Compute Engine VM, you must wait for the initial API
configuration process to complete.
On the New Deep Learning VM deployment page, enter a
Deployment name . This will be the root of your virtual machine name.
Compute Engine appends -vm to this name when naming your instance.
Select a Zone , or keep the default.
Under Machine type , select the specifications that you
want for your VM, or keep the default.
Under GPUs , select the GPU type and Number of GPUs ,
or keep the default values.
If you don't want to use GPUs,
click the Delete GPU button.
You have the option to select Enable access to JupyterLab via URL
instead of SSH (Beta) . Enabling this Beta feature lets you
access your JupyterLab
instance using a URL. Anyone who is in the Editor or Owner role in your
Google Cloud project can access this URL. This feature
only works in the United States, the European Union, and Asia.
Select a machine learning Framework , or keep the default.
Click Deploy .
You've just created your first Deep Learning VM instance.
After the instance is deployed, the Google Cloud console opens
the Deployment Manager page
where you can manage your
Deep Learning VM instances and other deployments.
Access your new instance
Once you've created your Deep Learning VM instance, it starts
automatically. To access it:
Go to the VM Instances page in the Google Cloud console.
Go to the VM
Instances page
Under the Name column,
click the name of your virtual machine instance.
In the Remote Access section, click the first drop-down list and
choose how you'd like to access the instance. You can choose to interact
with a graphical user interface or on the command line.
Compute Engine will propagate your SSH keys and create your user. For more
information, see Connecting to
Instances .
Stop the instance
Go to the VM Instances page in the Google Cloud console.
Go to the VM
Instances page
Select the checkbox next to the Deep Learning VM instance.
Click Stop .
Start the instance
After an instance is created, the instance starts automatically. To start the instance
manually when it's stopped:
Go to the VM Instances page in the Google Cloud console.
Go to the VM
Instances page
Select the checkbox next to the Deep Learning VM instance.
Click Start .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Go to the Deployments page in the Google Cloud console.
Go to the
Deployments page
Select the checkbox next to the Deep Learning VM deployment.
Click Delete .
What's next
Read a more in-depth description of this process in Creating a
Deep Learning VM instance from
Google Cloud Marketplace .
Learn more about Images, image families, and
instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
