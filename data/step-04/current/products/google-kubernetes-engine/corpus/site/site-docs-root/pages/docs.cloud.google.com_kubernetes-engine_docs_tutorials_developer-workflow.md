---
title: "Deploy and update from an IDE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/developer-workflow
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/developer-workflow
  title: "Deploy and update from an IDE \_|\_ Kubernetes Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Deploy and update from an IDE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
If you develop applications to run in Google Kubernetes Engine, you can use an IDE and
the Cloud Code plugin to simplify key development tasks, such as
testing and debugging locally and deploying to a test cluster.
Objectives
Learn how to do the following development tasks in Cloud Shell Editor,
an online demonstration IDE:
Create a sample Kubernetes app.
Run, update, and view logs for the app in your development environment.
Deploy the app to a GKE cluster.
You can follow a similar process in your own IDE if you
install Cloud Code .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Costs
In this document, you use the following billable components of Google Cloud:
GKE
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Create a Kubernetes cluster.
Create a cluster and deploy a workload
shows you how.
Choose a Google Cloud project and cluster
When you deploy your app to GKE later on in this tutorial, you
will need to specify a Google Cloud project and a GKE cluster.
Go to the GKE Clusters page.
Go to Clusters
Choose a project that contains a GKE cluster.
Note the name of the project and cluster.
You'll need this information later.
Create an app in Cloud Shell Editor
In the Google Cloud console, open Cloud Shell
by clicking terminal Cloud Shell
in the task bar.
Click
Open
Editor .
Wait for Cloud Shell Editor to initialize.
In Cloud Shell Editor, click View > Command Palette .
Search for Cloud Code: New Application and click it.
Select Kubernetes Application , then select Go: Hello World .
Each language framework provides slightly different experiences, and this
tutorial describes the features available for Go.
In the Save dialog, click Create new application .
Cloud Shell Editor reloads and shows your app source files in the Explorer
view.
The app consists of:
A basic go-hello-world web app,
main.go ,
that returns a templated "It's running!" response to all received requests.
A Kubernetes Deployment specification,
hello.deployment.yaml .
A Kubernetes Service specification that defines a load balancer for the app,
hello.service.yaml .
A Skaffold file that handles the workflow for
building and deploying the app, skaffold.yaml .
Run the app in your development environment
When possible, run apps in your development environment before deploying
to GKE. This can help you identify any potential issues without
using Google Cloud quota.
To run the app in your Cloud Shell Editor environment:
In Cloud Shell Editor, click Terminal > New Terminal .
Start a cluster by running the following command:
minikube start
minikube is a lightweight Kubernetes implementation that creates a VM in
your local environment and deploys a simple cluster containing only one node.
It might take a minute to set up the minikube cluster.
If prompted to authorize Cloud Shell to make Cloud API calls,
click Authorize .
After your minikube cluster is set up, a message similar to the following
appears:
Done! kubectl is now configured to
use "minikube" cluster...
After minikube is set up, build and run your app:
In the Cloud Shell Editor status bar, click
Cloud
Code .
Select Run on Kubernetes .
If prompted, confirm that you want to use the current minikube context.
Cloud Shell Editor builds your app and deploys it to the minikube cluster.
Watch the deployment status in the
Development
sessions view.
When the deployment is complete, a green check mark appears next to
Portforward URLs . The spinning icon appears next to
Stream Application Logs .
To view your app, look further down the Development sessions
pane and find Port Forward URLs > service .
Hold the pointer over
go-hello-world-external
and click open_in_new Open URL .
Edit your app
When you change a source file in your app, Cloud Shell Editor automatically
builds and deploys your app to the cluster that you're currently connected to.
In this case, you're connected to your minikube cluster.
To edit and redeploy the app to your local minikube cluster:
Modify your
main.go
file to print "It's redeployed!". The file saves automatically.
Watch the
Development
sessions view as your app is rebuilt and
deployed.
View your redeployed app as you did before:
In the Development sessions
pane, find Port Forward URLs > service .
Hold the pointer over
go-hello-world-external
and click open_in_new Open URL .
View app logs
In the Cloud Shell Editor menu bar, select View > Command Palette .
Search for Cloud Code: View Logs and click it.
The Logs Viewer opens.
In
Deployment ,
select go-hello-world .
This filters the Logs Viewer to only display logs for your go-hello-world app.
Switch to the tab with your app that shows "It's redeployed!" Reload the
page in the browser and then switch back to the Cloud Shell tab.
To view the newly generated logs in the Logs Viewer, click
refresh
Refresh .
Deploy your app to a GKE cluster
Add your GKE cluster to the list of clusters you can
deploy to:
In the Kubernetes
view, click add
Add a Cluster to the KubeConfig .
In the Choose a platform dialog, click Google Kubernetes Engine .
If prompted to enable the Google Cloud API, click Yes .
Wait for Cloud Shell Editor to find the clusters in your
Google Cloud project.
In the Create or choose a GKE cluster dialog, select
the name of the cluster you created, hello-world-cluster .
In the Cloud Shell Editor status bar, click
Cloud
Code and select Run on Kubernetes .
When prompted to select a context for your deployment request, choose
Use current context , which is set to your GKE cluster.
In the Choose image repository dialog, select gcr.io/ PROJECT_NAME .
Cloud Shell Editor builds your app into a container and stores the container
in the repository you selected.
Watch the
Development
sessions view as your app is rebuilt and
deployed.
To view detailed log messages as your app is being deployed to GKE,
click the Deploy to Cluster node in the Development sessions view.
To view your running app:
Close the view by clicking the Development sessions heading.
Open the Kubernetes
view.
Expand your GKE cluster.
Go to Namespaces > default > Services > go-hello-world-external > External IPs .
Hold the pointer over the IP address and click
open_in_new Open URL .
You have successfully created and deployed a GKE app from an IDE.
What's next
View code samples demonstrating the usage of
Google Cloud products
Install Cloud Code in your IDE
Clean up to avoid billing charges .
If you plan to take additional tutorials, wait until you finish those tutorials
before you clean up. You can use the sample Kubernetes cluster in most
GKE tutorials.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
