---
title: "Create and deploy a containerized web app \_|\_ Cloud Shell \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/shell/docs/deploy-gke-app
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/deploy-gke-app
  title: "Create and deploy a containerized web app \_|\_ Cloud Shell \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Guides
Send feedback
Create and deploy a containerized web app
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to create a containerized web app using the Cloud Shell Editor, test
it locally, and then deploy it to a Google Kubernetes Engine (GKE) cluster.
To follow step-by-step guidance for this task directly in the
Cloud Shell Editor, click Guide me :
Guide me
Before you begin
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
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
Create your web app
Use the Cloud Shell Editor as your environment for creating your app. The
editor comes preloaded with the tools needed for Cloud development.
To create your app:
Launch the Cloud Shell Editor .
If prompted to authorize Cloud Code to use your credentials to
make a Google Cloud API call, click Authorize .
Launch the Cloud Code menu from the status bar.
Select New Application .
Select Kubernetes application as the type of sample app.
From the list of sample Kubernetes apps, select Go:Hello World .
Select a folder for your app location and then click Create New
Application .
Cloud Shell Editor loads your app in a new workspace. After it reloads, your
app is accessible with the
explorer
view .
Test your app in a local cluster
Now that you've created your app, you can run it in a local Kubernetes cluster
in Cloud Shell:
To open a Cloud Shell terminal, click Terminal > New Terminal .
To start your local minikube cluster, from the
terminal
command prompt, run the following command:
minikube start
It might take a minute to set up the minikube cluster.
If prompted to authorize Cloud Shell to make Cloud API calls,
click Authorize .
After your cluster is set up, a message similar to the following appears:
Done! kubectl is now configured to
use "minikube" cluster...
After the local cluster is configured, build and run this app:
Launch the
Cloud
Code menu from the status bar.
Select
Run on
Kubernetes .
If prompted, confirm that you want to use the current minikube context.
This process takes a few minutes and you can view the deployment status in
the
Development
sessions view.
Clicking different nodes in the Development sessions view displays log
excerpts pertaining to the selected deployment phase.
After your app finishes building and deploying, find the port forward node
for your service: In the Development sessions view, expand
Port Forward URLs > service >
go-hello-world-external .
To launch your app, hold the pointer over
go-hello-world-external
and then click open_in_new Open URL .
Edit your app
To understand the Hello World app's components, see the diagram in the app's
readme.md
file. At a high level, the app consists of:
A basic go-hello-world web app,
main.go ,
that returns a templated "It's running!" response to all received requests.
A load balancer go-hello-world-external service,
hello.service.yaml ,
that exposes the app by describing a
Kubernetes Service .
To modify the app:
Modify your
main.go
file to print "It's redeployed!". The file saves automatically.
Give your app a minute to finish building and deploying, and monitor your
app's progress as it's rebuilt using the
Development
sessions view.
After your app finishes building and deploying, find the port forward node
for your service: Development sessions > Port Forward URLs > service >
go-hello-world-external .
To launch your app, hold the pointer over
go-hello-world-external
and click open_in_new Open URL.
View app logs
To analyze your app while it's running, use the Log Viewer to monitor its logs:
Launch the Log Viewer by opening the command palette (accessible with
Ctrl / Cmd + Shift + P or View > Command Palette ) and then running
Cloud Code: View Logs .
This view allows you to filter and navigate the logs for your app.
Specify the
Deployment
filters to view the logs for your app, go-hello-world .
Switch to the tab with your app that shows "It's redeployed!" Reload the
page in the browser and then switch back to the Cloud Shell tab.
To view the newly generated logs in the Log Viewer, click
refresh
Refresh .
Create a Google Kubernetes Engine cluster
To create a new Google Kubernetes Engine cluster to deploy your app to:
Click Cloud
Code and then expand the Kubernetes section.
Click add
Add a Cluster to the KubeConfig and then click Google Kubernetes
Engine in the Quick pick menu.
When prompted to enable container.googleapis.com , click Yes .
Click + Create a New GKE Cluster .
Choose Standard as the cluster type.
Click Open to permit Cloud Shell to open the
Google Cloud console.
In Google Cloud console, use the project you created, set the zone to
us-central1-a , and set the cluster name to my-first-cluster .
Click Create . Cluster creation takes a few minutes.
After the cluster is created, in the Quick pick menu, click
Refresh .
After the name of your new cluster appears in the list, click the cluster
name. Your new cluster is added to the configuration and configured to be the
active context.
Deploy your app to a GKE cluster
To deploy your app to the new cluster:
From the
Cloud
Code menu, accessible using the status bar,
select
Run on
Kubernetes .
Confirm your newly created cluster as the context for your app.
Confirm the default option for your image registry.
Give your app a minute to finish building and deploying, and monitor your
app's progress as it's rebuilt using the
Development
sessions view.
After your app finishes building and deploying, find the port forward node
for your service: In the Development sessions view, expand
Port Forward URLs > service >
go-hello-world-external .
To launch your app, hold the pointer over
go-hello-world-external
and click open_in_new Open URL .
Cleaning up
To delete just the cluster you created for this quickstart:
Hold the pointer over your cluster name and then click
Open in Google Cloud console .
Click Delete and then click Delete .
To delete your project (and associated resources, including any clusters):
Go to the Projects page in the Google Cloud console:
Go to the Projects page
Select the project that you created for this quickstart and then click
Delete .
Type the project ID to confirm and then click Shut down .
This shuts down the project and schedules it for deletion.
What's next
Discover the features of the
Cloud Shell Editor interface .
Read about
debugging with the Cloud Shell Editor
and Cloud Shell Editor's additional support for Kubernetes
applications.
Deploy your applications to ARM64, AMD64, or mixed-architecture GKE clusters .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
