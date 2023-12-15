import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";


const getDoctors = async (): Promise<any> => {
    const cookieStore = cookies()
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {              
            cookies: {
                get(name: string) {
                  return cookieStore.get(name)?.value
                },
              },
        
    });

    const { data, error } = await supabase
        .from('doctor')
        .select('*')
        .order('created_at', { ascending: false})

        if (error) { 
            console.log(error);
        }

        return (data as any) || [];
}

export default getDoctors;