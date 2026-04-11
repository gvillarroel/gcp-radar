---
title: "Installing the Admin SDK \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/install-admin-sdk
  title: "Installing the Admin SDK \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Installing the Admin SDK
This document shows you how to install the Identity Platform Admin SDK.
The Admin SDK lets you manage Identity Platform from a server
environment, and perform administrator actions such as migrating users,
setting custom claims, and configuring identity providers.
Before you begin
To use the Admin SDK, you need a server app running one of the following:
Language
Minimum framework version
Node.js
Node.js 8.13.0+
Java
Java 7+ (Java 8+ recommended)
Python
Python 2.7+ or 3.4+ (3.4+ recommended)
Go
Go 1.9+
C#
.NET Framework 4.5+ or .NET Core 1.5+
The following table lists the features supported by each SDK language:
Feature
Node.js
Java
Python
Go
C#
Custom token minting
ID token verification
User management
Control access with custom claims
Refresh token revocation
Import users
Session cookie management
Generating email action links
Managing SAML/OIDC provider configurations
Multi-tenancy support
Realtime Database
*
Firebase Cloud Messaging
FCM Multicast
Manage FCM topic subscriptions
Cloud Storage
Firestore
Project Management
Security rules
ML model management
Firebase Remote Config
Firebase App Check
Firebase Extensions
Console
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Other > Identity Toolkit Admin role to the service account.
To grant the role, find the Select a role list, then select
Other > Identity Toolkit Admin .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
gcloud
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/identitytoolkit.admin IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/identitytoolkit.admin
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Generate the key file:
gcloud iam service-accounts keys create FILE_NAME .json --iam-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
FILE_NAME : a name for the key file
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Installing the SDK
Node.js
The Node.js Admin SDK is available on npm. If you don't already
have a package.json file, create one using npm init . Next, install the
npm package and save it to your package.json :
npm install firebase - admin -- save
To use the module in your app, require it from any JavaScript file:
var admin = require ( 'firebase-admin' );
If you are using ES2015, you can import the module instead:
import * as admin from 'firebase-admin' ;
Java
The Java Admin SDK is published to the Maven central repository.
To install the library, declare it as a dependency in your build.gradle
file:
dependencies {
implementation ' com . google . firebase : firebase - admin : 6.11.0 '
}
If you use Maven to build your app, you can add the following
dependency to your pom.xml :
< dependency >
< groupId>com . google . firebase < / groupId >
< artifactId>firebase - admin < / artifactId >
< version>6 .11.0 < / version >
< / dependency >
Python
The Python Admin SDK is available using pip .
pip install -- user firebase - admin
Go
Use the go get utility to install the Go Admin SDK:
go get firebase . google . com / go
C#
Install the .NET Admin SDK using the .NET package manager:
Install - Package FirebaseAdmin - Version 1.9.1
Alternatively, install it using the dotnet command-line utility:
dotnet add package FirebaseAdmin -- version 1.9.1
Or, you can install it by adding the following package reference entry to
your .csproj file:
< ItemGroup >
< PackageReference Include = "FirebaseAdmin" Version = "1.9.1" / >
< / ItemGroup >
Initializing the SDK using default credentials
Add the following code to your server app to initialize the Admin SDK using
the default credentials:
Node.js
// Initialize the default app
var admin = require ( 'firebase-admin' );
var app = admin . initializeApp ({
credential : admin . credential . applicationDefault ()
});
Java
FirebaseApp . initializeApp (); FirebaseAppSnippets . java
Python
default_app = firebase_admin . initialize_app () index . py
Go
app , err := firebase . NewApp ( context . Background (), nil )
if err != nil {
log . Fatalf ( "error initializing app: %v\n" , err )
} init . go
C#
FirebaseApp . Create ();
FirebaseAppSnippets . cs
Initializing the SDK with a service account key file
You can also manually specify a service account key file:
Node.js
// Initialize the default app
var admin = require ( 'firebase-admin' );
var app = admin . initializeApp ({
credential : admin . credential . cert ( '/path/to/serviceAccountKey.json' )
});
Java
FileInputStream serviceAccount = new FileInputStream ( "path/to/serviceAccountKey.json" );
FirebaseOptions options = FirebaseOptions . builder ()
. setCredentials ( GoogleCredentials . fromStream ( serviceAccount ))
. setDatabaseUrl ( "https://<DATABASE_NAME>.firebaseio.com/" )
. build ();
FirebaseApp . initializeApp ( options ); FirebaseAppSnippets . java
Python
import firebase_admin
from firebase_admin import credentials
from firebase_admin import exceptions
cred = credentials . Certificate ( 'path/to/serviceAccountKey.json' )
default_app = firebase_admin . initialize_app ( cred ) index . py
Go
opt := option . WithCredentialsFile ( "path/to/serviceAccountKey.json" )
app , err := firebase . NewApp ( context . Background (), nil , opt )
if err != nil {
log . Fatalf ( "error initializing app: %v\n" , err )
} init . go
C#
FirebaseApp . Create ( new AppOptions ()
{
Credential = CredentialFactory . FromFile<ServiceAccountCredential> ( "path/to/serviceAccountKey.json" ). ToGoogleCredential (),
});
FirebaseAppSnippets . cs
Initializing multiple apps
Typically, you'll only want to initialize a single, default app. However,
you can also create multiple app instances, each with its own configuration
options and authentication state.
Node.js
// Initialize the default app
admin . initializeApp ( defaultAppConfig );
// Initialize another app with a different config
var otherApp = admin . initializeApp ( otherAppConfig , 'other' );
console . log ( admin . app (). name ); // '[DEFAULT]'
console . log ( otherApp . name ); // 'other'
// Use the shorthand notation to retrieve the default app's services
var defaultAuth = admin . auth ();
Java
// Initialize the default app
FirebaseApp defaultApp = FirebaseApp . initializeApp ( defaultOptions );
// Initialize another app with a different config
FirebaseApp otherApp = FirebaseApp . initializeApp ( otherAppConfig , "other" );
System . out . println ( defaultApp . getName ()); // "[DEFAULT]"
System . out . println ( otherApp . getName ()); // "other"
// Use the shorthand notation to retrieve the default app's services
FirebaseAuth defaultAuth = FirebaseAuth . getInstance ();
FirebaseDatabase defaultDatabase = FirebaseDatabase . getInstance ();
// Use the otherApp variable to retrieve the other app's services
FirebaseAuth otherAuth = FirebaseAuth . getInstance ( otherApp );
FirebaseDatabase otherDatabase = FirebaseDatabase . getInstance ( otherApp ); FirebaseAppSnippets . java
Python
# Initialize the default app
default_app = firebase_admin . initialize_app ( cred )
# Initialize another app with a different config
other_app = firebase_admin . initialize_app ( cred , name = 'other' )
print ( default_app . name ) # "[DEFAULT]"
print ( other_app . name ) # "other"
# Retrieve default services via the auth package...
# auth.create_custom_token(...)
# Use the `app` argument to retrieve the other app's services
# auth.create_custom_token(..., app=other_app) index.py
Go
// Initialize the default app
defaultApp , err := firebase . NewApp ( context . Background (), nil )
if err != nil {
log . Fatalf ( "error initializing app: %v\n" , err )
}
// Initialize another app with a different config
opt := option . WithCredentialsFile ( "service-account-other.json" )
otherApp , err := firebase . NewApp ( context . Background (), nil , opt )
if err != nil {
log . Fatalf ( "error initializing app: %v\n" , err )
}
// Access Auth service from default app
defaultClient , err := defaultApp . Auth ( context . Background ())
if err != nil {
log . Fatalf ( "error getting Auth client: %v\n" , err )
}
// Access auth service from other app
otherClient , err := otherApp . Auth ( context . Background ())
if err != nil {
log . Fatalf ( "error getting Auth client: %v\n" , err )
} init . go
C#
// Initialize the default app
var defaultApp = FirebaseApp . Create ( defaultOptions );
// Initialize another app with a different config
var otherApp = FirebaseApp . Create ( otherAppConfig , "other" );
Console . WriteLine ( defaultApp . Name ); // "[DEFAULT]"
Console . WriteLine ( otherApp . Name ); // "other"
// Use the shorthand notation to retrieve the default app's services
var defaultAuth = FirebaseAuth . DefaultInstance ;
// Use the otherApp variable to retrieve the other app's services
var otherAuth = FirebaseAuth . GetAuth ( otherApp );
FirebaseAppSnippets . cs
Setting scopes
If you're using a Compute Engine VM with Google Application Default
Credentials for authentication, you''ll need to set the right
access scopes .
Identity Platform requires the userinfo.email and cloud-platform
access scopes.
To check your existing access scopes, run the following:
gcloud compute instances describe [INSTANCE-NAME] --format json
The command will return information about the service account. For example:
"serviceAccounts": [
{
"email": "example.gserviceaccount.com",
"scopes": [
"https://www.googleapis.com/auth/cloud-platform",
"https://www.googleapis.com/auth/userinfo.email"
]
}
]
To update access scopes, stop the VM, then run the following:
gcloud compute instances set-service-account [INSTANCE-NAME] \
--service-account "your.gserviceaccount.com" \
--scopes ""https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/userinfo.email"
What's next
View the source code and additional documentation for the Admin SDK on
GitHub:
Node.js
Java
Python
Go
C#
Migrate existing users to Identity Platform
Manage SAML and OIDC providers programmatically
Manage Identity Platform tenants
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
