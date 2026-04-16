---
title: "Use NotebookLM Enterprise within Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/access-notebooklm
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/access-notebooklm
  title: "Use NotebookLM Enterprise within Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Use Gemini Enterprise
Send feedback
Use NotebookLM Enterprise within Gemini Enterprise
Stay organized with collections
Save and categorize content based on your preferences.
NotebookLM Enterprise is integrated with
Gemini Enterprise. This page describes how end users access
NotebookLM Enterprise from within the
Gemini Enterprise search web app UI and how they can add
documents found in searches to a notebook.
Note: In the Gemini Enterprise Frontline edition,
NotebookLM Enterprise support is limited to interacting with published
notebooks. Creating new notebooks requires the Gemini Enterprise Standard
or Gemini Enterprise Plus editions.
Access NotebookLM Enterprise from the web app
To access NotebookLM Enterprise, do the following:
Open the Gemini Enterprise web app.
In the app navigation menu, go to Agents .
In the Made by Google section, click NotebookLM .
The NotebookLM Enterprise interface opens in the web app.
The notebooks that you created in a particular project and location
through the NotebookLM Enterprise site are
accessible from within Gemini Enterprise web apps.
Similarly, notebooks created from within a Gemini Enterprise
app are accessible from the NotebookLM Enterprise site.
Add a source to a notebook from Gemini Enterprise (Private preview)
Preview: To use this feature, your project must be on the allowlist.
To be added to the allowlist, contact your account team or the sales team .
When Gemini Enterprise returns search results, you might want
to add those search results to a notebook. For many document types, you can do
this from the search web app with a single click.
Not all document types can be added to notebooks as sources.
For example, you can add Google slides but not emails. If a document type
can't be added, then the Add content to… button isn't available.
Notebook source limitations and security
Here are a couple of security considerations related to sources in notebooks:
Sources as instances: When you add a document as a source to a notebook, a
copy of the document is added to the notebook. This means that there are now
two copies of the document, one that belongs to original owner and one that
belongs to the owner of the notebook. Changes to the original document aren't
reflected in the copy. This has security implications: if you want to
change who can access the information, you need to make the change on both
documents, the original and the copy.
Sources in shared notebooks: If a notebook is shared with others, you
can't add more sources to it. This restriction is to maintain access control.
See Notebooks that can't be
shared .
Procedure
To add a document returned by search as a source to a notebook, do the
following:
Click book_4_spark
Add content to… .
Choose to add the content to one of the following:
A new notebook
An existing notebook
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
