---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.907Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN logging for HTTP(S) Load Balancing"
feature_slug: "cloud-cdn-logging-for-http-s-load-balancing"
latest_feature_date: "2020-06-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples"
keywords:
  - "cdn"
  - "logging"
  - "for"
  - "http"
  - "load"
  - "balancing"
  - "is"
  - "available"
---

# Cloud CDN logging for HTTP(S) Load Balancing

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN logging is available for traffic served through HTTP(S) Load Balancing.

## Extended Definition

Cloud CDN logging is available for traffic served through HTTP(S) Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- You can request information such as the following: median overall latency (300/600) - 50 ms median UK latency (30/60) - 100 ms 95th percentile overall latency (570/600) - 100 ms Frontend RTT † loadbalancing.googleapis.com/https/frontend tcp rtt A distribution of the frontend RTT.
- For example, the HTTP 410 status code means that the backend is unavailable due to payment delinquency. denied by security policy The load balancer denied this request because of a Google Cloud Armor security policy .
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.
- Request bytes count broken out by cache result This query focuses on backends that have Cloud CDN enabled, which is done by including cache result!="DISABLED" . sum by (cache result) ( rate({"loadbalancing.googleapis.com/https/response bytes count", monitored resource="https lb rule", cache result!="DISABLED"}[1m]) ) Client roundtrip TCP latency at 95% for a specific backend target This query includes backend target name="example-backend" , which narrows down traffic to the backend example-backend .
- For information about enabling and disabling logging, see the External Application Load Balancer and Cloud CDN logging and monitoring overview .

### Automate Cloud CDN setup with Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Storage bucket resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-my-bucket" location = "us-east1" uniform bucket level access = true storage class = "STANDARD" // delete bucket and contents on destroy. force destroy = true // Assign specialty files website { main page suffix = "index.html" not found page = "404.html" } } make bucket public resource "google storage bucket iam member" "default" { bucket = google storage bucket.default.name role = "roles/storage.objectViewer" member = "allUsers" } resource "google storage bucket object" "index page" { name = "index-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>Congratulations on setting up Google Cloud CDN with Storage backend!</h1> </body></html> EOT } resource "google storage bucket object" "error page" { name = "404-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>404 Error: Object you are looking for is no longer available!</h1> </body></html> EOT } image object for testing, try to access http://<your lb ip address>/test.jpg resource "google storage bucket object" "test image" { name = "test-object" Uncomment and add valid path to an object. source = "/path/to/an/object" content type = "image/jpeg" Delete after uncommenting above source and content type attributes content = "Data as string to be uploaded" content type = "text/plain" bucket = google storage bucket.default.name } reserve IP address resource "google compute global address" "default" { name = "example-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Using MIG and custom headers You can use Terraform resources to bring up an external HTTP load balancer with a Cloud CDN backend service and custom request and response headers .
- VPC resource "google compute network" "default" { name = "l7-xlb-network" provider = google-beta auto create subnetworks = false } backend subnet resource "google compute subnetwork" "default" { name = "l7-xlb-subnet" provider = google-beta ip cidr range = "10.0.1.0/24" region = "us-central1" network = google compute network.default.id } reserved IP address resource "google compute global address" "default" { provider = google-beta name = "l7-xlb-static-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "l7-xlb-forwarding-rule" provider = google-beta ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "l7-xlb-target-http-proxy" provider = google-beta url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "l7-xlb-url-map" provider = google-beta default service = google compute backend service.default.id } backend service with custom request and response headers resource "google compute backend service" "default" { name = "l7-xlb-backend-service" provider = google-beta protocol = "HTTP" port name = "my-port" load balancing scheme = "EXTERNAL" timeout sec = 10 enable cdn = true custom request headers = ["X-Client-Geo-Location: {client region subdivision}, {client city}"] custom response headers = ["X-Cache-Hit: {cdn cache status}"] health checks = [google compute health check.default.id] backend { group = google compute instance group manager.default.instance group balancing mode = "UTILIZATION" capacity scaler = 1.0 } } instance template resource "google compute instance template" "default" { name = "l7-xlb-mig-template" provider = google-beta machine type = "e2-small" tags = ["allow-health-check"] network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id access config { add external ip to fetch packages } } disk { source image = "debian-cloud/debian-12" auto delete = true boot = true } install nginx and serve a simple web page metadata = { startup-script = <<-EOF1 #! /bin/bash set -euo pipefail export DEBIAN FRONTEND=noninteractive apt-get update apt-get install -y nginx-light jq NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname") IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip") METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" jq 'del(.["startup-script"])') cat <<EOF > /var/www/html/index.html <pre> Name: $NAME IP: $IP Metadata: $METADATA </pre> EOF EOF1 } lifecycle { create before destroy = true } } health check resource "google compute health check" "default" { name = "l7-xlb-hc" provider = google-beta http health check { port specification = "USE SERVING PORT" } } MIG resource "google compute instance group manager" "default" { name = "l7-xlb-mig1" provider = google-beta zone = "us-central1-c" named port { name = "http" port = 8080 } version { instance template = google compute instance template.default.id name = "primary" } base instance name = "vm" target size = 2 } allow access from health check ranges resource "google compute firewall" "default" { name = "l7-xlb-fw-allow-hc" provider = google-beta direction = "INGRESS" network = google compute network.default.id source ranges = ["130.211.0.0/22", "35.191.0.0/16"] allow { protocol = "tcp" } target tags = ["allow-health-check"] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Networking Cloud CDN Guides Send feedback Automate Cloud CDN setup with Terraform Stay organized with collections Save and categorize content based on your preferences.

