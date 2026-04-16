---
title: "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/go/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings
  title: "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
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
Ingress settings
Stay organized with collections
Save and categorize content based on your preferences.
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
This section describes how to use ingress settings to restrict network access to
your App Engine app. At a network level, by default, any resource on
the internet is able to reach your App Engine app on its
appspot URL
or at a custom domain
set up in App Engine. For example, the appspot.com URL can have the
following format:
SERVICE_ID . PROJECT_ID . REGION_ID .r.appspot.com .
You can change this default setting by specifying a
different setting for ingress. All ingress paths, including the default
appspot.com URL, are subject to your ingress setting. Ingress is set at the
service level.
Available ingress settings
The following settings are available:
Setting
Description
Internal
Most restrictive. Allows requests from resources attached to the
project's VPC networks, such as:
VMs in the same project, including Compute Engine VMs.
Shared VPC
when the App Engine app is deployed in the Shared VPC host
project. See Accessing internal services .
Requests from these sources stay within the Google network, even
if they access your service at the appspot.com URL.
Requests from other sources, including the internet, cannot reach your
service at the appspot.com URL or custom domains. There
is no support for multi-tenancy, that is, multiple trust domains
within the same project.
Internal and Cloud Load Balancing
Allows requests from the following resources:
Resources allowed by the more restrictive Internal setting
External Application Load Balancer
Use the Internal and Cloud Load Balancing setting to accept requests
from an external Application Load Balancer but not directly from the internet. Requests to
the appspot.com URL bypass the external Application Load Balancer, so this
setting prevents external requests from reaching the
appspot.com URL.
All
Least restrictive. Allows all requests, including requests directly from
the internet to the appspot.com URL.
Accessing internal services
The following considerations apply:
For requests from a Shared VPC, traffic is only considered internal if the
App Engine app is deployed in the Shared VPC host project. If the
App Engine app is deployed in a Shared VPC service project, only traffic
from networks owned by the app's own project is internal. All other traffic,
including traffic from other Shared VPCs, is external.
When accessing internal services, call them as you would normally do by using
their public URLs, either the default appspot.com URL or a
custom domain set up in App Engine.
For requests from Compute Engine VM instances or other resources running
inside a
VPC network
in the same project, no further setup is required.
Requests from resources within VPC networks in the same project are classified
as internal even if the resource they originate from has a public IP address.
Requests from on-premises resources connected to the VPC network via
Cloud VPN are considered internal .
View ingress settings
Console
Go to the App Engine Services page.
Go to the Services page
Locate the Ingress column. For each service, the value in this column
shows the ingress setting as one of All (default),
Internal + Load Balancing , or Internal .
gcloud
To view the ingress setting for a service using the gcloud CLI:
gcloud app services describe SERVICE
Replace SERVICE with the name of your service.
For example, to view the ingress settings and other information for the
default service run:
gcloud app services describe default
Edit ingress settings
Console
Go to the App Engine Services page.
Go to the Services page
Select the service you wish to edit.
Click Edit ingress setting .
Select the ingress setting that you want from the menu and click
Save .
gcloud
To update the ingress setting for a service using the gcloud CLI:
gcloud app services update SERVICE --ingress = INGRESS
Replace:
SERVICE : The name of your service.
INGRESS : The ingress control you want to apply. One of all ,
internal-only , or internal-and-cloud-load-balancing .
For example:
To update the default service of an App Engine app to accept traffic
only from Cloud Load Balancing and VPC networks that are in the same
project:
gcloud app services update default --ingress = internal-and-cloud-load-balancing
To update a service named "internal-requests" to accept traffic only from VPC
networks that are in the same project:
gcloud app services update internal-requests --ingress = internal-only
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
