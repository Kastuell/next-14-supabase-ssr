"use client"

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";

export default function OAuthForm() {

	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	)


	const LoginWithGitHub = () => {
		supabase.auth.signInWithOAuth({
			provider: 'github',
			options:{
				redirectTo:`${location.origin}/auth-server-action/callback`
			}
		})
	}

	return <Button className="w-full" onClick={LoginWithGitHub}>Login With Github</Button>;
}
