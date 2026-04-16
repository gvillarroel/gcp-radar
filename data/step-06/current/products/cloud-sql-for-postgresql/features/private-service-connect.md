---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.785Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
keywords:
  - "multiple"
  - "connect"
  - "private"
  - "instance"
  - "lets"
---

# Private Service Connect

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect lets you connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Extended Definition

Private Service Connect lets you connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- By using Private Service Connect, you can connect to either a primary instance or any of its read replicas from multiple VPC networks.
- Use the following sample to create an IPv4 Private Service Connect endpoint. resource "google compute address" "default" { name = "psc-compute-address" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "10.128.0.42" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link allow psc global access = true } Use the following sample to create an IPv6 Private Service Connect endpoint. resource "google compute network" "ipv6 default" { name = "net-ipv6" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "ipv6 default" { name = "subnet-internal-ipv6" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" network = google compute network.ipv6 default.id } resource "google compute address" "ipv6 default" { name = "psc-compute-ipv6-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = google compute subnetwork.ipv6 default.name ip version = "IPV6" } resource "google compute forwarding rule" "ipv6 ilb example" { name = "ipv6-psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link network = google compute network.ipv6 default.name subnetwork = google compute subnetwork.ipv6 default.name ip address = google compute address.ipv6 default.id allow psc global access = true } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.

