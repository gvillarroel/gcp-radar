---
title: "Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/pubsub
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/pubsub
  title: "Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation"
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
Use Pub/Sub with Cloud Run tutorial
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to write, deploy, and call a Cloud Run
service from a Pub/Sub push subscription .
Objectives
Write, build, and deploy a service to Cloud Run
Call the service by publishing a message to a Pub/Sub topic.
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Pub/Sub
Cloud Run
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
Enable the Artifact Registry, Cloud Build, Pub/Sub and Cloud Run APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install and initialize the gcloud CLI .
Update components:
gcloud components update
Required roles
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Pub/Sub Editor ( roles/pubsub.editor )
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
Set up gcloud defaults
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
Create an Artifact Registry standard repository
Create an Artifact Registry standard repository to store your container image:
gcloud artifacts repositories create REPOSITORY \
--repository-format = docker \
--location = REGION
Replace:
REPOSITORY with a unique name for the repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
Create a Pub/Sub topic
The sample service is triggered by messages published to a Pub/Sub
topic, so you'll need to create a topic in Pub/Sub.
gcloud
To create a new Pub/Sub topic, use the command:
gcloud pubsub topics create myRunTopic
You can use myRunTopic or replace with a topic name unique within
your Google Cloud project.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To create a Pub/Sub topic, add the following to your existing main.tf file:
resource "google_pubsub_topic" "default" {
name = "pubsub_topic"
}
You can use a topic name unique within your Cloud project.
Retrieve the code sample
To retrieve the code sample for use:
Clone the sample app repository to your local machine:
Node.js
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Python
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Go
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Java
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
C#
git clone https://github.com/GoogleCloudPlatform/dotnet-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Change to the directory that contains the Cloud Run sample
code:
Node.js
cd nodejs-docs-samples/run/pubsub/
Python
cd python-docs-samples/run/pubsub/
Go
cd golang-samples/run/pubsub/
Java
cd java-docs-samples/run/pubsub/
C#
cd dotnet-docs-samples/run/Run.Samples.Pubsub.MinimalApi/
Review the code
The code for this tutorial consists of the following:
A server that handles incoming requests.
Node.js
To keep the Node.js service easy to test, the server configuration is separate
from the server startup.
The Node.js web server is set up in app.js .
const express = require ( 'express' );
const app = express ();
// This middleware is available in Express v4.16.0 onwards
app . use ( express . json ());
The web server is started in index.js :
const app = require ( './app.js' );
const PORT = parseInt ( parseInt ( process . env . PORT )) || 8080 ;
app . listen ( PORT , () = >
console . log ( `nodejs-pubsub-tutorial listening on port ${ PORT } ` )
);
Python
import base64
from flask import Flask , request
app = Flask ( __name__ )
Go
// Sample run-pubsub is a Cloud Run service which handles Pub/Sub messages.
package main
import (
"encoding/json"
"io"
"log"
"net/http"
"os"
)
func main () {
http . HandleFunc ( "/" , HelloPubSub )
// Determine port for HTTP service.
port := os . Getenv ( "PORT" )
if port == "" {
port = "8080"
log . Printf ( "Defaulting to port %s" , port )
}
// Start HTTP server.
log . Printf ( "Listening on port %s" , port )
if err := http . ListenAndServe ( ":" + port , nil ); err != nil {
log . Fatal ( err )
}
}
Java
import org.springframework.boot.SpringApplication ;
import org.springframework.boot.autoconfigure.SpringBootApplication ;
@SpringBootApplication
public class PubSubApplication {
public static void main ( String [] args ) {
SpringApplication . run ( PubSubApplication . class , args );
}
}
C#
var builder = WebApplication . CreateBuilder ( args );
var app = builder . Build ();
var port = Environment . GetEnvironmentVariable ( "PORT" );
if ( port != null )
{
app . Urls . Add ( $"http://0.0.0.0:{port}" );
}
A handler that processes the Pub/Sub message and logs a greeting.
Node.js
app . post ( '/' , ( req , res ) = > {
if ( ! req . body ) {
const msg = 'no Pub/Sub message received' ;
console . error ( `error: ${ msg } ` );
res . status ( 400 ). send ( `Bad Request: ${ msg } ` );
return ;
}
if ( ! req . body . message ) {
const msg = 'invalid Pub/Sub message format' ;
console . error ( `error: ${ msg } ` );
res . status ( 400 ). send ( `Bad Request: ${ msg } ` );
return ;
}
const pubSubMessage = req . body . message ;
const name = pubSubMessage . data
? Buffer . from ( pubSubMessage . data , 'base64' ). toString (). trim ()
: 'World' ;
console . log ( `Hello ${ name } !` );
res . status ( 204 ). send ();
});
Python
@app . route ( "/" , methods = [ "POST" ])
def index ():
"""Receive and parse Pub/Sub messages."""
envelope = request . get_json ()
if not envelope :
msg = "no Pub/Sub message received"
print ( f "error: { msg } " )
return f "Bad Request: { msg } " , 400
if not isinstance ( envelope , dict ) or "message" not in envelope :
msg = "invalid Pub/Sub message format"
print ( f "error: { msg } " )
return f "Bad Request: { msg } " , 400
pubsub_message = envelope [ "message" ]
name = "World"
if isinstance ( pubsub_message , dict ) and "data" in pubsub_message :
name = base64 . b64decode ( pubsub_message [ "data" ]) . decode ( "utf-8" ) . strip ()
print ( f "Hello { name } !" )
return ( "" , 204 )
Go
// WrappedMessage is the payload of a Pub/Sub event.
//
// For more information about receiving messages from a Pub/Sub event
// see: https://cloud.google.com/pubsub/docs/push#receive_push
type WrappedMessage struct {
Message struct {
Data [] byte `json:"data,omitempty"`
ID string `json:"id"`
} `json:"message"`
Subscription string `json:"subscription"`
}
// HelloPubSub receives and processes a Pub/Sub push message.
func HelloPubSub ( w http . ResponseWriter , r * http . Request ) {
var m WrappedMessage
body , err := io . ReadAll ( r . Body )
defer r . Body . Close ()
if err != nil {
log . Printf ( "io.ReadAll: %v" , err )
http . Error ( w , "Bad Request" , http . StatusBadRequest )
return
}
// byte slice unmarshalling handles base64 decoding.
if err := json . Unmarshal ( body , & m ); err != nil {
log . Printf ( "json.Unmarshal: %v" , err )
http . Error ( w , "Bad Request" , http . StatusBadRequest )
return
}
name := string ( m . Message . Data )
if name == "" {
name = "World"
}
log . Printf ( "Hello %s!" , name )
}
Java
import com.example.cloudrun.Body ;
import java.util.Base64 ;
import org.apache.commons.lang3.StringUtils ;
import org.springframework.http.HttpStatus ;
import org.springframework.http.ResponseEntity ;
import org.springframework.web.bind.annotation.RequestBody ;
import org.springframework.web.bind.annotation.RequestMapping ;
import org.springframework.web.bind.annotation.RequestMethod ;
import org.springframework.web.bind.annotation.RestController ;
// PubsubController consumes a Pub/Sub message.
@RestController
public class PubSubController {
@RequestMapping ( value = "/" , method = RequestMethod . POST )
public ResponseEntity<String> receiveMessage ( @RequestBody Body body ) {
// Get PubSub message from request body.
Body . Message message = body . getMessage ();
if ( message == null ) {
String msg = "Bad Request: invalid Pub/Sub message format" ;
System . out . println ( msg );
return new ResponseEntity <> ( msg , HttpStatus . BAD_REQUEST );
}
String data = message . getData ();
String target =
! StringUtils . isEmpty ( data ) ? new String ( Base64 . getDecoder (). decode ( data )) : "World" ;
String msg = "Hello " + target + "!" ;
System . out . println ( msg );
return new ResponseEntity <> ( msg , HttpStatus . OK );
}
}
C#
app . MapPost ( "/" , ( Envelope envelope ) = >
{
if ( envelope ?. Message ?. Data == null )
{
app . Logger . LogWarning ( "Bad Request: Invalid Pub/Sub message format." );
return Results . BadRequest ();
}
var data = Convert . FromBase64String ( envelope . Message . Data );
var target = System . Text . Encoding . UTF8 . GetString ( data );
app . Logger . LogInformation ( $"Hello {target}!" );
return Results . NoContent ();
});
You must code the service to return an accurate HTTP response code. Success
codes, such as HTTP 200 or 204 , acknowledge complete processing of the
Pub/Sub message. Error codes, such as HTTP 400 or 500 , indicate
the message will be retried, as described in
Receiving messages using Push guide . Unlike functions
created with the Cloud Functions v2 API , you cannot disable retries
for functions created with the Cloud Run Admin API .
To learn more, see
Configure event-driven function retries .
A Dockerfile that defines the operating environment for the service. The
contents of the Dockerfile vary by language.
Node.js
# Use the official lightweight Node . js image .
# https : //hub.docker.com/_/node
FROM node : 20 - slim
# Create and change to the app directory .
WORKDIR / usr / src / app
# Copy application dependency manifests to the container image .
# A wildcard is used to ensure both package . json AND package - lock . json are copied .
# Copying this separately prevents re - running npm install on every code change .
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
COPY . .
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
< image>gcr . io / PROJECT_ID / pubsub < / image >
< / to >
< / configuration >
< / plugin >
C#
# Build in SDK base image
FROM mcr . microsoft . com / dotnet / sdk : 6.0 AS build - env
WORKDIR / app
COPY * . csproj . /
RUN dotnet restore
COPY . . /
RUN dotnet publish - r linux - x64 -- no - self - contained - p : PublishReadyToRun = true - c Release - o out
# Copy to runtime image
FROM mcr . microsoft . com / dotnet / aspnet : 6.0
WORKDIR / app
COPY -- from = build - env / app / out .
# Port passed in by Cloud Run via environment variable PORT . Default 8080 .
ENV PORT = 8080
ENTRYPOINT [ "dotnet" , "Run.Samples.Pubsub.MinimalApi.dll" ]
For details on how to authenticate the origin of Pub/Sub requests, see
Integrate with Pub/Sub .
Ship the code
Shipping code consists of three steps: building a container image with
Cloud Build, uploading the container image to Artifact Registry, and
deploying the container image to Cloud Run.
To ship your code:
Build your container and publish on Artifact Registry:
Node.js
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name.
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
re-used if required.
Python
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name.
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
re-used if required.
Go
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name.
Upon success, you should see a SUCCESS message containing the ID,
creation time, and image name. The image is stored in Artifact Registry and can be
re-used if required.
Java
Use the gcloud CLI credential helper
to authorize Docker to push to your Artifact Registry.
gcloud auth configure-docker
Use the Jib Maven Plugin to build and push the container to Artifact Registry.
mvn compile jib:build -D image = REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name.
Upon success, you should see a BUILD SUCCESS message. The image is stored in Artifact Registry and can be re-used if required.
C#
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name.
Upon success, you should see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
re-used if required.
Deploy your application:
Command line
Run the following command to deploy your app:
gcloud run deploy pubsub-tutorial --image REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub --no-allow-unauthenticated
Replace:
PROJECT_ID with your Google Cloud project ID.
REPOSITORY with the name of the Artifact Registry repository.
REGION with the Google Cloud region to be used for the Artifact Registry repository.
pubsub is the image name and
pubsub-tutorial is the name of the service.
Notice that the container image is deployed to the service and region that
you configured previously under Setting up gcloud
The --no-allow-unauthenticated flag restricts unauthenticated access to the
service. By keeping the service private you can rely on Cloud Run's
automatic Pub/Sub integration to authenticate requests. See
Integrate with Pub/Sub for
more details on how this is configured. For more details about authentication
that is based on Identity and Access Management (IAM), see
Managing access using IAM .
Wait until the deployment is complete: this can take about half a minute.
On success, the command line displays the service URL. This URL is used to
configure a Pub/Sub subscription.
If you want to deploy a code update to the service, repeat the previous
steps. Each deployment to a service creates a new revision and automatically
starts serving traffic when ready.
Terraform
To create a Cloud Run service, add the following to your existing .tf file.
resource "google_project_service" "cloudrun_api" {
service = "run.googleapis.com"
disable_on_destroy = false
}
resource "google_cloud_run_v2_service" "default" {
name = "pubsub-tutorial"
location = " REGION "
template {
containers {
image = " IMAGE_URL "
}
}
depends_on = [ google_project_service.cloudrun_api ]
}
Replace:
IMAGE_URL with your image URL: REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub
REGION with the Google Cloud region to be used for the Artifact Registry repository.
Integrate with Pub/Sub
Important: If your project was created on or before April 8, 2021, you must grant
the iam.serviceAccountTokenCreator
role to the service agent
service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com on the project
in order to allow Pub/Sub to create tokens. However, if
your project was created after that date, you do not need to grant it this role
because it has the roles/pubsub.serviceAgent
role with identical permissions.
To integrate the service with Pub/Sub:
gcloud
Create or select a service account to represent the Pub/Sub
subscription identity.
gcloud iam service-accounts create cloud-run-pubsub-invoker \
--display-name " Cloud Run Pub/Sub Invoker "
You can use cloud-run-pubsub-invoker or replace with a name unique within
your Google Cloud project.
Create a Pub/Sub subscription with the service account:
Give the invoker service account permission to invoke your pubsub-tutorial service:
gcloud run services add-iam-policy-binding pubsub-tutorial \
--member = serviceAccount: cloud-run-pubsub-invoker @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/run.invoker
It can take several minutes for the IAM changes to
propagate. In the meantime, you might see HTTP 403 errors in the
service logs.
Allow Pub/Sub to create authentication tokens in your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Replace:
PROJECT_ID with your Google Cloud project ID.
PROJECT_NUMBER with your Google Cloud project number.
Project ID and project number are listed in the Project info panel in
the Google Cloud console for your project.
Create a Pub/Sub subscription with the service account:
gcloud pubsub subscriptions create myRunSubscription --topic myRunTopic \
--ack-deadline = 600 \
--push-endpoint = SERVICE-URL / \
--push-auth-service-account = cloud-run-pubsub-invoker @ PROJECT_ID .iam.gserviceaccount.com
Replace:
myRunTopic with the topic you
previously created .
SERVICE-URL with the HTTPS URL provided on deploying the
service. This URL works even if you have also added a domain mapping .
PROJECT_ID with your Google Cloud project ID.
The --push-auth-service-account flag activates the Pub/Sub push
functionality for Authentication and authorization .
Your Cloud Run service domain is automatically registered for use
with Pub/Sub subscriptions.
For Cloud Run only, there is a built-in authentication check
that the token is valid and an authorization check that the service
account has permission to invoke the Cloud Run service.
Your service is now fully integrated with Pub/Sub.
Terraform
Create or select a service account to represent the Pub/Sub
subscription identity.
resource "google_service_account" "sa" {
account_id = "cloud-run-pubsub-invoker"
display_name = "Cloud Run Pub/Sub Invoker"
}
Create a Pub/Sub subscription with the service account:
Give the invoker service account permission to invoke your pubsub-tutorial service:
resource "google_cloud_run_service_iam_binding" "binding" {
location = google_cloud_run_v2_service.default.location
service = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
members = [ "serviceAccount:${google_service_account.sa.email}" ]
}
Allow Pub/Sub to create authentication tokens in your project:
resource "google_project_service_identity" "pubsub_agent" {
provider = google-beta
project = data.google_project.project.project_id
service = "pubsub.googleapis.com"
}
resource "google_project_iam_binding" "project_token_creator" {
project = data.google_project.project.project_id
role = "roles/iam.serviceAccountTokenCreator"
members = [ "serviceAccount:${google_project_service_identity.pubsub_agent.email}" ]
}
Create a Pub/Sub subscription with the service account:
resource "google_pubsub_subscription" "subscription" {
name = "pubsub_subscription"
topic = google_pubsub_topic.default.name
push_config {
push_endpoint = google_cloud_run_v2_service.default.uri
oidc_token {
service_account_email = google_service_account.sa.email
}
attributes = {
x-goog-version = "v1"
}
}
depends_on = [ google_cloud_run_v2_service.default ]
}
Your service is now fully integrated with Pub/Sub.
Try it out
To test the end-to-end solution:
Send a Pub/Sub message to the topic:
gcloud pubsub topics publish myRunTopic --message "Runner"
You can also publish messages programmatically instead of using the
command-line as shown in this tutorial. For more information, see
Publishing messages .
Navigate to the service logs:
Navigate to the Google Cloud console
Click the pubsub-tutorial service.
Select the Logs tab.
Logs might take a few moments to appear. If you don't see them
immediately, check again after a few moments.
Look for the "Hello Runner!" message.
Success: You deployed a Cloud Run service that automatically responds to Pub/Sub messages.
Clean up
To walk through a more in-depth use case of using
Cloud Run with Pub/Sub, skip cleanup for now and continue with
the Image Processing with Cloud Run tutorial .
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
Delete the Pub/Sub topic myRunTopic
Delete the Pub/Sub subscription myRunSubscription
Delete your container image named REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /pubsub from Artifact Registry.
Delete the invoker service account cloud-run-pubsub-invoker@PROJECT_ID.iam.gserviceaccount.com
What's next
Learn how to configure retries .
See Restricting ingress for information on increasing production security by using internal ingress controls to limit ingress.
Expand the sample service deployed in this tutorial to add
image processing functionality that modifies images uploaded to Cloud Storage .
Learn more about how topics fit into
Pub/Sub architecture and how to
manage topics
Learn more about Pub/Sub subscriptions in
managing subscriptions .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
