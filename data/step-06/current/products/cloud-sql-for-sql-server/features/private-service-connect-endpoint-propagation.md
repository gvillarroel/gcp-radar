---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.611Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Private Service Connect endpoint propagation"
feature_slug: "private-service-connect-endpoint-propagation"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "private"
  - "connect"
  - "endpoint"
  - "propagation"
  - "uses"
  - "network"
  - "connectivity"
  - "center"
---

# Private Service Connect endpoint propagation

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across VPC networks; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Extended Definition

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across VPC networks; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, by propagating Private Service Connect endpoints through the Network Connectivity Center hub , these endpoints can be reachable by any other spoke VPC network in the same hub.
- The connection propagation feature in NCC benefits the following use case for Private Service Connect deployments: You can use a common services VPC network to create multiple Private Service Connect endpoints.
- To learn how to use the NCC hub to propagate Private Service Connect endpoints to spoke VPC networks, see the NCC—Private Service Connect propagation codelab .
- Private Service Connect endpoint propagation By default, Private Service Connect connections aren't transitive from peered VPC networks.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- December 03, 2024 Cloud SQL for MySQL Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- Cloud SQL for PostgreSQL Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- Cloud SQL for SQL Server Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- You can use the Network Connectivity Center hub to propagate the Private Service Connect endpoints of your Cloud SQL instances in a VPC network.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- You can use the Network Connectivity Center hub to propagate the Private Service Connect endpoints of your Cloud SQL instances in a VPC network.
- April 24, 2025 Feature Private Service Connect endpoint propagation is now generally available (GA).
- With PSC outbound connectivity, you can attach a PSC interface to your existing Cloud SQL PSC-enabled instances to allow your instances to make outbound connections to your network.

