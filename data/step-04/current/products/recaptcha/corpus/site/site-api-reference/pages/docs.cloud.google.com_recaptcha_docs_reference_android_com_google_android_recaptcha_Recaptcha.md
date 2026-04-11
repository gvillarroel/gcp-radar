---
title: "Recaptcha \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/Recaptcha
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/reference/android/com/google/android/recaptcha/Recaptcha
  title: "Recaptcha \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
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
Recaptcha
Kotlin
| Java
public static class Recaptcha
Summary
Public fields
static @ NonNull Recaptcha
INSTANCE
Public methods
final @ NonNull RecaptchaClient
fetchClient (@ NonNull Application application, @ NonNull String siteKey)
Returns a RecaptchaClient associated with the siteKey to access all reCAPTCHA APIs.
static final @ NonNull Task <@ NonNull RecaptchaTasksClient >
fetchTaskClient (@ NonNull Application application, @ NonNull String siteKey)
Returns a Task of RecaptchaTasksClient associated with the siteKey to access all reCAPTCHA APIs.
final @ NonNull Result <@ NonNull RecaptchaClient >
getClient ( @ NonNull Application application, @ NonNull String siteKey, long timeout )
This method is deprecated. Use fetchClient(Application, siteKey) instead.
static final @ NonNull Task <@ NonNull RecaptchaTasksClient >
getTasksClient (@ NonNull Application application, @ NonNull String siteKey)
This method is deprecated. Use fetchTaskClient(Application, siteKey) instead.
static final @ NonNull Task <@ NonNull RecaptchaTasksClient >
getTasksClient ( @ NonNull Application application, @ NonNull String siteKey, long timeout )
This method is deprecated. Use fetchTaskClient(Application, siteKey) instead
Public fields
INSTANCE
public static @ NonNull Recaptcha INSTANCE
Public methods
fetchClient
public final @ NonNull RecaptchaClient fetchClient (@ NonNull Application application, @ NonNull String siteKey)
Returns a RecaptchaClient associated with the siteKey to access all reCAPTCHA APIs.
The SDK supports one site key. Passing a different site key throws an exception.
Parameters
@ NonNull Application application
The context of the application that is protected by reCAPTCHA.
@ NonNull String siteKey
A reCAPTCHA key for Android registered for the caller app at https://cloud.google.com/recaptcha/docs/create-key
Returns
@ NonNull RecaptchaClient
An instance of RecaptchaClient .
fetchTaskClient
public static final @ NonNull Task <@ NonNull RecaptchaTasksClient > fetchTaskClient (@ NonNull Application application, @ NonNull String siteKey)
Returns a Task of RecaptchaTasksClient associated with the siteKey to access all reCAPTCHA APIs.
The SDK supports one site key. Passing a different site key throws an exception.
Parameters
@ NonNull Application application
The context of the application that is protected by reCAPTCHA.
@ NonNull String siteKey
A reCAPTCHA key for Android registered for the caller app at https://cloud.google.com/recaptcha/docs/create-key
Returns
@ NonNull Task <@ NonNull RecaptchaTasksClient >
An instance of RecaptchaClient .
getClient
public final @ NonNull Result <@ NonNull RecaptchaClient > getClient ( @ NonNull Application application, @ NonNull String siteKey, long timeout )
This method is deprecated. Use fetchClient(Application, siteKey) instead.
Returns a Result of RecaptchaClient associated with the siteKey to access all reCAPTCHA APIs.
The SDK supports one site key. Passing a different site key throws an exception.
At least a 10000 millisecond timeout is suggested to allow for slow networking, though in some cases longer timeouts may be necessary. The minimum allowable value is 5000 milliseconds.
Parameters
@ NonNull Application application
The context of the application that is protected by reCAPTCHA.
@ NonNull String siteKey
A reCAPTCHA key for Android registered for the caller app at https://cloud.google.com/recaptcha/docs/create-key
long timeout
Maximum amount of time to initialize the RecaptchaClient in milliseconds. Default value is 10 seconds.
Returns
@ NonNull Result <@ NonNull RecaptchaClient >
An instance of Result encapsulating a RecaptchaClient .
getTasksClient
public static final @ NonNull Task <@ NonNull RecaptchaTasksClient > getTasksClient (@ NonNull Application application, @ NonNull String siteKey)
This method is deprecated. Use fetchTaskClient(Application, siteKey) instead.
Returns a Task of RecaptchaTasksClient associated with the siteKey to access all reCAPTCHA APIs.
The SDK supports one site key. Passing a different site key throws an exception.
This method will throw a timeout exception after 10 seconds.
Parameters
@ NonNull Application application
The context of the application that is protected by reCAPTCHA.
@ NonNull String siteKey
A reCAPTCHA key for Android registered for the caller app at https://cloud.google.com/recaptcha/docs/create-key
Returns
@ NonNull Task <@ NonNull RecaptchaTasksClient >
An instance of Task encapsulating a RecaptchaTasksClient .
getTasksClient
public static final @ NonNull Task <@ NonNull RecaptchaTasksClient > getTasksClient ( @ NonNull Application application, @ NonNull String siteKey, long timeout )
This method is deprecated. Use fetchTaskClient(Application, siteKey) instead
Returns a Task of RecaptchaTasksClient associated with the siteKey to access all reCAPTCHA APIs.
The SDK supports one site key. Passing a different site key throws an exception.
At least a 10000 millisecond timeout is suggested to allow for slow networking, though in some cases longer timeouts may be necessary. The minimum allowable value is 5000 milliseconds.
Parameters
@ NonNull Application application
The context of the application that is protected by reCAPTCHA.
@ NonNull String siteKey
A reCAPTCHA key for Android registered for the caller app at https://cloud.google.com/recaptcha/docs/create-key
long timeout
Maximum amount of time to initialize the RecaptchaClient in milliseconds. Default value is 10 seconds.
Returns
@ NonNull Task <@ NonNull RecaptchaTasksClient >
An instance of Task encapsulating a RecaptchaTasksClient .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
