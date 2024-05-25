"use client";

import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FC, useState } from "react";
import { useAuth } from "reactfire";

interface Props {
  onSignIn?: () => void;
}

export const ProviderLoginButtons: FC<Props> = ({ onSignIn }) => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const doProviderSignIn = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({ title: "Signed in!" });
      onSignIn?.();
    } catch (err: any) {
      console.error(err);
      toast({ title: "Error signing in", description: `${err}` });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button className="w-full" disabled={isLoading} onClick={doProviderSignIn}>
      Sign in with Google
    </Button>
  );
};
