---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.439Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud VPN connectivity"
feature_slug: "cloud-vpn-connectivity"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
keywords:
  - "vpn"
  - "connectivity"
  - "sql"
  - "supports"
  - "through"
---

# Cloud VPN connectivity

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports connectivity through Cloud VPN.

## Extended Definition

Cloud SQL supports connectivity through Cloud VPN.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- February 08, 2024 Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- June 10, 2022 Feature Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds.
- August 13, 2025 Feature Cloud SQL now supports Private Service Connect (PSC) outbound connectivity.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- February 08, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- June 10, 2022 Cloud SQL for MySQL Feature Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- After you create the instance and Cloud SQL creates the endpoint, the clients in the corresponding VPC networks can connect to the instance from the endpoint, either through an IP address or a DNS record .
- After you create the instance and Cloud SQL creates the endpoint, the clients in the corresponding VPC networks can connect to the instance from the endpoint, either through an IP address or a DNS record.
- However, by propagating Private Service Connect endpoints through the Network Connectivity Center hub , these endpoints can be reachable by any other spoke VPC network in the same hub.

