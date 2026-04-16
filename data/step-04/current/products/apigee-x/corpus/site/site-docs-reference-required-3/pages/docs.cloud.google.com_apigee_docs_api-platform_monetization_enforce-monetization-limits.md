---
title: "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits
  title: "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\
    \ Documentation"
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
Enforce monetization limits in API proxies
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
This page describes how to enforce monetization limits by attaching policies to API proxies in a
monetized API product.
Add an authentication policy
Apigee monetization uses the
VerifyAPIKey
policy or the
VerifyAccessToken operation of the OAuth2 policy to
determine if an incoming request is monetizable by checking for the active published rate plan.
Attach the policy to the API proxy using the Apigee UI or the API. See
Editing an API proxy for
information on editing a proxy.
See also:
Attaching a policy to a flow
Verifying access tokens
Monitoring and debugging the authentication policy using Debug
Enforce subscriptions on API products
Attach the
MonetizationLimitsCheck policy to API proxies to enforce subscriptions on
the API product by developer or AppGroup:
If no active rate plan exists for the API product fetched during the proxy call execution,
the product is deemed non-monetized, the MonetizationLimitsCheck policy does not fetch any
further data, and the policy has no effect.
If a rate plan is found but a subscription is not found for the API developer or AppGroup, the
MonetizationLimitsCheck policy raises a fault and blocks the API call.
When you attach the MonetizationLimitsCheck policy to an API proxy, Apigee populates the
mint.limitscheck.* and mint.subscription_* flow variables,
as described in
Debugging the MonetizationLimitsCheck policy and the mint flow variable reference.
Note : To prevent specific transactions from getting billed, you can use the transactionSuccess
monetization variable. For more information about using the transactionSuccess variable,
see Monetization variables .
For more information, see:
Creating an API proxy
Editing an API proxy
Attaching a policy to a flow
Debugging the MonetizationLimitsCheck policy using Debug
MonetizationLimitsCheck policy
Enforce monetization quotas in API proxies
Note: If you add a quota after the API product has been in use, the quota
calculation starts from the next monetized transaction.
A quota defines the number of requests allowed for an API product over a given time period. To
enforce quotas for monetization, it is recommended that you set the quota value when
creating an API product .
Defining a quota value for an API product does not automatically enforce restrictions on the
number of calls that can be made through the API product. You must also add Quota policies to the
API proxies that are referenced by the API product to ensure the quota value defined at the
API product-level is enforced.
Edit the Quota policy to enable the
<UseQuotaConfigInAPIProduct>
element to use the quota configuration defined at the API product-level.
For example:
<Quota continueOnError="false" enabled="true" name="impose-quota">
<DisplayName>Impose Quota</DisplayName>
<UseQuotaConfigInAPIProduct stepName="verify-api-key">
<DefaultConfig>
<Allow>10000</Allow>
<Interval>1</Interval>
<TimeUnit>week</TimeUnit>
</DefaultConfig>
</UseQuotaConfigInAPIProduct>
<Distributed>true</Distributed>
<Synchronous>true</Synchronous>
<StartTime>2021-01-01 12:00:00</StartTime>
</Quota>
Notes:
You can define the default configuration <DefaultConfig> to use if the
quota configuration is not defined in the API product, but the quota configuration defined at
the API product-level takes precedence.
When you add the <UseQuotaConfigInAPIProduct> element to the Quota
policy, then Apigee ignores any <Allow> , <Interval> , and
<TimeUnit> child elements of <Quota> .
When you attach the Quota policy to an API proxy, the ratelimit.* flow variables are
populated, as described in
Debugging the Quota policy
and the Quota policy
flow variables
reference.
For more information, see:
Editing an API proxy
Attaching a policy to a flow
Debugging the Quota policy using Debug
Quota policy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
