---
title: "Troubleshoot Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\
  \ Tests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/troubleshooting
  title: "Troubleshoot Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\
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
Troubleshoot Connectivity Tests
Stay organized with collections
Save and categorize content based on your preferences.
Use the following guidance to troubleshoot common issues with Connectivity Tests.
To learn more about Connectivity Tests, see the
overview .
To interpret the states for a Connectivity Test
configuration analysis, see
Configuration analysis states .
General issues
It takes too long to get test results
Because Connectivity Tests queries the latest snapshot of a
Virtual Private Cloud (VPC) network configuration, getting results can take some
time. For details, see
expected query response times .
If you are experiencing long or unstable latencies when running
Connectivity Tests, report the issue to
Support and describe how to reproduce
it.
My test's configuration analysis isn't picking up the configuration change I made
After you make a configuration change to the Google Cloud resources in your
testing path, you might want to use the test's configuration analysis to
validate the change. However, it takes between 20 and 120 seconds for
Connectivity Tests to receive a configuration update and incorporate
it into analysis. For
Google Kubernetes Engine (GKE)
resources, this process can take up to 15 minutes. Allow for this additional
time before running your tests.
Certain types of configurations can take longer to complete. If your
configuration change is not verified by Connectivity Tests after an
extended period of time and is reproducible, report the issue to
Support and describe how to reproduce
it.
This delay does not apply to live data plane analysis. Therefore, you
might see a temporary mismatch between the results shown by live data plane
analysis and configuration analysis. For example, if you create a firewall rule,
live data plane analysis generally responds to the new rule right away. However,
you might have to wait 20 seconds or longer before the configuration analysis
can evaluate the firewall rule along with the other resources in the testing
path.
Test state issues
I can't access details about a hierarchical firewall policy
The trace for your test might reference a hierarchical firewall policy
that you don't have permission to view.
However, even if you don't have permission to view the policy, you can still
see the policy rules that apply to your VPC network. For details,
see Effective firewall rules
in the hierarchical firewall policies overview.
Access to hierarchical firewall policies is defined at the organization and
folder level. For details about the permissions that you need to view
these policies, see
Identity and Access Management (IAM) roles
in the hierarchical firewall policies overview.
My test shows a final configuration analysis state of Deliver , but connectivity is broken
In some cases, the configuration analysis suggests that a source and destination
endpoint are reachable. However, you might find that, in practice, connectivity
is broken between the two endpoints, or that live data plane analysis shows 100%
packet loss.
To understand this situation, remember that Connectivity Tests uses
two types of analysis: a
configuration analysis ,
which detects issues in active configurations within your project, and live data
plane analysis, which sends probes on the data plane.
A final configuration analysis state of
Deliver
means that Connectivity Tests didn't detect any configuration issues.
However, there could still be data path issues that cause connectivity
problems. To troubleshoot, consider the following:
The source or destination VM is experiencing guest OS issues such as guest
OS kernel panic, a network interface controller (NIC) that is not
initialized, or incompatible network drivers. Check the VM state and
NIC configuration.
A widespread issue is affecting the network data plane. Consult your
project's Performance Dashboard ,
paying particular attention to packet loss for the relevant zone pair.
Additionally, check the Google Cloud Status Dashboard .
Your network is experiencing sporadic network programming issues, such as
issues with network configuration propagation to specific Google Cloud
entities. Consider rerunning the test after a delay of five minutes. If the
issue persists, stop and start either the source
or destination VM, as described in
Stopping and starting an instance ,
and then rerun the test.
My test returned an overall configuration analysis result of Undetermined
An overall reachability result of
Undetermined
means that the configuration analysis could not determine connectivity.
This result can appear for any of the following reasons:
A permissions error occurred—for example, the user might not have
read permissions for all of the resources named in the test.
An internal error occurred.
The analyzer received an invalid or unsupported argument or was unable
to identify a known endpoint.
You are trying to verify a route that extends beyond Google Cloud.
Connectivity Tests has no access to network configurations
outside Google Cloud.
My test returned an overall configuration analysis result of Ambiguous
An overall configuration analysis result of
Ambiguous
means that Connectivity Tests returned multiple traces and that
there is a mixed final state.
The following table lists some common reasons and fixes for this state.
Reason
Example
How to fix
The source location is not unique.
You specified an internal source IP address without also specifying
the VPC network where the IP address is located (an
internal source IP address is an address that you can't access from the
internet). Because this address can be accessed from multiple
VPC networks, Connectivity Tests could start
a trace from each location.
Update the test with the VPC network where this
IP address is located.
The trace has multiple possible destinations.
Trace destination is a load balancer that has multiple backends or a
backend with a PREFER_IPV6 IP address selection policy, and not all
backends are reachable for all configured IP versions.
Research why this is happening and fix the issues as needed before
re-running the test.
My test returned an overall configuration analysis result of Abort with an Invalid Argument message
Some common reasons for an Invalid Argument message are the following:
The IP address that you provided is not supported. Examples include a loopback
address, a multicast IP address, or an IPv6 address to a VM instance that
has only an IPv4 address assigned to it.
The VM instance or specified network does not exist. This situation can occur when the
VM instance or the VPC network was deleted while you were
creating the test.
When using the Network Management API, the Invalid Argument message is usually
returned for one of the following reasons:
A misspelled name or incorrect location for the VM or the network URI.
An incorrectly specified project ID. This mistake occurs if you used the project name instead of the project ID.
A mismatch between the specified internal IP address and the selected network.
Even though the Google Cloud console for Connectivity Tests
performs a strict validation of the specified Compute Engine instance,
network, and project, this type of mismatch can still occur.
The configuration analysis result is Packet could not be delivered , but live data plane analysis indicates all packets were delivered
This apparent mismatch can occur for several reasons. Consider the following possible causes and remediation:
Recent VPC network configuration changes caused
inconsistency between the configuration analysis and active probing.
Re-run the test, making sure, if possible, that the network configuration
does not change just before the test or during the test.
Sporadic network programming issues occurred. Stop and start either the
source or destination VM, as described in
Stopping and starting an instance ,
and then rerun the test.
The configuration analysis result is Packet could be delivered , but live data plane analysis indicates partial packet loss
This apparent mismatch can occur for several reasons. Possible causes and solutions include the following:
The source or destination VM is being throttled while exceeding
allowed egress or ingress bandwidth. Analyze the VM traffic volume
by going to the VM instance details page and reviewing the details
on the Monitoring tab. Look at the Network Bytes
metric and compare it with the bandwidth limits
described for the machine type in
Network bandwidth .
A widespread issue is affecting the network data plane. Consult
your project's
Performance Dashboard ,
paying particular attention to the relevant zone pair. Additionally,
check the Google Cloud Status Dashboard .
The configuration analysis result is Packet could be delivered and live data plane analysis shows full delivery, but my application experiences loss
This apparent mismatch can occur for several reasons. Possible causes and
solutions include the following:
Traffic might be blocked by the guest OS (for example, by internal firewall
rules). Verify that traffic is not blocked and try the test again.
Application data packets might traverse a different network path than the
live data plane analysis probes. Consider reestablishing the network
connection. For example, try using a different source port.
Live data plane analysis detects unidirectional packet loss. In your case,
packet loss could be occurring on the return path. Consider running a test in
the opposite direction.
The test results don't include a live data plane analysis result
Not all configurations supported by Connectivity Tests can be verified
with live data plane analysis. Make sure the test satisfies the conditions
required for live data plane analysis, as specified in the
overview .
The Network Management API returned an INTERNAL_ERROR
This event should not normally happen. If it does, report the issue to
Support and describe how to reproduce it.
Specific abort causes
This section describes specific scenarios that can cause a test to abort,
providing probable causes and recommendations for each.
No serverless IP ranges
The test is aborted because no Direct VPC egress addresses are assigned to the
revision that doesn't receive traffic.
Probable cause
IP addresses allocated for Cloud Run revisions using Direct VPC egress
are ephemeral. These addresses are allocated only when your revision is
actively serving traffic. If this issue occurs,
it is likely because no active traffic is being sent to your Cloud Run
revision.
For more information about the duration of IP address retention,
see IP address consumption for services and worker pools .
Recommendations
Check the IP addresses allocated for your revision as described in
View allocated IP addresses .
Confirm that the IP address range is in use by Serverless
and is associated with the subnetwork configured for your
Cloud Run revision. If no such IP range is present, send traffic
to your Cloud Run revision to trigger the allocation.
Google Cloud console issues
The Google Cloud console for Connectivity Tests crashed
The Google Cloud console should not normally crash. If it does, report the
issue to Support and describe how to
reproduce it.
What's next
Identify and fix ICMP issues (tutorial)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
