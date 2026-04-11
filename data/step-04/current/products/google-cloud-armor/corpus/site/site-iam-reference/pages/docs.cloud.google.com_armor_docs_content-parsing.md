---
title: "Request body content parsing \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/content-parsing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/content-parsing
  title: "Request body content parsing \_|\_ Google Cloud Armor \_|\_ Google Cloud\
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
Request body content parsing
Stay organized with collections
Save and categorize content based on your preferences.
This page contains information about configuring request body content parsing, an
optional feature that you can use with your Cloud Armor security
policies.
By default, Cloud Armor evaluates the full content of a request body as a
uniform string (subject to body size limitations )
against the signatures in your preconfigured WAF rules. For requests that
contain alternative encoding like JSON, structural components of the message
(not user specified) can trigger matches against the preconfigured WAF
signatures. To avoid noise and reduce the risk of false positives, we recommend
that you configure Cloud Armor to enable alternative parsing for any
supported content type if your protected workloads do the following:
Serve REST APIs
Use GraphQL
Receive any requests with JSON encoded content.
For each security policy, you can enable or disable JSON parsing for request
bodies. When the Content-Type header is set to
application/json , use the --json-parsing flag in the Google Cloud CLI.
By default, this option is disabled. The syntax for the flag follows:
--json-parsing=[STANDARD | STANDARD_WITH_GRAPHQL | DISABLED]
The flag is available only with gcloud compute security-policies update . You
cannot create a new security policy with this option unless you create a
security policy in a file and then import that file. For more information, see
Import security policies .
Use JSON parsing
In the following example, you configure a list of custom Content-Type header
values for which alternative parsing is applied. The example updates the
security policy POLICY_NAME to enable JSON parsing, and specifies the
content types application/json , application/vnd.api+json ,
application/vnd.collection+json , and application/vnd.hyper+json :
gcloud compute security-policies update POLICY_NAME \
--json-parsing STANDARD \
--json-custom-content-types "application/json,application/vnd.api+json,application/vnd.collection+json,application/vnd.hyper+json"
Use GraphQL parsing
To configure GraphQL parsing, update your security policy to set the
--json-parsing flag to STANDARD_WITH_GRAPHQL :
gcloud compute security-policies update POLICY_NAME \
--json-parsing STANDARD_WITH_GRAPHQL
Logging
Each HTTP(S) request that is evaluated against a Cloud Armor security
policy is logged through Cloud Logging. The logs provide details, such as the
name of the applied security policy, the matching rule, and whether the rule was
enforced. Request logging for new backend service resources is disabled by
default. To log Cloud Armor requests, you must enable the HTTP(S)
logging setting for each backend service protected by a security policy.
For more information, see
Global external Application Load Balancer logging and monitoring .
Limitations
Consider the following limitations when configuring JSON parsing:
Cloud Armor inspects the request body up to the first 64 kB by default. You can configure this limit to either 8 kB,
16 kB, 32 kB, 48 kB, or 64 kB. If the JSON content is larger than the
configured inspection limit, then Cloud Armor applies JSON parsing
up to this limit, which is then inspected by any of the preconfigured WAF rules.
For more information about configuring the inspection limit for the request
body when using preconfigured WAF rules, see
Request body inspection limitation .
Cloud Armor can parse and apply preconfigured WAF rules to JSON-formatted
content (including properly formatted GraphQL over
HTTP requests) when
JSON parsing is enabled with a matching Content-Type header value. For
more information, see JSON
parsing . If
Cloud Armor cannot fully parse JSON content, it may fall back to
processing the entire body as a single URL-encoded string.
If the JSON parser returns no result, URI parsing might be attempted. If the
URI parser returns no name-value parameters or only partial
name-value parameters, the entire or partial string might be treated as the
parameter name for the inspection.
What's next
Configure Cloud Armor security policies
Use request logging
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
