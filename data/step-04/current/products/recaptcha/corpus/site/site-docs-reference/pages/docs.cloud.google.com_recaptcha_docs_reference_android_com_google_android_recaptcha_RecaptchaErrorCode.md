---
title: "RecaptchaErrorCode \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaErrorCode
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaErrorCode
  title: "RecaptchaErrorCode \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
RecaptchaErrorCode
Kotlin
| Java
public enum RecaptchaErrorCode extends Enum
java.lang.Object
↳
kotlin.Enum
↳
com.google.android.recaptcha.RecaptchaErrorCode
Error status codes for the reCAPTCHA Enterprise API.
Summary
Enum Values
INTERNAL_ERROR
reCAPTCHA Enterprise has faced an internal error, please try again in a bit.
INVALID_ACTION
The user action is invalid.
INVALID_KEYTYPE
Cannot create a reCAPTCHA Enterprise client with a non-Android site key or a key not enabled for applications distributed outside of the Google Play Store.
INVALID_PACKAGE_NAME
Cannot create a reCAPTCHA Enterprise client because the site key used doesn't support the calling package.
INVALID_SITEKEY
The site key used to call reCAPTCHA Enterprise is invalid.
INVALID_TIMEOUT
The timeout provided for init/execute is invalid as we expect a minimum of 5000 milliseconds.
NETWORK_ERROR
reCAPTCHA Enterprise cannot connect to Google servers, please make sure the app has network access.
NO_NETWORK_FOUND
No network was found in the device.
UNKNOWN_ERROR
Unknown error occurred during the workflow.
Public methods
final int
getErrorCode ()
final @ NonNull String
getErrorMessage ()
final @ NonNull RecaptchaErrorCode
valueOf (@ NonNull String value)
Returns the enum constant of this type with the specified name.
final @ NonNull RecaptchaErrorCode[]
values ()
Returns an array containing the constants of this enum type, in the order they're declared.
Enum Values
INTERNAL_ERROR
RecaptchaErrorCode RecaptchaErrorCode.INTERNAL_ERROR
reCAPTCHA Enterprise has faced an internal error, please try again in a bit.
INVALID_ACTION
RecaptchaErrorCode RecaptchaErrorCode.INVALID_ACTION
The user action is invalid. Use only letters and '_' when creating an action.
INVALID_KEYTYPE
RecaptchaErrorCode RecaptchaErrorCode.INVALID_KEYTYPE
Cannot create a reCAPTCHA Enterprise client with a non-Android site key or a key not enabled for applications distributed outside of the Google Play Store.
Register a new site key with the key type set to "Android app" or enable the option for non-Google Play Store applications. Create key .
INVALID_PACKAGE_NAME
RecaptchaErrorCode RecaptchaErrorCode.INVALID_PACKAGE_NAME
Cannot create a reCAPTCHA Enterprise client because the site key used doesn't support the calling package.
INVALID_SITEKEY
RecaptchaErrorCode RecaptchaErrorCode.INVALID_SITEKEY
The site key used to call reCAPTCHA Enterprise is invalid.
INVALID_TIMEOUT
RecaptchaErrorCode RecaptchaErrorCode.INVALID_TIMEOUT
The timeout provided for init/execute is invalid as we expect a minimum of 5000 milliseconds.
NETWORK_ERROR
RecaptchaErrorCode RecaptchaErrorCode.NETWORK_ERROR
reCAPTCHA Enterprise cannot connect to Google servers, please make sure the app has network access.
NO_NETWORK_FOUND
RecaptchaErrorCode RecaptchaErrorCode.NO_NETWORK_FOUND
No network was found in the device.
UNKNOWN_ERROR
RecaptchaErrorCode RecaptchaErrorCode.UNKNOWN_ERROR
Unknown error occurred during the workflow.
Public methods
getErrorCode
public final int getErrorCode ()
getErrorMessage
public final @ NonNull String getErrorMessage ()
valueOf
public final @ NonNull RecaptchaErrorCode valueOf (@ NonNull String value)
Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)
Throws
kotlin.IllegalArgumentException
if this enum type has no constant with the specified name
values
public final @ NonNull RecaptchaErrorCode[] values ()
Returns an array containing the constants of this enum type, in the order they're declared.
This method may be used to iterate over the constants.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
