---
title: "MfaEnrollment \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/MfaEnrollment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/MfaEnrollment
  title: "MfaEnrollment \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
MfaEnrollment
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TotpInfo
EmailInfo
JSON representation
Information on which multi-factor authentication (MFA) providers are enabled for an account.
JSON representation
{
"mfaEnrollmentId" : string ,
"displayName" : string ,
"enrolledAt" : string ,
// Union field mfa_value can be only one of the following:
"phoneInfo" : string ,
"totpInfo" : {
object ( TotpInfo )
} ,
"emailInfo" : {
object ( EmailInfo )
}
// End of list of possible types for union field mfa_value .
// Union field unobfuscated_mfa_value can be only one of the following:
"unobfuscatedPhoneInfo" : string
// End of list of possible types for union field unobfuscated_mfa_value .
}
Fields
mfaEnrollmentId
string
ID of this MFA option.
displayName
string
Display name for this mfa option e.g. "corp cell phone".
enrolledAt
string ( Timestamp format)
Timestamp when the account enrolled this second factor.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Union field mfa_value . The defining value of the MFA option. mfa_value can be only one of the following:
phoneInfo
string
Normally this will show the phone number associated with this enrollment. In some situations, such as after a first factor sign in, it will only show the obfuscated version of the associated phone number.
totpInfo
object ( TotpInfo )
Contains information specific to TOTP MFA.
emailInfo
object ( EmailInfo )
Contains information specific to email MFA.
Union field unobfuscated_mfa_value .
unobfuscated_mfa_value can be only one of the following:
unobfuscatedPhoneInfo
string
Output only. Unobfuscated phoneInfo.
TotpInfo
This type has no fields.
Information about TOTP MFA.
EmailInfo
Information about email MFA.
JSON representation
{
"emailAddress" : string
}
Fields
emailAddress
string
Email address that a MFA verification should be sent to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
