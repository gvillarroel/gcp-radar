---
title: "Lifecycle of a risk case \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/lifecycle-risk-case
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/lifecycle-risk-case
  title: "Lifecycle of a risk case \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
Lifecycle of a risk case
Stay organized with collections
Save and categorize content based on your preferences.
A risk case tracks how your business alerts, investigates, and acts on
suspicious or risky activity related to AML. A single risk case may consist of
many events and may include multiple parties, but each party must have its own
investigation process tracked through a risk case. In particular, each party in
a risk case should have distinct entries for events listed in the following
section.
Event types
To express these events, AML AI uses the following types in the
RiskCaseEvent table.
Important: Only include risk cases and events relevant to money laundering risk in the risk case events table. Exclude risk cases related to other risks.
Initial alerts trigger the following event types:
AML_ALERT_GOOGLE : triggered using Google AML risk score
AML_ALERT_LEGACY : triggered by another automatic risk assessment system
AML_ALERT_ADHOC : manually triggered, for example, by the relationship
manager
AML_ALERT_EXPLORATORY : triggered based on considerations other than pure
risk, for example, data exploration to improve the quality of AML models
AML_ALERT_EXTERNAL : triggered based on an external request
Events for the start and the end of an investigation process trigger the
following event types:
AML_PROCESS_START : investigation process starts
AML_PROCESS_END : The investigation process is complete and no further
outcomes are expected. If there is no AML_SAR or AML_EXIT by this point,
then AML AI safely concludes there will be none.
Actions taken based on the investigation trigger the following event types:
AML_SAR : suspicious activity report (SAR) is filed against the party for
suspicious behavior
AML_EXIT : A customer exit is triggered. This event must have a
corresponding AML_PROCESS_START event for the same party and risk case ID.
Optionally, if the investigation identifies a period of suspicious activity, you
may add the following event types:
AML_SUSPICIOUS_ACTIVITY_START : this event marks the beginning of
suspicious activity identified during the investigation
AML_SUSPICIOUS_ACTIVITY_END : This event marks the end of suspicious
activity identified during the investigation.
Important: It is recommended that you define a suspicious activity period
whenever the time duration of the activities under investigation is known.
Make sure to specify a single AML_SUSPICIOUS_ACTIVITY_START event and a single
AML_SUSPICIOUS_ACTIVITY_END event for a given party and risk case ID, or to
not specify either. In the absence of AML_SUSPICIOUS_ACTIVITY_START and
AML_SUSPICIOUS_ACTIVITY_END , AML AI selects a period prior to
the start of the investigation process.
Risk case stages and outcomes
Risk case event data helps AML AI understand the lifecycle of
risk cases and how to classify risk cases with positive outcomes (leading to an
exit), ongoing investigations (not finished yet), or negative outcomes (finished
and not leading to an exit).
Figure 1. Positive case example.
Figure 2. Negative case example.
The stages illustrated in the preceding diagrams can be expressed with risk case
events as in the following steps:
An alert is created for a given party.
Alerts are triggered in a number of different ways:
An ad hoc alert triggered manually somewhere within your business, for
example, by a relationship manager ( type: AML_ALERT_ADHOC )
An automated alert triggered using a Google AML
risk score as input ( type: AML_ALERT_GOOGLE )
An automated alert triggered by a rules-based or AI system other than
AML AI ( type: AML_ALERT_LEGACY )
An alert triggered based on considerations other than pure risk, for
example, data exploration to improve quality of AML models
( type: AML_ALERT_EXPLORATORY )
An external request triggered an investigation process
( type: AML_ALERT_EXTERNAL )
An existing investigation process identifies risk with an additional
party and starts an investigation process into that party (type:
AML_ALERT_ADHOC ).
If this alert is related to investigations of other parties and worked as
part of the same case, it can reuse the same risk case ID. Otherwise, a new
risk case ID should be used.
Following an alert, an AML investigation process starts
( type: AML_PROCESS_START ).
While your process may consist of multiple investigation stages, this event
marks the start of the first stage.
During some investigations, risk is acted upon, or other alerts or
investigations for other parties are triggered .
A SAR is filed relating to AML risk of this customer ( type: AML_SAR ).
The investigation process triggers the process to exit the customer
( type: AML_EXIT ).
The investigation process triggers an investigation
( AML_PROCESS_START ) or an alert ( AML_ALERT_ADHOC ) for another party.
The investigation process concludes and no further investigation activity
for this party is expected as part of this risk case
( type: AML_PROCESS_END ).
In particular, if there has not been an AML_SAR or AML_EXIT event prior
to the end of the process, then AML AI concludes that there
was not sufficient risk identified to justify these outcomes for this party.
Suspicious activity period: Risk case events are also used to specify the
period during which suspicious activity, if any, was identified. To identify
this period, you may specify a single AML_SUSPICIOUS_ACTIVITY_START and
AML_SUSPICIOUS_ACTIVITY_END pair for a given party and risk case ID. This
input helps models identify risk at the correct time, for example, during or
shortly after the period when the suspicious activity occurred.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
