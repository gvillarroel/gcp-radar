---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.197Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Read pool node health metrics"
feature_slug: "read-pool-node-health-metrics"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
keywords:
  - "health"
  - "monitoring"
  - "metrics"
  - "provides"
  - "node"
  - "pool"
  - "read"
---

# Read pool node health metrics

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB provides metrics for monitoring individual read pool node health and troubleshooting read pool queries.

## Extended Definition

AlloyDB provides metrics for monitoring individual read pool node health and troubleshooting read pool queries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Partner references Connect Anomalo to AlloyDB for complete data quality monitoring Integrating Anomalo with AlloyDB Partner Advantage page Direct link DataDog Solution DataDog Category Data observability Description Datadog is a monitoring and analytics tool for information technology (IT) and DevOps teams that can be used to determine performance metrics and event monitoring for infrastructure and cloud services.
- Partner references Datadog + AlloyDB integration documentation AlloyDB Metrics and events collected Partner Advantage page Direct link Dynatrace Solution Dynatrace Platform Category Data observability Description Dynatrace provides software intelligence to simplify enterprise cloud complexity and accelerate digital transformation.
- If required, enterprises can fine-tune Anomalo's monitoring using no-code key metrics and validation rules, or by defining any custom SQL check.
- Partner references AlloyDB Configuration in Skyvia Skyvia AlloyDB Connector Partner Advantage page Direct link Data Quality and Observability Anomalo Solution Anomalo Data Quality Category Data Quality Description Anomalo addresses the data quality problem by monitoring enterprise data and automatically detecting and root-causing data issues, allowing teams to resolve any issues with their data before making decisions, running operations, or powering models.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- The number of nodes in a read pool instance determines the instance's overall computing capacity.
- Note: You can have a maximum of 20 nodes across all the read pool instances in a cluster.
- Note that you cannot have more than 20 nodes across all read pool instances in a cluster.

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View and resolve issues for a specific instance You can view a summarized list of health issues on the Overview page for any AlloyDB primary or read pool instance.
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Filter the cluster list by issue The Issues column in the AlloyDB cluster list displays the highest priority issue affecting that cluster or any of its primary and read pool instances.
- Click the name of a primary or read pool instance to open the associated Overview page.

