---
title: "Quickstart: Secure traffic to a service with the Google Cloud console \_|\_\
  \ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console
  title: "Quickstart: Secure traffic to a service with the Google Cloud console \_\
    |\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quickstart: Secure traffic to a service with the Google Cloud console
This page shows you how to deploy an API on API Gateway to secure traffic to a backend service.
Follow the steps to deploy a new API to access a backend service on Cloud Run functions using the Google Cloud console. This quickstart also describes how to use an API key to protect your backend from unauthorized access.
Before you begin
In the Google Cloud console, go to the API Gateway page.
Go to API Gateway
Note: If you don't plan to keep the resources you create in this quickstart, create a new project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
API Gateway requires that you enable the following Google services:
Name
Title
apigateway.googleapis.com
API Gateway API
servicemanagement.googleapis.com
Service Management API
servicecontrol.googleapis.com
Service Control API
If you have not previously enabled these services for the project you select, you are prompted to do so.
Confirm that billing is enabled for your project.
Learn how to enable billing
Deploy an API backend
API Gateway sits in front of a deployed backend service and handles all incoming requests. In this quickstart, API Gateway routes incoming calls to a Cloud Run function backend named helloGET that contains the Node.js function shown below.
const functions = require ( '@google-cloud/functions-framework' );
// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function 's endpoint.
functions . http ( 'helloGET' , ( req , res ) => {
res . send ( 'Hello World!' );
});
Follow the steps in Quickstart: Using the Google Cloud CLI to download the sample Cloud Run functions code and deploy the Cloud Run function backend service.
Note: The actual name of the function and backend in the example varies according to the language you choose when completing the Cloud Run functions tutorial. This tutorial uses the Node.js example.
Follow the steps in Quickstart: Using the Google Cloud CLI to download the sample Cloud Run functions code and deploy the Cloud Run function backend service. Your administrator will need to grant additional roles to your account and and to the Cloud Build service account, as described in this quick start.
Copy the Service URL that is displayed when the Cloud Run function is deployed. You'll need it when creating the API config, in the next step.
Create an API config
API Gateway uses an API config to route calls to the backend service. You can use an OpenAPI specification that contains specialized
extensions to define the chosen API Gateway behavior. For more details on supported OpenAPI extensions, see the following:
OpenAPI 2.0 extensions in API Gateway
OpenAPI 3.x extensions in API Gateway
The OpenAPI specification for this quickstart contains routing instructions to the Cloud Run function backend:
OpenAPI 2.0
# openapi-functions.yaml
swagger : '2.0'
info :
title : API_ID optional-string
description : Sample API on API Gateway with a Google Cloud Functions backend
version : 1.0.0
schemes :
- https
produces :
- application/json
paths :
/hello :
get :
summary : Greet a user
operationId : hello
x-google-backend :
address : SERVICE_URL /helloGET
responses :
'200' :
description : A successful response
schema :
type : string
OpenAPI 3.x
# openapi-functions.yaml
openapi : 3.0.4
info :
title : API_ID optional-string
description : Sample API on API Gateway with a Google Cloud Functions backend
version : 1.0.0
# Define reusable components in x-google-api-management
x-google-api-management :
backends :
functions_backend :
address : SERVICE_URL /helloGET
pathTranslation : APPEND_PATH_TO_ADDRESS
protocol : "http/1.1"
# Apply the backend configuration by referencing it by name. Set at the root so this applies to all operations unless overridden.
x-google-backend : functions_backend
paths :
/hello :
get :
summary : Greet a user
operationId : hello
responses :
'200' :
description : A successful response
content :
application/json :
schema :
type : string
Use this OpenAPI specification to define your API:
From the command line, create a new file named openapi-functions.yaml .
Copy and paste the contents of the OpenAPI specification shown in the previous example into the newly created file.
Edit the file as follows:
In the title field, replace API_ID with the name of your API (which you create in the next step) and replace optional-string with a brief description of your choosing. The value of this field is used when minting API keys that grant access to this API. See API ID requirements for API ID naming guidelines.
In the address field, replace SERVICE_URL with the URL where the Cloud Run function backend service is running, copied in the previous step.
Create a gateway
Now you are ready to create and deploy a gateway on API Gateway.
Open the API Gateway page in the Google Cloud console.
Go to API Gateway
Click Create Gateway .
In the API section:
Choose to create a new API or select an existing API from the Select
an API drop-down. For this tutorial, select Create a new API .
Enter the Display Name for your API.
Enter the API ID for your API.
(Optional) Add labels to your API using a key:value format. To add more
than one label, click Add Label and enter additional values.
In the API Config section:
Choose to create a new API config or select an existing API config
from the Select a Config drop-down. For this tutorial, select Create a new
API config .
Use the file browser to upload the openapi-functions.yaml used to define your
API.
Enter a display name for your API config.
Select a service account from the drop-down list. The service account you select is used as identity for API Gateway. If you don't see a service account listed in the drop-down, see Configuring a
service account to verify that a service account is enabled for your project.
Note: The service account used to create an API config for a Cloud Run functions backend must have the Cloud Run Invoker role assigned.
(Optional) Add labels to your API config using a key:value format. To add more
than one label, click Add Label and enter additional values.
In the Gateway details section:
Enter the display name of the gateway. The URL to the gateway automatically generates.
Select the location of the gateway from the drop-down menu.
(Optional) Add labels to your gateway using a key:value format. To add more
than one label, click Add Label and enter additional values.
Click Create Gateway .
This deploys the API config on a newly created gateway. Deploying an API config on a gateway defines an external URL that API clients can use to access your API.
The operation may take several minutes to complete. To check the status of
the creation and deployment process, click the Notification icon in the main navigation bar to display a status notification, as shown in the following image:
On successful completion, you can view details about the gateway on the Gateways landing page.
Go to API Gateway
Make a note of the gateway URL. You use this to test your deployment in the next step.
Note: The URL for your newly created gateway may take a few moments to display. If it does not appear momentarily, click Refresh on the Gateways landing page to update the display.
Test your API deployment
Now you can send requests to your API using the URL generated upon deployment of your gateway.
In your browser, enter the following URL, where:
GATEWAY_URL specifies your deployed gateway URL.
hello is the path specified in your API config.
https:// GATEWAY_URL /hello
For example:
https:// my-gateway-a12bcd345e67f89g0h.uc.gateway.dev /hello
The message Hello World! should display in your browser.
You have successfully created and deployed an API Gateway!
Secure access with an API key
To secure access to your API backend with an API key, do the following:
Create an API key associated with your project.
Create and deploy a new API config to secure API access using API keys.
Test your API key
See also Restricting API access with API keys .
Create an API key
If you don't already have an API key associated with the Google Cloud project you are using in this quickstart, add one as described in Creating an API Key .
Copy the returned key string and keep it secure. This is the key value that you will use when testing your API key.
Create and deploy a new API config
To create and deploy a new API config that secures API access using API keys:
Enable your service:
In the Google Cloud console, go to APIs & Services > Library .
In the search bar, enter the Managed Service name of the API you just created. You can find this value in the Managed Service column for your API on the APIs landing page. For example:
my-api-123abc456def1 .apigateway. my-project .cloud.goog
On the landing page for your service, click Enable .
Note: There may be a delay of up to 30 minutes or more between the time you create your API and the time it appears in the Library. If your API is not visible in the Library,
you can enable it using the gcloud command line tool. Enter the following command where MANAGED_SERVICE_NAME specifies the Managed Service name of your API:
gcloud services enable MANAGED_SERVICE_NAME
Modify the OpenAPI specification used to create your API config to include instructions to enforce an API key validation security policy on all traffic. Add the security type and securitySchemes as shown:
OpenAPI 2.0
# openapi2-functions.yaml
swagger : '2.0'
info :
title : API_ID optional-string
description : Sample API on API Gateway with a Google Cloud Functions backend
version : 1.0.0
schemes :
- https
produces :
- application/json
paths :
/hello :
get :
summary : Greet a user
operationId : hello
x-google-backend :
address : SERVICE_URL /helloGET
security :
- api_key : []
responses :
'200' :
description : A successful response
schema :
type : string
securityDefinitions :
# This section configures basic authentication with an API key.
api_key :
type : "apiKey"
name : "key"
in : "query"
The securityDefinition configures your API to require an API key
passed as a query parameter named key when requesting access to
all paths defined in the specification.
OpenAPI 3.x
# openapi-functions.yaml
openapi : 3.0.4
info :
title : API_ID optional-string
description : Sample API on API Gateway with a Google Cloud Functions backend
version : 1.0.0
# Define reusable components in x-google-api-management
x-google-api-management :
backends :
functions_backend :
address : SERVICE_URL /helloGET
pathTranslation : APPEND_PATH_TO_ADDRESS
protocol : "http/1.1"
# Apply the backend configuration by referencing it by name. Set at the root so this applies to all operations unless overridden.
x-google-backend : functions_backend
components :
# This section configures basic authentication with an API key.
securitySchemes :
google_api_key :
type : apiKey
name : x-api-key
in : header
security :
- google_api_key : []
paths :
/hello :
get :
summary : Greet a user
operationId : hello
responses :
'200' :
description : A successful response
content :
application/json :
schema :
type : string
The securitySchemes configures your API to require an API key
passed as a query parameter named key when requesting access to
all paths defined in the specification.
Create and deploy a new API config to your existing gateway:
Go to the Gateways landing page.
Go to API Gateway
Select your gateway from the list to view details.
Click Edit to open the gateway configuration pane.
In the API config section:
Select Create a new API config from the available drop-down.
Upload your modified OpenAPI specification using the file browser.
Enter the display name for your new API config.
Select a service account from the drop-down list. The service account you select is used as the identity for API Gateway.
(Optional) Add labels to your API config using a key/value format. To add more than one label, click Add Label and enter additional values.
Click Update .
Test your API key
Once you have created and deployed the modified API, try making a request to it.
In your browser, enter the following URL, where:
GATEWAY_URL specifies your deployed gateway URL.
hello is the path specified in your API config.
https:// GATEWAY_URL /hello
This should result in the following error:
UNAUTHENTICATED:Method doesn't allow unregistered callers (callers without established identity). Please use API Key or other form of API consumer identity to call this API.
Now, in your browser, enter the following URL, where:
GATEWAY_URL specifies your deployed gateway URL.
hello is the path specified in your API config.
API_KEY specifies the value of the API key you created in Create an API key .
https:// GATEWAY_URL /hello?key= API_KEY
Now you should see Hello World! in your browser.
Congratulations! You have successfully protected your API backend with an API Gateway. Now you can start onboarding new API clients by generating additional API keys.
Track API activity
View the activity graphs for your API on the API Gateway page in the
Google Cloud console. Click your API to view its activity graphs on the
Overview page. It may take a few moments for the requests to reflect in
the graphs.
Look at the request logs for your API on the Logs Explorer page. A link to the
Logs Explorer page can be found on the API Gateway API page in the
Google Cloud console.
Go to API Gateway
Once on the API Gateway APIs page:
Select the API to view.
Click the Details tab.
Click the link under Logs.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this quickstart, you can:
Delete your gateways
Delete your API
Alternatively, you can also delete the Google Cloud project used for this tutorial.
What's next
Learn more About API Gateway
Walk through Configure your development environment
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
