---
title: "Place Autocomplete (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/autocomplete
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/autocomplete
  title: "Place Autocomplete (Legacy) \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Place Autocomplete (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Note: Server-side and client-side libraries
The Places API is also available with the
Java Client,
Python Client, Go Client and Node.js Client for Google Maps Services .
The Places API and the client libraries are for
use in server applications.
If you're building a client-side
application, take a look at the
Places SDK for Android (New) , the
Places SDK for iOS (New) , and the
Places Library, Maps JavaScript API .
Place Autocomplete (Legacy) is a web service that returns place
predictions in response to an HTTP request. The request specifies a textual
search string and optional geographic bounds. The service can be used to
provide autocomplete functionality for text-based geographic searches, by
returning places such as businesses, addresses and points of interest as a
user types.
Place Autocomplete (Legacy) requests
Place Autocomplete (Legacy) is part of the
Places API and shares an
API key and quotas with the
Places API .
Note: You can use Place Autocomplete (Legacy) even
without a map. If you do show a map, it must be a Google map. When you display
predictions from Place Autocomplete (Legacy) without a map, you must
include the Google logo displayed inline with the search field/results. For more information, see
Displaying the Google logo and attributions .
Place Autocomplete (Legacy) can match on full words and substrings,
resolving place names, addresses, and plus
codes . Applications can therefore send queries as the user types, to provide
on-the-fly place predictions.
You must properly format plus codes. This means you must URL-escape the plus sign to
%2B , and you must URL-escape spaces to %20 .
global code is a four character area code, and six character or longer
local code. For example, the URL-escape global code 849VCWC8+R9 is
849VCWC8%2BR9 .
compound code is a six character (or longer) local code with an
explicit location. For example, the URL-escaped compound code
CWC8+R9 Mountain View, CA, USA is
CWC8%2BR9%20Mountain%20View%20CA%20USA .
The returned predictions are designed to be presented to the user to aid them
in selecting the place they want. You can send a
Place Details (Legacy)
request for more information about any of the places which are
returned.
A Place Autocomplete (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/autocomplete/ output ? parameters
where output may be either of the following values:
json (recommended) indicates output in JavaScript
Object Notation (JSON)
xml indicates output as XML
Certain parameters are required to initiate a Place Autocomplete (Legacy) request.
As is standard in URLs, all parameters are separated using the ampersand
( & ) character. The list of parameters and their possible
values are enumerated below.
Required parameters
input
The text string on which to search. The Place Autocomplete service will
return candidate matches based on this string and order results based on
their perceived relevance.
Optional parameters
components
A grouping of places to which you would like to restrict your results.
You can use components to filter by up to 5 countries.
Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible
country code. For example: components=country:fr would
restrict your results to places within France. Multiple countries must be
passed as multiple country:XX filters, with the pipe
character | as a separator. For example:
components=country:us|country:pr|country:vi|country:gu|country:mp
would restrict your results to places within the United States and its
unincorporated organized territories.
Note: If you receive unexpected results with a country
code, verify that you are using a code which includes the countries,
dependent territories, and special areas of geographical interest you
intend. You can find code information at
Wikipedia: List of ISO 3166 country codes
or the
ISO Online Browsing Platform .
language
The language in which to return results.
See the
list of supported languages . Google often updates the supported languages, so this list may not be
exhaustive.
If language is not supplied, the API attempts to use the
preferred language as specified in the
Accept-Language header.
The API does its best to provide a street address that is readable for
both the user and locals. To achieve that goal, it returns street
addresses in the local language, transliterated to a script readable by
the user if necessary, observing the preferred language. All other
addresses are returned in the preferred language. Address components are
all returned in the same language, which is chosen from the first
component.
If a name is not available in the preferred language, the API uses the
closest match.
The preferred language has a small influence on the set of results that
the API chooses to return, and the order in which they are returned. The
geocoder interprets abbreviations differently depending on language,
such as the abbreviations for street types, or synonyms that may be
valid in one language but not in another. For example, utca and
tér are synonyms for street in Hungarian.
location
The point around which to retrieve place information. This must be
specified as latitude,longitude . The
radius parameter must also be provided when specifying a
location. If radius is not provided, the
location parameter is ignored.
When using the Text Search API, the `location` parameter may be overriden
if the `query` contains an explicit location such as `Market in
Barcelona`.
locationbias
Prefer results in a specified area, by specifying either a radius plus
lat/lng, or two lat/lng pairs representing the points of a rectangle. If
this parameter is not specified, the API uses IP address biasing by
default.
IP bias: Instructs the API to use IP address biasing. Pass the string
ipbias (this option has no additional parameters).
Circular: A string specifying radius in meters, plus lat/lng in decimal
degrees. Use the following format: circle:radius@lat,lng .
Rectangular: A string specifying two lat/lng pairs in decimal degrees,
representing the south/west and north/east points of a rectangle. Use
the following format: rectangle:south,west|north,east . Note
that east/west values are wrapped to the range -180, 180, and
north/south values are clamped to the range -90, 90.
locationrestriction
Restrict results to a specified area, by specifying either a radius plus
lat/lng, or two lat/lng pairs representing the points of a rectangle.
Circular: A string specifying radius in meters, plus lat/lng in decimal
degrees. Use the following format: circle:radius@lat,lng .
Rectangular: A string specifying two lat/lng pairs in decimal degrees,
representing the south/west and north/east points of a rectangle. Use
the following format: rectangle:south,west|north,east . Note
that east/west values are wrapped to the range -180, 180, and
north/south values are clamped to the range -90, 90.
offset
The position, in the input term, of the last character that the service
uses to match predictions. For example, if the input is
Google and the offset is 3, the service will match on
Goo . The string determined by the offset is matched against
the first word in the input term only. For example, if the input term is
Google abc and the offset is 3, the service will attempt to
match against Goo abc . If no offset is supplied, the service
will use the whole term. The offset should generally be set to the
position of the text caret.
origin
The origin point from which to calculate straight-line distance to the
destination (returned as distance_meters ). If this value is
omitted, straight-line distance won't be returned. Must be specified as
latitude,longitude .
radius
Defines the distance (in meters) within which to return place results. You
may bias results to a specified circle by passing a
location and a radius parameter. Doing so
instructs the Places service to prefer showing results within
that circle; results outside of the defined area may still be displayed.
The radius will automatically be clamped to a maximum value depending on
the type of search and other parameters.
Autocomplete: 50,000 meters
Nearby Search:
with keyword or name : 50,000 meters
without keyword or name
Up to 50,000 meters, adjusted dynamically based on area density,
independent of rankby parameter.
When using rankby=distance , the radius parameter
won't be accepted, and will result in an
INVALID_REQUEST .
Query Autocomplete: 50,000 meters
Text Search: 50,000 meters
region
The region code, specified as a
ccTLD ("top-level domain")
two-character value. Most ccTLD codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
sessiontoken
A random string which identifies an autocomplete
session
for billing purposes.
The session begins when the user starts typing a query, and concludes when
they select a place and a call to Place Details is made. Each session can
have multiple queries, followed by one place selection. The API key(s)
used for each request within a session must belong to the same Google
Cloud Console project. Once a session has concluded, the token is no
longer valid; your app must generate a fresh token for each session. If
the sessiontoken parameter is omitted, or if you reuse a
session token, the session is charged as if no session token was provided
(each request is billed separately).
We recommend the following guidelines:
Use session tokens for all autocomplete sessions.
Generate a fresh token for each session. Using a version 4 UUID is
recommended.
Ensure that the API key(s) used for all Place Autocomplete and Place
Details requests within a session belong to the same Cloud Console
project.
Be sure to pass a unique session token for each new session. Using the
same token for more than one session will result in each request being
billed individually.
strictbounds
Returns only those places that are strictly within the region defined by
location and radius . This is a restriction,
rather than a bias, meaning that results outside this region won't be
returned even if they match the user input.
types
You can restrict results from a Place Autocomplete request to be of a
certain type by passing the types parameter. This parameter
specifies a type or a type collection, as listed in
Place Types . If nothing is specified, all types are returned.
A place can only have a single primary type from types listed in
Table 1 or
Table 2 . For
example, a hotel where food is served may by returned only with types=lodging
and not with types=restaurant .
For the value of the types parameter you can specify either:
Up to five values from
Table 1
or
Table 2 . For multiple values, separate each value with a
| (vertical bar). For example:
types=book_store|cafe
Any single supported filter in
Table 3 . You cannot mix type collections.
Note: Although geocode and establishment are part of
Table 2, they cannot be combined with any other type in Tables 1, 2, or 3 in Place Autocomplete request filters.
The request will be rejected with an INVALID_REQUEST error
if:
More than five types are specified.
Any unrecognized types are present.
Any types from in
Table 1
or
Table 2
are mixed with any of the filters in
Table 3 .
Note: The types parameter only works on the primary type of the place,
not all types associated with the place. Although every place has a primary type, not every
primary type is supported by Places API (New). Supported types include those listed in
Table 1 or
Table 2 .
Place Autocomplete (Legacy) examples
A request for establishments containing the string "Amoeba" within
an area centered in San Francisco, CA:
URL
https : //maps.googleapis.com/maps/api/place/autocomplete/json
? input = amoeba
& types = establishment
& location = 37.76999 % 2 C - 122.44696
& radius = 500
& key = YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=YOUR_API_KEY'
The same request, restricted to results within 500 meters of Ashbury St & Haight St,
San Francisco:
URL
https : //maps.googleapis.com/maps/api/place/autocomplete/json
? input = amoeba
& types = establishment
& location = 37.76999 % 2 C - 122.44696 & radius = 500
& strictbounds = true
& key = YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&strictbounds=true&key=YOUR_API_KEY'
A request for addresses containing "Vict" with results in French:
URL
https : //maps.googleapis.com/maps/api/place/autocomplete/json
? input = Vict
& types = geocode
& language = fr
& key = YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=geocode&language=fr&key=YOUR_API_KEY'
A request for cities containing "Vict" with results in Brazilian Portuguese:
URL
https : //maps.googleapis.com/maps/api/place/autocomplete/json
? input = Vict
& types =( cities )
& language = pt_BR & key = YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pt_BR&key=YOUR_API_KEY'
Note that you'll need to replace the
API key
in these examples with your own key.
Place Autocomplete (Legacy) response
Place Autocomplete (Legacy) responses are returned in the format indicated by the
output flag within the request's URL path. The results below are
indicative of what may be returned for a query with the following
parameters:
URL
https : //maps.googleapis.com/maps/api/place/autocomplete/json
? input = Paris
& types = geocode
& key = YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=YOUR_API_KEY'
JSON
{
"predictions" :
[
{
"description" : "Paris, France" ,
"matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"place_id" : "ChIJD7fiBh9u5kcRYJSMaMOCCwQ" ,
"reference" : "ChIJD7fiBh9u5kcRYJSMaMOCCwQ" ,
"structured_formatting" :
{
"main_text" : "Paris" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "France" ,
},
"terms" :
[
{ "offset" : 0 , "value" : "Paris" },
{ "offset" : 7 , "value" : "France" },
],
"types" : [ "locality" , "political" , "geocode" ],
},
{
"description" : "Paris, TX, USA" ,
"matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"place_id" : "ChIJmysnFgZYSoYRSfPTL2YJuck" ,
"reference" : "ChIJmysnFgZYSoYRSfPTL2YJuck" ,
"structured_formatting" :
{
"main_text" : "Paris" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "TX, USA" ,
},
"terms" :
[
{ "offset" : 0 , "value" : "Paris" },
{ "offset" : 7 , "value" : "TX" },
{ "offset" : 11 , "value" : "USA" },
],
"types" : [ "locality" , "political" , "geocode" ],
},
{
"description" : "Paris, TN, USA" ,
"matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"place_id" : "ChIJ4zHP-Sije4gRBDEsVxunOWg" ,
"reference" : "ChIJ4zHP-Sije4gRBDEsVxunOWg" ,
"structured_formatting" :
{
"main_text" : "Paris" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "TN, USA" ,
},
"terms" :
[
{ "offset" : 0 , "value" : "Paris" },
{ "offset" : 7 , "value" : "TN" },
{ "offset" : 11 , "value" : "USA" },
],
"types" : [ "locality" , "political" , "geocode" ],
},
{
"description" : "Paris, Brant, ON, Canada" ,
"matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"place_id" : "ChIJsamfQbVtLIgR-X18G75Hyi0" ,
"reference" : "ChIJsamfQbVtLIgR-X18G75Hyi0" ,
"structured_formatting" :
{
"main_text" : "Paris" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "Brant, ON, Canada" ,
},
"terms" :
[
{ "offset" : 0 , "value" : "Paris" },
{ "offset" : 7 , "value" : "Brant" },
{ "offset" : 14 , "value" : "ON" },
{ "offset" : 18 , "value" : "Canada" },
],
"types" : [ "neighborhood" , "political" , "geocode" ],
},
{
"description" : "Paris, KY, USA" ,
"matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"place_id" : "ChIJsU7_xMfKQ4gReI89RJn0-RQ" ,
"reference" : "ChIJsU7_xMfKQ4gReI89RJn0-RQ" ,
"structured_formatting" :
{
"main_text" : "Paris" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "KY, USA" ,
},
"terms" :
[
{ "offset" : 0 , "value" : "Paris" },
{ "offset" : 7 , "value" : "KY" },
{ "offset" : 11 , "value" : "USA" },
],
"types" : [ "locality" , "political" , "geocode" ],
},
],
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<AutocompletionResponse>
<status>OK</status>
<prediction>
<description>Paris, France</description>
<type>locality</type>
<type>political</type>
<type>geocode</type>
<reference>ChIJD7fiBh9u5kcRYJSMaMOCCwQ</reference>
<term>
<value>Paris</value>
<offset>0</offset>
</term>
<term>
<value>France</value>
<offset>7</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<place_id>ChIJD7fiBh9u5kcRYJSMaMOCCwQ</place_id>
<structured_formatting>
<description>Paris</description>
<subdescription>France</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>Paris, TX, USA</description>
<type>locality</type>
<type>political</type>
<type>geocode</type>
<reference>ChIJmysnFgZYSoYRSfPTL2YJuck</reference>
<term>
<value>Paris</value>
<offset>0</offset>
</term>
<term>
<value>TX</value>
<offset>7</offset>
</term>
<term>
<value>USA</value>
<offset>11</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<place_id>ChIJmysnFgZYSoYRSfPTL2YJuck</place_id>
<structured_formatting>
<description>Paris</description>
<subdescription>TX, USA</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>Paris, TN, USA</description>
<type>locality</type>
<type>political</type>
<type>geocode</type>
<reference>ChIJ4zHP-Sije4gRBDEsVxunOWg</reference>
<term>
<value>Paris</value>
<offset>0</offset>
</term>
<term>
<value>TN</value>
<offset>7</offset>
</term>
<term>
<value>USA</value>
<offset>11</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<place_id>ChIJ4zHP-Sije4gRBDEsVxunOWg</place_id>
<structured_formatting>
<description>Paris</description>
<subdescription>TN, USA</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>Paris, Brant, ON, Canada</description>
<type>neighborhood</type>
<type>political</type>
<type>geocode</type>
<reference>ChIJsamfQbVtLIgR-X18G75Hyi0</reference>
<term>
<value>Paris</value>
<offset>0</offset>
</term>
<term>
<value>Brant</value>
<offset>7</offset>
</term>
<term>
<value>ON</value>
<offset>14</offset>
</term>
<term>
<value>Canada</value>
<offset>18</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<place_id>ChIJsamfQbVtLIgR-X18G75Hyi0</place_id>
<structured_formatting>
<description>Paris</description>
<subdescription>Brant, ON, Canada</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>Paris, KY, USA</description>
<type>locality</type>
<type>political</type>
<type>geocode</type>
<reference>ChIJsU7_xMfKQ4gReI89RJn0-RQ</reference>
<term>
<value>Paris</value>
<offset>0</offset>
</term>
<term>
<value>KY</value>
<offset>7</offset>
</term>
<term>
<value>USA</value>
<offset>11</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<place_id>ChIJsU7_xMfKQ4gReI89RJn0-RQ</place_id>
<structured_formatting>
<description>Paris</description>
<subdescription>KY, USA</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
</structured_formatting>
</prediction>
</AutocompletionResponse>
PlacesAutocompleteResponse
Field
Required
Type
Description
predictions
required
Array< PlaceAutocompletePrediction >
Contains an array of predictions.
See
PlaceAutocompletePrediction
for more information.
status
required
PlacesAutocompleteStatus
Contains the status of the request, and may contain debugging
information to help you track down why the request failed.
See
PlacesAutocompleteStatus for
more information.
error_message
optional
string
When the service returns a status code other than
OK< , there may be an additional
error_message field within the response object. This
field contains more detailed information about thereasons behind the
given status code. This field is not always returned, and its
content is subject to change.
info_messages
optional
Array<string>
When the service returns additional information about the request
specification, there may be an additional
info_messages field within the response object. This
field is only returned for successful requests. It may not always be
returned, and its content is subject to change.
Of particular interest within the results are the place_id
elements, which can be used to request more specific details about the
place using a separate query. See
Place Details (Legacy)
requests .
An XML response consists of a single
<AutocompletionResponse> element with two types of child
elements:
A single <status> element contains metadata on the
request. See
Status Codes below.
Zero or more <prediction> elements, each containing
information about a single place. See
Place Autocomplete (Legacy) Results for
information about these results. The Places API returns
up to 5 results.
We recommend that you use json as the preferred output flag
unless your application requires xml for some reason.
Processing XML trees requires some care, so that you reference proper nodes
and elements. See
Processing
XML with XPath for help processing XML.
The street_number address component may not be
present in Place Details (Legacy) responses for place IDs in some autocomplete
predictions. This typically happens when the address cannot be interpolated for
a place. In these cases, the prediction's types array will contain
"route". For autocomplete predictions with a number in the description (input
query is matched), the Place Details (Legacy) response for the place ID contains the
street number only if the types array for the prediction contains at
least one of:
street_address
premise
establishment
PlacesAutocompleteStatus
Status codes returned by service.
OK indicating the API request was successful.
ZERO_RESULTS indicating that the search was successful but
returned no results. This may occur if the search was passed a bounds in a
remote location.
INVALID_REQUEST indicating the API request was malformed,
generally due to the missing input parameter.
OVER_QUERY_LIMIT indicating any of the following:
You have exceeded the QPS limits.
Billing has not been enabled on your account.
The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
The provided method of payment is no longer valid (for example, a credit
card has expired).
See the
Maps FAQ
for more information about how to resolve this error.
REQUEST_DENIED indicating that your request was denied,
generally because:
The request is missing an API key.
The key parameter is invalid.
UNKNOWN_ERROR indicating an unknown error.
When the Places service returns JSON results from a search, it places them
within a predictions array. Even if the service returns
no results (such as if the location is remote) it
still returns an empty predictions array. XML responses consist
of zero or more <prediction> elements.
PlaceAutocompletePrediction
Field
Required
Type
Description
description
required
string
Contains the human-readable name for the returned result. For
establishment results, this is usually the business
name. This content is meant to be read as-is. Don't
programmatically parse the formatted address.
matched_substrings
required
Array< PlaceAutocompleteMatchedSubstring >
A list of substrings that describe the location of the entered term
in the prediction result text, so that the term can be highlighted
if chosen.
See
PlaceAutocompleteMatchedSubstring
for more information.
structured_formatting
required
PlaceAutocompleteStructuredFormat
Provides pre-formatted text that can be shown in your autocomplete
results. This content is meant to be read as-is. Don't
programmatically parse the formatted address.
See
PlaceAutocompleteStructuredFormat
for more information.
terms
required
Array< PlaceAutocompleteTerm >
Contains an array of terms identifying each section of the returned
description (a section of the description is generally terminated
with a comma). Each entry in the array has a
value field, containing the text of the term, and an
offset field, defining the start position of this term
in the description, measured in Unicode characters.
See PlaceAutocompleteTerm for
more information.
distance_meters
optional
integer
The straight-line distance in meters from the origin. This field is
only returned for requests made with an origin .
place_id
optional
string
A textual identifier that uniquely identifies a place. To retrieve
information about the place, pass this identifier in the placeId
field of a Places API request. For more information about place IDs,
see the
Place IDs
overview.
reference
optional
string
reference is deprecated.
See place_id.
types
optional
Array<string>
Contains an array of types that apply to this place. For example:
[ "political", "locality" ] or
[ "establishment", "geocode", "beauty_salon" ] . The
array can contain multiple values. Learn more about
Place types .
PlaceAutocompleteMatchedSubstring
Field
Required
Type
Description
length
required
number
Length of the matched substring in the prediction result text.
offset
required
number
Start location of the matched substring in the prediction result
text.
PlaceAutocompleteStructuredFormat
Field
Required
Type
Description
main_text
required
string
Contains the main text of a prediction, usually the name of the
place.
main_text_matched_substrings
required
Array< PlaceAutocompleteMatchedSubstring >
Contains an array with offset value and
length . These describe the location of the entered term
in the prediction result text, so that the term can be highlighted
if chosen.
See
PlaceAutocompleteMatchedSubstring
for more information.
secondary_text
optional
string
Contains the secondary text of a prediction, usually the location of
the place.
secondary_text_matched_substrings
optional
Array< PlaceAutocompleteMatchedSubstring >
Contains an array with offset value and
length . These describe the location of the entered term
in the prediction result text, so that the term can be highlighted
if chosen.
See
PlaceAutocompleteMatchedSubstring
for more information.
PlaceAutocompleteTerm
Field
Required
Type
Description
offset
required
number
Defines the start position of this term in the description, measured
in Unicode characters
value
required
string
The text of the term.
Place Autocomplete (Legacy) optimization
This section describes best practices to help you make the most of the
Place Autocomplete (Legacy) service.
Here are some general guidelines:
The quickest way to develop a working user interface is to use the
Maps JavaScript API Place Autocomplete (Legacy) widget ,
Places SDK for Android Place Autocomplete (Legacy) widget ,
or Places SDK for iOS Place Autocomplete (Legacy) UI control .
Understand essential
Place Autocomplete (Legacy) data fields
from the start.
Location biasing and location restriction fields are optional but can
have a significant impact on autocomplete performance.
Use error handling to make sure your app degrades gracefully
if the API returns an error.
Make sure your app handles when there is no selection and offers users a way
to continue.
Cost optimization best practices
Basic cost optimization
To optimize the cost of using the Place Autocomplete (Legacy)
service, use field masks in Place Details (Legacy) and Place Autocomplete (Legacy) widgets to return only the
Place Autocomplete (Legacy) data fields
you need.
Advanced cost optimization
Consider programmatic implementation of Place Autocomplete (Legacy) in order to access
SKU: Autocomplete - Per Request pricing
and request Geocoding API results about the selected place instead of Place Details (Legacy). Per-request pricing paired with Geocoding API is more cost-effective than per-session (session-based) pricing if both of the following conditions are met:
If you only need the latitude/longitude or address of the user's selected place, the Geocoding API delivers this information for less than a Place Details (Legacy) call.
If users select an autocomplete prediction within an average of four Place Autocomplete (Legacy) predictions requests or fewer, per-request pricing may be more cost-effective than per-session pricing.
For help selecting the Place Autocomplete (Legacy) implementation that fits your needs, select the tab that corresponds to your answer to the following question.
Does your application require any information other than the address and latitude/longitude of the selected prediction?
Yes, needs more details
Use session-based Place Autocomplete (Legacy) with Place Details (Legacy).
Since your application requires Place Details (Legacy), such as the place name, business status,
or opening hours, your implementation of Place Autocomplete (Legacy) should use a session token
( programmatically or built into the
JavaScript ,
Android ,
or iOS
widgets) per session
plus applicable Places Data SKUs ,
depending on which place data fields you request. 1
Widget implementation
Session management is automatically built into the
JavaScript ,
Android ,
or iOS
widgets. This includes both the Place Autocomplete (Legacy) requests and the Place Details (Legacy) request
on the selected prediction. Be sure to specify the fields parameter in order to
ensure you are only requesting the
Place Autocomplete (Legacy) data fields
you need.
Programmatic implementation
Use a
session token
with your Place Autocomplete (Legacy) requests. When requesting Place Details (Legacy) about the selected prediction, include the following parameters:
The place ID from the Place Autocomplete (Legacy) response
The session token used in the Place Autocomplete (Legacy) request
The fields parameter specifying the
Place Autocomplete (Legacy) data fields
you need
No, needs only address and location
Geocoding API could be a more cost-effective option than Place Details (Legacy) for your application, depending on the performance of your Place Autocomplete (Legacy) usage. Every application's Place Autocomplete (Legacy) efficiency varies depending on what users are entering, where the application is being used, and whether performance optimization best practices have been implemented.
In order to answer the following question, analyze how many characters a user types on average before selecting a Place Autocomplete (Legacy) prediction in your application.
Do your users select a Place Autocomplete (Legacy) prediction in four or fewer requests, on average?
Yes
Implement Place Autocomplete (Legacy) programmatically without session tokens and call Geocoding API on the selected place prediction.
Geocoding API delivers addresses and latitude/longitude coordinates.
Making four
Autocomplete - Per Request
requests plus a Geocoding API
call about the selected place prediction is less than the per-session Place Autocomplete (Legacy)
cost per session. 1
Consider employing performance best practices to help your users get the prediction they're looking for in even fewer characters.
No
Use session-based Place Autocomplete (Legacy) with Place Details (Legacy).
Since the average number of requests you expect to make before a user selects a
Place Autocomplete (Legacy) prediction exceeds the cost of per-session pricing, your implementation
of Place Autocomplete (Legacy) should use a session token for both the Place Autocomplete (Legacy) requests
and the associated Place Details (Legacy) request
per session .
1
Widget implementation
Session management is automatically built into the
JavaScript ,
Android ,
or iOS
widgets. This includes both the Place Autocomplete (Legacy) requests and the Place Details (Legacy)
request on the selected prediction. Be sure to specify the fields parameter
in order to ensure you are only requesting the fields you need.
Programmatic implementation
Use a
session token
with your Place Autocomplete (Legacy) requests.
When requesting Place Details (Legacy) about the selected prediction,
include the following parameters:
The place ID from the Place Autocomplete (Legacy) response
The session token used in the Place Autocomplete (Legacy) request
The fields parameter specifying
Basic Data fields
such as address and geometry
Consider delaying Place Autocomplete (Legacy) requests
You can employ strategies such as delaying a Place Autocomplete (Legacy) request until the user has typed in the first three or four characters so that your application makes fewer requests. For example, making Place Autocomplete (Legacy) requests for each character after the user has typed the third character means that if the user types seven characters then selects a prediction for which you make one Geocoding API request, the total cost would be for 4 Place Autocomplete (Legacy) Per Request + Geocoding. 1
If delaying requests can get your average programmatic request below four, you can follow the guidance for performant Place Autocomplete (Legacy) with Geocoding API implementation. Note that delaying requests can be perceived as latency by the user who might be expecting to see predictions with every new keystroke.
Consider employing performance best practices to help your users get the prediction they're looking for in fewer characters.
For costs, see Google Maps Platform pricing lists .
Performance best practices
The following guidelines describe ways to optimize Place Autocomplete (Legacy) performance:
Add country restrictions,
location biasing ,
and (for programmatic implementations) language preference to your Place Autocomplete (Legacy)
implementation. Language preference is not needed
with widgets since they pick language preferences from the user's browser or mobile device.
If Place Autocomplete (Legacy) is accompanied by a map, you can bias location by map viewport.
In situations when a user does not choose one of the Place Autocomplete (Legacy) predictions, generally
because none of those predictions are the result-address wanted, you can reuse the original
user input to attempt to get more relevant results:
If you expect the user to enter only address information, reuse the original user input
in a call to the Geocoding API .
If you expect the user to enter queries for a specific place by name or address,
use a Place Details (Legacy) request . If results are only expected in a specific region, use location biasing .
Other scenarios when it's best to fall back to the Geocoding API include:
Users inputting subpremise addresses, such as addresses for specific units or apartments
within a building. For example, the Czech address "Stroupežnického 3191/17, Praha"
yields a partial prediction in Place Autocomplete (Legacy).
Users inputting addresses with road-segment prefixes like "23-30 29th St, Queens" in
New York City or "47-380 Kamehameha Hwy, Kaneohe" on the island of Kauai in Hawai'i.
Location biasing
Bias results to a specified area by passing a location parameter and a radius
parameter. This instructs Place Autocomplete (Legacy) to prefer showing results
within the defined area. Results outside of the defined area may still be
displayed. You can use the includedRegionCodes parameter to filter results
to show only those places within a specified country.
Warning: If radius is not provided, the location parameter is ignored.
Establishment results generally don't rank highly
enough to show in results when the search area is large. If you want
establishments to appear in mixed establishment/geocode results, you can
specify a smaller radius. Alternatively, use types=establishment
to restrict results to establishments only.
Location restricting
Restrict results to a specified area by passing a locationRestriction parameter.
You may also restrict results to the region defined by location
and a radius parameter, by adding the
strictbounds
parameter. This instructs Place Autocomplete (Legacy) to return only
results within that region.
Note: Location restrictions are only applied to entire routes.
Synthetic results located outside the location restriction may be returned based on a route that
overlaps with the location restriction.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
