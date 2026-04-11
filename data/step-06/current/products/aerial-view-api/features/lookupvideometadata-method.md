---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.269Z"
product_name: "Aerial View API"
product_slug: "aerial-view-api"
feature_name: "lookupVideoMetadata method"
feature_slug: "lookupvideometadata-method"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata"
  - "https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata"
  - "https://developers.google.com/maps/documentation/aerial-view/how-to"
keywords:
  - "video metadata response"
  - "video existence check"
  - "Video metadata lookup"
  - "lookupVideoMetadata method"
  - "imagery freshness"
  - "video length"
  - "lookupVideoMetadata()"
  - "lookupVideoMetadata"
---

# lookupVideoMetadata method

Product: Aerial View API
Coverage: MEDIUM

## Step 02 Summary

Added the lookupVideoMetadata API method to return video metadata, including imagery freshness, video length, and video existence confirmation.

## Extended Definition

The Aerial View API method `videos.lookupVideoMetadata` is a GET REST method at `https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata` that retrieves metadata associated with an aerial view video. It accepts a valid address or videoID for lookup, and it is used in Aerial View workflows to determine whether a video exists and monitor its state (for example, checking until the video becomes ACTIVE).

## Evidence Summary

The reference and usage pages confirm the method name, endpoint, input style (address or videoID), and its role in validating/video-state discovery before retrieving actual video URIs.

## Source Links

- [https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata](https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata)
- [https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata](https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata)
- [https://developers.google.com/maps/documentation/aerial-view/how-to](https://developers.google.com/maps/documentation/aerial-view/how-to)

## Supporting Pages

### "Method: videos.lookupVideoMetadata \_|\_ Google Maps Aerial View API \_\

- URL: [https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata](https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Maps Platform Documentation Aerial View API Reference Send feedback Method: videos.lookupVideoMetadata Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata The URL uses gRPC Transcoding syntax.

### "Retrieve a video's metadata \_|\_ Google Maps Aerial View API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata](https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The lookupVideoMetadata method retrieves metadata for a given video using a URL-encoded address or videoID.
- Page Summary outlined flag The lookupVideoMetadata method retrieves metadata for an aerial view video using a valid address or videoID.
- Given a valid address or videoID, the lookupVideoMetadata method returns metadata associated with a given video.
- Example request The following code sample requests an aerial view video for the Transamerica Pyramid, located at 600 Montgomery St, San Francisco, CA 94111. curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key= YOUR API KEY &address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111" Example response The following JSON examples demonstrate all possible responses to the lookupVideoMetadata request.

### "How to use the Aerial View API \_|\_ Google Maps Aerial View API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/aerial-view/how-to](https://developers.google.com/maps/documentation/aerial-view/how-to)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Workflow to generate or retrieve videos Use the following workflow to generate or retrieve an aerial view video: Check if Google has already generated a video for the location using lookupVideoMetadata .
- If a video doesn't exist, initiate video generation using the renderVideo function and monitor its status with lookupVideoMetadata until it becomes active.
- If the video is active ( lookupVideoMetadata returned a state of ACTIVE ), call lookupVideo to fetch the video's URIs.
- Call lookupVideoMetadata using the videoId or address to poll the endpoint until the video's state is ACTIVE .

