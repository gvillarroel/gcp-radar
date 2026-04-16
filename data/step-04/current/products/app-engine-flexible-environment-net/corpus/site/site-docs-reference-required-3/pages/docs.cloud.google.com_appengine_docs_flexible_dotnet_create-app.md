---
title: "Quickstart: Create a .NET app in the App Engine flexible environment \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/specifying-dependencies
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app
  title: "Quickstart: Create a .NET app in the App Engine flexible environment \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a .NET app in the App Engine flexible environment
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
Note: If you are deploying a new .NET web service to Google Cloud,
we recommend getting started with
Cloud Run .
This quickstart demonstrates how to create and deploy an app that displays a
short message.
You can use the sample application in this quickstart for any supported version of .NET, by specifying the runtime version
and operating system in your app.yaml file.
By default, App Engine uses the latest available LTS .NET version if you don't
specify a runtime version in your app.yaml file.
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
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles:
App Engine Admin ( roles/appengine.appAdmin )
on the project
Cloud Build Editor ( roles/cloudbuild.builds.editor )
on the project
Storage Object Admin ( roles/storage.objectAdmin )
on the project
Logs Viewer ( roles/logging.viewer )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the service account
Ask your administrator to grant the following roles for the App Engine default service account:
Artifact Registry Reader ( roles/artifactregistry.reader )
on the project
Cloud Build Service Account ( roles/cloudbuild.builds.builder )
on the project
Storage Object Viewer ( roles/storage.objectViewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Additional prerequisites
Initialize your App Engine app with your project and choose its region:
gcloud app create --project=[YOUR_PROJECT_ID]
When prompted, select the region
where you want to locate your App Engine application.
Caution : You cannot change an app's region
once it has been set.
Install the following on your local machine:
Install the .NET Core SDK, LTS version .
If you are using Visual Studio, you must use version 2015 or later. Images are available for ASP.NET Core apps written for .NET Core 1.0, 1.1, 2.0 and 2.1.
App Engine locations
App Engine is regional , which means the infrastructure that runs your apps is
located in a specific region, and Google manages it so that it is available
redundantly across
all of the zones within that region .
Meeting your latency, availability, or durability requirements are primary
factors for selecting the region where your apps are run. You can generally
select the region nearest to your app's users, but you should consider the
locations where App Engine is available
as well as the locations of the other
Google Cloud products and services that your app uses. Using services
across multiple locations can affect your app's latency as well as its
pricing .
You cannot change an app's region after you set it.
Note: Two locations, which are called europe-west and
us-central in App Engine commands and in the Google Cloud console,
are called europe-west1 and us-central1 , respectively,
elsewhere in Google documentation.
If you already created an App Engine application, you can view its
region by doing one of the following:
Run the gcloud app describe command.
Open the
App Engine Dashboard in the Google Cloud console .
The region appears near the top of the page.
OK
This quickstart assumes that you are familiar with building web apps
with C#.
Download the Hello World app
We've created a Hello World app for App Engine so you can quickly
get a feel for deploying an app to the Google Cloud.
The Hello World app is similar to the app created by Visual Studio when an empty
ASP.NET core app is created. The sample app adds an app.yaml file. The
app.yaml file is an App Engine configuration file that specifies your
runtime and other App Engine settings.
Clone the Hello World sample app repository to your local machine.
git clone https://github.com/GoogleCloudPlatform/dotnet-docs-samples
Alternatively, you can download the sample as a zip file and extract it.
Change to the directory that contains the sample code.
cd dotnet-docs-samples/appengine/flexible/HelloWorld
Run Hello World on your local machine
Run the following commands from the dotnet-docs-samples/appengine/flexible/HelloWorld/HelloWorld.Sample directory:
dotnet restore
dotnet run
In your web browser, go to http://localhost:5000 .
You can see the "Hello World" message from the sample app displayed in
the page. In your terminal window, press Ctrl+C to exit the
web server.
Deploy and run Hello World on App Engine
Run gcloud app deploy from the command line.
Launch your browser and view the app at
https:// PROJECT_ID . REGION_ID .r.appspot.com
gcloud app browse
This time, the page that displays the Hello World message is delivered by a
web server running on an App Engine instance.
Congratulations! You've deployed your first App Engine app to the
App Engine flexible environment!
If you encountered any errors deploying your application, check the
troubleshooting tips .
See the following sections for information about cleaning up as well as links to
possible next steps that you can take.
Clean up
To avoid incurring charges, you can delete your Google Cloud project to stop
billing for all the resources used within that project.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Learn the whole platform
Now that you know what it's like to develop and deploy App Engine apps,
you can explore the rest of Google Cloud. You already have the
Google Cloud CLI installed which gives you the tools to interact with
products like Cloud SQL, Cloud Storage, Firestore,
and more.
Learn about the App Engine flexible environment
Here are some topics to help continue your learning about App Engine:
An overview of App Engine
Request routing
Request handling
Managing instances
Hello World code review
Hello World is the simplest possible App Engine app, as it contains only
one service, has only one version, and all of the code is located within the
app's root directory. This section describes each of the app files in detail.
Program.cs
The Hello World app is a simple ASP.NET app:
var builder = WebApplication . CreateBuilder ( args );
var app = builder . Build ();
app . MapGet ( "/" , () = > builder . Configuration [ "My:Greeting" ]);
app . Run ();
app.yaml
The app.yaml
file describes the following configuration for your app:
Sets env: flex , indicating your app uses the
App Engine flexible environment .
Specifies the runtime used by the app.
runtime : aspnetcore
env : flex
runtime_config :
operating_system : ubuntu22
# This sample incurs costs to run on the App Engine flexible environment.
# The settings below are to reduce costs during testing and are not appropriate
# for production use. For more information, see:
# https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml
manual_scaling :
instances : 1
resources :
cpu : 1
memory_gb : 0.5
disk_size_gb : 10
env_variables :
# The __ in My__Greeting will be translated to a : by ASP.NET.
My__Greeting : Hello AppEngine!
For more information on how the .NET runtime works, see
The .NET runtime .
For more details about how to design your app to take advantage of versions
and services, see
An overview of App Engine .
For more details about the configuration settings for App Engine, see
Configuring your app with app.yaml .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
