# Websocket_Project
<!-- The app has 2 pages underlyings and derivatives
Underlyings Page
Derivatives Page
    A rough sketch of the expected view shown under Screenshots -> Underlyings Page Show a list of underlyings fetched from an API.
Subscribe to the prices of each underlying using websockets.
Show a button which on click, navigates to derivatives page for that underlying
Derivatives Page
A rough sketch of the expected view shown under Screenshots -> Derivatives Page Load derivatives from an API based on the selected underlying.
Subscribe to the prices of each derivative using websockets and display in ui
Requirements
Poll underlyings api every 10 minutes.
Poll derivatives api every 30 seconds.
Only subscribe to a underlying or derivative price when present on the page. i.e unsubscribe when navigating away.
Handle websocket disconnects and re-connections. -->