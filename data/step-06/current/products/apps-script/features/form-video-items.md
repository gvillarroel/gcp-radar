---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.620Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Form video items"
feature_slug: "form-video-items"
latest_feature_date: "2013-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/youtube-analytics"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/youtube"
keywords:
  - "form"
  - "video"
  - "items"
  - "formapp"
  - "can"
  - "add"
  - "youtube"
  - "forms"
---

# Form video items

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

FormApp can add YouTube video items to forms.

## Extended Definition

FormApp can add YouTube video items to forms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/youtube-analytics](https://developers.google.com/apps-script/advanced/youtube-analytics)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/youtube](https://developers.google.com/apps-script/advanced/youtube)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
- November 23, 2016 Feature Added forms validation classes for check boxes , generic data , grid items , paragraph text items , and text items .
- February 13, 2018 Feature The Slides service has been extended with the following new methods: Layout.insertGroup(group) Layout.insertImage(image) Layout.insertLine(line) Layout.insertPageElement(pageElement) Layout.insertShape(shape) Layout.insertSheetsChart(sheetsChart) Layout.insertTable(table) Layout.insertVideo(video) Layout.insertWordArt(wordArt) Master.insertGroup(group) Master.insertImage(image) Master.insertLine(line) Master.insertPageElement(pageElement) Master.insertShape(shape) Master.insertSheetsChart(sheetsChart) Master.insertTable(table) Master.insertVideo(video) Master.insertWordArt(wordArt) Page.insertGroup(group) Page.insertImage(image) Page.insertLine(line) Page.insertPageElement(pageElement) Page.insertShape(shape) Page.insertSheetsChart(sheetsChart) Page.insertTable(table) Page.insertVideo(video) Page.insertWordArt(wordArt) Presentation.appendSlide(slide) Presentation.insertSlide(insertionIndex, slide) Slide.insertGroup(group) Slide.insertImage(image) Slide.insertLine(line) Slide.insertPageElement(pageElement) Slide.insertShape(shape) Slide.insertSheetsChart(sheetsChart) Slide.insertTable(table) Slide.insertVideo(video) Slide.insertWordArt(wordArt) TextRange.appendRange(textRange) TextRange.appendRange(textRange, matchSourceFormatting) TextRange.insertRange(startOffset, textRange) TextRange.insertRange(startOffset, textRange, matchSourceFormatting) The Spreadsheet service has been extended with the following new enum class and method: CopyPasteType , an enum class describing paste types.

### YouTube Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/youtube](https://developers.google.com/apps-script/advanced/youtube)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PlaylistItems . list ( "snippet" , { playlistId : playlistId , maxResults : 25 , pageToken : nextPageToken , }); if ( ! playlistResponse playlistResponse . items . length === 0 ) { console . log ( "No Playlist found." ); break ; } for ( let j = 0 ; j < playlistResponse . items . length ; j ++ ) { const playlistItem = playlistResponse . items [ j ]; console . log ( "[%s] Title: %s" , playlistItem . snippet . resourceId . videoId , playlistItem . snippet . title , ); } nextPageToken = playlistResponse . nextPageToken ; } while ( nextPageToken ); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with err %s" , err . message ); } } Subscribe to channel This sample subscribes the user to the Google Developers channel on YouTube. advanced/youtube.gs View on GitHub / This sample subscribes the user to the Google Developers channel on YouTube. @see https://developers.google.com/youtube/v3/docs/subscriptions/insert / function addSubscription () { // Replace this channel ID with the channel ID you want to subscribe to const channelId = "UC x5XG1OV2P6uZZ5FSM9Ttw" ; const resource = { snippet : { resourceId : { kind : "youtube#channel" , channelId : channelId , }, }, }; try { const response = YouTube .
- Search . list ( "id,snippet" , { q : "dogs" , maxResults : 25 , }); if ( results === null ) { console . log ( "Unable to search videos" ); return ; } for ( const item of results . items ) { console . log ( "[%s] Title: %s" , item . id . videoId , item . snippet . title ); } } catch ( err ) { // TODO (developer) - Handle exceptions from Youtube API console . log ( "Failed with an error %s" , err . message ); } } Retrieve uploads This function retrieves the user's uploaded videos.
- Channels . list ( "contentDetails" , { mine : true , }); if ( ! results results . items . length === 0 ) { console . log ( "No Channels found." ); return ; } for ( let i = 0 ; i < results . items . length ; i ++ ) { const item = results . items [ i ]; / Get the channel ID - it's nested in contentDetails, as described in the Channel resource: https://developers.google.com/youtube/v3/docs/channels. / const playlistId = item . contentDetails . relatedPlaylists . uploads ; let nextPageToken = null ; do { // @see: https://developers.google.com/youtube/v3/docs/playlistItems/list const playlistResponse = YouTube .
- It does this using the following steps: Fetches the user's channel Fetches the user's uploads playlist Iterates through this playlist and logs the video IDs and titles If there is a next page of results, fetches it, then returns to step 3 advanced/youtube.gs View on GitHub / This function retrieves the user's uploaded videos by: 1.

### YouTube Analytics Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/youtube-analytics](https://developers.google.com/apps-script/advanced/youtube-analytics)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A sample code is provided to create a spreadsheet with daily view counts, watch-time, and subscriber data using version 2 of the YouTube Analytics API and version 3 of the YouTube Data API. viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
- Page Summary outlined flag The YouTube Analytics service in Apps Script allows you to use the YouTube Analytics API to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
- This API gives users the ability to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
- Reports . query ({ ids : channel== ${ channelId } , startDate : formatDateString ( lastMonth ), endDate : formatDateString ( today ), metrics : metrics . join ( "," ), dimensions : "day" , sort : "day" , }); if ( ! result . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "YouTube Analytics Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = result . columnHeaders . map (( columnHeader ) = > { return formatColumnName ( columnHeader . name ); }); sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , result . rows . length , headers . length ) . setValues ( result . rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Converts a Date object into a YYYY-MM-DD string. @param {Date} date The date to convert to a string. @return {string} The formatted date. / function formatDateString ( date ) { return Utilities . formatDate ( date , Session . getScriptTimeZone (), "yyyy-MM-dd" ); } / Formats a column name into a more human-friendly name. @param {string} columnName The unprocessed name of the column. @return {string} The formatted column name. @example "averageViewPercentage" becomes "Average View Percentage". / function formatColumnName ( columnName ) { let name = columnName . replace ( /([a-z])([A-Z])/g , "$1 $2" ); name = name . slice ( 0 , 1 ). toUpperCase () + name . slice ( 1 ); return name ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

