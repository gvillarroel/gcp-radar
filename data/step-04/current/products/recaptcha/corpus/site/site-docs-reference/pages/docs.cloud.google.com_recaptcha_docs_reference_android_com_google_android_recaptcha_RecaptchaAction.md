---
title: "RecaptchaAction \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaAction
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaAction
  title: "RecaptchaAction \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
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
RecaptchaAction
Kotlin
| Java
public final class RecaptchaAction
Actions (e.g., RecaptchaAction.login) intended to be protected by reCAPTCHA Enterprise. An instance of this object should be passed to RecaptchaClient.execute or RecaptchaTasksClient.executeTask .
If the user action you try to protect from is not listed here, please create a custom RecaptchaAction using RecaptchaAction.custom .
Summary
Public fields
static final @ NonNull RecaptchaAction
LOGIN
Indicates that the protected action is a login workflow.
static final @ NonNull RecaptchaAction
SIGNUP
Indicates that the protected action is a sign-up workflow.
Public methods
static final @ NonNull RecaptchaAction
custom (@ NonNull String customAction)
A customized user action.
final @ NonNull String
getAction ()
Label of protected action.
Public fields
LOGIN
public static final @ NonNull RecaptchaAction LOGIN
Indicates that the protected action is a login workflow.
SIGNUP
public static final @ NonNull RecaptchaAction SIGNUP
Indicates that the protected action is a sign-up workflow.
Public methods
custom
public static final @ NonNull RecaptchaAction custom (@ NonNull String customAction)
A customized user action.
getAction
public final @ NonNull String getAction ()
Label of protected action.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
