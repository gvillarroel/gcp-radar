---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.227Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "DNS peering for TLS termination"
feature_slug: "dns-peering-for-tls-termination"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone"
keywords:
  - "dns"
  - "peering"
  - "for"
  - "tls"
  - "termination"
  - "enables"
  - "ssl"
  - "hostname"
---

# DNS peering for TLS termination

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

DNS peering for TLS termination enables SSL hostname validation at the backend and lets connectors connect to private backend services using a hostname.

## Extended Definition

DNS peering for TLS termination enables SSL hostname validation at the backend and lets connectors connect to private backend services using a hostname.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private](https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone)

## Supporting Pages

### "Private network connectivity \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private](https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this DNS zone, you must add a hostname that you want to use for connector configuration and map the hostname to the endpoint attachment IP address that you got from step 1.
- The Integration Connectors managed zone (peering zone) communicates with the Cloud DNS private managed zone (created in step 2) for name resolution.
- Target DNS name : Full Cloud DNS name for which you are creating the managed (peering) zone.
- DNS NAME : Full Cloud DNS name for which you are creating the managed (peering) zone.

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- SSLServerCert : SSLServerCert for Couchbase Connector Auth scheme : Auth scheme for Couchbase Connector Connection Mode : Determines how to connect to the Couchbase server.
- DNS Server : Determines what DNS server to use when retrieving Couchbase Cloud information.
- For more information, see Secure connections with TLS .

### "Sample terraform template for connection creation \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- You must repurpose this sample based on the connection that you want to create. resource "google integration connectors connection" "testconnection" { name = "test-connection" description = "tf updated description" location = "us-central1" service account = "${data.google project.default.number}-compute@developer.gserviceaccount.com" connector version = "projects/${data.google project.default.project id}/locations/global/providers/zendesk/connectors/zendesk/versions/1" // These show all the different types of config variables, not necessary that each resource will use everything. config variable { key = "proxy enabled" boolean value = false } config variable { key = "sample integer value" integer value = 1 } config variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } config variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } suspended = false auth config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } } destination config { key = "url" destination { host = "https://test.zendesk.com" port = 80 } } lock config { locked = false reason = "Its not locked" } log config { enabled = true } node config { min node count = 2 max node count = 50 } labels = { foo = "bar" } ssl config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } client cert type = "PEM" client certificate { secret version = google secret manager secret version.default.name } client private key { secret version = google secret manager secret version.default.name } client private key pass { secret version = google secret manager secret version.default.name } private server certificate { secret version = google secret manager secret version.default.name } server cert type = "PEM" trust model = "PRIVATE" type = "TLS" use ssl = true } eventing enablement type = "EVENTING AND CONNECTION" eventing config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } registration destination config { key = "registration destination config" destination { host = "https://test.zendesk.com" port = 80 } } auth config { auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } } enrichment enabled = true } depends on = [google secret manager secret iam member.default] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sample terraform template for connection creation The following is a sample terraform template for connection creation.
- It just shows how a connection creation terraform template looks like.

### "Sample terraform template for managed zone creation \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-managed-zone)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- You must repurpose this sample based on your requirements. resource "google integration connectors managed zone" "test managed zone" { name = "test-managed-zone" description = "tf created resource" labels = { intent = "example" } target project = data.google project.target project.project id target vpc = "test" dns = google dns managed zone.default.dns name depends on = [google project iam member.default] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sample terraform template for managed zone creation The following is a sample terraform template for managed zone creation.
- It just shows how a managed zone creation terraform template looks like.

