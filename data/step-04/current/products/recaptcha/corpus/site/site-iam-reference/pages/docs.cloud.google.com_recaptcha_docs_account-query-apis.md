---
title: "Identify accounts that show related behaviors \_|\_ reCAPTCHA \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/account-query-apis
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/account-query-apis
  title: "Identify accounts that show related behaviors \_|\_ reCAPTCHA \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Identify accounts that show related behaviors
Stay organized with collections
Save and categorize content based on your preferences.
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to identify accounts that show related behaviors.
For example, you might want to identify all user accounts that are created by
a malicious user. You can find accounts, account groups, and account group
memberships that show related behaviors.
Identifying accounts that show related behaviors helps
you find groups of fake accounts and account takeovers when a previously
legitimate account is related to accounts with abusive behavior.
This feature is only available using the reCAPTCHA REST API and
Client Libraries.
Note: You must have an Enterprise subscription to use the Related accounts API .
For more information, see Compare features between reCAPTCHA tiers .
Retrieve accounts related to a specific account
To retrieve a list of accounts related to a specified account, use the
relatedaccountgroupmemberships.search method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID.
ACCOUNT_ID : the identifier that is uniquely associated with the user account for a
user account to your website.
PAGE_SIZE : Optional. The number of account memberships to include in the response.
The default value is 50, and the maximum value is 1,000. If the number of account memberships is greater
than the page size, the response contains a pagination token that you can use to retrieve the
next page of results.
NEXT_PAGE_TOKEN : Optional. The value of nextPageToken returned in the earlier
response of this method. Specify this parameter to query more account memberships.
HTTP method and URL:
POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroupmemberships:search?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN
Request JSON body:
{
"accountId": " ACCOUNT_ID "
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroupmemberships:search?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroupmemberships:search?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"relatedAccountGroupMemberships": [
{
"name": "projects/projectId/relatedaccountgroups/groupId187/memberships/membershipId95",
"accountId": "4RopXS59"
},
{
"name": "projects/projectId/relatedaccountgroups/groupId91/memberships/membershipId23",
"accountId": "HVMv1DTb"
}
],
"nextPageToken": "Q2N_rZgxUXOjNZtK1T1i0Q"
}
Code sample
Java
To authenticate to reCAPTCHA, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.recaptchaenterprise.v1. RecaptchaEnterpriseServiceClient ;
import com.google.recaptchaenterprise.v1. RelatedAccountGroupMembership ;
import com.google.recaptchaenterprise.v1. SearchRelatedAccountGroupMembershipsRequest ;
import java.io.IOException ;
import java.security.NoSuchAlgorithmException ;
public class SearchRelatedAccountGroupMemberships {
public static void main ( String [] args ) throws IOException , NoSuchAlgorithmException {
// TODO(developer): Replace these variables before running the sample.
// projectId: Google Cloud Project Id.
String projectId = "project-id" ;
// Unique id of the customer.
String accountId = "default" + UUID . randomUUID (). toString (). split ( "-" ) [ 0 ] ;
searchRelatedAccountGroupMemberships ( projectId , accountId );
}
// List group memberships for the account id.
public static void searchRelatedAccountGroupMemberships (
String projectId , String accountId ) throws IOException {
try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) {
SearchRelatedAccountGroupMembershipsRequest request =
SearchRelatedAccountGroupMembershipsRequest . newBuilder ()
. setProject ( projectId )
. setAccountId ( accountId )
. build ();
for ( RelatedAccountGroupMembership groupMembership :
client . searchRelatedAccountGroupMemberships ( request ). iterateAll ()) {
System . out . println ( groupMembership . getName ());
}
System . out . printf (
"Finished searching related account group memberships for %s!" , accountId );
}
}
}
Retrieve related account groups
To retrieve a list of account groups with similar behaviors, use the
relatedaccountgroups.list method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID.
PAGE_SIZE : Optional. The number of account groups to include in the response.
The default value is 50, and the maximum value is 1,000. If the number of account groups is greater
than the page size, the response contains a pagination token that you can use to retrieve the
next page of results.
NEXT_PAGE_TOKEN : Optional. The value of nextPageToken returned in an earlier
response of this method. Specify this parameter to query more account groups.
HTTP method and URL:
GET https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"relatedAccountGroups": [
{
"name": "projects/projectId/relatedaccountgroups/groupId1"
},
{
"name": "projects/projectId/relatedaccountgroups/groupId2"
}
],
"nextPageToken": "BenimQwKzIOibbOO2Lhisw"
}
Code sample
Java
To authenticate to reCAPTCHA, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.recaptchaenterprise.v1. RecaptchaEnterpriseServiceClient ;
import com.google.recaptchaenterprise.v1. ListRelatedAccountGroupsRequest ;
import com.google.recaptchaenterprise.v1. RelatedAccountGroup ;
import java.io.IOException ;
public class ListRelatedAccountGroups {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
// projectId : Google Cloud Project Id.
String projectId = "project-id" ;
listRelatedAccountGroups ( projectId );
}
// List related account groups in the project.
public static void listRelatedAccountGroups ( String projectId ) throws IOException {
try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) {
ListRelatedAccountGroupsRequest request =
ListRelatedAccountGroupsRequest . newBuilder (). setParent ( "projects/" + projectId ). build ();
System . out . println ( "Listing related account groups.." );
for ( RelatedAccountGroup group : client . listRelatedAccountGroups ( request ). iterateAll ()) {
System . out . println ( group . getName ());
}
}
}
}
Retrieve related account group memberships
To retrieve a list of account group memberships with similar behaviors, use the
relatedaccountgroupmemberships.list method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID.
GROUP_ID : Name of the account group for which you want to find related memberships.
PAGE_SIZE : Optional. The number of account group memberships to include in the response.
The default value is 50, and the maximum value is 1,000. If the number of account group memberships is greater
than the page size, the response contains a pagination token that you can use to retrieve the
next page of results.
NEXT_PAGE_TOKEN : Optional. The value of nextPageToken returned in the earlier
response of this method. Specify this parameter to query more account group memberships.
HTTP method and URL:
GET https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups/ GROUP_ID /memberships?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups/ GROUP_ID /memberships?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /relatedaccountgroups/ GROUP_ID /memberships?page_size= PAGE_SIZE &page_token= NEXT_PAGE_TOKEN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"relatedAccountGroupMemberships": [
{
"name": "projects/projectId/relatedaccountgroups/groupId/memberships/membershipId1",
"accountId": "4RopXS59"
},
{
"name": "projects/projectId/relatedaccountgroups/groupId/memberships/membershipId2",
"accountId": "HVMv1DTb"
}
],
"nextPageToken": "WPuIn8GHU3JvcJqgvmE7Aw"
}
Code sample
Java
To authenticate to reCAPTCHA, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.recaptchaenterprise.v1. RecaptchaEnterpriseServiceClient ;
import com.google.recaptchaenterprise.v1. ListRelatedAccountGroupMembershipsRequest ;
import com.google.recaptchaenterprise.v1. RelatedAccountGroupMembership ;
import java.io.IOException ;
public class ListRelatedAccountGroupMemberships {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
// projectId: Google Cloud Project Id.
String projectId = "project-id" ;
// relatedAccountGroup: Name of the account group.
String relatedAccountGroup = "related-account-group-name" ;
listRelatedAccountGroupMemberships ( projectId , relatedAccountGroup );
}
/** Given a group name, list memberships in the group. */
public static void listRelatedAccountGroupMemberships (
String projectId , String relatedAccountGroup ) throws IOException {
try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) {
// Construct the request.
ListRelatedAccountGroupMembershipsRequest request =
ListRelatedAccountGroupMembershipsRequest . newBuilder ()
. setParent (
String . format (
"projects/%s/relatedaccountgroups/%s" , projectId , relatedAccountGroup ))
. build ();
for ( RelatedAccountGroupMembership relatedAccountGroupMembership :
client . listRelatedAccountGroupMemberships ( request ). iterateAll ()) {
System . out . println ( relatedAccountGroupMembership . getName ());
}
System . out . println ( "Finished listing related account group memberships." );
}
}
}
What's next
Learn about the following account protection features:
Multi-factor authentication
Password defense
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
