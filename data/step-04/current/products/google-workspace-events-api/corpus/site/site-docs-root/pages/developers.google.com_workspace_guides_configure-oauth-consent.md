---
title: "Configure the OAuth consent screen and choose scopes \_|\_ Google Workspace\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/configure-oauth-consent
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/configure-oauth-consent
  title: "Configure the OAuth consent screen and choose scopes \_|\_ Google Workspace\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Configure the OAuth consent screen and choose scopes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When using OAuth 2.0 for authorization with Google Workspace APIs, you need to configure an OAuth consent screen that defines the access your app requests and displays this information to users.
You should carefully select authorization scopes to provide your app with the minimum necessary access to Google Workspace data, as users are more likely to grant consent to apps with limited and clearly defined scopes.
All apps require an OAuth consent screen, but explicitly listing scopes is necessary only for apps used outside your organization, and certain scope categories necessitate additional reviews by Google.
To configure your OAuth consent screen, you'll need to provide app details, select the user type (internal or external), define the necessary scopes, and potentially add test users if applicable.
Sensitive and restricted scopes require additional verification and security assessments due to their access levels to user data, so consider using non-sensitive alternatives whenever possible.
When you use OAuth 2.0 for authorization, Google displays a consent screen to
the user including a summary of your project, its policies, and the requested
authorization scopes of access. Configuring your app's OAuth consent screen
defines what is displayed to users and app reviewers, and registers your app
so you can publish it later.
Note: Some Google Workspace APIs, such as the Drive API, have
documentation covering API-specific authentication and authorization
information. Ensure you read that documentation before continuing with this
page.
To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
users' Google Account data.
When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes.
All apps using OAuth 2.0 require a consent screen configuration, but you only
need to list scopes for apps used by people outside your Google Workspace
organization.
Tip: If you don't know required consent screen information, you can use
placeholder information prior to release.
For security reasons, you can't remove the OAuth 2.0 consent screen
after you've configured it.
Configure OAuth consent
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
Scope categories
Some scopes require additional reviews and requirements
because of the level or type of access they grant. Consider the following types
of scopes:
Basic app verification required
Additional app verification required
Security assessment required
Non-sensitive scopes (recommended)
Grant access only to limited data that's immediately relevant to a specific action.
check
—
—
Sensitive scopes
Grant access to personal user data, resources, or actions.
check
check
—
Restricted scopes
Grant access to highly-sensitive or extensive user data or actions.
check
check
check
Next step
Create access credentials for your app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["OAuth 2.0 requires configuring a consent screen, defining the app's project details, policies, and authorization scopes. Scopes, which specify the level of data access, should be narrowly defined. Configuration involves setting the app name, support email, audience, and contact information in the Google Cloud console. If the app is for external users, you must add and select appropriate scopes, choosing the least sensitive option. Different scope categories—non-sensitive, sensitive, and restricted—have varied review requirements.\n"]]
