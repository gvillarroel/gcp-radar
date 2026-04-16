---
title: "Managing resources \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files
  title: "Managing resources \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Managing resources
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Note: In environments enabled for archive deployments ,
you cannot manage resources using the Apigee UI, API, or gcloud. To manage resources for archive deployments using Apigee in VS Code,
see Managing resources .
Understand and manage resources, as described in the following sections.
About resources
Many policy types rely on resources . Resources are the files
that implement the code or configuration to be executed by a policy when attached to an API
proxy. In some cases, as with JavaScript and JavaCallout, a policy simply defines an attachment
point in an API proxy where some code should execute. The JavaScript or JavaCallout policy is a
pointer to a resource.
Resource types
The following table summarizes the resource types:
Resource type
Description
GraphQL (graphql)
GraphQL schema file referenced by GraphQL policies .
JAR (java)
Java classes in a JAR file referenced by JavaCallout policies .
JavaScript (js)
JavaScript referenced by JavaScript policies .
JavaScript (jsc)
Compiled JavaScript referenced by JavaScript policies .
OpenAPI Specification (oas)
OpenAPI Specification used to validate request and response messages of type JSON or YAML.
Property Set (properties)
Collection of key/value pairs that can be referenced an API proxy property sets .
Python (py)
Python scripts referenced by PythonScript policies . Resources must be
implemented in "pure Python" (in the Python language only).
Security policy (securityPolicy)
Custom security policy referenced by JavaCallout policies .
WSDL (wsdl)
WSDL files referenced by SOAPMessageValidation policies .
XSD (xsd)
XML schemas referenced by SOAPMessageValidation policies .
XSL Transformations (xsl)
XSLT transformations referenced by XSLTransform policies .
Where resources are stored
You can store resources to the following locations. You can't store resource files in an
organization .
API proxy revision : Resources are available
only to the API proxy revisions in which the resources are included. For example,
you might include a JavaScript resource with revision 1 of an API proxy, then change the
implementation to use a Python script in revision 2 of the proxy. revision 1 has access
to only the JavaScript resource, and revision 2 has access to only the Python resource.
Note: In the UI, resources scoped to an API proxy
revision are listed in the Resources section of the Navigation pane whether you added them
with the UI or API.
Environment : When stored in an environment (for example, test or prod ),
resources are available to any API proxy deployed in the same environment.
The environment repository is available at the following URI, as described by the
List
resource files API and later in Manage resources using the API :
/organizations/ $ORG /environments/ $ENV /resourcefiles
Note: You cannot view the API proxy revision resource
repository using the API.
The following table shows the methods you can use to create, update,
and delete resources for each repository:
Repository
Create
View
Update
Delete
API
UI
API
UI
API
UI
API
UI
API proxy revision
Environment
For example, all JavaScript files available to the test environment are stored in
the following repository and are available to any API proxy
running in the test environment:
/organizations/ $ORG /environments/test/resourcefiles/jsc
You can list all available resources by calling GET on the collection:
curl https://api.enterprise.apigee.com/v1/organizations/ $ORG /resourcefiles/ $TYPE -u email
The following request lists all JavaScript resources at the organization level:
curl https://api.enterprise.apigee.com/v1/organizations/myorg/resourcefiles/jsc -u email
The following request lists all JavaScript resources at the environment level, in the
environment called prod :
curl https://api.enterprise.apigee.com/v1/organizations/myorg/environments/prod/resourcefiles/jsc -u email
The following request lists all JavaScript resources in an API proxy revision (the most
specific level):
curl https://api.enterprise.apigee.com/v1/organizations/myorg/apis/weatherapi/revisions/6/resourcefiles/jsc -u email
Each request returns a list of resource names.
The following provides an example of the response:
{
"resourceFile" : [ {
"name" : "genvars-pw.js" ,
"type" : "jsc"
}, {
"name" : "genvars-refresh.js" ,
"type" : "jsc"
}, {
"name" : "getvars.js" ,
"type" : "jsc"
} ]
} -->
Resource name resolution
Resolve resource names from the most specific to the most general scope. Resource
names are resolved "up the chain", from the API proxy revision level, to the environment level.
Let's say that you have populated the same resource in two different repositories — the
API proxy revision and the prod environment.
Consider the API proxy that is configured with the following policy:
<Javascript name='PathSetterPolicy' timeLimit='200'>
<ResourceURL>jsc://pathSetter.js</ResourceURL>
</Javascript>
The policy reference cannot explicitly resolve to a repository. The first resource at the most
granular scope whose name matches the resource name in the policy is resolved.
So, when the API proxy is deployed in the environment prod , the policy will
resolve to the environment-scoped pathSetter.js resource.
/organizations/myorg/environments/prod/resourcefiles/jsc/pathSetter.js -->
When deployed in the environment test , the Policy will resolve to the
API proxy revision-scoped resource, because the environment-scoped resource is in the prod
environment, not the test environment.
/organizations/myorg/resourcefiles/jsc/pathSetter.js -->
Java resource guidelines
You can add compiled Java resources as JAR files using multiple options in curl, such as
-T , --data-binary , or -F option (not the -d
option). For example:
curl "http://apigee.googleapis.com/v1/organizations/ $ORG /environments/ $ENV /resourcefiles?name={jar_file}&type=java" \ - X POST \
- H "Authorization: Bearer $TOKEN" \
- H "Content-Type: application/octet-stream" \
-- data - binary @ { jar_file }
curl "http://apigee.googleapis.com/v1/organizations/ $ORG /environments/ $ENV /resourcefiles?name={jar_file}&type=java" \ - X POST \
- H "Authorization: Bearer $TOKEN" \
- H "Content-Type: application/octet-stream" \
- T "{jar_file}"
curl "http://apigee.googleapis.com/v1/organizations/ $ORG /environments/ $ENV /resourcefiles?name={jar_file}&type=java" \ - X POST \
- H "Authorization: Bearer $TOKEN" \
- H "Content-Type: application/octet-stream" \
- F "file=@{jar_file}"
Note: Package naming : Don't use io.apigee or
com.apigee as package names in JavaCallout policies. Those are reserved and used by other Apigee
modules.
See also:
Java best practices: Best
practices for API proxy design and development
Java cookbook example: XSL Transform policy
Manage proxy-level resources using the UI
Manage resources scoped to an API proxy revision using the UI, as described in the
following sections. You can also manage resources scoped to an environment
using the UI.
View proxy-level resources using the UI
In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
Go to API proxies
Select the API proxy whose resources you want to view. This displays the Proxy Editor
Overview view.
Click the Develop tab.
In the navigation pane, scroll down to Resources . The current resources are
displayed below that.
Create a proxy-level resource using the UI
To create a resource using the Apigee UI:
In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
Go to API proxies
Select the API proxy whose resources you want to view. This displays the Proxy Editor
Overview view.
Click the Develop tab.
In the navigation pane, scroll down to Resources and click the + button to its
right.
In the Add resource dialog, enter the following:
Resource type : Select the type of file for the resource.
Under Source , select either Create a new file or Import file . If
you choose Import file , also select a file to import in the File field.
Resource name : Enter a name for the resource.
Click Add .
Update a proxy-level resource using the UI
Update a resource scoped to an API proxy revision only if the revision has not been deployed . After an API proxy revision is deployed, it is immutable.
To update a resource scoped to an API proxy revision using the UI:
View the resources scoped to the API proxy revision .
In the Navigator view under Resources , click the resource that you want to update.
Note: For JAR files, position your cursor over the resource that you want to edit and click
.
Update the resource, as required.
Note: After uploading a new JAR file, click Update .
Delete a proxy-level resource using the UI
Delete a resource scoped to an API proxy revision only if the revision has not been deployed . After an API proxy revision is deployed, it is immutable.
To delete a resource scoped to an API proxy revision using the UI:
View the resources scoped to the API proxy revision .
In the Navigator view under Resources, position your cursor over the resource that you want to delete to display the actions menu.
Click .
Click Delete to confirm the action.
Manage environment-level resources using the UI
Manage resources scoped to an environment using the UI, as
described in the following sections.
View environment-level resources using the UI
In the Google Cloud console, go to the Apigee > Admin > Environments page.
Go to Environments
Select a project.
Select an environment from the environment list.
Click the Resources tab.
Create an environment-level resource using the UI
To create an environment-level resource using the UI:
View the environment-level resources .
Click + Resource .
In the Add resource pane:
Resource type : Select the type of file for the resource.
Import file :
Click Browse .
Select the resource file.
Click Open .
Modify the Resource name , if necessary.
Click Add .
Update an environment-level resource using the UI
To update an environment-level resource using the UI:
View the environment-level resources .
Under Actions , click more_vert
More , and then click Edit .
Edit the resource, as necessary and then click Save .
Delete an environment-level resource using the UI
To delete an environment-level resource using the UI:
View the environment-level resources .
Under Actions , click more_vert
More , and then click Delete .
Type the resource name, and then click Delete to confirm the action.
Manage resources using the API
Manage resources using the API, as described in the following sections.
Create resources using the API
Create resources that are scoped to an API proxy revision or environment , as described in the following sections.
Create resources scoped to an API proxy revision using the API
Create resources that are scoped to an API proxy revision using the API, as described in the following sections.
Note: You can create a resource that is scoped to an existing API proxy revision only if the revision has not been deployed .
After an API proxy revision is deployed, it is immutable.
To create a resource that is scoped to an API proxy revision using the API:
Create the resource file.
Add the resource file to an API proxy configuration bundle .
Upload the bundle using one of the following APIs:
Create API proxy
Update API proxy revision
Create resources scoped to an environment using the API
Create resources that are scoped to an environment using the API by issuing a POST request to the following resource:
/organizations/ $ORG /environments/ $ENV /resourcefiles
Pass the following information with your request:
Set the name query parameter to the name of the resource
Set the type query parameter to the required resource type
Pass the contents of the resource file as application/octet-stream or multipart/form-data )
Note: When importing a resource file using the API, you might need to chmod the file's permissions so that your development tool (such
as curl ) can upload it.
The following example shows how to create a JavaScript resource by passing its contents in the request body.
curl -X POST https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles?name=pathSetter.js&type=jsc
-H "Authorization: Bearer $TOKEN" \
-H "Content-type:application/octet-stream" \
-d 'request.headers["RequestPath"] = context.getVariable("proxy.basepath");'
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token . For information about the curl options used in this example, see
Using curl . For a description of environment variables you can use, see
Setting
environment variables for Apigee API requests .
The following example shows how to upload the resource as a file from your local machine. It's important to
use -F for the binary upload in curl in order for the environment- or
organization-scoped JavaScript files to be accessible by the JavaScript policy.
curl -X POST https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles?name=pathSetter.js&type=jsc
-H "Authorization: Bearer $TOKEN" \
-H "Content-type:multipart/form-data" \
-F file=@pathSetter.js
The following provides an example of the response:
{
"name" : "pathSetter.js" ,
"type" : "jsc"
}
Note: When using a REST client, such as Postman:
Set the Content-Type to multipart/form-data .
Attach the script as a file.
View resources using the API
The following sections describe how to view resources using the API.
View all resources using the API
View all resources scoped to an environment using the API, as described in the following sections.
Using the API you can view resources scoped to an environment only.
To view all resources in an environment using the API, issue a GET request to the following resource:
https://apigee.googleapis.com/v1/organizations/ $ORG /environments/ $ENV /resourcefiles
The following example lists all resources in the test environment:
curl -X GET https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles
-H "Authorization: Bearer $TOKEN"
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token . For information about the curl options used in this example, see
Using curl . For a description of environment variables you can use, see
Setting
environment variables for Apigee API requests .
For more information, see List environment resource files API .
The following provides an example of the response.
{
"resourceFile": [
{
"name" : "pathSetter.js",
"type" : "jsc"
}
]
}
View the contents of a resource using the API
To view the contents of a resource in an environment using the API, issue a GET request to the following resource:
/organizations/ $ORG /environments/ $ENV /resourcefiles/ $TYPE / $NAME
The following example lists the contents of the pathSetter.js JavaScript ( jsc ) file in the test environment:
curl -X GET https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles/jsc/pathSetter.js
-H "Authorization: Bearer $TOKEN"
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token . For information about the curl options used in this example, see
Using curl . For a description of environment variables you can use, see
Setting
environment variables for Apigee API requests .
The following provides an example of the response:
request.headers["RequestPath"] = context.getVariable("proxy.basepath");
Update resources using the API
Update resources that are scoped to an API proxy revision or environment , as described in the following sections.
Update resources scoped to an API proxy revision using the API
Note:
You can update a resource that is scoped to an existing API proxy revision only if the revision has not been deployed .
After an API proxy revision is deployed, it is immutable.
To update a resource that is scoped to an API proxy revision using the API:
Download the API proxy configuration bundle using the Get API proxy revision API with the following options:
Set the format query parameter to bundle
Set the Accept header to application/zip
Update the resource file in the API proxy configuration bundle .
Upload the API proxy configuration bundle using the Update API proxy revision API.
Update resources scoped to an environment using the API
Update a resource that is scoped to to an environment using the API by issuing a PUT request to the following resource:
/organizations/ $ORG /environments/ $ENV /resourcefiles/ $TYPE / $NAME
Pass the contents of the resource file as application/octet-stream or multipart/form-data .
Note: When importing a resource file using the API, you might need to chmod the file's permissions so that your development tool (such
as curl ) can upload it.
The following example shows how to update a JavaScript resource by passing its contents in the request body.
curl -X PUT https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles/jsc/pathSetter.js
-H "Authorization: Bearer $TOKEN" \
-H "Content-type:application/octet-stream" \
-d 'request.headers["RequestPath"] = context.getVariable("proxy.basepath");'
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token . For information about the curl options used in this example, see
Using curl . For a description of environment variables you can use, see
Setting
environment variables for Apigee API requests .
The following example shows how to update the resource file using a file from your local machine. It's important to
use -F for the binary upload in curl in order for the environment- or
organization-scoped JavaScript files to be accessible by the JavaScript policy.
curl -X PUT https://apigee.googleapis.com/v1/organizations/myorg/environments/test/resourcefiles/jsc/pathSetter.js
-H "Authorization: Bearer $TOKEN" \
-H "Content-type:multipart/form-data" \
-F file=@pathSetter.js
The following provides an example of the response:
{
"name" : "pathSetter.js" ,
"type" : "jsc"
}
Delete resources using the API
Delete resource scoped to an API proxy revision or environment , as described in the following sections.
Delete resources scoped to an API proxy revision using the API
Note:
You can delete a resource scoped to an API proxy revision if it has not been deployed. After an API proxy revision is deployed, it is immutable.
With hybrid, to delete a resource that is scoped to an API proxy using the API:
Download the API proxy configuration bundle using the Get API proxy revision API with the following options:
Set the format query parameter to bundle
Set the Accept header to application/zip
Delete the resource file from the API proxy configuration bundle .
Upload the API proxy configuration bundle using the Update API proxy revision API.
Delete a resource scoped to an environment using the API
Delete a resource scoped to an environment using the API, as described in the following sections.
To delete a resource scoped to an environment using the API, issue a DELETE request to the following resource:
https://apigee.googleapis.com/v1/organizations/ $ORG /environments/ $ENV /resourcefiles/ $TYPE / $NAME
The following example deletes the pathSetter.js JavaScript resource file from the test environment:
curl -X DELETE https://apigee.googleapis.com/v1/organizations/my-organization/environments/test/resourcefiles/jsc/pathSetter.js \
-H "Authorization: Bearer $TOKEN"
Where $TOKEN is set to your OAuth 2.0 access token, as described in
Obtaining an OAuth 2.0 access token . For information about the curl options used in this example, see
Using curl . For a description of environment variables you can use, see
Setting
environment variables for Apigee API requests .
For more information, see Delete resource file API .
The following provides an example of the response.
{
"name" : "pathSetter.js",
"type" : "jsc"
}
Access the resource
How you access the resource depends on the resource type . For more information, refer to the Policy reference overview .
The examples in this section demonstrate how to create and manage a JavaScript resource named pathSetter.js to allow it to be referenced by
policies of type JavaScript.
To attach the JavaScript to the Request PostFlow, create a policy called
PathSetterPolicy.xml that references the file pathSetter.js :
<Javascript name='PathSetterPolicy' timeLimit='200'>
<ResourceURL>jsc://pathSetter.js</ResourceURL>
</Javascript>
Then, reference the policy in the Endpoint configuration:
<PostFlow>
<Request>
<Step><Name>PathSetterPolicy</Name></Step>
</Request>
<PostFlow>
For more information, see JavaScript policy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
