---
title: "Policies and attributions for Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/policies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/policies
  title: "Policies and attributions for Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Resources
Send feedback
Policies and attributions for Places API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Applications using the Places API must provide publicly accessible Terms of Use and a Privacy Policy that incorporate Google's Terms of Service and Privacy Policy, respectively.
You must not pre-fetch, cache, or store Places API content beyond the allowed exceptions, although the place_id is exempt from caching restrictions.
Places API results displayed on a map must be shown on a Google Map, with proper attribution including the Google logo and third-party data providers, if applicable.
When displaying Places API data without a Google Map, you must include the Google logo, adhering to the provided style guidelines and attribution requirements.
You must retrieve and display attributions for place details, photos, and reviews obtained through the Places API, including author information and links where available.
This document lists requirements that are specific to all applications
developed with the Places API (New), including the Autocomplete (New)
service that is part of that API. More general information for Google Maps
developers may be found in the
Google Maps Platform Terms of Service .
Policies
This section describes policies relevant to Places API. Policies provide practical
implementation guidelines and requirements to help you use the Service
correctly and in line with Google Maps Platform's expectations.
Exceptions from caching restrictions
Note that the place ID , used to uniquely identify a place, is
exempt from the caching restrictions .
You can therefore store place ID values indefinitely.
The place ID is returned in the place_id field in
API responses. Learn how to save, refresh, and manage place IDs in the Place IDs guide .
European Economic Area countries and territories
This product has different Terms of Service for customers with a billing address in the
European Economic Area (EEA), and it may also have different functionality.
Before building with Google Maps Platform, review the following EEA-specific
terms and information:
Google Maps Platform EEA Terms of Service
Google Maps Platform EEA Service Specific Terms
EEA frequently asked questions (FAQ)
Google Maps Platform Road Safety Requirements
If your billing address is not in the EEA, the following terms of service apply to you:
Google Maps Platform Terms of Service
Google Maps Platform Service Specific Terms
Google Maps attribution requirements
This section provides attribution requirements and guidelines for displaying Google
Maps and Content through your applications.
Note: The following updated attribution requirements now use "Google Maps"
instead of only "Google." We acknowledge that your existing implementations may use the
attribution of "Google,"
in alignment with prior guidance, and you may continue using "Google" as an attribution for now.
For new implementations, use "Google Maps" as described in this section. In the future,
we will provide timelines and instructions to help you transition existing "Google" attributions
to "Google Maps" attributions.
Display Google Maps attribution
You must follow Google Maps attribution requirements when displaying Content from
Google Maps Platform APIs in your app or website. You don't need to add extra attribution
if the Content is shown on a Google Map where the attribution is already visible.
Included Google Maps attribution
For Google Maps attribution that is already provided by Google Maps Platform in
the user interface, such as in Places UI Kit:
Don't remove included attribution regardless of where it is displayed. Don't alter, hide,
or obscure the attribution and make sure it is clearly visible against the background.
Always visually distinguish Google Maps Platform Content from other content by using UI
cues such as a border, background color, shadow, or sufficient whitespace.
When making visual modifications, you must adhere to all Google Maps attribution
requirements.
Google Maps logo and text attribution
Attribution should take the form of the Google Maps logo whenever possible.
In cases where space is limited, the text Google Maps is acceptable.
It must always be clear to end users which content is provided by Google Maps.
Left: Google Maps logo attribution, Right: Google Maps text attribution
Logo attribution
Follow these requirements for using the Google Maps logo in your app or website.
Acceptable variations for Google Maps logo attribution
Download Google Maps logos
Use the official Google Maps logo files. Download the logos below, and follow the guidelines in this section.
Download the Google Maps attribution assets
When using the Google Maps logo, follow these guidelines.
Don't modify the logo in any way.
Maintain the aspect ratio of the logo to prevent distortion.
Use the outlined logo on a busy background, like a map or image.
Use the non-outlined logo on a plain background, like a solid color or subtle gradient.
Logo size specification
Follow these size specifications for the Google Maps logo:
Minimum logo height: 16dp
Maximum logo height: 19dp
Minimum logo clear space: 10dp on left, right and top, 5dp on the bottom
To learn about dp, see Pixel density on the Material Design website.
Google Maps logo showing minimum clear space and acceptable size range
Logo accessibility
Follow these accessibility requirements for the Google Maps logo:
Maintain an accessible contrast between the logo and the background.
Include an accessibility label with the text Google Maps .
Unacceptable variations and accessibility issues for Google Maps logo attribution
Text attribution
If the size of your interface does not support using the Google Maps logo, you can spell out Google Maps in text. Follow these guidelines:
Acceptable variations of the Google Maps text attribution
Don't modify the text Google Maps in any way:
Don't change the capitalization of Google Maps
Don't wrap Google Maps onto multiple lines
Don't localize Google Maps into another language.
Prevent browsers from translating Google Maps by using the HTML attribute translate="no" .
Unacceptable variations of the Google Maps text attribution
Style Google Maps text as described in the following table:
Google Maps text-styling requirements
Property
Style
Font family
Roboto . Loading the font is optional.
Fallback font family
Any sans serif body font already used in your product or "Sans-Serif" to invoke the default system font
Font style
Normal
Font weight
400
Font color
White, black (#1F1F1F), or gray (#5E5E5E). Maintain accessible (4.5:1) contrast against the background.
Font size
Minimum font size: 12sp
Maximum font size: 16sp
To learn about sp, see Font size units on the Material Design website.
Letter spacing
Normal
Example CSS
The following CSS renders Google Maps with the appropriate typographic style and color on a white or light background.
@import url ( 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' );
. GMP - attribution {
font - family : Roboto , Sans - Serif ;
font - style : normal ;
font - weight : 400 ;
font - size : 1 rem ;
letter - spacing : normal ;
white - space : nowrap ;
color : #5e5e5e;
}
Visual requirements
Follow these requirements for the visual treatment of Google Maps attribution.
Position attribution near the top or bottom of the content, and within the same visual container. For a single line of content, attribution can be positioned to the right or left.
Visually distinguish Google Maps Platform Content from other content by using UI cues such as a border, background color, shadow, or sufficient whitespace.
Don't misrepresent Google Maps by attributing it with non-Google Maps Platform content.
Verify that the attribution is always visible and legible. Never remove, hide, obscure, or modify it.
The following figures show examples of these visual requirements.
Example of Google Maps attribution positioned at the top, at the bottom, and to the side of the content
Example of three approaches to differentiating Google Maps Content (the place rating) from other content
Don't obscure the Google Maps attribution or mix it with content from other sources
Third-party data providers
Some of the data and images on our mapping products come from providers other than Google.
For some products, such as Map Tiles API, we may provide you with the required attribution
to the third-party data provider. When we do, the text of your
attribution must say the name "Google Maps" and the relevant
data provider(s), such as "Map data: Google, Maxar Technologies." When Google provides
third-party attribution, only including "Google Maps" or the Google logo is not
proper attribution.
Other attribution requirements
The following attribution requirements are specific to the Places API.
Autocomplete for end user addresses
When an end user uses Autocomplete functionality within your Customer Application to type
ahead a street address and that street address would have been completely and accurately provided
by that end user without Autocomplete, the end user's selected address is then
not subject to the Google Maps Content restrictions in your Google Maps Platform Agreement.
This exception applies only to the street address selected by the end user and solely for
that end user's specific transaction; it does not apply to the list of suggested addresses
provided by the Autocomplete functionality or to other Google Maps Content. This exception does
not apply to any POI or address lookup functionality offered by other Google Maps Platform
Services.
In the previous image, the address list on the left is still subject to the restrictions on
Google Maps Content. Once the end user selects their chosen address, that address is not subject
to the restrictions on Google Maps Content solely for the purpose of that end user's
applicable transaction.
Third-party attributions
Follow these instructions to retrieve third-party attributions, and to display
the attributions in your app.
Note:
Reviews and photos provided through the Places API are
subject to Google's content and product policies wherever you are in the world.
To report content that you or your users would like removed from Google's
services under Google's policies or applicable laws, see
Report Content On Google .
Retrieve attributions from a Place
If your app displays information obtained by calling
Place Details with a place ID,
the app must also display third-party attributions for the place details obtained.
Attributions in the
Place
object of a response are represented by an
Attribution
object. To add the Attribution to the response, include
places.attributions (Nearby Search and Text Search) or attributions
(Place Details) in the
field mask of the request.
The fields of Attribution object are strings containing the provider
and providerUri of the attribution, or an empty string if there are no attributions to
display.
Display attributions for a photo
If your app displays photos, you must show author attributions for each photo that has them.
Details about the photo in a
Place
object of a response are contained in the photos array. To add the photos
array to the response, include places.photos (Nearby Search and Text Search) or
photos (Place Details) in the
field mask of the request.
Each element of the photos array is an instance of
Photo ,
which contains the authorAttributions array, of type
AuthorAttribution .
The fields of AuthorAttribution object are strings containing the
displayName , uri , and photoUri of the attribution, or an
empty string if there are no attributions to display.
Display a review
A Place
object in a response can contain up to five reviews. You can optionally display these reviews in
your app.
When displaying reviews contributed by Google users, you must place the
author's name in close proximity. When available in the author attribution field
of the Review object, we recommend you include the author's photo
and link to their profile as well. The following image shows an example of a
review of a park:
Google also recommends that you display how reviews are being sorted to the end user.
Note: The default is to sort the reviews by
relevance. For the new API, sorting by relevance is the only option.
Each review in a
Place
object of a response is represented by a
Review
object. To add the Review object to the response, include places.reviews
(Nearby Search and Text Search) or reviews (Place Details) in the
field mask of the request.
The fields of the Review object contain the attribution, or are empty if there is
no attribution to display.
Search results attributions
In Europe, when using Google's unadulterated ranking, search products must have explainer text no
more than 1 click away that describes the main factors and the weighting of the main factors that
determine search results ranking. Explainer text:
Header: About these results
Body: When you search for businesses or places near a location, Google Maps will show you
local results. Several factors — primarily relevance, distance and prominence — are combined to
help find the best results for your search.
Button 1: Learn more
"Learn more" text should link to a Help Center article .
Button 2: OK
AI-powered summaries
When you display AI-powered summaries in your app — including place, area, and
review summaries — you must do the following:
Display the required attributions, reporting links, and reference links as
defined below.
End users must be able to read the full summary text as it is provided by
Google Maps.
Display AI-powered summaries disclosure text
When displaying an AI-powered summary of any type, always include the localized
disclosure text (provided in the disclosureText field of the response body)
immediately below the summary. Never modify or augment the disclosure text
provided by the API.
Figure 1 : Disclosure text properly displayed below each of the three AI-powered summary types.
Place and area summary additional requirements
Place and area
summaries displayed in
your app must be accompanied by the following text and required links:
Text
Requirement
About this summary
Use the following link to "How Google sources and uses information in local listings": https://support.google.com/local-listings/answer/9851099 .
Report summary
Use the link contained in the flagContentUri field of the response to enable reporting an issue to Google about the content of a summary.
Note: AI-powered summaries provided through the Places API (New) are subject to Google's content and product policies wherever you are in the world. You are required to notify your end users that if they would like to report content that should be removed from Google's services under applicable laws, they should report it using the provided flag content URL ( flagContentUri ).
Figure 2 : AI-powered area summary shown with required associated links made available to end users using an overflow menu.
Review summary requirements
Review summaries
displayed in your app must be accompanied by a heading with the text "Review
summary." Additionally, you must use the following text and required links:
Text
Requirement
About this summary
Use the following link to "How Google sources and uses information in local listings": https://support.google.com/local-listings/answer/9851099
Report summary
Use the link contained in the flagContentUri field of the response.
Note: AI-powered summaries provided through the Places API (New) are subject to Google's content and product policies wherever you are in the world. You are required to notify your end users that if they would like to report content that should be removed from Google's services under applicable laws, they should report it using the provided flag content URL ( flagContentUri ).
See reviews
Use the link contained in the reviewSummary.reviewsUri field of the response.
Figure 3 : AI-powered review summary shown with required associated links made available to end users using an overflow menu.
Display guidance for automotive use cases
For driver safety, Google recommends rendering AI-powered summaries in parked
mode for automotive experiences. If rendering summaries in driving mode,
on-screen information should be simple, clear, and concise to ensure that the
driver's attention returns quickly to the road:
No more than 3 lines
120 characters or 24 words or less
Minimum front size of 24dp
Especially in automotive contexts, it's the developer's responsibility to render
AI-powered summaries in ways that are safe and compliant with all local laws and
regulations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places API must provide publicly available Terms of Use and a Privacy Policy, explicitly referencing Google's terms. Content, except for place IDs, cannot be cached or stored unless permitted by agreement. Places API results must display on a Google Map, if a map is used. When displaying data without a map, the Google logo must be present, and attributions must be displayed in proximity, not obscured, and include third-party data providers. Search products in Europe must explain the factors determining search result ranking. Style guidelines for Google attribution are provided, including font, color, and spacing.\n"]]
