---
title: "Update or unpublish an app listing \_|\_ Google Workspace Marketplace \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/marketplace/manage-app-listing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/manage-app-listing
  title: "Update or unpublish an app listing \_|\_ Google Workspace Marketplace \_\
    |\_ Google for Developers"
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
Update or unpublish an app listing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to update, unpublish, or make changes to your app's listing on the Google Workspace Marketplace.
You can update your app's configuration details, store listing information, and manage OAuth scopes through the Google Cloud console.
Draft functionality allows you to preview and test changes before publishing them to the live marketplace.
If you move your app's Google Cloud project to a different organization, you'll need to replicate the app in the new organization's project for them to access it.
To change ownership, modify the Google Cloud project's owners or contact your organization's administrator if you don't have the necessary permissions.
This page describes how to update or unpublish your app's listing in
Google Workspace Marketplace. Make sure you're using the Google Cloud project for
your app.
Update your app listing
To update the configuration or details of your app listing, follow these steps:
In the Google Cloud console, go to
Menu menu
> APIs & Services
> Google Workspace Marketplace SDK
> App Configuration .
Go to App Configuration
On the App Configuration tab, update your configuration details, and
then click Save .
On the Store Listing tab, make your changes, and then click
Publish .
Add OAuth scopes
If you add OAuth scopes, you might need to file a new request for OAuth
verification. If you update your listing to use the new scopes before they're
approved, users are shown the unverified app screen. Quota limits are applied
until the new OAuth verification request is approved. To learn more, see
Unverified apps .
Move your listing to a different organization
If you move the Google Cloud project of a private, published app from its original
organization to a different organization, the app remains associated with and
accessible by the original organization.
To give the new organization access to the app, you need to replicate the app
and its listing in a new Google Cloud project using an account that belongs to the
new organization.
Change ownership of your listing
To change the ownership of your listing, you must modify the owners of your
listing's Google Cloud project.
If you're a Cloud project owner, you can add or change owners for your
Google Cloud project directly. For steps about modifying owners of a
Cloud project, visit Manage access to projects, folders, and
organizations .
If you're not a Cloud project owner or cannot modify access to the
Cloud project, contact an administrator for your organization to
request that they modify or transfer ownership. Learn how to find your
administrator .
Always share ownership of the Google Cloud project
for your listing. If a sole Cloud project owner leaves your
organization and their account is removed, you lose access to the
Cloud project and your listing. If you've lost access to your listing,
file a support
case .
Update your app listing with drafts
You can make changes to your app listing and save them as a draft. This lets you
preview and test the changes before publishing them. While your changes are
under review, the original app listing remains available on the
Google Workspace Marketplace.
To update the configuration or details of your app listing, follow these steps:
In the Google Cloud console, go to
Menu menu
> APIs & Services
> Google Workspace Marketplace SDK
> App Configuration .
Go to App Configuration
Update your configuration details, and then click Save Draft . This
creates a draft visible only to you.
If the app was previously published, a dialog appears stating the draft was
saved along with a link to the Store Listing tab.
On the Store Listing tab, make your changes, and then click
Save Draft .
The Store Listing tab displays the message You're viewing a draft .
To preview and test your draft app listing, you must add your email address
to the Draft Tester Email Addresses field in the Draft Tester
section on the Store Listing tab. You can also add other draft testers.
For more information, see Test your draft .
To publish your draft, click Publish .
If Submit for review is displayed, your changes require a review
before publishing. For more information, see Actions that trigger a
review .
To begin the review process, click Submit for review . After you
submit changes for review, you can't edit your app listing until the
review is complete but you can cancel the review of
your app listing.
If the review succeeds, your live app listing is automatically updated with the
draft changes.
If the review fails:
Your existing app listing isn't updated and the Store Listing tab
displays the message The draft didn't pass review and wasn't published .
Your existing app listing remains unchanged.
You receive an email message describing what needs improvement.
You can edit your draft app listing to address the issues and resubmit your
changes for review.
Alternatively, you can use the More Actions menu and click Discard
draft to delete the draft.
Actions that trigger a review
If you update certain fields or make additions to your existing public app
listing, your changes require a manual review before publishing.
Reviews are required when you do the following:
Add a new extension type by checking additional boxes in the App
Integrations section on the App Configuration tab. For more
information, see Identify how your app integrates with
Google Workspace
applications .
Modify any field in the App Details section on the Store Listing
tab. This includes the Language , Application name , Short
description , or Detailed description fields. For more information, see
Create a store listing .
Cancel a review
You can cancel an app listing that's been submitted for review. If you cancel
the review, your app returns to its draft state. The original app listing
remains available on the Google Workspace Marketplace.
To cancel the review of your app listing, follow these steps:
In the Google Cloud console, go to
Menu menu
> APIs & Services
> Google Workspace Marketplace SDK
> Store Listing .
Go to Store Listing
Click Cancel Review .
Submitting your app listing for review after canceling might result in an error.
To resolve this error, wait before attempting to submit your request again.
Status messages
As you create, edit, and publish app listings, the
Google Workspace Marketplace presents messages on the Store Listing tab
that vary depending on the state of your app listing and whether you have a
draft. The following table describes the most common status messages:
Status message
You're viewing a draft
You saved changes to the App Configuration or Store Listing tabs.
If you're updating a published app listing, the app no longer matches the published app listing. To reset the settings so that they match the published app listing, use the More Actions menu and click Discard draft to delete the draft.
You're viewing a draft. Changes made in this draft require a review before publishing.
You saved changes to a field in the App Details section on the Store Listing tab.
If you're updating a published app listing, the configuration settings no longer match the published app listing. To reset the settings so that they match the published app listing, use the More Actions menu and click Discard draft to delete the draft.
The draft is in review and can't be edited.
You submitted your public app listing for review.
Apps must pass a review before being published. While an app is in review, you can't edit it. You can remove the app from the review process by clicking Cancel Review . If the app is approved, it will be published automatically.
The draft didn't pass review and wasn't published
Your app requires additional work.
You'll receive a review document that describes what needs improvement. You can address the issues and resubmit your app for review.
Learn about the review process .
Alternatively, you can use the More Actions menu and click Discard draft to delete the draft.
This app is published
You have an app listing that appears in the Google Workspace Marketplace.
The app was unpublished from Google Workspace Marketplace.
This message appears only when Google unpublishes your app listing.
It doesn't appear when you unpublish your own app listing.
Learn more about the Google Workspace Marketplace policies .
Test your draft
You can test your draft app listing by adding draft testers. After you designate
a specific email address as a draft tester, the person who signs in to the
Google Workspace Marketplace with that email address sees the draft version of
your app listing instead of any existing app listing.
If you have a draft that can be previewed and tested, the Draft Tester
section appears in the Store Listing tab.
Note: The following app integrations can't be previewed and tested: Web Apps,
Drive Apps, and Chat Apps. If a draft contains changes that involve only those
app integrations, the Draft Tester section doesn't appear.
To test your draft, follow these steps:
In the Google Cloud console, go to
Menu menu
> APIs & Services
> Google Workspace Marketplace SDK
> Store Listing .
Go to Store Listing
On the Store Listing tab, add your email address to the
Draft Tester Email Addresses field in the Draft Tester section.
If you want to let others test your draft, add their email addresses to the
Draft Tester Email Addresses field and notify them that they are
draft testers.
You can add up to 100 email addresses.
For public app listings, the email addresses must be Gmail accounts.
For private app listings, all email addresses, including yours,
must be in the same domain.
Draft testers are not automatically notified when you add their email
address to the Draft Tester Email Addresses field.
Add a URL to the Draft Tester Opt-Out URL field.
The URL must provide a mechanism, such as a web form, that lets testers
indicate that they don't want to be draft testers.
You must maintain the list of draft testers and remove those who have
opted out.
Unpublish your app listing
To unpublish your app listing, follow these steps:
In the Google Cloud console, go to
Menu menu
> APIs & Services
> Google Workspace Marketplace SDK
> Store Listing .
Go to Store Listing
On the Store Listing tab, click
Unpublish . To republish, follow the preceding steps and click
Publish .
After you unpublish, your app listing no longer appears in the
Google Workspace Marketplace. Users who have already installed your app
can no longer access it. If you republish, the users who had previously
installed your app regain access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To update your Google Workspace Marketplace app listing, navigate to **App Configuration** in the Google Cloud console, make your edits, and click **Save** or **Save Draft**. In the **Store Listing** tab, you can modify your details and then click **Publish** or **Save Draft**. If OAuth scopes are added, a new verification might be required. To change ownership, modify the owners of your app's Google Cloud project. To unpublish, select **Unpublish** on the **Store Listing** tab.\n"]]
