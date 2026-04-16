---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.162Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Permissions Pre-check"
feature_slug: "permissions-pre-check"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling"
keywords:
  - "permissions"
  - "pre"
  - "check"
  - "alerts"
  - "users"
  - "during"
  - "apigee"
  - "pay"
---

# Permissions Pre-check

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

Permissions Pre-check alerts users during Apigee pay-as-you-go provisioning when required permissions are missing and explains how to resolve them.

## Extended Definition

Permissions Pre-check alerts users during Apigee pay-as-you-go provisioning when required permissions are missing and explains how to resolve them.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)

## Supporting Pages

### Manage users in the Apigee UI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you first configure Apigee and create the Google Cloud project to which the Apigee organization is bound, you typically add a few users with different roles like API Admin and Environment Admin .
- Home Documentation Application development Apigee Guides Send feedback Manage users in the Apigee UI Stay organized with collections Save and categorize content based on your preferences.
- Add user accounts in the Apigee UI To specify user permissions for an environment: Ensure that you have already added the user to your Google Cloud project.
- This topic describes how to add users to an environment, remove users from an environment, and update user roles in an environment, using the Apigee UI.

### "Manage users, roles, and permissions using the API \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- Source ID: `site-iam-reference-required-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- More Information For more information, see: Users and roles Manage users, roles, and permissions using the Apigee APIs described in the following table: API method Description Organizations list API List all Apigee organizations, and the related projects for which a user has permissions.
- Home Documentation Application development Apigee Guides Send feedback Manage users, roles, and permissions using the API Stay organized with collections Save and categorize content based on your preferences.
- Environments Test IAM Permissions API Tests the permissions of a user on an environment.
- Returns a subset of permissions that the user has on the environment.

### Handling faults \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- Source ID: `site-docs-reference-required-14`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Category Subcategory Fault Name Description Messaging Failures that occur during the message flow (not including policy failures) Custom faults {fault name} Any faults explicitly handled by the API proxy using the RaiseFault policy Response codes InternalServerError, NotFound HTTP error codes 5xx , 4xx Routing failures NoRoutesMatched Failure in selecting a named TargetEndpoint for a request Classification failures NotFound Failures caused by a request URI that does not match any BasePath for any ProxyEndpoint configurations (that is, no API proxies match the URL in the client app's request) Transport HTTP transport-level errors Connectivity ConnectionRefused, ConnectionReset, ConnectionTimeout Failures occur while establishing network or transport-level connections Request validations ContentLengthMissing, HostHeaderMissing Faults occur during semantics checks on every request Response validations Faults occur during semantics checks on every response IO errors SSLHandshakeError, ReadTimeout, ReadError, WriteTimeout, WriteError, ChunkError Read/write errors at client or target endpoints, timeouts, TLS/SSL errors, and chunked errors System Undefined runtime errors Memory OutOfMemory, GCOverLimit Memory-related failures Thread RogueTaskTerminated Failures such as termination of run-away tasks Policy Faults for each policy type are defined in the Policy reference .
- By default, following is the response that gets returned to the client app: HTTP / 1.1 401 Unauthorized Date : Wed, 20 Jul 2016 19:19:32 GMT Content-Type : application/json Content-Length : 150 Connection : keep-alive Server : Apigee Router Co nne c t io n # 0 t o hos t myorg - test .apigee. net le ft i nta c t { "fault" :{ "faultstring" : "Failed to resolve API Key variable request.queryparam.apikey" , "detail" :{ "errorcode" : "steps.oauth.v2.FailedToResolveAPIKey" }}} Your API users may be able to figure out the error message, but they may not.
- Apigee moves UP to check the next FaultRule. --> <FaultRule name="invalid key rule"> <Step> <Name>invalid-key-message</Name> </Step> <Condition>(fault.name = "FailedToResolveAPIKey")</Condition> </FaultRule> </FaultRules> <!-- If no <FaultRule> is executed, the <DefaultFaultRule> is executed.
- If you want to dive in and get your hands dirty with an easy-to-use sample that illustrates multiple FaultRules, check out this Learn by doing example in the Apigee GitHub samples.

