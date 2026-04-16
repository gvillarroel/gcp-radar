---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.359Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Terraform support for Cloud CDN custom response headers"
feature_slug: "terraform-support-for-cloud-cdn-custom-response-headers"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig"
keywords:
  - "terraform"
  - "configure"
  - "provider"
  - "response"
  - "headers"
  - "custom"
---

# Terraform support for Cloud CDN custom response headers

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

The Google Terraform provider can configure custom response headers for Cloud CDN resources.

## Extended Definition

The Google Terraform provider can configure custom response headers for Cloud CDN resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)

## Supporting Pages

### Automate Cloud CDN setup with Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples](https://docs.cloud.google.com/cdn/docs/cdn-terraform-examples)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- VPC resource "google compute network" "default" { name = "l7-xlb-network" provider = google-beta auto create subnetworks = false } backend subnet resource "google compute subnetwork" "default" { name = "l7-xlb-subnet" provider = google-beta ip cidr range = "10.0.1.0/24" region = "us-central1" network = google compute network.default.id } reserved IP address resource "google compute global address" "default" { provider = google-beta name = "l7-xlb-static-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "l7-xlb-forwarding-rule" provider = google-beta ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "l7-xlb-target-http-proxy" provider = google-beta url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "l7-xlb-url-map" provider = google-beta default service = google compute backend service.default.id } backend service with custom request and response headers resource "google compute backend service" "default" { name = "l7-xlb-backend-service" provider = google-beta protocol = "HTTP" port name = "my-port" load balancing scheme = "EXTERNAL" timeout sec = 10 enable cdn = true custom request headers = ["X-Client-Geo-Location: {client region subdivision}, {client city}"] custom response headers = ["X-Cache-Hit: {cdn cache status}"] health checks = [google compute health check.default.id] backend { group = google compute instance group manager.default.instance group balancing mode = "UTILIZATION" capacity scaler = 1.0 } } instance template resource "google compute instance template" "default" { name = "l7-xlb-mig-template" provider = google-beta machine type = "e2-small" tags = ["allow-health-check"] network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id access config { add external ip to fetch packages } } disk { source image = "debian-cloud/debian-12" auto delete = true boot = true } install nginx and serve a simple web page metadata = { startup-script = <<-EOF1 #! /bin/bash set -euo pipefail export DEBIAN FRONTEND=noninteractive apt-get update apt-get install -y nginx-light jq NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname") IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip") METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" jq 'del(.["startup-script"])') cat <<EOF > /var/www/html/index.html <pre> Name: $NAME IP: $IP Metadata: $METADATA </pre> EOF EOF1 } lifecycle { create before destroy = true } } health check resource "google compute health check" "default" { name = "l7-xlb-hc" provider = google-beta http health check { port specification = "USE SERVING PORT" } } MIG resource "google compute instance group manager" "default" { name = "l7-xlb-mig1" provider = google-beta zone = "us-central1-c" named port { name = "http" port = 8080 } version { instance template = google compute instance template.default.id name = "primary" } base instance name = "vm" target size = 2 } allow access from health check ranges resource "google compute firewall" "default" { name = "l7-xlb-fw-allow-hc" provider = google-beta direction = "INGRESS" network = google compute network.default.id source ranges = ["130.211.0.0/22", "35.191.0.0/16"] allow { protocol = "tcp" } target tags = ["allow-health-check"] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Storage bucket resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-my-bucket" location = "us-east1" uniform bucket level access = true storage class = "STANDARD" // delete bucket and contents on destroy. force destroy = true // Assign specialty files website { main page suffix = "index.html" not found page = "404.html" } } make bucket public resource "google storage bucket iam member" "default" { bucket = google storage bucket.default.name role = "roles/storage.objectViewer" member = "allUsers" } resource "google storage bucket object" "index page" { name = "index-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>Congratulations on setting up Google Cloud CDN with Storage backend!</h1> </body></html> EOT } resource "google storage bucket object" "error page" { name = "404-page" bucket = google storage bucket.default.name content = <<-EOT <html><body> <h1>404 Error: Object you are looking for is no longer available!</h1> </body></html> EOT } image object for testing, try to access http://<your lb ip address>/test.jpg resource "google storage bucket object" "test image" { name = "test-object" Uncomment and add valid path to an object. source = "/path/to/an/object" content type = "image/jpeg" Delete after uncommenting above source and content type attributes content = "Data as string to be uploaded" content type = "text/plain" bucket = google storage bucket.default.name } reserve IP address resource "google compute global address" "default" { name = "example-ip" } forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Using MIG and custom headers You can use Terraform resources to bring up an external HTTP load balancer with a Cloud CDN backend service and custom request and response headers .
- Home Documentation Networking Cloud CDN Guides Send feedback Automate Cloud CDN setup with Terraform Stay organized with collections Save and categorize content based on your preferences.
- Using a Cloud Storage bucket The following sample configures Cloud CDN with a public Cloud Storage bucket.

