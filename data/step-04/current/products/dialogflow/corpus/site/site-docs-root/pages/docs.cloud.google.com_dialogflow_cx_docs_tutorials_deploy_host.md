---
title: "Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host
  title: "Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Host your agent
Stay organized with collections
Save and categorize content based on your preferences.
The final step of this tutorial is to host your Dialogflow agent.
App Engine
is used for hosting,
because it is simple to set up and scales well.
The
Dialogflow Messenger
integration is used for an agent user interface.
Project configuration
Ideally, your Dialogflow agent and the App Engine instance
are both in the same project.
Also, you must enable the Cloud Build API.
Before creating the instance,
select your project from the Google Cloud console.
Go to project selector
Enable the Cloud Build API for the project.
Enable the Cloud Build API
Environment setup
You need to install and configure some things
in order to develop a Go application for App Engine.
Follow any steps you haven't already completed at
Setting up your development environment .
Create the web service code
The example code for this tutorial is written in Go,
but you can use any language supported by App Engine.
Create the following file structure anywhere on your local machine:
go-app/ : directory for your Go service.
templates/ : directory for your Go HTML templates.
index.html : Go HTML template.
app.yaml : Your service's configuration settings.
main.go : Your application code.
The next three sections provide content for the three files.
Contents of the index.html file
This Go HTML template file contains the HTML for the homepage.
Populate this file with the following contents:
< !DOCTYPE html >
< html lang="en-US" >
< head >
< meta charset = "utf-8" >
< meta name = "viewport" content = "width=device-width" >
< title>Tutorial agent < / title >
< / head >
< body >
< p>Open the chat window in the bottom right corner .</ p >
< / body >
< / html >
Contents of the app.yaml file
This is a configuration file which
specifies your service's runtime environment settings.
You can reference the
Go 1.12+ Runtime Environment document
to see the list of supported Go versions.
Populate this file with the following contents:
runtime: go116 # or another supported version
Contents of the main.go file
This file contains your application code.
Populate this file with the following contents:
// Package main is the main package
package main
import (
"log"
"net/http"
"os"
"text/template"
)
var templates * template . Template
func init () {
templates = template . Must ( template . New ( "" ) . ParseGlob ( "templates/*" ))
}
// indexHandler handles the homepage .
func indexHandler ( w http . ResponseWriter , r * http . Request ) {
if r . URL . Path != "/" {
http . NotFound ( w , r )
return
}
if err := templates . ExecuteTemplate ( w , "index.html" , nil ); err != nil {
log . Fatal ( err )
}
}
func main () {
// Register the handlers
http . HandleFunc ( "/" , indexHandler )
port := os . Getenv ( "PORT" )
if port == "" {
port = "8080"
log . Printf ( "Defaulting to port %s " , port )
}
log . Printf ( "Listening on port %s " , port )
if err := http . ListenAndServe ( ":" + port , nil ); err != nil {
log . Fatal ( err )
}
}
Deploy your web service
Your code is now ready to deploy.
These steps use the
gcloud tool
for deployment:
Ensure that gcloud is configured with the same project
as your Dialogflow agent.
To check the project:
gcloud config get-value project
To change the project:
gcloud config set project YOUR_PROJECT
In your go-app directory where your app.yaml file is located, deploy your
web service to App Engine using the following command:
gcloud app deploy
The command will prompt you for a region.
Be sure to select the same region as your Dialogflow agent.
The command will output the target url value,
which is the URL for your web service.
To launch your browser and view your web service,
you can open the target URL from the previous step,
or run the following command:
gcloud app browse
Setup Dialogflow Messenger
Note: Make sure billing is enabled on
your project before testing the integration.
To set up unauthenticated access to your Dialogflow CX Messenger agent:
Go to the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Integrations in the left sidebar menu.
Click Connect on Dialogflow CX Messenger .
A configuration dialog opens.
If the integration was previously setup for this agent,
you will see embeddable HTML code.
Regardless of whether you want what authenticated or unauthenticated,
click the Disable... button at the bottom of the dialog,
so you can reconfigure the settings in the next step.
Select an Environment .
Select Unauthenticated API .
Select a style.
Optionally restrict domain access.
Click Enable the unauthenticated API .
The dialog will show the embeddable HTML code
that can be embedded on your website.
Copy this code.
Click Done .
Embed the agent in your web service
Paste the embed code you copied above in your index.html file.
The <script> and <df-messenger> HTML elements
should be in the <body> element of your page.
Deploy your web service app again with gcloud.
Once deployed,
you can interact with your agent through the webpage
by clicking the chat icon in the lower right corner.
You now have a fully deployed Dialogflow agent!
Try having a conversation with the agent.
Cleanup
While going through the steps of this tutorial,
you created billable resources .
To avoid incurring additional charges to your Google Cloud account:
Delete your database instance .
Delete your function:
gcloud functions delete tutorial-telecommunications-webhook
Disable your app .
Delete your agent
More information
For more information about the steps above, see:
Building a Go App on App Engine
Interactions with an integration
Previous
arrow_back
Query a database
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
