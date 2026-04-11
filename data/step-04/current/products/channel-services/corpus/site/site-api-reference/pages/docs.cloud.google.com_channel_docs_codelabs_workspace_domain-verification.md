---
title: "Codelab: Automating domain verification for Google Workspace \_|\_ Channel\
  \ Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification
  title: "Codelab: Automating domain verification for Google Workspace \_|\_ Channel\
    \ Services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
APIs & Reference
Send feedback
Codelab: Automating domain verification for Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
Why automate domain verification?
While the Cloud Channel API allows you to provision Google Workspace
entitlement at scale, the customer still needs to take the following actions
to enable services.
Accept the Terms of Service
Verify ownership of the domain
Set up MX records
A newly-created customer will follow a guided requirements process when they
access the admin console (on admin.google.com) for the first time.
If you have programmatic access to the domain's DNS records (for example,
if you resold the domain to the customer) you can automate steps 2 and 3 to
increase activation rates since those steps typically require technical
knowledge from a resold customer.
This codelab explains how to use the Site Verification API to implement
this automation.
Before you begin
Make sure you complete the
API setup codelab to set up a
Google Cloud project and create a service account to call the
Cloud Channel API.
Read about the Channel Services operations .
We recommend using your Test Partner Sales Console for this codelab.
Key Point: This codelab requires you to have programmatic access to the customer
domain's DNS records.
This codelab also expects you to have finished the
Workspace end-to-end provisioning codelab .
Overview
Verifying the domain for Google Workspace entitlement involves several API
calls.
The Site Verification API is not specific to resellers. Domain
verification is a signal used across various Google products (search console,
Ads, etc). The process described here relies on setting your reseller domain's
super admin as an "owner" of the domain and setting your customer's first admin
as a co-owner. You can learn more about those concepts on the
Getting started with the Site Verification API
page.
Step 1: Prepare for the Site Verification API
Go to the API Library section in the Google Cloud console and enable
the Site Verification API .
Go to the
Domain-wide delegation page
using your reseller domain's super admin account.
On the row with your service account, click Edit .
Enter https://www.googleapis.com/auth/siteverification in the
OAuth Scopes field.
Click Authorize .
Install the
Site Verification API client library .
Step 2: Get verification token
This codelab will focus on the most common way to verify a domain: using TXT
DNS records. The Site Verification API supports
other verification methods .
To retrieve the token you will place as a TXT record, you need to
get tokens for type=INET_DOMAIN and verificationMethod=DNS_TXT .
In the following code, fill in these variables using your information.
jsonKeyFile :
The path to the JSON key file generated when you
created a service account .
resellerAdminUser :
The email address of a reseller domain super admin.
customerDomain : The end customer's domain. If you run this codelab on your
Test Partner Sales Console, make sure the domain follows domain naming
conventions.
C#
Using the following imports:
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.Services ;
using Google.Apis.SiteVerification.v1 ;
using Google.Apis.SiteVerification.v1.Data ;
Create the API client and fetch the token:
// Set up credentials with user impersonation
ICredential credential = GoogleCredential . FromFile ( jsonKeyFile )
. CreateScoped ( "https://www.googleapis.com/auth/siteverification" )
. CreateWithUser ( resellerAdminUser );
// Create the API service
var verificationService = new SiteVerificationService ( new BaseClientService . Initializer {
HttpClientInitializer = credential ,
});
// Fetch the token
var request = new SiteVerificationWebResourceGettokenRequest {
VerificationMethod = "DNS_TXT" ,
Site = new SiteVerificationWebResourceGettokenRequest . SiteData {
Type = "INET_DOMAIN" ,
Identifier = customerDomain
}
};
var response = verificationService . WebResource . GetToken ( request ). Execute ();
string token = response . Token ;
Console . WriteLine ( "Site Verification token: " + token );
Go
Using the following imports:
import (
"context"
"fmt"
"os"
"golang.org/x/oauth2/google"
"google.golang.org/api/option"
"google.golang.org/api/siteverification/v1"
)
Create the API client and fetch the token:
ctx := context . Background ()
// Set up credentials with user impersonation
jsonKey , _ := os . ReadFile ( jsonKeyFile )
jwt , _ := google . JWTConfigFromJSON ( jsonKey , "https://www.googleapis.com/auth/siteverification" )
jwt . Subject = resellerAdminUser
tokenSource := jwt . TokenSource ( ctx )
// Create the API Service
verificationService , _ := siteverification . NewService ( ctx , option . WithTokenSource ( tokenSource ))
// Fetch the token
req := & siteverification . SiteVerificationWebResourceGettokenRequest {
Site : & siteverification . SiteVerificationWebResourceGettokenRequestSite {
Type : "INET_DOMAIN" ,
Identifier : customerDomain ,
},
VerificationMethod : "DNS_TXT" ,
}
res , _ := verificationService . WebResource . GetToken ( req ). Do ()
token := res . Token
fmt . Println ( "Site verification token: " + token )
Java
Using the following imports:
import com.google.auth.http.HttpCredentialsAdapter ;
import com.google.auth.oauth2.GoogleCredentials ;
import com.google.auth.oauth2.ServiceAccountCredentials ;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ;
import com.google.api.client.json.jackson2.JacksonFactory ;
import com.google.api.services.siteVerification.SiteVerification ;
import com.google.api.services.siteVerification.SiteVerificationScopes ;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenRequest ;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenResponse ;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceResource ;
import java.io.FileInputStream ;
import java.util.Arrays ;
Create the API client and fetch the token:
// Set up credentials with user impersonation
FileInputStream jsonKeyFileSteam = new FileInputStream ( JSON_KEY_FILE );
GoogleCredentials credentials = ServiceAccountCredentials . fromStream ( jsonKeyFileSteam )
. createScoped ( "https://www.googleapis.com/auth/siteverification" )
. createDelegated ( RESELLER_ADMIN_USER );
// Create the API service
SiteVerification verificationService = new SiteVerification . Builder (
GoogleNetHttpTransport . newTrustedTransport (),
JacksonFactory . getDefaultInstance (),
new HttpCredentialsAdapter ( credentials )). build ();
// Fetch the token
SiteVerificationWebResourceGettokenRequest request =
new SiteVerificationWebResourceGettokenRequest ()
. setVerificationMethod ( "DNS_TXT" )
. setSite ( new SiteVerificationWebResourceGettokenRequest . Site ()
. setType ( "INET_DOMAIN" )
. setIdentifier ( CUSTOMER_DOMAIN ));
SiteVerificationWebResourceGettokenResponse response =
verificationService . webResource (). getToken ( request ). execute ();
String token = response . getToken ();
System . out . println ( "Site Verification token: " + token );
Node.js
Using the following import:
const { google } = require ( 'googleapis' );
Create the API client and fetch the token:
// Set up credentials with user impersonation
const authJWT = new JWT ({
keyFile : jsonKeyFile ,
scopes : [ 'https://www.googleapis.com/auth/siteverification' ],
subject : resellerAdminUser ,
});
// Create the API service
const verificationService = google . siteVerification ({ version : 'v1' , auth : authJWT });
// Fetch the token
const { data } = await verificationService . webResource . getToken ({
requestBody : {
site : {
type : 'INET_DOMAIN' ,
identifier : customerDomain ,
},
verificationMethod : 'DNS_TXT' ,
}
});
const token = data . token ;
console . log ( `Site Verification token: ${ token } ` );
PHP
Create the API client and fetch the token:
// Set up credentials with user impersonation
$client = new Google_Client();
$client->setAuthConfig($JSON_KEY_FILE);
$client->setSubject($RESELLER_ADMIN_USER);
$client->setScopes('https://www.googleapis.com/auth/siteverification');
// Create the API service
$verificationService = new Google_Service_SiteVerification($client);
// Fetch the token
$request = new Google_Service_SiteVerification_SiteVerificationWebResourceGettokenRequest([
'verificationMethod' => 'DNS_TXT',
'site' => [
'type' => 'INET_DOMAIN',
'identifier' => $CUSTOMER_DOMAIN
]
]);
$response = $verificationService->webResource->getToken($request);
$token = $response->token;
print 'Site Verification token: ' . $token . PHP_EOL;
Python
Using the following imports:
from google.oauth2 import service_account
from apiclient.discovery import build
Create the API client and fetch the token:
# Set up credentials with user impersonation
credentials = service_account . Credentials . from_service_account_file (
JSON_KEY_FILE , scopes = [ "https://www.googleapis.com/auth/siteverification" ])
credentials_delegated = credentials . with_subject ( RESELLER_ADMIN_USER )
# Create the API service
verification_service = build ( serviceName = "siteVerification" , version = "v1" ,
credentials = credentials_delegated )
# Fetch the token
response = verification_service . webResource () . getToken (
body = {
"site" : {
"type" : "INET_DOMAIN" ,
"identifier" : CUSTOMER_DOMAIN
},
"verificationMethod" : "DNS_TXT"
}) . execute ()
token = response [ "token" ]
print ( "Site Verification token: " + token )
Note: The generated token is tied to the API caller (your reseller account's
super admin). Your customer can't verify their domain by placing this token
in their DNS records.
Step 3: Place verification token
Write the code to add the token as a TXT record on the customer domain's
DNS records.
For new domains, this is a great time to set up
the MX records required
for Gmail.
Step 4: Trigger domain verification
Once the token is placed as a TXT record, you can call the
Site Verification API to trigger the verification. This is achieved
by calling
webResource.insert() .
The call fails with a 400 error if the expected token is not found. You can
implement an exponential backoff retry strategy until the call succeeds to make
up for DNS propagation delays.
If the call returns with no errors, the Site Verification API considers
the domain to be verified, and any emails in the owners field of the
webResource is a verified owner.
It may take about 3 hours for the verification status to propagate
to your customer's Google Workspace account. You can force the status to
propagate instantly by setting the customer's admin (created when you called
provisionCloudIdentity )
as an owner of the webResource .
C#
// Set the customer's admin user as an owner to make sure the domain
// verification status is instantly propagated to the Workspace account
string [] owners = { "admin@" + customerDomain };
var resource = new SiteVerificationWebResourceResource {
Site = new SiteVerificationWebResourceResource . SiteData {
Type = "INET_DOMAIN" ,
Identifier = customerDomain
},
Owners = owners
};
resource = verificationService . WebResource . Insert ( resource , "DNS_TXT" ). Execute ();
Console . WriteLine ( "=== Domain has been verified" );
Go
// Set the customer's admin user as an owner to make sure the domain
// verification status is instantly propagated to the Workspace account
resource := & siteverification . SiteVerificationWebResourceResource {
Site : & siteverification . SiteVerificationWebResourceResourceSite {
Type : "INET_DOMAIN" ,
Identifier : customerDomain ,
},
Owners : [] string { "admin@" + customerDomain },
}
resource , err := verificationService . WebResource . Insert ( "DNS_TXT" , resource ). Do ()
if err != nil {
fmt . Println ( err )
} else {
fmt . Println ( "=== Domain has been verified" )
}
Java
// Set the customer's admin user as an owner to make sure the domain
// verification status is instantly propagated to the Workspace account
SiteVerificationWebResourceResource resource =
new SiteVerificationWebResourceResource ()
. setSite ( new SiteVerificationWebResourceResource . Site ()
. setIdentifier ( CUSTOMER_DOMAIN )
. setType ( "INET_DOMAIN" ))
. setOwners ( Arrays . asList ( "admin@" + CUSTOMER_DOMAIN ));
resource = verificationService . webResource (). insert ( "DNS_TXT" , resource ). execute ();
System . out . println ( "=== Domain has been verified" );
Node.js
// Set the customer's admin user as an owner to make sure the domain
// verification status is instantly propagated to the Workspace account
await verificationService . webResource . insert ({
verificationMethod : 'DNS_TXT' ,
requestBody : {
site : {
type : 'INET_DOMAIN' ,
identifier : customerDomain ,
},
owners : [ `admin@ ${ customerDomain } ` ],
}
});
console . log ( '=== Domain has been verified' );
PHP
// Set the customer's admin user as an owner to make sure the domain
// verification status is instantly propagated to the Workspace account
$resource = new Google_Service_SiteVerification_SiteVerificationWebResourceResource([
'site' => [
'type' => 'INET_DOMAIN',
'identifier' => $CUSTOMER_DOMAIN,
],
'owners' => ['admin@' . $CUSTOMER_DOMAIN]
]);
$resource = $verificationService->webResource->insert('DNS_TXT', $resource);
print '=== Domain has been verified' . PHP_EOL;
Python
# Set the customer's admin user as an owner to make sure the domain
# verification status is instantly propagated to the Workspace account
resource = verification_service . webResource (). insert (
verificationMethod = "DNS_TXT" ,
body = {
"site" : {
"type" : "INET_DOMAIN" ,
"identifier" : CUSTOMER_DOMAIN
},
"owners" : [ "admin@" + CUSTOMER_DOMAIN ]
}). execute ()
print ( "=== Domain has been verified" )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
