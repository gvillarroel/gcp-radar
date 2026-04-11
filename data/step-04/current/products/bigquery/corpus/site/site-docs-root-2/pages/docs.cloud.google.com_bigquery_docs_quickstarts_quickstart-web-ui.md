---
title: "Try BigQuery using the sandbox \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui
  title: "Try BigQuery using the sandbox \_|\_ Google Cloud Documentation"
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
Try BigQuery using the sandbox
The BigQuery sandbox lets you explore limited BigQuery capabilities
at no cost to confirm whether BigQuery fits your needs. The
BigQuery sandbox lets you experience BigQuery without
providing a credit card or creating a billing account for your project. If you
already created a billing account, you can still use BigQuery at
no cost in the free usage tier.
The BigQuery sandbox lets you learn BigQuery with a
limited set of BigQuery features at no charge. You can evaluate
BigQuery by using the BigQuery sandbox to view and query a
public dataset.
Google Cloud offers public datasets that are stored in BigQuery
and made available to the general public through the
Google Cloud Public Dataset Program . For more information about
working with public datasets, see BigQuery public datasets .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Enable the BigQuery sandbox
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
You can also open BigQuery in the Google Cloud console
by entering the following URL in your browser:
https://console.cloud.google.com/bigquery
The Google Cloud console is the graphical interface that you use to create
and manage BigQuery resources and to run SQL queries.
Authenticate with your Google Account, or create a new one.
On the welcome page, do the following:
For Country , select your country.
For Terms of Service , select the checkbox if you agree to the terms
of service.
Optional: If you are asked about email updates, select the checkbox if
you want to receive email updates.
Click Agree and continue .
Click Create project .
On the New Project page, do the following:
For Project name , enter a name for your project.
For Organization , select an organization or select
No organization if you are not part of one. Managed accounts, such
as those associated with academic institutions, must select an
organization.
If you are asked to select a Location , click Browse and select a
location for your project.
Click Create . You are redirected back to the BigQuery page in
the Google Cloud console.
You have successfully enabled the BigQuery sandbox. A
BigQuery sandbox notice is now displayed on the BigQuery page:
Limitations
The BigQuery sandbox is subject to the following limits:
All BigQuery quotas and limits apply.
You are granted the same free usage limits as the BigQuery
free tier , including 10 GB of active storage
and 1 TB of processed query data each month.
All BigQuery datasets have a
default table expiration time ,
and all tables ,
views , and
partitions automatically expire after 60
days.
The BigQuery sandbox does not support several BigQuery
features, including the following:
Streaming data
Data manipulation language (DML) statements
BigQuery Data Transfer Service
View a public dataset
BigQuery public datasets are available by default in
BigQuery Studio in a project named bigquery-public-data . In this
tutorial you query the NYC Citi Bike Trips dataset. Citi Bike is a large bike
share program, with 10,000 bikes and 600 stations across Manhattan, Brooklyn,
Queens, and Jersey City. This dataset includes Citi Bike trips since Citi Bike
launched in September 2013.
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, click
add Add data .
In the Add data dialog, click
Public datasets .
On the Marketplace page, in the Search Marketplace field, type NYC
Citi Bike Trips to narrow your search.
In the search results, click NYC Citi Bike Trips .
On the Product details page, click View dataset . You can view
information about the dataset on the Details tab.
Query a public dataset
In the following steps, you query the citibike_trips table to determine the
100 most popular Citi Bike stations in the NYC Citi Bike Trips public dataset.
The query retrieves the station's name and location, and the number of
trips that started at that station.
The query uses the ST_GEOGPOINT function
to create a point from each station's longitude and latitude parameters and
returns that point in a GEOGRAPHY column. The GEOGRAPHY column is used to
generate a heatmap in the integrated geography data viewer.
In the Google Cloud console, open the
BigQuery page.
Go to BigQuery
Click add_box
SQL query .
In the
query editor , enter the following query:
SELECT
start_station_name ,
start_station_latitude ,
start_station_longitude ,
ST_GEOGPOINT ( start_station_longitude , start_station_latitude ) AS geo_location ,
COUNT ( * ) AS num_trips
FROM
`bigquery-public-data.new_york.citibike_trips`
GROUP BY
1 ,
2 ,
3
ORDER BY
num_trips DESC
LIMIT
100 ;
If the query is valid, then a check mark appears along with the amount of
data that the query processes. If the query is invalid, then an
exclamation point appears along with an error message.
Click
Run .
The most popular stations are listed in the
Query results
section.
Optional: To display the duration of the job and the amount of data that the
query job processed, click the Job information tab in the Query
results section.
Switch to the Visualization
tab. This tab generates a map to quickly visualize your results.
In the Visualization configuration panel:
Verify that Visualization type is set to Map .
Verify that Geography column is set to geo_location .
For Data column , choose num_trips .
Use the add Zoom in option to
reveal the map of Manhattan.
Upgrade from the BigQuery sandbox
The BigQuery sandbox lets you explore
limited BigQuery capabilities
at no cost. When you are ready to increase your storage and query
capabilities, upgrade from the BigQuery sandbox.
To upgrade, do the following:
Enable billing
for your project.
Explore BigQuery editions
and determine the pricing model that is right for you.
Once you have upgraded from the BigQuery sandbox, you should
update the default expiration times for your BigQuery resources
such as tables, views, and partitions.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the project
If you used the BigQuery sandbox to query
the public dataset, then billing is not enabled for your project, and you don't
need to delete the project.
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
For more information about using BigQuery at no cost in the
free usage tier, see Free usage tier .
Learn how to create a dataset, load data, and query tables in
BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
