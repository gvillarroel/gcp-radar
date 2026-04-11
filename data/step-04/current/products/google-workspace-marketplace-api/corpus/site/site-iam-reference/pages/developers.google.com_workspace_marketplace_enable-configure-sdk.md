---
title: "Configure your app in the Google Workspace Marketplace SDK \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/marketplace/enable-configure-sdk
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/enable-configure-sdk
  title: "Configure your app in the Google Workspace Marketplace SDK \_|\_ Google\
    \ for Developers"
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
Configure your app in the Google Workspace Marketplace SDK
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Workspace Marketplace SDK enables developers to manage app configuration and availability on the Google Workspace Marketplace, including visibility, installation settings, and integrations.
App visibility, once set as public or private, is permanent and cannot be changed.
Developers must provide accurate contact and app details, including trader status for EEA users, for a trustworthy store listing.
Google Workspace administrators have control over app visibility and installation within their organizations.
App usage analytics can be tracked by linking the app to a Google Analytics account.
This page explains how to use the Google Workspace Marketplace SDK to configure and
manage your app on the
Google Workspace Marketplace .
To make your app available for use, you need to set it up in the
Marketplace SDK. The Marketplace SDK is
a toolkit that lets you create and control your app on the
Marketplace. You use the
Marketplace SDK to manage
Marketplace settings, such as the following:
Whether your app is available for a specific Google Workspace organization
(a private app), or for all Marketplace users (a
public app)
The types of Marketplace users who can install your
app
Which Google Workspace application(s) your app integrates with
The OAuth scopes that your app requires
Information about who built and maintains the app
Regardless of whether you're publishing your app privately or publicly, you must
use the Marketplace SDK to manage your app on the
Marketplace.
Enable the Marketplace SDK
If you haven't already done so, in your Google Cloud project, enable the
Marketplace SDK .
Open your Cloud project in the Google Cloud console
If it's not open already, open the Cloud project that you intend to use
for this sample:
In the Google Cloud console, go to the Select a project page.
Select a Cloud project
Select the Google Cloud project you want to use. Or, click Create project and follow the on-screen instructions. If you create a Google Cloud project, you might need to turn on billing for the project .
Turn on the Marketplace SDK
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Workspace Marketplace SDK.
Enable the SDK
Warning: Make sure you enable the Google Workspace Marketplace SDK, not the API.
The Google Workspace Marketplace API is a different tool used to integrate with
Google's licensing and billing services.
Determine the configuration settings for your app
The following reference describes the settings available on the App
Configuration page of the Marketplace SDK.
Choose who can view and install your app
When you configure your app, you specify the users who can access your app using
the following settings:
App visibility : If you're publishing an app within a
Google Workspace organization, whether your app listing is unlisted,
visible to all users in your organization, or anyone who uses
Google Workspace.
Installation settings : Whether the app can
only be installed by Google Workspace administrators.
Regardless of the settings you specify in your app listing, users that belong to
a Google Workspace organization might not be able to discover, install,
or use your app based on settings set by their administrators. Administrators
can impact your app's availability in the following ways:
Control whether their users can view apps on the
Marketplace, and install apps on behalf of their
users.
Use an allowlist to manage and curate apps for their organization. If you're
developing an app for an organization that uses allowlists, check with an
administrator about adding the app to the allowlist.
Turn off certain Google Workspace applications, such as removing
access to Google Chat, Google Chat apps, or both. In these cases, users
won't be able to install your app from the
Marketplace.
To learn how administrators manage access to
Marketplace, see the
Marketplace Admin Help
documentation .
App visibility settings
Warning: Once you choose a visibility option and save the App Configuration
page, you can't change your selection later.
You see the App Visibility option if you're using a Google Workspace
account (an account created by your work or school organization). If you're
using a consumer account (an account ending with "@gmail.com"), you can only
publish publicly.
Public : The app can be found and installed by people outside your
domain. If you choose public visibility, Google reviews and approves your
app listing before it's published.
Private : Only people within your domain can find and install your app.
If you choose to publish as Unlisted , the app listing doesn't show in browse
or search results. Users can only access the app's store page with the direct
URL.
If you want to limit which countries and regions your app is available in, you
set that up in the Distribution section when you create the store
listing .
App installation settings
The Installation Settings option determines if users or Google Workspace
admins can install your app from your store listing
page on the
Marketplace.
Note: For Google Chat apps, you can only select Individual + Admin Install
because individuals can discover and install Chat apps
directly from Google Chat. For details about how installation works, see How
users discover and use
Chat apps .
Individual + Admin Install (default) : The app can be installed by
individual users or by admins for their domain, organizational unit, or a
group of users. A user's domain policies might prevent them from installing
an app even if individual installs are enabled.
Admin Only Install : The app can only be installed by admins for their
domain, organizational unit, or a group of users. Your app only shows up in
Google Workspace Marketplace search results for admins and people who
aren't logged in to their Google Account. Choose this option if your app
requires domain installation.
Common installation and visibility settings
The following table summarizes some of the common app configurations options for
installation and visibility:
Intended app users
App visibility setting
App installation setting
Who can install my app?
Who can use my app?
For apps built for a Google Workspace organization
Specific users in your organization
Private and Unlisted
Individual + Admin Install
If permitted, anyone in your organization who has the app listing URL.
If permitted, anyone in your organization who has the app listing URL.
Your organization
Private
Individual + Admin Install
If permitted, anyone in your organization.
If permitted, anyone in your organization.
Your organization
Private
Admin only
Administrators
Users who have the app installed by their administrator.
For apps available to users outside a specific Google Workspace organization
Users in Google Workspace organizations
Public
Admin only
Administrators
Users who have the app installed by their administrator.
All Google Workspace users
Public
Individual + Admin Install
Anyone who uses Google Workspace applications for personal use.
If permitted, users in Google Workspace organizations.
Anyone who uses Google Workspace applications for personal use.
If permitted, users in Google Workspace organizations.
Identify how your app integrates with Google Workspace applications
Choose the Google Workspace services your app or
add-on is designed to work with, such as a
Google Workspace add-on or a Google Chat app. You must choose at
least one option. In some cases, you can include multiple app integrations in
your app listing. See List app integrations
together .
Depending on which app integrations you choose, you might need to provide more
information and enable relevant APIs in your Google Cloud project. The following
table describes the additional setup needed for each:
Google Workspace add-on
To publish a Google Workspace add-on, you must provide the add-on's
deployment ID.
To find the deployment ID in Apps Script, follow these steps:
Open your Google Workspace add-on in the Apps Script
editor.
Click Deploy >
Manage deployments .
Under the deployment ID, click Copy .
To find the deployment ID for an HTTP add-on, follow these steps:
On the App Configuration page under "Google Workspace add-on," click
HTTP or other deployments >
Select Deployment .
Select the deployment you want to publish.
Click Select .
Note: If your add-on extends Google Chat,
you must also configure the Google Chat API. For steps, see
Configure a Chat app .
Editor add-on (Docs, Sheets, Slides, Forms)
To publish an Editor add-on, you must provide
the project script ID and version you want to publish.
To find the project script ID, follow these steps:
Open the add-on in the Apps Script editor.
At the left, click Project settings
settings .
Under "IDs," copy the script ID.
To find the version, follow these steps:
Open the add-on in the Apps Script editor.
At the top right, click Deploy >
Manage deployments .
The version number is under "Configuration."
Google Chat app
To publish an
interactive Google Chat app , see the following
documentation:
If you built your Chat app as a
add-on, you must configure
add-on settings in the
Chat API. For steps, see
Configure a
Chat app in the Google Workspace add-on
documentation.
If you built your Chat app using
interaction events, you must configure interaction event settings in
the Chat API. For steps, see
Receive
and respond to interaction events in the Chat API
documentation.
If you built your Chat app with
AppSheet's automatic configuration, publish your
Chat app using the steps described in the
AppSheet documentation,
Share
your Chat app using automatic configuration .
Drive app
To publish a Drive app, you must enable and configure the
Google Drive API .
Web app
To publish a web app, you must provide its universal nav URL , the URL that
points to the web app from the Google apps menu
apps . Your web app must be in production and fully functional.
When you fill out the Store Listing page, you must provide additional icons
sized to 96x96 and 48x48 pixels.
If you built your web app in Apps Script, follow these steps to get the universal
nav URL:
Open your Google Workspace add-on in the Apps Script
editor.
Click Deploy >
New deployment .
Under "Select type," click Web app .
Fill out the options and click Deploy .
Click Copy .
Specify the level of access that your app requires
Under OAuth Scopes , provide a complete list of the OAuth 2.0 scopes your app
requires. The OAuth scopes you enter here should match what you display in your
OAuth consent screen
and if applicable, Apps Script manifest.
If you include more than one app integration, make sure you add the scopes from
each one to the Marketplace SDK App Configuration page and
your OAuth consent screen.
Always use the narrowest scopes possible (for example, don't include a full
Drive scope if you only need a read-only scope).
For Apps Script projects, see Authorization
scopes for more details.
Provide information about the app developer
Under Developer Information , fill out contact information and other details.
These fields appear on your app's store
listing page.
Fields
Trader status
Due to consumer protection laws, consumers based in the European
Economic Area (EEA) must be informed whether a merchant on the
Marketplace is a trader or a
non-trader :
Trader : A trader is a person who acts for purposes relating
to a trade, business, craft, or profession; or in the name of or on
behalf of a trader.
Non-trader : A non-trader (consumer) is a person who acts for
non-professional purposes.
If unspecified, "Trader status unspecified" appears on your app's
store listing
page.
Developer name
The name to display as the author of the app. If you are a trader,
provide your trading name or legal name.
Developer mailing address
Required for traders. Not collected for non-traders.
The location of your business. Enter a valid mailing address where you
can be contacted.
Developer website URL
The website describing you (or your organization) as the
developer.
Developer email
The email address to use as a point of contact. It's
not included in your app listing. Make sure this email address is kept up to
date as it's used:
If Google needs to contact the developer—for example, during the
app review process.
To send feedback from Editor add-ons if a Report Issue URL isn't
provided on the Store Listing page.
Application website URL
Optional. The website that further describes your app.
Save your app configuration settings in the Marketplace SDK
Using the information from the previous section ,
save your app configuration in the Marketplace SDK:
In the Google Cloud console, go to the Marketplace SDK
App Configuration page:
Go to Marketplace SDK Configuration page
Fill out each section based on what you determined in the previous
section .
Click Save Draft .
(Optional) You can get analytics on app
usage in Google
Analytics . To do so, add a Google Analytics
ID in the
Marketplace SDK.
Go to the Analytics tab.
Enter your Google Analytics ID.
Click Save .
Troubleshoot
This section describes common problems you might encounter.
Required permissions are missing when publishing apps to the Marketplace
You're not able to publish apps on the Marketplace as
attempts to configure the application on the App Configuration page of the
Marketplace SDK fail with the following error message:
You are missing at least one of the following required permissions: Project workspacemarketplace.appconfiguration.view / workspacemarketplace.appconfiguration.update
This error occurs when the Marketplace SDK API is enabled
and when using an IAM role other than Editor or Owner .
To resolve the error, implement one of the following solutions:
Ask the project owner to assign the
roles/appmetadata.workspaceMarketplaceAppConfigurationAdmin role to the
account with the missing permissions to allow them to configure and manage
the app in the
Marketplace SDK .
Ask the project owner to add missing permissions to a custom role through
the IAM & Admin >
Roles page in the
Google Cloud console. Then, assign the custom role to the account with the
missing permissions.
Primitive roles/editor or roles/owner can be used for publishing apps.
However, the Use IAM
securely
documentation considers this bad practice as one cannot easily restrict edit
access to other resources in the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Workspace Marketplace SDK manages app configurations, including visibility (public/private), installation (individual/admin), and integration with Google services. Key actions involve enabling the SDK, setting app visibility and installation options, and defining integration with services like Chat, Drive, or Editor add-ons. Developers specify OAuth scopes, provide contact information, and indicate trader status. Configuration details are saved in the Google Cloud console, with optional Google Analytics integration. Troubleshooting involves ensuring adequate IAM permissions for publishing apps.\n"]]
