---
title: "Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/secure-services
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/secure-services
  title: "Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Secure Cloud Run services tutorial
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial walks through how to create a secure two-service application
running on Cloud Run. This application is a
Markdown editor which
includes a public "frontend" service which anyone can use to compose markdown
text, and a private "backend" service which renders Markdown text to HTML.
The "Renderer" backend is a private service. This allows guaranteeing a text
transformation standard across an organization without tracking changes across
libraries in multiple languages.
The backend service is private using Cloud Run's built-in,
IAM-based service-to-service authentication
feature, that limits who can call the service. Both services are built with the
principle of least privilege ,
with no access to the rest of Google Cloud except where necessary.
Limitations or non-goals of this tutorial
This tutorial does not show end user authentication ,
which uses Identity Platform or
Firebase Authentication
to generate user ID tokens and
manually verify user identities. To learn more about end user
authentication, refer to the Cloud Run tutorial for
end user authentication .
This tutorial does not show combining IAM-based authentication and ID token
methods because this is not supported.
Objectives
Create a dedicated service account with minimal permissions for service-to-service
authentication and service access to the rest of Google Cloud.
Write, build, and deploy two services to Cloud Run which interact.
Make requests between a public and private Cloud Run service.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Build
Artifact Registry
Cloud Run
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
Enable the Cloud Run API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install and initialize the gcloud CLI .
Install curl to try out the service
Required roles
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to complete the tutorial. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Set up gcloud defaults
To configure gcloud with defaults for your Cloud Run service:
Set your default project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the name of the project you created for
this tutorial.
Configure gcloud for your chosen region:
gcloud config set run/region REGION
Replace REGION with the supported Cloud Run
region
of your choice.
Cloud Run locations
Cloud Run is regional, which means the infrastructure that
runs your Cloud Run services is located in a specific region and is
managed by Google to be redundantly available across
all the zones within that region .
Meeting your latency, availability, or durability requirements are primary
factors for selecting the region where your Cloud Run services are run.
You can generally select the region nearest to your users but you should consider
the location of the other Google Cloud
products that are used by your Cloud Run service.
Using Google Cloud products together across multiple locations can affect
your service's latency as well as cost.
Cloud Run is available in the following regions:
Subject to Tier 1 pricing
asia-east1 (Taiwan)
asia-northeast1 (Tokyo)
asia-northeast2 (Osaka)
asia-south1 (Mumbai, India)
asia-southeast3 (Bangkok)
europe-north1 (Finland)
Low CO 2
europe-north2 (Stockholm)
Low CO 2
europe-southwest1 (Madrid)
Low CO 2
europe-west1 (Belgium)
Low CO 2
europe-west4 (Netherlands)
Low CO 2
europe-west8 (Milan)
europe-west9 (Paris)
Low CO 2
me-west1 (Tel Aviv)
northamerica-south1 (Mexico)
us-central1 (Iowa)
Low CO 2
us-east1 (South Carolina)
us-east4 (Northern Virginia)
us-east5 (Columbus)
us-south1 (Dallas)
Low CO 2
us-west1 (Oregon)
Low CO 2
Subject to Tier 2 pricing
africa-south1 (Johannesburg)
asia-east2 (Hong Kong)
asia-northeast3 (Seoul, South Korea)
asia-southeast1 (Singapore)
asia-southeast2 (Jakarta)
asia-south2 (Delhi, India)
australia-southeast1 (Sydney)
australia-southeast2 (Melbourne)
europe-central2 (Warsaw, Poland)
europe-west10 (Berlin)
europe-west12 (Turin)
europe-west2 (London, UK)
Low CO 2
europe-west3 (Frankfurt, Germany)
europe-west6 (Zurich, Switzerland)
Low CO 2
me-central1 (Doha)
me-central2 (Dammam)
northamerica-northeast1 (Montreal)
Low CO 2
northamerica-northeast2 (Toronto)
Low CO 2
southamerica-east1 (Sao Paulo, Brazil)
Low CO 2
southamerica-west1 (Santiago, Chile)
Low CO 2
us-west2 (Los Angeles)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
If you already created a Cloud Run service, you can view the
region in the Cloud Run dashboard in the
Google Cloud console .
OK
Retrieve the code sample
To retrieve the code sample for use:
Clone the sample app repository to your Cloud Shell or local machine:
Node.js
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Python
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Go
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Java
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
C#
git clone https://github.com/GoogleCloudPlatform/dotnet-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Change to the directory that contains the Cloud Run sample
code:
Node.js
cd nodejs-docs-samples/run/markdown-preview/
Python
cd python-docs-samples/run/markdown-preview/
Go
cd golang-samples/run/markdown-preview/
Java
cd java-docs-samples/run/markdown-preview/
C#
cd dotnet-docs-samples/run/markdown-preview/
Review the private Markdown rendering service
From the perspective of the frontend there is a simple API specification for
the Markdown service:
One endpoint at /
Expects POST requests
The body of the POST request is Markdown text
You may want to review all of the code for any security concerns or just to
learn more about it by exploring the ./renderer/ directory. Note that the
tutorial does not explain the Markdown transformation code.
Ship the private Markdown rendering service
To ship your code, build with Cloud Build, upload to
Artifact Registry, and deploy to Cloud Run:
Change to the renderer directory:
Node.js
cd renderer/
Python
cd renderer/
Go
cd renderer/
Java
cd renderer/
C#
cd Samples.Run.MarkdownPreview.Renderer/
Create an Artifact Registry:
gcloud artifacts repositories create REPOSITORY \
--repository-format docker \
--location REGION
Replace:
REPOSITORY with a unique name for the repository. For each
repository location in a project, repository names must be unique.
REGION with the Google Cloud region to be used for the
Artifact Registry repository.
Run the following command to build your container and publish on
Artifact Registry.
Node.js
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer
Where PROJECT_ID is your Google Cloud project ID, and renderer is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Python
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer
Where PROJECT_ID is your Google Cloud project ID, and renderer is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Go
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer
Where PROJECT_ID is your Google Cloud project ID, and renderer is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Java
This sample uses Jib to build
Docker images using common Java tools. Jib optimizes container builds without
the need for a Dockerfile or having Docker
installed. Learn more about building Java containers with Jib .
Use the gcloud credential helper
to authorize Docker to push to your Artifact Registry.
gcloud auth configure-docker
Use the Jib Maven Plugin to build and push the container to Artifact Registry.
mvn compile jib:build -Dimage = REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer
Where PROJECT_ID is your Google Cloud project ID, and renderer is the
name you want to give your service.
Upon success, you will see a BUILD SUCCESS message. The image is stored in
Artifact Registry and can be reused if needed.
C#
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer
Where PROJECT_ID is your Google Cloud project ID, and renderer is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Deploy as a private service with restricted access.
Cloud Run provides out-of-the-box access control
and service identity features. Access control provides an
authentication layer that restricts users and other services from invoking the
service. Service identity allows restricting your service from accessing other
Google Cloud resources by creating a dedicated service account with limited
permissions.
Create a service account to serve as the "compute identity" of the render
service. By default this has no privileges other than project membership.
Command line
gcloud iam service-accounts create renderer-identity
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
resource "google_service_account" "renderer" {
account_id = "renderer-identity"
display_name = "Service identity of the Renderer (Backend) service."
}
The Markdown rendering service does not integrate directly with anything
else in Google Cloud. It needs no further permissions.
Deploy with the renderer-identity service account and deny unauthenticated
access.
Command line
gcloud run deploy renderer \
--image REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer \
--service-account renderer-identity \
--no-allow-unauthenticated
Cloud Run can use the short form service account name instead of
the full email address if the service account is part of the same
project.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
resource "google_cloud_run_v2_service" "renderer" {
name = "renderer"
location = "us-central1"
deletion_protection = false # set to "true" in production
template {
containers {
# Replace with the URL of your Secure Services > Renderer image.
# gcr.io/<PROJECT_ID>/renderer
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
service_account = google_service_account.renderer.email
}
}
Try out the private Markdown rendering service
Private services cannot be directly loaded by a web browser. Instead, use curl
or a similar HTTP request CLI tool that allows injecting an Authorization header.
To send some bold text to the service and see it convert the markdown asterisks to
HTML <strong> tags:
Get the URL from the deployment output.
Use gcloud to derive a special development-only identity token for authentication:
TOKEN = $( gcloud auth print-identity-token )
Create a curl request that passes the raw Markdown text as a URL-escaped query string parameter:
curl -H "Authorization: Bearer $TOKEN " \
-H 'Content-Type: text/plain' \
-d '**Hello Bold Text**' \
SERVICE_URL
Replace SERVICE_URL with the URL provided after deploying the
Markdown rendering service.
The response should be an HTML snippet:
<strong>Hello Bold Text</strong>
Review the integration between editor and rendering services
The editor service provides a simple text-entry UI and a space to see the HTML
preview. Before continuing, review the code retrieved earlier by opening the
./editor/ directory.
Next, explore the following few sections of code that securely
integrates the two services.
Node.js
The render.js module creates authenticated requests to the private renderer
service. It uses the Google Cloud metadata server in the
Cloud Run environment to create an identity token and add
it to the HTTP request as part of an Authorization header.
In other environments, render.js uses
Application Default Credentials
to request a token from Google's servers.
import { GoogleAuth } from 'google-auth-library' ;
import got from 'got' ;
const auth = new GoogleAuth ();
let client , serviceUrl ;
// renderRequest creates a new HTTP request with IAM ID Token credential.
// This token is automatically handled by private Cloud Run (fully managed) and Cloud Functions.
const renderRequest = async markdown = > {
if ( ! process . env . EDITOR_UPSTREAM_RENDER_URL )
throw Error ( 'EDITOR_UPSTREAM_RENDER_URL needs to be set.' );
serviceUrl = process . env . EDITOR_UPSTREAM_RENDER_URL ;
// Build the request to the Renderer receiving service.
const serviceRequestOptions = {
method : 'POST' ,
headers : {
'Content-Type' : 'text/plain' ,
},
body : markdown ,
timeout : {
request : 3000 ,
},
};
try {
// Create a Google Auth client with the Renderer service url as the target audience.
if ( ! client ) client = await auth . getIdTokenClient ( serviceUrl );
// Fetch the client request headers and add them to the service request headers.
// The client request headers include an ID token that authenticates the request.
const clientHeaders = await client . getRequestHeaders ();
serviceRequestOptions . headers [ 'Authorization' ] =
clientHeaders [ 'Authorization' ];
} catch ( err ) {
throw Error ( 'could not create an identity token: ' + err . message );
}
try {
// serviceResponse converts the Markdown plaintext to HTML.
const serviceResponse = await got ( serviceUrl , serviceRequestOptions );
return serviceResponse . body ;
} catch ( err ) {
throw Error ( 'request to rendering service failed: ' + err . message );
}
};
Parse the markdown from JSON and send it to the Renderer service to be
transformed into HTML.
app . post ( '/render' , async ( req , res ) = > {
try {
const markdown = req . body . data ;
const response = await renderRequest ( markdown );
res . status ( 200 ). send ( response );
} catch ( err ) {
console . error ( 'Error rendering markdown:' , err );
res . status ( 500 ). send ( err );
}
});
Python
The new_request method creates authenticated requests to private services.
It uses the Google Cloud metadata server in the Cloud Run
environment to create an identity token and add it to the HTTP request
as part of an Authorization header.
In other environments, new_request requests an identity token from Google's
servers by authenticating with
Application Default Credentials .
import os
import urllib
import google.auth.transport.requests
import google.oauth2.id_token
def new_request ( data ):
"""Creates a new HTTP request with IAM ID Token credential.
This token is automatically handled by private Cloud Run and Cloud Functions.
Args:
data: data for the authenticated request
Returns:
The response from the HTTP request
"""
url = os . environ . get ( "EDITOR_UPSTREAM_RENDER_URL" )
if not url :
raise Exception ( "EDITOR_UPSTREAM_RENDER_URL missing" )
req = urllib . request . Request ( url , data = data . encode ())
auth_req = google . auth . transport . requests . Request ()
target_audience = url
id_token = google . oauth2 . id_token . fetch_id_token ( auth_req , target_audience )
req . add_header ( "Authorization" , f "Bearer { id_token } " )
response = urllib . request . urlopen ( req )
return response . read ()
Parse the markdown from JSON and send it to the Renderer service to be
transformed into HTML.
@app . route ( "/render" , methods = [ "POST" ])
def render_handler ():
"""Parse the markdown from JSON and send it to the Renderer service to be
transformed into HTML.
"""
body = request . get_json ( silent = True )
if not body :
return "Error rendering markdown: Invalid JSON" , 400
data = body [ "data" ]
try :
parsed_markdown = render . new_request ( data )
return parsed_markdown , 200
except Exception as err :
return f "Error rendering markdown: { err } " , 500
Go
RenderService creates authenticated requests to private services. It uses the Google Cloud metadata server in the Cloud Run environment to
create an identity token and add it to the HTTP request as part of an
Authorization header.
In other environments, RenderService requests an identity token from Google's
servers by authenticating with
Application Default Credentials .
import (
"bytes"
"context"
"fmt"
"io"
"net/http"
"time"
"golang.org/x/oauth2"
"google.golang.org/api/idtoken"
)
// RenderService represents our upstream render service.
type RenderService struct {
// URL is the render service address.
URL string
// tokenSource provides an identity token for requests to the Render Service.
tokenSource oauth2 . TokenSource
}
// NewRequest creates a new HTTP request to the Render service.
// If authentication is enabled, an Identity Token is created and added.
func ( s * RenderService ) NewRequest ( method string ) ( * http . Request , error ) {
req , err := http . NewRequest ( method , s . URL , nil )
if err != nil {
return nil , fmt . Errorf ( "http.NewRequest: %w" , err )
}
ctx , cancel := context . WithTimeout ( context . Background (), 30 * time . Second )
defer cancel ()
// Create a TokenSource if none exists.
if s . tokenSource == nil {
s . tokenSource , err = idtoken . NewTokenSource ( ctx , s . URL )
if err != nil {
return nil , fmt . Errorf ( "idtoken.NewTokenSource: %w" , err )
}
}
// Retrieve an identity token. Will reuse tokens until refresh needed.
token , err := s . tokenSource . Token ()
if err != nil {
return nil , fmt . Errorf ( "TokenSource.Token: %w" , err )
}
token . SetAuthHeader ( req )
return req , nil
}
The request is sent to the Renderer service after adding the markdown
text to be transformed into HTML. Response errors are handled to differentiate
communication problems from rendering functionality.
var renderClient = & http . Client { Timeout : 30 * time . Second }
// Render converts the Markdown plaintext to HTML.
func ( s * RenderService ) Render ( in [] byte ) ([] byte , error ) {
req , err := s . NewRequest ( http . MethodPost )
if err != nil {
return nil , fmt . Errorf ( "RenderService.NewRequest: %w" , err )
}
req . Body = io . NopCloser ( bytes . NewReader ( in ))
defer req . Body . Close ()
resp , err := renderClient . Do ( req )
if err != nil {
return nil , fmt . Errorf ( "http.Client.Do: %w" , err )
}
out , err := io . ReadAll ( resp . Body )
if err != nil {
return nil , fmt . Errorf ( "ioutil.ReadAll: %w" , err )
}
if resp . StatusCode != http . StatusOK {
return out , fmt . Errorf ( "http.Client.Do: %s (%d): request not OK" , http . StatusText ( resp . StatusCode ), resp . StatusCode )
}
return out , nil
}
Java
makeAuthenticatedRequest creates authenticated requests to private
services. It uses the Google Cloud metadata server in the
Cloud Run environment to create an identity token and add it to the
HTTP request as part of an Authorization header.
In other environments, makeAuthenticatedRequest requests an identity token
from Google's servers by authenticating with
Application Default Credentials .
// makeAuthenticatedRequest creates a new HTTP request authenticated by a JSON Web Tokens (JWT)
// retrievd from Application Default Credentials.
public String makeAuthenticatedRequest ( String url , String markdown ) {
String html = "" ;
try {
// Retrieve Application Default Credentials
GoogleCredentials credentials = GoogleCredentials . getApplicationDefault ();
IdTokenCredentials tokenCredentials =
IdTokenCredentials . newBuilder ()
. setIdTokenProvider (( IdTokenProvider ) credentials )
. setTargetAudience ( url )
. build ();
// Create an ID token
String token = tokenCredentials . refreshAccessToken (). getTokenValue ();
// Instantiate HTTP request
MediaType contentType = MediaType . get ( "text/plain; charset=utf-8" );
okhttp3 . RequestBody body = okhttp3 . RequestBody . create ( markdown , contentType );
Request request =
new Request . Builder ()
. url ( url )
. addHeader ( "Authorization" , "Bearer " + token )
. post ( body )
. build ();
Response response = ok . newCall ( request ). execute ();
html = response . body (). string ();
} catch ( IOException e ) {
logger . error ( "Unable to get rendered data" , e );
}
return html ;
}
Parse the markdown from JSON and send it to the Renderer service to be
transformed into HTML.
// '/render' expects a JSON body payload with a 'data' property holding plain text
// for rendering.
@PostMapping ( value = "/render" , consumes = "application/json" )
public String render ( @RequestBody Data data ) {
String markdown = data . getData ();
String url = System . getenv ( "EDITOR_UPSTREAM_RENDER_URL" );
if ( url == null ) {
String msg =
"No configuration for upstream render service: "
+ "add EDITOR_UPSTREAM_RENDER_URL environment variable" ;
logger . error ( msg );
throw new IllegalStateException ( msg );
}
String html = makeAuthenticatedRequest ( url , markdown );
return html ;
}
C#
GetAuthenticatedPostResponse creates authenticated requests to private
services. It uses the Google Cloud metadata server in the
Cloud Run environment to create an identity token and add it to the
HTTP request as part of an Authorization header.
In other environments, GetAuthenticatedPostResponse requests an identity token
from Google's servers by authenticating with
Application Default Credentials .
private async Task<string> GetAuthenticatedPostResponse ( string url , string postBody )
{
// Get the OIDC access token from the service account via Application Default Credentials
GoogleCredential credential = await GoogleCredential . GetApplicationDefaultAsync ();
OidcToken token = await credential . GetOidcTokenAsync ( OidcTokenOptions . FromTargetAudience ( url ));
string accessToken = await token . GetAccessTokenAsync ();
// Create request to the upstream service with the generated OAuth access token in the Authorization header
var upstreamRequest = new HttpRequestMessage ( HttpMethod . Post , url );
upstreamRequest . Headers . Authorization = new AuthenticationHeaderValue ( "Bearer" , accessToken );
upstreamRequest . Content = new StringContent ( postBody );
var upstreamResponse = await _httpClient . SendAsync ( upstreamRequest );
upstreamResponse . EnsureSuccessStatusCode ();
return await upstreamResponse . Content . ReadAsStringAsync ();
}
Parse the markdown from JSON and send it to the Renderer service to be
transformed into HTML.
public async Task<IActionResult> Index ([ FromBody ] RenderModel model )
{
var markdown = model . Data ?? string . Empty ;
var renderedHtml = await GetAuthenticatedPostResponse ( _editorUpstreamRenderUrl , markdown );
return Content ( renderedHtml );
}
Ship the public editor service
To build and deploy your code:
Change to the editor directory:
Node.js
cd ../editor
Python
cd ../editor
Go
cd ../editor
Java
cd ../editor
C#
cd ../Samples.Run.MarkdownPreview.Editor/
Run the following command to build your container and publish on
Artifact Registry.
Node.js
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor
Where PROJECT_ID is your Google Cloud project ID, and editor is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Container Registry and can be
reused if needed.
Python
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor
Where PROJECT_ID is your Google Cloud project ID, and editor is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Go
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor
Where PROJECT_ID is your Google Cloud project ID, and editor is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Java
This sample uses Jib to build
Docker images using common Java tools. Jib optimizes container builds without
the need for a Dockerfile or having Docker
installed. Learn more about building Java containers with Jib .
mvn compile jib:build -Dimage = REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor
Where PROJECT_ID is your Google Cloud project ID, and editor is the
name you want to give your service.
Upon success, you will see a BUILD SUCCESS message. The image is stored in
Artifact Registry and can be reused if needed.
C#
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor
Where PROJECT_ID is your Google Cloud project ID, and editor is the
name you want to give your service.
Upon success, you will see a SUCCESS message containing the ID, creation
time, and image name. The image is stored in Artifact Registry and can be
reused if needed.
Deploy as a private service with special access to the rendering service.
Create a service account to serve as the "compute identity" of the private
service. By default this has no privileges other than project membership.
Command line
gcloud iam service-accounts create editor-identity
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
resource "google_service_account" "editor" {
account_id = "editor-identity"
display_name = "Service identity of the Editor (Frontend) service."
}
The Editor service does not need to interact with anything else in Google Cloud other than the Markdown rendering service.
Grant access to the editor-identity compute identity to invoke the Markdown
rendering service. Any service which uses this as a compute identity will
have this privilege.
Command line
gcloud run services add-iam-policy-binding renderer \
--member serviceAccount:editor-identity@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/run.invoker
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
resource "google_cloud_run_service_iam_member" "editor_invokes_renderer" {
location = google_cloud_run_v2_service.renderer.location
service = google_cloud_run_v2_service.renderer.name
role = "roles/run.invoker"
member = "serviceAccount:${google_service_account.editor.email}"
}
Because this is given the invoker role in the context of the render service,
the render service is the only private Cloud Run service the editor
can invoke.
Deploy with the editor-identity service account and allow public,
unauthenticated access.
Command line
gcloud run deploy editor --image REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor \
--service-account editor-identity \
--set-env-vars EDITOR_UPSTREAM_RENDER_URL = SERVICE_URL \
--allow-unauthenticated
Replace:
PROJECT_ID with your project ID
SERVICE_URL with the URL provided after deploying the Markdown rendering service.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Deploy the editor service:
resource "google_cloud_run_v2_service" "editor" {
name = "editor"
location = "us-central1"
deletion_protection = false # set to "true" in production
template {
containers {
# Replace with the URL of your Secure Services > Editor image.
# gcr.io/<PROJECT_ID>/editor
image = "us-docker.pkg.dev/cloudrun/container/hello"
env {
name = "EDITOR_UPSTREAM_RENDER_URL"
value = google_cloud_run_v2_service.renderer.uri
}
}
service_account = google_service_account.editor.email
}
}
Grant allUsers permission to invoke the service:
data "google_iam_policy" "noauth" {
binding {
role = "roles/run.invoker"
members = [
"allUsers" ,
]
}
}
resource "google_cloud_run_service_iam_policy" "noauth" {
location = google_cloud_run_v2_service.editor.location
project = google_cloud_run_v2_service.editor.project
service = google_cloud_run_v2_service.editor.name
policy_data = data.google_iam_policy.noauth.policy_data
}
Understand the HTTPS traffic
There are three HTTP requests involved in rendering markdown using these services.
The frontend service with the editor-identity invokes the
render service. Both editor-identity and
renderer-identity have limited permissions so any security
exploit or code injection has limited access to other Google Cloud resources.
Trying it out
To try out the complete two-service application:
Navigate your browser to the URL provided by the deployment step above.
Try editing the Markdown text on the left and click the button to see it
preview on the right.
It should look like this:
Success: You created a secure two-service application running on Cloud Run.
If you choose to continue developing these services, remember that they have
restricted Identity and Access Management (IAM) access to the rest of Google Cloud and
will need to be given additional IAM roles to access many other
services.
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and wish to keep it without the changes added
in this tutorial, delete resources created for the tutorial .
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
Delete tutorial resources
Delete the Cloud Run services you deployed in this tutorial:
gcloud
gcloud run services delete editor
gcloud run services delete renderer
You can also delete Cloud Run services from the
Google Cloud console .
Remove the gcloud default configurations you added during tutorial setup.
gcloud config unset run / region
Remove the project configuration:
gcloud config unset project
Delete other Google Cloud resources created in this tutorial:
Delete the editor container image named REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /editor from Artifact Registry
Delete the render container image named REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /renderer from Artifact Registry
Delete the editor service account editor-identity@PROJECT_ID.iam.gserviceaccount.com
Delete the render service account renderer-identity@PROJECT_ID.iam.gserviceaccount.com
What's next
Further secure your project by walking through the
using IAM securely checklist
Extend this sample application to track Markdown usage with Cloud Monitoring custom metrics
Review the Pub/Sub tutorial for an approach to
secure, asynchronous microservices
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
