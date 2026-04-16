---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.003Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "OpenCensus custom metrics library"
feature_slug: "opencensus-custom-metrics-library"
latest_feature_date: "2019-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/reference/libraries"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
keywords:
  - "opencensus"
  - "custom"
  - "metrics"
  - "library"
  - "generally"
  - "available"
  - "official"
  - "writing"
---

# OpenCensus custom metrics library

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

OpenCensus is the generally available official library for writing user-defined metrics to Stackdriver Monitoring.

## Extended Definition

OpenCensus is the generally available official library for writing user-defined metrics to Stackdriver Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/reference/libraries](https://docs.cloud.google.com/monitoring/docs/reference/libraries)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)

## Supporting Pages

### Monitoring client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/reference/libraries](https://docs.cloud.google.com/monitoring/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only needs to be created // once, and can be reused for multiple requests. try ( MetricServiceClient metricServiceClient = MetricServiceClient . create ()) { // Prepares an individual data point TimeInterval interval = TimeInterval . newBuilder () . setEndTime ( Timestamps . fromMillis ( System . currentTimeMillis ())) . build (); TypedValue value = TypedValue . newBuilder (). setDoubleValue ( 123.45 ). build (); Point point = Point . newBuilder (). setInterval ( interval ). setValue ( value ). build (); List<Point> pointList = new ArrayList <> (); pointList . add ( point ); ProjectName name = ProjectName . of ( projectId ); // Prepares the metric descriptor Map<String , String > metricLabels = new HashMap <> (); metricLabels . put ( "store id" , "Pittsburg" ); Metric metric = Metric . newBuilder () . setType ( "custom.googleapis.com/stores/daily sales" ) . putAllLabels ( metricLabels ) . build (); // Prepares the monitored resource descriptor Map<String , String > resourceLabels = new HashMap <> (); resourceLabels . put ( "project id" , projectId ); MonitoredResource resource = MonitoredResource . newBuilder (). setType ( "global" ). putAllLabels ( resourceLabels ). build (); // Prepares the time series request TimeSeries timeSeries = TimeSeries . newBuilder () . setMetric ( metric ) . setResource ( resource ) . addAllPoints ( pointList ) . build (); List<TimeSeries> timeSeriesList = new ArrayList <> (); timeSeriesList . add ( timeSeries ); CreateTimeSeriesRequest request = CreateTimeSeriesRequest . newBuilder () . setName ( name . toString ()) . addAllTimeSeries ( timeSeriesList ) . build (); // Writes time series data metricServiceClient . createTimeSeries ( request ); System . out . printf ( "Done writing time series data.%n" ); } } } Node.js // Imports the Google Cloud client library const monitoring = require ( ' @google-cloud/monitoring ' ); async function quickstart () { // Creates a client const client = new monitoring .
- MetricServiceClient (); // TODO(developer): Uncomment and set the following variables // const projectId = "PROJECT ID" // Prepares an individual data point const dataPoint = { interval : { endTime : { seconds : Date . now () / 1000 , }, }, value : { // The amount of sales doubleValue : 123.45 , }, }; // Prepares the time series request const request = { name : client . projectPath ( projectId ), timeSeries : [ { // Ties the data point to a custom metric metric : { type : 'custom.googleapis.com/stores/daily sales' , labels : { store id : 'Pittsburgh' , }, }, resource : { type : 'global' , labels : { project id : projectId , }, }, points : [ dataPoint ], }, ], }; // Writes time series data const [ result ] = await client . createTimeSeries ( request ); console . log ( 'Done writing time series data.' , result ); } quickstart (); PHP Includes the autoloader for libraries installed with composer require once DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Api\Metric; use Google\Api\MonitoredResource; use Google\Cloud\Monitoring\V3\Client\MetricServiceClient; use Google\Cloud\Monitoring\V3\CreateTimeSeriesRequest; use Google\Cloud\Monitoring\V3\Point; use Google\Cloud\Monitoring\V3\TimeInterval; use Google\Cloud\Monitoring\V3\TimeSeries; use Google\Cloud\Monitoring\V3\TypedValue; use Google\Protobuf\Timestamp; // These variables are set by the App Engine environment.
- To test locally, // ensure these are set or manually change their values. $projectId = getenv('GCLOUD PROJECT') ?: 'YOUR PROJECT ID'; $instanceId = '1234567890123456789'; $zone = 'us-central1-f'; try { $client = new MetricServiceClient(); $formattedProjectName = 'projects/' . $projectId; $labels = [ 'instance id' => $instanceId, 'zone' => $zone, ]; $m = new Metric(); $m->setType('custom.googleapis.com/my metric'); $r = new MonitoredResource(); $r->setType('gce instance'); $r->setLabels($labels); $value = new TypedValue(); $value->setDoubleValue(3.14); $timestamp = new Timestamp(); $timestamp->setSeconds(time()); $interval = new TimeInterval(); $interval->setStartTime($timestamp); $interval->setEndTime($timestamp); $point = new Point(); $point->setValue($value); $point->setInterval($interval); $points = [$point]; $timeSeries = new TimeSeries(); $timeSeries->setMetric($m); $timeSeries->setResource($r); $timeSeries->setPoints($points); $createTimeSeriesRequest = (new CreateTimeSeriesRequest()) ->setName($formattedProjectName) ->setTimeSeries([$timeSeries]); $client->createTimeSeries($createTimeSeriesRequest); print('Successfully submitted a time series' .
- The samples on this page use custom, or user-defined, metrics to illustrate the use of the client libraries.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- The following table describes the categories of billable metrics available on the Metrics Management page and whether they are measured by bytes or samples ingested: Domain Metric prefix Pricing model Meaning Agent agent.googleapis.com Bytes Metrics that are collected from external resources by agents .
- To view information about errors in writing metric data, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- The new custom metric https://cloud.google.com/monitoring/custom-metrics descriptor.
- Generally, you only need to set this if you're developing your own client library.

