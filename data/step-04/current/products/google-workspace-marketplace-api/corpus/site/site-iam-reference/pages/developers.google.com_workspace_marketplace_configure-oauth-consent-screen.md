---
title: "Configure OAuth \_|\_ Google Workspace Marketplace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen
  title: "Configure OAuth \_|\_ Google Workspace Marketplace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Guides
Send feedback
Configure OAuth
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When publishing your app, you must complete four main tasks related to authentication and authorization: fill out the OAuth consent screen, create your OAuth 2.0 credential, configure all necessary scopes, and submit your app for OAuth verification (if applicable).
Scopes define the level of access your app has to user data and must be configured in the OAuth consent screen, Google Workspace Marketplace SDK, and the manifest (if applicable).
OAuth verification, a separate process from app review and required for public apps using sensitive or restricted scopes, ensures your app's consent screen and data usage are appropriate.
Before publishing your app, ensure billing is enabled in your Google Cloud project, the app is built and tested, you understand authentication & authorization concepts, and your Google Cloud project is updated for Apps Script projects (if applicable).
During the OAuth verification process, you might be required to provide a demo video and undergo a security assessment depending on the scopes used by your application.
When you publish your app, there are three main tasks to complete for
authentication and authorization:
Fill out the OAuth consent screen .
Create your OAuth 2.0 credential .
Submit your app for OAuth verification .
Understand OAuth scopes
To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
users' Google Account data.
When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes.
Provide the complete list of OAuth scopes that your app requires. The scopes you
add to each location must match and are used in the following ways:
Scopes added to the OAuth consent screen are used for OAuth verification.
Scopes added to the Google Workspace Marketplace SDK
are used for domain-wide and individual installs to authorize your app when
it's installed from the Google Workspace Marketplace.
Scopes added to the manifest are necessary for your app to function
properly.
For example, if you publish an app that includes a Google Sheets
add-on and a Google Docs
add-on, each add-on's
Google Apps Script manifest only includes the scopes specific to that add-on.
In your Google Cloud project, the OAuth consent screen and the
Marketplace SDK include the scopes for both add-ons.
Fix unverified OAuth scopes
If you have a new app, a saved draft, or published public app with unverified
sensitive or restricted scopes, you see the following error message when editing
the app in the Marketplace SDK:
OAuth verification is required for sensitive or restricted scopes. You can
still save your app as a draft, but you're not able to publish your draft app
listing.
For more information, see Specify the level of access that your app
requires .
To work around this error, you can do the following:
Make changes to an app listing with unverified sensitive or restricted
scopes and save the listing as a draft.
Publish the app when no new unverified sensitive or restricted scopes are
added.
Publish the app when only removing unverified sensitive or restricted
scopes.
For some workarounds users might be shown the "unverified app" screen. For more
information, see Unverified
apps .
To fix this error, submit your app for OAuth
verification .
Prerequisites
In a Cloud project, enable
billing .
Build and test an app.
Learn about authentication and
authorization .
If you built your app in Apps Script, update your
Cloud project for Apps Script
projects .
1. Fill out the OAuth consent screen
The OAuth consent screen is a prompt that tells users who's requesting access
to their data and what kind of data users are allowing your app to access.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access .
If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter an App name .
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select the user type for your app.
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
If you selected External for user type, add test users:
Click Audience .
Under Test users , click Add users .
Enter your email address and any other authorized test users, then click Save .
If you're creating an app for use outside of your Google Workspace
organization, click Data Access > Add or Remove Scopes . We recommend the following best practices when
selecting scopes:
Select the scopes that provide the minimum level of access required by your app. For a list of
available scopes, see
OAuth 2.0 Scopes for Google APIs .
Review the scopes listed in each of the three sections: non-sensitive
scopes, sensitive scopes, and restricted scopes. For any scopes listed in the
"Your sensitive scopes" or "Your restricted scopes" sections, try to identify
alternative non-sensitive scopes to avoid unnecessary additional reviews.
Some scopes require additional reviews by Google. For apps used only
internally by your Google Workspace organization, scopes aren't listed on the
consent screen and use of restricted or sensitive scopes doesn't require
further review by Google. For more information, see
Scope categories .
After selecting the scopes required
by your app, click Save .
For more information about configuring OAuth consent, see
Get started with the Google Auth platform .
2. Create your OAuth 2.0 credential
Depending on how you built your app, there are two different ways to create your
OAuth 2.0 credentials.
If you built your app in Apps Script
Switch your Apps Script project from its default
Cloud project to your new, standard project. For more information, see
Switch to a different standard
Cloud project .
After you associate your Apps Script project with the
Cloud project, your OAuth 2.0 credential is automatically created.
If you didn't use Apps Script to build your app
To create your OAuth 2.0 credential, see OAuth client ID
credentials .
3. Submit for OAuth verification (public apps only)
If your app uses Google APIs to access Google user data, it might be subject to
the verification process before you publish your app.
Before you submit
While you should be able to complete steps one and two on this page, you might
not be able to submit your app for OAuth verification until you complete some
additional Marketplace publication steps that take
place concurrently with this process.
For example, to create a Google Classroom
add-on you must create a draft app listing in the
Marketplace SDK using the steps on Configure your app in
the Google Workspace Marketplace SDK
. You can
then use the draft app listing to create the demo video required for OAuth
verification. Once verification is achieved, you can then submit your draft app
listing for app review.
For an overview of the submission steps. see Publish your
app
OAuth verification review
If your app uses sensitive or restricted scopes, then it must undergo an OAuth
verification review process.
For OAuth verification, you must submit a demo video demonstrating the
journey or flow that explains the use of the requested scopes or data to
users. For more information, see Demo
video .
If your app uses restricted scopes, it might also need to go through a
security assessment .
For more information, see OAuth App Verification Help
Center .
To submit for verification, follow these steps:
In the Google API Console, go to Menu menu
> APIs & Services
> OAuth consent screen .
Go to OAuth consent screen
Click Project selector , and select your project.
Click Edit app
Enter the required information, and click
Submit for verification .
In the Verification required dialog, enter the appropriate
justifications, and then click Submit to start the verification
process.
If you update your app to use different scopes that are sensitive or
restrictive, you must submit your app for OAuth verification again. You don't
need to send it for app review again.
Note: You can continue the publication process while OAuth verification is in
progress, but your app listing cannot be approved until your app's OAuth
verification is complete.
How OAuth verification differs from app review
OAuth verification is a separate process from app review. It focuses on making
sure that your consent screen accurately represents your app's identity and
intent, and makes sure your app doesn't misuse user data. Your app listing
cannot be approved until your app's OAuth verification is complete. For more
information about OAuth verification, see OAuth
FAQ .
App review focuses on the information that you provide in the
Google Workspace Marketplace SDK , and
the features and usability of your app. To learn more about the app review
criteria, see App review process and requirements for the
Google Workspace Marketplace .
Note: The completion of OAuth verification is required before your app can
receive approval through the app review process.
Related topics
Configure the OAuth consent screen and choose scopes
Common reasons an app doesn't pass review
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To publish an app requiring authentication and authorization, complete these tasks: 1) Configure the OAuth consent screen, including the app name, support email, and user type, and select appropriate scopes. 2) Create OAuth 2.0 credentials, which is automatic for Apps Script projects or manual otherwise. 3) Configure scopes in the Google Workspace Marketplace SDK, using the narrowest scopes necessary. 4) Public apps using sensitive or restricted scopes must submit for OAuth verification, demonstrating scope usage. Scopes in all configurations must match.\n"]]
