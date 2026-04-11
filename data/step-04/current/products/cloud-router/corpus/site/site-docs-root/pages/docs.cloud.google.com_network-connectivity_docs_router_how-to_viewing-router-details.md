---
title: "View router details \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details
  title: "View router details \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
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
View router details
This page describes how to view the following Cloud Router details:
The status of the Cloud Router's BGP sessions
The Cloud Router BGP
timers
Bidirectional Forwarding Detection (BFD)
settings
Route advertisement
mode
The base advertised route priority
that Cloud Router uses for calculating route metrics
All routes for a BGP session use the same base advertised route priority. For
more information, see Advertised
priority .
For more information about troubleshooting, see the following:
Troubleshoot BGP sessions
Troubleshoot BGP peering
Troubleshoot BGP routes and route
selection
Troubleshoot Cloud Router log messages
Before you begin
gcloud
If you want to use the command-line examples in this guide, do the following:
Install or update to the latest version of the
Google Cloud CLI .
Set a default region and
zone .
API
If you want to use the API examples in this guide, set up
API access .
View Cloud Router status and routes
To view Cloud Router status and routes, do the following:
Console
Check the status of a BGP session
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
View the BGP sessions column.
A green circle with a checkmark indicates that the session is
established.
A red circle with an exclamation mark indicates that the session is
still coming up or has already failed.
For more information, hold the pointer over the exclamation mark.
If the session is still coming up,
wait a few minutes, and then reload the page to verify that the session
has been established. If the session failed, view the logs to see
information about the session. For more information, see
View logs and metrics .
View the routes that your router has advertised
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
Click the name of your router to open the Router details page.
Under BGP sessions , click the name of the BGP session that
you want to see advertised routes for.
On the BGP session details page, see the Advertised routes
section.
View the dynamic routes that your Cloud Router has learned in
the network
In the Google Cloud console, go to the VPC Routes
page.
Go to VPC Routes
Select Dynamic .
Determine the BGP peer keepalive interval setting
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
Click the router whose information you want to view.
View the setting on the Router details page under BGP peer
keepalive interval .
Check the status of a BFD session
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
Click the router whose information you want to view.
On the Router details page, under BGP sessions , you can determine
if BFD is enabled and which BFD session initialization mode is set.
gcloud
Run the get-status command and pass the name of the router. The command
returns the router's status, advertised routes, and learned routes.
gcloud compute routers get-status ROUTER_NAME \
--project= PROJECT_ID \
--region= REGION
Replace the following:
ROUTER_NAME : the name of the Cloud Router
PROJECT_ID : the project that contains your
Cloud Router
REGION : the region that contains your
Cloud Router
The output is similar to the following:
kind: compute#routerStatusResponse
result:
bestRoutes:
— creationTimestamp: '2019-04-17T07:16:12.789-07:00'
destRange: 192.168.1.0/24
kind: compute#route
nextHopIp: 169.254.0.2
priority: 100
— creationTimestamp: '2019-04-17T07:16:12.789-07:00'
destRange: 192.168.2.0/24
kind: compute#route
nextHopIp: 169.254.0.2
priority: 338
bestRoutesForRouter:
— creationTimestamp: '2019-04-17T07:15:42.012-07:00'
destRange: 192.168.1.0/24
kind: compute#route
nextHopIp: 169.254.0.2
priority: 100
— creationTimestamp: '2019-04-17T07:15:42.014-07:00'
destRange: 192.168.2.0/24
kind: compute#route
nextHopIp: 169.254.0.2
priority: 338
bgpPeerStatus:
— advertisedRoutes:
— destRange: 10.0.1.0/24
kind: compute#route
nextHopIp: 169.254.0.1
priority: 100
— destRange: 10.0.2.0/24
kind: compute#route
nextHopIp: 169.254.0.1
priority: 340
bfdStatus:
bfdSessionInitializationMode: ACTIVE
configUpdateTimestampMicros: '1615561369012381'
controlPacketCounts:
numRx: 64014
numRxRejected: 0
numRxSuccessful: 64014
numTx: 63994
controlPacketIntervals:
— avgMs: '263'
duration: MINUTE
maxMs: '299'
minMs: '225'
numIntervals: '227'
type: TRANSMIT
— avgMs: '262'
duration: MAX
maxMs: '4467'
minMs: '0'
numIntervals: '63993'
type: TRANSMIT
— avgMs: '261'
duration: MINUTE
maxMs: '1000'
minMs: '176'
numIntervals: '228'
type: RECEIVE
localDiagnostic: NO_DIAGNOSTIC
localState: UP
negotiatedLocalControlTxIntervalMs: 1000
rxPacket:
authenticationPresent: false
controlPlaneIndependent: false
demand: false
diagnostic: NO_DIAGNOSTIC
final: false
length: 24
minEchoRxIntervalMs: 0
minRxIntervalMs: 1000
minTxIntervalMs: 1000
multiplier: 5
multipoint: false
myDiscriminator: 313496190
poll: false
state: UP
version: 1
yourDiscriminator: 369987665
txPacket:
authenticationPresent: false
controlPlaneIndependent: false
demand: false
diagnostic: NO_DIAGNOSTIC
final: false
length: 24
minEchoRxIntervalMs: 0
minRxIntervalMs: 1000
minTxIntervalMs: 1000
multiplier: 5
multipoint: false
myDiscriminator: 369987665
poll: false
state: UP
version: 1
yourDiscriminator: 313496190
uptimeMs: '16812601'
enableIpv6: true
ipAddress: 169.254.0.1
ipv6NexthopAddress: 2600:2d00:0:0:0:0:1:5
linkedVpnTunnel: https://www.googleapis.com/compute/projects/ PROJECT_ID /regions/us-central1/vpnTunnels/vpn-1-tunnel-1
name: mysession2
numLearnedRoutes: 2
peerIpAddress: 169.254.0.2
peerIpv6NexthopAddress: 2600:2d00:0:0:0:0:1:4
state: Established
status: UP
uptime: 2 days, 3 hours, 37 minutes, 0 seconds
uptimeSeconds: '185820'
network: https://www.googleapis.com/compute/kind: compute#routerStatusResponse
result.bestRoutes lists the best dynamic routes for this
Cloud Router's VPC network in the same region as
this Cloud Router. The list consists of the best routes per
prefix that are programmed into this region's VPC data
plane. When global dynamic routing mode is turned on in the
VPC network, this list can include cross-region dynamic
routes from Cloud Routers in other regions.
result.bestRoutesForRouter lists the best BGP routes learned by this
Cloud Router. It is possible that routes listed might not be
programmed into the data plane if the Google Cloud control plane
finds a more optimal route for a prefix than a route learned by this
Cloud Router.
API
Use the
routers.getRouterStatus
method:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /routers/ ROUTER_NAME /getRouterStatus
Replace the following:
PROJECT_ID : the project that contains the
Cloud Router
REGION : the region where the Cloud Router is
located
ROUTER_NAME : the name of the Cloud Router
View BGP session configuration
To view the configuration for an existing BGP session, follow these steps.
Console
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
From the list of routers, select the router with the BGP session that you
want to view.
View the BGP sessions section to see the details of your
Cloud Router's BGP sessions.
gcloud
Run the describe command and pass the name of the Cloud Router.
gcloud compute routers describe ROUTER_NAME \
--project PROJECT_ID \
--region REGION
Replace the following:
ROUTER_NAME : the name of the Cloud Router
PROJECT_ID : the project that contains your
Cloud Router
REGION : the region where the Cloud Router is
located
In the output, view the bgpPeers section:
bgp:
advertiseMode: DEFAULT
asn: 65001
keepaliveInterval: 120
bgpPeers:
— advertiseMode: DEFAULT
bfd:
minReceiveInterval: 1000
minTransmitInterval: 1000
mode: ACTIVE
multiplier: 5
enable: 'TRUE'
enableIpv6: true
interfaceName: if-mysession2
ipAddress: 169.254.0.1
ipv6NexthopAddress: 2600:2d00:0:0:0:0:1:5
name: mysession2
peerAsn: 65002
peerIpAddress: 169.254.0.2
peerIpv6NexthopAddress: 2600:2d00:0:0:0:0:1:6
creationTimestamp: '2019-03-15T13:48:12.433-07:00'
description: ''
id: '1234567890123456789'
interfaces:
— ipRange: 169.254.0.1/30
linkedVpnTunnel: https://www.googleapis.com/compute/projects/ PROJECT_ID /regions/us-central1/vpnTunnels/vpn-1-tunnel-1
name: if-mysession2
kind: compute#router
name: ROUTER_NAME
network: https://www.googleapis.com/compute/projects/ PROJECT_ID /global/networks/network-a
region: https://www.googleapis.com/compute/projects/ PROJECT_ID /regions/us-central1
selfLink: https://www.googleapis.com/compute/projects/ PROJECT_ID /regions/us-central1/routers/ ROUTER_NAME
selfLinkWithId: https://www.googleapis.com/compute/projects/ PROJECT_ID /regions/us-central1/routers/7114728016518951267
API
Use the
routers.get
method:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /routers/ ROUTER_NAME
Replace the following:
PROJECT_ID : the project that contains the
Cloud Router
REGION : the region where the Cloud Router
is located
ROUTER_NAME : the name of the Cloud Router
The bgpPeers[] field in the output contains the configuration for each BGP
session.
What's next
Update the base advertised route priority
To update advertised routes, see Advertised
routes .
For information about BGP session states, see
BGP session states .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
