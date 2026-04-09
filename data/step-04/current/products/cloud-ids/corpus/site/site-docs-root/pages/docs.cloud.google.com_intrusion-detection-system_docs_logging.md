---
title: "Cloud IDS logging information \_|\_ Cloud Intrusion Detection System \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/intrusion-detection-system/docs/logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/intrusion-detection-system/docs
source_metadata:
  url: https://docs.cloud.google.com/intrusion-detection-system/docs/logging
  title: "Cloud IDS logging information \_|\_ Cloud Intrusion Detection System \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud IDS logging information | Cloud Intrusion Detection System | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud IDS
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Product overview
Best practices
Get started
Configure Cloud IDS
Monitor
Cloud IDS logging information
Audit logging information
Investigate Threat Alerts
Troubleshoot
Troubleshoot endpoints and inspection
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Threat logs Sample query
Retention policy
Traffic logs
Home
Documentation
Networking
Cloud IDS
Guides
Was this helpful?
Send feedback
Cloud IDS logging information
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Threat logs Sample query
Retention policy
Traffic logs
This page describes the logs created by Cloud IDS threat alerts.
Threat logs
You can view logs generated due to threats in your network in Cloud Logging.
The logs use a JSON format with the following fields:
threat_id - Unique Palo Alto Networks threat identifier.
name - Threat name.
alert_severity - Severity of the threat. One of INFORMATIONAL , LOW ,
MEDIUM , HIGH , or CRITICAL .
type - Type of the threat.
category - Sub-type of the threat.
alert_time - Time when the threat was discovered.
network - Customer network in which the threat was discovered.
source_ip_address - Suspected traffic's source IP address. When you use a
Google Cloud load balancer the true client IP address is not
available, and this value is the IP address range of the Google Front
End (GFE). The value can be 130.211.0.0/22 or 35.191.0.0/16 .
destination_ip_address - Suspected traffic's destination IP address.
source_port - Suspected traffic's source port.
destination_port - Suspected traffic's destination port.
ip_protocol - Suspected traffic's IP protocol.
application - Suspected traffic's application type—for example, SSH.
direction - Suspected traffic's direction (client-to-server or
server-to-client).
session_id - An internal numerical identifier applied to each session.
repeat_count - Number of sessions with the same source IP, destination IP,
application, and type seen within 5 seconds.
uri_or_filename - URI or filename of the relevant threat, if applicable.
cves - a list of CVEs associated with the threat
details - Additional information about the type of threat, taken from Palo Alto
Networks' ThreatVault.
The previous JSON fields are nested under the log's jsonPayload field. The
log name for threat logs is
projects/<consumer-project>/logs/ids.googleapis.com%2Fthreat .
In addition, the log's labels.id field contains the Cloud IDS endpoint's
name, and its resource.type field is ids.googleapis.com/Endpoint .
Sample query
This query in Cloud Logging queries the IDS threat log in cloud project
my-project , returning all threats reported by the
my-endpoint endpoint between 8am-9am on April 4, 2021, PST time
(-07 timezone offset), where the threat's severity was marked HIGH.
logName="projects/ my-project /logs/ids.googleapis.com%2Fthreat"
AND resource.type="ids.googleapis.com/Endpoint"
AND resource.labels.id=" my-endpoint "
AND timestamp >= "2021-04-18T08:00:00-07"
AND timestamp <= "2021-04-18T09:00:00-07"
AND jsonPayload.alert_severity=("HIGH" OR "CRITICAL")
Retention policy
Retention is determined by the storage buckets in which the logs are located.
By default, logs are placed in the _Default bucket, and by default this bucket
has a retention policy of 30 days.
You can choose to filter logs to different buckets. In addition, retention is
configurable.
If you want a different retention policy than the default 30 days, you can do
one of the following:
Filter all logs into another bucket and configure a retention policy.
Configure a custom retention policy for the _Default bucket. This will
affect all other logs in the _Default bucket.
Traffic logs
You can view logs generated due to network traffic in Cloud Logging.
The logs use a JSON format with the following fields:
start_time - The time of the session start.
elapsed_time - The elapsed time of the session.
network - The network associated with the IDS endpoint.
source_ip_address - The source IP address of the packet.
source_port - The source port of the traffic.
destination_ip_address - The destination IP address of the packet.
destination_port - The destination port of the traffic.
ip_protocol - The IP protocol of the packet.
application - The application associated with the session.
session_id - An internal numerical identifier applied to each session.
repeat_count - The number of sessions with the same source IP, destination IP,
application, and type seen within 5 seconds.
total_bytes - The total number of bytes transferred in the session.
total_packets - The total number of packets transferred in the session.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
