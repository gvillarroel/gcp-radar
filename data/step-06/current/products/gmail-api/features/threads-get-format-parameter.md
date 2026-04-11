---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.253Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "threads.get format parameter"
feature_slug: "threads-get-format-parameter"
latest_feature_date: "2014-10-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/get"
  - "https://developers.google.com/workspace/gmail/api/guides/threads"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
keywords:
  - "threads"
  - "get"
  - "format"
  - "parameter"
  - "the"
  - "method"
  - "supports"
  - "full"
---

# threads.get format parameter

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The threads.get method supports full, metadata, and minimal response formats, but not raw.

## Extended Definition

The threads.get method supports full, metadata, and minimal response formats, but not raw.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/get)
- [https://developers.google.com/workspace/gmail/api/guides/threads](https://developers.google.com/workspace/gmail/api/guides/threads)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)

## Supporting Pages

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- Retrieve the S/MIME keys for an alias Use the settings.sendAs.smimeInfo.get method on the settings.sendAs.smimeInfo resource to return the specific S/MIME keys for a specific send-as alias for a user.
- Identify the target alias using the following path parameters: userId : The user's email address.
- Identify the target alias using the following path parameters: userId : The user's email address.

### Method: users.drafts.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/get)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query parameters Parameters format enum ( Format ) The format to return the draft in.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
- Authorization scopes Requires one of the following OAuth scopes: https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.readonly For more information, see the OAuth 2.0 Overview .
- Home Google Workspace Gmail Reference Send feedback Method: users.drafts.get Stay organized with collections Save and categorize content based on your preferences.

### Manage threads \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/threads](https://developers.google.com/workspace/gmail/api/guides/threads)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) pylint: disable=maybe-no-member pylint: disable:R1710 threads = ( service . users () . threads () . list ( userId = "me" ) . execute () . get ( "threads" , []) ) for thread in threads : tdata = ( service . users () . threads () . get ( userId = "me" , id = thread [ "id" ]) . execute () ) nmsgs = len ( tdata [ "messages" ]) skip if <3 msgs in thread if nmsgs > 2 : msg = tdata [ "messages" ][ 0 ][ "payload" ] subject = "" for header in msg [ "headers" ]: if header [ "name" ] == "Subject" : subject = header [ "value" ] break if subject : # skip if no Subject line print ( f "- { subject } , { nmsgs } " ) return threads except HttpError as error : print ( f "An error occurred: { error } " ) if name == " main " : show chatty threads () You can also filter threads using the same query parameters as those used for the messages resource.
- The following code sample shows how to use the threads.get and threads.list methods in a sample that retrieves the most chatty threads in your inbox.
- You can retrieve a list of threads using the threads.list method, or retrieve a specific thread with the threads.get method.
- The threads.list method fetches all thread IDs, then threads.get grabs all messages in each thread.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Step 1: Start a resumable session To initiate a resumable upload, make a POST or PUT request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/gmail/v1/users/ userId /messages/send?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.
- To use multipart upload, make a POST or PUT request to the method's /upload URI and add the query parameter uploadType=multipart , for example: POST https://www.googleapis.com/upload/gmail/v1/users/ userId /messages/send?uploadType=multipart The top-level HTTP headers to use when making a multipart upload request include: Content-Type .
- The specific characteristics of the data you can upload are specified on the reference page for any method that supports media uploads: Maximum upload file size : The maximum amount of data you can store with this method.
- To use simple upload, make a POST or PUT request to the method's /upload URI and add the query parameter uploadType=media .

