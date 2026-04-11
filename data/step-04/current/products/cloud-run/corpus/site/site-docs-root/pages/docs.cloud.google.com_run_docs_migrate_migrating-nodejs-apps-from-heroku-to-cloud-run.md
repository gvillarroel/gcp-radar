---
title: "Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run
  title: "Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation"
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
Migrate Node.js apps from Heroku to Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial describes how to migrate Node.js web apps that are running on
Heroku to Cloud Run on Google Cloud. This tutorial
is intended for architects and product owners who want to migrate their apps
from Heroku to managed services on Google Cloud.
Cloud Run is a managed compute platform that lets you run
stateless containers that are invocable through HTTP requests. It is built on
open source
Knative ,
which enables portability across platforms and supports container workflows and
standards for continuous delivery. The Cloud Run platform is well
integrated with the Google Cloud product suite and makes it easier for you
to design and develop apps that are portable, scalable, and resilient.
In this tutorial, you learn how to migrate an app to Google Cloud that's
written in Node.js and uses
Heroku Postgres
as a backing service on Heroku. The web app is containerized and hosted in
Cloud Run and uses Cloud SQL for PostgreSQL as its persistence
layer.
In the tutorial, you use a simple app called Tasks that lets you view and create
tasks. These tasks are stored in Heroku Postgres in the current deployment of
the app on Heroku.
This tutorial assumes that you are familiar with the basic functionality of
Heroku
and that you have a Heroku account (or access to one). It also assumes you are
familiar with
Cloud Run ,
Cloud SQL ,
Docker ,
and
Node.js .
Objectives
Build a Docker image to deploy the app to Cloud Run.
Create a Cloud SQL for PostgreSQL instance to serve as the
backend after migration to Google Cloud.
Review the Node.js code to understand how Cloud Run
connects to Cloud SQL and to see the code changes (if any) that
are required in order to migrate to Cloud Run from Heroku.
Migrate data from Heroku Postgres to Cloud SQL for PostgreSQL.
Deploy the app to Cloud Run.
Test the deployed app.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Run
Cloud Storage
Cloud SQL for PostgreSQL
Container Registry
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
You might also be charged for the resources you use on Heroku.
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
Enable the Cloud SQL, Cloud Build, Cloud Run, Container Registry, Service Networking, Serverless VPC Access APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
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
Enable the Cloud SQL, Cloud Build, Cloud Run, Container Registry, Service Networking, Serverless VPC Access APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Set up your environment
Open Cloud Shell.
OPEN Cloud Shell
In Cloud Shell, set environment variables and default values for
the Google Cloud CLI used in this tutorial.
gcloud config set project PROJECT_ID
gcloud config set run/region us-central1
Replace PROJECT_ID with your project ID.
Architecture
The following figures outline the web app's architecture on Heroku (as is) and
its architectural layout on Google Cloud (that you will build).
Figure 1 . As-is architecture on Heroku
The Tasks app that's currently deployed in Heroku consists of one or more web
dynos. Web dynos are able to receive and respond to HTTP traffic, unlike worker
dynos, which are better suited for background jobs and timed tasks. The app
serves an index page that displays tasks stored in a Postgres database, using
the Mustache templating library for Node.js.
You can access the app at an HTTPS URL. A /tasks route at that URL lets you
create new tasks.
Figure 2 . Architecture that you build on Google Cloud
On Google Cloud, Cloud Run is used as the serverless
platform to deploy the Tasks app. Cloud Run is designed to run
stateless, request-driven containers. It is well suited for when you need your
managed service to support containerized apps that autoscale and also scale to
zero when they're not serving traffic.
Map components used in Heroku to Google Cloud
The following table maps components in the Heroku platform to Google Cloud.
This mapping helps you translate the architecture outlined in this tutorial from
Heroku to Google Cloud.
Component
Heroku platform
Google Cloud
Containers
Dynos :
Heroku uses the container model to build and scale Heroku apps. These Linux
containers are called dynos and can scale to a number that you specify
to support resource demands for your Heroku app. You can select from a range
of dyno types based on your app's memory and CPU requirements.
Cloud Run containers: Google Cloud
supports running containerized workloads in stateless containers that can be run
in a fully managed environment or in Google Kubernetes Engine (GKE)
clusters.
Web app
Heroku app : Dynos are the building blocks of Heroku apps.
Apps usually consist of one or more dyno types, usually a combination of
web and worker dynos.
Cloud Run service : A web app can be modeled
as a Cloud Run service. Each service gets its own HTTPS
endpoint and can automatically scale up or down from 0 to N based on the
traffic to your service endpoint.
Database
Heroku Postgres is Heroku's database as a service (DaaS) based on
PostgreSQL.
Cloud SQL is a managed database
service for relational databases on Google Cloud.
Deploy the sample Tasks web app to Heroku
The next sections show how to set up the command-line interface (CLI) for
Heroku, clone the GitHub source repository, and deploy the app to Heroku.
Set up the command-line interface for Heroku
This tutorial runs the Heroku CLI in Cloud Shell and must authenticate using a Heroku API key . When running in Cloud Shell, the Heroku CLI cannot authenticate using a password or web-based authentication.
Alternatively, if you do run the sample on a local terminal, you can use any Heroku CLI authentication method. When running the tutorial on a local terminal, you must also install Google Cloud CLI , git , and Docker .
Log in to the web console for Heroku ,
and then from your account settings page, copy the value of your API key.
In Cloud Shell, install the Heroku CLI
In Cloud Shell, authenticate the Heroku CLI. When prompted for your
password, enter the value of your API key that you copied from the Heroku
console, not the password you use to sign in to the console.
heroku login --interactive
Clone the source repository
In Cloud Shell, clone the sample Tasks app GitHub repository:
git clone https://github.com/GoogleCloudPlatform/migrate-webapp-heroku-to-cloudrun-node.git
Change directories to the directory created by cloning the repository:
cd migrate-webapp-heroku-to-cloudrun-node
The directory contains the following files:
A Node.js script called index.js with the code for the
routes served by the web app.
package.json and package-lock.json files that
outline the web app's dependencies. You must install these dependencies
in order for the app to run.
A Procfile file that specifies the command that the app executes
on startup. You create a Procfile file to deploy your app to
Heroku.
A views directory, with the HTML content served by the web
app on the "/" route.
A .gitignore file.
Deploy an app to Heroku
In Cloud Shell, create a Heroku app:
heroku create
Make note of the name created for the app. You need this value in
the next step.
Create an environment variable for the Heroku app name:
export APP_NAME= APP_NAME
Replace APP_NAME with
the app name returned by the heroku create command.
Add the Heroku Postgres add-on to provision a PostgreSQL database:
heroku addons:create heroku-postgresql:mini
Make sure the add-on was successfully added:
heroku addons
If the Postgres add-on was successfully added, you see a message
similar to the following:
Add-on Plan Price State
----------------- ----- -------- -----
heroku-postgresql mini 5$/month created
Deploy the app to Heroku:
git push heroku master
Run the following command to confirm the value of DATABASE_URL.
heroku config
Make note of the retrieved value for DATABASE_URL. You need this value in
the next step.
Run a Docker container.
docker run -it --rm postgres psql " DATABASE_URL "
Replace DATABASE_URL with
the Heroku Postgres URL that you noted in the previous step.
In the Docker container, create the TASKS table by using the
following command:
CREATE TABLE TASKS
(DESCRIPTION TEXT NOT NULL);
Exit the container:
exit
In Cloud Shell, get the Web URL for your Heroku app by running the following command:
heroku info
Open the web URL in a browser window. The app looks the following
screenshot (although your version won't have the tasks listed):
Create sample tasks in your app from the browser. Make sure the tasks
are retrieved from the database and visible in the UI.
Prepare the web app code for migration to Cloud Run
This section details the steps that you need to complete to prepare your web app
for deployment to Cloud Run.
Build and publish your Docker container to Container Registry
You need a Docker image to build the app container so it can run in
Cloud Run. You can build the container manually or by using
Buildpacks.
Build container manually
In Cloud Shell, create a Dockerfile in the directory created by
cloning the repository for this tutorial:
cat Dockerfile
# Use the official Node image.
# https://hub.docker.com/_/node
FROM node:10-alpine
# Create and change to the app directory.
WORKDIR /app
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
RUN npm install
# Copy local code to the container image.
COPY . /app
# Configure and document the service HTTP port.
ENV PORT 8080
EXPOSE $PORT
# Run the web service on container startup.
CMD ["npm", "start"]
EOF
Build your container with
Cloud Build
and publish the image to
Container Registry :
gcloud builds submit --tag gcr.io/ PROJECT_ID / APP_NAME :1 \
--gcs-log-dir=gs:// PROJECT_ID _cloudbuild
Create an environment variable to hold the name of the Docker
image that you created:
export IMAGE_NAME="gcr.io/ PROJECT_ID / APP_NAME :1"
Build container with Buildpacks
In Cloud Shell, install the
pack CLI .
Set the pack CLI to use the Heroku builder by default:
pack config default-builder heroku/buildpacks:22
Create an environment variable to hold the Docker image name:
export IMAGE_NAME=gcr.io/ PROJECT_ID / APP_NAME :1
Build the image using the pack command and push or publish the image
to Container Registry:
pack build --publish $IMAGE_NAME
Create a Cloud SQL for PostgreSQL instance
You create a Cloud SQL for PostgreSQL instance to serve as the backend
for the web app. In this tutorial, PostgreSQL is best suited as the sample app
deployed on Heroku, which uses a Postgres database as its backend. For purposes
of this app, migrating to Cloud SQL for PostgreSQL from a managed
Postgres service requires no schema changes.
Note: Database migration from on-premises or hosted environments to
Google Cloud is a multi-step process that requires careful planning,
schema and data migration, and testing. For more information, see the
Cloud Run documentation
and
importing data into Cloud SQL .
Prepare your network for Cloud SQL with a private IP address.
gcloud compute addresses create google-managed-services-default \
--global \
--purpose=VPC_PEERING \
--prefix-length=16 \
--description="peering range for CloudSQL Private Service Access" \
--network=default
gcloud services vpc-peerings connect \
--service=servicenetworking.googleapis.com \
--ranges=google-managed-services-default \
--network=default \
--project= PROJECT_ID
Create an environment variable called CLOUDSQL_DB_NAME to hold the name of the database instance that you create in the next step:
export CLOUDSQL_DB_NAME=tasks-db
Create the database:
gcloud sql instances create $CLOUDSQL_DB_NAME \
--cpu=1 \
--memory=4352Mib \
--database-version=POSTGRES_15 \
--region=us-central1 \
--network default \
--no-assign-ip
The instance might take a few minutes to initialize.
Set a password for the Postgres user:
gcloud sql users set-password postgres \
--instance=$CLOUDSQL_DB_NAME \
--password= POSTGRES_PASSWORD
Replace POSTGRES_PASSWORD with the password that
you want to use for the Postgres database.
Import data into Cloud SQL from Heroku Postgres
There are multiple migration patterns that you can use to migrate data into
Cloud SQL. Generally, the best approach that requires little
or no downtime is to configure Cloud SQL as a replica to the database
being migrated, and making Cloud SQL the primary instance after
migration. Heroku Postgres doesn't support external replicas (followers), so in
this tutorial, you use open source tools to migrate the app's schema.
For the Tasks app in this tutorial, you use the
pg_dump
utility to export data from Heroku Postgres to a Cloud Storage bucket
and then import it into Cloud SQL. This utility can transfer data
across homogeneous versions or when the destination database's version is newer
than the source database.
In Cloud Shell, get the database credentials for your Heroku
Postgres database that's attached to the sample app. You need these
credentials in the next step.
heroku pg:credentials:url
This command returns the connection information string and connection
URL for your application. The connection information string has the
following format:
" dbname = DATABASE_NAME host = FQDN port =5432 user = USER_NAME password = PASSWORD_STRING sslmode =require"
You need the values shown in the connection string in the next step.
For an example of an FQDN
( fully qualified domain name )
value in a connection information string, see the
Heroku documentation .
Set environment variables to hold Heroku values that you use in
subsequent steps:
export HEROKU_PG_DBNAME= DATABASE_NAME
export HEROKU_PG_HOST= FQDN
export HEROKU_PG_USER= USER_NAME
export HEROKU_PG_PASSWORD= PASSWORD_STRING
Replace the following:
DATABASE_NAME : the database name shown in the
information string.
FQDN : the FQDN shown in the
information string.
USER_NAME : the user name shown in the
information string.
PASSWORD_STRING : the password string shown in the
information string.
Create a SQL format backup of your Heroku Postgres database:
docker run \
-it --rm \
-e PGPASSWORD=$HEROKU_PG_PASSWORD \
-v $(pwd):/tmp \
--entrypoint "pg_dump" \
postgres \
-Fp \
--no-acl \
--no-owner \
-h $HEROKU_PG_HOST \
-U $HEROKU_PG_USER \
$HEROKU_PG_DBNAME > herokudump.sql
Create an environment variable to hold the name of your
Cloud Storage bucket:
export PG_BACKUP_BUCKET=gs:// PROJECT_ID -pg-backup-bucket
Create a Cloud Storage bucket:
gcloud storage buckets create $PG_BACKUP_BUCKET \
--location=us-central1 \
--public-access-prevention \
--uniform-bucket-level-access
Upload the SQL file to this bucket:
gcloud storage cp herokudump.sql $PG_BACKUP_BUCKET/herokudump.sql
Authorize your Cloud SQL instance with the
necessary roles to import the SQL file
from the Cloud Storage bucket:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL_DB_NAME --format='get("serviceAccountEmailAddress")') \
--role=roles/storage.objectAdmin
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL_DB_NAME --format='get("serviceAccountEmailAddress")') \
--role=roles/cloudsql.editor
Import the SQL file to the Cloud SQL instance:
gcloud sql import sql $CLOUDSQL_DB_NAME $PG_BACKUP_BUCKET/herokudump.sql \
--database=postgres \
--user=postgres
When prompted do you want to continue (y/n) , enter "y".
How Cloud Run accesses the Cloud SQL database
Just as the web app deployed to Heroku needs to connect to the managed instance
of Heroku Postgres, Cloud Run requires access to
Cloud SQL in order to be able to read and write data.
Cloud Run communicates with Cloud SQL using the
Cloud SQL proxy that's automatically activated and configured when you
deploy the container to Cloud Run. The database doesn't need to
have external IP addresses approved because all the communication that it
receives is from the proxy using secure TCP.
Your code needs to invoke database operations (such as fetching data from the
database or writing to it) by invoking the proxy over a UNIX socket.
Because this web app is written in Node.js, you use the pg-connection-string
library to parse a database URL and create a config object. The advantage of
this approach is that it makes connecting to the backend database seamless
across Heroku and Cloud Run.
In the next step, you pass the database URL as an environment variable when you
deploy the web app.
Deploy the sample app to Cloud Run
In Cloud Shell, configure serverless vpc access
to allow private traffic from Cloud Run to Cloud SQL:
gcloud compute networks subnets create serverless-connector-subnet \
--network=default \
--range=10.0.0.0/28 \
--region=us-central1
gcloud compute networks vpc-access connectors create serverless-connector \
--region=us-central1 \
--subnet=serverless-connector-subnet
In Cloud Shell, create an environment variable that holds the
connection name of the Cloud SQL instance that you created:
export DB_CONN_NAME=$(gcloud sql instances describe $CLOUDSQL_DB_NAME --format='value(connectionName)')
Create an environment variable called DATABASE_URL to hold the connection
string to connect to the Cloud SQL Proxy over a UNIX port.
export DATABASE_URL="socket:/cloudsql/${DB_CONN_NAME}?db=postgres&user=postgres&password= POSTGRES_PASSWORD "
Create a service account for Cloud Run with an IAM role to connect to the database:
gcloud iam service-accounts create sa-run-db-client
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:sa-run-db-client@ PROJECT_ID .iam.gserviceaccount.com \
--role=roles/cloudsql.client
Deploy the web app to Cloud Run:
gcloud run deploy tasksapp- PROJECT_ID \
--image=$IMAGE_NAME \
--service-account=sa-run-db-client@ PROJECT_ID .iam.gserviceaccount.com \
--set-env-vars=DATABASE_URL=$DATABASE_URL \
--add-cloudsql-instances $DB_CONN_NAME \
--vpc-connector serverless-connector \
--allow-unauthenticated
The preceding command also links your Cloud Run container to
the Cloud SQL database instance that you created. The command sets
an environment variable for Cloud Run to point to the
DATABASE_URL string that you created in the previous step.
Note: Because this sample tasks app is a public facing web app and uses the
--allow-unauthenticated flag, deployment will fail if your organization
has the Organization Policy iam.allowedPolicyMemberDomains
enforced. To deploy a Cloud Run sample app that is
public-facing and unauthenticated, disable the policy on your tutorial
project. For a real app that requires authentication for end users,
review authenticating end users .
Test the application
In Cloud Shell, get the URL at which Cloud Run
serves traffic:
gcloud run services list
You can also review the Cloud Run Service in the
Google Cloud console.
Make sure that your web app is accepting HTTP requests by navigating to your
Cloud Run Service URL.
Cloud Run creates, or spins up , a new container when an HTTP
request is sent to the serving endpoint and if a container is not already
running. This means that the request that causes a new container to spin up
might take a bit longer to be served. Given that extra time, take into account
the number of concurrent requests that your app can support and any specific
memory requirements it might have.
For this app, you use the default concurrency settings, which allow for a
Cloud Run service to serve 80 requests concurrently from a single
container.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial. You might also want to delete the resources created in
Heroku for this tutorial.
Delete the Google Cloud project
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
Delete the Heroku App
To delete the sample app you deployed to Heroku and the associated PostgreSQL
add-on, run the following command:
heroku apps:destroy -a APP_NAME
What's next
Learn about
importing data into Cloud SQL .
Explore the
Cloud Run documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
