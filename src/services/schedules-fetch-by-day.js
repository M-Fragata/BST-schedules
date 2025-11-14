import { supabaseConfig } from "./api-config.js"
import { supabase } from "../supabase-cliente.js";
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }) {


        const { data, error } = await supabase
        .from('schedules')
        .select('*')//Exibe todas as colunas (id, name, when)
        //.order('when', { ascending: true})
        //.like('when', `${date}%`)
        

        if(error) {
            console.error('Error ao buscar agendamentos no Supabase', error.message)
            throw new Error('Não foi possíve carregar os agendamentos.')
        }

        return data

        /*
        try {
        // Requisitando a data
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON
        const data = await response.json()

        // Filtra os agendamentos pelo dia selecionado.
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
        

    } catch (error) {
        console.log(error)
        alert("Não possível buscar os agendamentos do dia selecionado")
    } */
}