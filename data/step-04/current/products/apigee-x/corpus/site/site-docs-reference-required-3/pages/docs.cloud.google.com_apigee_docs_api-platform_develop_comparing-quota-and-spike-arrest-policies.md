---
title: "Comparing rate-limiting policies \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies
  title: "Comparing rate-limiting policies \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Comparing rate-limiting policies
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Key Point:
The
Quota ,
SpikeArrest ,
PromptTokenLimit , and
LLMTokenQuota policies are all used for rate limiting, but they serve
different purposes and operate on different metrics. While Quota and
SpikeArrest focus on request counts, the PromptTokenLimit and LLMTokenQuota
policies manage and control consumption based on tokens, which is crucial
for AI and Large Language Model (LLM) workloads.
While SpikeArrest and PromptTokenLimit maintain counts with high reliability,
they are designed to use a
Redis best-effort cache to store their counts. Because the cache is not
replicated, there are cases where counts may be lost, such as a restart of
the cache servers, or other rare cases.
For these reasons, we recommend against using SpikeArrest or
PromptTokenLimit for use cases that require accurate counting. Only the
synchronous Quota or LLMTokenQuota policy offers accurate counting across
all regions in a given timeframe.
Use the comparison chart below to help you decide which policy to use
for your rate-limiting use case:
Quota
SpikeArrest
LLMTokenQuota
PromptTokenLimit
Use it to:
Limit the number of API proxy calls a developer app or developer can
make over a specific period of time. It's best for rate limiting over
longer time intervals like days, weeks, or months, especially when
accurate counting is a requirement.
Limit the number of API calls that can be made against an API proxy
across all consumers over a short period of time, such as seconds or
minutes.
Manage and limit the total token consumption for LLM API calls over a
specified period (minute, hour, day, week, or month). This allows you to
control LLM expenditures and apply granular quota management based on
API products.
Protect your API proxy's target backend against token abuse,
massive prompts, and potential denial-of-service attempts by limiting
the rate of tokens sent in the input by throttling requests based on
the number of tokens in the user's
prompt message. It is a comparative paradigm to Spike Arrest for API
traffic, but for tokens.
Don't use it to:
Protect your API proxy's target backend against traffic spikes. Use
SpikeArrest or PromptTokenLimit for that.
Count and limit the number of connections apps can make to your API
proxy's target backend over a specific period of time, especially when
accurate counting is required.
Protect your API proxy's target backend against token abuse.
Use PromptTokenLimit for that.
Accurately count and limit the total number of tokens consumed for
billing or long-term quota management. Use the LLMTokenQuota policy for
that.
Stores a count?
Yes
No
Yes, it maintains counters that track the number of tokens consumed by
LLM responses.
It counts tokens to enforce a rate limit but does not store a
persistent, long-term count like the LLMTokenQuota policy.
Best practices for attaching the policy:
Attach it to the ProxyEndpoint Request PreFlow ,
generally after the authentication of the user.
This enables the policy to check the quota counter at the entry
point of your API proxy.
Attach it to the ProxyEndpoint Request PreFlow ,
generally at the very beginning of the flow.
This provides spike protection at the entry point of your API proxy.
If you use both SpikeArrest and Quota policies in the same proxy,
SpikeArrest should always be attached before the Quota policy in
the ProxyEndpoint Request PreFlow. SpikeArrest acts as a first line of
defense against sudden traffic bursts, smoothing traffic before requests
are evaluated against longer-term Quota limits. This prevents spikes from
prematurely exhausting quota.
Apply the enforcement policy ( EnforceOnly ) in the
request flow and the counting policy
( CountOnly ) in the response flow . For
streaming responses, attach the counting policy to an
EventFlow .
Attach it to the ProxyEndpoint Request PreFlow , at the
beginning of the flow, to protect your backend from oversized prompts.
If you use both PromptTokenLimit and LLMTokenQuota policies in the same proxy,
PromptTokenLimit should always be attached before the LLMTokenQuota
policy in the ProxyEndpoint Request PreFlow. PromptTokenLimit acts as a
first line of defense against oversized prompts, rejecting them before
requests are evaluated against longer-term LLMTokenQuota limits. This prevents
oversized prompts from prematurely exhausting token quota.
HTTP status code when limit has been reached:
429 (Too Many Requests)
429 (Too Many Requests)
429 (Too Many Requests)
429 (Too Many Requests)
Good to know:
The Quota counter is stored in Cassandra.
You can configure the policy to synchronize the counter
asynchronously to save resources, but this may allow calls slightly
in excess of the limit.
Lets you choose between a smoothing algorithm or an effective
count algorithm. The former smooths the number of requests that can
occur in a specified period of time, and the latter limits the total
number of requests that can occur within a specified time period, no
matter how rapidly they are sent in succession.
Smoothing is not coordinated across Message Processors.
Can be configured as CountOnly to track token usage or
EnforceOnly to reject requests that exceed the quota.
It works with API Products to allow for granular quota
configurations based on the app, developer, model, or a specific LLM
operation set.
Uses <LLMTokenUsageSource> to extract token count
from the LLM response and <LLMModelSource> to
identify the model used.
The token calculation might differ slightly from the one used by the LLM.
The <UserPromptSource> element specifies the
location of the user prompt in the request message.
Get more details:
Quota policy
SpikeArrest policy
LLMTokenQuota policy
PromptTokenLimit policy
Tip: You can also use the following to protect slow/sluggish backends
without impacting the performance of the APIs:
Creating reusable shared flows: Combine policies and resources into a
shared flow that you can consume from multiple API proxies, and even from
other shared flows.
Chaining API proxies together : Specify that one proxy is the target
endpoint of another, effectively connecting the two proxies in a proxy
chain. Chaining proxies in this way can help you avoid a network hop, and
so improve overall performance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
