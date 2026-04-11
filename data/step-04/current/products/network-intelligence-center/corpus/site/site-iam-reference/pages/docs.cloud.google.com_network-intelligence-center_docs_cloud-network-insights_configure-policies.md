---
title: "Create and configure monitoring policies \_|\_ Network Intelligence Center\
  \ - Cloud Network Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-policies
  title: "Create and configure monitoring policies \_|\_ Network Intelligence Center\
    \ - Cloud Network Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Create and configure monitoring policies
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Monitoring policies are sets of rules that govern how probes on Monitoring
Points behave. They generate active paths between a Monitoring Point (source)
and a destination (target) that are continuous streams of telemetry data.
Monitoring policies are created and managed within AppNeta, not Google Cloud console.
A monitoring policy includes the following:
Source (Who) : Defines which Monitoring Points should run these
probes (for example, All MPs in us-east1 or Only the MP named
office-proxy ).
Target (What) : Defines what's being probed (for example,
www.google.com , a specific internal IP, or a SaaS application).
Configuration (How/When) : Defines the test type (such as network or
web monitoring), probe frequency, and specific protocols (ICMP, TCP, HTTP,
HTTPS) to use.
To support monitoring environments of all sizes, Cloud Network Insights
provides the ability to create single policies and to group policies together.
Single monitoring policies : An individual set of rules for defining
a specific monitoring scenario. It contains all the Monitoring Point
source, target, and configuration details for a single destination.
Monitoring policy groups : A container for multiple monitoring
policies that targets a managed list of IPs or hostnames. Use monitoring
policy groups for consistent monitoring preferences and more streamlined
updates to policies.
For more information about monitoring policy groups, see
Manage Monitoring Policy Groups
in the AppNeta documentation.
You can also use tags attached to Monitoring Points to apply policies quickly
and consistently to multiple Monitoring Points. Tags are key-value pairs that
provide additional context, such as location or role. If you create a monitoring
policy that uses tags as the source, then any Monitoring Point you add with that
tag is included in the monitoring policy automatically.
For more information on tags, see
Tagging - Best Practices
in the AppNeta documentation.
Types of monitoring
Cloud Network Insights supports two types of monitoring policies: network
monitoring (network paths) and web monitoring (web paths).
Network monitoring
Network monitoring policies create network paths—hop-by-hop visualizations of
the infrastructure (Layers 3 and 4) that support your applications. As data
travels between the source and the target, Cloud Network Insights monitors the
end-to-end path, including the hops.
Network paths support two different types of paths:
Single-ended paths : The Monitoring Point probes an external target
(for example, google.com , a SaaS VIP, or a router) that does not have a
Monitoring Point installed. This relies on standard protocols (ICMP, TCP,
UDP, or Echo) and is ideal for monitoring public or third-party targets.
Dual-ended paths : The Monitoring Point probes a different Monitoring
Point. Since you control both ends, this mode provides richer data,
including precise one-way latency, jitter, and the ability to detect
asymmetric routing (for example, different paths for uploading versus
downloading).
For more information about Network Monitoring, see
Considerations for Network Monitoring Setup
in the AppNeta documentation.
Web monitoring
Web monitoring policies create web paths—a monitor of the end-to-end experience
of the web application (Layer 7). Web paths measure app responsiveness,
including the following:
DNS resolution time
TCP/TLS handshake time
HTTP status codes (for example, 200 OK or 503 Service Unavailable )
You can set web monitoring policies to emulate user behaviors in the browser
using Selenium scripts or to emulate API calls through HTTP or HTTPS requests.
For more information about Web Monitoring, see
Web Monitoring Overview
in the AppNeta documentation.
Before you begin
You must deploy a Monitoring Point before you can create monitoring policies.
You must be granted the Cloud Network Editor
( roles/networkmanagement.CloudNetworkInsightsEditor ) role.
Create monitoring policies
While you deploy Monitoring Points using Google Cloud, you
configure monitoring policies in AppNeta.
In the Google Cloud console, navigate to Network Intelligence >
Cloud Network Insights .
Go to Cloud Network Insights
To create a network monitoring policy, open the Network Paths page
and click Create Network Monitoring Policy (AppNeta UI) . The Policy
Details page opens in AppNeta.
For detailed instructions on creating network monitoring policies, see
Manage Monitoring Policies
in the AppNeta documentation.
To create a web monitoring policy, open the Web Paths page and click
Create Web Monitoring Policy (AppNeta UI) . The Policy Details page
opens in AppNeta.
For detailed instructions on creating web monitoring policies, see
Create Monitoring Policies with Web Monitoring
in the AppNeta documentation.
You might be prompted to sign in to AppNeta using Google Single Sign-On
and asked to authorize AppNeta to read Google Cloud data.
For more information on creating monitoring policies, see
Set Up Monitoring
in the AppNeta documentation.
What's next
Although the policies are configured in AppNeta, the resulting network path and
web path data, including metrics, alarm logs, and event logs, are available
within the Google Cloud console.
View performance metrics in dashboards
and analyze trends.
Set up alarm rules for alerts and notifications
or view logs .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
