---
title: "Troubleshoot Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/troubleshooting
  title: "Troubleshoot Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Troubleshoot Colab Enterprise
This page shows you how to resolve issues with Colab Enterprise.
Unable to access Colab Enterprise
The following error occurs when you try to access Colab Enterprise in
the Google Cloud console.
Authentication error: 7; Error Details: User not allowed to access service.
The Google Workspace setting Additional services without individual control
is turned off.
To resolve this issue, set Additional services without individual control
to On .
Unable to connect to a runtime
This issue occurs due to several reasons. See also
Unable to connect to a default
runtime .
The most common causes are:
Browser blocks third party cookies
The browser that you are using is blocking a third party cookie that
Colab Enterprise uses to establish an HTTPS connection with the runtime.
To resolve this issue, configure your browser's settings to
allow the DATALAB_TUNNEL_TOKEN third party cookie from the domain
*.aiplatform-notebook.googleusercontent.com .
Network blocks outbound traffic to notebook domains
Your network's firewall rules block outbound traffic to
*.aiplatform-notebook.cloud.google.com or
*aiplatform.googleapis.com .
To resolve this issue, configure your network's firewall rules
to allow outbound traffic to *.aiplatform-notebook.cloud.google.com
and *aiplatform.googleapis.com .
Unable to connect to a default runtime
The following error occurs when you try to connect to a default runtime when there
isn't an existing default runtime template.
Failed to connect to runtime
When you connect to a default runtime that hasn't been created yet,
Colab Enterprise first creates a default runtime template,
and then uses that default runtime template to generate the default runtime.
However, if you don't have the permissions required to create a runtime template, then
Colab Enterprise can't create the default runtime template nor the
default runtime.
To resolve this issue, ask your administrator to grant you a role that includes the
aiplatform.notebookRuntimeTemplates.create permission.
Notebook slow to connect to runtime
A few minutes after starting a connection to a runtime, the Connecting message is
still in the top right corner of the notebook, and Colab Enterprise hasn't
connected to the runtime yet.
To resolve this issue, wait a few more minutes. Colab Enterprise is still
connecting to a runtime. Connecting to a runtime that isn't already running can take a few
minutes because Vertex AI is allocating a new virtual machine (VM) instance.
Unable to create a runtime
This issue occurs when you're unable to create a runtime. See also
Unable to create a default
runtime .
The most common causes are:
Insufficient quota
If you are unable to create a runtime, you might have exceeded your
Compute Engine runtime quota.
Colab Enterprise uses Compute Engine quota for runtimes. For more
information, see the Compute Engine quota and limits
overview .
To resolve this issue, Request a quota adjustment .
Unavailable resources
The following error occurs when you try to create a runtime.
No available zone found for runtime RUNTIME_ID
for machine type MACHINE_TYPE
with accelerator type: ACCELERATOR . Please try again later.
This error occurs if there are no resources available for
your machine type configuration within your notebook's region.
To resolve this issue, try any of the following:
Create a runtime in a different region.
Create a runtime template with a different machine type configuration, and then create
a runtime based on the new runtime template.
Configuration of runtime template and reservation don't match
An error similar to the following occurs when you try to create a runtime.
Failed to create notebook runtime with error: Invalid value for field
'resource.reservationAffinity': '{"consumeReservationType":
"SPECIFIC_ALLOCATION", "key": "compute.googleapis.com/reservation-name...'.
No available resources in specified reservations.
This error occurs when a reservation's VM properties don't match your Colab Enterprise
runtime. For example, if a reservation specifies an e2-standard-8 machine type,
then the Colab Enterprise runtime can only consume the reservation if it also uses an
e2-standard-8 machine type. For more information,
see Requirements .
To resolve this issue, create a runtime template with a configuration that matches the
reservation's VM properties.
Colab Enterprise unable to create a runtime template
This section shows you how to resolve issues with creating runtime templates.
Unable to select enough GPUs
While creating a runtime template, you can't select the number of GPUs that you want.
This might be because you don't have enough quota.
Colab Enterprise uses Compute Engine quota for GPUs. For more information,
see the Compute Engine quota and limits overview .
To resolve this issue, Request a quota adjustment .
Default runtime already exists
The following error occurs when you try to create a runtime from the default runtime template
when the default runtime already exists.
Failed to create runtime
One click runtime already exists.
If you try to create a runtime from a default runtime template, Colab Enterprise
tries to create a default runtime. There can only be one default runtime per user, project, and
region. If the default runtime already exists, Colab Enterprise is unable to
create another default runtime.
To resolve this issue, connect to the existing default runtime or create a runtime from
a non-default runtime template.
Unable to create a default runtime
When Colab Enterprise creates a default runtime, it first creates a default
runtime template that it uses to generate the default runtime. If you try to create
a default runtime without the permissions required to create a runtime template, then
Colab Enterprise can't create the default runtime.
To resolve this issue, ask your administrator to grant you a role that includes the
aiplatform.notebookRuntimeTemplates.create permission.
User credentials not found when running code
This issue occurs when you try to run code in a notebook that interacts with
Google Cloud services and APIs, but you haven't granted Colab Enterprise access
to your user credentials.
The error message might look like one of the following:
Request had invalid authentication credentials.
Expected OAuth 2 access token, login cookie or other valid authentication credential
DefaultCredentialsError: Your default credentials were not found.
See the following common reasons for this issue and their resolutions:
You didn't complete a Sign in dialog that appears when
you first connect to a runtime that has end-user credentials enabled.
By completing this dialog, you grant Colab Enterprise access
to your user credentials.
To resolve this issue, try connecting to the runtime again and grant access.
To validate that access has been granted:
Click Account > Managed Google Account >
Data and Privacy > Third-party Apps & Services .
Verify that Colab Enterprise is listed.
In the Sign in dialog (consent screen) that appears when you first connect
to a runtime that has end-user credentials enabled, you didn't select your
user account to grant Colab Enterprise access to your
user credentials.
To resolve this issue:
In the Google Cloud console ,
click your account profile image, and then click Google Account .
Click Data & privacy .
In Data from apps and services you use , click
Third-party apps & services .
Click Colab Enterprise .
In Colab Enterprise has some access to your Google Account ,
click See details .
Click Remove access .
Click Confirm .
This removes your current access settings.
The next time you connect to a
runtime that has end-user credentials enabled , make sure to select the
correct user account when you complete the Sign in dialog.
A pop-up blocker might be preventing the Colab Enterprise
Sign in dialog (consent screen) from appearing.
To resolve this issue, enable pop-ups temporarily in your browser and try to connect to
the runtime again.
Additional services in Google Workspace have turned off Colab.
To resolve this issue, enable the Colab service in Google Workspace.
Even though this refers to Colab, it affects Colab Enterprise.
Colab should be ON for everyone .
Enterprise service restrictions might be blocking access to Colab Enterprise.
To isolate this issue,
verify that your organization's service restrictions aren't blocking access to
Google services .
Service Status should be ON for everyone .
You aren't using a runtime with end-user credentials enabled, and you haven't provided
your user credentials to Application Default Credentials (ADC) by using the Google Cloud CLI.
To resolve this issue, see Provide your
user credentials to ADC by running code in your notebook .
Gemini features not working
When you type in a Colab Enterprise notebook, code completion suggestions don't appear.
Or, the pen_spark Help me code button
doesn't appear above a code cell.
In your Colab Enterprise settings, you might have turned off the
Show context-powered code completions setting.
To resolve this issue, do the following:
Click
arrow_drop_down Toggle
header visibility .
On the Tools menu, click Settings .
Click Editor .
Select Show context-powered code completions .
Click Save .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
