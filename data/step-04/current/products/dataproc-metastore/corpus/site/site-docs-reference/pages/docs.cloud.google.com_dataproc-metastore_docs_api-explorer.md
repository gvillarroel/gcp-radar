---
title: "Use the API Explorer \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/api-explorer
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/api-explorer
  title: "Use the API Explorer \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Reference
Send feedback
Use the API Explorer
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use the API Explorer to try out
Dataproc Metastore API methods. API Explorer is a widget attached to
the REST API reference page for a method. It appears as a panel with the title
Try this API .
The API Explorer is an excellent way to try out methods in the
Dataproc Metastore API without having to write any code. The
widget presents a form showing the parameters for each method. Fill in the form,
click Execute , and see the results.
You can also hide the widget by clicking the close button at the top of the
panel, or expand it to full screen by clicking the full screen button.
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Access the API Explorer
The API Explorer is attached to the reference page for each REST API method. To
find the widget, go to the reference page for a method, for example, the
reference page for Dataproc Metastore projects.locations.services.create .
Execute a minimal request
Most methods have some required parameters and some optional ones. The required
ones are marked with a red bar until they are filled. You can execute a minimal
request by supplying only the required arguments.
The services.create method creates a Dataproc Metastore service in a
chosen project and location. The required fields are the parent
and serviceId fields. To create a service, supply the project number and
location ID of your project for parent using the form
projects/{projectNumber}/locations/{locationId} . And supply the service ID for
serviceId .
Try It!
The results of the method invocation appear in a box under the Execute
button. Typically, the box has a green header with the HTTP status code 200 in
it, indicating the request succeeded.
If the header is red and contains an HTTP failure code, the box contains
the error message. See Tips for pointers on resolving
errors.
Supply additional parameters
The list of parameters you see depends on the method to which the API Explorer
widget is attached. The services.create method has more than just the
parent and serviceId parameters, but they are the only required
parameters.
You can use the optional requestId parameter to specify a unique request ID
to allow the server to ignore the request if it has completed.
Use fields to limit output further
By default, the set of parameters that API Explorer shows corresponds to
the parameters of the associated method. However, the API Explorer widget
also has a set of extra fields that are not available via the method itself.
These parameters are hidden under the toggle Show standard parameters .
Click this toggle to expose the extra widget parameters. Click
Hide standard parameters to hide them from view.
The most useful of these standard parameters is the fields parameter, which
lets you select the fields in the returned output that you want to see. This is
very useful in the API Explorer panel, where the output is displayed in a box.
There is often a lot of output to scroll through.
Tips
The following sections contain API Explorer tips.
Remember to change {projectNumber} and {locationId}
Do not forget to replace {projectNumber} and {locationId} with your project's
number and location ID. Note that the API also accepts the project ID in place
of the number.
Problems with the values
Here are some issues to watch for when using the API Explorer forms. These
mistakes might cause errors or might be accepted but be treated like spelling
errors in the API method:
Don't use quotation marks around field values of any type.
Be sure to quote strings appearing inside filters. Use double quotation
marks ( " ) and not apostrophes ( ' ).
Don't use backslashes or URL-encoding in form fields. If needed,
URL-encoding is performed on the field values when you execute the method.
Look at the value in the result box after executing the call. You might
notice the problem there.
Supply a value for the pageSize field, such as 2 . This limits the
amount of data that is returned as you debug your API call.
Bookmark URLs for debugging
After you get the output you want, bookmark the API Explorer URL. When you want
to run the method again, paste the URL into your browser. You see the form
already populated with your values. Make any necessary changes to the
parameters, and click Execute to run the method again.
Authentication
There is a Credentials section on the API Explorer page, above the
Execute button. You typically don't need to change anything here.
The default authentication mechanism is Google OAuth 2.0 .
There is also a Show scopes toggle in the Credentials section. This
shows you which Compute Engine scopes you have available. By default,
all available scopes are enabled.
What's next
Dataproc Metastore API
Enable the API
Quickstart for deploying Dataproc Metastore
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
