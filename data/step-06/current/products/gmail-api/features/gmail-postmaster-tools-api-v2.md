---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.224Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Gmail Postmaster Tools API v2"
feature_slug: "gmail-postmaster-tools-api-v2"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
  - "https://developers.google.com/workspace/gmail/api/auth/scopes"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "gmail"
  - "postmaster"
  - "tools"
  - "api"
  - "v2"
  - "provides"
  - "access"
  - "to"
---

# Gmail Postmaster Tools API v2

Product: Gmail API
Coverage: LOW

## Step 02 Summary

Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations.

## Extended Definition

Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- [https://developers.google.com/workspace/gmail/api/auth/scopes](https://developers.google.com/workspace/gmail/api/auth/scopes)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Gmail API provides programmatic access to manage S/MIME email certificates for users in a Google Workspace domain.
- Authorize API access To authorize access to the Gmail API, use one of the following methods: Use a service account with domain-wide delegation of authority .
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ if not send as email : send as email = user id creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . list ( userId = user id , sendAsEmail = send as email ) . execute () ) except HttpError as error : print ( f "An error occurred during list: { error } " ) return None default cert id = None best cert id = ( None , datetime . datetime . fromtimestamp ( 0 )) if not expire dt : expire dt = datetime . datetime . now () if results and "smimeInfo" in results : for smime info in results [ "smimeInfo" ]: cert id = smime info [ "id" ] is default cert = smime info [ "isDefault" ] if is default cert : default cert id = cert id exp = datetime . datetime . fromtimestamp ( smime info [ "expiration" ] / 1000 ) if exp > expire dt : if exp > best cert id [ 1 ]: best cert id = ( cert id , exp ) else : if is default cert : default cert id = None if not default cert id : default id = best cert id [ 0 ] if not default id and cert filename : create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) results = insert smime info . insert smime info () if results : default id = results [ "id" ] if default id : try : pylint: disable=maybe-no-member service . users () . settings () . sendAs () . smimeInfo () . setDefault ( userId = user id , sendAsEmail = send as email , id = default id ) . execute () return default id except HttpError as error : print ( f "An error occurred during setDefault: { error } " ) else : return default cert id return None if name == " main " : update smime cert ( user id = "xyz" , send as email = None , cert filename = "xyz" , cert password = "xyz" , expire dt = None , ) Related topics Manage aliases and signatures with the Gmail API Choose Gmail API scopes Turn on hosted S/MIME for message encryption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) user id = "gduser1@workspacesamples.dev" smime info = create smime info . create smime info ( cert filename = "xyz" , cert password = "xyz" ) send as email = None if not send as email : send as email = user id pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . insert ( userId = user id , sendAsEmail = send as email , body = smime info ) . execute () ) print ( f 'Inserted certificate; id: { results [ "id" ] } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) results = None return results if name == " main " : insert smime info () Manage multiple users' certificates These code samples show how to manage certificates for multiple users in an organization in one batch call: Insert certificates from a CSV file The following is a sample CSV file that lists user IDs and the path to each user's certificate: $ cat certificates.csv user1@example.com,/path/to/user1 cert.p12,cert password 1 user2@example.com,/path/to/user2 cert.p12,cert password 2 user3@example.com,/path/to/user3 cert.p12,cert password 3 Java You can use the CreateSmimeInfo and InsertSmimeInfo samples to upload the certificates for the users specified in a CSV file: gmail/snippets/src/main/java/InsertCertFromCsv.java View on GitHub import com.google.api.services.gmail.model.SmimeInfo ; import java.io.File ; import org.apache.commons.csv.CSVFormat ; import org.apache.commons.csv.CSVParser ; import org.apache.commons.csv.CSVRecord ; / Class to demonstrate the use of Gmail Insert Certificate from CSV File / public class InsertCertFromCsv { / Upload S/MIME certificates based on the contents of a CSV file. <p>Each row of the CSV file should contain a user ID, path to the certificate, and the certificate password. @param csvFilename Name of the CSV file. / public static void insertCertFromCsv ( String csvFilename ) { try { File csvFile = new File ( csvFilename ); CSVParser parser = CSVParser . parse ( csvFile , java . nio . charset .

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can use the settings resource of the Gmail API to configure how Gmail handles POP and IMAP protocols: settings.getPop settings.updatePop settings.getImap settings.updateImap POP You can manage POP settings for an account using the PopSettings object.
- This document explains how to manage POP and IMAP protocols using the Gmail API.
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.

### Choose Gmail API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/auth/scopes](https://developers.google.com/workspace/gmail/api/auth/scopes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additional information that governs your use and access to Gmail APIs when you request to access user data can be found in the Google Workspace API user data and developer policy .
- Gmail API scopes To define the level of access granted to your app, you need to identify and declare authorization scopes .
- You can perform all other actions using less permissive scopes. https://www.googleapis.com/auth/gmail.readonly View your email messages and settings. https://www.googleapis.com/auth/gmail.compose Manage drafts and send emails. https://www.googleapis.com/auth/gmail.insert Add emails into your Gmail mailbox. https://www.googleapis.com/auth/gmail.modify Read, compose, and send emails from your Gmail account.
- For more information about Google API scopes, see Using OAuth 2.0 to Access Google APIs .

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as: Read-only mail extraction, indexing, and backup Automated or programmatic message sending Email account migration Email organization including filtering and sorting of messages Standardization of email signatures across an organization Common terms The following is a list of common terms used in this API: Delegator and Delegate A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization.
- The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail.
- Applications can "watch" a mailbox, and the Gmail API will send automatic webhooks or alerts whenever a change occurs (like a new email arriving), eliminating the need for the app to continuously poll the server for updates.
- To learn how to configure and run a Gmail API app, read the Quickstarts .

