import { isArray } from "@/utils";
import { useState } from "react";
import { ConfigProvider, DatePicker, Button } from "antd";
import "./app.css";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";

dayjs.locale("zh-cn");

const App = () => {
	const [arr] = useState([1, 2, 3]);
	// 偏偏不是log
	// 偏偏不是log
	// 偏偏不是log
	// 偏偏不是log
	// 偏偏不是log
	// 偏偏不是log
	const handleChange = (date: any) => {
		console.log(date);
	};
	// 偏偏不是log// 偏偏不是log// 偏偏不是log// 偏偏不是log
	// 偏偏不是log// 偏偏不是log// 偏偏不是log// 偏偏不是log
	// 偏偏不是log// 偏偏不是log// 偏偏不是log// 偏偏不是log
	return (
		<ConfigProvider locale={zhCN}>
			<div>
				<Button type="primary">按钮</Button>
				<DatePicker onChange={handleChange} />
				{isArray(arr) && arr.map((item) => <div key={item}>{item}</div>)}
			</div>
		</ConfigProvider>
	);
};

export default App;
