---
title: "Set up a Media CDN service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/media-cdn/docs/quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/media-cdn/docs
source_metadata:
  url: https://docs.cloud.google.com/media-cdn/docs/quickstart
  title: "Set up a Media CDN service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Media CDN
Guides
Send feedback
Set up a Media CDN service
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart shows you how to set up a Media CDN service in front of
a Cloud Storage bucket. You can use this configuration for testing or as
the basis for a production environment.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
This page walks you through the following procedures:
Create a Cloud Storage bucket to store your content.
Enable the required services.
Create an EdgeCacheOrigin resource to connect Media CDN to
your bucket.
Create an EdgeCacheService resource to configure request routing and
caching for content in the origin.
Test whether a response is being cached.
Before you begin
Make sure that you have the following:
Access to Media CDN
for your current project.
The Google Cloud CLI installed. Use version 345.0.0 or
later.
If required, use gcloud version to check the version and
gcloud components update to update your installed gcloud CLI.
The gcloud CLI provides the gcloud edge-cache sub-command group
for managing both new and existing Media CDN configurations.
The Identity and Access Management (IAM) permissions
required to create Media CDN resources.
Required roles
To get the permissions that you need to complete the tasks in this
document, ask your administrator to grant the following roles:
Note: These roles are visible only in projects where Media CDN
is enabled .
roles/networkservices.edgeCacheAdmin : Access to create, update, delete,
and manage all Edge Cache resources.
roles/networkservices.edgeCacheUser : Access to view and use Edge Cache
resources.
roles/networkservices.edgeCacheViewer : Read-only access to
Edge Cache resources.
To create storage bucket
Storage Admin role
( roles/storage.admin )
To enable SSL on Media CDN
Certificate Manager Editor role ( roles/certificatemanager.editor )
You might also be able to get the required permissions with custom
roles or other predefined
roles .
Create a Cloud Storage bucket
Media CDN content can originate from locations such as a
Cloud Storage bucket, a third-party storage location, or a load
balancer.
In this quickstart, we'll store content in a Cloud Storage bucket.
Create a publicly accessible Cloud Storage bucket
and name it my-bucket .
If you prefer not to make your Cloud Storage bucket publicly
accessible, you must give Media CDN permissions to access the
bucket. For more information, see
Using private Cloud Storage buckets .
Upload a file into the bucket.
Enable the required services
To configure and deploy Media CDN services, you need to enable
both the Network Services API
and the Certificate Manager API
for your project.
Console
Enable the Network Services API.
Enable the API
Enable the Certificate Manager API.
Enable the API
gcloud
Enable the Network Services API:
gcloud services enable networkservices.googleapis.com
Enable the Certificate Manager API:
gcloud services enable certificatemanager.googleapis.com
For more information about enabling and disabling services, see the
Service Usage documentation .
Create an EdgeCacheOrigin resource
Create an origin that points to your Cloud Storage bucket.
Console
In the Google Cloud console, go to the Media CDN page.
Go to Media CDN
Click the Origins tab.
Click Create origin .
Enter the name for the origin as cloud-storage-origin .
Optional: Enter a description for the origin.
For Origin address , choose Select a Google Cloud Storage
bucket , browse to the Cloud Storage bucket named my-bucket ,
and then click Select .
If you have an external origin instead, choose Specify an FQDN or IP
address , and then enter the FQDN or IP address.
Click Create origin .
After approximately 10 minutes, the newly created EdgeCacheOrigin resource
appears in the list of origins in your project on the Origins page.
To update an origin address, click the origin, and then click
edit Edit .
gcloud
Use the gcloud edge-cache origins create command :
gcloud edge-cache origins create ORIGIN \
--origin-address=" ADDRESS "
Replace the following:
ORIGIN : the name of the new origin
ADDRESS : the bucket name, gs://my-bucket
If you have an external origin instead, replace ADDRESS with the FQDN
or IP address.
To view the newly created origin, use the
gcloud edge-cache origins list command .
To update the origin address, use the
gcloud edge-cache origins update command .
Note: Media CDN can take up to 10 minutes to create the origin.
API
Use the
edgeCacheOrigins.create method :
POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheOrigins?edgeCacheOriginId= ORIGIN_ID
{
"name": " ORIGIN_ID ",
"originAddress: " ADDRESS "
}
Replace the following:
PARENT : the parent resource in the format
projects/ PROJECT /locations/global
ORIGIN_ID : the short name of the new origin
ADDRESS : the bucket name, gs://my-bucket
If you have an external origin instead, replace ADDRESS with the FQDN
or IP address.
To view the newly created origin, use the
edgeCacheOrigins.list method .
To update the origin address, use the
edgeCacheOrigins.patch method .
Note: Media CDN can take up to 10 minutes to create the origin
Terraform
resource "google_network_services_edge_cache_origin" "default" {
name = "cloud-storage-origin"
origin_address = "gs://my-bucket-${random_id.unique_suffix.hex}"
}
Create an EdgeCacheService resource
Your EdgeCacheService resource configures routing, certificate, and caching
settings, and can point to EdgeCacheOrigin resources.
Create a basic EdgeCacheService resource that does the following:
Caches all responses from our configured origin for one hour
Sets an x-cache-status response header that returns the cache status
(such as HIT or MISS )
Optionally, register a domain name
for this service.
Console
In the Google Cloud console, go to the Media CDN page.
Go to Media CDN
Click the Services tab.
Click Create service .
Enter a unique name for your service—for example, my-service —and
then click Next .
In the Routing section, click Add host rule , and then enter one
or more host domain names.
For Hosts , enter a host domain name—for example, web.example.com .
Click Add route rule .
For Priority , specify 1 .
Click Add match condition , for Path match , specify / , and then
click Done .
Select Fetch from an Origin , and then select the origin that you
configured.
Click Add-on actions .
For Header action , click Add an item . Then, do the following:
For Type , select Response headers to add .
Click Add header .
For Name , specify x-cache-status , and for Value , specify
{cdn_cache_status} .
Click Done .
For Route action , click Add an item . Then, do the following:
For Type , select CDN policy .
For Cache mode , select FORCE_CACHE_ALL .
Click Done .
Click Save .
Click Create service .
The newly created EdgeCacheService resource appears on the Services
page in the list of services in your project.
Note: Media CDN can take up to 10 minutes to create the service
gcloud
In Cloud Shell, use a text editor to create a local file called
my-service.yaml .
Such a file indicates the following:
How routing works—by first matching the host and then the path
How caching works—based on the cache mode and TTL
How requests and responses are modified—for example, by inserting
the cdn_cache_status variable into a response header
Paste the following sample content into the file, and then save it:
name : SERVICE
routing :
hostRules :
- hosts :
- DOMAIN
pathMatcher : routes
pathMatchers :
- name : routes
routeRules :
- priority : 1
matchRules :
- prefixMatch : /
origin : ORIGIN
routeAction :
cdnPolicy :
cacheMode : CACHE_ALL_STATIC
defaultTtl : 3600s
headerAction :
responseHeadersToAdd :
- headerName : "x-cache-status"
headerValue : "{cdn_cache_status}"
Replace the following:
SERVICE : name of the service
DOMAIN : the domain for the new service
If you specify the domain name, Media CDN responds with
a 404 error for other hosts.
ORIGIN : the name of the related origin
Use the gcloud edge-cache services import command
with the YAML file:
gcloud edge-cache services import SERVICE \
--source=my-service.yaml
To view the newly created service in the list of EdgeCacheService
resources in your project, use the
gcloud edge-cache services list command .
Note: Media CDN can take up to 10 minutes to create the service
API
Use the
edgeCacheServices.create method :
POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE_ID
{
"name": " SERVICE_ID ",
"routing": {
"hostRules": [
{
"hosts": [" DOMAIN "],
"pathMatcher": "routes"
}
],
"pathMatchers": [
{
"name": "routes",
"routeRules": [
{
"priority": "1",
"matchRules": [
{
"prefixMatch": "/"
}
],
"origin": " ORIGIN ",
"routeAction": {
"cdnPolicy": {
"cacheMode": "CACHE_ALL_STATIC",
"defaultTtl": "3600s"
}
}
"headerAction": {
"responseHeadersToAdd": [
{
"headerName": "x-cache-status",
"headerValue": "{cdn_cache_status}"
}
]
},
}
]
}
]
}
}
Replace the following:
PARENT : the parent resource in the format
projects/ PROJECT /locations/global
SERVICE_ID : the name of the service
DOMAIN : the domain for the new service
If you specify the domain name, Media CDN responds with
a 404 error for other hosts.
ORIGIN_NAME : the name of the related origin
To view the newly created service in the list of EdgeCacheService resources
in your project, use the
edgeCacheServices.list method .
Note: Media CDN can take up to 10 minutes to create the service
Terraform
resource "google_network_services_edge_cache_service" "default" {
name = "cloud-media-service"
routing {
host_rule {
hosts = ["googlecloudexample.com"]
path_matcher = "routes"
}
path_matcher {
name = "routes"
route_rule {
description = "a default route rule, priority=10 (low)"
priority = 10
match_rule {
prefix_match = "/"
}
origin = google_network_services_edge_cache_origin.default.name
route_action {
cdn_policy {
cache_mode = "CACHE_ALL_STATIC"
default_ttl = "3600s"
}
}
header_action {
response_header_to_add {
header_name = "x-cache-status"
header_value = "{cdn_cache_status}"
}
}
}
}
}
}
It might take several minutes for your first service to be created.
Media CDN provisions dedicated IP addresses and pushes your
configuration to thousands of edge locations. Subsequent updates to a service,
such as changing a route configuration or matching parameters, are faster.
Retrieve the IP addresses
To view the IP addresses for your newly created service, follow these steps:
Console
In the Google Cloud console, go to the Media CDN page.
Go to Media CDN
Click the Services tab.
For the IP addresses of your service, see the Addresses cell.
If the cell is empty, refresh the browser.
gcloud
Use the gcloud edge-cache services describe command :
gcloud edge-cache services describe SERVICE
Replace SERVICE with the name of the service.
The output shows the IP addresses assigned to your service:
ipv4Addresses:
IPV4_ADDRESS
ipv6Addresses:
IPV6_ADDRESS
name: projects/my-project/locations/global/edgeCacheServices/ SERVICE
...
API
Use the
edgeCacheServices.get method :
GET https://networkservices.googleapis.com/v1/ SERVICE_NAME
Replace SERVICE_NAME with the full name of the
service. Use the following format:
projects/ PROJECT /locations/global/edgeCacheServices/ SERVICE_ID
Replace SERVICE_ID with the short name of the service.
The retrieved details include the IP addresses assigned to the service:
ipv4Addresses:
IPV4_ADDRESS
ipv6Addresses:
IPV6_ADDRESS
Test whether a response is being cached
Before testing the service, make sure that you have cacheable
content stored at your origin so that
Media CDN can retrieve it.
To test that your service is correctly configured to cache content, use
the curl command-line tool to issue requests and check the responses. curl
is also available in Cloud Shell in the Google Cloud console.
If you'd like to use your EdgeCacheService with your domain,
you can assign the IP address of the EdgeCacheService to a domain record. For
instructions, see Set up your domain using Cloud DNS .
After you've set up your domain, access your content with the following curl
command:
curl -svo /dev/null "http://DOMAIN_NAME/FILE_NAME"
If you did not configure DNS to point to your provisioned IP addresses, use the
resolve option to override the address that curl uses.
curl -svo /dev/null --resolve DOMAIN_NAME :80: IP_ADDRESS "http:// DOMAIN_NAME/FILE_NAME "
Replace the following:
DOMAIN_NAME : the host domain you specified
while creating the service
IP_ADDRESS : the IP address of the service as
visible in the Addresses column in the list of services
FILE_NAME : the name of the file you uploaded to
the bucket
Example:
curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4"
The command initially produces output similar to the following, with the
status miss , because Media CDN doesn't have the requested
data already retrieved from the origin:
< HTTP/2 200 OK
...
< x-cache-status: den;miss
...
When you submit the same request again any number of times, it produces an
output similar to the following, with the status hit :
< HTTP/2 200 OK
...
< x-cache-status: den;hit
...
If it doesn't show the status hit , check the following:
The response is cacheable.
The configured cache mode allows caching of the content.
The origin isn't setting cache directives that prevent caching. For more
information, see Cache configuration .
You've now tested a basic EdgeCacheService resource that can serve
content globally. A production-grade service might need SSL (TLS)
certificates , multiple origins, and a
Google Cloud Armor security policy .
Optional: Clean up
Delete any resources that you don't intend to use again.
Console
In the Google Cloud console, go to the Media CDN page.
Go to Media CDN
Click the Services tab.
Select your service, and then click Delete .
Click the Origins tab.
Select your origin, and then click Delete .
gcloud
To list the resources that you created, use the
gcloud edge-cache origins list command
and the gcloud edge-cache services list command .
To delete the service, use the
gcloud edge-cache services delete command :
gcloud edge-cache services delete SERVICE
Replace SERVICE with the name of the service.
To delete the origin, use the
gcloud edge-cache origins delete command :
gcloud edge-cache origins delete ORIGIN
Replace ORIGIN with the name of the origin.
API
To list the resources that you created, use the
edgeCacheServices.list method
and the edgeCacheOrigins.list method .
To delete the service, use the
edgeCacheServices.delete method :
DELETE https://networkservices.googleapis.com/v1/ SERVICE_NAME
Replace SERVICE_NAME with the full name of the
service. Use the following format:
projects/ PROJECT /locations/global/edgeCacheServices/ SERVICE_ID
Replace SERVICE_ID with the short name
of the service.
To delete the origin, use the
edgeCacheOrigins.delete method :
DELETE https://networkservices.googleapis.com/v1/ ORIGIN
Replace ORIGIN with the full name of the
origin. Use the following format:
projects/ PROJECT /locations/global/edgeCacheOrigins/ ORIGIN_ID
Replace ORIGIN_ID with the short name
of the origin.
Repeat this process for any other resources that you created and don't intend
to use again, such as the Cloud Storage bucket.
What's next
Issue and attach an SSL (TLS) certificate
to your EdgeCacheService .
View request logs
with Cloud Logging.
Configure signed requests
to protect your content.
Optimize cache keys and TTLs
and improve cache hit rates.
Configure advanced route matching
and create additional origins.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
