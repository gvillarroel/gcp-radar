---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.940Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private Service Connect for Cloud SQL"
feature_slug: "private-service-connect-for-cloud-sql"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "sql"
  - "lets"
  - "eligible"
  - "customers"
  - "instance"
  - "multiple"
---

# Private Service Connect for Cloud SQL

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect lets eligible customers connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Extended Definition

Private Service Connect lets eligible customers connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- By using Private Service Connect, you can connect to either a primary instance or any of its read replicas from multiple VPC networks.
- Use the following sample to create an IPv4 Private Service Connect endpoint. resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "10.128.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link allow psc global access = true } Use the following sample to create an IPv6 Private Service Connect endpoint. resource "google compute network" "ipv6 default" { name = "net-ipv6" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "ipv6 default" { name = "subnet-internal-ipv6" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" network = google compute network.ipv6 default.id } resource "google compute address" "ipv6 default" { name = "psc-compute-ipv6-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = google compute subnetwork.ipv6 default.name ip version = "IPV6" } resource "google compute forwarding rule" "ipv6 ilb example" { name = "ipv6-psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link network = google compute network.ipv6 default.name subnetwork = google compute subnetwork.ipv6 default.name ip address = google compute address.ipv6 default.id allow psc global access = true } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- By configuring Private Service Connect , you can connect to either a primary Cloud SQL instance or any of its read replicas from multiple VPC networks that belong to different groups, teams, projects, or organizations.
- By using Private Service Connect, you can connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
- You can use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks.
- Terraform To create an instance with both private services access and Private Service Connect enabled, use the google sql database instance Terraform resource . resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "192.168.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.

