---
title: "Use TensorFlow Enterprise with Deep Learning VM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tensorflow-enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm
  title: "Use TensorFlow Enterprise with Deep Learning VM \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
TensorFlow Enterprise
Guides
Send feedback
Use TensorFlow Enterprise with Deep Learning VM
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a brief overview of
Deep Learning VM Images
and describes how to get started using TensorFlow Enterprise with a
Deep Learning VM instance.
In this example, you create a
TensorFlow Enterprise Deep Learning VM instance,
connect to the instance using SSH, open
a JupyterLab notebook, and run a classification tutorial on using
neural networks with Keras.
Overview of Deep Learning VM
Deep Learning VM Images is a set of
virtual machine images optimized for data science and machine
learning tasks. All images come with key ML frameworks and tools
pre-installed. You can use them out of the box on instances with
GPUs to accelerate your data processing tasks.
Deep Learning VM images are available to support many combinations
of framework and processor. There are currently images supporting
TensorFlow Enterprise ,
TensorFlow, PyTorch, and generic high-performance computing,
with versions for both CPU-only and GPU-enabled workflows.
To see a list of frameworks available, see Choosing an
image .
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
Create a Deep Learning VM instance
To create a TensorFlow Enterprise Deep Learning VM instance,
complete these steps:
Go to the Deep Learning VM Cloud Marketplace
page in the Google Cloud console.
Go to the Deep Learning VM Cloud Marketplace
page
Click Launch on Compute Engine . If you see a project selection window,
choose the project in which to create the instance. If this is the first
time you've launched Compute Engine, you must wait for the initial API
configuration process to complete.
On the New Deep Learning VM deployment page, enter a
Deployment name . This will be the root of your virtual machine name.
Compute Engine appends -vm to this name when creating your instance.
Under Number of GPUs , select None . You won't need them
to complete the instructions in this guide.
Note: If you plan to use GPUs with your TensorFlow Enterprise instance,
check the quotas page
to ensure that you have enough GPUs available in your project. If GPUs
are not listed on the quotas page, or you require additional GPU quota,
you can request a quota increase. See Requesting additional
quota on the
Compute Engine Resource Quotas page.
Under Framework , select TensorFlow Enterprise 2.3 (CUDA 11.0) .
For this example, you can leave the remaining settings as they are.
Click Deploy .
You've just created your first instance of a Deep Learning VM.
After the instance is created, the Deployment
Manager opens. This is where you can
manage your Deep Learning VM instance and other deployments.
Connect with SSH, open a notebook, and run a classification tutorial
Complete these steps to set up an SSH connection to your
Deep Learning VM instance, open a JupyterLab notebook,
and run a tutorial on using neural networks with Keras:
To complete these steps, you can use either
Cloud Shell or any
environment where the Google Cloud CLI can be installed.
You can use the gcloud CLI to interface with your instance.
If you want to use Cloud Shell, in Google Cloud,
in the upper-right corner, click the Activate Cloud Shell
button.
If you want to use gcloud CLI, download and
install Google Cloud CLI on your local machine.
In Cloud Shell
or in a local terminal window, use the following command to
create an SSH connection to your instance.
Replace my-project-id , my-zone ,
and my-instance-name with the relevant information.
gcloud compute ssh --project my-project-id --zone my-zone \
my-instance-name -- -L 8080 :localhost:8080
Note: To find your project ID, click the project name at the top of
the Google Cloud console. To find your zone, click your instance
in the Deployment
Manager .
In your local browser, visit http://localhost:8080 to access a
JupyterLab notebook that is included in your instance by default.
In the notebook, on the left, double-click tutorials to
open the folder, and navigate to and open
tutorials/tf2_course/01_neural_nets_with_keras.ipynb .
Click the run button
play_arrow to
run cells of the tutorial.
What's next
Learn more about
Deep Learning VM .
Learn more about the Deep Learning VM
community ,
where you can discuss and
ask questions about Deep Learning VM.
Get started using TensorFlow Enterprise with
Deep Learning Containers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
