---
title: "Security Command Center findings \_|\_ Google Cloud Armor \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/armor/docs/cscc-findings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/cscc-findings
  title: "Security Command Center findings \_|\_ Google Cloud Armor \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Security Command Center findings
Stay organized with collections
Save and categorize content based on your preferences.
Security Command Center is the security and risk
database for Google Cloud. Security Command Center includes a risk dashboard
and analytics system for surfacing, understanding, and remediating
Google Cloud security and data risks across an organization.
Google Cloud Armor is integrated automatically with Security Command Center and
exports two findings to the Security Command Center dashboard:
Allowed traffic spike and Increasing deny ratio . This guide
describes the findings and how to interpret them.
If you do not already have Cloud Armor enabled in
Security Command Center, see
Configuring Security Command Center .
You see findings in Security Command Center only for projects that have
Security Command Center enabled at the organization level.
Allowed traffic spike finding
Allowed traffic consists of well-formed HTTP(S) requests that are
destined to reach your backend services after a Cloud Armor
security policy is enforced.
The Allowed traffic spike finding notifies you of a spike in allowed traffic
on a per-backend-service basis. A finding is generated when there is a sudden
increase in the allowed number of requests per second (RPS) compared to the
normal volume observed in recent history. The RPS that constituted the spike and
the RPS of the recent history are provided as part of the finding.
Use case: Potential L7 attacks
Distributed denial-of-service (DDoS) attacks occur when attackers send large
volumes of requests to overload a target service. Layer 7 DDoS attack traffic
typically presents a spike in the number of requests per second.
An Allowed traffic spike finding identifies the backend service to which
the RPS spike is directed and provides the traffic characteristics that caused
Cloud Armor to classify it as an RPS spike. Use this information to
determine the following:
Whether a potential layer 7 DDoS attack is underway.
The service that is being targeted.
The actions that you can take to mitigate the potential attack.
The following is a screenshot of a sample Allowed traffic spike finding on
the Security Command Center dashboard.
Allowed traffic spike finding (click to
enlarge).
Google Cloud calculates the values Long_Term_Allowed_RPS and Short_Term_Allowed_RPS based on Cloud Armor historical
information.
Increasing deny ratio finding
The Increasing deny ratio finding notifies you that there is an increase in
the ratio of traffic that Cloud Armor blocks because of a user-configured
rule in a security policy. Although the denial is expected and does
not affect the backend service, this finding helps alert you to increases in
unwanted and potentially malicious traffic targeting your applications. The RPS
of the denied traffic and the total incoming traffic are provided as part of the
finding.
Use case: Mitigating L7 attacks
An Increasing deny ratio finding enables you to see both the impact of
successful mitigations and significant changes in the behavior of malicious
clients. The finding identifies the backend to which the denied traffic was
directed and provides the traffic characteristics that caused
Cloud Armor to raise the finding. Use this information to evaluate
whether the denied traffic must be studied in detail to further strengthen your
mitigations.
The following is a screenshot of a sample Increasing deny ratio finding on
the Security Command Center dashboard.
Increasing deny ratio finding (click to
enlarge).
Google Cloud calculates the values Long_Term_Denied_RPS and Long_Term_Incoming_RPS based on Cloud Armor historical
information.
Google Cloud Armor Adaptive Protection
Adaptive Protection sends telemetry to the Security Command Center. For more
information about Adaptive Protection findings, see
Monitoring, alerting, and logging
in the Adaptive Protection overview.
Advanced network DDoS protection
Advanced network DDoS protection sends telemetry to the Security Command Center. For more
information about advanced network DDoS protection findings, see
Security Command Center findings .
After traffic returns to normal
Security Command Center findings are notifications that a particular behavior was
observed at a point in time. No notification is sent when the behavior clears.
There might be updates to existing findings if the current traffic
characteristics increase substantially in comparison to existing
characteristics. If there is no follow-up finding, then either the behavior
cleared or the traffic volume did not increase (allow or deny) substantially
after the initial finding was generated.
What's next
Troubleshoot issues
Use the custom rules language reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
