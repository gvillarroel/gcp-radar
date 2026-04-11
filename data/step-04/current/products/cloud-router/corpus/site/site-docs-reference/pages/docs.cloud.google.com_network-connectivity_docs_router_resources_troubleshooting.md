---
title: "Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router/reference/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/resources/troubleshooting
  title: "Troubleshoot BGP sessions \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
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
Troubleshoot BGP sessions
This guide is for troubleshooting BGP sessions, such as BGP sessions that fail
to establish and BGP resets.
For additional troubleshooting information, see the following:
Troubleshoot BGP peering
Troubleshoot BGP routes and route
selection
Troubleshoot Cloud Router log messages
BGP session failed to establish
Check that the settings on your on-premises BGP router and the settings on
your Cloud Router are correct. For detailed information, view the
Cloud Router logs .
If you're creating a Cloud VPN tunnel, check that the
status of the tunnel is
ESTABLISHED . If it isn't, to troubleshoot the issue, see
Cloud VPN troubleshooting .
IPv4 and IPv6 addresses for BGP sessions
Support for IPv6 BGP sessions is in
Preview .
The IPv4 and IPv6 addresses that you can use for a BGP session depend on the
product you use. For complete details, see BGP peering
addresses .
Invalid value for the field resource.bgp.asn
You may get the following error:
"Invalid value for field resource.bgp.asn : ###### .
Local ASN conflicts with peer ASN specified by a router in the same region
and network."
The Cloud Router is attempting to establish a BGP session with an
on-premises device that has the same ASN as the Cloud Router. To resolve
this issue, change the ASN of your device or Cloud Router.
IPv6 BGP session fails to establish
If you are experiencing difficulty establishing a connection with your IPv6 BGP
peer, do the following:
Verify that the corresponding VLAN attachment or HA VPN
tunnel is connected.
Verify that the VLAN attachment or HA VPN gateway has the
required stack type of IPV4_IPV6 .
If the stack type is incorrect for a VLAN attachment, modify
the VLAN attachment. For a HA VPN gateway, recreate the
HA VPN gateway and its tunnels.
Ensure that the Cloud Router is configured correctly and that your
on-premises router is configured with the matching IPv6 BGP addresses.
Run the following command:
gcloud compute routers describe ROUTER-NAME
In the command output, check the following values:
bgpPeers.peerIpAddress is an IPv6 address assigned to the external
interface on your on-premises router. This IPv6 address is used as the
BGP peering address with Cloud Router for a
HA VPN tunnel or a
Dedicated Interconnect VLAN attachment.
bgpPeers.ipAddress is an IPv6 address assigned to the interface of the
Cloud Router and matches the value configured as the peer BGP
IP address on your on-premises router.
bgpPeers.peerAsn matches the ASN of your on-premises router.
bgp.asn matches the peer ASN configured on your on-premises router.
BGP resets that originate from Google Cloud appear on your router
Cloud Router tasks are software processes in the Google Cloud
control plane that are normally migrated from machine to machine. During such
migrations, the Cloud Router might be down for periods of up to 60
seconds. Normal migrations don't cause traffic to be dropped.
The Cloud Router is not located in the data path and is not acting as a
Layer 3 switch, but as a manager for route programming. Routing is actually
handled by the VLAN attachment or the Cloud VPN tunnel.
Cloud Logging adds entries for the affected router when BGP resets occur. You
can find the events by searching the Logging logs for the routing
ID and using the key textPayload="Router Event: Router task activated .
For more information about viewing Logging logs, see View logs
and metrics .
On-premises router experiences BGP flap
BGP flaps can be caused by various issues, including Cloud Router
software maintenance .
To get details about completed maintenance events, see Identifying router
maintenance events . To get
details about other Cloud Router events, see Viewing
Cloud Router logs and
metrics .
A Cloud Router maintenance event is not indicative of a problem if your
on-premises router is configured as follows:
The on-premises router can process graceful restart notifications.
The on-premises router's hold timer is set to at least 60 seconds.
For a comprehensive overview of timer settings, see Managing BGP
timers .
For help monitoring connectivity, see Verify connectivity between the
on-premises router and the
Cloud Router .
BGP session closes
If your on-premises router advertises more than 5,000 prefixes, then the
Cloud Router closes the BGP session and does not attempt to
re-establish it until the BGP peering is reset manually. The following log is
generated in Cloud Logging when this happens.
BGP: Sent NOTIFICATION 6/1 (CEASE/MAX_PREFIXES_REACHED) to the peer
"PEER_IP_ADDRESS"
The BGP session from peer "PEER_IP_ADDRESS" was shut down because the number of
received prefixes reached the limit of 5000. Please reduce the prefixes sent to
the Cloud Router, then disable and re-enable the BGP peer.
To resolve this issue, do the following:
Reduce the prefixes sent from your on-premises router using commands from
your router's vendor.
Disable the BGP peer .
Enable the BGP peer .
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
