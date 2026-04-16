---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.200Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Customer-managed encryption keys for Integration Connectors"
feature_slug: "customer-managed-encryption-keys-for-integration-connectors"
latest_feature_date: "2025-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/cmek"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "integration"
  - "connectors"
  - "supports"
---

# Customer-managed encryption keys for Integration Connectors

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Integration Connectors supports customer-managed encryption keys.

## Extended Definition

Integration Connectors supports customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Integration Connectors \_|\_ Google\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Integration Connectors.
- Customer-managed encryption keys By default, Integration Connectors encrypts customer content at rest.
- Before you begin Ensure that the following tasks are completed before using CMEK for Integration Connectors: Enable the Cloud KMS API for the project that will store your encryption keys.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### "Sample terraform template for connection creation \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must repurpose this sample based on the connection that you want to create. resource "google integration connectors connection" "testconnection" { name = "test-connection" description = "tf updated description" location = "us-central1" service account = "${data.google project.default.number}-compute@developer.gserviceaccount.com" connector version = "projects/${data.google project.default.project id}/locations/global/providers/zendesk/connectors/zendesk/versions/1" // These show all the different types of config variables, not necessary that each resource will use everything. config variable { key = "proxy enabled" boolean value = false } config variable { key = "sample integer value" integer value = 1 } config variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } config variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } suspended = false auth config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } } destination config { key = "url" destination { host = "https://test.zendesk.com" port = 80 } } lock config { locked = false reason = "Its not locked" } log config { enabled = true } node config { min node count = 2 max node count = 50 } labels = { foo = "bar" } ssl config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } client cert type = "PEM" client certificate { secret version = google secret manager secret version.default.name } client private key { secret version = google secret manager secret version.default.name } client private key pass { secret version = google secret manager secret version.default.name } private server certificate { secret version = google secret manager secret version.default.name } server cert type = "PEM" trust model = "PRIVATE" type = "TLS" use ssl = true } eventing enablement type = "EVENTING AND CONNECTION" eventing config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } registration destination config { key = "registration destination config" destination { host = "https://test.zendesk.com" port = 80 } } auth config { auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } } enrichment enabled = true } depends on = [google secret manager secret iam member.default] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Integration Connectors Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sample terraform template for connection creation The following is a sample terraform template for connection creation.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- For information on the limits applicable to Integration Connectors, see Limits .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- For information on the limits applicable to Integration Connectors, see Limits .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

