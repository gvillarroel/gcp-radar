---
title: "Insights about routes with an invalid next hop \_|\_ Network Intelligence\
  \ Center - Network Analyzer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/insights/vpc-network/route-invalid-next-hop
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/insights/vpc-network/route-invalid-next-hop
  title: "Insights about routes with an invalid next hop \_|\_ Network Intelligence\
    \ Center - Network Analyzer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Network Analyzer
Guides
Send feedback
Insights about routes with an invalid next hop
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Network Analyzer insights for routes with an
invalid next hop. For information about all the insight types, see
Insight groups and types .
View insights in the Recommender API
To view these insights in the gcloud CLI or the Recommender API, use
the following insight type:
google.networkanalyzer.vpcnetwork.connectivityInsight
You need the following permissions:
recommender.networkAnalyzerConnectivityInsights.list
recommender.networkAnalyzerConnectivityInsights.get
For more information about using the Recommender API for
Network Analyzer insights, see
Use the Recommender CLI and API .
VM doesn't have a network interface in the route's network
This insight indicates that the next hop is invalid because the VM instance
doesn't have a network interface (vNIC) in the route's VPC
network.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for next hop instances .
Recommendations
Attach a vNIC to the VM instance in the route's VPC network.
Next hop IP address isn't the VM's primary IP address
This insight indicates that the route's next hop is a non-primary IP address of
a VM.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for next hop instances .
Recommendations
Delete the invalid route and add a new route using the VM's primary IP address.
IP address forwarding is disabled for the VM instance
This insight indicates that the VM as the next hop of the route cannot forward
packets.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information about IP address forwarding, see
Enable IP forwarding for instances .
Recommendations
Enable the canIpForward property of the VM instance by using the gcloud CLI.
For more information about using the CLI or API, see
Updating instance properties .
Export the existing instance properties, modify the canIpForward field,
and then upload the updated property file.
The canIpForward field in an exported instance property file appears as
follows:
canIpForward: false
If it is true , the instance has canIpForward already enabled. If
canIpForward is false , change the value to true , and update the instance
properties by using the modified file. To change this property, set the
most-disruptive-allowed-action flag value to REFRESH because it does not
require an instance restart.
For more information, see
Update instance properties .
VM is stopped
This insight indicates that the next hop of the route is invalid because the VM
instance has been stopped.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for next hop instances .
Recommendations
Restart the VM instance.
VM is deleted
This insight indicates that the next hop of the route is invalid because the VM
instance has been deleted.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for next hop instances .
Recommendations
Recover the deleted VM. If you don't need this route, you can delete it.
Internal load balancer is misconfigured
This insight indicates that the next hop in the route is invalid because the
internal load balancer used as the next hop of the route is deleted.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations common to instance and internal passthrough Network Load Balancer next hops .
Recommendations
Recreate the deleted load balancer. If you don't need this route, you can delete
it.
Virtual IP address isn't assigned for the internal load balancer backend
This insight indicates that the next hop IP address isn't associated with a
forwarding rule.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations common to instance and internal passthrough Network Load Balancer next hops .
Recommendations
To use the route, configure an internal passthrough Network Load Balancer with the IP address of the next
hop. If you don't need this route, you can delete it.
Forwarding rule IP address mismatch
This insight indicates that the route's next hop is invalid because the IP
address that it targets isn't associated with the specified next hop forwarding
rule.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for internal passthrough Network Load Balancer next hops .
Recommendations
Delete the invalid route and add a new route using the forwarding rule's IP
address.
Invalid forwarding rule type
This insight indicates that the route is invalid because the specified next hop
forwarding rule isn't associated with an internal passthrough Network Load Balancer or uses the L3_DEFAULT
protocol.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for internal passthrough Network Load Balancer next hops .
Recommendations
Review your routes. If you don't need this route, you can delete it.
Cloud VPN tunnel isn't in established state
Note: This insight is available only in Cloud Logging.
This insight shows that the route drops packets because the next hop is an
unestablished Cloud VPN tunnel.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Interpret tunnel status messages .
Recommendations
Review the configuration of the Cloud VPN tunnel.
Cloud VPN tunnel is deleted
This insight shows that the route drops packets because its next hop is a
Cloud VPN tunnel that has been deleted.
The insight includes the following information: the route name, network name,
and the next hop.
Related topics
For more information, see
Considerations for Classic VPN tunnel next hops .
Recommendations
Recover the deleted Cloud VPN tunnel. If you don't need this route, you
can delete it.
Next hop IP address isn't assigned to any endpoint
Note: This insight is available only in Cloud Logging.
This insight shows that the route drops packets because the next hop is an IP
address that isn't assigned to any endpoint in the route's network.
The insight includes the following information: the route name, network name,
and the next hop.
Recommendations
Review your routes. If you don't need this route, you can delete it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
