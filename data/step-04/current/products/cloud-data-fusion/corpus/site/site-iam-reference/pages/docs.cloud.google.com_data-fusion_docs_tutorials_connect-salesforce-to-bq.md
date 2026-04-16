---
title: "Use Salesforce batch source plugin to analyze leads data in BigQuery \_|\_\
  \ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq
  title: "Use Salesforce batch source plugin to analyze leads data in BigQuery \_\
    |\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use Salesforce batch source plugin to analyze leads data in BigQuery
Learn how to use the Salesforce batch source plugin in Cloud Data Fusion
to analyze leads data in BigQuery.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Scenario
Consider a marketing manager planning a highly targeted Email
marketing campaign to promote a new product. You have a list of leads in
Salesforce Sales Cloud. Before creating a targeted campaign, to understand your
target audience better, you want to use the Salesforce batch source plugin
in Cloud Data Fusion to extract specific leads data.
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
Verify that billing is enabled for your Google Cloud project .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Data Fusion, BigQuery, Cloud Storage, and Dataproc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a Cloud Data Fusion instance .
Configure a connection to the Salesforce API by creating a Salesforce
Connected App for Cloud Data Fusion .
Manage permissions
Create and assign the required custom roles and permissions.
Create a custom role and add permissions
In the Google Cloud console, go to the Roles page:
Go to Roles
Click add Create role .
In the Title field, enter Custom Role-Tutorial .
Click add Add permissions .
In the Add permissions window, select the following permissions and click
Add :
bigquery.datasets.create
bigquery.jobs.create
storage.buckets.create
Click Create .
Assign custom role to the default Compute Engine service account
Go to the Cloud Data Fusion Instances page:
Go to instances
Click the name of your instance.
Make a note of the default Compute Engine service account. The instance
details page contains this information.
The format of the Cloud Data Fusion default Compute Engine service
account name is
CUSTOMER_PROJECT_NUMBER -compute@developer.gserviceaccount.com .
Go to the IAM page:
Go to IAM
In the Filer bar, enter the name of your default Compute Engine service
account.
For your default Compute Engine service account, click
edit Edit .
Click add Add another role .
In the Select a role field, select Custom Role-Tutorial .
Click Save .
Configure the Cloud Data Fusion Salesforce batch source plugin
Go to the Cloud Data Fusion Instances page:
Go to instances
For your instance, click View instance . The Cloud Data Fusion web interface
opens.
Go to the Studio page.
Click Hub .
In the search bar, enter Salesforce .
Click Salesforce plugins and then click Deploy .
In the Salesforce plugins deploy window, click Finish .
When the deployment completes, a dialog is displayed with success message.
In that dialog, click Create a pipeline .
The Cloud Data Fusion Studio page is displayed.
Select Data pipeline - batch as the type of your
data pipeline.
In the Source menu, and click Salesforce .
Go to the Salesforce node and click
Properties . This opens the Salesforce plugin properties page.
In the Reference name field, enter a name for your source. For
example, Leads_generated .
In the Connection section, click the Use connection toggle.
Click Browse connections . The Browse connections window opens.
Click Add connection and select Salesforce .
In the Create a Salesforce connection window, click the Configuration
tab and do the following:
In the Name field, enter a name to identify your connection—for
example, Salesforce_connection .
In the Credentials section, enter the following details of your
Salesforce account:
User name
Password
Consumer key
Consumer secret
Security token
Click Test connection . If the entered details are correct, the test
succeeds with a message "Successfully connected".
Click Create .
Select Salesforce_connection and go back to Salesforce plugin
properties page.
Extract data from the Salesforce batch source plugin
On the Salesforce plugin properties page, in the SOQL query section,
enter the following query:
Select LastName , FirstName , Company , Email , Phone , LeadSource , Industry , OwnerId , CreatedDate , LastModifiedDate , LastActivityDate from Lead where Status like '%Open%'
This query fetches the details of a potential lead required to run a campaign
from the sObject Lead .
Important: Follow your organization policies on handling private data within
the fields extracted earlier. For more information on redacting private data
in Cloud Data Fusion pipelines, see
Redacting confidential data .
To determine the validity of the object schema, click Get schema .
To filter the records for a specific date or time for running the campaign,
use the following fields:
Last modified after
Last modified before
Duration
Offset
Transform data using Wrangler plugin
Use the Wrangler plugin in Cloud Data Fusion to clean and enrich your data:
Go back to the Studio page.
In the Transform menu, and click Wrangler .
Connect the Wrangler to the Salesforce batch source plugin.
Go to the Wrangler plugin, and click Properties .
This opens the Wrangler plugin properties page.
Ensure that the Input schema is populated.
Click Wrangle .
In the Connections pane, select a valid connection.
Select the sObject you want to transform—for example, Lead .
Transform the data with the required directives:
keep :LastName,:FirstName,:Company,:Phone,:Email,:LeadSource,:OwnerId,
:CreatedDate,:LastModifiedDate,:LastActivityDatemerge :FirstName :LastName :Name ' '
fill-null-or-empty :Email 'no email found'
mask-number :Phone ########xxxxxxxx
format-date :LastActivityDate yyyy-MM-dd HH:mm:ss
drop :LastName,:FirstName
Load data into BigQuery
Go back to the Studio page.
In the Sink menu, and click BigQuery .
Go to the BigQuery node, and click Properties .
This opens the BigQuery plugin properties page.
In the Basic section, in the Reference name field, enter a name
to identify this sink. For example, Leads_generated .
In the Dataset field, enter the dataset the table belongs to. For
example, Salesforce_Leads .
In the Table field, enter the table in which the extracted records need
to be stored. For example, Incoming_Open_Leads .
To validate the plugin, click Validate .
Deploy, schedule, and run the pipeline
To deploy the pipeline, click Deploy .
To set up an appropriate refresh schedule using schedulers, follow these steps:
Click Schedule .
Enter the following details:
Pipeline run repeats
Repeats every
Starting at
Max concurrent runs
Compute profiles
Click Save and start schedule .
Note: By default, a full refresh for data extensions occurs once every
24 hours. In a setup, the hourly schedule frequency refers to how
often the Salesforce batch source plugin looks for incremental data from
Salesforce Sales Cloud.
To run the pipeline, click Run .
Verify the data extraction and ingestion
In the Google Cloud console, go to the BigQuery page:
Go to BigQuery
Search for the dataset Salesforce_Leads and the table name
Incoming_Open_Leads to view the extracted records.
To run the query, click Query .
Analyse the leads data to understand your audience better and to deliver
tailored campaigns at scale.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the Cloud Data Fusion instance
Follow these instructions to
delete your Cloud Data Fusion instance .
Delete the project
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
Explore the Cloud Data Fusion plugins .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
