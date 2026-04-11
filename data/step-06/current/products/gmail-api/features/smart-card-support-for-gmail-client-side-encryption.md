---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.229Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Smart card support for Gmail client-side encryption"
feature_slug: "smart-card-support-for-gmail-client-side-encryption"
latest_feature_date: "2025-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/auth/web-server"
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
keywords:
  - "smart"
  - "card"
  - "for"
  - "gmail"
  - "client"
  - "side"
  - "encryption"
  - "api"
---

# Smart card support for Gmail client-side encryption

Product: Gmail API
Coverage: LOW

## Step 02 Summary

Gmail API supports using smart cards for client-side encryption in Google Workspace organizations that use hardware key encryption.

## Extended Definition

Gmail API supports using smart cards for client-side encryption in Google Workspace organizations that use hardware key encryption.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/auth/web-server](https://developers.google.com/workspace/gmail/api/auth/web-server)
- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)

## Supporting Pages

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users.settings.cse.keypairs Methods create POST /gmail/v1/users/{userId}/settings/cse/keypairs Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. disable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable Turns off a client-side encryption key pair. enable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable Turns on a client-side encryption key pair that was turned off. get GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} Retrieves an existing client-side encryption key pair. list GET /gmail/v1/users/{userId}/settings/cse/keypairs Lists client-side encryption key pairs for an authenticated user. obliterate POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate Deletes a client-side encryption key pair permanently and immediately.
- REST Resource: v1.users.settings.cse.identities Methods create POST /gmail/v1/users/{userId}/settings/cse/identities Creates and configures a client-side encryption identity that's authorized to send mail from the user account. delete DELETE /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Deletes a client-side encryption identity. get GET /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Retrieves a client-side encryption identity configuration. list GET /gmail/v1/users/{userId}/settings/cse/identities Lists the client-side encrypted identities for an authenticated user. patch PATCH /gmail/v1/users/{userId}/settings/cse/identities/{emailAddress} Associates a different key pair with an existing client-side encryption identity.
- REST Resource: v1.users REST Resource: v1.users.drafts REST Resource: v1.users.history REST Resource: v1.users.labels REST Resource: v1.users.messages REST Resource: v1.users.messages.attachments REST Resource: v1.users.settings REST Resource: v1.users.settings.cse.identities REST Resource: v1.users.settings.cse.keypairs REST Resource: v1.users.settings.delegates REST Resource: v1.users.settings.filters REST Resource: v1.users.settings.forwardingAddresses REST Resource: v1.users.settings.sendAs REST Resource: v1.users.settings.sendAs.smimeInfo REST Resource: v1.users.threads Service: gmail.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://gmail.googleapis.com REST Resource: v1.users Methods getProfile GET /gmail/v1/users/{userId}/profile Gets the current user's Gmail profile. stop POST /gmail/v1/users/{userId}/stop Stop receiving push notifications for the given user mailbox. watch POST /gmail/v1/users/{userId}/watch Set up or update a push notification watch on the given user mailbox.

