---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.161Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner regional instance configuration in asia-southeast3"
feature_slug: "spanner-regional-instance-configuration-in-asia-southeast3"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
keywords:
  - "southeast3"
  - "configuration"
  - "asia"
  - "regional"
  - "instance"
  - "supports"
---

# Spanner regional instance configuration in asia-southeast3

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports creating regional instance configurations in the Bangkok, Thailand location (asia-southeast3).

## Extended Definition

Spanner now supports creating regional instance configurations in the Bangkok, Thailand location (asia-southeast3).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)

## Supporting Pages

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- You can create a free trial instance in any of the Spanner regional instance configurations .

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Regional failure : If your application requires even higher data availability and protection against regional failures, use multi-region configurations that offer 99.999% availability.
- The instance that you are restoring to should have the same instance configuration as the instance where the backup is stored.

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- SERVING LOCATION : The regional instance configuration to which you want to failover.
- Change the dual-region quorum from dual-region to single region (failover) To failover manually if there is a regional outage or a network partitioning issue: Google Cloud console Go to the Spanner Instances page in the Google Cloud console.
- The quorumInfo field provides information about the operation. gcloud spanner databases describe DATABASE ID --instance= INSTANCE ID What's next Learn more about Dual-region instance configurations .
- Use the System insights dashboard After you create a dual-region configuration, you can view the Dual-region quorum health timeline metric on the Instance-level System insights dashboard.

