---
title: "Create a store listing \_|\_ Google Workspace Marketplace \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/marketplace/create-listing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/create-listing
  title: "Create a store listing \_|\_ Google Workspace Marketplace \_|\_ Google for\
    \ Developers"
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
Create a store listing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Workspace Marketplace Store Listing page is where you provide information to advertise your app to potential users.
Before creating your listing, gather necessary assets like app details (name, description, category), graphic assets (icons, banners, screenshots), and support links (terms of service, privacy policy).
The Store Listing page includes required and optional fields, filling out optional fields like pricing and promo videos enhances your app's visibility.
Once your listing is complete, publish your app, which might involve a review process for public listings, then share it by adding users to your Google Cloud project.
You can check your app's publication status in the Google Cloud console, where statuses like "Unpublished," "Under review," and "Approved" indicate its visibility on the Marketplace.
The information you provide on the Store Listing page advertises your app to
potential users within the Google Workspace Marketplace. Some of the fields
are optional, but filling them out can help make your app listing more
descriptive.
Gather your assets
We recommend that you collect the following assets before you fill out the Store
Listing page.
App details
App details are displayed on your Store Listing page in the
Google Workspace Marketplace.
Required fields
Field Description
Language The language(s) for your app details. If
you include multiple languages, users who have selected a specific language view the
localized version. Otherwise, users view your app details in the default
language that you choose.
Application name This is the name shown in the app
listing and should match the name in your OAuth consent screen. Limit the
name to 50 characters or less to ensure it displays well. Don't use the word
"Google" or other Google product names.
Short description A short summary of your app and
what it does (200 character limit).
Detailed description A longer description of your
app. It's presented in the Overview section, under the screenshots you
provide. Limit this to less than 16,000 characters.
Category Select the category most appropriate for
your app listing. When you publish, your app listing appears in that
collection for greater discoverability.
Optional fields
We recommend that you include pricing information for your app. In the
Pricing field, you can specify the pricing model for your app:
Free of charge —Users can install and use all of the app's features
free of charge.
Paid —Users must pay to access and use the app.
Free of charge trial —Users can use the app free of charge for a
period of time.
Free of charge with paid features —Users can access the app free of
charge but must pay for select features, such as premium features.
Graphic assets
Graphics are used in the Google Workspace Marketplace to illustrate and
advertise apps.
Required fields
Field Description
Application icons At least two icon images—one
sized to 128 x 128 pixels and another to 32 x 32 pixels. Apps that include a
web app also require 96 x 96 and 48 x 48 pixel icons.
Application card banner Sized to 220 x 140 pixels.
Screenshots At least one screenshot showing your
app's integration with Google services is required, but you can provide up
to five. These should be 1280 x 800 pixels in size. If necessary,
screenshots 640 x 400 pixels or 2560 x 1600 pixels in size can be used. Your
screenshots should have square corners and no padding (full bleed).
Optional fields
Optionally, in the YouTube Promo Videos section, you can add one or more
YouTube videos that describe and promote your app.
Support links
Support links let users get help with your app and review your terms and
policies.
Required fields
Field Description
Terms of service A link to a web page that
describes your terms of service.
Privacy policy A link to a web page that describes
your privacy policy.
Support A link to a web page that describes how
your users can get help from you if they're having issues with your app.
Optional fields
Field Description
Setup A link to a web page that describes how to
set up the app after installation. Recommended if the app requires
configuration that's hard to explain well within the UI.
Admin config A link to a web page that tells domain
administrators how to configure the app for their users. Unnecessary unless
the app requires a domain-level configuration.
Help For use with Editor
add-ons only. If this link
is provided in the add-on's
Help menu, a Learn more
button is presented.
Report issue For use with Editor
add-ons only. If this link is provided in the
add-on's Help menu, a
Report an issue button is presented.
Publish an app
Note: Before you publish, test your app. Once you save your visibility option,
you can't change it.
In the Google Cloud console, click Menu
menu
> APIs & Services
> Google Workspace Marketplace SDK
> Store Listing .
Go to Store Listing
Fill out the sections for App Details , Graphic Assets ,
Screenshots , and Support Links . If you use or mention any Google
trademarks , ensure that your
app complies with the Google Workspace Marketplace branding
guidelines .
(Optional) To publish your app to only select regions, in the
Distribution section, clear All Regions and select the regions where
you want the listing to be visible. For users whose IP address isn't in a
selected region, the following occurs:
When they search for apps in the Google Workspace Marketplace, your
app listing isn't returned.
When they try to access the listing with a direct link, they get an error.
For each region, ensure that you've included the region's language in the
App Details section.
To save the information and publish, click Submit For Review .
If your app listing is marked as private, it's published right away.
If your app listing is marked as public, it goes through a review
process before it's published. For more information, see App review
process and requirements for the
Google Workspace Marketplace .
Share your app listing
To give someone access to your app listing, add them to your Google Cloud project.
For more information, see Grant a single
role .
If you built your app with Apps Script, you can use a shared
drive as the source location for your script project. This makes sure that no
single account is the sole owner of the project. Make sure your collaborators
have access to the shared drive.
Once your app listing is published, install the app on a test domain and make
sure it works as intended.
Check your app listing's publication status
For public app listings, you receive emails about its publication status during
the review process. The emails are sent to the
Developer
email that
you provided for your app listing.
You can also check whether your app listing is live by following these steps:
In the Google Cloud console, click Menu
menu
> APIs & Services
> Google Workspace Marketplace SDK
> Store Listing .
Go to Store Listing
At the top of the page, find your publication status.
If your listing includes a Chat app, go to the
Chat API Configuration page and make sure that your App
status is set to Live . If it's set to Disabled , your app listing
remains unpublished regardless of the status in the
Google Workspace Marketplace SDK. For more information about these settings,
see Configure the Chat API .
For a list of possible publication statuses and their definitions, see Status
messages .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To publish an app on the Google Workspace Marketplace, gather required assets like app name, descriptions, icons, screenshots, terms of service, privacy policy, and support links. Fill out the \"App Details,\" \"Graphic Assets,\" and \"Support Links\" sections in the Google Cloud console's Store Listing. Optionally, add pricing, promo videos, and setup/admin links. Select desired regions, and publish. The app undergoes review if public, with the status viewable in the Store Listing. You can also test your app before publishing.\n"]]
