import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './services/api-config.js';

console.log("Configuração Supabase LIDA:", supabaseConfig);

export const supabase = createClient(
    supabaseConfig.url, supabaseConfig.anonkey
);

