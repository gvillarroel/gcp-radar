---
title: "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\
  \ Tests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow
  title: "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\
    \ Tests \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Connectivity Tests
Guides
Send feedback
Identify and fix ICMP issues
Stay organized with collections
Save and categorize content based on your preferences.
Note: Connectivity Tests performs a
static analysis
of the resource configurations in your VPC network. This analysis
does not represent the actual condition of the network data plane.
This tutorial shows you how to iteratively use Connectivity Tests
to identify and fix an issue with network connectivity.
In this case, Virtual Private Cloud (VPC) firewall rules prevent the external
IP address of one virtual machine (VM) instance from
using the ICMP protocol to ping the external IP address of another VM.
Because VM-to-VM communication problems are often network connectivity issues,
Connectivity Tests can give you information about possible
configuration problems so that you can fix them. You can then run
Connectivity Tests again to verify your fix.
Overview
In this case, you have configured two VM instances in the same subnet of your
VPC network. Both VMs have external IP addresses. When you test
connectivity between them by sending a ping packet from vm1 to
the external IP address of vm2 , the ping doesn't work.
Troubleshooting a denied ping between two VMs
Before you begin
Before you start the tutorial, follow all of the steps in
the Before you begin section of
Create and run Connectivity Tests .
It can also be helpful to review
how VPC firewall rules work .
Configure network resources
In this section you configure the Google Cloud resources in the testing path.
Configure a VPC network
You can use an existing network and subnet that contain the VMs, or
you can create a new network and subnet .
Configure two VM instances
Note: This tutorial refers to the VMs that you use or create as vm1 and vm2 .
The VM instances in this tutorial are located in the same VPC
network and subnet. You can use existing VMs or create
new ones .
Assign vm1 and vm2 an external IP address when you create them.
Note the addresses because you will use them later.
Create a firewall rule default-deny-outgoing-ping
After you have created the VMs, create an egress VPC firewall
rule called
default-deny-outgoing-ping . This rule denies the ICMP protocol from
vm1 to vm2 . Make sure that there are no existing firewall rules in this
network that would override this rule. Additionally, make sure that no
hierarchical firewall policy rules would override this rule. For details, see the
Hierarchical firewall policies overview .
Use the values in the following table to configure this
VPC firewall rule.
VPC firewall rule field
Value
Name
default-deny-outgoing-ping
Network
Use the VPC network where the VMs are located.
Priority
1000
Direction of traffic
Egress
Action on match
Deny
Targets
Select All instances in the network .
Destination IP ranges
Use the external IP address of vm2 .
Specified protocols and ports
Select the Other protocols checkbox, and then enter
icmp .
Create a firewall rule default-deny-ingress-to-vm2
Create an ingress firewall rule called default-deny-ingress-to-vm2 to deny the
ICMP protocol to the external IP address of vm2 . Make sure that there are no
existing firewall rules in this
network that would override this rule. Additionally, make sure that no
hierarchical firewall policy rules would override this rule. For details, see the
Hierarchical firewall policies overview .
Use the values in the following table to create the rule.
VPC firewall rule field
Value
Name
default-deny-ingress-to-vm2
Network
Use the VPC network where the VMs are located.
Priority
65534
Direction of traffic
Ingress
Action on match
Deny
Targets
Select All instances in the network .
Source IP ranges
Use the external IP address of vm1 .
Specified protocols and ports
Select the Other protocols checkbox, and then enter
icmp .
Run the first trace
Using the Google Cloud console,
run a trace
to determine if an ICMP (ping) packet can travel from vm1 to the external
IP address of vm2 . After running this trace, Connectivity Tests
tells you that the trace packet has been dropped due to the VPC
firewall rule default-deny-outgoing-ping .
Use the following table for input values for the trace.
Field name
Value
Protocol
icmp
Source IP address
Use the external IP address of vm1 .
Select the This is an IP address used in Google Cloud
checkbox.
Source IP address or service project
Verify the project name for vm1 .
Destination IP address
Use the external IP address of vm2 .
Select the This is an IP address used in Google Cloud
checkbox.
Destination IP address or service project
Verify the project name for vm2 .
The following Google Cloud console snapshot shows that the trace packet was
dropped to the firewall rule default-deny-outgoing-ping .
Console UI snapshot of the trace containing the denied outgoing ping
Run a second trace after disabling firewall rule default-deny-outgoing-ping
To allow the ping test to vm2 , temporarily
disable the
VPC firewall rule default-deny-outgoing-ping .
After the configuration updates successfully, run the trace again.
The trace fails again. The packet was dropped due to
this firewall rule denying an ingress ICMP packet to the external IP address
of vm2 .
The following Google Cloud console snapshot shows that an inbound trace packet
can pass through Cloud NAT, but can't reach vm2 due to the previously
mentioned firewall rule.
Console UI snapshot of the trace failing to reach vm2
Create the firewall rule allow-ping-from-known-ranges
To allow ingress to the external IP address of vm2 , configure a new
VPC firewall
rule called allow-ping-from-known-ranges . Because allowing all ingress ICMP
packets into your VPC network is a security risk, specify only a
small set of source ranges that are allowed to send ICMP packets to the
external IP address of vm2 .
For the purposes of this tutorial, this source range includes only the external
IP address of vm1 , but check any existing firewall rules or rule priorities to
make sure that they don't override this new rule. Additionally, make sure that
no
hierarchical firewall policy rules would override this rule. For details, see the
Hierarchical firewall policies overview .
Use the values in the following table to configure the rule.
VPC firewall rule field
Value
Name
allow-ping-from-known-ranges
Network
Use the name of the network that contains both VMs.
Priority
1000
Direction of traffic
Ingress
Action on match
Allow
Targets
Select All instances in the network .
Source filter
IP ranges
Source IP ranges
Use the external IP address of vm1 .
Specified protocols and ports
Select the Other protocols checkbox, and then enter
icmp .
Run a third trace
After creating the allow-ping-from-known-ranges firewall rule, ping the
external IP address of vm2 again. The ping works and the problem is resolved.
An allowed ping between two VMs
You can verify this result by performing another trace against the updated
configuration containing the new firewall rule. This time,
Connectivity Tests tells you that the packet has been delivered to
vm2 and that the matched firewall rule, allow-ping-from-known-ranges , allows
an inbound ICMP packet to the external IP address of vm2 .
Console UI snapshot of a successful trace to vm2
Clean up
If required, you can disable or delete any of the following Google Cloud resources
that you created for this tutorial. Make sure that these are not production
resources. If you decide to disable resources, check the Compute Engine
pricing page and the All networking pricing page
to make sure that you won't be billed for them.
Disable or
delete firewall rules.
Disable or
delete VMs.
Delete VPC subnets.
Delete the VPC network.
What's next
Learn about Connectivity Tests
Update or delete Connectivity Tests
Troubleshoot Connectivity Tests issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
