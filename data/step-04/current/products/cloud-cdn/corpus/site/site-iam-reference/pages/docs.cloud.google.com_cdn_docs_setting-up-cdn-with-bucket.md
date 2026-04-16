---
title: "Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/invalidating-cached-content
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket
  title: "Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
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
Set up a backend bucket
Stay organized with collections
Save and categorize content based on your preferences.
Cloud CDN leverages your choice of either the
global external Application Load Balancer or the classic Application Load Balancer to provide
routing, health checking, and anycast IP support. Because global
external Application Load Balancers can have
multiple backend instance types —
Compute Engine VM instances, Google Kubernetes Engine Pods, Cloud Storage
buckets, or external backends outside of Google Cloud—you can choose
which backends ( origins ) to enable Cloud CDN for.
This setup guide shows you how to create an external Application Load Balancer
with Cloud CDN enabled. The example uses the following resources:
The default Virtual Private Cloud (VPC) network
A default URL map
A reserved external IP address
A Cloud Storage bucket as the backend
A single load balancer backend bucket that acts as a wrapper around the
Cloud Storage bucket
A backend bucket supports the following:
Cloud Storage buckets of any
storage class , including
multi-region buckets
Cloud CDN policies for caching content at Google's global edge
To learn how Cloud CDN works, see the
Cloud CDN overview .
By default, Cloud Storage uses the same cache
that Cloud CDN uses. If you enable Cloud CDN on the backend
bucket, you can use Cloud CDN controls on your content.
Cloud CDN controls include, for example, cache modes, signed URLs, and
invalidation. Cloud CDN also lets you cache large content (> 10 MB). If
you don't enable Cloud CDN on your backend bucket, you can only use
origin Cache-Control headers to control caching for smaller content, as set
by the Cloud Storage metadata.
Load balancer backends
An external Application Load Balancer uses a URL map to direct traffic from specified URLs to
specified services. The following table summarizes the types of backends where
you can host content and services.
Load balancer backend configuration
Typical media type
Backend types
Backend service
Dynamic (such as data)
Unmanaged instance groups
Managed instance groups
Network endpoint groups internal to Google Cloud
Network endpoint groups external to Google Cloud
Backend bucket
Static (such as images)
Cloud Storage buckets (discussed on this page)
Before you begin
If you're using HTTPS for the frontend, create an SSL
certificate , either
self-managed
or Google-managed .
We recommend using a Google-managed certificate.
If you're using the Google Cloud CLI, see
Discover object storage with the gcloud tool
to install it.
Set a default project .
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, go to the Home page.
Go to the Google Cloud home page
To the right of Google Cloud, select a project from the pull-down menu.
gcloud
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud
project ID.
Terraform
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Optional: Use BYOIP addresses
With bring your own IP (BYOIP), you can import your own public addresses to
Google Cloud to use the addresses with Google Cloud resources. For
example, if you import your own IPv4 addresses, you can assign one to the
forwarding rule when you configure your load balancer. When you follow the
instructions in this document to
Create the external Application Load Balancer , provide the BYOIP address as the
IP address .
For more information about using BYOIP, see
Bring your own IP addresses .
Create a Cloud Storage bucket
If you have an existing Cloud Storage bucket that isn't already
assigned to a load balancer, you can skip to the next step .
When you create a Cloud Storage bucket to use as the backend for an
external Application Load Balancer with Cloud CDN, we recommend that you choose a
multi-region bucket , which automatically
replicates objects across multiple Google Cloud regions. This can improve
the availability of your content and improve failure tolerance across your
application.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, open the Cloud Storage Buckets page.
Open the Buckets page
Click Create bucket .
Specify values for the fields in the following table, leaving all
others at their defaults.
Property
Value (type the value or select an option as specified)
Name
For each bucket, enter a globally unique name. If the name
you enter is not unique, you see a message to try another
name.
Location type
Multi-region
Location
Select a region, such as us (multiple regions in United States) .
Default storage class
Standard
Access control
Uniform
Click Create .
Note the name of the newly created Cloud Storage bucket
for the next step.
gcloud
gcloud storage buckets create gs:// BUCKET_NAME --project= PROJECT_ID --default-storage-class=standard --location=us-east1 --uniform-bucket-level-access
Terraform
To create a bucket, use the google_storage_bucket
resource .
# Cloud Storage bucket
resource "random_id" "bucket_prefix" {
byte_length = 8
}
resource "google_storage_bucket" "default" {
name = "${random_id.bucket_prefix.hex}-my-bucket"
location = "us-east1"
uniform_bucket_level_access = true
storage_class = "STANDARD"
// delete bucket and contents on destroy.
force_destroy = true
// Assign specialty files
website {
main_page_suffix = "index.html"
not_found_page = "404.html"
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Copy a graphic file into your Cloud Storage bucket
To enable you to test the setup, copy a graphic file from a public
Cloud Storage bucket to your own Cloud Storage bucket.
gcloud
Run the following command in Cloud Shell. Replace
BUCKET_NAME with your unique Cloud Storage
bucket name:
gcloud storage cp gs://gcp-external-http-lb-with-bucket/three-cats.jpg gs:// BUCKET_NAME /never-fetch/
Terraform
To copy the object, use the local-exec
Provisioner with the gcloud storage cp command.
resource "null_resource" "upload_image" {
provisioner "local-exec" {
command = "gcloud storage cp gs://gcp-external-http-lb-with-bucket/three-cats.jpg gs://${google_storage_bucket.default.name}/never-fetch/ --recursive"
}
}
Alternatively, to upload an object, use the google_storage_bucket_object
resource .
# image object for testing, try to access http://<your_lb_ip_address>/test.jpg
resource "google_storage_bucket_object" "test_image" {
name = "test-object"
# Uncomment and add valid path to an object.
# source = "/path/to/an/object"
# content_type = "image/jpeg"
# Delete after uncommenting above source and content_type attributes
content = "Data as string to be uploaded"
content_type = "text/plain"
bucket = google_storage_bucket.default.name
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
In the Google Cloud console, click Refresh to verify that the
graphic file is copied.
Make your Cloud Storage bucket public
This example makes your Cloud Storage bucket publicly
readable . This is
the recommended approach for public content. With this setting, anyone on the
internet can view and list your objects and their metadata, excluding ACLs.
To reduce the risk of unintended data exposure, you should typically dedicate
specific Cloud Storage buckets for public objects.
Important: When objects are served from a public Cloud Storage bucket,
by default they have a
Cache-Control: public, max-age=3600 response header applied. This allows the
objects to be cached when Cloud CDN is enabled.
The following are alternatives to making an entire Cloud Storage
bucket public:
Use managed folders to
make a portion of your bucket publicly readable .
Make individual objects publicly readable .
We don't recommend this approach, because it uses a legacy,
Cloud Storage-specific permissioning system.
Use signed URLs .
The following procedure grants all users access to view objects in your
Cloud Storage bucket, making the bucket publicly readable.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, open the Cloud Storage Buckets page.
Open the Buckets page
Navigate to the bucket and click the Permissions tab.
Click Add principals .
In New principals , enter allUsers .
For the role, select Cloud Storage > Storage Object Viewer .
Click Save .
gcloud
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME --member=allUsers --role=roles/storage.objectViewer
Terraform
To make your Cloud Storage bucket public, use the google_storage_bucket_iam_member resource .
# make bucket public
resource "google_storage_bucket_iam_member" "default" {
bucket = google_storage_bucket.default.name
role = "roles/storage.objectViewer"
member = "allUsers"
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Reserve an external IP address
Now that your Cloud Storage bucket is up and running, set up a global
static external IP address that
your customers use to reach your load balancer.
This step is optional, but recommended, because a static external IP address
provides a single address to point your domain at.
Note: You can skip this step and have Google Cloud associate an
ephemeral IP address with your load balancer's forwarding rule. An ephemeral IP
address remains constant while the forwarding rule exists. If you need to
delete the forwarding rule and re-add it, the forwarding rule might receive a
new IP address.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, go to the External IP addresses page.
Go to the External IP addresses page
To reserve an IPv4 address, click Reserve static address .
Assign a Name of example-ip .
Set the Network Service Tier to Premium .
Set the IP version to IPv4 .
Set the Type to Global .
Click Reserve .
gcloud
gcloud compute addresses create example-ip \
--network-tier=PREMIUM \
--ip-version=IPV4 \
--global
Note the IPv4 address that was reserved:
gcloud compute addresses describe example-ip \
--format="get(address)" \
--global
Terraform
To reserve an IP address, use the google_compute_global_address resource .
# reserve IP address
resource "google_compute_global_address" "default" {
name = "example-ip"
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Create the external Application Load Balancer
In this procedure, you create the load balancer's backend bucket, which serves
as a wrapper for your Cloud Storage bucket. When creating or editing a
backend bucket, you can enable Cloud CDN.
Console
Start the external Application Load Balancer configuration process
In the Google Cloud console, go to the Load balancing page.
Go to the Load balancing page
Under HTTP(S) load balancing , click Start configuration .
Select From Internet to my VMs , and then click Continue .
Under Advanced traffic
management , select
one of the following:
For classic Application Load Balancers, select Classic HTTP(S) Load Balancer .
For global external Application Load Balancers, select HTTP(S) Load Balancer with Advanced Traffic Management .
Set Name to http-lb , and then go to the next step.
Configure the backend and enable Cloud CDN
Create the load balancer's backend bucket, which serves as a wrapper for your
Cloud Storage bucket. When creating or editing a backend bucket, you
can enable Cloud CDN.
Click Backend configuration .
Under Backend services & backend buckets , click Create or select
backend services & backend buckets , and then click Backend buckets >
Create a backend bucket .
Set the Name to cat-backend-bucket . This name doesn't need to be
globally unique and can be different from the name of the actual
Cloud Storage bucket.
Under Cloud Storage bucket , click Browse .
Select the Cloud Storage globally unique
BUCKET_NAME that you created, and then click
Select .
Click Enable Cloud CDN .
Important: Make sure that you select Enable Cloud CDN at this step.
Forgetting to do this causes objects to be served directly from the
Cloud Storage bucket and not from Google's global CDN caches.
(Optional) Modify the cache mode and
TTL settings.
Click Create .
Configure host rules and path matchers
Host rules and path matchers are configuration components of an
external Application Load Balancer's URL map .
In Host and path rules , you can retain the default settings.
For a customized setup example, see Adding backend buckets to load
balancers .
To learn more about host rules and path matchers, see
URL maps overview .
Configure the frontend
Click Frontend configuration .
Verify that the options are configured with these values.
Property
Value (type a value or select an option as specified)
Protocol
HTTP
Network Service Tier
Premium
IP version
IPv4
IP address
example-ip
Port
80
If you want to create an HTTPS load balancer instead of an HTTP load
balancer, you must have an SSL
certificate ( gcloud compute
ssl-certificates list ), and you must fill in the fields as follows.
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
Select a certificate or Create a new certificate
Click Done .
Review the configuration
Click Review and finalize .
Review the Backend buckets , Host and path rules , and
Frontend sections.
Click Create .
Wait for the load balancer to be created.
Click the name of the load balancer ( http-lb ).
Note the IP address of the load balancer for the next task. It's
referred to as IP_ADDRESS .
gcloud
Configure the backend
gcloud compute backend-buckets create cat-backend-bucket \
--gcs-bucket-name= BUCKET_NAME \
--enable-cdn \
--cache-mode= CACHE_MODE
Set the cache mode by replacing
CACHE_MODE with one of the following:
CACHE_ALL_STATIC or USE_ORIGIN_HEADERS : Uses the headers set
according to cache control
metadata in
Cloud Storage. Cloud Storage always
provides a Cache-Control header to Cloud CDN.
If no value is explicitly chosen, it sends a default value.
FORCE_CACHE_ALL : Caches all content, ignoring any private ,
no-store , or no-cache directives in Cache-Control response
headers sent by Cloud Storage.
Configure the URL map
gcloud compute url-maps create http-lb \
--default-backend-bucket=cat-backend-bucket
Configure the target proxy
gcloud compute target-http-proxies create http-lb-proxy \
--url-map=http-lb
Configure the forwarding rule
For a global external Application Load Balancer, use the
gcloud CLI command with load-balancing-scheme=EXTERNAL_MANAGED . This
setting offers advanced traffic
management capability .
For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL .
gcloud compute forwarding-rules create http-lb-forwarding-rule \
--load-balancing-scheme= LOAD_BALANCING_SCHEME \
--network-tier=PREMIUM \
--address=example-ip \
--global \
--target-http-proxy=http-lb-proxy \
--ports=80
Terraform
Configure the backend
To configure the backend, use the google_compute_backend_bucket resource .
# backend bucket with CDN policy with default ttl settings
resource "google_compute_backend_bucket" "default" {
name = "cat-backend-bucket"
description = "Contains beautiful images"
bucket_name = google_storage_bucket.default.name
enable_cdn = true
cdn_policy {
cache_mode = "CACHE_ALL_STATIC"
client_ttl = 3600
default_ttl = 3600
max_ttl = 86400
negative_caching = true
serve_while_stale = 86400
}
}
Configure the URL map
To configure the backend, use the google_compute_url_map resource .
# url map
resource "google_compute_url_map" "default" {
name = "http-lb"
default_service = google_compute_backend_bucket.default.id
}
Configure the target proxy
To configure the target proxy, use the google_compute_target_http_proxy resource or the google_compute_target_https_proxy resource .
# http proxy
resource "google_compute_target_http_proxy" "default" {
name = "http-lb-proxy"
url_map = google_compute_url_map.default.id
}
Configure the forwarding rule
To configure the forwarding rule, use the google_compute_global_forwarding_rule resource .
# forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
name = "http-lb-forwarding-rule"
ip_protocol = "TCP"
load_balancing_scheme = "EXTERNAL"
port_range = "80"
target = google_compute_target_http_proxy.default.id
ip_address = google_compute_global_address.default.id
}
For a global external Application Load Balancer, use with load_balancing_scheme="EXTERNAL_MANAGED" .
This setting offers advanced traffic management capability .
For a classic Application Load Balancer, use load_balancing_scheme="EXTERNAL" .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Send traffic to your backend bucket
After creating the global forwarding rule, it can take several minutes for your
configuration to propagate worldwide. After several minutes have passed, you can
start sending traffic to the load balancer's IP address.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, go to the Load balancing page.
Go to the Load balancing page
Click http-lb to expand the load balancer that you just
created.
In the Backend section, confirm that the backend bucket is
healthy. There should be a green checkmark next to your backend
bucket. If you see otherwise, first try reloading the page. It can take a
few moments for the Google Cloud console to indicate that backends are
healthy.
After the Google Cloud console shows that the backend bucket is
healthy, you can test your load balancer using a web browser by going to
http:// IP_ADDRESS /never-fetch/three-cats.jpg .
Replace IP_ADDRESS with the
load balancer's IP address .
Your browser should render a page with content showing the graphic file.
gcloud
Use the curl command to test the response from the URL. Replace
IP_ADDRESS with the load balancer's IPv4
address .
Note the IPv4 address that was reserved:
gcloud compute addresses describe example-ip \
--format="get(address)" \
--global
Send a curl request:
curl http:// IP_ADDRESS /never-fetch/three-cats.jpg
Verify that Cloud CDN is working
If you reload the
http:// IP_ADDRESS /never-fetch/three-cats.jpg page
several times in quick succession, there should be several cache hits.
The following log entry shows a cache hit. You can view cache hits in the
Google Cloud console by opening Logs Explorer and filtering by the forwarding
rule name.
Open the Logs Explorer
Note: If you don't specify a forwarding rule name when you set up your load
balancer, the forwarding rule name is the load balancer name plus
-forwarding-rule . In this case, http-lb-forwarding-rule .
Logs Explorer
{
insertId: "1oek5rg3l3fxj7"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
cacheId: "SFO-fbae48ad"
statusDetails: "response_from_cache"
}
httpRequest: {
requestMethod: "GET"
requestUrl: "http:// LOAD_BALANCER_IP_ADDRESS /never-fetch/three-cats.jpg"
requestSize: "577"
status: 254
responseSize: "157"
userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
remoteIp: " CLIENT_IP_ADDRESS "
cacheHit: true
cacheLookup: true
}
resource: {
type: "http_load_balancer"
labels: {
zone: "global"
url_map_name: " URL_MAP_NAME "
forwarding_rule_name: " FORWARDING_RULE_NAME "
target_proxy_name: " TARGET_PROXY_NAME "
backend_service_name: ""
project_id: " PROJECT_ID "
}
}
timestamp: "2020-06-08T23:41:25.078651Z"
severity: "INFO"
logName: "projects/ PROJECT_ID /logs/requests"
trace: "projects/ PROJECT_ID /traces/241d69833e64b3bf83fabac8c873d992"
receiveTimestamp: "2020-06-08T23:41:25.588272510Z"
spanId: "7b6537d3672e08e1"
}
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, go to the Load balancing page.
Go to the Load balancing page
Click http-lb to expand the load balancer that you just
created.
In the Backend section, confirm that the backend bucket is
healthy. There should be a green checkmark next to your backend
bucket. If you see otherwise, first try reloading the page. It can take a
few moments for the Google Cloud console to indicate that backends are
healthy.
After the Google Cloud console shows that the backend bucket is
healthy, you can test your load balancer using a web browser by going to
http:// IP_ADDRESS /never-fetch/three-cats.jpg .
Replace IP_ADDRESS with the
load balancer's IP address .
Your browser should render a page with content showing the graphic file.
gcloud
Use the curl command to test the response from the URL. Replace
IP_ADDRESS with the load balancer's IPv4
address .
Note the IPv4 address that was reserved:
gcloud compute addresses describe example-ip \
--format="get(address)" \
--global
Send a curl request:
curl -D- -o /dev/null /dev/null http:// IP_ADDRESS /never-fetch/three-cats.jpg
Content is fetched from Cloud Storage, cached by Cloud CDN,
and then validated and re-fetched when it expires or is otherwise evicted from
the cache.
Content from cache has an Age header that is greater than zero.
Content that needs to be refreshed earlier than the TTL can be
invalidated and re-fetched from
Cloud Storage.
Disable Cloud CDN
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
Disable Cloud CDN for a single backend bucket
In the Google Cloud console, go to the Cloud CDN page.
Go to the Cloud CDN page
On the right side of the origin row, click
Menu more_vert
and then select Edit .
Clear the checkboxes of any backend buckets that you
want to stop from using Cloud CDN.
Click Update .
Remove Cloud CDN for all backend buckets for an origin
In the Google Cloud console, go to the Cloud CDN page.
Go to the Cloud CDN page
On the right side of the origin row, click
Menu more_vert
and then select Remove .
To confirm, click Remove .
gcloud
gcloud compute backend-buckets update BACKEND_BUCKET_NAME \
--no-enable-cdn
Disabling Cloud CDN does not invalidate or purge caches. If you
turn Cloud CDN off and back on again, most or all of your cached
content might still be cached. To prevent content from being used by the
caches, you must invalidate that content .
What's next
To learn about what content is cached, see the
Caching overview .
To use Cloud CDN in GKE, see
Ingress features .
To check whether Cloud CDN is serving responses from cache, see
Viewing logs .
To find information about common problems and solutions, see
Troubleshooting .
To configure filtering and access control policies for your content, see
Edge security policies .
To set up cache policies in URL maps, see
Configure a Cloud CDN cache policy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
