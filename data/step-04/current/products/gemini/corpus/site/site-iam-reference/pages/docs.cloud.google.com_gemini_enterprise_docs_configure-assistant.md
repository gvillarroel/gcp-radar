---
title: "Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant
  title: "Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Configure the assistant
Stay organized with collections
Save and categorize content based on your preferences.
Note: Configuration of the assistant requires the Gemini Enterprise
Plus edition.
This page describes how to configure the assistant's behavior.
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that you want to configure.
Click Configurations .
In the Additional LLM system instructions section, select Customize .
Enter the additional LLM system instructions.
For example:
Make the summary headings bold
List the resources as an unordered list
In the Enable web grounding section, make sure the toggle is switched on and
then select one of the following options:
Google search (not Data Residency compliant) to use the standard Google
Search index for grounding.
Enterprise web search (Data Residency compliant) to use the
enterprise-grade and compliant web index.
In the Default web search state section, use the toggle to define
the default behavior for queries:
Switch the toggle on to enable web search by default for new queries.
Switch the toggle off to disable web search by default.
Note: Users can always change this setting manually for each search.
In the Enable location context section, use the toggle switch to enable
or disable the feature:
Switch the toggle on to allow the Gemini Enterprise app to use location
data to improve the quality of responses.
Switch the toggle off to disable the use of location context.
Configure the web setting and location context
In the Enable Model Armor section, follow the instructions to configure
Model Armor and setup the Model Armor templates. For more information,
see the Configure Model Armor
page.
In the Banned phrases section, click add
Add banned phrase to add a phrase.
In the dialog, enter the banned phrase and choose the match type.
Simple string match : This is a substring match. For example, if
Hello is a banned phrase, both Hello world and Helloworld are rejected.
Enter the banned phrase and choose the Single string match type
Word boundary string match : This blocks the phrase as a whole word.
For example, if Hello is a banned phrase, Hello world is rejected, but
Helloworld is accepted.
Enter the banned phrase and choose the Word boundary string match type
Note: When you use multiple phrases, the matching logic ensures the query is
blocked if any of the configured banned phrases are present in your input.
In the Chat history retention period section, select a retention period
for assistant chat sessions. You can select 1, 30, 60, 90, 120, or 180 days
(the default is 60 days). Chat sessions older than the selected retention
period are automatically deleted.
Click Save and publish .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
