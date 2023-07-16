
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://omznsctbhdxpwaoxyyck.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tem5zY3RiaGR4cHdhb3h5eWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjQ2MTgsImV4cCI6MjAwMjgwMDYxOH0.Hg0iDccCWBoiWa0RZ72BSw22OvtWutNJT4o3jyMz_7c'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
