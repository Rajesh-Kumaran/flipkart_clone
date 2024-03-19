import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://rusvzacqjkwpifvjjglv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1c3Z6YWNxamt3cGlmdmpqZ2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MjkyOTYsImV4cCI6MjAyMjAwNTI5Nn0._ZdJdP5V4m0Ymfe2ZBpoQdGvyZBl9AqTX4oVIeXjyJM"
);

export default supabase