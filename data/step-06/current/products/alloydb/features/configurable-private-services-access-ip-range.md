---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.638Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Configurable private services access IP range"
feature_slug: "configurable-private-services-access-ip-range"
latest_feature_date: "2023-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/connect-psql"
keywords:
  - "custom private services network range"
  - "private services access IP range"
  - "cluster private networking range"
  - "private services access range"
  - "configurable PSA range"
  - "private services access"
  - "PSA IP range"
---

# Configurable private services access IP range

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB cluster creation now allows optionally specifying a private services access IP range.

## Extended Definition

AlloyDB requires a VPC network with Private Services Access configured in the same Google Cloud project to enable private connectivity between cluster instances and required internal resources. The Private Services Access setup includes choosing and managing an IP address range, and the docs emphasize that the range must be large enough for AlloyDB and any other Google Cloud services using the same address pool, with expansion possible if needed. Based on the provided excerpts, the feature can be described as configurable PSA network range capacity used for AlloyDB private networking.

## Evidence Summary

The cited pages document AlloyDB private-services-access connectivity requirements and describe that a VPC’s private-services-access IP range must be planned (and can be increased) to support AlloyDB and related services.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/connect-psql](https://docs.cloud.google.com/alloydb/docs/connect-psql)

## Supporting Pages

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- A VPC network in the same project as your cluster How you configure AlloyDB connectivity using a VPC network that resides in the same Google Cloud project as your AlloyDB cluster depends on whether a private services access configuration already exists in the VPC network.
- IP address range size considerations It's important to choose a private services access address range that is wide enough to accommodate the needs of AlloyDB, as well as any other Google Cloud services that require IP addresses from the same address pool.
- If the VPC network already has an existing private services access configuration, then make sure the configuration has sufficient IP address space for AlloyDB and increase the address space if necessary.
- This page describes how AlloyDB for PostgreSQL uses private services access to establish network connectivity between your AlloyDB instances and the various internal resources that they require to work.

### "Connect from Compute Engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-psql](https://docs.cloud.google.com/alloydb/docs/connect-psql)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The procedure to connect psql to an AlloyDB instance involves these tasks: Create a Compute Engine VM that can connect to AlloyDB instances using private services access.
- If Network interfaces is not set to the VPC network configured for private services access, expand it and then set Network to the VPC network.
- A VPC network in the Google Cloud project that you are using must already be configured for private services access to AlloyDB.
- Click the Networking section, and set Network interfaces to the VPC network configured for private services access to AlloyDB.

