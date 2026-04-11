---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.290Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private Service Connect outbound connectivity"
feature_slug: "private-service-connect-outbound-connectivity"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "outbound"
  - "connectivity"
  - "lets"
  - "psc"
  - "enabled"
  - "sql"
---

# Private Service Connect outbound connectivity

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Private Service Connect outbound connectivity lets PSC-enabled Cloud SQL instances make outbound connections to a user's network.

## Extended Definition

Private Service Connect outbound connectivity lets PSC-enabled Cloud SQL instances make outbound connections to a user's network.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To enable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --psc-network-attachment-uri= NETWORK ATTACHMENT URI \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To disable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --clear-psc-network-attachment-uri \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- Configure outbound connectivity for your Cloud SQL instance You can configure your Private Service Connect-enabled Cloud SQL instance to have outbound connectivity with your network using a Private Service Connect interface and a network attachment .
- You can confirm that Private Service Connect outbound connectivity was enabled successfully by running gcloud sql instances describe .

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.
- You can't convert the replica of an instance that has Private Service Connect outbound connectivity-enabled to a DR replica .
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.
- You can't convert the replica of an instance that has Private Service Connect outbound connectivity-enabled to a DR replica .
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.

