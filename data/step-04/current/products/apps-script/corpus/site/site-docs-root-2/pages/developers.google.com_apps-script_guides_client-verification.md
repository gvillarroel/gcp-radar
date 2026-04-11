---
title: "OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/client-verification
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/client-verification
  title: "OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
OAuth Client Verification
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
Unverified Apps Script projects using sensitive scopes and accessed by users outside the domain will display an "unverified app" screen and have a cap on the number of unverified users.
Verifying your app with Google removes the unverified app screen and the user cap, building user confidence.
To request verification, you need a website on a verified domain hosting publicly-accessible information about your app and privacy policy, along with a standard Google Cloud project you have edit access for.
The verification process involves completing the OAuth consent screen in your app's Google Cloud project with details like application name, logo, support email, scopes, authorized domains, and homepage and privacy policy URLs.
Apps Script projects that request sensitive OAuth scopes.
Google OAuth clients that request certain sensitive OAuth scopes are
subject to verification by Google. For a high-level overview of the
authorization process, see
Authorization for Google Services .
Verification isn't required for Google Apps Script projects
whose owner and users belong to the same Google Workspace domain or customer.
If you don't verify your script project's OAuth client, users outside your
domain see an unverified app screen when they try to authorize your script.
An unverified authorization flow allows these users to authorize unverified
apps and use them, but only after confirming they understand the risks. The
total number of unverified app users is also capped.
For more information, see the following articles:
Unverified Apps
OAuth Application Verification FAQ
Google API Services: User Data Policy
Figure 1 : Unverified app screen
Figure 2 : Unverified app authorization flow
This change applies to Google OAuth web clients, including those used by all
Apps Script projects. By
verifying your app with Google ,
you can remove the unverified app screen from your authorization flow and
give your users confidence that your app is non-malicious.
Unverified apps
Google Workspace add-ons, web apps, and other deployments (such as apps that use the
Apps Script API ) may need verification.
add-ons are no longer verified as part of the
Google Workspace add-on review process , and
must be verified prior to publishing an add-on.
Applicability
If the app uses sensitive OAuth scopes, the unverified app screen may appear
as part of the authorization flow. Its presence (and the resulting unverified
app authorization flow) depends on what account the app is published from and
what account is attempting to use the app. For example, apps published
internally within a specific Google Workspace organization don't result in the
unverified app authorization flow for accounts in that domain, even if the app
hasn't been verified.
The following table illustrates what situations result in the unverified app
authorization flow:
Client is verified
Publisher is a Google Workspace account of customer A
Script is in a shared drive of customer A
Publisher is a Gmail account
User is a Google Workspace account of customer A
Normal auth flow
Normal auth flow
Normal auth flow
Unverified auth flow
User is a Google Workspace account not of customer A
Normal auth flow
Unverified auth flow
Unverified auth flow
Unverified auth flow
User is a Gmail account 1
Normal auth flow
Unverified auth flow
Unverified auth flow
Unverified auth flow
1 Any Gmail account, including the account used to
publish the app.
User cap
The number of users who can authorize an app using the unverified app flow is
capped to limit possible abuse. See
OAuth application user limits
for details.
Request verification
You can request verification of the OAuth client used by your app and its
associated Google Cloud project. Once your app is verified, your users no
longer see the unverified app screen. In addition, your app is no longer
subject to the user cap .
Requirements
In order to submit your OAuth client for verification, you must satisfy the
following requirements:
You must own a website on a domain. The site must host publicly-accessible
pages that describe your app and its privacy policy. You must also
verify your ownership of the site with Google .
You don't need to publish your app from an account in this
domain, but the domain owner must be an editor or owner of the script
project.
The Google Cloud project
your script project uses must be a
standard Google Cloud project
that you have edit access for. If your script is using its default
Google Cloud project, you must
switch to a standard Google Cloud project .
In addition, you must have the following required assets:
Application name . The name of the app; this is displayed on the consent
screen. It should match the name used for the app in other locations, such
as the
Google Workspace Marketplace
listing for published apps.
Application logo . A app logo JPEG, PNG, or BMP image to use in the
consent screen. Its file size must be 1MB or less.
Support email . This is an email displayed on the consent screen for
users to contact if they need app support. It can be your email address or
a Google Group that you own or manage.
Scopes . The list of all the scopes your
app uses. You can view your scopes
in the Apps Script editor.
Authorized domains . This is a list of domains containing information
about your app. All your application's links (such as its required privacy
policy page) must be hosted on authorized domains.
Application homepage URL . The location of a homepage describing your
app. This location must hosted on an authorized domain.
Application privacy policy URL . The location of a page describing your
app's privacy policy. This location must be hosted on an authorized domain.
In addition to the preceding required assets, you can optionally provide an
Application terms of service URL that points to a page describing your
app's terms of service. If provided, this location must be in an authorized
domain.
Steps
If you have not done so already,
verify ownership of all the authorized domains
you use to host your script project's privacy policy and other information.
The verified owners of the domains must be editors or the owner of the script
project.
In the Apps Script project, click Overview
info_outline .
Under Project OAuth Scopes , copy the scopes that your script project
uses.
Complete the OAuth consent screen for your application's
Google Cloud project
using the text and URL assets you collected.
List the Authorized domains where your app's
information (such as its privacy policy) are hosted.
To add your application scopes, click Add or Remove Scopes . The
resulting dialog attempts to autodetect scopes for APIs you've enabled
in the Google Cloud console (such as
advanced services ). You can
select scopes from this list by checking the corresponding boxes.
This autodetected list doesn't always include scopes used by
Apps Script built-in services .
You must enter these scopes under Manually add scopes .
When you're done, click Update .
When you've entered all the required information, click Save .
Click Submit for verification to start a verification request.
Most verification requests receive a response within 24 to 72 hours.
You can check the Verification status at the top of the OAuth consent
screen form. When verification of your OAuth client is confirmed, your app is
verified.
If your app is verified and later you decide to
switch to another Google Cloud project ,
you must repeat these steps to keep the app verified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
