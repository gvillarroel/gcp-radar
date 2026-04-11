---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.814Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private Service Connect outbound connectivity"
feature_slug: "private-service-connect-outbound-connectivity"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "private"
  - "connect"
  - "outbound"
  - "connectivity"
  - "this"
  - "lets"
  - "psc"
  - "enabled"
---

# Private Service Connect outbound connectivity

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets PSC-enabled Cloud SQL instances make outbound connections to your network through an attached PSC interface.

## Extended Definition

This feature lets PSC-enabled Cloud SQL instances make outbound connections to your network through an attached PSC interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To enable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --psc-network-attachment-uri= NETWORK ATTACHMENT URI \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To disable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --clear-psc-network-attachment-uri \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- If you see psc-network-attachment-uri in the output, then Private Service Connect outbound connectivity was enabled successfully.
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- You can't convert the replica of an instance that has Private Service Connect outbound connectivity-enabled to a DR replica .
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.
- Private Service Connect outbound connectivity can't be enabled on a read replica instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- With PSC outbound connectivity, you can attach a PSC interface to your existing Cloud SQL PSC-enabled instances to allow your instances to make outbound connections to your network.
- September 04, 2025 Change The release note on August 13, 2025 regarding Private Service Connect (PSC) outbound connectivity has been updated.
- PSC outbound connectivity is required for homogeneous migrations to PSC-enabled Cloud SQL instances using Database Migration Service .
- August 13, 2025 Feature Cloud SQL now supports Private Service Connect (PSC) outbound connectivity.

