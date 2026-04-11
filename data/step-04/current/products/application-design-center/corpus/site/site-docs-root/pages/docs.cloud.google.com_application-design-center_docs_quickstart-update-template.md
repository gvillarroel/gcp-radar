---
title: "Quickstart: Update an application template and redeploy \_|\_ Application\
  \ Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/quickstart-update-template
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/quickstart-update-template
  title: "Quickstart: Update an application template and redeploy \_|\_ Application\
    \ Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Update an application template and redeploy
This quickstart helps you modify the three-tier web application by connecting a Memorystore for Redis component. You update an existing template and redeploy the application to verify your change. This application update helps you cache data and improve performance.
You update the template by doing one of the following:
Add and connect a component on the design canvas in Application Design Center.
Use natural language prompts in Gemini Cloud Assist.
The changes you make are reflected in the application's Terraform code, which
you can review before you deploy. For more information, see Overview of Terraform on Google Cloud .
After you update the template, deploy your application to verify your changes.
Before you begin
Complete the Create and verify a template quickstart.
Add a component to the template
Use the App Design Center design canvas or
Gemini Cloud Assist to modify your template.
Design canvas
In the Google Cloud console, go to the Templates page.
Go to Templates
Click the quickstart-three-tier-web-app template.
In the design canvas, from the cloud-run-2 component, click
add Add and select
Memorystore for Redis .
Gemini Cloud Assist
In the Google Cloud console, go to the Templates page.
Go to Templates
Click the quickstart-three-tier-web-app template.
In the Google Cloud console toolbar, click
spark Open or close Gemini Cloud Assist chat .
The Cloud Assist panel opens.
In Gemini Cloud Assist chat, enter the following prompt:
Update this template to include a backend cache.
In the design canvas, review the updated design and click
Accept suggestion .
Your template now contains four components. Lines are displayed between
components to represent connections.
Update the application draft
From the design canvas, click Configure an app .
Click Quickstart three tier test .
Click Save .
The application draft is updated with the new template.
Configure the new component
In the design canvas, click memorystore-1 and do the following in the
Configuration area:
From the Project ID list, select the descendant project you created in
Create and verify a template .
From the Zone list, select us-central1-a .
In the Name field, enter cache-redis .
Click Save .
Green check marks are displayed in each component to convey that you have
specified the required parameters. The application draft is ready to be
redeployed to the TEST environment for verification.
Redeploy the application
Click Deploy .
In the Select a service account area, do the following:
Click Create a new service account .
Click Proceed .
To review the Terraform plan for your application, do the following:
Click Preview . A Terraform plan is generated after a few minutes.
Review the Terraform plan for your application.
Click Copy and close .
Paste the copied Terraform in a document.
Click Deploy .
The application is deployed after a few minutes and resources are created in
your project. The following details are displayed:
A link to App Hub, where you can view deployed resource details,
including links to monitoring dashboards.
Links to Cloud Build logs, which you can use to troubleshoot deployment
errors.
Outputs like service URIs are displayed, which you can use to interact with
deployed resources.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the deployed application
From the navigation menu, click Applications .
Go to Applications
From the table, click Quickstart three tier web app .
Click more_vert
Actions and select Delete Application .
In the Delete field, enter Quickstart three tier web app .
Click Delete .
The application is deleted, including the following:
The application details are removed from Application Design Center.
The underlying App Hub application is deleted.
The underlying resources are deleted.
Optional: Delete the project
To delete the descendant project you created in the Create and verify a template quickstart, do the
following:
Caution: If you delete a project, all resources in the project are permanently
deleted.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you want to delete, and then
click Delete .
At the prompt, type the project ID, and then click Shut down .
What's next
Application Design Center overview .
Build on Google authored templates .
Design application templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
