---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.451Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect service connectivity automation"
feature_slug: "private-service-connect-service-connectivity-automation"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-service-connection-policies"
keywords:
  - "private"
  - "connect"
  - "connectivity"
  - "automation"
  - "enables"
  - "automatic"
  - "setup"
  - "of"
---

# Private Service Connect service connectivity automation

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect service connectivity automation enables automatic setup of Private Service Connect connections to supported Google service instances across projects, folders, or organizations; Private Service Connect service connectivity automation is generally available, allowing service producers to automate deployment and service connectivity for eligible managed services on behalf of consumers.

## Extended Definition

Private Service Connect service connectivity automation enables automatic setup of Private Service Connect connections to supported Google service instances across projects, folders, or organizations; Private Service Connect service connectivity automation is generally available, allowing service producers to automate deployment and service connectivity for eligible managed services on behalf of consumers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)

## Supporting Pages

### "About service connectivity automation \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic retries for endpoint failures Service connectivity automation fully manages the creation and deletion of your Private Service Connect endpoints.
- Shared VPC Service connectivity automation can be used to automatically create Private Service Connect endpoints in Shared VPC networks.
- If the managed service instance is a Google service and the service connection policy specifies a custom service instance scope ( custom-resource-hierarchy-levels ), then service connectivity automation checks the list of Resource Manager nodes that are provided ( --allowed-google-producers-resource-hierarchy-level ).
- If service connectivity automation fails to create or delete an authorized endpoint—for example, due to quota limitations or the service connection policy's subnet being out of IP addresses—an automated process periodically retries the operation until the blocking issue is resolved.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- By default, Connectivity Tests attempts to run a test by using the private IP address of the Google-managed service endpoint.
- These parameters are automatically selected based on your source and destination IP addresses. resource "google network management connectivity test" "default" { name = "conn-test-addr" source { ip address = google compute address.source addr.address project id = google compute address.source addr.project network = google compute network.default.id network type = "GCP NETWORK" } destination { ip address = google compute address.dest addr.address project id = google compute address.dest addr.project network = google compute network.default.id port = "80" } protocol = "UDP" } resource "google compute network" "default" { name = "connectivity-vpc" auto create subnetworks = false } resource "google compute subnetwork" "default" { name = "connectivity-vpc-subnet" ip cidr range = "10.0.0.0/8" region = "us-central1" network = google compute network.default.id } resource "google compute firewall" "default" { name = "allow-incoming-all" network = google compute network.default.name allow { protocol = "all" } source ranges = ["0.0.0.0/0"] } resource "google compute address" "source addr" { name = "src-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.42" region = "us-central1" } resource "google compute address" "dest addr" { name = "dest-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.43" region = "us-central1" } resource "google compute instance" "source" { name = "source-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.42" access config { } } } resource "google compute instance" "destination" { name = "dest-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.43" access config { } } } data "google compute image" "default" { family = "debian-11" project = "debian-cloud" } API This example tests the ability to ping from the source IP address to the destination IP address.
- For more information, see rerun in the Google API Client Library for Python. project id = " PROJECT ID " test id = " TEST ID " request = api.projects().locations().global ().connectivityTests().rerun(name='projects/%s/locations/global/connectivityTests/%s' % (project id, test id)) print(json.dumps(request.execute(), indent=4)) Replace the following values: PROJECT ID : the project ID of the project in which the test was created TEST ID : the ID of the Connectivity Tests object (test) that you are running What's next Configuration analysis states Troubleshoot Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you specify a source IP address that is an external IP address outside of Google Cloud, you must set the networkType parameter to INTERNET . test input = { "source": { "ipAddress": " SOURCE IP ADDRESS ", "networkType": "INTERNET" }, "destination": { "forwardingRule": " DESTINATION FORWARDING RULE ", "port": " DESTINATION PORT ", "projectId": " DESTINATION IP PROJECT ID " }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE IP ADDRESS : the source IP address that you are testing from.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- The Private Service Connect service attachments are displayed. gcloud Use the gcloud compute service-attachments list command . gcloud compute service-attachments list [--regions= REGION LIST ] Replace REGION LIST with a comma-separated list of one or more regions that you want to view service attachments for.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints.

### "About service connection policies \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connection-policies](https://docs.cloud.google.com/vpc/docs/about-service-connection-policies)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection policies with custom service instance scope By default, service connectivity automation creates endpoints for service instances and associated service connection policies that are in the same Google Cloud project (or in the case of Shared VPC, in connected projects).
- When the service connection map is created or updated, typically in response to a request from a consumer service administrator to the managed service's administrative API or UI, service connectivity automation performs a series of authorization checks.
- Endpoint IP versions The possible IP versions of endpoints that connect to service instances (IPv4, IPv6, or both) is determined by the service producer, not by service connectivity automation.
- If the creation or deletion of an endpoint through service connectivity automation is blocked, an automated process periodically retries the operation until the blocking issue is resolved.

