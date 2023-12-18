import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
    // @ts-ignore
 'https://bflehtseafjkwohzmynu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbGVodHNlYWZqa3dvaHpteW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MTc0OTksImV4cCI6MjAxODA5MzQ5OX0.h7tFb4XNbXNo-PfUjVYtW_BCj6IR_TI-_jrsViCZiSs'
)