---
title: "Share traces and spans \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/share-trace-or-span
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/share-trace-or-span
  title: "Share traces and spans \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Share traces and spans
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how you can share with another person or group the
data you are viewing on the Trace Explorer page. For example,
you might notice a data anomaly or a trend in your trace data and want another
person to examine that data in more detail. Or, there might be errors or
unexpected latency values in an individual trace or span that you
want someone to investigate.
This feature is supported only for Google Cloud projects.
For App Hub
configurations, select the App Hub host project or management project.
Best practice
To facilitate troubleshooting, we recommend that all people, groups and domains
that might need to view trace data in a project be granted the
Cloud Trace User role ( roles/cloudtrace.user ) on that
project. This role gives principals the permissions they need to view
trace data.
Before you begin
To get the permissions that
you need to view trace data by using the Google Cloud console,
ask your administrator to grant you the
Cloud Trace User ( roles/cloudtrace.user )
IAM role on the projects that store your trace data.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Share trace data
When you use the Trace Explorer page to explore your trace data,
the selections that you make update the URL in your browser. For example, if
you add filters or set the time range, then the URL to the page is modified.
Similarly, if you select a span or a trace, the URL is updated to include
the span ID and trace ID.
Therefore, to share the data you are viewing with another person, copy the
page URL and share it. When the recipient pastes the URL into
their browser, the settings contained in the URL override any default settings
for the Trace Explorer page. The displayed data depends on the
recipient's IAM roles on the projects referenced by the URL.
To share trace data, do the following:
In the Google Cloud console, go to the
Trace explorer page:
Go to Trace explorer
You can also find this page by using the search bar.
In the toolbar of the Google Cloud console,
select your Google Cloud project. For App Hub
configurations, select the App Hub host project or management project.
Configure the Trace Explorer page to show the data that you
want to share.
For example, you might want to add filters, update the time-range selector,
or change the Scope element, which controls which projects are searched
for trace data.
If the first menu of the Scope element is set to
Project or to _Default , then
your project is searched for trace data. Otherwise, the projects listed in
the trace scope are searched. For more information, see
Create and manage trace scopes .
If you want to share the URL for a trace or span,
then open the Details flyout for
that trace or span by doing one of the following:
In the toolbar, click pageview Search for trace
and then enter the trace ID.
Find and select a span.
Copy the URL in your browser, and then share that URL.
Troubleshoot
For information about how to resolve problems like a trace missing spans
or not seeing any data in the Trace Explorer page, see
Troubleshoot .
What's next
Find and explore traces
Create and manage trace scopes
View traces across projects
Troubleshoot
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
