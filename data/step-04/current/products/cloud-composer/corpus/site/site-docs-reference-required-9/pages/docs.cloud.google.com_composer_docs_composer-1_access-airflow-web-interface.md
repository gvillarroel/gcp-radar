---
title: "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface
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
Composer 1 Guides
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
The web server parses the DAG definition files
in the dags/ folder and must
be able to access a DAG's data and resources to load the DAG and serve HTTP requests.
The web server refreshes the DAGs every 60 seconds, which is the default
worker_refresh_interval in Cloud Composer. A web server error can
occur if the web server cannot parse all the DAGs within the refresh interval.
Exceeding 60 seconds to load DAGs can occur if there are a large number of DAG
files or there is a non-trivial workload to load the DAG files. To ensure that
web server remains accessible regardless of DAG load time, you can
configure asynchronous DAG loading to parse and load DAGs
in the background at a pre-configured interval (available in
composer-1.7.1-airflow-1.10.2 and later versions).
This configuration can also reduce DAG refresh time.
Other than exceeding the worker refresh interval,
the web server can gracefully handle DAG loading failures in most cases.
DAGs that cause the web server to crash or exit might cause errors to
be returned in the browser. For information, see
Troubleshooting DAGs .
If you continue to experience web server issues due to DAG parsing, we
recommend that you use asynchronous DAG loading.
Before you begin
You must have a role that can view Cloud Composer environments.
For more information, see Access control .
During the environment creation, Cloud Composer configures the
URL for the web server that runs the Airflow UI. The URL is
non-customizable.
The Airflow UI Access Control
(Airflow Role-Based Access Control) feature for the Airflow UI is
supported for Cloud Composer environments running Composer version
1.13.4 or later, Airflow version 1.10.10 or later, and Python 3.
Access the Airflow UI
The Airflow web server service is deployed to the appspot.com domain and
provides access to the Airflow UI. Cloud Composer 1 provides
access to the interface based on user identities and IAM
policy bindings defined for users. Cloud Composer 1 uses Identity-Aware Proxy
for this purpose.
After creating a new Cloud Composer environment ,
it takes up to 25 minutes for the UI to finish
hosting and become accessible.
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
The gcloud command shows the properties of a Cloud Composer
environment, including the URL for the Airflow UI. The URL is
listed as airflowUri .
config :
airflowUri : https://example-tp.appspot.com
Configure asynchronous DAG loading
When asynchronous DAG loading is enabled, the Airflow web server
creates a new process. This process loads DAGs in the background,
sends newly loaded DAGs on intervals defined by the dagbag_sync_interval option, and then sleeps.
The process wakes up periodically to reload DAGs, the interval is defined by the collect_dags_interval option.
To enable asynchronous DAG loading:
Disable DAG serialization .
Asynchronous DAG loading cannot be used with DAG serialization. Using
async_dagbag_loader and store_serialized_dags Airflow configuration
options produces HTTP 503 errors and breaks your environment.
Override the following Airflow configuration options:
Section
Key
Value
Notes
webserver
async_dagbag_loader
True
The default is False .
webserver
collect_dags_interval
30
The default is 30 . Use a smaller value for faster refreshes.
webserver
dagbag_sync_interval
10
The default is 10 .
webserver
worker_refresh_interval
3600
The default is 60 . With asynchronous DAG loading, you can use a longer refresh interval.
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
