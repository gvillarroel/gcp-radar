---
title: "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/how-to/accessing/airflow-web-interface
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/how-to/accessing/airflow-web-interface
  title: "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
Access the Airflow web interface
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
Apache Airflow includes a web user interface called
Airflow UI , which you can use to manage Airflow DAGs, view
DAG run logs, monitor Airflow, and perform administrative actions.
About the Airflow web server
Each Cloud Composer environment has a web server that
runs the Airflow UI. The web server is a part of
Cloud Composer environment architecture .
Before you begin
You must have a role that can view Cloud Composer environments.
For more information, see Access control .
During the environment creation, Cloud Composer configures the
URL for the web server that runs the Airflow UI. The URL is
non-customizable.
Cloud Composer 3 supports the
Airflow UI Access Control (Airflow Role-Based Access
Control) feature for the Airflow UI.
If the API Controls > Unconfigured third-party apps
> Don't allow users to access any third-party apps option
is enabled in Google Workspace and the Apache Airflow in
Cloud Composer app is not explicitly allowed, then users are not
able to access the Airflow UI unless they explicitly allow the
application. To allow access, perform steps provided in
Allow access to Airflow UI in Google Workspace .
If Chrome Enterprise Premium Context-Aware Access bindings are used with
access levels that rely on device attributes, and the Apache Airflow in
Cloud Composer app is not exempted, then it's not possible to
access the Airflow UI because of a login loop. To allow access, perform
steps provided in
Allow access to Airflow UI in Context-Aware Access bindings .
If ingress rules are configured in a
VPC Service Controls perimeter that protects the project, and the ingress rule
that allows access to the Cloud Composer service uses
ANY_SERVICE_ACCOUNT or ANY_USER_ACCOUNT identity type, then users can't
access the Airflow UI, ending up in a login loop. For more information
about addressing this scenario, see
Allow access to Airflow UI in VPC Service Controls ingress rules .
Cloud Composer doesn't support using
third-party identities in
ingress and egress rules to allow
Apache Airflow UI operations. However, you can use the ANY_IDENTITY
identity type in ingress and egress rules to allow access to all identities,
including third-party identities. For more information about the
ANY_IDENTITY identity type, see
Ingress and egress rules .
Access the Airflow UI
In Cloud Composer 3, the Airflow web server runs
in the tenant project of your environment . The web server is
deployed to the composer.googleusercontent.com domain and provides access to
the Airflow UI.
Cloud Composer 3 provides access to the interface based on user identities
and IAM policy bindings defined for users.
Access the Airflow UI from the Google Cloud console
To access the Airflow UI from the Google Cloud console:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the Airflow webserver column, follow the Airflow link for your
environment.
Sign in with a Google Account that has the appropriate permissions.
Obtain the Airflow UI URL with Google Cloud CLI
You can access the Airflow UI from any web browser. To get the URL
for the Airflow UI, run the following command in Google Cloud CLI:
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
The Google Cloud CLI command shows the properties of a
Cloud Composer environment, including the URLs for the Airflow UI.
The URLs are listed as airflowUri and airflowByoidUri :
The airflowUri URL address is used by Google Accounts.
The airflowByoidUri URL address is used by external identities if you
configure Workforce identity federation
in your project.
config :
airflowUri : https://example-dot-us-central1.composer.googleusercontent.com
airflowByoidUri : https://example-dot-us-central1.composer.byoid.googleusercontent.com
Restart the web server
When debugging or troubleshooting Cloud Composer environments, some issues
may be resolved by restarting the Airflow web server. You can restart the web
server using the restartWebServer API
or the restart-web-server command in Google Cloud CLI:
gcloud composer environments restart-web-server ENVIRONMENT_NAME \
--location = LOCATION
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
Configure web server network access
The Airflow web server access parameters don't depend on your environment's
networking configuration. Instead, you configure web server access separately.
For example, a Private IP environment can still have the Airflow UI accessible
from the internet.
Note: The Airflow web server of your environment is always
protected by IAM, regardless of the IP ranges that are
allowed to access it.
It's not possible to configure the allowed IP ranges to be private IP addresses.
Important: In some cases, changes to the web server access parameters can take
up to 10 minutes to propagate.
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
In the Network configuration section, find the
Web server access control item and click Edit .
In the Web server network access control dialog:
To provide access to the Airflow web server from all IP addresses,
select Allow access from all IP addresses .
To restrict access only to specific IP ranges, select
Allow access only from specific IP addresses . In the IP range
field, specify an IP range in the CIDR notation. In
the Description field, specify an optional description for this
range. If you want to specify more than one range, click Add IP
range .
To forbid access for all IP addresses, select Allow access only from
specific IP addresses and click Delete item next to the empty
range entry.
gcloud
When you update an environment, the following arguments control web server
access parameters:
--web-server-allow-all provides access to Airflow from all IP addresses.
This is the default option.
--update-web-server-allow-ip restricts access only to specific source IP
ranges. To specify several IP ranges, use this argument multiple times.
--web-server-deny-all forbids access for all IP addresses.
gcloud composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--update-web-server-allow-ip ip_range = WS_IP_RANGE ,description = WS_RANGE_DESCRIPTION
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
WS_IP_RANGE : the IP range, in the CIDR notation, that can access the
Airflow UI.
WS_RANGE_DESCRIPTION : the description of the IP range.
Example:
gcloud composer environments update example-environment \
--location us-central1 \
--update-web-server-allow-ip ip_range = 192 .0.2.0/24,description = "example range" \
--update-web-server-allow-ip ip_range = 192 .0.4.0/24,description = "example range 2"
API
Construct an [ environments.patch ][api-patch] API request.
In this request:
In the updateMask parameter, specify the
config.webServerNetworkAccessControl mask.
In the request body, specify how Airflow task logs must be
saved:
To provide access to Airflow from all IP addresses, specify an
empty config element (the webServerNetworkAccessControl
element must not be present).
To restrict access only to specific IP ranges, specify one or more
ranges in allowedIpRanges .
To forbid access for all IP addresses, specify an empty
webServerNetworkAccessControl element. The
webServerNetworkAccessControl element must be present, but
must not contain an allowedIpRanges element.
{
"config" : {
"webServerNetworkAccessControl" : {
"allowedIpRanges" : [
{
"value" : " WS_IP_RANGE " ,
"description" : " WS_RANGE_DESCRIPTION "
}
]
}
}
}
Replace the following:
WS_IP_RANGE : the IP range, in the CIDR notation, that can access the
Airflow UI.
WS_RANGE_DESCRIPTION : the description of the IP range.
Example:
// PATCH https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.webServerNetworkAccessControl
{
"config" : {
"webServerNetworkAccessControl" : {
"allowedIpRanges" : [
{
"value" : "192.0.2.0/24" ,
"description" : "example range"
},
{
"value" : "192.0.4.0/24" ,
"description" : "example range 2"
}
]
}
}
}
Terraform
In the allowed_ip_range block, in the web_server_network_access_control
specify IP ranges that can access web server.
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
web_server_network_access_control {
allowed_ip_range {
value = " WS_IP_RANGE "
description = " WS_RANGE_DESCRIPTION "
}
}
}
}
Replace the following:
WS_IP_RANGE : the IP range, in the CIDR notation, that can access the
Airflow UI.
WS_RANGE_DESCRIPTION : the description of the IP range.
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
web_server_network_access_control {
allowed_ip_range {
value = "192.0.2.0/24"
description = "example range"
},
allowed_ip_range {
value = "192.0.4.0/24"
description = "example range 2"
}
}
}
What's next
Airflow UI Access Control
Troubleshooting Airflow web server issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
