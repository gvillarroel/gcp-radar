---
title: "RecaptchaException \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaException
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaException
  title: "RecaptchaException \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
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
RecaptchaException
Kotlin
| Java
public final class RecaptchaException extends Exception
java.lang.Object
↳
kotlin.Throwable
↳
java.lang.Exception
↳
com.google.android.recaptcha.RecaptchaException
Exception to be returned on reCAPTCHA Enterprise API failures.
Summary
Public constructors
RecaptchaException ( @ NonNull RecaptchaErrorCode errorCode, @ NonNull String errorMessage )
Public methods
final @ NonNull RecaptchaErrorCode
getErrorCode ()
Returns the RecaptchaErrorCode associated with this exception.
final @ NonNull String
getErrorMessage ()
Returns a useful message to help diagnose this exception.
Inherited methods
From kotlin.Throwable
final void
addSuppressed (@ NonNull Throwable p0)
@ NonNull Throwable
fillInStackTrace ()
Throwable
getCause ()
@ NonNull String
getLocalizedMessage ()
String
getMessage ()
@ NonNull StackTraceElement[]
getStackTrace ()
final @ NonNull Throwable[]
getSuppressed ()
@ NonNull Throwable
initCause (@ NonNull Throwable p0)
void
printStackTrace ()
void
printStackTrace (@ NonNull PrintStream p0)
void
printStackTrace (@ NonNull PrintWriter p0)
void
setStackTrace (@ NonNull StackTraceElement[] p0)
Public constructors
RecaptchaException
public RecaptchaException ( @ NonNull RecaptchaErrorCode errorCode, @ NonNull String errorMessage )
Public methods
getErrorCode
public final @ NonNull RecaptchaErrorCode getErrorCode ()
Returns the RecaptchaErrorCode associated with this exception.
getErrorMessage
public final @ NonNull String getErrorMessage ()
Returns a useful message to help diagnose this exception.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
