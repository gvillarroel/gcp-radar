---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.810Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automatic Private Service Connect endpoint creation"
feature_slug: "automatic-private-service-connect-endpoint-creation"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
keywords:
  - "automatic"
  - "private"
  - "connect"
  - "endpoint"
  - "creation"
  - "this"
  - "automatically"
  - "creates"
---

# Automatic Private Service Connect endpoint creation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature automatically creates a Private Service Connect endpoint for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network.

## Extended Definition

This feature automatically creates a Private Service Connect endpoint for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect PROJECT ID : the ID or project number of the Google Cloud project that contains the instance The following example shows a sample output for this command: gcloud sql instances describe myinstance \ --project = 12345 ... pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Only specify this if CONSUMER NETWORK is a Shared VPC network and you want to allow automatic creation of Private Service Connect endpoints in a service project.
- With this policy, you can provision Private Service Connect endpoints automatically.
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Service attachment When you create a Cloud SQL instance and configure the instance to use Private Service Connect, Cloud SQL creates a service attachment for the instance automatically.
- Create a Cloud SQL instance with Private Service Connect enabled for the instance and configure the instance to create an endpoint automatically.
- As a result, you can provision Private Service Connect endpoints automatically.
- Cloud SQL locates the service connection policy in these networks and creates a Private Service Connect endpoint that points to the service attachment of the instance.

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- How Cloud SQL creates a write endpoint If you enable the Cloud DNS API for your Google Cloud project, and then you create a primary Cloud SQL Enterprise Plus edition instance , promote the replica for the instance , or upgrade the instance from Cloud SQL Enterprise edition , Cloud SQL generates a write endpoint automatically and assigns it to the instance.
- Specifically, these are: 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "instance" { name = "private-ip-sql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.name dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

