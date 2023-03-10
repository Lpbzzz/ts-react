import ReactDOM from "react-dom/client";

import App from "./App";

const RootElement = document.getElementById("root");

const root = ReactDOM.createRoot(RootElement as HTMLElement);

root.render(<App />);

if (module?.hot) {
	module?.hot.accept();
}
