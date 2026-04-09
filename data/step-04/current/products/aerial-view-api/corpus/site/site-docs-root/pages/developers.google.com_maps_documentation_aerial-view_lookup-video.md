---
title: "Fetch a video \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/lookup-video
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/lookup-video
  title: "Fetch a video \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Aerial View API
Send feedback
Fetch a video
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Aerial View API's lookupVideo method retrieves video URIs for valid addresses or video IDs if available, returning metadata and landscape/portrait URIs for active videos.
Use the lookupVideoMetadata method to initially check for the existence of a video for a specific address.
If a video is not found, you can generate a new one using the renderVideo method and utilize the returned videoId for subsequent lookupVideo calls.
Returned video URIs are short-lived and should be requested anew each time a video is displayed, while video IDs can be stored for later use.
For accessibility, Google recommends including a transcript or video description when presenting aerial view videos to users.
Given a valid address or video ID, the
lookupVideo
method returns URIs identifying a set of Aerial View API videos. The
lookupVideo method only returns URIs when Google has already generated a video
for that location.
To check if a video exists, use the
lookupVideoMetadata
method.
Note: After Google generates an aerial video for a specific address, that video
is available to anyone. That is, a video is not associated with a specific user
or account.
How to use the API
Call this endpoint by passing it a URL-encoded U.S. postal
address or a
videoId .
curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key= YOUR_API_KEY &address= POSTAL_ADDRESS "
The API then returns one of the following three responses:
If a video exists, lookupVideo returns a processing state of ACTIVE , and
a landscape and a portrait URI for every supported media type, and
metadata .
Note: Calls to this endpoint are billed only when a video exists and a video
URI is returned.
If the video is in our system, but it still hasn't been fully rendered,
lookupVideo returns a processing state of PROCESSING , and a videoId ,
which you can use to get the video after it's done rendering.
If the video doesn't yet exist, then the API returns a 404 status code. In
this case, you can generate a new video by calling
renderVideo .
How to use the returned video URIs
Call the lookupVideo method once per address or videoID per view. The video
URIs in the response are referred to as short-lived URIs and expire after a
short time.
Google frequently updates the videos. Therefore, to ensure that you are
displaying the latest content to your customers, call the lookupVideo method
every time you display a video.
Caution: You cannot download, store, or cache the aerial view videos. For more
information, see the Google Maps Platform Terms of
Service .
Supporting accessible videos
To support accessibility, Google recommends that you add a transcript or video
description when you display an aerial view video to your customers. In that
way, a screen reader can announce the transcript or its description to a user.
For example, add a description in the form:
"This is a photorealistic aerial view of ADDRESS provided by Google Maps."
Instead of an address, you could add a description of the video, in the form:
"This is a photorealistic aerial view of the Empire State Building in New York
provided by Google Maps."
Save video IDs for later use
Subject to the Service Specific Terms for Aerial View API, Aerial View API
video IDs are exempt from the caching restrictions stated in
Section 3.2.3(b)(No Caching)
of the Google Maps Platform Terms of Service. You can therefore store
video ID values for later use.
Example request passing an address
The following code sample requests an aerial view video for the Transamerica
Pyramid, located at 600 Montgomery St, San Francisco, CA 94111.
curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key= YOUR_API_KEY &address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111"
Note: You must URL encode the address.
Example response
The following JSON examples represent all possible responses to the
lookupVideo request.
Video found
If the video you're requesting exists, the API returns a list of URIs, each
of which links to a different format or version of the requested video. To learn
about the various formats, see
What is MPEG-DASH? | HLS vs. DASH .
Note: Call lookupVideo once per address or videoID per view. You can then use
the short-lived URIs in the response once before they expire.
{
"uris" : {
"IMAGE" : {
"landscapeUri" : "https://www.gstatic.com/aerialview/thumbnail/-1202461100507922431.jpg?sqp=CKiU6qIGGPQD&rs=AHRQkOe1j6EA5Q3WzJgDluv8AXbNlZ8M-g" ,
"portraitUri" : "https://www.gstatic.com/aerialview/thumbnail/2256303413312618497.jpg?sqp=CKiU6qIGGPQD&rs=AHRQkOelSBTTVgOmFrSZ71c1xjyuoSBAAA"
},
"MP4_HIGH" : {
"landscapeUri" : "https://rr1---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZKvJBpnc-LYP8v6T-AM&ip=0.0.0.0&id=5f50000000000001&itag=375&source=aerial_view&mh=dX&mm=31&mn=sn-p5qs7nzy&ms=au&mv=D&mvi=1&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=37357139&dur=40.016&lmt=1683384545351664&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRgIhAOhUzpUZGXThRz481S5YAVoy7d7V29-8GDRWLdDEtzagAiEA5laBMqKNnoPCeTHFVT56FYQ5MZp7pZTtDNp9tSJffyc=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgVqK6hzOoDaTnWt4UmIQgXOyGCc5Pxf4tmp2t6YzwkrQCIQCCOsPpfT2g_BT32Ki_iMwwBb2IhoquVISoHbBMI5_dAw==" ,
"portraitUri" : "https://rr5---sn-p5qlsn7s.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZJiuBo3g-LYPhtaG6AU&ip=0.0.0.0&id=9f50000000000001&itag=375&source=aerial_view&mh=D3&mm=31&mn=sn-p5qlsn7s&ms=au&mv=D&mvi=5&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=11844099&dur=40.016&lmt=1683384626250758&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRgIhAPP030ASCfKrXHpu72d78SBN_3T-7jKQ5_OjAvVzvYLaAiEAhEDAo689v0DWSCkfxxD8oU2iJVifC25Q7gQplx5_25U=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgREl7bSQ_z9Y86A_bRnX1RdQqoIbwgjV2rEkhLlNilBICIQC9amH8IwmRdbbcCUxnSttBjcy_4BwiBBbSd_PM1KgICw=="
},
"MP4_LOW" : {
"landscapeUri" : "https://rr1---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZKvJBpnc-LYP8v6T-AM&ip=0.0.0.0&id=5f50000000000001&itag=134&source=aerial_view&mh=dX&mm=31&mn=sn-p5qs7nzy&ms=au&mv=D&mvi=1&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=3152145&dur=39.999&lmt=1683384843730359&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgVDf8P_aMLthAC6ASciANODNo7p7IqofngIgCUnfUofYCICV7JexvuPTnaqOfShKIL33uhtzIfnfOj2LgfpY0zKdx&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAM2jKSXegkPbIFD4L7H6FeBz5ytYtMkXNfowGlAB9aL2AiA3DQJIeoTfs3EOIPMfDBCGm7v_vWTruRBjXLN4lRIa-Q==" ,
"portraitUri" : "https://rr5---sn-p5qlsn7s.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZJiuBo3g-LYPhtaG6AU&ip=0.0.0.0&id=9f50000000000001&itag=134&source=aerial_view&mh=D3&mm=31&mn=sn-p5qlsn7s&ms=au&mv=D&mvi=5&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=1002125&dur=39.999&lmt=1683384248881200&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgYRyzRjtsGYFcodlU4-SvJ9GRgx97MF1nFlhoY74YtN4CIF5GuHAEnKqPoZBt5qYO2jur46q1OMEjvjtYATwNHMtD&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPoXkJ5-MQTNCy19W1zJu8Hi8eo-eYw-5kH-AbFpAsuTAiEAi2EmxfUwfYtPlTQe0jWFVxc7yKMMz0Bqidcf2ZRvYU4="
},
"MP4_MEDIUM" : {
"landscapeUri" : "https://rr1---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZKvJBpnc-LYP8v6T-AM&ip=0.0.0.0&id=5f50000000000001&itag=374&source=aerial_view&mh=dX&mm=31&mn=sn-p5qs7nzy&ms=au&mv=D&mvi=1&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=25879743&dur=40.016&lmt=1683384621721411&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhANzPUc2SwvlDZ-nyhxNfY8CGVjyitnfpS7MvbXb_f5kSAiAVArz85QjBBAZw-8ugFPIggKCO54IhR6xDg4rfJIh1Tw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJJyNxWDuqLZ89X5wThN1IsVJyvyZ7Qw1Z4jqhCyahjgCIQD9hOjN3hDvX3CN5LiNkoLm-GGAuriUtv0PhtREc7yTVQ==" ,
"portraitUri" : "https://rr5---sn-p5qlsn7s.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZJiuBo3g-LYPhtaG6AU&ip=0.0.0.0&id=9f50000000000001&itag=374&source=aerial_view&mh=D3&mm=31&mn=sn-p5qlsn7s&ms=au&mv=D&mvi=5&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=8228161&dur=40.016&lmt=1683384373331986&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgKsfEQB3GbLqYP5tmHwmkMVqVlfcNl7SBiuBqRw748VsCIQDgkwyNF4jOuOjoX5Qw6TgbpdIPhqS-EvCZ2g2JWPYpbw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgHdDEnopIcI2jzLkRLOaKz8Cq1Pwm2yl3nJzaru1dBEsCIQCgor9bkMfAeULTq3EwjzCGjB_RvGBqhGfhJblbBloJpg=="
},
"HLS" : {
"landscapeUri" : "https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1682711042/ei/DSBMZM7qPPPh-LYP9ZWNmA8/ip/0.0.0.0/id/7fffffffffffffff/source/aerial_view/susc/av/playback_host/rr3---sn-aigzrnsz.googlevideo.com/mh/ap/mm/31/mn/sn-aigzrnsz/ms/au/mv/D/mvi/3/pl/0/vprv/1/pacing/0/mt/1682709203/itag/0/playlist_type/LIVE/sparams/expire,ei,ip,id,source,susc,vprv,itag,playlist_type/sig/AOq0QJ8wRgIhAKreaNNOkePt9uVonHcqKIXqUe0TQSA1fcI6BWJexJ2hAiEAv9cj6N9iXI0bH6Ke4fz4XWDtrxVCMgrkGijpsLMpvy8%3D/lsparams/playback_host,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRgIhAMbA_78Uc_HUS8LaVWnJB4Qg7ZKO5IZECuhldckmJ3hPAiEA-GR-0w1zuyFHpvaF1LZBuWgpUM55iosY0KF9MMsePDE%3D/file/index.m3u8" ,
"portraitUri" : "https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1682711042/ei/DSBMZM7qPPPh-LYP9ZWNmA8/ip/0.0.0.0/id/7fffffffffffffff/source/aerial_view/susc/av/playback_host/rr3---sn-aigzrnsz.googlevideo.com/mh/ap/mm/31/mn/sn-aigzrnsz/ms/au/mv/D/mvi/3/pl/0/vprv/1/pacing/0/mt/1682709203/itag/0/playlist_type/LIVE/sparams/expire,ei,ip,id,source,susc,vprv,itag,playlist_type/sig/AOq0QJ8wRgIhAKreaNNOkePt9uVonHcqKIXqUe0TQSA1fcI6BWJexJ2hAiEAv9cj6N9iXI0bH6Ke4fz4XWDtrxVCMgrkGijpsLMpvy8%3D/lsparams/playback_host,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRgIhAMbA_78Uc_HUS8LaVWnJB4Qg7ZKO5IZECuhldckmJ3hPAiEA-GR-0w1zuyFHpvaF1LZBuWgpUM55iosY0KF9MMsePDE%3D/file/index.m3u8"
},
"DASH" : {
"landscapeUri" : "https://manifest.googlevideo.com/api/manifest/dash/expire/1682711042/ei/DSBMZM7qPPPh-LYP9ZWNmA8/ip/0.0.0.0/id/7fffffffffffffff/source/aerial_view/susc/av/playback_host/rr3---sn-aigzrnsz.googlevideo.com/mh/ap/mm/31/mn/sn-aigzrnsz/ms/au/mv/D/mvi/3/pl/0/vprv/1/pacing/0/mt/1682709203/itag/0/sparams/expire,ei,ip,id,source,susc,vprv,itag/sig/AOq0QJ8wRAIgCClKKnnVXeNnUHirpyxkegs8XSw5bq5e2VHWu-2NGtkCIBvXoHxlfTVmIvB4F9mlxn9EnJxPrcPGo1yIrS-_zbBu/lsparams/playback_host,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRQIhAIU_a8wIuPfzMXy1selgJ1bRz1ffXm0YQeFshe0ijAzhAiAPzhkpOjm-IGubZ-Z7o3W_U7lAjR6OkEpWvNEFCRzUVg%3D%3D" ,
"portraitUri" : "https://manifest.googlevideo.com/api/manifest/dash/expire/1682711042/ei/DSBMZM7qPPPh-LYP9ZWNmA8/ip/0.0.0.0/id/7fffffffffffffff/source/aerial_view/susc/av/playback_host/rr3---sn-aigzrnsz.googlevideo.com/mh/ap/mm/31/mn/sn-aigzrnsz/ms/au/mv/D/mvi/3/pl/0/vprv/1/pacing/0/mt/1682709203/itag/0/sparams/expire,ei,ip,id,source,susc,vprv,itag/sig/AOq0QJ8wRAIgCClKKnnVXeNnUHirpyxkegs8XSw5bq5e2VHWu-2NGtkCIBvXoHxlfTVmIvB4F9mlxn9EnJxPrcPGo1yIrS-_zbBu/lsparams/playback_host,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRQIhAIU_a8wIuPfzMXy1selgJ1bRz1ffXm0YQeFshe0ijAzhAiAPzhkpOjm-IGubZ-Z7o3W_U7lAjR6OkEpWvNEFCRzUVg%3D%3D"
}
},
"state" : "ACTIVE" ,
"metadata" : {
"videoId" : "-wVXGP6Hkogfqz6sZulUf3" ,
"captureDate" : {
"year" : 2022 ,
"month" : 10 ,
"day" : 24
},
"duration" : "40s"
}
}
Note: The captureDate field may be omitted if that data is not available.
To access videos, you must allowlist the following domains:
*.gstatic.com
*.googlevideo.com
Video not found
There are two possible "Video not found" responses, depending on whether or not
3D imagery is available for the location.
Not rendered
The video hasn't been previously rendered, and therefore is not yet in Google's
database.
{
"error" : {
"code" : 404 ,
"message" : "Video not found." ,
"status" : "NOT_FOUND"
}
}
No 3D imagery
Google attempted to render the video already, but failed because 3D imagery
isn't available for that address.
{
"error" : {
"code" : 404 ,
"message" : "Video not found: No 3d imagery." ,
"status" : "NOT_FOUND"
}
}
Rendering in progress
The system is still processing your render request, as defined by the state
being set to PROCESSING . You get a videoId , which you can then use to get
the video by calling lookupVideo .
{
"state" : "PROCESSING" ,
"metadata" : {
"videoId" : "u-zlVPiScvcD8BYmIVyxoF"
}
}
The rendering process can take anywhere from an hour to a few hours. If the
video is still processing, you can use lookupVideo to poll the video status
until it returns a state of ACTIVE .
To poll, make a request to lookupVideo , passing the videoId . Rendering can
take several hours, so use
exponential backoff
to space out your calls.
Example request passing a videoId
If you call lookupVideo and discover that there is no aerial view video
for the address, then you can call renderVideo with that address.
renderVideo returns a
VideoMetadata
object, which contains the videoId . You can later use the videoId , rather
than an address, to get the video by passing it to lookupVideo .
The following code example demonstrates how to call lookupVideo , passing it a
videoId .
curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key= YOUR_API_KEY &videoId= VIDEO_ID "
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The `lookupVideo` method retrieves Aerial View API video URIs using a valid address or video ID. If a video exists, it returns \"ACTIVE\" status, landscape/portrait URIs, and metadata. If rendering, \"PROCESSING\" status and a video ID are returned. If no video, a 404 error occurs; new videos can be generated using `renderVideo`. URIs are short-lived; `lookupVideo` should be called each time a video is needed. Video IDs can be stored, but videos can not be stored or cached.\n"]]
