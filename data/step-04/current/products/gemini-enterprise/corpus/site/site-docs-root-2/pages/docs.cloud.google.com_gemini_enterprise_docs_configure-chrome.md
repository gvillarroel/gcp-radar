---
title: "Configure Chrome Enterprise cloud-managed browsers \_|\_ Gemini Enterprise\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome
  title: "Configure Chrome Enterprise cloud-managed browsers \_|\_ Gemini Enterprise\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Configure Chrome Enterprise cloud-managed browsers
Stay organized with collections
Save and categorize content based on your preferences.
Gemini Enterprise seamlessly integrates with Chrome Enterprise to deliver AI-powered custom content suggestions to the address bar of your users' cloud-managed Chrome browsers. This page describes the steps to enable and configure cloud-managed Chrome browsers to show these suggestions in the Chrome address bar ( omnibox ).
Note: To complete these steps, you need the necessary permissions to manage Chrome browsers for your organization.
Before you begin
Set up Gemini Enterprise
Before setting up the Gemini Enterprise x Chrome Enterprise integration, set up Gemini Enterprise. Learn more about how to get started with Gemini Enterprise .
Sign up for Chrome Enterprise Core
Chrome Enterprise Core lets you use the Google Admin console to set up the Gemini Enterprise Chrome policy. Learn more about how to set up Chrome Enterprise Core .
Enroll users and browsers
There are two options to manage Chrome browsers from the Google Admin console using Chrome Enterprise Core: Device-level browser enrollment and User profile-level browser enrollment. Learn more about these options in Cloud-managed Chrome browser .
Enable Enterprise Search Aggregator Chrome policy
Note: Changes may take up to 24 hours to apply for all cloud-managed browsers.
Login to Google Workspace Admin Console using your credentials.
Navigate to Menu > Chrome Browser > Settings to reveal the User & browser settings view.
Choose the specific Group or Organizational Unit from the respective list, or retain the default setting.
Note: Learn more about applying settings to certain users of Google Chrome .
In the Omnibox search provider category, select Enterprise search aggregator.
Add a name, shortcut, search URL, and suggest URL, then select Save .
Properties
Name
The name that is shown to the user in their address bar.
Shortcut
The keyword that the user enters to trigger the search. The shortcut can include plain words and characters, but cannot include spaces or start with the @ symbol. Shortcuts must be unique.
Search URL
The URL on which to search. Enter the web address for the search engine's results page (for example, 1234), and append the search terms inside a bracketed query string.
Example copied value: https://vertexaisearch.cloud.google.com/home/cid/ 1234
Formatted value: https://vertexaisearch.cloud.google.com/home/cid/ 1234?q={searchTerms}
Note: To find the ID for your Gemini Enterprise agent, navigate to your Google Cloud Console's AI Applications page, select the appropriate Gemini Enterprise application, then select Integration > Web App.
Suggest URL
The URL that provides search suggestions.
Example copied value: https://discoveryengine.googleapis.com/v1alpha/projects/1234/locations/global/collections/default_collection/engines/enterprisesearch/ servingConfigs/default_search:search
Formatted value: https://discoveryengine.googleapis.com/v1alpha/projects/1234/locations/global/collections/default_collection/engines/enterprisesearch/ completionConfig:completeQuery
Note: To find the ID for your Gemini Enterprise agent, navigate to your Google Cloud Console's AI Applications page, select the appropriate Gemini Enterprise application, then select Integration > Web App.
Icon URL (optional)
Company branded icon that will be shown when user types @ or starts the scoped search.
Recommended format: favicon
Supported file formats: JPEG, PNG, and ICO.
Require address bar shortcut to see search recommendations
Specifies whether the address bar shortcut is required to see search recommendations from this provider.
Enable autocomplete in your Gemini Enterprise project
To enable Autocomplete in your Gemini Enterprise project, go to your Google Cloud Console Gemini Enterprise page , select your app, then select Configurations > Autocomplete . Autocomplete by default won't start making suggestions until it has sufficient quality data (typically a few days). To start generating autocomplete suggestions in Chrome sooner, select Now .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
