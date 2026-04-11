---
title: "Redact confidential data \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data
  title: "Redact confidential data \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
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
Redact confidential data
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use the Cloud Data Fusion plugin for Cloud DLP
to redact sensitive data.
Scenario
Consider the following scenario, in which some sensitive customer information
must be redacted:
Your support team documents the details of each support case they handle in a
support ticket. All of the information in the support ticket is pulled into a
CSV file. The support technicians are not supposed to document any customer
information that's considered sensitive, but sometimes they mistakenly do so.
You notice that in the CSV file some customers' phone numbers appear.
You want to go through the CSV file and hide all phone numbers. You create a
Cloud Data Fusion pipeline that redacts the sensitive customer data by
using the Cloud DLP plugin.
In this tutorial, you create a pipeline that does the following:
Redacts customer phone numbers by masking them with the # character.
Stores the masked sensitive data and the non-sensitive data in a
Cloud Storage bucket.
Objectives
Connect Cloud Data Fusion to a Cloud Storage source.
Deploy the Cloud DLP plugin.
Create a custom Cloud DLP template.
Use the Redact transform plugin to mask sensitive customer data.
Write the output data to Cloud Storage.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Data Fusion
Cloud Storage
Cloud DLP
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
Get Cloud DLP permissions
In the Google Cloud console, go to the IAM page.
Open the IAM page
In the permissions table, in the Principal column, find the service
account that matches the format service- project-number @gcp-sa-datafusion.iam.gserviceaccount.com .
Click edit Edit .
Click Add Another Role .
Use the search bar to search and then select DLP Administrator .
Click Save .
Check that DLP Administrator appears in the Role column.
Navigate to the Cloud Data Fusion UI
When using Cloud Data Fusion, you use both the Google Cloud console
and the separate Cloud Data Fusion UI. In the Google Cloud console, you
can create a Google Cloud console project and create and delete
Cloud Data Fusion instances. In the Cloud Data Fusion UI, you can use
the various pages, such as Studio or Wrangler , to use
Cloud Data Fusion features.
In the Google Cloud console, open the Instances page.
Open
the Instances page
In the Actions column for the instance, click the View Instance
link. The Cloud Data Fusion UI opens in a new browser tab.
Create the pipeline
Create a pipeline that redacts sensitive customer data. The pipeline you build
does the following:
Reads the input data using the Cloud Storage source plugin.
Deploys the Cloud DLP plugin from the Hub.
Writes the output data using a Cloud Storage sink plugin.
Load the customer data
This tutorial uses the input dataset, CallCenterRecords.csv , provided in a
publicly available Cloud Storage bucket.
Note: To use the CallCenterRecords.csv dataset, you must load the data using
the Cloud Data Fusion Studio page. If you have your own dataset in your
own Cloud Storage bucket, you can load the data using either Studio
or Wrangler .
Open your Cloud Data Fusion instance and click menu Menu > Studio .
In the Source menu, click the Cloud Storage plugin.
On the Cloud Storage node, click Properties .
In the Reference name field, enter a name.
In the Path field, enter gs://datafusion-sample-datasets/CallCenterRecords.csv .
In the Format field, select CSV .
For the Output Schema , delete the offset and body fields.
Click
add
Add and enter the following fields:
Date
Bank
State
Zip
Notes
Note: All data types must be set to string .
Click Validate to check for errors.
Click close Close .
Redact sensitive data
The Cloud DLP Redact plugin identifies sensitive records in your input stream of
data and applies transformations that you define to those records. A record of
data is considered sensitive if it matches predefined Cloud DLP
filters you choose or a custom template you define.
In this tutorial, you want to redact customer phone numbers that some support
technicians on your team accidentally took note of. They entered the sensitive
information in the Notes section of the support tickets, which appears as
the Notes column in the CSV file. You create a custom Cloud DLP
template, and then provide the template ID in the properties menu of the plugin.
Deploy the Cloud DLP plugin
In your Cloud Data Fusion instance, click Hub .
Click the Cloud DLP plugin.
Click Deploy .
Click Finish .
Click close Close to exit the Cloud DLP
dialog.
Click close Close to exit the Hub.
Create a custom template
In the Google Cloud console, go to the Cloud DLP page.
Go to Cloud DLP
From the Create menu, choose Template .
In the Template ID field, enter an ID for your template.
Click Continue .
In the Configure detection field, click Manage infotypes .
In the Built-in tab, use the filter to search for "phone number".
Select PHONE_NUMBER .
Click Done > Create .
Learn more about
creating Cloud DLP templates .
Apply the Cloud DLP Redact transformation
Go to the Cloud Data Fusion Studio page and click to
expand the Transform menu.
Click the Cloud DLP Redact plugin.
Drag a connection arrow from the Cloud Storage node to the Redact node.
Hold the pointer over the Redact node and click Properties .
Set Custom Template to Yes .
In the Template ID field, enter the template ID of the custom template you
created .
In the Matching field , apply Masking on Custom template within Notes .
Note: In addition to masking, there are other Cloud DLP
transformations available in the plugin.
To learn more, see the Documentation tab in the properties menu of
the Redact plugin.
In the Masking Character field, enter # .
Click Validate to check for errors.
Click close Close .
Store the output data
Store the results of your pipeline in a Cloud Storage file.
From the Studio page, click to expand the Sink menu.
Click Cloud Storage .
Drag a connection arrow from the Redact node to the Cloud Storage2 node.
Hold the pointer over the Cloud Storage2 node and click Properties .
In the Reference name field, enter a name.
In the Path field, enter the path of a Cloud Storage bucket where
you'd like to store the pipeline results. Cloud Data Fusion creates
the bucket for you. Be sure to follow the
bucket naming guidelines .
In the Format field, select CSV .
Click Validate to ensure that there are no errors.
Click close Close .
Run the pipeline in preview mode
Run the pipeline in preview mode before you deploy it.
Click Preview , and then click Run .
Clicking Run displays the pipeline status, which starts with
Starting , then turns to Stop , and then to Run .
When the preview run completes, on the Redact node, click Preview
Data to see a side-by-side comparison of the input and output data. Check
that phone numbers have been masked with the # character.
Redact another data type
While examining the preview run results, you notice that there's still
sensitive information that appears in the Notes column: email addresses. You
go back and edit the Cloud DLP template to redact email addresses as
well.
In the Google Cloud console, go to the Cloud DLP page.
Open the Cloud DLP page
On the Configuration tab, select your template.
Click Edit .
Click Manage infotypes .
In the Built-in tab, use the filter to search for "OR" "email address".
Select all and click Done .
Click Save .
Once again, run your pipeline in preview mode .
Cloud Data Fusion will automatically use the updated Cloud DLP
template.
Check that both phone numbers and email addresses have been masked
with the # character.
Deploy and run the pipeline
Make sure Preview mode is unchecked.
Click Save . Clicking Save prompts you to name your pipeline. Then,
click OK .
Click Deploy .
When deployment completes, click Run . Running your pipeline can take a
few minutes. While you wait, you can observe the Status of the pipeline
transition from Provisioning to Starting to Running to
Deprovisioning to Succeeded .
View the results
In the Google Cloud console, go to the Cloud Storage page.
Go to Cloud Storage
In the Storage browser , navigate to the sink Cloud Storage
bucket you specified in the sink Cloud Storage plugin properties .
In Link URL , click the link to download the CSV file with the results.
Check that the phone numbers and email addresses have been masked with
the # character.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
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
Learn more about Cloud Data Fusion .
See how to use the Cloud Data Fusion plugin ,
which provides the Redact and Filter PII transform plugins.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
