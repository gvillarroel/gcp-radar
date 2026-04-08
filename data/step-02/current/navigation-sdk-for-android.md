# Navigation SDK for Android

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 43
Unique features: 41

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-16 | Arrival triggering |  | Improves arrival triggering to detect destination arrival more accurately and consistently. |
| 2026-02-13 | Enhanced location context for Waypoint API |  | Allows providing enhanced location context to the Waypoint API using a Place ID and coordinates or a navigationPointToken. |
| 2025-11-24 | 3D buildings in turn-by-turn navigation |  | Displays 3D building polygons during turn-by-turn navigation when available. |
| 2025-11-24 | Narrow road callouts |  | Shows narrow road callouts on driving navigation routes when available. |
| 2025-11-24 | Railroad crossing callouts |  | Shows railroad crossing callouts on navigation routes in the US and Canada. |
| 2025-11-24 | Route-aware road label decluttering |  | Uses the current route context to hide low-priority road labels that do not intersect the route during turn-by-turn navigation. |
| 2025-11-24 | Unpaved road callouts |  | Shows unpaved road callouts on driving navigation routes in the US, Canada, and Sweden. |
| 2025-10-16 | GpsAvailabilityEnhancedLocationListener.onGpsAvailabilityUpdate callback | 2025-10-16 | The onGpsAvailabilityUpdate callback in GpsAvailabilityEnhancedLocationListener is deprecated in favor of onGpsAvailabilityChange; deprecated on 2025-10-16. |
| 2025-10-13 | Navigation voice guidance stop sign references |  | References stop signs in navigation voice guidance when describing upcoming maneuvers in the US, Japan, and Sweden. |
| 2025-09-24 | Cloud-based maps styling for navigation and road maps |  | Lets you style both the navigation map and road map with reusable styles associated with Map IDs. |
| 2025-09-24 | DisplayOptions.showStopSigns API | 2025-09-24 | DisplayOptions.showStopSigns is deprecated and now defaults to true; deprecated on 2025-09-24. |
| 2025-09-24 | DisplayOptions.showTrafficLights API | 2025-09-24 | DisplayOptions.showTrafficLights is deprecated and now defaults to true; deprecated on 2025-09-24. |
| 2025-09-24 | Road closure callouts on alternate routes |  | Adds road closure callouts to alternate routes as well as the current route. |
| 2025-06-25 | Destination and entrance highlighting |  | Visual highlighting is added to destination buildings created with a place ID to help users identify and navigate to the intended destination. |
| 2025-06-25 | Incident reporting panel APIs |  | New APIs let apps check whether incident reporting is available and open the incident reporting panel programmatically. |
| 2025-06-25 | Route-relevant orientation landmark POIs |  | Prominent landmark points of interest are shown by default along routes and near key intersections where maneuvers are required. |
| 2025-04-01 | Prompt Visibility API |  | The Prompt Visibility API helps avoid conflicts between SDK-generated UI elements and custom UI elements. |
| 2025-04-01 | Real-time disruptions |  | The SDK can alert users about disruptions along their route and let them report and verify disruptions. |
| 2025-04-01 | Turn card design update |  | The default turn card header, footer, and height behavior were updated to match the Google Maps app. |
| 2025-02-11 | Road Level Details |  | The map includes detailed road features such as crosswalks, sidewalks, and lane markings in select metropolitan areas. |
| 2025-02-04 | Traffic-light-aware voice guidance |  | Navigation voice guidance now references traffic lights when describing upcoming maneuvers. |
| 2025-01-21 | Custom control footer position |  | The setCustomControl method now supports placing a custom control in the footer position; The setCustomControl method now supports placing a custom control in the footer position. |
| 2024-09-13 | Consecutive duplicate destination waypoints | 2024-09-13 | The SDK allowed the navigator to be given the same destination waypoint more than once in a row; deprecated on 2024-09-13. |
| 2024-09-13 | Destination request quota tracking persistence |  | Quota tracking for destination requests persists when an app is restarted; Quota tracking for destination requests persists when an app is restarted. |
| 2024-09-13 | MAP_TYPE_TERRAIN navigation map type | 2024-09-13 | Using MAP_TYPE_TERRAIN during navigation is deprecated; deprecated on 2024-09-13. |
| 2024-09-13 | navigator.fetchRouteInfo() | 2024-09-13 | The navigator.fetchRouteInfo() method retrieved route information for Mobility Services customers; deprecated on 2024-09-13. |
| 2024-08-06 | Map color scheme selection |  | Developers can set the map color scheme to dark, light, or system default. |
| 2024-08-06 | Turn and ETA navigation card header layout |  | The turn and ETA navigation card headers now use half the screen width in landscape orientation. |
| 2024-06-18 | Guidance rendering performance |  | Rendering performance during guidance has been improved. |
| 2024-06-18 | RouteChangedListener trigger events |  | RouteChangedListener now fires after route generation, after an alternative route is selected before navigation starts, and after a route is cleared. |
| 2024-05-03 | Traffic light and stop sign route icons |  | Traffic light and stop sign icons can now appear along the route in additional supported countries. |
| 2023-11-02 | AdvancedMarker.addMarker(AdvancedMarkerOptions) | 2023-11-02 | The AdvancedMarker addMarker(AdvancedMarkerOptions) method added an advanced marker to the map; deprecated on 2023-11-02. |
| 2023-11-02 | Guidance notifications disable on app dismissal |  | Guidance notifications can be disabled and the app and background services can shut down when the user swipes away the app from recent tasks. |
| 2023-07-06 | Maneuver and lane icons |  | Maneuver and lane icons use the latest Material Design style. |
| 2023-07-06 | Map background color while tiles load |  | GoogleMapOptions supports setting the map background color while map tiles are loading. |
| 2023-07-06 | My Location button enabled setting |  | The NavSDK supports the UiSettings control for enabling or disabling the My Location button. |
| 2023-01-18 | Android Auto support |  | The SDK supports driver-optimized navigation experiences in Android Auto. |
| 2022-10-25 | Alternate route preview and selection |  | The SDK supports previewing alternate routes before navigation and choosing how many are shown. |
| 2022-10-25 | NavigationMapStyle API | 2022-10-25 | The NavigationMapStyle API controls the app's default map view style; deprecated on 2022-10-25. |
| 2022-10-25 | NavigationMapStyle DEFAULT and HIGH_DETAIL constants | 2022-10-25 | The DEFAULT and HIGH_DETAIL constants switch the app's default map view between simple and detailed styles; deprecated on 2022-10-25. |
| 2022-10-25 | Traffic light and stop sign display |  | The SDK can display traffic lights and stop signs during navigation. |

Source file slug: `navigation-sdk-for-android.md`

