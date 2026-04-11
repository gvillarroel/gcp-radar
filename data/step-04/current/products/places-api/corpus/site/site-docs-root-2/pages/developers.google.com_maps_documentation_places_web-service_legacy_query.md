---
title: "Query Autocomplete (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/query
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/query
  title: "Query Autocomplete (Legacy) \_|\_ Places API \_|\_ Google for Developers"
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
Query Autocomplete (Legacy)
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
Query Autocomplete (Legacy) can be used to provide a query prediction
for text-based geographic searches, by returning suggested queries as you
type.
Query Autocomplete (Legacy) requests
Query Autocomplete (Legacy) is part of the
Places API (Legacy) and shares an
API key and quota with the
Places API (Legacy).
Query Autocomplete (Legacy) lets you add on-the-fly geographic
query predictions to your application. Instead of searching for a specific
location, a user can type in a categorical search, such as "pizza near
New York" and the service responds with a list of suggested queries
matching the string. As Query Autocomplete (Legacy) can match on both full
words and substrings, applications can send queries as the user types to
provide on-the-fly predictions.
A Query Autocomplete (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/queryautocomplete/ output ? parameters
where output may be either json or
xml .
Certain parameters are required to initiate a Query Autocomplete (Legacy) request.
As is standard in URLs, all parameters are separated using the ampersand
( & ) character. The list of parameters and their possible
values are enumerated below.
Required parameters
input
The text string on which to search. The Place Autocomplete service will
return candidate matches based on this string and order results based on
their perceived relevance.
Optional parameters
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
Defines a point, as latitude,longitude coordinates, around which to search.
The Places service uses the location to bias the search to prefer to show results in
the area defined by location and radius ; results outside of the
defined area may still be displayed.
The location parameter may be overridden if the
query contains an explicit location such as
Market in Barcelona . Using quotes around the query may also
influence the weight given to the location and
radius .
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
radius
Defines the distance (in meters) within which to return place results. You
may bias results to a specified circle by passing a
location and a radius parameter.
Doing so instructs the Places service to prefer showing results within
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
will not be accepted, and will result in an
INVALID_REQUEST .
Query Autocomplete: 50,000 meters
Text Search: 50,000 meters
Query Autocomplete (Legacy) examples
URL
https://maps.googleapis.com/maps/api/place/queryautocomplete/json
?input=pizza%20near%20par
&key=YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&key=YOUR_API_KEY'
A request "Pizza near Par", with results in French:
URL
https://maps.googleapis.com/maps/api/place/queryautocomplete/json
?input=pizza%20near%20par
&language=fr
&key=YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&language=fr&key=YOUR_API_KEY'
Note that you'll need to replace the
API key
in these examples with your own key.
Query Autocomplete (Legacy) response
Query Autocomplete (Legacy) Responses are returned in the format indicated by the
output flag within the URL request's path. The results below are
returned for a query with the following parameters:
URL
https://maps.googleapis.com/maps/api/place/queryautocomplete/json
?input=pizza%20near%20par
&key=YOUR_API_KEY
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&key=YOUR_API_KEY'
JSON
{
"predictions" :
[
{
"description" : "pizza near Paris, France" ,
"matched_substrings" :
[{ "length" : 5 , "offset" : 0 }, { "length" : 3 , "offset" : 11 }],
"structured_formatting" :
{
"main_text" : "pizza" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "near Paris, France" ,
"secondary_text_matched_substrings" : [{ "length" : 3 , "offset" : 5 }],
},
"terms" :
[
{ "offset" : 0 , "value" : "pizza" },
{ "offset" : 6 , "value" : "near" },
{ "offset" : 11 , "value" : "Paris" },
{ "offset" : 18 , "value" : "France" },
],
},
{
"description" : "pizza near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India" ,
"matched_substrings" :
[{ "length" : 5 , "offset" : 0 }, { "length" : 3 , "offset" : 11 }],
"structured_formatting" :
{
"main_text" : "pizza" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India" ,
"secondary_text_matched_substrings" : [{ "length" : 3 , "offset" : 5 }],
},
"terms" :
[
{ "offset" : 0 , "value" : "pizza" },
{ "offset" : 6 , "value" : "near" },
{ "offset" : 11 , "value" : "Pari Chowk" },
{ "offset" : 23 , "value" : "NRI City" },
{ "offset" : 33 , "value" : "Omega II" },
{ "offset" : 43 , "value" : "Noida" },
{ "offset" : 50 , "value" : "Uttar Pradesh" },
{ "offset" : 65 , "value" : "India" },
],
},
{
"description" : "pizza near Disneyland Park, Disneyland Drive, Anaheim, CA, USA" ,
"matched_substrings" :
[{ "length" : 5 , "offset" : 0 }, { "length" : 3 , "offset" : 22 }],
"structured_formatting" :
{
"main_text" : "pizza" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "near Disneyland Park, Disneyland Drive, Anaheim, CA, USA" ,
"secondary_text_matched_substrings" :
[{ "length" : 3 , "offset" : 16 }],
},
"terms" :
[
{ "offset" : 0 , "value" : "pizza" },
{ "offset" : 6 , "value" : "near" },
{ "offset" : 11 , "value" : "Disneyland Park" },
{ "offset" : 28 , "value" : "Disneyland Drive" },
{ "offset" : 46 , "value" : "Anaheim" },
{ "offset" : 55 , "value" : "CA" },
{ "offset" : 59 , "value" : "USA" },
],
},
{
"description" : "pizza near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France" ,
"matched_substrings" :
[{ "length" : 5 , "offset" : 0 }, { "length" : 3 , "offset" : 36 }],
"structured_formatting" :
{
"main_text" : "pizza" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France" ,
"secondary_text_matched_substrings" :
[{ "length" : 3 , "offset" : 30 }],
},
"terms" :
[
{ "offset" : 0 , "value" : "pizza" },
{ "offset" : 6 , "value" : "near" },
{ "offset" : 11 , "value" : "Cathédrale Notre-Dame de Paris" },
{ "offset" : 43 , "value" : "Parvis Notre-Dame - place Jean-Paul-II" },
{ "offset" : 83 , "value" : "Paris" },
{ "offset" : 90 , "value" : "France" },
],
},
{
"description" : "pizza near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France" ,
"matched_substrings" :
[{ "length" : 5 , "offset" : 0 }, { "length" : 3 , "offset" : 11 }],
"structured_formatting" :
{
"main_text" : "pizza" ,
"main_text_matched_substrings" : [{ "length" : 5 , "offset" : 0 }],
"secondary_text" : "near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France" ,
"secondary_text_matched_substrings" : [{ "length" : 3 , "offset" : 5 }],
},
"terms" :
[
{ "offset" : 0 , "value" : "pizza" },
{ "offset" : 6 , "value" : "near" },
{ "offset" : 11 , "value" : "Paris Beauvais Airport" },
{ "offset" : 35 , "value" : "Route de l'Aéroport" },
{ "offset" : 56 , "value" : "Tillé" },
{ "offset" : 63 , "value" : "France" },
],
},
],
"status" : "OK" ,
}
XML
<AutocompletionResponse>
<status>OK</status>
<prediction>
<description>pizza near Paris, France</description>
<term>
<value>pizza</value>
<offset>0</offset>
</term>
<term>
<value>near</value>
<offset>6</offset>
</term>
<term>
<value>Paris</value>
<offset>11</offset>
</term>
<term>
<value>France</value>
<offset>18</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<matched_substring>
<offset>11</offset>
<length>3</length>
</matched_substring>
<structured_formatting>
<description>pizza</description>
<subdescription>near Paris, France</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
<subdescription_matched_substring>
<offset>5</offset>
<length>3</length>
</subdescription_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>pizza near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India</description>
<term>
<value>pizza</value>
<offset>0</offset>
</term>
<term>
<value>near</value>
<offset>6</offset>
</term>
<term>
<value>Pari Chowk</value>
<offset>11</offset>
</term>
<term>
<value>NRI City</value>
<offset>23</offset>
</term>
<term>
<value>Omega II</value>
<offset>33</offset>
</term>
<term>
<value>Noida</value>
<offset>43</offset>
</term>
<term>
<value>Uttar Pradesh</value>
<offset>50</offset>
</term>
<term>
<value>India</value>
<offset>65</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<matched_substring>
<offset>11</offset>
<length>3</length>
</matched_substring>
<structured_formatting>
<description>pizza</description>
<subdescription>near Pari Chowk, NRI City, Omega II, Noida, Uttar Pradesh, India</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
<subdescription_matched_substring>
<offset>5</offset>
<length>3</length>
</subdescription_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>pizza near Disneyland Park, Disneyland Drive, Anaheim, CA, USA</description>
<term>
<value>pizza</value>
<offset>0</offset>
</term>
<term>
<value>near</value>
<offset>6</offset>
</term>
<term>
<value>Disneyland Park</value>
<offset>11</offset>
</term>
<term>
<value>Disneyland Drive</value>
<offset>28</offset>
</term>
<term>
<value>Anaheim</value>
<offset>46</offset>
</term>
<term>
<value>CA</value>
<offset>55</offset>
</term>
<term>
<value>USA</value>
<offset>59</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<matched_substring>
<offset>22</offset>
<length>3</length>
</matched_substring>
<structured_formatting>
<description>pizza</description>
<subdescription>near Disneyland Park, Disneyland Drive, Anaheim, CA, USA</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
<subdescription_matched_substring>
<offset>16</offset>
<length>3</length>
</subdescription_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>pizza near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France</description>
<term>
<value>pizza</value>
<offset>0</offset>
</term>
<term>
<value>near</value>
<offset>6</offset>
</term>
<term>
<value>Cathédrale Notre-Dame de Paris</value>
<offset>11</offset>
</term>
<term>
<value>Parvis Notre-Dame - place Jean-Paul-II</value>
<offset>43</offset>
</term>
<term>
<value>Paris</value>
<offset>83</offset>
</term>
<term>
<value>France</value>
<offset>90</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<matched_substring>
<offset>36</offset>
<length>3</length>
</matched_substring>
<structured_formatting>
<description>pizza</description>
<subdescription>near Cathédrale Notre-Dame de Paris, Parvis Notre-Dame - place Jean-Paul-II, Paris, France</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
<subdescription_matched_substring>
<offset>30</offset>
<length>3</length>
</subdescription_matched_substring>
</structured_formatting>
</prediction>
<prediction>
<description>pizza near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France</description>
<term>
<value>pizza</value>
<offset>0</offset>
</term>
<term>
<value>near</value>
<offset>6</offset>
</term>
<term>
<value>Paris Beauvais Airport</value>
<offset>11</offset>
</term>
<term>
<value>Route de l'Aéroport</value>
<offset>35</offset>
</term>
<term>
<value>Tillé</value>
<offset>56</offset>
</term>
<term>
<value>France</value>
<offset>63</offset>
</term>
<matched_substring>
<offset>0</offset>
<length>5</length>
</matched_substring>
<matched_substring>
<offset>11</offset>
<length>3</length>
</matched_substring>
<structured_formatting>
<description>pizza</description>
<subdescription>near Paris Beauvais Airport, Route de l'Aéroport, Tillé, France</subdescription>
<description_matched_substring>
<offset>0</offset>
<length>5</length>
</description_matched_substring>
<subdescription_matched_substring>
<offset>5</offset>
<length>3</length>
</subdescription_matched_substring>
</structured_formatting>
</prediction>
</AutocompletionResponse>
When the Places service returns JSON results from a search, it places them
within a predictions array. Even if the service returns
no results (such as if the location is remote) it
still returns an empty predictions array. XML responses consist
of zero or more <prediction> elements.
PlacesQueryAutocompleteResponse
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
When the service returns a status code other than OK ,
there may be an additional error_message field within
the response object. This field contains more detailed information
about thereasons behind the given status code. This field is not
always returned, and its content is subject to change.
info_messages
optional
Array<string>
When the service returns additional information about the request
specification, there may be an additional
info_messages field within the response object. This
field is only returned for successful requests. It may not always be
returned, and its content is subject to change.
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
name. This content is meant to be read as-is. Do not
programmatically parse the formatted address.
matched_substrings
required
Array< PlaceAutocompleteMatchedSubstring >
A list of substrings that describe the location of the entered term
in the prediction result text, so that the term can be highlighted
if desired.
See
PlaceAutocompleteMatchedSubstring
for more information.
structured_formatting
required
PlaceAutocompleteStructuredFormat
Provides pre-formatted text that can be shown in your autocomplete
results. This content is meant to be read as-is. Do not
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
if desired.
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
if desired.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
