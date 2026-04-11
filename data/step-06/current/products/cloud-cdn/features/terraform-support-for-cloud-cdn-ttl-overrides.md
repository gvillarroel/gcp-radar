---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.877Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Terraform support for Cloud CDN TTL overrides"
feature_slug: "terraform-support-for-cloud-cdn-ttl-overrides"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples"
  - "https://docs.cloud.google.com/cdn/docs/using-ttl-overrides"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "terraform"
  - "for"
  - "cdn"
  - "ttl"
  - "overrides"
  - "the"
  - "provider"
  - "can"
---

# Terraform support for Cloud CDN TTL overrides

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

The Google Terraform provider can configure TTL override settings for Cloud CDN.

## Extended Definition

The Google Terraform provider can configure TTL override settings for Cloud CDN.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Automate Cloud CDN setup with Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Storage bucket resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-my-bucket" location = "us-east1" uniform bucket level access = true storage class = "STANDARD" // delete bucket and contents on destroy. force destroy = true // Assign specialty files website { main page suffix = "index.html" not found page = "404.html" } } make bucket public resource "google storage bucket iam member" "default" { bucket = google storage bucket.default.name role = "roles/storage.objectViewer" member = "allUsers" } resource "google storage bucket object" "index page" { name = "index-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>Congratulations on setting up Google Cloud CDN with Storage backend!</h1> </body></html> EOT } resource "google storage bucket object" "error page" { name = "404-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>404 Error: Object you are looking for is no longer available!</h1> </body></html> EOT } image object for testing, try to access http://<your lb ip address>/test.jpg resource "google storage bucket object" "test image" { name = "test-object" Uncomment and add valid path to an object. source = "/path/to/an/object" content type = "image/jpeg" Delete after uncommenting above source and content type attributes content = "Data as string to be uploaded" content type = "text/plain" bucket = google storage bucket.default.name } reserve IP address resource "google compute global address" "default" { name = "example-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Using MIG and custom headers You can use Terraform resources to bring up an external HTTP load balancer with a Cloud CDN backend service and custom request and response headers .
- VPC resource "google compute network" "default" { name = "l7-xlb-network" provider = google-beta auto create subnetworks = false } backend subnet resource "google compute subnetwork" "default" { name = "l7-xlb-subnet" provider = google-beta ip cidr range = "10.0.1.0/24" region = "us-central1" network = google compute network.default.id } reserved IP address resource "google compute global address" "default" { provider = google-beta name = "l7-xlb-static-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "l7-xlb-forwarding-rule" provider = google-beta ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "l7-xlb-target-http-proxy" provider = google-beta url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "l7-xlb-url-map" provider = google-beta default service = google compute backend service.default.id } backend service with custom request and response headers resource "google compute backend service" "default" { name = "l7-xlb-backend-service" provider = google-beta protocol = "HTTP" port name = "my-port" load balancing scheme = "EXTERNAL" timeout sec = 10 enable cdn = true custom request headers = ["X-Client-Geo-Location: {client region subdivision}, {client city}"] custom response headers = ["X-Cache-Hit: {cdn cache status}"] health checks = [google compute health check.default.id] backend { group = google compute instance group manager.default.instance group balancing mode = "UTILIZATION" capacity scaler = 1.0 } } instance template resource "google compute instance template" "default" { name = "l7-xlb-mig-template" provider = google-beta machine type = "e2-small" tags = ["allow-health-check"] network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id access config { add external ip to fetch packages } } disk { source image = "debian-cloud/debian-12" auto delete = true boot = true } install nginx and serve a simple web page metadata = { startup-script = <<-EOF1 #! /bin/bash set -euo pipefail export DEBIAN FRONTEND=noninteractive apt-get update apt-get install -y nginx-light jq NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname") IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip") METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" jq 'del(.["startup-script"])') cat <<EOF > /var/www/html/index.html <pre> Name: $NAME IP: $IP Metadata: $METADATA </pre> EOF EOF1 } lifecycle { create before destroy = true } } health check resource "google compute health check" "default" { name = "l7-xlb-hc" provider = google-beta http health check { port specification = "USE SERVING PORT" } } MIG resource "google compute instance group manager" "default" { name = "l7-xlb-mig1" provider = google-beta zone = "us-central1-c" named port { name = "http" port = 8080 } version { instance template = google compute instance template.default.id name = "primary" } base instance name = "vm" target size = 2 } allow access from health check ranges resource "google compute firewall" "default" { name = "l7-xlb-fw-allow-hc" provider = google-beta direction = "INGRESS" network = google compute network.default.id source ranges = ["130.211.0.0/22", "35.191.0.0/16"] allow { protocol = "tcp" } target tags = ["allow-health-check"] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Cloud CDN Guides Send feedback Automate Cloud CDN setup with Terraform Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Change TTL settings and overrides \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set the default TTL To improve cache hit rates for content that doesn't change often, you can override the default TTL so that Cloud CDN revalidates content at the origin less frequently.
- Default TTL Max TTL Client TTL Reason to configure Improve cache hit rates for content that doesn't change often Force Cloud CDN to revalidate content more often than specified by an origin header Force clients to revalidate content more often against Cloud CDN Used when One of the following is true, for a successful response: cache mode = FORCE CACHE ALL cache mode = CACHE ALL STATIC , the content-type is statically cacheable, and a TTL isn't set by origin headers ( max-age , s-maxage , or Expires ) All of the following are true: cache mode = CACHE ALL STATIC A TTL is set by origin headers ( max-age , s-maxage , or Expires ) The TTL specified in the origin header is greater than the max TTL value One of the following is true: cache mode = FORCE CACHE ALL , and the client TTL value is less than Cloud CDN's TTL cache mode = CACHE ALL STATIC , and the client TTL is less than the TTL set by the origin header (or default TTL if no origin header information is present) Default value 3600 seconds (1 hour) 86,400 seconds (1 day) 3600 seconds (1 hour) Max allowed value 31,622,400 seconds (1 year) 31,622,400 seconds (1 year) 31,622,400 seconds (1 year) Notes Must be less than or equal to the max TTL --default-ttl=0 forces the response to be revalidated at the origin Must be less than or equal to the max TTL Before you begin Read about cache modes .
- In FORCE CACHE ALL mode, Cloud CDN normally passes the same max-age to the client that it uses internally for proxy caching; however, if a client TTL is specified and is a smaller value, the client TTL is passed to the client in the max-age directive instead.
- When you set the cache mode to use origin headers ( USE ORIGIN HEADERS ), the default TTL value doesn't apply and cannot be set because Cloud CDN uses the max-age or s-maxage origin directive or the Expires header instead.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2020 Feature The Google Terraform provider now supports the latest Cloud CDN features, including cache modes , TTL overrides, and custom response headers.
- The Google Terraform provider also supports these latest Cloud CDN features, including cache modes, TTL overrides, and custom response headers.
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.

