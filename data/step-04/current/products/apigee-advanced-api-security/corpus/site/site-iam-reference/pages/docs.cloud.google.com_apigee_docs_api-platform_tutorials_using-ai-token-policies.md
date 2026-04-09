---
title: "Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies
  title: "Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Get started with LLM token policies
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee , but not to Apigee hybrid .
View
Apigee Edge documentation.
Overview
Apigee's LLM token policies are crucial for cost control, performance
optimization, and platform stability, leveraging LLM token usage and user prompt
token metrics to enforce limits and provide real-time monitoring.
This document describes how to get started with the following LLM token policies:
PromptTokenLimit policy : Protects targets from token abuse by
throttling tokens based on the user prompt message. The PromptTokenLimit
policy is like a spike arrest for your AI prompts. It helps you control
the rate of token usage from user prompts to prevent abuse and ensure your
backend services are not overwhelmed.
LLMTokenQuota policy : Controls LLM expenditures and applies granular
quota management based on API products. The LLMTokenQuota policy allows
you to enforce token consumption limits for your LLM APIs over a specific
time period (e.g., per minute, hour, day, or month). This is crucial for
managing costs and ensuring fair usage of your AI services.
PromptTokenLimit policy
Use the PromptTokenLimit policy when you want to protect your backend
services from sudden spikes in token usage from user prompts. For example, you
can limit the number of tokens per minute to a reasonable number to prevent a
single user from overwhelming your service.
Add this policy to the request flow of your API proxy.
The following PromptTokenLimit policy example limits the
token rate to 1,000 tokens per minute:
<PromptTokenLimit continueOnError="false" enabled="true" name="PTL-limitTokens-1">
<DisplayName>Limit Prompt Tokens</DisplayName>
<!-- The rate at which to limit tokens. Here, 1,000 per minute -->
<Rate>1000pm</Rate>
<!-- Specifies where to get the user's prompt from the request -->
<UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource>
</PromptTokenLimit>
Where:
<Rate> : The rate at which to limit tokens.
<UserPromptSource> : Specifies where to get the user's prompt from the request.
See the PromptTokenLimit policy reference page for:
Examples
Flow variables
Error reference
Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks:
Create an API product
Creating an API proxy using the UI
Attaching and configuring policies in the UI
LLMTokenQuota policy
Use the LLMTokenQuota policy when you want to set and enforce token
consumption quotas for different API products, developers, or apps. For
example, you can offer different token quotas for different subscription
tiers.
The policy can be used in two main ways:
Counting Tokens : Use the CountOnly setting to track
token usage without enforcing a hard limit. This is useful for monitoring
and reporting.
Enforcing Quotas : Use the EnforceOnly setting to reject
API calls once the token quota has been exceeded.
Add an EnforceOnly policy to the request flow to check if
the quota has been exceeded. Add a CountOnly policy to the
response flow to count the tokens used in the LLM response.
The following LLMTokenQuota policy example enforces a
quota of 10,000 tokens per hour, with the settings dynamically sourced from an
API product:
< LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" >
< EnforceOnly>true < / EnforceOnly >
< ! -- The interval and time unit for the quota -- >
< Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval >
< TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit >
< ! -- The number of tokens allowed in the interval -- >
< Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / >
< ! -- Specifies where to get the token usage from the LLM ' s response -- >
< LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource >
< ! -- Specifies where to get the model name from the LLM ' s response -- >
< LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource >
< / LLMTokenQuota >
Where:
<EnforceOnly> : When set to true , this
element is used to reject API calls once the token quota has been exceeded. This empowers API providers to set strict limits on the number of tokens
consumed by applications over a defined interval.
<Interval> : This element specifies the time interval
over which the number of tokens from LLM responses is calculated. It is used in conjunction with <TimeUnit> and
<Allow> to define the token quota.
<TimeUnit> : This element defines the time unit for the
<Interval> . Valid values include minute ,
hour , day , or month .
<Allow> : This element defines the number of tokens allowed in the
<Interval> .
<LLMTokenUsageSource> : This element provides the source
of the token usage from the LLM response. It should be a message template
that provides a single value of the token usage.
<LLMModelSource> : This element provides the source of the
model from the LLM response or request. It should be a message template
that provides a single value of the model name.
See the LLMTokenQuota policy reference page for:
Examples
Flow variables
Error reference
Configure the LLMTokenQuota policy in the Apigee UI as described in the
following sections:
Create an API product
Creating an API proxy using the UI
Attaching and configuring policies in the UI
Limitations
The LLM token policies have the following limitations:
LLMTokenQuota policy limitations
The policy currently only supports text-based tokens.
The last allowed request may consume more tokens than the remaining quota.
The policy requires the exact JSON path for the LLM tokens consumed in
the response payload and cannot detect it automatically.
PromptTokenLimit policy limitations
The policy currently only supports text-based tokens.
The policy uses a standard library to count the tokens, which may
differ from how some LLM providers count tokens.
The policy requires the exact JSON path for the prompt text; it cannot
find it dynamically.
See also
PromptTokenLimit policy
LLMTokenQuota policy
REST Resource: organizations.apiproducts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
