---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.506Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "private"
  - "connect"
  - "lets"
  - "clients"
  - "alloydb"
  - "instance"
  - "multiple"
  - "vpc"
---

# Private Service Connect

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect lets clients connect to an AlloyDB instance from multiple VPC networks across groups, projects, or organizations.

## Extended Definition

Private Service Connect lets clients connect to an AlloyDB instance from multiple VPC networks across groups, projects, or organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to an AlloyDB for PostgreSQL instance from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- Allowed Private Service Connect projects When you create an AlloyDB instance, you can define which projects from your VPC network can access the AlloyDB instance within the AlloyDB cluster.
- Service connection policy A service connection policy lets you authorize AlloyDB to create a Private Service Connect connection between AlloyDB and consumer VPC networks.
- Service attachment When you create any AlloyDB instance within a Private Service Connect-enabled cluster, AlloyDB creates a service attachment unique to that instance.

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Through this connection, the AlloyDB clusters and instances in your project can connect to their internal resources using private IP addresses, just as if they were located within your own project's VPC.
- This page describes how AlloyDB for PostgreSQL uses private services access to establish network connectivity between your AlloyDB instances and the various internal resources that they require to work.
- Connectivity between clusters and internal resources Private services access lets the AlloyDB clusters communicate with the internal resources that enable them.
- Your applications connect to AlloyDB instances through their private IP addresses to query and modify your data.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- To create a read pool instance for a Private Service Connect-enabled cluster, add the --allowed-psc-projects flag to set a comma separated list of project IDs or project numbers: The comma-separated list of project IDs or project numbers that you want to allow access to the instance—for example, my-project-1 , 12345 , my-project-n .
- You must set a list of allowed projects or numbers, if your cluster uses Private Service Connect as the method of connecting to the instance.
- Note: For PSC-enabled instances, additional settings are required, see Connect to an instance using Private Service Connect for details.

