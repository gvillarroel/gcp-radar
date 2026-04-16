---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.224Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Dual-region instance configurations"
feature_slug: "dual-region-instance-configurations"
latest_feature_date: "2024-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "germany"
  - "australia"
  - "dual"
  - "configurations"
  - "instance"
  - "region"
  - "added"
---

# Dual-region instance configurations

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added dual-region instance configurations for Australia, Germany, India, and Japan to support regional replication and data residency requirements.

## Extended Definition

Cloud Spanner added dual-region instance configurations for Australia, Germany, India, and Japan to support regional replication and data residency requirements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "timeSeries": [ { "metric": { "type": "spanner.googleapis.com/instance/dual region quorum availability" }, "resource": { "type": "spanner instance", "labels": { "project id": "spanner-project", "location": "australia-southeast1" } }, "metricKind": "GAUGE", "valueType": "DOUBLE", "points": [ { "interval": { "startTime": "2024-07-11T05:41:23Z", "endTime": "2024-07-11T05:41:23Z" }, "value": { "doubleValue": 1 } } ] } ], "unit": "10^2.%" } If you don't see a similar response, your region might not be healthy, and you might need to change the dual-region quorum from dual-region to single region . gcloud CLI Download the dual-region-quorum-health-check-script.sh file.
- The quorumInfo field provides information about the operation. gcloud spanner databases describe DATABASE ID --instance= INSTANCE ID What's next Learn more about Dual-region instance configurations .
- For more information about dual-regions, see Spanner Dual-region instance configurations .
- HTTP method and URL: GET https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries Request JSON body: { "name": " PROJECT ID ", "aggregation.alignmentPeriod": "60s", "aggregation.crossSeriesReducer": "REDUCE FRACTION TRUE", "aggregation.groupByFields": "resource.labels.location", "aggregation.perSeriesAligner": "ALIGN NEXT OLDER", "filter": "metric.labels.quorum availability = "Healthy" AND metric.type = "spanner.googleapis.com/instance/dual region quorum availability" AND resource.labels.location = " DUAL REGION LOCATION "", "interval.startTime": " START TIME ", "interval.endTime": " END TIME " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The preprocessing done by the Poller also simplifies the process of evaluating thresholds for regional, dual-region, and multi-regional Spanner instances.
- Multi-regional, dual-region, and regional instances all have different utilization thresholds that are used when scaling.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- For example, multi-regional and dual-region deployments are scaled at 45% high-priority CPU utilization, whereas regional deployments are scaled at 65% high-priority CPU utilization, both plus or minus an allowed margin .

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- You can create a free trial instance in any of the Spanner regional instance configurations .
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.

