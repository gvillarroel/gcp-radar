---
title: "View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/cross-project-traces
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/cross-project-traces
  title: "View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
View traces across projects
Stay organized with collections
Save and categorize content based on your preferences.
By default, the Trace Explorer page only searches your selected
project for trace data. To view trace spans that are stored in multiple
projects, as might occur when an application in one project makes a call into
an application that another project hosts, do the following:
Create a trace scope that lists the default trace view for each
project that stores spans for your trace. A project's default trace view
corresponds to the view with the path _Trace/Spans/_AllSpans , where the
fields _Trace , Spans , and _AllSpans refer to an observability bucket,
dataset, and view. The dataset Spans stores your trace data.
For information about trace scopes, see
Create and manage trace scopes .
Update the observability scope.
Note: To facilitate correlation between log and trace data, set the
observability scope. This scope specifies which of your trace scopes
and log scopes to use when the corresponding explorer pages open.
If you don't configure the observability scope to list the
resources that store your data, then you might not be able to correlate your
trace and log data. To learn more, see
Configure observability scopes for multi-project queries .
Open the Trace Explorer page to view your trace data. This page
automatically searches the views listed in the
default trace scope for trace data. If the default
trace scope scope isn't accessible, then the page searches
the project's _AllSpans view on the default dataset. This view provides
read access to all trace data that the project stores.
To change which views are searched for trace data, go to the toolbar and
use the Scope element. For more information, see
Configure which views the Trace Explorer searches .
Your Identity and Access Management (IAM) roles on the views listed in the
trace scope and the time-range setting determine what data the
system displays. The trace scope only specifies which views the
system searches for data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
