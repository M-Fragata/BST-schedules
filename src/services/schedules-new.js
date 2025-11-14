import { supabaseConfig } from "./api-config.js";
import { supabase } from "../supabase-cliente.js";


export async function scheduleNew({ name, when }) {
    const { data, error } = await supabase
        .from('schedules')
        .insert({
            //id: id,
            name: name,
            when: when,
        })
        .select()
    
    if(error) {
        console.error('Erro ao criar agendamento no Supabase', error.message)
        throw new Error ('Não foi possível salvar o agendamento.')
    }
    
    return data



    /*
    try {
        // Requisição para enviar (post) os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        alert("Agendamento bem-sucedido")

    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar, tente novamente mais tarde.")
    }
        */
}