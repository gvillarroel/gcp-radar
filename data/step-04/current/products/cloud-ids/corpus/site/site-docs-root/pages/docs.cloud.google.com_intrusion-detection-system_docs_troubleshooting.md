---
title: "Troubleshoot endpoints and inspection \_|\_ Cloud Intrusion Detection System\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/intrusion-detection-system/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/intrusion-detection-system/docs
source_metadata:
  url: https://docs.cloud.google.com/intrusion-detection-system/docs/troubleshooting
  title: "Troubleshoot endpoints and inspection \_|\_ Cloud Intrusion Detection System\
    \ \_|\_ Google Cloud Documentation"
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
Troubleshoot endpoints and inspection
Stay organized with collections
Save and categorize content based on your preferences.
Endpoint is not generating alerts
Note: If your endpoint generates any alerts, it is considered to be functional.
To confirm that an IDS endpoint is functional, do the following:
Verify that the IDS endpoint appears in the Cloud IDS Google Cloud console,
and that there is a packet mirroring policy in the Attached Policies column.
Ensure that the attached policy is enabled by clicking the policy name, and
make sure that Policy Enforcement is set to Enabled .
To verify that traffic is being mirrored, choose a VM Instance in the
monitored VPC, go to the Observability tab, and make sure that the Mirrored
Bytes dashboard shows traffic being mirrored to the IDS endpoint.
Ensure that the same traffic (or VM) is not affected by more than one
packet mirroring policy, as each packet can be mirrored to only one
destination. Check the Attached Policies column, and ensure that there is
only one policy per VM.
Generate a test alert by using SSH to connect to a VM in the monitored
network, then run the following command:
curl http://example.com/cgi-bin/../../../..//bin/cat%%20/etc/passwd
If curl is unavailable on the platform, you can use a similar tool for
performing HTTP requests.
After a few seconds, an alert should show up in both the Cloud IDS UI and
in Cloud Logging (Threat Log).
Decrypting traffic for inspection
To inspect traffic, Cloud IDS uses Packet Mirroring to send
packet-level copies of configured traffic to the IDS VM. Even though the
collector destination receives all mirrored packets, any packets that carry data that was
encrypted using a secure protocol like TLS, HTTPS, or HTTP2 can't be decrypted
by Cloud IDS.
For example, if you use HTTPS or HTTP2 as the backend service protocol for an
external application load balancer, packets sent to the load balancer's backends
can be mirrored to Cloud IDS; however, the requests cannot be inspected by
Cloud IDS because the packets carry encrypted data. To enable Cloud IDS
inspection, you must change the backend service protocol to HTTP. Alternatively,
you can use Google Cloud Armor for intrusion
prevention, and enable application load balancer logs for request inspection. For
more information about application load balancer request logging, see
Global external Application Load Balancer logging and
monitoring and
Regional external Application Load Balancer logging and
monitoring .
Only a small volume of traffic is inspected
Cloud IDS inspects traffic sent to or received by resources in mirrored
subnets, including Google Cloud VMs and GKE nodes and
Pods.
If a mirrored subnet contains no VMs, Cloud IDS has no traffic to inspect.
Endpoint policies are ignored when using Cloud NGFW L7 inspection policies
When you use Cloud Next Generation Firewall L7 inspection policies (rules with the
apply_security_profile_group action) and Cloud IDS together, firewall
policy rules are evaluated and traffic is not mirrored for Cloud IDS
inspection. You can avoid this situation by ensuring that
Cloud NGFW L7 inspection policies don't apply to packets that you
need to inspect with Cloud IDS.
Cannot disable the Cloud IDS API
You can't disable the Cloud IDS API if you have any IDS endpoints configured.
To disable the API, you must first delete all IDS endpoints .
Mismatch between mirrored VM traffic and VM network metrics
When you monitor Compute Engine network metrics for a Virtual Machine (VM)
instance whose traffic is mirrored to Cloud IDS, you might notice that
the value of mirrored_bytes_count
is slightly higher than the sum of
sent_bytes_count and
received_bytes_count . This
difference is expected because sent_bytes_count and received_bytes_count
don't include ethernet headers, but mirrored_bytes_count does.
Note: Cloud IDS also has a
received_bytes_count metric. This
metric measures bytes received by the Cloud IDS endpoint, whereas the
Compute Engine metric
received_bytes_count measures
bytes received by a specific VM instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
