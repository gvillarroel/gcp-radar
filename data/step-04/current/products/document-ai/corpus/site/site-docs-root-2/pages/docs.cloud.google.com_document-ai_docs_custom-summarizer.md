---
title: "Build a document summarizer in the Google Cloud console \_|\_ Document AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/custom-summarizer
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/custom-summarizer
  title: "Build a document summarizer in the Google Cloud console \_|\_ Document AI\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Build a document summarizer in the Google Cloud console
You can create a summarizer processor using Document AI to summarize the
content of documents. The output can be customized based on length and format .
Here is some sample JSON output from the resulting entity:
{
"type" : "summary" ,
"mentionText" : " Superconductivity is a phenomenon in which a material conducts
electricity with no resistance. It was discovered in 1911 by Dutch physicist Heike
Kamerlingh Onnes. In 1986, a new class of materials was discovered that can superconduct
at much higher temperatures. These materials are called high-temperature superconductors.
They have the potential to revolutionize the way we use electricity. However,
high-temperature superconductors are still very expensive to produce. Scientists
are working on ways to make them more affordable." ,
"normalizedValue" : {
"text" : " Superconductivity is a phenomenon in which a material conducts
electricity with no resistance. It was discovered in 1911 by Dutch physicist
Heike Kamerlingh Onnes. In 1986, a new class of materials was discovered that
can superconduct at much higher temperatures. These materials are called
high-temperature superconductors. They have the potential to revolutionize
the way we use electricity. However, high-temperature superconductors are
still very expensive to produce. Scientists are working on ways to make
them more affordable."
}
}
Procedure
In this quickstart, you create a document summarizer processor, upload a sample
document for processing, and create a custom processor version to adjust the summary
structure.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to build a document summarizer,
ask your administrator to grant you the
Document AI Administrator ( roles/documentai.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a summarizer processor
Use the Google Cloud console to create a summarizer processor. See creating and managing processors for more information.
In the Google Cloud console, in the Document AI section, go to the Workbench page.
Workbench
For Summarizer , select
Create processor .
In the Create processor menu, enter a name for your processor, such as quickstart-summarizer .
Select the region closest to you.
Select Create .
Your processor has now been created.
Test Processor
You are on the Processor overview page of the processor you just created.
Select on the Customize & build tab to experiment with the processor.
Download a sample document
It is a PDF file containing the Wikipedia page for Superconductivity .
Select
Upload Test Document and select the document you just downloaded.
You are now on the Summary page. You can view the OCR detected text and document summarization.
Adjust the Length and Format settings to Moderate and Bulleted respectively, then select Rewrite and observe the results.
Go back to the Customize & build page.
Deploy processor version
If you want to use specific summarization settings when processing documents with the API, create a processor version for those settings.
The Summarization settings are set to the last values you used on the previous page.
Select on Create New Version to create a processor version with the specified Summarization settings .
Enter a name for the processor version, such as quickstart-moderate-bulleted , and select Create Version .
Go to the Deploy & Use tab to view the deployment status. Deployment takes a few minutes.
When the version is deployed, you can set it as the Default version , or you can provide the version ID when processing documents with the API.
To use the Document AI API:
Follow the code samples in send a processing request to use online and batch processing.
Refer to Quotas and limits for the number of pages supported for online and batch processing.
Follow the code samples in Handle the processing response to get the summarization response from the processor.
You have successfully used Document AI to extract text from a document and summarize it.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To avoid unnecessary Google Cloud charges, use the
Google Cloud console to delete your processor and
delete your project if you don't need
them.
What's next
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
