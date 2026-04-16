---
title: "End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/identity-platform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/identity-platform
  title: "End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation"
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
End user authentication for Cloud Run tutorial
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to create a voting service, consisting of:
A browser-based client that:
Uses Identity Platform to fetch an ID token.
Allows users to vote for their favorite domestic animal.
Adds that ID token to a request to the Cloud Run server that
processes the vote.
A Cloud Run server that:
Checks to make sure the end-user has properly authenticated by providing
a valid ID token.
Processes the end-user's vote.
Using its own credentials, sends the vote on to Cloud SQL for storage.
A PostgreSQL database that stores the votes.
For simplicity, this tutorial uses Google as a
provider : users must authenticate using
their user account in order to acquire their ID token. However, you can use
other providers or authentication methods to
sign in users .
When this document uses the term user account , it refers to a Google Account,
or a user account managed by your identity provider and federated with
Workforce Identity Federation .
You use the credentials provided by your user account to sign in to the tool.
This service minimizes security risks by using Secret Manager
to protect sensitive data used to connect to the Cloud SQL instance. It also
uses a least-privilege service identity to
secure access to the database.
Objectives
Write, build, and deploy a service to Cloud Run that shows how to:
Use Identity Platform to authenticate an end-user to the
Cloud Run service backend.
Create a least-privilege identity for the service to grant
minimal access to Google Cloud resources.
Use Secret Manager to handle sensitive data when connecting
the Cloud Run service to a postgreSQL database.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Build
Artifact Registry
Secret Manager
Cloud SQL
Identity Platform
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
Enable the Cloud Run, Secret Manager, Cloud SQL, Artifact Registry, and Cloud Build APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin )
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Cloud SQL Admin ( roles/cloudsql.admin )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Identity Platform Admin ( roles/identityplatform.admin )
OAuth Config Editor ( roles/oauthconfig.editor )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Secret Manager Admin ( roles/secretmanager.admin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to complete the tutorial. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Setting up gcloud defaults
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
Retrieving the code sample
To retrieve the code sample for use:
Clone the sample app repository to your local machine:
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
Java
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Change to the directory that contains the Cloud Run sample
code:
Node.js
cd nodejs-docs-samples/run/idp-sql/
Python
cd python-docs-samples/run/idp-sql/
Java
cd java-docs-samples/run/idp-sql/
Visualizing the architecture
Diagram shows an end-user logging-in through a Google sign-in dialog
provided by Identity Platform, and then being redirected back to
Cloud Run with the user's identity.
An end-user makes the first request to the Cloud Run server.
The client loads in the browser.
The user provides login credentials through the Google sign-in dialog
from Identity Platform. An alert welcomes the signed-in user.
Control is redirected back to the server. The end-user votes using the
client, which fetches an ID token from Identity Platform and adds it to the
vote request header.
When the server receives the request, it verifies the Identity Platform ID token,
confirming that the end-user is appropriately authenticated. Then server sends
the vote to Cloud SQL, using its own credentials.
Understanding the core code
The sample is implemented as client and server, as described next.
Integrating with Identity Platform: client-side code
This sample uses Firebase SDKs
to integrate with Identity Platform in order to sign-in and manage users. To connect
to Identity Platform, the client-side JavaScript holds the reference to the project's
credentials as a config object and imports the necessary
Firebase JavaScript SDKs :
const config = {
apiKey : 'API_KEY' ,
authDomain : 'PROJECT_ID.firebaseapp.com' ,
};
< !-- Firebase App ( the core Firebase SDK ) is always required and must be listed first -- >
< script src = "https://www.gstatic.com/firebasejs/7.18/firebase-app.js" >< / script >
< !-- Add Firebase Auth service -- >
< script src = "https://www.gstatic.com/firebasejs/7.18/firebase-auth.js" >< / script >
The Firebase JavaScript SDK handles the sign-in flow by prompting the end-user to
sign-in to their Google Account via a popup window. It then redirects them back
to the service.
function signIn () {
const provider = new firebase . auth . GoogleAuthProvider ();
provider . addScope ( 'https://www.googleapis.com/auth/userinfo.email' );
firebase
. auth ()
. signInWithPopup ( provider )
. then ( result = > {
// Returns the signed in user along with the provider's credential
console . log ( ` ${ result . user . displayName } logged in.` );
window . alert ( `Welcome ${ result . user . displayName } !` );
})
. catch ( err = > {
console . log ( `Error during sign in: ${ err . message } ` );
window . alert ( 'Sign in failed. Retry or check your browser logs.' );
});
}
Note: To capture browser logging, you may wish to route logs to
Cloud Logging . For an implementation example, refer to
Stackdriver Error Reporting library .
When a user successfully signs in, the client uses Firebase methods to mint an
ID token. The client adds the ID token to the Authorization header of its request
to the server.
async function vote ( team ) {
if ( firebase . auth (). currentUser ) {
// Retrieve JWT to identify the user to the Identity Platform service.
// Returns the current token if it has not expired. Otherwise, this will
// refresh the token and return a new one.
try {
const token = await firebase . auth (). currentUser . getIdToken ();
const response = await fetch ( '/' , {
method : 'POST' ,
headers : {
'Content-Type' : 'application/x-www-form-urlencoded' ,
Authorization : `Bearer ${ token } ` ,
},
body : 'team=' + team , // send application data (vote)
});
if ( response . ok ) {
const text = await response . text ();
window . alert ( text );
window . location . reload ();
}
} catch ( err ) {
console . log ( `Error when submitting vote: ${ err } ` );
window . alert ( 'Something went wrong... Please try again!' );
}
} else {
window . alert ( 'User not signed in.' );
}
}
Integrating with Identity Platform: server-side code
The server uses the Firebase Admin SDK
to verify the user ID token sent from the client. If the provided
ID token has the correct format, is not expired, and is properly signed, the
method returns the decoded ID token. The server extracts the Identity Platform uid
for that user.
Node.js
const firebase = require ( 'firebase-admin' );
// Initialize Firebase Admin SDK
firebase . initializeApp ();
// Extract and verify Id Token from header
const authenticateJWT = ( req , res , next ) = > {
const authHeader = req . headers . authorization ;
if ( authHeader ) {
const token = authHeader . split ( ' ' )[ 1 ];
// If the provided ID token has the correct format, is not expired, and is
// properly signed, the method returns the decoded ID token
firebase
. auth ()
. verifyIdToken ( token )
. then ( decodedToken = > {
const uid = decodedToken . uid ;
req . uid = uid ;
next ();
})
. catch ( err = > {
req . logger . error ( `Error with authentication: ${ err } ` );
return res . sendStatus ( 403 );
});
} else {
return res . sendStatus ( 401 );
}
};
Python
def jwt_authenticated ( func : Callable [ ... , int ]) - > Callable [ ... , int ]:
"""Use the Firebase Admin SDK to parse Authorization header to verify the
user ID token.
The server extracts the Identity Platform uid for that user.
"""
@wraps ( func )
def decorated_function ( * args : a , ** kwargs : a ) - > a :
header = request . headers . get ( "Authorization" , None )
if header :
token = header . split ( " " )[ 1 ]
try :
decoded_token = firebase_admin . auth . verify_id_token ( token )
except Exception as e :
logger . exception ( e )
return Response ( status = 403 , response = f "Error with authentication: { e } " )
else :
return Response ( status = 401 )
request . uid = decoded_token [ "uid" ]
return func ( * args , ** kwargs )
return decorated_function
Java
/** Extract and verify Id Token from header */
private String authenticateJwt ( Map<String , String > headers ) {
String authHeader =
( headers . get ( "authorization" ) != null )
? headers . get ( "authorization" )
: headers . get ( "Authorization" );
if ( authHeader != null ) {
String idToken = authHeader . split ( " " ) [ 1 ] ;
// If the provided ID token has the correct format, is not expired, and is
// properly signed, the method returns the decoded ID token
try {
FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken );
String uid = decodedToken . getUid ();
return uid ;
} catch ( FirebaseAuthException e ) {
logger . error ( "Error with authentication: " + e . toString ());
throw new ResponseStatusException ( HttpStatus . FORBIDDEN , "" , e );
}
} else {
logger . error ( "Error no authorization header" );
throw new ResponseStatusException ( HttpStatus . UNAUTHORIZED );
}
}
Connecting the server to Cloud SQL
The server connects to the Cloud SQL instance Unix domain socket using
the format: /cloudsql/CLOUD_SQL_CONNECTION_NAME .
Node.js
/**
* Connect to the Cloud SQL instance through UNIX Sockets
*
* @param {object} credConfig The Cloud SQL connection configuration from Secret Manager
* @returns {object} Knex's PostgreSQL client
*/
const connectWithUnixSockets = async credConfig = > {
const dbSocketPath = process . env . DB_SOCKET_PATH || '/cloudsql' ;
// Establish a connection to the database
return Knex ({
client : 'pg' ,
connection : {
user : credConfig . DB_USER , // e.g. 'my-user'
password : credConfig . DB_PASSWORD , // e.g. 'my-user-password'
database : credConfig . DB_NAME , // e.g. 'my-database'
host : ` ${ dbSocketPath } / ${ credConfig . CLOUD_SQL_CONNECTION_NAME } ` ,
},
... config ,
});
};
Python
def init_unix_connection_engine (
db_config : dict [ str , int ]
) - > sqlalchemy . engine . base . Engine :
"""Initializes a Unix socket connection pool for a Cloud SQL instance of PostgreSQL.
Args:
db_config: a dictionary with connection pool config
Returns:
A SQLAlchemy Engine instance.
"""
creds = credentials . get_cred_config ()
db_user = creds [ "DB_USER" ]
db_pass = creds [ "DB_PASSWORD" ]
db_name = creds [ "DB_NAME" ]
db_socket_dir = creds . get ( "DB_SOCKET_DIR" , "/cloudsql" )
cloud_sql_connection_name = creds [ "CLOUD_SQL_CONNECTION_NAME" ]
pool = sqlalchemy . create_engine (
# Equivalent URL:
# postgres+pg8000://<db_user>:<db_pass>@/<db_name>
# ?unix_sock=<socket_path>/<cloud_sql_instance_name>/.s.PGSQL.5432
sqlalchemy . engine . url . URL . create (
drivername = "postgresql+pg8000" ,
username = db_user , # e.g. "my-database-user"
password = db_pass , # e.g. "my-database-password"
database = db_name , # e.g. "my-database-name"
query = {
"unix_sock" : f " { db_socket_dir } / { cloud_sql_connection_name } /.s.PGSQL.5432"
# e.g. "/cloudsql", "<PROJECT-NAME>:<INSTANCE-REGION>:<INSTANCE-NAME>"
},
),
** db_config ,
)
pool . dialect . description_encoding = None
logger . info ( "Database engine initialized from unix connection" )
return pool
Java
Use the Spring Cloud Google Cloud PostgreSQL starter integration to interact with your
PostgreSQL databases in Cloud SQL using Spring JDBC libraries. Set your
Cloud SQL for MySQL config to auto-configure a DataSource bean, which, coupled with Spring JDBC, provides a JdbcTemplate object bean that allows for operations such as querying and modifying a database.
# Uncomment and add env vars for local development
# spring . datasource . username = $ { DB_USER }
# spring . datasource . password = $ { DB_PASSWORD }
# spring . cloud . gcp . sql . database - name = $ { DB_NAME }
# spring . cloud . gcp . sql . instance - connection - name = $ { CLOUD_SQL_CONNECTION_NAME }
private final JdbcTemplate jdbcTemplate ;
public VoteController ( JdbcTemplate jdbcTemplate ) {
this . jdbcTemplate = jdbcTemplate ;
}
Handling sensitive configuration with Secret Manager
Secret Manager provides centralized and secure storage of sensitive data
such as Cloud SQL configuration. The server injects the Cloud SQL credentials from
Secret Manager at runtime via an environment variable. Learn more about
Using secrets with Cloud Run.
Node.js
// CLOUD_SQL_CREDENTIALS_SECRET is the resource ID of the secret, passed in by environment variable.
// Format: projects/PROJECT_ID/secrets/SECRET_ID/versions/VERSION
const { CLOUD_SQL_CREDENTIALS_SECRET } = process . env ;
if ( CLOUD_SQL_CREDENTIALS_SECRET ) {
try {
// Parse the secret that has been added as a JSON string
// to retrieve database credentials
return JSON . parse ( CLOUD_SQL_CREDENTIALS_SECRET . toString ( 'utf8' ));
} catch ( err ) {
throw Error (
`Unable to parse secret from Secret Manager. Make sure that the secret is JSON formatted: ${ err } `
);
}
}
Python
def get_cred_config () - > dict [ str , str ]:
"""Retrieve Cloud SQL credentials stored in Secret Manager
or default to environment variables.
Returns:
A dictionary with Cloud SQL credential values
"""
secret = os . environ . get ( "CLOUD_SQL_CREDENTIALS_SECRET" )
if secret :
return json . loads ( secret )
Java
/** Retrieve config from Secret Manager */
public static HashMap<String , Object > getConfig () {
String secret = System . getenv ( "CLOUD_SQL_CREDENTIALS_SECRET" );
if ( secret == null ) {
throw new IllegalStateException ( "\"CLOUD_SQL_CREDENTIALS_SECRET\" is required." );
}
try {
HashMap<String , Object > config = new Gson (). fromJson ( secret , HashMap . class );
return config ;
} catch ( JsonSyntaxException e ) {
logger . error (
"Unable to parse secret from Secret Manager. Make sure that it is JSON formatted: "
+ e );
throw new RuntimeException (
"Unable to parse secret from Secret Manager. Make sure that it is JSON formatted." );
}
}
Set up Identity Platform
Identity Platform requires manual setup in the Google Cloud console.
In the Google Cloud console, enable the Identity Platform API:
Enable the API
Configure your project:
In a new window, go to the Google Auth Platform > Overview page.
Go to Overview
Click Get Started and follow the project configuration setup.
In the App information dialog:
Supply the application name.
Select one of the displayed user support emails.
In the Audience dialog, select External .
In the Contact information dialog, enter a contact email.
Agree to the user data policy, then click Create .
Create and obtain your OAuth Client ID and Secret:
In the Google Cloud console, go to the APIs & Services > Credentials page.
Go to Credentials
At the top of the page, click Create Credentials and select OAuth client ID .
From Application Type , select Web Application and supply the name.
Click Create
The client_id and client_secret values will be used in the next step.
Configure Google as a provider:
In the Google Cloud console, go to the Identity Providers page.
Go to Identity Providers
Click Add A Provider .
Select Google from the list.
In the Web SDK Configuration settings, enter the client_id and client_secret values from the
previous step.
Under Configure your application , click Setup Details .
Copy the configuration to your application:
Copy the apiKey and authDomain values into the sample's static/config.js to initialize the Identity Platform Client SDK.
Note: This configuration is not yet complete. After you deploy your Cloud Run server,
you still need to authorize your service domain, as described in Finishing touches .
Deploying the service
Follow the steps to complete infrastructure provisioning and deployment:
Create a Cloud SQL instance with postgreSQL database using the console or CLI:
gcloud sql instances create CLOUD_SQL_INSTANCE_NAME \
--database-version = POSTGRES_16 \
--region = CLOUD_SQL_REGION \
--cpu = 2 \
--memory = 7680MB \
--root-password = DB_PASSWORD
Add your Cloud SQL credential values to postgres-secrets.json :
Node.js
{
"CLOUD_SQL_CONNECTION_NAME" : "PROJECT_ID:REGION:INSTANCE" ,
"DB_NAME" : "postgres" ,
"DB_USER" : "postgres" ,
"DB_PASSWORD" : "PASSWORD_SECRET"
}
Python
{
"CLOUD_SQL_CONNECTION_NAME" : "PROJECT_ID:REGION:INSTANCE" ,
"DB_NAME" : "postgres" ,
"DB_USER" : "postgres" ,
"DB_PASSWORD" : "PASSWORD_SECRET"
}
Java
{
"spring.cloud.gcp.sql.instance-connection-name" : "PROJECT_ID:REGION:INSTANCE" ,
"spring.cloud.gcp.sql.database-name" : "postgres" ,
"spring.datasource.username" : "postgres" ,
"spring.datasource.password" : "PASSWORD_SECRET"
}
Create a versioned secret using the console or CLI:
gcloud secrets create idp-sql-secrets \
--replication-policy = "automatic" \
--data-file = postgres-secrets.json
Create a service account for the server using the console or CLI:
gcloud iam service-accounts create idp-sql-identity
Grant roles for Secret Manager and Cloud SQL access using the console or CLI:
Allow the service account associated with the server to access the created secret:
gcloud secrets add-iam-policy-binding idp-sql-secrets \
--member serviceAccount:idp-sql-identity@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/secretmanager.secretAccessor
Allow the service account associated with the server to access Cloud SQL:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount:idp-sql-identity@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/cloudsql.client
Create an Artifact Registry:
gcloud artifacts repositories create REPOSITORY \
--repository-format docker \
--location REGION
REPOSITORY is the name of the repository. For each repository location in a project, repository names must be unique.
Build the container image using Cloud Build:
Node.js
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /idp-sql
Python
gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /idp-sql
Java
This sample uses Jib to build
Docker images using common Java tools. Jib optimizes container builds without
the need for a Dockerfile or having Docker
installed. Learn more about building Java containers with Jib .
Use the gcloud credential helper
to authorize Docker to push to your Artifact Registry.
gcloud auth configure-docker
Use the Jib Maven Plugin to build and push the container to Artifact Registry.
mvn compile jib:build -Dimage = REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /idp-sql
Deploy the container image to Cloud Run using the console
or CLI. Note that the server is deployed to allow unauthenticated access.
This is so that the user can load the client and begin the process. The
server verifies the ID token added to the vote request manually,
authenticating the end-user.
gcloud run deploy idp-sql \
--image REGION -docker.pkg.dev/ PROJECT_ID / REPOSITORY /idp-sql \
--allow-unauthenticated \
--service-account idp-sql-identity@ PROJECT_ID .iam.gserviceaccount.com \
--add-cloudsql-instances PROJECT_ID : REGION : CLOUD_SQL_INSTANCE_NAME \
--update-secrets CLOUD_SQL_CREDENTIALS_SECRET = idp-sql-secrets:latest
Also note the flags, --service-account , --add-cloudsql-instances , and
--update-secrets , which specify the service identity, the Cloud SQL
instance connection, and the secret name with version as an environment
variable, respectively.
Note: Environment variables are resolved at instance startup time, so if you use this method, Google recommends that you pin the secret to a particular version rather than using latest .
Finishing touches
Identity Platform requires that you authorize the Cloud Run service URL
as an allowed redirect after it has signed in the user:
Edit the Google provider by clicking the pen icon in the Identity
Providers page.
Click Add Domain under Authorized Domains on the right panel, and enter
the Cloud Run service URL.
You can locate the service URL in the logs after the build or deployment or
you can find it anytime using:
gcloud run services describe idp-sql --format 'value(status.url)'
Go to the APIs & Services > Credentials page
Click the pencil icon beside your OAuth Client ID to edit it and under the Authorized redirect URIs click the Add URI button.
In the field copy and paste the following URL and click the Save button at the bottom of the page.
https:// PROJECT_ID .firebaseapp.com/__/auth/handler
Trying it out
To try out the complete service:
Navigate your browser to the URL provided by the deployment step above.
Click the Sign in with Google button and go through the authentication flow.
Add your vote!
It should look like this:
Success: You deployed a Cloud Run service that authenticates end-users with Identity Platform and securely manages sensitive data using Secret Manager.
If you choose to continue developing these services, remember that they have
restricted Identity and Access Management (IAM) access to the rest of Google Cloud and
will need to be given additional IAM roles to access many other
services.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this tutorial.
Delete the project
If you created a new project for this tutorial, delete the project.
If you used an existing project and need to keep it without the changes you added
in this tutorial, delete resources that you created for the tutorial .
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
Delete the Cloud Run service you deployed in this tutorial.
Cloud Run services don't incur costs until they receive requests.
To delete your Cloud Run service, run the following command:
gcloud run services delete SERVICE-NAME
Replace SERVICE-NAME with the name of your service.
You can also delete Cloud Run services from the
Google Cloud console .
Remove the gcloud default region configuration you added during tutorial
setup:
gcloud config unset run / region
Remove the project configuration:
gcloud config unset project
Delete other Google Cloud resources created in this tutorial:
Delete the service container image from Artifact Registry
Delete the service account vote-identity@PROJECT_ID.iam.gserviceaccount.com
Delete the Cloud SQL instance
Delete the secret in Secret Manager
What's next
Dive deeper into Connecting from Cloud Run to Cloud SQL
Learn more about sign in methods and managing users with Identity Platform
Review other ways to authenticate developers, services, and users
of services deployed to Cloud Run
Explore other Cloud Run demos, tutorials, and samples
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
