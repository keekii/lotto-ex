import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./components/HomeLayout";
import "./index.css";
import AuthLayout from "./components/AuthLayout";
import Index from "./pages/Index";
import MainLayout from "./components/MainLayout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword1 from "./pages/auth/forget-password/ForgetPassword1";
import ForgetPassword2 from "./pages/auth/forget-password/ForgetPassword2";
import ForgetPassword3 from "./pages/auth/forget-password/ForgetPassword3";
import ForgetPassword4 from "./pages/auth/forget-password/ForgetPassword4";
import SignUpForm1 from "./pages/auth/sign-up/SignUpForm1";
import SignUpForm2 from "./pages/auth/sign-up/SignUpForm2";
import SignUpForm3 from "./pages/auth/sign-up/SignUpForm3";
import SignUpForm4 from "./pages/auth/sign-up/SignUpForm4";
import SignUpForm5 from "./pages/auth/sign-up/SignUpForm5";
import MenuPage from "./pages/main/menu/MenuPage";
import HomeLayout2 from "./components/HomeLayout2";
import LottoPage from "./pages/main/lotto/LottoPage";
import HomeLayout3 from "./components/HomeLayout3";
import LottoPage2 from "./pages/main/lotto/LottoPage2";
import LottoPage3 from "./pages/main/lotto/LottoPage3";
import LottoPage4 from "./pages/main/lotto/LottoPage4";
import LottoPage5 from "./pages/main/lotto/LottoPage5";
import LottoPage6 from "./pages/main/lotto/LottoPage6";
import LottoPage7 from "./pages/main/lotto/LottoPage7";
import LottoPage8 from "./pages/main/lotto/LottoPage8";
import LottoPage9 from "./pages/main/lotto/LottoPage9";
import LottoPage10 from "./pages/main/lotto/LottoPage10";
import LottoPage11 from "./pages/main/lotto/LottoPage11";
import LottoPage12 from "./pages/main/lotto/LottoPage12";
import LottoPage13 from "./pages/main/lotto/LottoPage13";
import LottoPage14 from "./pages/main/lotto/LottoPage14";
import LottoPage15 from "./pages/main/lotto/LottoPage15";
import LottoPage16 from "./pages/main/lotto/LottoPage16";
import LottoPage17 from "./pages/main/lotto/LottoPage17";
import LottoPage18 from "./pages/main/lotto/LottoPage18";
import CreditSummaryPage from "./pages/main/credit/CreditSummaryPage";
import Credit1 from "./pages/main/credit/Credit1";
import Credit2 from "./pages/main/credit/Credit2";
import Credit3 from "./pages/main/credit/Credit3";
import Credit4 from "./pages/main/credit/Credit4";

const router: any = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainLayout />}>
			<Route element={<HomeLayout />}>
				<Route index path="/" element={<Home />} />
			</Route>

			<Route element={<HomeLayout2 />}>
				<Route path="menu" element={<MenuPage />} />
			</Route>

			<Route element={<HomeLayout3 />}>
				<Route path="lotto" element={<LottoPage />} />
				<Route path="lotto2" element={<LottoPage2 />} />
				<Route path="lotto3" element={<LottoPage3 />} />
				<Route path="lotto4" element={<LottoPage4 />} />
				<Route path="lotto5" element={<LottoPage5 />} />
				<Route path="lotto6" element={<LottoPage6 />} />
				<Route path="lotto7" element={<LottoPage7 />} />
				<Route path="lotto8" element={<LottoPage8 />} />
				<Route path="lotto9" element={<LottoPage9 />} />
				<Route path="lotto10" element={<LottoPage10 />} />
				<Route path="lotto11" element={<LottoPage11 />} />
				<Route path="lotto12" element={<LottoPage12 />} />
				<Route path="lotto13" element={<LottoPage13 />} />
				<Route path="lotto14" element={<LottoPage14 />} />
				<Route path="lotto15" element={<LottoPage15 />} />
				<Route path="lotto16" element={<LottoPage16 />} />
				<Route path="lotto17" element={<LottoPage17 />} />
				<Route path="lotto18" element={<LottoPage18 />} />

				<Route path="credits/summaries" element={<CreditSummaryPage />} />
				<Route path="credit1" element={<Credit1 />} />
				<Route path="credit2" element={<Credit2 />} />
				<Route path="credit3" element={<Credit3 />} />
				<Route path="credit4" element={<Credit4 />} />
			</Route>

			<Route element={<AuthLayout />}>
				<Route path="main" element={<Index />} />
				<Route path="login" element={<SignIn />} />

				<Route path="sign-up" element={<SignUpForm1 />} />
				<Route path="sign-up2" element={<SignUpForm2 />} />
				<Route path="sign-up3" element={<SignUpForm3 />} />
				<Route path="sign-up4" element={<SignUpForm4 />} />
				<Route path="sign-up5" element={<SignUpForm5 />} />

				<Route path="forget-password" element={<ForgetPassword1 />} />
				<Route path="forget-password/otp" element={<ForgetPassword2 />} />
				<Route path="forget-password/new-password" element={<ForgetPassword3 />} />
				<Route path="forget-password/summary" element={<ForgetPassword4 />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
