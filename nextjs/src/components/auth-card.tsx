"use client";
import { SignInForm } from "./auth/sign-in-form";
import { SignUpForm } from "./auth/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "reactfire";

export const AuthCard = () => {
  const [isShowingSignUp, setIsShowingSignUp] = useState<boolean>(false);
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [user]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{isShowingSignUp ? "Sign Up" : "Sign In"}</CardTitle>
          <CardDescription>
            Give them a reason to {isShowingSignUp ? "sign up" : "sign in"}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isShowingSignUp ? (
            <SignUpForm onShowLogin={() => setIsShowingSignUp(false)} />
          ) : (
            <SignInForm onShowSignUp={() => setIsShowingSignUp(true)} />
          )}
        </CardContent>
      </Card>
    </>
  );
};
