import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://cisjjwpuhifurlweybve.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpc2pqd3B1aGlmdXJsd2V5YnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTU2NzcsImV4cCI6MTk5MzEzMTY3N30.vgiJMTb-qOYO_hrxkbd5CD6UnX-b812WGjigqNRVqC4'

export const supabase = createClient(supabaseUrl, supabaseKey)