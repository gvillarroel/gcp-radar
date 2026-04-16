---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.308Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner instance storage capacity scaling"
feature_slug: "cloud-spanner-instance-storage-capacity-scaling"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/autoscaling-overview"
keywords:
  - "scaling"
  - "capacity"
  - "storage"
  - "instances"
  - "node"
  - "instance"
---

# Cloud Spanner instance storage capacity scaling

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner instances of one node or more now receive 4 TB of storage per node, while smaller instances receive 409.6 GB of storage for each 100 processing units.

## Extended Definition

Cloud Spanner instances of one node or more now receive 4 TB of storage per node, while smaller instances receive 409.6 GB of storage for each 100 processing units.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.
- This difference illustrates that Spanner allocates server resources differently for different-sized instances: For instances of 1000 PUs (1 node) and smaller, Spanner allocates server resources in a single server task per zone.
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- By default, the scale-up and scale-down cooldown periods are set to the following minimum values: Scale-up value: 5 minutes Scale-down value: 30 minutes For more information about scaling recommendations and cooldown periods, see Scaling Spanner Instances .

### Autoscaling overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance: Autoscaling lets Spanner automatically add compute capacity to an instance when a workload changes or there is an increase in data storage requirements.
- Scaling Spanner When you create a Spanner instance , you choose the number of compute capacity nodes or processing units to use when serving your data.
- Scaling an instance is the process of adding or removing compute capacity in response to changes in the instance's workload or data storage needs.
- This helps maintain workload performance objectives by ensuring that the instance has enough compute capacity to meet the target CPU utilization and storage requirements.

