---
title: "Setting up the Groups API \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/how-to/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/how-to/setup
  title: "Setting up the Groups API \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Setting up the Groups API | Cloud Identity | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Identity
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud Identity
Product overview
How-to Guides
All How-to Guides
Getting started with Cloud Identity
Setting up Cloud Identity
Turning off automatic Google Workspace licensing
Signing up for Cloud Identity Premium
Understanding your Cloud Identity Premium trial
Upgrading and downgrading
Canceling Cloud Identity
Verifying your domain
Verifying your domain
Finding your domain host
Setting up email with your domain
Managing users and licenses
Understanding licensing
Adding users
Adding licenses
Changing a user's license
Managing billing and payments
Billing and payments overview
Setting up paid Cloud Identity service
Comparing Cloud Identity billing plans
Understanding your bill and charges
Updating your bank account details
Maintaining security
Managing file sharing and syncing for Cloud Identity
Monitoring usage and security with reports
Using the Devices API
Setting up the Devices API
Creating devices
Listing and retrieving device users
Updating the client state
Approving a device
Using the Groups API
Setting up the Groups API
Creating and managing Google Groups
Creating and searching for Google Groups
Managing Google Group memberships
Creating and managing security groups
Creating security groups
Searching for security groups
Creating and managing POSIX groups
Creating and updating POSIX groups
Retrieving and listing POSIX groups
Creating and managing dynamic groups
Formulating and testing a membership query
Creating and updating a dynamic group
Retrieving a dynamic group and listing members
Valid user fields for dynamic group queries
Creating and managing identity-mapped groups
Creating and searching for identity-mapped groups
Managing identity-mapped group memberships
Querying group memberships
Managing membership expirations
Using the User Invitation API
Setting up the User Invitation API
Creating and managing user invitations
Using the Policy API
Setting up the Policy API
Listing and getting policies
Contacting support
Concepts
All Concepts
Cloud Identity overview
Devices API overview
Devices overview
Groups API overview
Dynamic groups overview
User Invitation API overview
Policy API overview
Policy API supported settings
Policy API concepts
Editions
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Installing the client libraries
Authenticating with the Groups API Authenticating as an end user
Authenticating as a service account without domain-wide delegation
Authenticating as a service account with domain-wide delegation
Home
Documentation
Access and resource management
Cloud Identity
Guides
Was this helpful?
Send feedback
On this page
Before you begin
Installing the client libraries
Authenticating with the Groups API Authenticating as an end user
Authenticating as a service account without domain-wide delegation
Authenticating as a service account with domain-wide delegation
Setting up the Groups API
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to set up the Cloud Identity Groups API.
Note: To use the Groups API, you must have Google Groups for Business
enabled for your domain and allow end users to create groups. See
Turn Groups for Business ON or OFF
and
Set Groups for Business sharing options
for more information. These steps require Google Workspace administrator access
to your domain.
Before you begin
Enable the Cloud Identity API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Installing the client libraries
To install the client libraries, run the following command:
Python
More
For more on setting up your Python development environment, refer to the
Python Development Environment Setup Guide .
pip install -- upgrade google - api - python - client google - auth \
google - auth - oauthlib google - auth - httplib2
Authenticating with the Groups API
You can authenticate with the Groups API as an end user, as a service
account group admin without domain-wide delegation, or as a service account
with domain-wide delegation. The following sections describe each method.
Authenticating as an end user
If you're not an administrator, or are building an app that acts on behalf of
users who aren't administrators, see
Using OAuth 2.0 for web server applications ,
and then see the Instantiating a client section below.
Authenticating as a service account without domain-wide delegation
If you're using a service account and want to use it to manage groups as a
group admin, complete the steps below. This authentication method should be used
when you want the service account's actions to be registered in the audit logs
as the service account.
Assigning an admin role to the service account
Tip: If the service account doesn't need access to all of the groups, consider
making it an owner of the groups of interest. You don't need to assign the
group admin role in this case.
First, you should assign the Google Workspace Group Administrator Role (Group
Administrator) to the service account you want to delegate to, using the Admin
SDK Roles and Role Assignments API. This step gives the service account access
to the groups of the domain but no other resource.
Note: You must have Google Workspace Super Admin access for your domain to make
the service account a delegated admin.
See the
Managing Roles guide
for general information about managing Roles using the Admin SDK API. Follow
the steps below to assign the Group Adminstrator role for your service account.
In the Google Cloud console, go to the Service Accounts page:
Go to Service Accounts
Click the name of the service account that you want to use with the
Groups API.
Copy the Unique ID of the service account.
Call the Admin SDK Roles API to identify the roleId for Group
Administrator. You can use the
API Explorer
in the Admin SDK documentation to do this.
Call the
Role Assignments API
with the following request body:
{
"assignedTo" : " SERVICE_ACCOUNT_UNIQUE_ID "
"roleId" : " ROLE_ID "
"scopeType" : "CUSTOMER"
"kind" : "admin#directory#roleAssignment"
}
Authenticating and authorizing the service account
You now have a service account with the Group Administrator role. The second
step is to complete the OAuth authentication process for the service account.
If you are developing an app on Google Cloud and the service account
is an owner of the project, you can use the application default credentials
instead, which can simplify the process. See
Authenticating as a Service Account
for more information.
If the service account is not the owner of the project, follow the instructions
below.
In either case, the applicable scope for the Cloud Identity Groups API is
https://www.googleapis.com/auth/cloud-identity.groups .
Using the credential you just created, generate an access token.
Note: Do not impersonate a user when generating credentials. Skip fields
such as with_subject , createDelegated , or setServiceAccountUser .
Java
More
GoogleCredential credential = new GoogleCredential . Builder ()
. setTransport ( httpTransport )
. setJsonFactory ( JSON_FACTORY )
. setServiceAccountId ( emailAddress )
. setServiceAccountPrivateKeyFromP12File ( new File ( "MyProject.p12" ))
. setServiceAccountScopes ( ImmutableList . of ( "https://www.googleapis.com/auth/cloud-identity.groups" ))
. build ();
Keep the access token that's generated.
Full code for generating an access token for a service account
Java
More
GenerateServiceAccountOauth2Token.java
package com.google.tools ;
import com.google.api.client.googleapis.auth.oauth2. GoogleCredential ;
import com.google.api.client.http. HttpTransport ;
import com.google.api.client.http.javanet. NetHttpTransport ;
import com.google.api.client.json. JsonFactory ;
import com.google.api.client.json.gson. GsonFactory ;
import com.google.common.collect.ImmutableList ;
import java.io.FileInputStream ;
/** Command line tool to generate Oauth2 token for a given service account
/** without domain wide delegation. */
public final class GenerateServiceAccountOauth2Token {
private static final ImmutableList<String> API_SCOPES =
ImmutableList . of (
"https://www.googleapis.com/auth/cloud-identity.groups" ,
"https://www.googleapis.com/auth/admin.directory.group" ,
"https://www.googleapis.com/auth/admin.directory.group.member" ,
"https://www.googleapis.com/auth/apps.groups.settings" );
public static void main ( final String [] args ) throws Exception {
String accessToken = getTokenFromJsonKey ();
System . out . println ( "Token: " + accessToken );
}
private static String getTokenFromJsonKey () throws Exception {
GoogleCredential credential =
GoogleCredential . fromStream (
new FileInputStream (
"<path for json file>" ),
new NetHttpTransport (),
GsonFactory . getDefaultInstance ());
System . out . println ( "ServiceAccountId=" + credential . getServiceAccountId ());
HttpTransport httpTransport = new NetHttpTransport ();
JsonFactory jsonFactory = GsonFactory . getDefaultInstance ();
GoogleCredential . Builder builder =
new GoogleCredential . Builder ()
. setServiceAccountPrivateKey ( credential . getServiceAccountPrivateKey ())
. setServiceAccountPrivateKeyId ( credential . getServiceAccountPrivateKeyId ())
. setServiceAccountId ( credential . getServiceAccountId ())
. setTransport ( httpTransport )
. setJsonFactory ( jsonFactory )
. setServiceAccountScopes ( API_SCOPES )
. setClock ( credential . getClock ());
credential = builder . build ();
if ( ! credential . refreshToken ()) {
throw new Exception ( "Failed to fetch access token." );
}
return credential . getAccessToken ();
}
}
Build rule
java_binary (
name = "generate_oauth2_token" ,
srcs = [ "GenerateServiceAccountOauth2Token.java" ] ,
main_class = "com.google.tools.GenerateServiceAccountOauth2Token" ,
deps = [
"//java/com/google/api/client/googleapis/auth/oauth2" ,
"//java/com/google/api/client/googleapis/javanet" ,
"//java/com/google/api/client/http" ,
"//java/com/google/api/client/http/javanet" ,
"//java/com/google/common/base" ,
"//java/com/google/common/collect" ,
"//third_party/java/google_http_java_client:gson" ,
"//third_party/java/google_http_java_client:json" ,
] ,
)
Testing the service account
Try any Groups API call with the service
account credentials: create a group, add users, update group settings, etc.
Check the Audit Logs in the Google Admin Console Reports section. You should
see the service account as the actor for your group-related changes. See
Log events for more
information.
Alternatively, you can use APIs to access audit logs. To check using the
Reports API explorer ,
make sure to use your admin OAuth credentials.
Authenticating as a service account with domain-wide delegation
If you're an administrator managing identity groups, or if you want to provide
an account with domain-wide privileges so it can manage Google Groups on behalf
of admins, you should authenticate as a
service account .
Note: Because domain-wide delegation works by allowing the service account to
impersonate an admin user, audit logs will show any service account actions as
the user. If you want the actions to show up as the service account, see
Authenticating as a service account without domain-wide-delegation
above.
For details about setting up domain-wide delegation, see
Control API access with domain-wide delegation .
To authenticate as a service account, refer to
Using OAuth 2.0 for server to server applications .
When initializing the credential in your code, specify the email address on
which the service account acts by calling with_subject() on the credential.
For example:
Python
More
credentials = service_account . Credentials . from_service_account_file (
SERVICE_ACCOUNT_FILE , scopes = SCOPES ) . with_subject ( delegated_email )
Instantiating a client
The following example shows how to instantiate a client using service account
credentials. To authenticate as an end-user instead, replace the credential
object from the service account with the credential you
obtained earlier in
Using OAuth 2.0 for web server applications .
Python
More
from google.oauth2 import service_account
import googleapiclient.discovery
SCOPES = [ 'https://www.googleapis.com/auth/cloud-identity.groups' ]
SERVICE_ACCOUNT_FILE = '/path/to/service-account-file.json'
def create_service ():
credentials = service_account . Credentials . from_service_account_file (
SERVICE_ACCOUNT_FILE , scopes = SCOPES )
delegated_credentials = credentials . with_subject ( 'user@example.org' )
service_name = 'cloudidentity'
api_version = 'v1'
service = googleapiclient . discovery . build (
service_name ,
api_version ,
credentials = delegated_credentials )
return service
You can now begin making calls to the Groups API.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
