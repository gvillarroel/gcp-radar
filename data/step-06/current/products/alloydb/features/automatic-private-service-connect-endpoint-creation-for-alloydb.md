---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.580Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic Private Service Connect endpoint creation for AlloyDB"
feature_slug: "automatic-private-service-connect-endpoint-creation-for-alloydb"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
keywords:
  - "authorized projects for PSC"
  - "auto-create PSC endpoint"
  - "endpoint creation automation"
  - "automatic Private Service Connect endpoint"
  - "PSC auto-creation"
  - "automatic PSC"
  - "AlloyDB Private Service Connect"
  - "service connection policy"
---

# Automatic Private Service Connect endpoint creation for AlloyDB

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can automatically create Private Service Connect endpoints for authorized projects based on configured service connection policies.

## Extended Definition

In AlloyDB, a service connection policy is used to authorize AlloyDB to create a Private Service Connect (PSC) connection to consumer VPC networks. This indicates that, once authorized via policy configuration, AlloyDB can provision the PSC connection path (i.e., endpoint setup) automatically, with the policy defining details such as the consumer VPC network and subnet.

## Evidence Summary

The cited AlloyDB PSC overview page explains that service connection policies authorize AlloyDB to create PSC connections to consumer VPC networks and allows subnet/network configuration, which supports the feature’s policy-driven PSC provisioning behavior.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The page details service connection policies that authorize PSC and automatically provision PSC endpoints with subnet and connection-limit controls.

Evidence snippets:
- Service connection policy A service connection policy lets you authorize AlloyDB to create a Private Service Connect connection between AlloyDB and consumer VPC networks.
- For example, you can create a service connection policy in one or more of your (consumer) VPC networks and also specify a subnet.
- For more information about service connection policy, see About service connection policies .

