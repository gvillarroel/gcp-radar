---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.327Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "nam8 North America multi-region instance configuration"
feature_slug: "nam8-north-america-multi-region-instance-configuration"
latest_feature_date: "2020-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
keywords:
  - "nam8"
  - "configuration"
  - "america"
  - "north"
  - "instance"
  - "multi"
  - "region"
---

# nam8 North America multi-region instance configuration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner introduced a multi-region instance configuration in North America, identified as nam8 (Los Angeles, Oregon, and Salt Lake City).

## Extended Definition

Cloud Spanner introduced a multi-region instance configuration in North America, identified as nam8 (Los Angeles, Oregon, and Salt Lake City).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- For information about data replicas in instance configurations, see Regional, dual-region, and multi-region configurations .
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- You can create a free trial instance in any of the Spanner regional instance configurations .

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Optimize costs for your disaster recovery strategy You can optimize Spanner disaster recovery costs in the following ways: Multi-region configurations : Use multi-region configurations only for applications that require 99.999% availability.
- Regional failure : If your application requires even higher data availability and protection against regional failures, use multi-region configurations that offer 99.999% availability.
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.

