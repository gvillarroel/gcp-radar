---
title: "DecodeJWT policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy
  title: "DecodeJWT policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
DecodeJWT policy
Stay organized with collections
Save and categorize content based on your preferences.
Standard policy
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The DecodeJWT policy decodes a JWT without verifying the signature on the JWT. This is most
useful when used in concert with the VerifyJWT policy , when the value of a claim from within
the JWT must be known before verifying the signature of the JWT.
The JWT Decode policy works regardless of the algorithm that was used to sign the JWT.
See JWS and JWT policies overview for a detailed introduction.
This policy is a Standard policy and can be deployed to any environment type. For
information on policy types and availability with each environment type, see
Policy types .
Sample: Decode a JWT
The policy shown below decodes a JWT found in the flow variable var.jwt . This
variable must be present and contain a viable (decodable) JWT. The policy can obtain the JWT from
any flow variable.
< DecodeJWT name = "JWT-Decode-HS256" >
< DisplayName>JWT Verify HS256 < / DisplayName >
< Source>var . jwt < / Source >
< / DecodeJWT >
The policy writes its output to context variables so that subsequent policies or conditions
in the API proxy can examine those values. See Flow variables for a
list of the variables set by this policy.
Element reference for Decode JWT
The policy reference describes the elements and attributes of the Decode JWT policy.
Attributes that
apply to the top-level element
<DecodeJWT name="JWT" continueOnError="false" enabled="true" async="false">
The following attributes are common to all policy parent elements.
Attribute
Description
Default
Presence
name
The internal name of the policy. Characters you can use in the name are restricted to:
A-Z0-9._\-$ % . However, the Apigee UI enforces additional
restrictions, such as automatically removing characters that are not alphanumeric.
Optionally, use the <displayname></displayname> element to
label the policy in the Apigee UI proxy editor with a different, natural-language
name.
N/A
Required
continueOnError
Set to false to return an error when a policy fails. This is expected
behavior for most policies.
Set to true to have flow execution continue even after a policy
fails.
false
Optional
enabled
Set to true to enforce the policy.
Set to false to "turn off" the policy. The policy will not be enforced
even if it remains attached to a flow.
true
Optional
async
This attribute is deprecated.
false
Deprecated
<DisplayName>
<DisplayName>Policy Display Name</DisplayName>
Use in addition to the name attribute to label the policy in the Apigee UI proxy editor
with a different, natural-language name.
Default
If you omit this element, the value of the policy's name attribute is used.
Presence
Optional
Type
String
<Source>
< Source>jwt - variable < / Source >
If present, specifies the flow variable in which the policy expects to find the JWT to
decode.
Note: By default, the JWT is retrieved from the variable
request.header.authorization . In this case, Apigee looks for the JWT in the
request Authorization header. If you pass the JWT in the Authorization header, you do not need to
include the Source element in the policy; however, you must include
Bearer in the auth header. For example, you would pass the JWT in the
Authorization header like this:
curl -v http://52.200.92.187:9001/doctest-jwt/verify-rs256 -H "Authorization: Bearer <your JWT>"
You can configure to policy to retrieve the JWT from a form or query parameter variable or any
other variable. If the variable does not exist or if the policy otherwise can't find the JWT, the
policy returns an error.
Default
request.header.authorization (See the note above for important information
about the default).
Presence
Optional
Type
String
Valid values
An Apigee flow variable name
Flow variables
Upon success, the Verify JWT and Decode JWT policies set
context variables according to this pattern:
jwt . { policy_name } . { variable_name }
For example, if the policy name is jwt-parse-token , then the policy will store
the subject specified in the JWT to the context variable named jwt.jwt-parse-token.decoded.claim.sub .
(For backward compatibility, it will also be available in jwt.jwt-parse-token.claim.subject )
Variable name
Description
claim.audience
The JWT audience claim. This value may be a string, or an array of strings.
claim.expiry
The expiration date/time, expressed in milliseconds since epoch.
claim.issuedat
The Date the token was issued, expressed in milliseconds since epoch.
claim.issuer
The JWT issuer claim.
claim.notbefore
If the JWT includes a nbf claim, this variable will contain the value,
expressed in milliseconds since epoch.
claim.subject
The JWT subject claim.
claim. name
The value of the named claim (standard or additional) in the payload. One of these will be set for
every claim in the payload.
decoded.claim. name
The JSON-parsable value of the named claim (standard or additional) in the payload. One variable is set for
every claim in the payload. For example, you can use decoded.claim.iat to
retrieve the issued-at time of the JWT, expressed in seconds since epoch. While you
can also use the claim. name flow variables, this is the
recommended variable to use to access a claim.
decoded.header. name
The JSON-parsable value of a header in the payload. One variable is set for
every header in the payload. While you can also use the header. name flow variables,
this is the recommended variable to use to access a header.
expiry_formatted
The expiration date/time, formatted as a human-readable string. Example:
2017-09-28T21:30:45.000+0000
header.algorithm
The signing algorithm used on the JWT. For example, RS256, HS384, and so on.
See (Algorithm) Header Parameter for more.
header.kid
The Key ID, if added when the JWT was generated. See also "Using a JSON Web Key Set
(JWKS)" at JWT
policies overview to verify a JWT.
See (Key ID) Header Parameter for more.
header.type
Will be set to JWT .
header. name
The value of the named header (standard or additional). One of these will be set for
every additional header in the header portion of the JWT.
header-json
The header in JSON format.
is_expired
true or false
payload-claim-names
An array of claims supported by the JWT.
payload-json
The payload in JSON format.
seconds_remaining
The number of seconds before the token will expire. If the token is expired, this
number will be negative.
time_remaining_formatted
The time remaining before the token will expire, formatted as a human-readable string.
Example: 00:59:59.926
valid
In the case of VerifyJWT, this variable will be true when the signature is verified, and
the current time is before the token expiry, and after the token notBefore value, if they
are present. Otherwise false.
In the case of DecodeJWT, this variable is not set.
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
Fix
steps.jwt.FailedToDecode
401
Occurs when the policy is unable to decode the JWT. The JWT may be malformed, invalid
or otherwise not decodable.
build
steps.jwt.FailedToResolveVariable
401
Occurs when the flow variable specified in the <Source> element of
the policy does not exist.
steps.jwt.InvalidToken
401
Occurs when the flow variable specified in the <Source> element of
the policy is out of scope or can't be resolved.
build
Deployment errors
These errors can occur when you deploy a proxy containing this policy.
Error name
Cause
Fix
InvalidEmptyElement
Occurs when the flow variable containing the JWT to be decoded is not specified in the
<Source> element of the policy.
build
Fault variables
These variables are set when a runtime error occurs. For more information, see What you need to know
about policy errors .
Variables
Where
Example
fault.name=" fault_name "
fault_name is the name of the fault, as listed in the
Runtime errors
table above. The fault name is the last part of the fault code.
fault.name Matches "InvalidToken"
JWT.failed
All JWT policies set the same variable in the case of a failure.
JWT.failed = true
Example error response
JWT Policy Fault Codes
For error handling, the best practice is to trap the errorcode part of the error
response. Do not rely on the text in the faultstring , because it could change.
Example fault rule
<FaultRules>
<FaultRule name="JWT Policy Errors">
<Step>
<Name>JavaScript-1</Name>
<Condition>(fault.name Matches "InvalidToken")</Condition>
</Step>
<Condition>JWT.failed=true</Condition>
</FaultRule>
</FaultRules>
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