### "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FORCE CACHE ALL : Caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers.
- In the Startup script field, enter the following script: #! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" echo "Page served from: $vm hostname" \ tee /var/www/html/index.html systemctl restart apache2 Click Create . gcloud To support IPv4 traffic , run the following command: gcloud compute instance-templates create TEMPLATE NAME \ --region= REGION \ --network= NETWORK \ --subnet= SUBNET \ --stack-type=IPV4 ONLY \ --tags=allow-health-check \ --image-family=debian-10 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" echo "Page served from: $vm hostname" \ tee /var/www/html/index.html systemctl restart apache2' Terraform To create the instance template, use the google compute instance template resource . resource "google compute instance template" "default" { name = "lb-backend-template" disk { auto delete = true boot = true device name = "persistent-disk-0" mode = "READ WRITE" source image = "projects/debian-cloud/global/images/family/debian-11" type = "PERSISTENT" } labels = { managed-by-cnrm = "true" } machine type = "n1-standard-1" metadata = { startup-script = "#! /bin/bash\n sudo apt-get update\n sudo apt-get install apache2 -y\n sudo a2ensite default-ssl\n sudo a2enmod ssl\n vm hostname=\"$(curl -H \"Metadata-Flavor:Google\" \\\n http://169.254.169.254/computeMetadata/v1/instance/name)\"\n sudo echo \"Page served from: $vm hostname\" \\\n tee /var/www/html/index.html\n sudo systemctl restart apache2" } network interface { access config { network tier = "PREMIUM" } network = "global/networks/default" subnetwork = "regions/us-east1/subnetworks/default" } region = "us-east1" scheduling { automatic restart = true on host maintenance = "MIGRATE" provisioning model = "STANDARD" } service account { email = "default" scopes = ["https://www.googleapis.com/auth/devstorage.read only", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/monitoring.write", "https://www.googleapis.com/auth/pubsub", "https://www.googleapis.com/auth/service.management.readonly", "https://www.googleapis.com/auth/servicecontrol", "https://www.googleapis.com/auth/trace.append"] } tags = ["allow-health-check"] } Create the managed instance group and select the instance template.
- For HTTP, create a target HTTP proxy to route requests to your URL map. gcloud compute target-http-proxies create http-lb-proxy \ --url-map=web-map-http For HTTP, create a global forwarding rule to route incoming requests to the proxy. gcloud compute forwarding-rules create http-content-rule \ --load-balancing-scheme=EXTERNAL \ --address=lb-ipv4-1 \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Terraform To create the health check, use the google compute health check resource. resource "google compute health check" "default" { name = "http-basic-check" check interval sec = 5 healthy threshold = 2 http health check { port = 80 port specification = "USE FIXED PORT" proxy header = "NONE" request path = "/" } timeout sec = 5 unhealthy threshold = 2 } To create the backend service, use the google compute backend service resource.
- To create the new instance group, click Create . gcloud Create the managed instance group based on the template. gcloud compute instance-groups managed create lb-backend-example \ --template= TEMPLATE NAME --size=2 --zone= ZONE A Terraform To create the managed instance group, use the google compute instance group manager resource . resource "google compute instance group manager" "default" { name = "lb-backend-example" zone = "us-east1-b" named port { name = "http" port = 80 } version { instance template = google compute instance template.default.id name = "primary" } base instance name = "vm" target size = 2 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create http-lb-forwarding-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=example-ip \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Terraform Configure the backend To configure the backend, use the google compute backend bucket resource . backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Configure the URL map To configure the backend, use the google compute url map resource . url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } Configure the target proxy To configure the target proxy, use the google compute target http proxy resource or the google compute target https proxy resource . http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } Configure the forwarding rule To configure the forwarding rule, use the google compute global forwarding rule resource . forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } For a global external Application Load Balancer, use with load balancing scheme="EXTERNAL MANAGED" .
- It's referred to as IP ADDRESS . gcloud Configure the backend gcloud compute backend-buckets create cat-backend-bucket \ --gcs-bucket-name= BUCKET NAME \ --enable-cdn \ --cache-mode= CACHE MODE Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC or USE ORIGIN HEADERS : Uses the headers set according to cache control metadata in Cloud Storage.
- FORCE CACHE ALL : Caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers sent by Cloud Storage.
- Logs Explorer { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /never-fetch/three-cats.jpg" requestSize: "577" status: 254 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:25.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:25.588272510Z" spanId: "7b6537d3672e08e1" } Console Note: For global external Application Load Balancers, the Google Cloud console isn't supported.

