---
title: "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/building-app
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/building-app
  title: "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Build a Go app on App Engine
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are deploying a new Go web service to Google Cloud,
we recommend getting started with
Cloud Run .
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
This guide helps you get started with App Engine and become familiar with
developing, deploying, and managing a Go app.
After you build your app, you can read other tutorials
to learn how to integrate with other Google Cloud services and add more features
to your app.
Costs
There are no costs associated with running this guide. Running this sample app
alone does not exceed your free quota .
Note: You can't delete the default app.
Set up your development environment
You can either use your local machine, and use tools you're already familiar
with, or Cloud Shell . Cloud Shell
has the Google Cloud CLI already installed, your environment already set up, and many
other features .
Local Machine
Install Go and set up the gcloud CLI as described in
Setting up your development environment .
Cloud Shell
Launch Cloud Shell, which has all the tools you'll need
pre-installed:
Open Cloud Shell
Create a Google Cloud project
A project is required to use Google Cloud, and forms the basis for using all
Google Cloud services.
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
Create your App Engine app and its associated resources. You must
choose a location, which cannot be changed later.
gcloud app create
Learn more : Generally, select the region
nearest to your app's users, but also consider the location of the
other
Google Cloud products and services that your app uses. Read about
the available App
Engine locations and
resource
locations .
Due to changes in the default
behavior for how Cloud Build uses service accounts in new projects, and
secure-by-default
organization policy changes , you might need to grant additional roles to
your deploying service account. For more information on granting specific roles,
see the troubleshooting guide .
Write a basic web service for App Engine
Learn how to write a web service and declare runtime settings.
Structure your files
Your service will have the following file structure:
go-app/ : directory for your Go service.
app.yaml : Your service's configuration settings.
main.go : Your application code.
Create the app.yaml file
Every App Engine project has an app.yaml configuration file which
specifies your service's runtime environment settings. Your service will not
deploy without this file.
Create a new folder called go-app for your Go service:
mkdir go-app
In your go-app/ folder, create a file called app.yaml , and add the
following contents:
runtime : go126 # or another supported version
This is the simplest configuration for an App Engine app. It
indicates to App Engine that you're using Go. The app.yaml
file can specify other Go versions, network settings, scaling settings, and more. For more
information, see the
app.yaml reference .
Create the main.go file
This sample uses the
net/http
package to create an HTTP server that prints "Hello, World!".
To set up your main.go file:
In your go-app/ folder, create a main.go file.
Add the package main statement to treat your code as an executable program:
package main
To successfully deploy a service, a package main
statement must be defined at the beginning of at least one of your
Go source files.
Learn more : You do not have to put the
app.yaml file and the main.go file in the same
directory. You can specify the directory containing your main package by
using main: in your project's app.yaml file. For
more information, see the
app.yaml
reference .
Import the following packages:
import (
"fmt"
"log"
"net/http"
"os"
)
Define your HTTP handler:
// indexHandler responds to requests with our greeting.
func indexHandler ( w http . ResponseWriter , r * http . Request ) {
if r . URL . Path != "/" {
http . NotFound ( w , r )
return
}
fmt . Fprint ( w , "Hello, World!" )
}
The http.ResponseWriter object assembles the HTTP server response; by
writing to it, you send data to the browser. The http.Request object is a
data structure that represents the incoming HTTP request.
Register your HTTP handler:
func main () {
http . HandleFunc ( "/" , indexHandler )
port := os . Getenv ( "PORT" )
if port == "" {
port = "8080"
log . Printf ( "Defaulting to port %s" , port )
}
log . Printf ( "Listening on port %s" , port )
if err := http . ListenAndServe ( ":" + port , nil ); err != nil {
log . Fatal ( err )
}
}
The main function is the entry point of your executable program, so it
starts the application. It begins with a call to the http.HandleFunc
function which tells the http package to handle all requests to the web
root ( "/" ) with the indexHandler function.
If the PORT environment variable is not set, port 8080 is used as a
default. When your app is running on App Engine, the PORT
environment variable is set for you, but when testing your app locally,
you can set PORT to any preferred value.
Deploy your web service on App Engine
In your go-app directory where your app.yaml file is located, deploy your
web service to App Engine using the following command:
gcloud app deploy
To launch your browser and view your web service at
https:// PROJECT_ID . REGION_ID .r.appspot.com ,
run the following command:
gcloud app browse
Congratulations! You've just created and deployed a service on
App Engine.
Services and versions
The first service you deploy for your application will be the default service.
You can specify the name of your service in the app.yaml file, but if the
name is omitted, it is treated as default . You can deploy multiple services
other than the default service.
You can update your service at any time by running the gcloud app deploy
command. Each time you deploy, a new version is created and traffic
is automatically routed to the latest version.
To confirm service creation and version deployment:
View your App Engine services in the Google Cloud console:
View services
You should see one service listed, named default . The default service is
publicly accessible at the following URL:
https:// PROJECT_ID . REGION_ID .r.appspot.com
View your versions:
View versions
You should see one timestamped version listed, corresponding to your
deployment.
To learn how to send requests to specific services and versions, see
How Requests are Routed .
Next steps
Congratulations! You just set up and deployed your web application to
App Engine.
Learn how to add other features to your application by exploring the
following pages:
Learn more about writing application logs and interpreting system logs in
Reading and Writing Application Logs .
For a deeper dive into how App Engine works, see the
Go Runtime Environment .
Read about
request handling and
request routing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
