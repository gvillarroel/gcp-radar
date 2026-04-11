---
title: "Package types (1.29.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.types
  title: "Package types (1.29.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (1.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.29.0 (latest)
1.28.2
1.27.0
1.26.1
1.25.0
1.24.1
1.23.0
1.22.0
1.21.2
1.20.0
1.19.1
1.18.1
1.17.1
1.16.1
1.15.0
1.14.0
1.13.0
1.12.1
1.11.1
1.10.0
1.9.0
1.8.3
1.7.1
1.6.1
1.5.0
1.4.1
1.3.1
1.2.0
1.1.2
1.0.0
0.4.2
0.3.3
0.2.1
0.1.0
API documentation for recaptchaenterprise_v1.types package.
Classes
AccountDefenderAssessment
Account defender risk assessment.
AccountVerificationInfo
Information about account verification, used for identity
verification.
AddIpOverrideRequest
The AddIpOverride request message.
AddIpOverrideResponse
Response for AddIpOverride.
AndroidKeySettings
Settings specific to keys that can be used by Android apps.
AnnotateAssessmentRequest
The request message to annotate an Assessment.
AnnotateAssessmentResponse
Empty response for AnnotateAssessment.
AppleDeveloperId
Contains fields that are required to perform Apple-specific
integrity checks.
Assessment
A reCAPTCHA Enterprise assessment resource.
AssessmentEnvironment
The environment creating the assessment. This describes your
environment (the system invoking CreateAssessment), NOT the
environment of your user.
ChallengeMetrics
Metrics related to challenges.
CreateAssessmentRequest
The create assessment request message.
CreateFirewallPolicyRequest
The create firewall policy request message.
CreateKeyRequest
The create key request message.
DeleteFirewallPolicyRequest
The delete firewall policy request message.
DeleteKeyRequest
The delete key request message.
EndpointVerificationInfo
Information about a verification endpoint that can be used
for 2FA.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Event
The event being assessed.
ExpressKeySettings
Settings specific to keys that can be used for reCAPTCHA
Express.
FirewallAction
An individual action. Each action represents what to do if a
policy matches.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
FirewallPolicy
A FirewallPolicy represents a single matching pattern and
resulting actions to take.
FirewallPolicyAssessment
Policy config assessment.
FraudPreventionAssessment
Assessment for Fraud Prevention.
FraudSignals
Fraud signals describing users and cards involved in the
transaction.
GetFirewallPolicyRequest
The get firewall policy request message.
GetKeyRequest
The get key request message.
GetMetricsRequest
The get metrics request message.
IOSKeySettings
Settings specific to keys that can be used by iOS apps.
IpOverrideData
Information about the IP or IP range override.
Key
A key used to identify and configure applications (web and/or
mobile) that use reCAPTCHA Enterprise.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ListFirewallPoliciesRequest
The list firewall policies request message.
ListFirewallPoliciesResponse
Response to request to list firewall policies belonging to a
project.
ListIpOverridesRequest
The ListIpOverrides request message.
ListIpOverridesResponse
Response for ListIpOverrides.
ListKeysRequest
The list keys request message.
ListKeysResponse
Response to request to list keys in a project.
ListRelatedAccountGroupMembershipsRequest
The request message to list memberships in a related account
group.
ListRelatedAccountGroupMembershipsResponse
The response to a ListRelatedAccountGroupMemberships call.
ListRelatedAccountGroupsRequest
The request message to list related account groups.
ListRelatedAccountGroupsResponse
The response to a ListRelatedAccountGroups call.
Metrics
Metrics for a single Key.
MigrateKeyRequest
The migrate key request message.
PhoneFraudAssessment
Assessment for Phone Fraud
PrivatePasswordLeakVerification
Private password leak verification info.
RelatedAccountGroup
A group of related accounts.
RelatedAccountGroupMembership
A membership in a group of related accounts.
RemoveIpOverrideRequest
The RemoveIpOverride request message.
RemoveIpOverrideResponse
Response for RemoveIpOverride.
ReorderFirewallPoliciesRequest
The reorder firewall policies request message.
ReorderFirewallPoliciesResponse
The reorder firewall policies response message.
RetrieveLegacySecretKeyRequest
The retrieve legacy secret key request message.
RetrieveLegacySecretKeyResponse
Secret key is used only in legacy reCAPTCHA. It must be used
in a 3rd party integration with legacy reCAPTCHA.
RiskAnalysis
Risk analysis result for an event.
ScoreDistribution
Score distribution.
ScoreMetrics
Metrics related to scoring.
SearchRelatedAccountGroupMembershipsRequest
The request message to search related account group
memberships.
SearchRelatedAccountGroupMembershipsResponse
The response to a SearchRelatedAccountGroupMemberships call.
SmsTollFraudVerdict
Information about SMS toll fraud.
TestingOptions
Options for user acceptance testing.
TokenProperties
Properties of the provided event token.
TransactionData
Transaction data associated with a payment protected by
reCAPTCHA Enterprise.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TransactionEvent
Describes an event in the lifecycle of a payment transaction.
UpdateFirewallPolicyRequest
The update firewall policy request message.
UpdateKeyRequest
The update key request message.
UserId
An identifier associated with a user.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
UserInfo
User information associated with a request protected by
reCAPTCHA Enterprise.
WafSettings
Settings specific to keys that can be used for WAF (Web
Application Firewall).
WebKeySettings
Settings specific to keys that can be used by websites.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
