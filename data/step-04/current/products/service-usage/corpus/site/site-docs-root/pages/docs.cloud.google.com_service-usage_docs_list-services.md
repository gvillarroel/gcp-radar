---
title: "List services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/list-services
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/list-services
  title: "List services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
List services
This document describes how to list the APIs and services that are enabled or
available in a Google Cloud project. The list of available or enabled
APIs and services can contain both public
Google Cloud services such as
Pub/Sub , and any APIs and services shared privately with you,
such as services created using Cloud Endpoints . For more
information on the differences between public and private APIs and services,
see
Public and Private Services .
To get or monitor the enabled services for an organization,
see List enabled services in an organization .
To list services in a project, we recommend that you use the
Google Cloud console or the Google Cloud CLI. This document describes how
to use both interfaces.
To program against the Service Usage API, use one of our provided
client libraries .
To experiment with the API, we recommend that you use the curl command.
You don't need to set up a full application environment; however, there is
some required setup.
Before you begin
To list the enabled and available APIs and services you need:
A Google Cloud project. To learn how to create a Google Cloud project, see
Creating and Managing Projects .
The correct Identity and Access Management permissions. To learn
about the IAM requirements for Service Usage,
see Access Control .
To install the Google Cloud CLI .
If you want to use the curl examples in this guide, make sure you follow the
instructions to complete the initial setup in
Getting Started . These steps include
defining gcurl , which is an authenticated alias for the standard curl
command, and defining the environment variable PROJECT_NUMBER .
List enabled services in an organization
To list which services are enabled across an organization use
Cloud Asset Inventory , which allows exporting
the state of all projects under the control of an organization in a single RPC
call. Cloud Asset Inventory can also be used to
monitor for state changes .
To export all enabled services for a particular organization, follow the Cloud Asset Inventory docs for Listing Assets .
To list the enabled APIs for an organization, run the following command after
you set your organization and billing project IDs:
NOW=$(TZ=GMT date +"%Y-%m-%dT%H:%M:%SZ")
gcloud asset list \
--organization=' ORGANIZATION_ID ' \
--billing-project=' BILLING_PROJECT_ID ' \
--asset-types='serviceusage.googleapis.com/Service' \
--snapshot-time=$NOW \
--content-type='resource'
Executing the previous command lets a sufficiently privileged user list the set
of enabled services for all projects in an organization.
To experiment with Cloud Asset Inventory commands, apply these commands to a
specific project. For example, the following command
lists all enabled services for a particular project:
NOW=$(TZ=GMT date +"%Y-%m-%dT%H:%M:%SZ")
gcloud asset list \
--project=' PROJECT_ID ' \
--billing-project=' BILLING_PROJECT_ID ' \
--asset-types='serviceusage.googleapis.com/Service' \
--snapshot-time=$NOW \
--content-type='resource'
List enabled services in a project
Listing enabled services uses quota from the
serviceusage.googleapis.com/list_enabled_requests quota metric. The default
available quota is 10 queries per second (QPS).
console
To list the enabled APIs and services in a project:
Go to the Google Cloud console
API Dashboard
page.
go to the API Dashboard page
Select your Google Cloud project by performing one of the following:
Click on a Google Cloud project under Select a recent project .
Use the Google Cloud project browser by performing the following
steps:
Click Select project to open the Google Cloud project browser.
Find your project and then click on the Google Cloud project name.
Click Open to open the project.
The APIs & Services page appears. You can find the list of APIs
enabled in your Google Cloud project in the table on this page.
gcloud
To list the enabled APIs and services in your current project, run the
following command:
gcloud services list
The command produces output similar to the following:
NAME TITLE
pubsub.googleapis.com Google Cloud Pub/Sub API
bigquery.googleapis.com BigQuery API
cloudtrace.googleapis.com Stackdriver Trace API
servicemanagement.googleapis.com Google Service Management API
monitoring.googleapis.com Stackdriver Monitoring API
storage-api.googleapis.com Google Cloud Storage JSON API
logging.googleapis.com Stackdriver Logging API
clouddebugger.googleapis.com Stackdriver Debugger API
...
curl
To list enabled services, call the
services.list
method with the state:ENABLED filter.
To list the enabled APIs and services in your project, run the following
command:
gcurl "https://serviceusage.googleapis.com/v1/projects/${PROJECT_NUMBER}/services?filter=state:ENABLED"
List available services in a project
Caution: The list of available services is substantially larger than the list of
enabled services. If you only need the set of enabled services, then use the
instructions in the previous section, List enabled services in a project.
Listing all services might take as long as 30 seconds due to the amount of data
returned. We recommend that you save the list of all available services, as
changes to this list are infrequent.
Listing all available services uses quota from the
serviceusage.googleapis.com/list_available_requests quota. The default
available quota is 1 QPS. The set of available services rarely changes and
can be cached for extended periods of time.
console
To list the APIs and services available to you in a project:
Go to the Google Cloud console
API Library
page.
Go to the API Library page
Select your Google Cloud project by performing one of the following:
Click on a Google Cloud project under Select a recent project .
Use the Google Cloud project browser by performing the following
steps:
Click Select project to open the Google Cloud project browser.
Find your project and then click on the Google Cloud project name.
Click Open to open the project.
The API Library screen appears. You can search for or scroll through
available APIs from this screen.
gcloud
To list the APIs and services available to you in
your current project, run the following command:
gcloud services list --available
The results include any services that have already been enabled, as
well as services that are available to be enabled for the current project.
The command produces output similar to the following:
NAME TITLE
places-backend.googleapis.com Google Places API Web Service
clouderrorreporting.googleapis.com Stackdriver Error Reporting API
analyticsreporting.googleapis.com Google Analytics Reporting API
youtube.googleapis.com YouTube Data API v3
adsense.googleapis.com AdSense Management API
sqladmin.googleapis.com Google Cloud SQL API
genomics.googleapis.com Genomics API
adexchangebuyer.googleapis.com Ad Exchange Buyer API II
...
curl
To list available services, call the
services.list
method.
To list the available APIs and services in your project, run the following command:
gcurl "https://serviceusage.googleapis.com/v1/projects/${PROJECT_NUMBER}/services"
The result includes all public services, all services for which the calling
user has the servicemanagement.services.bind permission, and all services
that have already been enabled on the project.
It is possible to exclude the services that are currently active on the
project by passing filter=state:DISABLED to the previous call.
Next steps
For information about how to enable or disable services in your
Google Cloud project, see
Enabling and Disabling Services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
