---
title: "Enable connection draining \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining
  title: "Enable connection draining \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Enable connection draining
Stay organized with collections
Save and categorize content based on your preferences.
Note: This page describes how to configure a specific load balancer component or
feature before or after you've already created a load balancer. Working with
specific components is useful for advanced configurations and necessary for some
configuration options. Before using the information on this page, know the type
of Google Cloud load balancer
that you need.
Connection draining is a process that ensures that existing, in-progress
requests are given time to complete when a virtual machine (VM) instance is
removed from an instance group or when an endpoint is removed from network
endpoint groups (NEGs) that are zonal in scope.
The information on this page applies only to instance groups and the
following types of NEGs that are zonal in scope:
Zonal NEG
Hybrid connectivity NEG
Connection draining begins whenever you do the following:
You manually remove a VM from an instance
group .
You remove an instance from a managed instance group by performing a
resize() ,
deleteInstances() ,
recreateInstances() ,
or abandonInstances()
call.
You remove a Dynamic NIC from a VM that is part of an instance
group backend.
You remove an instance group or NEG from a backend
service . This
isn't supported for internal passthrough Network Load Balancers and regional external passthrough Network Load Balancers.
Google Cloud deletes an instance as part of
autoscaling .
You perform an update to the managed instance group using the
Managed Instance Group Updater .
You manually remove an endpoint from a zonal
NEG .
Connection draining doesn't apply when you disconnect a backend (instance group
or zonal NEG) from a load balancer's backend service.
How connection draining works
To enable connection draining, you set a connection draining timeout on the
backend service. The timeout duration must be from 0 to 3600 seconds, inclusive.
It can take up to 60 seconds after your specified timeout duration has passed
for the instance to be terminated.
The following is a list of specifications about connection draining:
Connection draining is available for backend services that are part of the
following load balancers:
External Application Load Balancer
Internal Application Load Balancer
External proxy Network Load Balancer
Internal proxy Network Load Balancer
Internal passthrough Network Load Balancer
Backend service-based Regional external passthrough Network Load Balancer
Both internal passthrough Network Load Balancers and regional external passthrough Network Load Balancers support connection draining for TCP,
UDP, and other non-TCP protocols.
Connection draining is also available for backend services that are part of
Cloud Service Mesh deployments.
When a connection draining timeout is set, and an instance is removed from the
instance group or an endpoint is removed from a zonal NEG,
Google Cloud load balancers and Cloud Service Mesh behave in the
following way:
No new connections are sent to the removed instance or endpoint.
Application Load Balancers : For the specified duration of the timeout,
existing requests to the VM or endpoint marked for removal are given time
to complete. The load balancer doesn't send new connections to this VM or
endpoint. After the timeout duration is reached, the load balancer stops
sending all traffic to the removed VM or endpoint.
Proxy Network Load Balancers : For the specified duration of the timeout,
existing TCP connections to the VM or endpoint marked for removal
continue to work during the configured connection draining period. The load
balancer doesn't send new connections to this VM or endpoint. After the
timeout duration is reached, existing TCP connections to the removed VM or
endpoint remain active and the proxy closes all existing TCP connections
within 10 minutes, the default idle timeout.
passthrough Network Load Balancers : For the specified duration of the connection draining
timeout, packets belonging to existing connections are routed to the VM or
endpoint marked for removal. After the timeout duration is reached, the
conntrack entry for the removed VM or endpoint is removed. Any non-SYN
packet from an existing connection leads to the creation of a new conntrack
entry for the healthy backend. When the packet goes to a new healthy
backend, the backend sends a RST to the client as it doesn't have any record
of the packet it has just received. The internal and regional external passthrough Network Load Balancers
themselves don't send a TCP-RST or TCP-FIN to end existing connections after
the connection draining timeout expires.
If you enable connection draining on multiple backend services that share the
same instance groups or NEGs, the largest timeout value is used. For example,
suppose that the same instance group or zonal NEG is a backend for two backend
services, where one backend service has a connection draining timeout of 100
seconds, and the other backend service has a connection draining timeout of
200 seconds. Google Cloud uses 200 seconds as the effective connection
draining timeout before terminating them. If the backend is a managed instance
group, operations that delete the instance are delayed by at least 200
seconds.
If you don't set a connection draining timeout, or if the connection draining
timeout is set to zero (0), Google Cloud ends existing connections on
the removed instance or endpoint as quickly as possible.
If you're using connection pooling, you might see that new requests, using
a previously established connection, are still being received on VMs that
are getting drained, causing connection errors when those VMs are eventually
deleted.
Enable connection draining
To enable connection draining, complete the following steps.
Console
Update a load balancer
Go to the Load balancing page in the Google Cloud console.
Go to Load balancing
On the Load Balancers tab, for the load balancer that you'd like to
update, click more_vert ,
and then click Edit edit .
Click Backend configuration .
In the Backend configuration pane, click
edit .
At the bottom of the Edit backend service pane, click
Advanced configurations .
In the Connection draining timeout field, enter a value from
0 - 3600 . A setting of 0 disables connection draining.
Update Cloud Service Mesh
Go to the Cloud Service Mesh page in the Google Cloud console.
Go to Cloud Service Mesh
Click the Name of your service.
On the Service details page, click
Edit edit .
At the bottom of your service, click Advanced configurations .
In the Connection draining timeout field, enter a value from
0 - 3600 . A setting of 0 disables connection draining.
Click Save .
gcloud
Enable connection draining on a new or existing backend service by using
the --connection-draining-timeout flag. The following examples demonstrate
how to change the connection draining timeout:
For an existing global or cross-region load
balancer :
gcloud compute backend-services update BACKEND_SERVICE \
--global \
--connection-draining-timeout= CONNECTION_TIMEOUT_SECS
For an existing regional load
balancer :
gcloud compute backend-services update BACKEND_SERVICE \
--region= REGION \
--connection-draining-timeout= CONNECTION_TIMEOUT_SECS
Replace the placeholders with valid values:
BACKEND_SERVICE : the backend service that you're
updating
REGION : if applicable, the region of the backend
service that you're updating
CONNECTION_TIMEOUT_SECS : the number of seconds to
wait before existing connections to instances or endpoints are terminated,
between 0 - 3600 seconds, inclusive. A setting of 0 disables
connection draining. The connection draining timeout applies to all
backends of the backend service.
You can also use the gcloud compute backend-services edit command to
update an existing backend service.
API
To enable connection draining in the API when creating or updating an
instance or endpoint, make a request to the respective API URI to include
the connectionDraining field in your request body. The following examples
demonstrate how to set that attribute by editing an existing backend
service. For information about other required
attributes, see the documentation for each load balancer.
For an existing global or cross-region load
balancer :
PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices
Note: Classic Application Load Balancers and classic proxy Network Load Balancers always
use global backend services, even when backends are in only one
region because the load balancer is set to use the Standard Network Tier.
For an existing regional load
balancer :
PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /region/ REGION /backendServices
{
"name": " BACKEND_SERVICE ",
"connectionDraining": {
"drainingTimeoutSec": CONNECTION_TIMEOUT_SECS
}
}
Replace the following:
PROJECT_ID : the project ID that contains
your load balancer or Cloud Service Mesh deployment
BACKEND_SERVICE : the backend service
used by your load balancer or Cloud Service Mesh deployment
CONNECTION_TIMEOUT_SECS : the number of
seconds to wait before instances or endpoints are removed from the
instance group or NEG, between 0 to 3600 seconds, inclusive. This
timeout duration applies to all instance groups or NEGs that are
referenced by the backend service.
What's next
For general information on backend services, see Backend
services overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
