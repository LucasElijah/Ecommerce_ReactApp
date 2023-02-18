import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { cart } from "./redux/store";
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={cart}>
			<App />
		</Provider>
	</React.StrictMode>
);
