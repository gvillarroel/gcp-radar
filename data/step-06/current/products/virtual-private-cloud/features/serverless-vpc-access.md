---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.495Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Serverless VPC Access"
feature_slug: "serverless-vpc-access"
latest_feature_date: "2019-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "is"
  - "now"
  - "generally"
  - "available"
  - "as"
---

# Serverless VPC Access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access is now generally available as a feature that enables serverless workloads to connect to Virtual Private Cloud networks; Serverless VPC Access enables serverless services to connect to Virtual Private Cloud networks.

## Extended Definition

Serverless VPC Access is now generally available as a feature that enables serverless workloads to connect to Virtual Private Cloud networks; Serverless VPC Access enables serverless services to connect to Virtual Private Cloud networks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)

## Supporting Pages

### "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.connectors Methods create POST /v1beta1/{parent=projects/ /locations/ }/connectors Creates a Serverless VPC Access connector, returns an operation. delete DELETE /v1beta1/{name=projects/ /locations/ /connectors/ } Deletes a Serverless VPC Access connector. get GET /v1beta1/{name=projects/ /locations/ /connectors/ } Gets a Serverless VPC Access connector. list GET /v1beta1/{parent=projects/ /locations/ }/connectors Lists Serverless VPC Access connectors. patch PATCH /v1beta1/{connector.name=projects/ /locations/ /connectors/ } Updates a Serverless VPC Access connector, returns an operation.
- REST Resource: v1.projects.locations.connectors Methods create POST /v1/{parent=projects/ /locations/ }/connectors Creates a Serverless VPC Access connector, returns an operation. delete DELETE /v1/{name=projects/ /locations/ /connectors/ } Deletes a Serverless VPC Access connector. get GET /v1/{name=projects/ /locations/ /connectors/ } Gets a Serverless VPC Access connector. list GET /v1/{parent=projects/ /locations/ }/connectors Lists Serverless VPC Access connectors. patch PATCH /v1/{connector.name=projects/ /locations/ /connectors/ } Updates a Serverless VPC Access connector, returns an operation.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://vpcaccess.googleapis.com REST Resource: v1beta1.projects.locations Methods list GET /v1beta1/{name=projects/ }/locations Lists information about the supported locations for this service.
- This service provides the following discovery documents: https://vpcaccess.googleapis.com/$discovery/rest?version=v1 https://vpcaccess.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this issue, remove any associations to the Serverless VPC Access connector from the serverless resources: If any Cloud Run services or functions used the connector, then for each service or function, follow the steps to Disconnect a Cloud Run service from a VPC network .
- Troubleshooting Can't delete a VPC network that was used with Serverless VPC Access You might receive an error when attempting to delete a VPC network for which Serverless VPC Access was configured even if you have deleted the associated Serverless VPC Access connector.
- If you want to set the access type to Internal , but the Internal option is not available, check that an internal IPv6 range is assigned for the network.
- If you want to set the access type to Internal , but the Internal option is not available, check that an internal IPv6 range is assigned on the network.

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Serverless VPC Access connector is not configured The packet was dropped because the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision does not have a Serverless VPC Access connector configured.
- Serverless VPC Access connector is not running The packet was dropped because the Serverless VPC Access connector is not running.
- Recommendations If you try to access the destination endpoint by using its private IP address, make sure that you have configured a Serverless VPC Access connector for the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision.
- The packet leaves the source, but there is no Serverless VPC Access connector configured for the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision.

### "Configuration analysis states \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC CONNECTOR NOT SET A packet was dropped because the App Engine standard environment service, the Cloud Run function, or the Cloud Run revision doesn't have a Serverless VPC Access connector configured.
- VPC CONNECTOR NOT RUNNING A packet was dropped because the Serverless VPC Access connector is not running.
- VpcConnectorInfo Metadata associated with a Serverless VPC Access connector.
- Message Target INSTANCE A Compute Engine VM instance INTERNET The internet GOOGLE API A Google API GKE MASTER A GKE control plane CLOUD SQL INSTANCE A Cloud SQL instance PSC GOOGLE API All Google APIs and services that use Private Service Connect PSC VPC SC VPC Service Controls that use Private Service Connect PSC PUBLISHED SERVICE A published service that uses Private Service Connect Metadata The configuration analysis shows the following metadata for the final state.

