---
title: "RecaptchaTasksClient \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaTasksClient
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/RecaptchaTasksClient
  title: "RecaptchaTasksClient \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
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
RecaptchaTasksClient
Kotlin
| Java
public interface RecaptchaTasksClient
A client that enables Android Apps to trigger reCAPTCHA Enterprise.
Summary
Public methods
abstract @ NonNull Task <@ NonNull String >
executeTask (@ NonNull RecaptchaAction recaptchaAction)
Executes reCAPTCHA Enterprise on a user action.
abstract @ NonNull Task <@ NonNull String >
executeTask (@ NonNull RecaptchaAction recaptchaAction, long timeout)
Executes reCAPTCHA Enterprise on a user action.
Public methods
executeTask
abstract @ NonNull Task <@ NonNull String > executeTask (@ NonNull RecaptchaAction recaptchaAction)
Executes reCAPTCHA Enterprise on a user action.
This method will throw a timeout exception after 5 seconds.
Parameters
@ NonNull RecaptchaAction recaptchaAction
The user action to protect.
Returns
@ NonNull Task <@ NonNull String >
A Task that would resolve with a reCAPTCHA Enterprise token.
executeTask
abstract @ NonNull Task <@ NonNull String > executeTask (@ NonNull RecaptchaAction recaptchaAction, long timeout)
Executes reCAPTCHA Enterprise on a user action.
It is suggested the usage of 10 seconds for the timeout. The minimum value is 5 seconds.
Parameters
@ NonNull RecaptchaAction recaptchaAction
The user action to protect.
long timeout
Maximum amount of time of execute() call in milliseconds.
Returns
@ NonNull Task <@ NonNull String >
A Task that would resolve with a reCAPTCHA Enterprise token.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
