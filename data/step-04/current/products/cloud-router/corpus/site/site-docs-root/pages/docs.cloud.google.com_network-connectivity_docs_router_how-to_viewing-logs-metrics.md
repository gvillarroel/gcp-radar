---
title: "View logs and metrics \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-logs-metrics
  title: "View logs and metrics \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Router
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
View logs and metrics
Cloud Router sends logging information to Cloud Logging and sends
monitoring metrics to Cloud Monitoring. This page shows you how to access
both types of information.
Logs
Cloud Router sends logging information to
Cloud Logging , which logs the following events:
Router events related to your Cloud Router
BGP events related to a BGP configuration and session
Route events related to route announcements between the two BGP peers
View logs
Console
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
Select a Cloud Router from the list of Cloud Routers.
In the Logs column, click View .
Cloud Router logs have the following format:
[Event Type]: [Log Text]
Note: Some log entries refer to a Cloud Router's BGP router
ID . This ID is assigned to the Cloud Router based on the IP
address of one of its interfaces.
To build queries in the Logs Explorer, see
Build queries in the Logs Explorer .
Info log
The following table lists events that are logged in the Logging
Info log.
Event
Description
Router event
Router task activated
Router task de-activated
BGP event
Successfully added configuration for peers: LIST_OF_PEERS
BGP peering with PEER came up x seconds ago
BGP peering with PEER went down with the
reason MESSAGE , where MESSAGE
provides an explanation such as HOLD_TIMER_EXPIRED or
LINK_DOWN .
For more information about LINK_DOWN , see
LINK_DOWN message appears in Cloud Router logs .
BGP Router ID set to BGP_ROUTER_ID
Route event
Advertising prefix to peers: PREFIX
Withdrawing prefix from peers: PREFIX
Prefix PREFIX Nexthops LIST_OF_NEXTHOPS received
by Cloud Router
Prefix PREFIX Nexthops LIST_OF_NEXTHOPS deleted
from Cloud Router
Common Logging events
To view common Logging events for Cloud Router
as listed in the following table, use the
steps for viewing logs . Specify one of the
advanced filters listed in the table. Adjust the time
frame for the Logging search as needed.
Note: The Adding learned routes and Removing learned routes events
refer to routes that are received through BGP. They are unrelated to
custom learned routes .
Event description
Logging advanced filter
Migrating or restarting a Cloud Router process
resource.type="gce_router" "task activated"
Adding learned routes
resource.type="gce_router" "received by cloud router"
Removing learned routes
resource.type="gce_router" "deleted from cloud router"
Exporting advertised routes
resource.type="gce_router" ("Route Event" AND "Advertising prefix")
BGP peering came up
resource.type="gce_router" ("BGP peering" AND "came up")
BGP peering came up with MD5 authentication
resource.type="gce_router" ("BGP peering" AND "came up" AND "MD5 authentication enabled")
BGP peering went down
resource.type="gce_router" ("BGP peering" AND "went down")
BGP peering went down because the link went down on the Google peering edge router
resource.type="gce_router" ("BGP peering" AND "went down" AND "LINK_DOWN")
A BGP session was shut down due to excessive received routes
resource.type="gce_router" ("NOTIFICATION 6/1")
severity="CRITICAL"
A Cloud Router dynamic route prefix quota has been exceeded
resource.type="gce_network_region" ("No more routes" AND "can be programmed")
severity="ERROR"
A route was dropped because of a quota issue
resource.type="gce_network_region" severity="ERROR"
jsonPayload.affectedResource.routes.nextHopIpAddresses=" PEER_IP_ADDRESS "
A BFD session waiting for peer
resource.type="gce_router"
("BFD Event" AND "bfd enabled, state [Init, NoDiagnostic]")
A BFD session came up
resource.type="gce_router"
("BFD Event" AND "to [Up, NoDiagnostic]")
A BFD session went down (Rx Timer expired)
resource.type="gce_router"
("BFD Event" AND "to [Down, ControlDetectionTimeExpired]")
A BFD session went down (Peer's state is Down or AdminDown )
resource.type="gce_router"
("BFD Event" AND "to [Down, NeighborSessionDown]")
A BFD session is disabled locally
resource.type="gce_router"
("BFD Event" AND "bfd disabled")
Metrics
Cloud Router publishes metrics to Cloud Monitoring .
For a list of metrics published for Cloud Router,
see Monitor metrics for Cloud Router .
All Cloud Router metrics cover both IPv4 and IPv6 traffic.
View metrics by using the API
You can access these metrics by using the
Cloud Monitoring API. For more information,
see Read metric data .
View metrics by using Monitoring dashboards
You can also create a custom dashboard
in Cloud Monitoring to help you analyze these metrics.
For more information, see
Manage custom dashboards .
To create a custom dashboard, follow these steps.
Console
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
Select Dashboards , and then on the Dashboards Overview page, click
add Create dashboard .
Optional: Update the dashboard title with a descriptive name for your
dashboard.
In the Chart library , select the chart that you want to add. For example,
to add a Line chart to the dashboard, click or drag that entry
from the Chart library to the graph area.
In Chart Title , change the chart title or use the suggested title.
In What data do you want to view? , do the following:
In Resource type , click the Type to filter field, and enter
Cloud Router .
In Metric , add a Cloud Router metric.
Use the Filter controls to restrict the view to only certain routers
or sessions.
To add another metric, click Add another metric .
Some metrics are for the Cloud Router and some metrics are for a BGP
session on a given Cloud Router. Cloud Router metrics are
shown as router-name , while BGP session metrics are shown as
router-name(bgp-name) .
Monitoring metrics for Cloud Router
Note: Metrics that describe received routes or learned routes
reflect data about dynamically learned routes. They are unrelated to the
Custom learned routes
feature.
The "metric type" strings in this table must be prefixed
with router.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
best_received_routes_count
GA
(project)
Received routes count
GAUGE , INT64 , 1
gce_router
Current number of best routes received by router. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bfd/control/receive_intervals
GA
(project)
BFD control packets receive intervals
GAUGE , INT64 , ms
gce_router
BFD control packets receive intervals. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/received_packets_count
GA
(project)
Control packets received
DELTA , INT64 , 1
gce_router
Number of control packets received from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/rejected_packets_count
GA
(project)
Control packets rejected
DELTA , INT64 , 1
gce_router
Number of control packets rejected, from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/transmit_intervals
GA
(project)
BFD control packets transmit intervals
GAUGE , INT64 , ms
gce_router
BFD control packets transmit intervals. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/transmitted_packets_count
GA
(project)
Control packets transmitted
DELTA , INT64 , 1
gce_router
Number of control packets transmitted from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/session_flap_events_count
GA
(project)
BFD session flap
DELTA , INT64 , 1
gce_router
Number of each BFD flap event from this BFD session. A session flap event refers to the transition from Up state. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
event_type :
The reason for the BFD flap such as "AdminDown" or "ControlDetectionTimeExpired".
bfd/session_up
GA
(project)
BFD session status
GAUGE , INT64 , 1
gce_router
Indicator for successful BFD session establishment. 1 indicates the session is up. 0 indicates the session is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bgp/received_routes_count
GA
(project)
BGP received routes count
GAUGE , INT64 , 1
gce_router
Current number of routes received on a bgp session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp/sent_routes_count
GA
(project)
BGP sent routes count
GAUGE , INT64 , 1
gce_router
Current number of routes sent on a bgp session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp/session_up
GA
(project)
BGP session status
GAUGE , INT64 , 1
gce_router
Indicator for successful bgp session establishment. 1 indicates the session is up. 0 indicates the session is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp_sessions_down_count
GA
(project)
BGP sessions down count
GAUGE , INT64 , 1
gce_router
Number of BGP sessions on the router that are down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_sessions_up_count
GA
(project)
BGP sessions up count
GAUGE , INT64 , 1
gce_router
Number of BGP sessions on the router that are up. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
dynamic_routes/learned_routes/any_dropped_unique_destinations
BETA
(project)
Any unique destinations dropped
GAUGE , BOOL , 1
gce_network_region
A boolean metric of whether there are any unique destinations dropped in a network region due to exceeding quota. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/dropped_unique_destinations
BETA
(project)
Unique destinations dropped
GAUGE , INT64 , 1
gce_network_region
The number of unique destinations dropped in a network region due to exceeding quota. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/unique_destinations_limit
BETA
(project)
Unique destinations limit
GAUGE , INT64 , 1
gce_network_region
The maximum number of unique destinations allowed by route quota for this network region. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/used_unique_destinations
BETA
(project)
Unique destinations used
GAUGE , INT64 , 1
gce_network_region
Number of unique destinations used by learned routes for this network region. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
nat/allocated_ports
GA
(project)
Allocated ports
GAUGE , INT64 , {port}
nat_gateway
Number of ports allocated to all VMs by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
nat_ip :
NAT IP of the ports.
nat/closed_connections_count
GA
(project)
Closed connections count
DELTA , INT64 , {connection}
nat_gateway
Count of connections closed over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_received_packets_count
GA
(project)
Received packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of received packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_sent_packets_count
GA
(project)
Sent packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of sent packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
reason :
The reason for the packet drop. Possible values are OUT_OF_RESOURCES, ENDPOINT_INDEPENDENCE_CONFLICT.
nat/nat_allocation_failed
GA
(project)
NAT allocation failed
GAUGE , BOOL ,
nat_gateway
Indicates if there is a failure in allocating NAT IPs to any VM in the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
nat/new_connections_count
GA
(project)
New connections count
DELTA , INT64 , {connection}
nat_gateway
Count of new connections created over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/open_connections
GA
(project)
Open connections
GAUGE , INT64 , {connection}
nat_gateway
Number of connections currently open on the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/port_usage
GA
(project)
Port usage
GAUGE , INT64 , {port}
nat_gateway
Maximum number of connections from VM to a single internet endpoint (IP:port). Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_bytes_count
GA
(project)
Received bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes received (destination -> VMs) via the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_packets_count
GA
(project)
Received packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets received (destination -> VMs) via the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_bytes_count
GA
(project)
Sent bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes sent (VMs -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_packets_count
GA
(project)
Sent packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets sent (VMs -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
router_up
GA
(project)
Router tasks up
GAUGE , INT64 , 1
gce_router
Number of router software tasks that are running successfully. A value greater than or equal to 1 indicates that the router is up, although not all software tasks may be running. Compare the returned number to the expected number of software tasks for the router. A value of 0 indicates that the router is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
sent_routes_count
GA
(project)
Sent routes count
GAUGE , INT64 , 1
gce_router
Current number of routes sent by router. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
Table generated at 2026-04-02 02:29:29 UTC.
What's next
To troubleshoot issues when using Cloud Router, see
Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
