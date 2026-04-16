---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.205Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner regional instance configuration in northamerica-south1"
feature_slug: "spanner-regional-instance-configuration-in-northamerica-south1"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "northamerica"
  - "south1"
  - "configuration"
  - "creating"
  - "regional"
  - "instance"
  - "added"
---

# Spanner regional instance configuration in northamerica-south1

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for creating regional instance configurations in the Querétaro (northamerica-south1) region.

## Extended Definition

Spanner added support for creating regional instance configurations in the Querétaro (northamerica-south1) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- You can create a free trial instance in any of the Spanner regional instance configurations .

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- Once the batch workload has completed and utilization returns to normal levels, depending on your configuration, either linear or stepwise scaling is applied to scale the instance down automatically.
- Advanced configuration The Autoscaler tool has advanced configuration options that let you more finely control when and how your Spanner instances are managed.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample internal update graph operation(): Create a client client = spanner admin database v1.

