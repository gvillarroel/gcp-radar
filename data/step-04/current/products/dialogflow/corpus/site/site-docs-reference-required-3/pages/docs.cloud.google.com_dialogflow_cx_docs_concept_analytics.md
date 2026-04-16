---
title: "Analytics \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics
  title: "Analytics \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Analytics
Stay organized with collections
Save and categorize content based on your preferences.
The Dialogflow CX console provides an analytics panel
that shows various views for tracking agent performance data.
For example,
you can track escalations, pages with many no-matches,
and webhooks with many failures.
You can filter each view by date range.
All statistics shown are computed hourly.
Using these analytics views,
you can understand your agent performance through different conversation paths
and take corrective action to improve performance.
Limitations
For large agents,
analytics data may take time to load.
Enable conversation history
The analytics tool uses data from conversation history.
You can enable and disable this logging with the
Enable conversation history
agent setting.
Open the analytics panel
To open the analytics panel:
Go to the Dialogflow CX console .
Choose your project.
Select your agent.
Select the Manage tab.
Click Analytics .
Using the link near the top,
you can also access
Legacy Analytics .
Conversation outcomes
This view shows the counts of certain conversation outcomes
as a time series chart.
The following metrics are shown:
X
Item
End Interaction
The number of conversations that were abandoned.
Live Agent Handoff
The number of conversations where human escalation was requested.
Other
A fail-safe category in case the conversation was not handed to the live agent and did not reach the END SESSION page . For example, if a user says "Hi" and immediately closes the conversation, the conversation is categorized under Other .
Intent escalations
This view shows a table of intents
with the highest number of human escalations.
It also shows an escalation trend for a selected intent
as a time series chart.
If you have labeled certain intents as
head intent ,
then you can restrict the view to these intents only.
The following metrics are shown:
X
Item
Sessions
Total number of sessions that the intent was detected in.
Escalation rate
Percentage of sessions that requested human escalation.
Turns
The number of conversational turns the intent was detected in. Each conversation may have multiple matches for one intent.
Head Intent Escalated
Percentage of escalation requests for sessions in which the intent was the final head intent.
Troubleshooting
The troubleshooting section contains
multiple types of views that help debug common issues with flows and pages.
Missing transitions
This view provides pages in tabular form,
where an existing intent should have matched
but doesn't due to missing routes.
The following metrics are shown:
X
Item
Intent Name
The intent name that would have matched if it were in scope.
Turns
The number of conversational turns that should have matched the intent.
Pages with no-matches
This view provides pages in tabular form,
sorted by no-match rates.
The following metrics are shown:
X
Item
No Match rate
Percentage of total conversation turns that resulted in no-match for the page.
No Match turns
The total number of conversation turns that resulted in no-match for the page.
Pages with no responses
This view provides pages in tabular form,
where the pages resulted in no agent response.
The following metrics are shown:
X
Item
Empty responses
The number of interactions on the page with no agent response.
Webhook errors
This view provides webhook errors in tabular form.
You can organize the list by:
By name : Organized by webhook name.
By tag : Organized by webhook tags.
X
Item
Calls
The number of webhook invocations.
Failures
The number of webhook failures excluding timeouts.
Timeout rate
Percentage of webhook invocations that timed out.
Average latency
Average latency of the webhook invocation.
Previous
arrow_back
Validation
Next
Legacy Analytics
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
