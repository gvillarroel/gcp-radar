---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.226Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "MongoDB Version 2 connector"
feature_slug: "mongodb-version-2-connector"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView"
  - "https://docs.cloud.google.com/integration-connectors/docs/cmek"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
keywords:
  - "mongodb"
  - "version"
  - "connector"
  - "the"
  - "supports"
  - "queryable"
  - "encryption"
---

# MongoDB Version 2 connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The MongoDB Version 2 connector supports queryable encryption.

## Extended Definition

The MongoDB Version 2 connector supports queryable encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
- [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)

## Supporting Pages

### ConnectorVersionView \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Reference Send feedback ConnectorVersionView Stay organized with collections Save and categorize content based on your preferences.
- Enums CONNECTOR VERSION VIEW UNSPECIFIED CONNECTOR VERSION VIEW UNSPECIFIED.
- CONNECTOR VERSION VIEW BASIC Do not include role grant configs.
- CONNECTOR VERSION VIEW FULL Include role grant configs.

### "Customer-managed encryption keys \_|\_ Integration Connectors \_|\_ Google\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Ensure that the following tasks are completed before using CMEK for Integration Connectors: Enable the Cloud KMS API for the project that will store your encryption keys.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Integration Connectors.
- To enable CMEK encryption for an existing Integration Connectors region, do the following steps: In the Google Cloud console, go to the Integration Connectors > Connections page.
- To enable CMEK encryption for a new Integration Connectors region, do the following steps: In the Google Cloud console, go to the Integration Connectors > Regions page.

### "Sample terraform template for connection creation \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must repurpose this sample based on the connection that you want to create. resource "google integration connectors connection" "testconnection" { name = "test-connection" description = "tf updated description" location = "us-central1" service account = "${data.google project.default.number}-compute@developer.gserviceaccount.com" connector version = "projects/${data.google project.default.project id}/locations/global/providers/zendesk/connectors/zendesk/versions/1" // These show all the different types of config variables, not necessary that each resource will use everything. config variable { key = "proxy enabled" boolean value = false } config variable { key = "sample integer value" integer value = 1 } config variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } config variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } suspended = false auth config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } } destination config { key = "url" destination { host = "https://test.zendesk.com" port = 80 } } lock config { locked = false reason = "Its not locked" } log config { enabled = true } node config { min node count = 2 max node count = 50 } labels = { foo = "bar" } ssl config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } client cert type = "PEM" client certificate { secret version = google secret manager secret version.default.name } client private key { secret version = google secret manager secret version.default.name } client private key pass { secret version = google secret manager secret version.default.name } private server certificate { secret version = google secret manager secret version.default.name } server cert type = "PEM" trust model = "PRIVATE" type = "TLS" use ssl = true } eventing enablement type = "EVENTING AND CONNECTION" eventing config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } registration destination config { key = "registration destination config" destination { host = "https://test.zendesk.com" port = 80 } } auth config { auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } } enrichment enabled = true } depends on = [google secret manager secret iam member.default] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Application development Integration Connectors Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Sample terraform template for connection creation The following is a sample terraform template for connection creation.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Connector version : Select the Connector version from the drop down list of available versions.
- Supported versions The minimum supported version for this connector is IBM Db2 version 8.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "$1" : 1.0 , "$2" : 5.0 } If the action execution is successful, the connector task's connectorOutputPayload field will have a value similar to the following: [{ "bignum" : 5.0 }] Entity operation examples Example - List records of an entity This example lists the records of the Users entity.

