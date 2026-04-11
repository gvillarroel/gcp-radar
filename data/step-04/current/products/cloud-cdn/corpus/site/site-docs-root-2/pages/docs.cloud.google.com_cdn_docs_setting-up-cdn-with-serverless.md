---
title: "Set up Cloud Run, Cloud Functions, or App Engine \_|\_ Cloud CDN \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-serverless
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-serverless
  title: "Set up Cloud Run, Cloud Functions, or App Engine \_|\_ Cloud CDN \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Set up Cloud Run, Cloud Functions, or App Engine
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create an external Application Load Balancer
to route requests to serverless backends. Here the term serverless refers to
the following serverless compute products:
App Engine
Cloud Run functions
Cloud Run
Serverless NEGs
allow you to use Google Cloud serverless apps
with external Application Load Balancers . After you
configure a load balancer with the serverless NEG backend, requests to the load
balancer are routed to the serverless app backend.
To learn more about serverless NEGs, read the Serverless NEGs
overview .
Before you begin
Deploy an App Engine, Cloud Run functions, or Cloud Run service .
If you haven't already done so, install the Google Cloud CLI .
Configure permissions .
Add an SSL certificate resource .
Deploy an App Engine, Cloud Run functions, or Cloud Run service
The instructions on this page assume you already have a
Cloud Run, Cloud Run functions,
or App Engine service running.
For the example on this page, we have used the Cloud Run Python
quickstart to deploy a Cloud Run
service in the us-central1 region. The rest of this page shows you how to set
up an external Application Load Balancer that uses a serverless NEG backend to route requests to
this service.
If you haven't already deployed a serverless app, or if you want to try a
serverless NEG with a sample app, use one of the following quickstarts. You can
create a serverless app in any region, but you must use the same region later
on to create the serverless NEG and load balancer.
Cloud Run
To create a simple Hello World application, package it into a container image,
and then deploy the container image to Cloud Run, see
Quickstart: Build and Deploy .
If you already have a sample container uploaded to the Container Registry, see
Quickstart: Deploy a Prebuilt Sample Container .
Cloud Run functions
See Cloud Run functions: Python Quickstart .
App Engine
See the following App Engine quickstart guides for Python 3:
Standard Environment
Flexible Environment
Install the Google Cloud CLI
Install the Google Cloud CLI. See gcloud Overview for
conceptual and installation information about the tool.
If you haven't run the gcloud CLI previously, first run
gcloud init to initialize your gcloud directory.
Configure permissions
To follow this guide, you need to create a serverless NEG and create an external
HTTP(S) load balancer in a project. You should be either a project owner or
editor , or you should have the following
Compute Engine IAM roles :
Task
Required Role
Create load balancer and networking components
Network Admin
Create and modify NEGs
Compute Instance Admin
Create and modify SSL certificates
Security Admin
Optional: Use BYOIP addresses
With bring your own IP (BYOIP), you can import your own public addresses to
Google Cloud to use the addresses with Google Cloud resources. For
example, if you import your own IPv4 addresses, you can assign one to the
forwarding rule when you configure your load balancer. When you follow the
instructions in this document to
create the load balancer , provide the BYOIP address as the
IP address .
For more information about using BYOIP, see
Bring your own IP addresses .
Reserve an external IP address
Now that your services are up and running, set up a global static external IP
address that your customers use
to reach your load balancer.
Note: This step is required for this example, and recommended in general,
because a static external IP address provides a single address to point your
serverless app to. Reserving an IP address is also essential if you are using a
custom domain for your serverless app (also required for Google-managed SSL
certificates). With a custom domain, you will need to update your DNS records
to point your domain to this IP address.
Console
In the Google Cloud console, go to the External IP addresses page.
Go to External IP addresses
Click Reserve external static IP address .
For Name , enter example-ip .
For Network service tier , select Premium .
For IP version , select IPv4 .
For Type , select Global .
Click Reserve .
gcloud
gcloud compute addresses create EXAMPLE_IP \
--network-tier=PREMIUM \
--ip-version=IPV4 \
--global
Note the IPv4 address that was reserved:
gcloud compute addresses describe EXAMPLE_IP \
--format="get(address)" \
--global
Replace EXAMPLE_IP with the name of the IP address.
Create an SSL certificate resource
To create the load balancer, you must have an SSL certificate resource that can be attached to the target
proxy. The SSL certificate resource can be either a certificate map or a
Compute Engine SSL certificate (classic certificate).
Certificate map
You can create a certificate map as described in
one of the following documents:
Deploy a global Google-managed certificate with load balancer authorization
Deploy a global Google-managed certificate with DNS authorization
Deploy a global Google-managed certificate with Certificate Authority Service
Deploy a global self-managed certificate
Compute Engine SSL certificate
For an HTTPS load balancer, create a Compute Engine SSL certificate resource
as described in one of the following documents:
Use self-managed SSL
certificates
Use Google-managed SSL
certificates
We recommend using a Google-managed certificate.
Warning: Don't use a self-signed certificate for production purposes.
Create the load balancer
In the following diagram, the load balancer uses a serverless NEG backend
to direct requests to a serverless Cloud Run service. For this
example, we have used the Cloud Run Python
quickstart to deploy a Cloud Run service.
External Application Load Balancer architecture for a Cloud Run application (click to enlarge).
Because health checks are not supported for backend services with serverless NEG
backends, you don't need to create a firewall rule allowing health checks
if the load balancer has only serverless NEG backends.
Console
Select the load balancer type
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click Create load balancer .
For Type of load balancer , select Application Load Balancer
(HTTP/HTTPS) and click Next .
For Public facing or internal , select Public facing
(external) and click Next .
For Global or single region deployment , select Best for global
workloads and click Next .
For Load balancer generation , select Classic
Application Load Balancer and click Next .
Click Configure .
Basic configuration
For the name of the load balancer, enter serverless-lb .
Keep the window open to continue.
Frontend configuration
Click Frontend configuration .
For Name , enter a name.
To create an HTTPS load balancer, you must have
an SSL certificate
( gcloud compute ssl-certificates list ).
We recommend using a Google-managed certificate as described
previously .
To configure an external Application Load Balancer, fill in the fields as follows.
Verify the following options are configured with these values:
Property
Value (type a value or select an option as specified)
Protocol
HTTPS
Network Service Tier
Premium
IP version
IPv4
IP address
example-ip
Port
443
Certificate
For Choose certificate repository , select
Use certificate map or Use classic certificates .
Depending on your selection, select a certificate map or
a classic certificate.
Optional: Enable HTTP to HTTPS Redirect
Use this checkbox to enable HTTP to HTTPS redirects.
Enabling this checkbox creates an additional partial HTTP load
balancer that uses the same IP address as your HTTPS load
balancer and redirects HTTP requests to your load balancer's
HTTPS frontend.
This checkbox can only be selected when the HTTPS protocol
is selected and a reserved IP address is used.
Click Done .
Backend configuration
Click Backend configuration .
In the Backend services & backend buckets list, click Create a backend service .
For Name , enter a name.
In Backend type , select Serverless network endpoint group .
Leave Protocol unchanged. This parameter is ignored.
In the Backends section, for New backend ,
select Create Serverless network endpoint group .
For Name , enter a name.
Click Create .
In the New backend section, click Done .
Select Enable Cloud CDN .
Optional: Modify the
cache mode and
TTL settings.
Click Create .
Routing rules
Routing rules determine how your traffic is directed. To configure
routing, you'll set up host rules and path matchers, which are
configuration components of an
external Application Load Balancer's URL map .
Click Host and path rules .
Retain the default hosts and paths. For this example, all requests go
to the backend service created in the previous step.
Reviewing the configuration
Click Review and finalize .
Review all the settings.
Optional: Click Equivalent Code to view the REST API request
that will be used to create the load balancer.
Click Create .
Wait for the load balancer to be created.
Click the name of the load balancer ( serverless-lb ).
Note the IP address of the load balancer for the next task. It's
referred to as IP_ADDRESS .
When you use the Google Cloud console to create an HTTP(S) load balancer
with a serverless NEG backend, logging is enabled by default. You can use the
gcloud compute backend-services
update command to
disable logging if needed.
gcloud
Create a serverless NEG for your serverless app.
For more options, see the gcloud reference guide for
gcloud
compute network-endpoint-groups create .
Create a backend service.
gcloud compute backend-services create BACKEND_SERVICE_NAME \
--load-balancing-scheme= LOAD_BALANCING_SCHEME \
--global \
--enable-cdn \
--cache-mode= CACHE_MODE \
--custom-response-header='Cache-Status: {cdn_cache_status}' \
--custom-response-header='Cache-ID: {cdn_cache_id}'
Set the cache mode by
replacing CACHE_MODE with one of the following:
CACHE_All_STATIC (default): Automatically caches
static content .
USE_ORIGIN_HEADERS : Requires the origin to set
valid caching
headers to cache content.
FORCE_CACHE_ALL : Caches all content, ignoring any
private , no-store , or
no-cache directives in Cache-Control
response headers.
For information about the cache directives that Cloud CDN
understands and what's not cached by Cloud CDN, see Cacheable
content and Non-cacheable
content .
Add the serverless NEG as a backend to the backend service:
gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
--global \
--network-endpoint-group= SERVERLESS_NEG_NAME \
--network-endpoint-group-region=us-central1
Create a URL map to route incoming requests to the backend service:
gcloud compute url-maps create URL_MAP_NAME \
--default-service BACKEND_SERVICE_NAME
This example URL map only targets one backend service representing a
single serverless app, so we don't need to set up host rules or path
matchers. If you have more than one backend service, you can use host
rules to direct requests to different services based on the host name,
and you can set up path matchers to direct requests to different
services based on the request path.
Perform this step only if you want to create an HTTPS load
balancer. This is not required for HTTP load balancers.
To create an HTTPS load balancer, you must have an
SSL certificate
resource to use in the HTTPS target proxy.
You can create an SSL
certificate resource using either a Google-managed SSL certificate or
a self-managed SSL certificate. Using Google-managed certificates
is recommended because Google Cloud obtains, manages, and renews
these certificates automatically.
To create a Google-managed certificate,
you must have a domain . If you do not have a domain, you can use
a self-signed SSL certificate for testing.
To create a Google-managed SSL certificate resource:
gcloud compute ssl-certificates create SSL_CERTIFICATE_NAME \
--domains DOMAIN
To create a self-managed SSL certificate resource:
gcloud compute ssl-certificates create SSL_CERTIFICATE_NAME \
--certificate CRT_FILE_PATH \
--private-key KEY_FILE_PATH
Create a target HTTP(S) proxy to route requests to your URL map.
For an HTTPS load balancer, create an HTTPS target proxy. The proxy
is the portion of the load balancer that holds the SSL certificate for
HTTPS Load Balancing, so you also load your certificate in this step.
gcloud compute target-https-proxies create TARGET_HTTPS_PROXY_NAME \
--ssl-certificates= SSL_CERTIFICATE_NAME \
--url-map= URL_MAP_NAME
Create a forwarding rule to route incoming requests to the proxy.
For an HTTPS load balancer:
gcloud compute forwarding-rules create HTTPS_FORWARDING_RULE_NAME \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--address= EXAMPLE_IP \
--target-https-proxy= TARGET_HTTPS_PROXY_NAME \
--global \
--ports=443
Connect your domain to your load balancer
After the load balancer is created, note the IP address that is associated with
the load balancer—for example, 30.90.80.100 . To point your domain to your
load balancer, create an A record by using your domain registration service. If
you added multiple domains to your SSL certificate, you must add an A record
for each one, all pointing to the load balancer's IP address. For example, to
create A records for www.example.com and example.com , use the following:
NAME TYPE DATA
www A 30.90.80.100
@ A 30.90.80.100
If you use Cloud DNS as your DNS provider, see
Add, modify, and delete records .
Test the load balancer
Now that you have configured your load balancer, you can start sending
traffic to the load balancer's IP address. If you configured a domain, you can
send traffic to the domain name as well. However, DNS propagation can take time
to complete so you can start by using the IP address for testing.
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click on the load balancer you just created.
Note the IP Address of the load balancer.
For an HTTPS load balancer , you can test your load balancer
using a web browser by going to https:// IP_ADDRESS .
Replace IP_ADDRESS with the
load balancer's IP address . You
should be directed to the helloworld service homepage.
If that does not work and you are using a Google-managed certificate,
confirm that your certificate resource's status is ACTIVE. For more
information, see Google-managed SSL certificate resource
status .
If you used a self-signed certificate for testing, your browser displays
a warning. You must explicitly instruct your browser to accept a
self-signed certificate. Click through the warning to see the actual page.
To verify cache responses, use curl from your local machine's command line.
Replace IP_ADDRESS with the load balancer's IPv4
address .
If you are using a Google-managed certificate, test the domain pointing to
the load balancer's IP address. For example:
curl -v -o/dev/null https:// IP_ADDRESS
If you are using a self-signed certificate, you must also specify the
-k flag. For example:
curl -v -o/dev/null -k -s 'https:// DOMAIN :443' --connect-to DOMAIN :443: IP_ADDRESS :443
The curl -k option allows curl to work if you have a
self-signed certificate. You should only use the
-k parameter for testing your own site. Under normal circumstances,
a valid certificate is an important security measure and certificate
warnings should not be ignored.
The output should contain the custom headers Cache-ID and Cache-Status
you have configured to indicate whether the response was served from
the cache:
HTTP/2 200
cache-status: hit
cache-id: SEA-b9fa975e
The output contains the response headers that indicate there was a cache
hit, meaning the static asset in the serverless app was served
to the user from a Cloud CDN edge cache.
The cache-status header says disabled value for the responses that are
not cached in Cloud CDN. For cached responses, the cache-status
header value is hit , miss , or revalidated .
Restrict ingress on default endpoint
Without the proper ingress settings, users can use your serverless application's
default URL to bypass the load balancer, Cloud Armor security
policies, SSL certificates, and private keys that are passed through the load
balancer.
Ensure external traffic only reaches your serverless application from the load
balancer by using setting ingress to "Internal and Cloud Load Balancing".
Set network ingress to "Internal and Cloud Load Balancing" for
App Engine
Set network ingress to "Internal and Cloud Load Balancing" for
Cloud Run functions
Set network ingress to "Internal and Cloud Load Balancing" for
Cloud Run
Additionally, you can disable the default URL
for Cloud Run.
Disabling Cloud CDN
Console
Disable Cloud CDN for a single backend service
In the Google Cloud console, go to the Cloud CDN page.
Go to Cloud CDN
On the right side of the origin row, click
Menu more_vert
and then select Edit .
Clear the checkboxes of any backend services that you
want to stop from using Cloud CDN.
Click Update .
Remove Cloud CDN for all backend services for an origin
In the Google Cloud console, go to the Cloud CDN page.
Go to Cloud CDN
On the right side of the origin row, click
Menu more_vert
and then select Remove .
To confirm, click Remove .
gcloud
gcloud compute backend-services update BACKEND_SERVICE_NAME
--no-enable-cdn
Disabling Cloud CDN does not invalidate or purge caches. If you
turn Cloud CDN off and back on again, most or all of your cached
content might still be cached. To prevent content from being used by the
caches, you must invalidate that content .
What's next
Refer to the Cloud CDN documentation to learn more about cache
modes and determine
cacheability of your responses.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
