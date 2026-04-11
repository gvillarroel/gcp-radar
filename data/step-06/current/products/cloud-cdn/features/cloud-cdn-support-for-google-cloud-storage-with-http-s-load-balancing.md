---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.919Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN support for Google Cloud Storage with HTTP(S) Load Balancing"
feature_slug: "cloud-cdn-support-for-google-cloud-storage-with-http-s-load-balancing"
latest_feature_date: "2017-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
  - "https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
keywords:
  - "cdn"
  - "for"
  - "storage"
  - "with"
  - "http"
  - "load"
  - "balancing"
  - "can"
---

# Cloud CDN support for Google Cloud Storage with HTTP(S) Load Balancing

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing; Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing.

## Extended Definition

Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing; Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)

## Supporting Pages

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- When you use an external backend with an external Application Load Balancer, you can improve performance by using Cloud CDN caching.
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.45' /cart/id/1223515/image.jpg.45 100%[==============================================================================================================================================>] 3.29M --.-KB/s in 0.008s 2020-06-26 18:19:29 (423 MB/s) - '/cart/id/1223515/image.jpg.45' saved [3447106/3447106] real 0m0.018s user 0m0.001s sys 0m0.010s Verify by using logs Logs for Cloud CDN are associated with the external Application Load Balancer that your Cloud CDN-enabled backends are attached to.
- Note: If your content is already in a Cloud Storage bucket, see Set up Cloud CDN with a backend bucket for configuring Cloud CDN with Cloud Storage.

### Automate Cloud CDN setup with Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Storage bucket resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-my-bucket" location = "us-east1" uniform bucket level access = true storage class = "STANDARD" // delete bucket and contents on destroy. force destroy = true // Assign specialty files website { main page suffix = "index.html" not found page = "404.html" } } make bucket public resource "google storage bucket iam member" "default" { bucket = google storage bucket.default.name role = "roles/storage.objectViewer" member = "allUsers" } resource "google storage bucket object" "index page" { name = "index-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>Congratulations on setting up Google Cloud CDN with Storage backend!</h1> </body></html> EOT } resource "google storage bucket object" "error page" { name = "404-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>404 Error: Object you are looking for is no longer available!</h1> </body></html> EOT } image object for testing, try to access http://<your lb ip address>/test.jpg resource "google storage bucket object" "test image" { name = "test-object" Uncomment and add valid path to an object. source = "/path/to/an/object" content type = "image/jpeg" Delete after uncommenting above source and content type attributes content = "Data as string to be uploaded" content type = "text/plain" bucket = google storage bucket.default.name } reserve IP address resource "google compute global address" "default" { name = "example-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Using MIG and custom headers You can use Terraform resources to bring up an external HTTP load balancer with a Cloud CDN backend service and custom request and response headers .
- VPC resource "google compute network" "default" { name = "l7-xlb-network" provider = google-beta auto create subnetworks = false } backend subnet resource "google compute subnetwork" "default" { name = "l7-xlb-subnet" provider = google-beta ip cidr range = "10.0.1.0/24" region = "us-central1" network = google compute network.default.id } reserved IP address resource "google compute global address" "default" { provider = google-beta name = "l7-xlb-static-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "l7-xlb-forwarding-rule" provider = google-beta ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "l7-xlb-target-http-proxy" provider = google-beta url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "l7-xlb-url-map" provider = google-beta default service = google compute backend service.default.id } backend service with custom request and response headers resource "google compute backend service" "default" { name = "l7-xlb-backend-service" provider = google-beta protocol = "HTTP" port name = "my-port" load balancing scheme = "EXTERNAL" timeout sec = 10 enable cdn = true custom request headers = ["X-Client-Geo-Location: {client region subdivision}, {client city}"] custom response headers = ["X-Cache-Hit: {cdn cache status}"] health checks = [google compute health check.default.id] backend { group = google compute instance group manager.default.instance group balancing mode = "UTILIZATION" capacity scaler = 1.0 } } instance template resource "google compute instance template" "default" { name = "l7-xlb-mig-template" provider = google-beta machine type = "e2-small" tags = ["allow-health-check"] network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id access config { add external ip to fetch packages } } disk { source image = "debian-cloud/debian-12" auto delete = true boot = true } install nginx and serve a simple web page metadata = { startup-script = <<-EOF1 #! /bin/bash set -euo pipefail export DEBIAN FRONTEND=noninteractive apt-get update apt-get install -y nginx-light jq NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname") IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip") METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" jq 'del(.["startup-script"])') cat <<EOF > /var/www/html/index.html <pre> Name: $NAME IP: $IP Metadata: $METADATA </pre> EOF EOF1 } lifecycle { create before destroy = true } } health check resource "google compute health check" "default" { name = "l7-xlb-hc" provider = google-beta http health check { port specification = "USE SERVING PORT" } } MIG resource "google compute instance group manager" "default" { name = "l7-xlb-mig1" provider = google-beta zone = "us-central1-c" named port { name = "http" port = 8080 } version { instance template = google compute instance template.default.id name = "primary" } base instance name = "vm" target size = 2 } allow access from health check ranges resource "google compute firewall" "default" { name = "l7-xlb-fw-allow-hc" provider = google-beta direction = "INGRESS" network = google compute network.default.id source ranges = ["130.211.0.0/22", "35.191.0.0/16"] allow { protocol = "tcp" } target tags = ["allow-health-check"] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Cloud CDN Guides Send feedback Automate Cloud CDN setup with Terraform Stay organized with collections Save and categorize content based on your preferences.
- Using a Cloud Storage bucket The following sample configures Cloud CDN with a public Cloud Storage bucket.

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create http-lb-forwarding-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=example-ip \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Terraform Configure the backend To configure the backend, use the google compute backend bucket resource . backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Configure the URL map To configure the backend, use the google compute url map resource . url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } Configure the target proxy To configure the target proxy, use the google compute target http proxy resource or the google compute target https proxy resource . http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } Configure the forwarding rule To configure the forwarding rule, use the google compute global forwarding rule resource . forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } For a global external Application Load Balancer, use with load balancing scheme="EXTERNAL MANAGED" .
- Replace BUCKET NAME with your unique Cloud Storage bucket name: gcloud storage cp gs://gcp-external-http-lb-with-bucket/three-cats.jpg gs:// BUCKET NAME /never-fetch/ Terraform To copy the object, use the local-exec Provisioner with the gcloud storage cp command. resource "null resource" "upload image" { provisioner "local-exec" { command = "gcloud storage cp gs://gcp-external-http-lb-with-bucket/three-cats.jpg gs://${google storage bucket.default.name}/never-fetch/ --recursive" } } Alternatively, to upload an object, use the google storage bucket object resource . image object for testing, try to access http://<your lb ip address>/test.jpg resource "google storage bucket object" "test image" { name = "test-object" Uncomment and add valid path to an object. source = "/path/to/an/object" content type = "image/jpeg" Delete after uncommenting above source and content type attributes content = "Data as string to be uploaded" content type = "text/plain" bucket = google storage bucket.default.name } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Configure the URL map gcloud compute url-maps create http-lb \ --default-backend-bucket=cat-backend-bucket Configure the target proxy gcloud compute target-http-proxies create http-lb-proxy \ --url-map=http-lb Configure the forwarding rule For a global external Application Load Balancer, use the gcloud CLI command with load-balancing-scheme=EXTERNAL MANAGED .
- Because global external Application Load Balancers can have multiple backend instance types — Compute Engine VM instances, Google Kubernetes Engine Pods, Cloud Storage buckets, or external backends outside of Google Cloud—you can choose which backends ( origins ) to enable Cloud CDN for.

