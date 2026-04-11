---
title: "Cloud Monitoring \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/monitoring
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/monitoring
  title: "Cloud Monitoring \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Cloud Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Monitoring provides visibility into the
performance, uptime, and overall health of cloud-powered applications.
Google Cloud Observability collects and ingests metrics, events, and metadata from
Dataproc Metastore services to generate insights using dashboards
and charts.
See Monitoring Pricing
to understand your costs.
See Monitoring Quotas and limits
for information on metric data retention.
Access service metrics in Monitoring
Dataproc Metastore service resource metrics are automatically
enabled on Dataproc Metastore services. Use Monitoring
to view these metrics.
You can access Monitoring from the
Google Cloud console
or by using the Monitoring API .
Console
In the Google Cloud console, go to the
Cloud Monitoring > Metrics explorer page:
Go to the Metrics explorer page
From the "Find resource type and metric"
drop-down list, select the resource Dataproc Metastore Service .
Click again in the input box, and then select a metric from the drop-down
list. Hovering over the metric name displays information about the metric.
You can select filters, group by metric labels, perform aggregations, and
select chart viewing options.
REST
You can use the Monitoring timeSeries.list
API to capture and list metrics defined by a filter expression.
Use the Try this API template on the API page to send
an API request and display the response.
Dataproc Metastore service metrics in Monitoring
Metrics from Dataproc Metastore. Launch stages of these metrics:
BETA GA
The "metric type" strings in this table must be prefixed
with metastore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
federation/health
BETA
(project)
Federation service health
GAUGE , INT64 , 1
metastore.googleapis.com/Federation
The health of the Federated Dataproc Metastore Service.
version :
The Hive Metastore version of the service.
federation/server/request_count
BETA
(project)
Federation service request count
DELTA , INT64 , {request}
metastore.googleapis.com/Federation
The number of requests sent to the Federated Dataproc Metastore Service.
method_name :
The request method name.
status :
End status of the request, one of [success, client_error, server_error].
version :
The Hive Metastore version of the service.
service/grpc/finished_requests_count
BETA
(project)
gRPC Requests Finished Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of requests finished by the GRPC Dataproc Metastore Service.
tier :
Service tier or instance size of the service, such as ENTERPRISE.
version :
The Hive Metastore version of the service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc/received_bytes_count
BETA
(project)
gRPC Bytes Received
DELTA , INT64 , By
metastore.googleapis.com/Service
Number of bytes received by the Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
service/grpc/request_latencies
BETA
(project)
gRPC Request Latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
Distribution of gRPC request latencies for a Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc/sent_bytes_count
BETA
(project)
gRPC Bytes Sent
DELTA , INT64 , By
metastore.googleapis.com/Service
Number of bytes sent by the Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
service/grpc/started_requests_count
BETA
(project)
gRPC Requests Started Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of requests received and started by the GRPC Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
method_name :
The request method name.
service/grpc_client/finished_requests_count
BETA
(project)
gRPC Client Requests Finished Count
CUMULATIVE , INT64 , 1
metastore.googleapis.com/Service
Total number of RPCs completed on the client, regardless of success or failure.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc_client/received_bytes_count
BETA
(project)
gRPC Client Bytes Received
CUMULATIVE , INT64 , By
metastore.googleapis.com/Service
Number of bytes received by the gRPC client.
service/grpc_client/request_latencies
BETA
(project)
gRPC Client Request Latencies
CUMULATIVE , DISTRIBUTION , ms
metastore.googleapis.com/Service
Distribution of gRPC request latencies for a Dataproc Metastore Service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc_client/sent_bytes_count
BETA
(project)
gRPC Client Bytes Sent
CUMULATIVE , INT64 , By
metastore.googleapis.com/Service
Number of bytes sent by the gRPC client.
service/grpc_client/started_requests_count
BETA
(project)
gRPC Client Requests Started Count
CUMULATIVE , INT64 , 1
metastore.googleapis.com/Service
The number of requests started by the gRPC client.
method_name :
The request method name.
service/health
GA
(project)
Service health
GAUGE , INT64 , 1
metastore.googleapis.com/Service
The health of the Dataproc Metastore Service.
tier :
Service tier or instance size of the service, such as ENTERPRISE.
version :
The Hive Metastore version of the service.
release_tag :
Dataproc Metastore release tag, populated by the service backend and may change over service lifetime.
service/metadata/bytes_used
BETA
(project)
Size of the metadata stored in the Dataproc Metastore service.
GAUGE , INT64 , By
metastore.googleapis.com/Service
The amount of data that is stored in the backend database of the service.
version :
The Hive Metastore version of the service.
database_type :
The type of database, one of [SQL, Spanner].
service/migration/replication_lag
BETA
(project)
Replication pipeline processing latency in seconds.
GAUGE , DOUBLE , s
metastore.googleapis.com/Service
Current maximum duration in seconds taken to replicate data to Dataproc Metastore.
migration_id :
The migration ID.
service/migration/write_throughput
BETA
(project)
Destination database write throughput.
GAUGE , DOUBLE , By/s
metastore.googleapis.com/Service
Current write throughput at the Dataproc Metastore database where the data is being copied to during the replication phase.
migration_id :
The migration ID.
service/multi_region/health
GA
(project)
Multiregional service health
GAUGE , INT64 , 1
metastore.googleapis.com/Service
The health of the multiregional Dataproc Metastore Service.
version :
The Hive Metastore version of the service.
release_tag :
Dataproc Metastore release tag, populated by the service backend and may change over service lifetime.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/multi_region/request_count
GA
(project)
Multiregional service request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of requests sent to the multiregional Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/multi_region/request_latencies
GA
(project)
Multiregional service request latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The latencies of the requests sent to the multiregional Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/query_metadata/request_count
BETA
(project)
Admin Interface request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of Admin Interface requests.
database_type :
The type of database, one of [SQL, Spanner].
code :
The gRPC status code.
service/query_metadata/request_latencies
BETA
(project)
Admin Interface request latency
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The end to end request latency for Admin Interface requests.
database_type :
The type of database, one of [SQL, Spanner].
code :
The gRPC status code.
service/request_count
GA
(project)
Request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of requests sent to the Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service/request_latencies
BETA
(project)
Request latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The latencies of the requests sent to the Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service/scheduled_backups/backup_count
BETA
(project)
Scheduled Backups Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of scheduled backups currently stored for the service.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
service/scheduled_backups/last_backup_duration
BETA
(project)
Scheduled Backups - Last Backup Duration
GAUGE , INT64 , s
metastore.googleapis.com/Service
The duration of the last successful scheduled backup in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
service/scheduled_backups/last_backup_size
BETA
(project)
Scheduled Backups Request - Last Backup Size
GAUGE , INT64 , By
metastore.googleapis.com/Service
The size of the last successful scheduled backup in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
Table generated at 2026-04-10 19:48:34 UTC.
Build a custom Monitoring dashboard
You can build a custom Monitoring dashboard that displays
charts of selected Dataproc Metastore service metrics.
Select + CREATE DASHBOARD from the
Monitoring Dashboards Overview page.
Provide a name for the dashboard.
In the upper-right menu, click Add Chart to open the Add Chart window.
For the resource type, select Dataproc Metastore Service .
Select one or more metrics and metric and chart properties, and then click
Save to save the chart.
Add additional charts to your dashboard if you'd like.
To save the dashboard, click Save . Its title appears in the Monitoring
Dashboards Overview page.
You can view, update, and delete dashboard charts from the dashboard display
page.
Use Monitoring alerts
You can create a Monitoring alert that notifies you when a
Dataproc Metastore service or job metric crosses a specified
threshold.
Create an alert
In the Google Cloud console, open Monitoring Alerting .
To open the Create new alerting policy form, click + CREATE POLICY
Define an alert by adding alert conditions, policy triggers, notification
channels, and documentation.
Select ADD CONDITION to open the alert condition form with the
Metric tab selected.
Fill in the fields to define an alert condition, and then click ADD .
After adding the alert condition, complete the alert policy by setting
notification channels, policy triggers, documentation, and the alert policy
name.
View alerts
When an alert is triggered by a metric threshold condition, Monitoring
creates an incident and a corresponding event. You can view incidents from the
Monitoring Alerting
page in the Google Cloud console. If you defined a notification mechanism in
the alert policy, such as an email or SMS notification, Monitoring
also sends a notification of the incident.
What's next
Cloud Monitoring documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
