---
title: "Integrating with Google Ad Manager as a third party \_|\_ Ad Manager SOAP\
  \ API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/third-parties
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/third-parties
  title: "Integrating with Google Ad Manager as a third party \_|\_ Ad Manager SOAP\
    \ API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Integrating with Google Ad Manager as a third party
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Third parties integrate with Ad Manager for their clients, who are Ad Manager customers, and this guide covers best practices for these integrations.
Third parties can test their Ad Manager integrations by creating a test network, which can be done with a Google account.
To access a client's Ad Manager network, third parties need to create a Google account and have the client add it as a user to their network.
Third parties must stay updated on Ad Manager API versions and announcements through designated channels to avoid breaking integrations.
Support for Ad Manager integrations is available through product-level and API-specific forums.
Third parties are not direct users of Ad Manager, in that they may not have
their own Ad Manager network. Instead, they create services or integrations with
Ad Manager for their clients, who are Ad Manager customers. This guide covers
the basics of third party integrations by providing best practices, tips, and
tricks.
This guide assumes you have a working knowledge of the Ad Manager API. If you're
unfamiliar with the Ad Manager API, see our getting started
documentation .
Getting started as a third party
To use the Ad Manager API to access an Ad Manager customer's network just follow
the guidelines below. No additional approval from Google is required, though
note that by accessing and/or using the Ad Manager API you agree to the Ad
Manager API terms and
conditions .
How to test your Ad Manager integration as a third party
As a third party, you may be wondering how to test your Ad Manager integration
before running against your clients' production networks. The recommended
approach is to create a test network . You don't
need to be an Ad Manager customer to do this. Anybody with a Google Account can
create a test network.
Note, however, the differences between test and production
networks . Test networks cannot serve ads. Test
networks will also not necessarily contain all the features that your clients
may have available on their production networks. If you need to test against Ad
Manager features that are not available on your test network, one option is to
purchase access to a non-test network through an Ad Manager reseller.
In addition, you should be clear with your clients about what features they need
to have available on their production network in order for your application to
work properly. Your application should handle cases where features may not exist
by either catching exceptions and failing gracefully or keeping a list of your
clients and what features each one has or doesn't have. It should be your
client's responsibility to work with their contact at Google to manage features
on their network.
Authentication: How to properly access a client's Ad Manager network
In order for your application to access your client's Ad Manager network, you
need to set up your authentication workflow in a secure manner.
This involves two steps:
Create a Google Account email address that you will use to access your
client's network.
Have the client add this account as a user to their Ad Manager network.
For step 1, you can create either a separate Google Account for each client, or
a primary one that you will use for all clients. The former option is more
secure in the case that one of your accounts is compromised. The latter means
you only need to do step 1 once.
No matter what you do for step 1, in step 2 you'll need to ask each new client
to add the appropriate Google Account you created for them as a user to their Ad
Manager network.
1. Creating a Google Account
There are various ways to create a Google Account that can be added to an Ad
Manager network.
Option 1: Create an OAuth2 service
account , which generates a
service account email address for you that acts as a Google Account.
Instructions for creating a new service
account .
Option 2: You can create a regular Google Account ("Gmail" account) by
signing up as a new
user .
If you already have a Google Account, complete this signup in an incognito
window or new browser session. Or, if your company uses Google
Workspace , you can create a Google Account in your
company's domain and use that instead. For the purposes of this guide, we will
refer to both of these as a "regular" Google Account.
2. Ask the client to add your Google Account to their network
After you've obtained a Google Account to access your client's network, ask them
to add the account as a new user in their Ad Manager network.
If you are providing them with an OAuth2 service account email address, have
them add it to their network .
If you are providing them with a regular Google Account, have them add your
account as a user to their
network.
No matter which route you take, ensure that you discuss with your client what
roles and permissions your
account should have so that your application can access the data it needs on
your client's network.
Now you can start making API calls to your client's Ad Manager network. Make
sure you set the networkCode SOAP header to the
client's network code you are making the API call against. All of our client
libraries allow setting this programmatically. For example, in the ads Java
client library, you can programmatically set the network
code
when building a DfpSession instance.
Keep up to date with the API
It's important that you stay up to date on which API versions are deprecated or
sunset and when new versions are released. You don't want to be caught off guard
when a version is sunset and risk breaking your clients. We are not always able
to reach out to third parties about impending deprecations and sunsets as we do
for our customers. Thus, it is your responsibility to subscribe to one of our
three main channels for API updates and adjust your notification settings:
Our Ad Manager API Sunsets Announcements
Group .
Our Ads Developer Blog .
We also provide a deprecation schedule on our
developer's site that you should monitor regularly.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
