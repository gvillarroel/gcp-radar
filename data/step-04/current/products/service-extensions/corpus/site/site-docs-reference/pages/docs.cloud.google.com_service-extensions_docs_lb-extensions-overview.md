---
title: "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/plugins-overview
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview
  title: "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Cloud Load Balancing and Cloud CDN extensions overview
Stay organized with collections
Save and categorize content based on your preferences.
Service Extensions lets you use extensions to instruct
supported Application Load Balancers
to use plugins or send callouts from the load balancing data path to callout
backend services or Google services. This page provides an overview about
Cloud Load Balancing extensions.
You can configure Application Load Balancers to use the following types of
extensions:
Edge extensions help you manipulate request headers to influence backend
service selection and the content that Cloud CDN serves from cache. These
extensions are configured to run early in the request processing lifecycle
to influence caching and routing decisions, respectively, at the edge.
Route extensions help you influence backend service selection. These
extensions are configured to run early in the request processing lifecycle.
Authorization extensions help you send authorization requests to your custom
authorization engine. You configure these at the end of the processing cycle
just before the load balancer sends requests to backends.
Traffic extensions help support additional custom security logic and traffic
management capabilities. You configure these after authorization extensions
but before the load balancer sends requests to backends or receives responses
from them.
Supported Application Load Balancers for user-managed extensions
Service Extensions supports user-managed extensions for the
following Application Load Balancers :
Application Load Balancers
Extensions
Edge
Route
Authorization
Traffic
Plugins
Plugins
Callouts
Callouts
Plugins
Callouts
Global external Application Load Balancer
✓
✓
✓
✓
Regional external Application Load Balancer
✓ Preview
✓
✓
✓ Preview
✓
Regional internal Application Load Balancer
✓ Preview
✓
✓
✓ Preview
✓
Cross-region internal Application Load Balancer
✓
✓
✓
✓
✓
Note: Extensions aren't supported on classic Application Load Balancers.
Extensibility points in the load balancing data path
Service Extensions supports extensions in different
stages of the load balancing data path.
Figure 1 shows how Service Extensions supports extensions
in the application security and traffic management stages for global external Application Load Balancers.
Figure 1. Global external Application Load Balancers support
extensions at the edge routing, application security, and traffic management stages (click to enlarge).
Figure 2 shows how Service Extensions supports extensions
in the routing, application security, and traffic management stages for these
types of load balancers: Regional external Application Load Balancer,
Regional internal Application Load Balancer, and Cross-region internal Application Load Balancer.
Figure 2. Regional external Application Load Balancers, regional internal Application Load Balancers,
and cross-region internal Application Load Balancers support extensions at the routing and
traffic management stages (click to enlarge).
How edge extensions work
Edge extensions run first on the request processing path and let you use
request headers to influence backend service selection and the content that
Cloud CDN serves from cache.
Note: Load balancers call edge extensions only during request processing and
only for request headers.
After a load balancer calls an edge extension, it does the following:
Selects the backend service by evaluating the URL map
Applies Google Cloud Armor policies
security policies
Does a cache lookup and serves from cache if there is a cache hit
Applies Cloud Armor policies for the selected backend service
Applies CORS policies
Applies the stateful session affinity policy
Applies Identity-Aware Proxy (IAP) policies
for the selected backend service
Calls authorization extensions, if any are configured in the processing
path of the selected backend service
Performs fault injection
Calls traffic extensions, if any
Performs URL rewrites
Performs header manipulation according to the URL map and adds custom
request header variables
Performs redirects or routing to the selected backend service while applying
timeouts and retry policies in the URL map and the load balancing settings
for the backend service
Performs request mirroring
How authorization extensions work
On the request path, authorization extensions are called after route
extensions are called and a backend for the request has been selected.
These extensions cannot influence the backend service selection.
Authorization extensions can process only request headers and not request bodies
or any part of responses.
How route extensions work
Route extensions run first in the request processing path when the load
balancer receives request headers and before it evaluates the
URL map .
Note: Load balancers invoke route extensions only during request processing and
only for request headers.
After a load balancer calls a route extension for a request, it
does the following:
Selects the backend service by evaluating the URL map
Applies Cloud Armor policies for the selected backend service
Applies IAP policies for the selected backend service
Performs fault injection
Performs request header transformations and resolves custom request header
variables
Calls traffic extensions, if they exist in the processing path of
the selected backend service
Performs URL rewrites
Performs redirects or routing to the selected backend service and applies
timeouts and retry policies in the URL map and other load balancing settings
for the backend service
How traffic extensions work
Load balancers run traffic extensions last in the request processing
path and first in the response processing path.
These extensions let you modify the headers and payloads of both requests
and responses without impacting the choice of the backend service. You can also
use traffic extensions for custom logging by specifying the information that you
want to log, the format, and the external provider.
Before a load balancer calls a traffic extension on the request path
for a request, it does the following:
Performs fault injection
Selects a backend service for the request
Applies Cloud Armor policies for the selected backend service
Applies IAP policies for the selected backend service
Applies Cloud CDN caching policies for the selected
backend service in the case of global external Application Load Balancers
After a load balancer calls a traffic extension on the request path
for a request, it does the following:
Performs URL rewrites
Performs header manipulation according to the URL map and adds custom
request header variables
Performs redirects or routing to the selected backend service while applying
timeouts and retry policies in the URL map and the load balancing settings
for the backend service
Performs request mirroring
After a load balancer calls a traffic extension on the response path
for a request, it does the following:
Performs response header transformations and resolves custom response
header variables
Performs logging by using Cloud Logging
Performs Cloud CDN caching in the case of global external Application Load Balancers
Custom headers
In the traffic path, edge and route extensions run at extensibility points
before the stage at which the load balancer adds
custom headers . As such,
the headers that the edge and route extensions receive don't contain the
custom headers that the load balancer adds.
To make information that you might usually put in custom headers available to
edge and route extensions, consider using a
supported attribute instead.
Limitations for extensions
A forwarding rule can have only one LbEdgeExtension resource, one
LbTrafficExtension resource, and one LbRouteExtension resource.
For callouts, the callout backend service must be in the same project
as the forwarding rule.
Cross-project referencing between extensions and forwarding rules
isn't supported.
What's next
Plugins overview
Cloud Load Balancing callouts overview
Integration with Google services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
