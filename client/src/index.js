import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
