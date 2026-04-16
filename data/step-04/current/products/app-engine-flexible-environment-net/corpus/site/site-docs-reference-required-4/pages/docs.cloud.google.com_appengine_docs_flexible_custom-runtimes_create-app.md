---
title: "Quickstart: Create a custom runtime app in the App Engine flexible environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app
  title: "Quickstart: Create a custom runtime app in the App Engine flexible environment\
    \ \_|\_ Google Cloud Documentation"
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
Create a custom runtime app in the App Engine flexible environment
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
OK
Note: If you are deploying a new web service using custom runtimes to Google Cloud,
we recommend getting started with
Cloud Run .
Custom runtimes
let you build apps that run in an environment defined by a
Dockerfile . By using a
Dockerfile, you can use languages and packages that are not part of the
Google Cloud and use the same resources and tooling that are used in the
App Engine flexible environment.
In this quickstart, an nginx web server is launched to
App Engine using a custom runtime.
Before you begin
Before running the sample app in this quickstart, you need to set up your
environment and create a new Google Cloud project for App Engine:
Create a new Google Cloud project by using the Google Cloud console:
Open the Google Cloud console:
Go to Projects
Click Create Project and then name your new Google Cloud project.
Enable billing in your new Google Cloud project by creating a new
billing account or setting an existing one:
Go to Billing
Download and install the Google Cloud CLI and then initialize the
gcloud CLI:
Download the SDK
Run the following gcloud command to create an App Engine
application and specify in which geographical region that you want your app
to run:
gcloud app create
Due to changes in the default
behavior for how Cloud Build uses service accounts in new projects, and
secure-by-default
organization policy changes , you might need to grant additional roles to
your deploying service account. For more information on granting specific roles,
see the troubleshooting guide .
App Engine Locations
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
Download the Hello World app
Choose one of the following to download the Hello World sample app from
GitHub, to your local machine:
Clone the Hello World sample app from the following repository:
git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples
Download the
sample
as a .zip file and then extract it to a local directory.
Navigate to the nginx directory where the sample code is located, for
example:
cd appengine-custom-runtimes-samples/nginx
Running Hello World on your local machine
You can test the sample app by downloading and installing
Docker , and then running
the Hello World container on your local machine.
There are no App Engine specific steps here so you can test the sample
app using the tools and approach that you prefer.
Deploying Hello World to App Engine
When you are ready to deploy the sample app to App Engine, perform the
following steps:
From the directory where your app.yaml and Dockerfile are located, run
the following command:
gcloud app deploy
Learn about the optional flags .
To see your app running at
https:// PROJECT_ID . REGION_ID .r.appspot.com , run the following
command to launch your browser:
gcloud app browse
Common gcloud command flags
Include the --version flag to specify an ID that uniquely
identifies that version of your app, otherwise one is generated for you.
Example: --version [YOUR_VERSION_ID]
Include the --project flag to specify an alternate
Google Cloud project ID to what you initialized as the
default in the gcloud tool. Example:
--project [YOUR_PROJECT_ID]
Example:
gcloud app deploy --version pre-prod-5 --project my-sample-app
To learn more about deploying your app from the command line, see
Testing and Deploying Your App
. For a list of all the command flags, see the
gcloud app deploy
reference.
OK
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
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
What's next
Learn more about Dockerfiles at the
Dockerfile reference .
For information on how to create your own custom runtime, see
Building Custom Runtimes .
Code review
Hello World is the simplest possible App Engine app, as it creates
a single container that runs only one service and one version. This section
describes each of the app's files in detail.
app.yaml
Specifies the configuration of the app. The app.yaml file must reside in
the same directory as the Dockerfile file.
runtime : custom
env : flex
The runtime: custom entry tells App Engine to look for a
Dockerfile that will define your runtime's image and env: flex
specifies that you are deploying to the flexible environment.
For more information, see the
app.yaml
reference.
Dockerfile
Defines the set of instructions that are used to create the Docker image for
the sample app's container. The Dockerfile file must reside in the same
directory as the app.yaml file. This Dockerfile installs the nginx web
server and copies some basic configuration:
# The standard nginx container just runs nginx. The configuration file added
# below will be used by nginx.
FROM nginx
# Copy the nginx configuration file. This sets up the behavior of nginx, most
# importantly, it ensure nginx listens on port 8080. Google App Engine expects
# the runtime to respond to HTTP requests at port 8080.
COPY nginx.conf /etc/nginx/nginx.conf
# create log dir configured in nginx.conf
RUN mkdir -p /var/log/app_engine
# Create a simple file to handle health checks. Health checking can be disabled
# in app.yaml, but is highly recommended. Google App Engine will send an HTTP
# request to /_ah/health and any 2xx or 404 response is considered healthy.
# Because 404 responses are considered healthy, this could actually be left
# out as nginx will return 404 if the file isn't found. However, it is better
# to be explicit.
RUN mkdir -p /usr/share/nginx/www/_ah && \
echo "healthy" > /usr/share/nginx/www/_ah/health
# Finally, all static assets.
ADD www/ /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www
The FROM command builds a base image using the official docker image for
the nginx web server.
Using this Dockerfile , your container image will contain nginx and all
content in the www/ directory is available to your application.
The Hello World sample app also includes an
nginx.conf
file, which contains the basic nginx configuration information, as well was the
index.html
file, which serves as the root page for the nginx web server.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
