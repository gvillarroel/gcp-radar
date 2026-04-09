---
title: "Quotas and limits \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/quotas
  title: "Quotas and limits \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quotas and limits | Cloud Load Balancing | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Load Balancing
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud Load Balancing
All resources
Pricing
Quotas and limits
Metrics
Release notes
Points of presence
Security bulletins
Service Level Agreement
Billing questions
Support
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Backends Endpoints per NEG
VMs per instance group
Target pools
Backend buckets
Backend services
Forwarding rules
Target proxies
TLS routes
Health checks
URL maps
Header size for Application Load Balancers
Queries per second for Application Load Balancers
Service load balancing policy
Compute Engine SSL certificates
SSL policies
Authorization policy
Server TLS policy
Trust config
Public delegated prefix limits
Deprecated quotas
Manage quotas Permissions
Check your quota
Errors when exceeding your quota
Request additional quota
Resource availability
Related information
Home
Documentation
Networking
Load Balancing
Resources
Was this helpful?
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Backends Endpoints per NEG
VMs per instance group
Target pools
Backend buckets
Backend services
Forwarding rules
Target proxies
TLS routes
Health checks
URL maps
Header size for Application Load Balancers
Queries per second for Application Load Balancers
Service load balancing policy
Compute Engine SSL certificates
SSL policies
Authorization policy
Server TLS policy
Trust config
Public delegated prefix limits
Deprecated quotas
Manage quotas Permissions
Check your quota
Errors when exceeding your quota
Request additional quota
Resource availability
Related information
This document lists the quotas and system limits that apply to
Cloud Load Balancing.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
To change a quota, see
Request additional quota .
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
There are also system limits on Cloud Load Balancing resources.
System limits can't be changed.
Backends
Item
Quotas and limits
Notes
Instance groups
Quota
Quotas are per-project and per-region. When making a quota increase
request, select the region that contains the instance group. Zonal instance
groups charge the region containing the instance group's zone.
Zonal and regional NEGs per project
Quota
Quotas are per-project and per-region, covering all
types of NEGs except
for global internet NEGs, Private Service Connect NEGs, and
serverless NEGs.
When making a quota increase request, select the region that contains the
NEG. Zonal NEGs charge the region containing the NEG's zone.
Global NEGs per project
Quota
This quota is global, per-project, and covers global internet NEGs,
Private Service Connect NEGs, and serverless NEGs.
Maximum number of instance group backends, GCE_ VM_ IP_ PORT
NEG backends, GCE_ VM_ IP NEG backends, or regional internet NEG
backends per backend service
50
This limit is not configurable.
Support for zonal and internet
NEG backends varies by load balancing
product.
If you have configured failover
for backend service-based
external passthrough Network Load Balancers or if you have configured failover for
internal passthrough Network Load Balancers , you can configure up to 50 primary and 50 backup
instance groups or GCE_VM_IP NEGs per backend service.
Internal passthrough Network Load Balancers also have a limit on the number of individual
virtual machine (VM) instances or endpoints to which a backend service
can distribute packets.
For more information, see backend services .
Endpoints per NEG
Item
Quotas and limits
Notes
Endpoints per GCE_VM_IP_PORT zonal NEG
10,000
This limit cannot be increased.
Endpoints per GCE_VM_IP zonal NEG
10,000
This limit cannot be increased.
Endpoints per hybrid connectivity NEG ( NON_GCP_PRIVATE_IP_PORT )
10,000
This limit cannot be increased.
Endpoints per global internet NEG
1
This limit cannot be increased.
Endpoints per regional internet NEG
256
This limit cannot be increased.
Endpoints per serverless NEG
1
This limit cannot be increased.
Endpoints per Private Service Connect NEG
1
This limit cannot be increased.
Endpoints per port mapping NEG
1,000
This limit cannot be increased.
VMs per instance group
The number of backend VMs that can be serviced by a single load balancer might
be less than the number of VMs that an instance group can support. The maximum
number of load-balanced VMs per instance group depends on the number of ports
specified in each named port that the instance group exports.
By default, the upper limit of load-balanced VMs per instance group cannot
exceed 2,000 for regional managed instance groups (MIGs), and cannot exceed
1,000 for zonal MIGs. In zonal unmanaged instance groups, the maximum
number of VMs per group is 2,000. If you need more than 2,000 VMs, you can
increase the size limit of your managed instance group
or contact support .
Item
Quotas and limits
Notes
Maximum number of VMs per regional managed instance group connected to a pass-through load balancer's backend service
2,000
Internal passthrough Network Load Balancers also have a limit on the number of individual VM instances or endpoints to which a backend service can distribute packets. For details, see backend services .
Maximum number of VMs per zonal managed instance group or per zonal unmanaged instance group connected to a pass-through load balancer's backend service
Maximum for zonal managed instance groups: 1,000
Maximum for zonal unmanaged instance groups: 2,000
Internal passthrough Network Load Balancers also have a limit on the number of individual VM instances or endpoints to which a backend service can distribute packets. For details, see backend services .
Maximum number of VMs per regional managed instance group connected to a proxy load balancer's backend service
Depends on the number of ports specified in the named port for the
instance group. It is the smaller of these two:
A: 2,000
B: 10,000 / (number of ports in the named port that contains
the most port numbers) *
Contact support if you need to increase this
limit.
Maximum number of VMs per zonal managed instance group
connected to a proxy load balancer's backend service
Depends on the number of ports specified in the named port for the
instance group. It is the smaller of these two:
A: 1,000
B: 10,000 / (number of ports in the named port that contains
the most port numbers) *
Contact support if you need to increase this
limit.
Maximum number of VMs per zonal unmanaged instance group connected to a
proxy load balancer's backend service
Depends on the number of ports specified in the named port for the
instance group. It is the smaller of these two:
A: 2,000
B: 10,000 / (number of ports in the named port that contains
the most port numbers) *
Contact support if you need to increase this
limit.
* To calculate the maximum number of load-balanced VMs in an
instance group backend:
Determine maximum number of ports per named port.
For example, if an instance group has the following named ports: http:80 ,
api-gateway:8080 , and api-gateway:8090 , then there is one port number for
the http name and two port numbers for the api-gateway name. Therefore,
in this example the maximum number of ports per named port is two.
Divide 10,000 by the maximum number of ports per named port and discard
the remainder. For example, 10,000 / 2 = 5,000 .
Compare the number calculated in the previous step with the upper limit of
load-balanced VMs per instance group: 2,000 for regional groups,
1,000 for zonal groups.
If the number calculated in the previous step is less than or equal to the
upper limit, then the maximum number of load-balanced VMs per instance group
is the number you calculated in the previous step. Otherwise, the maximum
number of load-balanced VMs per instance group is the upper limit (2,000 for
regional groups or 1,000 for zonal groups).
Target pools
Item
Quotas and limits
Notes
Target pools
Quota
This quota is per project.
Backend buckets
Item
Quotas and limits
Notes
Backend buckets
Quota
This quota is per project.
Backend services
To monitor backend service quotas using Cloud Monitoring, set up monitoring
for the serviceruntime.googleapis.com/quota/allocation/usage metric on the
Consumer Quota resource type. Set additional label filters ( service ,
quota_metric ) to get to the quota type. For information about how to monitor
quota usage metrics, see
Chart and monitor quota metrics .
Item
Quotas and limits
Notes
Application Load Balancers and Proxy Network Load Balancers
Classic Application Load Balancer and Classic proxy Network Load Balancer
backend services
Quota
This is a per-project quota defining the maximum number of backend
services for
classic Application Load Balancers and
classic proxy Network Load Balancers .
Quota name: GLOBAL_EXTERNAL_PROXY_LB_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/global_external_proxy_LB_backend_services/limit
compute.googleapis.com/quota/global_external_proxy_LB_backend_services/usage
compute.googleapis.com/quota/global_external_proxy_LB_backend_services/exceeded
Global external Application Load Balancer and Global external proxy Network Load Balancer
backend services
Quota
This is a per-project quota defining the maximum number of backend
services for
global external Application Load Balancers and
global external proxy Network Load Balancers .
Quota name: GLOBAL_EXTERNAL_MANAGED_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/global_external_managed_backend_services/limit
compute.googleapis.com/quota/global_external_managed_backend_services/usage
compute.googleapis.com/quota/global_external_managed_backend_services/exceeded
Regional external Application Load Balancer and Regional external proxy Network Load Balancer
backend services
Quota
This is a per-region and per-project quota defining the maximum
number of backend services for
regional external Application Load Balancers and
global external proxy Network Load Balancers .
Quota name: REGIONAL_EXTERNAL_MANAGED_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/regional_external_managed_backend_services/limit
compute.googleapis.com/quota/regional_external_managed_backend_services/usage
compute.googleapis.com/quota/regional_external_managed_backend_services/exceeded
Cross-region internal Application Load Balancer and Cross-region internal proxy Network Load Balancer
backend services
Quota
This is a per-region and per-project quota defining the maximum
number of backend services for
cross-region internal Application Load Balancers and
cross-region internal proxy Network Load Balancers .
Quota name:
GLOBAL_INTERNAL_MANAGED_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/global_internal_managed_backend_services/limit
compute.googleapis.com/quota/global_internal_managed_backend_services/usage
compute.googleapis.com/quota/global_internal_managed_backend_services/exceeded
Regional internal Application Load Balancer and Regional internal proxy Network Load Balancer
backend services
Quota
This is a per-region and per-project quota defining the maximum
number of backend services for
regional internal Application Load Balancers and
regional internal proxy Network Load Balancers .
Quota name:
REGIONAL_INTERNAL_MANAGED_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/regional_internal_managed_backend_services/limit
compute.googleapis.com/quota/regional_internal_managed_backend_services/usage
compute.googleapis.com/quota/regional_internal_managed_backend_services/exceeded
Number of backend services per Application Load Balancer
Varies based on the URL map configuration
For more details, see URL maps .
Number of backend services per proxy Network Load Balancer
1
This limit cannot be changed.
Number of named ports per Application Load Balancer or proxy Network Load Balancer
backend service
1
This limit cannot be changed. Named ports are only relevant to
instance group backends.
Maximum distinct projects containing URL maps that can reference a
particular backend service (limit relevant to
cross-project service
referencing )
10
URL maps from a maximum of 10 distinct projects can
reference a particular backend service. This limit cannot be increased.
This limit applies independently to each backend service.
Passthrough Network Load Balancers
External passthrough Network Load Balancer backend services
Quota
This is a per-region and per-project quota defining the maximum
number of backend services for
external passthrough Network Load Balancers .
Quota name: REGIONAL_EXTERNAL_NETWORK_LB_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/regional_external_network_LB_backend_services/limit
compute.googleapis.com/quota/regional_external_network_LB_backend_services/usage
compute.googleapis.com/quota/regional_external_network_LB_backend_services/exceeded
Internal passthrough Network Load Balancer backend services
Quota
This is a per-region and per-project quota defining the maximum
number of backend services for
internal passthrough Network Load Balancers .
Quota name: REGIONAL_INTERNAL_LB_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/regional_internal_LB_backend_services/limit
compute.googleapis.com/quota/regional_internal_LB_backend_services/usage
compute.googleapis.com/quota/regional_internal_LB_backend_services/exceeded
Number of backend services per passthrough Network Load Balancer
1
This limit cannot be changed.
Number of named ports per passthrough Network Load Balancer backend service
0
This limit cannot be changed. The portName field on the
backend service is ignored for passthrough Network Load Balancers.
Maximum number of configured primary or configured failover backends
(instances in instance groups or endpoints in GCE_VM_IP NEGs)
on an internal passthrough Network Load Balancer backend service
Without backend subsetting: 250
With backend subsetting enabled: 2000
These limits cannot be increased.
For example, if a backend service has five primary backend instance
groups, each group containing 60 VM instances, the load balancer has
300 configured primary backends (5 × 60). The load balancer
selects eligible backends from 250 of the 300 configured backends
when backend subsetting is turned off.
Configuring more than 250 backends means some backends won't ever
be eligible backends, and thus won't receive new connections.
Cloud Service Mesh
Cloud Service Mesh backend services
Quota
Backend services for
Cloud Service Mesh .
Quota name:
GLOBAL_INTERNAL_TRAFFIC_DIRECTOR_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/global_internal_traffic_director_backend_services/limit
compute.googleapis.com/quota/global_internal_traffic_director_backend_services/usage
compute.googleapis.com/quota/global_internal_traffic_director_backend_services/exceeded
Cloud Service Mesh backend services
Quota
Backend services for
Cloud Service Mesh .
Quota name:
REGIONAL_INTERNAL_TRAFFIC_DIRECTOR_BACKEND_SERVICES
Available metrics:
compute.googleapis.com/quota/regional_internal_traffic_director_backend_services/limit
compute.googleapis.com/quota/regional_internal_traffic_director_backend_services/usage
compute.googleapis.com/quota/regional_internal_traffic_director_backend_services/exceeded
Forwarding rules
To monitor forwarding rule quotas using Cloud Monitoring, set up monitoring
for the serviceruntime.googleapis.com/quota/allocation/usage metric on the
Consumer Quota resource type. Set additional label filters ( service ,
quota_metric ) to get to the quota type. For information about how to monitor
quota usage metrics, see
Chart and monitor quota metrics .
Item
Quotas and limits
Notes
External Application Load Balancers and External proxy Network Load Balancers
Classic Application Load Balancer and Classic proxy Network Load Balancer
forwarding rules
Quota
This is a per-project quota defining the maximum number of forwarding
rules for
classic Application Load Balancers and
classic proxy Network Load Balancers . If
your project contains
Classic VPN gateways , the forwarding rules for
those gateways also count against this quota's usage.
Quota name: FORWARDING_RULES
Available metrics:
compute.googleapis.com/quota/forwarding_rules/limit
compute.googleapis.com/quota/forwarding_rules/usage
compute.googleapis.com/quota/forwarding_rules/exceeded
Global external Application Load Balancer and Global external proxy Network Load Balancer
forwarding rules
Quota
This is a per-project quota defining the maximum number of forwarding
rules for
global external Application Load Balancers and
global external proxy Network Load Balancers .
Quota name: GLOBAL_EXTERNAL_MANAGED_FORWARDING_RULES
Available metrics:
compute.googleapis.com/quota/global_external_managed_forwarding_rules/limit
compute.googleapis.com/quota/global_external_managed_forwarding_rules/usage
compute.googleapis.com/quota/global_external_managed_forwarding_rules/exceeded
Regional external Application Load Balancer and Regional external proxy Network Load Balancer
forwarding rules per region per network
Quota
This is a per-region and per-network quota defining the maximum
number of forwarding rules for
regional external Application Load Balancers and
global external proxy Network Load Balancers
whose backends are located in a region of a VPC network.
Quota name: REGIONAL_EXTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/regional_external_managed_forwarding_rules_per_region_per_vpc_network/limit
compute.googleapis.com/quota/regional_external_managed_forwarding_rules_per_region_per_vpc_network/usage
compute.googleapis.com/quota/regional_external_managed_forwarding_rules_per_region_per_vpc_network/exceeded
Internal Application Load Balancers and Internal proxy Network Load Balancers
Cross-region internal Application Load Balancer and Cross-region internal proxy Network Load Balancer
forwarding rules per region per network
Quota
This is a per-region and per-network quota defining the maximum
number of forwarding rules for
cross-region internal Application Load Balancers and
cross-region internal proxy Network Load Balancers that you can create in a region of a
VPC network.
Quota name:
GLOBAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/global_internal_managed_forwarding_rules_per_region_per_vpc_network/limit
compute.googleapis.com/quota/global_internal_managed_forwarding_rules_per_region_per_vpc_network/usage
compute.googleapis.com/quota/global_internal_managed_forwarding_rules_per_region_per_vpc_network/exceeded
Regional internal Application Load Balancer and Regional internal proxy Network Load Balancer
forwarding rules per region per network
Quota
This is a per-region and per-network quota defining the maximum
number of forwarding rules for
regional internal Application Load Balancers and
regional internal proxy Network Load Balancers that you can create in a region of a
VPC network.
Quota name:
REGIONAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/regional_internal_managed_forwarding_rules_per_region_per_vpc_network/limit
compute.googleapis.com/quota/regional_internal_managed_forwarding_rules_per_region_per_vpc_network/usage
compute.googleapis.com/quota/regional_internal_managed_forwarding_rules_per_region_per_vpc_network/exceeded
Passthrough Network Load Balancers
External passthrough Network Load Balancer forwarding rules
Quota
This is a per-region and per-project quota defining the maximum
number of forwarding rules for
external passthrough Network Load Balancers (both backend
service and target pool architectures).
Quota name: EXTERNAL_NETWORK_LB_FORWARDING_RULES
Available metrics:
compute.googleapis.com/quota/external_network_lb_forwarding_rules/limit
compute.googleapis.com/quota/external_network_lb_forwarding_rules/usage
compute.googleapis.com/quota/external_network_lb_forwarding_rules/exceeded
Internal passthrough Network Load Balancer forwarding rules per network
Quota
This is a per-network quota defining the maximum number of forwarding
rules for internal passthrough Network Load Balancers that
you can create, in aggregate, in all regions of a VPC
network .
Quota name: INTERNAL_FORWARDING_RULES_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/internal_lb_forwarding_rules_per_vpc_network/limit
compute.googleapis.com/quota/internal_lb_forwarding_rules_per_vpc_network/usage
compute.googleapis.com/quota/internal_lb_forwarding_rules_per_vpc_network/exceeded
Number of discrete ports per forwarding rule for internal passthrough Network Load Balancers and
backend service-based external passthrough Network Load Balancers
5
This is a limit, and it cannot be changed. Alternative port
specification options are possible:
You can specify a single range of contiguous ports on forwarding
rules for backend service-based external passthrough Network Load Balancers and target pool-based
external passthrough Network Load Balancers. The range can include more than five ports.
You can specify all ports on forwarding rules for backend
service-based external passthrough Network Load Balancers and internal passthrough Network Load Balancers.
Number of forwarding rules that can reference the same backend service
for a pass-through load balancer
No separate limit
Subject to other quotas and limits, multiple forwarding rules can
reference the same backend service for a pass-through load balancer.
Number of pass-through load balancer backend services that can be
referenced by a single forwarding rule
1
Forwarding rules for pass-through load balancers must reference exactly
one backend service.
Maximum number of internal forwarding rules that can share a single
internal IP address
10
This limit is only applicable to internal passthrough Network Load Balancers and
internal proxy Network Load Balancers. This limit cannot be increased.
Maximum number of source IP address ranges per steering forwarding
rule
64
This limit is only applicable to external passthrough Network Load Balancers. This limit cannot be
increased.
Protocol forwarding (target instances)
External protocol forwarding rules
Quota
This is a per-region and per-project quota defining the maximu
number of external
protocol forwarding rules.
Quota name: EXTERNAL_PROTOCOL_FORWARDING_RULES
Available metrics:
compute.googleapis.com/quota/external_protocol_forwarding_rules/limit
compute.googleapis.com/quota/external_protocol_forwarding_rules/usage
compute.googleapis.com/quota/external_protocol_forwarding_rules/exceeded
Internal protocol forwarding rules per network
Quota
This is a per-network quota defining the maximum number of forwarding
rules for internal
protocol forwarding
that you can create, in aggregate, in all regions of a
VPC network .
Quota name:
INTERNAL_FORWARDING_RULES_WITH_TARGET_INSTANCE_PER_NETWORK
Available metrics:
compute.googleapis.com/quota/internal_protocol_forwarding_rules_per_vpc_network/limit
compute.googleapis.com/quota/internal_protocol_forwarding_rules_per_vpc_network/usage
compute.googleapis.com/quota/internal_protocol_forwarding_rules_per_vpc_network/exceeded
Cloud Service Mesh
Cloud Service Mesh forwarding rules
Quota
Forwarding rules for
Cloud Service Mesh .
Quota name:
INTERNAL_TRAFFIC_DIRECTOR_FORWARDING_RULES
Available metrics:
compute.googleapis.com/quota/internal_traffic_director_forwarding_rules/limit
compute.googleapis.com/quota/internal_traffic_director_forwarding_rules/usage
compute.googleapis.com/quota/internal_traffic_director_forwarding_rules/exceeded
Target proxies
Item
Quotas and limits
Notes
Target HTTP proxies
Quota
This quota is per project.
Target HTTPS proxies
Quota
This quota is per project.
Target SSL proxies
Quota
This quota is per project.
Target TCP proxies
Quota
This quota is per project.
SSL policies per target HTTPS or target SSL proxy
1
This limit cannot be increased.
Compute Engine SSL certificates per target proxy
15
These limits cannot be increased. For more information, see
Certificate
configuration methods in the SSL certificates overview.
Certificate Manager certificate maps per target proxy
1
Certificate Manager certificates per target proxy
100
TLS routes
Item
Quotas and limits
Notes
Global TLS routes
Quota
This is a per-project quota covering all global TLS routes.
Regional TLS routes
Quota
This is a per-project, per-region quota covering all regional TLS
routes.
Maximum number of SNI hostnames per TLS route
Limit: 16
This limit cannot be increased.
Maximum number of SNI hostnames that can reference the same target proxy
(across all TLS routes)
Limit: 1000
This limit cannot be increased.
Health checks
Item
Quotas and limits
Notes
Health checks
Quota
This is a per-project quota covering all health check types (global,
regional, and legacy).
URL maps
The limits documented here cannot be increased.
Item
External Application Load Balancer
Internal Application Load Balancer
URL maps
Quota
This quota is per project.
Quota
This quota is per project.
Host rules, path matchers per URL map
Limit: 1000
Limit: 2000
Path rules or route rules per path matcher
Limit: 1000
Limit: 1000
Hosts per host rule
Limit: 1000
Limit: 1000
Predicates per path matcher *
Limit: 1000
Limit: 1000
pathTemplateMatch predicates per path matcher
Global external Application Load Balancers and regional external Application Load Balancers:
Limit: 100
Not supported for classic Application Load Balancers
Limit: 100
Number of distinct backend services or backend buckets that
can be referenced by a URL map
Limit: 2500
Limit: 2500
Maximum number of regular expressions per path matcher
For regional external Application Load Balancers: 5
Global external Application Load Balancers don't support regular expressions.
5
Maximum number of characters in a regular expression
For regional external Application Load Balancers: 250
Global external Application Load Balancers don't support regular expressions.
Limit: 250
URL map limits relevant to
cross-project service
referencing :
A URL map can reference backend services in a maximum of 1000
distinct projects.
This limit doesn't apply to global external Application Load Balancers.
For global external Application Load Balancers, the standard limit of 2500 distinct backend
services or backend buckets applies.
URL maps from a maximum of 10 distinct projects can reference a
particular backend service.
Size of URL maps
Limit: 64 KB
Limit: 128 KB
Number of URL map tests
Classic Application Load Balancer:
Limit: 10000
N/A
Internal Application Load Balancers don't support URL map tests.
Global external Application Load Balancer and Regional external Application Load Balancer:
Limit: 100
* This is a limit on the count of match conditions across all
rules in the path matcher. For path matchers with path rules, this is the total
number of paths across all path rules. For path matchers with route rules, the
prefix count is calculated by adding the following:
1 for the path match condition (one of prefixMatch or fullPathMatch)
the sum of header matches in all route rules of the path matcher
the sum of query parameter matches in all route rules of the path
matcher
For example, for a path matcher with the following route rules:
Route rule A having one prefixMatch and three header matches
Route rule B having one fullPathMatch and two query parameter
matches
The total count of predicates for this path matcher would be 7. This is
calculated as follows: 1 (for the prefixMatch) + 3 (for the
number of header matches) + 1 (for the fullPathMatch) + 2 (for the number of
query parameter matches).
Header size for Application Load Balancers
Item
Quotas and limits
Notes
Maximum client request header size for global external Application Load Balancers
60 KiB
This limit cannot be increased.
The combined size of the request URL and request header must be less than
or equal to 60 KiB. Of this 60 KiB limit, Google Cloud might use up to
6 KiB for internal headers.
Maximum client request header size for classic Application Load Balancers
64 KiB
This limit cannot be increased.
The combined size of the request URL and request header must be less than
or equal to 64 KiB. Of this 64 KiB limit, Google Cloud might use up to
6 KiB for internal headers.
Maximum backend response header size for external Application Load Balancers
About 128 KB (kilobytes)
This limit cannot be increased.
Maximum backend request header size for internal Application Load Balancers
60 KB (kilobytes)
This limit cannot be increased.
Lowercase conversion of HTTP request and response headers
Always, except for Classic Application Load Balancer when using HTTP/1.1
As examples, Host
becomes host , and Keep-ALIVE becomes
keep-alive .
Maximum number of configured
custom
request headers for each backend service
16
This limit cannot be increased.
Maximum number of configured
custom
response headers for each backend service
16
This limit cannot be increased.
Total size of all custom request headers per backend service
(name and value combined, before variable expansion)
8 KB
This limit cannot be increased.
Total size of all custom response headers per backend service
(name and value combined, before variable expansion)
8 KB
This limit cannot be increased.
Queries per second for Application Load Balancers
Item
Quotas and limits
Notes
Queries per second (QPS) per backend instance group or NEG for
global external Application Load Balancers
Configurable when using RATE for the balancing mode.
Limited by your backends.
Queries per second (QPS) per region per network for
regional external Application Load Balancers
For regional external Application Load Balancers, the maximum QPS load
depends on the size of the requests and the complexity of the configuration.
If load exceeds capacity, latency increases and requests might be dropped.
Limited by your backends 1 and by regional proxy capacity 2
Contact support if you need to increase
this limit.
Queries per second (QPS) per region per network for
internal Application Load Balancers
For internal Application Load Balancers, the maximum QPS load depends
on the size of the requests and the complexity of the configuration. If
load exceeds capacity, latency increases and requests might be
dropped.
Limited by your backends 1 and by regional proxy capacity 2
Contact support if you need to increase
this limit.
1 For projects that are using serverless NEGs, the limit is 5000
queries per second (QPS) per project for traffic sent to any serverless NEGs
configured with regional external Application Load Balancers or
regional internal Application Load Balancers. This limit is aggregated across all
regional external Application Load Balancers and regional internal Application Load Balancers in a project and region.
This is not a per load balancer limit. Contact support
if you need to increase this limit.
2 Regional proxy is based on an automatically scaled proxy pool
that gradually adds proxies with traffic growth. If you expect traffic to burst
beyond 100k QPS and you want to pre-warm the proxy pool,
contact support .
Service load balancing policy
Item
Quotas and limits
Notes
ServiceLbPolicies
Quota
This quota is per project and applies to classic Application Load Balancers and
global external Application Load Balancers.
Compute Engine SSL certificates
Note: To learn about quotas and limits for Certificate Manager
SSL certificates, see Resource quotas and limits in the
Certificate Manager documentation.
Item
Quotas and limits
Notes
SSL certificates
Quota
This quota is per project.
Supported key types for global self-managed SSL certificates
RSA-2048
ECDSA P-256
Supported key type for global publicly trusted Google-managed certificates
RSA-2048
Supported key types for regional self-managed SSL certificates
RSA-2048
RSA-3072
RSA-4096
ECDSA P-256
ECDSA P-384
Multiple domains per Google-managed SSL certificate
100
This limit cannot be increased.
Domain name length for Google-managed certificates
64 bytes
This limit cannot be increased.
This length limit only applies to Google-managed SSL certificates. In
those certificates, the 64-byte limit only applies to the first domain
in the certificate. The length limit for the other domains in the
certificate is 253, which applies to any domain name on the internet,
and isn't specific to Google-managed certificates.
SSL policies
Item
Quotas and limits
Notes
Global SSL policies
Quota
This quota is per project. This quota is used by:
Global target HTTPS proxies for:
Global external Application Load Balancers
Classic Application Load Balancers
Cross-region internal Application Load Balancers
Global target SSL proxies for:
Global external proxy Network Load Balancers
Classic proxy Network Load Balancers
Regional SSL policies
Quota
This quota is per region, per project. This quota is used by:
Regional target HTTPS proxies for:
Regional external Application Load Balancers
Regional internal Application Load Balancers
Authorization policy
The limits documented here can't be increased except for the limits related to
the number of authorization policies. These limits apply to
Application Load Balancers.
Item
Quotas and limits
Notes
Number of authorization policies
Limit: Quota for
global external Application Load Balancers, Quota for cross-region internal Application Load Balancers, Quota per region
for regional internal Application Load Balancers and Quota per region for regional external Application Load Balancers, and
Quota per region for Cloud Service Mesh
This quota is per project.
Number of forwarding rules an authorization policy can point to
Limit: 50
This quota is per authorization policy.
Number of authorization policies per forwarding rule
Limit: 5
This quota is per forwarding rule.
Number of HTTP rules per authorization policy
Limit: 5
This quota is per authorization policy.
Number of request sources ( sources or notSources ) per HTTP rule
Limit: 1
This quota is per HTTP rule.
Number of principals per authorization policy
Limit: 25 for
global external Application Load Balancers, 50 for cross-region internal Application Load Balancers, regional internal Application Load Balancers and regional external Application Load Balancers, and Cloud Service Mesh
This quota is per authorization policy.
Number of IP blocks per authorization policy
Limit: 10
This quota is per authorization policy.
Number of resources per authorization policy
Limit: 10
This quota is per authorization policy.
Number of request operations ( operations or notOperations ) per HTTP rule
Limit: 1
This quota is per HTTP rule.
Number of headers per authorization policy
Limit: 10
This quota is per authorization policy.
Number of hosts per authorization policy
Limit: 10
This quota is per authorization policy.
Number of methods per authorization policy
Limit: 10
This quota is per authorization policy.
Number of paths per authorization policy
Limit: 10
This quota is per authorization policy.
Number of authorization extension resources per authorization policy
Limit: 1
This quota is per authorization policy.
Server TLS policy
Item
Quotas and limits
Notes
Global server TLS policy
Quota
This quota is per project and applies to classic Application Load Balancers,
global external Application Load Balancers, and cross-region internal Application Load Balancers.
Regional server TLS policy
Quota
This quota is per region per project and applies to
regional external Application Load Balancers and regional internal Application Load Balancers.
Trust config
The limits documented here cannot be increased and apply to
classic Application Load Balancers and global external Application Load Balancers.
Item
Quotas and limits
Notes
Number of trust stores
Limit: 1
This limit is per TrustConfig resource.
Combined number of trust anchors and intermediate certificates
Limit: 200
This limit is per trust store.
Number of intermediate certificates
Limit: 100
This limit is per trust store.
Number of name constraints allowed during validation of root and
intermediate certificates
Limit: 10
Intermediate certificates that
share the same Subject and Subject Public Key information
Limit: 10
This limit is per trust store.
Certificate chain depth
Limit: 10
The maximum depth for a certificate chain, including the root
and client certificates.
Number of times intermediate certificates can be
evaluated when attempting to build the chain of trust
Limit: 100
Supported key types
RSA-2048
RSA-3072
RSA-4096
ECDSA P-256
ECDSA P-384
Number of certificates in allowlist (`allowlistedCertificates`)
Limit: 500
Public delegated prefix limits
The limits documented here apply to external passthrough Network Load Balancers.
Item
Quotas and limits
Notes
Public delegated prefix with variable prefix length
Quota
This quota is per project. This is a quota for the number of
public delegated prefixes (PDPs) whose allocatable_prefix_length
is different from /96 , including the ones that default to
/64 .
Customers get a default quota of 40.
Deprecated quotas
Google Cloud no longer enforces the following quotas:
EXTERNAL_MANAGED_FORWARDING_RULES :
The REGIONAL_EXTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
in each region of a VPC network is the replacement quota.
INTERNAL_MANAGED_FORWARDING_RULES_PER_NETWORK :
Each region of a VPC network uses the following replacement
quotas:
GLOBAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
REGIONAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
INTERNAL_MANAGED_FORWARDING_RULES_PEERING_GROUP :
There's no replacement quota. Instead, Google Cloud enforces the
following quotas in each region of each VPC network:
GLOBAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
REGIONAL_INTERNAL_MANAGED_FORWARDING_RULES_PER_REGION_PER_NETWORK
INTERNAL_FORWARDING_RULES_PER_PEERING_GROUP :
There's no replacement quota. Instead, Google Cloud enforces the
INTERNAL_FORWARDING_RULES_PER_NETWORK quota
in each VPC network.
INTERNAL_FORWARDING_RULES_WITH_TARGET_INSTANCE_PER_PEERING_GROUP :
There's no replacement quota. Instead, Google Cloud enforces the
INTERNAL_FORWARDING_RULES_WITH_TARGET_INSTANCE_PER_NETWORK
quota in each VPC network.
Manage quotas
Cloud Load Balancing enforces quotas on resource usage for various reasons.
For example, quotas protect the community of users by
preventing unforeseen spikes in usage. Quotas also help users who are exploring
with the
free tier
to stay within their trial.
All projects start with the same quotas, which you can change by
requesting additional quota . Some quotas might increase
automatically based on your use of a product.
Permissions
To view quotas or request quota increases, Identity and Access Management (IAM) principals need one of the
following roles.
Task
Required role
Check quotas for a project
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Viewer ( roles/servicemanagement.quotaViewer )
Modify quotas, request additional quota
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Administrator ( roles/servicemanagement.quotaAdmin )
A custom role with the serviceusage.quotas.update permission
Check your quota
Console gcloud
More
In the Google Cloud console, go to the Quotas page.
Go to Quotas
To search for the quota that you want to update, use the Filter table .
If you don't know the name of the quota, use the links on this page instead.
Using the Google Cloud CLI, run the following command to
check your quotas. Replace PROJECT_ID with your own project ID.
gcloud compute project-info describe --project PROJECT_ID
To check your used quota in a region, run the following command:
gcloud compute regions describe example-region
Errors when exceeding your quota
If you exceed a quota with a gcloud command,
gcloud outputs a quota exceeded error
message and returns with the exit code 1 .
If you exceed a quota with an API request, Google Cloud returns the
following HTTP status code: 413 Request Entity Too Large .
Request additional quota
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Resource availability
Each quota represents a maximum number for a particular type of resource that you can create,
if that resource is available. It's important to note that quotas don't
guarantee resource availability. Even if you have available quota, you can't create
a new resource if it is not available.
For example, you might have sufficient quota to create a new regional, external IP address
in a given region. However, that is not possible if there are no
available external IP addresses in that region. Zonal resource
availability can also affect your ability to create a new resource.
Situations where resources are unavailable in an entire region are rare. However, resources
within a zone can be depleted from time to time, typically without impact to the service level
agreement (SLA) for the type of resource. For more information, review the relevant SLA for the
resource.
Related information
Virtual Private Cloud (VPC) resource quotas
Compute Engine resource quotas
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
