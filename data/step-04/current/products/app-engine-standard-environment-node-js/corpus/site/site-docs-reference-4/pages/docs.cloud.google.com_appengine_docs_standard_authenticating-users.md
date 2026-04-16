---
title: "Authenticating users \_|\_ App Engine standard environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/authenticating-users
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/authenticating-users
  title: "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Authenticating users
Stay organized with collections
Save and categorize content based on your preferences.
Go
Java
Node.js
PHP
Python
Ruby
To authenticate users in Google Cloud applications, Google offers the following
user authentication methods:
Authentication Service
Summary
Identity Platform (recommended)
Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol. It offers enterprise features including multi-factor authentication, OIDC and SAML SSO support, multi-tenancy, 99.95% SLA, and more. The recommended method when starting a new project, so you can use the capabilities of Identity Platform as well as the legacy features from Firebase Authentication .
Firebase Authentication
Authenticate users by using different authentication options including with Google, Facebook, and Twitter. Firebase Authentication supports the largest number of users while maintaining the smallest amount of code. The recommended method for deploying a solution in the fewest steps.
Google Identity Services for Web
Authenticate users by using Google user accounts from Gmail and Google Workspace. The recommended method for supporting Google-only accounts, or supporting Google accounts in an existing sign-in system.
OAuth 2.0 and OpenID Connect
Provides federated identity from the provider of your choice, including Google. The recommended method if you want to build the user authentication protocol yourself.
Identity-Aware Proxy (IAP)
Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app. IAP lets you control access to your App Engine services, before requests reach your application resources. This makes IAP unsuitible for protecting against activity within the same Google Cloud project. The recommended method if you want to use Google accounts and IAM to control user access.
Users API
Authenticate users that are using Google and Google Workspace accounts. The App Engine Users service is accessible only through the legacy bundled services.
Identity Platform
Identity Platform is a customer
identity and access management (CIAM) platform that lets organizations customize
identity and authentication for user sign-up and sign-in in their applications.
Identity Platform supports multiple authentication methods (SAML, OIDC,
email/password, social, phone, and custom auth) to provide flexible integration
options for any identity solution. Identity Platform is built on
Google Cloud's global scale, performance, network, and security, and comes with
an enterprise-grade support and SLA to meet the demands of virtually any app or
service.
This solution is best for most users who want flexible authentication options
based on reliable, enterprise-grade features and SLAs.
Identity Platform offers its own user identity system. If you're already using
Google Workspace for your domain and want to authenticate users based on that
login, you should use Google Identity Services for Web .
To learn about integrating Identity Platform with App Engine, try the
how-to guide for signing in users on
App Engine .
Firebase Authentication
Firebase Authentication provides a
drop-in, customizable identity and authentication service for user sign-up and
sign-in. Similar to Identity Platform, Firebase Authentication supports multiple
authentication methods (SAML, OIDC, email/password, social, mobile, and custom
auth) to provide flexible integration options for any identity solution.
Firebase Authentication differs from Identity Platform in that it lacks certain
enterprise features. For more information, see
Differences between Identity Platform and Firebase Authentication .
This solution is best if you want the most lightweight way to set up user
authentication for an App Engine app. For many users, Firebase Authentication
is the fastest way to implement or test authentication.
To learn more about Firebase Authentication, try the following:
Firebase Web Tutorial
highlights how to use Firebase on a website, including user sign-in with Google
as the Identity Provider.
Firebase Quickstart Apps show
how to integrate Firebase across platforms, using both federated sign-in and
username/password sign-in examples. Samples demonstrate Firebase Authentication
using the JavaScript SDK
as well as on iOS
and Android .
Google Identity Services for Web
Google Identity Services for Web
is a sign-in client library for Google built on the OAuth 2.0 and OpenID Connect
protocols. It allows for quick and easy sign-in by providing a Sign in With
Google button that appears on your website or app.
This solution is best if you want to authenticate users based on their Google
Account, or if you are using Google Admin console for your domain.
OAuth 2.0 and OpenID Connect
OpenID Connect is an identity layer on top of the OAuth 2.0 protocol. Google
offers an
implementation
of OAuth 2.0 that conforms to the
OpenID Connect specification and is
OpenID Certified . There are also several
other providers
available.
This solution is best if you want total customization and control of your
authentication implementation.
For more information, see
OpenID Connect .
Identity-Aware Proxy (IAP)
Unlike the other authentication options that implement authentication within
your app, IAP protects and secures
your application by adding an IAM authentication and
authorization layer in front of your resources. This layer verifies inbound
external requests before the app can be reached. Users who are not authorized
access to your app can't have access to reach your App Engine app.
You can enable IAP for your whole app, or for specific services
or versions of your app. IAP-protected services or applications
can only be accessed by
principals
which have the correct
IAM role .
When a user tries to access an IAP-secured resource,
IAP performs authentication and authorization checks for you.
Learn how IAP secures your application resources on the
IAP overview .
IAP doesn't protect against activity
within a project, such as one App Engine service accessing another
service in the same project.
This solution is best if you want to use Google user accounts and
IAM to authorize user access.
To learn how to configure IAP for your App Engine
resources, see the
IAP quickstart .
Users API
Note: The Users API is only supported for Python,
Java, Go, and PHP apps that
use the
legacy bundled services .
The Users API allows an App Engine app to perform the following tasks:
Detect whether the current user is signed in using a Google Account.
Redirect the user to the appropriate sign-in page to sign in.
Request the user create a new Google Account if they don't have one already.
While a user is signed in to the application, the app can access the user's
email address. The app can also detect whether the current user is an
administrator, making it easy to implement admin-only areas of the app.
This solution works well if you are upgrading an existing app from a
first-generation runtime to a second-generation runtime, and want to continue
to use the Users API. If you want the flexibility of moving to
Cloud Run or another Google Cloud app hosting platform later on,
we recommend migrating to a more modern user authentication solution.
To learn about integrating the Users API, see the
Users API overview .
Other authentication services
Auth0 provides authentication with various identity
providers and single sign-on features.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
