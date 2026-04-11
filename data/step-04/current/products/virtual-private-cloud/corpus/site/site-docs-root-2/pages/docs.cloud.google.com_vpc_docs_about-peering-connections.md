---
title: "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-peering-connections
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-peering-connections
  title: "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About peering connections
This page provides an overview of administering VPC Network Peering
connections.
Peering connection
A peering connection connects two Virtual Private Cloud (VPC) networks. To
establish a peering connection, each side separately creates a
peering configuration that references the other network.
You initiate the request to connect to another VPC network by
creating a peering configuration. After the other network has a corresponding
configuration to peer with your network, the peering connection is established
and the peering state is changed to ACTIVE in both networks. The peering state
remains INACTIVE if the other network doesn't have a matching peering
configuration, indicating that your network isn't connected to
the other one.
Creating a peering connection doesn't grant you any Identity and Access Management roles on the
other VPC network. For example, if you have the Compute Network
Admin role
( roles/compute.networkAdmin ) or the Compute Security Admin role
( roles/compute.securityAdmin ) for one network, you don't become a network
administrator or a security administrator for the other network.
After the peering connection is established, the two VPC networks
always exchange IPv4 subnet routes that use private IPv4 address ranges.
For more information about route exchange options, see the following:
Options for exchanging subnet routes
Options for exchanging static routes
Options for exchanging dynamic routes
Connection mode
The connection mode determines how a peering connection is administered.
VPC Network Peering supports two connection modes:
Independent mode (default)
Consensus mode
For standard deployments, independent mode is generally preferred. However, for
deployments supporting a critical service where accidental deletion of the
peering connection would cause a service outage, we recommend using
consensus mode. This mode requires agreement from both networks and prevents
unilateral changes to the peering connection.
When creating a peering connection, both peering configurations must specify
the same connection mode: either independent or consensus.
To change the peering mode of an existing connection from independent to
consensus, both peering configurations must be updated. Changing the connection
mode from consensus to independent isn't supported.
Independent mode
When a peering connection is in independent mode (default), either network can
update or delete the connection at any time. You can optionally restrict this
behavior by updating the connection mode to consensus.
Consensus mode
Consensus mode prevents accidental, unilateral changes to network behavior.
When a peering connection is in consensus mode, every request to delete the
peering connection requires agreement from both networks.
Limitations
Updating peering connections in consensus mode isn't supported. To update
route exchange options or
any other configuration parameters for a peering connection in consensus mode,
you must delete the connection and then recreate it with the intended
configuration parameters.
Configuring consensus mode for a connection
You can configure a new or existing peering connection to use consensus mode.
Before configuring a peering connection to use consensus mode, consider the
following:
The update_strategy parameter configures the connection
mode. To change the connection mode, the update strategy in both your local
and peer configurations must be updated from INDEPENDENT
to CONSENSUS . Until both configurations are updated, the
effective update strategy remains INDEPENDENT , and unilateral
connection deletion requests are permitted.
After a request to change the connection mode is initiated, the peer
network can accept the request, or the local network can revert it.
To configure consensus mode for a connection, each
route exchange option
that you intend to use must have the same value as the complementary flag in
the matching peering configuration. For example, if your network imports
custom routes, the other network must export custom routes.
If the values for the following complementary flags don't match between
the configurations, the request to update the connection mode is rejected.
Both sides of the connection can update these values either in advance or
when updating the connection mode.
Your network
Peer network
import_custom_route
export_custom_route
export_custom_route
import_custom_route
import_subnet_routes_with_public_ip
export_subnet_routes_with_public_ip
export_subnet_routes_with_public_ip
import_subnet_routes_with_public_ip
stack_type
stack_type
Pending requests to update the connection mode don't cause downtime, and
the connection remains active while your request is in progress.
For more information, see
Create a peering connection in consensus mode
and Update a connection to consensus
mode .
Deleting a connection in consensus mode
To delete a peering connection in consensus mode, both sides of the connection
must submit a deletion request before the connection can be deleted. After
a deletion request is initiated, it can't be canceled.
For more information, see
Delete a connection (consensus mode) .
Connection status
The gcloud compute networks describe command
shows both the effective status of a peering connection and your local
peering configuration.
You can view the effective connection status by examining the
peerings.connectionStatus field. The following table describes its available
configuration statuses. The
checkmark indicates that the field is
available.
Field
Independent mode
Consensus mode
Description
trafficConfiguration
Shows the effective
route exchange options
of the peering connection.
updateStrategy
Shows the connection mode: either INDEPENDENT or
CONSENSUS .
consensusState.deleteStatus
UNSPECIFIED : no requestRemovePeering
requests are pending for this peering connection.
LOCAL_DELETE_REQUESTED : the owner of this peering
has requested the deletion of the peering connection.
PEER_DELETE_REQUESTED : the owner of the matching
peering has requested the deletion of the peering connection.
DELETE_ACKNOWLEDGED : both peering owners of
this connection have requested the deletion of the peering connection.
Subsequent removePeering requests will succeed for
either peering.
consensusState.updateStatus
IN_SYNC : neither peering owner has pending
updates.
PENDING_PEER_ACK : the local peering owner has made a
change but the matching peering owner hasn't applied the
corresponding changes to their peering.
PENDING_LOCAL_ACK : the matching peering owner has
made a change but the local peering owner hasn't applied the
corresponding changes to this peering.
To list all peering configurations in a Google Cloud project, see
List peering connections .
What's next
To create and manage VPC Network Peering connections, see
Set up and manage VPC Network Peering .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
