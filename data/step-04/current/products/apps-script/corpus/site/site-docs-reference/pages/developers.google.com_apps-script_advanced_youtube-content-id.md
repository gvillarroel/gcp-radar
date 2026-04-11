---
title: "YouTube Content ID Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/youtube-content-id
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/youtube-content-id
  title: "YouTube Content ID Service \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
YouTube Content ID Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The YouTube Content ID service in Apps Script allows developers to use the YouTube Content ID API to interact with YouTube's rights management system.
This service is specifically for YouTube content partners and is not accessible to all developers.
You can use this API to create and manage your assets, claims, and campaigns as a YouTube partner.
This is an advanced service that requires enablement before use.
manage assets, claims, and campaigns for YouTube content partners.
The YouTube Content ID service lets you use the
YouTube Content ID API in Google Apps Script. This API
lets developers interact directly with YouTube's Content ID rights management
system. As a YouTube partner, you can use the API to create and manage your
assets, claims and campaigns.
Warning: The YouTube Content ID API is intended for use by YouTube content
partners and is not accessible to all developers or to all YouTube users.
If you don't see the YouTube Content ID API as one of the services listed in
the Google Developers Console ,
you can consider joining the YouTube Partner Program .
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the public YouTube
Content ID API. Like all advanced services in Apps Script, the
advanced YouTube Content ID service uses the same objects, methods, and
parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
YouTube API support guide .
Sample code
The following sample code uses version 1 of the YouTube
Content ID API.
Claim your video
This function creates a partner-uploaded claim on your video with the specified
asset and policy rules.
advanced/youtubeContentId.gs
View on GitHub
/**
* This function creates a partner-uploaded claim on a video with the specified
* asset and policy rules.
* @see https://developers.google.com/youtube/partner/docs/v1/claims/insert
*/
function claimYourVideoWithMonetizePolicy () {
// The ID of the content owner that you are acting on behalf of.
const onBehalfOfContentOwner = "replaceWithYourContentOwnerID" ;
// A YouTube video ID to claim. In this example, the video must be uploaded
// to one of your onBehalfOfContentOwner's linked channels.
const videoId = "replaceWithYourVideoID" ;
const assetId = "replaceWithYourAssetID" ;
const claimToInsert = {
videoId : videoId ,
assetId : assetId ,
contentType : "audiovisual" ,
// Set the claim policy to monetize. You can also specify a policy ID here
// instead of policy rules.
// For details, please refer to the YouTube Content ID API Policies
// documentation:
// https://developers.google.com/youtube/partner/docs/v1/policies
policy : { rules : [{ action : "monetize" }] },
};
try {
const claimInserted = YouTubeContentId . Claims . insert ( claimToInsert , {
onBehalfOfContentOwner : onBehalfOfContentOwner ,
});
console . log ( "Claim created on video %s: %s" , videoId , claimInserted );
} catch ( e ) {
console . log (
"Failed to create claim on video %s, error: %s" ,
videoId ,
e . message ,
);
}
}
Update asset ownership
This function updates your ownership on an existing asset.
advanced/youtubeContentId.gs
View on GitHub
/**
* This function updates your onBehalfOfContentOwner's ownership on an existing
* asset.
* @see https://developers.google.com/youtube/partner/docs/v1/ownership/update
*/
function updateAssetOwnership () {
// The ID of the content owner that you are acting on behalf of.
const onBehalfOfContentOwner = "replaceWithYourContentOwnerID" ;
// Replace values with your asset id
const assetId = "replaceWithYourAssetID" ;
// The new ownership here would replace your existing ownership on the asset.
const myAssetOwnership = {
general : [
{
ratio : 100 ,
owner : onBehalfOfContentOwner ,
type : "include" ,
territories : [ "US" , "CA" ],
},
],
};
try {
const updatedOwnership = YouTubeContentId . Ownership . update (
myAssetOwnership ,
assetId ,
{ onBehalfOfContentOwner : onBehalfOfContentOwner },
);
console . log ( "Ownership updated on asset %s: %s" , assetId , updatedOwnership );
} catch ( e ) {
console . log (
"Ownership update failed on asset %s, error: %s" ,
assetId ,
e . message ,
);
}
}
Release a claim
This function releases an existing claim you have on a video.
advanced/youtubeContentId.gs
View on GitHub
/**
* This function releases an existing claim your onBehalfOfContentOwner has
* on a video.
* @see https://developers.google.com/youtube/partner/docs/v1/claims/patch
*/
function releaseClaim () {
// The ID of the content owner that you are acting on behalf of.
const onBehalfOfContentOwner = "replaceWithYourContentOwnerID" ;
// The ID of the claim to be released.
const claimId = "replaceWithYourClaimID" ;
// To release the claim, change the resource's status to inactive.
const claimToBeReleased = {
status : "inactive" ,
};
try {
const claimReleased = YouTubeContentId . Claims . patch (
claimToBeReleased ,
claimId ,
{ onBehalfOfContentOwner : onBehalfOfContentOwner },
);
console . log ( "Claim %s was released: %s" , claimId , claimReleased );
} catch ( e ) {
console . log ( "Failed to release claim %s, error: %s" , claimId , e . message );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
