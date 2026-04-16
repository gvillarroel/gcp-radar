---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.209Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner health issue monitoring in Database Center"
feature_slug: "spanner-health-issue-monitoring-in-database-center"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "monitor"
  - "health"
  - "issue"
  - "center"
  - "monitoring"
  - "database"
---

# Spanner health issue monitoring in Database Center

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Database Center can monitor Spanner health issues such as short backup retention, stale last backup, and non-replicating resources across regions.

## Extended Definition

Database Center can monitor Spanner health issues such as short backup retention, stale last backup, and non-replicating resources across regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "timeSeries": [ { "metric": { "type": "spanner.googleapis.com/instance/dual region quorum availability" }, "resource": { "type": "spanner instance", "labels": { "project id": "spanner-project", "location": "australia-southeast1" } }, "metricKind": "GAUGE", "valueType": "DOUBLE", "points": [ { "interval": { "startTime": "2024-07-11T05:41:23Z", "endTime": "2024-07-11T05:41:23Z" }, "value": { "doubleValue": 1 } } ] } ], "unit": "10^2.%" } If you don't see a similar response, your region might not be healthy, and you might need to change the dual-region quorum from dual-region to single region . gcloud CLI Download the dual-region-quorum-health-check-script.sh file.
- HTTP method and URL: GET https://monitoring.googleapis.com/v3/projects/ PROJECT ID /timeSeries Request JSON body: { "name": " PROJECT ID ", "aggregation.alignmentPeriod": "60s", "aggregation.crossSeriesReducer": "REDUCE FRACTION TRUE", "aggregation.groupByFields": "resource.labels.location", "aggregation.perSeriesAligner": "ALIGN NEXT OLDER", "filter": "metric.labels.quorum availability = "Healthy" AND metric.type = "spanner.googleapis.com/instance/dual region quorum availability" AND resource.labels.location = " DUAL REGION LOCATION "", "interval.startTime": " START TIME ", "interval.endTime": " END TIME " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The quorumInfo field provides information about the operation. gcloud spanner databases describe DATABASE ID --instance= INSTANCE ID Change the dual-region quorum from single region to dual-region (failback) To failback manually after the disrupted region is healthy or after the network partition issue is resolved: Google Cloud console Go to the Spanner Instances page in the Google Cloud console.
- Check dual-region quorum status You can check the status of your dual-region quorum in the following ways: On the Database overview page Use the System insights dashboard Use a Cloud Monitoring REST API or Google Cloud CLI On the Database overview page Go to the Spanner Instances page in the Google Cloud console.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Monitor and understand performance Any production database requires comprehensive monitoring and performance metrics.
- In Monitoring, you can see details on your Spanner usage, including data storage and CPU usage.
- Spanner comes with built-in metrics in Cloud Monitoring .
- Similar to other relational databases, an inventory table in Spanner has a primary key that is a globally unique identifier for the item, as illustrated in the following table. itemID type playerID 7c14887e-8d45 1 6f1ede3b-25e2 8ca83609-bb93 40 6f1ede3b-25e2 33fedada-3400 1 5fa0aa7d-16da e4714487-075e 23 5fa0aa7d-16da d4fbfb92-a8bd 14 5fa0aa7d-16da 31b7067b-42ec 3 26a38c2c-123a In the example inventory table, itemID and playerID are truncated for readability.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Custom change stream metrics These metrics are exposed in Cloud Monitoring and include: Bucketed (histogram) latency between a record being committed in Spanner to it being emitted into a PCollection by the connector.
- After initial resourcing, it is important to keep track of the metrics mentioned in Monitor a pipeline , to ensure the pipeline is healthy.
- You can find more information in Using Monitoring for Dataflow pipelines .
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.

