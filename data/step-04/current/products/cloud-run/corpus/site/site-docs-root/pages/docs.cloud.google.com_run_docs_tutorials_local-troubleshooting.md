---
title: "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting
  title: "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Tutorial: Local troubleshooting of a Cloud Run service
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how a service developer can troubleshoot a broken
Cloud Run service using Google Cloud Observability tools for discovery and a local
development workflow for investigation.
This step-by-step "case study" companion to the
troubleshooting guide uses a sample project that
results in runtime errors when deployed, which you troubleshoot to find and fix
the problem.
Objectives
Write, build, and deploy a service to Cloud Run
Use Error Reporting and Cloud Logging to identify an error
Retrieve the container image from Container Registry for a root cause analysis
Fix the "production" service, then improve the service to mitigate future problems
Caution: Container Registry is deprecated. Effective March 18, 2025,
Container Registry is shut down, and writing images to Container Registry is unavailable. For
details on the deprecation and how to migrate to Artifact Registry, see
Container Registry deprecation .
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Build
Container Registry
Cloud Run
Cloud Logging
Error Reporting
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
Enable the Cloud Run Admin API
Install and initialize the gcloud CLI .
Update components:
gcloud components update
Follow the instructions to
install Docker locally
Required roles
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Error Reporting Viewer ( roles/errorreporting.viewer )
Logs View Accessor ( roles/logging.viewAccessor )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to complete the tutorial. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Setting up gcloud defaults
To configure gcloud with defaults for your Cloud Run service:
Set your default project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the name of the project you created for
this tutorial.
Configure gcloud for your chosen region:
gcloud config set run/region REGION
Replace REGION with the supported Cloud Run
region
of your choice.
Cloud Run locations
Cloud Run is regional, which means the infrastructure that
runs your Cloud Run services is located in a specific region and is
managed by Google to be redundantly available across
all the zones within that region .
Meeting your latency, availability, or durability requirements are primary
factors for selecting the region where your Cloud Run services are run.
You can generally select the region nearest to your users but you should consider
the location of the other Google Cloud
products that are used by your Cloud Run service.
Using Google Cloud products together across multiple locations can affect
your service's latency as well as cost.
Cloud Run is available in the following regions:
Subject to Tier 1 pricing
asia-east1 (Taiwan)
asia-northeast1 (Tokyo)
asia-northeast2 (Osaka)
asia-south1 (Mumbai, India)
asia-southeast3 (Bangkok)
europe-north1 (Finland)
Low CO 2
europe-north2 (Stockholm)
Low CO 2
europe-southwest1 (Madrid)
Low CO 2
europe-west1 (Belgium)
Low CO 2
europe-west4 (Netherlands)
Low CO 2
europe-west8 (Milan)
europe-west9 (Paris)
Low CO 2
me-west1 (Tel Aviv)
northamerica-south1 (Mexico)
us-central1 (Iowa)
Low CO 2
us-east1 (South Carolina)
us-east4 (Northern Virginia)
us-east5 (Columbus)
us-south1 (Dallas)
Low CO 2
us-west1 (Oregon)
Low CO 2
Subject to Tier 2 pricing
africa-south1 (Johannesburg)
asia-east2 (Hong Kong)
asia-northeast3 (Seoul, South Korea)
asia-southeast1 (Singapore)
asia-southeast2 (Jakarta)
asia-south2 (Delhi, India)
australia-southeast1 (Sydney)
australia-southeast2 (Melbourne)
europe-central2 (Warsaw, Poland)
europe-west10 (Berlin)
europe-west12 (Turin)
europe-west2 (London, UK)
Low CO 2
europe-west3 (Frankfurt, Germany)
europe-west6 (Zurich, Switzerland)
Low CO 2
me-central1 (Doha)
me-central2 (Dammam)
northamerica-northeast1 (Montreal)
Low CO 2
northamerica-northeast2 (Toronto)
Low CO 2
southamerica-east1 (Sao Paulo, Brazil)
Low CO 2
southamerica-west1 (Santiago, Chile)
Low CO 2
us-west2 (Los Angeles)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
If you already created a Cloud Run service, you can view the
region in the Cloud Run dashboard in the
Google Cloud console .
OK
Assembling the code
Build a new Cloud Run greeter service step-by-step.
As a reminder, this service creates a runtime error on purpose for the
troubleshooting exercise.
Create a new project:
Node.js
Create a Node.js project by defining the service package, initial dependencies,
and some common operations.
Create a new hello-service directory:
mkdir hello-service
cd hello-service
Create a new Node.js project by generating a package.json file:
npm init -- yes
npm install express @4
Open the new package.json file in your editor and configure a start
script to run node index.js . When you're done, the file will look like this:
{
"name" : "hello-broken" ,
"description" : "Broken Cloud Run service for troubleshooting practice" ,
"version" : "1.0.0" ,
"private" : true ,
"main" : "index.js" ,
"scripts" : {
"start" : "node index.js" ,
"test" : "echo \"Error: no test specified\" && exit 0" ,
"system-test" : "NAME=Cloud c8 mocha -p -j 2 test/system.test.js --timeout=360000 --exit"
},
"engines" : {
"node" : ">=16.0.0"
},
"author" : "Google LLC" ,
"license" : "Apache-2.0" ,
"dependencies" : {
"express" : "^4.17.1"
},
"devDependencies" : {
"c8" : "^10.0.0" ,
"google-auth-library" : "^9.0.0" ,
"got" : "^11.5.0" ,
"mocha" : "^10.0.0"
}
}
If you continue to evolve this service beyond the immediate tutorial, consider
filling in the description, author, and evaluate the license. For more details,
read the package.json documentation .
Python
Create a new hello-service directory:
mkdir hello-service
cd hello-service
Create a requirements.txt file and copy your dependencies into it:
Flask == 3.0.3
pytest == 8.2.0 ; python_version > "3.0"
# pin pytest to 4.6.11 for Python2.
pytest == 4.6.11 ; python_version < "3.0"
gunicorn == 23.0.0
Werkzeug == 3.0.3
Go
Create a new hello-service directory:
mkdir hello-service
cd hello-service
Create a Go project by initializing a new go module :
go mod init example . com / hello - service
You can update the specific name as you wish: you should update the name if
the code is published to a web-reachable code repository.
Java
Create a new maven project:
mvn archetype : generate \
- DgroupId = com . example . cloudrun \
- DartifactId = hello - service \
- DarchetypeArtifactId = maven - archetype - quickstart \
- DinteractiveMode = false
Copy the dependencies into your pom.xml dependency list (between the <dependencies> elements):
< dependency >
< groupId>com . sparkjava < / groupId >
< artifactId>spark - core < / artifactId >
< version>2 .9.4 < / version >
< / dependency >
< dependency >
< groupId>org . slf4j < / groupId >
< artifactId>slf4j - api < / artifactId >
< version>2 .0.12 < / version >
< / dependency >
< dependency >
< groupId>org . slf4j < / groupId >
< artifactId>slf4j - simple < / artifactId >
< version>2 .0.12 < / version >
< / dependency >
Copy the build setting into your pom.xml (under the <dependencies> elements):
< build >
< plugins >
< plugin >
< groupId>com . google . cloud . tools < / groupId >
< artifactId>jib - maven - plugin < / artifactId >
< version>3 .4.0 < / version >
< configuration >
< to >
< image>gcr . io / PROJECT_ID / hello - service < / image >
< / to >
< / configuration >
< / plugin >
< / plugins >
< / build >
Create an HTTP service to handle incoming requests:
Node.js
const express = require ( 'express' );
const app = express ();
app . get ( '/' , ( req , res ) = > {
console . log ( 'hello: received request.' );
const { NAME } = process . env ;
if ( ! NAME ) {
// Plain error logs do not appear in Stackdriver Error Reporting.
console . error ( 'Environment validation failed.' );
console . error ( new Error ( 'Missing required server parameter' ));
return res . status ( 500 ). send ( 'Internal Server Error' );
}
res . send ( `Hello ${ NAME } !` );
});
const port = parseInt ( process . env . PORT ) || 8080 ;
app . listen ( port , () = > {
console . log ( `hello: listening on port ${ port } ` );
});
Python
import json
import os
from flask import Flask
app = Flask ( __name__ )
@app . route ( "/" , methods = [ "GET" ])
def index ():
"""Example route for testing local troubleshooting.
This route may raise an HTTP 5XX error due to missing environment variable.
"""
print ( "hello: received request." )
NAME = os . getenv ( "NAME" )
if not NAME :
print ( "Environment validation failed." )
raise Exception ( "Missing required service parameter." )
return f "Hello { NAME } "
if __name__ == "__main__" :
PORT = int ( os . getenv ( "PORT" )) if os . getenv ( "PORT" ) else 8080
# This is used when running locally. Gunicorn is used to run the
# application on Cloud Run. See entrypoint in Dockerfile.
app . run ( host = "127.0.0.1" , port = PORT , debug = True )
Go
// Sample hello demonstrates a difficult to troubleshoot service.
package main
import (
"fmt"
"log"
"net/http"
"os"
)
func main () {
log . Print ( "hello: service started" )
http . HandleFunc ( "/" , helloHandler )
port := os . Getenv ( "PORT" )
if port == "" {
port = "8080"
log . Printf ( "Defaulting to port %s" , port )
}
log . Printf ( "Listening on port %s" , port )
log . Fatal ( http . ListenAndServe ( fmt . Sprintf ( ":%s" , port ), nil ))
}
func helloHandler ( w http . ResponseWriter , r * http . Request ) {
log . Print ( "hello: received request" )
name := os . Getenv ( "NAME" )
if name == "" {
log . Printf ( "Missing required server parameter" )
// The panic stack trace appears in Cloud Error Reporting.
panic ( "Missing required server parameter" )
}
fmt . Fprintf ( w , "Hello %s!\n" , name )
}
Java
import static spark.Spark.get ;
import static spark.Spark.port ;
import org.slf4j.Logger ;
import org.slf4j.LoggerFactory ;
public class App {
private static final Logger logger = LoggerFactory . getLogger ( App . class );
public static void main ( String [] args ) {
int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" ));
port ( port );
get (
"/" ,
( req , res ) - > {
logger . info ( "Hello: received request." );
String name = System . getenv ( "NAME" );
if ( name == null ) {
// Standard error logs do not appear in Stackdriver Error Reporting.
System . err . println ( "Environment validation failed." );
String msg = "Missing required server parameter" ;
logger . error ( msg , new Exception ( msg ));
res . status ( 500 );
return "Internal Server Error" ;
}
res . status ( 200 );
return String . format ( "Hello %s!" , name );
});
}
}
Create a Dockerfile to define the container image used to deploy the service:
Node.js
# Use the official lightweight Node . js image .
# https : //hub.docker.com/_/node
FROM node : 20 - slim
# Create and change to the app directory .
WORKDIR / usr / src / app
# Copy application dependency manifests to the container image .
# A wildcard is used to ensure copying both package . json AND package - lock . json ( when available ).
# Copying this first prevents re - running npm install on every code change .
COPY package * . json . /
# Install dependencies .
# if you need a deterministic and repeatable build create a
# package - lock . json file and use npm ci :
# RUN npm ci -- omit = dev
# if you need to include development dependencies during development
# of your application , use :
# RUN npm install -- dev
RUN npm install -- omit = dev
# Copy local code to the container image .
COPY . . /
# Run the web service on container startup .
CMD [ "npm" , "start" ]
Python
# Use the official Python image.
# https://hub.docker.com/_/python
FROM python : 3.11
# Allow statements and log messages to immediately appear in the Cloud Run logs
ENV PYTHONUNBUFFERED True
# Copy application dependency manifests to the container image.
# Copying this separately prevents re-running pip install on every code change.
COPY requirements . txt ./
# Install production dependencies.
RUN pip install - r requirements . txt
# Copy local code to the container image.
ENV APP_HOME / app
WORKDIR $ APP_HOME
COPY . ./
# Run the web service on container startup.
# Use gunicorn webserver with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
# Timeout is set to 0 to disable the timeouts of the workers to allow Cloud Run to handle instance scaling.
CMD exec gunicorn -- bind : $ PORT -- workers 1 -- threads 8 -- timeout 0 main : app
Go
# Use the official Go image to create a binary .
# This is based on Debian and sets the GOPATH to / go .
# https : //hub.docker.com/_/golang
FROM golang : 1.25 - bookworm as builder
# Create and change to the app directory .
WORKDIR / app
# Retrieve application dependencies .
# This allows the container build to reuse cached dependencies .
# Expecting to copy go . mod and if present go . sum .
COPY go . * . /
RUN go mod download
# Copy local code to the container image .
COPY . . /
# Build the binary .
RUN go build - v - o server
# Use the official Debian slim image for a lean production container .
# https : //hub.docker.com/_/debian
# https : //docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian : bookworm - slim
RUN set - x && apt - get update && DEBIAN_FRONTEND = noninteractive apt - get install - y \
ca - certificates && \
rm - rf / var / lib / apt / lists /*
# Copy the binary to the production image from the builder stage .
COPY -- from = builder / app / server / server
# Run the web service on container startup .
CMD [ "/server" ]
Java
This sample uses Jib to build
Docker images using common Java tools. Jib optimizes container builds without
the need for a Dockerfile or having Docker
installed. Learn more about building Java containers with Jib .
< plugin >
< groupId>com . google . cloud . tools < / groupId >
< artifactId>jib - maven - plugin < / artifactId >
< version>3 .4.0 < / version >
< configuration >
< to >
< image>gcr . io / PROJECT_ID / hello - service < / image >
< / to >
< / configuration >
< / plugin >
Shipping the code
Shipping code consists of three steps: building a container image with
Cloud Build, uploading the container image to Container Registry, and
deploying the container image to Cloud Run.
To ship your code:
Build your container and publish on Container Registry:
Node.js
gcloud builds submit --tag gcr.io/ PROJECT_ID /hello-service
Where PROJECT_ID is your Google Cloud project ID. You can check your
current project ID with gcloud config get-value project .
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Container Registry and can be
re-used if desired.
Python
gcloud builds submit --tag gcr.io/ PROJECT_ID /hello-service
Where PROJECT_ID is your Google Cloud project ID. You can check your
current project ID with gcloud config get-value project .
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Container Registry and can be
re-used if desired.
Go
gcloud builds submit --tag gcr.io/ PROJECT_ID /hello-service
Where PROJECT_ID is your Google Cloud project ID. You can check your
current project ID with gcloud config get-value project .
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Container Registry and can be
re-used if desired.
Java
Use the gcloud credential helper
to authorize Docker to push to your Container Registry.
gcloud auth configure-docker
Use the Jib Maven Plugin to build and push the container to Container Registry.
mvn compile jib:build -Dimage = gcr.io/ PROJECT_ID /hello-service
Where PROJECT_ID is your Google Cloud project ID. You can check your
current project ID with gcloud config get-value project .
Upon success, you should see a BUILD SUCCESS message. The image is stored in
Container Registry and can be re-used if desired.
Run the following command to deploy your app:
gcloud run deploy hello-service --image gcr.io/ PROJECT_ID /hello-service
Replace PROJECT_ID with your Google Cloud project ID. hello-service is
both the container image name and name of the Cloud Run service.
Notice that the container image is deployed to the service and
region that you configured previously under
Setting up gcloud
Respond y , "Yes", to the allow unauthenticated prompt. See
Managing Access for more details on
IAM-based authentication.
Wait until the deployment is complete: this can take about half a minute.
On success, the command line displays the service URL.
Trying it out
Try out the service to confirm you have successfully deployed it. Requests
should fail with a HTTP 500 or 503 error (members of the class
5xx Server errors ).
The tutorial walks through troubleshooting this error response.
The service is auto-assigned a navigable URL.
Navigate to this URL with your web browser:
Open a web browser
Find the service URL output by the earlier deploy command.
If the deploy command did not provide a URL then something went wrong.
Review the error message and act accordingly: if no actionable guidance
is present, review the troubleshooting guide
and possibly retry the deployment command.
Navigate to this URL by copying it into your browser's address bar and
pressing ENTER .
View the HTTP 500 or HTTP 503 error.
If you receive a HTTP 403 error, you may have rejected
allow unauthenticated invocations at the deployment prompt.
Grant public access to the service to fix this:
gcloud run services add-iam-policy-binding hello-service \
--member="allUsers" \
--role="roles/run.invoker"
For more information, read
Allowing public (unauthenticated) access .
Investigating the problem
Visualize that the HTTP 5xx error encountered above in Trying it out
was encountered as a production runtime error. This tutorial walks through a
formal process for handling it. Although production error resolution processes
vary widely, this tutorial presents a particular sequence of steps to show the
application of useful tools and techniques.
To investigate this problem you will work through these phases:
Collect more details on the reported error to support further investigation and set a mitigation strategy.
Relieve user impact by deciding to push forward in a fix or rollback to a known-healthy version.
Reproduce the error to confirm the correct details have been gathered and that
the error is not a one-time glitch
Perform a root cause analysis on the bug to find the code, configuration, or
process which created this error
At the start of the investigation you have a URL, timestamp, and the message
"Internal Server Error".
Gathering further details
Gather more information about the problem to understand what happened and
determine next steps.
Use available Google Cloud Observability tools to collect more details:
Use the Error Reporting console, which provides a dashboard with
details and recurrence tracking for errors with a recognized
stack trace .
Go to Error Reporting console
List of recorded errors. Errors are grouped by message across revisions, services, and platforms.
Click on the error to see the stack trace details, noting the function calls
made just prior to the error.
The "Stack trace sample" in the error details page shows a single instance
of the error. You can review each individual instances.
Use Cloud Logging to review the sequence of operations leading to the
problem, including error messages that are not included in the
Error Reporting console because of a lack of a recognized
error stack trace :
Go to Cloud Logging console
Select Cloud Run Revision > hello-service from the first drop-down
box. This will filter the log entries to those generated by your service.
Read more about viewing logs in Cloud Run
Rollback to a healthy version
If this is an established service, known to work, there will be a previous
revision of the service on Cloud Run. This tutorial uses a new service
with no previous versions, so you cannot do a rollback.
However, if you have a service with previous versions you can roll back to,
follow Viewing revision details
to extract the container name and configuration details necessary to create a
new working deployment of your service.
Reproducing the error
Using the details you obtained previously, confirm the
problem consistently occurs under test conditions.
Send the same HTTP request by trying it out again, and see if
the same error and details are reported. It may take some time for error details
to show up.
Because the sample service in this tutorial is read-only and doesn't trigger any
complicating side effects, reproducing errors in production is safe. However,
for many real services, this won't be the case: you may need to reproduce errors
in a test environment or limit this step to local investigation.
Reproducing the error establishes the context for further work. For example,
if developers cannot reproduce the error further investigation may require
additional instrumentation of the service.
Performing a root cause analysis
Root cause analysis is an important step in
effective troubleshooting
to ensure you fix the problem instead of a symptom.
Previously in this tutorial, you reproduced the problem on Cloud Run
which confirms the problem is active when the service is hosted on
Cloud Run. Now reproduce the problem locally to determine if the
problem is isolated to the code or if it only emerges in production hosting.
If you have not used Docker CLI locally with Container Registry, authenticate
it with gcloud:
gcloud auth configure-docker
For alternative approaches see Container Registry authentication methods .
If the most recently used container image name is not available, the service
description has the information of the most recently deployed container image:
gcloud run services describe hello-service
Find the container image name inside the spec object. A more targeted
command can directly retrieve it:
gcloud run services describe hello-service \
--format = "value(spec.template.spec.containers.image)"
This command reveals a container image name such as gcr.io/ PROJECT_ID /hello-service .
Pull the container image from the Container Registry to your environment, this
step might take several minutes as it downloads the container image:
docker pull gcr.io/ PROJECT_ID /hello-service
Later updates to the container image that reuse this name can be retrieved
with the same command. If you skip this step, the docker run command below
pulls a container image if one is not present on the local machine.
Run locally to confirm the problem is not unique to Cloud Run:
PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \
gcr.io/ PROJECT_ID /hello-service
Breaking down the elements of the command above,
The PORT environment variable is used by the service to determine the
port to listen on inside the container.
The run command starts the container, defaulting to the entrypoint
command defined in the Dockerfile or a parent container image.
The --rm flag deletes the container instance on exit.
The -e flag assigns a value to an environment variable. -e PORT=$PORT
is propagating the PORT variable from the local system into the container
with the same variable name.
The -p flag publishes the container as a service available on
localhost at port 9000. Requests to localhost:9000 will be routed to the
container on port 8080. This means output from the service about the port
number in use will not match how the service is accessed.
The final argument gcr.io/ PROJECT_ID /hello-service
is a container image tag , a human-readable label for a container image's
sha256 hash identifier. If not available locally, docker attempts to
retrieve the image from a remote registry.
In your browser, open http://localhost:9000 . Check the terminal output for
error messages that match those on {ops_name}}.
If the problem is not reproducible locally, it may be unique to the
Cloud Run environment. Review the
Cloud Run troubleshooting guide
for specific areas to investigate.
In this case the error is reproduced locally.
Now that the error is doubly-confirmed as persistent and caused by the service
code instead of the hosting platform, it's time to investigate the code more closely.
For purposes of this tutorial it is safe to assume the code inside the container
and the code in the local system is identical.
Revisit the error report's stack trace and cross-reference with the code to find
the specific lines at fault.
Node.js
Find the source of the error message in the file index.js around the line
number called out in the stack trace shown in the logs:
const { NAME } = process . env ;
if ( ! NAME ) {
// Plain error logs do not appear in Stackdriver Error Reporting.
console . error ( 'Environment validation failed.' );
console . error ( new Error ( 'Missing required server parameter' ));
return res . status ( 500 ). send ( 'Internal Server Error' );
}
Python
Find the source of the error message in the file main.py around the line
number called out in the stack trace shown in the logs:
NAME = os . getenv ( "NAME" )
if not NAME :
print ( "Environment validation failed." )
raise Exception ( "Missing required service parameter." )
Go
Find the source of the error message in the file main.go around the line
number called out in the stack trace shown in the logs:
name := os . Getenv ( "NAME" )
if name == "" {
log . Printf ( "Missing required server parameter" )
// The panic stack trace appears in Cloud Error Reporting.
panic ( "Missing required server parameter" )
}
Java
Find the source of the error message in the file App.java around the line number called out in the stack trace shown in the logs:
String name = System . getenv ( "NAME" );
if ( name == null ) {
// Standard error logs do not appear in Stackdriver Error Reporting.
System . err . println ( "Environment validation failed." );
String msg = "Missing required server parameter" ;
logger . error ( msg , new Exception ( msg ));
res . status ( 500 );
return "Internal Server Error" ;
}
Examining this code, the following actions are taken when the NAME environment
variable is not set:
An error is logged to Google Cloud Observability
An HTTP error response is sent
The problem is caused by a missing variable, but the root cause is more specific:
the code change adding the hard dependency on an environment variable did not
include related changes to deployment scripts and runtime requirements documentation.
Fixing the root cause
Now that we have collected the code and identified the potential root cause,
we can take steps to fix it.
Check whether the service works locally with the NAME environment available
in place:
Run the container locally with the environment variable added:
PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \
-e NAME = "Local World!" \
gcr.io/ PROJECT_ID /hello-service
Navigate your browser to http://localhost:9000
See "Hello Local World!" appear on the page
Modify the running Cloud Run service environment to include this variable:
Run the services update command to add an environment variable:
gcloud run services update hello - service \
-- set - env - vars NAME = Override
Wait a few seconds while Cloud Run creates a new revision based on the
previous revision with the new environment variable added.
Confirm the service is now fixed:
Navigate your browser to the Cloud Run service URL.
See "Hello Override!" appear on the page.
Verify that no unexpected messages or errors appear in Cloud Logging or
Error Reporting.
Improving future troubleshooting speed
In this sample production problem, the error was related to operational
configuration. There are code changes that will minimize the impact of this
problem in the future.
Improve the error log to include more specific details.
Instead of returning an error, have the service fall back to a safe default.
If using a default represents a change to normal functionality, use a warning
message for monitoring purposes.
Let's step through removing the NAME environment variable as a hard dependency.
Remove the existing NAME -handling code:
Node.js
const { NAME } = process . env ;
if ( ! NAME ) {
// Plain error logs do not appear in Stackdriver Error Reporting.
console . error ( 'Environment validation failed.' );
console . error ( new Error ( 'Missing required server parameter' ));
return res . status ( 500 ). send ( 'Internal Server Error' );
}
Python
NAME = os . getenv ( "NAME" )
if not NAME :
print ( "Environment validation failed." )
raise Exception ( "Missing required service parameter." )
Go
name := os . Getenv ( "NAME" )
if name == "" {
log . Printf ( "Missing required server parameter" )
// The panic stack trace appears in Cloud Error Reporting.
panic ( "Missing required server parameter" )
}
Java
String name = System . getenv ( "NAME" );
if ( name == null ) {
// Standard error logs do not appear in Stackdriver Error Reporting.
System . err . println ( "Environment validation failed." );
String msg = "Missing required server parameter" ;
logger . error ( msg , new Exception ( msg ));
res . status ( 500 );
return "Internal Server Error" ;
}
Add new code that sets a fallback value:
Node.js
const NAME = process . env . NAME || 'World' ;
if ( ! process . env . NAME ) {
console . log (
JSON . stringify ({
severity : 'WARNING' ,
message : `NAME not set, default to ' ${ NAME } '` ,
})
);
}
Python
NAME = os . getenv ( "NAME" )
if not NAME :
NAME = "World"
error_message = {
"severity" : "WARNING" ,
"message" : f "NAME not set, default to { NAME } " ,
}
print ( json . dumps ( error_message ))
Go
name := os . Getenv ( "NAME" )
if name == "" {
name = "World"
log . Printf ( "warning: NAME not set, default to %s" , name )
}
Java
String name = System . getenv (). getOrDefault ( "NAME" , "World" );
if ( System . getenv ( "NAME" ) == null ) {
logger . warn ( String . format ( "NAME not set, default to %s" , name ));
}
Test locally by re-building and running the container through the affected
configuration cases:
Node.js
docker build --tag gcr.io/ PROJECT_ID /hello-service .
Python
docker build --tag gcr.io/ PROJECT_ID /hello-service .
Go
docker build --tag gcr.io/ PROJECT_ID /hello-service .
Java
mvn compile jib:build
Confirm the NAME environment variable still works:
PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \
-e NAME = "Robust World" \
gcr.io/ PROJECT_ID /hello-service
Confirm the service works without the NAME variable:
PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \
gcr.io/ PROJECT_ID /hello-service
If the service does not return a result, confirm the removal of code in the
first step did not remove extra lines, such as those used to write the response.
Deploy this by revisiting the Deploy your code section.
Each deployment to a service creates a new revision and automatically starts
serving traffic when ready.
To clear the environment variables set earlier:
gcloud run services update hello-service --clear-env-vars
Add the new functionality for the default value to automated test coverage for
the service.
Success: You completed troubleshooting a broken Cloud Run service using Google Cloud Observability tools.
Finding other issues in the logs
You may see other issues in the Log Viewer for this service. For example, an
unsupported system call will appear in the logs as a "Container Sandbox Limitation".
For example, the Node.js services sometimes result in this log message:
Container Sandbox Limitation: Unsupported syscall statx(0xffffff9c,0x3e1ba8e86d88,0x0,0xfff,0x3e1ba8e86970,0x3e1ba8e86a90). Please, refer to https://gvisor.dev/c/linux/amd64/statx for more information.
In this case, the lack of support does not impact the hello-service sample service.
Terraform troubleshooting
For Terraform-related troubleshooting or questions, see Terraform policy validation troubleshooting
or contact Terraform support .
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this tutorial.
Delete the project
If you created a new project for this tutorial, delete the project.
If you used an existing project and need to keep it without the changes you added
in this tutorial, delete resources that you created for the tutorial .
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
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
Delete tutorial resources
Delete the Cloud Run service you deployed in this tutorial.
Cloud Run services don't incur costs until they receive requests.
To delete your Cloud Run service, run the following command:
gcloud run services delete SERVICE-NAME
Replace SERVICE-NAME with the name of your service.
You can also delete Cloud Run services from the
Google Cloud console .
Remove the gcloud default region configuration you added during tutorial
setup:
gcloud config unset run / region
Remove the project configuration:
gcloud config unset project
Delete other Google Cloud resources created in this tutorial:
Delete the container image named gcr.io/<var>PROJECT_ID</var>/hello-service from Container Registry.
What's next
Learn more about how to use Cloud Logging and Error Reporting
to gain insight into production behavior.
For more information about Cloud Run troubleshooting, see the troubleshooting guide .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
