---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.304Z"
product_name: "Sheets API"
product_slug: "sheets-api"
feature_name: "Google Sheets API smart chips support"
feature_slug: "google-sheets-api-smart-chips-support"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/sheets/api/guides/chips"
  - "https://developers.google.com/workspace/sheets/api/guides/create"
  - "https://developers.google.com/workspace/sheets/api/guides/migration"
  - "https://developers.google.com/workspace/sheets/api/guides/concepts"
keywords:
  - "sheets"
  - "api"
  - "smart"
  - "chips"
  - "the"
  - "now"
  - "supports"
  - "creating"
---

# Google Sheets API smart chips support

Product: Sheets API
Coverage: MEDIUM

## Step 02 Summary

The Google Sheets API now supports creating, updating, and reading Google Drive and People smart chips.

## Extended Definition

The Google Sheets API now supports creating, updating, and reading Google Drive and People smart chips.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/sheets/api/guides/chips](https://developers.google.com/workspace/sheets/api/guides/chips)
- [https://developers.google.com/workspace/sheets/api/guides/create](https://developers.google.com/workspace/sheets/api/guides/create)
- [https://developers.google.com/workspace/sheets/api/guides/migration](https://developers.google.com/workspace/sheets/api/guides/migration)
- [https://developers.google.com/workspace/sheets/api/guides/concepts](https://developers.google.com/workspace/sheets/api/guides/concepts)

## Supporting Pages

### Smart chips \_|\_ Google Sheets \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/sheets/api/guides/chips](https://developers.google.com/workspace/sheets/api/guides/chips)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- This guide describes how and why to use the Google Sheets API to add and manage smart chips in your spreadsheets.
- Add a smart chip Chips are represented as chip runs, which are part of CellData , so you can insert a chip using the existing spreadsheets.batchUpdate method by supplying an UpdateCellsRequest or AppendCellsRequest .
- Use smart chips with other Sheets features Tables : Smart chips can be used as a table column type to track project owners (People chip), or related documents (File chip).
- With smart chips, you can bring rich, interactive data from other Google Workspace applications directly into Sheets.

### Create and manage spreadsheets \_|\_ Google Sheets \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/sheets/api/guides/create](https://developers.google.com/workspace/sheets/api/guides/create)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Sheets samples" ) . build (); // Create new spreadsheet with a title Spreadsheet spreadsheet = new Spreadsheet () . setProperties ( new SpreadsheetProperties () . setTitle ( title )); spreadsheet = service . spreadsheets (). create ( spreadsheet ) . setFields ( "spreadsheetId" ) . execute (); // Prints the new spreadsheet id System . out . println ( "Spreadsheet ID: " + spreadsheet . getSpreadsheetId ()); return spreadsheet . getSpreadsheetId (); } } JavaScript sheets/snippets/sheets create.js View on GitHub function create ( title , callback ) { try { gapi . client . sheets . spreadsheets . create ({ properties : { title : title , }, }). then (( response ) = > { if ( callback ) callback ( response ); console . log ( 'Spreadsheet ID: ' + response . result . spreadsheetId ); }); } catch ( err ) { document . getElementById ( 'content' ). innerText = err . message ; return ; } } Node.js sheets/snippets/sheets create.js View on GitHub import { GoogleAuth } from 'google-auth-library' ; import { google } from 'googleapis' ; / Creates a new Google Spreadsheet. @param {string} title The title of the new spreadsheet. @return {string} The ID of the created spreadsheet. / async function create ( title ) { // Authenticate with Google and get an authorized client. const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/spreadsheets' , }); // Create a new Sheets API client. const service = google . sheets ({ version : 'v4' , auth }); // The resource body for creating a new spreadsheet. const resource = { properties : { title , }, }; // Create the new spreadsheet. const spreadsheet = await service . spreadsheets . create ({ resource , fields : 'spreadsheetId' , }); // Log the ID of the new spreadsheet. console . log ( Spreadsheet ID: ${ spreadsheet . data . spreadsheetId } ); return spreadsheet . data . spreadsheetId ; } PHP sheets/snippets/src/SpreadsheetCreate.php View on GitHub < ?php use Google\Client; use Google\Service\Drive; use Google\Service\Sheets\SpreadSheet; / create an empty spreadsheet / function create($title) { / Load pre-authorized user credentials from the environment.
- Spreadsheets . create ( sheet ); return spreadsheet . spreadsheetId ; } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } }; Java sheets/snippets/src/main/java/Create.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.sheets.v4.Sheets ; import com.google.api.services.sheets.v4.SheetsScopes ; import com.google.api.services.sheets.v4.model.Spreadsheet ; import com.google.api.services.sheets.v4.model.SpreadsheetProperties ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; import java.util.Collections ; / Class to demonstrate the use of Spreadsheet Create API / public class Create { / Create a new spreadsheet. @param title - the name of the sheet to be created. @return newly created spreadsheet id @throws IOException - if credentials file not found. / public static String createSpreadsheet ( String title ) throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for your application. / $client = new Google\Client(); $client->useApplicationDefaultCredentials(); $client->addScope(Google\Service\Drive::DRIVE); $service = new Google Service Sheets($client); try{ $spreadsheet = new Google Service Sheets Spreadsheet([ 'properties' => [ 'title' => $title ] ]); $spreadsheet = $service->spreadsheets->create($spreadsheet, [ 'fields' => 'spreadsheetId' ]); printf("Spreadsheet ID: %s\n", $spreadsheet->spreadsheetId); return $spreadsheet->spreadsheetId; } catch(Exception $e) { // TODO(developer) - handle error appropriately echo 'Message: ' .$e->getMessage(); } } Python sheets/snippets/sheets create.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def create ( title ): """ Creates the Sheet the user has access to.
- Apps Script sheets/api/spreadsheet snippets.gs View on GitHub / Creates a new sheet using the sheets advanced services @param {string} title the name of the sheet to be created @returns {string} the spreadsheet ID / Snippets . prototype . create = ( title ) = > { // This code uses the Sheets Advanced Service, but for most use cases // the built-in method SpreadsheetApp.create() is more appropriate. try { const sheet = Sheets . newSpreadsheet (); sheet . properties = Sheets . newSpreadsheetProperties (); sheet . properties . title = title ; const spreadsheet = Sheets .

### Migrate from Sheets API v3 \_|\_ Google Sheets \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/sheets/api/guides/migration](https://developers.google.com/workspace/sheets/api/guides/migration)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Sheets API v4 spreadsheets.get method provides access to this information, and much more. v3 API The worksheet feed is accessible from this API endpoint (using an appropriate authorization header): GET https://spreadsheets.google.com/feeds/worksheets/ spreadsheetId /private/full The response to this request has a structure similar to this, with each sheet's data contained in a separate <entry> : < feed xmlns = "http://www.w3.org/2005/Atom" xmlns : openSearch = "http://a9.com/-/spec/opensearch/1.1/" xmlns : gs = "http://schemas.google.com/spreadsheets/2006" xmlns : gd = "http://schemas.google.com/g/2005" gd : etag = ' W / "D0cERnk-eip7ImA9WBBXGEg." ' > < id>https : //spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full</id> < updated>2006 - 11 - 17 T18 : 23 : 45.173 Z < / updated > < title type = "text" > Groceries R Us < / title > < link rel = "alternate" type = "text/html" href = "https://spreadsheets.google.com/ccc?key=spreadsheetId" / > < link rel = "http://schemas.google.com/g/2005#feed" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full" / > < link rel = "self" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full" / > < link rel = "http://schemas.google.com/g/2005#post" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full" / > < author > < name>Fitzwilliam Darcy < / name > < email>fitz @ example . com < / email > < / author > < openSearch : totalResults>1 < / openSearch : totalResults > < openSearch : startIndex>1 < / openSearch : startIndex > < openSearch : itemsPerPage>1 < / openSearch : itemsPerPage > < entry gd : etag = ' "YDwqeyI." ' > < id>https : //spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId</id> < updated>2006 - 11 - 17 T18 : 23 : 45.173 Z < / updated > < title type = "text" > Sheet1 < / title > < content type = "text" > Sheet1 < / content > < link rel = "http://schemas.google.com/spreadsheets/2006#listfeed" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full" / > < link rel = "http://schemas.google.com/spreadsheets/2006#cellsfeed" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full" / > < link rel = "self" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId" / > < link rel = "edit" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version" / > < gs : rowCount>100 < / gs : rowCount > < gs : colCount>20 < / gs : colCount > < / entry > < / feed > v4 API The spreadsheets.get method can be used to acquire sheet properties and other metadata—much more than what is available using the Sheets API v3.
- For example: PUT https://spreadsheets.google.com/feeds/worksheets/ spreadsheetId /private/full/ sheetId /version < entry > < id > https : //spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId < / id > < updated>2007 - 07 - 30 T18 : 51 : 30.666 Z < / updated > < category scheme = "http://schemas.google.com/spreadsheets/2006" term = "http://schemas.google.com/spreadsheets/2006#worksheet" / > < title type = "text" > Expenses < / title > < content type = "text" > Expenses < / content > < link rel = "http://schemas.google.com/spreadsheets/2006#listfeed" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full" / > < link rel = "http://schemas.google.com/spreadsheets/2006#cellsfeed" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full" / > < link rel = "self" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId" / > < link rel = "edit" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version" / > < gs : rowCount>45 < / gs : rowCount > < gs : colCount>15 < / gs : colCount > < / entry > v4 API To update the size, title, and other sheet properties, make an updateSheetProperties request in the spreadsheets.batchUpdate method.
- For example: PUT https://spreadsheets.google.com/feeds/list/ spreadsheetId / sheetId /private/full/ rowId /version < entry gd : etag = ' "S0wCTlpIIip7ImA0X0QI" ' > < id>rowId < / id > < updated>2006 - 11 - 17 T18 : 23 : 45.173 Z < / updated > < category scheme = "http://schemas.google.com/spreadsheets/2006" term = "http://schemas.google.com/spreadsheets/2006#list" / > < title type = "text" > Bingley < / title > < content type = "text" > Hours : 10 , Items : 2 , IPM : 0.0033 < / content > < link rel = "self" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId" / > < link rel = "edit" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId/version" / > < gsx : name>Bingley < / gsx : name > < gsx : hours>20 < / gsx : hours > < gsx : items>4 < / gsx : items > < gsx : ipm>0 .0033 < / gsx : ipm > < / entry > v4 API With Sheets API v4, you can edit a row using the A1 notation of the row you wish to edit and issuing a spreadsheets.values.update request to overwrite that row.
- For example, a response may include cell entries similar in structure to the following: < entry gd : etag = ' "ImB5CBYSRCp7" ' > < id>https : //spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4</id> < updated>2006 - 11 - 17 T18 : 27 : 32.543 Z < / updated > < category scheme = "http://schemas.google.com/spreadsheets/2006" term = "http://schemas.google.com/spreadsheets/2006#cell" / > < title type = "text" > D4 < / title > < content type = "text" > 5 < / content > < link rel = "self" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4" / > < link rel = "edit" type = "application/atom+xml" href = "https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4/srevc" / > < gs : cell row = "4" col = "4" inputValue = "=FLOOR(C4/(B4 60),.0001)" numericValue = "5.0" > 5 < / gs : cell > < / entry > v4 API Retrieve cell data by calling a spreadsheets.values.get or spreadsheets.values.batchGet method for the range or ranges of interest, respectively.

### Google Sheets API Overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/sheets/api/guides/concepts](https://developers.google.com/workspace/sheets/api/guides/concepts)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Sheets API lets you: Create spreadsheets Read and write spreadsheet cell values Update spreadsheet formatting Manage Connected Sheets The following is a list of common terms used in the Sheets API: Spreadsheet The primary object in Google Sheets.
- The Google Sheets API is a RESTful interface that lets you read and modify a spreadsheet's data.
- To learn how to configure and run a Sheets API app, try the JavaScript quickstart .
- Spreadsheet IDs are stable, even if the spreadsheet name changes. https://docs.google.com/spreadsheets/d/ SPREADSHEET ID /edit?gid= SHEET ID #gid= SHEET ID Sheet A page or tab within a spreadsheet.

