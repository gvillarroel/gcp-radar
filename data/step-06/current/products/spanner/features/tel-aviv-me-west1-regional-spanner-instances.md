---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.298Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Tel Aviv (me-west1) regional Spanner instances"
feature_slug: "tel-aviv-me-west1-regional-spanner-instances"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "aviv"
  - "west1"
  - "instances"
  - "regional"
---

# Tel Aviv (me-west1) regional Spanner instances

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner regional instances can be created in the Tel Aviv region (me-west1).

## Extended Definition

Cloud Spanner regional instances can be created in the Tel Aviv region (me-west1).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- The preprocessing done by the Poller also simplifies the process of evaluating thresholds for regional, dual-region, and multi-regional Spanner instances.
- Multi-regional, dual-region, and regional instances all have different utilization thresholds that are used when scaling.
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- By default, the scale-up and scale-down cooldown periods are set to the following minimum values: Scale-up value: 5 minutes Scale-down value: 30 minutes For more information about scaling recommendations and cooldown periods, see Scaling Spanner Instances .

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.
- For more information, see Free trial instances overview . gcloud To create a free trial instance, use the gcloud spanner instances create command. gcloud spanner instances create INSTANCE ID \ -- instance - type = free - instance -- config = INSTANCE CONFIG \ -- description = INSTANCE DESCRIPTION Replace the following: INSTANCE ID : a permanent identifier that is unique within your Google Cloud project.
- Click Delete . gcloud To delete your free trial instance, use the following gcloud spanner instances delete command: gcloud spanner instances delete INSTANCE ID What's next Learn more about Spanner free trial instances .

