import { supabaseConfig } from "./api-config.js"
import { supabase } from "../supabase-cliente.js";

export async function scheduleCancel({ id }) {

    const {data, error} = await supabase
        .from('schedules')
        .delete()
        .eq('id', id)
    
    if(error) {
        console.error('Erro ao cancelar agendamento no Supabase', error.message)
        throw new Error ('Não foi possível cancelar o agendamento.')
    }

    /*
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })
        console.log(id)

        alert("Agendamento cancelado com sucesso!")

    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento.")
    }
        */
}