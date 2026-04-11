---
title: "Manage exports \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/guides/exports
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/auth
source_metadata:
  url: https://developers.google.com/workspace/vault/guides/exports
  title: "Manage exports \_|\_ Google Vault \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Guides
Send feedback
Manage exports
Stay organized with collections
Save and categorize content based on your preferences.
The Google Vault API lets you manage Google Vault exports. You can perform the
following tasks:
Create exports. Send a request to Vault to find the messages
or files that match your query and export them to Google Cloud.
You can have up to 20 exports running at one time across your organization.
To make exports faster, divide large exports into smaller ones. For example,
export data by month instead of all at once. Another option is to include
fewer items, such as users, groups, or chat spaces, in each export.
Exports are available for 15 days after creation. After this time, they are
deleted and no longer accessible.
The following examples show how to create exports for different services:
Gmail and classic Hangouts messages
Google Drive items
Google Meet recordings
Export from a saved query
List exports . Retrieve the status of all exports
associated with a matter.
Get exports . Retrieve information about an export.
Download exports . Download an export from
Google Cloud.
Delete exports . Remove exports from a matter when they
are no longer needed.
Before you begin
To set up the required libraries and authentication, work through the
quickstart for your programming language.
To work with Vault resources, an account must have the
required Vault privileges
and access to the matter. To access a matter, an account must have created the
matter, have the matter shared with them, or have the View All Matters
privilege.
Create a Gmail export
The following example shows how to create a Gmail export. This
request exports all Gmail and classic Hangouts messages that
meet the following criteria:
Messages owned by accounts email1 and email2 .
Excludes draft messages.
Messages sent to ceo@solarmora.com .
These examples use the classic Gmail export system. To export
using the new export system ,
in MailExportOptions ,
set useNewExport to true.
Java
public Export createMailAccountHeldDataExports ( Vault client , String matterId ) {
AccountInfo emailsToSearch = new AccountInfo (). setEmails ( ImmutableList . of ( "email1" , "email2" ));
MailOptions mailQueryOptions = new MailOptions (). setExportFormat ( "PST" );
String queryTerms = "to:ceo@solarmora.com" ;
Query mailQuery =
new Query ()
. setCorpus ( "MAIL" )
. setDataScope ( "HELD_DATA" )
. setSearchMethod ( "ACCOUNT" )
. setAccountInfo ( emailsToSearch )
. setTerms ( queryTerms )
. setMailOptions ( mailQueryOptions );
MailExportOptions mailExportOptions =
new MailExportOptions ()
. setExportFormat ( "MBOX" )
. showConfidentialModeContent ( true );
Export wantedExport =
new Export ()
. setMatterId ( matterId )
. setName ( "My first mail accounts export" )
. setQuery ( mailQuery )
. setExportOptions ( new ExportOptions (). setMailOptions ( mailExportOptions ));
return client . matters (). exports (). create ( matter , wantedExport ). execute ();
}
Python
def create_mail_account_held_data_export ( service , matter_id ):
emails_to_search = [ 'email1' , 'email2' ]
mail_query_options = { 'excludeDrafts' : True }
query_terms = 'to:ceo@solarmora.com'
mail_query = {
'corpus' : 'MAIL' ,
'dataScope' : 'HELD_DATA' ,
'searchMethod' : 'ACCOUNT' ,
'accountInfo' : {
'emails' : emails_to_search
},
'terms' : query_terms ,
'mailOptions' : mail_query_options ,
}
mail_export_options = {
'exportFormat' : 'MBOX' ,
'showConfidentialModeContent' : True
}
wanted_export = {
'name' : 'My first mail accounts export' ,
'query' : mail_query ,
'exportOptions' : {
'mailOptions' : mail_export_options
}
}
return service . matters () . exports () . create (
matterId = matter_id , body = wanted_export ) . execute ()
For Gmail exports, MBOX format exports process faster than
PST format exports.
Create a Drive export
The following example shows how to create a Drive export. This
request exports all files, including those in shared drives, that meet the
following criteria:
Belong to the specified organizational unit (obtained with the Admin SDK).
Were created between the specified
times .
Java
public Export createDriveOuAllDataExport ( Vault client , String matterId ) {
OrgUnitInfo ouToSearch = new OrgUnitInfo (). setOrgUnitId ( "ou id retrieved from admin sdk" );
DriveOptions driveQueryOptions = new DriveOptions (). setIncludeSharedDrives ( true );
Query driveQuery =
new Query ()
. setCorpus ( "DRIVE" )
. setDataScope ( "ALL_DATA" )
. setSearchMethod ( "ORG_UNIT" )
. setOrgUnitInfo ( ouToSearch )
. setDriveOptions ( driveQueryOptions )
. setStartTime ( "2017-03-16T00:00:00Z" )
. setEndTime ( "2017-03-16T00:00:00Z" )
. setTimeZone ( "Etc/GMT+2" );
DriveExportOptions driveExportOptions = new DriveExportOptions (). setIncludeAccessInfo ( false );
Export wantedExport =
new Export ()
. setName ( "My first drive ou export" )
. setQuery ( driveQuery )
. setExportOptions ( new ExportOptions (). setDriveOptions ( driveExportOptions ));
return client . matters (). exports (). create ( matter , wantedExport ). execute ();
}
Python
def create_drive_ou_all_data_export ( service , matter_id ):
ou_to_search = 'ou id retrieved from admin sdk'
drive_query_options = { 'includeSharedDrives' : True }
drive_query = {
'corpus' : 'DRIVE' ,
'dataScope' : 'ALL_DATA' ,
'searchMethod' : 'ORG_UNIT' ,
'orgUnitInfo' : {
'org_unit_id' : ou_to_search
},
'driveOptions' : drive_query_options ,
'startTime' : '2017-03-16T00:00:00Z' ,
'endTime' : '2017-09-23T00:00:00Z' ,
'timeZone' : 'Etc/GMT+2'
}
drive_export_options = { 'includeAccessInfo' : False }
wanted_export = {
'name' : 'My first drive ou export' ,
'query' : drive_query ,
'exportOptions' : {
'driveOptions' : drive_export_options
}
}
return service . matters () . exports () . create (
matterId = matter_id , body = wanted_export ) . execute ()
Create a Meet export
The following example shows how to create a Meet export. This
request exports files associated with accounts in the specified organizational
unit that have a filename that follows the pattern for
Meet recordings.
Python
def create_meet_export ( service , matter_id , ou_to_search , export_name ):
export = {
'name' : export_name ,
'query' : {
'corpus' : 'DRIVE' ,
'dataScope' : 'ALL_DATA' ,
'searchMethod' : 'ORG_UNIT' ,
'terms' : 'title:"...-...-... \\ (....-..-.. at ..:.. * \\ )"' ,
'orgUnitInfo' : {
'orgUnitId' : 'id:' + ou_to_search
},
'driveOptions' : {
'includeTeamDrives' : True ,
'includeSharedDrives' : True
},
'timeZone' : 'Etc/GMT' ,
'method' : 'ORG_UNIT'
},
'exportOptions' : {
'driveOptions' : {},
'region' : 'ANY'
},
}
return service . matters () . exports () . create (
matterId = matter_id , body = export ) . execute ()
Export from a saved query
The following example shows how to create an export from a saved query.
Python
def create_mail_export_from_saved_query ( service , matter_id , saved_query_id , export_name ):
export = {
'name' : export_name ,
'exportOptions' : {
'mailOptions' : {
'exportFormat' : 'PST' ,
'showConfidentialModeContent' : True
},
'region' : 'ANY'
}
}
export [ 'query' ] = service . matters () . savedQueries () . get (
savedQueryId = saved_query_id , matterId = matter_id ) . execute ()[ 'query' ]
return service . matters () . exports () . create (
matterId = matter_id , body = export ) . execute ()
List exports
The following example shows how to retrieve a list of exports associated with a
matter.
Java
public class exports {
public ListExportsResponse listExports ( Vault client , String matterId ) {
return client . matters (). exports (). list ( matterId ). execute ();
}
Python
def list_exports ( service , matter_id ):
return service . matters () . exports () . list ( matterId = matter_id ) . execute ()
Get information about an export
The following example shows how to get information about a specific export.
To download exported files and messages, you use Cloud APIs
(in the next example).
Java
public Export getExportById ( Vault client , String matterId , String exportId ) {
return client . matters (). exports (). get ( matterId , exportId ). execute ();
}
Python
def get_export_by_id ( service , matter_id , export_id ):
return service . matters () . exports () . get (
matterId = matter_id , exportId = export_id ) . execute ()
Download an export from Google Cloud
The following example shows how to download all completed exports in a matter
from Google Cloud. This request uses Vault and
Cloud APIs.
To download an export, an account needs the
Manage Exports privilege and
the matter shared with them.
Python
def download_exports ( service , matter_id ):
"""Google Cloud storage service is authenticated by running
`gcloud auth application-default login` and expects a billing enabled project
in ENV variable `GOOGLE_CLOUD_PROJECT` """
gcpClient = storage . Client ()
matter_id = os . environ [ 'MATTERID' ]
for export in vaultService . matters () . exports () . list (
matterId = matter_id ) . execute ()[ 'exports' ]:
if 'cloudStorageSink' in export :
directory = export [ 'name' ]
if not os . path . exists ( directory ):
os . makedirs ( directory )
print ( export [ 'id' ])
for sinkFile in export [ 'cloudStorageSink' ][ 'files' ]:
filename = ' %s / %s ' % ( directory , sinkFile [ 'objectName' ] . split ( '/' )[ - 1 ])
objectURI = 'gs:// %s / %s ' % ( sinkFile [ 'bucketName' ],
sinkFile [ 'objectName' ])
print ( 'get %s to %s ' % ( objectURI , filename ))
gcpClient . download_blob_to_file ( objectURI , open ( filename , 'wb+' ))
Delete an export
The following example shows how to delete an export.
Java
public void deleteExportById ( Vault client , String matterId , String exportId ) {
client . matters (). exports (). delete ( matterId , exportId ). execute ();
Python
def delete_export_by_id ( service , matter_id , export_id ):
return service . matters () . exports () . delete (
matterId = matter_id , exportId = export_id ) . execute ()
For app-specific information on search and export including search limits,
see Get started with Vault search and export .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
