---
title: "Integrate with Drive UI's \"Open with\" context menu \_|\_ Google Drive \_\
  |\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/integrate-open
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/integrate-open
  title: "Integrate with Drive UI's \"Open with\" context menu \_|\_ Google Drive\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Integrate with Drive UI's "Open with" context menu
Stay organized with collections
Save and categorize content based on your preferences.
When a user selects a file and clicks the Drive UI's "Open with"
menu item , Drive redirects
the user to that app's Open URL defined in Configure a Drive UI
integration .
If you checked the "Importing" box when you configured a Drive UI
integration, the user can select a combination of app-specific and
Google Workspace files to open. When you configure a Drive UI
integration, app-specific files are defined in the "Default MIME types" and
"Default file extensions" fields, whereas Google Workspace
files are defined in the "Secondary MIME types" and "Secondary file extensions"
fields.
For each file that the user wants to open, Drive checks the MIME
types against your defined default and secondary MIME types:
For MIME types defined in the "Default MIME types" field, the file ID is
passed to your app. For information on how to handle app-specific files,
see Handle an Open URL for app-specific documents .
For MIME types defined in the "Secondary MIME types" field, the
Drive UI displays a dialog asking the user what file type to
convert the Google Workspace file to. For example, if you select a
Google Docs file in the Drive UI and the "Secondary MIME
types" field suggests your app supports text/plain or application/pdf, the
Drive UI asks the user if they want to convert to Plain Text
or PDF.
For information on how to handle Google Workspace
files, see Handle an Open URL for Google Workspace documents .
For a list of Google Workspace documents and MIME type conversion formats,
see Export MIME types for Google Workspace
documents .
Handle an Open URL for app-specific documents
As mentioned in Configure a Drive UI
integration ,
your app receives template variables with information for your app to open
the file. Your app receives a default set of template variables
within a state parameter. The
default state information for an app-specific Open URL is:
{
"ids": [" ID "],
"resourceKeys":{" RESOURCE_KEYS ":" RESOURCE_KEYS "},
"action":"open",
"userId":" USER_ID "
}
This output includes the following values:
ID : The ID of the parent folder.
RESOURCE_KEYS : A JSON dictionary of file IDs mapped to
their respective resource keys.
open : The action being performed. The value is open when using an Open
URL.
USER_ID : The profile ID that uniquely identifies the user.
Your app must act on this request by following these steps:
Verify that the action field has a value of open and the ids field is
present.
Use the userId value to create a new session for the user. For more
information on signed-in users, see Users & new events .
Use the files.get method to check
permissions, fetch file metadata, and download the file content using
the ID values.
If resourceKeys was set on the request, set the
X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys .
The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.
Note: All apps, including apps opening files from shortcuts and third-party
shortcuts, should call the files.get method to check the user's permissions
for a document. Apps should warn read-only users when they're opening a file
they cannot edit or save (instead of letting them spend time editing, and then
displaying an error on save).
Handle an Open URL for Google Workspace documents
As mentioned in Configure a Drive UI
integration , your app receives a default set of
template variables within a state parameter. The default state information
for a Google Workspace Open URL is:
{
"exportIds" : [ " ID " ],
"resourceKeys" :{ " RESOURCE_KEYS " : " RESOURCE_KEYS " },
"action" : "open" ,
"userId" : " USER_ID "
}
This output includes the following values:
EXPORT_ID : A comma-separated list of file IDs being
exported. Used only when opening Google Workspace files.
RESOURCE_KEYS : A JSON dictionary of file IDs mapped to
their respective resource keys.
open : The action being performed. The value is open when using an Open
URL.
USER_ID : The profile ID that identifies the user.
Your app must act on this request by following these steps:
Verify that this is a request to open a file by detecting both the open
value in the state field and the presence of the exportIds field.
Use the files.get method to check
permissions, fetch file metadata, and determine the MIME type using the
EXPORT_ID values.
Convert the file content using the
files.export method. The following
code sample shows how to export a Google Workspace document to the
requested MIME type.
If resourceKey was set on the request, set the
X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys .
Java
drive/snippets/drive_v3/src/main/java/ExportPdf.java
View on GitHub
import com.google.api.client.googleapis.json.GoogleJsonResponseException ;
import com.google.api.client.http.HttpRequestInitializer ;
import com.google.api.client.http.javanet.NetHttpTransport ;
import com.google.api.client.json.gson.GsonFactory ;
import com.google.api.services.drive.Drive ;
import com.google.api.services.drive.DriveScopes ;
import com.google.auth.http.HttpCredentialsAdapter ;
import com.google.auth.oauth2.GoogleCredentials ;
import java.io.ByteArrayOutputStream ;
import java.io.IOException ;
import java.io.OutputStream ;
import java.util.Arrays ;
/* Class to demonstrate use-case of drive's export pdf. */
public class ExportPdf {
/**
* Download a Document file in PDF format.
*
* @param realFileId file ID of any workspace document format file.
* @return byte array stream if successful, {@code null} otherwise.
* @throws IOException if service account credentials file not found.
*/
public static ByteArrayOutputStream exportPdf ( String realFileId ) throws IOException {
// Load pre-authorized user credentials from the environment.
// TODO(developer) - See https://developers.google.com/identity for
// guides on implementing OAuth2 for your application.
GoogleCredentials credentials = GoogleCredentials . getApplicationDefault ()
. createScoped ( Arrays . asList ( DriveScopes . DRIVE_FILE ));
HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter (
credentials );
// Build a new authorized API client service.
Drive service = new Drive . Builder ( new NetHttpTransport (),
GsonFactory . getDefaultInstance (),
requestInitializer )
. setApplicationName ( "Drive samples" )
. build ();
OutputStream outputStream = new ByteArrayOutputStream ();
try {
service . files (). export ( realFileId , "application/pdf" )
. executeMediaAndDownloadTo ( outputStream );
return ( ByteArrayOutputStream ) outputStream ;
} catch ( GoogleJsonResponseException e ) {
// TODO(developer) - handle error appropriately
System . err . println ( "Unable to export file: " + e . getDetails ());
throw e ;
}
}
}
Python
drive/snippets/drive-v3/file_snippet/export_pdf.py
View on GitHub
import io
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload
def export_pdf ( real_file_id ):
"""Download a Document file in PDF format.
Args:
real_file_id : file ID of any workspace document format file
Returns : IO object with location
Load pre-authorized user credentials from the environment.
TODO(developer) - See https://developers.google.com/identity
for guides on implementing OAuth2 for the application.
"""
creds , _ = google . auth . default ()
try :
# create drive api client
service = build ( "drive" , "v3" , credentials = creds )
file_id = real_file_id
# pylint: disable=maybe-no-member
request = service . files () . export_media (
fileId = file_id , mimeType = "application/pdf"
)
file = io . BytesIO ()
downloader = MediaIoBaseDownload ( file , request )
done = False
while done is False :
status , done = downloader . next_chunk ()
print ( f "Download { int ( status . progress () * 100 ) } ." )
except HttpError as error :
print ( f "An error occurred: { error } " )
file = None
return file . getvalue ()
if __name__ == "__main__" :
export_pdf ( real_file_id = "1zbp8wAyuImX91Jt9mI-CAX_1TqkBLDEDcr2WeXBbKUY" )
Node.js
drive/snippets/drive_v3/file_snippets/export_pdf.js
View on GitHub
import { GoogleAuth } from 'google-auth-library' ;
import { google } from 'googleapis' ;
/**
* Exports a Google Doc as a PDF.
* @param {string} fileId The ID of the file to export.
* @return {Promise<number>} The status of the export request.
*/
async function exportPdf ( fileId ) {
// Authenticate with Google and get an authorized client.
// TODO (developer): Use an appropriate auth mechanism for your app.
const auth = new GoogleAuth ({
scopes : 'https://www.googleapis.com/auth/drive' ,
});
// Create a new Drive API client (v3).
const service = google . drive ({ version : 'v3' , auth });
// Export the file as a PDF.
const result = await service . files . export ({
fileId ,
mimeType : 'application/pdf' ,
});
// Print the status of the export.
console . log ( result . status );
return result . status ;
}
PHP
drive/snippets/drive_v3/src/DriveExportPdf.php
View on GitHub
< ?php
use Google\Client;
use Google\Service\Drive;
function exportPdf()
{
try {
$client = new Client();
$client->useApplicationDefaultCredentials();
$client->addScope(Drive::DRIVE);
$driveService = new Drive($client);
$realFileId = readline("Enter File Id: ");
$fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
$fileId = $realFileId;
$response = $driveService->files->export($fileId, 'application/pdf', array(
'alt' => 'media'));
$content = $response->getBody()->getContents();
return $content;
} catch(Exception $e) {
echo "Error Message: ".$e;
}
}
Display converted files as read-only or present a dialog letting the user to
save the file as the new file type.
The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.
Users & new events
Drive apps should treat all "open with" events as potential
sign-ins. Some users might have multiple accounts, so the user ID in the state
parameter might not match the current session. If the user ID in the state
parameter doesn't match the current session, end the current session for your
app and sign in as the requested user.
Related topics
In addition to opening an application from Google Drive UI, applications can
display a file picker to select content from within an app. For more
information, see the Google Picker .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
