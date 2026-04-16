---
title: "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed
  title: "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
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
How requests are routed
Stay organized with collections
Save and categorize content based on your preferences.
Go
Java
Node.js
PHP
Python
Ruby
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
This page describes how HTTP requests from users reach the appropriate version
of a service. Requests can be routed in the following ways:
Routing with URLs
Routing with a dispatch file
Routing with Cloud Load Balancing
These options apply only to deployed apps. When you are testing locally,
the routing behavior depends on the particular runtime and development
environment that you're using.
Note that if you use the legacy bundled services to test your app using the
local development server ,
the available routing and dispatch features are slightly different. To
programmatically create URLs that work with both production and development
servers, use the
get_hostname method.
Routing with URLs
Once your app is running in App Engine, you can use the following URL to send
HTTP requests to the app:
https:// PROJECT_ID . REGION_ID .r.appspot.com
where
PROJECT_ID is the ID of the Google Cloud project
that contains the app.
This URL sends requests to your app's default service at the version that you
have configured to receive traffic.
Note: We recommend
using the HTTPS protocol to send requests to your app. HTTPS requests sent to
the
REGION_ID .r.appspot.com must use the string " -dot- " to separate subdomains
instead of " . ". You can use the simple " . " URL notation with your own
custom domains and with HTTP requests.
URLs for services and versions
If you create more than one service in your app, each service has its own URL.
Each version of a service also has its own URL, so you can deploy and test a new
version before configuring that version to receive traffic.
The URLs for specific services and versions are in the following form:
VERSION -dot- SERVICE -dot- PROJECT_ID . REGION_ID .r.appspot.com
You can omit VERSION -dot- if you don't need to target a
specific version.
To retrieve the IDs of your app's services and versions, you can use
any of the following tools:
Console
In the Google Cloud console, you can view the corresponding
Instances ,
Services ,
and Versions
pages.
gcloud
Run the
gcloud app instances list
command to list the resource IDs within a specific Google Cloud project.
API
To programmatically retrieve resource IDs, see the list methods in the
Admin API .
Example URLs
Here are some examples of URLs for App Engine, showing both the
appspot.com domain that App Engine assigns to your app and
a custom domain, which you can set up for your app .
Sends the request to an available instance of the default service:
https:// PROJECT_ID . REGION_ID .r.appspot.com
https:// CUSTOM_DOMAIN
Requests are received by any version that is configured for traffic in the
default service.
Sends a request to an available instance of a specific service:
https:// SERVICE_ID -dot- PROJECT_ID . REGION_ID .r.appspot.com
https:// SERVICE_ID . CUSTOM_DOMAIN
Requests are received by any version that is configured for traffic in the
targeted service. If the service that you are targeting does not exist, the
request gets soft routed .
Sends a request to an available instance of a specific version in the
default service:
https:// VERSION_ID -dot-default-dot- PROJECT_ID . REGION_ID .r.appspot.com
https:// VERSION_ID . CUSTOM_DOMAIN
When a service is not targeted, requests are sent to the default service.
Soft routing
If a request matches the
PROJECT_ID . REGION_ID .r.appspot.com portion of
the hostname, but includes a service, version, or instance name that does not
exist, then the request is routed to the default service. Soft routing does
not apply to custom domains; requests to them will return a HTTP 404 status
code if the hostname is invalid.
Targeted routing
The following URL patterns reach their target,
if they exist . Requests that don't pass through
Cloud Load Balancing are never intercepted and
rerouted by the patterns that you have defined in your dispatch file:
Sends the request to an available instance of a specific service and
version:
https:// VERSION -dot- SERVICE -dot- PROJECT_ID . REGION_ID .r.appspot.com
https:// VERSION_ID . SERVICE_ID . PROJECT_ID . CUSTOM_DOMAIN
If you are using manually-scaled
services ,
you can target and send a request to a instance by including the instance ID.
The instance ID is an integer in the range from 0 up to the total number
of instances that are running, and can be specified as follows:
Sends a request to a specific service and version within a specific
instance:
https:// INSTANCE_ID -dot- VERSION_ID -dot- SERVICE_ID -dot- PROJECT_ID . REGION_ID .r.appspot.com
https:// INSTANCE_ID . VERSION_ID . SERVICE_ID . CUSTOM_DOMAIN
Note: Targeting an instance is not supported in services that are configured
for auto scaling or basic scaling. The instance ID must be an integer in the
range from 0 , up to the total number of instances running. Regardless of
your scaling type or instance class, it is not possible to send a request to
a specific instance without targeting a service or version within that
instance.
Routing with a dispatch file
You can create a dispatch file to override App Engine's URL-based
routing rules and define your own custom routing rules. With a dispatch file,
you can send incoming requests to a specific service based on the path or
hostname in the request URL.
Creating a dispatch file
To create a dispatch file, do the following:
Create a file named dispatch.yaml
either in the root of your project directory, or in the root directory of
your default service.
Define routing rules in the file as described see the
dispatch.yaml
reference.
Note the following about the routing rules:
You can define up to 20 routing rules. Each rule must contain the
url and service elements.
The rules must use HTTP URL patterns that include the " . "
notation for separating subdomains. URLs
defined with the HTTPS " -dot- " notation are not supported.
The rules also apply to the URLs that you define in your
cron.yaml file .
For example, you can create a dispatch file to route mobile requests like
https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route
worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static
backend:
dispatch:
# Send all mobile traffic to the mobile frontend.
- url: "*/mobile/*"
service: mobile-frontend
# Send all work to the one static backend.
- url: "*/work/*"
service: static-backend
Deploying the dispatch file
To deploy the dispatch file using gcloud, run the following command:
gcloud app deploy dispatch.yaml
Routing with Cloud Load Balancing
Cloud Load Balancing is a separate product that enables advanced network
configurations for all of your applications running on Google Cloud.
When HTTP(S) Load Balancing is enabled for
serverless apps , you can:
Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP
address that is not shared with other services.
Reuse the same SSL certificates and private keys that you use for
Compute Engine, Google Kubernetes Engine, and Cloud Storage. This eliminates
the need to manage separate certificates for serverless apps.
When routing requests that are mapped to an App Engine serverless NEG, the load balancer
only consults dispatch rules if the serverless NEG doesn't specify a service
or version. The load balancer ignores dispatch rules when the service or
version is configured in the serverless NEG.
Note the following:
We recommend that you use ingress controls
so that your app only receives requests sent from the load balancer
(and the VPC if you use it). Otherwise, users can use your app's
App Engine URL to bypass the load balancer, Cloud Armor
security policies, SSL certificates, and private keys that are passed through
the load balancer.
Understand the Region ID in URLs
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
You can use the following tools to see the region ID of your app:
Console
In the Google Cloud console, you can view the URLs for your app's
Instances ,
Services ,
and Versions .
All of these URLs include the region ID.
gcloud
When you deploy an app or service, the gcloud app deploy command
displays the URL after the deployment succeeds. This URL includes the
region ID.
To view the URL for a service that is already deployed:
Enter the gcloud app versions list
command to list the versions of a specific service. For example, to list
the versions of the default service, enter
gcloud app versions list --service=default .
Enter the gcloud app versions describe
command. The output of that command includes the version URL with the app's
region ID. For example, to describe version 20191023t101741 for the
default service, enter
gcloud app versions describe 20191023t101741 --service=default
Domain name is included in the request data
The domain name used for the request is included in the request data that is
passed to your app. Therefore, you can use the request data to control how your
app responds based on the domain name in the request. For example, if you want
to redirect to an official domain, you can code your app to check the Host
request header and then respond accordingly based on the domain name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
