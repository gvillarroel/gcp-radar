---
title: "Integrate with Google Ad Manager as a third party \_|\_ Ad Manager API (Beta)\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/third-parties
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/third-parties
  title: "Integrate with Google Ad Manager as a third party \_|\_ Ad Manager API (Beta)\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Integrate with Google Ad Manager as a third party
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Third parties integrate with Ad Manager for their clients, who are Ad Manager customers, and this guide provides best practices for such integrations.
Accessing an Ad Manager customer's network as a third party using the Ad Manager API does not require additional Google approval but is subject to the Ad Manager API terms and conditions.
Third parties should use the Authentication guide to determine their preferred method and ensure necessary roles and permissions are granted by their client.
Creating a test network is the recommended approach for testing Ad Manager integrations, though support should be contacted for testing features not available on test networks.
Support for Ad Manager integration issues is available through the Ad Manager product forums for product questions and API support for API-specific questions.
Third parties are not direct users of Ad Manager in that they might not have
their own Ad Manager network. Instead, they create services or integrations with
Ad Manager for their clients, who are Ad Manager customers. This guide covers
the basics of third-party integrations by providing best practices, tips, and
tricks.
This guide assumes you have a working knowledge of the Ad Manager API. If you're
unfamiliar with the Ad Manager API, see our getting started
documentation .
Get started as a third party
To use the Ad Manager API to access an Ad Manager customer's network, follow
the guidelines on this page. No additional approval from Google is required,
though note that by accessing or using the Ad Manager API, you agree to the Ad
Manager API terms and conditions .
Authentication
Follow our Authentication guide to
determine your preferred authentication implementation.
If you use a Service Account, you must ask your client to add the service
account to their
Ad Manager network.
Discuss with your client what
roles and permissions your
account should have so that your application can access the data it needs on
your client's network.
Test your Ad Manager integration
The recommended testing approach is to create a test network . You don't need an existing Ad Manager account to
create a test network.
Test networks cannot serve ads or contain all the features that your
clients have available on their production networks. If you need to test against
Ad Manager features that are not available on your test network, contact
support .
You should be explicit with your clients about what features they need
to have available on their production network in order for your application to
work properly. Your application should handle cases where features might not
exist. It is your client's responsibility to work with their contact at Google
to manage features on their network.
Getting support
If you run into issues with your Ad Manager integration, we offer the following
support channels depending on your issue. If you have a product-level question,
post in the Ad Manager product
forums . If you have an API specific question,
contact API support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Third parties integrate services with Ad Manager for their clients, who are Ad Manager customers. Accessing client networks via the Ad Manager API requires no Google approval but necessitates adherence to terms and conditions. Authentication, roles, and permissions are managed collaboratively with clients. Testing is recommended using a test network, though feature limitations may require contacting support. Clients manage feature availability, and support is available through product forums or API-specific channels.\n"]]
