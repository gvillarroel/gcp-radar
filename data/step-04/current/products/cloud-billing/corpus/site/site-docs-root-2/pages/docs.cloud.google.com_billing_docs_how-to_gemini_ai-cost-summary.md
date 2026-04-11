---
title: "Analyze your AI spend with the AI Cost Summary Agent \_|\_ Cloud Billing \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary
  title: "Analyze your AI spend with the AI Cost Summary Agent \_|\_ Cloud Billing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Analyze your AI spend with the AI Cost Summary Agent
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Use Gemini to analyze your AI costs and gain critical insights into
your AI-related spend. The AI Cost Summary Agent analyzes spending related
to Gemini usage, including Gemini API and Vertex AI.
This agent proactively scans your entire AI footprint (pulling data from the
relevant sources) to pinpoint the exact drivers of costs and cost changes, and
provides useful next steps. This helps reduce the work necessary to understand
cost trends and what changes drove your spend.
Note: The AI Cost Summary Agent does not appear for
Google Cloud Dedicated customers.
Permissions required to use the AI Cost Summary Agent
To use the AI Cost Summary widget, you need a role that includes the following
permissions on the Cloud Billing account:
billing.anomalies.list
billing.billingAccountPrices.list
billing.billingAccountServices.list
billing.billingAccountSkus.list
To gain these permissions using a predefined role, ask your administrator to
grant you one of the following
Cloud Billing IAM
role on your Cloud Billing account:
Billing Account Viewer
Billing Account Administrator
Analyze your AI spend
The AI Cost Summary Agent is presented as a widget on the Billing Overview
page for your Cloud Billing account. To use the AI Cost Summary Agent,
complete the following steps:
In the Google Cloud console, go to the Billing Overview page for your
Cloud Billing account.
Go to your Cloud Billing account
At the prompt, choose the Cloud Billing account for which you'd
like to analyze your AI spend. The Billing Overview page opens for the
selected billing account.
Locate the Your AI Spend widget.
Type your question about your costs into the input field. For examples, see
Example questions .
The widget begins analyzing your AI-related costs and presents you with a
summary of the results. This analysis can take approximately 45 seconds.
You can either review the results of that analysis or ask the agent a
specific follow-up questions about your AI-related spend (for example, how
to reduce costs, or to investigate cost drivers).
Example questions
You can ask the agent questions such as:
"Tell me about my AI costs for the past 30 days."
"I see a Vertex AI cost spike on Feb 3, what caused this?"
"What are my top 3 cost drivers right now across all my AI projects?"
"Did I have any anomalies in my spend over the past month? What caused it?"
"Break down my total spend by API Key so I can see which integration is
expensive."
Limitations
Scope: You can't ask the LLM about costs unrelated to AI services.
Accuracy: Gemini can make mistakes. Always double-check
responses and verify the insights and recommendations before making
significant financial or architectural changes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
