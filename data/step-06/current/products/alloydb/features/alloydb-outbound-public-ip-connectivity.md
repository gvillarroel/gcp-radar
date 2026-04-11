---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.598Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB outbound public IP connectivity"
feature_slug: "alloydb-outbound-public-ip-connectivity"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "public egress connectivity"
  - "outbound network access"
  - "public egress"
  - "egress access"
  - "public IP connectivity"
  - "outbound public IP"
  - "alloydb secondary instance"
  - "alloydb primary instance"
---

# AlloyDB outbound public IP connectivity

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB outbound public IP connectivity is generally available on primary and secondary instances.

## Extended Definition

AlloyDB outbound public IP connectivity is a feature of AlloyDB for PostgreSQL that provides outbound public network egress using public IP on AlloyDB instances. The feature is generally available for both primary and secondary instances.

## Evidence Summary

The AlloyDB release notes explicitly state that outbound public IP connectivity on primary and secondary instances reached GA on September 30, 2024; the Kubernetes quickstart page documents instance setup/connection steps but does not add additional evidence about outbound public IP behavior.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- To deploy the AlloyDB primary instance, run the following: gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --cpu-count = NUM CPU \ --region = REGION \ --cluster = CLUSTER ID \ --project = PROJECT ID Replace the following: INSTANCE ID with the name of the AlloyDB instance of your choice, such as alloydb-primary .
- Get the instance connection INSTANCE URI for the AlloyDB primary instance you want AlloyDB proxy to connect to: gcloud alloydb instances describe INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION \ --format = "value(name)" Replace the following: INSTANCE ID : name for the instance, such as alloydb-primary .
- Adjust this value based on your application's requirements. cpu : "1" Replace INSTANCE URI with the path to your AlloyDB primary instance from step 1, such as projects/ PROJECT ID /locations/ REGION /clusters/ CLUSTER ID /instances/ INSTANCE ID .
- Get the instance connection INSTANCE URI for the AlloyDB primary instance: In the Google Cloud console, go to the Clusters page.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- September 30, 2024 Feature AlloyDB outbound public IP connectivity on primary and secondary instances is generally available ( GA ).

