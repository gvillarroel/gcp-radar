---
title: "Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui
  title: "Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Explore BigQuery in the Google Cloud console
The BigQuery Google Cloud console provides a graphical
interface that you can use to create and manage BigQuery resources. You
can also use the console to complete tasks such as running SQL
queries and creating pipelines.
In this walkthrough, you explore the components of the BigQuery
Google Cloud console.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
For new projects, the BigQuery API is
automatically enabled.
Optional:
Enable
billing for the project. If you don't want to enable billing or provide
a credit card, the steps in this document still work. BigQuery
provides you a sandbox to perform the steps. For more information, see
Enable the BigQuery sandbox .
Note: If your project has a billing account and you want to use the
BigQuery sandbox, then
disable billing for your project .
Open the Google Cloud console
Go to the Google Cloud console.
Go to the console
In the Google Cloud console toolbar, click
menu Navigation menu .
Click Solutions > All products .
In the Analytics section, click BigQuery .
The BigQuery Studio page opens.
To expand or collapse the menu, click
last_page or
first_page
Toggle BigQuery navigation menu .
You can use the navigation menu to open the following pages:
Overview ( Preview ):
lets you discover tutorials, features, and resources.
Studio : lets you display your BigQuery
resources and perform common tasks.
Search ( Preview ):
lets you search for Google Cloud resources from
BigQuery by using natural language queries.
Agents ( Preview ):
lets you create and chat with data agents that are designed to answer
questions about BigQuery resources.
You can also use the navigation menu to perform specific tasks in the following
menu sections:
Pipelines and integration : lets you create and configure
data transfers , create and list
Dataform
repositories, and create and list scheduled resources
such as scheduled queries .
Governance : lets you display shared data exchanges
and cleanrooms , view policy tags ,
and curate metadata .
Administration : lets you perform administrative tasks such as
monitoring , viewing
information about jobs ,
managing capacity ,
viewing information about disaster recovery ,
and displaying recommendations .
Migration : lets you view and set up options for migrating your data
warehouse to
BigQuery.
Partner Center : provides tools and services from
partners to
accelerate your workflow.
Settings ( Preview ):
lets you customize BigQuery defaults or user interface
settings .
Release notes : contains the latest product updates and
announcements for BigQuery.
The BigQuery Studio page
The BigQuery Studio
page displays your BigQuery resources and lets you perform common
tasks. The Studio page has the following components:
Explorer tab of the left pane : use the Explorer tab to work with
tables, views, routines, and other BigQuery resources, and
view your job history .
The left pane also contains an option to add data to
BigQuery. When you click add
Add data , you can use search and filtering capabilities to find a data
source that you want to work with. After you select a data source, you can
do the following based on the capabilities available for your data source:
Set up BigQuery table over external data ( federation ) :
enables BigQuery to access external data without ingesting
it into BigQuery. You can create a table to access
external data or create a
connection to an external source .
Load data to BigQuery : lets you load data to
BigQuery by setting up a data transfer
or by using a partner capability .
Loading data to BigQuery is recommended for optimal data
processing at scale.
Change data capture to BigQuery : replicates data from a
data source to BigQuery by capturing and applying changes.
You can use applications such as datastream
or partner solutions to ingest
data from a data source.
Stream data to BigQuery : ingests data into
BigQuery with low latency. You can use applications such as
Dataflow , Pub/Sub ,
or partner solutions to ingest
data from a data source.
For more information about loading data into BigQuery, see
Introduction to loading data .
Classic Explorer tab of the left pane : use the legacy version of the
Explorer pane to view BigQuery resources.
Files tab of the left pane ( Preview ):
use the Files tab to organize code assets such as saved queries and
notebooks by using folders. For more information, see Organize code assets
with folders .
Repository tab of the left pane ( Preview ):
use the Repository tab to store code, edit files, and track changes
using version control through repositories or by using remote Git-based
repositories. For more information, see Introduction to repositories .
Home tab : use the Home tab to view the following resources:
The Check out what's new in Studio section that lists new features in
BigQuery Studio. You can click Try it to view the features. If the
section isn't visible, click What's new in Studio to
expand the section.
The Create new section that has options to create a new SQL query,
notebook, Apache Spark notebook, data canvas, data preparation
file, pipeline, or table.
The Recent section where you can view your 10 most recently accessed
resources. These resources include tables, saved queries, models, and
routines.
The Try with templates section that lets you use templates to get
started querying data and working with notebooks.
The Add your own data section that helps you get started loading data
into BigQuery.
Query editor : use the query editor to create and
run an interactive query . You can
also view the results in the Query results pane that opens after you run
the query.
Explore the Studio page
The Studio page BigQuery is the central point for viewing
your BigQuery resources and for performing common tasks such as
creating datasets and creating and running notebooks.
Note: To see how to use keyboard shortcuts in Studio, click
keyboard BigQuery Studio
shortcuts in the BigQuery Studio toolbar:
To explore the Studio page, follow these steps:
In the Google Cloud console, go to the BigQuery Studio
page.
Go to Studio
Alternatively, enter the following URL in your browser:
https://console.cloud.google.com/bigquery
The Studio page opens in your most recently accessed project.
In the left pane, click explore
Explorer .
The Explorer pane lists different code assets and data resources, and it
lets you search for BigQuery resources.
Note: You can expand and collapse the left pane by clicking
first_page Collapse left pane or
last_page Expand left pane .
Go to the bigquery-public-data project, click
arrow_right Toggle node to expand
it, and then click Datasets . A new tab opens in the details pane that
shows a list of all the datasets in the project.
BigQuery public datasets are stored
in BigQuery and made available to the general public through
the Google Cloud Public Dataset Program.
In the list, click the austin_crime dataset.
On the Overview tab, view the resources stored in the dataset
such as tables, models, and routines.
Click the Details tab. This tab shows all details for the dataset
including metadata information.
To navigate different tabs and resources, use the breadcrumb trail as shown
in the following example:
In the Explorer pane, click Job history . This opens the list of job
histories in a new tab:
Every time you load, export, query, or copy data, BigQuery
automatically creates, schedules, and runs a job that tracks the progress of
the task.
To view details of your own jobs, click Personal history .
To view details of recent jobs in your project, click Project
history .
Note: To see the details of a job or to open a query from a query job,
in the Actions column for a job or query, click more_vert
Actions > Show job details or View job in editor .
In the left pane, click the folder_data
Repository tab ( Preview ).
You can use repositories to perform version control on files that you use in
BigQuery. BigQuery uses Git to record changes
and manage file versions.
You can use workspaces within repositories to edit the code stored in the
repository. When you click a workspace in the
Git repository pane, it opens in a tab in the details pane.
In the left pane, click folder
Files ( Preview ).
The Files tab lets you create user and team folders that store and
organize your code assets.
Click the home Home tab.
The Home tab provides links and templates that let you get started using
BigQuery.
If you close the Home tab, you can open it by clicking
home Home in the Explorer tab.
Click the query editor. This tab is labeled search_insights
Untitled query .
You use the query editor to create SQL queries, run SQL queries, and view the
results.
If you close the query editor, you can open it by clicking the Home tab,
and then in the Create new section, click
add_box SQL query .
Work with tabs in Studio
Whenever you select a resource or click
add_box SQL query in the details
pane, a new tab opens. If more than one tab is open, you can split the tabs into
two panes and view them side by side.
Prevent tabs from being replaced
To reduce tab proliferation, clicking a resource opens it within the same tab.
To open the resource in a separate tab follow these steps:
Press Ctrl (or Command on macOS) and click the
resource.
Alternatively, double-click the tab name. The name changes from
italicized to regular font.
If you accidentally replace the current page, you can locate it by
clicking tab_recent
Recent tabs in the details pane.
Split and unsplit tabs
To split tabs into two panes, follow these steps:
Next to the tab name, click
arrow_drop_down
Open menu .
Select one of the following options:
To place the selected tab in the left pane, select Split tab to
left .
To place the selected tab in the right pane, select Split tab to
right .
Note: If only one tab is open, these menu options are unavailable.
To unsplit the tabs, select
arrow_drop_down
Open menu on one of the open tabs, and then select Move tab to left
pane or Move tab to right pane .
Query data using split tabs
To split tabs when querying tables, follow these steps:
In the Explorer menu, click the table that you want to query.
Click Query , and then click In new tab or In split tab :
Click the field name that you want to query:
The following image shows the details pane with two open tabs. One tab has a
SQL query, and the other tab shows details about a table.
Move tabs between panes
To move a tab from one pane to the other pane, follow these steps:
Next to the tab name, click
arrow_drop_down
Open menu .
Select Move tab to right pane or Move tab to left pane (whichever
option is available).
Close all other tabs
To close all tabs except for one, follow these steps:
Next to the tab name, click
arrow_drop_down
Open menu .
Select
cancel
Close other tabs .
The Overview page
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To provide feedback on the Overview page, click Help > Send
feedback .
The BigQuery Overview page is your hub for discovering
tutorials, features, and resources to help you get the most out of
BigQuery. It provides guided paths for users of all skill levels,
whether you are running your first query or exploring advanced AI/ML
capabilities.
You can use the Overview page to find resources organized by your role or
interest like data analysis or data science. These resources let you find the
most relevant content to get started quickly.
Explore the Overview page
In the console, go to the Overview page.
Go to Overview
You can also open the BigQuery Overview page by entering
the following URL in your browser:
https://console.cloud.google.com/bigquery/overview
Review the following sections of the Overview page:
The Introduction section: gives you a quick video
overview of BigQuery's capabilities.
The Get started section: designed for learning by
doing. Here you can launch interactive guides that help you learn how to
use BigQuery features.
The Find out more section: shows the
BigQuery release notes so you can view the latest feature
announcements and updates.
The Explore possibilities section: provides
in-depth tutorials and learning opportunities for specific features.
Customize the Overview page
You can customize the Overview page to show or hide information relevant to
your task or role.
On the Overview page, go to the filter bar.
Click the option that best matches your current task or role:
Data analysis
Data science
Data engineering
Data administration
Selecting a task dynamically changes the content in the Introduction ,
Get started , and Explore Possibilities sections to show the most
relevant content.
Optional: To tailor the content on the Overview page to your specific
needs, hide individual cards:
In the card, click more_vert
More options .
Choose Hide card . Your preferences for hidden cards are saved per
user.
To unhide the card, at the end of the section, click Show hidden
content .
If an entire section is not relevant, click
keyboard_arrow_up to
collapse it. Your user preferences for collapsed sections are saved.
The Search page
The Search page
( Preview ) lets you
search for Google Cloud resources from BigQuery by using
natural language queries.
For information about opting into using the Search page, see
Search for resources .
The Agents page
The Agents page ( Preview )
is a central location for creating and chatting with data agents that are
designed to answer questions about BigQuery resources.
Data agents contain table metadata and use case-specific query processing
instructions that define the best way to answer user questions about a set of
tables that you select. Users can have conversations
with data agents to ask questions about BigQuery data using
natural language. For more information, see Create data agents .
For information on creating agents and using conversational analytics, see
Conversational analytics in BigQuery .
Limitations
The BigQuery Google Cloud console doesn't support
Virtual Private Cloud or
Private Service Connect .
What's next
To learn about querying a public dataset and using the BigQuery sandbox,
see Try BigQuery using the
sandbox .
To learn how to load and query data in the Google Cloud console, see
Load and query data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
