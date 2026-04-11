---
title: "Investigate Threat Alerts \_|\_ Cloud Intrusion Detection System \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/intrusion-detection-system/docs/investigate
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/intrusion-detection-system/docs
source_metadata:
  url: https://docs.cloud.google.com/intrusion-detection-system/docs/investigate
  title: "Investigate Threat Alerts \_|\_ Cloud Intrusion Detection System \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud IDS
Guides
Send feedback
Investigate Threat Alerts
Stay organized with collections
Save and categorize content based on your preferences.
This page provides details about how to investigate the threat alerts that Cloud IDS
generates.
Review alert details
You can review the following JSON fields in the alert log :
threat_id - Unique Palo Alto Networks threat identifier.
name - Threat name.
alert_severity - Severity of the threat. One of INFORMATIONAL , LOW ,
MEDIUM , HIGH , or CRITICAL .
type - Type of the threat.
category - Sub-type of the threat.
alert_time - Time when the threat was discovered.
network - Customer network in which the threat was discovered.
source_ip_address - Suspected traffic's source IP address. When you use a
Google Cloud load balancer, the true client IP address is not
available, and this address is the IP address of your load balancer.
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
Networks' Threat Vault.
Search the Palo Alto Networks Threat Vault
Use the following instructions to search for Common Vulnerabilities and Exposures (CVEs),
threat IDs, threat names, and threat categories.
If you don't already have an account, create an account on Palo Alto Networks'
LiveCommunity .
Access the Palo Alto Networks
Threat Vault
using your account.
In the Threat Vault, search for any of the following values based on information from
your threat alert:
One or more CVE from the cves field
THREAT_ID from the threat_id field
THREAT_NAME from the name field
CATEGORY from the category field
Verify that the signature status says Released and not Disabled .
If Disabled , the signature is no longer valid and is disabled.
When Cloud IDS catches up on updates from Palo Alto Networks, the signature stops generating alerts.
If a file triggered the finding, perform the following steps:
Search for the hashes that are associated with the signature on the
VirusTotal website to determine whether any of them are malicious.
If the hash of the file triggering the signature is known, compare it to
those in Threat Vault. If they don't match it's a
signature collision ,
which means that the file and the malicious sample might contain the same byte values in the same byte offsets.
If they do match and the file isn't malicious, it's a false positive and you can disregard the threat alert..
If a command-and-control or DNS threat triggered the finding, perform the following steps:
Identify the destination domain that triggered the signature on
outbound communications from an endpoint.
Investigate the reputation of domains and IP addresses involved to develop a
broad understanding of the potential threat level.
If the traffic has a business impact and you are convinced that the traffic isn't
malicious, or if you are willing to accept the risk, you can add
Threat Exceptions
to your Cloud IDS endpoint to disable the threat ID, .
Implement a Cloud Armor rule or a
Cloud NGFW rule to
block the malicious traffic using the connection source and destination IP addresses
in the finding.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
