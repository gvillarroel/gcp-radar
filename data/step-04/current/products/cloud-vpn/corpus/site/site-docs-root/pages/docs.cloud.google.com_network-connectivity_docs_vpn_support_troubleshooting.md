---
title: "Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting
  title: "Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Guides
Send feedback
Troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
This troubleshooting guide can help you monitor and solve common issues with
Cloud VPN.
To interpret status messages and IKE cipher references, see the
Reference section.
To find logging and monitoring information, see
View logs and metrics .
To find definitions for terminology used on this page, see
Cloud VPN key terms .
Error messages
To check error messages, follow these steps:
In the Google Cloud console, go to the VPN page.
Go to VPN
If you see a status icon , hover over it to see the error
message .
Note: To see a change in icon status and message
status—for example, from First Handshake to Established ,
refresh your browser.
Often, the error message can help you pinpoint the issue. If not, check
your logs for more information. You can find detailed status information
in the Google Cloud console on the Tunnel details page.
VPN logs
Cloud VPN logs are stored in Cloud Logging .
Logging is automatic, so you do not need to enable it.
For information about viewing logs for the peer gateway side of your
connection, see your product documentation.
Often, the gateways are configured correctly, but there's a problem in
the peer network between the hosts and the gateway, or there is a problem
with the network between the peer gateway and the Cloud VPN
gateway.
To check the logs, follow these steps:
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
Check the logs for the following information:
Verify that the remote peer IP address
configured on the Cloud VPN gateway is correct.
Verify that traffic flowing from your on-premises hosts is reaching the
peer gateway.
Verify that traffic is flowing between the two VPN gateways in both
directions. In the VPN logs, check for reported
incoming messages from the other VPN gateway.
Check that the configured IKE versions are the same on both sides of the
tunnel.
Check that the shared secret is the same on both sides of the tunnel.
If your peer VPN gateway is behind one-to-one NAT, ensure that you have
properly configured the NAT device to forward UDP traffic to your
peer VPN gateway on ports 500 and 4500 .
If the VPN logs show a no-proposal-chosen error, this error indicates
that Cloud VPN and your peer VPN gateway were unable to agree
on a set of ciphers. For IKEv1, the set of ciphers must match exactly.
For IKEv2, there must be at least one common cipher proposed by each
gateway. Make sure that you use
supported ciphers to
configure your peer VPN gateway.
Make sure that you configure your peer and Google Cloud routes and
firewall rules so that traffic can traverse the tunnel. You might need to
contact your network administrator for help.
To find specific problems, you can search your logs for the following strings:
In the Query builder pane, enter one of the advanced queries listed
in the following table to search for a particular event, and click
Run Query .
Adjust the timeframe in the Histogram pane as necessary, and then
click Run within the pane.
For more details about using Logs Explorer for queries, see
Building log queries .
To view
Use this Logging search
Cloud VPN initiates Phase 1 (IKE SA)
resource.type="vpn_gateway"
("initiating IKE_SA" OR "generating IKE_SA_INIT request")
Cloud VPN cannot contact remote peer
resource.type="vpn_gateway"
"establishing IKE_SA failed, peer not responding"
IKE (Phase 1) authentication events
resource.type="vpn_gateway"
("generating IKE_AUTH request" OR "parsed IKE_AUTH response")
Successful IKE authentication
resource.type="vpn_gateway"
("authentication of" AND "with pre-shared key successful")
Phase 1 (IKE SA) established
resource.type="vpn_gateway"
("IKE_SA" AND "established between")
All Phase 2 (Child SA) events, including re-key events
resource.type="vpn_gateway"
"CHILD_SA"
Peer asks for Phase 2 re-key
resource.type="vpn_gateway"
detected rekeying of CHILD_SA
Peer asks to terminate Phase 2 (Child SA)
resource.type="vpn_gateway"
received DELETE for ESP CHILD_SA
Cloud VPN asks to terminate Phase 2 (Child SA)
resource.type="vpn_gateway"
sending DELETE for ESP CHILD_SA
Cloud VPN closes Phase 2 (Child SA), perhaps in response to the peer
resource.type="vpn_gateway" closing CHILD_SA
Cloud VPN closed Phase 2 itself
resource.type="vpn_gateway" CHILD_SA closed
If remote traffic selectors don't match
resource.type="vpn_gateway"
Remote traffic selectors narrowed
If local traffic selectors don't match
resource.type="vpn_gateway"
Local traffic selectors narrowed
Connectivity
Consider the following suggestions when using ping to verify connectivity
between on-premises systems and Google Cloud virtual machine (VM)
instances:
Ensure that the firewall rules in your Google Cloud network allow
incoming ICMP traffic. The implied allow egress
rule permits outgoing ICMP
traffic from your network unless you have overridden it. Similarly, make sure
that your on-premises firewall rules are also configured to allow incoming and
outgoing ICMP traffic.
Use internal IP addresses to ping Google Cloud VMs and on-premises
systems. Pinging external IP addresses of VPN gateways does not test
connectivity through the tunnel.
When testing connectivity from on-premises to Google Cloud, it's best
to initiate a ping from a system on your network, not from your VPN gateway.
Pinging from a gateway is possible if you set the appropriate source
interface, but pinging from an instance on your network has the added benefit
of testing your firewall configuration.
Ping tests don't verify that TCP or UDP ports are open. After you
have established that systems have basic connectivity, you can use ping to
perform additional tests.
Calculate network throughput
You can calculate network throughput
within Google Cloud and to your on-premises or third-party cloud
locations. This resource includes information about how to analyze results,
explanations of variables that can affect network performance, and
troubleshooting tips.
Common problems and solutions
Tunnel creation fails due to reserved IP ranges
Cloud VPN tunnel creation might fail because the
peer IP address that you have used at the time of configuration falls
within the RFC 5737
or RFC 5735 reserved
IP addresses range.
Check and update your VPN tunnel configuration
to ensure that the correct IP ranges are used.
Tunnel regularly goes down for a few seconds
By default, Cloud VPN negotiates a replacement security association
(SA) before the existing one expires (also known as rekeying ). Your peer VPN
gateway might not be rekeying. Instead, it might negotiate a new SA only after
deleting the existing SA, causing interruptions.
To check whether your peer gateway rekeys, view the
Cloud VPN logs. If the connection drops and then re-establishes
right after a Received SA_DELETE log message, your on-premises gateway didn't
rekey.
To verify tunnel settings, refer to the Supported IKE
ciphers document. In particular,
make sure that the Phase 2 lifetime is correct, and that a Diffie-Hellman (DH)
group is set to one of the recommended values.
To search for events in your Cloud VPN tunnel, you can use a
Logging advanced log filter .
For example, the following advanced filter searches for DH group mismatches:
resource.type="vpn_gateway"
"Peer proposal: DOES NOT HAVE DIFFIE_HELLMAN_GROUP"
On-premises gateways behind NAT
Cloud VPN can work with on-premises or peer VPN gateways that are
behind NAT. This is made possible by UDP encapsulation and NAT-T. Only
one-to-one NAT is supported.
Connectivity works for some VMs, but not for others
If ping , traceroute , or other methods of sending traffic work from only some
VMs to your on-premises systems, or from only some on-premises systems to some
Google Cloud VMs, and you verified that both Google Cloud and
on-premises firewall rules are not blocking the traffic that you are sending,
you might have traffic selectors that exclude certain sources or destinations.
Traffic selectors define the ranges of IP addresses for a VPN tunnel. In
addition to routes, most VPN implementations only pass packets
through a tunnel if both of the following are true:
Their sources fit within the IP ranges specified in the local traffic
selector.
Their destinations fit within the IP ranges specified in the remote
traffic selector.
You specify traffic selectors when you create a Classic VPN tunnel
by using
policy-based routing or a route-based VPN .
You also specify traffic selectors when you create the corresponding peer
tunnel.
Some vendors use terms such as local proxy , local encryption domain , or
left side network as synonyms for local traffic selector . Similarly, remote
proxy , remote encryption domain , or right side network are synonyms for
remote traffic selector .
To change traffic selectors for a Classic VPN tunnel, you must
delete
and re-create the tunnel.
These steps are required because the traffic selectors are an integral part of
tunnel creation, and tunnels cannot be edited later.
Use the following guidelines when defining traffic selectors:
The local traffic selector for the Cloud VPN tunnel should cover
all subnets in your Virtual Private Cloud (VPC) network that you need to
share with your peer network.
The local traffic selector for your peer network should cover all
on-premises subnets that you need to share with your VPC
network.
For a given VPN tunnel, traffic selectors have the following relationship:
The Cloud VPN local traffic selector should match the remote
traffic selector for the tunnel on your peer VPN gateway.
The Cloud VPN remote traffic selector should match the local
traffic selector for the tunnel on your peer VPN gateway.
Important: For Classic VPN using static routing,
IKEv1 supports a single IP range (CIDR block) for each traffic selector.
Classic VPN also supports using multiple CIDR blocks for traffic
selectors with IKEv2, but it uses a single Child SA for all CIDR blocks.
To determine if your peer VPN gateway supports multiple CIDRs in a single
Child SA with IKEv2, consult the documentation for your peer VPN gateway.
For more information about multiple IP ranges and traffic selectors, see
Policy-based tunnels and traffic selectors
on the Networks and tunnel routing page.
Network latency issues between VMs in different regions
To determine if there are any latency or packet loss issues, monitor the
performance of the entire Google Cloud network. In the
Google Cloud performance view , Performance Dashboard shows packet
loss and latency metrics across all of Google Cloud.
These metrics can help you understand whether issues evident in the project
performance view are unique to your project. For more details, see
Using Performance Dashboard .
Unable to connect a HA VPN gateway to a Classic VPN gateway
You can't connect a HA VPN gateway to a
Classic VPN gateway. If you try to create this connection,
Google Cloud returns the following error message:
You cannot provide an interface with an IP address owned by Google Cloud.
You can only create tunnels from an HA gateway to an HA gateway
or create tunnels from an HA gateway to an ExternalVpnGateway.
To avoid this error, create a VPN tunnel that connects your
HA VPN gateway to one of the following:
Another HA VPN gateway
An external VPN gateway that is not hosted in Google Cloud
Compute Engine virtual machine (VM) instances
Unable to connect to external destination through HA VPN
When you use an HA VPN gateway, Google Cloud resources use the
VPN tunnel to connect to only the destinations that are advertised by the peer router.
If you are unable to connect to a remote destination, ensure that the peer router is advertising
the IP range of the destination.
IPv6 traffic is not being routed
If you are experiencing difficulty connecting to IPv6 hosts, do the following:
Verify that IPv4 routes are being correctly advertised. If IPv4 routes are
not being advertised, see Troubleshoot BGP routes and route selection .
Inspect firewall rules to ensure that you are allowing IPv6 traffic.
Verify that you do not have overlapping IPv6 subnet ranges in your VPC
network and your on-premises network. See Check overlapping subnet ranges .
Determine whether you have exceeded any quotas and limits for your learned routes in Cloud Router. If you have exceeded your quota for learned routes, IPv6 prefixes are dropped before IPv4 prefixes.
See Check quotas and limits .
Verify that all components that require IPv6 configuration have been configured
correctly.
The VPC network has enabled the use of internal IPv6 addresses with the --enable-ula-internal-ipv6 flag.
The VPC subnet is configured to use the IPV4_IPV6 stack type.
The VPC subnet has --ipv6-access-type set to INTERNAL .
The Compute Engine VMs on the subnet are configured with IPv6 addresses.
The HA VPN gateway is configured to use the IPV4_IPV6 stack type.
The BGP peer has enabled IPv6 and correct IPv6 next hop addresses are
configured for the BGP session.
To view Cloud Router status and routes, see View Cloud Router status and routes .
To view BGP session configuration, see View BGP session configuration .
Troubleshooting reference
This section includes information about status icons, status messages, and
supported IKE ciphers.
Status icons
Cloud VPN uses the following status icons in the Google Cloud console.
Icon graphic
Color
Description
Applies to messages
Green
Success
ESTABLISHED
Yellow
Warning
ALLOCATING RESOURCES, FIRST HANDSHAKE, WAITING FOR FULL CONFIG, PROVISIONING
Red
Error
All remaining messages
Status messages
To indicate VPN gateway and tunnel states, Cloud VPN uses the following
status messages. The VPN tunnel is billed for the
states indicated.
Message
Description
Tunnel billed in this state?
ALLOCATING RESOURCES
Allocating resources to set up the tunnel.
Yes
PROVISIONING
Waiting to receive all configs to set up the tunnel.
No
WAITING FOR FULL CONFIG
Full config received, but a tunnel is not yet established.
Yes
FIRST HANDSHAKE
Establishing the tunnel.
Yes
ESTABLISHED
A secure communication session is successfully established.
Yes
NETWORK ERROR (replaced by NO INCOMING PACKETS)
Bad IPsec authorization.
Yes
AUTHORIZATION ERROR
Handshake failed.
Yes
NEGOTIATION FAILURE
The tunnel configuration was rejected; can be due to being added
to a denylist.
Yes
DEPROVISIONING
The tunnel is being shut down.
No
NO INCOMING PACKETS
The gateway is not receiving any packets from the on-premises VPN.
Yes
REJECTED
The tunnel configuration was rejected; contact Support .
Yes
STOPPED
The tunnel is stopped and not active; can be due to the deletion
of one or more required forwarding rules for the VPN tunnel.
Yes
IKE cipher reference
Cloud VPN supports ciphers and configuration parameters for peer VPN
devices or VPN services. Cloud VPN auto-negotiates the connection as
long as the peer side uses a supported IKE cipher setting.
For the full IKE cipher reference, see
Supported IKE ciphers .
What's next
To learn about the basic concepts of Cloud VPN, see the
Cloud VPN overview .
To find information about high-availability, high-throughput scenarios or
multiple subnet scenarios, see
Advanced configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
