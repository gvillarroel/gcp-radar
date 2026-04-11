---
title: "Create and send draft emails \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/drafts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/drafts
  title: "Create and send draft emails \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Create and send draft emails
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to create, update, and send draft emails using the
Gmail API.
Email drafts represent unsent messages with the DRAFT system label applied.
The message contained within the draft cannot be edited once created, but it can
be replaced. In this sense, the
drafts resource is a
container that provides a stable ID because the underlying message IDs change
every time the message is replaced.
The messages resource
inside a draft has similar behavior to other messages except for the following
differences:
Draft messages cannot have any label other than the DRAFT system label.
When the draft is sent, the draft is automatically deleted and a new message
with an updated ID is created with the SENT system label. This message is
returned in the
drafts.send
method response.
Create drafts
Your app can create drafts using the
drafts.create
method. To create a draft:
Create a MIME message that complies with RFC
2822 .
Convert the message to a base64URL encoded string.
Call the drafts.create method, setting the value of the
messages.raw
field to the encoded string.
The following code samples demonstrate the process:
Java
gmail/snippets/src/main/java/CreateDraft.java
View on GitHub
import com.google.api.client.googleapis.json.GoogleJsonError ;
import com.google.api.client.googleapis.json.GoogleJsonResponseException ;
import com.google.api.client.http.HttpRequestInitializer ;
import com.google.api.client.http.javanet.NetHttpTransport ;
import com.google.api.client.json.gson.GsonFactory ;
import com.google.api.services.gmail.Gmail ;
import com.google.api.services.gmail.GmailScopes ;
import com.google.api.services.gmail.model.Draft ;
import com.google.api.services.gmail.model.Message ;
import com.google.auth.http.HttpCredentialsAdapter ;
import com.google.auth.oauth2.GoogleCredentials ;
import java.io.ByteArrayOutputStream ;
import java.io.IOException ;
import java.util.Properties ;
import javax.mail.MessagingException ;
import javax.mail.Session ;
import javax.mail.internet.InternetAddress ;
import javax.mail.internet.MimeMessage ;
import org.apache.commons.codec.binary.Base64 ;
/* Class to demonstrate the use of Gmail Create Draft API */
public class CreateDraft {
/**
* Create a draft email.
*
* @param fromEmailAddress - Email address to appear in the from: header
* @param toEmailAddress - Email address of the recipient
* @return the created draft, {@code null} otherwise.
* @throws MessagingException - if a wrongly formatted address is encountered.
* @throws IOException - if service account credentials file not found.
*/
public static Draft createDraftMessage ( String fromEmailAddress ,
String toEmailAddress )
throws MessagingException , IOException {
/* Load pre-authorized user credentials from the environment.
TODO(developer) - See https://developers.google.com/identity for
guides on implementing OAuth2 for your application.*/
GoogleCredentials credentials = GoogleCredentials . getApplicationDefault ()
. createScoped ( GmailScopes . GMAIL_COMPOSE );
HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter ( credentials );
// Create the gmail API client
Gmail service = new Gmail . Builder ( new NetHttpTransport (),
GsonFactory . getDefaultInstance (),
requestInitializer )
. setApplicationName ( "Gmail samples" )
. build ();
// Create the email content
String messageSubject = "Test message" ;
String bodyText = "lorem ipsum." ;
// Encode as MIME message
Properties props = new Properties ();
Session session = Session . getDefaultInstance ( props , null );
MimeMessage email = new MimeMessage ( session );
email . setFrom ( new InternetAddress ( fromEmailAddress ));
email . addRecipient ( javax . mail . Message . RecipientType . TO ,
new InternetAddress ( toEmailAddress ));
email . setSubject ( messageSubject );
email . setText ( bodyText );
// Encode and wrap the MIME message into a gmail message
ByteArrayOutputStream buffer = new ByteArrayOutputStream ();
email . writeTo ( buffer );
byte [] rawMessageBytes = buffer . toByteArray ();
String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes );
Message message = new Message ();
message . setRaw ( encodedEmail );
try {
// Create the draft message
Draft draft = new Draft ();
draft . setMessage ( message );
draft = service . users (). drafts (). create ( "me" , draft ). execute ();
System . out . println ( "Draft id: " + draft . getId ());
System . out . println ( draft . toPrettyString ());
return draft ;
} catch ( GoogleJsonResponseException e ) {
// TODO(developer) - handle error appropriately
GoogleJsonError error = e . getDetails ();
if ( error . getCode () == 403 ) {
System . err . println ( "Unable to create draft: " + e . getMessage ());
} else {
throw e ;
}
}
return null ;
}
}
Python
gmail/snippet/send mail/create_draft.py
View on GitHub
import base64
from email.message import EmailMessage
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
def gmail_create_draft ():
"""Create and insert a draft email.
Print the returned draft's message and id.
Returns: Draft object, including draft id and message meta data.
Load pre-authorized user credentials from the environment.
TODO(developer) - See https://developers.google.com/identity
for guides on implementing OAuth2 for the application.
"""
creds , _ = google . auth . default ()
try :
# create gmail api client
service = build ( "gmail" , "v1" , credentials = creds )
message = EmailMessage ()
message . set_content ( "This is automated draft mail" )
message [ "To" ] = "gduser1@workspacesamples.dev"
message [ "From" ] = "gduser2@workspacesamples.dev"
message [ "Subject" ] = "Automated draft"
# encoded message
encoded_message = base64 . urlsafe_b64encode ( message . as_bytes ()) . decode ()
create_message = { "message" : { "raw" : encoded_message }}
# pylint: disable=E1101
draft = (
service . users ()
. drafts ()
. create ( userId = "me" , body = create_message )
. execute ()
)
print ( f 'Draft id: { draft [ "id" ] } \n Draft message: { draft [ "message" ] } ' )
except HttpError as error :
print ( f "An error occurred: { error } " )
draft = None
return draft
if __name__ == "__main__" :
gmail_create_draft ()
cURL
curl --request POST \
'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \
--header 'Authorization: Bearer ACCESS_TOKEN " \
--header ' Accept: application/json ' \
--header ' Content-Type: application/json ' \
--data ' { "message" : { "raw" : " MESSAGE " }} '
Replace the following:
ACCESS_TOKEN : the access token that grants access to
the API.
MESSAGE : the RFC
2822 formatted MIME message,
encoded as base64URL.
Update drafts
Similar to creating a draft, to update a draft you must supply a drafts
resource in the body of your request with the messages.raw field set to a
base64URL encoded string containing the MIME message. Because messages cannot be
updated, the message contained in the draft is destroyed and replaced by the new
MIME message supplied in the update request.
You can retrieve the current MIME message contained in the draft by calling the
drafts.get method
with the query parameter format=raw .
For more information, see the
drafts.update
method.
Send drafts
When sending a draft, you can send it as-is, or you can provide updates in the
send request.
To update the draft when sending, supply a drafts resource in the request body
of the drafts.send
method. In the drafts resource, you must specify the draft
id of
the draft to be sent and set the messages.raw field to the new MIME message
encoded as a base64URL string.
For information on sending a Gmail message, see Send
messages .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
