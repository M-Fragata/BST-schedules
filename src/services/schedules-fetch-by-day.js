import { supabase } from "../supabase-cliente.js";
import dayjs from "dayjs"


export async function scheduleFetchByDay({ date }) {

    

        const startOfDay = dayjs(date).startOf('day').toISOString()
        const endOfDay = dayjs(date).endOf('day').toISOString()
    
        const { data, error } = await supabase
        .from('schedules')
        .select('*')//Exibe todas as colunas (id, name, when)
        .gte('when', startOfDay) // Maior ou igual ao início do dia
        .lte('when', endOfDay) // Menor ou igual ao final do dia
        .order('when')



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