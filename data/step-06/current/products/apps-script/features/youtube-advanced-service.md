---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.618Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "YouTube advanced service"
feature_slug: "youtube-advanced-service"
latest_feature_date: "2013-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/youtube"
  - "https://developers.google.com/apps-script/advanced/youtube-content-id"
  - "https://developers.google.com/apps-script/advanced/youtube-analytics"
keywords:
  - "youtube"
  - "advanced"
  - "apps"
  - "script"
  - "added"
---

# YouTube advanced service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added an advanced service for the YouTube API.

## Extended Definition

Apps Script added an advanced service for the YouTube API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/youtube](https://developers.google.com/apps-script/advanced/youtube)
- [https://developers.google.com/apps-script/advanced/youtube-content-id](https://developers.google.com/apps-script/advanced/youtube-content-id)
- [https://developers.google.com/apps-script/advanced/youtube-analytics](https://developers.google.com/apps-script/advanced/youtube-analytics)

## Supporting Pages

### YouTube Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/youtube](https://developers.google.com/apps-script/advanced/youtube)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reference For detailed information on this service, see the following reference documentation: YouTube Data API YouTube Live Streaming API Like all advanced services in Apps Script, the YouTube service uses the same objects, methods, and parameters as the public API.
- The YouTube service in Apps Script is an advanced service that must be enabled before use and utilizes the same objects, methods, and parameters as the public API.
- PlaylistItems . list ( "snippet" , { playlistId : playlistId , maxResults : 25 , pageToken : nextPageToken , }); if ( ! playlistResponse playlistResponse . items . length === 0 ) { console . log ( "No Playlist found." ); break ; } for ( let j = 0 ; j < playlistResponse . items . length ; j ++ ) { const playlistItem = playlistResponse . items [ j ]; console . log ( "[%s] Title: %s" , playlistItem . snippet . resourceId . videoId , playlistItem . snippet . title , ); } nextPageToken = playlistResponse . nextPageToken ; } while ( nextPageToken ); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with err %s" , err . message ); } } Subscribe to channel This sample subscribes the user to the Google Developers channel on YouTube. advanced/youtube.gs View on GitHub / This sample subscribes the user to the Google Developers channel on YouTube. @see https://developers.google.com/youtube/v3/docs/subscriptions/insert / function addSubscription () { // Replace this channel ID with the channel ID you want to subscribe to const channelId = "UC x5XG1OV2P6uZZ5FSM9Ttw" ; const resource = { snippet : { resourceId : { kind : "youtube#channel" , channelId : channelId , }, }, }; try { const response = YouTube .
- Page Summary outlined flag Apps Script allows access to the YouTube Data API and YouTube Live Streaming API for managing videos, playlists, channels, and live events.

### YouTube Content ID Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/youtube-content-id](https://developers.google.com/apps-script/advanced/youtube-content-id)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the advanced YouTube Content ID service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The YouTube Content ID service in Apps Script allows developers to use the YouTube Content ID API to interact with YouTube's rights management system.
- Home Google Workspace Apps Script Reference Send feedback YouTube Content ID Service Stay organized with collections Save and categorize content based on your preferences.
- The YouTube Content ID service lets you use the YouTube Content ID API in Google Apps Script.

### YouTube Analytics Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/youtube-analytics](https://developers.google.com/apps-script/advanced/youtube-analytics)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the YouTube Analytics service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The YouTube Analytics service in Apps Script allows you to use the YouTube Analytics API to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
- Sample code The following sample code uses version 2 of the YouTube Analytics API, as well as version 3 of the YouTube Data API, which you can access through the YouTube service in Apps Script.
- Home Google Workspace Apps Script Reference Send feedback YouTube Analytics Service Stay organized with collections Save and categorize content based on your preferences.

