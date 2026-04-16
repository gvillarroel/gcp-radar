---
title: "Compute Engine rate quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/api-rate-limits
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/api-rate-limits
  title: "Compute Engine rate quotas \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Resources
Send feedback
Compute Engine rate quotas
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the Compute Engine rate quotas, which define the number of
requests you can make to Compute Engine API methods.
Rate quotas
Rate quotas (also known as API rate limits or API quotas) define the number of
requests that can be made to the Compute Engine API .
These quotas apply on a per-project basis. Each quota applies to a group of one
or more Compute Engine API methods. When you use the gcloud CLI or
the Google Cloud console, you are also making requests to the API and these
requests count towards your rate quota. If you use service accounts to access
the API, that also counts towards your rate quota.
Google enforces rate quotas at a per-minute (60 seconds) interval for each
group. That means if your project reaches the maximum number of API requests
anytime within 60 seconds, you must wait for that rate quota to refill before
making more requests in that group. If your project exceeds a rate quota, you
receive a 403 error with the reason rateLimitExceeded . To resolve this error,
wait a minute then try your request again—the quota should be refilled at
the start of the next interval.
The number of requests that you can make to the Compute Engine API is defined by
API quotas as described in the following tables. Each group is counted
separately, so you can achieve the maximum quota in each group simultaneously.
Rate quotas for global methods
The following sections list the quotas that define the number of requests you
can make to the global Compute Engine API methods.
Simplified API quotas for global methods
To improve the discoverability and manageability of Compute Engine API quota,
Google Cloud has reduced the number of quota metrics by consolidating metrics
into fewer quotas. These simplified quota metrics also offer higher limits
for each quota.
To view a complete list of global methods and the quota metrics that track
the cost of each method, see Compute Engine API quota metrics reference .
The following table lists all simplified API quota metrics for Compute Engine API:
Quota Quota description
Metric name
Read requests per minute ( GlobalReadsPerMinutePerProject )
Quota for global get and list methods.
compute.googleapis.com/global_reads
Write requests per minute ( GlobalWritesPerMinutePerProject )
Quota for global write methods that are not included under
other quota metrics.
compute.googleapis.com/global_writes
List usable requests per minute ( GlobalListUsablePerMinutePerProject )
Quota for global ListUsable methods.
compute.googleapis.com/list_usable_requests
Cache invalidation requests per minute ( GlobalCacheInvalidationRequestsPerMinutePerProject )
Quota for global UrlMapsService.InvalidateCache methods.
compute.googleapis.com/global_cache_invalidation_requests
Filtered list cost overhead ( ListRequestsFilterCostOverheadPerMinutePerProject )
Quota for
*.list and *.aggregatedList global methods with filters.
Google Cloud charges quota usage for this metric in addition to
the quotas against
the compute.googleapis.com/global_reads metric.
You incur quota charges if there are more than 10k resources filtered
out of the list requests. Compute Engine API rejects the list
requests if you exceed this quota limit.
compute.googleapis.com/filtered_list_cost_overhead
Rate per project:
750k resources filtered out of the list requests per region per minute. As the
quota is charged for every 10k resources, you see the limit as 75 (750k/10k) when you
query for this quota limit on the Google Cloud console.
Note: You cannot request a higher limit for this quota. To avoid quota
issues, optimize your list request filters or use list filters
on the client side .
Requests per minute ( GlobalRequestsPerMinutePerProject )
Quota for all global read and write requests.
compute.googleapis.com/global_requests
Note: You cannot request a higher limit for this quota.
Legacy API quotas for global methods
The following table lists all Compute Engine API quotas for global methods.
Note: The following global metrics continue to exist, but we recommend that you use the
simplified API quota metrics
to set alerts and to track API usage on your Cloud Monitoring
dashboards.
Quota Quota description
Metric name
Queries per minute ( defaultPerMinutePerProject )
Quota for global list and mutation methods that are not included under
other quota metrics.
The following get methods also use this default metric:
networkFirewallPolicies.get
projects.getXpnHost
projects.getXpnResources
compute.googleapis.com/default
Read requests (legacy) ( ReadRequestsPerMinutePerProject )
Quota for global *.get methods.
compute.googleapis.com/read_requests
List requests ( ListRequestsPerMinutePerProject )
Quota for global *.list methods.
compute.googleapis.com/list_requests
Operation read requests ( OperationReadRequestsPerMinutePerProject )
Quota for globalOperations.get method.
compute.googleapis.com/operation_read_requests
Global resource mutation requests ( GlobalResourceWriteRequestsPerMinutePerProject )
Quota for images.delete , images.deprecate ,
images.insert , images.setLabels , snapshots.delete ,
snapshots.insert , snapshots.setLabels ,
machineImages.insert , and machineImages.delete methods.
compute.googleapis.com/global_resource_write_requests
Heavy-weight mutation requests ( HeavyWeightWriteRequestsPerMinutePerProject )
Quota for patch , delete ,
and insert methods for the interconnects resources.
compute.googleapis.com/heavy_weight_write_requests
Heavy-weight read requests ( HeavyWeightReadRequestsPerMinutePerProject )
Quota for *.aggregatedList methods.
compute.googleapis.com/heavy_weight_read_requests
The following quotas apply to global APIs with per method quotas:
Quota Quota description
Metric name
Default limit
License insert requests Quotas for licenses.insert method.
compute.googleapis.com/license_insert_requests
Quota per project ( LicenseInsertRequestsPerMinutePerProject ):
2.5 requests/second (150 requests/minute)
Quota per day per project ( LicenseInsertRequestsPerDayPerProject ):
30 requests/day
Project set common instance metadata requests Quota for
projects.setCommonInstanceMetadata method.
compute.googleapis.com/project_set_common_instance_metadata_requests
Quota per project ( ProjectSetCommonInstanceMetadataRequestsPerMinutePerProject ):
36 requests/minute
Rate quotas for regional and zonal methods
The following sections list all quotas that apply to methods that use
regional metrics.
Simplified API quotas for regional and zonal methods
The following table lists all simplified quotas for Compute Engine API regional
and zonal methods.
To view a complete list of regional and zonal methods, and the quota metrics that track
the usage of each method, see Compute Engine API quota metrics reference .
Quota Quota description
Metric name
Read requests per minute per region ( ReadRequestsPerMinutePerProjectPerRegion )
Quota for regional and zonal `get`
and `list` methods.
compute.googleapis.com/reads_per_region
Write requests per region ( WritesPerMinutePerProjectPerRegion )
Quota for regional and zonal write methods that are not included under
other quota metrics.
compute.googleapis.com/writes_per_region
List usable requests per region ( ListUsablePerMinutePerProjectPerRegion )
Quota for regional and zonal ListUsable methods.
compute.googleapis.com/list_usable_requests_per_region
Filtered list cost overhead per region
Quota for
*.list and *.aggregatedList regional and zonal methods with filters.
Google Cloud charges quota usage for this metric in addition to
the quotas against
the compute.googleapis.com/reads_per_region metric.
You incur quota charges if there are more than 10k resources filtered
out of the list requests. Compute Engine API rejects the list
requests if you exceed this quota limit.
compute.googleapis.com/filtered_list_cost_overhead_per_region
Rate per project ( ListRequestsFilterCostOverheadPerMinutePerProjectPerRegion ):
750k resources filtered out of the list requests per region per minute. As the
quota is charged for every 10k resources, you see the limit as 75 (750k/10k) when you
query for this quota limit on the Google Cloud console.
Note: You cannot request a higher limit for this quota. To avoid quota
issues, optimize your list request filters or use list filters
on the client side .
Requests per minute per region ( RequestsPerMinutePerProjectPerRegion )
Quota for all regional read and write requests.
compute.googleapis.com/requests_per_region
Note: You cannot request a higher limit for this quota.
Legacy API quotas for regional methods
The following table lists all Compute Engine API quotas for regional and zonal methods.
Note: The following regional metrics continue to exist, but we recommend that you use the
simplified API quota metrics
to set alerts and to track API usage on your Cloud Monitoring
dashboards:
Quota Quota description
Metric name
Queries ( QueriesPerMinutePerRegion )
Quota for regional and zonal methods that create,
modify, or delete Compute Engine resources. For example,
instances.insert , disks.update , and
instances.delete methods.
The following get , list and patch
methods also use this default_per_region metric:
projects.listXpnHosts
instances.getScreenshot
instances.getGuestAttributes
instances.getShieldedInstanceIdentity
instances.getEffectiveFirewalls
projects.listXpnHosts
instanceGroupManagers.listManagedInstances
instanceGroupManagers.listErrors
instanceGroupManagers.listPerInstanceConfigs
regionInstanceGroupManagers.listManagedInstances
regionInstanceGroupManagers.listErrors
regionInstanceGroupManagers.listPerInstanceConfigs
resourcePolicies.patch
compute.googleapis.com/default_per_region
Read requests (legacy) ( ReadRequestsPerMinutePerRegion )
Quota for regional and zonal get methods
such as autoscalers.get , disks.get , instances.get ,
and machineTypes.get .
compute.googleapis.com/read_requests_per_region
List requests ( ListRequestsPerMinutePerRegion )
Quota for regional and zonal list methods
such as autoscalers.list , disks.list , instances.list ,
and machineTypes.list .
compute.googleapis.com/list_requests_per_region
Filtered list cost overhead
Quota for
*.list and *.aggregatedList methods with filters.
Google Cloud charges quota usage for this metric in addition to
the quotas against
the compute.googleapis.com/list_requests_per_region and
compute.googleapis.com/heavy_weight_read_requests_per_region metrics.
You incur quota charges if there are more than 10k resources filtered
out of the list requests. Compute Engine API rejects the list
requests if you exceed this quota limit.
compute.googleapis.com/filtered_list_cost_overhead_per_region
Rate per project ( ListRequestsFilterCostOverheadPerMinutePerProjectPerRegion ):
750k resources filtered out of the list requests per region per minute. As the
quota is charged for every 10k resources, you see the limit as 75 (750k/10k) when you
query for this quota limit on the Google Cloud console.
Note: You cannot request a higher limit for this quota. To avoid quota
issues, optimize your list request filters or use list filters
on the client side .
Operation read requests ( OperationReadRequestsPerMinutePerRegion )
Quota for
regionOperations.get and
zoneOperations.get methods.
compute.googleapis.com/operation_read_requests_per_region
Global resource mutation requests per region ( GlobalResourceWriteRequestsPerMinutePerProjectPerRegion )
Quota for
disks.createSnapshot ,
and regionDisks.createSnapshot methods.
compute.googleapis.com/global_resource_write_requests_per_region
Instance get serial port output requests ( GetSerialPortOutputRequestsPerMinutePerProjectPerRegion )
Quota for instances.getSerialPortOutput method.
compute.googleapis.com/get_serial_port_output_requests_per_region
Heavy weight read requests ( HeavyWeightReadRequestsPerMinutePerRegion )
Quota for regionOperations.wait ,
zoneOperations.wait , and
regionNetworkFirewallPolicies.getEffectiveFirewalls methods.
compute.googleapis.com/heavy_weight_read_requests_per_region
Heavy weight mutation requests per region HeavyWeightWriteRequestsPerMinutePerProjectPerRegion
Quota for patch ,
delete , and insert methods for
interconnectAttachments resource and
for the networks.updatePeering method.
compute.googleapis.com/heavy_weight_write_requests_per_region
Instance simulate maintenance event requests ( SimulateMaintenanceEventRequestsPerMinutePerProjectPerRegion )
Quota for instances.simulateMaintenanceEvent method.
compute.googleapis.com/simulate_maintenance_event_requests_per_region
Instance list referrer requests InstanceListReferrersRequestsPerMinutePerProjectPerRegion
Quota for instances.listReferrers method.
compute.googleapis.com/instance_list_referrers_requests_per_region
Network endpoint write requests NetworkEndpointWriteRequestsPerMinutePerProjectPerRegion
Quota for
networkEndpointGroups.attachNetworkEndpoints
and networkEndpointGroups.detachNetworkEndpoints methods.
compute.googleapis.com/network_endpoint_write_requests_per_region
Network endpoint list requests ( NetworkEndpointListRequestsPerMinutePerProjectPerRegion )
Quota for networkEndpointGroups.listNetworkEndpoints method.
compute.googleapis.com/network_endpoint_list_requests_per_region
Regional network endpoint write requests ( RegionalNetworkEndpointWriteRequestsPerMinutePerProjectPerRegion )
Quota for
regionNetworkEndpointGroups.attachNetworkEndpoints
and regionNetworkEndpointGroups.detachNetworkEndpoints methods.
compute.googleapis.com/regional_network_endpoint_write_requests_per_region
Regional network endpoint list requests ( RegionalNetworkEndpointListRequestsPerMinutePerProjectPerRegion )
Quota for regionNetworkEndpointGroups.listNetworkEndpoints method.
compute.googleapis.com/regional_network_endpoint_list_requests_per_region
Request an increase in rate quotas
If you need a higher quota for making API requests, you can request an increase
in the API quota from the Google Cloud console. For instructions,
see Request a quota adjustment .
Best practices
Follow the Compute Engine API best practices for
preserving rate quotas
to mitigate the effects of rate quotas.
What's next
Learn about Monitoring API usage .
Learn how to set up quota alerts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
