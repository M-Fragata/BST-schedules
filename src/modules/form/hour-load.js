import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours.click.js"

const ul = document.querySelector('ul#hours')

console.log('Elemento UL', ul)
console.log('Horários funcionando?', openingHours)

export function hoursLoad({ date, dailySchedules }) {

    if(!ul){
        console.error("ERRO FATAL: Elemento ul com id='hours' não encontrado no html" )
        return
    }

    // Limpa a lista de horários
    ul.innerHTML = ""

    // Obtém a lista de horários ocupados.
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        // Recuperar somente a hora
        const [scheduleHour] = hour.split(":")

        //Adiciona a hora na date e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        
        // Define um limite de quantos agendamentos podem ser feito por horário
        const limite = 4
        // Verifica se o limite de agendamentos no horário foi atingido utilizando o filter
        const isAvaiableCount = unavailableHours.filter(item => item === hour).length < limite

        // Verifica se o horário ainda está disponivel utilizando duas condições, se o horário não está no passado e se possui menos de 4 agendamentos.
       const available = isAvaiableCount && !isHourPast

        return{
            hour,
            available
        }
    })

    // Renderizar os horários.
    opening.forEach(({ hour,  available}) => {

        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "08:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "14:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        ul.append(li)

    })

//Adiciona o evento de clique nos horários disponíveis
hoursClick()
}


function hourHeaderAdd(title){
    const header = document.createElement('li')
    header.classList.add("hour-period")
    header.textContent = title

    ul.append(header)
}

