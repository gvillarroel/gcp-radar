---
title: "Troubleshoot Cloud Router log messages \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages
  title: "Troubleshoot Cloud Router log messages \_|\_ Google Cloud Documentation"
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
Troubleshoot Cloud Router log messages
This guide is for troubleshooting log messages that appear in
Cloud Router logs.
For additional troubleshooting information, see the following:
Troubleshoot BGP sessions
Troubleshoot BGP peering
Troubleshoot BGP routes and route
selection
NOTIFICATION_RECEIVED message appears in Cloud Router logs
A NOTIFICATION_RECEIVED message appears in the Cloud Router logs when
the Cloud Router has received a NOTIFICATION message from the BGP
peer. The NOTIFICATION message is a signal to Cloud Router that it
should stop the BGP session.
When the Cloud Router receives a NOTIFICATION message from its BGP
peer, Cloud Router closes the BGP connection with that peer and removes
all its learned routes.
The BGP peer can send NOTIFICATION messages for a variety of reasons. For
example, the peer might send a "Hold Timer Expired" message.
CONFIG_DISABLED message appears in Cloud Router logs
A CONFIG_DISABLED message indicates that Cloud Router has
intentionally stopped the BGP session. By stopping the BGP session,
Cloud Router is attempting to immediately communicate an error state to
its peer.
This message can appear due to any of the following reasons:
A user has disabled the BGP session by using the Cloud Router API,
Google Cloud console, or the Google Cloud CLI. See Disabling or removing BGP
sessions .
For a BGP session set up for Cloud VPN, the VPN tunnel associated
with the BGP session has not established an IKE and child security
association (SA). To troubleshoot VPN connectivity, see Cloud VPN
troubleshooting .
For a BGP session set up for Cloud Interconnect, the VLAN
attachment is not configured or is in an admin-down state. To troubleshoot
the issue further, see
Troubleshooting
in the Cloud Interconnect documentation.
For a BFD-enabled BGP session, the BFD control detection timer on the
Cloud Router has expired. When this occurs, the BGP session is
stopped. For more information on BFD session states, see BFD diagnostic
messages and session states .
LINK_DOWN message appears in Cloud Router logs
A LINK_DOWN message appears in the Cloud Router logs when the link
between the Google peering edge router and your VLAN attachment for
Cloud Interconnect is down. The peering edge router is networking
equipment that is managed by Google inside the colocation facility where you
have provisioned your Cloud Interconnect connection.
The LINK_DOWN message is a signal that the corresponding BGP peer status is
down. This message applies only to Cloud Interconnect-based BGP
sessions.
What's next
For more information about how to use Cloud Logging to monitor
Cloud Router, see
View logs and metrics .
For additional support, see
Getting support .
For information about BGP session states, see
BGP session states .
For information about diagnostic messages and session states related to
Bidirectional Forwarding Detection (BFD), see
BFD diagnostic messages and session states .
For issues related to using Cloud Router with Router appliance,
see
Troubleshooting Router appliance
in the Network Connectivity Center documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
