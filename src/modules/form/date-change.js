import { schedulesDay } from "../schedules/load.js"

// Selecionar o input de data

const selectedDate = document.querySelector('input#date')

// Recarregar a lista de horários quando o input de data mudar

selectedDate.addEventListener('change', () => {
    schedulesDay()
})