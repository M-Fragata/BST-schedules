import { hoursLoad } from "../form/hour-load.js"
import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js"
import { schedulesShow } from "./show.js"


//Seleciona o input de data
const selectedDate = document.querySelector('#date')

export async function schedulesDay() {

    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    schedulesShow({ dailySchedules })

    // Renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules })
}

