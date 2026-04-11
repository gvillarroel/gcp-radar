---
title: "Troubleshooting Cloud Network Insights \_|\_ Network Intelligence Center -\
  \ Cloud Network Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/troubleshooting
  title: "Troubleshooting Cloud Network Insights \_|\_ Network Intelligence Center\
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
Troubleshooting Cloud Network Insights
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
This page shows you how to resolve issues with Cloud Network Insights.
Monitoring Points aren't active
If your Monitoring Point is not active in the Cloud Network Insights Monitoring
Points list after ten minutes, check their status on the target hosts.
Container Monitoring Points aren't active
For containers, check the service status by doing one of the following:
Docker: Run docker ps and check that containers ending in
sequencer_1 and talos-001_1 are Up .
Kubernetes: Run kubectl --namespace appneta get pods to verify pods
are Running .
For troubleshooting information, see the following AppNeta resources:
View the Monitoring Point Status
Docker Troubleshooting Connectivity Quick Reference
Helm Troubleshooting Connectivity Quick Reference
Virtual machine Monitoring Points aren't active
For VMware and KVM, open the Web Admin interface to diagnose the
issue.
Navigate to https:// MP_IP_ADDRESS in a web browser.
Sign in:
Username: admin
Default Password: The Monitoring Point's MAC Address (found in the hypervisor
settings). Enter it in UPPERCASE with no colons (for example, 00505681450A)
KVM Monitoring Point Admin Credentials .
VMWare Monitoring Point Admin Credentials .
Check Status Indicators:
Monitoring Point Connected: Must be Yes .
NTP Synchronized: Must be Yes . If No , ensure outbound UDP port
123 is allowed.
Network State: Ensure eth0 is Up .
For troubleshooting information, see the following AppNeta resources:
KVM Troubleshooting Connectivity Quick Reference .
VMWare Troubleshooting Connectivity Quick Reference .
Monitoring Point does not display in Cloud Network Insights
On occasion when you successfully install a Monitoring Point in a Docker or
Podman environment, the Monitoring Point doesn't connect to Cloud Network Insights and is
not displayed in the Monitoring Points list after waiting for more than 20 minutes.
To resolve this issue, remove the Monitoring Point and create it again using
host networking.
For more information about installing on Docker or Podman using host
networking, see the AppNeta documentation .
Access is blocked by Google Workspace
If you encounter the Access Blocked: admin_policy_enforced error , contact a
Google Workspace administrator to allow AppNeta access.
See Configure Google Workspace for instructions.
Some metrics aren't the same in Google Cloud and AppNeta
When looking at a timeframe longer than one hour in AppNeta, some metrics' raw
values are transformed into the MAX and AVG of this value. In Google Cloud,
the metrics aren't transformed.
For example, in AppNeta you see the average of rtt_avg and the max of the
rtt_avg for a specific timeframe. In Google Cloud, rtt_max and rtt_avg
metrics are not transformed.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
