---
title: "Troubleshoot BGP peering \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-bgp-peering
  title: "Troubleshoot BGP peering \_|\_ Cloud Router \_|\_ Google Cloud Documentation"
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
Troubleshoot BGP peering
This guide is for troubleshooting peering issues, such as MD5
authentication or on-premises routes without MED values having priority.
For additional troubleshooting information, see the following:
Troubleshoot BGP sessions
Troubleshoot BGP routes and route
selection
Troubleshoot Cloud Router log messages
BGP peer status is MD5_AUTH_INTERNAL_PROBLEM
Sometimes the status of a BGP peer includes the following values:
md5AuthEnabled : true
statusReason : MD5_AUTH_INTERNAL_PROBLEM
The first value indicates that you have successfully configured MD5
authentication. However, the second value—a statusReason value of
MD5_AUTH_INTERNAL_PROBLEM —indicates that an internal error has prevented
Cloud Router from being able to configure MD5 authentication. For that
reason, the BGP session status is DOWN . In this case, you don't need to do
anything. Cloud Router tries to recover and bring the session back up. If the
session is taking more than one hour to back up, contact Google Cloud
Support .
For information about how to check the peer's status, see Check authentication
status .
Cloud Router and peer use different MD5 keys
When you set up MD5 authentication, the Cloud Router and its peer router must
use the same secret authentication key. If a mismatch occurs, the two routers
cannot communicate. If you think that there's been a mismatch, one solution is
to update the key that is used by the Cloud Router. For information about how
to make this change, see Update the authentication
key .
If you're not sure whether there's been a key mismatch, look for troubleshooting
solutions in your peer router's documentation. Many routers have logs that
record whether or not there's been a key mismatch.
Auto generated MD5 key is longer than on-premises device can support
You can auto generate the MD5 key by clicking Generate and Copy in the UI
console. For more information, see Add authentication to an existing
session . If the
auto generated MD5 key is longer than your on-premises can support, you can
configure MD5 key manually through UI or Google Cloud CLI or API.
On-premises routes without a MED value are taking priority
If the Cloud Router receives an on-premises route that doesn't have a
MED value, the Cloud Router follows the behavior described in RFC
4271 .
The Cloud Router treats the route with the highest
priority by assuming the lowest possible MED value ( 0 ).
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
