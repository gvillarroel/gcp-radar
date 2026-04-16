---
title: "Use simplified API quota metrics in Cloud Monitoring \_|\_ Compute Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota
  title: "Use simplified API quota metrics in Cloud Monitoring \_|\_ Compute Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Use simplified API quota metrics in Cloud Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to use the simplified Compute Engine
API quota metrics in your Cloud Monitoring dashboards, alerting policies,
and queries.
Simplified API quota metrics
To improve the discoverability and manageability of Compute Engine API
quota, Google Cloud has reduced the number of quota metrics by consolidating metrics
into fewer quota groups. These simplified quota metrics also offer higher limits
for each quota group.
The following table lists all simplified API quota metrics that consolidate the
existing API quota metrics:
Existing API quota metrics
Simplified API quota metric
compute.googleapis.com/list_requests
Read requests per minute
compute.googleapis.com/global_reads
compute.googleapis.com/read_requests
compute.googleapis.com/heavy_weight_read_requests
compute.googleapis.com/default
Existing quota metric for methods that list Compute Engine resources.
compute.googleapis.com/get_macsec_config_requests
compute.googleapis.com/license_verification_requests
compute.googleapis.com/default
Existing quota metric for global methods that create, modify, or delete Compute Engine resources.
Mutation requests per minute
compute.googleapis.com/global_writes
compute.googleapis.com/global_resource_write_requests
compute.googleapis.com/heavy_weight_write_requests
compute.googleapis.com/regional_v2_public_advertised_prefixes_delete_requests
compute.googleapis.com/regional_v2_public_advertised_prefixes_create_requests
compute.googleapis.com/address_move_requests
compute.googleapis.com/project_set_common_instance_metadata_requests
compute.googleapis.com/regional_v2_public_advertised_prefixes_announce_requests
compute.googleapis.com/license_insert_requests
compute.googleapis.com/heavy_weight_read_requests_per_region
Read requests per minute per region
compute.googleapis.com/reads_per_region
compute.googleapis.com/read_requests_per_region
compute.googleapis.com/list_requests_per_region
compute.googleapis.com/default_per_region
Existing quota metric for regional and zonal methods that list Compute Engine resources.
compute.googleapis.com/license_verification_requests_per_region
compute.googleapis.com/instance_list_referrers_requests_per_region
compute.googleapis.com/operation_read_requests_per_region
compute.googleapis.com/network_endpoint_list_requests_per_region
compute.googleapis.com/regional_network_endpoint_list_requests_per_region
compute.googleapis.com/get_serial_port_output_requests_per_region
compute.googleapis.com/read_requests
compute.googleapis.com/heavy_weight_write_requests_per_region
Mutation requests per minute per region
compute.googleapis.com/writes_per_region
compute.googleapis.com/default_per_region
Existing quota metric for regional and zonal methods that create, modify, or delete Compute Engine resources.
compute.googleapis.com/global_resource_write_requests_per_region
compute.googleapis.com/network_endpoint_write_requests_per_region
compute.googleapis.com/regional_network_endpoint_write_requests_per_region
compute.googleapis.com/regional_public_delegated_prefixes_create_requests_per_region
compute.googleapis.com/address_move_requests_per_region
compute.googleapis.com/simulate_maintenance_event_requests_per_region
compute.googleapis.com/regional_public_delegated_prefixes_delete_requests_per_region
compute.googleapis.com/regional_public_delegated_prefixes_announce_requests_per_region
compute.googleapis.com/recommend_locations_requests_per_region
RegionInstances RecommendLocations requests per minute per region
compute.googleapis.com/recommend_locations_per_region
compute.googleapis.com/cache_invalidation_requests
Cache invalidation requests per minute
compute.googleapis.com/global_cache_invalidation_requests
Use simplified metrics in Cloud Monitoring
To monitor Compute Engine API usage against the simplified API metrics,
add filters for these metrics in your Cloud Monitoring dashboards, alerts, and queries.
Use the simplified metrics in Cloud Monitoring dashboards
To use a simplified quota metric in the dashboards, do the following:
In the Google Cloud console, go to Monitoring :
Go to Monitoring
In the navigation pane, select Dashboards .
Select the dashboard that you want to edit to use a simplified metric.
Click Edit dashboard and add a widget.
Add a filter that corresponds to the metric that you want to monitor:
In the Filter field, select quota_metric .
In the Comparator field, select = .
In the Value field, specify the metric name for the API quota.
For example, the filter quota_metric = compute.googleapis.com/global_reads
uses a regular expression to match all time-series data that uses the quota
metric compute.googleapis.com/global_reads .
To apply your changes to the dashboard, in the toolbar, click Apply .
Use the simplified API quota metrics in Cloud Monitoring alerting policies
To create an alerting policy to monitor the usage of a simplified API quota metric, do the following:
In the Google Cloud console, go to Monitoring :
Go to Monitoring
In the navigation pane, select Alerting .
The Alerting page displays panes that list summary information, incidents,
and alerting policies.
Click Create policy to add an alerting policy.
Select a filter that corresponds to the metric that you want to monitor:
In the Filter field, select quota_metric .
In the Comparator field, select = .
In the Value field, specify the metric name for the simplified quota.
For example, the filter quota_metric = compute.googleapis.com/global_reads
uses a regular expression to match all time-series data that uses the quota
metric compute.googleapis.com/global_reads .
Click Done to save changes in the filter.
Click Save policy .
You can also use the Google Cloud Terraform Provider to create alerting policies in your
Google Cloud project. For more information,
see Create alerting policies with Terraform .
Use simplified quota metrics in Cloud Monitoring queries
To use the simplified quota metric in a PromQL-based alerting policy or a chart
in a dashboard, use the Query Editor and edit the query filter. See
Use the code editor for PromQL .
Open the Query Editor and add the filter as shown in the following
example:
sum(rate(serviceruntime_googleapis_com:quota_rate_net_usage{monitored_resource="consumer_quota", \
quota_metric=~"compute.googleapis.com/global_reads"}[${__interval}]))
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
