---
title: "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
  title: "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Grounding with Google Maps in Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how Grounding with Google Maps with Vertex AI can help to enhance your
generative AI applications by providing geospatial context.
Overview
Grounding with Google Maps with Vertex AI is a service that connects Gemini models with
geospatial data from Google Maps. Google Maps has access to
information on millions of locations, including businesses, landmarks, and
points of interest. This data gives you access to information on over 250
million places that can be used to ground your model's responses, enabling your
AI applications and agents to provide local data and geospatial context.
You can also enable concurrent grounding with Google Maps,
Google Search, and grounding with your data sources.
Uses of Grounding with Google Maps
You can use Grounding with Google Maps for various applications, such as:
Conversational assistants that can answer questions about nearby places, such
as "Where's the nearest place to get an Italian espresso?"
Personalized descriptions and community insights, such as"Can you tell me more about family-friendly restaurants that are within a walkable distance?"
Summaries of areas around specific locations, such as an EV charging station or
a hotel.
This can be beneficial for use cases in real estate, travel, mobility, and
social-media apps.
Try the Grounding with Google Maps demo open_in_new
Supported models
This section lists the models that support Grounding with Google Maps.
Gemini 3 Pro and Gemini 3 Pro Image are limited to 5,000
search queries per day.
For more information about the Gemini models, see Gemini models .
Use Grounding with Google Maps to ground your model's responses
This code sample demonstrates how to use Grounding with Google Maps to ground
your model's responses.
Search results can be customized for a specific geographic location by using the
latitude and longitude coordinates. For more information, see the
Grounding API.
Console
To use Grounding with Google Maps with Vertex AI, follow these steps:
In the Google Cloud console, go to the Vertex AI Studio page.
Go to Vertex AI Studio
In the Tools section, click Grounding: Google . A configuration pane
appears.
To use Google Maps, click Google Maps toggle.
Click Apply .
Enter your prompt in the field, and click Submit . Your prompt responses
ground to Google Maps.
Python
Install
pip install --upgrade google-genai
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
from google import genai
from google.genai.types import (
GenerateContentConfig ,
GoogleMaps ,
HttpOptions ,
Tool ,
)
client = genai . Client ( http_options = HttpOptions ( api_version = "v1" ))
response = client . models . generate_content (
model = "gemini-2.5-flash" ,
contents = "Where can I get the best espresso near me?" ,
config = GenerateContentConfig (
tools = [
# Use Google Maps Tool
Tool ( google_maps = GoogleMaps (
enable_widget = False # Optional: return Maps widget token
))
],
tool_config = types . ToolConfig (
retrieval_config = types . RetrievalConfig (
lat_lng = types . LatLng ( # Pass geo coordinates for location-aware grounding
latitude = 40.7128 ,
longitude =- 74.006
),
language_code = "en_US" , # Optional: localize Maps results
),
),
),
)
print ( response . text )
# Example response:
# 'Here are some of the top-rated places to get espresso near you: ...'
REST
Before using any of the request data,
make the following replacements:
LOCATION : The region to process the request. To use the global endpoint , exclude the location from the endpoint name and configure the location of the resource to global.
PROJECT_ID : Your project ID .
MODEL_ID : The model ID of the multimodal model.
PROMPT : The prompt to send to the model.
LATITUDE : The latitude of the location. For example, a latitude of 37.7749 represents San Francisco. You can obtain latitude and longitude coordinates using services like Google Maps or other geocoding tools.
LONGITUDE : The longitude of the location. For example, a longitude of -122.4194 represents San Francisco.
ENABLE_WIDGET : Whether to return a token and enable the Google Maps widget (default is false ).
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent
Request JSON body:
{
"contents": [{
"role": "user",
"parts": [{
"text": " PROMPT "
}]
}],
"tools": [{
"googleMaps": {
"enableWidget": " ENABLE_WIDGET "
}
}],
"toolConfig": {
"retrievalConfig": {
"latLng": {
"latitude": LATITUDE ,
"longitude": LONGITUDE
},
"languageCode": "en_US"
}
},
"model": "projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"candidates": [
{
"content": {
"role": "model",
"parts": [
{
"text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout. It has a rating of 4.2 stars based on 411 reviews."
}
]
},
"finishReason": "STOP",
"groundingMetadata": {
"groundingChunks": [
{
"maps": {
"uri": "https://maps.google.com/?cid=9001322937822692826",
"title": "The Italian Place",
"placeId": "places/ChIJOTRDf_qwt4kR2kV_WYUf63w"
}
},
{
"maps": {
"uri": "https://maps.google.com/?cid=9001322937822692826",
"title": "Hank's Pasta Bar",
"placeId": "places/MMVtPzn9FGcevML89",
"placeAnswerSources": {
"reviewSnippets": [
{
"id": "places/ChIJOTRDf_qwt4kR2kV_WYUf63w",
"title": "Google Maps Review",
"uri": "https://maps.google.com/?cid=9001322937822692826"
},
]
}
}
},
...
],
"groundingSupports": [
{
"segment": {
"endIndex": 79,
"text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout."
},
"groundingChunkIndices": [
0
]
},
],
"googleMapsWidgetContextToken": "widgetcontent/..."
}
}
],
...
}
Place properties
This section lists place properties that are used to describe locations and used
by Grounding with Google Maps to generate responses. These properties are
used to determine the types of questions that Grounding with Google Maps can
answer.
Sample place properties
This list provides an alphabetized sampling of properties about places that can
be used by your model to generate responses.
Address
Curbside pickup
Debit card
Distance
Free parking lot
Live music
Menu for children
Opening hours
Payment options (such as cash or credit card )
Place answer
Pet friendly
Serves beer
Serves vegetarian food
Wheelchair accessible
Wifi
Place answers are a response from Grounding with Google Maps based on
information derived from user reviews.
Examples of using place properties
The following examples use place properties in questions
about different types of places. Grounding with Google Maps uses the
properties to understand your intent and then provides relevant answers based on
the data associated with places in Google Maps.
Plan a family dinner : You might ask, Is "The Italian Place" good for
children, and do they offer takeout? What is their rating? Answers to these
questions help you to determine if a restaurant is suitable for a family and
if the restaurant offers a convenient service.
Check accessibility for a friend : You might ask, I need a restaurant that
has a wheelchair accessible entrance. A response to this prompt might help
you to determine if the location meets specific accessibility needs.
Find a location for a late-night snack : You might ask, Is "Burger Joint"
open now? Do they serve dinner? What are their opening hours for Friday?
Answers to these questions help you to find an open establishment serving a
specific meal during a particular time.
Meet a client for coffee : You might ask, Does "Cafe Central" have Wifi?
Do they serve coffee? What is their price level, and do they accept credit
cards? Answers to these questions help you to assess the suitability of a
cafe for a business meeting based on amenities, offerings, and payment
options.
Information in the Google Maps Grounded Results might differ from actual
conditions of the road.
Understand your response
Google Maps sources are returned in groundingMetadata within
groundingChunks . Sources are returned for places and for user reviews,
which have been used to help generate the Google Maps Grounded Result .
This code sample demonstrates a place source and a place answer source in the
response:
"groundingChunks" : [
{
"maps" : {
"uri" : "{Link to Maps Content}" ,
"title" : "{Name of Maps Place}" ,
"placeId" : "{Place ID}" ,
"placeAnswerSources" : {
"reviewSnippets" : [
{
"reviewId" : "{Review ID}" ,
"googleMapsUri" : "{Link to Maps Content}" ,
"title" : "{Title of review}"
}
]
}
},
}
],
Routing
Preview
— Grounding with Google Search
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Grounding with Google Maps supports Routing capabilities. This feature
lets your AI agents understand physical movement, real-time travel estimates,
and the spatial relationships between locations. By grounding responses in
Google Maps's routing engine, your model can provide performance-optimized
directions and accurate travel times that account for real-time conditions. This
integration enables Grounding with Google Maps to filter places based on
travel time, offer precise point-to-point directions, and calculate estimated
commute times for specific modes of transportation.
Routing capabilities are available as a Restricted
Preview . To access
this feature for your project, contact your Google Cloud account team to request
addition to the allowlist. Alternatively, you can submit the
participation form to be considered.
Google is accepting interest from a limited cohort of partners to pilot the
Grounding with Google Maps Routing tool.
Capabilities
The Routing tool calculates precise travel distances and durations between
origins and destinations.
The Routing tool supports the following:
Modes of transportation : Routing for driving, walking, bicycling, transit,
and two-wheeled motorized vehicles (not all travel modes are
available in all countries)
Multiple waypoints : Up to 13 intermediate stops between origin
and destination
Real-time traffic : Accounting for current traffic conditions to provide
accurate "live" travel times rather than static averages
The following are examples of the types of questions that the Routing tool
supports:
Proximity based on travel time : "What are some American restaurants within
a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?"
Commute estimation : "How long does it take to take public transit from
Pike Place Market to Capitol Hill in Seattle?"
Understand the response
When a prompt triggers the Routing tool, the model generates a natural language
answer backed by structured metadata. This lets you display precise travel
information to the user.
The following data is returned in a payload response:
Duration : The time required to travel between locations, accounting for
traffic if requested. For example, "500 seconds".
Distance : The physical distance of the route. For example, "1.9 km".
Polyline : An encoded text string that lets you visually render the
specific route path on a map.
The following is an example response for the prompt: "How do I get to Carmine's
restaurant from the Hilton Hotel (1335 6th Ave in NYC) where I'm staying?"
To get to Carmine's restaurant from the Hilton Hotel at 1335 6th Ave in NYC,
you'll want to head to the Carmine's - Time Square location at 200 W 44th St,
New York, NY 10036, USA.
Here are the walking directions:
Start at the Hilton Hotel: Exit the Hilton Hotel at 1335 6th Ave.
Walk South on 6th Avenue: Head south on 6th Avenue (Avenue of the
Americas) towards W 44th Street.
Turn Right onto W 44th Street: Turn right onto W 44th Street.
Carmine's is on your left: Walk down W 44th Street, and Carmine's will
be on your left side at 200 W 44th St.
This walk is approximately 0.5 miles and should take about 10-15 minutes.
The following is an example response for the prompt: "How long does it take to
take public transit from Pikes Place Market to Capitol Hill in Seattle?"
To get from Pike Place Market to Capitol Hill in Seattle using public transit,
you have a couple of options:
Tram (Light Rail): The tram from Westlake, which is near Pike Place
Market, to Capitol Hill takes approximately 3 minutes. Including
transfers, the total travel time is about 9 minutes, with trams departing
every 10 minutes.
Bus: A direct King County Metro bus from Pike St & 4th Ave (near Pike
Place Market) to Capitol Hill takes about 11 minutes, with departures
every 20 minutes. Alternatively, the Line 49 bus takes around 16 minutes.
Search Along Route
Preview
— Grounding with Google Search
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Search Along Route allows your AI agents to discover points of interest
that are geographically relevant and convenient to a user's planned journey. By
grounding responses in Google Maps's routing and spatial search engines, your
model can provide recommendations that minimize detours and understand the
logistical flow of a road trip or commute.
Search Along Route capabilities are available as a Restricted Preview. To access
this feature for your project, please contact your Google Cloud account team to
request addition to the allowlist. Alternatively, you can also
submit this form to be considered for
participation. Note that at this time we are accepting interest from a limited
cohort of partners only to pilot the Grounding with Google Maps Search Along
Route tool.
Capabilities
Search Along Route allows your application to identify specific businesses,
amenities, or attractions situated directly along a generated path between an
origin and destination. Only the "Drive" travel mode is supported in the
Preview.
The following examples illustrate the types of questions the Search Along Route
tool can handle.
Basic route search : "Find gas stations on the way from 1800 Amphibious Blvd. Mountain View, CA 94045,
to 456 Sunny St, Sunnyvale CA." (Usually, the origin and
destination addresses are derived from the chat history.)
Search based on Place Properties : "Are there any bakeries with at least a
4 star rating between San Francisco and 1800 Amphibious Blvd. Mountain View, CA 94045?"
Multi-leg route search : "I'm going on a roadtrip from San Francisco to
San Luis Obispo to Los Angeles, suggest three EV charger options between
San Francisco and San Luis Obispo, and then between San Luis Obispo and
Los Angeles?"
Understand the response
When a prompt triggers the Search Along Route tool, the model generates a
natural language answer backed by structured metadata that combines both Places
and Routing data. This ensures the suggested locations are actually convenient
to the physical path of travel. The groundingMetadata will contain
groundingChunks for returned places and the route searched along.
Example Prompt [Basic route search] :
Find gas stations on the way from 1800 Amphibious Blvd. Mountain View, CA 94045,
to 456 Sunny St, Sunnyvale CA.
Example Response [Basic route search] :
Here are some gas stations en route from 1800 Amphibious Blvd. Mountain View, CA 94045 to
456 Sunny St, Sunnyvale, CA:
Example Gas station - Located at 123 Example Rd, Sunnyvale, CA 94045.
It has a rating of 3.5 stars from 122 reviews and sells hydrogen, propane,
and gasoline, along with car washes. It is open until 9:50 PM tonight and
has restrooms.
Fictional Gas station - Located at 456 Fictional Ave, Sunnyvale, CA 94045. It has a
rating of 3.6 stars from 52 reviews and offers a convenience store and car
wash. This station is open 24 hours and has restrooms.
Generic Gas station - Located at 789 W Generic St, Sunnyvale, CA 94045. It has a
rating of 3.6 stars from 35 reviews. This station is open 24 hours and has
restrooms.
Example Prompt [Multi-leg route search] :
I'm going on a roadtrip from San Francisco to
San Luis Obispo to Los Angeles, suggest three EV charger options between
San Francisco and San Luis Obispo, and then between San Luis Obispo and
Los Angeles?
Example Response [Multi-leg route search] :
Here are some EV charger options for your road trip from San Francisco to Los
Angeles, with stops in San Luis Obispo.
Between San Francisco and San Luis Obispo :
Example Charger : Located at 123 Example Blvd,
Campbell, CA 95008, this station has a rating of 4.5.
Fictional EV Station : You can find this station at 456 Fictional Rd, Gilroy,
CA 95008, with a rating of 4.4.
Generic Charging Station : This station is at 789 Generic St, Salinas, CA
95008, and has a rating of 3.5.
Between San Luis Obispo and Los Angeles :
Example Charger : Located at 123 Example Rd, San Luis Obispo, CA
93123, this station has a rating of 4.3.
Fictional EV Station : This station can be found at 456 Fictional Ave,
Santa Barbara, CA 93123, with a rating of 3.9.
Generic Charging Station : You can find this station at 789
Generic St, Glendale, CA 93123, with a rating of 3.0.
Have a great road trip!
Service usage requirements
This section describes the service usage requirements for Grounding with Google Maps.
Inform the user about the use of Google Maps sources
With each Google Maps Grounded Result , you'll receive sources in
groundingChunks that support each response. The following metadata is also
returned:
source uri
title
ID
When presenting results from Grounding with Google Maps with Vertex AI, you must specify the
associated Google Maps sources, and inform your users of the following:
The Google Maps sources must immediately follow the generated content that
the sources support. This generated content is also referred to as
Google Maps Grounded Result .
The Google Maps sources must be viewable within one user interaction.
For voice-first interfaces
Sourcing: Google Maps sources must be displayed in a companion UI that
shows a verbatim historical record of any AI voice conversation. This record
must adhere to the sourcing requirements and is subject to the applicable data
caching and storage limits.
Active disclosure of sources: End users must be made reasonably aware of the
role Google Maps plays in their experience and how to find detailed sourcing
at the time of interaction.
The active disclosure of sources must convey the following points:
AI generated content may include information from Google Maps.
Detailed sources are available in the companion UI.
You must convey the active disclosure of sources using at least one of the
following methods.
Visual display: For voice interactions that occur on a device with a
screen, display the active disclosure on the screen whenever
Grounding with Google Maps is used.
Voice announcement: Read the active disclosure to the user. This must
occur during the first interaction supported by Grounding with Google Maps
and recur at least every 6 months.
Example disclosure: "AI generated content may include information from
Google Maps. You can find detailed sources in the companion app."
Persistent disclosure: An explanation that Google Maps content may be used
in AI generated content must be persistently accessible to the end user (e.g.,
in a voice settings menu or a voice interaction disclosure).
User inquiries: Your voice assistant must accurately answer end user
inquiries regarding the source of the content, including when AI generated
content includes information from Google Maps. If Google Maps is the
source, direct end users to the companion UI for access to specific source
information.
Display Google Maps sources with Google Maps links
For each source in groundingChunks and in
grounding_chunks.maps.placeAnswerSources.reviewSnippets , a link preview must
be generated following these requirements:
Attribute each source to Google Maps following the Google Maps text
attribution guidelines .
Display the source title provided in the response.
Link to the source using the uri or googleMapsUri from the response.
These images show the minimum requirements for displaying the sources and
Google Maps links.
You can collapse the view of the sources.
Optional: Enhance the link preview with additional content, such as:
A Google Maps favicon is inserted
before the Google Maps text attribution.
A photo from the source URL ( og:image ).
For more information about some of our Google Maps data providers and their
license terms, see the Google Maps and Google Earth legal
notices .
Google Maps text attribution guidelines
When you attribute sources to Google Maps in text, follow these guidelines:
Don't modify the text Google Maps in any way:
Don't change the capitalization of Google Maps .
Don't wrap Google Maps onto multiple lines.
Don't localize Google Maps into another language.
Prevent browsers from translating Google Maps by using the HTML
attribute translate="no" .
Style Google Maps text as described in the following table:
Property
Style
Font family
Roboto. Loading the font is optional.
Fallback font family
Any sans serif body font already used in your product or "Sans-Serif" to invoke the default system font
Font style
Normal
Font weight
400
Font color
White, black (#1F1F1F), or gray (#5E5E5E). Maintain accessible (4.5:1) contrast against the background.
Font size
Minimum font size: 12sp Maximum font size: 16sp To learn about sp, see Font size units on the Material Design website.
Letter spacing
Normal
Example CSS
The following CSS renders Google Maps with the appropriate typographic
style and color on a white or light background.
@ import url ( 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' ) ;
. GMP-attribution {
font-family : Roboto , Sans-Serif ;
font-style : normal ;
font-weight : 400 ;
font-size : 1 rem ;
letter-spacing : normal ;
white-space : nowrap ;
color : #5e5e5e ;
}
Context token, place ID, and review ID
The Google Maps data includes context token, place ID, and review ID. You
might cache, store, and export the following response data:
googleMapsWidgetContextToken
placeId
reviewId
The restrictions against caching in the Grounding with Google Maps Terms
don't apply.
Prohibited Territory
Grounding with Google Maps has restrictions for certain content and
activities to maintain a safe and reliable platform. Customer will
not distribute or market a Customer Application that offers
Grounding with Google Maps in a Prohibited Territory. The current Prohibited
Territories are:
China
Crimea
Cuba
Donetsk People's Republic
Iran
Luhansk People's Republic
North Korea
Syria
Vietnam
This list may be updated from time to time.
Optional: Google Maps contextual widget
The contextual widget is a Google Maps Pre-GA Offering that's a visual
container used to support or supplement other Google Maps content. The
Google Maps contextual widget lets you integrate Grounding with Google Maps
into your applications to create a conversational LLM-powered chat experience.
The contextual widget is rendered using the context token,
googleMapsWidgetContextToken , which is returned in the
Vertex AI API response and can be used to render visual content.
The contextual widget serves different functions depending on your scenario:
It displays user reviews and photos, which is user-generated content (UGC), in
the scenario where Google Maps prompting is used for answer generation.
It helps to enrich results with map visualizations and data when
Vertex AI generates just a text response.
For more information on the contextual widget, see Maps grounding
widget .
Render the Google Maps contextual widget
To render and use the Google Maps contextual widget, use the alpha
version of the Google Maps JavaScript API on the page that displays the
widget. For more information, see Load
the Maps JavaScript API .
The following code samples demonstrate how to use a contextual widget:
Create a contextual widget.
<body>
<gmp-place-contextual id="widget"></gmp-place-contextual>
</body>
In any response that is grounded with Google Maps, there's a
corresponding googleMapsWidgetContextToken that's used to render the
contextual widget and placed in close proximity to the generated response.
To update the context token, set the widget.contextToken property .
"googleMapsWidgetContextToken" : "widgetcontent/AcBXPQdpWQWbap9H-OH8sEKmOXxmEKAYvff0tvthhneMQC3VrqWCjpnPBl4-Id98FGiA_S_t8aeAeJj0T6JkWFX56Bil8oBSR0W8JH3C_RSYLbTjxKdpxc9yNn6JcZTtolIRZon9xi6WpNGuSyjcIxWu2S0hwpasNOpUlWrG1RxVCB4WD1fsz_pwR236mG36lMxevXTQ_JnfdYNuQwQ4Lc3vn...<snip>...
Ts5VJE_b3IC5eE_6wez0nh61r7foTUZpP7BXMwxR-7Wyfcj6x1v6mIWsFGr1o0p_HSAMNqWPg-aFVnkPLhAkOR6MaNZOfezTva-gxHlu7z_haFvYxcUE1qfNVQ" ,
function updateWidget ( contextToken ) {
let widget = document . querySelector ( '#widget' );
widget . contextToken = contextToken ;
}
Optional: Specify the list layout. Valid values include the following:
Compact layout : <gmp-place-contextual-list-config layout="compact">
Vertical layout : <gmp-place-contextual-list-config layout="vertical">
This code sample demonstrates changing the list layout to a compact layout.
<gmp-place-contextual id="widget">
<gmp-place-contextual-list-config layout="compact">
</gmp-place-contextual-list-config>
</gmp-place-contextual>
Optional: Change the map mode. Valid values include the following:
2D roadmap map : map-mode="roadmap"
3D hybrid map : map-mode="hybrid"
No map : map-mode="none"
This code sample demonstrates changing the map mode to a 2D map.
<gmp-place-contextual id="widget">
<gmp-place-contextual-list-config map-mode="roadmap">
</gmp-place-contextual-list-config>
</gmp-place-contextual>
What's next
To learn more about how to ground Gemini models to your data, see Grounding with
your data .
To learn more about responsible AI best practices and Vertex AI's
safety filters, see Responsible AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
