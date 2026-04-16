---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.223Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Integration Connectors VPC Service Controls"
feature_slug: "integration-connectors-vpc-service-controls"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private"
keywords:
  - "integration"
  - "connectors"
  - "vpc"
  - "controls"
  - "supports"
  - "for"
  - "enhanced"
  - "security"
---

# Integration Connectors VPC Service Controls

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Integration Connectors supports VPC Service Controls for enhanced security.

## Extended Definition

Integration Connectors supports VPC Service Controls for enhanced security.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private](https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private)

## Supporting Pages

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- For information on the limits applicable to Integration Connectors, see Limits .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- For information on the limits applicable to Integration Connectors, see Limits .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- For information on the limits applicable to Integration Connectors, see Limits .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

### "Private network connectivity \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private](https://docs.cloud.google.com/integration-connectors/docs/network-connectivity-private)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: curl -X GET -H "Authorization: Bearer $TOKEN " \ https://connectors.googleapis.com/v1/projects/ PROJECT ID /locations/global/managedZones/ MANAGED ZONE NAME The API returns a response similar to the following: { "name": "projects/demo-project/locations/global/managedZones/demo-mz", "createTime": "2023-04-17T04:34:59.569527046Z", "updateTime": "2023-04-17T04:37:25.189074195Z", "description": "demo managed zone", "dns": "api.private.service.com.", "targetVpc": "target-project-vpc", "targetProject": "target-project" } If the managed zone creation is successful, the newly created managed zone is listed in the Managed zones page similar to the following image: Allowlist the Integration Connectors project in a service attachment You can create the PSC service attachment such that it accepts requests only from the specified Google Cloud projects.
- Private network connectivity This page describes how you can configure Integration Connectors to privately connect to your backend applications, and assumes that you are familiar with the following concepts: Google Cloud Virtual Private Cloud (VPC) Private Service Connect Cloud DNS Integration Connectors Integration Connectors supports connectivity to your backends that are hosted on a private network.
- For example: curl -X POST -H "Authorization: Bearer $TOKEN " \ -H "Content-Type: application/json" \ -d '{ "description": " DESCRIPTION ", "dns": " DNS NAME ", "target project": " TARGET PROJECT ", "target vpc": " TARGET VPC " }' \ https://connectors.googleapis.com/v1/projects/ PROJECT ID /locations/global/managedZones?managedZoneId= MANAGED ZONE NAME Where: DESCRIPTION is an optional description for the managed zone.
- For information on the various IAM roles and their corresponding permissions available for Integration Connectors, see IAM roles and permissions for Integration Connectors Console To create an endpoint attachment from the Cloud console, do the following: Open the Endpoint attachments page for Integration Connectors.

