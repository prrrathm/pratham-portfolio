// components/layout/Layout.tsx
import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import { ThemeProvider } from "next-themes";
const Layout = (props: PropsWithChildren) => {
	return (
		<ThemeProvider enableSystem={false} attribute="class">
			<Navbar />
			{props.children}
		</ThemeProvider>
	);
};

export default Layout;