### Implement server-side authorization \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/auth/web-server](https://developers.google.com/workspace/gmail/api/auth/web-server)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python Replace CLIENTSECRETS LOCATION value with the location of your credentials.json file. import logging from oauth2client.client import flow from clientsecrets from oauth2client.client import FlowExchangeError from oauth2client.client import Credentials # Needed for type hinting/usage in comments from googleapiclient.discovery import build from googleapiclient import errors as google api errors import httplib2 Path to credentials.json which should contain a JSON document such as: { "web": { "client id": "[[YOUR CLIENT ID]]", "client secret": "[[YOUR CLIENT SECRET]]", "redirect uris": [], "auth uri": "https://accounts.google.com/o/oauth2/auth", "token uri": "https://accounts.google.com/o/oauth2/token" } } CLIENTSECRETS LOCATION = '<PATH/TO/CLIENT SECRETS.JSON>' REDIRECT URI = '<YOUR REGISTERED REDIRECT URI>' SCOPES = [ 'https://www.googleapis.com/auth/gmail.readonly' , 'https://www.googleapis.com/auth/userinfo.email' , 'https://www.googleapis.com/auth/userinfo.profile' , Add other requested scopes. ] class GetCredentialsException ( Exception ): """Error raised when an error occurred while retrieving credentials.
- Raises: CodeExchangeException: an error occurred. """ flow = flow from clientsecrets ( CLIENTSECRETS LOCATION , ' ' . join ( SCOPES )) flow . redirect uri = REDIRECT URI try : credentials = flow . step2 exchange ( authorization code ) return credentials except FlowExchangeError as error : logging . error ( 'An error occurred: %s ' , error ) raise CodeExchangeException ( None ) def get user info ( credentials ): """Send a request to the UserInfo API to retrieve the user's information.
- TODO: Redirect the user to the authorization URL. raise NotImplementedError () Next steps Once you are comfortable authorizing Gmail API requests, you're ready to start handling messages, threads, and labels, as described in the Developers Guides sections.
- Contents Create a client ID and client secret To get started using Gmail API, you need to first use the setup tool , which guides you through creating a project in the Google API Console and enabling the API.

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ if not send as email : send as email = user id creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . list ( userId = user id , sendAsEmail = send as email ) . execute () ) except HttpError as error : print ( f "An error occurred during list: { error } " ) return None default cert id = None best cert id = ( None , datetime . datetime . fromtimestamp ( 0 )) if not expire dt : expire dt = datetime . datetime . now () if results and "smimeInfo" in results : for smime info in results [ "smimeInfo" ]: cert id = smime info [ "id" ] is default cert = smime info [ "isDefault" ] if is default cert : default cert id = cert id exp = datetime . datetime . fromtimestamp ( smime info [ "expiration" ] / 1000 ) if exp > expire dt : if exp > best cert id [ 1 ]: best cert id = ( cert id , exp ) else : if is default cert : default cert id = None if not default cert id : default id = best cert id [ 0 ] if not default id and cert filename : create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) results = insert smime info . insert smime info () if results : default id = results [ "id" ] if default id : try : pylint: disable=maybe-no-member service . users () . settings () . sendAs () . smimeInfo () . setDefault ( userId = user id , sendAsEmail = send as email , id = default id ) . execute () return default id except HttpError as error : print ( f "An error occurred during setDefault: { error } " ) else : return default cert id return None if name == " main " : update smime cert ( user id = "xyz" , send as email = None , cert filename = "xyz" , cert password = "xyz" , expire dt = None , ) Related topics Manage aliases and signatures with the Gmail API Choose Gmail API scopes Turn on hosted S/MIME for message encryption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) user id = "gduser1@workspacesamples.dev" smime info = create smime info . create smime info ( cert filename = "xyz" , cert password = "xyz" ) send as email = None if not send as email : send as email = user id pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . insert ( userId = user id , sendAsEmail = send as email , body = smime info ) . execute () ) print ( f 'Inserted certificate; id: { results [ "id" ] } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) results = None return results if name == " main " : insert smime info () Manage multiple users' certificates These code samples show how to manage certificates for multiple users in an organization in one batch call: Insert certificates from a CSV file The following is a sample CSV file that lists user IDs and the path to each user's certificate: $ cat certificates.csv user1@example.com,/path/to/user1 cert.p12,cert password 1 user2@example.com,/path/to/user2 cert.p12,cert password 2 user3@example.com,/path/to/user3 cert.p12,cert password 3 Java You can use the CreateSmimeInfo and InsertSmimeInfo samples to upload the certificates for the users specified in a CSV file: gmail/snippets/src/main/java/InsertCertFromCsv.java View on GitHub import com.google.api.services.gmail.model.SmimeInfo ; import java.io.File ; import org.apache.commons.csv.CSVFormat ; import org.apache.commons.csv.CSVParser ; import org.apache.commons.csv.CSVRecord ; / Class to demonstrate the use of Gmail Insert Certificate from CSV File / public class InsertCertFromCsv { / Upload S/MIME certificates based on the contents of a CSV file. <p>Each row of the CSV file should contain a user ID, path to the certificate, and the certificate password. @param csvFilename Name of the CSV file. / public static void insertCertFromCsv ( String csvFilename ) { try { File csvFile = new File ( csvFilename ); CSVParser parser = CSVParser . parse ( csvFile , java . nio . charset .
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- MIN ; if ( expireTime == null ) { expireTime = LocalDateTime . now (); } if ( listResults != null && listResults . getSmimeInfo () != null ) { for ( SmimeInfo smimeInfo : listResults . getSmimeInfo ()) { String certId = smimeInfo . getId (); boolean isDefaultCert = smimeInfo . getIsDefault (); if ( isDefaultCert ) { defaultCertId = certId ; } LocalDateTime exp = LocalDateTime . ofInstant ( Instant . ofEpochMilli ( smimeInfo . getExpiration ()), ZoneId . systemDefault ()); if ( exp . isAfter ( expireTime )) { if ( exp . isAfter ( bestCertExpire )) { bestCertId = certId ; bestCertExpire = exp ; } } else { if ( isDefaultCert ) { defaultCertId = null ; } } } } if ( defaultCertId == null ) { String defaultId = bestCertId ; if ( defaultId == null && certFilename != null ) { SmimeInfo smimeInfo = CreateSmimeInfo . createSmimeInfo ( certFilename , certPassword ); SmimeInfo insertResults = InsertSmimeInfo . insertSmimeInfo ( userId , sendAsEmail , smimeInfo ); if ( insertResults != null ) { defaultId = insertResults . getId (); } } if ( defaultId != null ) { try { service . users (). settings (). sendAs (). smimeInfo (). setDefault ( userId , sendAsEmail , defaultId ) . execute (); return defaultId ; } catch ( IOException e ) { System . err . printf ( "An error occured during setDefault: %s" , e ); } } } else { return defaultCertId ; } return null ; } } Python gmail/snippet/smime snippets/update smime cert.py View on GitHub from datetime import datetime import create smime info import google.auth import insert smime info from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update smime cert ( user id , send as email , cert filename , cert password , expire dt ): """Update S/MIME certificates for the user.

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) address = { "forwardingEmail" : "gduser1@workspacesamples.dev" } pylint: disable=E1101 result = ( service . users () . settings () . forwardingAddresses () . create ( userId = "me" , body = address ) . execute () ) if result . get ( "verificationStatus" ) == "accepted" : body = { "emailAddress" : result . get ( "forwardingEmail" ), "enabled" : True , "disposition" : "trash" , } pylint: disable=E1101 result = ( service . users () . settings () . updateAutoForwarding ( userId = "me" , body = body ) . execute () ) print ( f "Forwarding is enabled : { result } " ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result if name == " main " : enable forwarding () To disable auto-forwarding, call the updateAutoForwarding method and set the enabled field on the AutoForwarding object to false .
- GMAIL SETTINGS SHARING ); HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter ( credentials ); // Create the gmail API client Gmail service = new Gmail .

