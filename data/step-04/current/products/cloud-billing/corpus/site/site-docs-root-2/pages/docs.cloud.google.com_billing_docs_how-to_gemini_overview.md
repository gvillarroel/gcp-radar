---
title: "Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/gemini/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/gemini/overview
  title: "Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
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
Gemini Cloud Assist in Cloud Billing
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
Gemini Cloud Assist
in Cloud Billing provides generative AI-powered assistance to help
you analyze your billing data.
FinOps-focused AI assistance in Cloud Billing
To provide an integrated assistance experience,
Gemini Cloud Assist in Cloud Billing is available on
the following Billing pages in the Google Cloud console:
Reports - Gemini Cloud Assist in Cost Reports provides insights
into your cloud spending, allowing you to create custom reports, identify key trends, and uncover what's driving your costs.
FinOps hub - Gemini Cloud Assist in Google Cloud FinOps
provides insights to help you understand your costs, identify waste, and
prioritize cost optimization opportunities.
Access to the Gemini Cloud Assist features available in
Cloud Billing requires the following:
The Gemini Cloud Assist API is enabled in a Google Cloud project where
you have the necessary Identity and Access Management (IAM) project permissions to
access the API.
On the Cloud Billing account, you have the necessary
IAM billing permissions to view billing reports and the
FinOps hub.
Note: Gemini Cloud Assist in Cloud Billing
is available at no additional cost. Usage of
Gemini for Google Cloud
with other Google Cloud products (such as BigQuery,
Gemini Code Assist, or Looker) might incur charges or
require the purchase of additional or different features.
AI assistance in Cloud Billing Reports
Gemini Cloud Assist in Cloud Billing Reports provides
FinOps-focused AI assistance to create the cost reports you need to analyze your
cost trends and to summarize key insights from the cost reports, making it
easier to understand your costs.
Gemini Cloud Assist in Cloud Billing Cost Reports
provides AI assistance to help you in the following ways:
Using saved reports .
You can select various Google-configured
and user-configured cost reports to analyze your cost trends. The saved
reports feature updates the previous
Saved views
feature and also replaces the report
Presets
with an expanded number of Google-preconfigured reports.
Creating reports using Gemini assistance .
You can create custom cost reports using natural language prompts.
Summarizing reports .
Gemini Cloud Assist provides summaries of key insights and
anomalies from each cost report. The insights might include links that open
a new, scoped report, or links that open other pages in the Billing section of
the Google Cloud console, such as
Anomalies or
FinOps hub .
Saved reports
To analyze your cost trends, you can select from various Google-configured and
user-configured cost reports:
Google Cloud offers a range of preconfigured cost reports (formerly known
as Presets )
that are ready to use with a single click. These reports address common FinOps
cost reporting needs, helping you implement best practices faster. You can
scroll through the carousel of preconfigured reports, or click
See all reports for a comprehensive list.
Additionally, if you create and save custom cost reports (previously known as
Saved views ),
your saved reports are also available for you and your team in the
See all reports tab.
When you select a preconfigured or saved report, your
report filters
are set based on the saved report settings, and your selected report is shown,
along with a
report summary .
You can further customize the report by manually updating the report
settings and filters ,
or by asking Gemini Cloud Assist
to find or create a report. You can
save edited and custom-created reports
to your list of saved reports.
Gemini-assisted reports creation
You can create custom cost reports using natural language prompts:
If the saved reports
don't meet your needs, you can describe the report that you want using natural
language. Gemini Cloud Assist interprets your request and
automatically configures the report
settings and filters
to create the report for you.
Write better prompts for reports
When you ask Gemini Cloud Assist in Cloud Billing to
find or create a report, you should include as much context and specific detail
as possible when you describe the report you want to view. At a minimum,
specify a
time range
and a
group by
when writing a prompt for a report.
If you don't explicitly specify the Time range in the prompt, your report
settings default to Current month .
If you don't explicitly specify the Group by option in the prompt,
your report settings default to grouping costs by Service .
Here are a few example prompts to get you started:
Daily costs and savings by service for the last 5 days
Invoice costs per SKU for July 2024
Monthly costs by project for the last 6 months
Compute Engine spend by SKU in project-name since the beginning of 2024
Help me understand and optimize my costs by service for the last 30 days
We recommend starting with a
preconfigured report ,
then prompt for additional filters to focus your cost analysis. When using this
method, write the name of the report, followed by the additional
filters ,
as shown in this example:
SKUs – daily costs this month for Compute Engine in US regions
SKUs – daily costs this month — name of preconfigured report, sets the
Time range and Group by option.
Compute Engine — sets the
Services
filter
US regions — sets the
Locations
filter
Save custom reports to use again
In billing reports, Gemini Cloud Assist is focused on helping
you to create the cost reports that you need to analyze your Google Cloud
costs. To reuse a custom report that you created with
Gemini Cloud Assist, you can
save the report .
Your
saved reports
are added to the list of reports available in the See all reports tab.
Report summaries provided by Gemini Cloud Assist
Gemini Cloud Assist summarizes key insights and anomalies from
each cost report:
The Gemini-assisted report summaries are designed to provide
accurate insights. We developed the report insights in partnership with Google's
research teams.
Using FinOps-trained models, Gemini Cloud Assist analyzes your
cost reports and delivers actionable insights. Depending on your report
settings, insights can include a summary of the following:
Overall costs: total costs for the specified time period, with cost trends
(increasing or decreasing).
Cost drivers: for example, the projects or services responsible for the
biggest cost changes, both in terms of absolute amount and percentage, with
a direct link to the Anomalies page if unusual spending patterns are detected.
Savings: how much you've saved through cost optimization, with a direct
link to the FinOps hub for further recommendations.
Budgeting: suggestions to create budgets to track and control
spending.
Gemini Cloud Assist provides up to three key insights per report,
helping you pinpoint areas for deeper analysis or cost optimization.
AI assistance in Cloud Billing FinOps hub
Gemini Cloud Assist in the
FinOps hub
helps you understand costs, identify waste, and prioritize cost optimization
opportunities. Further, on the
Utilization insights dashboard ,
you can use Gemini Cloud Assist to summarize and send top wasted
usage insights to your engineering teams to take action and remediate.
FinOps hub insights provided by Gemini Cloud Assist
Gemini Cloud Assist provides key optimization and utilization
insights from the FinOps hub analysis:
Gemini Cloud Assist provides up to three key insights for each
FinOps hub page load, helping you pinpoint areas for deeper analysis or cost
optimization.
Draft an email with Gemini-generated insights
On the FinOps
Utilization insights
dashboard, you can discover if resources are used efficiently and view
high-impact utilization insights based on the potential costs of wasted
resources.
Gemini Cloud Assist provides the top three utilization
insights.
To help with financial accountability collaboration and data-driven
decision making requirements, Gemini Cloud Assist offers a tool
to draft an email report based on the results of the utilization insights
and optimization recommendations. You can copy the content of the report to
send it in an email, chat, a ticketing system, or any other tool you use.
Focus on top projects
If you have more than 10 projects in your billing account with utilization
insights, you can select
filter_list
Focus on the top projects to filter the utilization
insights by the projects with the highest amount of potential cost savings.
How to interact with Gemini Cloud Assist in Cloud Billing
After you
enable Gemini Cloud Assist
in a Google Cloud project, in Cloud Billing you can find
Gemini-provided assistance in the following places:
Cloud Billing: Reports page and FinOps hub page
Google Cloud console, including Cloud Billing pages:
Gemini Cloud Assist chat panel
Cloud Billing: Reports page and FinOps hub
Cost Reports
To access the new AI features in your Cloud Billing reports, log
into the Google Cloud console, select the Gemini project,
then open your Cloud Billing account and view the Reports page.
In the Google Cloud console, go to the Dashboard page.
Go to Dashboard
Select a Google Cloud project where the Gemini for Google Cloud API is
enabled.
The project should be linked to the same billing account you intend to
analyze, and you should have
adequate IAM permissions on the project
to use Gemini Cloud Assist in Cloud Billing.
In the menu
navigation menu, click Billing .
If you're prompted to choose which billing account you want to view
and manage, click Go to linked billing account to view the
billing account that's linked to your selected project.
The Cloud Billing Overview page opens for the selected
billing account.
In the Cost management section of the Billing navigation menu,
select Reports .
The Reports page opens and shows a report using
default settings ,
displaying all costs for the current month, grouped by service.
Use the
Gemini Cloud Assist
features to interact with the Cloud Billing Report.
When you're viewing the Reports page, if the
Gemini Cloud Assist API is already enabled in a
Google Cloud project where you have adequate project permissions to use
Gemini assistants, you see the
Gemini Cloud Assist in Cloud Billing
features on the Reports page:
What you can do if Gemini is not enabled in billing reports
If Gemini Cloud Assist in Cloud Billing is not
yet enabled, you can still access the
preconfigured and saved reports
in the See all reports tab. Also, you can manually configure reports
by selecting the various
report settings and filters
to create a report.
However, without Gemini Cloud Assist in
Cloud Billing enabled, you won't be able to
prompt Gemini Cloud Assist to create a report ,
or see the
Gemini Cloud Assist-provided report summary .
You might be able to enable Gemini Cloud Assist from the billing report
Consider the following when you view the Cloud Billing
Reports page:
If you haven't enabled the Gemini for Google Cloud API in a
Google Cloud project but you have adequate project permissions to
do so, you can select Enable Gemini API to use
Gemini Cloud Assist in Cloud Billing:
If you haven't enabled the Gemini for Google Cloud API in a
Google Cloud project, and you don't have adequate project
permissions to enable the API in any of the projects associated with
the Cloud Billing account, the Enable Gemini API button
is greyed out:
Ask an administrator or project owner to
set you up to use Gemini Cloud Assist in Cloud Billing .
They need to enable the Gemini Cloud Assist API in a project
that's associated with the Cloud Billing account that you're
viewing and then grant you the Gemini Cloud Assist User
IAM role on the project where the
Gemini Cloud Assist API is enabled.
FinOps hub
To access the AI features in your Cloud Billing FinOps hub, log
into the Google Cloud console, select the Gemini project,
then open your Cloud Billing account and view the FinOps hub
page.
In the Google Cloud console, go to the Dashboard page.
Go to Dashboard
Select a Google Cloud project where the Gemini for Google Cloud API is
enabled.
The project should be linked to the same billing account you intend to
analyze, and you should have
adequate IAM permissions on the project
to use Gemini Cloud Assist in Cloud Billing.
In the menu
navigation menu, click Billing .
If you're prompted to choose which billing account you want to view
and manage, click Go to linked billing account to view the
billing account that's linked to your selected project.
The Cloud Billing Overview page opens for the selected
billing account.
In the Cost optimization section of the Billing navigation menu,
select FinOps hub .
Use the
Gemini Cloud Assist
features to interact with the FinOps hub.
When you're viewing the FinOps hub page, if the
Gemini Cloud Assist API is already enabled in a
Google Cloud project where you have adequate project permissions to use
Gemini assistants, you see the
Gemini Cloud Assist insights in the Optimization summary
widget:
What you can do if Gemini is not enabled in billing FinOps hub
If Gemini Cloud Assist in Cloud Billing is not
yet enabled, you won't see the optimization and utilization
insights provided by Gemini Cloud Assist .
All of the other
FinOps hub
features are available.
You might be able to enable Gemini Cloud Assist from the FinOps hub
Consider the following when you view the Cloud Billing
FinOps hub page:
If you haven't enabled the Gemini for Google Cloud API in a
Google Cloud project but you have adequate project permissions to
do so, you can select Enable Gemini API to use
Gemini Cloud Assist in Cloud Billing:
If you haven't enabled the Gemini for Google Cloud API in a
Google Cloud project, and you don't have adequate project
permissions to enable the API in any of the projects associated with
the Cloud Billing account, the Enable Gemini API button
is greyed out:
Ask an administrator or project owner to
set you up to use Gemini Cloud Assist in Cloud Billing .
They need to enable the Gemini Cloud Assist API in a project
that's associated with the Cloud Billing account that you're
viewing and then grant you the Gemini Cloud Assist User
IAM role on the project where the
Gemini Cloud Assist API is enabled.
Chat in the Gemini Cloud Assist panel in Google Cloud console
You can access AI-powered assistance in the
Cloud Assist panel
available from any page in the Google Cloud console.
The Cloud Assist panel is a conversational assistant that lets you write
natural language statements or questions (called prompts ) to get explanations,
suggested actions, or guided workflows that help you complete tasks quickly and
efficiently. Beyond general Google Cloud knowledge, the conversational
assistant understands context, like your current project and console page.
Note: The Cloud Assist panel isn't designed to answer questions about
product prices or specific Google Cloud cost information. To analyze
your Google Cloud costs, access the
tools available in Cloud Billing .
To use the Cloud Assist panel, do the following:
In the Google Cloud console toolbar, click
spark
Open or close Gemini Cloud Assist chat .
In the Cloud Assist panel, enter your prompt—for example,
How can I optimize my costs? .
Click
send
Send prompt .
Billing data limitations in the Cloud Assist panel
In Cloud Billing, the Gemini conversational assistant
provides general answers to your billing questions, but it doesn't return
product pricing or specific Google Cloud cost information.
DevOps and FinOps practitioners who want to use
Gemini Cloud Assist to understand cloud costs, identify
opportunities for cost savings, and get AI insights to maximize cloud resource
utilization and performance can use the Gemini-assisted
Cloud Billing tools available in the following Billing pages:
Cost Reports : For assistance in finding or creating a billing report to
gain insights into your Google Cloud spending, identify key trends, and
uncover what's driving your Cloud Billing costs, use the
Gemini Cloud Assist prompt available on the
Cloud Billing Reports page .
FinOps hub : For cost optimization insights and recommendations, see the
Gemini-generated insights on the FinOps hub .
Learn how and when Gemini
for Google Cloud uses your data .
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
Quota limitations using Gemini Cloud Assist
Gemini features in Cloud Billing are dependent
on the Gemini for Google Cloud API service or the Gemini Cloud Assist
API service. APIs are subject to different types of
quotas
that restrict how much of a Google Cloud resource your
Google Cloud project can use.
In your Gemini project, the use of Gemini Cloud Assist
in Cloud Billing is
rate limited
by a "Duet" quota type, specifically limited to 240
Duet Text API requests per day per user quota.
If you reach the daily quota limit while you are using
Gemini Cloud Assist in Cloud Billing — while viewing
Cost Reports or the FinOps hub — your Gemini-provided tools
stop working in the project selected for Gemini usage.
Per-day rate quotas reset at midnight, US and Canadian Pacific Standard Time
(UTC-8).
You might experience the following when you've reached your daily quota:
In the Gemini-provided Insights panels, you'll see a message
similar to: "You have reached your quota for the
Gemini Cloud Assist API for the day."
Mitigate quota issues
If you reach your Gemini service quota limit for the day, but
you want to continue working with Gemini Cloud Assist in
Cloud Billing, consider the following options:
Option 1 : Wait until your daily quota resets (at midnight, US and Canadian
Pacific Standard Time (UTC-8)).
Option 2 : Your use of the Gemini service in one project
doesn't affect your available quota in another project. To continue working
uninterrupted with Gemini tools in Cloud Billing,
select a different Google Cloud project to use with
Gemini Cloud Assist.
To select a different project, exit Billing, select a different project, and
then return to the Billing section of the Google Cloud console:
In the Google Cloud console, go to the Dashboard page.
Go to Dashboard
Select a different Google Cloud project where the
Gemini for Google Cloud API is enabled.
The project should be linked to the same billing account you intend to
analyze, and you should have
adequate IAM permissions on the project
to use Gemini Cloud Assist in Cloud Billing.
In the menu
navigation menu, click Billing .
If you're prompted to choose which billing account you want to view and
manage, click Go to linked billing account to view the billing account
that's linked to your selected Gemini project.
Continue using the Gemini Cloud Assist tools in Cost
Reports and the FinOps hub.
Option 3 : In your Gemini project,
request a quota adjustment
for the Duet Text API requests per day per user quota for the
Gemini for Google Cloud API:
Go to the Quotas & System Limits page:
Go to Quotas & System Limits
Ensure that you are viewing the services and quotas in your
Gemini project. You might need to use the project picker
to select your preferred project.
Use the filter_list
Filter search box to search for the Duet Text API requests per day
per user quota type.
Expand the more_vert
More actions menu, and select Edit quota .
Fill out the form as required, and click Submit request .
For more information about Google Cloud quotas, see
View and manage quotas .
Note: The
Cloud Assist chat panel
in the Google Cloud console uses a slightly different quota. Use of the
Gemini panel is limited to 240
Duet Task API requests per day per user in your Gemini
project.
Set up Gemini Cloud Assist in Cloud Billing
For detailed setup steps for the Gemini Cloud Assist
features that appear in Cloud Billing, see
Set up Gemini Cloud Assist in Cloud Billing .
Turn off Gemini Cloud Assist in Cloud Billing
For information on how to turn off the Gemini Cloud Assist
features that appear in Cloud Billing, see
Turn off Gemini Cloud Assist in Cloud Billing .
What's next
Learn more about the different
types of generative AI assistance available in Gemini for Google Cloud .
Learn
how Gemini for Google Cloud uses your data .
Learn more about Google Cloud compliance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
