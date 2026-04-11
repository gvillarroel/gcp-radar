---
title: "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results
  title: "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud\
    \ Documentation"
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
Configure results for the UI
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure results for the web app UI, which is the
interface that your users use to access your app.
Search widget concepts
Here are some concepts to help you understand how to use the controls on
the UI tab.
Snippet. A short section of text, typically a sentence, under the
document title. By default, a snippet is displayed for each search result for
website and unstructured data.
Search with an answer. This feature provides a paragraph of information
(the answer) synthesized from the top results of website or unstructured data.
You can customize the number of top results that the answer is based on. By
default, the top five results are summarized to create the answer. Search with
an answer cannot be combined with Search with follow-ups.
Search with follow-ups. This feature for website and unstructured data
allows for follow-up questions that keep the context of the initial search
query.
Autocomplete. Suggests search queries based on the first letters that
users enter into the search bar. For more information, see Configure
autocomplete .
Feedback. Provides buttons thumb_up and thumb_down so that users can rate
the quality of the search results. This information is sent only to Google.
For more information, see Configure feedback .
Metadata. If the data is structured or contains metadata, you
can configure which metadata fields to include in the search results. You can also map
fields to display names for facets. For more information, see
Configure facets for the UI .
Configure search results for unstructured or website data
The UI for unstructured and website data offers the following search
customizations:
Search (single-turn)
Search with an answer (single-turn search with summarization)
Search with follow-ups (multi-turn search)
To configure how the UI displays search results for unstructured data:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that you want to edit.
In the navigation menu, click Configurations .
Click the UI tab.
Edit the fields on the tab.
Use the Preview pane to make sure your changes are displayed
as expected.
Click Save and publish to apply your changes.
Configure search results for structured data
For structured data, by default, the UI displays all of the name-value
pairs for each item in the search results. You can use the Configurations
page in the Google Cloud console to customize how the UI displays search
results.
The following list shows the primary fields for displaying search results:
Title. An item title that a user can click to select that item in a
search result.
Thumbnail. The URL of an image to be shown next to the item title in a
search result.
URL. A URL that the user is taken to when they click the item's title.
You can display up to three additional fields in your search results and
configure how they appear.
In addition, you can select facets to filter search results on and set display
names for them. For more about configuring facets, see Configure facets
for the UI .
To configure how the UI displays search results for structured data:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the search app that you want to edit.
Click Configurations .
Click the UI tab.
If you have multiple data stores connected to your app, select the data store to configure results for.
Expand the Configure fields in results section.
In the Preview pane, type a query and press Enter to view how search
results are displayed with your current settings. The preview updates
automatically when you enter new settings.
Optional: Click a device icon to see the preview in desktop or mobile
format.
To configure the primary fields ( Title , Thumbnail , and URL ) in
your search results:
Click the Title box and select a field to map to the titles of your
search results. Or, select None if you don't want titles to appear
in search results.
Click the Thumbnail box and select a field to map to the thumbnail
images in your search results. Or, select None if you don't want
thumbnail images to appear in search results.
Click the URL box and select a field that maps to the items that
open when users click item titles in search results. Or, select None
if you don't want item titles in your search results to link to
items.
To add additional fields to your search results:
Click the Text 1 box and select a field that you want to display in
your search results. By default, only the field value is displayed in
search results.
Click the arrow next to the Text 1 box to display the Template
box. The {value} field in Template box represents the field
value to display in the search result. Add text before or after the
{value} field (or both) to give context to the value in the search
results. For example, suppose you selected price in the Text 1
box, and the price value for a particular item is 42. If you update the
Template field to "Total
Price: {value} USD" , then "Total Price: 42 USD" is displayed in the
search results for that item.
To add additional fields, repeat these steps for the Text 2 and
Text 3 boxes.
To configure facet settings:
Expand the Facet settings section.
Select a field to set as a facet and enter a display name.
To add more facets, click Add facet .
Check the Preview pane to make sure your changes display correctly.
Click Save and publish to apply your changes.
Note: For information about enabling autocomplete, see Configure
autocomplete . For information about enabling feedback,
see Configure feedback .
Next steps
Preview search results
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
