---
title: "Debug Google Chat apps \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/debug-apps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/debug-apps
  title: "Debug Google Chat apps \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Debug Google Chat apps
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use ngrok to expose your locally running Google Chat app for development and testing purposes.
Google provides sample code and setup instructions for Node.js, Python, and Java to assist in debugging.
Configure your Google Chat app to use the ngrok -provided URL as its HTTP endpoint for receiving requests.
Debugging tools like Visual Studio Code and ngrok 's request replay functionality help streamline the development process.
Remote debugging involves setting up an SSH tunnel and configuring your IDE to connect to the remote environment.
As a Google Chat apps developer you might need to debug code to
test changes or troubleshoot complex issues. Debugging Chat apps
can be done in many different ways depending on your app's architecture, what
the app does, how your app is deployed, and your preferences.
This page explains how to debug an HTTP Chat app using
ngrok, which is a unified ingress platform that you can use to test local
development environments. In this guide, you test code changes in a local
environment and troubleshoot issues in a remote environment.
Note: If your Chat app is built with
Google Apps Script, use the following instead:
Test a
deployment
Use
the debugger and breakpoints
Debug from local development environment
In this section, you interact with your Chat app that
executes in your local environment.
Figure 1. Debug in a local development environment.
Workshop
Node.js
Python
Java
Prerequisites
Node.js
Latest versions of node and npm
installed
in your local environment.
Latest version of nodemon installed in your local
environment, it's used for auto-reload purposes:
npm install -g nodemon
An HTTP Chat app that's configured for
messaging. You can follow the sections
Prerequisites ,
Set up the
environment ,
and Publish the app to Google
Chat of the
Quickstart guide . The only
differences are that you need to set the App name to Debug App and
the HTTP endpoint URL to anything such as http://example.com .
An IDE set up in your local environment that can debug. We use the
Visual Studio Code
IDE and its default
debugging features in
this guide for illustration purposes.
Git
installed
in your local environment.
A ngrok account.
Python
Latest version of python3
installed
in your local environment.
Latest version of pip and
virtualenv installed in your
local environment, they are used to manage Python packages and virtual
environments respectively.
An HTTP Chat app that's configured for
messaging. You can follow the sections
Prerequisites ,
Set up the
environment ,
and Publish the app to Google
Chat of the
Quickstart guide . The only
differences are that you need to set the App name to Debug App and
the HTTP endpoint URL to anything such as http://example.com .
An IDE set up in your local environment that can debug. We use the
Visual Studio Code
IDE and its default
debugging features in
this guide for illustration purposes.
Git
installed
in your local environment.
A ngrok account.
Latest version of gcloud
installed
and initialized in your
local environment.
Java
Latest stable version of the Java SE 11's JDK
installed in your local
environment.
Latest version of Apache Maven
installed in your local environment,
it's used to manage Java projects.
An HTTP Chat app that's configured for
messaging. You can follow the sections
Prerequisites ,
Set up the
environment ,
and Publish the app to Google
Chat of the
Quickstart guide . The only
differences are that you need to set the App name to Debug App and
the HTTP endpoint URL to anything such as http://example.com .
An IDE set up in your local environment that can debug. We use the
Visual Studio Code
IDE and its default
debugging features in
this guide for illustration purposes.
Git
installed
in your local environment.
A ngrok account.
Latest version of gcloud
installed
and initialized in your
local environment.
Make the localhost service available publicly
You need to connect your local environment to the internet so that the
Chat app can access it. The ngrok application is used
to redirect HTTP requests made to a public URL to your local environment.
In a browser in your local environment, sign in to your ngrok account.
Install the application and set up your authtoken in your local
environment.
Create a static domain in your
ngrok account, it's referenced as NGROK_STATIC_DOMAIN
in the instructions of this guide.
Configure the Chat app
Configure the Chat app to send all its HTTP requests to
your static domain.
In the Google API Console, open the Google Chat API page:
Go to Google Chat API page
Click the Configuration tab.
Go to Interactive features > Connection settings and set the value
of the text field HTTP endpoint URL to:
https:// NGROK_STATIC_DOMAIN
Replace NGROK_STATIC_DOMAIN with the static domain in
your ngrok account.
Click Save .
Figure 2. The Chat app sends all its HTTP requests
to the static domain. The ngrok public service acts as a bridge between the
Chat app and the application code that executes
locally.
Test the Chat app
You can locally deploy, configure, test, debug, and auto-reload your
Chat app.
Note: The Chat app executes with the Functions
Framework in the
examples for Python and Java and with the Express
Framework in the example for Node.js .
Node.js
Clone the googleworkspace/google-chat-samples repository from GitHub
to your local environment, it contains the code of the application to
execute:
git clone https://github.com/googleworkspace/google-chat-samples.git
From the Visual Studio Code IDE installed in your local environment,
do the following:
In a new window, open the folder
google-chat-samples/node/basic-app .
Configure the application for auto-reload debug by adding two
scripts in the package.json file:
{
...
"scripts" : {
...
"debug" : "node --inspect index.js" ,
"debug-watch" : "nodemon --watch ./ --exec npm run debug"
}
...
}
From the root directory, install the application:
npm install
Create and configure a launch named Debug Watch that triggers the
script debug-watch by creating the file .vscode/launch.json in
the root directory:
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "node" ,
"request" : "launch" ,
"name" : "Debug Watch" ,
"cwd" : "${workspaceRoot}" ,
"runtimeExecutable" : "npm" ,
"runtimeArgs" : [ "run-script" , "debug-watch" ]
}]
}
Add a breakpoint that pauses the HTTP request processing in the
index.js file, and start running and
debugging with the
Debug Watch configuration added before. The application is now
running and listening for HTTP requests on the port 9000 .
Figure 3. The application is running and listening for HTTP
requests on the port 9000 .
Launch the ngrok application in your local environment:
ngrok http --domain = NGROK_STATIC_DOMAIN 9000
Replace NGROK_STATIC_DOMAIN with the static domain in
your ngrok account. All requests are now redirected to your local
environment and the port used by the application.
Figure 4. The terminal with ngrok server running and redirecting.
A web interface is also started on your localhost by the ngrok
application, you can monitor all activities by opening it in a browser.
Figure 5. The web interface hosted by the ngrok application
showing no HTTP requests.
Test your Chat app by sending it a direct
message:
Open Google Chat.
Go to Google Chat
Click New chat add .
In the dialog, enter the name of your
Chat app.
In the search results, find your Chat app,
click Add >
Chat .
In the direct message space, type Hello and press enter . Your
Chat app does not reply because it's being
actively debugged.
In the Visual Studio Code in your local environment, you can see that
the execution is paused at the breakpoint that was set.
Figure 6. The execution is paused at the breakpoint that was set.
When you resume the execution from the debugger of Visual Studio Code
before Google Chat times out the Chat app
replies Your message : Hello .
You can check the HTTP request and response logs from the web interface
hosted by the ngrok application in your local environment.
Figure 7. The HTTP request from the web interface hosted by the
ngrok application.
To change the application behavior, replace Your message with
Here was your message inline 35 of the index.json . When you save
the file, nodemon automatically reloads the application with the
updated source code and Visual Studio Code remains in debug mode.
Figure 8. The application is running and listening for HTTP requests
on the port 9000 with the code change loaded.
This time, instead of sending a second message Hello in the space, you
can select the last HTTP request logged on the web interface hosted by
the ngrok application in your local environment and click Replay .
Same as last time, your Chat app does not reply
because it's being actively debugged.
When you resume the execution from the debugger of Visual Studio Code
you can see from the web interface hosted by the ngrok application in
your local environment that the application generates a response with
the updated version of the message Here was your message : Hello .
Python
Acquire new user credentials to use for Application Default
Credentials :
gcloud config set project PROJECT_ID
gcloud auth application-default login
Replace PROJECT_ID with the
project ID
for the Cloud project of the app.
Clone the googleworkspace/google-chat-samples repository from GitHub
to your local environment, it contains the application code:
git clone https://github.com/googleworkspace/google-chat-samples.git
From the Visual Studio Code IDE installed in your local environment,
do the following:
In a new window, open the folder
google-chat-samples/python/avatar-app .
Create a new virtual environment for Python env and activate it:
virtualenv env
source env/bin/activate
Install all project dependencies using pip in the virtual
environment:
pip install -r requirements.txt
Create the file .vscode/launch.json in the root directory and
configure a launch named Debug Watch that triggers the application
from the module functions-framework on port 9000 in debug mode
on the virtual environment env :
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "python" ,
"request" : "launch" ,
"name" : "Debug Watch" ,
"python" : "${workspaceFolder}/env/bin/python3" ,
"module" : "functions_framework" ,
"args" : [
"--target" , "avatar_app" ,
"--port" , "9000" ,
"--debug"
]
}]
}
Add a breakpoint that pauses the HTTP request processing in the
main.py file, and start running and
debugging with the
Debug Watch configuration added before. The application is now
running and listening for HTTP requests on the port 9000 .
Figure 3. The application is running and listening for HTTP
requests on the port 9000 .
Launch the ngrok application in your local environment:
ngrok http --domain = NGROK_STATIC_DOMAIN 9000
Replace NGROK_STATIC_DOMAIN with the static domain in
your ngrok account. All requests are now redirected to your local
environment and the port used by the application.
Figure 4. The terminal with ngrok server running and redirecting.
A web interface is also started on your localhost by the ngrok
application, you can monitor all activities by opening it in a browser.
Figure 5. The web interface hosted by the ngrok application
showing no HTTP requests.
Test your Chat app by sending it a direct
message:
Open Google Chat.
Go to Google Chat
Click New chat add .
In the dialog, enter the name of your
Chat app.
In the search results, find your Chat app,
click Add >
Chat .
In the direct message space, type Hey! and press enter . Your
Chat app doesn't reply because it's being
actively debugged.
In the Visual Studio Code in your local environment, you can see that
the execution is paused at the breakpoint that was set.
Figure 6. The execution is paused at the breakpoint that was set.
When you resume the execution from the debugger of Visual Studio Code
before Google Chat times out the Chat app
replies with your name and avatar picture in the message.
You can check the HTTP request and response logs from the web interface
hosted by the ngrok application in your local environment.
Figure 7. The HTTP request from the web interface hosted by the
ngrok application.
To change the application behavior, replace Hello with Hey inline
51 of the main.py file. When you save the file, Visual Studio Code
automatically reloads the application with the updated source code and
remains in debug mode.
Figure 8. The application is running and listening for HTTP requests
on the port 9000 with the code change loaded.
This time, instead of sending a second message Hey! in the space, you
can select the last HTTP request logged on the web interface hosted by
the ngrok application in your local environment and click Replay .
Same as last time, your Chat app doesn't reply
because it's being actively debugged.
When you resume the execution from the debugger of Visual Studio Code
you can see from the web interface hosted by the ngrok application in
your local environment that the application generates a response with
the updated version of the message.
Java
Acquire new user credentials to use for Application Default
Credentials :
gcloud config set project PROJECT_ID
gcloud auth application-default login
Replace PROJECT_ID with the
project ID
for the Cloud project of the app.
Clone the googleworkspace/google-chat-samples repository from GitHub
in your local environment, it contains the application code:
git clone https://github.com/googleworkspace/google-chat-samples.git
From the Visual Studio Code IDE installed in your local environment,
do the following:
In a new window, open the folder
google-chat-samples/java/avatar-app .
Configure the Maven project to run the application App on
port 9000 locally by adding the Google Cloud
Functions Framework build plugin function-maven-plugin in the
pom.xml file:
...
<plugin>
<groupId>com.google.cloud.functions</groupId>
<artifactId>function-maven-plugin</artifactId>
<version>0.11.0</version>
<configuration>
<functionTarget>App</functionTarget>
<port>9000</port>
</configuration>
</plugin>
...
You can now launch it locally in debug mode:
mvnDebug function :run
Preparing to execute Maven in debug mode
Listening for transport dt_socket at address: 8000
Create the file .vscode/launch.json in the root directory and
configure a launch named Remote Debug Watch that attaches to the
application previously launched with port 8000 :
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "java" ,
"request" : "attach" ,
"name" : "Remote Debug Watch" ,
"projectName" : "http-function" ,
"hostName" : "localhost" ,
"port" : 8000
}]
}
Add a breakpoint that pauses the HTTP request processing in the
App.java file, and start attaching and
debugging with the
Remote Debug Watch configuration added before. The application is
now running and listening for HTTP requests on the port 9000 .
Figure 3. he application is running and listening for HTTP
requests on the port 9000 .
Launch the ngrok application in your local environment:
ngrok http --domain = NGROK_STATIC_DOMAIN 9000
Replace NGROK_STATIC_DOMAIN with the static domain in
your ngrok account. All requests are now redirected to your local
environment and the port used by the application.
Figure 4. The terminal with ngrok server running and redirecting.
A web interface is also started on your localhost by the ngrok
application, you can monitor all activities by opening it in a browser.
Figure 5. The web interface hosted by the ngrok application
showing no HTTP requests.
Test your Chat app by sending it a direct
message:
Open Google Chat.
Go to Google Chat
Click New chat add .
In the dialog, enter the name of your
Chat app.
In the search results, find your Chat app,
click Add >
Chat .
In the direct message space, type Hey! and press enter . Your
Chat app doesn't reply because it's being
actively debugged.
In the Visual Studio Code in your local environment, you can see that
the execution is paused at the breakpoint that was set.
Figure 6. The execution is paused at the breakpoint that was set.
When you resume the execution from the debugger of Visual Studio Code
before Google Chat times out the Chat app
replies with your name and avatar picture in the message.
You can check the HTTP request and response logs from the web interface
hosted by the ngrok application in your local environment.
Figure 7. The HTTP request from the web interface hosted by the
ngrok application.
To change the application behavior, replace Hello with Hey inline
55 of the App.java file, restart the mvnDebug process, and
relaunch Remote Debug Watch to reattach and restart
debugging .
This time, instead of sending a second message Hey! in the space, you
can select the last HTTP request logged on the web interface hosted by
the ngrok application in your local environment and click Replay .
Same as last time, your Chat app does not reply
because it's being actively debugged.
When you resume the execution from the debugger of Visual Studio Code
you can see from the web interface hosted by the ngrok application in
your local environment that the application generates a response with
the updated version of the message.
Debug from remote environment
In this section, you interact with your Chat app that
executes on a remote environment.
Figure 9. Debug from remote environment.
Prerequisites
A direct message space with your Chat app. You can
follow the section
Test your Chat app of the
Quickstart guide and search for your
Chat app to start one.
Your application running in your remote environment with the debugger
enabled on a given port, it's referenced as
REMOTE_DEBUG_PORT in the instructions of this guide.
Your local environment can ssh to your remote environment.
An IDE set up in your local environment that can debug. We use the
Visual Studio Code
IDE and its default
debugging features in this
guide for illustration purposes.
Connect your local and remote environments
In your local environment from where you want to initiate a debug client
connection, set up an SSH tunnel:
ssh -L LOCAL_DEBUG_PORT :localhost: REMOTE_DEBUG_PORT REMOTE_USERNAME @ REMOTE_ADDRESS
Replace the following:
LOCAL_DEBUG_PORT : The debug port in your local
environment.
REMOTE_USERNAME : The username in your remote environment.
REMOTE_ADDRESS : The address of your remote environment.
REMOTE_DEBUG_PORT : The debug port in your remote
environment.
The debug port in your local environment is now linked to the debug port in your
remote environment.
Start debugging
From the Visual Studio Code IDE installed in your local environment, do the
following:
In a new window, open the source code of your app.
Create the file .vscode/launch.json in the root directory and configure a
launch named Debug Remote that attaches to the debug port in your local
environment:
Node.js
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "node" ,
"request" : "attach" ,
"name" : "Debug Remote" ,
"address" : "127.0.0.1" ,
"port" : LOCAL_DEBUG_PORT
}]
}
Python
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "python" ,
"request" : "attach" ,
"name" : "Debug Remote" ,
"connect" : {
"host" : "127.0.0.1" ,
"port" : LOCAL_DEBUG_PORT
}
}]
}
Java
{
"version" : "0.2.0" ,
"configurations" : [{
"type" : "java" ,
"request" : "attach" ,
"name" : "Debug Remote" ,
"hostName" : "127.0.0.1" ,
"port" : LOCAL_DEBUG_PORT
}]
}
Replace LOCAL_DEBUG_PORT with the debug port in your
local environment.
Add a breakpoint in the source code of your app that pauses the HTTP request
processing, and start running and
debugging with the Debug
Remote configuration added before.
In the direct message space with your Chat app, type
anything you want to test and press enter . Your
Chat app does not reply because it's being actively
debugged
in the Visual Studio Code IDE.
Related topics
Learn how to enable and
query error logs.
Learn how to fix Google Chat app
errors like "App is not responding", "Google Chat API
is only available to Google Workspace users", or "Users can be excluded
from spaces".
Learn how to fix card errors like card messages,
dialogs, or link previews not rendering or working as expected.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details how to debug HTTP Google Chat apps using `ngrok` for local testing and SSH for remote debugging. Key actions include: setting up `ngrok` with a static domain to expose localhost, configuring the Chat app's HTTP endpoint URL to the `ngrok` address, and using IDE breakpoints for debugging. Specific steps for Node.js, Python, and Java are given, involving repository cloning, installing dependencies, configuring debuggers, launching `ngrok`, setting up SSH tunnels, and using `gcloud` for credentials. The workflow includes testing via direct messages and monitoring `ngrok`'s web interface.\n"]]
