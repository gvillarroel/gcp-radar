---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:44:42.781Z"
product_name: "Aerial View API"
product_slug: "aerial-view-api"
feature_name: "lookupVideoMetadata method"
feature_slug: "lookupvideometadata-method"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata"
  - "https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata"
  - "https://developers.google.com/maps/documentation/aerial-view/lookup-video"
keywords:
  - "lookupvideometadata"
  - "including"
  - "metadata"
  - "imagery"
  - "method"
  - "return"
  - "added"
  - "video"
---

# lookupVideoMetadata method

Product: Aerial View API
Coverage: MEDIUM

## Step 02 Summary

Added the lookupVideoMetadata API method to return video metadata, including imagery freshness, video length, and video existence confirmation.

## Extended Definition

Added the lookupVideoMetadata API method to return video metadata, including imagery freshness, video length, and video existence confirmation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata](https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata)
- [https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata](https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata)
- [https://developers.google.com/maps/documentation/aerial-view/lookup-video](https://developers.google.com/maps/documentation/aerial-view/lookup-video)

## Supporting Pages

### "Retrieve a video's metadata \_|\_ Google Maps Aerial View API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata](https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Given a valid address or videoID, the lookupVideoMetadata method returns metadata associated with a given video.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The lookupVideoMetadata method retrieves metadata for a given video using a URL-encoded address or videoID.
- How to use the API Call this endpoint by passing it a URL-encoded US postal address or a videoId . curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key= YOUR API KEY &address= POSTAL ADDRESS " The API then returns one of the following two responses: If the video exists, lookupVideoMetadata returns the video's metadata.
- Page Summary outlined flag The lookupVideoMetadata method retrieves metadata for an aerial view video using a valid address or videoID.

### "Method: videos.lookupVideoMetadata \_|\_ Google Maps Aerial View API \_\

- URL: [https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata](https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Maps Platform Documentation Aerial View API Reference Send feedback Method: videos.lookupVideoMetadata Stay organized with collections Save and categorize content based on your preferences.
- This method is a free-to-call alternative to videos.lookupVideo , and returns all available video data excluding playback URIs.
- HTTP request GET https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata The URL uses gRPC Transcoding syntax.
- Required. key can be only one of the following: videoId string An ID returned from videos.renderVideo . address string A US postal address.

### Fetch a video \_|\_ Google Maps Aerial View API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/aerial-view/lookup-video](https://developers.google.com/maps/documentation/aerial-view/lookup-video)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Aerial View API's lookupVideo method retrieves video URIs for valid addresses or video IDs if available, returning metadata and landscape/portrait URIs for active videos.
- Use the lookupVideoMetadata method to initially check for the existence of a video for a specific address.
- To check if a video exists, use the lookupVideoMetadata method.
- How to use the API Call this endpoint by passing it a URL-encoded U.S. postal address or a videoId . curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key= YOUR API KEY &address= POSTAL ADDRESS " The API then returns one of the following three responses: If a video exists, lookupVideo returns a processing state of ACTIVE , and a landscape and a portrait URI for every supported media type, and metadata .

