---
title: "Analytics \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/analytics
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/analytics
  title: "Analytics \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Analytics
Stay organized with collections
Save and categorize content based on your preferences.
The Dialogflow Console provides an analytics page
that shows various agent request and response data statistics.
This data helps you assess how your agent is being used in production
and may be used to improve your agent.
You can select from multiple data views and filter by time range.
The statistics shown on all charts are computed hourly.
For most views, only successful request data for the V2 API are included.
Open the analytics page
To open the analytics page:
Go to the Dialogflow ES console .
Select an agent.
Click Analytics in the left sidebar menu.
Choose the New tab at the top of the page
to select the new user interface described in this guide.
You can also go back to the Legacy UI if you prefer that.
Common metrics
The following common metrics are displayed on multiple chart types:
Interactions :
For most views, interactions include detect intent request counts
via direct API calls and indirect calls via integrations
(except for Google Assistant).
Sessions :
Sessions are determined by the session ID provided to interactions.
You must create unique session IDs for this metric to be meaningful.
For each hour on the x-axis,
the sessions metric shows a count of active sessions during that hour.
If a session crosses an hour boundary,
it will be counted for each hour it is active.
Therefore, the sum of all hourly session values on a chart
may be larger than the total number of actual sessions
during the entire time period.
Exit % :
The percentage of sessions that ended with an intent
during the selected time range.
Views
There are multiple views that you can select on the analytics page.
Each view differs by the type of data, the data filter, or the chart type.
The following subsections describe each view.
Overall view
This view charts session and interaction counts
for all requests.
Status codes view
This view charts interaction counts
for all requests
by status code.
This includes all V2 API requests, whether successful or not.
Hovering your mouse over a data point shows a popup
with individual status code counts at that point.
For example:
OK
PERMISSION_DENIED
INTERNAL
DEADLINE EXCEEDED
Integrations view
This view charts session and interaction counts
for all requests (except Google Assistant)
by
integration type .
Hovering your mouse over a data point shows a popup
with integration-specific counts at that point.
API calls are shown as "api".
Webhook view
This view charts session and interaction counts
for all requests
by number of requests with and without
webhook calls .
Hovering your mouse over a data point shows a popup
with individual counts at that point:
Webhook called
Webhook not called
Languages view
This view charts session and interaction counts
for all requests
by
language .
Hovering your mouse over a data point shows a popup
with language-specific counts at that point.
Knowledge view
This view charts session and interaction counts
for
knowledge request
by knowledge result data.
Hovering your mouse over a data point shows a popup
with individual counts at that point:
Knowledge had result
Knowledge was used
Knowledge had primary result
Sentiment view
This view charts session and interaction counts
for sentiment requests
by sentiment result data.
Hovering your mouse over a data point shows a popup
with individual counts at that point.
Speech view
This view charts session and interaction counts
for speech requests
by speech-to-text and text-to-speech.
Hovering your mouse over a data point shows a popup
with individual counts at that point:
Speech to text
Text to speech
Intents view
This view shows a table of common metric values
for all requests by intent.
Intent path view
This view graphs intent nodes with connecting intent path lines .
Each intent in your agent has one node.
Each intent path line shows a frequency value for how often
one intent follows another intent in sessions for the selected time period.
The session start node has intent path lines to the initial intent matches.
Each intent node has a frequency value inside its node box
that shows how often the intent ended a session for the selected time period.
For example, consider that you have three intents: A , B , and C :
If A is always the first intent matched in a session,
the chart will show a 100% intent path line from session start to A .
If B is matched 30% of the time that
A was matched in the previous interaction in the session,
the chart will show a 30% intent path line from A to B .
If C is matched 70% of the time that
A was matched in the previous interaction in the session,
the chart will show a 70% intent path line from A to C .
If 40% of sessions end by matching C ,
the C intent node box will contain a 40% value.
Hovering your mouse over an intent node shows a popup
with metrics for the intent:
Sessions start with this intent :
The count and percentage of sessions that started with this intent.
Interactions matched this intent :
The count and percentage of interactions that matched this intent.
Sessions end with this intent :
The count and percentage of sessions that ended with this intent.
Hovering your mouse over an intent path value or session start node
also shows additional information.
Session path view
Similar to the intent path view,
this view graphs intent nodes with connecting intent path lines .
However, the intent path lines in this view show the frequencies
as found in complete paths taken by common sessions for the agent.
One intent node may appear multiple times
if it is matched in multiple paths or multiple times in a single path.
You can interact with this chart by clicking intent nodes to expand them.
Hovering your mouse over an intent node shows a popup
with metrics for the intent:
Sessions followed this path prefix :
The count and percentage of sessions that followed the path
up to the intent node.
Ended at this point :
The percentage of sessions that ended on the path
up to the intent node.
Additional data from Stackdriver
In addition to the data provided by the analytics page,
you can query for other types of data using Stackdriver.
See:
tag_consumed_api
Creating a Dashboard with Stackdriver SLI Monitoring Metrics
Limitations
The following limitations apply:
Google Assistant integration
data is not supported.
It can take up to a day for data to appear in analytics.
Previous
arrow_back
Agent validation
Next
API interactions
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
