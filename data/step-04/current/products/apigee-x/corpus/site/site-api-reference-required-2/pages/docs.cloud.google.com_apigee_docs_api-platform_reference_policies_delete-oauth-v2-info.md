---
title: "DeleteOAuthV2Info policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/delete-oauth-v2-info
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/delete-oauth-v2-info
  title: "DeleteOAuthV2Info policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Reference
Send feedback
DeleteOAuthV2Info policy
Stay organized with collections
Save and categorize content based on your preferences.
Extensible policy
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The DeleteOAuthv2Info policy deletes the specified OAuth V2 authorization code or access token.
Note: Alternatively, you can revoke and re-approve tokens, as
described in Approving and
revoking access tokens .
This policy is an Extensible policy and use of this policy might have cost or
utilization implications, depending on your Apigee license. For information on policy types
and usage implications, see
Policy types .
Samples
Delete Access Token
Below is an example policy used to delete an OAuth 2.0 access token. The example below locates
the access token to delete on the request message by looking for a header called
access_token .
<DeleteOAuthV2Info name="DeleteAccessToken">
<AccessToken ref="request.header.access_token"></AccessToken>
</DeleteOAuthV2Info>
Delete Auth Code
Below is an example policy used to delete an OAuth 2.0 authorization code. The example below
locates the auth code to delete on the request message by looking for a query parameter called
code .
<DeleteOAuthV2Info name="DeleteAuthCode">
<AuthorizationCode ref="request.queryparam.code"></AuthorizationCode>
</DeleteOAuthV2Info>
Element Reference
The element reference describes the elements and attributes of the DeleteOAuthV2Info
policy.
< ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? >
< DeleteOAuthV2Info async = "false" continueOnError = "false" enabled = "true" name = "DeleteOAuthV2Info-1" >
< DisplayName>Delete OAuth v2 . 0 Info 1 < / DisplayName >
< AccessToken ref = { some - variable } >< / AccessToken >
< !-- < AuthorizationCode ref = { some - variable } >< / AuthorizationCode > -- >
< Attributes / >
< / DeleteOAuthV2Info
<DeleteOAuthV2Info> attributes
<DeleteOAuthV2Info async="false" continueOnError="false" enabled="true" name="Delete-OAuth-v20-Info-1">
Attribute
Description
Default
Presence
async
Set to true to specify that the policy should be run in a thread
pool different than the pool servicing the request/response flow. Default
is false .
This setting is only used for internal optimization.
false
Optional
continueOnError
Most policies are expected to return an error when a failure occurs. By setting this
attribute to true , Flow execution continues on failure.
false
Optional
enabled
Determines whether a policy is enforced or not. If set to false , a
policy is 'turned off', and not enforced (even though the policy remains attached to a
Flow).
true
Optional
name
The internal name of the policy. This name is referenced in Step elements to attach
the policy to a Flow.
Note: Characters you can use in the name are restricted to:
A-Z0-9._\-$ % . The Apigee UI enforces additional restrictions, such as
automatically removing characters that are not alphanumeric.
N/A
Required
<AccessToken> element
Identifies the variable where the access token to delete is located. For example, if the
access token is attached to request message as a query parameter called "access_token", specify
request.queryparam.access_token . You can use any valid variable that references the
token. Or, could pass in the literal token string (rare case).
<AccessToken ref="request.queryparam.access_token"></AccessToken>
Default:
N/A
Presence:
Either <AccessToken> or <AuthorizationCode> is
required.
Type:
String
Attributes
Attribute
Description
Default
Presence
ref
An access token variable. Typically, retrieved from a flow variable. For
example: request.header.token or request.queryparam.token .
N/A
Optional
<AuthorizationCode> element
Identifies the variable where the authorization code to delete is located. For example, if the
auth code is attached to request message as a query parameter called "code", specify
request.queryparam.code . You can use any valid variable that references the token.
Or, could pass in the literal token string (rare case).
<AuthorizationCode ref="request.queryparam.code"></AuthorizationCode>
Default:
N/A
Presence:
Either <AccessToken> or <AuthorizationCode> is
required.
Type:
String
Attributes
Attribute
Description
Default
Presence
ref
An access token variable. Typically, retrieved from a flow variable. For
example: request.header.code or request.queryparam.code .
N/A
Optional
<DisplayName>
element
A natural-language name that labels the policy in the Apigee UI proxy editor. If omitted,
the policy name attribute is used.
<DisplayName>DeleteOAuthV2Info 1</DisplayName>
Default:
The value of the policy's name attribute.
Presence:
Optional
Type:
String
Error reference
This section describes the fault codes and error messages that are returned and fault variables that are set by Apigee when this policy triggers an error.
This information is important to know if you are developing fault rules to
handle faults. To learn more, see What you need to know
about policy errors and Handling
faults .
Runtime errors
These errors can occur when the policy executes.
Use API Monitoring to investigate fault
codes and diagnose issues faster. See Set up a policy fault code alert
for an example. See Fault code reference for a complete
list of all fault codes that you can handle with API Monitoring.
-->
Fault code
HTTP status
Cause
steps.oauth.v2.invalid_access_token
401
The access token sent to the policy is invalid.
steps.oauth.v2.invalid_request-authorization_code_invalid
401
The authorization code sent to the policy is invalid.
steps.oauth.v2.InvalidAPICallAsNoApiProductMatchFound
401
Please see
Oauth2.0 Access Token Verification throws "Invalid API call as no apiproduct match found" error
for information about troubleshooting this error.
Deployment errors
Refer to the message reported in the UI for information about deployment errors.
Fault variables
These variables are set when this policy triggers an error at runtime.
Note: You an use these variables to create Fault Rule conditions. For
more information, see What you need to know
about policy errors .
Variables
Where
Example
fault.name=" fault_name "
fault_name is the name of the fault, as listed in the Runtime errors table above. The fault name is the last part of the fault code.
fault.name = "invalid_access_token"
oauthV2. policy_name .failed
policy_name is the user-specified name of the policy that threw the fault.
oauthV2.DeleteTokenInfo.failed = true
oauthV2. policy_name .fault.name
policy_name is the user-specified name of the policy that threw the fault.
oauthV2.DeleteTokenInfo.fault.name = invalid_access_token
oauthv2. policy_name .fault.cause
policy_name is the user-specified name of the policy that threw the fault.
oauthV2.DeleteTokenInfo.cause = Invalid Access Token
Example error response
{
"fault": {
"faultstring": "Invalid Access Token",
"detail": {
"errorcode": "keymanagement.service.invalid_access_token"
}
}
}
Example fault rule
<faultrule name="VariableOfNonMsgType"></faultrule><FaultRule name="DeleteOAuthV2Info_Faults">
<Step>
<Name>AM-InvalidTokenResponse</Name>
</Step>
<Condition>(fault.name = "invalid_access_token")</Condition>
</FaultRule>
Schema
Each policy type is defined by an XML schema ( .xsd ). For reference, policy schemas
are available on GitHub.
Related topics
OAuthV2 policy
OAuth home
Customizing Tokens
and Authorization Codes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
