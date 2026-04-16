---
title: "Build integrations with Gemini Code Assist \_|\_ Application Integration \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini
  title: "Build integrations with Gemini Code Assist \_|\_ Application Integration\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Build integrations with Gemini Code Assist
Gemini Code Assist is an AI-powered collaborator in Google Cloud that provides help to users of all skill levels where they need it. In Application Integration, Gemini Code Assist can assist you to do the following:
Create integrations
Configure connector tasks in an integration
Configure Call REST API tasks in an integration
Add edge conditions and append additional tasks to an integration
Configure JavaScript tasks ( Preview )
Generate integration description
For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
Before you begin
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
The following image shows the Application Integration page:
In the Get AI to build your integrations section, click Explore .
In the Gemini in Application Integration pane that appears, click Enable Service to enable the Gemini for Google Cloud API.
For information about activating Gemini Code Assist in a Google Cloud project, see Set up Gemini Code Assist for a project .
Set up Application Integration in your Google Cloud project. For more information, see Set up Application Integration .
If you plan to create an integration using connectors , ensure to configure the desired connections in your Google Cloud project.
If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.
Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub . If you don't have any connections or APIs configured in your project, then Gemini might not provide connector- and API-based recommendations or suggestions.
Required roles
To get the permissions that
you need to use Gemini,
ask your administrator to grant you the
Gemini for Google Cloud User ( roles/cloudaicompanion.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If you plan to create an integration with Apigee API Hub , ensure that you have the Cloud API hub Viewer role ( roles/apigeeregistry.viewer ) on the project that contains the APIs.
If you plan to create an integration with Integration Connectors , ensure that you have the Connectors Viewer role ( roles/connectors.viewer ) on the project.
Supported tasks and triggers
Gemini can assist you to add the following tasks and triggers:
Triggers
Tasks
API trigger
Cloud Pub/Sub trigger
Salesforce trigger
Jira Cloud
ServiceNow
Zendesk
Cloud Scheduler trigger
Data mapper task
Approval task
Suspend task
Javascript task
Cloud Run functions
Timer task
Return task
Send email task
Connectors task
Call REST endpoint task
Doc AI - Process task
Gemini also assists you to create the following control flow tasks but can't generate
sub-integrations:
For Each Loop task
For Each Parallel task
While Loop task
Call Integration task
Create an integration
Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input. This allows you to create and build simple to complex integrations quickly and with minimal manual configurations.
Provide Gemini a brief prompt or description of the integration flow that you intent to build and Gemini will suggest one or more integration flows to help you get started.
To build an integration using Gemini, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click spark Help me create . The Create Integration with Gemini pane appears.
Alternatively, on the Create Integration page, create a new integration and then on the integration editor , click pen_spark Create integration flows with Gemini to use Gemini.
If you want to select a prompt template, select one from the Sample prompt templates . Otherwise, enter a prompt for Gemini to generate integrations. To learn how to write better prompts, see Write better prompts .
For example, suppose you added the following prompt: Create an integration which fetches a jira issue and then creates the zendesk ticket.
Click Generate .
Note: Gemini suggests one or more integration flows that qualifies your prompt:
If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.
If you have a data mapping requirement in your integration, then Gemini can also suggest a data mapping task. When you confirm the prompt, the data mapping task is replaced by a JavaScript task .
The following diagram shows the Create an integration with Gemini pane with the suggestions provided by Gemini:
Use the navigate_before Previous and navigate_next Next buttons to view the suggestions provided.
If you want to modify the suggested integration name, you can update the Integration name field. Note: Integration name must be unique in the Google Cloud project.
Select a region for the integration. If your project has a single provisioned region, then the Region field is set to that region.
Note: The Region list shows the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
If you want to edit the prompt, click Edit Prompt .
To accept an integration flow suggestion, click Confirm . Application Integration shows the progress of the steps for creating the integration. Integrations created using Gemini replaces any existing integration elements and variables.
Contextual recommendations
You can use Gemini to provide contextual recommendations for your existing integrations. Gemini can assist you to provide contextually appropriate connector configuration recommendations based on the logical flow of your existing integration. If a connection in your integration has more than 1000 entities, then that connector isn't included in the recommendations by Gemini. For more limitations, see Limitations .
Configure connector tasks
Gemini can assist you to provide contextually appropriate connector configuration recommendations based on the logical flow of your existing integration. If a connection in your integration has more than 1000 entities, then that connector isn't included in the recommendations by Gemini. For more limitations, see Limitations .
You can configure connector configuration with the Gemini recommended replacements, or you can interact with Gemini (using prompts ) and ask for the desired configuration suggestions.
To configure a connector task in your integration using Gemini, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration to open it in the integration editor .
In the navigation bar, click the New canvas view (Preview) toggle to the on position. Then, use the canvas to create your integration workflow.
For a connector task, click more_horiz More actions and then click Configure task .
A pop-up menu, similar to the following image, appears displaying a set of Gemini recommendations.
Note: Gemini can recommend connectors task for Call REST endpoint tasks and vice-versa.
Gemini automatically recommends one or more replacements or alternatives relevant to the logical flow of your integration. You can use the prompt input to interact with Gemini and fine-tune or re-generated the suggested recommendations if desired.
Select any one of the recommended replacements or modifications to accept. Gemini configures the selected connector task.
Configure Call REST API tasks
If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration. You can leverage these recommendations to directly replace your existing tasks or modify them without the need of going through any manual configuration process.
You can either directly replace an existing task or a task configuration with the Gemini recommended replacements, or you can interact with Gemini (using prompts ) and ask for the desired task suggestions.
After you have met all prerequisites , to replace or modify an existing task in your integration using Gemini, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration to open it in the integration editor .
In the navigation bar, click the New canvas view (Preview) toggle to the on position. Then, use the canvas to create your integration workflow.
In the integration editor canvas, select the task that you want to replace or modify.
Click more_horiz More actions and then click Configure task .
A pop-up menu, similar to the following image, appears displaying a set of Gemini recommendations.
Note: Gemini can recommend connectors task for Call REST endpoint tasks and vice-versa.
Gemini automatically recommends one or more replacements or alternatives relevant to the logical flow of your integration. You can use the prompt input to interact with Gemini and fine-tune or re-generated the suggested recommendations if desired.
Simply select any one of the recommended replacements or modifications to accept.
Gemini directly replaces your selected task or modifies it without any additional configurations.
Add edge conditions and append additional tasks
You can use Gemini to append new tasks and to add edge conditions to your existing integration flow.
To add an edge condition or to append new tasks to your integration using Gemini, perform the following steps:
In the Google Cloud, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration to open it in the integration editor .
In the navigation bar, click the New canvas view (Preview) toggle to the on position. Then, use the canvas to create your integration workflow.
In the integration editor , select the edge for which you want to add the edge condition or from which you want to append a new task.
Click more_horiz More actions and then click Create branch .
A pop-up menu, similar to the following image, appears prompting you to provide an input.
Enter your prompt specifying the edge condition that you want to add or the additional task that you want to append.
Here is a sample prompt that you can use:
If order qty>100, send an email
To learn how to write better prompts, see Write better prompts .
Click
pen_spark
Create .
Gemini automatically inserts the qualified edge conditions and configures the additional tasks from the selected edge in your existing integration.
Click Confirm to accept the sugessted insertions and additions.
If you din't like the suggested inserts or additions, click Cancel .
Configure JavaScript tasks
Preview
— BigQuery Connector
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use Gemini to configure JavaScript tasks in your integration. Gemini can assist you in providing contextually appropriate JavaScript task configuration recommendations based on the logical flow of your existing integration. You can leverage these recommendations to directly replace your existing tasks or modify them without the need of going through any manual configuration process.
Add a JavaScript task
The JavaScript task lets you write custom JavaScript code snippets for your integration. To add the code snippets using Gemini, follow these steps:
In the Google Cloud, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Create an integration or select an existing integration to open it in the integration editor .
Click and place the JavaScript element in the integration editor.
Click the JavaScript element on the canvas to view the JavaScript task configuration pane.
Click spark Script with Gemini . The Script with Gemini pane opens. Then, do the following:
If you want to select a prompt template, select one from the Sample prompt templates . Otherwise, enter a prompt for Gemini to generate the JavaScript code. To learn how to write better prompts, see Write better prompts .
Suppose that you want to process a customer order. Your intgeration contains the customer and item variables. To create an order, you can enter a prompt similar to the following:
Create order using customer and items.
Click Generate .
Gemini suggests one or more code snippets that qualifies your prompt. Use the chevron_left Previous and chevron_right Next buttons to view the suggestions provided.
To add the suggested code snippet to the JavaScript task, click Confirm .
The code snippet appears in the JavaScript editor field.
Edit a JavaScript task
The JavaScript task lets you write custom JavaScript code snippets for your integration. To add the code snippets using Gemini, follow these steps:
In the Google Cloud, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an integration that contains the JavaScript task. .
Click and place the JavaScript element in the integration editor.
Click the JavaScript element on the canvas to view the JavaScript task configuration pane.
Click Open Script Editor . The JavaScript Task Editor page appears.
Click spark Use Gemini to edit and understand the script > Edit script . The Edit script with Gemini pane appears. Then, do the following:
If you want to select a prompt template, select one from the Sample prompt templates . Otherwise, enter a prompt for Gemini to generate JavaScript code. To learn how to write better prompts, see Write better prompts .
Suppose that you want to log in the order when the cost of the order is greater than 100. Then, you can enter a prompt similar to the following:
Log in the order when the cost is greater than 100.
Click Generate .
Gemini suggests one or more code snipptes that qualifies your prompt. Use the navigate_before Previous and navigate_next Next buttons to view the suggestions provided.
To add the suggested updates to the code snippet into the JavaScript task, click Confirm . The updated code snippet appears in the JavaScript editor field.
Understand the JavaScript task
Gemini can help you understand the code snippet in the JavaScript task. To do so, follow these steps:
In the integration, click the JavaScript element on the canvas to view the JavaScript task configuration pane.
In the task configuration pane, click Open script editor . The Script editor pane appears. Then, do the following:
Click spark > info_spark Help me understand .
If you want to understand a part of the code, you can select the part of the snippet that you want to understand and click spark > info_spark Help me understand .
The Gemini pane appears:
In the Gemini pane, enter a prompt for Gemini to understand the code snippet. To learn how to write better prompts, see Write better prompts .
Generate integration description
The integration description feature available in Gemini in Application Integration provides a description summary of the integration that you've created in your integration editor . The integration description summary is generated in plain language and can help you in understanding the overall integration use case, underlying orchestration, and business context which might be difficult to assess due to the structure or complexity of an integration.
To generate an integration description summary of your integration using Gemini, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration to open it in the integration editor .
In the integration editor toolbar, and click info ( Integration summary ). The integration details page appears.
In the integration details page, click Help me with description .
Gemini parses through the integration in your integration editor and generates a detailed summary description similar to the following image.
Click Done to accept the generated integration description.
Verify and validate the integration (including the variables) before running it.
Quotas and limits
For information about quotas and limits, see Quotas and limits .
Limitations
Gemini in Application Integration is subject to the following limitations:
If the connection in your integration has more than 1000 entities, then that connector isn't included in the recommendations by Gemini.
Application Integration supports data residency. Integrations that are built using Gemini support data residency. We don't store any data such as prompts and Gemini responses. Only data in use and transit for generation using Gemini doesn't support data residency.
Provide feedback
You can get support or provide contextual feedback while using Gemini for building
integration. This information helps us improve Gemini.
What's next
Learn how to write better prompts .
Learn how to test and publish an integration .
Learn how Gemini for Google Cloud uses your data .
Learn about Gemini for Google Cloud overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
