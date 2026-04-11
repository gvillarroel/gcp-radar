---
title: "Place Types (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-types
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-types
  title: "Place Types (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Guides
Send feedback
Place Types (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place types categorize places based on their characteristics, like "restaurant" or "park", and a place can have multiple types.
You can use place types in your requests to filter results, ensuring you only receive places matching desired types.
Place type information is included in responses to Place Details, Nearby Search, Text Search, and Place Autocomplete requests.
There are two tables of place types: Table A for filtering and response types, and Table B for additional types returned in responses but not used for filtering.
Google Maps Places API uses the Place.getPlaceTypes() method to access the new place types in a Place object.
Select platform:
Android
iOS
JavaScript
Web Service
Place types are categories that identify the characteristics of a place.
A place can have one or more place types assigned to it.
A place's types are included in the response from a
Place Details (New),
Nearby Search (New), Text Search (New), and Autocomplete (New) request:
A place can have a single primary type from type
Table A or type Table B associated with it.
For example, the primary type might be mexican_restaurant or
steak_house .The primary type may be missing if the place's primary
type is not a supported type. When a primary type is present, it is always one
of the types in the types field.
A place can have multiple type values from type
Table A or type Table B associated with it.
For example a restaurant might have the following types :
seafood_restaurant , restaurant , food ,
point_of_interest , establishment .
The address and address components of a place can be tagged with certain types from the
Address types and address component types table. For example, an
address might be tagged as an street_address and a component of the address might
be tagged as a street_number .
You can also specify place types as part of a request . When specified in the
request, the type acts as a filter to restrict the response to only include
places that match the specified types.
Note: You must use the
Place.getPlaceTypes()
method to access the new types in a
Place
object. The
Place.getTypes()
method always returns the legacy types listed on Place Types .
If you don't enable Places SDK for Android (New), then
Place.getPlaceTypes() only supports the legacy place types shown in
Place Types .
About the type tables
Table A lists the types that are used in the
following ways:
As part of a response from Place Details (New),
Nearby Search (New), and
Text Search (New), the
values in Table A are used to populate the types property of the
Place
instance. The request must specify Place.Field.TYPES or
Place.Field.PRIMARY_TYPE in the field list.
As part of a Nearby Search (New) request, used as
the value of the included types, excluded types, included primary types,
and excluded primary types parameters.
As part of a Text Search (New) request, used as
the value of the included type parameter.
As part of a Place Autocomplete (New) request,
use as the values to the primary types parameter.
As part of a Place Autocomplete (New) response
used to populate the types property of the
AutocompletePrediction
instance.
Table B lists additional place type values
which may also be returned as part of a
Place Details (New),
Nearby Search (New),
Text Search (New), and
Place Autocomplete (New) response. The request must
specify Place.Field.TYPES or Place.Field.PRIMARY_TYPE
in the field list. Values from Table B NOT be used as part of a request, except
as the values to the primary types
parameter for a Place Autocomplete (New) request.
Address types and address component types list types that may appear
in either or both address type and address component type arrays in the response
body. Address component types are subject to change.
Table A
Note: Types with an asterisk (*) were added as part of the February 12,
2026 release.
Automotive
Business
Culture
Education
Entertainment and Recreation
Facilities
Finance
Food and Drink
Geographical Areas
Government
Health and Wellness
Housing
Lodging
Natural Features
Places of Worship
Services
Shopping
Sports
Transportation
Automotive
car_dealer
car_rental
car_repair
car_wash
ebike_charging_station *
electric_vehicle_charging_station
gas_station
parking
parking_garage *
parking_lot *
rest_stop
tire_shop *
truck_dealer *
Business
business_center *
corporate_office
coworking_space *
farm
manufacturer *
ranch
supplier *
television_studio *
Culture
art_gallery
art_museum *
art_studio
auditorium
castle *
cultural_landmark
fountain *
historical_place
history_museum *
monument
museum
performing_arts_theater
sculpture
Education
academic_department *
educational_institution *
library
preschool
primary_school
research_institute *
school
secondary_school
university
Entertainment and Recreation
adventure_sports_center
amphitheatre
amusement_center
amusement_park
aquarium
banquet_hall
barbecue_area
botanical_garden
bowling_alley
casino
childrens_camp
city_park *
comedy_club
community_center
concert_hall
convention_center
cultural_center
cycling_park
dance_hall
dog_park
event_venue
ferris_wheel
garden
go_karting_venue *
hiking_area
historical_landmark
indoor_playground *
internet_cafe
karaoke
live_music_venue *
marina
miniature_golf_course *
movie_rental
movie_theater
national_park
night_club
observation_deck
off_roading_area
opera_house
paintball_center *
park
philharmonic_hall
picnic_ground
planetarium
plaza
roller_coaster
skateboard_park
state_park
tourist_attraction
video_arcade
vineyard *
visitor_center
water_park
wedding_venue
wildlife_park
wildlife_refuge
zoo
Facilities
public_bath
public_bathroom
stable
Finance
accounting
atm
bank
Food and Drink
acai_shop
afghani_restaurant
african_restaurant
american_restaurant
argentinian_restaurant *
asian_fusion_restaurant *
asian_restaurant
australian_restaurant *
austrian_restaurant *
bagel_shop
bakery
bangladeshi_restaurant *
bar
bar_and_grill
barbecue_restaurant
basque_restaurant *
bavarian_restaurant *
beer_garden *
belgian_restaurant *
bistro *
brazilian_restaurant
breakfast_restaurant
brewery *
brewpub *
british_restaurant *
brunch_restaurant
buffet_restaurant
burmese_restaurant *
burrito_restaurant *
cafe
cafeteria
cajun_restaurant *
cake_shop *
californian_restaurant *
cambodian_restaurant *
candy_store
cantonese_restaurant *
caribbean_restaurant *
cat_cafe
chicken_restaurant *
chicken_wings_restaurant *
chilean_restaurant *
chinese_noodle_restaurant *
chinese_restaurant
chocolate_factory
chocolate_shop
cocktail_bar *
coffee_roastery *
coffee_shop
coffee_stand *
colombian_restaurant *
confectionery
croatian_restaurant *
cuban_restaurant *
czech_restaurant *
danish_restaurant *
deli
dessert_restaurant
dessert_shop
dim_sum_restaurant *
diner
dog_cafe
donut_shop
dumpling_restaurant *
dutch_restaurant *
eastern_european_restaurant *
ethiopian_restaurant *
european_restaurant *
falafel_restaurant *
family_restaurant *
fast_food_restaurant
filipino_restaurant *
fine_dining_restaurant
fish_and_chips_restaurant *
fondue_restaurant *
food_court
french_restaurant
fusion_restaurant *
gastropub *
german_restaurant *
greek_restaurant
gyro_restaurant *
halal_restaurant *
hamburger_restaurant
hawaiian_restaurant *
hookah_bar *
hot_dog_restaurant *
hot_dog_stand *
hot_pot_restaurant *
hungarian_restaurant *
ice_cream_shop
indian_restaurant
indonesian_restaurant
irish_pub *
irish_restaurant *
israeli_restaurant *
italian_restaurant
japanese_curry_restaurant *
japanese_izakaya_restaurant *
japanese_restaurant
juice_shop
kebab_shop *
korean_barbecue_restaurant *
korean_restaurant
latin_american_restaurant *
lebanese_restaurant
lounge_bar *
malaysian_restaurant *
meal_delivery
meal_takeaway
mediterranean_restaurant
mexican_restaurant
middle_eastern_restaurant
mongolian_barbecue_restaurant *
moroccan_restaurant *
noodle_shop *
north_indian_restaurant *
oyster_bar_restaurant *
pakistani_restaurant *
pastry_shop *
persian_restaurant *
peruvian_restaurant *
pizza_delivery *
pizza_restaurant
polish_restaurant *
portuguese_restaurant *
pub
ramen_restaurant
restaurant
romanian_restaurant *
russian_restaurant *
salad_shop *
sandwich_shop
scandinavian_restaurant *
seafood_restaurant
shawarma_restaurant *
snack_bar *
soul_food_restaurant *
soup_restaurant *
south_american_restaurant *
south_indian_restaurant *
southwestern_us_restaurant *
spanish_restaurant
sports_bar *
sri_lankan_restaurant *
steak_house
sushi_restaurant
swiss_restaurant *
taco_restaurant *
taiwanese_restaurant *
tapas_restaurant *
tea_house
tex_mex_restaurant *
thai_restaurant
tibetan_restaurant *
tonkatsu_restaurant *
turkish_restaurant
ukrainian_restaurant *
vegan_restaurant
vegetarian_restaurant
vietnamese_restaurant
western_restaurant *
wine_bar
winery *
yakiniku_restaurant *
yakitori_restaurant *
Geographical Areas
administrative_area_level_1
administrative_area_level_2
country
locality
postal_code
school_district
Government
city_hall
courthouse
embassy
fire_station
government_office
local_government_office
neighborhood_police_station (Japan only)
police
post_office
Health and Wellness
chiropractor
dental_clinic
dentist
doctor
drugstore
general_hospital *
hospital
massage
massage_spa *
medical_center *
medical_clinic *
medical_lab
pharmacy
physiotherapist
sauna
skin_care_clinic
spa
tanning_studio
wellness_center
yoga_studio
Housing
apartment_building
apartment_complex
condominium_complex
housing_complex
Lodging
bed_and_breakfast
budget_japanese_inn
campground
camping_cabin
cottage
extended_stay_hotel
farmstay
guest_house
hostel
hotel
inn
japanese_inn
lodging
mobile_home_park
motel
private_guest_room
resort_hotel
rv_park
Natural Features
beach
island *
lake *
mountain_peak *
nature_preserve *
river *
scenic_spot *
woods *
Places of Worship
buddhist_temple *
church
hindu_temple
mosque
shinto_shrine *
synagogue
Services
aircraft_rental_service *
association_or_organization *
astrologer
barber_shop
beautician
beauty_salon
body_art_service
catering_service
cemetery
chauffeur_service *
child_care_agency
consultant
courier_service
electrician
employment_agency *
florist
food_delivery
foot_care
funeral_home
hair_care
hair_salon
insurance_agency
laundry
lawyer
locksmith
makeup_artist
marketing_consultant *
moving_company
nail_salon
non_profit_organization *
painter
pet_boarding_service *
pet_care *
plumber
psychic
real_estate_agency
roofing_contractor
service *
shipping_service *
storage
summer_camp_organizer
tailor
telecommunications_service_provider
tour_agency
tourist_information_center
travel_agency
veterinary_care
Shopping
asian_grocery_store
auto_parts_store
bicycle_store
book_store
building_materials_store *
butcher_shop
cell_phone_store
clothing_store
convenience_store
cosmetics_store *
department_store
discount_store
discount_supermarket *
electronics_store
farmers_market *
flea_market *
food_store
furniture_store
garden_center *
general_store *
gift_shop
grocery_store
hardware_store
health_food_store *
home_goods_store
home_improvement_store
hypermarket *
jewelry_store
liquor_store
market
pet_store
shoe_store
shopping_mall
sporting_goods_store
sportswear_store *
store
supermarket
tea_store *
thrift_store *
toy_store *
warehouse_store
wholesaler
womens_clothing_store *
Sports
arena
athletic_field
fishing_charter
fishing_pier *
fishing_pond
fitness_center
golf_course
gym
ice_skating_rink
indoor_golf_course *
playground
race_course *
ski_resort
sports_activity_location
sports_club
sports_coaching
sports_complex
sports_school *
stadium
swimming_pool *
tennis_court *
Transportation
airport
airstrip
bike_sharing_station *
bridge *
bus_station
bus_stop
ferry_service *
ferry_terminal
heliport
international_airport
light_rail_station
park_and_ride
subway_station
taxi_service *
taxi_stand
toll_station *
train_station
train_ticket_office *
tram_stop *
transit_depot
transit_station
transit_stop *
transportation_service *
truck_stop
Table B
The Place type values in Table B may be returned as part of a Place Details (New),
Nearby Search (New),
Text Search (New), or
Autocomplete (New) response. These types are also supported
by includedPrimaryTypes for Autocomplete (New)
requests.
Additional Place type values
administrative_area_level_3
administrative_area_level_4
administrative_area_level_5
administrative_area_level_6
administrative_area_level_7
archipelago
colloquial_area
continent
establishment
finance
food
general_contractor
geocode
health
intersection
landmark
natural_feature
neighborhood
place_of_worship
plus_code
point_of_interest
political
postal_code_prefix
postal_code_suffix
postal_town
premise
route
street_address
sublocality
sublocality_level_1
sublocality_level_2
sublocality_level_3
sublocality_level_4
sublocality_level_5
subpremise
town_square
Address types and address component types
The getPlaceTypes enum in the response indicates the
address type . Examples of address types include a street address, a
country, or a political entity. The types array in
the AddressComponent class indicates the type of each part of the
address. Examples include street number or country.
Addresses may have multiple types. The types may be considered 'tags'.
For example, many cities are tagged with the political and
locality types.
The following types are supported and returned in both the
address type and address component type arrays:
Address Type
Description
street_address
A precise street address.
route
A named route (such as "US 101").
intersection
A major intersection, usually of two major roads.
political
A political entity. Usually, this type indicates a polygon of some civil administration.
country
The national political entity, and is typically the highest order type returned by the Geocoder.
administrative_area_level_1
A first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels. In most cases, administrative_area_level_1 short names will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.
administrative_area_level_2
A second-order civil entity below the country level. Within the United States, these administrative levels are counties. Not all nations exhibit these administrative levels.
administrative_area_level_3
A third-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
administrative_area_level_4
A fourth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
administrative_area_level_5
A fifth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
administrative_area_level_6
A sixth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
administrative_area_level_7
A seventh-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
colloquial_area
A commonly-used alternative name for the entity.
locality
An incorporated city or town political entity.
sublocality
A first-order civil entity below a locality. For some locations may receive one of the additional types: sublocality_level_1 to sublocality_level_5 . Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
neighborhood
A named neighborhood.
premise
A named location, usually a building or collection of buildings with a common name.
subpremise
An addressable entity below the premise level, such as an apartment, unit, or suite.
plus_code
An encoded location reference, derived from latitude and longitude. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See https://plus.codes for details.
postal_code
A postal code as used to address postal mail within the country.
natural_feature
A prominent natural feature.
airport
An airport.
park
A named park.
point_of_interest
A named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".
An empty list of types indicates there are no known types for the particular
address component (for example, Lieu-dit in France).
In addition to the above, address components may include the types listed below.
Note: This list is not exhaustive, and is
subject to change.
Address Component Type
Description
floor
The floor of a building address.
establishment
Typically a place that has not yet been categorized.
landmark
A nearby place that is used as a reference, to aid navigation.
point_of_interest
A named point of interest.
parking
A parking lot or parking structure.
post_box
A specific postal box.
postal_town
A grouping of geographic areas, such as locality and sublocality , used for mailing addresses in some countries.
room
The room of a building address.
street_number
The precise street number.
bus_station , train_station and transit_station
The location of a bus, train or public transit stop.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
