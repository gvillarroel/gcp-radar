---
title: "Gemini Enterprise concepts \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
  title: "Gemini Enterprise concepts \_|\_ Google Cloud Documentation"
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
Gemini Enterprise concepts
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the concepts related to Gemini Enterprise.
Gemini Enterprise is composed of several key concepts that
work together to provide a powerful search and action platform. These concepts
include data sources, data stores, apps, assistants, actions, agents, and
analytics.
Concept
Description
Data sources
You can connect Google and third-party
data sources to Gemini Enterprise and store the data in dedicated
data stores. To connect your data sources, see
Connect a Google data source and
Connect a third-party data source .
Data stores
Each data source supports a set of entity
types. For example, Jira Cloud has entities such as issues, attachments,
comments, and worklogs, which are unique to the data source.
Gemini Enterprise creates a
separate data store for each entity. Therefore, when you create a
data store using the Google Cloud console, you get a collection of
data stores representing these ingested data entities.To learn about
Gemini Enterprise data
stores, see
Introduction to
connectors and data stores .
Apps
A Gemini Enterprise app provides
search results, actions, and agents to your end users. The term app
can be used interchangeably with the term engine in the context of
APIs. An app must be connected to a data store in order to use the data
from it to serve search results, answers, or actions.
Apps have a many-to-many relationship with data stores. When
multiple data
stores are connected to a single app, this is referred to as blended
search . For information about connecting a search app to more
than one data store, see About blended search .
To learn more about creating an app, see Create an app .
Assistant
The in-app chat box, known as the assistant, is grounded with the
content in the data stores and adheres to the defined security, privacy,
and compliance safeguards.
The assistant generates answers to queries and answers follow-up
questions, ground answers in your enterprise data with citations and
provide optional grounding and citations based on external public
website data, analyze and summarize content such as PDFs and images that
you upload, and answer follow-up questions about it, and generate images
based on text prompts and create reports with streamed research during
the creation process.
To learn about using the assistant, see Use the assistant .
Actions
Assistant actions allow the assistant to perform tasks on behalf of users.
For example, if your app connects to Google calendar and Jira Cloud data
sources, users can instruct the assistant to create Google Calendar events
or edit Jira Cloud issues.
You can turn on assistant actions for the following data stores:
Gmail and Google Calendar
Jira Cloud
Outlook email and Outlook calendar
ServiceNow (Private preview)
Agents
Agents are applications built to accomplish specific objectives. By connecting to your enterprise data and utilizing a range of tools, these agents can automate multi-step processes, analyze information, and generate new content. In Gemini Enterprise, you can find prebuilt agents in the Agent Gallery or use Agent Designer to create your own custom agents.
Analytics
Analytics give you insight into the usage trends, search quality,
and end-user engagement of your app. The console provides an interactive
dashboard experience powered by Looker.
For more information, see View and export analytics data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
