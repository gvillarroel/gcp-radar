---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.865Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN flexible pattern matching for advanced traffic management"
feature_slug: "cloud-cdn-flexible-pattern-matching-for-advanced-traffic-management"
latest_feature_date: "2023-05-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig"
keywords:
  - "cdn"
  - "flexible"
  - "pattern"
  - "matching"
  - "for"
  - "advanced"
  - "traffic"
  - "management"
---

# Cloud CDN flexible pattern matching for advanced traffic management

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports advanced traffic management on the Global External HTTP(S) Load Balancer using flexible path pattern matching; Cloud CDN introduces flexible path pattern matching with Global External HTTP(S) Load Balancers to route traffic by advanced wildcard and rewrite behavior.

## Extended Definition

Cloud CDN supports advanced traffic management on the Global External HTTP(S) Load Balancer using flexible path pattern matching; Cloud CDN introduces flexible path pattern matching with Global External HTTP(S) Load Balancers to route traffic by advanced wildcard and rewrite behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- January 31, 2023 Feature Cloud CDN supports advanced traffic management using flexible pattern matching with Global External HTTP(S) Load Balancer.
- May 30, 2023 Feature The advanced traffic management using flexible pattern matching capability with Global External HTTP(S) Load Balancer is now Generally Available .
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.
- May 29, 2020 Change To help you get started quickly, added two new examples for setting up Cloud CDN: Setting up Cloud CDN with a managed instance group Setting up Cloud CDN with a backend bucket May 01, 2020 Change Added a new Features page that summarizes all Cloud CDN capabilities.

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Under Advanced traffic management , select one of the following: For classic Application Load Balancers, select Classic HTTP(S) Load Balancer .
- For global external Application Load Balancers, select HTTP(S) Load Balancer with Advanced Traffic Management .
- This setting offers advanced traffic management capability .
- This setting offers advanced traffic management capability .

### "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- In the Startup script field, enter the following script: #! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" echo "Page served from: $vm hostname" \ tee /var/www/html/index.html systemctl restart apache2 Click Create . gcloud To support IPv4 traffic , run the following command: gcloud compute instance-templates create TEMPLATE NAME \ --region= REGION \ --network= NETWORK \ --subnet= SUBNET \ --stack-type=IPV4 ONLY \ --tags=allow-health-check \ --image-family=debian-10 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" echo "Page served from: $vm hostname" \ tee /var/www/html/index.html systemctl restart apache2' Terraform To create the instance template, use the google compute instance template resource . resource "google compute instance template" "default" { name = "lb-backend-template" disk { auto delete = true boot = true device name = "persistent-disk-0" mode = "READ WRITE" source image = "projects/debian-cloud/global/images/family/debian-11" type = "PERSISTENT" } labels = { managed-by-cnrm = "true" } machine type = "n1-standard-1" metadata = { startup-script = "#! /bin/bash\n sudo apt-get update\n sudo apt-get install apache2 -y\n sudo a2ensite default-ssl\n sudo a2enmod ssl\n vm hostname=\"$(curl -H \"Metadata-Flavor:Google\" \\\n http://169.254.169.254/computeMetadata/v1/instance/name)\"\n sudo echo \"Page served from: $vm hostname\" \\\n tee /var/www/html/index.html\n sudo systemctl restart apache2" } network interface { access config { network tier = "PREMIUM" } network = "global/networks/default" subnetwork = "regions/us-east1/subnetworks/default" } region = "us-east1" scheduling { automatic restart = true on host maintenance = "MIGRATE" provisioning model = "STANDARD" } service account { email = "default" scopes = ["https://www.googleapis.com/auth/devstorage.read only", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/monitoring.write", "https://www.googleapis.com/auth/pubsub", "https://www.googleapis.com/auth/service.management.readonly", "https://www.googleapis.com/auth/servicecontrol", "https://www.googleapis.com/auth/trace.append"] } tags = ["allow-health-check"] } Create the managed instance group and select the instance template.
- This example uses load balancing scheme="EXTERNAL MANAGED" , which sets up a global external Application Load Balancer with advanced traffic management capability .
- This example uses load balancing scheme="EXTERNAL MANAGED" , which sets up a global external Application Load Balancer with advanced traffic management capability .
- If your browser doesn't render this page, review the configuration settings in this guide. gcloud gcloud compute addresses describe lb-ipv4-1 \ --format="get(address)" \ --global After a few minutes have passed, you can test the setup by running the following curl command. curl http:// IP ADDRESS -OR- curl https:// HOSTNAME Disable Cloud CDN Console Disable Cloud CDN for a single backend service In the Google Cloud console, go to the Cloud CDN page.

