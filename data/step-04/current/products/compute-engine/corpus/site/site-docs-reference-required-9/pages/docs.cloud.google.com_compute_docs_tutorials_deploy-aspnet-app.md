---
title: "Getting started with .NET on Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/deploy-aspnet-app
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/general-purpose-machines
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/deploy-aspnet-app
  title: "Getting started with .NET on Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
.NET
Send feedback
Getting started with .NET on Compute Engine
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to get started with Compute Engine.
Follow this tutorial by deploying a Hello World .NET web
app to Compute Engine. For help getting started with App Engine, see
the App Engine standard environment .
Objectives
Deploy a Hello World sample app to a single Compute Engine instance.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
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
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install
.NET
Core SDK 2.1 or later on your local machine running
Microsoft Windows .
Install
Web Deploy
3.6 or later on your local machine running
Microsoft Windows .
Running the app locally
Download and unzip or clone the sample repository from github:
git clone https://github.com/GoogleCloudPlatform/getting-started-dotnet.git
In a PowerShell window, go into the HelloWorld directory:
cd getting-started-dotnet\HelloWorld
Start a local web server:
dotnet run
Open a web browser to localhost:8080 .
In your web browser, you see some Hello World text, served from your
local machine.
When you're ready to move on, stop the local web server by pressing
Control+C .
Deploying to a single instance
This section walks you through running a single instance of your app
on Compute Engine.
Create and configure a Compute Engine instance
From Google Cloud Marketplace, you can launch an instance of Windows running Microsoft IIS on Compute Engine.
In the Google Cloud console, go to the ASP.NET Framework Cloud Marketplace page.
Go to Cloud Marketplace
Click Launch .
Leave the settings set to their default values, and click Deploy .
Wait for the Compute Engine instance to deploy. It usually
takes about 5 minutes to deploy.
To display resource information, click VM instance .
To edit the VM instance, click Manage Resource .
Click Set Windows password , and then make a note of the username.
Copy the new Windows password, and then click Close .
In the VM instance details page, make a note of the external IP address.
On your local Windows machine, edit the file HelloWorld/Properties/PublishProfiles/ComputeEngine.pubxml .
Enter your VM instance's external IP address between <MSDeployServiceURL>
and </MSDeployServiceURL> . For example, <MSDeployServiceURL>203.0.113.22</MSDeployServiceURL>
Enter the instance's username that you previously noted between <UserName> and </UserName> .
Save your changes to the ComputeEngine.pubxml file.
In a PowerShell window, publish your app to the Compute Engine instance:
dotnet publish -c Release `
/p:PublishProfile=Properties\PublishProfiles\ComputeEngine.pubxml `
"/p:Password= YOUR-PASSWORD "
Replace YOUR-PASSWORD with the password you previously copied.
Open a web browser to your instance's external IP address.
In your web browser, you see some Hello World text, served from your
Compute Engine instance.
Manage and monitor an instance
You can use the Google Cloud console to monitor and manage your instance.
To view all of the logs generated by your Compute Engine resources,
go to the Logs Explorer page.
Go to Logs Explorer
Cloud Logging is automatically configured to gather logs from
various common services, including syslog .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
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
Delete the individual resources
gcloud compute instances delete my-app-instance --zone = YOUR_ZONE --delete-disks = all
gcloud compute firewall-rules delete default-allow-http-80
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
For other .NET resources for building your apps, see the following:
Manage and monitor your Instance Group deployment at
Compute Engine > Instance groups .
Manage your load balancing configuration, including URL maps and backend
services, at
Network services > Load balancing .
Deploy an app to Google Kubernetes Engine
Explore other Google Cloud services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
